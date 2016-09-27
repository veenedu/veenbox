import React from 'react';
import Base from '../Base.react';

const PanelContainer = (props) => {
  return <Base
              dir="row"
              halign='flex-start'
              valign='flex-start'
              {...(props)} />
}

export default PanelContainer;
