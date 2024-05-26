import Container from '../../atoms/container/container.component';
import Section from '../../atoms/section/section.component';
import Button from '../../atoms/button/button.component';
import { useContext } from 'react';

import Link from '../../atoms/link/link.component';
import { quacking } from '../../../utils/quack';
import { UserContext, UserContextSchema } from '../../../contexts/user.context';
import Typography from '../../atoms/typography/typography.component';

const Welcome = () => {
  const { user, isAuthenticated } = useContext(
    UserContext,
  ) as UserContextSchema;

  return (
    <Section className="flex h-[calc(100vh-72px)]  w-full select-none justify-center bg-green-600 text-white ">
      <Container className="grid grid-cols-2 items-center justify-between">
        <div className="flex flex-col items-center justify-center gap-9 text-center">
          <div className="grid gap-3">
            {isAuthenticated ? (
              <Typography tag="h2" variant="h2" className="text-4xl">
                Welcome back, {user.username} !
              </Typography>
            ) : (
              <Typography tag="h2" variant="h2" className="text-4xl">
                Welcome to Quack{' '}
                <span
                  className="text-6xl hover:cursor-pointer"
                  onClick={() => quacking()}
                >
                  🦆
                </span>{' '}
                !
              </Typography>
            )}
            <p className="text-xl">A place for your thoughts.</p>
          </div>
          {isAuthenticated ? (
            <Button
              className="w-3/5  text-xl font-semibold uppercase"
              variant="secondary"
            >
              See Posts
            </Button>
          ) : (
            <div className="grid w-4/5 grid-cols-2 gap-3 ">
              <Link to="/login">
                <Button
                  variant="secondary"
                  className=" w-full border-2 transition-all duration-700 hover:border-gray-200 hover:bg-white hover:text-black hover:underline"
                >
                  Login
                </Button>
              </Link>

              <Link to="/register">
                <Button className="w-full border-white hover:underline">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
        <div className="block w-full justify-center">
          <img src="/imgs/welcome.svg" alt="" />
        </div>
      </Container>
    </Section>
  );
};

Welcome.displayName = 'Welcome';
export default Welcome;
