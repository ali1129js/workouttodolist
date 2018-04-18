/**
 * @Author: Ali Ismail
 * @Date:   2018-04-16T21:20:20+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-18T21:16:43+02:00
 */
 import React, { Components } from 'react'
 import { Paper } from 'material-ui'
 import Tabs, { Tab } from 'material-ui/Tabs'

  const Footer = ({muscles}) => {
    render()
      return
         <Paper >
           <Tabs
             value={0}

             indicatorColor="primary"
             textColor="primary"
             centered
           >
             <Tab label="All" />
             {muscles.map(block =>
               <Tab
                 key={block.toString()}
                 label={block}
               />
             )}
           </Tabs>
         </Paper>
    
  }





export default Footer
