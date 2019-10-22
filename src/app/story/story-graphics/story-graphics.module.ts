import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafComponent } from './leaf/leaf.component';
import { BranchComponent } from './branch/branch.component';
import { TrunkComponent } from './trunk/trunk.component';


@NgModule({
  declarations: [LeafComponent, BranchComponent, TrunkComponent],
  imports: [
    CommonModule
  ],
  exports: [LeafComponent, BranchComponent, TrunkComponent]
})
export class StoryGraphicsModule { }
