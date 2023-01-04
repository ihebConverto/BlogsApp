import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventHandlerService } from './event-handler.service';
import { ServiceProviderService } from './service-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-app';
  currentRouter:any;
  constructor(public service:ServiceProviderService , public UiAlert:EventHandlerService){

  }
}
