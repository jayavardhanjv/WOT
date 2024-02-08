import React from 'react';
import Slider from "react-slick";



export default function Recomended() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <>
    <div class="flex flex-col  md:m-15  px-3 md:px-10 ">
<h1
        class="flex  font-semibold text-3xl text-white py-10 px-3"
      >
        Recomended for you
      </h1>
      <div
        class="flex  pb-1 items-center"
      >
        {/* <button id="slideLeft" type="button" className='z-10 -mr-10 flex items-center hover:bg-gray-500 rounded-full'>  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={40}
    height={40}
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    viewBox="0 0 426.667 426.667"
    className='rotate-180'

  >
    <g fill="#fff">
      <path
        d="M213.332 0C95.512 0 0 95.512 0 213.332s95.512 213.336 213.332 213.336 213.336-95.516 213.336-213.336C426.535 95.566 331.102.132 213.332 0zm0 405.332c-106.039 0-192-85.96-192-192 0-106.039 85.961-192 192-192 106.04 0 192 85.961 192 192-.121 105.988-86.012 191.879-192 192zm0 0"
        data-original="#000000"
      />
      <path
        d="M188.355 130.637c-4.437-3.88-11.175-3.426-15.054 1.008-3.875 4.437-3.422 11.175 1.012 15.054l76.156 66.633-76.16 66.637c-4.438 3.879-4.887 10.617-1.012 15.05 3.879 4.438 10.617 4.891 15.055 1.012l85.332-74.668a10.67 10.67 0 0 0 0-16.063zm0 0"
        data-original="#000000"
      />
    </g>
  </svg></button> */}
        <div
          className="slider-container bg-white max-w-full w-screen"
        >
          <Slider {...settings} >
            <h1>hi1</h1>
            <h1>hi2</h1>
            <h1>hi3</h1>
            <h1>hi4</h1>
          
          </Slider>
        </div>
        
    {/* <button id="slideRight" type="button" className='-ml-8 hover:bg-gray-500 rounded-full flex items-center-20 z10 h-full'><svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={40}
    height={40}
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    viewBox="0 0 426.667 426.667"
    

  >
    <g fill="#fff">
      <path
        d="M213.332 0C95.512 0 0 95.512 0 213.332s95.512 213.336 213.332 213.336 213.336-95.516 213.336-213.336C426.535 95.566 331.102.132 213.332 0zm0 405.332c-106.039 0-192-85.96-192-192 0-106.039 85.961-192 192-192 106.04 0 192 85.961 192 192-.121 105.988-86.012 191.879-192 192zm0 0"
        data-original="#000000"
      />
      <path
        d="M188.355 130.637c-4.437-3.88-11.175-3.426-15.054 1.008-3.875 4.437-3.422 11.175 1.012 15.054l76.156 66.633-76.16 66.637c-4.438 3.879-4.887 10.617-1.012 15.05 3.879 4.438 10.617 4.891 15.055 1.012l85.332-74.668a10.67 10.67 0 0 0 0-16.063zm0 0"
        data-original="#000000"
      />
    </g>
  </svg></button> */}
      </div>
</div>
{/* <style>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
};
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style> */}
    </>
  )
}
