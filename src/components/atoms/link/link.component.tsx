import {
  Link as LinkRouter,
  LinkProps as LinkPropsRouter,
} from 'react-router-dom';

type LinkProps = {
  to: string;
} & LinkPropsRouter;

const Link = ({ children, ...props }: LinkProps) => {
  return <LinkRouter {...props}>{children}</LinkRouter>;
};

export default Link;
