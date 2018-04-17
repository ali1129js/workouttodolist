/**
 * @Author: Ali Ismail
 * @Date:   2018-04-16T21:35:16+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-17T13:52:18+02:00
 */
import React , { Fragment} from 'react'
import { Grid, Paper, Typography, List } from 'material-ui'
import { ListItem, ListItemText} from 'material-ui/List'
const styles = {
  Paper : {padding: 20, marginTop: 10, marginBottom: 10, hight:500, overflow:'auto'}
}
export default ({exercises}) =>
<Grid container>
  <Grid item sm>
    <Paper style={styles.Paper}>
      {exercises.map(([block,exercises]) =>
        <Fragment>
          <Typography
            variant="headline"
            style={{textTransform : 'capitalize'}}>
            {block}
          </Typography>
          <List components="ul">
            {exercises.map(({title, id}) =>
              <ListItem key={id} button>
                <ListItemText primary={title} />
              </ListItem>
            )}
          </List>
        </Fragment>
      )}
    </Paper>
  </Grid>
  <Grid item sm>
    <Paper style={styles.Paper}>
      <Typography variant="display1">
        Welcome!
      </Typography>
      <Typography variant="subheading" style={{marginTop:20}}>
        Please select from the list on the Left
      </Typography>
    </Paper>
  </Grid>
</Grid>
