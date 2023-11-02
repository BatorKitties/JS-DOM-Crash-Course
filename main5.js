//next we will be learning about deleting or removing html elements from the Dom

//we have the same card example from the past few lectures were gonna be removing one of those list items from the list

//were gonna remove CSS from that list so we have,

const skillsList = document.querySelector('.skills');

const css = skillsList.querySelector('li:nth-of-type(2)');

console.log(css);

//if i console.log this css list item just to confirm, we have the list item on the browser page and in the console

//weve also got the parent unordered list conrainer

//were gonna be talking about the remove child method right here because this one is very commom 

//remove child allows you to remove an html element from a parent, you must have the parent in order to remove one of its children so lets use the skills list parent to remove its child, css were gonna say,

skillsList.removeChild(css);

//so remove the css child from the skillsList

//go in the browser and its gone, this is the most common way you can remove certain elemets from the Dom

//now heres another common way people also like to clear elements of its children, lets say i wanna remove all of the list items from the skills list, we can do this by going back into the javascript removing the skillsList.removeChild(css); line of code and saying,

while (skillsList.lastChild) {
    skillsList.removeChild(skillsList.lastChild);
}

//this code right here explains itself its saying, while we have at least one child of the skills list essentially, if last child gives us null because theres no children as part of the list, then its gonna stop at the loop so whole we have at least one last child of that list, were gonna remove that particular last child

//go back in the browser, now the list is empty we still have the list here in the console, the unordered list but theres no allies as part of that

//in this next lecture about deleting html elements, were gonna explore the remove method, we just saw how we can remove child elemets from a parent using remove child and that had the dependency of you needed to have the parent in order remove the child so how do you go about doing that if you dont have access to the parent or you simply dont wanna get access to it, you use the remove method

//we have the same setup as last time were gonna be removing the css list item, inside here, we can see ive only selected the css list item,

const css1 = document.querySelector('.skills li:nth-of-type(2)');

//i'll confirm this once again,

console.log(css1);

//we can see its in the console on the browser, nopw to remove this on its own without the parent we will say,

css1.remove();

//go back in the browser and we can see its now gone

