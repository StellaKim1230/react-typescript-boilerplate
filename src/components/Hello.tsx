import React, { Component, Fragment } from 'react'

interface Props { title: string }

class Hello extends Component<Props> {
  render () {
    const { title } = this.props
    return (
      <Fragment>
        <h1> {title} </h1>
      </Fragment>
    )
  }
}

export default Hello
