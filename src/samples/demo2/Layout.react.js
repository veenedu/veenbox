import React from 'react'
import {getAvatarURI,getRandomWords,getCardImage} from '../../utils';
import RootContainer from '../../Components/RootContainer.react';
import Container from '../../Components/Container.react';
import ScrollView from '../../Components/ScrollView.react';
import PanelContainer from '../../Components/Panel/PanelContainer.react';
import PanelItem from '../../Components/Panel/PanelItem.react';

function getSelectOptions(n=0,arr=[]){
  if(n>0){
    return getSelectOptions(n-1,arr.concat({
      children: getRandomWords(1),
      value:n
    }));
  }else{
    return arr
  }
}

export default class Component extends React.Component {
  render() {
    return (
      <RootContainer style={{
        backgroundColor:'#777',
        padding:30
      }}>
          <Container  style={{
            backgroundColor:'#f4f4f4'}}>
            <PanelContainer>
              <PanelItem width={200}>{getRandomWords(100)}</PanelItem>
              <PanelItem>
                  <div style={{
                    width:400,
                    height:400,
                    backgroundColor:'red'
                  }}>
                      <Container  style={{
                        backgroundColor:'green',
                        width:200,
                        height:200,
                      }}>
                        Hello
                      </Container>
                  </div>
              </PanelItem>
              <PanelItem>
                <ScrollView>{getRandomWords(1000)}</ScrollView>
              </PanelItem>
            </PanelContainer>
          </Container>
      </RootContainer>
    )
  }
}
