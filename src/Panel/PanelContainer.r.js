import React from 'react';
import Base from '../Base/Base.r';

const PanelContainer = (props) => {
  return <Base
              dir="row"
              halign='flex-start'
              valign='flex-start'
              {...(props)} />
}

export default PanelContainer;
