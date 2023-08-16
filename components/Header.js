import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
const Header = () =>{
    const menuItems=<>
      <li className='mx-5'>About Us</li>
      <li className='mx-5'>What We do</li>
      <li className='mx-5'>Our Work</li>
      <li className='mx-5'>Blog</li>
      <li className='mx-5'>Say Hi</li>
      </>
    return(
      <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
        <div className="navbar-start">
         <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {menuItems}
           </ul>
         </div>
         <Link href="/"><Image

                  src="/react-nav.png"
                  alt="react"
                  width={80}
                  height={23}
                />
                </Link>
        </div>
         <div className="navbar-center hidden lg:flex">
           <ul className="menu menu-horizontal px-1">
           {menuItems}
           </ul>
         </div>
      </div>
    );
}
export default Header;