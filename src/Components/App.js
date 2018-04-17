/**
 * @Author: Ali Ismail
 * @Date:   2018-04-16T21:18:09+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-17T13:02:00+02:00
 */
import React, { Component, Fragment } from 'react'
  // import Header from './Layouts/Header'
  // import Footer from './Layouts/Footer'
import { Header, Footer} from './Layouts'
import Exercises from './Exercises'
import { muscles , exercises} from '../store'
class App extends Component {
  state = {
    exercises
  }
  getExercisesByMuscles(){
    return Object.entries(
      this.state.exercises.reduce((exercises,block) => {
        const { muscles } = block
        exercises[muscles] = exercises[muscles]
        ? [...exercises[muscles],block]
        : [block]
        return exercises
      }, {})
    )
  }
  render() {
    console.log(this.getExercisesByMuscles())
    return (
    <Fragment>
      <Header />
      <Exercises />
      <Footer
       muscles={muscles}/>
    </Fragment>
    )
  }
}

export default App
