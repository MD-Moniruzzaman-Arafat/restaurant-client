import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const navMenu = (
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'contact-us'}>Contact Us</Link></li>
            <li><a>Dashboard</a></li>
            <li><Link to={'our-menu'}>Our Menu</Link></li>
            <li><Link to={'our-shop'}>Our Shop</Link></li>
            <li><a>Sign Out</a></li>
        </>
    );

    return (
        <>
            <div className="navbar fixed z-10 bg-[#15151580] text-amber-50 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-1 mt-3 w-52 p-2 shadow">

                            {navMenu}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl">Restaurant</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navMenu}
                    </ul>
                </div>
            </div>
        </>
    )
}
