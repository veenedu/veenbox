import React from 'react';
import Flexbox from './Flexbox';

type props = {
    crossAlign:string,
    mainAlign:string,
    flex:number,
    noflex:bool,
    style:object,
    scrollX:bool,
    scrollY:bool,
    dir:string,
    centerAll:bool,
    size:number
}
function Container(props,dir){
    return <Flexbox {...props} dir={dir}>{props.children}</Flexbox>
}

function ContainerItem(props,propName){
    let {children,size} = props;
    let newProps ={...props};
    if(size){
        newProps.flex= 0;
    }
    newProps[propName]  = size;
    return <Flexbox {...newProps}>{children}</Flexbox>
}

export function Panel(props:props){
    return Container(props,"column");
}

export function Strip(props:props){
    return Container(props,"row");
}

export function PanelItem(props:props){
    return ContainerItem(props,"height");
}

export function StripItem(props:props){
    return ContainerItem(props,"width");
}