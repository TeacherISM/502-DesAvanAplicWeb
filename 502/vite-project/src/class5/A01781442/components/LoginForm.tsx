import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Button from '../../../class2/A01784008/components/Button';
import  '../../../class2/A01784008/App'
import './LoginForm.css';

const loginSchema = Yup.object().shape({
  usuario: Yup.string().required('Usuario requerido'),
  contrasena: Yup.string().required('Contraseña requerida'),
});

export default function LoginForm() {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ usuario: '', contrasena: '' }}
      validationSchema={loginSchema}
      onSubmit={(values, { setSubmitting, setFieldError }) => {
        setSubmitting(true);

        setTimeout(() => {
          if (values.usuario === 'ivan' && values.contrasena === 'admin') {
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/dashboard');
          } else {
            setFieldError('contrasena', 'Credenciales incorrectas');
          }
          setSubmitting(false);
        }, 1500);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="form2">
          <div >
            <Field
              type="text"
              name="usuario"
              placeholder="Usuario"
              className={`p-2 border rounded w-full ${errors.usuario && touched.usuario ? 'border-red-500' : 'border-gray-300'}`}
            />
            <ErrorMessage name="usuario" component="div" className="text-red-500" />
          </div>

          <div >
            <Field
              type="password"
              name="contrasena"
              placeholder="Contraseña"
              className={`p-2 border rounded w-full ${errors.contrasena && touched.contrasena ? 'border-red-500' : 'border-gray-300'}`}
            />
            <ErrorMessage name="contrasena" component="div" className="text-red-500" />
          </div>

          {isSubmitting && <p className="loading">Procesando login...</p>}

          <Button label="Ingresar" type="submit" />
        </Form>
      )}
    </Formik>
  );
}

