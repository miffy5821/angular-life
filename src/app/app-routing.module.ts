import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pc/home/components/index/home.component';
import { CarComponent } from './pc/home/components/car/car.component';
import { ComicComponent } from './pc/home/components/comic/comic.component';
import { FoodComponent } from './pc/home/components/food/food.component';
import { HealthyComponent } from './pc/home/components/healthy/healthy.component';
import { MovieComponent } from './pc/home/components/movie/movie.component';
import { PetComponent } from './pc/home/components/pet/pet.component';
import { RecreationComponent } from './pc/home/components/recreation/recreation.component';
import { ShoppingComponent } from './pc/home/components/shopping/shopping.component';
import { TravelComponent } from './pc/home/components/travel/travel.component';
import { RegisterComponent } from './pc/common/register/register.component';

const routes: Routes = [
  // {path：'', redirectTo: 'home', pathMath: 'full'},
{path: 'car', component: CarComponent},
{path: 'comic', component: ComicComponent},
{path: 'food', component: FoodComponent},
{path: 'healthy', component: HealthyComponent},
{path: 'movie', component: MovieComponent},
{path: 'pet', component: PetComponent},
{path: 'recreation', component: RecreationComponent},
{path: 'shopping', component: ShoppingComponent},
{path: 'travel', component: TravelComponent},
{path: 'register', component: RegisterComponent},
{path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
