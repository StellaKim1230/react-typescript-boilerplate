import * as React from 'react';
import { Component, Fragment } from 'react';

interface Props {
  title : string,
}
class MainPage extends Component<Props> {
  render () {
    const { title } = this.props
    return (
      <Fragment>{title}</Fragment>
    )
  }
}

export default MainPage