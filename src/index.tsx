import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { configureStore } from './redux/store'

import MainPage from './pages/MainPage'

import './index.scss'

const rootElement = document.getElementById('root')
const store = configureStore({
  // ...initialize any prepared state
})

if (!rootElement) throw Error('Dom element div#root not found')

render(
  <Provider store={store}>
    <MainPage title='가계부'/>
  </Provider>,
  rootElement,
)
