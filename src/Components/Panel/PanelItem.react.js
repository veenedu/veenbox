import React from 'react';

const PanelItem = ({children ,style}) => {

  var addStyle  = {
    flex:1,
    backgroundColor:'maroon',
  }

  style && style.width &&   delete addStyle.flex;

  return <div style={{...addStyle, ...style}}>
    {children}
  </div>
}

export default PanelItem;
