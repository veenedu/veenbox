import React from 'react';
import Base from '../Base/Base.web';
import {combineStyles} from '../Base/Base.web';

const ScrollView = (props) => {
  let addStyle  = {
    'overflowY':'auto',
    display:null,
  }
  return <Base halign='flex-start' valign='flex-start' {...combineStyles(props,addStyle)} />
}

export default ScrollView;
