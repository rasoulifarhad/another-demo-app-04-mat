import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInfoComponent } from './about-info.component';

describe('AboutInfoComponent', () => {
  let component: AboutInfoComponent;
  let fixture: ComponentFixture<AboutInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutInfoComponent]
    });
    fixture = TestBed.createComponent(AboutInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
