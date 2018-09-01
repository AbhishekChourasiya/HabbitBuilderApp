import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComitmentComponent } from './comitment/comitment.component';
import { HabitPageComponent } from './habit-page/habit-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'comit',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'comit',
    component: ComitmentComponent
  }
  ,
  {
    path: 'habit',
    component: HabitPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
