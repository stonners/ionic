import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FilmNewPage} from "./film-new/film-new";
import {FilmPage} from "./film/film";
import {Subscription} from "rxjs";
import {FilmProvider} from "../../providers/console/console";

/**
 * Generated class for the FilmsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-films-list',
  templateUrl: 'films-list.html',
})
export class FilmsListPage implements OnInit {
  public consoles: any = [];
  filmSubscription: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, private Console: FilmProvider) {
  }

  ngOnInit() {
    this.filmSubscription = this.Console.consoleSubject.subscribe((listConsole) => {
      this.consoles = listConsole;
    })
  }

  /**
   *Permet de nous rediriger vers la page FilmNewPage
   */
  onGoToCreate() {
    this.navCtrl.push(FilmNewPage);
  }

  /**
   * permet de nous envoyer vers la page FilmPage pour la modification
   * @param consoleTitle
   * @param _id
   */
  onGoToFilm(consoleTitle: string, _id: string) {
    this.navCtrl.push(FilmPage, {name: consoleTitle, id: _id});
  }


}
