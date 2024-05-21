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

const registerScheme = z.object({
  username: z.string().min(1, 'username is required'),
  email: z
    .string()
    .min(1, 'O Email é obrigatório.')
    .email('Formato de e-mail inválido.'),
  photo: z.string(),
  password: z.string().min(8, 'A senha tem no mínimo 8 caracteres').max(16),
  confirmPassword: z
    .string()
    .min(8, 'A senha tem no mínimo 8 caracteres')
    .max(16),
});

type RegisterScheme = z.infer<typeof registerScheme>;

export default function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterScheme>({
    resolver: zodResolver(registerScheme),
  });

  function handleRegister(data: RegisterScheme) {
    console.log(data);
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
                />
                <LabeledInput
                  error={errors.email?.message}
                  label="Email"
                  {...register('email')}
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
                />
                <LabeledInput
                  error={errors.confirmPassword?.message}
                  label="Confirm Password"
                  {...register('confirmPassword')}
                />
              </div>
              <Button type="submit">Create</Button>
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
