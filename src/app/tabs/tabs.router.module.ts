import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'movies',
        children: [
          {
            path: '',
            loadChildren: '../movies-tab/movies-tab.module#MoviesTabPageModule',
          },
        ],
      },
      {
        path: 'tv-shows',
        children: [
          {
            path: '',
            loadChildren: '../tv-shows-tab/tv-shows-tab.module#TvShowsTabPageModule',
          },
        ],
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: '../search-tab/search-tab.module#SearchTabPageModule',
          },
        ],
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: '../settings-tab/settings-tab.module#SettingsTabPageModule',
          },
        ],
      },
      {
        path: '',
        redirectTo: '/tabs/movies',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/movies',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
