import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <header>Navbar</header>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/Ninjas">
          <a>Ninja Listing</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
