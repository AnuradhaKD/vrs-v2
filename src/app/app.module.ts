import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './main-components/login/login.component';

// Import AngularFire modules
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth, Auth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { RegistrationComponent } from './main-components/registration/registration.component';
import { SmallCardsComponent } from './common-components/small-cards/small-cards.component';
import { DetailsCardsComponent } from './common-components/details-cards/details-cards.component';
import { HomeComponent } from './main-components/home/home.component';

const firebaseConfig = {
  "projectId": "vehicle-related-services-v1",
  "appId": "1:367525452527:web:fe6c729d5c52c0f7e5d91a",
  "storageBucket": "vehicle-related-services-v1.appspot.com",
  "apiKey": "AIzaSyBiG8zfb-wtBmpLg3L9ACfOw6wjPGle3aA",
  "authDomain": "vehicle-related-services-v1.firebaseapp.com",
  "messagingSenderId": "367525452527",
  "measurementId": "G-G5P2C7Q7BT"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    SmallCardsComponent,
    DetailsCardsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(()=>initializeApp(firebaseConfig)),
  ],
  providers: [
    { provide: 'Auth', useFactory: () => getAuth() },
    { provide: 'FirestoreInstance', useFactory: () => getFirestore() },
    { provide: 'DatabaseInstance', useFactory: () => getDatabase() },
    { provide: 'StorageInstance', useFactory: () => getStorage() },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
