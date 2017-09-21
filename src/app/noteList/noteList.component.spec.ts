import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteListComponent } from './noteList.component';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

describe('NoteListComponent', () => {
  let component: NoteListComponent;
  let fixture: ComponentFixture<NoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [NoteListComponent],
      providers: [ DataService ]
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
    this.DataService = DataService;
    this.testObject = new NoteListComponent(this.DataService);
  })

  afterEach( ()=> {
    localStorage.clear();
    this.testObject.notes = [];
  })

  it('should throw an error if input if empty or exists', () => {
    expect(this.testObject.addNote('')).toBe(1);
    this.testObject.addNote('mock');
    expect(this.testObject.addNote('mock')).toBe(2);
  })

  it('should add the note to localStorage and call refillNotes', ()=>{
    this.testObject.addNote('mock');
    expect(localStorage.key(0)).toBe('mock');
    
  })

  it('should make the notes array equal to the localStorage', ()=>{
    this.testObject.addNote('Test 1');
    this.testObject.addNote('Test 2');
    this.testObject.addNote('Test 3');
    this.testObject.removeNote(1);
    expect(this.testObject.notes[0]).toBe('Test 1');
    expect(this.testObject.notes[1]).toBe('Test 3');
  })

  it('should remove the item from the localStorage and notes array', ()=>{
    expect(localStorage.length).toBe(0);
    this.testObject.addNote('mock 1');
    this.testObject.addNote('mock 2');
    this.testObject.addNote('mock 3');
    this.testObject.removeNote(1);
    expect(this.testObject.notes[0]).toBe('mock 1')
    expect(this.testObject.notes[1]).toBe('mock 3')
    expect(localStorage.length).toBe(2);
    expect(this.testObject.notes[2]).toBeUndefined();
  })
})

describe('remove function', ()=>{
  beforeEach( ()=>{
    this.DataService = DataService;
    this.testObject = new NoteListComponent(this.DataService);
    expect(localStorage.length).toBe(0);
    this.testObject.addNote('mock 1');
    this.testObject.addNote('mock 2');
    this.testObject.addNote('mock 3');
    this.testObject.removeNote(1);
  })

  afterEach( ()=> {
    localStorage.clear();
    this.testObject.notes = [];
  })

  it('should remove the item from the localStorage', ()=>{
    expect(localStorage.length).toBe(2);
    expect(localStorage.getItem('mock 1')).toBeDefined();
    expect(localStorage.getItem('mock 3')).toBeDefined();
  })

  it('should remove the item from notes array', ()=>{
    expect(this.testObject.notes[0]).toBe('mock 1')
    expect(this.testObject.notes[1]).toBe('mock 3')
    expect(this.testObject.notes[2]).toBeUndefined();
  })
})

describe('refillNotes function', ()=>{
  beforeEach( ()=>{
    this.DataService = DataService;
    this.testObject = new NoteListComponent(this.DataService);

    localStorage.clear();
    localStorage.setItem('mock key 1', 'mock string 1');
    localStorage.setItem('mock key 2', 'mock string 2');
  })
  
  it('should make notes array equal to localStorage', ()=>{
    this.testObject.refillNotes();
    this.testObject.notes[0]='mock key 1';
    this.testObject.notes[1]='mock key 2';
  })
})

describe('isStorageEmpty function', ()=> {
  beforeEach( ()=>{
    this.DataService = DataService;
    this.testObject = new NoteListComponent(this.DataService);

    localStorage.clear();
    localStorage.setItem('mock key 1', 'mock string 1');
  })

  it('should check if the localStorage is empty', ()=>{
    this.testObject.isStorageEmpty();
    expect(this.DataService.storageEmpty).toBe(false);
    localStorage.clear();
    this.testObject.isStorageEmpty();
    expect(this.DataService.storageEmpty).toBe(true);
  })
})