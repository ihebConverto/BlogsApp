import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrls: ['./card-blog.component.scss']
})
export class CardBlogComponent {
  @Input() blog:any;
  @Output() onSelected = new EventEmitter<any>();
  constructor(){
   
   }
ngOnInit(){
  console.log('--->',this.blog);
}

selectBlog(blog:any){
  this.onSelected.emit(blog);
}

}
