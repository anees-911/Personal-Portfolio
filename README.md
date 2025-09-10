# Anees Ahmed — Portfolio (React + Vite)

This is a personal portfolio built with React (Vite). It includes pages for Home, Projects, Experience, Education, Skills, and Contact, with a responsive layout and light/dark theme toggle.

## Prerequisites
- Node.js 20+
- npm

## Setup
```bash
# Install dependencies
npm install
```

## Run locally
```bash
npm run dev
```
Open the URL printed by Vite (usually http://localhost:5173).

## Build for production
```bash
npm run build
npm run preview
```

## Project structure
- src/layouts/RootLayout.jsx: Header, responsive nav, theme toggle, footer
- src/pages/*: Page components
- src/main.jsx: Routes configuration
- src/index.css: Styles (responsive, themes, cards, grid)

## Deploy
Any static host works (e.g., Netlify, Vercel, GitHub Pages). Build with `npm run build` and deploy the `dist` folder.
