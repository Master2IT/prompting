"use client";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const onSetProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    onSetProviders();
  }, []);

  return (
    <nav className="navbar">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost hover:bg-transparent text-xl">
          Prompting
        </Link>
      </div>
      <ul className="menu menu-horizontal items-center">
        {session?.user ? (
          <>
            <li className="md:flex hidden mr-10">
              <Link
                className="bg-primary text-white hover:bg-secondary hover:text-white"
                href="/create-prompt"
              >
                Create your Prompt
              </Link>
            </li>
            <li className="mr-2">
              <Menu name={session?.user.name} image={session?.user.image} />
            </li>
          </>
        ) : (
          providers &&
          Object.values(providers).map((provider) => (
            <button
              key={provider.name}
              onClick={signIn}
              className="btn btn-sm px-5 btn-primary btn-outline"
            >
              <svg
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                >
                  <path d="M20 12a8 8 0 0 0-8-8m0 16a7.985 7.985 0 0 0 6.245-3" />
                  <path strokeLinejoin="round" d="M4 12h10m0 0l-3-3m3 3l-3 3" />
                </g>
              </svg>
              Sign in
            </button>
          ))
        )}
      </ul>
    </nav>
  );
};

const Menu = ({ image, name }) => {
  return (
    <details>
      <summary>
        {name}
        <Image
          src={image}
          width={34}
          height={34}
          className="rounded-full hover:bg-transparent"
          alt="profile"
        />
      </summary>
      <ul className="gap-2 right-0 flex flex-col w-[200px]">
        <li className="flex md:hidden">
          <Link
            className="text-primary hover:bg-transparent hover:text-secondary hover:border-secondary"
            href="/create-prompt"
          >
            <svg
              width="1.2rem"
              height="1.2rem"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" stroke="currentColor" strokeWidth="1.5">
                <path
                  strokeLinecap="round"
                  d="M14.5 6.5h3m0 0h3m-3 0v3m0-3v-3m-14.95 12c.065-.65.21-1.088.536-1.414c.586-.586 1.528-.586 3.414-.586c1.886 0 2.828 0 3.414.586c.586.586.586 1.528.586 3.414c0 1.886 0 2.828-.586 3.414c-.586.586-1.528.586-3.414.586c-1.886 0-2.828 0-3.414-.586c-.31-.31-.456-.718-.524-1.313"
                />
                <path d="M2.5 6.5c0-1.886 0-2.828.586-3.414C3.672 2.5 4.614 2.5 6.5 2.5c1.886 0 2.828 0 3.414.586c.586.586.586 1.528.586 3.414c0 1.886 0 2.828-.586 3.414c-.586.586-1.528.586-3.414.586c-1.886 0-2.828 0-3.414-.586C2.5 9.328 2.5 8.386 2.5 6.5Zm11 11c0-1.886 0-2.828.586-3.414c.586-.586 1.528-.586 3.414-.586c1.886 0 2.828 0 3.414.586c.586.586.586 1.528.586 3.414c0 1.886 0 2.828-.586 3.414c-.586.586-1.528.586-3.414.586c-1.886 0-2.828 0-3.414-.586c-.586-.586-.586-1.528-.586-3.414Z" />
              </g>
            </svg>
            Create Your Prompt
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <svg
              width="1.2rem"
              height="1.2rem"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" stroke="#000000" strokeWidth="1.5">
                <circle cx="12" cy="6" r="4" />
                <path
                  strokeLinecap="round"
                  d="M19.997 18c.003-.164.003-.331.003-.5c0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S4 22 12 22c2.231 0 3.84-.157 5-.437"
                />
              </g>
            </svg>
            My Profile
          </Link>
        </li>
        <li>
          <button className="text-red-500 hover:text-red-500" onClick={signOut}>
            <svg
              width="1.2rem"
              height="1.2rem"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              >
                <path stroke-linejoin="round" d="M15 12H6m0 0l2 2m-2-2l2-2" />
                <path d="M12 21.983c-1.553-.047-2.48-.22-3.121-.862c-.769-.768-.865-1.946-.877-4.121M16 21.998c2.175-.012 3.353-.108 4.121-.877C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2h-1c-2.829 0-4.243 0-5.121.879c-.769.768-.865 1.946-.877 4.121M3 9.5v5c0 2.357 0 3.535.732 4.268c.732.732 1.911.732 4.268.732M3.732 5.232C4.464 4.5 5.643 4.5 8 4.5" />
              </g>
            </svg>
            Sign Out
          </button>
        </li>
      </ul>
    </details>
  );
};

export default Nav;
