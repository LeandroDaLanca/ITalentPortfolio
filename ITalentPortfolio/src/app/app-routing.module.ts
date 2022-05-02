import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './components/activities/activities.component';
import { HomeComponent } from './components/home/home.component';
import { ReflectionComponent } from './components/reflection/reflection.component';
import { SelectionsComponent } from './components/selections/selections.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "activiteiten",
    component: ActivitiesComponent
  },
  {
    path: "selecties",
    component: SelectionsComponent
  },
  {
    path: "eindreflectie",
    component: ReflectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
