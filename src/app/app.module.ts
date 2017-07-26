import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgFor, NgIf, CurrencyPipe } from '@angular/common';
import './rxjs-extensions';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideMenuDirective } from './slide-menu.directive';
import { ClientModule } from 'app/client/client.module';

@NgModule({
    declarations: [
        AppComponent,
        SlideMenuDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
