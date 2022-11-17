import { setRemoteUrlResolver } from '@nrwl/angular/mf';

setRemoteUrlResolver((name) => {
  switch (name) {
    case 'mfe1': return 'http://localhost:4201';
    default: return 'http://localhost:4202'

  }
})

import('./bootstrap').catch((err) => console.error(err))
