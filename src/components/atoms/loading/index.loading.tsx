import { FC } from 'react';
import Typography from '../typography/typography.component';
import { CircleNotch } from '@phosphor-icons/react';
import Main from '../main/main.component';

interface LoadingProps {
  message?: string;
  image?: number;
  circleColor?: string;
  bgColor?: string;
}

const Loading: FC<LoadingProps> = ({
  message = 'Loading, Please Wait...',
  image = 1,
  circleColor = 'fill-green-600',
  bgColor = 'bg-white',
}) => {
  return (
    <Main
      className={`mb-5 flex  min-h-[calc(100vh-72px)] select-none flex-col items-center justify-center gap-4 text-center text-slate-50 ${bgColor}`}
    >
      <div className="mx-auto h-full select-none text-center">
        <img
          className="md:w-[500px]"
          src={`/imgs/loading${image}.svg`}
          alt=""
        />
        <Typography
          variant="h2"
          className={`text-center text-2xl font-bold text-black`}
        >
          {message}
          <span>
            <CircleNotch
              className={`w-full animate-spin ${circleColor} `}
              size={36}
            />
          </span>
        </Typography>
      </div>
    </Main>
  );
};

export default Loading;
