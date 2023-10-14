
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

//next we will be learning on the updating elements with javascript dom

//were gonna be using the exact same html as before 

//so right here were going to focus on this div with a class of name

//<div class="name" title="I am Adam Jones"> Adam Jones </div>

//this lecture is going to cover the method which is called set attribute

//as the name suggests, its going to allow us to update or change the value of an attribute on an html element

//were gonna be focusing on the title attribute here

//title = "I am Adam Jones"

//inside the js were gonna simply update that attribute, so ive got the name elements preselected

const theName3 = document.querySelector(".name"); //this will get the name class from the html

//below this were gonna say

theName3.setAttribute("title", "Hello, my name is Dom"); //this will set the attribute in the html

//were passing through the firstly the name of the attribute to  change so were gonna say title, then the second argument is gonna be the new value so

//theName3.setAttribute("title", "Hello, my name is Dom");

//and because the html attribute only accepts strings, were gonna provide strings of course as our value here so you can set it to be a number like 1000, for example but it needs to be wrapped inside strings here because thats all html support

//lets go inside the browser, hover over the name Adam Jones and we get Hello, my name is Dom instead of the previous title which said of course I am Adam Jones 

//so weve successfully updated the attribute title for this element so you basically call that on the elements much like you do when your retrieving or getting an attribute

//now one thing to note here is that you might see on many tutorials online, this is how people may want to update the class of an element 

//going back to the html, were gonna go under the title tag and go inside the style tag

//were gonna be making a different class called coffee and set a background color to brown

//path: index3.html

/*<title>Getting Data from Elements</title>
  <style> 
    .coffee {
      background-color: brown;

    }
  </style> */

  //now were gonna add this coffee class to the class name div, inside the js were gonna set attribute were gonna set the class attribute

  theName3.setAttribute("class", "name coffee"); //this will set the attribute in the html

  //so we take the original theName3.setAttribute("title", "Hello, my name is Dom"); and make this set to name and then coffee

  //and if we go back into the browser, we get that brown color because we have both the name class and the coffee class on this div as can be seen in the console

  //this is what some people might use online to update the class and apply some different CSS to an element

  //and just to quickly show as well, a different technique for updating the class attribute might be to access it directly

  //so certain attributes have a property counterpart an example of this is the class attribute

  //were gonna say 

  theName3.className = "name coffee"; //this will set the attribute in the html

  //you can put className instead of setAttribute this will give the exact same results

  //if we go back in the browser we get the same result, name and coffee on that class

  //so this is just another way to update the class attribute on the element

  //like i said only certain properties or certain attributes have this property equivalent and class is one of them

  //next up weve got the style property so you can actually change the inline css styles of an element using js

  //so if for example you are coding a game and your user wins that game, you can change their name to be green text instead or add a green background something like that

  //you can do this programmatically using the javascript dom

  //lets have a quick look at an example of doing something like that

  //so we have here a reference to the last list item which contains the text javascript <li>JavaScript</li>

  const javascript = document.querySelector(".skills").lastElementChild; //this will get the last element child from the skillsList

  //now we can see here, im simply selecting this by grabbing the skills list and then saying .lastElementChild

  //this is the property i wanted to throw in for you guys its an easy way to get a reference to the last element that is a child of this one here

  document.querySelector(".skills") //this will get the skills class from the html

  //so if i were to to now 

  console.log(javascript); //this will print the javascript in the console

  //go into the browser and we can see in the console we have the javascript list item and it will highlight the javascript in the browser when hovered over

  //so thats a different way of getting an element, last element child

  //now how do you add styles to the javascript list item?

  //we very straightfoward were gonna say in here (delete the console.log)

  //and say

  javascript.style.color = "orange"; //this will set the style in the html

  //you can specify any css inline style you want, but its gonna be done in camel case

  //so color is a simple one were using first

  //this right here is the css equivalent of saying color: orange;

  //thats what your doing right here by running this javascript code

  //now back into the browser and we get orange text for javascript

  //if i inspect the list item in the console, you have this inline style which says color and then orange

  //<li style="color: orange;"></li>

  //so thats what thats doing right? your simply adding css inline styles

  //inline styles are not recommended, you should always use a css file but this is just to show you that you can do this

  //now what did i mean by camel case? if i go back in the js (here), lets say i wanna change the background color of the javascript list item to do something like black

  //we will say

  javascript.style.backgroundColor = "black"; //this will set the style in the html

  //so changing color to background color (color with an uppercase C because its camel case) and do black

  //now this right here is the same as saying background-color: black;

  //so you want to convert your dashes to no dash, but use an uppercase for the next word

  //so converting this dash format into camel case and this works for any css property with a dash, or most of them to my knowledge

  //go back in the browser and we get that black on the element (the javascript list item) now its not actually the recommended way to style your elements using css, but its perfectly fine for if your just learning it or doing some sort of small project on the side

  //if your working on a large project with many developers, its better to add different css classes instead of doing inline styling

  //now a very important thing to also note about this technique here is, you can actually use this to remove some styling 

  //what i mean by thus is if i go back into the index html, i want to then give my list item with a javascript a class i wanna say

  //<li class="javascript">JavaScript</li> instead of just <li>JavaScript</li>

  //this is so i can then style it using css inside the head

  //so i have my style tag here and ill target the class of javascript

  /* <style>
    .javascript
  </style> */

  //so i want to change this list item to say a background color of red

  /* <style>
   .javascript {
     background-color: red;
   }
  </style> */

  //now lets go back in the browser and we can see due to the nature of css, the inline style applied by javascript is gonna take precedence over the style applied in the head

  //but i can actually remove this background color without having to reassign it to be read

  //so now we will say

  javascript.style.backgroundColor = null; //this will set the style in the html

  //so null is gonna simply clear that inline style and allow you to fall back to what you specified in the css

  //back in the browser here and it goes back to red, the benefit of this right here is that 

  //one you dont need to duplicate your code and have the color specified a red in both the javascript and the css, you know if your trying to reset it back to red

  //the second benefit is if you dont actually know what the css has it set to then you can set it to null and basically clear and reverse this reassignment if that color

  //thats adding inline styles using javascript

  //next htis lecture is gonna be super important because its going to be the first time where were actually updating and creating elements and deleting elements and doing something sort of big to the DOM

  //so were gonna explore the inner html property, the inner html property allows ypu to update the html that is within another element

  //so were gonna be focusing on this unordered list here with a class of skills

    <ul class="skills">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    </ul>

    //same html as before

    //lets use js to update this list from a list of web development languages html,css,javascript 

    //lets change it to a list of useful skills around the house so for example, washing the dishes, mowing the lawn, vaccuming

    //inside here ive got a reference to the skills list 

    const skillsList2 = document.querySelector(".skills"); //this will get the skills class from the html

    //and we can change the html inside of it by saying

    //skillsList2.innerHTML = 

    //and then we can use a javascript and multi line string this is done using the back ticks on your keyboard  ` `

    //these back ticks are going to allow us to use multi line strings

    //and now were gonna simply provide an html string containing the new html

    skillsList2.innerHTML = `
    <li>Washing the dishes</li>
    <li>Mowing the lawn</li>
    <li>Vaccuming</li>
    `;
    //this will set the inner html in the html

    //now if we go in the browser we have an entire new list as part of or any list of items for this unordered list of skills here

    //so its that simple to provide a new html string in order to update html inside another element

    //its very commonly used as well, youll see this a lot in javascript dom tutorials

    //now its important to note that were actually replacing what html was previously inside of this, so there is a way to keep your existing html and we will look into that next

    //next were going to cover the insert adjacent html method

    //this one here achieves a similar result or outcome to the previous inner html but this one allows you to inject html so you dont lose the existing html as part of your element

    //this comes in handy when your doing things like adding new items to a list or updating the page with new data and things like that

    //so as an example, lets add a new skill to the skills class unordered list (class="skills")

    //lets make this skill java a different programming language, in the js we also got that skills list selected once again

    const skillsList3 = document.querySelector(".skills"); //this will get the skills class from the html

  //below this we will say

    skillsList3.insertAdjacentHTML();

 //then the first argument to this method is going to be the position to insert into so if i open up in the double quotes here ("")

//this code is going to give me a list of options a common option is gonna be beforeend

//so before end means lets insert some new html before the end of the parent or the skills list in this case

//so we can say beforeend all lowercase, no spaces etc

skillsList3.insertAdjacentHTML("beforeend");

//a second argument now is gonna be the html so we can once again use those back ticks for the multi line string or i might actually just put this back to a regular string because we dont need to use multi lines here

//its going to be a simple one list item so we can say li and inside provide java

skillsList3.insertAdjacentHTML("beforeend", "<li>Java</li>");

//so insert this html before the end of this skills list

//back in the browser and we get java added to that list, in the html we can now see we have that extra list item down here

//lets explore a few more options for this first argument here, you can also say afterend

//after end means insert this html after the end of the ul or the skills list so it will be put below the whole ul but before the closing div tag

/* </ul>
down here
</div> */

//so because you cant have a list item outside of a list, im gonna make a strong tag instead and say something like

skillsList3.insertAdjacentHTML("afterend", "<strong>Here I am!</strong>");

//i go back in the browser and we get Here I am! right under the list items on the web

//you can also do beforebegin using the strong tag with the text here i am!

//go back in the browser and its before the beginning of the list so on top between the div if name and the unordered list 

//you can also do afterbegin with that strong tag, and this is gonna be essentially as the first element injected under the ul class="skills" and before the list items so

/* <ul class="skills">
//injected here
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
</ul>
</div> */

//but i wont be showing that one because i need to put it back to unordered or to a list item but anyway you get the point 

//you have those four options to choose from for insertAdjacentHTML and again this is very useful for updating the ul when new data comes in from the server or your user does something somewhere else in the page and you want to update something else in a different area

//in this next lecture were gonna revisit the text content property

//a few lectures ago we learnt about how the text content property can be used to retrieve the text content as part of an element 

//but in this one im gonna be showing you how you can update that text content its gonna work in the same way as inner html does

//were gonna focus on the list item which says HTML <li>HTML</li> using the same html as before

//lets change it to be a different programming language in the js ive simply selected the first li as part of the skills unordered list to give us the html list item

const html = document.querySelector(".skills li"); //this will get the first li tag from the skillsList

//now we can say

html.textContent = "Ruby"; //this will set the text content in the html

//this will change it to be Ruby as my other programming language

//go in the browser here and we get Ruby instead of HTML

//you can use his to update certain Html elements when your user inputs some data as an example or you can update the text to say, congragulations, you wont this game, or whatever it might be

//now the important difference between text content and the inner html is the fact that text content does not parse the html 

//what that means is if i was to go inside the ("") with Ruby inside and provide some html as part of this string to say something like <strong>Ruby</strong>

html.textContent = "<strong>Ruby</strong>"; //this will set the text content in the html

//this right here, we might expect it to display Ruby as bold but if we go back in the browser we actually get the html tag printed to us as part of this list item

//if i was to compare this to 

html.innerHTML = "<strong>Ruby</strong>"; //this will set the inner html in the html

//and go back in the browser its gonna show up and be bold and that is the key difference between those two properties

//inner html is more useful for when your updating the ui with new changes if something happens but text content is useful for when you retrieve more data from your api or wherever your getting data from and you want to update a label somewhere or a value somewhere

//its much better to use text content because you dont get that html parsing

//if for example one of your users has an open bracket or a greater than sign in their username

//so if for example my name is Dom like this

html.textContent = "> Dom";

//this greater than sign is going to appear in your username field as an example

//if we use inner html so 

html.innerHTML = "> Dom";

//in the browser we can see we get the same, while this does work technically this could be interpreted as html

//another example might be, lets say my username contains em for emphasized text

html.innerHTML = "<em> Dom";

//go back in the browser and we can see it becomes emphasized 

//so that right there is a potential security issue and its also just, unneeded or unwanted because you dont want the characters inside a valid peice of data affecting what gets displayed on your page

//that is the text content property you can get, but you can also set text content

//next we will be focusing on the class list property as weve seen before

//you can use the set attribute method or the class name to update an elements class, but theres actually a better wat to do it and that is using class list

//which allows you to manage the classes on your element so you can add, remove, check if it exists you can toggle and so on

//these are all powerful and the main reason why a class list is available is because the class attribute has significance in the DOM

//classes are typically used to add different css roles to an element so if your doing a user interface and you wanna update the ui when certain things change or something like that

//you may want to add, remove classes to certain elements to apply those styling changes

//we have the same scenario as previous lectures and same html and ive also included that class of coffee with a background of brown 

//were gonna be using class list to add that coffee class to the Adam Jones div like we did a few lectures ago but this time using class list

//inside here, i selected the name element 

const theName4 = document.querySelector(".name"); //this will get the name class from the html

//below this we will say

theName4.classList.add("coffee"); //this will add the class in the html

//this is going to add your class of coffee, if we go in the browser we can see we get that brown background on the name and inside the html we have the name class as well as the coffee class which was added programmatically using javascript (class="name coffee")

//now whys this better than using set attribute or class name property? its better because you dont need to append the existing class list when your adding a new one

//so if i wanted to add coffee to the name without using class list, i might say something like,

theName4.className = "name coffee"; //this will add the class in the html

//we can see here, i had to remember or know what the existing class was in order to add a new one, i dont wanna lose the existing one

//if i was to say

theName4.className = "coffee"; //this will add the class in the html

//like this im gonna lose the class of name, by doing this i need to remember what the previous one was or i need to basically say class list +=, then say space to add or append this new string to the existing one

//if we go back in the browser in the console we get name and coffee and thats because of the += here

theName4.className += " coffee"; //this will add the class in the html theres an added space before the coffee

//but i had to say space, the space here and then more spaces for more classes down the line as an example something like this

theName4.className += " coffee moreClasses asAnExample"; //this will add the class in the html

//it gets a little messy and thats why using class list here is much neater and you can also provide multiple if you want to for example we can say

theName4.classList.add("coffee", "berry", "apple"); //this will add the class in the html

//to add coffee, berry and apple to the class list of name

//go back in the browser and now we have all those seperate classes on your class, class = "name coffee berry apple" (on your class attribute)

//what other things can you do with class list? well, you can also do things like remove classes

//i can say

theName4.classList.remove("name"); //this will remove the class in the html

//and ill remove the class of that name that is there by default in the html, (<div class = "name")

//go back in the browser and we can see in the inspector we no longer have that anme class on that div which will remove everything that was applied to that class so the coffee, berry and apple

//you can also check if a class exists or a token exists, we can say

console.log(theName4.classList.contains("berry")); //this will check if the class exists in the html

//does berry appear in the class list for this name element, yes or no?

//go back into the browser and we can see we get false since we removed the name classes items so the coffee, berry and apple

//lets explore one last thing for class list and that is gonna be toggle were gonna drop the console.log we made and now say

theName4.classList.toggle("coffee"); //this will toggle the class in the html

//(were gonna do this in the web console instead of the js, so in here but show it in here as an example of what to do in the web)

//press enter, its gonna dd that class (say true) lets now toggle again so call toggle again say

theName4.classList.toggle("coffee"); //this will toggle the class in the html

//its gonna remove that class (say false) this right here comes up quite a bit and its useful for things like navigation bars

//lets say when the user clicks on the navigation button, its gonna open up a menu, you press the button again, its gonna toggle again and remove that class

//so thats an example of the toggle

//and i also encourage you to do the name class list and explore all of the different methods and properties you have available to you on that class list
