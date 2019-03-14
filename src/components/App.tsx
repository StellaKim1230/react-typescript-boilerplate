import React, { Fragment, Component } from 'react'

import Hello from './Hello'

interface Props {
  compiler: string
  framework: string
}

class App extends Component<Props> {
  render () {
    const { compiler, framework } = this.props
    return (
      <Fragment>
        <h1>HI from {compiler} and {framework}!</h1>
        <Hello title='account-book'/>
      </Fragment>
    )
  }
}

export default App
