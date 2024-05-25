import { logOutUser } from '../../../../../services/auth/logOut.service';
import Link from '../../../../atoms/link/link.component';
import { Stairs } from '@phosphor-icons/react';

const NavDesktop = () => {
  const routes = [
    { id: 2, name: 'Home', path: '/' },
    { id: 3, name: 'Posts', path: '/posts' },
    { id: 4, name: 'Theme', path: '/theme' },
    { id: 6, name: 'Perfil', path: '/perfil' },
  ];

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
        <Stairs
          alt="Log Out"
          size={32}
          className="cursor-pointer"
          onClick={logOutUser}
        />
      </ul>
    </nav>
  );
};

export default NavDesktop;
