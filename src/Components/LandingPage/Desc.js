import React , {useRef , useEffect} from 'react';
import './Landing.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import {TweenMax, Power3} from 'gsap';

function Desc(){
    let logo = useRef(null);
    let social1 = useRef(null);
    let social2 = useRef(null);
    let social3 = useRef(null);
    let body = useRef(null);
    let body2 = useRef(null);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let line4 = useRef(null);
    let line5 = useRef(null);
    let line6 = useRef(null);

    useEffect(()=>{
        TweenMax.fromTo(logo , {opacity : 0 , y : 30 , ease : Power3.easeOut} , {opacity : 1 , y : 0 , ease : Power3.easeOut});
        TweenMax.staggerFrom([social1 , social2 , social3] , 0.8, {opacity: 0 ,y : -40 , ease : Power3.easeOut}, .2)
        TweenMax.from(body , {opacity : 0 , x : -40 , ease : Power3.easeOut })
        TweenMax.from(body2 , {opacity : 0 , x : -40 , ease : Power3.easeOut })
        TweenMax.staggerFrom([line1,line2,line3] , 0.8 , {opacity : 0 , y : -100 , ease : Power3.easeOut} , .2);
        TweenMax.staggerFrom([line4,line5,line6] , 0.8 , {opacity : 0 , y : -200 , ease : Power3.easeOut} , .2);


    }, [])
    return(
        <div className = 'desc'>
            <div className = 'container'>
                <div className = 'row'>
                    <h1 className = 'col-12 col-sm-3  logo' ref = {el => {logo = el}}>SeeVid!</h1>
                    <div className = 'offset-sm-6 socials'>
                        <InstagramIcon className = 'handles ml-2' fontSize = 'large' ref = {el=>{social1 = el}} style = {{opacity:1}}/>
                        <FacebookIcon className = 'handles ml-2' fontSize = 'large' ref = {el=>{social2 = el}} style = {{opacity:1}}/>
                        <TwitterIcon className = 'handles ml-2' fontSize = 'large' ref = {el=>{social3 = el}} style = {{opacity:1}}/>
                    </div>
                </div>
                <div >
                    <h1 className = 'col-12 col-sm-12 info'><span ref = {el => {line1 = el}}>Lorem ipsum</span><br/>
                        <span ref = {el => {line2 = el}}>dolor sit,</span><br/>
                        <span ref = {el => {line3 = el}}>consectetur</span></h1>
                    <p className = 'explaination col-12 col-sm-12' ref = {el => {body = el}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <h3 className = 'scroll-button mt-5 col-12 col-sm-6'>Get Started <a href = '#section-2' className ='btn scroll-button-icon'><ArrowForwardIcon/></a></h3>
                </div>
                <div className = 'segments' id = 'section-2' >
                    <p className = 'headings col-12 col-sm-12'>overview</p>
                    <h1 className = 'col-12 col-sm-12 info'><span ref = {el => {line4 = el}}>sed do</span><br/>
                        <span ref = {el => {line5 = el}}>eiusmod tempor</span><br/>
                        <span ref = {el => {line6 = el}}>incididunt</span></h1>
                    <p className = 'explaination col-12 col-sm-12' ref = {el => {body2 = el}}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                  
            </div>
        </div>
    );
}

export default Desc;