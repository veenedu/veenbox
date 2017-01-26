# Veen Box

#### samples (https://github.com/veenedu/veenbox_web_sample)

*veenbox provides react and react-native componets that can be used to build layouts for web and mobile platform using common API*


```js
import {RootContainer} from 'veenbox'
//this way it automatically chooses platform
//or
import RootContainer from 'veenbox/dist/RootContainer.web'
import RootContainer from 'veenbox/dist/RootContainer.ios'
import RootContainer from 'veenbox/dist/RootContainer.android'
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

## Style Priority
(Decreasing order)  
- Inline Property, eg halign, valign    
- Style Property, eg style={}
- AutoPicked


## Props Available

All components have following property, that maps to some css equivalent.

<table>
     <tr>
        <th>Property Name</th>
        <th>Default Vlaue</th>
        <th>flexbox equivalent</th>
    </tr>
    <tr>
        <td>valign</td>
        <td>center</td>
        <td>justify-content</td>
    </tr>
    <tr>
        <td>halign</td>
        <td>center</td>
        <td>align-items</td>
    </tr> 
    <tr>
        <td>dir</td>
        <td>column</td>
        <td>flex-direction</td>
    </tr>  
    <tr>
        <td>fullHeight</td>
        <td>true</td>
        <td>height, when false, height is ''(empty)</td>
    </tr>         
</table>

---         

# Components Description

### RootContainer
put this element at root, this will cover whole screen.

### Container
this element occupies full available space height and width,   
overflow will be hidden

### ScrollView
this element takes whatever space available, but allow vertical scrolling

### Panel
(Vertical Panels)

### PanelContainer
Takes available space.

### PanelItem
Put this inside PanelContainer, you can pass width, if not passed it takes auto width.   
a panelContainer may have many panel items.

###  ColumnContainer
(Horizontal column)   
Put children in sequnce, you can ignore any component if you want.
###### ColumnHeader
###### ColumnBody
###### ColumnFooter


# CSS Reset

Import CSS reset as below

`import 'veenbox/dist/css-reset.css';`

# Layout Manager
This component decicdes which Laypout to be displayed based platforms width.

#### Eg
```
<LayoutManager
              	xs = {xs}
              	sm = {sm}
              	md = {md}
              	lg = {lg}
              	xl = {xl}
              	breakPoints =[340,780,1024,1280]
            /> );

```
### Available Properties
You pass components that needs to be displayed at particular screen size.

xs => (Required), React Component

sm => (optional) React Component

md => (optional) React Component

lg => (optional) React Component

xl => (optional) React Component

--

Note: If any bigger dimension is missing then previous small dimension will be displayed.
Eg: you passed, 'xs' and 'lg'. So 'xs' will be displayed till 'lg' break point is not hit.

--

breakPoints = [a,b,c] => (optional), you can pass custom break points that you want Layoout Manager to trigger at.
