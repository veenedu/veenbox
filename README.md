Usage
-----
import {RootContainer} from 'veenbox'
//this way it automatically chooses platform
or

import RootContainer from 'veenbox/lib/RootContainer.web'
import RootContainer from 'veenbox/lib/RootContainer.ios'
import RootContainer from 'veenbox/lib/RootContainer.android'

Available Components
-----
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



GuideLines
-----------
Components does not depend on any packages(23 Sept).


Tasks
-----------
1. Some css is needed that needs to be moved and added to some component.
2. Panel Container can only have PanelItem as child.
3. PostCSS for inline elements
4. Scrollbars on Chrome device
5. Write proper documentation
6. Move individual component to folders
7. Add React-native components, make sure react(div) and react-native(view) both components have same default direction;
8. Write sample projects for both web, mobile devices

----
(https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
Props avaialble

valign(justify-content)('center')
halign(align-items)('center')
dir(flex-direction)('column')

--
priority (top>bottom):::::::
inline-prop => style-prop

rootConatiner-> put this element at root, this will cover whole screen.

Container=> this element occupies full available space height and width;
            overflow will be hidden

ScrollView => this element takes whatever space available, but allow vertical scrolling

Panel=> Horizontal Panels,
PanelConatiner=> Takes available space.
PanelItem => Put this inside PanelContainer, you can pass width, if not passed it takes auto width.
a panelconatiner may have many panel items.

Column => Horizontal column.
Put children in sequnce, you can ignore any component if you want.
ColumnHeader =>
ColumnBody =>
ColumnFooter =>
