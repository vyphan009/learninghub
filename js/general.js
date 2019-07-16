/******SHARE *******/
var st = true;

function redirect(str) {
    window.location.href = str + ".html";
}

/*****MENU*******/
var level = 1;
// localStorage.setItem("dif", 1000);
function initMenu() {
    document.getElementById("wrapper").innerHTMl = "";
    var menu = 
      "<div class='flex-box'>"
    + "<div>"
    + "<button  id='questbtn' type='button' onclick='redirect(" + '"QuestList"' + ");'>Quest</button>"
    + "</div><br>" 

    + "<div>"
    + "<button  id='mapbtn' type='button' onclick='redirect(" + '"map"' + ");'>Galaxy Map</button>"
    + "</div><br>" 
    
    + "<div>"
    + "<button  id='shopbtn' type='button' onclick='redirect(" + '"spaceshop"' + ");'>Space Shop</button>"
    + "</div><br>"
    + "</div>"
    
    + "<div class='labels'>"
    +    "<div class='inner-labels1'>"
    +    "<label  id='level'>Level " + level +  "</label>&nbsp"   
    +    "<img id='crystal-img' src='./images/space_crystal_green.png'>"
    +    "<label  id='crystals'>X" + localStorage.getItem("dif") + "</label><br><br>"
    +    "</div>"

    +    "<div class='inner-labels'>"
    +    "<label id='welcome'>Welcome " + name +"!</label>&nbsp<br class='visible'> "
    +    "<a id='newquest' href='./questlaunch.html'>1 new question</a>"
    +    "</div>"

    + "</div>"
    + "<button id='logoutbtn'onclick='redirect(" + '"landing"' + ");'></button>"
    ;

    document.getElementById("wrapper").innerHTML += menu;

}

/*****LOGIN*******/
var name;
var password;

function login() {
    document.getElementById("wrapper").innerHTML = "";

    var form = "<div class='inner'>" +
        "<label class='label1'>Hi there!</label><br><br>" +
        "<label class='label2'>Enter your name to begin</label><br>" +
        "<input id='name' type='text' name='name'><br>" +
        "<button class='button' type='button' onclick='getName();'>Continue</button><br>" +
        "</div>";
    document.getElementById("wrapper").innerHTML += form;
}

function getName() {
    name = document.getElementById("name").value;
    document.getElementById("wrapper").innerHTML = "";

    form = "<div class='inner'>" +
        " <label class='label1'>Welcome " + name + "! </label> " +
        "<label class='label2'>Now enter your password.</label>" +
        "<input id='password' type='text' name='password'>" +
        "<button class='button' id='startbtn'type='button' onclick='getPassword();'>Start</button>" +
        "</div";
    document.getElementById("wrapper").innerHTML += form;

}

function getPassword() {
    password = document.getElementById("password").value;
    popup();
}

function popup() {
    document.getElementById("wrapper").innerHTML = "";
    var popup = "<p style='z-index: 1;'>" +
        "If this is the first time using the app, the student will be required to create his/her avatar. Creating avatars only happens onces, when a student first uses Stardust. Teachers can prevent students from making additional changes to the avatar once saved." +
        "</p>" +
        "<button class='button' id='menubtn' type='button' onclick='redirect(" + '"menu"' + ");'>Continue</button>"

    document.getElementById("wrapper").innerHTML += popup;
}

/*******MAP********/
var questNum = 10;
if (typeof(Storage) !== "undefined") {
    localStorage.setItem("a1", 0);
    localStorage.setItem("a2", 0);
    localStorage.setItem("a3", 0);
    localStorage.setItem("a4", 0);
}

function initMap() {
    document.getElementById("wrapper").innerHTML = "";
    var map =
        "<div>" +
        "<label id='reminder'>Most of the fleet is still together. " +
        "Good job at keeping everybody at the same level! " +
        " Remember we must all go home as team!</label>" +
        "</div>"

    // <!-- aliens -->

    +"<div class='inner'>" +
    "<img id='a1' src='./images/a1.png'><br>" +
    "<img id='a2' src='./images/alien2.png'><br>" +
    "<img id='a3' src='./images/alien3.png'><br>" +
    "<img id='a4' src='./images/alien4.png'><br>" +
    "</div>"



    // <!-- go back btn -->
    +
    "<button type='button' onclick='redirect(" + '"menu"' + ");'>Main Menu</button>"
    // + "<button style='top: 5px;' type='button' onclick='progress(" + '"a1"' + ");'>test</button>"

    document.getElementById('wrapper').innerHTML += map;


}


function progress(id) {
    //range of progress
    let curWidth = window.innerWidth;
    localStorage.setItem("curWidth", JSON.stringify(curWidth));
    let startPos = window.getComputedStyle(document.querySelector('.inner')).left;
    startPos = convertNum(startPos);
    let range = curWidth - startPos;

    //how much ufo can move
    let len = range / questNum;
    let objPos = window.getComputedStyle(document.querySelector("#" + id)).marginLeft;
    objPos = convertNum(objPos);


    //new ufo position
    updatePos = objPos + len;
    if (updatePos < range - startPos) {
        document.getElementById(id).style.marginLeft = updatePos + "px";
        console.log(updatePos);
        localStorage.setItem(id, JSON.stringify(updatePos));

    } else {
        document.getElementById(id).style.marginLeft = range - startPos;
        localStorage.setItem(JSON.stringify(id), JSON.stringify(range - startPos));
    }
}

function convertNum(num) {
    var regex = /[+-]?\d+(\.\d+)?/g;
    let tmp = String(num);
    tmp = Number(tmp.match(regex).map(function(v) { return parseFloat(v); }));
    return tmp;
}

//change ufo positions based on device sizes
// window.onresize = function(event) {
//     let newWidth = window.innerWidth;
//     let a1 = newWidth * localStorage.getItem("a1") / localStorage.getItem("curWidth");
//     let a2 = newWidth * localStorage.getItem("a2") / localStorage.getItem("curWidth");
//     let a3 = newWidth * localStorage.getItem("a3") / localStorage.getItem("curWidth");
//     let a4 = newWidth * localStorage.getItem("a4") / localStorage.getItem("curWidth");
//     document.getElementById("a1").style.marginLeft = a1 + "px";
//     document.getElementById("a2").style.marginLeft = a2 + "px";
//     document.getElementById("a3").style.marginLeft = a3 + "px";
//     document.getElementById("a4").style.marginLeft = a4 + "px";
// }