# Veen Box
*veenbox provides common components for react anc react-native that can be used to build layouts for web and mobile*


```js
import {RootContainer} from 'veenbox'
//this way it automatically chooses platform
//or
import RootContainer from 'veenbox/lib/RootContainer.web'
import RootContainer from 'veenbox/lib/RootContainer.ios'
import RootContainer from 'veenbox/lib/RootContainer.android'
```
# Available Components

```
Column/
  ColumnBody
  ColumnContainer
  ColumnFooter
  ColumnHeader
Panel/
  PanelContainer
  PanelItem
Container
RootContainer
ScrollView
```

# Sharing Style

For all components you can pass in-style  
For Web you can pass any styling property, you can override default beahior of component based on [css flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)

### Style Priority
(Decreasing order)  
-Inline Style    
-Style Property


# Props Available

All components have property that can be configured, below is the documentation format
> property_name => default value => flexbox equivalent


###### valign => center => justify-content
###### halign => center => align-items
###### dir => column  =>  flex-direction



---         

# Components Description

### RootConatiner
put this element at root, this will cover whole screen.

### Container
this element occupies full available space height and width,   
overflow will be hidden

### ScrollView
this element takes whatever space available, but allow vertical scrolling

### Panel
(Horizontal Panels)

### PanelConatiner
Takes available space.

### PanelItem
Put this inside PanelContainer, you can pass width, if not passed it takes auto width.   
a panelconatiner may have many panel items.

###  Column
(Horizontal column)   
Put children in sequnce, you can ignore any component if you want.
###### ColumnHeader
###### ColumnBody
###### ColumnFooter
