import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { QuizComponent } from './main-content/content/quiz/quiz.component';
import { MitraComponent } from './main-content/content/mitra/mitra.component';
import { MilipoinComponent } from './main-content/content/milipoin/milipoin.component';
import { TukarHadiahComponent } from './main-content/content/tukar-hadiah/tukar-hadiah.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes=
  [
    { path: 'Quiz', component: QuizComponent },
    { path: 'Mitra', component: MitraComponent},
    { path: 'Milipoin', component: MilipoinComponent },
    { path: 'Tukar-Hadiah', component: TukarHadiahComponent},
    { path: '', redirectTo: '/Quiz', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    CommonModule
  ],
    exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
