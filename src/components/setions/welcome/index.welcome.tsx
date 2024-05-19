import { FunctionComponent } from 'react';

interface WelcomeProps {}

const Welcome: FunctionComponent<WelcomeProps> = () => {
  return (
    <section className="flex h-[calc(100vh-72px)]  w-full select-none justify-center bg-green-600 text-white ">
      <div className="grid w-full max-w-7xl grid-cols-2 items-center justify-between">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <div className="grid gap-3">
            <h2 className="shadow- text-7xl font-bold">Welcome !</h2>
            <p className="text-2xl">A place for your thoughts.</p>
          </div>
          <div></div>
          <button className="w-auto rounded-xl border-2 border-solid border-white bg-white p-2 px-9 text-xl font-semibold uppercase text-black shadow-2xl hover:bg-transparent hover:text-white">
            Posts 📌
          </button>
        </div>
        <div className="block w-full justify-center">
          <img src="/welcome.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
