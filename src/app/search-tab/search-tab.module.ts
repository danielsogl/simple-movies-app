import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchTabPage } from './search-tab.page';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: SearchTabPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
  ],
  declarations: [SearchTabPage],
})
export class SearchTabPageModule {}
