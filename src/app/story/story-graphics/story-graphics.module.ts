import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafComponent } from './leaf/leaf.component';
import { BranchComponent } from './branch/branch.component';
import { TrunkComponent } from './trunk/trunk.component';
import { DialogComponent } from './dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LeafComponent, BranchComponent, TrunkComponent, DialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [LeafComponent, BranchComponent, TrunkComponent, DialogComponent]
})
export class StoryGraphicsModule { }
