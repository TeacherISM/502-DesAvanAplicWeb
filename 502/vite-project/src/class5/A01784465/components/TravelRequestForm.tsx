import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const travelRequestSchema = Yup.object().shape({
  destination: Yup.string().required('Destination is required'),
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date()
    .required('End date is required')
    .min(Yup.ref('startDate'), 'End date must be after start date'),
  purpose: Yup.string().required('Purpose is required')
})

const TravelRequestForm = () => {
  const handleSubmit = (values: any) => {
    console.log('Travel Request:', values)
  }

  return (
    <div className="form-container">
      <h1>Travel Request Form</h1>
      <Formik
        initialValues={{ destination: '', startDate: '', endDate: '', purpose: '' }}
        validationSchema={travelRequestSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <Field type="text" name="destination" placeholder="Destination" className="input" />
              <ErrorMessage name="destination" component="div" className="error" />
            </div>
            <div>
              <Field type="date" name="startDate" placeholder="Start Date" className="input" />
              <ErrorMessage name="startDate" component="div" className="error" />
            </div>
            <div>
              <Field type="date" name="endDate" placeholder="End Date" className="input" />
              <ErrorMessage name="endDate" component="div" className="error" />
            </div>
            <div>
              <Field as="textarea" name="purpose" placeholder="Purpose" className="input" />
              <ErrorMessage name="purpose" component="div" className="error" />
            </div>
            <button type="submit" className="button">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default TravelRequestForm