import React from 'react';
import SubscriptionView from './SubscriptionView.react';
import PanelContainer from '../../Components/Panel/PanelContainer.react';
import PanelItem from '../../Components/Panel/PanelItem.react';
import Collapse from 'react-collapse'
import {Arrow } from 'rebass'


export default class FolderView extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubscriptionClick = this.handleSubscriptionClick.bind(this)
    this.state={
      subscriptionsOpen:false
    }
  }

  handleSubscriptionClick(){
    return this.setState({
      subscriptionsOpen: ! this.state.subscriptionsOpen
    });
  }

  render() {
    let {folder} = this.props;
    return <div>
      <PanelContainer onClick={this.handleSubscriptionClick} style={{
        backgroundColor:'#666',
        color:'#fff',
        height:50,
        borderBottom:'1px solid #555'
      }}>
        <PanelItem valign="flex-end" halign="center" width={30}>
          <Arrow direction={this.state.subscriptionsOpen? "up": "down"} />
        </PanelItem>
        <PanelItem halign="center">{folder.title}</PanelItem>
        <PanelItem width={60}></PanelItem>
      </PanelContainer>
      <Collapse isOpened={this.state.subscriptionsOpen}>
        <div>{
          folder.subscriptions.map((s) => <SubscriptionView subscription={s} key={s.id} />)
        }</div>
      </Collapse>
    </div>
  }
}
