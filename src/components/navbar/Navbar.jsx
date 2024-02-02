import React from 'react'

export default function Navbar() {
  return (
    <>
    
    <nav className='bg-black dark:bg-black'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-4 p-auto'>
            <div className='flex space-x-2 rtl:space-x-auto'>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-full md:hidden hover:bg-gray-700   dark:text-gray-400  " aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only text-white">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
            </button>
            <a href='https://www.google.com' className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img src='src\assets\logo\logo.png' width={50} className=''></img>
            <span className='text-white self-center font-bold text-2xl whitespace-nowrap'>WOT</span>
            </a>
            </div>
        <div className='hidden w-full md:block md:w-auto ' id="navbar-default">
            <ul className='font-normal  flex items-center flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0'>
                <li>
                    <a href='https://www.google.com/' className='block py-2 px-3 text-white rounded md:p-0'>Home</a>
                </li>
                <li>
                <a href='https://www.google.com/' className='block py-2 px-3 text-white rounded md:p-0'>Series</a>
                </li>
                <li>
                <a href='https://www.google.com/' className='block py-2 px-3 text-white rounded md:p-0'>Recommended</a>
                </li>
                <li>
                <a href='https://www.google.com/' className='block py-2 px-3 text-white rounded md:p-0'>Tv guide</a>                </li>
                <li>
                <a href='https://www.google.com/' className='block py-2 px-3 text-white rounded md:p-0'>Random</a>
                </li>
            </ul>
            </div>
        <div className='flex space-x-6 rtl:space-x-auto md:p-0 p-4 items-center'>
        <a href='' className='block py-2 px-3 text-white rounded md:p-0 font-medium'><img src='src\assets\magnifying-glass.png' className='h-5'/></a>
        
        <div className='bg-white rounded-full  flex items-center p-0'>
        <img src='src/assets/user.jpg' className='h-10 rounded-full'></img>
        </div>
        </div>

       
        </div>
    </nav>
    
    </>
  )
}
