import { cn } from '../../../utils';

type ContainerProps = {
  size?: 'default' | 'small';
} & React.HTMLAttributes<HTMLDivElement>;

const Container = ({
  size = 'default',
  className,
  ...props
}: ContainerProps) => {
  const variantsSize = {
    default: 'max-w-7xl',
    small: 'max-w-5xl',
  };

  return (
    <div
      className={cn('w-full max-w-7xl', variantsSize[size], className)}
      {...props}
    />
  );
};

export default Container;
