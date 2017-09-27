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
    this.refillNotes();
  }

  private notes:string[]=[];
  private inputValue:string = '';

  private addNote(input:string) {
    if(input==''){
      alert("Input is empty");
      return 1;
    }
    if(localStorage.getItem(input)!=undefined){
      alert("It exists already!");
      return 2;
    }
    localStorage.setItem(input,'');
    this.inputValue='';
    this.refillNotes();
    this.router.navigate(['/']);
  }

  private removeNote(index:number) {
    let key=localStorage.key(index);
    localStorage.removeItem(key);
    this.notes.splice(index,1);
    this.router.navigate(['/']);
  }

  private refillNotes(){
    for(let x=0;x<localStorage.length;x++){
      this.notes[x]=localStorage.key(x);
    }
  }
}