//in this next lecture were going to be adding events to html elements, this is extremely important when it comes to building user interfaces because events are going to add interactivity to your oages or your application so for example, you want to say when the user clicks a button, i wanna do somethng that is done using javascript events in that case, the even was the user clicked and then you can run some code after the user clicks something

//we have some new html here, its a simple input field and a button which says, please check if your username is available,

/* <body>
  Check if your username is available: <br><br>
  <input type = "text" class = "username" placeholder = "Username" />
  <button type = "button" class = "check-username">Check</button>
</body> */

//so you can think of this as like a registration form or part of one that says, check if your username already exists in the system and then of course click on the button and it will check it

//so we have an html form here now, it isnt actually a real form there is no form tag around this but this is just to demonstrate events

//the first event here is the input field with that type of text a class pf username and a very basic placeholder the next one is a button 

//the very first step here is gonna be to grab a reference to both of these input fields and the button inside javascript

//now in here lets first create those two constants so we can say,

const usernameInput = document.querySelector('.username'); //selecting the elemet with the class of username

//then a second constant here,

const btnCheck = document.querySelector('.check-username'); 

//this has a class of check-username so we grab that then im gonna,

console.log(usernameInput, btnCheck); //log both of these to the console

//both of these constants to confirm weve got them correctly

//go into the browser and we do have those two elements in the console

//lets add some events to this page and give it a bit of interactivity

//lets first work on the button because a button click event is one of the most popular

//lets do something when the user clicks on this button lets say,

btnCheck.addEventListener('click', function() { 
  alert ('you clicked the button!');
});

//the add event listener method is gonna allow you to add an event type and then say what happens when that event occurs

//the event type here is click there are many javascript events available out there, click is the most common one

//i cant possibly cover every single one but just know youve got multiple to chose from

//for the click event we provide a function in the function we do something when the user clicks on the button in this case we made an alert

//go back into the browser, click on the check button and it brings up the alert so you can see what sort of power you have when your adding these event listeners to elemtns on this page

//you can put whatever code you want inside this function now lets take it one step further lets then take a look at how we can start checking the value of the input field 

//so in the function remove the alert and were gonna do a very simple check, were not gonna be checking against a database of usernames thats gonna be very difficult for this crash course but were gonna just do a simple example lets define a new constant here,

const usedUserNames = ['dom', 'dom71', 'dcode21']; //this constant is written inside the function

//we can say UsedUserNames because that would be any username which are currently used by the system, these might come out of an actual database instead, but were gonna define a simple array in here to rpove the point

//so we put in three usernames in the array that have been used by the imaginary system at some point in the past

//now we need to get the value of whatever the user has inputed so we need to check ok, were clicking on the button lets now get the actual value that they entered so if they enter dom56 heer, thats the username so lets grab that, that is done using the value attribute so we can say here,

const username = usernameInput.value; //this is the value of the input field this is also written inside the function

//if i was to,

console.log(username); //log this to the console

//go back in the browser, enter dom56 and press check we get dom 56 in the console

//this username can now be checked against this array we might also wanna check if the user entered anything at all, so we will say here,

if (username.length === 0) {
  alert ('please enter a username!');
}

//this means if the username length isstrict equality (===) to zero, it will give the alert

//then we can return from this function so just below that write return;

//by returning from the function that your provide here, this is going to stop the execution back in the browser lets test this we will click check immediately and we can see we get the alert in the browser

//now if i enter a username like dom56 press check again and we dont get that error so taht means the code is now running

//weve verified the user has entered something we can now check if the username is part of the used usernames list, if it is, we can say sorry you cant use it, if its not, we can say your good to go lets say here,

if (usedUserNames.includes(username)) {
  alert ('sorry, this username is taken');
} else {
  alert ('username available!')
}

//very simple scenario here go in the browser, were gonna enter a new username dom56 and it says the alert username available if i enter dom71 which was previously used in our list, it will say the alert sorry, this username is taken

//so you can see here what kind of logic you can do inside these events and you can of course grab data from somewhere else on your script and do whatever you wanna do inside

//that was the most basic event types, the click event 

//now i wanna show you the input event and the change event

//those events are gonna apply to input fields were gonna minimize the code for the btnCheck and below it add a new event listener for the username input we will say,

usernameInput.addEventListener('change', function() {
  alert ('you changed the username!');
});

// were listening for the change event this time around, change is one of those events that you can use in javascript and the function here is going to then run whenever the value of that input field is changed which would be the alert

//go back in the browser and i can say dom56 notice how we dont get the alert yet because currently the user is still editing the input field, but its yet to be changed

//if i go away from the input field, we get the alert you changed the username, its also gonna fire off if you make a change and press tab to get out of it

//now the input event, the input event is gonna fire off whenever the input field receives some sort of input lets change the alert to say,

usernameInput.addEventListener('change', function() {
  alert ('you provided input');
} );

//this one is different to the change one because this one fires off as the user is typing this event could potentially be used for auto complete or autofill on certain websites

//back in the browser enter d and we get the alert enter i once again we get the alert, so you can see here that thats when the input event is gonna fire off

//another popular one on input fields is the blur event we will change the alert again,

usernameInput.addEventListener('blur', function() {
  alert ('this field lost focus');
} );

//we put blur instead of change in the function we will say this field lost focus for the alert

//so when the field loses focus, the blur event will fire off

//back in the browser go on the input field it now has focus if i get out of it the alert shows ip, thats the blur event

//next we will be looking at the event object, the event object is basically gonna give you more information about the event which has just occured now inside here and html we have the exact same setup we had last time where we have the click event on the button, but this time i want to actually go inside the function here and provide e

//you gonna see e very commonly when your dealing with events, this e is simply just an object containing more information about the event which has just occured now you might see this stylized as ev, evt, or even just event the name doesnt matter it can say coffee, its still the event object whatever is inside the parentheses of the function is the event object let say,

btnCheck.addEventListener('click', function(e) {
  console.log(e);
} );

//so the same as before but add e in the parentheses and were gonna log the e event object

//go in the browser click on the check button and in the console we get a pointer event, so different types of events, click in this case are gonna produce different types of event objects, in this case click is gonna give us whats called a pointer event

//now different event types might give you the same event object, but that doesnt matter too much you just need to know what event type your receiving 

//the pointer event has a drop down and it gives you more data about what just happend for example, the control key property (ctrlkey) so control key is set to false this property here tells you whether or not the control key was clicked at the time of the event 

//im gonna hold the control key now then press the check button, the second pointer event to fire off here now has control key set to true, so we can see here we have different data about the event which has just occured 

//another really popular one you might see is called target (inside the pointer event list) target tells you which element the event occured on

//now in this case here, because we have the button and were adding this directly to the button itself, we know that the target is gonna be the button

//if you go back in the browser, the target, is a reference to that button but in some scenarios you might be adding these events dynammically to elements that your just not sure where they came from in a sense or maybe havent gotten a reference to those elements in the javascript code like this, for example (what we have in the js written down) or maybe a loop if your looping through elements, your not too sure exactly which one your up to or something like that the event target will tell you which element the event has occurred on

//next up were gonna have a look at something called prevent default so this right here is in relation to events and in the html ive got an html form, so its very similar to our username and our check availability example from the last lecture this is how it looks like,

/* <body>
  Signup with your username: <br><br>
  <form action = "./" method = "get">
  <input type = "text" class = "username" placeholder = "Username" />
  <button type = "submit" class = "signup">Sign up</button>
  </form>
</body>
</html> */

//this html is an actual form this time

//make this new html seperate from the last on im just showing the difference and whats written in this one so i can keep everything about events in this javascript file but you should make for this lecture a seperate html and javascript file

//this form is supposed to allow the user to sign up so if i go in the browser we can see it says sign up, you enter a username like dom and you press sign up and its gonna submit the form 

//now how does events tie into this? theres something called a submit event on the form itself

//so im gonna go to the js file and im going to now het a reference to that form so were gonna say,

const signupForm = document.querySelector('form'); //this is the form element

//and below this say,

signupForm.addEventListener('submit'); //were gonna listen for the submit event

//and were gonna do a function, the function that runs here is gonna provide the event so the e, 

signupForm.addEventListener('submit', function(e) {
  alert ('you submitted the form!');
} );

//so whats happening here is this event is gonna fire off whenever the form gets submitted and we add an alert

//go in the browser enter dom as the username and press sign up and we get the alert now because the alert message is blocking here its gonna prevent the javascript and the page from continuing util i press ok on the alert but when i press ok it just submitted the form that you can see cleared up and the right side changed

//so the form just got submitted now what is this prevent default thing? prevent default is gonna allow you to cancel the default behaviour of an event the default behaviour of the submit event is to then go ahead and submit the form

//so when you have access to the event objects, you can actually call e.preventDefault(); calling this method is gonna prevent that default behaviour

//go back in the browser submit the username again and press sign up we get the alert and now if i press ok the page doesnt refresh, we didnt see that form get submitted

//one of the practical reasons for using prevent default on a form like this is because maybe you want to submit your form using the fetch api or asynchronosly if tahts the case the you can use preent default to just prevent that traditional form post to the server side

