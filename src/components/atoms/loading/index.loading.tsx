import { FC } from 'react';
import Typography from '../typography/typography.component';
import { CircleNotch } from '@phosphor-icons/react';

interface LoadingProps {
  message?: string;
  image?: number;
  circleColor?: string;
}

const Loading: FC<LoadingProps> = ({
  message = 'Loading, Please Wait...',
  image = 1,
  circleColor = 'fill-green-600',
}) => {
  return (
    <div className="mx-auto h-full select-none text-center">
      <img className="md:w-[500px]" src={`/imgs/loading${image}.svg`} alt="" />
      <Typography variant="h2" className=" text-center text-2xl font-bold">
        {message}
        <span>
          <CircleNotch
            className={`w-full animate-spin ${circleColor}`}
            size={36}
          />
        </span>
      </Typography>
    </div>
  );
};

export default Loading;
