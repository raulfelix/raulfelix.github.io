import './sass/index.scss';

import React from 'react';
import Header from './comps/Header';
import Current from './comps/Current';
import Intro from './comps/Intro';
import About from './comps/About';
import Engineer from './comps/Engineer';
import Footer from './comps/Footer';

function App() {
  return (
    <main>
      <Header />
      <Intro />
      <Current />
      <Engineer />
      <About />
      <Footer />
    </main>
  );
}

export default App;
