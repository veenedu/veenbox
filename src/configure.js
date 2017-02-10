import React, { Component } from 'react';
let defaultDirection = "row";
let rootElement= null;

//@param rowOrCol = string with value 'row' or 'col'
export function setDefaultDirection(rowOrCol){
    defaultDirection = rowOrCol;
}

export function getDefaultDirection(){
    return defaultDirection;
}

export function setRootElement(element){
    rootElement = element;
}

export function getRootElement(){
    return rootElement || Div;
}

function Div(props,style){
    return function(p){
        return (<div {...props} style={style}>{p.children}</div>)
    };
}