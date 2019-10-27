import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormArray } from "@angular/forms";
import { SpawnerService } from "src/app/services/spawner.service";
import { Subscription } from "rxjs";

@Component({
  selector: "[dialog]",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent implements OnInit, OnDestroy {
  constructor(private formBuilder: FormBuilder, private spawner: SpawnerService) {}

  lastTrunk: trunk;
  lastBranches: branch[];
  top: string;
  left: string;
  component: string;
  modifier: string;
  show: boolean;

  editableProps = {
    trunk: [{ name: "duration", default: this.lastTrunk ? this.lastTrunk.duration : 500 }],
    branch: [{ name: "start", default: 0 }, { name: "duration", default: 500 }, { name: "position", default: 1 }],
  };

  form = this.formBuilder.group({
    props: this.formBuilder.array([]),
  });

  subscriptions: Subscription[] = [];

  get props() {
    return this.form.get("props") as FormArray;
  }

  ngOnInit() {
    this.subscriptions.push(
      this.spawner.getLastTrunk.subscribe(trunk => {
        this.lastTrunk = trunk;
      })
    );
    this.subscriptions.push(
      this.spawner.getLastBranches.subscribe(branches => {
        this.lastBranches = branches;
      })
    );
    this.subscriptions.push(
      this.spawner.getDialog.subscribe(dialog => {
        this.left = `${dialog.position[0]}px`;
        this.top = `${dialog.position[1]}px`;
        this.component = dialog.component;
        this.modifier = dialog.modifier;
        this.editableProps[this.component].forEach(prop => this.props.push(this.formBuilder.control(prop.default)));
        this.show = true;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  onSubmit() {
    this.show = false;
    switch (this.component) {
      case "trunk":
        this.spawner.spawnTrunk(this.lastTrunk.start - this.lastTrunk.duration, parseInt(this.props.value[0]));
        break;
      case "branch":
        let position: number;
        let trunkX: number
        if (this.modifier === "left") {
          position = -2 * 100 * parseInt(this.props.value[2]);
          trunkX = 400
        } else if (this.modifier === "right") {
          position = 2 * 100 * parseInt(this.props.value[2]);
          trunkX = 500
        }
        const lastBranch = this.lastBranches.find(branch => branch.to[0] === trunkX + position);
        const start = Math.min(parseInt(this.props.value[0]), this.lastTrunk.duration);
        const from: [number, number] = lastBranch ? lastBranch.to : [trunkX, this.lastTrunk.start - start];
        const to: [number, number] = [trunkX + position, from[1] - parseInt(this.props.value[1])];
        this.spawner.spawnBranch(from, to);
    }
    this.props.value.forEach(() => this.props.removeAt(0));
  }
}
