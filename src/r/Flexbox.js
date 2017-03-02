import React, { PropTypes } from 'react';

/**
 * flex= for self
 * display:for children
 * flex=0 => remove  :: flex:1
 * noflex: => remove :: display:flex
 * Every component flexbox, stripItem, etc has display:flex. To remove remove flex add noflex.
 * 
 */
/**
 * Tasks
 * 0. Create a method to cache style.
 * May be just a function that computes a styles and return
 * 
 * 1. Move to veenbox
 * Create 2 folders r, rn, and share with three files. index.js, index.ios, index.android.js
 * 
 * 2. Define Types for panel,strip and their item
 * 
 * 3.More on types
 * // => justofy and align
 *   // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

  // An object that could be one of many types
  //for => width and height
  optionalUnion: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
    React.PropTypes.instanceOf(Message)
  ]),

  4. Write DOcs
 */


//Remove items specified in array from object passed
const sanitizeProps = (props,itemsArr=[])=>{
    //props ={a:1,b:1,c:1,d:1}
    //itemsArr = [b,c]
    //Return = {a:1,d:1}
    // let props ={a:1,b:1,c:1,d:1};
    // let itemsArr = ['b','c']
    // console.log(santizeObject(props,itemsArr))    
    let newObject = {...props}
    for(let i=0;i<itemsArr.length;i++){
        delete newObject[itemsArr[i]];
    }
    return newObject;
}
//
///
const {number,string,bool,object, element} =PropTypes;
//
//
//Type is ignored in Final Code.
//This is for VSCODE Hint. Follows flowconfig.
type props = {
    width:number,
    height:number,
    crossAlign:string,
    mainAlign:string,
    flex:number,
    noflex:bool,
    style:object,
    scrollX:bool,
    scrollY:bool,
    dir:string,
    centerAll:bool
}
//This is flexbox component
const Flexbox  = (props:props)=>{
    const {children,width,height,crossAlign,mainAlign,flex,noflex,style,scrollX,scrollY,dir,centerAll} = props;
    

    //this is default styles from props
    const defaultStyle = {
        display:'flex',
        flex:flex,
        width:width,
        height:height,       
        flexDirection:dir,
        overflowY:'hidden',
        overflowX:'hidden',    
        alignItems:crossAlign,
        justifyContent:mainAlign,             
        alignSelf:'stretch',
    };

    //We have to compute styles based on passed options
    //This was `const`
    let computedStyle ={};
    //
    //If no flex remove display:flex
    if(noflex){
        computedStyle['display'] = undefined;
    }
    //width has more priorty then flex
    if(width){
        computedStyle['width'] = width;
    }
    //if width defined or flex=0, remove flex
    if(width || height || flex == 0){
        computedStyle['flex'] = undefined
    }
    //
    if(scrollY){
        computedStyle['overflowY'] = 'auto'
    }
    if(scrollX){
        computedStyle['overflowX'] = 'auto'
    }    

    if(centerAll){
        computedStyle['alignItems']='center'
        computedStyle['justifyContent']='center';
    }
    
    const finalStyle  = {...defaultStyle,...computedStyle,...style};
    const sanitizedProps = sanitizeProps(props,['children','width','height','crossAlign','mainAlign','flex','noflex','style','scrollX','scrollY','dir','centerAll']);
    return <div {...sanitizedProps} style={finalStyle}>
        {children}
    </div>
}

Flexbox.propTypes={
    width:number,
    height:number,
    crossAlign:string, //alignItems
    mainAlign:string,  //justifyContent
    flex:number,
    noflex:bool,
    style:object,
    scrollX:bool,
    scrollY:bool,
    dir:string,
    centerAll:bool,
    // children: element.isRequired //this should be since elemnt or multiple
}

Flexbox.defaultProps ={
    crossAlign:'flex-start', //alignItems
    mainAlign:'flex-start',  //justifyContent
    flex:1,
    noflex:false,
    style:{},
    scrollX:false,
    scrollY:false,
    dir:'row',
    centerAll:false //middle both direction
}


export default Flexbox;