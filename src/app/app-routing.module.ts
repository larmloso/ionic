import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'listpage',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'listpage',
    loadChildren: () => import('./listpage/listpage.module').then( m => m.ListpagePageModule)
  },
  {
    path: 'showlist/:sendMusic',
    loadChildren: () => import('./showlist/showlist.module').then( m => m.ShowlistPageModule)
  },
  {
    path: 'shopping',
    loadChildren: () => import('./shopping/shopping.module').then( m => m.ShoppingPageModule)
  },
  {
    path: 'shopping-details/:dataObj',
    loadChildren: () => import('./shopping-details/shopping-details.module').then( m => m.ShoppingDetailsPageModule)
  },

  {
    path: 'aec',
    loadChildren: () => import('./aec/aec.module').then( m => m.AECPageModule)
  },

  {
    path: 'aec-details/:dataObj',
    loadChildren: () => import('./aec-details/aec-details.module').then( m => m.AecDetailsPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
