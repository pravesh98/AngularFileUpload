import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-upload-component',
  templateUrl: './detail-upload-component.component.html',
  styleUrls: ['./detail-upload-component.component.css']
})
export class DetailUploadComponentComponent implements OnInit {

  @Input() fileUpload: string;
  constructor() { }

  ngOnInit() {
  }

}
