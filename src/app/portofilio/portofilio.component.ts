import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DarkThemeService } from '../dark-theme.service';
@Component({
  selector: 'app-portofilio',
  templateUrl: './portofilio.component.html',
  styleUrls: ['./portofilio.component.scss']
})
export class PortofilioComponent implements OnInit {
  projectsContainer: any[] = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,

      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  isDark: boolean = false;
  projects:any[]=
  [
    {
      "id":1,
      "author":"Ibrahim Mohamed",
      "imagePath":"assets/portoImages/template1.png",
      "title":"Leon Template",
      "desc":"simple landing Page",
      "Fdesc":"simple landing page using HTML & CSS  For training web site is responsive",
      "tecno":["HTML" , "CSS"],
      "link":"https://fe2o0o.github.io/tempelte-1/",
      "images":[
        "assets/portoImages/template1.png",
        "assets/portoImages/template1-2.png",
        "assets/portoImages/template1-3.png"
      ],
      "codePath":"https://github.com/fe2o0o/tempelte-1"
    },
    {
      "id":2,
      "author":"Ibrahim Mohamed",
      "imagePath":"assets/portoImages/template2-1.png",
      "title":"Kasper Template",
      "desc":"simple landing Page",
      "Fdesc":"simple landing page using HTML & CSS & JavaScript For training web site is responsive",
      "tecno":["HTML" , "CSS" , "javascript"],
      "link":"https://fe2o0o.github.io/templete-2/",
      "images":[
        "assets/portoImages/template2-1.png",
        "assets/portoImages/template2-2.png",
        "assets/portoImages/template2-3.png",
        "assets/portoImages/template2-4.png"
      ],
      "codePath":"https://github.com/fe2o0o/templete-2"
    },
    {
      "id":3,
      "author":"Ibrahim Mohamed",
      "imagePath":"assets/portoImages/template3-1.png",
      "title":"Fe2o0o Template",
      "desc":"simple landing Page",
      "Fdesc":"simple landing page using HTML & CSS & JavaScript For training web site is responsive",
      "tecno":["HTML" , "CSS" , "javascript"],
      "link":"https://fe2o0o.github.io/template-3/",
      "images":[
        "assets/portoImages/template3-1.png",
        "assets/portoImages/template3-2.png",
        "assets/portoImages/template3-3.png",
        "assets/portoImages/template3-4.png",
        "assets/portoImages/template3-5.png",
        "assets/portoImages/template3-6.png"
      ],
      "codePath":"https://github.com/fe2o0o/template-3"
    },
    {
      "id":4,
      "author":"Ibrahim Mohamed",
      "imagePath":"assets/portoImages/template4-1.png",
      "title":"Dahsbord Template",
      "desc":"simple Dashbord Page",
      "Fdesc":"simple Dashbord page using HTML & CSS  For training web site is responsive",
      "tecno":["HTML" , "CSS"],
      "link":"https://fe2o0o.github.io/Dashbord/",
      "images":[
        "assets/portoImages/template4-1.png",
        "assets/portoImages/template4-2.png",
        "assets/portoImages/template4-3.png"
      ],
      "codePath":"https://github.com/fe2o0o/Dashbord"
    },
    {
      "id":5,
      "author":"Ibrahim Mohamed",
      "imagePath":"assets/portoImages/angora1.png",
      "title":"Angora Web Site",
      "desc":"Smart Landing Page",
      "Fdesc":"Smart Landing Page using HTML & CSS & Bootstrap & javaScript For training web site is responsive",
      "tecno":["HTML" , "CSS" , "javascript" , "BootStrap"],
      "link":"https://fe2o0o.github.io/ANGORA-webSite-Ex/#",
      "images":[
        "assets/portoImages/angora1.png",
        "assets/portoImages/angora2.png",
        "assets/portoImages/angora3.png",
        "assets/portoImages/angora4.png"
      ],
      "codePath":"https://github.com/fe2o0o/ANGORA-webSite-Ex"
    },
    {
      "id":6,
      "author":"Ibrahim Mohamed",
      "imagePath":"assets/portoImages/fire1.png",
      "title":"MultiFire Company Web Site",
      "desc":"Smart Landing Page",
      "Fdesc":"Smart Landing Page using HTML & CSS & Bootstrap & javaScript For training web site is responsive",
      "tecno":["HTML" , "CSS" , "javascript" , "BootStrap"],
      "link":"https://fe2o0o.github.io/multiFire/",
      "images":[
        "assets/portoImages/fire1.png",
        "assets/portoImages/fire2.png",
        "assets/portoImages/fire3.png",
        "assets/portoImages/fire4.png"
      ],
      "codePath":"https://github.com/fe2o0o/multiFire"
    },
    {
      "id":7,
      "author":"Ibrahim Mohamed",
      "imagePath":"assets/portoImages/morgan1.png",
      "title":"Morgan Portofolio",
      "desc":"Smart Landing Page",
      "Fdesc":"Smart Landing Page using HTML & CSS & Bootstrap & javaScript For training web site is responsive",
      "tecno":["HTML" , "CSS" , "javascript" , "BootStrap"],
      "link":"https://fe2o0o.github.io/Devfolio/",
      "images":[
        "assets/portoImages/morgan1.png",
        "assets/portoImages/morgan2.png",
        "assets/portoImages/morgan3.png",
        "assets/portoImages/morgan4.png"
      ],
      "codePath":"https://github.com/fe2o0o/Devfolio"
    },
    {
      "id":8,
      "author":"Ibrahim Mohamed",
      "imagePath":"assets/portoImages/hand1.png",
      "title":"Volunteer Web Site",
      "desc":"Smart Web Site ",
      "Fdesc":"Smart Web Site Page using HTML & CSS & Bootstrap & javaScript ",
      "tecno":["HTML" , "CSS" , "javascript" , "BootStrap"],
      "link":"https://fe2o0o.github.io/handle-website/index.html",
      "images":[
        "assets/portoImages/hand1.png",
        "assets/portoImages/hand2.png",
        "assets/portoImages/hand3.png",
        "assets/portoImages/hand4.png"
      ],
      "codePath":"https://github.com/fe2o0o/handle-website"
    },
    {
      "id":9,
      "author":"Ibrahim Mohamed",
      "imagePath":"assets/portoImages/game1.png",
      "title":"Assignment Game",
      "desc":"Javascript Trainning",
      "Fdesc":"Javascript Trainning using HTML & CSS  & javaScript & BootStrap ",
      "tecno":["HTML" , "CSS" , "javascript" , "BootStrap" ],
      "link":"https://fe2o0o.github.io/assignment-one-js/",
      "images":[
        "assets/portoImages/game1.png",
        "assets/portoImages/game2.png"
      ],
      "codePath":"https://github.com/fe2o0o/assignment-one-js"
    },
    {
      "id":10,
      "author":"Ibrahim Mohamed",
      "imagePath":"assets/portoImages/qoute1.png",
      "title":"Qoutes App",
      "desc":"Javascript Trainning",
      "Fdesc":"Javascript Trainning using HTML & CSS  & javaScript & BootStrap and You can Create Our Qoute ",
      "tecno":["HTML" , "CSS" , "javascript" ,"BootStrap" ],
      "link":"https://fe2o0o.github.io/ass2-js/",
      "images":[
        "assets/portoImages/qoute1.png",
        "assets/portoImages/qoute2.png",
        "assets/portoImages/qoute3png.png"
      ],
      "codePath":"https://github.com/fe2o0o/ass2-js"
    },
    {
      "id":11,
      "author":"Ibrahim Mohamed",
      "imagePath":"assets/portoImages/login1.png",
      "title":"Smart Login System",
      "desc":"Javascript Trainning",
      "Fdesc":"Javascript Trainning using HTML & CSS  & javaScript & BootStrap and Regular Exprestion ",
      "tecno":["HTML" , "CSS" , "javascript", "RegEx" ,"BootStrap"  ],
      "link":"https://fe2o0o.github.io/hema/index.html",
      "images":[
        "assets/portoImages/login1.png",
        "assets/portoImages/login2.png",
        "assets/portoImages/login3.png"
      ],
      "codePath":"https://github.com/fe2o0o/hema"
    },
    {
      "id":12,
      "author":"Ibrahim Mohamed",
      "imagePath":"assets/portoImages/weather1.png",
      "title":"Weather APP",
      "desc":"Javascript Trainning",
      "Fdesc":"Javascript Trainning using HTML & CSS  & javaScript & BootStrap and using RESTFULL APIS ",
      "tecno":["HTML" , "CSS" , "javascript", "APIS" , "BootStrap"  ],
      "link":"https://fe2o0o.github.io/weatherApp-js/",
      "images":[
        "assets/portoImages/weather1.png",
        "assets/portoImages/weather2.png"
      ],
      "codePath":"https://github.com/fe2o0o/weatherApp-js"
    },
    {
      "id":13,
      "author":"Ibrahim Mohamed",
      "imagePath":"assets/portoImages/crud1.png",
      "title":"CRUDS Operation APP",
      "desc":"Javascript Trainning",
      "Fdesc":"Javascript Trainning using HTML & CSS  & javaScript , BootStrap ",
      "tecno":["HTML" , "CSS" , "javascript" ,"BootStrap" ],
      "link":"https://fe2o0o.github.io/NewCRUDS/",
      "images":[
        "assets/portoImages/crud1.png",
        "assets/portoImages/crud2.png"
      ],
      "codePath":"https://github.com/fe2o0o/NewCRUDS"
    },
    {
      "id":14,
      "author":"Ibrahim Mohamed",
      "imagePath":"assets/portoImages/book1.png",
      "title":"Book Maker APP",
      "desc":"Javascript Trainning",
      "Fdesc":"Javascript Trainning using HTML & CSS  & javaScript & BootStrap and Regular Expretion  ",
      "tecno":["HTML" , "CSS" , "javascript" ,"RegEx" , "BootStrap"  ],
      "link":"https://fe2o0o.github.io/bookMarker/",
      "images":[
        "assets/portoImages/book1.png",
        "assets/portoImages/book2.png"
      ],
      "codePath":"https://github.com/fe2o0o/bookMarker"
    },
    {
      "id":15,
      "author":"Ibrahim Mohamed",
      "imagePath":"assets/portoImages/rev1.png",
      "title":"Game Review Web Site",
      "desc":"Javascript Trainning ",
      "Fdesc":"Javascript Trainning using HTML & CSS  & javaScript & BootStrap and ES6 OOP and fetch Data From Apis  ",
      "tecno":["HTML" , "CSS" , "javascript" ,"OOP" , "BootStrap" ],
      "link":"https://fe2o0o.github.io/bookMarker/",
      "images":[
        "assets/portoImages/rev1.png",
        "assets/portoImages/rev2.png"
      ],
      "codePath":"https://github.com/fe2o0o/bookMarker"
    },
    {
      "id":16,
      "author":"Ibrahim Mohamed",
      "imagePath":"assets/portoImages/quiz1.png",
      "title":"Quize APP",
      "desc":"Javascript Trainning ",
      "Fdesc":"Javascript Trainning using HTML & CSS  & javaScript & BootStrap and ES6 OOP and fetch Data From Apis  ",
      "tecno":["HTML" , "CSS" , "javascript" ,"OOP" , "BootStrap" ],
      "link":"https://fe2o0o.github.io/QuizeApp/",
      "images":[
        "assets/portoImages/quiz1.png",
        "assets/portoImages/quiz2.png",
        "assets/portoImages/quiz3.png",
        "assets/portoImages/quiz4.png"
      ],
      "codePath":"https://github.com/fe2o0o/QuizeApp"
    },
    {
      "id":17,
      "author":"Ibrahim Mohamed",
      "imagePath":"assets/portoImages/n1.png",
      "title":"E-Commerce Pure JavaScript",
      "desc":"Javascript Trainning ",
      "Fdesc":"Javascript Trainning using HTML & CSS  & javaScript & BootStrap  and fetch Data From Apis  ",
      "tecno":["HTML" , "CSS" , "javascript" ,"APIS" , "BootStrap" ],
      "link":"https://fe2o0o.github.io/Native_E-commerce/index.html",
      "images":[
        "assets/portoImages/n1.png",
        "assets/portoImages/n2.png",
        "assets/portoImages/n3.png",
        "assets/portoImages/n4.png",
        "assets/portoImages/n5.png"
      ],
      "codePath":"https://github.com/fe2o0o/Native_E-commerce"
    },
    {
      "id":18,
      "author":"Ibrahim Mohamed",
      "imagePath":"assets/portoImages/start1.png",
      "title":"Start Angular",
      "desc":"Simple Angular Project",
      "Fdesc":" Simple Angular Project for trainning and use Router and Reactive Forms ",
      "tecno":["Angular 2+", "CSS" , "TypeScript" , "BootStrap" ],
      "link":"https://fe2o0o.github.io/start-angular/",
      "images":[
        "assets/portoImages/start1.png",
        "assets/portoImages/start2.png",
        "assets/portoImages/start3.png",
        "assets/portoImages/start4.png"
      ],
      "codePath":"https://github.com/fe2o0o/start-angular"
    },
    {
      "id":19,
      "author":"Ibrahim Mohamed",
      "imagePath":"assets/portoImages/emcan1.png",
      "title":"Zaheen Landing Page",
      "desc":"simple landing Page Angular",
      "Fdesc":" simple landing Page Angular  ",
      "tecno":["Angular 2+", "SCSS" , "TypeScript" , "BootStrap" ],
      "link":"https://fe2o0o.github.io/emcan_task/",
      "images":[
        "assets/portoImages/emcan1.png",
        "assets/portoImages/emcan2.png",
        "assets/portoImages/emcan3.png",
        "assets/portoImages/emcan4.png"
      ],
      "codePath":"https://github.com/fe2o0o/emcan_task"
    },
    {
      "id":20,
      "author":"Ibrahim Mohamed",
      "imagePath":"assets/portoImages/beuty1.png",
      "title":"EL_SHANZLIZIH Landing Page",
      "desc":"simple landing Page Angular",
      "Fdesc":" simple landing Page Angular  ",
      "tecno":["Angular 2+", "SCSS" , "TypeScript" , "BootStrap" ],
      "link":"https://fe2o0o.github.io/el-shanzlizih/",
      "images":[
        "assets/portoImages/beuty1.png",
        "assets/portoImages/beuty2.png",
        "assets/portoImages/beuty3.png"
      ],
      "codePath":"https://github.com/fe2o0o/el-shanzlizih"
    },
    {
      "id":21,
      "author":"Ibrahim Mohamed",
      "imagePath":"assets/portoImages/e1.png",
      "title":"Fresh Market",
      "desc":"E-commerce Angular",
      "Fdesc":"complete E-commerce with Angular , Using Services , Interfaces , Router , Reactive Forms , Tooster, APIS",
      "tecno":["Angular2+", "APIS" ,"SCSS" , "TypeScript"  ],
      "link":"https://fe2o0o.github.io/Fresh-Market/",
      "images":[
        "assets/portoImages/e1.png",
        "assets/portoImages/e2.png",
        "assets/portoImages/e3.png",
        "assets/portoImages/e4.png",
        "assets/portoImages/e5.png",
        "assets/portoImages/e6.png",
        "assets/portoImages/e7.png",
        "assets/portoImages/e8.png"
      ],
      "codePath":"https://github.com/fe2o0o/Fresh-Market"
    },
    {
      "id":22,
      "author":"Ibrahim Mohamed",
      "imagePath":"assets/portoImages/moka1.png",
      "title":"Moka Movies",
      "desc":"Movies Review",
      "Fdesc":"Movies Review with Angular And using Moviedb Apis",
      "tecno":["Angular2+", "APIS" ,"SCSS" , "TypeScript"  ],
      "link":"https://fe2o0o.github.io/moka-movies/",
      "images":[
        "assets/portoImages/moka1.png",
        "assets/portoImages/moka2.png",
        "assets/portoImages/moka3.png",
        "assets/portoImages/moka4.png",
        "assets/portoImages/moka5.png",
        "assets/portoImages/moka6.png",
        "assets/portoImages/moka7.png",
        "assets/portoImages/moka8.png"
      ],
      "codePath":"https://github.com/fe2o0o/moka-movies"
    }]


  constructor( private _DarkThemeService:DarkThemeService) {

  }

  ngOnInit(): void {

    this._DarkThemeService.isDark.subscribe({
      next: () => {
        if (this._DarkThemeService.isDark.getValue() == true) {
          this.isDark = true;
        } else {
          this.isDark = false;
        }
      }
    })
  }
}
