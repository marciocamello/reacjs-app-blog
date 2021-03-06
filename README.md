# React App Blog

This is a Blog with ReactJS, with the tests written in Cypress.

## Help + Testing

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

**If you get stuck, here is more help:**

* [Gitter Channel](https://gitter.im/cypress-io/cypress)
* [Cypress Docs](https://on.cypress.io)
* [Cypress CLI Tool Docs](https://github.com/cypress-io/cypress-cli)

### 1. Install Cypress

[Follow these instructions to install Cypress.](https://on.cypress.io/guides/installing-and-running#section-installing)

### 2. Fork this repo

If you want to experiment with running this project in Continous Integration, you'll need to [fork](https://github.com/cypress-io/cypress-example-todomvc#fork-destination-box) it first.

After forking this project in `Github`, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/marciocamello/reacjs-app-blog.git

## cd into the cloned repo
cd reacjs-app-blog

## install the node_modules
yarn

## start the local webserver
yarn start
```

The `yarn start` script will spawn a webserver on port `3000` which hosts the React Blog app.

You can verify this by opening your browser and navigating to: [`http://localhost:3000`](http://localhost:3000)

You should see the React Blog app up and running. We are now ready to run Cypress tests.

### 3. Add the project to Cypress

[Follow these instructions to add the project to Cypress.](https://on.cypress.io/guides/installing-and-running#section-adding-projects)

### 4. Run in Continuous Integration

[Follow these instructions to run the tests in CI.](https://on.cypress.io/guides/continuous-integration#section-running-in-ci)