import Main from '../../atoms/main/index.main';
import Welcome from '../../organisms/welcome/index.welcome';

function Home() {
  return (
    <Main className="flex w-full">
      <Welcome />
    </Main>
  );
}

export default Home;
