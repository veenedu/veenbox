import React, {PropTypes} from 'react';
import {windowResize,getDimensions,wrapComponent} from '../utils/';

export default class LayoutManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width:getDimensions().width
    }
  }

  componentDidMount(){
    var that = this;
    windowResize.subscribe(function({width}){
      that.setState({
        width:width
      });
    });
  }

  render() {
    let {xs,sm,md,lg,xl} = this.props;
    let {width} = this.state;

    sm = sm || xs;
    md= md || sm;
    lg = lg || md;
    xl = xl || lg;

    let Comp =  xs;
    if(width < 740 && width > 380){
        Comp = sm;
    }
    if(width < 1024 && width > 740){
        Comp = md
    }
    if(width < 1280 && width > 1024){
        Comp = lg
    }
    if(width >= 1280){
      Comp = xl;
    }

    let Comp2 = wrapComponent(Comp);
    return  <Comp2 />
  }
}

LayoutManager.propTypes = {
  xs: PropTypes.func.isRequired,
  sm:PropTypes.func,
  md:PropTypes.func,
  lg:PropTypes.func,
  xl:PropTypes.func
};
