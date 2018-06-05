/**
 * @Author: Ali Ismail
 * @Date:   2018-04-16T21:20:20+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-06-05T00:01:16+02:00
 */
 import React from 'react'
 import Paper from '@material-ui/core/Paper';
 import Tabs from '@material-ui/core/Tabs';
 import Tab from '@material-ui/core/Tab';

  export default (props) => {
    return (
      <Paper>
        <Tabs
          value={0}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Paper>
    )
  }
