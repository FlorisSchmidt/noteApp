import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-noteList',
  templateUrl: './noteList.component.html',
  styleUrls: ['./noteList.component.css']
})
export class NoteListComponent implements OnInit {
  constructor(private DataService: DataService) {
    for(let x=0;x<localStorage.length;x++){
      this.notes[x]=localStorage.key(x);
    }
    if(localStorage.length==0){
      this.DataService.activeIndex=undefined;
    } else {
      this.setActiveIndex(0);
    }
  }

  ngOnInit() {
  }

  public notes: string[]=[];
  private inputValue: string = '';

  addNote(input:string) {
    if(input == ''){
      alert("Key is empty");
      return 1;
    }
    if(localStorage.getItem(input)!=undefined){
      alert("It exists already!");
      return 2;
    }

    this.notes.push(input);
    this.inputValue = '';
    localStorage.setItem(input,"");
    this.setActiveIndex(localStorage.length-1);
  }
  
  removeNote(index:number) {
    let key=localStorage.key(index);
    localStorage.removeItem(key);
    this.notes.splice(index,1);

    if(localStorage.length>0){
      this.setActiveIndex(0);
    } else {
      this.setActiveIndex(undefined);
    }
  }

  setActiveIndex(index: number){
    this.DataService.activeIndex = index;
    this.DataService.activeContent = localStorage.getItem(localStorage.key(this.DataService.activeIndex));
  }
}