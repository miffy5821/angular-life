import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeModule } from './pc/home/home.module';
import { HeaderComponent } from './pc/header/header.component';
import { FooterComponent } from './pc/footer/footer.component';
import {CommonModule} from './pc/common/common.module';
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(en);
// import { HomeComponent } from './pc/home/home.component';
import { CarComponent } from './pc/home/components/car/car.component';
import { ComicComponent } from './pc/home/components/comic/comic.component';
import { FoodComponent } from './pc/home/components/food/food.component';
import { HealthyComponent } from './pc/home/components/healthy/healthy.component';
import { MovieComponent } from './pc/home/components/movie/movie.component';
import { PetComponent } from './pc/home/components/pet/pet.component';
import { RecreationComponent } from './pc/home/components/recreation/recreation.component';
import { ShoppingComponent } from './pc/home/components/shopping/shopping.component';
import { TravelComponent } from './pc/home/components/travel/travel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // HomeComponent,
    CarComponent,
    ComicComponent,
    FoodComponent,
    HealthyComponent,
    MovieComponent,
    PetComponent,
    RecreationComponent,
    ShoppingComponent,
    TravelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    // HomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
