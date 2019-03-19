import { Component, OnInit } from '@angular/core';
import { UploadFileServiceService } from '../upload-file-service.service';
import { P } from '@angular/core/src/render3';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { unescapeIdentifier } from '@angular/compiler';

@Component({
  selector: 'form-upload',
  templateUrl: './forms-upload-component.component.html',
  styleUrls: ['./forms-upload-component.component.css']
})
export class FormsUploadComponentComponent implements OnInit {

  selectedFiles:FileList;
  currentFileUpload:File;
  progress :{percentage:number}={percentage:0};
  constructor(private uploadFileService:UploadFileServiceService) { }

  ngOnInit() {
  }

  selecteFile(event){
    this.selectedFiles=event.target.files;
    console.log(this.selectedFiles);
  }

  upload(){
    this.progress.percentage=0;
    
    this.currentFileUpload=this.selectedFiles.item(0);
    console.log(this.currentFileUpload);
    this.uploadFileService.pushFileToStorage(this.currentFileUpload).subscribe(
      event=>{
        if(event.type===HttpEventType.UploadProgress){
          this.progress.percentage=Math.round(100*event.loaded/event.total);
        }else if(event instanceof HttpResponse){
          console.log("file is completely uploaded");
        }
      })
      this.selecteFile=undefined;
  }

}
