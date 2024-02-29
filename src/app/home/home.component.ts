import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { DarkThemeService } from '../dark-theme.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  isDark: boolean = false;
  constructor(private _DarkThemeService:DarkThemeService) {

  }

  ngOnInit() {
    this._DarkThemeService.isDark.subscribe({
      next: () => {
        if (this._DarkThemeService.isDark.getValue() == false) {
          this.isDark=false
        } else {
          this.isDark=true
        }
      }
    })
    Aos.init({
      delay:800
    });
  }
}
