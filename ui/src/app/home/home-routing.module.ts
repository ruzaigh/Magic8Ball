import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'custom-message',
        loadChildren: () => import('./pages/custom-message/custom-message.module').then( m => m.CustomMessagePageModule)
      },
      {
        path: 'custom-ball',
        loadChildren: () => import('./pages/custom-ball/custom-ball.module').then( m => m.CustomBallPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
