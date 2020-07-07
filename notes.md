
CONTROLLED OR UNCONTROLLED

onChange() is a callback

UNCONTROLLED
What is the value in the input right now? For a slim period of time do the react component have any idea what the value is.

CONTROLLED
What is the input at any given time? Its in the state

IN THE REACT WORLD**
STORE INFORMATION IN YOUR COMPONENTS NOT THE DOM
- ALWAYS USE STATE TO STORE DATA(COMPONENT) DONT STORE STUFF ON THE HTML/DOM

****COMMON ERROR MESSAGE OF 'STATE' UNDEFINED****
this.state DOM is looking at this and not thinking of the state.

look to the left of the dot and what is it attached to?

When called the left side is ripped off. To the left it would be undefined if you query this.state.term. I think this is ripped

function() BREAKS this keyword
YOU MUST USE AN ARROW FUNCTION OR IT BREAKS 'this' KEYWORD


PROPS ARE FUNCTION BASED COMPONENTS
TO USE PROPS IN CLASS BASED COMPONENTS TYPE this.props


**IMPORTING CONVENTION**
Libraries we import should be at the top, whereas modules/files we are importing should be at the bottom


**ALL AXIOS CONFIGURATION SHOULD BE IN THEIR OWN FODLER NAMES api AND NAMED WHAT THEY ARE REQUESTING


**KEY PROPS ERROR**
ERROR
Warning: Each child in a list should have a unique "key" prop.
Check the render method of `ImageList
- The issue is there is something that matches the object/id so it doesnt want to render anything and show whats currently in the DOM. we need to allow react to do this. It is trying to save erxtra work.
- If there is a match, it wont render it and skip to whats not there.
Assign the key to root element
THIS ONLY COMES UP WHEN TRYING TO DISPLAY A LIST OF ITEMS

**INSTEAD OF USING VANILLA.js DOM SELECTION REACT USES 'REF'**
- Gioves access to a single DOM element
- We create refs in the constructor, assign them to instance variables then pass to a particular JSX element as props
- The 'ref' property you see on HTML-elements are part of the constructor and there is an attempt to select it
- YOU CAN MAKE MULTIPLE 'refs' FOR ANYTHING YOU ARE WANTING TO SELECT


**ENDING NOTES ON PICS app**
- Event handlers, we create onSubmit or onChange to listen for changes and make an action. We also set the state to those changes.
- USE ARROW SYNTAX

- IN ORDER TO GO FROM PARENT TO CHILD AND CHILD TO PARENT, IT MUST BE A CLASS?

- TO RENDER A LIST USE MAP FUNCTION

- 'key' is what you put on the main div containing the object: its an ID

- 'ref' is vanilla.js DOM selector to REACT. You can create multiple.

- LOOK AT PICS APP FOR CSS GRID REFERENCES FOR DISPLAY IMAGES OR DIVS