import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes'; // Ensure that the correct path to the 'app.routes' module is provided

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
