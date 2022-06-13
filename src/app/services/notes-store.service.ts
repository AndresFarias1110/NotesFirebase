import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { Note } from './../models/note';

@Injectable({
  providedIn: 'root'
})
export class NotesStoreService {
  colletion = 'notes';
  userId = '';
  constructor(private firestore: AngularFirestore,) {
    const userString: any = localStorage.getItem('user');
    this.userId = JSON.parse(userString).uid;
  }

  getNotes = (status: number): Observable<any> => {
    return this.firestore.collection(this.colletion, ref => ref.where('status', '==', status).where('userId', '==', this.userId))
      .snapshotChanges();
  }

  createNote = (note: Note) => {
    note.createdAt = new Date().toISOString();
    note.status = 1;
    note.userId = this.userId;
    this.firestore.collection(this.colletion)
      .add(note);
  }

  changeStatus = (idNote: string, status: number) => {
    return this.firestore
      .collection(this.colletion)
      .doc(idNote)
      .set({ status }, { merge: true });
  }
}
