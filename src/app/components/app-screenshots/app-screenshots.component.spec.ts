import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppScreenshotsComponent } from './app-screenshots.component';

describe('AppScreenshotsComponent', () => {
  let component: AppScreenshotsComponent;
  let fixture: ComponentFixture<AppScreenshotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppScreenshotsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppScreenshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
