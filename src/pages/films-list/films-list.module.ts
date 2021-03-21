import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {FilmsListPage} from './films-list';

@NgModule({
  declarations: [
    FilmsListPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmsListPage),
  ],
})
export class FilmsListPageModule {
}
