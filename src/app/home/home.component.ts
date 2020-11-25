import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public imagePath;
  imgURL: any;
  public message: string;
  loading: boolean;

  constructor(
    private router: Router,
    private service: HomeService,
    private toastr: ToastrService
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
    this.loading = true;
    this.service.uploadImg(this.imgURL).subscribe(res => {
      console.log(res);
      if(res == 500) {
        this.loading = false;
        this.toastr.error('Não conseguimos transformar essa imagem, pode mandar outra?')

      } else{
        localStorage.setItem('imageTransformed', res.img);
        localStorage.setItem('emotion', res.sentiment);
        this.loading = false;
        this.router.navigateByUrl('transformation')
      }
    })
  }

}
