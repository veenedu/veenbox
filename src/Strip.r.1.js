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
        // alignSelf:'stretch'       
    },
    flex1:{
        flex:1
    },
    container:{
        flexDirection:'row',
        border:'5px solid red'
    },
    item:{
        flexDirection:'column',
        border:'5px solid green'
    },
    flexAlign:{
        alignItems:'center',
        justifyContent:'center',
    }
}



function santizeObject(objectData,itemsArr){
    //objectData ={a:1,b:1,c:1,d:1}
    //itemsArr = [b,c]
    //Return = {a:1,d:1}
    // let objectData ={a:1,b:1,c:1,d:1};
    // let itemsArr = ['b','c']
    // console.log(santizeObject(objectData,itemsArr))    
    let newObject = {...objectData}
    for(let i=0;i<itemsArr.length;i++){
        delete newObject[itemsArr[i]]
    }
    return newObject;
}


export class Strip extends Component {
    render() {
        let {style,children} = this.props;
        //Flex <== StripContainer <== User Passed Style
        let _style= {...styles.flex,...styles.flex1,...styles.container,...style};
        let newProps = santizeObject(this.props,['style']);
        return (
            <div style={_style} {...newProps}>
                {children}
            </div>
        );
    }
}

export class StripItem extends Component {
    render() {
        let {style,children,width,flex=1} = this.props;
        //StripItem <== User Passed Style
        let _style= {...styles.item};
        if(width){
            _style = {..._style,...style};
            //Width Passed add width prop            
            _style.width = width;
        }else {
            //Width not passed make it flex box
            //Overwrite users flex options if passed
            _style= {..._style,...style,...styles.flex,...{flex}};
        }
        let newProps = santizeObject(this.props,['style','flex','width']);
        return (
            <div style={_style} {...newProps}>
                {this.props.children}
            </div>
        );
    }
}
StripItem.propTypes= {
    width: React.PropTypes.number,
    flex: React.PropTypes.number
}