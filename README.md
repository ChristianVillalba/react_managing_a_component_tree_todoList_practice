# React: Managing A Component Tree - To-Do List practice
Created with [CodeSandbox](https://codesandbox.io/)  
Notes from: React module  
[The Complete 2021 Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)  
Instructor: Dr. Angela Yu 

## Description
This app is a To-Do List consisting of:
* A heading "To-Do List".
* Form:
  * An Input text that allows us to write the our task.
  * An Add Button that adds the new task to the list of pending tasks.
* An unoreded list with our pending tasks.


From the [Starting Files](https://codesandbox.io/s/managing-a-component-tree-practice-2hzdh?fontsize=14&hidenavigation=1&theme=dark), the Form will be extracted as a Component (InputArea.jsx)

---
## Notes 

The Form consist of :
  * An Input text that allows us to write the our task.    
  * An Add Button that adds the new task to the list of pending tasks.

We extract the form as a Component (InputArea.jsx),     
and then, we proceed to work on the functionality of its components:    

#### Input Element
Inside our inputArea we've got an Input Element with `onChange`. We could keep this local (InputArea.jsx).      
We can move the functions `handleChange`  from App.jsx to InputArea.jsx importing useState and the using the state locally.    

#### Button Element
The problem with our Button Element and `onClick` is that it triggers a function that lives on our App Component,    
items Array needs to be accessed by a lot of Components in our tree including our ToDoItems and our inputArea.    
We are going to keep it at top level in our App Component.    

But we need to trigger `addItem` (App.jsx) function from within `InputArea` child component (InputArea.jsx).    
So we pass props to InputArea Function (InputArea.jsx)`InputArea(props)`.  
In InputArea.jsx,  `<button onClick={props.onAdd}>`
In App.jsx, `<InputArea onAdd={addItem} />` onAdd (or any name) as prop 

So now when the Button Element gets clicked (`onClick`),     
it's going to call whatever is stored inside this `onAdd` prop,    
In this case, the `addItem` function.

Now we want to pass over some `inputText` to put into our array of items.    
We achieve this passing a function `{()=>{}}` inside of `onClick`:
In InputArea.jsx
```javascript
<button onClick={props.onAdd}>
>>>
<button onClick={()=>{props.onAdd(inputText)}}>
```

At this point, when the Button Element gets clicked,      
it's going to trigger `onClick` and the function(s) inside of it `onAdd`.    
onAdd pass in the `inputText` that lives inside the Component (the const with state).    
And that `inputText` is whatever the user has currently typed into the `input`.

in App.jsx
`function addItem(inputText) ...`
Now we're able to catch whatever is passed over inside as `inputText`      
and add it in the items Array thanks to `setItem` (state).     

Finally we would want to reset the input text. 
instead of App.jsx, we will do it in our InputArea.jsx
```javascript
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
```


---
## What I have learned with this project:

* How to manage state in a Parent Component  
* Separate App in different Components
  * Stateless Component
  * Props
* Manage State in individual components
  *  Inline Styling, 
  *  Conditional Rendering
  *  Ternary Operators 
  *  Event Handling and 
  *  Using State
  *  Arrow Statement
* How state is handled across the app and components
  *  An Individual Component changing its Parent Component
     *  Component from ToDoItem.jsx changing the items Array in App.jsx
  *  How to target the specific item from a list (JS Array) 
  *  Difference: Passing Funtions or Calling Functions   
     *  Map , Filter & Reduce will expect functions insideo of them `() => {}`
     *  Otherwise , they will be called immediately
     *  Map , Filter & Reduce return an output
* Functional programming is hard.
  * Difficult things take a long time.
  * No retreat, no surrender.   
