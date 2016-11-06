import React from 'react';

const Container = ({children,style}) => {
  let addStyle = {
      position:'absolute',
      top:0,
      right:0,
      bottom:0,
      left:0,
      overflow:'hidden',
      display:'flex',
      flexDirection:'column'
  }

  return <div style={{...addStyle, ...style}}>{children}</div>
}

export default Container;
