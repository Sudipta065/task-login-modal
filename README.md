# Login Modal

A readme file for the Login modal App

---

## Setup

- `npm install`
- Build for dev- `npm run build-dev`
- Build for prod- `npm run build-prod`
- Run in localhost:3000 & open in browser(auto watch)- `npm start`

## What's included

- `webpack` is used to build and bundle
- `scss` is used as `css` pre-processor
- `babel` is used to transpile `es6`-> `es5`
- `bootstrap` is used for basic component styling & structure

## Learn More

About setting up a react app with webpack and babel-
[https://medium.com/@imranhsayed/set-up-react-app-with-webpack-webpack-dev-server-and-babel-from-scratch-df398174446d]

About Bootstrap modals - [https://getbootstrap.com/docs/4.0/components/modal/]

## Structure

```
|-- public
       |-- index.html{the main HTML file}
|-- src

   |-- components
      |-- App.js {For the home page}
      |-- LoginModal.js {For Login modal component}
      |-- theme-context.js {For changing themes}
   |-- styles
      |-- App.scss {For the styling of the components in App.js}
   |-- index.js (the entry point where the app renders the main App component)

|-- .babelrc (For compiling the es6 syntaxes to es-5 and make it ready for older browsers)
|-- webpack.config.js (for initializing the react app and run it on a local environment)
|-- package.json (the packeges installed)


##Copyright

© Sudipta Adhikary
```
