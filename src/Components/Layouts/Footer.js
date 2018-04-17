/**
 * @Author: Ali Ismail
 * @Date:   2018-04-16T21:20:20+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-17T12:20:46+02:00
 */
 import React from 'react'
 import { Paper } from 'material-ui'
 import Tabs, { Tab } from 'material-ui/Tabs'

 export default ({muscles}) =>
 <Paper >
   <Tabs
     value={0}
     indicatorColor="primary"
     textColor="primary"
     centered
   >
     <Tab label="All" />
     {muscles.map(block =>
       <Tab key={block.toString()} label={block} />
     )}
   </Tabs>
 </Paper>
