import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex gap-4">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold btn' : 'font-bold btn'}>
                            Home
                        </NavLink>
                        <NavLink to='/listedbooks' className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold btn' : 'font-bold btn'}>
                            Listed Books
                        </NavLink>
                        <NavLink to='/pagestoread' className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold btn' : 'font-bold btn'}>
                            Pages to Read
                        </NavLink>
                        <NavLink to='/authors' className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold btn' : 'font-bold btn'}>
                            Author's
                        </NavLink>
                        <NavLink to='/schedule' className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold btn' : 'font-bold btn'}>
                            Publishing Schedule
                        </NavLink>
                        <NavLink to='/error' className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold btn' : 'font-bold btn'}>
                        404 Page
                        </NavLink>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl text-[#131313] font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-4">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold btn' : 'font-bold btn'}>
                            Home
                        </NavLink>
                        <NavLink to='/listedbooks' className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold btn' : 'font-bold btn'}>
                            Listed Books
                        </NavLink>
                        <NavLink to='/pagestoread' className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold btn' : 'font-bold btn'}>
                            Pages to Read
                        </NavLink>
                        <NavLink to='/authors' className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold btn' : 'font-bold btn'}>
                            Author's
                        </NavLink>
                        <NavLink to='/schedule' className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold btn' : 'font-bold btn'}>
                            Publishing Schedule
                        </NavLink>
                        <NavLink to='/error' className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold btn' : 'font-bold btn'}>
                        404 Page
                        </NavLink>

                    </ul>
                </div>
                <div className="navbar-end flex gap-2">
                    <a className="btn bg-[#23BE0A]">Sign in</a>
                    <a className="btn bg-[#59C6D2]">Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;