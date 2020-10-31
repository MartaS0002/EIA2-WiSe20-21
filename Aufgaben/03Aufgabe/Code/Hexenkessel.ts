namespace L03_Hexenkessel {
  window.addEventListener("load", handleLoad);

  function handleLoad(_event: Event): void {
    console.log("Start");
    let form: HTMLDivElement = <HTMLDivElement>(
      document.querySelector("div#form")
    );
    form.addEventListener("change", handleInfo);
  }

  function handleInfo(_event: Event): void {
    let spinnen: HTMLFormElement = <HTMLFormElement>(
      document.querySelector("#spinnenbeine")
    );
    let kröten: HTMLFormElement = <HTMLFormElement>(
      document.querySelector("#krötenaugen")
    );
    let würmer: HTMLFormElement = <HTMLFormElement>(
      document.querySelector("#glibberwürmer")
    );
    let gras: HTMLFormElement = <HTMLFormElement>(
      document.querySelector("#flussgras")
    );
    let schuppen: HTMLFormElement = <HTMLFormElement>(
      document.querySelector("#schlangenschuppen")
    );
    let einhornblut: HTMLFormElement = <HTMLFormElement>(
      document.querySelector("#einhornblut")
    );
    let heat: HTMLFormElement = <HTMLFormElement>(
      document.querySelector("#heat")
    );
    let cool: HTMLFormElement = <HTMLFormElement>(
      document.querySelector("#cool")
    );
    let intensity: boolean = false;

    let rezept: HTMLDivElement = <HTMLDivElement>(
      document.querySelector("#result")
    );
    rezept.innerHTML = "";
    let formData: FormData = new FormData(document.forms[0]);

    let price: number = 0;

    for (let entry of formData) {
      switch (entry[0]) {
        case "Trankname":
          if (entry[1] != "") {
            rezept.innerHTML += "Name des Tranks: " + entry[1] + "<br>";
          }
          break;

        case "Beschreibung":
          if (entry[1] != "")
            rezept.innerHTML += "Beschreibung: " + entry[1] + "<br>";
          break;

        case "Trankwirkung":
          if (entry[1] != "Unbekannt")
            rezept.innerHTML += "Trankwirkung: " + entry[1] + "<br>";
          break;

        case "Dauer der Wirkung":
          if (entry[1] != "")
            rezept.innerHTML +=
              "Wirkungsdauer: " + entry[1] + " Minute(n)" + "<br>" + "<br>";
          break;

        case "Zutat":
          if (entry[1] != "") rezept.innerHTML += "Zutat: " + entry[1] + "<br>";
          break;

        case "Spinnen Menge":
          if (entry[1] != "" && spinnen.checked) {
            rezept.innerHTML += " • Stückzahl: " + entry[1] + "<br>";
            price += 5 * Number(entry[1]);
          }
          break;

        case "Kröten Menge":
          if (entry[1] != "" && kröten.checked) {
            rezept.innerHTML += " • Stückzahl: " + entry[1] + "<br>";
            price += 2.5 * Number(entry[1]);
          }
          break;

        case "Würmer Menge":
          if (entry[1] != "" && würmer.checked) {
            rezept.innerHTML += " • Stückzahl: " + entry[1] + "<br>";
            price += 1.5 * Number(entry[1]);
          }
          break;

        case "Gras Menge":
          if (entry[1] != "" && gras.checked) {
            rezept.innerHTML += " • Stückzahl: " + entry[1] + "<br>";
            price += 1 * Number(entry[1]);
          }
          break;

        case "Schlangen Menge":
          if (entry[1] != "" && schuppen.checked) {
            rezept.innerHTML += " • Stückzahl: " + entry[1] + "<br>";
            price += 3.0 * Number(entry[1]);
          }
          break;

        case "Blut Menge":
          if (entry[1] != "" && einhornblut.checked) {
            rezept.innerHTML += " • Stückzahl: " + entry[1] + "<br>";
            price += 10.0 * Number(entry[1]);
          }
          break;

        // Wie zeigt man die "richtige" Farbe an und nicht #ff0000 ???

        case "Temperaturanweisung":
          if (entry[1] != "")
            rezept.innerHTML +=
              "<br>" + "Temperaturanweisung: " + entry[1] + "<br>";
          break;

        case "Grad":
          if ((entry[1] != "" && heat.checked) || cool.checked)
            rezept.innerHTML +=
              "• Anweisung befolgen bis der Trank " +
              entry[1] +
              "°C erreicht hat" +
              "<br>";
          break;

        case "Dauer":
          if ((entry[1] != "" && heat.checked) || cool.checked)
            rezept.innerHTML +=
              "• Anweisung befolgen bis " +
              entry[1] +
              " Minuten vergangen sind" +
              "<br>";
          break;

        case "TemperaturKonsistenz":
          if ((entry[1] != "" && heat.checked) || cool.checked)
            rezept.innerHTML +=
              "• Anweisung befolgen bis die Konsistenz " +
              entry[1] +
              " ist" +
              "<br>";
          break;

        case "TemperaturFarbe":
          if ((entry[1] != "" && heat.checked) || cool.checked)
            rezept.innerHTML +=
              "• Anweisung befolgen bis der Trank die Farbe " +
              entry[1] +
              " hat" +
              "<br>";
          break;

        case "Rührintensität":
          if (Number(entry[1]) != 0) {
            rezept.innerHTML += "<br>" + "Rührintensität: " + entry[1] + "<br>";
            intensity = true;
          }
          break;

        case "Rührdauer":
          if (entry[1] != "" && intensity)
            rezept.innerHTML +=
              "• Rühren bis " + entry[1] + " Minuten vergangen sind" + "<br>";
          break;

        case "RührenKonsistenz":
          if (entry[1] != "" && intensity)
            rezept.innerHTML +=
              "• Rühren bis die Konsistenz " + entry[1] + " ist" + "<br>";
          break;

        case "RührenFarbe":
          if (entry[1] != "" && intensity)
            rezept.innerHTML +=
              "• Rühren bis der Trank die Farbe " + entry[1] + " hat" + "<br>";
          break;
      }

      if (rezept.innerHTML != null) {
        rezept.style.backgroundColor = "rgb(236, 239, 243)";
        rezept.style.border = "0.5px solid black";
      }
    }
    rezept.innerHTML +=
      "<br>" + "Kosten: " + price.toFixed(2) + " Galleonen (???)";
  }
}
