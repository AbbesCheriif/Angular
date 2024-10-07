import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeberFormComponent } from './memeber-form.component';

describe('MemeberFormComponent', () => {
  let component: MemeberFormComponent;
  let fixture: ComponentFixture<MemeberFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemeberFormComponent]
    });
    fixture = TestBed.createComponent(MemeberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
