import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css']
})
export class KategoriComponent implements OnInit {
  activeTab: string = 'Quiz';

  constructor() { }

  ngOnInit(): void {
  }

  getNameTab(dataTab:string){
    this.activeTab=dataTab;
  }


}
