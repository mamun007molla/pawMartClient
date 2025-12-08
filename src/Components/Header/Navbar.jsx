import React from "react";
import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const {user,signOutUser}=use(AuthContext)
  const link = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink to="/petSupplies">Pet & Supplies</NavLink>
      </li>
      {user && <>
      <li>
        <NavLink to="/addListing">Add Listing</NavLink>
      </li>
      <li>
        <NavLink to="/myList">My Listing</NavLink>
      </li>
      <li>
        <NavLink to="/myOrder">My Orders</NavLink>
      </li>
      </>}
    </>
  );
  const handleSignout = () => {
    signOutUser();
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a href="https://ibb.co.com/BVHpqrrn">
          <img
            src="https://i.ibb.co.com/TBDfmbbW/Gemini-Generated-Image-w83vk2w83vk2w83v.png"
            alt="Gemini-Generated-Image-w83vk2w83vk2w83v"
            border="0"
            className="w-20"
          />
        </a>
        <a className="font-bold text-xl">PawMart</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      
      {user?<div className="flex gap-5 navbar-end">
        {!user?<CgProfile size={30}/>:user.photoURL ? (
          <img
            title={user.displayName}
            src={user.photoURL}
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <CgProfile size={30}/>
        )}
         <Link onClick={handleSignout} className="btn btn-secondary">
            LogOut
          </Link>
      </div>:<div className="navbar-end space-x-1.5">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/register" className="btn">Register</Link>
      </div>}
    </div>
  );
};

export default Navbar;
