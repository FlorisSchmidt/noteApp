import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NoteListComponent } from './noteList/noteList.component';
import { NoteTextComponent } from './noteText/noteText.component';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { MarkPipe } from './mark.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NoteListComponent,
        NoteTextComponent,
        MarkPipe
      ],
      imports: [
        FormsModule,
        RouterModule.forRoot([
          {
          path: 'note/:i', 
          component: NoteTextComponent 
          }
        ])
      ],
    providers: [{provide: APP_BASE_HREF, useValue : '/' }],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
