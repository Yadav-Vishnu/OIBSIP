import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'temperature';
  flag01:boolean=false;
  flag02:boolean=false;
  temp01:number =0;
  temp02:number=0;
  
  c(temp01:any):void{
    this.temp01 = Number(temp01);
    console.log(temp01);
    this.flag01=true;
    this.flag02=false;
    
  }
  f(temp02:any):void{
    this.temp02 = Number(temp02);
    console.log(temp02);
    this.flag01=false;
    this.flag02=true;
  }
  convert():void{
    if(this.flag01){
      this.temp02 = 32 + (9/5)*this.temp01;
    }
   else
    this.temp01 = (this.temp02-32)*(5/9);
  }
}
