import { FacebookLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import { FunctionComponent } from 'react';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className="flex justify-center bg-green-600 text-center text-white">
      <div className="grid gap-3">
        <h3 className="text-2xl font-bold ">
          Personal Blog | Generation Brasil
        </h3>
        <div></div>
        <p className="text-2xl">Social Medias</p>
        <ul className="flex justify-center gap-5">
          <FacebookLogo size={45} weight="bold" />
          <GithubLogo size={45} weight="bold" />
          <LinkedinLogo size={45} weight="bold" />
        </ul>
        <a href="https://storyset.com/people" className="text-sm">
          People illustrations by Storyset
        </a>
      </div>
    </footer>
  );
};

export default Footer;
