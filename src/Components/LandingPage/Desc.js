import React from 'react';
import './Landing.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import vid from '../media/home.jpg';
import ml from '../media/ml.jpg';
import landing from '../media/landing.jpg';
import upload from '../media/uploading.svg';
import result from '../media/result.png';
import processing from '../media/processing.png';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


function Desc(){
    return(
        <div className = 'desc'>
            <div className = 'container container-c'>
                <div className = 'row padd-u'>
                    <h1 className = 'col-12 logo' >SeeVid!</h1>
                </div>
                <div className = 'row socials'>
                <Zoom top opposite cascade>
                    <div className = 'col-12'>
                        <InstagramIcon className = 'handles ml-2' fontSize = 'large' style = {{opacity:1}}/>
                        <FacebookIcon className = 'handles ml-2' fontSize = 'large' style = {{opacity:1}}/>
                        <TwitterIcon className = 'handles ml-2' fontSize = 'large' style = {{opacity:1}}/>
                    </div>
                </Zoom>
                </div>
                <div className = 'row'>
                <Fade left opposite cascade>

                    <div className = 'col-12 col-sm-6 des'>

                        <h1 className = 'info'>Lorem ipsum<br/>
                            dolor sit,<br/>
                            consectetur</h1>
                        <p className = 'explaination' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <h3 className = 'scroll-button mt-5'>Get Started <a href = '/login' className ='btn scroll-button-icon'><ArrowForwardIcon/></a></h3>
                    </div>
                </Fade>
                <Fade right>

                    <div className = 'col-12 col-sm-6'>
                        <img src = {vid} alt="" width = '100%' height = 'auto' style = {{borderRadius:'25px'}}/>
                    </div>
                </Fade>
                </div>
                <div className = 'row mt-5 padd-b' id = 'section-2' >
                    <Fade left>

                    <div className = 'col-12 col-sm-6'>
                        <img src = {ml} alt="" width = '100%' height = 'auto' style = {{borderRadius:'25px'}}/>
                    </div>
                    </Fade>
                    <Fade right opposite cascade>

                    <div className = 'col-12 col-sm-6 overview'>
                        <p className = 'headings'>overview</p>
                        <h1 className = 'info'>sed do<br/>
                            eiusmod tempor<br/>
                            incididunt</h1>
                        <p className = 'explaination' >But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    </Fade>
                </div>
                <div className = 'row'>
                    <div className = 'col-12'>
                        <h1 className = 'goal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </h1>
                    </div>
                </div>
                <div className = 'steps container'>
                    <div className = 'row'>
                        <div className = 'step-1 col-12 col-sm-4'>
                            <img src = {upload} width = '100%' height = '415vh' alt=""/>
                            <div className = 'step-desc'>
                                <h1 style = {{textAlign:'center' , fontWeight:600}} className = 'mt-4'>Upload the file</h1>
                                <h3 style = {{textAlign:'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                            </div>
                        </div>
                        <div className = 'step-2 col-12 col-sm-4'>
                            <img src = {processing} alt= '' width = '100%' height = '415vh' style={{paddingTop:'2px'}}/>
                            <div className = 'step-desc'>
                                <h1 style = {{textAlign:'center' , fontWeight:600}} className = 'mt-4'>Processing..</h1>
                                <h3 style = {{textAlign:'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                            </div>
                        </div>
                        <div className = 'step-3 col-12 col-sm-4'>
                            <img src = {result} alt= '' width = '100%' height = '415vh' />
                            <div className = 'step-desc'>
                                <h1 style = {{textAlign:'center' , fontWeight:600}} className = 'mt-4'>Watch the video</h1>
                                <h3 style = {{textAlign:'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                            </div>
                        </div>
                    </div>
                </div>
                  
            </div>
                <div className = 'overlay-img'>
                    <img src = {landing} alt="" width = '100%' height = '100%' />
                    <h1 className = 'centered' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                </div>
        </div>
    );
}

export default Desc;