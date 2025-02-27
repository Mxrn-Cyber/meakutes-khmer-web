import { signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link href="/profile" className="text-white">
            Profile
          </Link>
        </li>
        <li>
          <button
            onClick={() => signOut()}
            className="text-white bg-red-500 p-2 rounded"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
// Compare this snippet from src/pages/_app.js:
// import { Provider } from "next-auth/react";
//
// export default function App({ Component, pageProps }) {
//   return (
//     <Provider session={pageProps.session}><
//
//
//
//  /Provider>
//           <Component {...pageProps} />
