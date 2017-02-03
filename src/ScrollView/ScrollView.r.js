import React from 'react';
import Base from '../Base/Base.r';
import {combineStyles} from '../Base/Base.r';

const ScrollView = (props) => {
  let addStyle  = {
    'overflowY':'auto',
    display:null,
  }
  return <Base halign='flex-start' valign='flex-start' {...combineStyles(props,addStyle)} />
}

export default ScrollView;
