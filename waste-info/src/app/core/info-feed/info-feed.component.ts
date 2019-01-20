import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { InfosService } from '../../services/infos.service';
import { Info } from '../info/info';
import { FavouriteService } from '../../services/favourite.service';
// import { FavouriteComponent } from 'src/app/components/favourite/favourite.component';

@Component({
  selector: 'app-info-feed',
  templateUrl: './info-feed.component.html',
  styleUrls: ['./info-feed.component.css']
})
export class InfoFeedComponent implements OnInit {

  informationList: Info[];
  toggle: boolean = false;
  favouriteList: Info[];
  // favouriteComponet: FavouriteComponent;
  
  constructor(private informationService : InfosService, route: ActivatedRoute, 
              private favouriteService: FavouriteService) {
    route.params.subscribe(val => {
      this.informationList = this.informationService.getInfos();
    });
  }

  ngOnInit() {
    this.informationList = this.informationService.getInfos();
  }

  toggleFav(information) {
    information.favourite = !information.favourite;
    this.favouriteService.toggleFavourite(information);
    // favouriteComponent.loadPage();
  }
}