                                                    REACT Advance_Redux

 1. Create App structure
    - src 
      - actions
        - __test__
        - actions.js
      - components
          - ...js files 
          - __test__
      - reducers
        - __test__
        - reducers.js
      - index.js
      - Root

- add .env
- add prettier
- Setup and create tests for root components and child components using enzyme for React v16

- Managing with global store, wrap into provider index.js
- Create Root and put inside index.js **children prop** (for testing) to render all components
  - createStore
  - create initial state
  - applyMiddleware
- axios fetch data from JSONPlaceholder fake data in actions and parsing in comments reducer
- reduxPromise, applyMiddleware
- use moxios to make fake request **moc axios** for pass tests