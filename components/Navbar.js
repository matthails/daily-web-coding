import React, { useContext } from 'react';
import Link from 'next/link';
import { AuthContext } from './../context/AuthContext';
import { useRouter } from 'next/router';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 flex h-[3rem] justify-between items-center">
        <div className="text-2xl font-bold">Logo</div>
        <div className="space-x-8">
          {user && (
            <>
              <span
                id="logout"
                onClick={() => {
                  logout();
                  router.push('/');
                }}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 cursor-pointer"
              >
                Logout {user.email}
              </span>

              <Link href="/dashboard">
                <a className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                  Dashboard
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
