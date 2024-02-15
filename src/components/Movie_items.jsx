import React, { useState } from 'react'
import Recomended from './Movie_suggestion/Recomended'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

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
       
        <div ref={sliderRef} className="keen-slider text-black gap-1 items-center flex h-full md:h-auto ">
          <div className=" number-slide1 bg-black h-full max-w-lg w-auto min-w-44">
            <div className='h-auto shrink-0'>
            <img src='src\assets\Poster\12th-Fail.jpeg' className='place-self-center-center object-fill h-full w-full'></img>
            </div>
            <div className=''>
              <div className='flex justify-center'>
            <div className='text-white self-center text-center '>Garuda Gamana Vrishabha Vahana</div>
            </div>
            <div className='flex justify-evenly h-auto'>
                    <div className='flex justify-between space-x-2 rtl:space-x-reverse'>
                        <div className='space-y-2 '>
                        <span className='flex'><img src='src\assets\logo\imdb_logo.png' className='inline h-5'></img> <span className='text-gray-500 font-bold text-base items-center'>7.5</span></span>

                        </div>
                        <div className='space-y-2 '>
                        <span className='flex'><img src='src/assets/logo/rottant_tomato.png' className='inline h-5'></img><span className='text-gray-500 font-bold text-base items-center'>7.5</span></span>

                        </div>
                    </div>
            </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide2 bg-white h-full">2</div>
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
