import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "[branch]",
  templateUrl: "./branch.component.svg",
  styleUrls: ["./branch.component.scss"],
})
export class BranchComponent implements OnInit {
  constructor() {}

  @Input() from: [number, number];
  @Input() to: [number, number];

  path: string
  
  cx1 : number
  cy1: number

  cx2 : number
  cy2: number

  ngOnInit() {
    this.path = `M ${this.from[0]} ${this.from[1]} L ${this.to[0]} ${this.to[1]} Z`
    this.cx1 = this.from[0]
    this.cy1 = this.from[1]
    this.cx2 = this.to[0]
    this.cy2 = this.to[1]
  }
}
