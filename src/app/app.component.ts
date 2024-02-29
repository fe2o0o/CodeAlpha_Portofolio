import { Component } from '@angular/core';
import { DarkThemeService } from './dark-theme.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ibrahim-mohamed'
  isDark: boolean = false;
  constructor(private _DarkThemeService:DarkThemeService) {
    _DarkThemeService.isDark.subscribe({
      next: () => {
        if (_DarkThemeService.isDark.getValue() !== false) {
          this.isDark = true
          localStorage.setItem('mode',JSON.stringify(this.isDark))
        } else {
          this.isDark = false;
          localStorage.setItem('mode',JSON.stringify(this.isDark))
        }
      },
    })
  }

}
