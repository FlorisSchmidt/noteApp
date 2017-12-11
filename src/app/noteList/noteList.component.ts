import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noteList',
  templateUrl: './noteList.component.html',
  styleUrls: ['./noteList.component.css']
})
export class NoteListComponent implements OnInit {
  
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.getNotes();
  }

  private _notes=[];
  private _inputValue:string;

  private addNote(_inputValue:string){
    if(_inputValue==''){
      console.log("Empty input");
    } else {

    var newObject = {'name':_inputValue,'content':''};
    this._notes.push(newObject);
    localStorage.setItem('notes',JSON.stringify(this._notes));
    }
  }

  private removeNote(index:number){
    this._notes.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(this._notes));
  }

  private getNotes(){
    this._notes = JSON.parse(localStorage.getItem('notes'));
  }
}

// Pseudo code
// Get Notes
// Append new note
// Set notes