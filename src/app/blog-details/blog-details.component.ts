import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceProviderService } from '../service-provider.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent {
currentBlog: any | null ={};
constructor(private route:ActivatedRoute , private router:Router,private services:ServiceProviderService){
 
}

ngOnInit() {
  this.route.queryParams.subscribe((params:any) => {
    this.currentBlog = params;
    console.log(this.currentBlog);
  });

  //************ If we have Big data we can get only the Id and get the Blom from the server using the method bellow************ */
  
  // this.route.queryParams.subscribe((params:any) => {
  //   this.services.getBlogbyId(params.id).then(res=>{
  //     this.currentBlog = res;
  //   }).catch(err=>console.log(err))
  //   console.log(this.currentBlog);
  // });

  // **************************************End of Seconde Solution**************************
}

back(): void {
  this.router.navigate(['/app-blogs'])
}
}
