import { Component, OnInit } from '@angular/core';

import { Info } from 'src/app/core/info/info';
import { FavouriteService } from 'src/app/services/favourite.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  favouriteList: Info[] = [];

  constructor(private favouriteService: FavouriteService) { }

  ngOnInit() {
    this.favouriteList = this.favouriteService.getFavourite();
  }

  loadPage(){
    this.favouriteList = this.favouriteService.getFavourite();
  }
  
  toggleFav(information) {
    information.favourite = !information.favourite;
    this.favouriteService.toggleFavourite(information);
    this.loadPage();
  }
}
