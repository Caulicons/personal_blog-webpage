import { FunctionComponent } from 'react';
import Container from '../../atoms/container/index.container';
import Section from '../../atoms/section/index.section';
import Button from '../../atoms/button/index.button';

interface WelcomeProps {}

const Welcome: FunctionComponent<WelcomeProps> = () => {
  return (
    <Section className="flex h-[calc(100vh-72px)]  w-full select-none justify-center bg-green-600 text-white ">
      <Container className="grid grid-cols-2 items-center justify-between">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <div className="grid gap-3">
            <h2 className="shadow- text-7xl font-bold">Welcome !</h2>
            <p className="text-2xl">A place for your thoughts.</p>
          </div>

          <Button
            className="w-3/5 text-xl font-semibold uppercase"
            variant="secondary"
          >
            Posts <span> 🐢</span>
          </Button>
        </div>
        <div className="block w-full justify-center">
          <img src="/welcome.svg" alt="" />
        </div>
      </Container>
    </Section>
  );
};

export default Welcome;
