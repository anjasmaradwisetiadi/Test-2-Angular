import { Component, OnInit } from '@angular/core';
import { mainContentService } from './service/main-content.service';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  providers: [mainContentService]
})
export class MainContentComponent implements OnInit {

  constructor() { }

  ngOnInit():void {




  }

}
