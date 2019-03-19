import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

import createRootReducer from './modules'

const initialState = {}
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]
const createHistory = require("history").createBrowserHistory

export const history = createHistory()

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
      ),
    ),
  )
  return store;
}
