import { Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

  @Output() clipartUpdate = new EventEmitter();
  @Input() clipartData;
  clipartImgs = [];
  StandardUrl = '';
  ThumbUrl = '';
  BaseUrl = '';

  constructor() { }

  ngOnInit() {
    this.clipartImgs = this.clipartData.ImageList[0]['AssetsList'];
      this.StandardUrl = this.clipartData.StandardUrl;
      this.ThumbUrl = this.clipartData.ThumbUrl;
      this.BaseUrl = this.clipartData.BaseUrl;

      console.log(this.clipartImgs, this.ThumbUrl, this.BaseUrl);
   }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    if (changes['clipartData'] && this.clipartData) {
      console.log('!!!--- Clipart Element ---!!!');
      console.log(this.clipartData);
      console.log('!!!--- Clipart Element ---!!!');
      this.clipartImgs = this.clipartData.ImageList[0]['AssetsList'];
      this.StandardUrl = this.clipartData.StandardUrl;
      this.ThumbUrl = this.clipartData.ThumbUrl;
      this.BaseUrl = this.clipartData.BaseUrl;
    }
  }

  imgClickEventHandle() {
    console.log('img div clicked');
    const test = this.clipartUpdate.emit('test');
    console.log(this.clipartUpdate.emit(false));
    console.log(test);
  }
}
