import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { bookReducer, userReducer, authorReducer } from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      books: bookReducer,
      users: userReducer,
      authors: authorReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )
  return store
}