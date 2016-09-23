import React from 'react';

const Container = ({children}) => {
  let style = {
      position:'absolute',
      top:0,
      right:0,
      bottom:0,
      left:0,
      backgroundColor:'#333',
      color:'#fff',
      overflow:'hidden',
      display:'flex',
      flexDirection:'column'
  }

  return <div style={style}>{children}</div>
}

export default Container;
