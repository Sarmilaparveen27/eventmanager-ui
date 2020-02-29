import * as core from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstAppComponent } from './components/first-app/first-app.component';
import { AddeventComponent } from './components/addevent/addevent.component';
const routes: Routes = [
  {
    path:'events',
    component:FirstAppComponent
  }
,{
  path:'add-events',
  component:AddeventComponent
}
];

@core.NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
