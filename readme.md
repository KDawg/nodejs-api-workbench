# NodeJS API Workbench

## Overview

This is a reference implementation for calling the Instagram media API.
It's a simple demonstration webapp showing a typical UX workflow based around 
searching for a user's most recently submitted media.

See how JavaScript can be used on the backend powered by NodeJS. That is **fantastic** because a frontend
web developer will find they can become fullstack! Team leaders choosing a similar 
tech stack will enable their people to be more awesome.

You can experiment with programming to APIs using this app. Treat this source code like a 
workbench full of tools that you can bang around on.
  
  * Route mapping to action handlers
  * Template-based HTML rendering
  * Source code linting
  * Logic unit tests
  
Explore and build discovering how to  use APIs 
with NodeJS. It's a powerful tool. Integrate what you learn into your project.

## Quick Start

#### Installing NodeJS

If you've never installed NodeJS please do. Refer to the [the Node Foundation](https://nodejs.org/en/download/) 
finding an installer meeting your needs.

#### Installing Project Dependencies

Friendly reminder. Run this command in the root of your local clone of this rep. It's 
customary when first starting work with a NodeJS project:

    npm install
 
It references the `dependencies` and `devDependencies` sections of the [`package.json`](https://github.com/KDawg/nodejs-api-workbench/blob/master/package.json#L15) 
file to understand the right OSS libraries to pull down. 

#### Start the Server

Enter this command to run the app web sever:

    npm run start 

You'll see this declared in the `scripts` section of the [`package.json`](https://github.com/KDawg/nodejs-api-workbench/blob/master/package.json#L6) file.  

#### See the Experience

Open your favorite web browser and hit the web server with this URL:

    localhost:3000

## Guide

#### Backend

You'll find that this app is a web server coded on NodeJS. The web server simply renders a 
page-based UI. Very straight-forward. It exposes a few routes progressing therough the workflow
displaying pages in your browser.

#### Frontend 

The web server generates all UI. It's a very traditional presentation architecture. You'll 
find HTML, CSS, and a little bit of JavaScript driving the browser-based user experience. 
 
JavaScript simply handles click interactions sending off background service requests. 
Service responses provide data context for rendering the report page.

#### UX Workflows

This app is made up of two workflows. They are: **search** and **report**. 
Let's go through them showing what web server routes implement them.

#### Search Instagram

    localhost:3000/

The default route draws a user interface asking for an Instagram user account. Interesting
ones to pick: usinterior, natgeotravel, therock, kentabor.

#### Report Media Contact Sheet

    localhost:3000/search?user=${userAccount}
    
The frontend redirects to this route after pressing the *search* button on the opening
screen. The backend creates a contact sheet showing all of the recently posted photos.

## Reference

### Tech Stack

What technical parts make up this system from teh frontend to the backend?

#### Backend

You'll see a carefully curated tech stack of OSS libraries meeting the 
demands of a modern NodeJS web server. Here's what they are, and how they're used: 

Package Name | Description
------------ | -------------
`async` | Organizes asynchronous request calls into a deterministic and synchronous pattern.
`body-parser` | Parses request body data from the UI into something easily consumed by the route action handlers.
`chai` |  BDD assertion library.
`eslint` | Applies linting rules checking JavaScript code quality and style.
`express` | Maps typical web server routes to action handler callbacks.
`hbs` | Creates HTML by pairing data models to templates rendering the presentation UI in HTML via Handlebars.
`mocha` | BDD unit testing framework. 
`moment` | Amazing library that parses date/time into human-friendly formatted outputs.
`morgan` | Logs route requests to help debugging. 
`request` | Simplifies use of the fundamental Node HTTP API.

#### Frontend

The frontend depends upon a thin tech stack:

Package Name | Description
------------ | -------------
`jQuery` | The classic library for easily manipulating DOM elements.
`Bootstrap` | Making it easier to build a clean, consistent looking screens.


### NPM

What useful `npm run` actions are defined for automating tasks in this project?

#### NPM Commands

Common tasks are automated using `npm run` actions. You'll see all of them declared in the 
 [`package.json`](https://github.com/KDawg/nodejs-api-workbench/blob/master/package.json#L6) 
 file under the `scripts` section.

Remember that you can learn all of the project's `run` actions using this command:
 
    npm run --list

#### Run Lint

You'll find `ESLint` is configured. Static source code analysis reviews your NodeJS program
confirming it meets chosen style standards, and avoids syntactic mistakes. 
Which style rules are used? I've brought in a well-known set from AirBnB.

    npm run lint
    
#### Run Unit Tests

You'll find `mocha` and `chai` are configured for unit tests. Run them seeing how it
documents the code it's covering as you first learn the project. 

    npm run test

Run them in the future to gain confidence as you're refactoring.

## Community

If this app doesn't work for you in any way please contact the original author, Ken Tabor. All
requests accompanied with ☕ and 🍫 will be prioritized to the top 😉.  
