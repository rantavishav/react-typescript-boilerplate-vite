import { createContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IAuthContext {
  user: any;
  // eslint-disable-next-line no-unused-vars
  login: (data: React.SetStateAction<any>) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // @TODO: We need to setup the user storage other than localStorage, where we plan to read/write/update/delete the user login info.
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  // @TODO: We need to define the exact type to the parameter "data" as per the data we will save other than 'any'.
  const login = async (data: React.SetStateAction<any>) => {
    setUser(data);
    navigate('/profile');
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
