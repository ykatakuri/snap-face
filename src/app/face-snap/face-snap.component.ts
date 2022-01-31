import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageURL!: string;

  ngOnInit(): void {
    this.title = "John Doe";
    this.description = "L'homme le plus recherché du monde."
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageURL = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  }
}
