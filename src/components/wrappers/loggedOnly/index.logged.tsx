/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FunctionComponent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { isValidToken } from '../../../services/auth';

type WrappedComponentProps = any;

const loggedOnly = (WrappedComponent: React.ComponentType<any>) => {
  const CheckToken: FunctionComponent<WrappedComponentProps> = (props) => {
    const navigate = useNavigate();
    const token = Cookies.get('token');
    useEffect(() => {
      async function checkingToken(token: string) {
        if (!(await isValidToken(token))) navigate('login');
      }

      if (!token) navigate('/login');
      else checkingToken(token);
    }, [navigate, token]);

    WrappedComponent.displayName = 'AuthCheckToken';
    return <WrappedComponent {...props} />;
  };

  CheckToken.displayName = 'CheckToken';
  return CheckToken;
};

export default loggedOnly;

/* export function loggedOnly<P>(WrappedComponent: React.ComponentType<P>) {
  const CheckToken = (props: any) => {
    const navigate = useNavigate();
    useEffect(() => {
      const token = Cookies.get('token');
      async function checkingToken(token: string) {
        const isValid = await isValidToken(token);
        if (!isValid) navigate('/login');
      }
      if (!token) navigate('/login');
      else checkingToken(token);
    }, [navigate]);
    return <WrappedComponent {...props} />;
  };

  CheckToken.displayName = 'CheckToken';
  return CheckToken;
}
 */
