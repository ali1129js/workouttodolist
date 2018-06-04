/**
 * @Author: Ali Ismail
 * @Date:   2018-04-16T21:18:09+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-06-04T15:42:51+02:00
 */
import React, { Component, Fragment } from 'react'
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
  // handleCatSelected = category => {
  //   this.setState({
  //     category
  //   })
  // }
  render() {
    const exercises = this.getExercisesByMuscles()
    return (
    <Fragment>
      <Header />
      <Exercises exercises={exercises}/>
      <Footer muscles={muscles} />
    </Fragment>
    )
  }
}

export default App
