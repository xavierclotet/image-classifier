import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageClassifierUploadComponent } from './components/image-classifier-upload/image-classifier-upload.component';

@NgModule({
  declarations: [AppComponent, ImageClassifierUploadComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
