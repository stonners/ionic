import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {FilmsListPageModule} from '../pages/films-list/films-list.module'
import {FilmNewPageModule} from '../pages/films-list/film-new/film-new.module'
import {FilmPageModule} from '../pages/films-list/film/film.module'
import {AboutPageModule} from '../pages/about/about.module'
import {TabPageModule} from '../pages/tab/tab.module'
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {FilmProvider} from '../providers/console/console';
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {PhotosPageModule} from "../pages/photos/photos.module";
import {Camera} from "@ionic-native/camera";


const firebase = {
  apiKey: 'AIzaSyBvLu8l-ldEf1ga-2jlj8p-PJUp8A8316E',
  authDomain: 'angular-a9040a.firebaseapp.com',
  projectId: 'angular-a9040a',
  storageBucket: 'angular-a9040a.appspot.com',
  messagingSenderId: '829355365795',
  appId: '1:829355365795:web:f312d876af88f7aa7e7616',
  measurementId: 'G-K5X91N7QTG'
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FilmsListPageModule,
    FilmNewPageModule,
    FilmPageModule,
    AboutPageModule,
    TabPageModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    PhotosPageModule,


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FilmProvider,
    Camera
  ]
})
export class AppModule {
}
