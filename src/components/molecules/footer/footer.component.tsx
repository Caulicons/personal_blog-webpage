import { GithubLogo, LinkedinLogo, XLogo } from '@phosphor-icons/react';
import { FunctionComponent } from 'react';
import Container from '../../atoms/container/container.component';
import Typography from '../../atoms/typography/typography.component';
import Anchor from '../../atoms/anchor/anchor.component';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className="flex justify-center bg-green-600">
      <Container className="grid w-4/5  items-center gap-4 p-4 text-center text-white sm:grid-cols-2">
        <div>
          <Typography tag="h3" className="text-2xl font-bold ">
            Personal Blog
          </Typography>
          <Typography tag="p" className="text-sm font-bold ">
            <Anchor href="https://www.generation.org/">
              Generation Brasil
            </Anchor>
          </Typography>
        </div>
        <div className="grid gap-4">
          <Typography className="text-2xl">Social Medias</Typography>
          <ul className="flex justify-center gap-5">
            <Anchor href="https://github.com/Caulicons">
              <GithubLogo size={45} weight="bold" />
            </Anchor>
            <Anchor href="https://twitter.com/Caulicons">
              <XLogo size={45} weight="bold" />
            </Anchor>
            <Anchor href="https://github.com/Caulicons">
              <LinkedinLogo size={45} weight="bold" />
            </Anchor>
          </ul>
          <Anchor href="https://storyset.com/people" className="text-xs">
            People illustrations by Storyset
          </Anchor>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
