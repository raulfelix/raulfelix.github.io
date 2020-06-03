import React from 'react';
import NextButton from './NextButton';

const Current = () => (
  <section className="content-row blue" id="current">
    <div className="f-grid f-row">
      <div className="f-1">
        <p className="section-title">Currently...</p> 
        <p>I am working with <a href="https://www.inquisitive.com/" target="_blank" rel="noopener noreferrer">Inquisitive</a> where we are building a platform to bring quality educational content to every person on Earth.</p>
        <p>I like to collaborate in my spare time, to chat you can reach me at <a href="mailto:raulfelixcarrizo@gmail.com">raulfelixcarrizo@gmail.com</a></p>
        <NextButton target="engineer" color="#4A4A4A" />
      </div>
    </div>
  </section>
)

export default Current;