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
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { RegisterComponent } from './components/register/register.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PrevReservationsComponent } from './components/prev-reservations/prev-reservations.component';
import { ReservationComponent } from './components/prev-reservations/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    HomeComponent,
    SeatsComponent,
    MoveisTimesComponent,
    LoginPageComponent,
    ProfileEditComponent,
    RegisterComponent,
    PrevReservationsComponent,
    ReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
