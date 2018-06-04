/**
 * @Author: Ali Ismail
 * @Date:   2018-04-16T21:18:14+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-06-04T15:20:20+02:00
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
