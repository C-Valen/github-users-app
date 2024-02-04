# Github Users App

The goal is to create a web application that allows to search for GitHub users and their public contributions through the GitHub API.

## Repository Structure

This repository follows a branching strategy with three main branches:

- **main:** This branch reflects the stable and deployable version of the application.
- **stage:** This branch is used for pre-production testing and validation. Features and fixes that are ready for deployment to production are merged into this branch for final testing.
- **dev:** This branch is the development branch where new features and bug fixes are integrated.

## Modules and Dependencies

- **[Nuxt](https://nuxt.com/)** - A powerful Vue.js framework for building modern web applications.
- **[Tailwind CSS](https://tailwindcss.com/)** - A highly customizable CSS framework for rapid UI development.
- **[DaisyUI](https://daisyui.com/)** - A plugin for Tailwind CSS that adds a set of customizable classes and color names.
- **[nuxt-svgo](https://github.com/cpsoinos/nuxt-svgo):** Module for optimizing SVG files in the project.
- **[@nuxt/image](https://image.nuxtjs.org/)** Module for image optimization and handling responsive images.
- **[@pinia/nuxt](https://pinia.esm.dev/)** - A modern and lightweight state management library for Vue.js (Nuxt.js compatible).
- **[@nuxtjs/color-mode](https://color-mode.nuxtjs.org/)** - Dark and Light mode with auto detection for Nuxt.

## Project Structure

The project follows the following Nuxt 3 structure:

- **assets:** Global stylesheet, icons, and SVG files.
- **components:** Vue components.
- **public:** Static assets.
- **interfaces:** TypeScript interfaces for defining data structures.
- **server:** Server-side logic and API handlers.
- **stores:** Pinia stores for managing state.
- **utils:** Utility functions and helpers.

## Features

- Single Page Application (SPA).
- Search bar to look up GitHub users by username.
- Display user information including avatar, username, name, followers, bio, and repositories owned indicating fork and star counts.
- Error handling for non-existent usernames.
- Light/Dark color modes.

## Getting Started

### Prerequisites

Ensure you have the following prerequisites installed before setting up the project locally:

- [Node.js](https://nodejs.org/) - v18.0.0 or newer
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) - Package managers for Node.js

Additionally, obtain a GitHub personal token and set it up in a **.env** file at the root of the project:
   ```bash
   # .env
   GITHUB_TOKEN=github_pat_...
   ```

### Installation

1. **Clone the Repository:**

   ```bash
   git clone git@github.com:C-Valen/github-users-app.git

   # access cloned project directory
   cd github-users-app
   ```

2. **Install Dependencies:**
   ```bash
   npm install   # or yarn install
   ```

## Usage

To run the project locally, use the following command:
   ```bash
   npm run dev   # or yarn dev
   ```
Visit http://localhost:3000 in your browser to interact with the project.

## Deployment

- **To build the application:**

   ```bash
   npm run build  # or yarn build
   ```

- **To locally preview production build:**
   ```bash
   npm run preview  # or yarn preview
   ```

Visit the provided deployment URL to access the live system.

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## License

This project is licensed under the MIT License.

## Contact

Email: charlie.valen@gmail.com

Feel free to reach out for any questions or feedback.

---

*Crafted with ❤️ by Carlos.*