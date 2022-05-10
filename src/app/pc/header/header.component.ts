import {Component, OnInit} from '@angular/core';
import { CommonService } from '../service/common.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit{
  public arrList = [
    {menuNameCn: 'home', url : '/home/index'},
    {menuNameCn: '娱乐', url : '/home/recreation'},
    {menuNameCn: '购物', url : '/home/shopping'},
    {menuNameCn: '汽车', url : '/home/car'},
    {menuNameCn: '动漫', url : '/home/comic'},
    {menuNameCn: '电影', url : '/home/movie'},
    {menuNameCn: '美食', url : '/home/food'},
    {menuNameCn: '健康', url : '/home/healthy'},
    {menuNameCn: '旅行', url : '/home/travel'},
  ];
  constructor(
    public common: CommonService,
    public router: Router,
  ) {}

  ngOnInit() {}
}
