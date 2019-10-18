import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[trunk]',
  templateUrl: './trunk.component.svg',
  styleUrls: ['./trunk.component.scss']
})
export class TrunkComponent implements OnInit {

  constructor() { }

  @Input() start: number
  @Input() duration: number

  ngOnInit() {
  }

}
