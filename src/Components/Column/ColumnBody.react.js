import React from 'react';

const ColumnBody = ({children,style}) =>{
  let addStyle = {
    display:'flex',
    flex:1,
    width:'100%',
    overflow:'hidden',
    flexDirection:'column',    
  }
  return <div style={{...addStyle, ...style}}>
    {children}
  </div>
}

export default ColumnBody;
