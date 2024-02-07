import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//lazy loading : an feature for performance while i call or click on the module it loaded to work

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  // we have to types ForRoot & ForChild ? what is the difference !

  //For root Typically used in the root application module (AppModule) to
  // initialize the router and provide the primary routing configuration.

  

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
