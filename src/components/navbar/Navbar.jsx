import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    
    <nav className='bg-black dark:bg-black sticky z-10'>
        <div className='flex-nowrap max-w-screen-xl flex items-center justify-between mx-auto md:p-4 '>
            <div className='flex space-x-2 rtl:space-x-auto'>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-full md:hidden hover:bg-gray-700   dark:text-gray-400  " aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only text-white">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
            </button>
            <NavLink to="/" className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img src='src\assets\logo\logo.png' width={50} className=''></img>
            <span className='text-white self-center font-bold text-2xl whitespace-nowrap'>WOT</span>
            </NavLink>
            </div>
        <div className='hidden w-full md:block md:w-auto ' id="navbar-default">
            <ul className='font-normal  flex items-center flex-col p-4 md:p-0 mt-4 md:flex-row  md:space-x-2 lg:space-x-8 rtl:space-x-reverse md:mt-0 mx-5'>
                <li>
                    <NavLink to='/' className='block py-2 px-3 text-white rounded md:p-0'>Home</NavLink>
                </li>
                <li>
                <NavLink to='alltpe' className='block py-2 px-3 text-white rounded md:p-0'>Series</NavLink>
                </li>
                <li>
                <a href='https://www.google.com/' className='block py-2 px-3 text-white rounded md:p-0'>Recommended</a>
                </li>
                <li>
                <a href='https://www.google.com/' className='block py-2 px-3 text-white rounded md:p-0'>Tv</a>                </li>
                <li>
                <a href='https://www.google.com/' className='block py-2 px-3 text-white rounded md:p-0'>Random</a>
                </li>
            </ul>
            </div>
        <div className='flex space-x-3 md:space-x-6 rtl:space-x-auto md:p-0 p-4 items-center'>
        {/* <a href='' className='block py-2 px-3 text-white rounded md:p-0 font-medium'><img src='src\assets\magnifying-glass.png' className='h-5'/></a> */}
        <div class='max-w-md mx-auto'>
    <div class="static flex items-center w-full h-10 md:h-12 rounded-lg focus-within:shadow-lg bg-transparent md:bg-gray-400 overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-gray-400 focus:bg-white placeholder:text-white  hidden md:inline"
        type="text"
        id="search"
        placeholder="Search something.." /> 
    </div>
</div>
        <div className='bg-gray-400 rounded-full  flex items-center p-0'>
        <img src='src/assets/user.jpg' className='h-8 md:h-10 rounded-full'></img>
        </div>
        </div>

       
        </div>
    </nav>
    
    </>
  )
}
