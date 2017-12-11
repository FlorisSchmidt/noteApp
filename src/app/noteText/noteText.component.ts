import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationStart, NavigationEnd } from '@angular/router';
import { Navigation } from 'selenium-webdriver';


@Component({
  selector: 'app-noteText',
  templateUrl: './noteText.component.html',
  styleUrls: ['./noteText.component.css']
})
export class NoteTextComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {}

  public content:string;
  public object;
  public id:number;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('i');
      this.getObject(this.id);
    })

    let object = JSON.parse(localStorage.getItem('notes'));
    this.content = object.content;
  }

  saveContent(){
    this.object[this.id].content = this.content;
    localStorage.setItem('notes', JSON.stringify(this.object));
  }

  getObject(index:number){
    this.object = JSON.parse(localStorage.getItem('notes'));
    this.content = this.object[index].content;
  }
}