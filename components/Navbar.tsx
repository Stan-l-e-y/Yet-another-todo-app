import React, { useEffect } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <>
      <div className="flex justify-end pr-20 pt-20">
        {session ? (
          <Image
            className="rounded-full w-12 mr-12"
            src={session.user.image}
            alt={''}
            width={50}
            height={50}
          />
        ) : (
          ''
        )}
        {session ? (
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => signIn('google')}
          >
            Sign in
          </button>
        )}
      </div>
    </>
  );
}
