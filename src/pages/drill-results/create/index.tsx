import AppLayout from 'layout/app-layout';
import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberInput,
} from '@chakra-ui/react';
import { useFormik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import { FiEdit3 } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { createDrillResult } from 'apiSdk/drill-results';
import { Error } from 'components/error';
import { drillResultValidationSchema } from 'validationSchema/drill-results';
import { AsyncSelect } from 'components/async-select';
import { ArrayFormField } from 'components/array-form-field';
import { AccessOperationEnum, AccessServiceEnum, withAuthorization } from '@roq/nextjs';
import { DrillInterface } from 'interfaces/drill';
import { UserInterface } from 'interfaces/user';
import { getDrills } from 'apiSdk/drills';
import { getUsers } from 'apiSdk/users';
import { DrillResultInterface } from 'interfaces/drill-result';

function DrillResultCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: DrillResultInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createDrillResult(values);
      resetForm();
      router.push('/drill-results');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<DrillResultInterface>({
    initialValues: {
      performance: '',
      drill_id: (router.query.drill_id as string) ?? null,
      evaluator_id: (router.query.evaluator_id as string) ?? null,
    },
    validationSchema: drillResultValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout>
      <Box bg="white" p={4} rounded="md" shadow="md">
        <Box mb={4}>
          <Text as="h1" fontSize="2xl" fontWeight="bold">
            Create Drill Result
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <form onSubmit={formik.handleSubmit}>
          <FormControl id="performance" mb="4" isInvalid={!!formik.errors?.performance}>
            <FormLabel>Performance</FormLabel>
            <Input type="text" name="performance" value={formik.values?.performance} onChange={formik.handleChange} />
            {formik.errors.performance && <FormErrorMessage>{formik.errors?.performance}</FormErrorMessage>}
          </FormControl>
          <AsyncSelect<DrillInterface>
            formik={formik}
            name={'drill_id'}
            label={'Select Drill'}
            placeholder={'Select Drill'}
            fetcher={getDrills}
            renderOption={(record) => (
              <option key={record.id} value={record.id}>
                {record?.name}
              </option>
            )}
          />
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'evaluator_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            renderOption={(record) => (
              <option key={record.id} value={record.id}>
                {record?.email}
              </option>
            )}
          />
          <Button isDisabled={formik?.isSubmitting} colorScheme="blue" type="submit" mr="4">
            Submit
          </Button>
        </form>
      </Box>
    </AppLayout>
  );
}

export default withAuthorization({
  service: AccessServiceEnum.PROJECT,
  entity: 'drill_result',
  operation: AccessOperationEnum.CREATE,
})(DrillResultCreatePage);
