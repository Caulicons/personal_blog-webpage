/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { validatingToken } from '../../../services/auth/validToken.service';

const loggedOnly = (WrappedComponent: React.ComponentType<any>) => {
  return function CheckToken(props: any) {
    const navigate = useNavigate();
    const token = Cookies.get('token');
    useEffect(() => {
      async function checkingToken(token: string) {
        if (!(await validatingToken(token))) navigate('login');
      }

      if (!token) navigate('/');
      else checkingToken(token);
    }, [navigate, token]);

    WrappedComponent.displayName = 'AuthCheckToken';
    return <WrappedComponent {...props} />;
  };
};

export default loggedOnly;
