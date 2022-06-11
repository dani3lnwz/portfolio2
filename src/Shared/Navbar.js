import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/na.png'

const Navbar = () => {
    return (
        <div class="navbar bg-black">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='hover:text-pink-700'><Link to='/home'>Home</Link></li>
                        <li className='hover:text-pink-700'><Link to='/projects'>Projects</Link></li>
                        <li className='hover:text-pink-700'><Link to='/about'>About</Link></li>
                        <li className='hover:text-pink-700'><Link to='/blogs'>Blogs</Link></li>
                        <li className='hover:text-pink-700'><Link to='/contact'>Contact</Link></li>
                        <Link to='/contact'>
                            <button className='btn btn-outline text-pink-700 px-6 hover:bg-pink-700'>HIRE ME</button>
                        </Link>

                    </ul>
                </div>
                <img className='pl-10' src={logo} alt="" />
            </div>
            <div class="navbar-end pr-12 hidden lg:flex text-white font3">
                <ul class="menu menu-horizontal p-0 ">
                    <li className='hover:text-pink-700'><Link to='/home'>Home</Link></li>
                    <li className='hover:text-pink-700'><Link to='/projects'>Projects</Link></li>
                    <li className='hover:text-pink-700'><Link to='/about'>About</Link></li>
                    <li className='hover:text-pink-700'><Link to='/blogs'>Blogs</Link></li>
                    <li className='hover:text-pink-700'><Link to='/contact'>Contact</Link></li>
                    <Link to='/contact'>
                        <button className='btn btn-outline text-pink-700 px-6 hover:bg-pink-700'>HIRE ME</button>
                    </Link>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;