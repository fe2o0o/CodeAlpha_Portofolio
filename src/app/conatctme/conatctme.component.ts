import { Component, OnInit } from '@angular/core';
import { DarkThemeService } from '../dark-theme.service';

@Component({
  selector: 'app-conatctme',
  templateUrl: './conatctme.component.html',
  styleUrls: ['./conatctme.component.scss']
})
export class ConatctmeComponent implements OnInit {
  isDark: boolean = false;
  constructor(private _DarkThemeService: DarkThemeService) {
    
  }
  ngOnInit(): void {
    this._DarkThemeService.isDark.subscribe({
      next: () => {
        if(this._DarkThemeService.isDark.getValue() == false){
          this.isDark = false;
        } else {
          this.isDark=true
        }
        }
      })
  }

}
