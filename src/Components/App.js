/**
 * @Author: Ali Ismail
 * @Date:   2018-04-16T21:18:09+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-16T21:27:28+02:00
 */
import React, { Component, Fragment } from 'react'
  // import Header from './Layouts/Header'
  // import Footer from './Layouts/Footer'
import { Header, Footer} from './Layouts'
class App extends Component {
  render() {
    return (
    <Fragment>
      <Header />
      <Footer />
    </Fragment>
    )
  }
}

export default App
