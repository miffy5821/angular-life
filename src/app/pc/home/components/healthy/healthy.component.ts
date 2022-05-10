import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-healthy',
  templateUrl: './healthy.component.html',
  styleUrls: ['./healthy.component.less']
})
export class HealthyComponent implements OnInit{
  array = [1, 2, 3, 4];
  constructor() {}
  ngOnInit() {}
}
