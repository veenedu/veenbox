import React from 'react';

//use this method to create a combined styles,
//prom styles you receive from props, and your extra style
export function combineStyles(props,addStyle){
  var  p = {...props};
  p.style = { ...addStyle, ...(p.style)}
  return p;
}

const base = (props) =>{
 
  //This is base style. And it can be overwritten
  let baseStyle = {
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

  //this new style build by over writting base_style with inline style passed.
  let combinedStyle = {...baseStyle, ...style};
  
  //style alias that can be passed ass props
  var stylePairs =  [
    ['justifyContent','valign'],
    ['alignItems','halign'],
    ['flexDirection','dir'],
    ['width','width'],
    ['height','height']
  ];
  //Build Style object based on properties passed.
  let styleFromProps = stylePairs.reduce((acc,val)=>{
    var s ={};
    s[val[0]] = props[val[1]] || combinedStyle[val[0]]
    return {...acc, ...s}
  },{});
  

  //Sanitize passed props. We have to remove all properties that we think were passed
  //for VeenBox component, as we will pass all user props to root node.(div in this case)
  var newProps = {...props};
  stylePairs.map((pair) =>{
    delete newProps[pair[1]]
  })

  //fullHeight is special case. We need true or false.
  //If its false, we want height to ignored. We also remove it 
  //from newProps  to sanitize props
  if(props.fullHeight === false){
      styleFromProps.height ='';
      delete newProps['fullHeight']
  }

  return <div {...newProps} style={{...combinedStyle,...styleFromProps}}>
    {children}
  </div>
}

export default base;
