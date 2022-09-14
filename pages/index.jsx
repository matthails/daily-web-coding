import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from './../context/AuthContext';
import Link from 'next/link';
import { withPublic } from '../utils/route';

const Login = () => {
  const { login } = useContext(AuthContext);
  const router = useRouter();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(data.email, data.password);
      router.push('/dashboard');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) =>
                    setData({
                      ...data,
                      email: e.target.value,
                    })
                  }
                  value={data.email}
                  required
                  type="email"
                  placeholder="Enter email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) =>
                    setData({
                      ...data,
                      password: e.target.value,
                    })
                  }
                  value={data.password}
                  required
                  type="password"
                  placeholder="Enter password"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center m-4">
          <p className="text-sm text-gray-900">
            Not yet registered?
            <Link href="/register">
              <a className="text-base text-indigo-600 hover:text-indigo-500 ml-2">
                Register
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default withPublic(Login);
