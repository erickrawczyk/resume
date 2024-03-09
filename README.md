# Resumé

[![Download Resume](https://custom-icon-badges.demolab.com/badge/-Download%20Resumé-blue?style=for-the-badge&logo=download&logoColor=white)](https://github.com/erickrawczyk/resume/releases/download/latest/Resume.pdf)

This repo generates my personal Resume. It builds the React and Tailwind app with Vite, and the CircleCI pipeline uses Puppeteer to export the document to PDF.

![Image of Resume](https://eric.kraw.cz/img/Resume.jpg?)

# Local Development

[![CircleCI](https://circleci.com/gh/erickrawczyk/resume/tree/master.svg?style=svg)](https://circleci.com/gh/erickrawczyk/resume/tree/main)

**Global Dependencies**

- Node v20.11.1
- npm 10.2.4

**Commands**

- `npm i` - install package dependencies
- `npm run dev` - starts a dev server on port 5173
- `npm run export` - Builds a static file and exports a JPG and PDF to `/dist/Resume.jpg` and `/dist/Resume.pdf` respectively
