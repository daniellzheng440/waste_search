import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { InfosService } from '../../services/infos.service';
import { Info } from '../info/info';

@Component({
  selector: 'app-info-feed',
  templateUrl: './info-feed.component.html',
  styleUrls: ['./info-feed.component.css']
})
export class InfoFeedComponent implements OnInit {

  informationList: Info[];

  constructor(private informationService : InfosService, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.informationList = this.informationService.getInfos();
    });
  }

  ngOnInit() {
    this.informationList = this.informationService.getInfos();
  }
}