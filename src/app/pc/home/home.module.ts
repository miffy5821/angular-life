import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarComponent } from './components/car/car.component';
import { ComicComponent } from './components/comic/comic.component';
import { FoodComponent } from './components/food/food.component';
import { HealthyComponent } from './components/healthy/healthy.component';
import { MovieComponent } from './components/movie/movie.component';
import { PetComponent } from './components/pet/pet.component';
import { RecreationComponent } from './components/recreation/recreation.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { TravelComponent } from './components/travel/travel.component';
import { RouterModule} from '@angular/router';
// @ts-ignore
// import { NzCarouselModule } from 'ng-zorro-antd';
// import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@NgModule({
  declarations: [
    HomeComponent,
    CarComponent,
    ComicComponent,
    FoodComponent,
    HealthyComponent,
    MovieComponent,
    PetComponent,
    RecreationComponent,
    ShoppingComponent,
    TravelComponent,
  ],
  imports: [
    HomeRoutingModule,
    // NzCarouselModule,
    RouterModule
  ],
  entryComponents: []
})
export class HomeModule {

}
