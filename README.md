Preview
-----

https://m-wiz.pages.dev/project


Introduction
-----

Interactive mapping front-end of web app for university project.

Built with the following libraries:
- React
- Babel
- Rollup
- Jest

Based on tutorials from:

- https://www.codeguage.com/blog/setup-rollup-for-react
- https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/
- https://docs.mapbox.com/mapbox-gl-js/example/mouse-position/

A copy of the Codeguage tutorial is also available in `docs/`

And also more full-featured learning resources from:

- [Official React documentation](https://react.dev/learn)
- [How Javascript Works by Douglas Crockford](https://www.crockford.com/image/howjsworks.pdf)


Quickstart
----------

The following instructions will work on a computer with `npm` installed, or an online editing platform (e.g. codespaces).

Clone this repo, and then run:

    npm install

    npm build

    npm run serve

The website should then be available at `localhost:3000`.

Alternatively, to frequently re-run building of website automatically (e.g. after saving a JS file):

    npm run autobuild


How it works
-----

The web app is split into ... pages, with top-level state and rendering being controlled by `App.js`.


Tests
----

Since new to react, no idea how to write tests to render JSX, but plan to lean heavily on general Javascript unit tests via `jest`, to prevent having to simulate website in browser.

To run tests:

    npm run test

Unit tests are found within `src/*test.js`

