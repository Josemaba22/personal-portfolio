import { NgModule } from "@angular/core";
import { PersonalModule } from "./personal/personal.module";
import { MainComponent } from "./personal/pages/main/main.component";
import { ProjectsComponent } from "./personal/pages/projects/projects.component";
import { Route, RouterModule } from "@angular/router";

// Importa tus rutas
import { routes } from './app.routes';

@NgModule({
    declarations: [
    ],
    imports: [
        PersonalModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
  })
  export class AppModule { }