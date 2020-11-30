import React , {useRef , useEffect} from 'react';
import './Landing.css';
import woman from '../media/woman.jpg';
import ml from '../media/ml.jpg';
import {TweenMax , Power3} from 'gsap';

function Pictures(){
    let img1 = useRef(null);
    let img2 = useRef(null);
    useEffect(() => {
        TweenMax.from(img1 , {opacity : 0 , y : 40 , ease: Power3.easeOut});
        // TweenMax.from(img2 , {opacity : 0 , x : 40 , ease: Power3.easeOut});
    },[])
    return(
        <div className = 'pictures'>
            <img src = {woman} alt="" width = '100%' height = 'auto' ref = {el => {img1 = el}}/>
            <img src = {ml} alt="" width = '100%' height = 'auto' ref = {el => {img2 = el}}/>
        </div>
    );
}

export default Pictures;