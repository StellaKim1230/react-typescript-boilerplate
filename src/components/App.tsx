import React, { Fragment } from 'react'

import { Hello } from './Hello'

export interface AppProps { compiler: string, framework: string }

export const App = (props: AppProps) =>
<Fragment>
  <h1>HI from {props.compiler} and {props.framework}!</h1>
  <Hello title='account-book'/>
</Fragment>
