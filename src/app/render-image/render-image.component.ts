import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-render-image',
  templateUrl: './render-image.component.html',
  styleUrls: ['./render-image.component.sass']
})
export class RenderImageComponent implements OnInit {

  img;

  constructor() { }

  ngOnInit(): void {
    this.img = localStorage.getItem('imageTransformed')
  }



}
