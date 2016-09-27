import React from 'react';

export const HeaderStyle = {
  display:'flex',
  alignItems:'center',
  width:'100%',
  overflow:'hidden',
  flexDirection:'column',
  paddingTop:10,
  paddingBottom:10,
}

const ColumnHeader = ({children,style}) =>{
  let addStyle = HeaderStyle;
  return <div style={{...addStyle, ...style}}>
    {children}
  </div>
}

export default ColumnHeader;
