# React Portfolio Site

A modular portfolio website built with React and Vite, designed to present development projects, small tools, and debugging examples. This site acts as a clean interface for showcasing multiple GitHub repositories and front-end work.

---

**Status:** COMPLETE  
**Last Updated:** February 2025

---

## Tech Stack

- **Frontend Framework:** React (Vite)
- **Styling:** Custom CSS
- **Deployment:** GitHub Pages
- **Build & Tooling:** Vite, gh-pages
- **Asset Handling:** Public directory (static served images)

---

## Project Requirements Coverage

| Requirement                                                             | Status        |
|-------------------------------------------------------------------------|---------------|
| Component-based React architecture                                      | Implemented   |
| Dynamic project rendering from structured data                          | Implemented   |
| Image handling compatible with GitHub Pages deployment                  | Implemented   |
| Fully responsive layout and clean UI                                    | Implemented   |
| Stable static asset resolution using public/ directory                  | Implemented   |
| GitHub Pages deployment pipeline                                        | Implemented   |
| Clear documentation                                                     | Included      |

---

## Frontend Overview

### React Components
- Modular components include: `Navbar`, `Hero`, `About`, `Services`, `Projects`, `Contact`, and optional `Footer`.
- Components are stateless and deterministic, focusing on rendering data cleanly.
- All project metadata is stored in a central array, reducing duplication and improving scalability.

### CSS
- Custom CSS implementing a modern dark-themed layout.
- Grid and flexbox used for structure and spacing.
- Responsive across desktop and mobile resolutions.
- Minimalistic design prioritising readability and quick scanning.

### JavaScript / React
- Functional components throughout.
- Project cards generated via `.map()` for maintainability.
- Conditional rendering used for screenshots.
- Minimal logic in components to preserve clarity and predictability.

---

## Project Metadata Structure

Each project uses a structured object containing:

- `title`  
- `description`  
- `tech` (array of technologies used)  
- `link` (GitHub repository URL)  
- `image` (relative path to screenshot)

This design ensures new projects can be added without modifying component logic.

---

## Static Asset Handling

### Problem Identified
Vite produced unresolved import errors when attempting to load PNG images through ES module imports inside components.

### Cause
The bundler could not guarantee stable asset paths during both local builds and GitHub Pages deployment.

### Solution Implemented
- Moved all screenshots to `public/projects/`
- Replaced import statements with static relative paths (e.g., `"projects/name.png"`)
- Updated `<img>` tags to read directly from the public directory

### Outcome
- No more Vite import errors  
- Images load reliably in development and production  
- GitHub Pages subdirectory hosting works without path conflicts  

---

## Deployment Overview

Deployment is handled through GitHub Pages using the `gh-pages` branch.

### Configuration Summary

- `vite.config.js` updated with correct `base` path:
  ```
  base: "/Portfolio-Site-v2/"
  ```
- Deployment scripts added:
  ```json
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
  ```
- Static assets referenced using relative paths

### Deployment Commands

```bash
npm install
npm run build
npm run deploy
```

---

## Testing Summary

All major functionality has been validated manually:

- Project cards render correctly with screenshots  
- Navigation anchors scroll to correct sections  
- Links to GitHub repositories open correctly  
- Site behaves consistently on GitHub Pages  
- Screenshots load from `public/` both locally and when deployed  
- Responsive layout verified on multiple viewport sizes  

---

## Development Challenges & Resolutions

### 1. Vite Asset Resolution Errors
- **Issue:** PNG imports triggered bundler errors.
- **Solution:** Use `public/` directory for static assets.

### 2. GitHub Pages Path Issues
- **Issue:** Absolute paths broke due to subdirectory hosting.
- **Solution:** Added `base` config and used relative image paths.

### 3. Component Maintainability
- **Issue:** Repeated markup across sections.
- **Solution:** Centralised project data and generated cards dynamically.

---

## Planned Features

- Additional project screenshots  
- Further refactoring of early v1 tools into React components  
- Optional dark/light mode toggle  
- Case-study-style project descriptions  
- Possible micro-deployments for individual tools  

---

## Additional Notes

- Codebase follows a clean, modular structure  
- Use of public directory ensures compatibility with GitHub Pages  
- Project is designed for easy extension as new repositories are added  
- Commit history reflects incremental, intentional development  


Use of public directory ensures compatibility with GitHub Pages

Project is designed for easy extension as new repositories are added

Commit history reflects incremental, intentional development
The project is designed to expand as new repositories or tools are created
