import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { NotesStoreService } from './../../services/notes-store.service';
import { DialogNoteComponent } from './../dialog-note/dialog-note.component';
import { Note } from '../../models/note';

@Component({
  selector: 'app-notes-home',
  templateUrl: './notes-home.component.html',
  styleUrls: ['./notes-home.component.scss']
})
export class NotesHomeComponent implements OnInit {
  notes: any[] = [];
  deleted: any[] = [];
  archived: any[] = [];

  constructor(private dialog: MatDialog,
    public authService: AuthService,
    private notesService: NotesStoreService) {
    }

  ngOnInit(): void {
    this.initNotes();
  }

  initNotes = () => {
    this.notesService.getNotes(1).subscribe((res: Note[]) => {
      this.notes = res;
    });

    this.notesService.getNotes(0).subscribe((res: Note[]) => {
      this.deleted = res;
    });

    this.notesService.getNotes(2).subscribe((res: Note[]) => {
      this.archived = res;
    });
  }

  newNote = () => {
    const dialogRef = this.dialog.open(DialogNoteComponent, {
      width: '400px',
      data: {
        note: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: any) => {
        if (!result) {
          return;
        }
        delete result.note;
        this.notesService.createNote(result);
      });
  }

  noteDeleted = ($idNote: string) => {
    this.notesService.changeStatus($idNote, 0);
  }

  active = ($idNote: string) => {
    this.notesService.changeStatus($idNote, 1);
  }

  noteArchived = ($idNote: string) => {
    this.notesService.changeStatus($idNote, 2);
  }
}
