# Resumé


[![Download Resume](https://custom-icon-badges.demolab.com/badge/-Download%20Resumé-blue?style=for-the-badge&logo=download&logoColor=white)](https://github.com/erickrawczyk/resume/releases/download/latest/Resume.pdf)

This repo generates my personal Resume. It renders the document using React and Styled Components, and the CircleCI pipeline uses Headless Chrome controlled with Puppeteer to export the document to PDF.

![Image of Resume](https://eric.kraw.cz/img/Resume.jpg?)

# Local Development

[![CircleCI](https://circleci.com/gh/erickrawczyk/resume/tree/master.svg?style=svg)](https://circleci.com/gh/erickrawczyk/resume/tree/master)

**Global Dependencies**

- Node v10
- Yarn v1.13

**Commands**

- `yarn` - install package dependencies
- `yarn start` - starts a Parcel dev server on port 1234
- `yarn export` - exports a PDF to `/dist/Resume.pdf`. Requires the server running on port 1234
