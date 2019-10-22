import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from "@angular/core";
import { Subscription } from "rxjs";

import { SpawnerService } from "src/app/services/spawner.service";

@Component({
  selector: "app-story-tree",
  templateUrl: "./story-tree.component.html",
  styleUrls: ["./story-tree.component.scss"],
})
export class StoryTreeComponent implements OnInit, OnDestroy {
  constructor(private spawner: SpawnerService) {}

  trunks: trunk[];

  subscriptions: Subscription[] = [];

  viewBox = "0 0 1000 1000";
  translate = "translate(0 0)";
  isMoving = false;
  startingPosition: [number, number];
  offsetPosition: [number, number] = [0, 0];

  ngOnInit() {
    this.subscriptions.push(this.spawner.getTrunks().subscribe(trunks => (this.trunks = trunks)));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  translateGroupStart(e: MouseEvent) {
    this.isMoving = true;
    const [x0, y0] = this.offsetPosition;
    const { x, y } = e;
    this.startingPosition = [x - x0, y - y0];
  }

  translateGroupEnd(e: MouseEvent) {
    if (this.isMoving === false) {
      return;
    }
    this.isMoving = false;
    const [x0, y0] = this.startingPosition;
    const { x, y } = e;
    this.offsetPosition = [x - x0, y - y0];
  }

  translateGroup(e: MouseEvent) {
    if (this.isMoving) {
      const { x, y } = e;
      const [x0, y0] = this.startingPosition;
      this.translate = `translate(${x - x0}, ${y - y0})`;
    }
  }

  moveViewBox() {
    const [x, y] = this.offsetPosition;
    const vx = Math.floor(x / 500) * 500;
    const vy = Math.floor(y / 500) * 500;
    this.viewBox = `${x} ${y} 1000 1000`;
    console.log(this.viewBox);
  }
}
