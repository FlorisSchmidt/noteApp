import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteListComponent } from './noteList.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { NoteTextComponent } from '../noteText/noteText.component';

describe('NoteListComponent', () => {
  let component: NoteListComponent;
  let fixture: ComponentFixture<NoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,RouterTestingModule ],
      declarations: [NoteListComponent],
      providers: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

describe('addNote function', () => {
  beforeEach( ()=>{
    this.Router = Router;
    this.testObject = new NoteListComponent(this.Router);
  })

  afterEach( ()=> {
    localStorage.clear();
    this.testObject.notes = [];
  })

  it('should throw an error if input if empty or exists', () => {
    expect(this.testObject.addNote('')).toBe(1);
    expect(this.testObject.addNote('mock')).toBe(2);
  })

  it('should add the note to localStorage and call refillNotes', ()=>{
    this.testObject.addNote('mock');
    expect(localStorage.key(0)).toBe('mock');
  })

  it('should make the notes array equal to the localStorage', ()=>{
    this.testObject.addNote('Test 1');
    expect(this.testObject.notes[0]).toBe('Test 1');
  })

  it('should remove the item from the localStorage and notes array', ()=>{
    expect(localStorage.length).toBe(0);
    this.testObject.addNote('mock 1');
    expect(this.testObject.notes[0]).toBe('mock 1')
    expect(this.testObject.notes[1]).toBeUndefined();
  })
})

describe('remove function', ()=>{
  beforeEach( ()=>{
    this.Router = Router;
    this.testObject = new NoteListComponent(this.Router);
    expect(localStorage.length).toBe(0);
    this.testObject.addNote('mock 1');
  })

  afterEach( ()=> {
    localStorage.clear();
    this.testObject.notes = [];
  })

  it('should remove the item from the localStorage and from the notes array', ()=>{
    expect(localStorage.length).toBe(1);
    this.testObject.removeNote(0);
    expect(localStorage.length).toBe(0);
    expect(this.testObject.notes[0]).toBeUndefined();
  })
})

describe('refillNotes function', ()=>{
  beforeEach( ()=>{
    this.testObject = new NoteListComponent(this.Router);
    localStorage.clear();
    localStorage.setItem('mock key 1', 'mock string 1');
  })

  afterEach( ()=>{
    localStorage.clear();
  })
  
  it('should make notes array equal to localStorage', ()=>{
    this.testObject.refillNotes();
    expect(this.testObject.notes[0]).toBe('mock key 1');
  })
})