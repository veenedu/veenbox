import React from 'react';
import Container from '../Container/Container.web';
import {combineStyles} from '../Base/Base.web';


const PanelItem = (props) => {
  let addStyle  = {}

  //this code is ignored as we are handling this from Base, if Base is modified we need to modify this
  // var {style,width}= props;
  // if((style && style.width) || width) {
  //   addStyle['flex']= undefined
  // }
  //

  return <Container
              dir="row"
              halign='flex-start'
              valign='flex-start'
              {...combineStyles(props,addStyle)}
            />
}

export default PanelItem;
