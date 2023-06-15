import * as yup from 'yup';

export const scenarioValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  organization_id: yup.string().nullable().required(),
});
