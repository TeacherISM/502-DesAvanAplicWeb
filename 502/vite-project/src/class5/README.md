# Form Handling in React

## 2. Introduction to Form Handling (0:10 - 0:30)

### Controlled vs Uncontrolled Components

| Feature               | Controlled Components                          | Uncontrolled Components                |
|-----------------------|-----------------------------------------------|----------------------------------------|
| **Data Handling**     | Managed by React state                        | Managed by DOM                         |
| **Value Access**      | Via state variable                            | Via refs                               |
| **Updates**           | Through `onChange` handlers                   | Direct DOM manipulation                |
| **React Philosophy**  | Preferred approach                            | Used for integration with non-React code |
| **Form Submission**   | State contains current values                 | Need to query DOM on submission        |

### Controlled Component Example with `useState`

```jsx
import { useState } from 'react';

function SimpleForm() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted value: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

**Key Points:**
1. The input value is bound to React state (`inputValue`)
2. Changes update state via `onChange`
3. Form submission uses the current state value

---

## 4. Introduction to Form Validation (0:50 - 1:10)

### Why Validate Forms?
- Ensure data integrity before submission
- Improve user experience with immediate feedback
- Prevent invalid API requests
- Enhance security by sanitizing inputs

### Validation Libraries Overview

#### Formik
A popular library that helps with:
- Form state management
- Submission handling
- Error messages
- Touched/dirty state tracking

#### Yup
A schema validation library often paired with Formik that provides:
- Declarative validation rules
- Complex validation schemas
- Custom validation messages
- Object shape validation

### Formik + Yup Example

```jsx
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Required')
});

function LoginForm() {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
}
```

### Key Validation Features Demonstrated:
1. Schema-based validation with Yup
2. Form state management with Formik
3. Touched state tracking (only show errors after field interaction)
4. Conditional error rendering
5. Form submission handling

### Basic Validation Without Libraries

```jsx
function SimpleValidation() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (value) => {
    if (!value.includes('@')) {
      setError('Please enter a valid email');
    } else {
      setError('');
    }
  };

  const handleBlur = () => {
    validateEmail(email);
  };

  return (
    <form>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={handleBlur}
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
}
```

**When to Use Libraries vs Native:**
- Simple forms: Native validation may suffice
- Complex forms: Formik/Yup will save development time
- Enterprise applications: Consider form libraries for maintainability
