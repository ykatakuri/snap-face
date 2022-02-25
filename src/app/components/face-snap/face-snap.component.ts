import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnapsService } from 'src/app/services/face-snaps.service';
import { FaceSnap } from '../../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  isSnapped!: boolean;

  constructor(private faceSnapService: FaceSnapsService, private router: Router) {}

  ngOnInit(): void {
    this.buttonText = "Oh Snap!";
    this.isSnapped = false;
  }

  onSnap() {
    this.isSnapped = !this.isSnapped;
    if (this.isSnapped) {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, this.isSnapped);
      this.buttonText = "Oops, un Snap!";
    }else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, this.isSnapped);
      this.buttonText = "Oh Snap!";
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
