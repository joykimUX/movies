import { FantasyComponent } from './fantasy/fantasy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RomanceComponent } from './romance/romance.component';


const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'fantasy', component:FantasyComponent},
  {path:'romance', component:RomanceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
