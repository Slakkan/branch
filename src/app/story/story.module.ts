import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoryRoutingModule } from "./story-routing.module";
import { StoryComponent } from "./story.component";
import { StoryTreeComponent } from "./story-tree/story-tree.component";
import { StoryLeafComponent } from "./story-leaf/story-leaf.component";
import { FormsModule } from '@angular/forms';
import { StoryPlacesComponent } from './story-places/story-places.component';
import { StoryGraphicsModule } from './story-graphics/story-graphics.module';

@NgModule({
  declarations: [StoryTreeComponent, StoryLeafComponent, StoryComponent, StoryPlacesComponent],
  imports: [CommonModule, StoryGraphicsModule, FormsModule, StoryRoutingModule]
})
export class StoryModule {}
