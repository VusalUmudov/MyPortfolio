import React from 'react'
import './Main.css'
import logo from '../Image/home-main.svg';
import Typewriter from './Typewriter'
const Main = () => {
  return (
    <div id='home' className='main'>
      <div className='contend'>
        <div className='contend_text'>
          <h2 style={{ paddingBottom: "15px" }}>
            Hi There!
            <span className='wave'>👋🏻</span>
          </h2>
          <h1>I'M <strong >Vusal Umudov</strong></h1>

          <div className='typewriterWrapper' style={{ paddingTop: "50px" }}>
            <Typewriter
              strings={[
                'Front End Developer',
                'MERN Stack Developer',
                'Continuously Learning',
                'React Developer',
              ]}
            />
          </div>

        </div>

        <span className='contend_image'>
          <img src={logo} alt='Logo' />
        </span>
      </div>
    </div>
  )
}

export default Main