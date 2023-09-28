//path: index.html
<ul id="colors">
  <li class="primary">Red</li>
  <li class="primary">Blue</li>
  <li class="primary">Green</li>
  <li>Yellow</li>
  <li>Magenta</li>
  <li>Cyan</li>
</ul>;

//this is out html colors list with the id of colors and the class of primary

//now we will start selecting elements from the html and looking into how to use the different methods to select elements

const colorsList = document.getElementById('colors'); //this will get the colors id from the html

console.log(colorsList); //this will print the colors in the colorsList

//this is how you select using the getElementById body method 

//you can also use the querySelector method to select the colors id

const colorsList1 = document.querySelector('#colors'); //this will get the colors id from the html

console.log(colorsList1); //this will print the colors in the colorsList

//the # stands for id and the document stands for the html document

//with the querySelector method you can select an elements type, class, or id and any attributes as well as the order they appear in and parent child relationships

//what if we wanna select the unordered list using the tag name of the elements type as opposed to the id

const colorsList2 = document.querySelector('ul'); //this will get the ul tag from the html

//this will select the first unordered list elements on the page

//querySelector only allows you to select a single element so its going to be the first one that matches this selector
 
console.log(colorsList2); //this will print the ul tag in the colorsList and show up the same result in the browser like the other two

//we can also select by class in the html 3 of the colors or items have the class of primary

//we can selects the first list item with that class using the querySelector method

const colorsList3 = document.querySelector('.primary'); //this will get the primary class from the html

//this will selects the first list item with that class which would be red 

//because the querySelector only selects a single element it can get frustrating when you want to select multiple elements

//but thats where the querySelectorAll method comes in

const colors = document.querySelectorAll('li'); //this will get all the li tags from the html

console.log(colors); //this will print all the li tags in the colorsList

//when going into the browser and checking the console you will see something called a node list

//the node list is pretty much an array of all the list items we have selected

//Note: the node list is not actually an array but it behaves in a similar way

//youve got the items that are indexed from 0 to whatever it might be

//youve got the length property and you can loop over it using a for loop

//another important note is that because we called querySelectorAll on the document its going to select every single list item on the document

//lets make an example of that in the html we will make another unordered list with a different name and different items

// Path: index.html
<ul id="cars">
    <li>sedan</li>
    <li>hatch</li>
    <li>wagon</li>
</ul>

//now if we go into the browser and check the console we will see that we the node list has 9 items in it because it has selected all the list items from both the colors and cars list

//in order to only get the colors list weve got a few options

//the first option and probably the most simplest option is going to be to simply make this selector more specific

const colorsList5 = document.querySelectorAll('#colors li'); //this will get all the li tags from the html colors list

console.log(colorsList5); //this will print all the li tags in the colorsList

//what the #colors li is doing is its saying select all the list items that are within the elements with an id of colors

//now its only going to select the list items that are inside the colors id

//now when we go into the brower and check the console we will see that we have 6 items in the node list once again from the colorslist

//the second option in restricting what gets returned is to call querySelectorAll on the list itself

const colorsList6 = document.getElementById('colors'); //this will get the colors id from the html

const colors1 = document.querySelectorAll('li'); //this will get all the li tags from the html

//the getElementById is our reference to the unordered list and putting "colors" specifies its the id of the colorsList which is the unordered list

//saying colorsList.querySelectorAll calls the querySelectorAll method on the colorsList

//which means we can make the (#colors li) just (li) because we are sort of contained within the colors list directly as were calling the querySelectorAll method on the colorsList

//now going into the browsers console again we will see the 6 items in the node list once again

//when you say document.querySelectorAll your starting at the html body and getting every single ally doesnt matter what the parent is

//when you do colorsList.querySelectorAll your starting from the unordered list and getting every single ally and then stopping at the end of that

//thats what its doing

//now if i was to get every single car instead i would simply change the colors to cars in the getElementById parenthesis
