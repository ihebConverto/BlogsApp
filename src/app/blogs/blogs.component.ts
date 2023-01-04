import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventHandlerService } from '../event-handler.service';
import { ServiceProviderService } from '../service-provider.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  blogs: any;
  filterBlogs:any;
  constructor(public service:ServiceProviderService,private router: Router , private UiAlert:EventHandlerService)
{

}
  async ngOnInit(){
     this.service.getBlogs().then(blogs=>{
        this.blogs=blogs;
        this.filterBlogs=blogs;
       }).catch(err=>{
        let Msg=err.status ==404 ? "Route Not Found" : "Internel Server error Please check the console logs";
        this.UiAlert.showError(`${Msg}`,5000);
        console.log(err);
        console.log(err)})
     
}

// show Clicked card details
showDetails(blog:any){
  console.log(blog);
  this.router.navigate(["/blog-details"],{queryParams:blog});
}

getFiltredItems($event:any){
  
  let val = $event.target.value;
  this.filterBlogs=this.blogs;
  if (val && val.trim() !== '') {
    console.log("This is The value ",val," / ",val.trim());
    this.filterBlogs = this.filterBlogs.filter(function(item:any) {
      console.log(item);
      return (item.title.toLowerCase().includes(val.toLowerCase()) || item.body.toLowerCase().includes(val.toLowerCase()));
    });
    console.log("After-Filter-Search : ",this.blogs);
  }
}
}
