import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitCapPipe } from './init-cap.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ToFetchService } from './to-fetch.service';
import { FilterWordsPipe } from './filter-words.pipe';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    InitCapPipe,
    FilterWordsPipe,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ToFetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
