import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactComponent } from './pages/contact/contact.component';



@NgModule({
  declarations: [
    MainComponent,
    LayoutComponent,
    NavComponent,
    SummaryComponent,
    ExperienceComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent,
    LayoutComponent,
    NavComponent,
    SummaryComponent,
    ExperienceComponent,
    ContactComponent
  ]
})
export class PersonalModule { }
