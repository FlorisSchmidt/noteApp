import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteTextComponent } from './noteText.component';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

describe('NoteTextComponent', () => {
  let component: NoteTextComponent;
  let fixture: ComponentFixture<NoteTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ NoteTextComponent ],
      providers: [ DataService ]
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

describe('Save function', ()=>{
  it('should change mock data to new mock data', ()=>{
    localStorage.setItem('mock key', 'mock data');
    this.DataService = DataService;
    this.testObject = new NoteTextComponent(this.DataService);
    this.DataService.activeIndex = 0;
    this.DataService.activeContent = 'new mock data';
    this.testObject.save();
    expect(localStorage.getItem('mock key')).toBe('new mock data');
  })
})