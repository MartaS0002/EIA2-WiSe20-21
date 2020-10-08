window.addEventListener("load", function myAlert (): void {
            var popUp: string;
            var myName: string = prompt ("How should I call you?", "");
            if (myName == null || myName == "") {
              popUp = "Don´t be shy. Try again.";
            } else {
              popUp = "Hello, " + myName + "! <br> How are you today?";
            }
            document.getElementById("placeholder").innerHTML = popUp;
    }
    );