import React from 'react'
import my_video_player from '../components/Movie_play_page/My_video_player'
import My_video_player from '../components/Movie_play_page/My_video_player'

export default function Play_page() {
  return (
    <>
    <div className='w-full h-auto'>
        <div className='block w-full h-auto bg-black p-auto m-auto'>
            <div className='p-20 pb-5 w-full h-auto object-contain '>
                <My_video_player />
            </div>
            <div className='h-auto w-full px-20 '>
                <div class=''>
                    <span id='title' className='text-white font-bold text-4xl'>Fighter</span>
                    <div className='space-x-2 rtl:space-x-auto '>
                        <span className='text-white font-bold text-sm'>2024</span>
                        <span className='text-white font-bold text-sm'>|</span>
                        <span className='text-white font-bold text-sm'>2h 46m</span>
                    </div>
                </div>
                <div>
                    <div>
                        <span className='text-white font-bold text-4xl'>IMDb RATING</span>
                        <span className='text-white font-bold text-4xl'>IMDb RATING</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
