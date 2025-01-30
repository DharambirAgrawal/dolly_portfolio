import React, { Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Video = React.lazy(() => import("./components/Video"));

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Suspense fallback={<div>Loading video...</div>}>
        <Video />
      </Suspense>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
