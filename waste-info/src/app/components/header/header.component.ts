import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { InfosService } from '../../services/infos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  keyWord: String;
  constructor(private informationsService: InfosService, private router: Router) { }

  inputEmpty(){
    if (this.keyWord == ''){
      this.router.navigate(['']);
    }
  }
  
  onSubmit() {
    console.log(this.keyWord);
    this.informationsService.fetchAPI(this.keyWord);
    this.router.navigate(['search/' + this.keyWord]);
  }
  
  ngOnInit() {
  }
}
