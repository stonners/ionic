import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {FilmNewPage} from './film-new';

@NgModule({
  declarations: [
    FilmNewPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmNewPage),
  ],
})
export class FilmNewPageModule {
}
