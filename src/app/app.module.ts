import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { CardBlogComponent } from './card-blog/card-blog.component';
import { LoadingComponent } from './loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceProviderService } from './service-provider.service';
import { MatIconModule } from '@angular/material/icon';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogsComponent,
    BlogDetailsComponent,
    CardBlogComponent,
    LoadingComponent,
    AddBlogComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [ServiceProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
