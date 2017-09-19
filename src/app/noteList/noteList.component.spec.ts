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
      declarations: [ NoteListComponent],
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

describe('constructor', () => {
  it('constructor should create an array with the same length as localStorage', () => {
    let testObject = new NoteListComponent(this.DataService);
    expect(testObject.notes.length).toBe(localStorage.length);
    expect(testObject.notesContent.length).toBe(localStorage.length);
  })
})

describe('removeNote function', () => {
  let testObject = new NoteListComponent(this.DataService);
  let testIndex = 0;
  
  it('should remove the localStorage with the given key',() => {
    localStorage.setItem('mock key', 'mock data');
    console.log(localStorage.length);
    expect(localStorage.key(0)).toBe('mock key');
    testObject.removeNote(testIndex);
    expect(localStorage.key(0)).toBe(null);
  })

  it('should remove the note from the notes array',() => {
    testObject.notes[testIndex] = 'mock data';
    testObject.removeNote(testIndex);
    expect(testObject.notes[0]).toBeUndefined();
    
  })

  it('should remove the content from the noteContent array', () => {
    testObject.notesContent[testIndex] = 'mock data';
    testObject.removeNote(testIndex);
    expect(testObject.notesContent[0]).toBeUndefined();
  })
})

describe('addNote function', () => {
  let testObject = new NoteListComponent(this.DataService);
  
  beforeEach(() => {
    testObject.addNote('mock key', 'mock content');
  })

  afterEach(() => {
    testObject.removeNote(0); // mag dit?
  })

  it('should add the key to notes array', () => {
    expect(testObject.notes[0]).toBe('mock key');
  })

  it('should add the key and content to localStorage', () => {
    expect(localStorage.getItem('mock key')).toBe('mock content');
  })

  it('should return an error if the key is empty', () => {
    expect(testObject.addNote('','')).toBe(1);
  })

  it('should return an error if the key exists', () => {
    testObject.addNote('mock key', '');
    expect(testObject.addNote('mock key', '')).toBe(2);
  })
})

describe('addNote exceptions', () => {
  let testObject = new NoteListComponent(this.DataService);
  it('should alert the user if the input field is empty', () => {
    testObject.addNote('','');
    expect(testObject.notes.length).toBe(0);
  })

  it('should alert the user if the input has been entered before', () => {
  })
})