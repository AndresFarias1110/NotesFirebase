import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Note } from '../../models/note';

@Component({
  selector: 'app-dialog-note',
  templateUrl: './dialog-note.component.html',
  styleUrls: ['./dialog-note.component.scss']
})
export class DialogNoteComponent {
  form: FormGroup;
  isEmail = false;

  constructor(public dialogRef: MatDialogRef<DialogNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Note) {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(25), Validators.maxLength(150)]),
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  onSubmit = () => {
    const formValue = this.form.value;
    const pattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/);
    if (!pattern.test(formValue.title)) {
      this.dialogRef.close(formValue);
    } else {
      this.isEmail = true;
    }
  }

}
