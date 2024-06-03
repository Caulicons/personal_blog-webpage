import { useContext, useState } from 'react';
import { Pencil, Stairs, User } from '@phosphor-icons/react';
import {
  UserContext,
  UserContextSchema,
} from '../../../../../contexts/user.context';
import LoadingImagePerfil from '../../../../atoms/loadingImagePerfil/index.loadingImage';
import { Link } from 'react-router-dom';
import Typography from '../../../../atoms/typography/typography.component';

const NavDesktop = () => {
  const [userMenu, setUserMenu] = useState(false);
  const { isAuthenticated, logOut, user } = useContext(
    UserContext,
  ) as UserContextSchema;

  return (
    <nav>
      <ul className="flex items-center gap-2">
        {isAuthenticated && (
          <>
            <Link to="/posts/create">
              <button className="bg-transparece rounded-md border-2 border-white px-4 py-2 font-medium text-white hover:bg-white hover:text-green-600 hover:underline">
                Create Post
              </button>
            </Link>
            <li>
              {user.photo ? (
                <div
                  className="relative cursor-pointer"
                  /* Close when lost focus */
                >
                  <img
                    className=" h-11 w-11 rounded-full bg-slate-500"
                    src={user.photo}
                    alt=""
                    onClick={() => setUserMenu(!userMenu)}
                  />
                  {userMenu && (
                    <div
                      className="absolute right-0 z-10 mt-3 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex={-1}
                      onBlur={() => setUserMenu(false)}
                    >
                      <div className="block px-4 py-2 text-sm text-gray-700">
                        <Link
                          to="/profile"
                          className="group block px-4 py-2 text-sm "
                        >
                          <div className="flex items-center gap-2">
                            <User
                              size={24}
                              className="group-hover:fill-green-600"
                            />
                            <Typography className=" font-normal text-gray-800">
                              Profile
                            </Typography>
                          </div>
                        </Link>

                        <Link
                          to="/profile"
                          className="group block px-4 py-2 text-sm "
                        >
                          <div className="flex items-center gap-2">
                            <Pencil
                              size={24}
                              className="group-hover:fill-green-600"
                            />
                            <Typography className=" font-normal text-gray-800">
                              My Post
                            </Typography>
                          </div>
                        </Link>
                        <div
                          className="group block px-4 py-2 text-sm"
                          onClick={logOut}
                        >
                          <div className="flex items-center gap-2">
                            <Stairs
                              size={24}
                              className="group-hover:fill-green-600"
                            />
                            <Typography className=" font-normal text-gray-800">
                              Log Out
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <LoadingImagePerfil size={44} />
              )}
            </li>
            {/* TODO: The exit button have been in the when click romario photo */}
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavDesktop;
