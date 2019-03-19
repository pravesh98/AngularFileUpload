import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileServiceService {

  constructor(private httpClient:HttpClient) {}

  pushFileToStorage(file:File):Observable<HttpEvent<{}>>{
    let formdata:FormData=new FormData();
    
    formdata.append('file',file);
    const url='http://localhost:8080'
    const req=new HttpRequest('POST','http://localhost:8080/post',formdata,{
      reportProgress:true,
      responseType:'text'
    });

    return this.httpClient.request(req);
  }
}
