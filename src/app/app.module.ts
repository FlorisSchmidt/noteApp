import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NoteListComponent } from './noteList/noteList.component';
import { NoteTextComponent } from './noteText/noteText.component';
import { RouterModule } from '@angular/router';
import { MarkPipe } from './mark.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteTextComponent,
    MarkPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
      path: 'note/:i', 
      component: NoteTextComponent 
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
