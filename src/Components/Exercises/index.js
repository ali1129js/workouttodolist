/**
 * @Author: Ali Ismail
 * @Date:   2018-04-16T21:35:16+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-16T23:59:38+02:00
 */
import React from 'react'
import { Grid, Paper } from 'material-ui'
const style = {
  Paper : {padding: 20,marginTop: 10,marginBottom: 10}
}
export default props =>
<Grid container>
  <Grid item sm> <Paper style={style.Paper}> Left </Paper> </Grid>
  <Grid item sm> <Paper style={style.Paper}> Right </Paper> </Grid>
</Grid>
