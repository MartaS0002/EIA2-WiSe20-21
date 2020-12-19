namespace L09 {
  export class CloudInfo {
    x: number;
    y: number;

    constructor(_x: number, _y: number) {
      this.x = _x;
      this.y = _y;
    }

    move(): void {
      if (this.x > 800) {
        this.x = 0;
      }
      this.x += Math.random() * 3;
      console.log("class cloud move");
    }

    draw(): void {
      crc2.beginPath();
      crc2.arc(this.x, this.y, 15, 0, 5 * Math.PI);

      let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 800, 600);
      gradient.addColorStop(0, "white");
      gradient.addColorStop(1, "#BDBDBD");
      crc2.fillStyle = gradient;
      crc2.fill();

      crc2.beginPath();
      crc2.arc(this.x + 50, this.y, 15, 0, 2 * Math.PI);
      crc2.fill();

      crc2.beginPath();
      crc2.arc(this.x + 25, this.y - 11, 25, 0, 12 * Math.PI);
      crc2.fill();
    }

    update(): void {
      this.move();
      this.draw();
    }
  }
}
