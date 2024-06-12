import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostCreateComponent } from './admin-post-create.component';

describe('AdminPostCreateComponent', () => {
  let component: AdminPostCreateComponent;
  let fixture: ComponentFixture<AdminPostCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminPostCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPostCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
