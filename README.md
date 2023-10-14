
# My Protfolio

Welcome to my Portfolio Project repository! This is a space where I showcase my work, skills, and accomplishments. Whether you're a potential employer, colleague, or just curious, I'm excited to share my portfolio with you.






## Features

- Easy and Quick scroll
- Interactive Interface
- Responsive Desgin
- Contact form


## Demo
https://aman-protfolio.netlify.app/

## Tech Stack

**Client:** ReactJS, HTML, CSS, Tailwind CSS , React-scroll

**Server:** Node, getfrom.io, Netlify


## Installation

Install my portfolio with npm. Copy my repo link from GitHub. Open the folder where you want this install this project.

Double-click on the folder path and open the terminal. Then write these commands in the terminal.

```bash
 git clone repo url
 code .
```
Replace the "repo URL" with the repository URL.
The code . is is used to open the VS Code. Then execute these commands in the terminal.
    
```bash
  cd .\portfolio\
  npm install
```
if npm install provide any error , try using :
```bash
 npm install --force
```
### Tailwind Css Installation

Install `tailwindcss` via npm, and then run the init command to generate your tailwind.config.js file.
```bash
 npm install -D tailwindcss
 npx tailwindcss init
```
Add the paths to all of your template files in your `tailwind.config.js` file.

```bash
 /** @type {import('tailwindcss').Config} */
 module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
 }
```
Add the `@tailwind` directives for each of Tailwind’s layers to your `./src/index.css` file.

```bash
 @tailwind base;
 @tailwind components;
 @tailwind utilities;
```

After completing all these steps successfully. Run you app using :

```bash
 npm start
```
## Feedback

If you have any feedback, please reach out to us at vaman.jain17@gmail.com

