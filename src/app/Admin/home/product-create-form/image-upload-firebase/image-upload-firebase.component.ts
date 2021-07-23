import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators'
import { ImageFirebaseCommonService } from 'src/app/Services/image-firebase-common.service';

@Component({
  selector: 'app-image-upload-firebase',
  templateUrl: './image-upload-firebase.component.html',
  styleUrls: ['./image-upload-firebase.component.scss']
})
export class ImageUploadFirebaseComponent implements OnInit {

  imageSrc : string ='../../../../../assets/img/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg';
  selectedImg:any= null;
  isSubmitted:boolean= false;
  imgLink: string ='';
  constructor(
    public storage: AngularFireStorage,
    public imageLinkCommon: ImageFirebaseCommonService,
    public toatrs: ToastrService
    
  ) { }
  formTemplate= new FormGroup({
    caption: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
  }
  showPreview(event: any){
    if(event.target.files && event.target.files[0]){
      const render= new FileReader();
      render.onload= (e:any)=> this.imageSrc= e.target.result;
      render.readAsDataURL(event.target.files[0]);
      this.selectedImg = event.target.files[0];
    }else{
      this.imageSrc='../../../../../assets/img/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg';
    }
  }
  onSubmit(formValue:any){
    console.log(formValue);
    this.isSubmitted= true;
    if(this.formTemplate.valid){
      var filePath= `${this.selectedImg.name}_${new Date().getTime()}`;
      const fileRef= this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImg).snapshotChanges().pipe(
        finalize(()=>{
          fileRef.getDownloadURL().subscribe((url)=>{
            formValue['imageUrl'] = url;
            console.log(url);
            this.imgLink= url
            // this.service.insertImageDetails(formValue);
            this.imageLinkCommon.imageLinkShareParent.next(url);
          })
        })
      ).subscribe();
        this.toatrs.success('Upload Image to Firebase Success !')
    }else{
      this.toatrs.error('Upload Image to Firebase Fail !')
    }
  }

}
