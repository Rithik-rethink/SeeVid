import React from 'react';
import './Landing.css';
import Pictures from './Pictures.js';
import Desc from './Desc.js';
import landing from '../media/scene.jpg';
import Footer from '../Footer.js';

function Home (){
  
  return(
    <div>
      <div className = 'Home'>
        <div className = 'home'>
          <Desc/>
          <Pictures/>
        </div>
      </div>
      <div className = 'overlay-img'>
        <img src = {landing} alt="" width = '100%' height = '100%' />
        <h1 className = 'centered' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
      </div>
      <Footer/>

    </div>
  );
}

export default Home;