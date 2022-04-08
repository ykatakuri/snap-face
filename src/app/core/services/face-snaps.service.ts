import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, map, Observable, switchMap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private httpClient: HttpClient) {}

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.httpClient.get<FaceSnap[]>("http://localhost:3000/facesnaps");
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.httpClient.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }

  snapFaceSnapById(faceSnapId: number, isSnapped: boolean): Observable<FaceSnap> {

    return this.getFaceSnapById(faceSnapId).pipe(
      map(
        faceSnap => ({
          ...faceSnap,
          snaps: faceSnap.snaps + (isSnapped ? 1 : -1)
        })
      ),
      switchMap(updatedFaceSnap => this.httpClient.put<FaceSnap>(
        `http://localhost:3000/facesnaps/${faceSnapId}`,
        updatedFaceSnap)
      )
    );
  }

  addFaceSnap(formData: {title: string, description: string, imageUrl: string, location: string}): Observable<FaceSnap> {
    return this.getAllFaceSnaps().pipe(
      map(facesnaps => [...facesnaps].sort((a,b) => a.id - b.id)),
      map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
      map(previousFacesnap => ({
         ...formData,
         snaps: 0,
         createdDate: new Date(),
         id: previousFacesnap.id + 1
     })),
     switchMap(newFacesnap => this.httpClient.post<FaceSnap>(
         'http://localhost:3000/facesnaps',
         newFacesnap)
     )
 );
  }
}
