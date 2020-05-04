import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ArchiveComponent  } from './archive/archive.component';

const routes: Routes=[ {
    path: 'my-app',
    component: AppComponent
  },
  {
    path: 'archive',
    component: ArchiveComponent

  }];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule{ }
export const routingComponents = [AppComponent, ArchiveComponent]