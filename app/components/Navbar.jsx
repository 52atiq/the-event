import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
      <nav>
        <div className="container flex justify-between items-center py-4">
          <div className="nav-brand">
            <Link href="/">
              <Image src="/globe.svg" alt="Eventry" width={35} height={35} />
            </Link>
          </div>

          <ul className="flex gap-4 text-[#9C9C9C]">
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;