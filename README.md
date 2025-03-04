# Image Processing API

## Description
This is a Node.js API for processing images using Express and Sharp. It allows users to resize and manipulate images through an API endpoint.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Testing](#testing)
- [Linting & Formatting](#linting--formatting)
- [Building the Project](#building-the-project)
- [Development Workflow](#development-workflow)
- [License](#license)

## Installation

To install the dependencies, run:

```sh
npm install
```

## Usage

To start the server in production mode:

```sh
npm run start
```

To start the server in development mode with automatic restarts:

```sh
npm run dev
```

## Scripts

The following scripts are available in the project:

- **`npm run dev`** – Start the server with hot reload using `nodemon` and `ts-node`.
- **`npm run build`** – Compile TypeScript files into JavaScript.
- **`npm run clean`** – Remove the `dist` folder.
- **`npm run start`** – Start the compiled JavaScript server (`dist/index.js`).
- **`npm run lint`** – Run ESLint to check for code style issues.
- **`npm run format`** – Format code using Prettier.
- **`npm run test`** – Run unit tests using Jasmine.
- **`npm run prepare-dev`** – Run formatting, linting, build, tests, and start the development server.

## Testing

To run the test suite:

```sh
npm run test
```

## Linting & Formatting

To check and fix linting errors:

```sh
npm run lint
```

To format the code:

```sh
npm run format
```

## Building the Project

To compile TypeScript to JavaScript:

```sh
npm run build
```

This will generate a `dist/` folder with the compiled files.

## Development Workflow

For a smooth development experience, use the `prepare-dev` script, which ensures your code is formatted, linted, tested, built, and then runs in development mode:

```sh
npm run prepare-dev
```

## License

This project is licensed under the ISC License.

