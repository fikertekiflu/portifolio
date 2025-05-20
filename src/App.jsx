// ========================================================================
// FILE: /src/App.jsx
// ========================================================================
// This is the main application component.
// It imports and renders the Navbar, all page sections, and the Footer.
// ========================================================================
import React from 'react';

// Import layout components
import Navbar from './components/layout/Navbar'; 
import Home from './components/Section/Home'; 
import About from './components/Section/About'; 
import Portfolio from './components/Section/Portfolio'; 
import Services from './components/Section/Services'; 
import Skills from './components/Section/Skills'; 
import WorkProcess from './components/Section/WorkProcess'; 
import FAQ from './components/Section/FAQ'; 
import Testimonials from './components/Section/Testimonials'; 
import Best from './components/Section/best'; 
// import Footer from './components/layout/Footer'; // We'll create this later



const Contact = () => (
  <section id="contact" className="min-h-screen bg-brand-backgroundLight section-padding">
    <div className="container-responsive">
      <h2 className="text-4xl font-bold text-center text-brand-textDark mb-12">Get In Touch</h2>
      <p className="text-lg text-brand-textLight max-w-2xl mx-auto text-center mb-10">
        Have a project in mind or just want to say hi? Feel free to reach out!
      </p>
      {/* Contact Form Placeholder - You'll need form handling logic (e.g., react-hook-form) */}
      <form className="max-w-xl mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-textLight mb-1">Full Name</label>
          <input type="text" name="name" id="name" className="w-full px-4 py-2.5 border border-brand-borderLight rounded-lg focus:ring-brand-primary focus:border-brand-primary" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-textLight mb-1">Email Address</label>
          <input type="email" name="email" id="email" className="w-full px-4 py-2.5 border border-brand-borderLight rounded-lg focus:ring-brand-primary focus:border-brand-primary" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-brand-textLight mb-1">Message</label>
          <textarea name="message" id="message" rows="4" className="w-full px-4 py-2.5 border border-brand-borderLight rounded-lg focus:ring-brand-primary focus:border-brand-primary"></textarea>
        </div>
        <div className="text-center">
          <button 
            type="submit" 
            className="bg-brand-primary text-white font-semibold py-3 px-10 rounded-lg 
                       hover:opacity-90 transition-opacity shadow-md focus:outline-none 
                       focus:ring-2 focus:ring-brand-primary focus:ring-opacity-50"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
);

// Placeholder Footer Component (to be moved to its own file: /src/components/layout/Footer.jsx)
const Footer = () => (
  <footer className="bg-brand-textDark text-neutral-300 p-8 text-center">
    <div className="container-responsive">
      <p className="mb-2">&copy; {new Date().getFullYear()} MAHDER. All rights reserved.</p>
      <p className="text-sm">
        Built with React, Vite, and Tailwind CSS.
      </p>
      {/* Add social media icons/links here if desired */}
    </div>
  </footer>
);


function App() {
  // The Navbar is fixed, so we need to add padding to the top of the main content area
  // to prevent content from being hidden underneath it.
  // The exact padding value should match your Navbar's height.
  // Common navbar heights are around 4rem (64px) to 5rem (80px).
  // Let's assume Navbar height is roughly 70-80px, so pt-20 (5rem = 80px) or pt-24 (6rem = 96px) is a good start.
  // Adjust as needed

  return (
    <div className="flex flex-col overflow-x-hidden bg-brand-backgroundLight"> {/* Main container for the entire app */}
      <Navbar />
      
      {/* Main content area where all your sections will be rendered */}
      <main className={`flex-grow `}>
        <Home />
        <About />
        <Best />
        <Portfolio />
        <Services />
        <Skills />
         <WorkProcess />
          <FAQ />
          <Testimonials /> 
        
        {/* Add other sections from your Figma design here:
            
           
           
            
        */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;


