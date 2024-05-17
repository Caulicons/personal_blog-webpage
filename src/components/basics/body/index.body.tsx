import { ReactElement } from 'react';

type Props = {
  children: ReactElement | ReactElement[];
};

function Body({ children }: Props) {
  return <body className="min-h-screen bg-green-100/30 ">{children}</body>;
}

export default Body;
