import { cn } from '../../../utils';

type AnchorProps = React.HTMLProps<HTMLAnchorElement> & {
  children: React.ReactNode;
  className?: string;
  href: string;
};
const Anchor = ({ children, className, ...props }: AnchorProps) => {
  return (
    <a className={cn('cursor-pointer', className)} {...props}>
      {children}
    </a>
  );
};

export default Anchor;
