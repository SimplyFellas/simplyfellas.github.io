# SimplyFellas

A React-based website for the SimplyFellas Minecraft 1.21.1 Vanilla+ modpack.

## About

SimplyFellas is a kitchen sink modpack centered around Create automation, quality of life, and backporting newer updates of Minecraft while maintaining the same aesthetic as vanilla Minecraft!

**CurseForge Link:** [SimplyFellas Modpack](https://www.curseforge.com/minecraft/modpacks/simplyfellas)

## Project Setup

This project is built with:

- **React** - UI library
- **Vite** - Build tool and development server
- **GitHub Pages** - Hosting platform

## Getting Started

### Prerequisites

- Node.js (version 20 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SimplyFellas/simplyfellas.github.io.git
   cd SimplyFellas
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```text
SimplyFellas/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment workflow
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   ├── App.jsx            # Main app component
│   ├── App.css            # App styles
│   ├── main.jsx           # React entry point
│   └── index.css         # Global styles
├── index.html             # HTML template
├── vite.config.js        # Vite configuration
└── package.json          # Project dependencies
```

## Component Development

This project uses a component-based architecture for modularity and reusability. Components are located in the `src/components/` directory.

Example component structure:

- `ComponentName.jsx` - Component logic
- `ComponentName.css` - Component styles

## Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions. When you push to the `main` branch, the workflow will:

1. Build the project
2. Deploy it to GitHub Pages

Make sure to:

1. Enable GitHub Pages in your repository settings
2. Set the source to "GitHub Actions"
3. Update the `homepage` field in `package.json` with your actual GitHub username/organization

## Contributing

This is a collaborative project. Feel free to contribute by:

1. Creating a new branch for your feature
2. Making your changes
3. Submitting a pull request

## License

Copyright (c) 2025 SimplyFellas - This project is licensed under the MIT License.
