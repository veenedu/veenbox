import React, { Component } from 'react';
import {calculateRootStyle,calculateContentStyle,santizeObject,getOppositeDirection} from './utils1';
import {getDefaultDirection,getRootElement} from './configure';


class FlexBox extends Component {
    //Default Parent Direction
    parDirection = getDefaultDirection();

    //
    getChildDirection(){
        let {fdir,children} = this.props;    
        //user has passed child direction. Use it.    
        if(fdir){
            return fdir;
        }
        //Child direction not passed lets calcualte it
        //first let get the default direction (and assume this is going to be child direction)
        fdir = getDefaultDirection();
        //now find the opposite direction
        let oppositeDirection = getOppositeDirection(fdir);
        //if first element is opposite direction return it, 
        //we can say child direction is opposite of our assumption
        if(children && children[0] && children[0]['type'] && (children[0].type.name || '').toLowerCase() === oppositeDirection){
            fdir = oppositeDirection;
        }
        // else we are retruning default direction
        return fdir;
    }    

    //
    calculateStyle(){
        let {style} = this.props;
        //Calculates style that position container
        let rootStyle= calculateRootStyle(this.props,this.parDirection);
        //Calculates style that matter for child
        let contentStyle=  calculateContentStyle(this.getChildDirection(),this.props);
        //Now we are merging every thing
        let newStyle= {...rootStyle,...contentStyle,...style};
        return newStyle;
    }

    render() {     
        let santitizedProps = santizeObject(this.props,
            ['height','width','flex','scrollX','scrollY','halign','valign','fdir','children','noflex','style']
        );
        let RootElement = getRootElement();
        
        //If Root Element Passed use it.
        //Else We will use div
        if(RootElement){
            <RootElement {...santitizedProps} style={this.calculateStyle()}>{this.props.children}</RootElement>
        }else{
            return <div {...santitizedProps} style={this.calculateStyle()}>{this.props.children}</div>
        }

        // let RootElement = getRootElement()(santitizedProps,this.calculateStyle());
        // return (
        //     <RootElement>
        //         {this.props.children}
        //     </RootElement>
        // );
    }
}

export default FlexBox;
