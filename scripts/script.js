let data = null;
function print1(){
    let table = "<table style=\"width:100%\">" +
        "  <tr>" +
        "    <th>name</th>" +
        "    <th>image</th>" +
        "  </tr>";
    data.forEach( (x,i) =>{
        if (i<5000){
            table+="  <tr>" +
                "    <td>"+x.title+"</td>" +
                "    <td><img onclick=\"onimgclick('" + x.url + "')\" src='"+x.thumbnailUrl+"'/></td>" +
                "  </tr>"
        }
    });
    table+="</table>"
    document.getElementById('table').innerHTML= table;
}
function onimgclick(url){
    console.log(url)
    window.open(url)
}
function loadDoc() {

    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);
            print1()
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
    xhttp.send();
}