// JSON
// Java Script Object Notation
//AJAX
//Asynchronous Javascript And XML
const myRequest = new XMLHttpRequest();
myRequest.open('GET','https://jsonplaceholder.typicode.com/photos');
myRequest.onload = function (){
    const myData = JSON.parse(myRequest.responseText);
    console.log(myData[0]);
};
myRequest.send();