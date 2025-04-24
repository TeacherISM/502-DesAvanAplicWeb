import { useState } from 'react'
import InputField from './InputField';
import Button from './Button';

const Login = () => {

    const [user, setUser] = useState({
        username: '',
        password: ''
      });
    
      //fucnion que actualizar el artibuto de usuario segun el nombre del input
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
        setUser({
          ...user,
          [e.target.name]: e.target.value
        });
      }
      
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user); 
      }
  return (
    <>
    <h1>Login page</h1>
    <form onSubmit={handleSubmit}>
     <InputField label='Username' name='username' type='text' handleChange={handleChange}/>
     <InputField label='Password' name='password' type='password' handleChange={handleChange}/>
     <Button type="submit" label="Submit"/>
    </form>

    
    </>

  )
}

export default Login;