import { useContext } from 'react';
import { AuthContext } from '../../../context';

// Login.tsx
const LoginPage = () => {
  const { login } = useContext(AuthContext);
  return (
    <div>
      <h1>This is the Login Page</h1>

      <button onClick={() => login({ username: 'test' })}>Login</button>
    </div>
  );
};

export default LoginPage;
