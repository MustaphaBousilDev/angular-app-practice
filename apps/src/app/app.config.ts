import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({
      //option to optimize performance by grouping multiple similar events together
       eventCoalescing: true
     }),
     provideRouter(routes)
  ]
};
