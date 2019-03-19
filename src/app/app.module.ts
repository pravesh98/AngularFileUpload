import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailUploadComponentComponent } from './detail-upload-component/detail-upload-component.component';
import { FormsUploadComponentComponent } from './forms-upload-component/forms-upload-component.component';
import { UploadFileServiceService } from './upload-file-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DetailUploadComponentComponent,
    FormsUploadComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UploadFileServiceService],
  bootstrap: [AppComponent]
})
export class AppModule  { }
