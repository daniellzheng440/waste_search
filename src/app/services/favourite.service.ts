import { Injectable } from '@angular/core';
import { Info } from '../core/info/info';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  favouriteList: Info[] = [];
  constructor() { }

  getFavourite(){
    return this.favouriteList;
  }

  toggleFavourite(info){
    if(info.favourite){
      this.favouriteList.unshift(info);
    }
    else{
      this.favouriteList = this.favouriteList.filter(function(value,index,arr){
        return value.name != info.name
      });
    }
  }
}
