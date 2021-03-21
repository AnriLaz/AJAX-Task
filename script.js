//on click function
//for info load
function loadInfo(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
       if (xhttp.readyState == 4 && xhttp.status == 200){
          document.getElementById('demo').innerHTML = xhttp.response;
       }
    };
    xhttp.open("GET","https://jsonplaceholder.typicode.com/photos")
    xhttp.send();
}