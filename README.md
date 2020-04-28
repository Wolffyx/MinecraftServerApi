# Minecraft Server API 

The main purpose of this repository is to create Minecraft server instances using NodeJS and Typescript.
To use the api you need to make a dashboard.
I will try to keep this as up-to-date as possible, but community contributions and recommendations for improvements are encouraged and will be most welcome.

# Table of contents:

- [Pre-reqs](#pre-reqs)
- [Getting started](#getting-started)
- [Project Structure](#project-structure)
- [Building the project](#building-the-project)

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)
- Install [VS Code](https://code.visualstudio.com/)

# Getting started
- Clone the repository
```
git clone 1 https://github.com/Microsoft/TypeScript-Node-Starter.git <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Serve and developing the app
```
npm run serve
or
npm start
```
- Build and run the project
```
npm run build
npm start
```
Or, if you're using VS Code, you can use `cmd + shift + b` to run the default build task (which is mapped to `npm run build`), and then you can use the command palette (`cmd + shift + p`) and select `Tasks: Run Task` > `npm: start` to run `npm start` for you.

> **Note on editors!** - TypeScript has great support in [every editor](http://www.typescriptlang.org/index.html#download-links), but this project has been pre-configured for use with [VS Code](https://code.visualstudio.com/).
Throughout the README We will try to call out specific places where VS Code really shines or where this project has been setup to take advantage of specific features.

Finally, navigate to `http://localhost:3000` and you should see the template being served and rendered locally!

### Troubleshooting failed deployments
Deployment can fail for various reasons, if you get stuck with some error, [open an issue](https://github.com/Microsoft/TypeScript-Node-Starter/issues/new) and I'll try to help you resolve the problems.

## Project Structure
The most obvious difference in a TypeScript + Node project is the folder structure.
In a TypeScript project, it's best to have separate _source_  and _distributable_ files.
TypeScript (`.ts`) files live in your `src` folder and after compilation are output as JavaScript (`.js`) in the `dist` folder.
The `test` and `views` folders remain top level as expected.

The full folder structure of this app is explained below:

> **Note!** Make sure you have already built the app using `npm run build`

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **.vscode**              | Contains VS Code specific settings                                                            |
| **dist**                 | Contains the distributable (or output) from your TypeScript build. This is the code you ship  |
| **node_modules**         | Contains all your npm dependencies                                                            |
| **src**                  | Contains your source code that will be compiled to the dist dir                               |
| **src/config**           | Config files go in here                                                                       |
| **src/controllers**      | Controllers define functions that respond to various http requests                            |
| **src/models**           | Models define Mongoose schemas that will be used in storing and retrieving data from MongoDB  |
| **src/public**           | Static assets that will be used client side                                                   |
| **src/types**            | Holds .d.ts files not found on DefinitelyTyped. Covered more in this [section](#type-definition-dts-files)          |
| **src**/server.ts        | Entry point to your express app                                                               |
| **src/routes**/api.ts    | Routes paths go here                                                              |
| **test**                 | Contains your tests. Separate from source because there is a different build process.         |
| **views**                | Views define how your app renders on the client. In this case we're using pug                 |
| .env.example             | API keys, tokens, passwords, database URI. Clone this, but don't check it in to public repos. |
| .travis.yml              | Used to configure Travis CI build                                                             |
| .copyStaticAssets.ts     | Build script that copies images, fonts, and JS libs to the dist folder                        |
| jest.config.js           | Used to configure Jest running tests written in TypeScript                                    |
| package.json             | File that contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)                          |
| tsconfig.json            | Config settings for compiling server code written in TypeScript                               |
| tsconfig.tests.json      | Config settings for compiling tests written in TypeScript                                     |
| .eslintrc                | Config settings for ESLint code style checking                                                |
| .eslintignore            | Config settings for paths to exclude from linting                                             |

## Building the project
It is rare for JavaScript projects not to have some kind of build pipeline these days, however Node projects typically have the least amount of build configuration.
Because of this I've tried to keep the build as simple as possible.
If you're concerned about compile time, the main watch task takes ~2s to refresh.

| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Does the same as 'npm run serve'. Can be invoked with `npm start`                                 |
| `build`                   | Full build. Runs ALL build tasks (`build-sass`, `build-ts`, `lint`, `copy-static-assets`)       |
| `serve`                   | Runs node on `dist/server.js` which is the apps entry point                                       |
| `watch-node`              | Runs node with nodemon so the process restarts if it crashes. Used in the main watch task         |
| `watch`                   | Runs all watch tasks (TypeScript, Sass, Node). Use this if you're not touching static assets.     |
| `test`                    | Runs tests using Jest test runner                                                                 |
| `watch-test`              | Runs tests in watch mode                                                                          |
| `build-ts`                | Compiles all source `.ts` files to `.js` files in the `dist` folder                                 |
| `watch-ts`                | Same as `build-ts` but continuously watches `.ts` files and re-compiles when needed                |
| `build-sass`              | Compiles all `.scss` files to `.css` files                                                          |
| `watch-sass`              | Same as `build-sass` but continuously watches `.scss` files and re-compiles when needed            |
| `lint`                    | Runs ESLint on project files                                                                       |
| `copy-static-assets`      | Calls script that copies JS libs, fonts, and images to dist directory                             |
| `debug`                   | Performs a full build and then serves the app in watch mode                                       |
| `serve-debug`             | Runs the app with the --inspect flag                                                               |
| `watch-debug`             | The same as `watch` but includes the --inspect flag so you can attach a debugger                   |

## License
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the [MIT](LICENSE.txt) License.
