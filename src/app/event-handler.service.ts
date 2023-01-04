import { Injectable } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EventHandlerService {
isSuccess:boolean=false
successMessage:string=''

isError:boolean=false
errorMessage:string=''
  constructor() { }
  
  showSucess(text:string,tmeout:number){
  this.successMessage=text;
  this.isSuccess=true;
// Hide the alert Box after his provided time expired
  this.handleTimeout(tmeout).then(()=>{this.isSuccess=false});
  }


  showError(text:string,tmeout:number){
    this.errorMessage=text;
    this.isError=true;
  // Hide the alert Box after his provided time expired
    this.handleTimeout(tmeout).then(()=>{this.isError=false});
  
    }


  handleTimeout(timeout:number){
    return new Promise<void>((resolve) => {
      setTimeout(() => {
      resolve();
      }, timeout);
    })
  
  }
  
}





