## Step 1: Install Dependencies
- Run the following command to install Tailwind CSS, PostCSS, and Autoprefixer:

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

## Step 2: Configure tailwind.config.js
If the file is not created, manually create a file named tailwind.config.js in the root of your project and add:

```js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // Ensures Tailwind scans your JSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Step 3: Configure postcss.config.js
In the root directory, create or edit postcss.config.js and add:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## Step 4: Setup Tailwind in index.css
Inside src/index.css, add the following lines:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```