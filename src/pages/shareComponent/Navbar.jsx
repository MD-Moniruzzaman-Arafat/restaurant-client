import logo from "../../assets/logo.png";

export default function Navbar() {
  const menu = (
    <>
      <li>
        <a className="hover:bg-white">HOME</a>
      </li>

      <li>
        <a className="hover:bg-white">CONTACT US</a>
      </li>
      <li>
        <a className="hover:bg-white">DASHBOARD</a>
      </li>
      <li>
        <a className="hover:bg-white">OUR MENU</a>
      </li>
      <li>
        <a className="hover:bg-white">OUR SHOP</a>
      </li>
      <li>
        <a className="hover:bg-white">SIGN OUT</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-gray-400 bg-opacity-30 fixed top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-green-950 font-extrabold "
            >
              {menu}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="" width={50} />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-green-950 font-extrabold">
            {menu}
          </ul>
        </div>
      </div>
    </div>
  );
}
