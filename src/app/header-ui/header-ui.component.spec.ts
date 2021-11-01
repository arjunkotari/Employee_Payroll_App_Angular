import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUIComponent } from './header-ui.component';

describe('HeaderUIComponent', () => {
  let component: HeaderUIComponent;
  let fixture: ComponentFixture<HeaderUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
