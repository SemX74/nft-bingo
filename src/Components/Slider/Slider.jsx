import React from 'react';
import './Slider.css'
import {ReactComponent as Left} from '../../Misc/Scrollbar/Vector (1).svg'
import {ReactComponent as Right} from "../../Misc/Scrollbar/Vector.svg"
import One from "../../Misc/Scrollbar/photo_2022-07-25_17-34-39.jpg"
import Two from "../../Misc/Scrollbar/photo_2022-07-25_17-38-01 (2).jpg"
import Three from "../../Misc/Scrollbar/photo_2022-07-25_17-38-01.jpg"
import Four from "../../Misc/Scrollbar/photo_2022-07-25_17-38-02.jpg"
import Five from "../../Misc/Scrollbar/photo_2022-07-25_17-34-39.jpg"


const Slider = () => {

    return (
        <div classname='Slider'>
            <div className='Slider-wrapper'>

                <img className='Slider_img' src={One} alt="" />
                <img className='Slider_img' src={Two} alt="" />
                <img className='Slider_img' src={Three} alt="" />
                <img className='Slider_img' src={Four} alt="" />
                <img className='Slider_img' src={Five} alt="" />

            </div>
            <div className="Slider-buttons">
                <button><Left /></button>
                <button><Right /></button>
            </div>
        </div>
      );
}
 
export {Slider};
