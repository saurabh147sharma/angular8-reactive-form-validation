import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ValidationMessagesComponent } from './Components/Validation/validation-messages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRouting } from './app.routing.module';
import { RegisterComponent } from './Components/Users/Register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ValidationMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ValidationMessagesComponent
  ]
})
export class AppModule { }
