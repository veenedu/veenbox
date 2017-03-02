import React,{PropTypes} from 'react';
import {View, StyleSheet} from 'react-native'

const {number,string,bool,object, element} =PropTypes;

type props = {
    width:number,
    height:number,
    crossAlign:string,
    mainAlign:string,
    flex:number,
    noflex:bool,
    style:object,
    dir:string,
    centerAll:bool
}

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

const Flexbox = (props:props)=>{
    const {children,width,height,crossAlign,mainAlign,flex,style,dir,centerAll} = props;
    
    //this is default styles from props
    const defaultStyle = {
        flex:flex,
        width:width,
        height:height,       
        flexDirection:dir,
        alignItems:crossAlign,
        justifyContent:mainAlign,             
        alignSelf:'stretch',
    };


//We have to compute styles based on passed options
    //This was `const`
    let computedStyle ={};
    //
    //width has more priorty then flex
    if(width){
        computedStyle['width'] = width;
    }
    //if width defined or flex=0, remove flex
    if(width || height || flex == 0){
        computedStyle['flex'] = undefined
    }
    if(centerAll){
        computedStyle['alignItems']='center'
        computedStyle['justifyContent']='center';
    }
    const finalStyle  = {...defaultStyle,...computedStyle,...style};    
    // const sanitizedProps = sanitizeProps(props,['children','width','height','crossAlign','mainAlign','flex','noflex','style','scrollX','scrollY','dir','centerAll']);
    return <View style={finalStyle}>{children}</View>
}


Flexbox.propTypes={
    width:number,
    height:number,
    crossAlign:string, //alignItems
    mainAlign:string,  //justifyContent
    flex:number,
    style:View.propTypes.style,
    dir:string,
    centerAll:bool,
    // children: element.isRequired //this should be since elemnt or multiple
}

Flexbox.defaultProps ={
    crossAlign:'flex-start', //alignItems
    mainAlign:'flex-start',  //justifyContent
    flex:1,
    style:{},
    dir:'row',
    centerAll:false //middle both direction
}
export default Flexbox;