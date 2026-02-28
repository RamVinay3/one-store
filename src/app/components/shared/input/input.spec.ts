import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInput } from './input';

describe('Input', () => {
  let component: FormInput;
  let fixture: ComponentFixture<FormInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
