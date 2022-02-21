import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImoveisCardComponent } from './imoveis-card.component';

describe('ImoveisCardComponent', () => {
  let component: ImoveisCardComponent;
  let fixture: ComponentFixture<ImoveisCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImoveisCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImoveisCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
