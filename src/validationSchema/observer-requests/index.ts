import * as yup from 'yup';

export const observerRequestValidationSchema = yup.object().shape({
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  drill_id: yup.string().nullable().required(),
});
