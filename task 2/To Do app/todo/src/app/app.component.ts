import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'todo';
  isTrue:boolean =true;
  value:string[]=[""];


  get(val:string):void{
    this.value.push(val);
  }
  delete(task:string):void{
   let r:number =this.value.indexOf(task,0);
   let s:number =r;
   let e:number=this.value.length;
   for(s;s<e-1&&s>=0;s++){
      this.value[s]=this.value[s+1];
      // let temp:string =this.value[]
   }
   
  }
}
