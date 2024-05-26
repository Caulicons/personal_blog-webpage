import { FC } from 'react';
import Header from '../../molecules/header/header.component';
import Footer from '../../molecules/footer/footer.component';
import { Outlet } from 'react-router-dom';

interface ModelProps {}

const Model: FC<ModelProps> = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

export default Model;
