import React from 'react';
import {HeaderStyle} from './ColumnHeader.react';

const ColumnFooter = ({children,style}) =>{
  let addStyle = HeaderStyle;
  return <div style={{...addStyle, ...style}}>
    {children}
  </div>
}

export default ColumnFooter;
