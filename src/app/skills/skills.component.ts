import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DarkThemeService } from '../dark-theme.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('progressState', [
      state('0', style({ width: '0%' })),
      state('1', style({ width: '{{ width }}%' }), { params: { width: 0 } }),
      transition('0 <=> 1', [
        animate('2s ease-out')
      ]),
    ])
  ]
})
export class SkillsComponent implements OnInit {
  startCount: number = 0;
  isDark: boolean = false;
  constructor(private _DarkThemeService:DarkThemeService) {
  }
  state = '0';
  
  ngOnInit(): void {
    this._DarkThemeService.isDark.subscribe({
      next: () => {
        if (this._DarkThemeService.isDark.getValue() == false) {
          this.isDark = false;
        } else {
          this.isDark = true;
        }
      }
    })
    setTimeout(() => {
      this.state = '1';
    }, 100);
  }


  customCount(ele: any) {
    let number = Number(ele?.dataset['count']);
    let conut = setInterval(() => {
      this.startCount++;
      if (this.startCount == number) {
        
        clearInterval(conut);
      }
    },25)
  }



}
