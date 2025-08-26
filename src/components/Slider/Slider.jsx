import React, { useRef } from 'react'
import './slider.scss'
const Slider = ({children}) => {
    const sliderRef = useRef(null);
    function scrollLeft() {
        sliderRef.current.scrollBy({left: -150, behavior: 'smooth'})
    }
    function scrollRight() {
        sliderRef.current.scrollBy({left: 150, behavior: 'smooth'})
    }
  return (
    <div className='slider'>
        <button onClick={scrollLeft} className='slider__btn'>{'<'}</button>
        <div className='slider__content' ref={sliderRef}>
            {children}
        </div>
        
        <button onClick={scrollRight} className='slider__btn'>{'>'}</button>
    </div>
  )
}

export default Slider