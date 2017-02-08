import React, { Component } from 'react';

/**Demo
 * Each Strip represents 1 Row.
 * 
 <Strip style={{borderBottom:'1px solid blue',padding:'0px 0px'}}>
    <StripItem style={red}  width={30}>{span1}</StripItem>
    <StripItem style={green} flex={2}>{span2}</StripItem>
    <StripItem style={yellow}>{span3}</StripItem>
    <StripItem style={red}  width={50}>{span4}</StripItem>
</Strip>
 * 
 * <StripItem> => Can have OPTIONAL props of width or flex
 * width:Number => If it is passed flex is ignored
 * Flex:Number (default=1)  => If width not passed then Element is flexbox with this flex value
 */
const styles ={
    flex:{
        display:'flex',
        flex:'1',
        alignItems:'center'
    },
    container:{
        flexDirection:'row'
    },
    item:{
        textAlign:'center'
    }
}

export class Strip extends Component {
    render() {
        let {style,children} = this.props;
        //Flex <== StripContainer <== User Passed Style
        let _style= {...styles.flex,...styles.container,...style};
        return (
            <div style={_style}>
                {children}
            </div>
        );
    }
}

export class StripItem extends Component {
    render() {
        let {style,children,width,flex=1} = this.props;
        //StripItem <== User Passed Style
        let _style= {...styles.item,...style};
        if(width){
            //Width Passed add width prop
            _style.width = width;
        }else {
            //Width not passed make it flex box
            _style= {..._style,...{flex}};
        }
        return (
            <div style={_style}>
                {this.props.children}
            </div>
        );
    }
}
StripItem.propTypes= {
    width: React.PropTypes.number,
    flex: React.PropTypes.number
}