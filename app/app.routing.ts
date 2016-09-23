import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

const appRoutes: Routes = [
  {
      path: '', 
      redirectTo: '/list', 
      pathMatch: 'full',
  },
  {
      path: 'list',
      component: ListComponent
  },
  {
      path: 'add',
      component: AddComponent
  }
];
export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
