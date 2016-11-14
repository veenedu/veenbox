import React from 'react';
import {HeaderStyle} from './ColumnHeader.web';
import Base, {combineStyles} from '../Base.web';

const ColumnFooter = (props) => {
  return <Base  {...combineStyles(props,HeaderStyle)} />
}

export default ColumnFooter;
