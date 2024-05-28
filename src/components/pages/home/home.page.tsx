import Main from '../../atoms/main/main.component';
import Welcome from '../../organisms/welcome/welcome.component';

function Home() {
  return (
    <Main className="flex min-h-[calc(100vh-72px)] w-full select-none justify-center bg-green-600 p-6 text-white">
      <Welcome />
    </Main>
  );
}

export default Home;
