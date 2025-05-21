import React from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/Section/Home';
import About from './components/Section/About';
import Portfolio from './components/Section/Portfolio';
import Skills from './components/Section/Skills';
import WorkProcess from './components/Section/WorkProcess';
import FAQ from './components/Section/FAQ';
import Best from './components/Section/best';
import Footer from './components/Section/footer';

function App() {
  return (
    <div className="flex flex-col overflow-x-hidden bg-brand-backgroundLight">
      <style jsx global>{`
        * {
          cursor: url('https://ani.cursors-4u.net/cursors/cur-13/cur1160.ani'),
                  url('https://ani.cursors-4u.net/cursors/cur-13/cur1160.png'),
                  auto !important;
        }
      `}</style>

      {/* Hidden attribution */}
      <a
        href="https://www.cursors-4u.com/cursor/2018/06/08/hell-yeah-pointer-3.html"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -top-[9999px] -left-[9999px]"
      >
        <img src="https://cur.cursors-4u.net/cursor.png" alt="Cursor Attribution" />
      </a>

      {/* Navbar with fixed padding */}
      <div className="w-full bg-brand-backgroundLight">
        <div className="container-responsive">
          <Navbar />
          
        </div>
      </div>

      {/* Main content with fixed padding */}
      <main className="flex-grow }">
        <Home />
        <div className="container-responsive">
          
          <About />
          <Best />
          <Skills />
          <Portfolio />
          <WorkProcess />
          <FAQ />
        </div>
        
        {/* Full-width footer */}
        <div className="w-full">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;