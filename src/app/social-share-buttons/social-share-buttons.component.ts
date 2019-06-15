import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'social-share-buttons',
  templateUrl: './social-share-buttons.component.html',
  styleUrls: ['./social-share-buttons.component.scss']
})
export class SocialShareButtonsComponent implements OnInit {

  showTooltip: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSocialShareTooltip(){
    this.showTooltip = !this.showTooltip;
  }

}
