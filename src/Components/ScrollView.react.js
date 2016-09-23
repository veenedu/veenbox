import React from 'react';

const Container = ({children,style}) => {
  let addStyle  = {
    'overflowY':'auto',
    'overflowX':'hidden',
    height:'100%'
  }

  return <div style={{...style,...addStyle}}>
   {children}
  </div>
}

export default Container;
