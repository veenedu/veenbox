import React from 'react';

const PanelContainer = ({children ,style}) => {

  var addStyle  = {
    display:'flex',
    flexDirection:'row',
    flex:1,
    height:'100%'
  }

  return <div style={{...addStyle, ...style}}>
    {children}
  </div>
}

export default PanelContainer;
