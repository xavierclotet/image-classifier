import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mobilenet from '@tensorflow-models/mobilenet';

import { Prediction } from '../../prediction';

@Component({
  selector: 'app-image-classifier-upload',
  templateUrl: './image-classifier-upload.component.html',
  styleUrls: ['./image-classifier-upload.component.css']
})
export class ImageClassifierUploadComponent implements OnInit {
  imageSrc: string;
  @ViewChild('img') imageEl: ElementRef;

  predictions: Prediction[];

  model: any;
  loading = true;

  constructor() {}

  async ngOnInit() {
    console.log('loading mobilenet model...');
    this.model = await mobilenet.load();
    console.log('Sucessfully loaded model');
    this.loading = false;
  }

  async fileChangeEvent(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (res: any) => {
        this.imageSrc = res.target.result;
        setTimeout(async () => {
          const imgEl = this.imageEl.nativeElement;
          this.predictions = await this.model.classify(imgEl);
        }, 0);
      };
    }
  }
}
