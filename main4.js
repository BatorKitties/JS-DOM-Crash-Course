//next we will be learning arguably the most important part of this course

//were  gonna have a look at how to create html elements with JavaScript Dom

//now inner html and insert adjacent html those two techniques can be used to create html elements but they require you to provide an html string and in some scenarios  it will work perfectly fine

//especially for simple user interfaces but otherwise its better to learn and know how to build html elements from scratch using JavaScript

//were gonna start with an empty and new html document,

//path: index4.html
/* <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Creating Elements</title>
</head>
<body>
  <script src= ./main4.js></script>
</body>
</html> */

//were basically going to create the same html that we used or saw in previous lectures and were gonna be building it using javascript Dom and the createElement method

//we need to create all of these elements,

 /* <div class="card">
    <div class="name" title="I am Adam Jones">Adam Jones</div>
    <ul class="skills">
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li> */

//theres six html elements to create this is the html from previous lectures

//once weve created those elements we can proceed to add them in their correct positions

//were gonna begin on the div with a class of card, so the main container around this entire html stracture here

//so how do we create an element using javascript? were gonna create a new constant called card

const card = document.createElement('div');

//so this create element method is going to return you the same type of object that you would get when selecting an element with query selector for example

//were gonna create a div so you provide the tag name inside the parentheses we can now say,

console.log(card);

//and provide the card in the parentheses save and go inside the browser and we can see we have a div in the console

//the difference between this div and what we saw in previous lectures when selecting html elements is that this div is currently not on the document so its gonna be up to us to add this to the empty html document so we have the actual body

//we need to then add this to our actual body, but before that we need to make some modifications to this element the first one is gonna be to add the class of card

//because you might have CSS styles that are going to apply for this class of card so were gonna say,

card.classList.add('card');

//go back in the browser and we get that class as shown on the console

//weve basically built this element dynamically and we can now add it to the document

//we can now say,

document.body.appendChild(card);

//the .body refers to your actual body in the html and append child means add a new child element to the end of the body and we pass the card and its gonna add that card or append it to the body in the html

//go back in the browser and we see nothing because theres no content being displayed in that div

//but if i inspect the body here, we can see we have that div right there being added by us in the javascript

//the alternative to doing this would be to call something like insert adjacent html you would say before end and pass in the html string but this technique is a lot more flexible and robust

//so we have these three lines if code here,

const card1 = document.createElement('div');

card.classList.add('card');

document.body.appendChild(card);

//which are going to create that card div

//we can now move on to creating the name

//were gonna make a new constant here called name, once again its gonna be a div here which were gonna be creating so we will say,

const nameElement = document.createElement('div');

//so now we have two divs here the name and the card, when it comes to the name we can say,

nameElement.classList.add('name');

//now because name by itself is crossed out were gonna change it to nameElement

//to give us that class of name we can also set the title so we will say,

nameElement.setAttribute('title', 'I am Adam Jones');

//just like we had in the html from before

//we can now,

console.log(nameElement);

//go back in the browser and in the console we have that div with both attribute present

//now we can begin to explore text content just as we learned to do in the past but this time were gonna use it on a newly created html element

//we can say,

nameElement.textContent = 'Adam Jones';

//to apply that text to that element

//go back in the browser and we get Adam Jones in that text

//so we can see here were sort of, like i said, as opposed to using a string or html string to create this Adam Jones div were programmatically doing it with method calls to create element classList.add, setAttribute, reassigning the text content and thats how were creating them in this lecture

//now i can say, once ive got the name element im done with it, i can append it to the card because the card is the parent of the name so were gonna append child on the card as opposed to the document

//taking out the console.log were now gonna say,

card.appendChild(nameElement);

//and because the card is already on the document in the browser this should appear visibly to us

//back in the browser and we get Adam Jones right there

//so we have that div being created and appended to the card

//so you can sort of see how this is going right?

//you create the element, you set some data then you append it, its typically a three step process just like this you may wish to add events to your elements, were gonna cover that later

//lets move on now to adding the unordered list because for this one we can do it a little bit more dynammically so lets begin on the unordered list itself the move onto the list items

//were gonna say,

const skillsListElement = document.createElement('ul');

//now realistically card should also say cardElement but i'll leave it there for now

//so skillsListElement equal to createElement then we can say ul to make a new unordered list lets add the class so,

skillsListElement.classList.add('skills');

//now we can append the skills list and the name element to the card

//there is actually a way you can do this on one line so we could say,

//card.appendName and then card.append skillsList but there is an alternative

//you can just use a method called append, append allow you to provide multiple arguments or multiple elements lets say, card.append(nameElement); instead of appendChild

//append now lets us do a comma and we can say skillsListElement, so now theyre gonna be added in that order first 

//add the name to the card, then add the skillsListElement to the card,

card.append(nameElement, skillsListElement);

//back in the browser and we can see here we have the unordered list added to the card

//now moving onto the list items, so were gonna do this firstly creating an array containing every single text to display inside those list items we will say,

const skills = ['HTML', 'CSS', 'JavaScript'];

//now were gonna loop through each skill and create a new html element of that we can say,

for (const skill of skills) {
  const skillElement = document.createElement('li');
  skillElement.textContent = skill;
  skillsListElement.append(skillElement);
}

//so we say for of, for every single skill as part of our skills, skills refers to that array, for every single skill, were gonna have that three step process were gonna create the element, update the attributes and the text content then append it

//then were creating a new list item for every single skill, we then do text content because theres no classes on our list items and we do it equal to skill because skill is gonna be one of three HTML, CSS, JavaScript as the loop goes through each one

//we now do skillsListElement because of course list is the unordered list container, then dot append and pass through the skill element

//go back in the browser and weve added those three list items to our unordered list

//so this right here is an example of how you can use the createElement method to dynammically reate those html elements in the javascript

//have a play with this code add and change things style it or inline style it and really understand it
