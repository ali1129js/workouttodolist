/**
 * @Author: Ali Ismail
 * @Date:   2018-04-16T21:18:09+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-06-05T14:37:12+02:00
 */
import React, { Component, Fragment } from 'react'
import { Header, Footer} from './Layouts'
import Exercises from './Exercises'
import { muscles , exercises} from '../store'

class App extends Component {
  constructor() {
    super()
    this.state = {
      exercises
      }
    this.handleCatSelected = this.handleCatSelected.bind(this)
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
  handleCatSelected = category => {
    this.setState({
      category
    })
  }
  render() {
    const exercises = this.getExercisesByMuscles(),
    {category} = this.state
    return (
    <Fragment>
      <Header />
      <Exercises exercises={exercises}/>
      <Footer
        muscles={muscles}
        onSelect={this.handleCatSelected}
        category={category}
       />
    </Fragment>
    )
  }
}

export default App
