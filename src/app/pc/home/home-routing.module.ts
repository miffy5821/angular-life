import { NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CarComponent} from "./components/car/car.component";
import {ComicComponent} from "./components/comic/comic.component";
import {FoodComponent} from "./components/food/food.component";
import {HealthyComponent} from "./components/healthy/healthy.component";
import {MovieComponent} from "./components/movie/movie.component";
import {PetComponent} from "./components/pet/pet.component";
import {RecreationComponent} from "./components/recreation/recreation.component";
import {ShoppingComponent} from "./components/shopping/shopping.component";
import {TravelComponent} from "./components/travel/travel.component";
import {RegisterComponent} from "../common/register/register.component";
import {HomeComponent} from "./home.component";


const routes: Routes = [

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
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {

}
