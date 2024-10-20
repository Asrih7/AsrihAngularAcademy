# Tailwind CSS

Tailwind CSS is a utility-first CSS framework that provides a set of pre-built utility classes for styling web applications. It allows you to build custom designs by composing utility classes together, rather than writing custom CSS styles.

### Installing Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### Configure your template paths

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Importing Tailwind CSS

```css
/* styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

