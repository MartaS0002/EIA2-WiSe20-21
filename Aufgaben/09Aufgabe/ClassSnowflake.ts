namespace L09 {
  export class SnowflakeInfo {
    x: number;
    y: number;

    constructor(_x: number, _y: number) {
      this.x = _x;
      this.y = _y;
    }

    move(): void {
      if (this.y > 600) {
        this.y = 0;
      }
      this.x += Math.random() * 2 - 1;
      this.y += Math.random() * 3;
    }

    draw(): void {
      crc2.beginPath();
      crc2.arc(this.x, this.y, 2, 0, 1 * Math.PI);
      crc2.fillStyle = "white";
      crc2.fill();
    }

    update(): void {
      this.move();
      this.draw();
    }
  }
}
