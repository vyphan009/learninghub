
var form= "<table>"
 + "<tr>"
 + "<td><label>&emsp;&emsp;&emsp;&emsp;&emsp;Hi there!</label><br><label>&emsp;&emsp;Enter your name to begin</label></td>"
 + "</tr>"
 + "<tr>"
 + "<td><input id='name' type='text' name='name'></td>"
 + "</tr>"
 + "<tr>"
 + "<td><button type='button' onclick='getName();'>Continue</button></td>"
 + "</tr>"
 + "</table>";
document.getElementById("wrapper").innerHTML += form;

var name;
var password;
function getName(){
    name = document.getElementById("name").value;
    document.getElementById("wrapper").innerHTML = "";

    form= "<table>"
    + "<tr>"
    + "<td><label>&emsp;&emsp;&emsp;&emsp;&emsp;Welcome " + name + "! </label><br><label>&emsp;&emsp;Now enter your password.</label></td>"
    + "</tr>"
    + "<tr>"
    + "<td><input id='password' type='text' name='password'></td>"
    + "</tr>"
    + "<tr>"
    + "<td><button type='button' onclick='getPassword();'>Start</button></td>"
    + "</tr>"
    + "</table>";
    document.getElementById("wrapper").innerHTML += form;

}

function getPassword(){
    password = document.getElementById("password").value;
    popup();
}


function popup(){
    document.getElementById("wrapper").innerHTML = "";
    var popup = "<div class=" + '"inner"' + ">"
    +"<p>" 
    + "If this is the first time using the app, the student will be required to create his/her avatar. Creating avatars only happens onces, when a student first uses Stardust. Teachers can prevent students from making additional changes to the avatar once saved."
    + "</p>" 
    + "<button type='button' onclick='redirect(" + '"menu"' + ");'>Continue</button>"
    + "</div>"
    document.getElementById("wrapper").innerHTML += popup;
}