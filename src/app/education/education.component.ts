import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { DarkThemeService } from '../dark-theme.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  isDark: boolean = false;
  constructor(private _DarkThemeService:DarkThemeService) {

  }
  ngOnInit(): void {
    Aos.init();
    this._DarkThemeService.isDark.subscribe({
      next: () => {
        if (this._DarkThemeService.isDark.getValue() == false) {
          this.isDark = false;
        } else {
          this.isDark=true
        }
      }
    })
  }
}
