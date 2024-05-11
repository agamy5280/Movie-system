import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SeatsComponent } from './components/seats/seats.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MoveisTimesComponent } from './components/moveis-times/moveis-times.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    HomeComponent,
    SeatsComponent,
    MoveisTimesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
