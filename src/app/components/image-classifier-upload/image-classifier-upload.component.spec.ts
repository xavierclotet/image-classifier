import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageClassifierUploadComponent } from './image-classifier-upload.component';

describe('ImageClassifierUploadComponent', () => {
  let component: ImageClassifierUploadComponent;
  let fixture: ComponentFixture<ImageClassifierUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageClassifierUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageClassifierUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
