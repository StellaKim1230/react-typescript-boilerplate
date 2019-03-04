import React from 'react'
import ReactDOM from 'react-dom'

import { Hello } from './components/App'

ReactDOM.render(
  <Hello compiler='Typescript' framework='React'/>,
  document.getElementById('root')
);
