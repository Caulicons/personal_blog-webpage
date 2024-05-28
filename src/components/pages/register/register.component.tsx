import { useForm } from 'react-hook-form';
import Container from '../../atoms/container/container.component';
import Main from '../../atoms/main/main.component';
import Typography from '../../atoms/typography/typography.component';
import LabeledInput from '../../molecules/LabeledInput/labeledInput.component';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/button/button.component';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import {
  RegisterScheme,
  registerUserScheme,
} from '../../../schemas/user/register.schema';
import { validatingToken } from '../../../services/auth/validToken.service';
import { registerUser } from '../../../services/auth/register.service';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [requestErrorMessage, setRequestErrorMessage] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterScheme>({
    resolver: zodResolver(registerUserScheme),
  });

  useEffect(() => {
    const token = Cookies.get('token');
    async function checkingToken(token: string) {
      if (await validatingToken(token)) navigate('/');
    }
    if (token) checkingToken(token);
  }, [navigate]);

  async function handleRegister(data: RegisterScheme) {
    setIsLoading(true);

    // TODO: I have to fix my api to return a token instead go make login it is boring
    const managedToRegister = await registerUser(data);
    if (managedToRegister) return navigate('/login');

    setRequestErrorMessage('❌ Something not work well, try again later.');
    setIsLoading(false);
  }

  return (
    <Main
      className={`flex min-h-[calc(100vh-72px)] w-full  select-none justify-center ${isLoading && 'cursor-wait'}`}
    >
      <Container
        tag="section"
        className="grid w-full self-center p-6 sm:grid-cols-[55%_45%] sm:items-center "
      >
        <div className=" hidden select-none rounded-full sm:block ">
          <img className="" src="/imgs/register.svg" />
        </div>
        <div className="flex flex-col items-center justify-center gap-9 text-center">
          <div className="grid gap-2">
            <Typography tag="h2" variant="h2" className="text-5xl">
              Register
            </Typography>
            <Typography tag="h3" variant="subtitle" className="font-light">
              In a unique community
            </Typography>
          </div>
          <form
            onChange={() => {
              if (requestErrorMessage) setRequestErrorMessage('');
            }}
            onSubmit={handleSubmit(handleRegister)}
            className="flex w-full flex-col gap-9 sm:w-4/5"
          >
            <div className="flex flex-col gap-4">
              <LabeledInput
                error={errors.username?.message}
                label="Username"
                {...register('username')}
                value={'root8'}
              />
              <LabeledInput
                error={errors.email?.message}
                label="Email"
                {...register('email')}
                value={'root@root8.com'}
              />
              <LabeledInput
                error={errors.photo?.message}
                label="Photo"
                {...register('photo')}
              />
              <LabeledInput
                error={errors.password?.message}
                label="Password"
                {...register('password')}
                type="password"
              />
              <LabeledInput
                error={errors.confirmPassword?.message}
                label="Confirm Password"
                {...register('confirmPassword')}
                type="password"
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
            >
              Create
            </Button>
            <p className="text-center text-black">
              Already have an account? {''}
              <span
                className="font-bold text-green-600 hover:cursor-pointer hover:underline hover:underline-offset-2"
                onClick={() => {
                  navigate('/login');
                }}
              >
                Log in
              </span>
            </p>
          </form>
        </div>
      </Container>
    </Main>
  );
}
