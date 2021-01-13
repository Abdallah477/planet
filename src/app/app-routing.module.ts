import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'mars',
    loadChildren: () => import('./pages/mars/mars.module').then( m => m.MarsPageModule)
  },
  {
    path: 'merkurius',
    loadChildren: () => import('./pages/merkurius/merkurius.module').then( m => m.MerkuriusPageModule)
  },
  {
    path: 'pluto',
    loadChildren: () => import('./pages/pluto/pluto.module').then( m => m.PlutoPageModule)
  },
  {
    path: 'tellus',
    loadChildren: () => import('./pages/tellus/tellus.module').then( m => m.TellusPageModule)
  },
  {
    path: 'neptunus',
    loadChildren: () => import('./pages/neptunus/neptunus.module').then( m => m.NeptunusPageModule)
  },
  {
    path: 'venus',
    loadChildren: () => import('./pages/venus/venus.module').then( m => m.VenusPageModule)
  },
  {
    path: 'uranus',
    loadChildren: () => import('./page/uranus/uranus.module').then( m => m.UranusPageModule)
  },
  {
    path: 'saturnus',
    loadChildren: () => import('./page/saturnus/saturnus.module').then( m => m.SaturnusPageModule)
  },
  {
    path: 'jupiter',
    loadChildren: () => import('./page/jupiter/jupiter.module').then( m => m.JupiterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
