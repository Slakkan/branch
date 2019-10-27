import { Injectable } from "@angular/core";
import { of, Observable, Subject, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SpawnerService {
  private dialog = new Subject<dialog>();

  private trunks: trunk[] = [{ start: 1000, duration: 500 }];
  private lastTrunk = new BehaviorSubject<trunk>({ start: 1000, duration: 500 });

  private branches: branch[][] = [];
  private lastBranches = new BehaviorSubject<branch[]>([]);

  constructor() {}

  create(position: [number, number], component: string, modifier?: string) {
    this.dialog.next({ position, component, modifier });
  }

  get getDialog(): Subject<dialog> {
    return this.dialog;
  }

  get getTrunks(): Observable<trunk[]> {
    return of(this.trunks);
  }

  get getLastTrunk(): BehaviorSubject<trunk> {
    return this.lastTrunk;
  }

  spawnTrunk(start: number, duration: number) {
    this.trunks.push({
      start,
      duration,
    });
    this.lastTrunk.next({ start, duration });
    this.lastBranches.next([])
  }

  get getBranches(): Observable<branch[][]> {
    return of(this.branches);
  }

  get getLastBranches(): BehaviorSubject<branch[]> {
    return this.lastBranches;
  }

  spawnBranch(from: [number, number], to: [number, number]) {
    if (!this.branches[to[0]]) {
      this.branches[to[0]] = [];
    }
    this.branches[to[0]].push({
      from,
      to,
    });

    const branches = this.lastBranches.getValue().filter(branch => branch.to[0] !== to[0]);
    this.lastBranches.next([...branches, { from, to }]);
  }
}
