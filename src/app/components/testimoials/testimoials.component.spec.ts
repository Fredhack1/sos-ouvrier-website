import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoialsComponent } from './testimoials.component';

describe('TestimoialsComponent', () => {
  let component: TestimoialsComponent;
  let fixture: ComponentFixture<TestimoialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimoialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimoialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
