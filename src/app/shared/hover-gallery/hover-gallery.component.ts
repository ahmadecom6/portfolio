import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({selector:'app-hover-gallery',standalone:true,imports:[NgOptimizedImage],templateUrl:'./hover-gallery.component.html',styleUrl:'./hover-gallery.component.scss',changeDetection:ChangeDetectionStrategy.OnPush})
export class HoverGalleryComponent{
 @Input() images:string[]=[]; @Input() duration=24; @Input() cardWidth=190; @Input() cardAspectRatio='3 / 4'; @Input() perspective=1200; @Input() rotationDirection:'left'|'right'='left'; @Input() withMask=true;
 get radius(){return Math.max(260, this.cardWidth * Math.max(this.images.length,1) / 2.8)}
 angle(i:number){return `rotateY(${(360/this.images.length)*i}deg) translateZ(${this.radius}px)`}
}
