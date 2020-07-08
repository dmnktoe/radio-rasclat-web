/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '@app/app.module';
import { environment } from '@env/environment';

import { NgxAnalyticsGoogleAnalytics } from 'ngx-analytics/ga';

if (environment.production) {
  enableProdMode();
  NgxAnalyticsGoogleAnalytics.prototype.createGaSession(
    environment.googleAnalytics
  );
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, { preserveWhitespaces: true })
  .catch((err) => console.log(err));
