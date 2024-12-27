# Odin-Recipes

An updated layout for the project Submission for the foundation Course in the Odin Project

This is a simple Recipie Posting Website made using React.js.

## Getting Started

Fork this repository [by following this guide.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)

You may open this project using a editor such as [VSCode.](https://code.visualstudio.com/download)

Open the terminal in this folder. Run `npm install` to install all necessary dependencies. Then run `npm run dev` to run this server in local host. Click on the link provided by the terminal to open the website in your browser.

# Prerequisites

For this project you will need:

- Node.js

## Installlation Guide

[Node Version Manager (nvm)](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) , install [Node.js using nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/#:~:text=How%20to%20Install%20NVM%20on%20Linux%20and%20Mac)

# Building your website

After you're done editing / working, it is time to make a production build so you can host this website in a server.

1. Firstly, craete a build using `npm run build`.
2. A `dist` folder should be created in your project. This folder contains all the files of your production build

## Hosting the webiste using GitHub Pages

If you wish to  host your website using GitHub pages like in this Project:

1. Firstly, craete a [build](#building-your-website) using `npm run build`.
2. Create a new `gh-pages` repository by using `git branch gh-pages`
3. Add the `dist` folder we created using `git add dist -f`. Commit using `git commit -m "Deployment commit"`
4. Finally, use `npm run pages` to push it to the `gh-pages` repository.
5. Finally, [follow the steps here.](https://pages.github.com/)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
