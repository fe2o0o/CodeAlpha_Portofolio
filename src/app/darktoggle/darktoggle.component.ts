import { Component, Output, EventEmitter } from '@angular/core';
import { DarkThemeService } from '../dark-theme.service';
@Component({
  selector: 'app-darktoggle',
  templateUrl: './darktoggle.component.html',
  styleUrls: ['./darktoggle.component.scss']
})
export class DarktoggleComponent {
  constructor(private _DarkThemeService:DarkThemeService) {
    if (_DarkThemeService.isDark.getValue() == false) {
      this.isDark=false
    } else {
      this.isDark=true
    }
  }
  isDark: boolean = false;

  addDark(): void {
    this.isDark = !this.isDark
    this._DarkThemeService.isDark.next(this.isDark)
  }
}
