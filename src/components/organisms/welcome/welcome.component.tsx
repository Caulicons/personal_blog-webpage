import Container from '../../atoms/container/container.component';
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
    <Container
      tag="section"
      className="grid w-full items-center gap-4 sm:grid-cols-[55%_45%]"
    >
      <div className="grid w-full flex-col items-center justify-center gap-9 text-center">
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
              </span>
              !
            </Typography>
          )}
          <p className="text-xl">A place for your thoughts.</p>
        </div>
        {isAuthenticated ? (
          <Link className="mx-auto w-full sm:w-4/5" to="/posts">
            <Button
              className="w-full  text-xl font-semibold uppercase "
              variant="secondary"
            >
              See Posts
            </Button>
          </Link>
        ) : (
          <div className="mx-auto grid w-4/5 grid-cols-2 gap-3">
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
      <div className="mx-auto my-0 w-full ">
        <img src="/imgs/welcome.svg" alt="" />
      </div>
    </Container>
  );
};

Welcome.displayName = 'Welcome';
export default Welcome;
