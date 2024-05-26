/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect } from 'react';
import { UserContext, UserContextSchema } from '../../../contexts/user.context';

/* In the old react docs he said that "Higher-order components are not commonly used in modern React code", but how i can resolve this session question that other way   */
const loggedOnly = (WrappedComponent: React.ComponentType<any>) => {
  const CheckToken = (props: any) => {
    const { isAuthenticated, logOut } = useContext(
      UserContext,
    ) as UserContextSchema;

    useEffect(() => {
      if (!isAuthenticated) logOut();
    }, [logOut, isAuthenticated]);

    return <WrappedComponent {...props} />;
  };

  CheckToken.displayName = `LoggedOnly`;
  return CheckToken;
};

export default loggedOnly;
