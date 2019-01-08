import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Output() notifyColorCellClick = new EventEmitter<any>();

  colorlist: any = [];
  selectedColorObject: any = null;
  textProperty: String = '';


  @Input('setTextProperty')
  set setTextProperty(value: any) {
    this.textProperty = value;
  }

  @Input('setColorList')
    set setColorList(value: any) {
    this.setColorData(value);
  }

  @Input('setColorCell')
  set setColorCell(colorId: any) {
    this.showSelectedCellInPallet(colorId);
  }

  constructor() { }

  ngOnInit() {
    console.log(' !!! init Text !!!');
  }

  setColorData( colorData ) {
    this.colorlist = colorData;
    console.log( 'setColorData', this.colorlist );
  }

  showSelectedCellInPallet(colorId) {
    console.log('Color Pallet:', colorId);
  }


  handleOnClickColorCell(colorObj) {
    console.log('!!! Handleonclick !!!');
    this.notifyColorCellClick.emit({data: colorObj });
  }

}
