import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoteListComponent } from './noteList/noteList.component';
import { NoteTextComponent } from './noteText/noteText.component';
import { DataService } from './data.service';

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
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
