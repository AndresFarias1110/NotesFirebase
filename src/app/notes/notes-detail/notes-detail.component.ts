import { Note } from '../../models/note';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.scss']
})
export class NotesDetailComponent implements OnInit {
  @Input() note: { id: string, data: any } | null = null;
  @Output() edit = new EventEmitter<Note>();
  @Output() delete = new EventEmitter<any>();
  @Output() active = new EventEmitter<any>();
  @Output() archived = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  noteDelete = () => {
    this.delete.emit(this.note?.id);
  }

  revert = () => {
    this.active.emit(this.note?.id);
  }

  archive = () => {
    this.archived.emit(this.note?.id);
  }

}
