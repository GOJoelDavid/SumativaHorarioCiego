import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase} from '@angular/fire/database';
import { environment } from '../environments/environment'; // Importa el entorno

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,BrowserModule,provideFirebaseApp(() => initializeApp(environment.firebase)),provideDatabase(() => getDatabase()), provideFirebaseApp(() => initializeApp({"projectId":"horariociego","appId":"1:856554534434:web:fc600a623c50cceae57c7b","databaseURL":"https://horariociego-default-rtdb.firebaseio.com","storageBucket":"horariociego.appspot.com","apiKey":"AIzaSyDW6akfJ87Fp8cKMzuAn4ibAIBnkTvNUqI","authDomain":"horariociego.firebaseapp.com","messagingSenderId":"856554534434"}))],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
