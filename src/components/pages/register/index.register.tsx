import { useForm } from 'react-hook-form';
import Container from '../../atoms/container/index.container';
import Main from '../../atoms/main/index.main';
import Section from '../../atoms/section/index.section';
import Typography from '../../atoms/typography/index.typography';
import { z } from 'zod';
import LabeledInput from '../../molecules/LabeledInput/index.labeledInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/button/index.button';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { isValidToken, registerUser } from '../../../services/auth';
import { api } from '../../../utils/http';

const registerScheme = z
  .object({
    username: z.string().min(1, 'username is required'),
    email: z
      .string()
      .min(1, 'O Email é obrigatório.')
      .email('Formato de e-mail inválido.'),
    photo: z.string().trim().url('Formato de imagem inválido.'),
    password: z.string().min(8, 'A senha tem no mínimo 8 caracteres').max(16),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas devem ser iguais',
    path: ['confirmPassword'],
  })
  // check email
  .refine(
    async (data) => {
      const emailAlreadyExist = await api.get(`/users/email/${data.email}`);
      return !emailAlreadyExist.data;
    },
    {
      message: 'email already exists',
      path: ['email'],
    },
  )
  // check username
  .refine(
    async (data) => {
      const usernameAlreadyExist = await api.get(
        `/users/username/${data.username}`,
      );
      return !usernameAlreadyExist.data;
    },
    {
      message: 'username already exists',
      path: ['username'],
    },
  );

export type RegisterScheme = z.infer<typeof registerScheme>;

export default function RegisterPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasRequestError, setHasRequestError] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterScheme>({
    resolver: zodResolver(registerScheme),
  });

  useEffect(() => {
    const token = Cookies.get('token');
    async function checkingToken(token: string) {
      if (await isValidToken(token)) navigate('/');
    }
    if (token) checkingToken(token);
  }, [navigate]);

  async function handleRegister(data: RegisterScheme) {
    setIsLoading(true);
    try {
      await registerUser(data);
      // TODO: I have to fix my api to return a token instead go make login it is boring
      navigate('/login');
    } catch {
      setHasRequestError(true);
    }
    setIsLoading(false);
  }

  return (
    <Main>
      <Section className="flex h-[calc(100vh-72px)] w-full  select-none justify-center">
        <Container className="grid w-full grid-cols-2 self-center">
          <div className="mt-5 h-3/5 select-none rounded-full bg-green-500">
            <img className="" src="/register.svg" />
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
              onSubmit={handleSubmit(handleRegister)}
              className="flex w-3/5 flex-col gap-9"
            >
              <div className="flex flex-col gap-4">
                <LabeledInput
                  error={errors.username?.message}
                  label="Username"
                  {...register('username')}
                  value={'root6'}
                />
                <LabeledInput
                  error={errors.email?.message}
                  label="Email"
                  {...register('email')}
                  value={'root@root6.com'}
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
                {hasRequestError && (
                  <Typography className="text-left text-sm text-red-500">
                    ❌ Something not work well, try again later.
                  </Typography>
                )}
              </div>
              <Button
                disabled={hasRequestError}
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
      </Section>
    </Main>
  );
}
