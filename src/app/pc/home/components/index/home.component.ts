import {Component, OnInit} from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit{
  array = [1, 2, 3, 4];
  constructor() {}
  ngOnInit() {}
}
