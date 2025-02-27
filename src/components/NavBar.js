import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg font-bold">Tourism Explorer</div>
        <div>
          <Link href="/" className="text-white mr-4">
            Home
          </Link>
          <Link href="/discover" className="text-white mr-4">
            Discover
          </Link>
          <Link href="/popular" className="text-white mr-4">
            Popular
          </Link>
          <Link href="/about" className="text-white mr-4">
            About Us
          </Link>
          <Link href="/profile" className="text-white mr-4">
            Profile
          </Link>
          <Link href="/login" className="text-white mr-4">
            Login
          </Link>
          <Link href="/signup" className="text-white">
            Sign Up
          </Link>
        </div>
      </div>
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
