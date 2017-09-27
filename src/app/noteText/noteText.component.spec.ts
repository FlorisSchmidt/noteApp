import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteTextComponent } from './noteText.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MarkPipe } from '../mark.pipe';

import { ActivatedRoute, Router } from '@angular/router';

describe('NoteTextComponent', () => {
  let component: NoteTextComponent;
  let fixture: ComponentFixture<NoteTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule ],
      declarations: [ NoteTextComponent,MarkPipe ],
      providers: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

describe('NoteTextComponent functions', ()=>{
afterEach(()=>{
  localStorage.clear();
})

  it('save should store content at active ID', ()=>{
    let testObject = new NoteTextComponent(this.ActivatedRoute, this.Router);
    localStorage.setItem('mock key', 'mock data');
    testObject.id = 0;
    testObject.content = 'new mock data';
    testObject.save();
    expect(localStorage.getItem('mock key')).toBe('new mock data');
  })
})