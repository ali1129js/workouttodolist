/**
 * @Author: Ali Ismail
 * @Date:   2018-04-16T21:20:06+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-06-04T19:45:56+02:00
 */
import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
export default props =>
<AppBar position="static">
  <Toolbar>
    <Typography variant="title" color="inherit">
      Exercise Database
    </Typography>
  </Toolbar>
</AppBar>
