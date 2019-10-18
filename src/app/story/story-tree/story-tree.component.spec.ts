import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryTreeComponent } from './story-tree.component';

describe('StoryTreeComponent', () => {
  let component: StoryTreeComponent;
  let fixture: ComponentFixture<StoryTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
