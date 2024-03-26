import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MonthIncomeComponent } from './components/pages/month-income/month-income.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'income', component: MonthIncomeComponent},
  {path:'income/:tab', component: MonthIncomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
