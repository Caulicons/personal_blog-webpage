import { FunctionComponent } from 'react';

function Header() {
  return (
    <header className="flex min-h-16 w-full justify-center bg-green-600 text-slate-50 ">
      <div className="flex h-full w-full max-w-7xl items-center justify-between p-4">
        <p className=" text-xl font-bold">PERSONAL BLOG</p>
        <nav>
          <ul className="flex gap-2 ">
            <Li text="Login" />
            <Li text="Home" />
            <Li text="Posts" />
            <Li text="Theme" />
            <Li text="Register Theme" />
            <Li text="Perfil" />
            <Li text="Exit" />
          </ul>
        </nav>
      </div>
    </header>
  );
}

interface LiProps {
  text: string;
}

const Li: FunctionComponent<LiProps> = ({ text }) => {
  return <li className="p-2 px-2 hover:cursor-pointer"> {text}</li>;
};

export default Header;
