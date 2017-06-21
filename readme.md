# NodeJS API Workbench

## Overview

This is a reference implementation for calling the Instagram media API.
It's a simple demonstration webapp showing a typical UX workflow based around 
searching for a user's most recently submitted media.

Experiment with APIs using this app. Treat source code like a 
workbench that you can bang around on. Explore and build discovering how to effectively use APIs 
with NodeJS. Integrate what you learn into your own app.

## Quick Start

#### Installing NodeJS

If you've never installed NodeJS please do. Look at [the Node Foundation](https://nodejs.org/en/download/) 
to find an installer most appropriate for your needs.

#### Installing Project Dependencies

Friendly reminder. Run this command in the root of your local clone of the repo as is 
customary when first setting up a NodeJS project:

    npm install
 
It references the `dependencies` section of the [`package.json`](...) file to understand the right 
OSS libraries to pull down. 

#### Start the Server

Enter this command to run the app web sever:

    npm run start 

You'll see this declared in the `scripts` section of the [`package.json`](...) file.  

#### See the Experience

Open your favorite web browser and hit the web server with this URL:

    localhost:3000

## Guide

#### Backend

You'll find that this app is a web server coded on NodeJS. The web server simply renders a 
page-based UI. Very straight-forward. It exposes a few routes displaying the pages, and a 
few routes to progress through the workflow.

#### Frontend 

The web server generates all UI. It's a very traditional presentation architecture. You'll 
find HTML, CSS, and a little bit of JavaScript driving the browser-based user experience. 
 
JavaScript simply handles click interactions sending off background service requests. 
Service responses provide data context for rendering the next page the user sees.

#### UX Workflows

This app is made up of two workflows. They are: **search** and **report**. 
Let's go through them showing what web server routes implement them.

#### Search Instagram

    localhost:3000/

The default route draws a user interface asking for the Instagram user account.

#### Report

    localhost:3000/search?user=${userAccount}
    
The frontend redirects to this route after pressing the *search* button on the search screen 
before it. The backend creates a contact sheet, and all of the recent media is shown.

## Tech Stack

#### Backend

You'll see a carefully curated tech stack of OSS libraries meeting the 
demands of a NodeJS web server. Here's what they are, and how they're used: 

Package Name | Description
------------ | -------------
`async` | organizes asynchronous request calls into a deterministic and synchronous pattern
`body-parser` | parses request body data from the UI into something easily consumed by the route action handlers
`chai` |  BDD assertion library
`eslint` | applies linting rules checking JavaScript code quality and style using the AirBnB config
`express` | maps typical web server routes to action handler callbacks 
`hbs` | creates HTML by pairing data models to templates rendering the presentation UI in HTML via Handlebars
`mocha` | unit testing framework 
`moment` | amazing library that parses date/time into human-friendly formatted outputs
`morgan` | logs route requests for debugging interactions 
`request` | simplifies use of the fundamental Node HTTP API

#### Frontend

The frontend depends upon a thin tech stack:

Package Name | Description
------------ | -------------
`jQuery` | the classic library for easily manipulating DOM elements
`Bootstrap` | makes it easy to build a clean looking set of screens

#### NPM Commands

Common tasks are automated using `npm run` commands. You'll see all of them listed in the 
 [`package.json`](...) 
 file under the **scripts** section.

Remember that you can learn all of the project's run commands via this:
 
    npm run --list

#### Run Lint

You'll find `ESLint` is configured. Static analysis reviews your NodeJS code for code
standards and syntactic mistakes. Which rules are taken? I've brought in a set from AirBnB.

    npm run lint
    
#### Run Unit Tests

You'll find `mocha` and `chai` are configured for unit tests. Run all of them seeing what
it reports as your refactor code.

    npm run test
    


## Community

If this app doesn't work for you in any way please contact the original author, Ken Tabor. All
requests accompanied with ☕ and 🍫 will be prioritized to the top 😉.  
