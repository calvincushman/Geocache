import { UserFormComponent } from './user-form/user-form.component';
import { Routes, Router, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
  {
    path: '',
    component: UserFormComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
