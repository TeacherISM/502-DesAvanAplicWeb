import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import InputField from '../components/InputField'
import Button from '../components/Button'

interface LoginProps {
  onLogin: () => void
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const loginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required').min(6, 'Minimum 6 characters')
  })

  return (
    <div className="login-container">
      <h1>Login</h1>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          setTimeout(() => {
            if (values.username === 'admin' && values.password === 'password') {
              localStorage.setItem('auth', 'true')
              onLogin()
            } else {
              setFieldError('username', 'Invalid credentials')
              setFieldError('password', ' ')
            }
            setSubmitting(false)
          }, 1000)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field name="username">
                {({ field }: any) => (
                  <InputField type="text" placeholder="Username" {...field} />
                )}
              </Field>
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            <div>
              <Field name="password">
                {({ field }: any) => (
                  <InputField type="password" placeholder="Password" {...field} />
                )}
              </Field>
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <Button label={isSubmitting ? 'Loading...' : 'Submit'} onClick={() => {}} />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login
