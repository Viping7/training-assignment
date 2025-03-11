import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectJokeParamsComponent } from './select-joke-params.component';

describe('SelectJokeComponent', () => {
  let component: SelectJokeParamsComponent;
  let fixture: ComponentFixture<SelectJokeParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectJokeParamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectJokeParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
