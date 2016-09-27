import React, {PropTypes} from 'react';
import ColumnContainer from '../../Components/Column/ColumnContainer.react';
import ColumnHeader from '../../Components/Column/ColumnHeader.react';
import ColumnBody from '../../Components/Column/ColumnBody.react';
import ColumnFooter from '../../Components/Column/ColumnFooter.react';
import ScrollView from '../../Components/ScrollView.react';
import {getAvatarURI,getRandomWords,getCardImage} from '../../utils'

import {Stat,Tooltip, Banner, Heading, PageHeader,Section, SectionHeader} from 'rebass';

const  RightPanel  = () =>{
  return (
        <ColumnContainer style={{
          backgroundColor:'#000'
        }}>
            <ColumnHeader style={{backgroundColor:'rgb(6, 62, 57)'}}>Header12</ColumnHeader>

            <ColumnBody style={{
              backgroundColor:'#fff',
              color:'#444'
            }}>
              <ScrollView>

              <div style={{
                width:'100%',
                backgroundColor:'#999'
              }}>
                <PageHeader
                  description="Description about the page"
                  heading="Page Header"
                />
              </div>



              <div style={{
                backgroundColor:'#777',
                color:'#fff'
              }}>
                <Stat
                  label="Memory"
                  unit="GB"
                  value="512"
                />
              </div>



              <Tooltip
                inverted
                rounded
                title="Hello, I am tooltip message."
              >
              <Heading style={{width:100}} level={3}>
                    Tooltip
              </Heading>
              </Tooltip>



                <Section>
                    <SectionHeader
                      description="With linked header"
                      heading="Section Header"
                    />
                    {getRandomWords(3000)}
                </Section>
              </ScrollView>
            </ColumnBody>

            <ColumnFooter style={{
              backgroundColor:'red'
            }}>Footer</ColumnFooter>

        </ColumnContainer>);
}

export default RightPanel;
