import React from 'react';

const Container = ({children ,style}) => {

  let addStyle  = {
    overflow:'hidden',
    height:'100%'
  }

  return <div style={{...addStyle, ...style}}>
    {children}
  </div>
}

export default Container;
