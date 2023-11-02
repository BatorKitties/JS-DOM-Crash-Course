//this next section will be to be taking a look at miscellaneous features of the javascript dom

//so the first feature is gonna be whats called the defer attribute first im gonna show you a scenario and then have a look at the defer attribute and what i mean by that

//so weve got a new html, ive got this paragraph here in the html, 

//<p> this is a paragraph </p>

//its a simple paragraph and in the javascript here im simply getting the paragraph and then im changing the background color to be red,

const theParagraph = document.querySelector('p');

theParagraph.style.backgroundColor = '#ff0000'; //red

//if i go inside the browser we can see this code works

//now i will show you a common scenario and its an error

//some people may put their script tag inside the head of the html, if i go back in the browser we can see we get nothing and in the console we get this error, cannot read properties of null reading style, this is saying its trying to access dot style on your paragraph, but its saying the paragraph is null

//if the paragraph is null it means the javascript cant find the paragraph why cant it find it? the reason is because this code is gonna run before this paragraph even exists in the dom because its in the head and the body is below it so it cant find ot thats why you out your script tag underneath the last part of the body

//there is one way around this to put it in the head that is suing the defer attribute if you add an attribute in html called defer, it means the browser is gonna load this script asynchronously with everything else on the page

//but its only gonna execute the code inside once it has been loaded up,

<script src="./main7.js" defer></script> //this is the defer attribute and thats where you put it

//go back in the browser and its gonna work

//defer is probably the more modern approach to ensuring your document is ready before trying to do things with paragraphs or whatever your doing 

//this doesnt directly relate to the dom but i included this as part of this dom course because a very common error is this one, where you cant even begin to access the dom

//next up were gonna take a look at changing the page title programatically using javascript this one is a unique feature in that you might forget to do this or you might forget this even exists while your coding your application 

//typically you might see this for web applications as opposed to websites think about, social media websites when you recieve a notification or a message, you might see the page title in the tab update to tell you something has happened its very easy to achieve this using javascript we say,

document.title = 'Hello, My name is Dom!';

//you provide your new title in this case whats in the quotes

//go in the browser and in the title bar we get hello my name is dom so that one line right there allows you to change your page title

//lets quickly show this inside a loop or set interval were gonna say,

setInterval(function() {
} , 1000);

//we pass a function inside here to run and this function is gonna run every second just like this

//now this function is going to simply update the page title 

//now we may with to count how many times the page title has changed so we can make a new variable above the function we made and say,

let count = 0;

//and then we can say in the function,

setInterval(function() {
  document.title = "Title updated " + (count) + " times.";
} , 1000);

//so the title has been updated count times

//then above document.title in the function we say,

count++;

//so were incrementing count before every execution

//now go back in the browser and we get title updated 5 times, 6 times, 7 times and it keeps going up

//you can easily dynammically update the page title just like that

//next were going to cover accessing html 5 data attributes using javascript

//what are html 5 data attributes? basically theyre special attributes which you can add to your html elemts to provide some extra information and typically that information is gonna be used by javascript to do something else as an example

//we have a button in the html and it says click me, lets add an html 5 data attribute to this button so in the html we can say,

<button type="button" data-message="Welcome to this Website!">Click me</button>

//our intentions here are to say whatever is held within this data attribute so anything prefixed with a data dash, i want this message to appear when the user clicks this button so you might dynammically update this message as your application runs but the point is were gonna access this data attribute using javascript

//in the browser we have our click me button of course, clicking in it gives us nothing, lets make a new constant,

const clickMeButton = document.querySelector('button');

//were gonna now say,

clickMeButton.addEventListener('click', function() {
  const message = clickMeButton.dataset.message;
  alert(message);
} );

//so were selecting our button thats on the page and then we listen for the click event then in the function we say ok, one the button has been clicked on were going to now access that message this is done using a property called, dataset

//so dataset is your interface to accessing every single data attribute on the element that your calling it on so dot message is gonna give us the message in the html then we alert the message

//back in he browser click on the button and we get the alert with the message welcome to this website, taht text came from as we know this html 5 data attribute 

//one important thing to note about these data attributes is that for the data set, theyre actually converted to camel case much like the css inline styling as an example

//if i say data-the-message (in the html) now were gonna get undefined in the alert so we can change this message to be, clickMeButton.dataSet.message; (in the javascript) replacing those hyphens or those dashes with a capital M for message

//back in the browser click the button again and we get the alert with the message that is accessing those data attributes using javascript and again the main reason for this is to provide some dynamic information about this particular element to the js and you might see this on server side rendered applications, but thats that

