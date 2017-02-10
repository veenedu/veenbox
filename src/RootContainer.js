import React, { Component } from 'react';
import {getDefaultDirection} from './configure';
import {directionMapping} from './utils1';

class Root extends Component {
    render() {
        let defaultStyle ={
            display:'flex',
            flex:1,
            height:'100vh',
            width:'100vw',
            position:'absolute',
            top:0,
            right:0,
            bottom:0,
            left:0,
            overflow:'hidden',
            flexDirection:directionMapping()[getDefaultDirection()]
        }
        let style= {...defaultStyle,...this.props.style};
        // console.log(style);
        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
}

export default Root;