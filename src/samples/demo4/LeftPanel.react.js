import React from 'react';
import ScrollView from '../../Components/ScrollView.react';
import ColumnContainer from '../../Components/Column/ColumnContainer.react';
import ColumnHeader from '../../Components/Column/ColumnHeader.react';
import ColumnBody from '../../Components/Column/ColumnBody.react';
import PanelContainer from '../../Components/Panel/PanelContainer.react';
import PanelItem from '../../Components/Panel/PanelItem.react';
import {getAvatarURI,getRandomWords,getCardImage,getRandomNumber,getFolders} from '../../utils';
import {Avatar,Arrow } from 'rebass'
import FolderView from './FolderView.react';


const LeftPanel = () => (
  <ColumnContainer>
    <ColumnHeader style={{
      backgroundColor:'#444',
      color:'#fff',
    }}>

      <PanelContainer>
        <PanelItem width={60} halign="center" valign="center">
          <Avatar
            circle
            size={32}
            src={getAvatarURI()}
            />
        </PanelItem>
        <PanelItem halign="center">
          {getRandomWords(2)}
        </PanelItem>
        <PanelItem width={40} halign="center" valign="flex-start">
          <Arrow direction="down" />
        </PanelItem>
      </PanelContainer>

    </ColumnHeader>

    <ColumnBody>
      <ScrollView>{getFolders(30).map((f) => <FolderView key={f.id} folder={f} />)}</ScrollView>
    </ColumnBody>

  </ColumnContainer>
)

export default LeftPanel;
