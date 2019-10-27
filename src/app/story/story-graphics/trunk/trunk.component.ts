import { Component, OnInit, Input, OnDestroy } from "@angular/core";

import { animations } from "./trunk.animations";
import { SpawnerService } from "src/app/services/spawner.service";
import { Subscription } from "rxjs";

@Component({
  selector: "[trunk]",
  templateUrl: "./trunk.component.svg",
  styleUrls: ["./trunk.component.scss"],
  animations,
})
export class TrunkComponent implements OnInit, OnDestroy {
  constructor(private spawner: SpawnerService) {}

  @Input() start: number;
  @Input() duration: number;

  rotate: string;
  animation = "normal";
  pointerHeight: number;
  lastTrunk = true;

  subscriptions: Subscription[] = [];

  ngOnInit() {
    this.rotate = `rotate(180, 500, ${this.start})`;
    this.subscriptions.push(
      this.spawner.getLastTrunk.subscribe(trunk => {
        this.lastTrunk = trunk.start === this.start;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  hoverStart() {
    this.animation = "hover";
  }

  hoverEnd() {
    this.animation = "normal";
  }

  sendMouseEvent(event: MouseEvent, component: string, modifier?: string) {
    const { x, y } = event;
    this.spawner.create([x, y], component, modifier);
    this.animation = "normal";
  }
}
