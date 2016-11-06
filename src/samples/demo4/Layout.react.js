import React from 'react';
import RootContainer from '../../Components/RootContainer.react';
import PanelContainer from '../../Components/Panel/PanelContainer.react';
import PanelItem from '../../Components/Panel/PanelItem.react';
import LeftPanel from  './LeftPanel.react';
import MiddlePanel from  './MiddlePanel.react';
import RightPanel from  './RightPanel.react';



const Layout = ({layout}) =>{

    if(layout==1){
      return (<RootContainer>
          <LeftPanel />
      </RootContainer>)
  }

  if(layout==3){
    return (<RootContainer>
      <PanelContainer>
        <PanelItem width={250}>
          <LeftPanel />
        </PanelItem>
        <PanelItem width={300}>
          <MiddlePanel />
        </PanelItem>
        <PanelItem>
          <RightPanel />
        </PanelItem>
      </PanelContainer>
    </RootContainer>)
  }
}


//Single Columnt
// const Layout = () =>{
//   return (<RootContainer>
//       <LeftPanel />
//   </RootContainer>)
// }

export default Layout;
