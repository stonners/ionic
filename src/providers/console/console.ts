import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {AngularFirestore} from "angularfire2/firestore";
import {map} from "rxjs/operators";

/*
  Generated class for the FilmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FilmProvider {
  consoleSubject = new Subject<any[]>();
  private consoles: any = [];

  constructor(private db: AngularFirestore) {
    this.getAllConsoles();
  }

  /**
   * permet de'envoyer la modification a tous les components en train d'utiliser le Subject
   */
  emitFilmSubject() {
    this.consoleSubject.next(this.consoles.slice());
  }

  /**
   * Permet de récupérer l'id du produit et de le retourner
   */
  getConsoleById(id: number) {
    for (const console of this.consoles) {
      if (console.id == id) return console
    }
  }


  /**
   * Permet de sauvegarder le produit
   * @param console
   */
  saveNewConsole(console: any) {
    return new Observable(obs => {
      this.db.collection('test').add(console).then(() => {

      })
    })
  }


  /**
   * Permet de récupérer toutes les consoles depuis la bdd
   */
  getAllConsoles() {
    return this.db.collection('test').snapshotChanges().pipe(
      map(changes => {
        return changes.map(doc => {
          return {
            id: doc.payload.doc.id,
            data: doc.payload.doc.data()
          };
        });
      })
    ).subscribe(res => {
      this.consoles = res;
      this.emitFilmSubject();
    });
  }

  /**
   * Permet de mettre a jour un produit de la bdd lors d'une modification
   * @param console
   * @param id
   */
  update(console: any, id: any) {
    return new Observable(obs => {
      this.db.doc(`test/${id}`).update(console);
      obs.next();
    });
  }

  /**
   * Permet de supprimer un produit de la bdd
   * @param id
   */
  delete(id: any) {
    this.db.doc(`test/${id}`).delete();
  }
}
