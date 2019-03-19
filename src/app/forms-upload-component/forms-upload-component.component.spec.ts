import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsUploadComponentComponent } from './forms-upload-component.component';

describe('FormsUploadComponentComponent', () => {
  let component: FormsUploadComponentComponent;
  let fixture: ComponentFixture<FormsUploadComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsUploadComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsUploadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
