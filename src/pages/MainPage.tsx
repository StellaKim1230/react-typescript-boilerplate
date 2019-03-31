import React, { Component } from 'react'

interface Props {
  title: string,
}

class MainPage extends Component<Props> {
  render () {
    const { title } = this.props
    return (
      <div>Main Page</div>
    )
  }
}

export default MainPage
