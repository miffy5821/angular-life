import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { HomeComponent } from './pc/home/home.component';
import { RegisterComponent } from './pc/common/register/register.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      // {path: '**', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: () => import('./pc/home/home.module').then(m => m.HomeModule)},
      {path: 'register', component: RegisterComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
