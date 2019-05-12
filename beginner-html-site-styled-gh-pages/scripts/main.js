var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';

var powitanie = document.querySelector('h1');
alert('Hello');

var myImage = document.querySelector('img');

myImage.onclick = function()  {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mozillafox.jpg') {
        myImage.setAttribute ('src','images/firefox-icon.png');
    } else {
        myImage.setAttribute ('src','images/mozillafox.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1')

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
    
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }  

  myButton.onclick = function() {
    setUserName();
  }