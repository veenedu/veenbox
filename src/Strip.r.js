import React, { Component } from 'react';
import {calculateStyle} from './utils1';

export class Strip extends Component {
    render() {
        let {style} = this.props;
        let baseStyle= {
            flexDirection:'row' //For Child
        }
        let _style= {...calculateStyle(null,null,1,'row'),...baseStyle,...style};
        return (
            <div style={_style}>
                {this.props.children}
            </div>
        );
    }
}

export class StripItem extends Component {
    render() {
        let {style} = this.props;
        let baseStyle= {
            flexDirection:'col', //For Child
        }

        //row => we are assuming flexDirection prop of Paren is row
        let _style= {...calculateStyle(null,null,1,'row'),...baseStyle,...style};
        return (
            <div  style={_style}>
                StripItem
            </div>
        );
    }
}