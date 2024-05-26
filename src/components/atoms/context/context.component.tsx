import { FC } from 'react';
import UserProvider from '../../../contexts/user.context';

interface ContextProps {
  children: React.ReactNode;
}

const Context: FC<ContextProps> = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Context;
