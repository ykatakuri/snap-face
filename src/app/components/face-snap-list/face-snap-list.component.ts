import { NumberSymbol } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { FaceSnap } from 'src/app/models/face-snap.model';
import { FaceSnapsService } from 'src/app/services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  
  // Destroy observable - Step 2 
  private destroy$!: Subject<boolean>;

  //interval$!: Observable<number>;

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    // Destroy observable - Step 3
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();

    interval(1000).pipe(
      // Destroy observable - Step 5
      takeUntil(this.destroy$),
      tap(console.log)
    );
  }

  // Destroy observable - Step 1
  ngOnDestroy(): void {
    // Destroy observable - Step 4
    this.destroy$.next(true);
  }

}
