import { FunctionComponent, useEffect, useState } from 'react';
import Main from '../../atoms/main/main.component';
import Section from '../../atoms/section/section.component';
import Typography from '../../atoms/typography/typography.component';
import Container from '../../atoms/container/container.component';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import LabeledInput from '../../molecules/LabeledInput/labeledInput.component';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/button/button.component';
import Cookies from 'js-cookie';
import { LoginSchema, loginSchema } from '../../../schemas/user/login.schema';
import { logInto } from '../../../services/auth/login.service';
import { validatingToken } from '../../../services/auth/validToken.service';

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasRequestError, setHasRequestError] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    const token = Cookies.get('token');
    async function checkingToken(token: string) {
      if (await validatingToken(token)) navigate('/');
    }
    if (token) checkingToken(token);
  }, [navigate]);

  async function handleLogin(data: LoginSchema) {
    setIsLoading(true);

    const managedToLogged = await logInto(data);
    if (managedToLogged) return navigate('/');

    setHasRequestError(true);
    setIsLoading(false);
  }

  return (
    <Main>
      <Section
        className={`flex h-[calc(100vh-72px)] w-full select-none justify-center ${isLoading && 'cursor-wait '}`}
      >
        <Container className="grid w-full grid-cols-2 self-center">
          <div className="flex flex-col items-center justify-center gap-9 text-center">
            <div className="grid gap-2">
              <Typography tag="h2" variant="h2" className="text-5xl">
                Welcome
              </Typography>
              <Typography tag="h3" variant="subtitle" className="font-light">
                find new stories
              </Typography>
            </div>
            <form
              onChange={() => {
                if (hasRequestError === true) setHasRequestError(false);
              }}
              onSubmit={handleSubmit(handleLogin)}
              className="grid w-3/5 flex-col gap-9"
            >
              <div className="grid gap-4">
                <LabeledInput
                  value={'root@root8.com'}
                  error={errors.email?.message || hasRequestError}
                  label="Email"
                  type="email"
                  {...register('email')}
                />
                <LabeledInput
                  error={errors.password?.message || hasRequestError}
                  label="Password"
                  type="password"
                  {...register('password')}
                />
                {hasRequestError && (
                  <Typography className="text-left text-sm text-red-500">
                    ❌Invalid Email or Password.
                  </Typography>
                )}
              </div>
              <Button
                disabled={hasRequestError}
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
          <div className="mt-5 h-3/5 select-none   rounded-full bg-green-600/85">
            <img className="" src="/imgs/login.svg" />
          </div>
        </Container>
      </Section>
    </Main>
  );
};

export default Login;
