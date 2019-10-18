import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: "[leaf]",
  templateUrl: "./leaf.component.svg",
  styleUrls: ["./leaf.component.scss"],
})
export class LeafComponent implements OnChanges {
  constructor() {}

  @Input() angle: number;
  @Input() position: [number, number]

  transform: string;

  ngOnChanges() {
    const [x, y] = this.position
    this.transform = `rotate(${this.angle}, ${x}, ${y} ) translate(${x - 100}, ${y -100})`;
  }

  log() {
    console.log('papitas')
  }
}
