import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MockInfoFeedComponent } from './core/mock-info-feed/mock-info-feed.component';
import { InfoFeedComponent } from './core/info-feed/info-feed.component';

const appRoutes: Routes = [
  { path: '', component: MockInfoFeedComponent },
  { path: 'search/:name', component: InfoFeedComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MockInfoFeedComponent,
    InfoFeedComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { onSameUrlNavigation: 'reload', enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }