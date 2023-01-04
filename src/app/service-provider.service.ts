import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

isLoading:any=false;
localUrl = 'assets/blogs.json';
fastApiUrl='http://localhost:8000';
  constructor(private http: HttpClient) { }

  getBlogs(){
    return new Promise<any>((resolve, reject) => {
      this.isLoading=true;
      const headers = new HttpHeaders()
      .set('content-type','application/json')
      .set('Access-Control-Allow-Origin', '*');  
       // To try Local json File Please put localUrl inside the get
      this.http.get(this.fastApiUrl+"/blogs").subscribe((data:any)=>{
        console.log(data.blogs)
        this.isLoading=false;
        resolve(data.blogs);
      },err=>{
        console.log(err);
        reject(err);
        this.isLoading=false;
      })
    })
  }
  

  getBlogbyId(id:any) {
    return new Promise<any>((resolve, reject) => {
      this.isLoading=true;
      const headers = new HttpHeaders()
      .set('content-type','application/json')
      .set('Access-Control-Allow-Origin', '*');  
       // To try Local json File Please put localUrl inside the get
      this.http.get(this.fastApiUrl+`/get_blog/${id}`).subscribe((data:any)=>{
        console.log(data)
        this.isLoading=false;
        resolve(data);
      },err=>{
        console.log(err);
        reject(err);
        this.isLoading=false;
      })
    })
  }


  addBlogbyLikes(id: any, islikesTapped: boolean) {
    return new Promise<any>((resolve, reject) => {
      const headers = new HttpHeaders()
      .set('content-type','application/json')
      .set('Access-Control-Allow-Origin', '*');  
       // To try Local json File Please put localUrl inside the get
      let route=islikesTapped ? 'likes': 'dislikes';
      this.http.get(this.fastApiUrl+`/${route}/${id}`).subscribe((data:any)=>{
        console.log(data)
        if(islikesTapped)
        resolve('likes');
        else
        resolve('dislikes');
      },err=>{
        console.log(err);
        reject(err);
      })
    })
  }

  addBlog(data:any){
    return new Promise<any>((resolve, reject) => {
      this.isLoading=true;
      const headers = new HttpHeaders()
      .set('content-type','application/json')
      .set('Access-Control-Allow-Origin', '*');  
      this.http.post(this.fastApiUrl+"/add_blog",{...data}).subscribe((data:any)=>{
        console.log(data.blogs)
        this.isLoading=false;
        resolve(data.blogs);
      },err=>{
        console.log(err);
        reject(err);
        this.isLoading=false;
      })
    })
  
  }
  }

