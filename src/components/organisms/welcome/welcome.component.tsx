import Container from '../../atoms/container/container.component';
import Section from '../../atoms/section/section.component';
import Button from '../../atoms/button/button.component';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { validatingToken } from '../../../services/auth/validToken.service';
import Link from '../../atoms/link/link.component';
import { quacking } from '../../../utils/quack';

const Welcome = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = Cookies.get('token');

    async function checkToken(token: string) {
      const isValidToken = await validatingToken(token);

      if (isValidToken) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }

    if (!token) setIsLoggedIn(false);
    else checkToken(token);
  }, []);

  return (
    <Section className="flex h-[calc(100vh-72px)]  w-full select-none justify-center bg-green-600 text-white ">
      <Container className="grid grid-cols-2 items-center justify-between">
        <div className="flex flex-col items-center justify-center gap-9 text-center">
          <div className="grid gap-3">
            <h2 className="shadow- text-6xl font-bold">
              Welcome,{' '}
              <span className="cursor-pointer" onClick={quacking}>
                🦆
              </span>{' '}
              !{' '}
            </h2>
            <p className="text-xl">A place for your thoughts.</p>
          </div>
          {isLoggedIn ? (
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
