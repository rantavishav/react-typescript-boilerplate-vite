import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../../context';

interface IUserLayoutProps {
  children: React.ReactNode;
}

const UserLayout = ({ children }: IUserLayoutProps) => {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <nav>
        <Link to='/dashboard/settings'>Settings</Link>
        <Link to='/dashboard/profile'>Profile</Link>
      </nav>
      {children}

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default UserLayout;
