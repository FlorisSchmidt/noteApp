import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noteList',
  templateUrl: './noteList.component.html',
  styleUrls: ['./noteList.component.css']
})
export class NoteListComponent implements OnInit {
  constructor() {
    for(let x=0;x<localStorage.length;x++){
      this.notes[x]=localStorage.key(x);
      this.notesContent[x]=localStorage.getItem(this.notes[x]);
    }
  }

  ngOnInit() {
  }
  notes: string[]=[];
  notesContent=[];
  key: string = '';

  addNote(key:string,content:string) {
    if(key == ''){
      alert("Key is empty");
      return 1;
    }
    if(localStorage.getItem(key)!=undefined){
      alert("It exists already!");
      return 2;
    }
    this.notes.push(key);
    localStorage.setItem(key,content);
    }
  
  removeNote(index:number) {
    let key=localStorage.key(index);
    localStorage.removeItem(key);
    this.notes.splice(index,1);
    this.notesContent.splice(index,1)
  }
}