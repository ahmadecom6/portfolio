import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({selector:'app-main-layout',standalone:true,imports:[RouterOutlet,RouterLink,RouterLinkActive],templateUrl:'./main-layout.component.html',styleUrl:'./main-layout.component.scss',changeDetection:ChangeDetectionStrategy.OnPush})
export class MainLayoutComponent{menuOpen=false;toggleMenu(){this.menuOpen=!this.menuOpen}closeMenu(){this.menuOpen=false}}
