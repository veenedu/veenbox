import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootContainer from './Components/RootContainer.react';
import Container from './Components/Container.react';
import ScrollView from './Components/ScrollView.react';
import PanelContainer from './Components/Panel/PanelContainer.react';
import PanelItem from './Components/Panel/PanelItem.react';
import ColumnContainer from './Components/Column/ColumnContainer.react';
import ColumnHeader from './Components/Column/ColumnHeader.react';
import ColumnBody from './Components/Column/ColumnBody.react';
import ColumnFooter from './Components/Column/ColumnFooter.react';



import {getRandomWords} from './utils';

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


let App = (<RootContainer>
            <div style={{
              margin:10,
              height:600,
              with:1100,
              backgroundColor:'#777'
            }}>

              <PanelContainer>
                <PanelItem style={{
                    backgroundColor:'green',
                    width:250
                  }}>
                   <Container style={{}}>
                     {getRandomWords(1000)}
                   </Container>
                </PanelItem>

                <PanelItem style={{backgroundColor:'#e0e0e0',color:'#000',width:400}}>
                  <ColumnContainer>
                    <ColumnBody style={{backgroundColor:'#f1f1f1'}}>
                      <ScrollView>
                        {stories}
                      </ScrollView>
                    </ColumnBody>
                    <ColumnFooter>
                      <input type="Search" />
                    </ColumnFooter>
                  </ColumnContainer>
                </PanelItem>


                <PanelItem style={{
                  backgroundColor:'#777',
                  padding:0
                }}>
                  <ColumnContainer style={{
                    backgroundColor:'#000'
                  }}>
                      <ColumnHeader style={{backgroundColor:'rgb(6, 62, 57)'}}>Header</ColumnHeader>
                      <ColumnBody style={{
                        backgroundColor:'#fff',
                        color:'#444'
                      }}>
                        <ScrollView>{getRandomWords(3000)}</ScrollView>
                      </ColumnBody>
                      <ColumnFooter style={{
                        backgroundColor:'red'
                      }}>Footer</ColumnFooter>
                  </ColumnContainer>
                </PanelItem>
              </PanelContainer>

            </div>
          </RootContainer>)

ReactDOM.render(App,document.getElementById('root'));
