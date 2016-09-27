import React from 'react';

//use this method to create a combined styles,
//prom styles you receive from props, and your extra style
export function combineStyles(props,addStyle){
  var  p = {...props};
  p.style = {...(p.style), ...addStyle}
  return p;
}

const base = (props) =>{
  let addStyle = {
    display:'flex',
    flex:props.height || (props.style && props.style.height) || props.width || (props.style && props.style.width)? null: 1,
    // flex:props.height? null: 1, if above codes causes issue, exchnage  it with this one and you then need to, modify pannelItem
    height:'100%',
    width:'100%',
    flexDirection:'column',
    overflowY:'hidden',
    overflowX:'hidden',
    justifyContent:'center',
    alignItems:'center'
  }

  let {children, style} =props;
  let combinedStyle = {...addStyle, ...style};

  var stylePairs =  [
    ['justifyContent','valign'],
    ['alignItems','halign'],
    ['flexDirection','dir'],
    ['width','width'],
    ['height','height']
  ];

  let styleFromProps = stylePairs.reduce((acc,val)=>{
    var s ={};
    s[val[0]] = props[val[1]] || combinedStyle[val[0]]
    return {...acc, ...s}
  },{})



  return <div style={{...combinedStyle,...styleFromProps}}>
    {children}
  </div>
}

export default base;
