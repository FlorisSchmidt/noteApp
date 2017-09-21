import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import * as marked from 'marked';

@Component({
  selector: 'app-noteList',
  templateUrl: './noteList.component.html',
  styleUrls: ['./noteList.component.css']
})
export class NoteListComponent implements OnInit {
  
  constructor(private DataService: DataService) {
    this.refillNotes();
    this.setActiveIndex(0);
    this.isStorageEmpty();
  }

  ngOnInit() {
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
    this.DataService.activeContent='';
    if(this.DataService.activeContent!=undefined){
      this.DataService.markedContent=marked(this.DataService.activeContent);
    }
    this.inputValue='';
    this.refillNotes();
    this.isStorageEmpty();
  }

  private setActiveIndex(index:number){
    this.DataService.activeIndex=index;
    this.DataService.activeContent=localStorage.getItem(localStorage.key(index));
    if(this.DataService.activeContent!=undefined){
      this.DataService.markedContent=marked(this.DataService.activeContent);
    }
  }

  private removeNote(index:number) {
    let key=localStorage.key(index);
    localStorage.removeItem(key);
    this.notes.splice(index,1);
    this.setActiveIndex(0);
    this.isStorageEmpty();
  }

  private refillNotes(){
    for(let x=0;x<localStorage.length;x++){
      this.notes[x]=localStorage.key(x);
    }
  }

  private isStorageEmpty(){
    if (localStorage.length==0){
      this.DataService.storageEmpty = true;
    } else {
      this.DataService.storageEmpty = false;
    }
  }
}