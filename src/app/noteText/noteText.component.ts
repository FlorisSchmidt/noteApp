import { Component, OnInit } from '@angular/core';

import { NoteListComponent } from '../noteList/noteList.component';

@Component({
  selector: 'app-noteText',
  templateUrl: './noteText.component.html',
  styleUrls: ['./noteText.component.css']
})
export class NoteTextComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }
  NoteListComponent = new NoteListComponent;
  text = this.NoteListComponent.notes[0];
  
  save() {
  }
}
