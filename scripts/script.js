// JSON
// Java Script Object Notation
//AJAX
//Asynchronous Javascript And XML
const button = document.getElementById('button');
button.addEventListener('click',function (){
    const myRequest = new XMLHttpRequest();
    myRequest.open('GET','https://jsonplaceholder.typicode.com/photos');
    myRequest.onload = function (){
        const myData = JSON.parse(myRequest.responseText);
        
    };
    myRequest.send();
});
