import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 350,
      location: 'Toulouse',
    },
    {
      id: 2,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'New York',
    },
    {
      id: 3,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 0,
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);

    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
        return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, isSnapped: boolean): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);

    if (isSnapped) {
      faceSnap.snaps++;
    } else {
      faceSnap.snaps--;
    }
  }

  addFaceSnap(formData: {title: string, description: string, imageUrl: string, location: string}): void {
    if (formData) {
      const lastFaceSnapId = this.faceSnaps[this.faceSnaps.length -1].id;
      const newFaceSnap = {
        ...formData,
        id: lastFaceSnapId + 1,
        createdDate: new Date(),
        snaps: 0
      };

      console.log(newFaceSnap);

      this.faceSnaps.push(newFaceSnap);
    }
  }
}
