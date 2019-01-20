import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../core/info/info';

@Injectable({
  providedIn: 'root'
})
export class InfosService {
  fetch: any;
  informationList: Info[];

  constructor(private http: HttpClient) {
   }

  fetchAPI(keyWord) {
    this.informationList = [];
    this.getJSON().subscribe(data => {
      console.log(data[1]);
      this.setInformationList(data,keyWord);
    });
    // console.log(fetch);
    // console.log(this.fetch.hits);
  }

  // printData(data){
  //   console.log(data);
  // }

  public getJSON(){
    var address = 'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000';
    return this.http.get(address)
  }

  setInformationList(fetch, keyWord): void {
    // const jsonData = fetch;
    for (let i = 0; i < fetch.length; i++) {
      if(fetch[i].keywords.includes(keyWord)){
        var item: Info = {
          // tslint:disable-next-line:max-line-length
          name: fetch[i].title,
          description: fetch[i].body
        };
        this.informationList.push(item);
      }
    }
    console.log(this.informationList);
  }

  getInfos(){
    return this.informationList;
  }
}
