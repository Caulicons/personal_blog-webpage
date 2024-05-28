import cn from '../../../utils/cn';

type ContainerProps = {
  size?: 'default' | 'small';
  tag?: 'section' | 'div';
} & React.HTMLAttributes<HTMLDivElement>;

const Container = ({
  size = 'default',
  className,
  tag,
  children,
  ...props
}: ContainerProps) => {
  const variantsSize = {
    default: 'max-w-7xl',
    small: 'max-w-5xl',
  };
  const Tag = tag ? 'section' : 'div';
  return (
    <Tag
      className={cn('w-full max-w-7xl', variantsSize[size], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Container;
