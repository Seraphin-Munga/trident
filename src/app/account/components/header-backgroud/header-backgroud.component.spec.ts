import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBackgroudComponent } from './header-backgroud.component';

describe('HeaderBackgroudComponent', () => {
  let component: HeaderBackgroudComponent;
  let fixture: ComponentFixture<HeaderBackgroudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBackgroudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBackgroudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
