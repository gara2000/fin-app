import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { MonthIncomeComponent } from './components/pages/month-income/month-income.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ItemComponent } from './components/partials/item/item.component';
import { ProfileComponent } from './components/pages/profile/profile.component';

import { Amplify } from 'aws-amplify';
import config from '../amplifyconfiguration.json';
Amplify.configure(config);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MonthIncomeComponent,
    HomeComponent,
    ItemComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AmplifyAuthenticatorModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
