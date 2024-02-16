import React, { useState } from 'react'
import Recomended from './Movie_suggestion/Recomended'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { NavLink } from 'react-router-dom'

export default function Movie_items() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 5,
      spacing: 3,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
           <h1
        class="flex  font-semibold text-xl text-white py-10 px-3"
      >
        Recomended for you
      </h1>
      <div className="flexh-2/5 mx-0">
        <div className='flex h-auto'>
        {loaded && instanceRef.current && (
          <>
          <div className=' flex w-12'>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
              className="bg-white w-auto"
            />

</div>
          </>
        )}

        <div ref={sliderRef} className="keen-slider text-black gap-2 items-center flex h-full md:h-auto ">
          <div className="keen-slider__slide number-slide1 bg-black h-full max-w-lg w-auto min-w-44">
          <NavLink to='/VideoPlayer'>
            <div className='h-auto shrink-0'>
            <img src='src\assets\Poster\12th-Fail.jpeg' className='place-self-center-center object-fill h-full w-full rounded-md'></img>
            </div>
            <div className='top-5'>
              <div className='flex justify-center px-1'>
            <div className='text-white text-sm font-medium text-center '>Garuda Gamana Vrishabha Vahana</div>
            </div>

            <div className='w-full flex justify-between items-center mt-1 flex-wrap px-2'>
                   
                   <span className='flex'><img src='src\assets\logo\rottant_tomato.png' className='inline h-5'></img> <h3 className='text-white text-sm font-medium text-center text-nowrap '>12th</h3></span>
                   <span className='text-white text-sm font-medium text-center text-nowrap self-center-center'>2023</span>
                   <span className='flex'><img src='src\assets\logo\imdb_logo.png' className='inline h-5'></img> <h3 className='text-white text-sm font-medium text-center text-nowrap '>12th</h3></span>
                   </div>

            </div>
            </NavLink>
          </div>
          
          <div className="keen-slider__slide number-slide2 bg-black h-full max-w-screen-sm w-auto min-w-fit">
            <div className='h-auto shrink-0'>
            <img src='src\assets\Poster\12th-Fail.jpeg' className='place-self-center-center object-fill h-full w-full rounded-md'></img>
            </div>
            <div className='top-5'>
              <div className='flex justify-center px-1'>
            <div className='text-white text-sm font-medium text-center '>12th Fail</div>
            </div>

            <div className='w-full flex justify-between items-center mt-1 flex-wrap px-2'>
                   
                   <span className='flex'><img src='src\assets\logo\rottant_tomato.png' className='inline h-5'></img> <h3 className='text-white text-sm font-medium text-center text-nowrap '>12th</h3></span>
                   <span className='text-white text-sm font-medium text-center text-nowrap self-center-center'>2023</span>
                   <span className='flex'><img src='src\assets\logo\imdb_logo.png' className='inline h-5'></img> <h3 className='text-white text-sm font-medium text-center text-nowrap '>12th</h3></span>
                   </div>

            </div>
          </div>
          <div className="keen-slider__slide number-slide3 bg-white h-full">3</div>
          <div className="keen-slider__slide number-slide4 bg-white h-full">4</div>
          <div className="keen-slider__slide number-slide5 bg-white h-full">5</div>
          <div className="keen-slider__slide number-slide6 bg-white h-full">6</div>
          <div className="keen-slider__slide number-slide3 bg-white h-full">3</div>
          <div className="keen-slider__slide number-slide4 bg-white h-full">4</div>
          <div className="keen-slider__slide number-slide5 bg-white h-full">5</div>
          <div className="keen-slider__slide number-slide6 bg-white h-full">6</div>
        </div>
        
        {loaded && instanceRef.current && (
          <>
          <div className='flex w-14'>
            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
              className="bg-white"
            />
            </div>
          </>
        )}
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots ">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                class={"dot" + (currentSlide === idx ? " active" : "")}
                className='fill-red-900 text-red-900'
              ></button>
            )
          })}
        </div>
        
      )}
    </>
  )
}

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path className='fill-white justify-start ' d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path className='fill-white justify-end ' d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
