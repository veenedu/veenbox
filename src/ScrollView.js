import React, { Component } from 'react';
import Grid from './Grid'

class ScrollView extends Component {
    render(){
        return <Grid scrollY fdir="col" noflex {...this.props}>{this.props.children}</Grid>
    }
}

export default ScrollView;