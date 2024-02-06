import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  daisyui: {
    styled: true,
    themes: [
      {
        dark: {
          primary: '#1A202C',      // Dark grayish-blue
          secondary: '#2D3748',    // Darker grayish-blue
          accent: '#E2E8F0',       // Light gray
          error: '#FF6B6B',        // Red
          neutral: '#CBD5E0',      // Gray
          'base-100': '#2D3748',   // Background color
        },
        light: {
          primary: '#3498db',      // Light blue
          secondary: '#5dade2',    // Lighter blue
          accent: '#34495e',       // Dark grayish-blue
          error: '#e74c3c',        // Red
          neutral: '#95a5a6',      // Light gray
          'base-100': '#ecf0f1',   // Background color
        },
      },
    ],
  },
  content: [],
  plugins: [require('daisyui')],
}
