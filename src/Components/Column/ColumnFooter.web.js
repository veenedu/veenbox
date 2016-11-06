import React from 'react';
import {HeaderStyle} from './ColumnHeader.react';
import Base, {combineStyles} from '../Base.react';

const ColumnFooter = (props) => {
  return <Base  {...combineStyles(props,HeaderStyle)} />
}

export default ColumnFooter;
