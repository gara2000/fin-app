import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { MonthIncomeComponent } from './components/pages/month-income/month-income.component';
import { BalanceComponent } from './components/pages/balance/balance.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ItemComponent } from './components/partials/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MonthIncomeComponent,
    BalanceComponent,
    HomeComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
