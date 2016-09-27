import React from 'react';
import Base, {combineStyles} from '../Base.react';

export const HeaderStyle = {
  paddingTop:10,
  paddingBottom:10,
  height:60,
  display:null,
  flex:null,
}

const ColumnHeader = (props) => {
  return <Base  {...combineStyles(props,HeaderStyle)} />
}

export default ColumnHeader;
