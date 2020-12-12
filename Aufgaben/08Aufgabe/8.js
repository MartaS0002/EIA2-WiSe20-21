"use strict";
var L08_Skipiste;
(function (L08_Skipiste) {
    window.addEventListener("load", handleload);
    let crc2;

    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        // FUNKTIONEN
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        drawBackground();
        drawSun({
            x: 50,
            y: 25
        });
        drawCloud({
            x: 200,
            y: 105
        }, {
            x: 250,
            y: 75
        });
        drawPiste();
        drawKurve();
        drawLift();
        drawTrees();
        drawHouse();
        drawSkier();
        drawSnowflakes();
        drawBerg();
    }
    // HIMMEL
    function drawBackground() {
        console.log("Was für ein schöner Tag");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#81DAF5");
        gradient.addColorStop(1, "white");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    // SONNE
    function drawSun(_position) {
        console.log("Die Sonne scheint", _position);
        let r1 = 30;
        let r2 = 80;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    // WOLKE
 
    function drawCloud(_position, _size) {
           console.log("Wolken", _position, _size);
     
        let nParticles = 50;
        let radiusParticle = 40;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.7)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    // BERGE
 
    function drawBerg() {
           console.log("Berg");
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
  
    function drawPiste() {
          console.log("Skipiste");
        crc2.beginPath();
        crc2.moveTo(0, 250);
        crc2.lineTo(700, 0);
        crc2.lineTo(600, 0);
        crc2.lineTo(600, 1200);
        crc2.lineTo(0, 1200);
        crc2.stroke();
        crc2.fillStyle = "#EFFBFB";
        crc2.fill();
    }
    //KURVE (inspiriert von Oliver)
  
    function drawKurve() {
          console.log("Kurve - Wahoo");
        crc2.beginPath();
        crc2.bezierCurveTo(600, 220, 0, 310, 500, 400);
        crc2.bezierCurveTo(500, 400, 800, 450, 200, 700);
        crc2.stroke();
    }
    // TREES
    function drawTrees() {
        
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
        crc2.fillStyle = "darkgreen";
        crc2.strokeStyle = "black";
        crc2.beginPath();
        crc2.moveTo(50, 880);
        crc2.lineTo(40, 900);
        crc2.lineTo(45, 900);
        crc2.lineTo(35, 920);
        crc2.lineTo(40, 920);
        crc2.lineTo(30, 940);
        crc2.lineTo(70, 940);
        crc2.lineTo(60, 920);
        crc2.lineTo(65, 920);
        crc2.lineTo(55, 900);
        crc2.lineTo(60, 900);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "darkgreen";
        crc2.strokeStyle = "black";
        crc2.beginPath();
        crc2.moveTo(70, 900);
        crc2.lineTo(60, 920);
        crc2.lineTo(65, 920);
        crc2.lineTo(55, 940);
        crc2.lineTo(60, 940);
        crc2.lineTo(50, 960);
        crc2.lineTo(90, 960);
        crc2.lineTo(80, 940);
        crc2.lineTo(85, 940);
        crc2.lineTo(75, 920);
        crc2.lineTo(80, 920);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "darkgreen";
        crc2.strokeStyle = "black";
        crc2.beginPath();
        crc2.moveTo(550, 780);
        crc2.lineTo(540, 800);
        crc2.lineTo(545, 800);
        crc2.lineTo(535, 820);
        crc2.lineTo(540, 820);
        crc2.lineTo(530, 840);
        crc2.lineTo(570, 840);
        crc2.lineTo(560, 820);
        crc2.lineTo(565, 820);
        crc2.lineTo(555, 800);
        crc2.lineTo(560, 800);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "darkgreen";
        crc2.strokeStyle = "black";
        crc2.beginPath();
        crc2.moveTo(530, 800);
        crc2.lineTo(520, 820);
        crc2.lineTo(525, 820);
        crc2.lineTo(515, 840);
        crc2.lineTo(520, 840);
        crc2.lineTo(510, 860);
        crc2.lineTo(550, 860);
        crc2.lineTo(540, 840);
        crc2.lineTo(545, 840);
        crc2.lineTo(535, 820);
        crc2.lineTo(540, 820);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    //LIFT
    function drawLift() {
         console.log("Lift(ed)");
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
 // HOUSE
    function drawHouse() {
               console.log("Home");
        crc2.fillStyle = "#8A4B08";
        crc2.beginPath();
        crc2.moveTo(150, 725);
        crc2.lineTo(150, 675);
        crc2.lineTo(200, 675);
        crc2.lineTo(200, 725);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "#B40404";
        crc2.beginPath();
        crc2.moveTo(150, 675);
        crc2.lineTo(200, 675);
        crc2.lineTo(175, 650);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    // MENSCHEN
    function drawSkier() {
         console.log("We are the people");
        let skiCount = 7;
        crc2.save();
        for (let i = 0; i < skiCount; i++) {
            let x = Math.random() * 500 + 100;
            let y = Math.random() * 850 + 200;
            drawSingleSkifahrer({
                x: x,
                y: y
            });
            crc2.restore();
        }
    }

    function drawSingleSkifahrer(_position) {
        console.log("Single Skifahrer");
        let skincolor = "HSL(30, 100%, " + Math.random() * 100 + "%)";
        let shirtrandom = Math.random() * 360;
        let shirtcolor = "HSL(" + shirtrandom + ", 70%, 50%)";
        let trousercolor = "HSL(" + shirtrandom + ", 60%, 20%)";
        crc2.save();
        crc2.translate(_position.x, _position.y);
        // KOPF
        crc2.beginPath();
        crc2.arc(-7, 1, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = skincolor;
        crc2.fill();
        // SKI
        crc2.lineWidth = 4;
        crc2.beginPath();
        crc2.moveTo(10, 25);
        crc2.lineTo(-20, 52);
        crc2.strokeStyle = "#61380B";
        crc2.stroke();
        crc2.lineCap = "round";
        crc2.moveTo(25, 20);
        crc2.lineTo(-11, 52);
        crc2.strokeStyle = "#61380B";
        crc2.stroke();
        // BEINE
        crc2.lineWidth = 5;
        crc2.beginPath();
        crc2.moveTo(-6, 25);
        crc2.lineTo(-7, 31);
        crc2.lineTo(-5, 37);
        crc2.moveTo(1, 25);
        crc2.lineTo(1, 31);
        crc2.lineTo(5, 35);
        crc2.strokeStyle = trousercolor;
        crc2.stroke();
        crc2.closePath();
        // KÖRPER
        crc2.beginPath();
        crc2.moveTo(-10, 25);
        crc2.bezierCurveTo(-5, 0, -5, 0, 5, 25);
        crc2.closePath();
        crc2.fillStyle = shirtcolor;
        crc2.fill();
        // ARM
        crc2.lineWidth = 4;
        crc2.beginPath();
        crc2.moveTo(1, 9);
        crc2.lineTo(10, 15);
        crc2.lineTo(10, 25);
        crc2.strokeStyle = shirtcolor;
        crc2.stroke();
        crc2.closePath();
        // STOCK
        crc2.beginPath();
        crc2.lineWidth = 1;
        crc2.moveTo(11, 23);
        crc2.lineTo(30, 40);
        crc2.strokeStyle = "HSL(0,0%,0%)";
        crc2.stroke();
        crc2.closePath();
        crc2.restore();
    }
    // SCHNEE
    function drawSnowflakes() {
           console.log("Let it snow");
        for (let i = 0; i < 1000; i++) {
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            let radiusSnowflake = Math.random() * 2.5 + 1;
            crc2.beginPath();
            crc2.arc(x, y, radiusSnowflake, 0, Math.PI * 2, false);
            crc2.fillStyle = "white";
            crc2.fill();
        }
    }
})(L08_Skipiste || (L08_Skipiste = {}));
//# sourceMappingURL=8.js.map
