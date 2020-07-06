import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormSearchComponent } from './form-search/form-search.component';
import { MainContentComponent } from './main-content/main-content.component';
import { KategoriComponent } from './main-content/kategori/kategori.component';
import { ContentComponent } from './main-content/content/content.component';
import { QuizComponent } from './main-content/content/quiz/quiz.component';
import { MitraComponent } from './main-content/content/mitra/mitra.component';
import { MilipoinComponent } from './main-content/content/milipoin/milipoin.component';
import { TukarHadiahComponent } from './main-content/content/tukar-hadiah/tukar-hadiah.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FormSearchComponent,
    MainContentComponent,
    KategoriComponent,
    ContentComponent,
    QuizComponent,
    MitraComponent,
    MilipoinComponent,
    TukarHadiahComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
