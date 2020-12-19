"use strict";
var L09;
(function (L09) {
    class CloudInfo {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        move() {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += Math.random() * 3;
            console.log("class cloud move");
        }
        draw() {
            L09.crc2.beginPath();
            L09.crc2.arc(this.x, this.y, 15, 0, 5 * Math.PI);
            let gradient = L09.crc2.createLinearGradient(0, 0, 800, 600);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(1, "#BDBDBD");
            L09.crc2.fillStyle = gradient;
            L09.crc2.fill();
            L09.crc2.beginPath();
            L09.crc2.arc(this.x + 50, this.y, 15, 0, 2 * Math.PI);
            L09.crc2.fill();
            L09.crc2.beginPath();
            L09.crc2.arc(this.x + 25, this.y - 11, 25, 0, 12 * Math.PI);
            L09.crc2.fill();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    L09.CloudInfo = CloudInfo;
})(L09 || (L09 = {}));
//# sourceMappingURL=ClassCloud.js.map