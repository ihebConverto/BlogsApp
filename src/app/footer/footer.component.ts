import { Component } from '@angular/core';
import { interval, observable,map } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  currentYear:any
  ngOnInit(){
     this.currentYear=new Date().getFullYear();
     //Here we check the current year every hour to get the current year even if you work after midnight at the end of the year
    interval(1000*60*60).pipe(map(()=> new Date().getFullYear())).subscribe(res=>{
      this.currentYear=res;

    });
  }
}
