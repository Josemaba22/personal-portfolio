import { Routes } from '@angular/router';
import { MainComponent } from './personal/pages/main/main.component';
import { ProjectsComponent } from './personal/pages/projects/projects.component';
import { SummaryComponent } from './personal/pages/summary/summary.component';
import { ExperienceComponent } from './personal/pages/experience/experience.component';
import { ContactComponent } from './personal/pages/contact/contact.component';
import { LayoutComponent } from './personal/pages/layout/layout.component';

export const routes: Routes = [
    { path: 'main', component: LayoutComponent },
    { path: 'summary', component: SummaryComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: '**', redirectTo: 'main'}
];