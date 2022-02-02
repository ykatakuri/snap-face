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
  buttonText!: string;
  isSnapped!: boolean;

  ngOnInit(): void {
    this.title = "John Doe";
    this.description = "L'homme le plus recherché du monde."
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageURL = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.buttonText = "Oh Snap!";
    this.isSnapped = false;
  }

  onSnap() {
    this.isSnapped = !this.isSnapped;
    if (this.isSnapped) {
      this.snaps++;
      this.buttonText = "Oops, un Snap!";
    }else {
      this.snaps --;
      this.buttonText = "Oh Snap!";
    }
  }
}
