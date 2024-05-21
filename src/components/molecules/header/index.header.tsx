import Nav from './nav/index.nav';
import Typography from '../../atoms/typography/index.typography';
import Container from '../../atoms/container/index.container';
import Link from '../../atoms/link/index.link';

function Header() {
  return (
    <header className="flex justify-center bg-green-600 text-slate-50">
      <Container className="flex w-full items-center justify-between p-4">
        <Link to={'/'}>
          <Typography tag="h4" className="text-xl font-bold">
            PERSONAL BLOG 🦀
          </Typography>
        </Link>
        <Nav />
      </Container>
    </header>
  );
}

export default Header;
