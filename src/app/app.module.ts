import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoteListComponent } from './noteList/noteList.component';
import { NoteTextComponent } from './noteText/noteText.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
