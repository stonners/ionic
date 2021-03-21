import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {FilmProvider} from "../../../providers/console/console";

/**
 * Generated class for the FilmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-film',
  templateUrl: 'film.html',
})
export class FilmPage implements OnInit {
  public modif: boolean = false;
  public title: string;
  public id: number;
  public console: any;
  private alertCtrl: AlertController;

  constructor(public navCtrl: NavController, public navParams: NavParams, alertCtrl: AlertController, private Console: FilmProvider, private Toast: ToastController) {
    this.alertCtrl = alertCtrl;
  }

  ngOnInit() {
    this.title = this.navParams.get('name');
    this.id = this.navParams.get('id');
    this.console = this.Console.getConsoleById(this.id);
  }

  /**
   * verification pour passer en mode modification
   */
  onGoAccessModif() {
    let alert = this.alertCtrl.create({
      title: 'Etes vous sur de vouloir modifier ?',
      subTitle: 'Vous rendez possible la modification',
      buttons: [
        {
          text: 'Annuler',
          role: 'Cancel'
        }, {
          text: 'Confirmer',
          handler: () => {
            this.modif = !this.modif;
          }
        }
      ]
    });
    alert.present();
  }

  /**
   * appelle le provider pour la modification du produit
   */
  onModif() {
    this.Console.update(this.console.data, this.console.id).subscribe(() => {
      const toast = this.Toast.create({
        message: "Vos changement ont été sauvegardées",
        duration: 2000
      });
      toast.present();
      this.modif = false;
    })
  }

  /**
   * appelle le provider pour la suppression du produit
   */
  suppr() {
    this.Console.delete(this.id);
    const toast = this.Toast.create({
      message: "Votre produit a été détruit",
      duration: 2000
    });
    toast.present();
  }

}
