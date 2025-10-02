Contact Form (React + Vite + Tailwind CSS v4)

A responsive, accessible contact form built with React, Vite, and Tailwind CSS v4. The form includes labeled inputs with icons, required field indicators, and HTML5 validation.


Features

- Full Name, E-mail, Subject, and Message fields
- Input icons positioned inside the fields
- Required field asterisks for Full Name and E-mail with accessible screen-reader hints
- HTML5 validation (required and email format)
- Responsive layout with a gradient background and modern styling
- Tailwind CSS v4 with the official Vite plugin


Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4 (via `@tailwindcss/vite`)


Project Structure

- index.html — App HTML entry point
- src/main.jsx — React entry; mounts the app to #root and imports styles
- src/App.jsx — Contact form UI
- src/index.css — Tailwind CSS import and global styles
- public/* — Static assets (icons and images) served from the root, e.g. `/email.png`
- vite.config.js — Vite config with React and Tailwind plugins

 Getting Started

Prerequisites:
- Node.js 18+ (20 recommended)
- npm (comes with Node)

Install dependencies:
- npm install

Start the development server:
- npm run dev
- Open the URL the terminal prints (commonly http://localhost:5173)









