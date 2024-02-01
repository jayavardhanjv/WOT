import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className='w-full mt-0  bg-gray-800'>
    <nav className='flex justify-between px-24 py-5 items-center'>
        <div className='mx-2 flex-shrink-0'>
            <img src='src\assets\logo\logo.png' width={50} className=''></img>
        </div>
        <div >
            <ul className='flex justify-evenly gap-5'>
                <li>
                    Home
                </li>
                <li>
                    Series
                </li>
                <li>
                    Recomended
                </li>
                <li>
                    TV guide
                </li>
                <li>
                    Random
                </li>
            </ul>
        </div>
        <div className='flex justify-between gap-5'>
            <div>
                search
            </div>
            <div>
                icon
            </div>
        </div>
    </nav>
    </div>
    </>
  )
}
