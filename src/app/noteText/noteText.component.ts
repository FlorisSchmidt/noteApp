import { Component, OnInit } from '@angular/core';
import * as marked from 'marked';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noteText',
  templateUrl: './noteText.component.html',
  styleUrls: ['./noteText.component.css']
})
export class NoteTextComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  private editable:boolean;
  private button:string;
  private content:string;
  private marked:string;
  private id:number;
  private sub:any;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('i');
    })
    this.content = localStorage.getItem(localStorage.key(this.id));
    this.marked = marked(this.content);
    this.button='EDIT';
    this.editable=false;
  }

  save(){
    localStorage.setItem(localStorage.key(this.id), this.content);
    this.marked = marked(this.content);
  }

  edit(){
    this.editable ? this.editable=false: this.editable=true;
    this.editable ? this.button='SAVE': this.button='EDIT';
  }
}
