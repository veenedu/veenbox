import React from 'react';
import {HeaderStyle} from './ColumnHeader.r';
import Base, {combineStyles} from '../Base/Base.r';

const ColumnFooter = (props) => {
  return <Base  {...combineStyles(props,HeaderStyle)} />
}

export default ColumnFooter;
