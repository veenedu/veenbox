import React, {Component} from 'react';
import {Dimensions,View,Text} from 'react-native';

function getWindow(){
  return Dimensions.get("window");
}

export function getDimensions(){
  const {height,width} = getWindow();
  return {height,width}
}

//listeners
var listeners = {};
export const windowResize = {
  subscribe:function(fn){
    listeners[fn]  = fn;
  },
  unsubscribe:function(fn){
      delete listeners[fn];
  }
}

export function wrapComponent(Comp){
  return class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.change= this.change.bind(this);
    }

    change(){
      for (var key in listeners){
        listeners[key](getDimensions());
      }
    }

    render() {
      return (<View
          onLayout={this.change}
         style={{flex:1}}><Comp /></View>);
    }
  }
}
