# 📚 html-css-course

## 🎓 CSS: CSS Fundamentals

### 📝 What is CSS?

- **CSS:**
  - Cascading Style Sheets
  - CSS describes the visual style and presentation of the content written in HTML
  - CSS consists of countless properties that developers use to format the content:
    - properties about font, text, spacing, layout, etc.
- **Inline CSS:**
  - Writing the css inside the element inside the html file
  - Should never be used
- **Internal CSS:**
  - Declare style in the beginning of the folder
  - Write the css inside the style tag, inside the html file. <style></style>
- **External CSS:**
  - Create an external file specifically used for styling.
  - Add file property to the html file

### 📝 Classes and ID Selectors

- **Ids:**
  - We can use the property id="" inside the html tag to give it a name and use it with # on the css file
  - Easier to change a specific part of the page
- **Class**
  - The difference between id and class is that we can only use ids once.
  - Useful to use the same name multiple times
- **Pseudo-class**
  - Selecting a specific inside a tag.
  - Example: li:first-child {
    font-weight: bold;
  - The tag type must be the first/last/nth child of that tag.

### 📝 Defining colors in CSS

- **RGB Model**

  - Every color can be represented by a combination of Reg, Green and Blue
  - Each of the 3 base colors can take a value between 0 and 255, that's 16.8 million different colors
  - Example: rgb(0, 255, 255)
  - RGB with transparency ("alpha")
    - rgba(0, 255, 255, 0.3)

- **Hexadecimal Notation**

  - Instead of using a scale from 0 to 255, we go from 0 to ff
  - Example: #00ffff #f4b33f #0ff
  - In practice, we mostly use hexadecimal colors, and rgba when we need transparency

- **Shades of Grey**

  - When colors in all 3 channels are the same, we get a grey color
  - there are 256 pure grays to choose from
  - Example: rgb(69, 69, 69) #444444 #444 / rgb(183, 183, 183) #b7b7b7

- **Styling Links**
  - LVHA (link, visited, hover, active)

### 📝 Conflicting Declarations

- **Priority of selectors**
  ! - Declarations marked !important 0. Inline style (Style attribute in HTML)
  1. ID(#) selector
  - If there are multiple, the last selector in the code applies
  2. Class (.) or pseudo-class (:) selector
  - If there are multiple, the last selector in the code applies
  3. Element selector (p, div, li, etc.)
  - If there are multiple, the last selector in the code applies
  4. Universal selector (\*)

### 📝 Inheritance

- **Inheritance in CSS**
  - Inheritance is a mechanism by which some styles/properties get their values inherited from parent elements to child elements
  - Not all properties can be inherited, mostly just text style ones
  - Inherited properties are very easily overwritten by higher priority declarations/selectors

### 📝 The CSS Box Model

- The box model defines how an element is going to be displayed on a web page

![](img/css_box_model.png)

- **Parts of an element**

  - Content
    - Text, images, etc.
    - width and height
  - Border
    - A line around the element, still inside of the element
  - Padding
    - Invisible space around the content, inside of the element (between the content and the border)
  - Marging
    - Space outside of the element, between elements
  - Fill Area
    - area that gets filled with background color or background image

- **Element Height and Width Calculation**

  - Final Element width: left border + left padding + width + right padding + right border
  - Final Element height: top border + top padding + height + bottom padding + bottom border

- **Colapsing Margins**
  - If we have margins from two elements, that occupy the same space, only the larger one will be shown on screen

### 📝 Types of Boxes

- **Inline boxes**

  - Occupy the exact space they need for their content
  - Cause no inline-breaks after or before the element
  - Box model applies in a different way: heights and widths do not apply
  - Paddings and margins are applied only horizontally (left and right)
  - Default elements: a, img, strong, em, button, etc.
  - Possible to change block to inline with CSS: display: inline;

- **Block level boxes/elements**

  - Occupy all the space they can horizontally, and create line breaks after them, so they cannot be side-by-side to one another
  - They are formatted visually as blocks
  - They occupy 100% of parent element's width no matter the content
  - Elements are stacked vertically by default, one after another
  - The box-model applies normally
  - Default elements: body, main, header, footer, section, nav, aside, div, h1-h6, p, ul, ol, li, etc.
  - Possible to change inline to block with CSS: display:block;

- **Inline-Block Boxes**
  - Looks line inline from the outside, behaves like block-level on the inside
  - Occupies only content's space
  - Causes no line-breaks
  - Box-model applies as showed
  - display: inline-block;

### 📝 Normal Flow vs. Absolute Positioning

- **Normal Flow**

  - Default positioning
  - Element is "in flow"
  - Elements are simply laid out according to their order in the HTML code
  - Default positioning: position: relative;

- **Absolute Positioning**
  - Element is removed from the normal flow: "out of flow"
  - No impact on surrounding elements, might overlap them
  - We use top, bottom, left or right to offset the element from its relatively positioning container
  - position: absolute;

### 📝 Pseudo-elements

- **Siblings**

  - Siblings are elements inside the same parent element
  - Adjacent sibling, is the very next element after another.

- **After pseudo-elements**
  - Creates a pseudo-element that will automatically be the very first child the selected element
  -
