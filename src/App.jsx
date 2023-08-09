import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
