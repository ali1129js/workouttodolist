/**
 * @Author: Ali Ismail
 * @Date:   2018-04-16T21:20:20+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-16T23:45:16+02:00
 */
 import React from 'react'
 import { Paper } from 'material-ui'
 import Tabs, { Tab } from 'material-ui/Tabs'
 export default props =>
 <Paper >
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
