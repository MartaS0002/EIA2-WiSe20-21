"use strict";
window.addEventListener("load", function myAlert() {
    var popUp;
    var myName = prompt("How should I call you?", "");
    if (myName == null || myName == "") {
        popUp = "Don´t be shy. Try again.";
    }
    else {
        popUp = "Hello, " + myName + "! <br> How are you today?";
    }
    document.getElementById("placeholder").innerHTML = popUp;
});
//# sourceMappingURL=script.js.map