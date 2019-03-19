import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUploadComponentComponent } from './detail-upload-component.component';

describe('DetailUploadComponentComponent', () => {
  let component: DetailUploadComponentComponent;
  let fixture: ComponentFixture<DetailUploadComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailUploadComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailUploadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
