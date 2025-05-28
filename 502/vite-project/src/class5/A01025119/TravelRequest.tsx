import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputField from '../../class2/A01025119/Input.tsx';
import Button from '../../class2/A01025119/Button.tsx';
import '../../class2/A01025119/travel_design.css';

// Define the validation schema
const TravelRequestSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  destination: Yup.string().required('Destination is required'),
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date()
    .min(Yup.ref('startDate'), 'End date cannot be before start date')
    .required('End date is required'),
  purpose: Yup.string().required('Purpose is required'),
});

const TravelRequest: React.FC = () => {
  return (
    <div className="main-container">
      <div className="form-container">
        <h1>Travel Request Form</h1>

        <Formik
          initialValues={{
            email: '',
            destination: '',
            startDate: '',
            endDate: '',
            purpose: '',
          }}
          validationSchema={TravelRequestSchema}
          onSubmit={(values) => {
            console.log('Travel Request:', values);
            alert('Travel request submitted!');
          }}
        >
          {({ values, handleChange }) => (
            <Form>
              {/* Email Field */}
              <div>
                <InputField
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>

              {/* Destination Field */}
              <div>
                <InputField
                  type="text"
                  name="destination"
                  placeholder="Destination"
                  value={values.destination}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="destination"
                  component="div"
                  className="error-message"
                />
              </div>

              {/* Start Date Field */}
              <div>
                <InputField
                  type="date"
                  name="startDate"
                  placeholder="Start Date"
                  value={values.startDate}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="startDate"
                  component="div"
                  className="error-message"
                />
              </div>

              {/* End Date Field */}
              <div>
                <InputField
                  type="date"
                  name="endDate"
                  placeholder="End Date"
                  value={values.endDate}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="endDate"
                  component="div"
                  className="error-message"
                />
              </div>

              {/* Purpose Field */}
              <div>
                <Field
                  as="textarea"
                  className="form-input"
                  name="purpose"
                  placeholder="Purpose"
                />
                <ErrorMessage
                  name="purpose"
                  component="div"
                  className="error-message"
                />
              </div>

              {/* Submit Button */}
              <Button label="Submit" type="submit" />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default TravelRequest;