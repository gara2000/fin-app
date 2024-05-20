import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MonthIncomeComponent } from './components/pages/month-income/month-income.component';
import { ProfileComponent } from './components/pages/profile/profile.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'income', component: MonthIncomeComponent},
  {path:'income/:tab', component: MonthIncomeComponent},
  {path:'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
