import React, {PropTypes} from 'react';


const Container = ({children}) => (
  <div>
    Hello {children}
  </div>
);


export default Container;


---------

import React, {PropTypes} from 'react';

const ColumnBody = ({children,style}) =>{
  let addStyle = {
    display:'flex',
    flex:1,
    width:'100%',
    overflow:'hidden',
  }
  return <div style={{...addStyle, ...style}}>
    {children}
  </div>
}

export default ColumnBody;
