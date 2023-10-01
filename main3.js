
//path: index.html
<div class="card">
  <div class="name" title="I am Adam Jones">
    Adam Jones
  </div>
  <ul class="skills">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>
</div>;

//this is a card with a name and a list of skills its the new html we made for this section

//now we will learn how to get data from html elements

//were gonna be taking a look at some commonly used techniques to retrieve various data about the elements

//its crucial to understand and learn how to do some of these 

//we have the outer div with a class of card and it represents a simple card containing user information

//the div inside is going to hold a users name and we have a class of name on this div as well as a title which says I am Adam Jones 

//weve also got an unordered list of skills which represents this users skills

//the title attibute just means that when you hover over the name it will show the title which is I am Adam Jones

//it doesnt matter what to use but were using the title attribute to demonstrate this first topic

//which is going to be get attribute, when it comes to using the get attribute method in javascript dom its very straightfoward

//and it allows you to retrieve a value given an attribute, so were gonna be getting the I am Adam Jones using the get attribute method

//first we need to select the div with the class of name

const theName = document.querySelector('.name'); //this will get the name class from the html

//now we can say console.log and call the get attribute method on this element

console.log(theName.getAttribute('title')); //this will print the title in the console

//we might as well do two lines here and the second one, lets get the elements class

console.log(theName.getAttribute('class')); //this will print the class in the console

//so were getting the title and the class from this element

//if we go back to the browser we can see in the console we get, I am Adam Jones and name because thats the title and class of this element

//now if you dont provide a valid attribute, for example, a non-existent attribute, then you will get null

//so if we put ('for') instead of class in the getAttribute and since the for attribute doesnt exist on taht element in the browsers console were going to get null

//this helps you say, ok is this attribute null if so then we know to do something else, otherwise if its there, then apply some other logic

//a closely related method to getAttribute is the hasAttribute method

//in a similar fashion we can say console.log and say the name dot has attribute and then pass through the parentheses title

console.log(theName.hasAttribute('title')); //this will print true in the console

//we could also pass through here the for attribute and we can see that we now get true and then false

//of course true for the title and false for the for 

//and thats the get and has attribute methods really simple but important methods for retrieving attributes from html elements



