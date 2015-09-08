# Greetr
A Javascript framework that returns Greetings to a User

A very simple to use Javascript library with chainable methods.


USAGE

Include Jquery and Greetr to your project.

<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="js/Greetr.js"></script>

Note that you need to include Greetr after jquery is loaded to avoid errors.

Lets say you have a html element that you want to render your greetings to your user. For instance;

<h4 id="userGreetings"></h4>

In your custom js file call Greetr as shown below;

var g = G$('John', 'Doe');
g.greet().htmlGreeting("#userGreetings", true);




