import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {firebaseConfig} from '../firebaseConfig';

AngularFireModule.initializeApp(firebaseConfig.fire);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig.fire)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AngularFireAuth],
  bootstrap: [AppComponent],
})
export class AppModule {}
