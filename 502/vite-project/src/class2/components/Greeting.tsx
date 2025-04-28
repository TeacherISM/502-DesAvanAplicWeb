interface GreetingProps {
    email: string;
  }
  
  const Greeting = ({ email }: GreetingProps) => (
    <h1 style={{
      fontSize: '1.75rem',
      color: '#0f172a',
      fontWeight: 'bold',
      borderBottom: '3px solid #3b82f6',
      paddingBottom: '0.5rem',
      marginBottom: '1.5rem',
      textAlign: 'center'
    }}>
      Bienvenida, {email}
    </h1>
  );
  
  export default Greeting;
  