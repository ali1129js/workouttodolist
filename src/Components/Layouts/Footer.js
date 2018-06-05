/**
 * @Author: Ali Ismail
 * @Date:   2018-04-16T21:20:20+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-06-05T14:41:27+02:00
 */
 import React from 'react'
 import Paper from '@material-ui/core/Paper';
 import Tabs from '@material-ui/core/Tabs';
 import Tab from '@material-ui/core/Tab';

  export default ({muscles,onSelect, category}) => {
    const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0
    const onIndexSelect = (e, index) =>
      onSelect(index === 0 ? '' : muscles[index - 1])
    
    return (
      <Paper>
        <Tabs
          value={0}
          onChange={onIndexSelect}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All" />
          {muscles.map(block => <Tab label={block}/>)}
        </Tabs>
      </Paper>
    )
  }
