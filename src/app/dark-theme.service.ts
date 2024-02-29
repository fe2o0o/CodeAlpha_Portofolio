import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkThemeService {
  isDark = new BehaviorSubject<boolean>(false);
  constructor() { 
    this.getTheme()
  }


  getTheme() {
    if (localStorage.getItem('mode') != null) {
      this.isDark.next(JSON.parse(`${localStorage.getItem('mode')}`))
    }
  }
}
