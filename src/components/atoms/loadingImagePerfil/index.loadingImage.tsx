import { CircleNotch } from '@phosphor-icons/react';
import { FC } from 'react';

interface LoadingImagePerfilProps {
  size?: number;
  className?: string;
}

const LoadingImagePerfil: FC<LoadingImagePerfilProps> = ({
  size = 32,
  className,
}) => {
  return (
    <CircleNotch
      size={size}
      className={`animate-spin ${className ? className : 'fill-white'}`}
    />
  );
};

export default LoadingImagePerfil;
