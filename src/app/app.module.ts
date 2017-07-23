import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NewGeocacheComponent } from './new-geocache/new-geocache.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    NewGeocacheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
