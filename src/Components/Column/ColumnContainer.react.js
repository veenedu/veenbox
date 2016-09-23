import React, {PropTypes} from 'react';

const ColumnContainer = ({children,style}) =>{
  let addStyle = {
    display:'flex',
    alignItems: 'center',
    flexDirection:'column',
    flex:1,
    height:'100%',
    overflow:'hidden',
  }
  return <div style={{...addStyle, ...style}}>
    {children}
  </div>
}

export default ColumnContainer;
