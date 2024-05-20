import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { MonthIncomeComponent } from './components/pages/month-income/month-income.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ItemComponent } from './components/partials/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MonthIncomeComponent,
    HomeComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
