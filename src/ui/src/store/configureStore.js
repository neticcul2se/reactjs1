import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from 'modules/reducers'

function configureStore(initialState) {
  const middleware = [reduxThunk]

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )

  return store
}

export default configureStore
