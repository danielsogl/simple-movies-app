import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TvShowsTabPage } from './tv-shows-tab.page';

const routes: Routes = [
  {
    path: '',
    component: TvShowsTabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TvShowsTabPage]
})
export class TvShowsTabPageModule {}
