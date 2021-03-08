import { Component,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Odd=''
  Even=''
  title = 'QuizApp'
  result=[]
  
  
  score(data){
    if(typeof data!=='undefined'){
    console.log("this is score "+data.Result);
    this.result.push(data);
    }
    else{
      this.result.slice(0,this.result.length)
    }
  }
  
}
