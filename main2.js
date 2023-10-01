//now we will begin to explore more of what possibilities there are for interacting with that particular element

//we made a new html page

//path: index2.html
 /* <p class="introduction">Welcome to your course on the JavaScript DOM.</p>
  <p>Please enter your name below</p>
  <input type="text" placeholder="Enter your name..." /> */

  //this is going to be some sort of registration form for a website 

  //the website is going to ask the user to enter their name 

  //now we want to begin inspecting these different types of elements on the website and seeing whats possible with the javascript dom

  //lets select the first introduction paragraph using querySelector

  const introParagraph = document.querySelector('.introduction'); //this will get the introduction class from the html

  //then were gonna say

  console.dir (introParagraph); //this will print the introduction class in the introParagraph

  //dir stands for directory and it works in a very similar fashion to console.log but its gonna give us more information about the object that were going to be passing in here or the elements

  //now if we go into the websites console your gonna see p.introduction

  //it wont highlight the elements on the page but it will give you upon expanding all these extra properties and information about that particular paragraph tag

  //it can be helpful to read through this information because it can give lots of useful information about that tag like the width, height, the content inside etc

  //so in order to access one of these properties we simply call the dot and then specify the property 

  //for example 

  console.log(introParagraph.clientWidth); //this will print the width of that particular paragraph tag

  //scrolling down through the tags information you might also find methods or functions callable on that paragraph

  //scrolling down to the bottom of the list you will see something called the prototype

  //the prototype is currently set to html paragraph element, when i say this here is an element i actually mean its an object in javascript which references an html element

  //so the word html paragraph is the type of html paragraph element

  //the input field is going o be different, but basically it just means that were able to actually have access to special properties and methods just on certain types

  //if we were to expand that prototype  were gonna keep going up and up the tree in the terms of how generic this is

  //as we can see expanding, we get much of the same properties and methods available 

  //if we keep scrolling down were going to get more generic 

  //so this just means that scrolling down we now have the html elements prototype and if we expand that we have all these proporties and methods on the html element

  //this means that basically any single html element on the page whether its a paragraph, an input field, a div, a span, whatever it might be

  //because they all inherit from the each team elements theyre gonna have the same properties and methods available

  //next were gonna inspect the input field and compare it to the paragraph

  //were gonna remove the clientWidth line of code and add a second const called nameInput

  const nameInput = document.querySelector('input'); //this will get the input tag from the html

  //were gonna pass input in the () to get element with a type of input which refers to the input in the html

  //now we can say

  console.dir(nameInput); //this will print the input tag in the nameInput

  //and pass in the nameInput and now we can compare the paragraph and the input field

  //back in the browser we have an input which we can expand much like the paragraph 

  //if we scroll down we get much of the same properties available to us

  //lots of these are going to be the exact same but some of them are unique to the input field

  //an example of this is files , if the user uploads a file with a file upload button theyre going to be available in the null area instead of it saying null

  //example

  files: null //this will print null in the console
  files: file //this will print the file in the console

  //another example is the value property which is very important 

  //value is very commonly used, the value of this input field is currently set to an empty string, so nothing is in it 

  //if we clean the console on the web and type a name in the input field then we can re select the input field and we can say 

  document.querySelector('input'); //this will get the input tag from the html

  //press enter and we get the placeholder

  //now were say

  console.dir(document.querySelector('input')); //this will print the input tag in the console

  //we are passing the querySelector call, press enter and we get the input which we can expand and upon inspecting it now the value is the name you put in the input field

  //if we were to refresh the page and go back to the paragraph tag and inspect that the paragraph tag does not have that value property 

  //and thats because of the type of element that it is because its a paragraph tag it doesnt have a value property

  //so its always good to inspect these and learn it and understand and also get some helpful information 

  


