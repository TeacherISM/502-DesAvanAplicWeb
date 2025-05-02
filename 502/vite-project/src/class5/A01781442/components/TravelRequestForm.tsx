import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../../../class2/A01784008/components/Button';

const travelRequestSchema = Yup.object().shape({
  destination: Yup.string().required('Destination is required'),
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date()
    .required('End date is required')
    .min(Yup.ref('startDate'), 'End date must be after start date'),
  purpose: Yup.string().required('Purpose is required'),
});

const TravelRequestForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ destination: '', startDate: '', endDate: '', purpose: '' }}
      validationSchema={travelRequestSchema}
      onSubmit={(values) => {
        console.log('Travel Request:', values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="form-section">
          <h2>Travel Request Form</h2>

          <div className="mb-4">
            <Field
              type="text"
              name="destination"
              placeholder="Destination"
              className={`p-2 border rounded w-full ${errors.destination && touched.destination ? 'border-red-500' : 'border-gray-300'}`}
            />
            <ErrorMessage name="destination" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <Field
              type="date"
              name="startDate"
              placeholder="Start Date"
              className={`p-2 border rounded w-full ${errors.startDate && touched.startDate ? 'border-red-500' : 'border-gray-300'}`}
            />
            <ErrorMessage name="startDate" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <Field
              type="date"
              name="endDate"
              placeholder="End Date"
              className={`p-2 border rounded w-full ${errors.endDate && touched.endDate ? 'border-red-500' : 'border-gray-300'}`}
            />
            <ErrorMessage name="endDate" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <Field
              as="textarea"
              name="purpose"
              placeholder="Purpose"
              className={`p-2 border rounded w-full ${errors.purpose && touched.purpose ? 'border-red-500' : 'border-gray-300'}`}
            />
            <ErrorMessage name="purpose" component="div" className="text-red-500" />
          </div>

          <Button label="Submit" type="submit" />
        </Form>
      )}
    </Formik>
  );
};

export default TravelRequestForm;