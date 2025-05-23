import React from 'react';
// Assuming these components are correctly imported and defined in their respective files
import Navbar from './components/layout/Navbar';
import Home from './components/Section/Home';
import About from './components/Section/About';
import Portfolio from './components/Section/Portfolio';
import Skills from './components/Section/Skills';
import WorkProcess from './components/Section/WorkProcess';
import FAQ from './components/Section/FAQ';
import Best from './components/Section/best';
import Footer from './components/Section/footer';
import Whatido from './components/Section/whatido';

// --- Start: Define Custom SVG Cursors ---

// Your preferred Lucide Mouse Pointer 2 icon, filled with a color
// You can change 'fill="#6366F1"' to any hex code, RGB, or CSS color name you want!
const defaultLucidePointerSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#00E5FF" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"/>
  </svg>
`;

// An interactive version (e.g., a different color for hover states)
const interactiveLucidePointerSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#F0B429" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"/>
  </svg>
`;


// Encode SVGs to Data URIs for CSS `url()` function
// Hotspot: 4 4 is a good starting point for this arrow's tip.
// You might need to fine-tune it by looking at your cursor on screen.
const encodedDefaultSvg = encodeURIComponent(defaultLucidePointerSvg.replace(/\n\s*/g, ''));
const defaultCursorUri = `url("data:image/svg+xml,${encodedDefaultSvg}") 4 4, auto`;

const encodedInteractiveSvg = encodeURIComponent(interactiveLucidePointerSvg.replace(/\n\s*/g, ''));
const interactiveCursorUri = `url("data:image/svg+xml,${encodedInteractiveSvg}") 4 4, pointer`;

// --- End: Define Custom SVG Cursors ---


function App() {
  return (
    <div className="flex flex-col overflow-x-hidden bg-brand-backgroundLight">
      {/* Custom Cursor Styles */}
      <style jsx global>{`
        /* Apply your custom default cursor to all elements */
        * {
          cursor: ${defaultCursorUri} !important;
        }

        /* Apply a different custom cursor for interactive elements like buttons and links */
        a, button, [role="button"], input[type="submit"], input[type="reset"] {
          cursor: ${interactiveCursorUri} !important;
        }
      `}</style>

      {/* Navbar Section */}
      <div className="w-full bg-brand-backgroundLight">
        <div className="container-responsive">
          <Navbar />
        </div>
      </div>

      {/* Fixed Logo/Icon */}
      {/* This image will stay fixed on the right side of the screen */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
        {/* Replace 'https://placehold.co/60x60/000000/FFFFFF?text=Logo' with your actual image URL */}
        {/* Adjust width (w-16), height (h-16), and other classes as needed */}
        <img
          src="/fixedlogo2.png"
          alt="Company Logo"
          className="w-16 h-16  shadow-lg border-2 border-none bg-[#02E5FF]"
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-grow">
        <Home />
        <div className="container-responsive">
          <About />
          <Best />
          <Whatido/>
          <Skills />
          <Portfolio />
          <WorkProcess />
          <FAQ />
        </div>

        {/* Footer Section */}
        <div className="w-full">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
