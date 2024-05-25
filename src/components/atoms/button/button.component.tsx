import { cva } from 'class-variance-authority';
import { FunctionComponent } from 'react';
import { CircleNotch } from '@phosphor-icons/react';
import cn from '../../../utils/cn';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outlined';
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variants = cva(
  'rounded-lg border-solid border-2 p-2 text-lg border-transparent transition-all duration-700 shadow-xl ',
  {
    variants: {
      variant: {
        primary: ['bg-green-600  text-white hover:bg-green-700'],
        secondary: [
          'border-white bg-white hover:bg-transparent text-black hover:text-white ',
        ],
        outlined: [
          'hover:border-white border-white bg-white bg-transparent hover:text-black hover:bg-white',
        ],
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

const Button: FunctionComponent<ButtonProps> = ({
  children,
  variant = 'primary',
  isLoading = false,
  className,
  ...props
}) => {
  //const loadingStyle = isLoading ? 'animate-spin' : '';
  return (
    <button
      disabled={isLoading}
      className={cn(variants({ variant }), className)}
      {...props}
    >
      {isLoading ? (
        <CircleNotch className="w-full animate-spin self-center" size={28} />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
