import { useContext } from 'react';
import Link from '../../../../atoms/link/link.component';
import { Stairs } from '@phosphor-icons/react';
import {
  UserContext,
  UserContextSchema,
} from '../../../../../contexts/user.context';

const NavDesktop = () => {
  const { isAuthenticated, logOut, user } = useContext(
    UserContext,
  ) as UserContextSchema;

  const routesLogged = [
    { id: 2, name: 'Home', path: '/' },
    { id: 3, name: 'Posts', path: '/posts' },
  ];

  const routesWithOutLogged = [{ id: 1, name: 'Home', path: '/' }];

  const routes = isAuthenticated ? routesLogged : routesWithOutLogged;
  return (
    <nav>
      <ul className="flex gap-2">
        {routes.map(({ name, path, id }) => (
          <li
            key={id}
            className=" p-2 px-2 hover:cursor-pointer hover:font-bold"
          >
            <Link to={path}>{name}</Link>
          </li>
        ))}

        {isAuthenticated && (
          <>
            <li>
              <img
                className=" h-11 w-11 rounded-full "
                src={user.photo}
                alt=""
              />
            </li>
            <Stairs
              alt="Log Out"
              size={32}
              className="cursor-pointer"
              onClick={logOut}
            />
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavDesktop;
