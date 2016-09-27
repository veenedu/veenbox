import React from 'react';
import PanelContainer from '../../Components/Panel/PanelContainer.react';
import PanelItem from '../../Components/Panel/PanelItem.react';
import ColumnContainer from '../../Components/Column/ColumnContainer.react';
import ColumnHeader from '../../Components/Column/ColumnHeader.react';
import ColumnBody from '../../Components/Column/ColumnBody.react';
import ColumnFooter from '../../Components/Column/ColumnFooter.react';
import ScrollView from '../../Components/ScrollView.react';
import {getAvatarURI,getRandomWords,getCardImage} from '../../utils'

import {Rating,Switch,Progress,Radio,Message,Panel,PanelHeader,Text,PanelFooter,Overlay,Space,Close, Embed,InlineForm, Dropdown,DropdownMenu,NavItem, Drawer,Donut,DotIndicator, Checkbox,Divider, Container, Button, Card,CardImage, ButtonOutline, Badge,Toolbar,Arrow,Avatar,Banner, Heading,Block,ButtonCircle, Icon } from 'rebass'


const LeftPanel = ({switchChecked,handleSwitchChecked,handleToggleDrawer,drawerOpen,handleToggleOverlay,overlayOpen})=> (

  <ColumnContainer>

    <ColumnHeader style={{
      backgroundColor:'#fff'
    }}>
      <PanelContainer>
        <PanelItem style={{
          backgroundColor:'yellow'
        }} width={60}>
          <Avatar
            circle
            size={32}
            src={getAvatarURI()}
            />
        </PanelItem>
        <PanelItem style={{
          backgroundColor:'red'
        }}>
          {getRandomWords(2)}
        </PanelItem>
      </PanelContainer>
    </ColumnHeader>


    <ColumnBody>
      <ScrollView>

      <Panel theme="info">
        <PanelHeader
          inverted
          theme="default"
        >
          Panel
        </PanelHeader>
        <Text>
          Panels are great for visually separating UI, content, or data from the rest of the page.
        </Text>
        <PanelFooter theme="default">
          The footer is a good place for less important information
        </PanelFooter>
      </Panel>

      <Switch checked={switchChecked} onClick={handleSwitchChecked}/>

      <Progress
        color="success"
        value={0.25}
      />
      <Rating
        color="orange"
        value={3.5}
      />
      <Progress
        color="primary"
        value={0.25}
      />

      <Overlay open={overlayOpen}>
        <div style={{
          backgroundColor:'#fff',
          width:600,
          height:400
        }}>
          <Button onClick={handleToggleOverlay}>Hide Overloay</Button>
        </div>
      </Overlay>

      <Message
        inverted
        rounded
        theme="primary"
      >Hello</Message>


      <Message
        inverted
        rounded
        theme="success"
      >
        Hello Message!
        <Space
          auto
          x={1}
        />
        <Close />
      </Message>



      <InlineForm
        buttonLabel="go"
        label="InlineForm"
        name="inline_form"
      />


      <Embed ratio={0.5625}>
        <iframe
          allowFullScreen
          src="https://www.youtube.com/embed/anyMa2gN6uw"
        />
      </Embed>


      <Dropdown>
        <Button
          backgroundColor="primary"
          color="white"
          inverted
          rounded
        >
          Dropdown
          <Arrow direction="down" />
        </Button>
        <DropdownMenu open={false} onDismiss={function noRefCheck() {}}>
          <NavItem is="a">
            Hello
          </NavItem>
          <NavItem is="a">
            Hi
          </NavItem>
        </DropdownMenu>
      </Dropdown>



          <Donut
            color="primary"
            size={100}
            strokeWidth={10}
            value={0.5625}
            />

            <div>
            <DotIndicator
              active={1}
              length={3}
            />
          </div>

          <Drawer
            open={drawerOpen}
            position= 'right'
          >
            <ScrollView>
              <Button onClick={handleToggleDrawer}>Hide Drawer</Button>
              <br/>
              {getRandomWords(2000)}
            </ScrollView>
          </Drawer>

          <div>
            <Button theme="success" rounded={true}>Button  <Arrow direction="down" /></Button>
            <br />
            <Button onClick={handleToggleDrawer}>Toggle Drawer</Button>
            <Button onClick={handleToggleOverlay}>Toggle Overloay</Button>
          </div>

          <div>


                <Badge
                  pill
                  rounded
                  theme="secondary">1
                </Badge>
          </div>

          <div>
            <ButtonCircle title="Like">
                  123
            </ButtonCircle>
          </div>


          <div>
              <ButtonOutline
                  color="primary"
                  rounded="left">
                  A
                </ButtonOutline>

                <Button
                  backgroundColor="primary"
                  color="white"
                  inverted
                  style={{marginLeft: -1}}>
                  B
                </Button>

                <ButtonOutline
                  color="primary"
                  rounded="right"
                  style={{marginLeft: -1}}>
                  C
                </ButtonOutline>

          </div>

          <div>
            <Card rounded
              width={250}
            >
            <CardImage src={getCardImage()} />
            </Card>
          </div>

          <Divider />

          <div>
            <Container>
              {getRandomWords(100)}
            </Container>
          </div>

          <div>
            <Checkbox
              label="Checkbox"
              name="checkbox_1"
            />
            <Checkbox
              checked
              label="Checkbox"
              name="checkbox_1"
              readOnly
              theme="success"
            />
          </div>

          <div>
            <Radio
              checked
              circle
              label="Radio"
              name="radio_1"
              readOnly
            />
            <Radio
              circle
              label="Radio"
              name="radio_1"
            />
          </div>


          <div>
            <Block
              borderLeft
              color="blue"
              px={2}
            >
              {getRandomWords(30)}
            </Block>
          </div>
          <div>Praveen Prasad</div>
      </ScrollView>
    </ColumnBody>



    <ColumnFooter>Footer</ColumnFooter>
  </ColumnContainer>
)


export default LeftPanel;
