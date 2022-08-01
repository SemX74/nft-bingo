import React,{useState, useRef} from 'react';
import './Slider.css'
import Slider from 'react-slick';
import {ReactComponent as Left} from '../../Misc/Scrollbar/Vector (1).svg'
import {ReactComponent as Right} from "../../Misc/Scrollbar/Vector.svg"
import One from "../../Misc/Scrollbar/OTwo.jpg"
import Two from "../../Misc/Scrollbar/Ofive.jpg"
import Three from "../../Misc/Scrollbar/One.jpg"
import Four from "../../Misc/Scrollbar/Three.jpg"
import Five from "../../Misc/Scrollbar/Zero.jpg"

const images = [One,Two,Three,Four,Five]
const Sliderr = () => {
    const sliderRef  = useRef()
    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1030,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 525,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
        centerMode:true,
        centerPAdding:0,
      };
    return (
        <div>
            <div className='Slider-wrapper'>
                <Slider className='Slider' arrows={false} ref={sliderRef}{...settings}>
                    <img className='Slider_img' src={One} alt="" />
                    <img className='Slider_img' src={Two} alt="" />
                    <img className='Slider_img' src={Three} alt="" />
                    <img className='Slider_img' src={Four} alt="" />
                    <img className='Slider_img' src={Five} alt="" />
                </Slider>
            </div>
            <div className="Slider-buttons">
                <Left cursor='pointer' onClick={() => sliderRef.current.slickPrev()}/>
                <Right cursor='pointer' onClick={() => sliderRef.current.slickNext()}/>
            </div>
        </div>
      );
}
 
export {Sliderr};
