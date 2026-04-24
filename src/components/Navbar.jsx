'use client';

import Link from 'next/link';
import { authClient } from '@/lib/auth-client';

export default function NavbarPage() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <header className="border-b border-gray-800 bg-[#0b1220] text-white">
      <nav className="w-10/12 mx-auto flex justify-between items-center py-4">
        <h1 className="text-xl font-bold">AuthSphere</h1>

        <div className="flex gap-4 items-center">
          <Link href="/">Home</Link>
          <Link href="/server-action">Dashboard</Link>

          {!user ? (
            <>
              <Link href="/signin">Sign in</Link>
              <Link
                href="/signUp"
                className="bg-purple-600 px-4 py-2 rounded-lg"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              <span>{user.name}</span>
              <button
                onClick={() => authClient.signOut()}
                className="bg-red-500 px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
