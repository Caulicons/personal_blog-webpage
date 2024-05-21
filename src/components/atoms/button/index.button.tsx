import { cva } from 'class-variance-authority';
import { FunctionComponent } from 'react';
import { cn } from '../../../utils';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outlined';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variants = cva(
  'rounded-lg border-solid border-2 p-2 border-transparent transition-all duration-700 shadow-xl',
  {
    variants: {
      variant: {
        primary: ['bg-green-600  text-white hover:bg-green-700'],
        secondary: [
          'border-white bg-white hover:bg-transparent text-black hover:text-white',
        ],
        outlined: ['border-white bg-white hover:bg-transparent'],
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
  className,
  ...props
}) => {
  return (
    <button className={cn(variants({ variant }), className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
