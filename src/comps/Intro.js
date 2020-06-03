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
            <p>I specialise in <em>Front end</em> architecture and development. I spend most of my time in the code but like to get involved in user experience 
              and accessibility.</p>
            <p>I like technical challenges and solving problems with the best tech <em>Javascript</em> has to offer. Things like <em>React</em>, <em>GraphQL</em>, <em>Apollo client</em> and <em>styled components</em>.</p>
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