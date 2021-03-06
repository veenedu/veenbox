import React from 'react';
import Base, {combineStyles} from '../Base/Base.r';

export const HeaderStyle = {
  height:50,
  display:null,
  flex:null,
}

const ColumnHeader = (props) => {
  return <Base  {...combineStyles(props,HeaderStyle)} />
}

export default ColumnHeader;
