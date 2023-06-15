import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { scenarioValidationSchema } from 'validationSchema/scenarios';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.scenario
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getScenarioById();
    case 'PUT':
      return updateScenarioById();
    case 'DELETE':
      return deleteScenarioById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getScenarioById() {
    const data = await prisma.scenario.findFirst(convertQueryToPrismaUtil(req.query, 'scenario'));
    return res.status(200).json(data);
  }

  async function updateScenarioById() {
    await scenarioValidationSchema.validate(req.body);
    const data = await prisma.scenario.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteScenarioById() {
    const data = await prisma.scenario.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
