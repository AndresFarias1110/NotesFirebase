import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NotesStoreService } from './../services/notes-store.service';
import { DialogNoteComponent } from './dialog-note/dialog-note.component';
import { NotesHomeComponent } from './notes-home/notes-home.component';
import { NotesRoutingModule } from './notes.routing';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';

@NgModule({
  declarations: [
    NotesHomeComponent,
    NotesDetailComponent,
    DialogNoteComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MatCardModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatDividerModule,
    MatToolbarModule
  ],
  providers: [
    NotesStoreService
  ]
})
export class NotesModule { }
