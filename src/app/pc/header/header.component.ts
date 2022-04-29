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
    {menuNameCn: 'home', url : '/home'},
    {menuNameCn: '娱乐', url : '/recreation'},
    {menuNameCn: '购物', url : '/shopping'},
    {menuNameCn: '汽车', url : '/car'},
    {menuNameCn: '动漫', url : '/comic'},
    {menuNameCn: '电影', url : '/movie'},
    {menuNameCn: '美食', url : '/food'},
    {menuNameCn: '健康', url : '/healthy'},
    {menuNameCn: '旅行', url : '/travel'},
  ];
  constructor(
    public common: CommonService,
    public router: Router,
  ) {}

  ngOnInit() {}
}
