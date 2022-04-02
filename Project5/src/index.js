import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar/Navbar';
import Welcome from './Welcome/Welcome';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
      <Navbar />
      <div class="row">
        <section class="col-sm-4">
          <Welcome />
        </section>
        <section class="col-sm-7">
          <Gallery />
        </section>
      </div>
      <Contact />
      <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


