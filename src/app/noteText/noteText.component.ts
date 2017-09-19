import { Component, OnInit } from '@angular/core';

import { NoteListComponent } from '../noteList/noteList.component';

import { DataService } from '../data.service';

@Component({
  selector: 'app-noteText',
  templateUrl: './noteText.component.html',
  styleUrls: ['./noteText.component.css']
})
export class NoteTextComponent implements OnInit {

  constructor(private DataService: DataService) {
   }

  ngOnInit() {
  }
  save() {

  }
}
