GuideLines
-----------
Components does not depend on any packages(23 Sept).


Tasks
-----------
1. Some css is needed that needs to be moved and added to some component.
2. Panel Container can only have PanelItem as child.
3. PostCSS for inline elements
4. Scrollbars on Chrome device
5. Ad  proper documentation

Docs
----
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes
Props avaialble
----
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
