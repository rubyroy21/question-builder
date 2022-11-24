/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Question Builder.</h1>
      </div>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="*" legacyBehavior>
        <a>About</a>
      </Link>
      <Link href="*" legacyBehavior>
        <a>Contact</a>
      </Link>
    </nav>
  );
};

export default Navbar;
