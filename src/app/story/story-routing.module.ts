import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { StoryComponent } from './story.component';
import { StoryTreeComponent } from "./story-tree/story-tree.component";
import { StoryLeafComponent } from "./story-leaf/story-leaf.component";


const routes: Routes = [
  { path: "", component: StoryComponent, pathMatch: 'full' },
  { path: "tree", component: StoryTreeComponent },
  { path: "leaf", component: StoryLeafComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoryRoutingModule {}
