import React from "react";

import Header from "./comps/header-intro";
import Current from "./comps/Current";
import Intro from "./comps/Intro";
import About from "./comps/About";
import Engineer from "./comps/Engineer";
import Footer from "./comps/Footer";
import { Main, Reset } from "./comps/Global.styles";
import Work from "./comps/Work";

function App() {
  return (
    <>
      <Reset />
      <Main>
        <Header />
        <Intro />
        <Current />
        <Engineer />
        <Work />
        <About />
        <Footer />
      </Main>
    </>
  );
}

export default App;
