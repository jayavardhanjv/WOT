import React from 'react'
// import "node_modules/video-react/dist/video-react.css"; 
import { Player } from 'video-react';

export default function My_video_player() {
  return (
    <>
    <video className="h-full w-full rounded-lg" controls >

      <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </>
  )
}
