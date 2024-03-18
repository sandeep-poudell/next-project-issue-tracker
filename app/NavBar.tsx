import React from 'react';
import Link from "next/link";
import { FaFeatherAlt } from "react-icons/fa";

const NavBar = () => {
    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'Issues', href: '/issues'}
    ]

    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
            <Link href='/'><FaFeatherAlt /></Link>
            <ul className='flex space-x-6 px-5'>
                {links.map(link =>
                    <Link className='text-zinc-500 hover:text-zinc-900 transition-colors'
                          key={link.href}
                          href={link.href}>{link.label}</Link>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;