import * as yup from 'yup';

export const drillValidationSchema = yup.object().shape({
  name: yup.string().required(),
  date: yup.date().required(),
  scenario_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
