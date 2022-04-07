import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { FaceSnap } from 'src/app/models/face-snap.model';
import { FaceSnapsService } from 'src/app/services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  
  faceSnap$!: Observable<FaceSnap>;

  buttonText!: string;
  isSnapped!: boolean;

  constructor(private faceSnapService: FaceSnapsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.buttonText = "Oh Snap!";
    this.isSnapped = false;
    const snapId = +this.route.snapshot.params["id"];
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(snapId);
  }

  onSnap(faceSnapId: number) {
    this.isSnapped = !this.isSnapped;
    if (this.isSnapped) {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, this.isSnapped).pipe(
        tap(() => this.buttonText = 'Oops, unSnap!')
      );
    }else {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, this.isSnapped).pipe(
        tap(() => this.buttonText = 'Oh Snap!')
      );
    }
  }

}
