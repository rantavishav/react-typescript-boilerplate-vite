import { Link } from 'react-router-dom';

interface IGuestLayoutProps {
  children: React.ReactNode;
}

const GuestLayout = ({ children }: IGuestLayoutProps) => {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
      </nav>
      {children}
    </div>
  );
};
export default GuestLayout;
