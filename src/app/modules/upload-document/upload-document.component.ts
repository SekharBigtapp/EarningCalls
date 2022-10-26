import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './file-uploader-service.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';
 
@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {
 
  shortLink: string = "";
    loading: boolean = false;
 // Flag variable
    file: any; // Variable to store file
    files: any[] = [];
    // Inject service 
    constructor(private fileUploadService: FileUploadService) { }
  
    ngOnInit(): void {
    }
  
    // On file Select
    onFileChange(event:any) {
        this.file = event.target.files[0];
        console.log(this.file.name);
    }

    
  
    // OnClick of button Upload
    onUpload() {
        this.loading = !this.loading;
        console.log(this.file);
        this.fileUploadService.upload(this.file).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {
  
                    // Short link via api response
                    this.shortLink = event.link;
  
                    this.loading = false; // Flag variable 
                }
            }
        );
    }

}