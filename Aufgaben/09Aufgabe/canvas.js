"use strict";
var L09;
(function (L09) {
    window.addEventListener("load", init);
    let cloud = [];
    let snowflake = [];
    let skifahrer = [];
    let imgData;

    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log("start init");
        L09.crc2 = canvas.getContext("2d");
        console.log(L09.crc2);
        //HIMMEL
        let gradient = L09.crc2.createLinearGradient(0, 0, 0, L09.crc2.canvas.height);
        gradient.addColorStop(0, "#A9E2F3");
        gradient.addColorStop(1, "white");
        L09.crc2.fillStyle = gradient;
        L09.crc2.fillRect(0, 0, L09.crc2.canvas.width, L09.crc2.canvas.height);
        //SONNE
        drawSun();

        function drawSun() {
            let r1 = 80;
            let r2 = 150;
            let gradient = L09.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
            L09.crc2.save();
            L09.crc2.fillStyle = gradient;
            L09.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            L09.crc2.fill();
            L09.crc2.restore();
        }
        // BERGE
        drawBerg();

        function drawBerg() {
            L09.crc2.beginPath();
            L09.crc2.lineTo(400, 105);
            L09.crc2.lineTo(490, 30);
            L09.crc2.lineTo(580, 42);
            L09.crc2.stroke();
            L09.crc2.fillStyle = "#C9C8C8";
            L09.crc2.fill();
            L09.crc2.beginPath();
            L09.crc2.lineTo(490, 30);
            L09.crc2.lineTo(520, 34);
            L09.crc2.lineTo(510, 44);
            L09.crc2.lineTo(500, 39);
            L09.crc2.lineTo(490, 49);
            L09.crc2.lineTo(476, 42);
            L09.crc2.stroke();
            L09.crc2.fillStyle = "#EFEFEF";
            L09.crc2.fill();
            L09.crc2.beginPath();
            L09.crc2.lineTo(300, 142);
            L09.crc2.lineTo(390, 20);
            L09.crc2.lineTo(480, 78);
            L09.crc2.stroke();
            L09.crc2.fillStyle = "#C9C8C8";
            L09.crc2.fill();
            L09.crc2.beginPath();
            L09.crc2.lineTo(390, 20);
            L09.crc2.lineTo(367, 50);
            L09.crc2.lineTo(385, 65);
            L09.crc2.lineTo(390, 50);
            L09.crc2.lineTo(405, 60);
            L09.crc2.lineTo(425, 43);
            L09.crc2.stroke();
            L09.crc2.fillStyle = "#EFEFEF";
            L09.crc2.fill();
        }
        // PISTE
        drawPiste();

        function drawPiste() {
            L09.crc2.beginPath();
            L09.crc2.moveTo(0, 250);
            L09.crc2.lineTo(700, 0);
            L09.crc2.lineTo(800, 0);
            L09.crc2.lineTo(800, 600);
            L09.crc2.lineTo(0, 600);
            L09.crc2.stroke();
            L09.crc2.fillStyle = "#EFFBFB";
            L09.crc2.fill();
        }
        // BÄUME
        drawTrees();

        function drawTrees() {
            console.log("Grün, grün, grün sind alle meine Kleider");
            L09.crc2.fillStyle = "darkgreen";
            L09.crc2.strokeStyle = "black";
            L09.crc2.beginPath();
            L09.crc2.moveTo(30, 350);
            L09.crc2.lineTo(20, 370);
            L09.crc2.lineTo(25, 370);
            L09.crc2.lineTo(15, 390);
            L09.crc2.lineTo(20, 390);
            L09.crc2.lineTo(10, 410);
            L09.crc2.lineTo(50, 410);
            L09.crc2.lineTo(40, 390);
            L09.crc2.lineTo(45, 390);
            L09.crc2.lineTo(35, 370);
            L09.crc2.lineTo(40, 370);
            L09.crc2.closePath();
            L09.crc2.fill();
            L09.crc2.stroke();
            L09.crc2.fillStyle = "darkgreen";
            L09.crc2.strokeStyle = "black";
            L09.crc2.beginPath();
            L09.crc2.moveTo(50, 380);
            L09.crc2.lineTo(40, 400);
            L09.crc2.lineTo(45, 400);
            L09.crc2.lineTo(35, 420);
            L09.crc2.lineTo(40, 420);
            L09.crc2.lineTo(30, 440);
            L09.crc2.lineTo(70, 440);
            L09.crc2.lineTo(60, 420);
            L09.crc2.lineTo(65, 420);
            L09.crc2.lineTo(55, 400);
            L09.crc2.lineTo(60, 400);
            L09.crc2.closePath();
            L09.crc2.fill();
            L09.crc2.stroke();
            L09.crc2.fillStyle = "darkgreen";
            L09.crc2.strokeStyle = "black";
            L09.crc2.beginPath();
            L09.crc2.moveTo(70, 390);
            L09.crc2.lineTo(60, 410);
            L09.crc2.lineTo(65, 410);
            L09.crc2.lineTo(55, 430);
            L09.crc2.lineTo(60, 430);
            L09.crc2.lineTo(50, 450);
            L09.crc2.lineTo(90, 450);
            L09.crc2.lineTo(80, 430);
            L09.crc2.lineTo(85, 430);
            L09.crc2.lineTo(75, 410);
            L09.crc2.lineTo(80, 410);
            L09.crc2.closePath();
            L09.crc2.fill();
            L09.crc2.stroke();
            L09.crc2.fillStyle = "darkgreen";
            L09.crc2.strokeStyle = "black";
            L09.crc2.beginPath();
            L09.crc2.moveTo(730, 350);
            L09.crc2.lineTo(720, 370);
            L09.crc2.lineTo(725, 370);
            L09.crc2.lineTo(715, 390);
            L09.crc2.lineTo(720, 390);
            L09.crc2.lineTo(710, 410);
            L09.crc2.lineTo(750, 410);
            L09.crc2.lineTo(740, 390);
            L09.crc2.lineTo(745, 390);
            L09.crc2.lineTo(735, 370);
            L09.crc2.lineTo(740, 370);
            L09.crc2.closePath();
            L09.crc2.fill();
            L09.crc2.stroke();
            L09.crc2.fillStyle = "darkgreen";
            L09.crc2.strokeStyle = "black";
            L09.crc2.beginPath();
            L09.crc2.moveTo(730, 350);
            L09.crc2.lineTo(720, 370);
            L09.crc2.lineTo(725, 370);
            L09.crc2.lineTo(715, 390);
            L09.crc2.lineTo(720, 390);
            L09.crc2.lineTo(710, 410);
            L09.crc2.lineTo(750, 410);
            L09.crc2.lineTo(740, 390);
            L09.crc2.lineTo(745, 390);
            L09.crc2.lineTo(735, 370);
            L09.crc2.lineTo(740, 370);
            L09.crc2.closePath();
            L09.crc2.fill();
            L09.crc2.stroke();
            L09.crc2.fillStyle = "darkgreen";
            L09.crc2.strokeStyle = "black";
            L09.crc2.beginPath();
            L09.crc2.moveTo(710, 350);
            L09.crc2.lineTo(700, 370);
            L09.crc2.lineTo(705, 370);
            L09.crc2.lineTo(695, 390);
            L09.crc2.lineTo(700, 390);
            L09.crc2.lineTo(690, 410);
            L09.crc2.lineTo(730, 410);
            L09.crc2.lineTo(720, 390);
            L09.crc2.lineTo(725, 390);
            L09.crc2.lineTo(715, 370);
            L09.crc2.lineTo(720, 370);
            L09.crc2.closePath();
            L09.crc2.fill();
            L09.crc2.stroke();
            L09.crc2.fillStyle = "darkgreen";
            L09.crc2.strokeStyle = "black";
            L09.crc2.beginPath();
            L09.crc2.moveTo(530, 160);
            L09.crc2.lineTo(520, 180);
            L09.crc2.lineTo(525, 180);
            L09.crc2.lineTo(515, 200);
            L09.crc2.lineTo(520, 200);
            L09.crc2.lineTo(510, 220);
            L09.crc2.lineTo(550, 220);
            L09.crc2.lineTo(540, 200);
            L09.crc2.lineTo(545, 200);
            L09.crc2.lineTo(535, 180);
            L09.crc2.lineTo(540, 180);
            L09.crc2.closePath();
            L09.crc2.fill();
            L09.crc2.stroke();
            L09.crc2.fillStyle = "darkgreen";
            L09.crc2.strokeStyle = "black";
            L09.crc2.beginPath();
            L09.crc2.moveTo(730, 160);
            L09.crc2.lineTo(720, 180);
            L09.crc2.lineTo(725, 180);
            L09.crc2.lineTo(715, 200);
            L09.crc2.lineTo(720, 200);
            L09.crc2.lineTo(710, 220);
            L09.crc2.lineTo(750, 220);
            L09.crc2.lineTo(740, 200);
            L09.crc2.lineTo(745, 200);
            L09.crc2.lineTo(735, 180);
            L09.crc2.lineTo(740, 180);
            L09.crc2.closePath();
            L09.crc2.fill();
            L09.crc2.stroke();
        }
        //LIFT
        drawLift();

        function drawLift() {
            L09.crc2.beginPath();
            L09.crc2.moveTo(0, 300);
            L09.crc2.lineTo(720, 0);
            L09.crc2.stroke();
            L09.crc2.beginPath();
            L09.crc2.moveTo(170, 225);
            L09.crc2.lineTo(170, 325);
            L09.crc2.stroke();
            L09.crc2.beginPath();
            L09.crc2.moveTo(150, 230);
            L09.crc2.lineTo(150, 345);
            L09.crc2.stroke();
            L09.crc2.beginPath();
            L09.crc2.moveTo(340, 150);
            L09.crc2.lineTo(340, 240);
            L09.crc2.stroke();
            L09.crc2.beginPath();
            L09.crc2.moveTo(360, 140);
            L09.crc2.lineTo(360, 220);
            L09.crc2.stroke();
            L09.crc2.beginPath();
            L09.crc2.moveTo(510, 75);
            L09.crc2.lineTo(510, 160);
            L09.crc2.stroke();
            L09.crc2.beginPath();
            L09.crc2.moveTo(530, 65);
            L09.crc2.lineTo(530, 140);
            L09.crc2.stroke();
            // SITZE
            L09.crc2.beginPath();
            L09.crc2.moveTo(270, 180);
            L09.crc2.lineTo(270, 220);
            L09.crc2.lineTo(240, 220);
            L09.crc2.stroke();
            L09.crc2.beginPath();
            L09.crc2.moveTo(560, 60);
            L09.crc2.lineTo(560, 80);
            L09.crc2.lineTo(550, 80);
            L09.crc2.stroke();
        }
        drawHouse();

        function drawHouse() {
            L09.crc2.fillStyle = "#8A4B08";
            L09.crc2.beginPath();
            L09.crc2.moveTo(150, 525);
            L09.crc2.lineTo(150, 475);
            L09.crc2.lineTo(200, 475);
            L09.crc2.lineTo(200, 525);
            L09.crc2.closePath();
            L09.crc2.fill();
            L09.crc2.stroke();
            L09.crc2.fillStyle = "#B40404";
            L09.crc2.beginPath();
            L09.crc2.moveTo(150, 475);
            L09.crc2.lineTo(200, 475);
            L09.crc2.lineTo(175, 450);
            L09.crc2.closePath();
            L09.crc2.fill();
            L09.crc2.stroke();
        }
        imgData = L09.crc2.getImageData(0, 0, canvas.width, canvas.height);
        // ANIMATION - SCHLEIFEN
        // MENSCHEN
        for (let i = 0; i < 15; i++) {
            skifahrer[i] = new L09.SkifahrerInfo(Math.random() * 650 + 700, Math.random() * 500 - 50, Math.random() * 2.5 - 4.5, Math.random() * 4 + 1, "black");
        }
        // SCHNEEFLOCKEN
        for (let i = 0; i < 3000; i++) {
            snowflake[i] = new L09.SnowflakeInfo(Math.random() * 800, Math.random() * 600);
        }
        // WOLKEN
        for (let i = 0; i < 5; i++) {
            cloud[i] = new L09.CloudInfo(Math.random() * 800, Math.random() * 30 + 40);
        }
        animate();
    }
    // ANIMATION
    function animate() {
        L09.crc2.putImageData(imgData, 0, 0);
        // SCHNEEFLOCKEN
        for (let i = 0; i < snowflake.length; i++) {
            snowflake[i].update();
        }
        // WOLKEN
        for (let i = 1; i < cloud.length; i++) {
            cloud[i].update();
        }
        // MENSCHEN
        for (let i = 5; i < skifahrer.length; i++) {
            skifahrer[i].update();
        }
        window.setTimeout(animate, 15);
    }
})(L09 || (L09 = {}));
//# sourceMappingURL=canvas.js.map