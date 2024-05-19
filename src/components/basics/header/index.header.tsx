import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex min-h-16 w-full justify-center bg-green-600 text-slate-50 ">
      <div className="flex h-full w-full max-w-7xl items-center justify-between p-4">
        <Link to={'/'}>
          <p className=" text-xl font-bold">PERSONAL BLOG</p>
        </Link>
        <nav>
          <ul className="flex gap-2 ">
            <Li text="Login" to="login" />
            <Li text="Home" />
            <Li text="Posts" />
            <Li text="Theme" />
            <Li text="Register Theme" />
            <Li text="Perfil" />
            <Li text="Exit" to="login" />
          </ul>
        </nav>
      </div>
    </header>
  );
}

interface LiProps {
  text: string;
  to?: string;
}

const Li: FunctionComponent<LiProps> = ({ text, to = '/' }) => {
  return (
    <li className="p-2 px-2 hover:cursor-pointer">
      <Link to={to}>{text}</Link>
    </li>
  );
};

export default Header;
