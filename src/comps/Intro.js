import React, { useState } from 'react';
import NextButton from './NextButton';
import Work from './Work';

const Intro = () => {
  const [work, setWork] = useState(false)
  return (
    <>
      <section className="content-row beige">
        <div className="f-grid f-row">
          <div className="f-1">
            <p>I specialise in <em>Front end</em> architecture and development. My primary focus is on web and mobile application development, user experience 
              and rapid prototyping.</p> 
            <p>I enjoy technical challenges and write a lot of <em>HTML</em>, <em>CSS</em> and <em>Javascript</em> and have plenty experience with <em>React</em>, <em>React Native</em> and <em>Vue.js</em>.</p>
            <div className="action__button">
              <button type="button" className="btn-work" onClick={() => setWork(true)}>See my work</button>
            </div>
            <NextButton target="current" color="rgb(218, 200, 173)" />
          </div>
        </div>
        
      </section>
      {
        work && <Work onClose={() => setWork(false)} />
      }
    </>
  )
}

export default Intro;