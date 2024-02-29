import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ConatctmeComponent } from './conatctme/conatctme.component';
import { PortofilioComponent } from './portofilio/portofilio.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  {path:'education',component:EducationComponent},
  {path:'skills' , component:SkillsComponent},
  { path: "about", component: AboutmeComponent },
  {path:"contact" , component:ConatctmeComponent},
  { path: "portofilio", component: PortofilioComponent },
  {path:"projectDetails/:id",component:ProjectDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
