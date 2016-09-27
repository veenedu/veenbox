import React from 'react';
import Base from './Base.react';
import {combineStyles} from './Base.react';

const ScrollView = (props) => {
  let addStyle  = {
    'overflowY':'auto',
  }
  return <Base halign='flex-start' valign='flex-start' {...combineStyles(props,addStyle)} />
}

export default ScrollView;
