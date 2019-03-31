import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers'

// const composeEnhancer = DEV ? composeWithDevTools : compose

export const configureStore = (initialState: any) => createStore(
  reducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(),
  ),
)
