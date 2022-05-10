import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarComponent } from './components/car/car.component';
import { ComicComponent } from './components/comic/comic.component';
import { FoodComponent } from './components/food/food.component';
import { IndexComponent } from './components/index/index.component';
import { HealthyComponent } from './components/healthy/healthy.component';
import { MovieComponent } from './components/movie/movie.component';
import { PetComponent } from './components/pet/pet.component';
import { RecreationComponent } from './components/recreation/recreation.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { TravelComponent } from './components/travel/travel.component';
import { RouterModule} from '@angular/router';
import {NzCarouselModule} from "ng-zorro-antd/carousel";
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    HomeComponent,
    CarComponent,
    ComicComponent,
    FoodComponent,
    IndexComponent,
    HealthyComponent,
    MovieComponent,
    PetComponent,
    RecreationComponent,
    ShoppingComponent,
    TravelComponent,
  ],
  imports: [
    HomeRoutingModule,
    RouterModule,
    NzCarouselModule,
    NzIconModule,
    CommonModule,

  ],
  entryComponents: []
})
export class HomeModule {

}
