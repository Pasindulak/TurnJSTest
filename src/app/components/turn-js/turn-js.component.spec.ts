import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnJSComponent } from './turn-js.component';

describe('TurnJSComponent', () => {
  let component: TurnJSComponent;
  let fixture: ComponentFixture<TurnJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnJSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
