import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history';
import starReducer from './reducers/starDk';
import searchReducer from './reducers/searchDk';
import userReducer from './reducers/userDK';
import listReducer from './reducers/productlistDk';




export const history = createBrowserHistory()

const middleware = [thunk, routerMiddleware(history)]

const rootReducer = combineReducers({
  router: connectRouter(history),
  star: starReducer,
  user: userReducer,
  search: searchReducer,
  productlist: listReducer
})

const enhancers = []
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension)
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
  )
  return store;
}
