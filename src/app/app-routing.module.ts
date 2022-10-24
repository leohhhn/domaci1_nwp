import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntityExtractionComponent} from './entity-extraction/entity-extraction.component';
import {HomeComponent} from './home/home.component';
import {TextSimilarityComponent} from './text-similarity/text-similarity.component';

const routes: Routes = [
  {
    path:"ent_ext",
    component: EntityExtractionComponent
  },
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"text_sim",
    component: TextSimilarityComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
