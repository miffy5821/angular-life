import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit{
  bannerList = [
    {img:'assets/home/home/banner003.jpg'},
    {img:'assets/home/home/banner004.jpg'},
    {img:'assets/home/home/banner005.jpg'}
  ];
  public noticeArry = [
    {data: '念奴娇:大江东去，浪淘尽，千古风流人物。故垒西边，人道是：三国周郎赤壁。乱石穿空，惊涛拍岸，卷起千堆雪。江山如画，一时多少豪杰。遥想公瑾当年，小乔初嫁了，雄姿英发。羽扇纶巾，谈笑间、樯橹灰飞烟灭。故国神游，多情应笑我，早生华发。人生如梦，一尊还酹江月。 '},
    {data: '西江月:明月别枝惊鹊，清风半夜鸣蝉。稻花香里说丰年，听取蛙声一片。七八个星天外，两三点雨山前。旧时茅店社林边，路转溪桥忽见。 '},
    {data: '青玉案:东风夜放花千树，更吹落，星如雨。宝马雕车香满路。凤箫声动，玉壶光转，一夜鱼龙舞。蛾儿雪柳黄金缕，笑语盈盈暗香去。众里寻他千百度，蓦然回首，那人却在，灯火阑珊处。'}
    ];
  constructor() {

  }
  ngOnInit() {
    this.noticeStr();

  }

  noticeStr(): string  {
      let str = '';
      if (this.noticeArry.length) {
        this.noticeArry.forEach((item, index) => {
          str += `${index + 1}: ${item.data} `;
        });
      }
      console.log('123', str);
      return str;
   }
}
