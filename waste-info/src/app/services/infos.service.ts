import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../core/info/info';
import { FavouriteService } from './favourite.service';

@Injectable({
  providedIn: 'root'
})
export class InfosService {
  fetch: any;
  informationList: Info[] = [];
  favouriteList: Info[];
  favouriteArr: String[] = [];

  constructor(private http: HttpClient, private favouriteService: FavouriteService) {
   }

  //  query the API
  fetchAPI(keyWord) {
    this.informationList = [];
    this.favouriteList = this.favouriteService.getFavourite();
    this.getJSON().subscribe(data => {
      this.setInformationList(data,keyWord);
    });
  }

  public getJSON(){
    var address = 'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000';
    return this.http.get(address)
  }

  // process the API
  setInformationList(fetch, keyWord): void {
    // add name of favourites to an array
    for (let i = 0; i < this.favouriteList.length; i++){
      this.favouriteArr.push(this.favouriteList[i].name);
    }
    console.log(this.favouriteArr);
    for (let i = 0; i < fetch.length; i++) {
      if(fetch[i].keywords.includes(keyWord)){
        var item: Info = {
          name: fetch[i].title,
          description: fetch[i].body,
          // create based on favourite array
          favourite: this.favouriteArr.includes(fetch[i].title)
        };
        this.informationList.push(item);
      }
    }
  }

  // return statement
  getInfos(){
    return this.informationList;
  }
}
