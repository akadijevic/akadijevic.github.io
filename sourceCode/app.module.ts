import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { NgDatepickerModule } from 'ng2-datepicker';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatInputModule } from '@angular/material/input';
import {MatButtonModule } from '@angular/material/button';
import {MatAutocompleteModule } from '@angular/material/autocomplete';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{HttpModule} from '@angular/http';
import { authService } from './auth.service';
import { GalleryComponent } from './gallery/gallery.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { StatisticsComponent } from './statistics/statistics.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { TournamentComponent } from './tournament/tournament.component';
import {ReversePipe} from './gallery/reverse';
import {RouterModule, Router} from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    GalleryComponent,
    MyDialogComponent,
    StatisticsComponent,
    TournamentComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgDatepickerModule,
    NgbModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatAutocompleteModule,
    HttpModule,  
    AngularFireStorageModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    NgxImageZoomModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'login', component: LoginComponent},
      { path: 'statistics', component: StatisticsComponent},
      { path: 'gallery', component: GalleryComponent},
      { path: 'tournament', component: GalleryComponent}

    ]),
    MatTooltipModule,
    MatSnackBarModule
],
entryComponents: [
  MyDialogComponent
],
  providers: [authService],
  bootstrap: [AppComponent]
})
export class AppModule { }
