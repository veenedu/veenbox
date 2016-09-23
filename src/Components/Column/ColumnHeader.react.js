import React, {PropTypes} from 'react';

const ColumnHeader = ({children,style}) =>{
  let addStyle = {
    height:40,
    display:'flex',
    alignItems:'center',
    width:'100%',
    overflow:'hidden',
  }
  return <div style={{...addStyle, ...style}}>
    {children}
  </div>
}

export default ColumnHeader;
