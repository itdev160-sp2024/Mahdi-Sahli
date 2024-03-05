var user = "Mahdi"; 
var salutation = "Welcome";
var greeting = salutation + ", " + user + "!";
var greetingEl = document.getElementById('greeting');
greetingEl.textContent = greeting;


var price = 50.00; 
var studentDiscount = 15;

var priceEl = document.getElementById('price');
var studentPriceEl = document.getElementById('student-price');

priceEl.textContent = "Price: $" + price.toFixed(2);
var studentPrice = price - (price * (studentDiscount / 100));
studentPriceEl.textContent = "Student Price: $" + studentPrice.toFixed(2);


