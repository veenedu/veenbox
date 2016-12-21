import React, { Component } from 'react';
import  {View}  from 'react-native';

const Container = ({children,style}) => {
  let addStyle = {
  	flex:1
  }

  return <View 
  		style={{...addStyle, ...style}}>
  		{children}
  </View>
}

export default Container;