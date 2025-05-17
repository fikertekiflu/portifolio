// ========================================================================
// FILE: /tailwind.config.js
// ========================================================================
// This is your Tailwind CSS configuration file.
// It's where you customize your design system, including colors, fonts,
// spacing, and more, to match your project's aesthetic.
//
// Remember to install Tailwind CSS and its peer dependencies:
//   npm install -D tailwindcss postcss autoprefixer
// Then initialize Tailwind (if you haven't already):
//   npx tailwindcss init -p 
// This creates tailwind.config.js and postcss.config.js.
// ========================================================================

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // All source files in the src directory
  ],
  darkMode: 'class', // Enables dark mode based on a class (e.g., <html class="dark">)
  theme: {
    extend: {
      // --- FONT FAMILIES ---
      // Define your project's primary fonts here.
      // Ensure these fonts are linked in your main HTML file (e.g., via Google Fonts)
      // or self-hosted and defined with @font-face in your CSS.
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Default sans-serif font stack
        // Add a display font if your Figma design uses a distinct one for headings or brand elements.
        // Replace 'YourDisplayFontName' with the actual font name.
        // display: ['YourDisplayFontName', 'serif'], // Example: 'Playfair Display', 'Georgia', etc.
      },

      // --- COLOR PALETTE ---
      // Define your brand's color scheme. 
      // **IMPORTANT**: Replace these example hex codes with the exact colors from your Figma design.
      colors: {
        brand: {
          primary: '#4F46E5',     // Main accent color (e.g., for buttons, active links)
          primaryHover: '#4338CA', // Darker shade for primary hover states (Example: Indigo-700)
          
          secondary: '#0EA5E9',   // Secondary accent color (if needed)
          
          textDark: '#111827',    // Darkest text for high contrast (Example: Gray-900)
          textMedium: '#374151',  // Medium-dark text (Example: Gray-700)
          textLight: '#6B7280',   // Lighter text for secondary info (Example: Gray-500)
          
          backgroundLight: '#FFFFFF',       // Main background for light theme (e.g., white)
          backgroundSubtle: '#F9FAFB',    // Slightly off-white (e.g., for section backgrounds, cards)
          
          borderLight: '#E5E7EB',  // Light borders (Example: Gray-200)
          borderMedium: '#D1D5DB', // Medium borders (Example: Gray-300)
          borderFocus: '#4F46E5',  // Border color for focused interactive elements (matches primary)
        },
        // You can also extend or override Tailwind's default neutral, red, green, etc., colors if needed.
        // neutral: { ... }, 
      },

      // --- BOX SHADOWS ---
      // Define custom box shadows for a more nuanced look.
      boxShadow: {
        'navbar': '0 2px 4px 0 rgba(0, 0, 0, 0.03)',         // Very subtle shadow for a floating navbar
        'card': '0 4px 12px 0 rgba(0, 0, 0, 0.05)',        // Soft shadow for cards
        'card-hover': '0 6px 16px 0 rgba(0, 0, 0, 0.08)',  // Slightly more pronounced shadow for card hover
        'input': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',        // Subtle shadow for input fields
        'focus': `0 0 0 3px rgba(79, 70, 229, 0.4)`,      // Focus ring shadow (matches primary color)
      },

      // --- CONTAINER CUSTOMIZATION ---
      // Customize the default container utility for consistent centering and padding.
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',    // Default padding for smallest screens
          sm: '1.5rem',       // Padding for 'sm' screens and up
          lg: '2rem',         // Padding for 'lg' screens and up
          // xl: '3rem',      // Optionally, different padding for 'xl' screens
        },
        // You can also define screens here if you want the container max-width to differ from viewport breakpoints
        // screens: {
        //   sm: '640px',
        //   md: '768px',
        //   lg: '1024px',
        //   xl: '1280px',
        // },
      },
      
      // --- ANIMATIONS & KEYFRAMES ---
      // Define custom animations and keyframes.
      // Useful for the Hero section's animated gradient or other custom effects.
      animation: {
        gradientShift: 'gradientShift 15s ease infinite',
        // Add other custom animations here
        // e.g., 'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        // Add other custom keyframes here
        // fadeIn: {
        //   '0%': { opacity: 0 },
        //   '100%': { opacity: 1 },
        // },
      },

      // --- OTHER EXTENSIONS ---
      // You can extend other theme properties as needed:
      // spacing: { '128': '32rem', /* ... */ },
      // borderRadius: { 'xl': '1rem', /* ... */ },
      // transitionTimingFunction: { 'custom-ease': 'cubic-bezier(0.25, 0.1, 0.25, 1)', },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),    // Official plugin for better default form styling.
                                      // Run: npm install -D @tailwindcss/forms
    require('tailwindcss-animate'), // Plugin for pre-configured CSS animations.
                                      // Run: npm install -D tailwindcss-animate
    // Add any other Tailwind plugins you find useful for your project.
  ],
};
