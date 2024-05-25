import Nav from './nav/nav.component';
import Typography from '../../atoms/typography/typography.component';
import Container from '../../atoms/container/container.component';
import { quacking } from '../../../utils/quack';

function Header() {
  return (
    <header className="flex justify-center bg-green-600 text-slate-50">
      <Container className="flex w-full  select-none items-center justify-between p-4">
        <Typography
          onClick={quacking}
          tag="h4"
          className="cursor-pointer text-xl font-bold"
        >
          QUACK
        </Typography>
        <Nav />
      </Container>
    </header>
  );
}

export default Header;
