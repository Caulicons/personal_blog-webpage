import { FC } from 'react';
import Typography from '../../atoms/typography/typography.component';
import Main from '../../atoms/main/main.component';
import Anchor from '../../atoms/anchor/anchor.component';

interface ServerErrorProps {}

const ServerError: FC<ServerErrorProps> = () => {
  return (
    <Main className="flex  h-[calc(100vh-72px)] select-none flex-col items-center justify-center gap-4 bg-green-600 text-center text-slate-50">
      <img className="max-w-[500px] " src="/imgs/error500.svg" alt="" />
      <Typography variant="h2" className="w-4/5 text-xl font-bold md:text-2xl">
        If you are seeing this the{' '}
        <Anchor
          className="underline-offset-4 hover:underline "
          href="https://render.com/"
        >
          render
        </Anchor>{' '}
        probably killed the server, please send me a {''}
        <Anchor
          className="underline-offset-4 hover:underline "
          href="https://www.linkedin.com/in/caulicons"
        >
          message.
        </Anchor>
      </Typography>
    </Main>
  );
};

export default ServerError;
