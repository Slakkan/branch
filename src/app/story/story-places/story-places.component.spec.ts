import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPlacesComponent } from './story-places.component';

describe('StoryPlacesComponent', () => {
  let component: StoryPlacesComponent;
  let fixture: ComponentFixture<StoryPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
