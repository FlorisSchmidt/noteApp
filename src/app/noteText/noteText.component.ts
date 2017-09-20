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
  private editable: boolean = false;
  private button: string = 'EDIT';

  ngOnInit() {
  }

  save(){
    localStorage.setItem(localStorage.key(this.DataService.activeIndex), this.DataService.activeContent);
  }

  edit(){
    this.editable ? this.editable=false : this.editable=true;
    this.editable ? this.button='SAVE' : this.button='EDIT';
  }
}
