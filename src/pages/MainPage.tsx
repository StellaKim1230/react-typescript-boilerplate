import React, { Component, Fragment } from 'react'

import Header from '../components/Header'
import AccountContent from '../components/AccountContent'
import Sidebar from '../components/Sidebar'

class MainPage extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        <Sidebar />
        <AccountContent />
      </Fragment>
    )
  }
}

export default MainPage
