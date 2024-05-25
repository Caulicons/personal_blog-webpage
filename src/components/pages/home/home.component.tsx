import Main from '../../atoms/main/main.component';
import Welcome from '../../organisms/welcome/welcome.component';

function Home() {
  return (
    <Main className="flex w-full">
      <Welcome />
    </Main>
  );
}

export default Home;
