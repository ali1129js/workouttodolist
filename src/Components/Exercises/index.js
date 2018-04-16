/**
 * @Author: Ali Ismail
 * @Date:   2018-04-16T21:35:16+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-17T00:16:10+02:00
 */
import React from 'react'
import { Grid } from 'material-ui'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const styles = {
  Paper : {padding: 20, marginTop: 10, marginBottom: 10}
}
export default props =>
<Grid container>
  <Grid item sm>
    <LeftPane styles={styles} />
  </Grid>
  <Grid item sm>
    <RightPane styles={styles}/>
  </Grid>
</Grid>
