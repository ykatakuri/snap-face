import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  isSnapped!: boolean;

  ngOnInit(): void {
    this.buttonText = "Oh Snap!";
    this.isSnapped = false;
  }

  onSnap() {
    this.isSnapped = !this.isSnapped;
    if (this.isSnapped) {
      this.faceSnap.snaps++;
      this.buttonText = "Oops, un Snap!";
    }else {
      this.faceSnap.snaps --;
      this.buttonText = "Oh Snap!";
    }
  }
}
