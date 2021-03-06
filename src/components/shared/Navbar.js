import React from 'react';
import { Link } from "react-router-dom";

const todos = <Link to="/" >TO DOs</Link>
const completedTasks = <Link to="/completedTasks" >completed Tasks</Link>
const calendar = <Link to="/calendar" >calendar</Link>
const contactDev = <a class="btn btn-primary btn-outline" href='https://mahfuzswaron.netlify.app/' target="_blank" rel="noreferrer">Contact Dev</a>
const Navbar = () => {
    return (
        <nav class="navbar bg-base-100 px-5 lg:px-20">

            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                        <li>{todos}</li>
                        <li>{completedTasks}</li>
                        <li>{calendar}</li>
                        <li>{contactDev}</li>

                    </ul>
                </div>

                <Link className="btn btn-ghost normal-case text-xl" to="/" ><span className='text-primary'>Tasks</span> <span> Manager</span></Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 uppercase">
                    <li>{todos}</li>
                    <li>{completedTasks}</li>
                    <li>{calendar}</li>
                </ul>
            </div>
            <div class="hidden lg:flex navbar-end">
                {contactDev}
            </div>

        </nav>
    );
};

export default Navbar;