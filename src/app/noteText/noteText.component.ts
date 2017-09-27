import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-noteText',
  templateUrl: './noteText.component.html',
  styleUrls: ['./noteText.component.css']
})
export class NoteTextComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {}

  private _editable:boolean;
  private _button:string;
  public content:string;
  public id:number;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('i');
    })
    this.router.events.subscribe(event => {
      this.content = localStorage.getItem(localStorage.key(this.id))
    });
    this.content = localStorage.getItem(localStorage.key(this.id))

    this._button='EDIT';
    this._editable=false;
  }

  save(){
    localStorage.setItem(localStorage.key(this.id), this.content);
  }

  edit(){
    this._editable ? this._editable=false: this._editable=true;
    this._editable ? this._button='SAVE': this._button='EDIT';
  }
}
