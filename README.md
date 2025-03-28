# REACT

### 2 ways to initialize a react app

1. "CRA" -> `npx create-react-app`. Old and clunky.
2. Vite -> `npm create vite@latest`. New and recommended.

## Navigating a react app

1. The entrypoint is always `package.json`.

### CRA

1. Package.json shows that dependencies are preinstalled, these are testing libraries etc, even if you don't want to use them. This makes CRA an opinionated library.
2. Scripts in package.json are started by invoking a `react-scripts` command, which is again listed as a dependency. So we really can't get rid of the depenedency, even if we don't like it.
3. The build script creates the production assets of your react app in the `build` directory. These generated files are just HTML, CSS and JS. This can then be deployed on vercel, netify, amazon, etc.
4. Other folders are `public`, which contains some index and other assets, and most of your time is spent in `src`
5. index.html has alot of stuff and comments, it's a basic HTML page. Lots of stuff in the head, if collapse that we see that the body just contains a div with the ID of root. This is why it's called an SPA - Single Page Application. So your Javascript will have to grab this root div, manipulate it and that's how things get rendered.
6. To run the app, we do `npm start`. This runs a dev server on localhost:3000 and we see the spinning react logo. How does this happen? `react-scripts start` -> react-scripts will automatically find the html, css and js and inject them into the page before running it.
7. To actually understand what's happenening, we can remove most of the files in src, leaving just App.js and index.js. index is the entrypoint, and app returns HTML code which gets rendered in index.html. index.js pulls the root div by ID and renders the returned content into it.

### Vite

1. Package.json dependencies are light - only react and react-dom.
2. Directory srtucture - we have public and src, but index.html is outside of public. It is also quite clean and there is a src/main.jsx script linked in the body. Convention: If you're returning any HTML from a JS file, it's called JSX.
3. To run the app, we do `npm run dev`
4. In JSX you can only return one element, so everything must be wrapped in a div. For simplicity, we can use `<>` and `</>`.
5. To import your own code and create your own elements: Write a new JSX file, wrap the element to be exported in a function whose first letter is capitalized. Export that function and import it into the App.jsx file. Render the component with `<Component />`.

## React Elements and types

A react element can be created with `React.createElement`. This function accepts 3 params: first, the type of the HTML element, next the properties ("props") and finally the children. This is then parsed by react to render HTML. When rendering an element of this type, we don't need to use the angled bracket syntax <Component />. When using the JSX syntax (<Component />), it's actually syntactic sugar that gets transformed into `React.createElement` calls during compilation. Component here is a JS obect that returns HTML.

## State

Recap: JSX (syntax extension for javascript) allows you to write HTML-like code within your javascript files. The JSX code is transformed into regular javascript calls to `React.createElement()`.

- Javascript expressions can be embedded into JSX code using `{}`.

- Any change in state re-renders the UI. --> this is a unique feature of React.
- To use state, use the `useState()` method which returns two variables. One is a variable and the other is a method to set it. You can use the variable as you like, but when you want to change its value you have to use the method. The argument to `useState()` defines the starting value of the initialized variable. No type enforcement, can do anything.
- See setCounter() example
- If we want to set the value multiple times in the same block, it won't work without callbacks. Without callbacks, react performs "batching" where it condenses all the calls to the editing function together.
- Many advantages to react state: state is per component, making data flow simple and clear. State can be inherited too. Conditions that cause a re-render are also very clear.
- Sample that uses multiple state updates: setCounter((prevCounter) => prevCounter - 1);
- useState() is a state hook

## Virtual DOM

- Problem: reloading the entire DOM is expensive. To solve this, React maintains a copy of the DOM (virtual DOM) and observes which components have changed, then it reloads the actual DOM only on that particualr component.

## Fiber

- Goal: increase suitability for animation etc. Main feature: incremental rendering. Ability to split rendering work into chunks and spread it out over multiple frames.
- README: https://github.com/acdlite/react-fiber-architecture
- A fiber is a JS object that contains information about a component, its input and its output. Fiber opitmizes processing of user inputs (called "work") to boost performance on browsers for a smooth user experience.

## Props + tailwind + components

- JSX components can be passed parameters via `props`. Now you can override the content within components, making them more reusable. Props are KV pairs.
- We can destructure a prop when declaring a component by having it accept `{propName}` as a parameter. We can pass a prop by simply using `propName = "value"` when rendering the component. Objects can be passsed with `propName = {object}`.

## Common hooks: useCallback, useEffect, useRef

- useCallback implements memoization on your function so that you don't need to constantly recalculate stuff. Efficiency. You can specify the dependencies of the function to be memoized.
- useEffect allows you to run code based on a variety of scenarios - useful when you want to run a method as soon as something changes.
- useRef allows you to reference any component in your code
- Examples in 05pwdgenerator.

## Custom hooks

- Can be written to respond to changes in given events, and defined anywhere in codebase, commonly kept in hooks/ folder
- Components need to be passed props, when passing functions be careful to pass arrow functions (callbacks) which will wait until getting triggered before execution.

## React router

- How to create multi-page looking apps in a Single page
- `npm i react-router-dom`
