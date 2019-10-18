import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryLeafComponent } from './story-leaf.component';

describe('StoryLeafComponent', () => {
  let component: StoryLeafComponent;
  let fixture: ComponentFixture<StoryLeafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryLeafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryLeafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
