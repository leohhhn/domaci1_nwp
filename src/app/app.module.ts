import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntityExtractionComponent } from './entity-extraction/entity-extraction.component';
import { HomeComponent } from './home/home.component';
import { TextSimilarityComponent } from './text-similarity/text-similarity.component';

@NgModule({
  declarations: [
    AppComponent,
    EntityExtractionComponent,
    HomeComponent,
    TextSimilarityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
