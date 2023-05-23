import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  cal:string="";
  sign:string = "";
  take(val:string):void{
    this.cal+=val;
  }

 

  print():void{
    this.cal = String(eval(this.cal));
    console.log(typeof(this.cal));
    console.log(this.cal);

    
  }
  clear():void{
    let l:number = this.cal.length;
    this.cal = this.cal.substring(0,l-1);
  }
}
