import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navMenu = <>
        <li className="font-medium "><NavLink to={"/"}>HOME</NavLink></li>
        <li className="font-medium "><NavLink to={"/contact-us"}>CONTACT US</NavLink></li>
        <li className="font-medium "><NavLink to={"/dashboard"}>DASHBOARD</NavLink></li>
        <li className="font-medium "><NavLink to={"/our-menu"}>OUR MENU</NavLink></li>
        <li className="font-medium "><NavLink to={"/our-shop"}>OUR SHOP</NavLink></li>
        <li className="font-medium "><NavLink to={"/sign-out"}>SIGN OUT</NavLink></li>
    </>



    return (
        <div className="navbar fixed z-10 bg-slate-500 bg-opacity-25">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-white">BISTRO BOSS</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    {navMenu}
                </ul>
            </div>

        </div>
    );
};



export default Navbar;