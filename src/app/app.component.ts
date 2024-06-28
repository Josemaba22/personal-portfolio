import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonalModule } from './personal/personal.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet,
      PersonalModule
    ]
})
export class AppComponent {
  title = 'personal-porfolio';
}
