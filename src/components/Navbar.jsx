'use client';

import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const NavbarPage = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div>
      <header className="shadow-2xs border-b-2 py-4">
        <nav className="flex items-center justify-between w-10/12 mx-auto">
          <h1>Auth</h1>

          <ul className="flex items-center gap-4">
            <Link
              className="bg-purple-500 px-4 py-2 rounded-3xl hover:bg-purple-800 duration-300"
              href="/"
            >
              Home
            </Link>

            {!user ? (
              <>
                <Link
                  className="bg-purple-500 px-4 py-2 rounded-3xl hover:bg-purple-800 duration-300"
                  href="/signUp"
                >
                  SignUp
                </Link>

                <Link
                  className="bg-purple-500 px-4 py-2 rounded-3xl hover:bg-purple-800 duration-300"
                  href="/signin"
                >
                  Login
                </Link>
              </>
            ) : (
              <>
                <div>
                  <p className="text-sm font-semibold">{user?.name}</p>
                </div>

                <Button onClick={handleSignOut} color="danger">
                  SignOut
                </Button>
              </>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavbarPage;
