import React, {PropTypes} from 'react';

let timer = null;


export default class LayoutManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width:window.innerWidth
    }
  }

  componentDidMount(){
    var that = this;
    that.setState({
      width:window.innerWidth
    });
    window.onresize = function(event) {
      window.clearTimeout(timer);
      timer = window.setTimeout(function(){
        that.setState({
          width:window.innerWidth
        });
        window.clearTimeout(timer);
      },300);
    };
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

    console.log(width);
    return  <Comp />
  }
}

LayoutManager.propTypes = {
  xs: PropTypes.func.isRequired,
  sm:PropTypes.func,
  md:PropTypes.func,
  lg:PropTypes.func,
  xl:PropTypes.func
};
