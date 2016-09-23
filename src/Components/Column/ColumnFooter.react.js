import React, {PropTypes} from 'react';

const ColumnFooter = ({children,style}) =>{
  let addStyle = {
    height:40,
    display:'flex',
    alignItems:'center',
    width:'100%'
  }
  return <div style={{...addStyle, ...style}}>
    {children}
  </div>
}

export default ColumnFooter;
