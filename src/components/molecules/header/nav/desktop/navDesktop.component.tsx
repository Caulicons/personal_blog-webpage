import { useContext } from 'react';
import { Stairs } from '@phosphor-icons/react';
import {
  UserContext,
  UserContextSchema,
} from '../../../../../contexts/user.context';

const NavDesktop = () => {
  const { isAuthenticated, logOut, user } = useContext(
    UserContext,
  ) as UserContextSchema;

  return (
    <nav>
      <ul className="flex items-center gap-2">
        {isAuthenticated && (
          <>
            <button className="bg-transparece rounded-md border-2 border-white px-4 py-2 font-medium text-white hover:bg-white hover:text-green-600 hover:underline">
              Create Post
            </button>
            <li>
              <img
                className=" h-11 w-11 rounded-full "
                src={user.photo}
                alt=""
              />
            </li>

            {/* TODO: The exit button have been in the when click romario photo */}
            <Stairs
              alt="Log Out"
              size={32}
              className="cursor-pointer"
              onClick={logOut}
            />
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavDesktop;
