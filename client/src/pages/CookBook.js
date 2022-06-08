import react from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import Test from '../test.jpg';
const CookBook = () => {
  if (Auth.loggedIn()) {
    return (
      <>
      {/* Fixed */}
        <aside class="ml-[-100%]  z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
          <div>
            <div class="mt-8 text-center">
              <img
                src= { Test }
                alt=""
                class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
              />
              <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
                Monkey D. Luffy
              </h5>
              <span class="hidden text-gray-400 lg:block">Admin</span>
            </div>

            <ul class="space-y-2 tracking-wide mt-8">
              <li>

                <Link to="/">
                <a
                  href="#"
                  aria-label="dashboard"
                  class="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                >
                  <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                      class="fill-current text-cyan-400 dark:fill-slate-600"
                    ></path>
                    <path
                      d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                      class="fill-current text-cyan-200 group-hover:text-cyan-300"
                    ></path>
                    <path
                      d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                      class="fill-current group-hover:text-sky-300"
                    ></path>
                  </svg>
                  <span class="-mr-1 font-medium">Home</span>
                </a>
              </Link>
              </li>
              <li>

              <Link to = '/Form'>
                <a
                  href="#"
                  class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      class="fill-current text-gray-300 group-hover:text-cyan-300"
                      fill-rule="evenodd"
                      d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                      clip-rule="evenodd"
                    />
                    <path
                      class="fill-current text-gray-600 group-hover:text-cyan-600"
                      d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                    />
                  </svg>
                  <span class="group-hover:text-gray-700">New Search</span>
                </a>
              </Link>

              </li>
              <li>

              <Link to = "/random">
                <a
                  href="#"
                  class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      class="fill-current text-gray-600 group-hover:text-cyan-600"
                      fill-rule="evenodd"
                      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clip-rule="evenodd"
                    />
                    <path
                      class="fill-current text-gray-300 group-hover:text-cyan-300"
                      d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                    />
                  </svg>
                  <span class="group-hover:text-gray-700">Hot Or Not</span>
                </a>
              </Link>

              </li>
              <li>
            <Link to="/AboutUs">
                <a
                  href="#"
                  class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      class="fill-current text-gray-600 group-hover:text-cyan-600"
                      d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                    />
                    <path
                      class="fill-current text-gray-300 group-hover:text-cyan-300"
                      d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                    />
                  </svg>
                  <span class="group-hover:text-gray-700">About Us</span>
                </a>
              </Link>
              </li>
              <li>
                <a
                  href="#"
                  class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      class="fill-current text-gray-300 group-hover:text-cyan-300"
                      d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                    />
                    <path
                      class="fill-current text-gray-600 group-hover:text-cyan-600"
                      fill-rule="evenodd"
                      d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="group-hover:text-gray-700">Our Repo!</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
            <a href="/" onClick={Auth.logout}>
              <button class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span class="group-hover:text-gray-700">Logout</span>
              </button>
            </a>
          </div>
        </aside>

        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] border-2-red">
          <div class="px-6 pt-6 2xl:container">
            <div class="flex justify-center items-center h-[80vh] border-2 border-dashed border-gray-300 rounded-xl max-w-screen-xl	">
              {/* Place Content Here.... */}
              <div class="w-full space-y-0.5">
                <label for="photo" class="text-xs font-medium text-gray-500"> Your Photo </label>
                <input
                  id="photo"
                  type="file"
                  class="block w-full cursor-pointer appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm transition focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" />
              </div>
              <span>Content</span>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <ul className="flex-row">
        <li className="mx-1">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-1">
          <Link to="/signup">Signup</Link>
        </li>
        <li className="mx-1">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    );
  }
};

export default CookBook;
