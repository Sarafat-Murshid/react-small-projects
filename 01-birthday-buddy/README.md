
#### Import Data

In App.jsx, import the data (from data.js) to be used as an array of objects. Each object should have properties like name, age, and image URL.

#### Setup State Variable

Use the useState hook to store the data in a state variable, enabling modifications that will be automatically reflected in the UI.

#### Iterate and Render

Use the length property of the state variable to display the number of people in the list. You can display this count in a message or heading element.

Use the map method to loop through the data array. For each person, render an image (with inline styles to reduce width) and display their name and age as plain text.

Create a List component to hold the rendered list of people. This component should be a simple div containing multiple Person components.

Create a Person component to render the information for each person. This component should receive the person data as props and render the image, name, and age information.

#### Clear List

In App.jsx, add a button to clear the list, and set up the functionality by defining a function that resets the state variable to an empty array.

Overall, the flow of the application should look something like this:

- Import the data you want to render in App.jsx.
- Set up the data as a state variable using useState.
- Use the map method to iterate over the data array and render a Person component for each person.
- Each Person component should render an image with a style prop to control the width, the person's name, and the person's age.
- Create a List component that holds the rendered items.
- Create a button with functionality to clear the list.
- Display the number of items in the list using the length property of the state variable. This can be rendered using plain text or added to a message or heading element.
