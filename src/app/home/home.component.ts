import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public imagePath;
  imgURL: any;
  public message: string;

  constructor(
    private router: Router,
    private service: HomeService
  ) { }

  ngOnInit(): void {
  }

  preview(files) {
    if (files.length === 0)
      return;
    let mimeType = files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.message = "Só suportamos imagens";
      return;
    }

    let reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);

    reader.onload = (_event) => {
      this.imgURL = reader.result;
      console.log(this.imgURL)
    }
  }

  uploadImg(){
    if(this.imgURL == undefined)
      return;

    this.service.uploadImg(this.imgURL).subscribe(res => {
      localStorage.setItem('imageTransformed', res);
      this.router.navigateByUrl('transformation')
    })
  }

}
