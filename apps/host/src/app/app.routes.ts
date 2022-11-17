import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'mfe1',
    loadChildren: () => loadRemoteModule('mfe1', './Module')
      .then(m => m.RemoteEntryModule),
  },
  {
    path: 'mfe2',
    loadChildren: () => loadRemoteModule('mfe2', './Module')
      .then(m => m.RemoteEntryModule),
  }
];
