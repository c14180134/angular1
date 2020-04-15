import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Tio';
  itembuah= [{
    nama:'kelengkeng',
    harga:10000
  },{
    nama:'jeruk',
    harga:7000

  }];

  itemArr=['aa','bb','cc','dd']

  show: boolean = true

  user="";

  Pesan='';
  klikButton(){
    this.Pesan=("tombol ditekan");
  }


}
