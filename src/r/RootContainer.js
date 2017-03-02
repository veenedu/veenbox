import React from 'react';

const Root = ({style,children}) =>{
    let defaultStyle ={
        display:'flex',
        flex:1,
        // height:'100vh',
        // width:'100vw',
        position:'absolute',
        top:0,
        right:0,
        bottom:0,
        left:0,
        overflow:'hidden',
    }
    let combinedStyle= {...defaultStyle,...style};    
    return <div style={combinedStyle}>{children}</div>
}

export default Root;