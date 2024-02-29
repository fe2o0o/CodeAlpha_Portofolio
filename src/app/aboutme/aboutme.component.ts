import { Component, OnInit } from '@angular/core';
import { DarkThemeService } from '../dark-theme.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
  isDark: boolean = false;
  constructor(private _DarkThemeService:DarkThemeService) {

  }

  ngOnInit(){
    this._DarkThemeService.isDark.subscribe({
      next: () => {
        if (this._DarkThemeService.isDark.getValue() == false) {
          this.isDark=false
        } else {
          this.isDark = true;
        }
      }
      })
  }
}
