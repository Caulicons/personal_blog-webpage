import { FC } from 'react';
import Main from '../../atoms/main/main.component';
import Typography from '../../atoms/typography/typography.component';
import { useLocation } from 'react-router-dom';

interface RequestErrorProps {
  className?: string;
}

const RequestError: FC<RequestErrorProps> = () => {
  const {
    state: { message = 'Request error' },
    pathname = '/404',
  } = useLocation();

  return (
    <Main
      className={`flex  h-[calc(100vh-72px)] select-none flex-col items-center justify-center gap-4  text-center `}
    >
      <img className="max-w-[500px] " src={`/imgs${pathname}.svg`} alt="" />
      <Typography variant="h2" className="w-4/5 text-xl font-bold md:text-2xl">
        {message ? message : 'probably killed the server, please send me a'}{' '}
      </Typography>
    </Main>
  );
};

export default RequestError;
