import React, {PropTypes} from 'react';
import RootContainer from '../../Components/RootContainer.react';
import Container from '../../Components/Container.react';
import ScrollView from '../../Components/ScrollView.react';
import {getAvatarURI,getRandomWords,getCardImage} from '../../utils';
import ColumnContainer from '../../Components/Column/ColumnContainer.react';
import ColumnHeader from '../../Components/Column/ColumnHeader.react';
import ColumnBody from '../../Components/Column/ColumnBody.react';
import ColumnFooter from '../../Components/Column/ColumnFooter.react';


export default class Layout extends React.Component {
  render() {
    return (<RootContainer style={{
    }}>
        <ColumnContainer>
          <ColumnHeader>This us header</ColumnHeader>
          <ColumnBody>
            <ScrollView>{getRandomWords(2000)}</ScrollView>
          </ColumnBody>
          <ColumnFooter>Footer</ColumnFooter>
        </ColumnContainer>
    </RootContainer>);
  }
}
