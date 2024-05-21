import Link from '../../../../atoms/link/index.link';

const NavDesktop = () => {
  const routes = [
    { id: 1, name: 'Login', path: 'login' },
    { id: 2, name: 'Home', path: '/' },
    { id: 3, name: 'Posts', path: '/posts' },
    { id: 4, name: 'Theme', path: '/theme' },
    { id: 5, name: 'Register Theme', path: '/register-theme' },
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
      </ul>
    </nav>
  );
};

export default NavDesktop;
