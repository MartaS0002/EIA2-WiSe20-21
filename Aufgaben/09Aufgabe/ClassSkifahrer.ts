namespace L09 {
  export class SkifahrerInfo {
    x: number; 
    y: number; 
    dx: number; 
    dy: number; 
    color: string; 

    constructor(
      _x: number,
      _y: number,
      _dx: number,
      _dy: number,
      _color: string
    ) {
      this.x = _x;
      this.y = _y;
      this.dx = _dx;
      this.dy = _dy;
      this.color = _color;
    }

    move(): void {
      if (this.x < 0 || this.y > 600) {
        this.x = Math.random() * 200 + 800;
        this.y = Math.random() * 100;
        this.color = "black";
      }

      this.x += this.dx;
      this.y += this.dy;
    }

    draw(): void {
      crc2.fillStyle = this.color;
      crc2.fillRect(this.x, this.y, 9, -25);

      crc2.beginPath();
      crc2.arc(this.x + 5, this.y - 25, 10, 0, 2 * Math.PI);
      crc2.fillStyle = this.color;
      crc2.fill();

      crc2.fillStyle = this.color;
      crc2.beginPath();
      crc2.moveTo(this.x + 20, this.y - 4);
      crc2.lineTo(this.x - 20, this.y + 4);
      crc2.stroke();
    }

    update(): void {
      console.log("move Skifahrer.ts");
      this.move();
      this.draw();
    }
  }
}
