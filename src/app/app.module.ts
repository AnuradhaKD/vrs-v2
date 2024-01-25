import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './main-components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"vehicle-related-services-v1","appId":"1:367525452527:web:fe6c729d5c52c0f7e5d91a","storageBucket":"vehicle-related-services-v1.appspot.com","apiKey":"AIzaSyBiG8zfb-wtBmpLg3L9ACfOw6wjPGle3aA","authDomain":"vehicle-related-services-v1.firebaseapp.com","messagingSenderId":"367525452527","measurementId":"G-G5P2C7Q7BT"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
