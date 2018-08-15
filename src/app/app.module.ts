import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UrlLinkPipe } from './url-link.pipe';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlLinkPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
