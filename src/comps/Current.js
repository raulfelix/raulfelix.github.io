import React from 'react';
import NextButton from './NextButton';

const Current = () => (
  <section className="content-row blue" id="current">
    <div className="f-grid f-row">
      <div className="f-1">
        <p className="section-title">Currently...</p> 
        <p>I am working away at <a href="https://www.inquisitive.com/" target="_blank" rel="noopener noreferrer">Inquisitive</a> where we are doing a world of good for teachers and students everywhere.</p>
        <p>I like to collaborate in my spare time, to chat you can reach me at <a href="mailto:raulfelixcarrizo@gmail.com">raulfelixcarrizo@gmail.com</a></p>
        <NextButton target="engineer" color="#4A4A4A" />
      </div>
    </div>
  </section>
)

export default Current;