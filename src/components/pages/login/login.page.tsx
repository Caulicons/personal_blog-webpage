import { FunctionComponent, useContext, useEffect, useState } from 'react';
import Main from '../../atoms/main/main.component';
import Typography from '../../atoms/typography/typography.component';
import Container from '../../atoms/container/container.component';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import LabeledInput from '../../molecules/LabeledInput/labeledInput.component';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/button/button.component';
import Cookies from 'js-cookie';
import { LoginSchema, loginSchema } from '../../../schemas/user/login.schema';
import { UserContext, UserContextSchema } from '../../../contexts/user.context';
import { validatingToken } from '../../../services/auth/validToken.service';
import { logInto } from '../../../services/auth/login.service';

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [requestErrorMessage, setRequestErrorMessage] = useState<string>('');
  const { setIsAuthenticated, update } = useContext(
    UserContext,
  ) as UserContextSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  async function handleLogin(data: LoginSchema) {
    setIsLoading(true);

    const managedToLogged = await logInto(data);
    if (managedToLogged) {
      setIsAuthenticated(true);
      update(managedToLogged);
      return navigate('/');
    }

    setRequestErrorMessage('❌ Invalid credentials.');
    setIsLoading(false);
  }

  useEffect(() => {
    const token = Cookies.get('token');
    async function checkingToken(token: string) {
      if (await validatingToken(token)) navigate('/');
    }
    if (token) checkingToken(token);
  }, [navigate]);

  return (
    <Main className="flex min-h-[calc(100vh-72px)] select-none  justify-center p-6 pt-0 sm:pt-6 ">
      <Container
        tag="section"
        className={`grid select-none gap-4 sm:grid-cols-2 sm:grid-rows-none sm:items-center sm:justify-center ${isLoading && 'cursor-wait'}`}
      >
        <div className="flex h-full w-full  flex-col items-center justify-center gap-9 text-center">
          <div className="relative grid gap-2">
            <img
              className="-mt-8 sm:mt-auto sm:hidden"
              src="/imgs/login.svg"
              alt=""
            />
            <Typography tag="h2" variant="h2" className="text-5xl">
              Welcome
            </Typography>
            <Typography tag="h3" variant="subtitle" className="font-light">
              find new stories
            </Typography>
          </div>
          <form
            onChange={() => {
              if (requestErrorMessage) setRequestErrorMessage('');
            }}
            onSubmit={handleSubmit(handleLogin)}
            className="grid w-full  gap-9 sm:w-3/5"
          >
            <div className="grid gap-4">
              <LabeledInput
                error={errors.email?.message || !!requestErrorMessage}
                label="Email"
                type="email"
                {...register('email')}
              />
              <LabeledInput
                error={errors.password?.message || !!requestErrorMessage}
                label="Password"
                type="password"
                {...register('password')}
              />
              {!!requestErrorMessage && (
                <Typography className="text-left text-sm text-red-500">
                  {requestErrorMessage}
                </Typography>
              )}
            </div>
            <Button
              disabled={!!requestErrorMessage}
              isLoading={isLoading}
              type="submit"
              className={`${isLoading && 'cursor-wait opacity-50'} `}
            >
              Enter
            </Button>
            <Typography className="text-center font-normal text-black">
              Don't have an account?{' '}
              <span
                className="font-bold text-green-600 hover:cursor-pointer hover:underline hover:underline-offset-2"
                onClick={() => {
                  navigate('/register');
                }}
              >
                Register
              </span>
            </Typography>
          </form>
        </div>
        <div className="relative row-start-1 mx-auto my-0 hidden w-full sm:row-auto sm:flex">
          <div className="absolute mt-5 hidden h-2 w-full select-none rounded-full bg-green-600/85 sm:flex" />
          <img className="mx-auto my-0 w-full" src="/imgs/login.svg" alt="" />
        </div>
      </Container>
    </Main>
  );
};

export default Login;
