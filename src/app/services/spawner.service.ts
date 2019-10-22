import { Injectable } from "@angular/core";
import { of } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class SpawnerService {
  trunks: trunk [] = [];

  constructor() {}

  getTrunks() {
    return of(this.trunks)
  }

  spawnTrunk(start: number, duration: number) {
    this.trunks.push({
      start,
      duration,
    });
  }
}
