import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "[branch]",
  templateUrl: "./branch.component.svg",
  styleUrls: ["./branch.component.scss"],
})
export class BranchComponent implements OnInit {
  constructor() {}

  @Input() from: [number, number];
  @Input() to: [number, number];

  height = 0;
  rotate: string;

  ngOnInit() {
    this.calculate();
  }

  calculate() {
    const [x1, y1] = this.from;
    const [x2, y2] = this.to;
    const x = x2 - x1;
    const y = y2 - y1;
    const angle = - (Math.atan(y / x) * 360) / (2 * Math.PI);
    this.height = Math.sqrt(x * x + y * y);
    this.rotate = `rotate( -45, ${x2}, ${y2})`;
    this.rotate = `rotate(${angle}, ${x2}, ${y2})`;
  }
  log() {
    console.log('papitas')
  }
}
