import React, { useState } from "react";

import Header from "./comps/header-intro";
import Current from "./comps/current/current";
import Intro from "./comps/Intro";
import About from "./comps/About";
import Footer from "./comps/Footer";
import { Main, Reset } from "./comps/Global.styles";
import Work from "./comps/Work";
import Resume from "./comps/resume/Resume";
import ViewToggle from "./comps/ViewToggle";

function App() {
  const [resumeMode, setResumeMode] = useState(false);

  return (
    <>
      <Reset />
      <ViewToggle
        resumeMode={resumeMode}
        onToggle={() => setResumeMode(!resumeMode)}
      />
      {resumeMode ? (
        <Resume />
      ) : (
        <Main>
          <Header />
          <Intro />
          <Current />
          {/* <Engineer /> */}
          <Work />
          <About />
          <Footer />
        </Main>
      )}
    </>
  );
}

export default App;
