import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience'
import Photos from './components/Photos';
import Art from './components/Art';
import Design from './components/Design';
import Footer from './components/Footer';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header>
      </Header>
      <main>
        <div className="container-fluid p-0">
          <About></About>
          <hr className="m-0" />
          <Art></Art>
          <hr className="m-0" />
          <Design></Design>
          <hr className="m-0" />
          <Photos></Photos>
          <hr className="m-0" />
          <Project></Project>
          <hr className="m-0" />
          <Experience></Experience>
          <hr className="m-0" />
          <Contact></Contact>
          <hr className="m-0" />
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
