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
      perView: 4,
      spacing: 5,
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
      <div className="flex w-full h-60">
      {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
              className="bg-white h-10 p-16"
            />


          </>
        )}
        <div ref={sliderRef} className="keen-slider text-black gap-5 items-center">
          <div className="keen-slider__slide number-slide1 bg-white ">1</div>
          <div className="keen-slider__slide number-slide2 bg-white">2</div>
          <div className="keen-slider__slide number-slide3 bg-white">3</div>
          <div className="keen-slider__slide number-slide4 bg-white">4</div>
          <div className="keen-slider__slide number-slide5 bg-white">5</div>
          <div className="keen-slider__slide number-slide6 bg-white">6</div>
        </div>
        {loaded && instanceRef.current && (
          <>


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
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots bg-white">
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
                className='fill-black'
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
