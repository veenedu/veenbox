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
    //subscribe only if not already subscribed
    (!listeners[fn] && (listeners[fn]  = fn));
  },
  unsubscribe:function(fn){
      delete listeners[fn];
  }
}


//This fixes infinite loop bug. But this needds to look more clean and elegant.
let Comp = null;
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.change= this.change.bind(this);
  }

  change(){
    console.log('2');
    for (var key in listeners){
      // console.log(getDimensions());
      // console.log(listeners[key]);
      console.log('---');
      listeners[key](getDimensions());
      // let l = listeners[key];
      // let d= getDimensions();
      // l(d);
    }
  }

  render() {
    console.log('1');
    console.log(Object.keys(listeners).length,'listeners_.length');
    return (<View
        key="wrapper"
        onLayout={this.change}
       style={{flex:1}}><Comp /></View>);
  }
}

export function wrapComponent(comp){
  Comp = comp;
  return MyComponent;
}
