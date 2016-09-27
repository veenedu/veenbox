import React from 'react';
import ColumnContainer from '../../Components/Column/ColumnContainer.react';
import ColumnHeader from '../../Components/Column/ColumnHeader.react';
import ColumnBody from '../../Components/Column/ColumnBody.react';
import ColumnFooter from '../../Components/Column/ColumnFooter.react';
import ScrollView from '../../Components/ScrollView.react';
import Container from  '../../Components/Container.react';
import {getAvatarURI,getRandomWords,getCardImage} from '../../utils'

import {InlineForm} from 'rebass'


function addStory(stories,num){
  if(stories.length<num){
    let newStory =  (<div
        style={{
          margin:10,
          backgroundColor:'#fff',
          border:'1px solid #888'
        }}
        key={stories.length}>
        {getRandomWords(60)}
    </div>)
    return addStory(stories.concat(newStory),num);
  }
  return stories
}
var stories = addStory([],50);

const middlePannel = () => (
    <ColumnContainer>
      <ColumnHeader>
        <Container style={{
          paddingLeft:5,
          paddingRight:5
        }}>
          <InlineForm
            buttonLabel="Search"
            label="InlineForm"
            name="inline_form"
          />
        </Container>
      </ColumnHeader>
        <ColumnBody style={{backgroundColor:'#fff'}}>
          <ScrollView>
            {stories}
          </ScrollView>
        </ColumnBody>
    </ColumnContainer>
)


export default middlePannel;
