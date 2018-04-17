/**
 * @Author: Ali Ismail
 * @Date:   2018-04-16T21:35:16+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-17T13:43:05+02:00
 */
import React , { Fragment} from 'react'
import { Grid, Paper, Typography, List } from 'material-ui'
import { ListItem, ListItemText} from 'material-ui/List'
const styles = {
  Paper : {padding: 20, marginTop: 10, marginBottom: 10}
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
            {exercises.map(({title}) =>
              <ListItem button>
                <ListItemText primary={title}/>
              </ListItem>
            )}

          <ListItem button>
            <ListItemText>
            </ListItemText>
          </ListItem>
          </List>
        </Fragment>
      )}
    </Paper>
  </Grid>
  <Grid item sm>
    <Paper style={styles.Paper}>
      Right
    </Paper>
  </Grid>
</Grid>
