import * as yup from 'yup';

export const drillResultValidationSchema = yup.object().shape({
  performance: yup.string().required(),
  drill_id: yup.string().nullable().required(),
  evaluator_id: yup.string().nullable().required(),
});
