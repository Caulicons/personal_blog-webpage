import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { UserInfoSchema } from '../schemas/user/userContext.schema';
import { useNavigate } from 'react-router-dom';
import { validatingToken } from '../services/auth/validToken.service';

export type UserContextSchema = {
  user: UserInfoSchema;
  isAuthenticated: boolean;
  update: (user: UserInfoSchema) => void;
  logOut: () => void;
  isLoading: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const emptyUser: UserInfoSchema = {
  id: 0,
  username: '',
  email: '',
  type: '',
  photo: '',
  posts: [],
};

export const UserContext = React.createContext<UserContextSchema | null>(null);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    checkingToken();
  }, []);

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = React.useState<UserInfoSchema>(emptyUser);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  async function checkingToken() {
    setIsLoading(true);

    const token = Cookies.get('token');
    async function checkingToken(token: string) {
      if (await validatingToken(token)) {
        const user = await validatingToken(token);
        if (!user) setIsAuthenticated(false);
        else {
          setIsAuthenticated(true);
          setUser(user);
        }
      }
    }

    if (!token) setIsAuthenticated(false);
    else checkingToken(token);
    setIsLoading(false);
  }

  function logOut() {
    setUser(emptyUser);
    Cookies.remove('token');
    setIsAuthenticated(false);
    navigate('/');
  }

  function update(user: (Partial<UserInfoSchema> & { id: number }) | null) {
    if (user?.id)
      return setUser((oldInfo) => ({
        ...oldInfo,
        ...user,
      }));

    setUser(emptyUser);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        logOut,
        update,
        isLoading,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
