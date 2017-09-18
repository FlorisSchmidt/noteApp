import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTextComponent } from './noteText.component';

import { FormsModule } from '@angular/forms';

describe('NoteTextComponent', () => {
  let component: NoteTextComponent;
  let fixture: ComponentFixture<NoteTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ NoteTextComponent ]
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
