import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { SocialShareButtonsComponent } from './social-share-buttons/social-share-buttons.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    SocialShareButtonsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,      // (Required) for share counts
    HttpClientJsonpModule, // (Optional) for Tumblr counts
    ShareButtonsModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
