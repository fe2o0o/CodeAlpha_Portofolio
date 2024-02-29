import { Component, OnInit } from '@angular/core';
import { DarkThemeService } from '../dark-theme.service';
import * as Aos from 'aos';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit{
  constructor(private _DarkThemeService:DarkThemeService){}
  isOverlay: boolean = false;
  isDark: boolean = false;
  isIntail: boolean = false;
  showOvelay() {
    this.isOverlay = !this.isOverlay;
  }

  ngOnInit() {
    this.isIntail=true
    this._DarkThemeService.isDark.subscribe({
      next: () => {
        if (this._DarkThemeService.isDark.getValue() == false) {
          this.isDark = false;
        } else {
          this.isDark = true;
        }
        }
    })
    Aos.init();
  }

  hideOverlay() {
    this.isOverlay = false;
  }

}
