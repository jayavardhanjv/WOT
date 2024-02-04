import React from 'react'
import my_video_player from '../components/Movie_play_page/My_video_player'
import My_video_player from '../components/Movie_play_page/My_video_player'

export default function Play_page() {
  return (
    <>
    <div className='w-full h-full bg-black '>
        <div className='block w-full h-full p-auto m-auto'>
            <div className='p-10 md:p-15 pb-5 w-full h-auto object-contain '>
                <My_video_player />
            </div>
            <div className='h-auto w-full px-10 md:px-20 flex justify-between'>
                <div class=''>
                    <span id='title' className='text-white font-bold text-4xl'>Fighter</span>
                    <div className='space-x-2 rtl:space-x-auto '>
                        <span className='text-gray-500 font-bold text-sm'>2024</span>
                        <span className='text-gray-500 font-bold text-sm'>|</span>
                        <span className='text-gray-500 font-bold text-sm'>2h 46m</span>
                    </div>
                </div>
                <div className=' hidden md:inline'>
                    <div className='flex justify-between space-x-2 rtl:space-x-reverse'>
                        <div className='space-y-2 '>
                        <span className='flex'><img src='src\assets\logo\imdb_logo.png' className='inline h-5'></img> <span className='text-gray-500 font-bold text-sm block'>IMDB RATING</span></span>
                        
                        <div className='flex justify-center'>
                        <span className='text-gray-500 font-bold text-base items-center'>7.5</span>
                        </div>
                        </div>
                        <div className='space-y-2 '>
                        <span className='flex'><img src='src/assets/logo/rottant_tomato.png' className='inline h-5'></img> <span className='text-gray-500 font-bold text-sm block'>RT RATING</span></span>
                        <div className='flex justify-center'>
                        <span className='text-gray-500 font-bold text-base items-center'>7.5</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-auto w-full  px-10 md:px-20 py-5 md:flex justify-end'>
                <div className='space-y-2'>
                <div className='space-x-2 rtl:space-x-reverse text-white'>
                    <span>Romance</span>
                    <span>|</span>
                    <span>Romance</span>
                    <span>|</span>
                    <span>Romance</span>
                </div>
                <div className='w-full flex justify-between'>
                <div className=' w-full md:w-1/2'>
                    <p className='text-white'>IPS officer Manoj Kumar Sharma fearlessly embraces the idea of restarting his academic journey and reclaiming his destiny at a place where millions of students attempt the world's toughest competitive exam: UPSC.</p>
                </div>
  
                </div>
                </div>
                <div className=' flex md:justify-end my-5 md:my-0'>
                <div className=' w-full md:w-1/2 '>
                    <p className='text-white text-leftmd:text-right'>Director
Vidhu Vinod Chopra
Writers
Vidhu Vinod ChopraJaskunwar KohliAnurag Pathak
Stars
Vikrant MasseyMedha ShankarJoshi Anantvijay</p>
                </div>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}
