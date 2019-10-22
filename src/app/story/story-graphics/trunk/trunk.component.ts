import { Component, OnInit, Input } from "@angular/core";

import { animations } from "./trunk.animations";
import { SpawnerService } from "src/app/services/spawner.service";

@Component({
  selector: "[trunk]",
  templateUrl: "./trunk.component.svg",
  styleUrls: ["./trunk.component.scss"],
  animations,
})
export class TrunkComponent implements OnInit {
  constructor(private spawner: SpawnerService) {}

  @Input() start: number;
  @Input() duration: number;

  rotate: string;
  animation = "normal";
  pointerHeight: number;
  hasChild = false;

  ngOnInit() {
    this.rotate = `rotate(180, 500, ${this.start})`;
  }

  hoverStart() {
    this.animation = "hover";
  }

  hoverEnd() {
    this.animation = "normal";
  }

  createTrunk() {
    this.spawner.spawnTrunk(this.start - this.duration, 300);
    this.hasChild = true;
    this.animation = "normal";
  }
}
