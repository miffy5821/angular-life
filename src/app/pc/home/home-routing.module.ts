import { NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CarComponent} from "./components/car/car.component";
import {ComicComponent} from "./components/comic/comic.component";
import {FoodComponent} from "./components/food/food.component";
import {IndexComponent} from "./components/index/index.component";
import { HealthyComponent } from './components/healthy/healthy.component';
import {MovieComponent} from "./components/movie/movie.component";
import {PetComponent} from "./components/pet/pet.component";
import {RecreationComponent} from "./components/recreation/recreation.component";
import {ShoppingComponent} from "./components/shopping/shopping.component";
import {TravelComponent} from "./components/travel/travel.component";

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
  {path: 'index', component: IndexComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full'},
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {

}
