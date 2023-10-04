
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

//next were going to cover using the children property to get a list of a parent element children

//what does by parent element children mean? well lets take a look at the html

//path: index3.html
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

//so we have this hierarchy, in this hierarchy here there are quite a few parent child relationships

//the most obvious one is the unordered list with a class of skills

//the <ul class="skills"> is the parent element to all the li list items so these list items are children to this unordered list parent

//the same thing applies for the < div class="card"> 

//this card is a parent to both the div that displays the persons name as well as the unordered list of skills

//you can actually achieve or you can retrieve a list of children in the javascript dom quite easily

//lets first get a reference to the skills list

//so we'll say 

const skillsList = document.querySelector('.skills'); //this will get the skills class from the html

//and then 

console,log(skillsList.children); //this will print the children in the console

//this is going to return an array like stracture similar to the node list where it lists you every single child html element

//going into the browser we can see in the console we have this html collection and again its very similar to an array where you have your 0, 1, 2 its indexed by zero and you have your length property

//so you have all of these list items which are the children of the unordered list

//one very important thing to note about this children property is this gives you whats called a live html collection

//this means that if you were to modify this list some point after retrieving this property then it is going to update automatically 

//lets see an example of this

//we now want to store this result or these children inside a constant so we can do

const items = skillsList.children; //this will get the children from the skillsList

//so were calling this items and its equal to the skillsList children

//now were gonna remove the console.log we made so now we only have these two constants

//const skillsList = document.querySelector('.skills'); //this will get the skills class from the html

//const items = skillsList.children; //this will get the children from the skillsList

//if we go back into the browser and retrieve the value of the items, we can see we once again have these three list items

//<li>HTML</li>
//<li>CSS</li>
//<li>JavaScript</li>

//now if we were to add a new element to this list here

//so right clicking in the console on the web on the ul click edit html doing copy on the list item and drop down below it we can paste it

//and change it to TypeScript so it would be like this

//<li>HTML</li>
//<li>CSS</li>
//<li>JavaScript</li>
//<li>TypeScript</li>

//copy and paste, change the name or just add it/ write it yourself to keep adding elements

//we save it go back into the console and were going to retrieve the items again

//notice how we dodnt actually call skills list dot children were simply referencing the constant which we defined prior

//so items has now been updated to give us an unordered list, so to give us the new list item on the bottom (the TypeScript) 

//so we have four items in one HTMLCollection and three in the previous one which was before we added the new element

//that is what is meant by a live list, this is different to queryselector because if youve noticed you can actually retrieve your list of children using querySelectorAll as well

//if we instead of saying children, say querySelectorAll and then pass in the li

const items2 = skillsList.querySelectorAll('li'); //this will get the li tags from the skillsList

//if we go back in the browser items is going to be equal to that node list of li's 

//if we add the fourth list item once again so like this

//<li>HTML</li>
//<li>CSS</li>
//<li>JavaScript</li>
//<li>TypeScript</li>

//save again (press enter) if we get items again its gonna be three

//so that is the key difference there between using something like querySelectorAll versus the children properties

//next were gonna cover starting from your child elements and then going up to the parents

//like we saw in the last lecture, you can start from parents and go down and list your children but you cal also go up the hierarchy

//so we have the same html and inside the javascript we have this

const css = document.querySelector(".skills li:nth-of-type(2)"); //this will get the second li tag from the skillsList

//so basically were getting a reference to the middle list item which is the CSS

//<li>CSS</li>

//i retrieved this element by using querySelector once again and im selecting the li inside the skills unordered list

//then ive said colon nth of type and passed in the number 2

//this just means give me the second element which matches an li here so the second li which would be the css

//now we can do 

console.log(css); //this will print the css in the console

//to confirm weve got the right element

//now when we go back to the browser we get that middle li which shows on the web console

//so lets go up and retrieve the parent element from this css list item 

//so we can simply say

console.log(css.parentElement); //this will print the parent element in the console

//if we do this and log out what the parents element is go back into the browser, we get the unordered list because its the parent of the li's which are the children

//so basically were starting from the li and were going up to the parent to get the parents element

//now this is pretty straight foward the thing is though when you have the parents element like this (parentElement) you now essentially have the unordered list

//if i was to now say something like

const myList = document.querySelector(".skills"); //this will get the skills class from the html

//i now have myList which references the same thing as .parentElement

//this means if i were to say is console.log(css.parentElement == myList); //this will get the parent element from the css and check if its equal to myList

//so using the double equals comparison here, is it gonna be equal true or false?

//go back into the browser and we get true in the console so just to sort of make it clear 

//the css.parentElement and the myList, now refer to the same element in the html

//now once you have the unordered list parent, you can also go up again

//so you can say

console.log(css.parentElement.parentElement); //this will print the parent element in the console

//so adding another .parentElement 

//and you can keep going if we say this now, were starting from the list (the ul) and were going up tp retrieve the card (the div)

//back in the browser we have the card class in the console

//so youve got this interactive dom tree that you can traverse down and get the children or you can go up and get more of the parents

//we cacn take it a step further

//lets say .parentElement again so now we have

console.log(css.parentElement.parentElement.parentElement); //this will print the parent element in the console

//back in the browser and we get the body

//now again add another .parentElement

console.log(css.parentElement.parentElement.parentElement.parentElement); //this will print the parent element in the console

//and see what happens, go back in the browser and in the console we get the document itself, the whole thing which is the <html> tag the <head> tag and the <body> tag

//lets do it again and now back in the browser console we get null so we can only go as far as getting the parent of the body and thats it

 //but i think its important to sort of highlight here, youve got the hierarchy and you can keep going up and up if you want to

//next were going to cover the closest method

//this ones important to understand because you will be using it in many scenarios

//we have the same html as before 

//in the javascript just like in the last lecture we will be selecting once again that list item that contains the text css

const css2 = document.querySelector(".skills li:nth-of-type(2)"); //this will get the second li tag from the skillsList

//the number after some of the names is because you cant have two variables with the same name

//so were gonna go from the css list item and go up and retrieve the closest element with a class of skills, so what do i mean by closest?

//im referring to the essentially, the closest parent in the hierarchy 

//so were going to say

console.log(css2.closest(".skills")); //this will print the closest element in the console

//so your passing through here a css selector

//if we go into the browser, we get the unordered list in the console

//what were doing is were starting from the css <li>CSS</li> and were going up the parent so its only considering the body <body>, this card div <div class="card"> and the skills <ul class="skills">

//its starting from the css, its finding the first element that matches the selector that you pass in, in this case its a class of skills (.skills)

//now you might look at this and think, why dont you just call the .parentElement like before to get your parent? and yes you can do that but saying .closest is a lot cleaner 

//its gonna also let you cleanly retrieve a grand parent in this case here as an example, the card

//were gonna change the class of skills to the class of card instead so

console.log(css2.closest(".card")); //this will print the closest element in the console

//so now were gonna start from the css, we go up to the list and go up again to the card, getting us the card itself

<div class="card">
  <div class="name" title="I am Adam Jones">
    Adam Jones
  </div>
  <ul class="card">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>
</div>;

//this is the card itself, everything in the class of card div

//if you were to use the parentElement property you would end up doing

console.log(css2.parentElement.parentElement); //this will print the parent element in the console

//with this one its much harder to understand what the developer is doing as opposed to just saying .closest and passing through the parentheses the class of card

//were now going to have a look at the text content properties

//this one is relatively straightfoward it allows you to get a elements text content

//so as an example, the text content of this name div here

//<div class="name" title="I am Adam Jones"> Adam Jones </div>

//is gonna simply be Adam Jones

//so lets go inside the javascript and we can see here we have a reference to the name getting by the class of name

const theName2 = document.querySelector(".name"); //this will get the name class from the html

// so if we do 

console.log (theName2); //this will print the name in the console

//were verifying that this is fine

//back in the browser and we can see in the console we have the name so lets grab the text content string out of this name

//we can simply call .textContent

console.log(theName2.textContent); //this will print the text content in the console

//back in the browser again we can see now its being logged out as Adam Jones

//that is the text content of your element now some important things to note about the text content property

//if you have html elements inside your div then theyre not gonna be picked up by this property

//as an example, lets make the last name of Adam Jones so Jones a strong tag

//<div class="name" title="I am Adam Jones"> Adam <strong>Jones</strong> </div>

//nested Jones in a strong tag

//if we go back into the browser we can see we get jones as bold, but we dont pick up that span tag in the javascript

//so text content only cares about the text inside the element and its children in this case, jones

//now the second thing to sort of worry about here or to consider yourself with here is that if you have whitespace inside your elements, thats going to be picked up

//lets drop down and make Adamn Jones on a new line so like this

//<div class="name" title="I am Adam Jones"> 
//Adam Jones
//</div>

//so right here we have a line break, a new line 

//we also have a bunch of tabs (spaces) before Adam Jones, then another line break

//go back in the browser and we get Adam Jones in the console with all the whitespaces, tabs and line breaks

//so its basically kept all of the whitespaces inside the text content

//now if you really need to remove this extra whitespace, you can do so because of course, text content is gonna return you a string so you can simply call any string method

//for example .trim, to remove that whitespace

console.log(theName2.textContent.trim()); //this will print the text content in the console

//go back in the browser and that whitespace has now been removed

//so thats the text content property, another quick thing to mention is that you can also assign your text content to a new value 





