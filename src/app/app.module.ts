import { NgModule } from '@angular/core';
import { CountToModule } from 'angular-count-to';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DarktoggleComponent } from './darktoggle/darktoggle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ConatctmeComponent } from './conatctme/conatctme.component';
import { PortofilioComponent } from './portofilio/portofilio.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { SwiperModule } from 'swiper/angular';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DarktoggleComponent,
        SidebarComponent,
        EducationComponent,
        SkillsComponent,
        AboutmeComponent,
        ConatctmeComponent,
        PortofilioComponent,
      ProjectDetailsComponent,
      
    ],
  providers: [],

    bootstrap: [AppComponent],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      ButtonModule,
      SidebarModule,
      SpeedDialModule,
      ToastModule,
      CountToModule,
      HttpClientModule,
      CarouselModule,
      SwiperModule
    ]
})
export class AppModule { }
