import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'social-share-buttons',
  templateUrl: './social-share-buttons.component.html',
  styleUrls: ['./social-share-buttons.component.scss']
})
export class SocialShareButtonsComponent implements OnInit {

  showTooltip: boolean = false;

  constructor(
    private renderer: Renderer2,
    private _elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.renderer.listen('window', 'click',(e:Event)=>{
      if(e.target !== this._elementRef.nativeElement && !this._elementRef.nativeElement.contains(e.target)){
          this.showTooltip = false;
      }
    });
  }

  toggleSocialShareTooltip(){
    this.showTooltip = !this.showTooltip;
  }

}
