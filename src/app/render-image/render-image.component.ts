import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-render-image',
  templateUrl: './render-image.component.html',
  styleUrls: ['./render-image.component.sass']
})
export class RenderImageComponent implements OnInit {

  img;
  emotion;
  constructor() { }

  ngOnInit(): void {
    this.img = localStorage.getItem('imageTransformed')
    this.emotion = localStorage.getItem('emotion')
  }



}
