import { Component, ElementRef, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Output() answersubmit= new EventEmitter();
  @ViewChild('name') Name:ElementRef
  Q=[{
    q:"What is the full form of  HTML",
    op:[{
      op:"Hyper Text Markup Language",answer:"correct"
    },{
      op:"Hello talk me less",answer:"wrong"
    },{
      op:"Hindi Telugu Marathi Lingo",answer:"wrong"
    }]
  },
  {
    q:"What is 4 + 4?",
    op:[{
      op:"4",answer:"correct"
    },{
      op:"Four",answer:"wrong"
    },{
      op:"40",answer:"wrong"
    }]
  },
  {
    q:"What is WWW",
    op:[{
      op:"WorldWide Website",answer:"correct"
    },{
      op:"Wrestlisng Web",answer:"wrong"
    },{
      op:"We Wang Wu",answer:"wrong"
    }]
  },
  {
    q:"This App is made on?",
    op:[{
      op:"React",answer:"wrong"
    },{
      op:"Angular",answer:"correct"
    },{
      op:"HTML/CSS",answer:"wrong"
    }]
  }]

  Onanswersubmit(){
    let a = this.option.nativeElement.querySelectorAll('.options')
    let r=0
    for(let b of a){
      if(b.checked){
        if(b.value==="correct"){
          r++;
        }
        else{
          continue;
        }
      }
      
    
  
  }
  let Username=this.Name.nativeElement.value
  console.log(this.Name.nativeElement.value)
  this.answersubmit.emit({Result:r.toString(),Username:Username})
}
  
constructor(private option:ElementRef) { }
  
  ngOnInit() {
  
  }
  Onclear(){
    let a = this.option.nativeElement.querySelectorAll('.options')
    for(let b of a){
      if(b.checked){
        b.checked = false
      }
    }
    this.answersubmit.emit('undefined')
  }


}
