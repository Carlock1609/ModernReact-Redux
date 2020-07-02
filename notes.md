
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