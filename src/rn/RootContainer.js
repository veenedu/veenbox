import React from 'react';
import {StyleSheet, Text,View} from 'react-native';

const RootContainer = ({style,children}) =>{
    return <View style={[styles.defaultStyle,style]}>
        {children}
    </View>
}


const styles = StyleSheet.create({
    defaultStyle:{
        flex:1
    }
});

export default RootContainer;