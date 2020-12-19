namespace L09 {
  export let crc2: CanvasRenderingContext2D;
  window.addEventListener("load", init);

  let cloud: CloudInfo[] = [];
  let snowflake: SnowflakeInfo[] = [];
  let skifahrer: SkifahrerInfo[] = [];
  let imgData: ImageData;

  function init(): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log("start init");

    crc2 = canvas.getContext("2d");
    console.log(crc2);

    //HIMMEL
    let gradient: CanvasGradient = crc2.createLinearGradient(
      0,
      0,
      0,
      crc2.canvas.height
    );

    gradient.addColorStop(0, "#A9E2F3");
    gradient.addColorStop(1, "white");
    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    //SONNE
    drawSun();
    function drawSun(): void {
      let r1: number = 80;
      let r2: number = 150;
      let gradient: CanvasGradient = crc2.createRadialGradient(
        0,
        0,
        r1,
        0,
        0,
        r2
      );

      gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
      gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

      crc2.save();
      crc2.fillStyle = gradient;
      crc2.arc(0, 0, r2, 0, 2 * Math.PI);
      crc2.fill();
      crc2.restore();
    }

    // BERGE
    drawBerg();
    function drawBerg(): void {
      crc2.beginPath();
      crc2.lineTo(400, 105);
      crc2.lineTo(490, 30);
      crc2.lineTo(580, 42);
      crc2.stroke();
      crc2.fillStyle = "#C9C8C8";
      crc2.fill();

      crc2.beginPath();
      crc2.lineTo(490, 30);
      crc2.lineTo(520, 34);
      crc2.lineTo(510, 44);
      crc2.lineTo(500, 39);
      crc2.lineTo(490, 49);
      crc2.lineTo(476, 42);

      crc2.stroke();
      crc2.fillStyle = "#EFEFEF";
      crc2.fill();

      crc2.beginPath();
      crc2.lineTo(300, 142);
      crc2.lineTo(390, 20);
      crc2.lineTo(480, 78);
      crc2.stroke();
      crc2.fillStyle = "#C9C8C8";
      crc2.fill();

      crc2.beginPath();
      crc2.lineTo(390, 20);
      crc2.lineTo(367, 50);
      crc2.lineTo(385, 65);
      crc2.lineTo(390, 50);
      crc2.lineTo(405, 60);
      crc2.lineTo(425, 43);
      crc2.stroke();
      crc2.fillStyle = "#EFEFEF";
      crc2.fill();
    }

    // PISTE
    drawPiste();
    function drawPiste(): void {
      crc2.beginPath();
      crc2.moveTo(0, 250);
      crc2.lineTo(700, 0);
      crc2.lineTo(800, 0);
      crc2.lineTo(800, 600);
      crc2.lineTo(0, 600);
      crc2.stroke();
      crc2.fillStyle = "#EFFBFB";
      crc2.fill();
    }

    // BÄUME
    drawTrees();
    function drawTrees(): void {
      console.log("Grün, grün, grün sind alle meine Kleider");

      crc2.fillStyle = "darkgreen";
      crc2.strokeStyle = "black";
      crc2.beginPath();
      crc2.moveTo(30, 350);
      crc2.lineTo(20, 370);
      crc2.lineTo(25, 370);
      crc2.lineTo(15, 390);
      crc2.lineTo(20, 390);
      crc2.lineTo(10, 410);
      crc2.lineTo(50, 410);
      crc2.lineTo(40, 390);
      crc2.lineTo(45, 390);
      crc2.lineTo(35, 370);
      crc2.lineTo(40, 370);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      crc2.fillStyle = "darkgreen";
      crc2.strokeStyle = "black";
      crc2.beginPath();
      crc2.moveTo(50, 380);
      crc2.lineTo(40, 400);
      crc2.lineTo(45, 400);
      crc2.lineTo(35, 420);
      crc2.lineTo(40, 420);
      crc2.lineTo(30, 440);
      crc2.lineTo(70, 440);
      crc2.lineTo(60, 420);
      crc2.lineTo(65, 420);
      crc2.lineTo(55, 400);
      crc2.lineTo(60, 400);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      crc2.fillStyle = "darkgreen";
      crc2.strokeStyle = "black";
      crc2.beginPath();
      crc2.moveTo(70, 390);
      crc2.lineTo(60, 410);
      crc2.lineTo(65, 410);
      crc2.lineTo(55, 430);
      crc2.lineTo(60, 430);
      crc2.lineTo(50, 450);
      crc2.lineTo(90, 450);
      crc2.lineTo(80, 430);
      crc2.lineTo(85, 430);
      crc2.lineTo(75, 410);
      crc2.lineTo(80, 410);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      crc2.fillStyle = "darkgreen";
      crc2.strokeStyle = "black";
      crc2.beginPath();
      crc2.moveTo(730, 350);
      crc2.lineTo(720, 370);
      crc2.lineTo(725, 370);
      crc2.lineTo(715, 390);
      crc2.lineTo(720, 390);
      crc2.lineTo(710, 410);
      crc2.lineTo(750, 410);
      crc2.lineTo(740, 390);
      crc2.lineTo(745, 390);
      crc2.lineTo(735, 370);
      crc2.lineTo(740, 370);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      crc2.fillStyle = "darkgreen";
      crc2.strokeStyle = "black";
      crc2.beginPath();
      crc2.moveTo(730, 350);
      crc2.lineTo(720, 370);
      crc2.lineTo(725, 370);
      crc2.lineTo(715, 390);
      crc2.lineTo(720, 390);
      crc2.lineTo(710, 410);
      crc2.lineTo(750, 410);
      crc2.lineTo(740, 390);
      crc2.lineTo(745, 390);
      crc2.lineTo(735, 370);
      crc2.lineTo(740, 370);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      crc2.fillStyle = "darkgreen";
      crc2.strokeStyle = "black";
      crc2.beginPath();
      crc2.moveTo(710, 350);
      crc2.lineTo(700, 370);
      crc2.lineTo(705, 370);
      crc2.lineTo(695, 390);
      crc2.lineTo(700, 390);
      crc2.lineTo(690, 410);
      crc2.lineTo(730, 410);
      crc2.lineTo(720, 390);
      crc2.lineTo(725, 390);
      crc2.lineTo(715, 370);
      crc2.lineTo(720, 370);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      crc2.fillStyle = "darkgreen";
      crc2.strokeStyle = "black";
      crc2.beginPath();
      crc2.moveTo(530, 160);
      crc2.lineTo(520, 180);
      crc2.lineTo(525, 180);
      crc2.lineTo(515, 200);
      crc2.lineTo(520, 200);
      crc2.lineTo(510, 220);
      crc2.lineTo(550, 220);
      crc2.lineTo(540, 200);
      crc2.lineTo(545, 200);
      crc2.lineTo(535, 180);
      crc2.lineTo(540, 180);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      crc2.fillStyle = "darkgreen";
      crc2.strokeStyle = "black";
      crc2.beginPath();
      crc2.moveTo(730, 160);
      crc2.lineTo(720, 180);
      crc2.lineTo(725, 180);
      crc2.lineTo(715, 200);
      crc2.lineTo(720, 200);
      crc2.lineTo(710, 220);
      crc2.lineTo(750, 220);
      crc2.lineTo(740, 200);
      crc2.lineTo(745, 200);
      crc2.lineTo(735, 180);
      crc2.lineTo(740, 180);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();
    }

    //LIFT
    drawLift();
    function drawLift(): void {
      crc2.beginPath();
      crc2.moveTo(0, 300);
      crc2.lineTo(720, 0);
      crc2.stroke();

      crc2.beginPath();
      crc2.moveTo(170, 225);
      crc2.lineTo(170, 325);
      crc2.stroke();

      crc2.beginPath();
      crc2.moveTo(150, 230);
      crc2.lineTo(150, 345);
      crc2.stroke();

      crc2.beginPath();
      crc2.moveTo(340, 150);
      crc2.lineTo(340, 240);
      crc2.stroke();
      crc2.beginPath();
      crc2.moveTo(360, 140);
      crc2.lineTo(360, 220);
      crc2.stroke();

      crc2.beginPath();
      crc2.moveTo(510, 75);
      crc2.lineTo(510, 160);
      crc2.stroke();
      crc2.beginPath();
      crc2.moveTo(530, 65);
      crc2.lineTo(530, 140);
      crc2.stroke();

      // SITZE
      crc2.beginPath();
      crc2.moveTo(270, 180);
      crc2.lineTo(270, 220);
      crc2.lineTo(240, 220);
      crc2.stroke();

      crc2.beginPath();
      crc2.moveTo(560, 60);
      crc2.lineTo(560, 80);
      crc2.lineTo(550, 80);
      crc2.stroke();
    }

    drawHouse();
    function drawHouse(): void {
      crc2.fillStyle = "#8A4B08";
      crc2.beginPath();
      crc2.moveTo(150, 525);
      crc2.lineTo(150, 475);
      crc2.lineTo(200, 475);
      crc2.lineTo(200, 525);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();

      crc2.fillStyle = "#B40404";

      crc2.beginPath();
      crc2.moveTo(150, 475);
      crc2.lineTo(200, 475);
      crc2.lineTo(175, 450);
      crc2.closePath();
      crc2.fill();
      crc2.stroke();
    }

    imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

    // ANIMATION - SCHLEIFEN
    // MENSCHEN
    for (let i: number = 0; i < 15; i++) {
      skifahrer[i] = new SkifahrerInfo(
        Math.random() * 650 + 700,
        Math.random() * 500 - 50,
        Math.random() * 2.5 - 4.5,
        Math.random() * 4 + 1,
        "black"
      );
    }

    // SCHNEEFLOCKEN
    for (let i: number = 0; i < 3000; i++) {
      snowflake[i] = new SnowflakeInfo(
        Math.random() * 800,
        Math.random() * 600
      );
    }

    // WOLKEN
    for (let i: number = 0; i < 5; i++) {
      cloud[i] = new CloudInfo(Math.random() * 800, Math.random() * 30 + 40);
    }
    animate();
  }

  // ANIMATION
  function animate(): void {
    crc2.putImageData(imgData, 0, 0);

    // SCHNEEFLOCKEN
    for (let i: number = 0; i < snowflake.length; i++) {
      snowflake[i].update();
    }

    // WOLKEN
    for (let i: number = 1; i < cloud.length; i++) {
      cloud[i].update();
    }

    // MENSCHEN
    for (let i: number = 5; i < skifahrer.length; i++) {
      skifahrer[i].update();
    }

    window.setTimeout(animate, 15);
  }
}
