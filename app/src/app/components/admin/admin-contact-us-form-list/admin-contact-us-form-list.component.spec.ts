import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContactUsFormListComponent } from './admin-contact-us-form-list.component';

describe('AdminContactUsFormListComponent', () => {
  let component: AdminContactUsFormListComponent;
  let fixture: ComponentFixture<AdminContactUsFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminContactUsFormListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminContactUsFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
