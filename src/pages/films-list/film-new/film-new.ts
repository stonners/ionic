import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {FilmProvider} from "../../../providers/console/console";

/**
 * Generated class for the FilmNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-film-new',
  templateUrl: 'film-new.html',
})
export class FilmNewPage implements OnInit {
  public console: any = {
    name: null,
    brand: null,
    description: null,
    image: null,
    size: null,
    price: null
  }
  private alertCtrl: AlertController;

  constructor(public navCtrl: NavController, public navParams: NavParams, alertCtrl: AlertController, private Console: FilmProvider, private Toast: ToastController) {
  }

  ngOnInit() {
  }

  add() {
    this.Console.saveNewConsole(this.console).subscribe(() => {
      this.console = {
        name: null,
        brand: null,
        description: null,
        image: null,
        size: null,
        price: null
      }

    })
    const toast = this.Toast.create({
      message: "Votre produit a été sauvegardé",
      duration: 2000
    });
    toast.present();

  }


}
