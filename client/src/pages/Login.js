import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import test from '../grd.jpg';

function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
      

  return (
    <section>
    <div 
    class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
      <form 
            onSubmit={handleFormSubmit}

      class="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full"><Link to="/signup">← Go to Signup</Link>
        <div class="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
          <div class="w-full px-6 py-3">
            <div>
              <div class="mt-3 text-left sm:mt-5">
                <div class="inline-flex items-center w-full">
                  <h3 class="text-lg font-bold text-neutral-600 l eading-6 lg:text-5xl">
                    Sign In
                  </h3>
                </div>
                <div class="mt-4 text-base text-gray-500">
                  <p>Sign In to see whats cooking...</p>
                </div>
              </div>
            </div>

            <div class="mt-6 space-y-2">
              <div>
                <label htmlFor="email" class="sr-only">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  onChange = {handleChange}
                  class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  placeholder="Enter your email"
                />
              </div>


              <div>
                <label hmltFor="password" class="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  id="pwd"
                  onChange = {handleChange}
                  class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  placeholder="Enter your password"
                />
              </div>


              <div class="flex flex-col mt-4 lg:space-y-2">
                <button
                  type="submit"
                  class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  submit
                </button>
              </div>
            </div>
          </div>
          <div class="order-first hidden w-full lg:block ">
            <img
              class="pl-4 object-cover bg-cover h-full bg-cover rounded-l-lg"
              src={ test}
            />
          </div>
          {error ? (
          <div className = "text-center">
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        </div>
      </form>
    </div>
  </section>
        


  );
}

export default Login;
