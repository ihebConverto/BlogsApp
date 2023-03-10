import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventHandlerService } from '../event-handler.service';
import { ServiceProviderService } from '../service-provider.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent {
  blogForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    body: new FormControl('')
  });
  submitted = false;
  blog:any={};
  constructor(private formBuilder: FormBuilder,
     private service:ServiceProviderService,
     private router:Router,
     private UiAlert:EventHandlerService){

  }
  ngOnInit(): void {
    this.blogForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      body: ['', Validators.required],
    });
  }


  get f(): { [key: string]: AbstractControl } {
    return this.blogForm.controls;
  }


  onSubmit(): void {
    this.submitted = true;
    if (this.blogForm.invalid) {
      return
    }
    // here we send randomly likes and dislikes to see diferent cases reflect in our blogsList page design
    // In real use case they must been initialise with 0.
    let likes=this.getRandomInt(0,10);
    let dislikes=this.getRandomInt(0,10);
     this.service.addBlog({...this.blogForm.value , likes,dislikes}).then((res:any)=>{
      console.log(res);
      this.UiAlert.showSucess(`${this.blogForm.value.title} is successfully Added `,5000);
      this.back();
     }).catch(err=>{
      let Msg=err.status ==404 ? "Route Not Found" : "Internel Server error Please check the console logs";
      this.UiAlert.showError(`${Msg}`,3000);
      console.log(err);
    })
    console.log(this.blogForm.value);
    console.log(JSON.stringify(this.blogForm.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.blogForm.reset();
  }

  back(): void {
    this.router.navigate(['/app-blogs'])
  }


   getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
}
