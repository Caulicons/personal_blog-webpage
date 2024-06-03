import { FC, useContext } from 'react';
import Main from '../../atoms/main/main.component';
import Container from '../../atoms/container/container.component';
import { UserContext, UserContextSchema } from '../../../contexts/user.context';
import Button from '../../atoms/button/button.component';

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  const { user } = useContext(UserContext) as UserContextSchema;
  return (
    <Main className=" flex min-h-[calc(100vh-72px)] w-full select-none  flex-col  bg-white ">
      <div className="min-h-28 w-full border-b-4 border-black bg-blue-400" />
      <Container
        size="small"
        className="mx-auto flex w-full max-w-[600px] flex-col items-center justify-center gap-4 p-6 text-center align-middle shadow-2xl"
      >
        <img
          src={user?.photo}
          alt=""
          className="-mt-24 h-28 w-28 rounded-full border-4 border-black md:h-36 md:w-36"
        />
        <h2 className="mt-4 text-2xl font-bold md:text-3xl">
          {user?.username}
        </h2>
        {/* Create a user BIO */}
        <p className="mt-2 text-lg md:text-xl">
          A passionate front-end developer with a Bachelor's degree from Bahria
          University. My current tech stack includes
          HTML,CSS,Tailwind,JavaScript, ReactJs, and Currently Exploring
          CssAnimations & Next.js.
        </p>
        <div className="mt-4 flex w-full gap-4">
          <Button className="w-full">Edit Profile</Button>
          <Button className="w-full">My Posts</Button>
        </div>
      </Container>
    </Main>
  );
};

export default Profile;
