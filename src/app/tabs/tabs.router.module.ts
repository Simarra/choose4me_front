import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AddPage } from '../add/add.page';
import { EditPage } from '../edit/edit.page';
import { DetailsPage } from '../details/details.page';
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            component: HomePage
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            component: HomePage
          }
        ]
      },
      {
        path: 'details',
        children: [
          {
            path: '',
            component: DetailsPage
          }
        ]
      },
      {
        path: 'add',
        children: [
          {
            path: '',
            component: AddPage
          }
        ]
      },
      {
        path: ':id',
        outlet: 'edit',
        component: EditPage
      },
      {
        path: ':id',
        outlet: 'details',
        component: DetailsPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}