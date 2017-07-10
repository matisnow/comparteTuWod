import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { DataBaseProvider } from '../../providers/data-base/data-base';
import { Wod } from '../../app/app.component';

/**
 * Generated class for the ListaWodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lista-wod',
  templateUrl: 'lista-wod.html'
})
export class ListaWodPage {

  wods: Array<Wod> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataBase: DataBaseProvider, private alertCtrl: AlertController, public modalCtrl : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaWodPage');
  }

  ionViewDidEnter(){
    this.cargarListaWods();
  }

  cargarListaWods() {
    this.dataBase.getWods().then((res: Array<Wod>)=>{
      this.wods = res;
    },(err)=>{ this.mostrarMensaje(err, 'Error') });
  }

  mostrarMensaje(texto:string, titulo:string = 'Mensaje') {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: texto,
      buttons: ['Ok']
    });
    alert.present();
  }

  muestraWod(wod) {
    let modalSitio = this.modalCtrl.create( 'ModalDetalleWodPage', wod );
    modalSitio.present();
  }

  borrarWod(id) {
    let alert = this.alertCtrl.create({
      title: 'Confirmar borrado',
      message: '¿Estás seguro de que deseas eliminar este wod?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            // Ha respondido que no así que no hacemos nada
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.dataBase.deleleteWod(id).then((res)=>{
              // Una vez borrado el wod recargamos el listado
              this.cargarListaWods();
            },(err)=>{
              this.mostrarMensaje('Error al borrar de la bd: ' + err, 'Error')
            });
          }
        }
      ]
    });

    alert.present();
  }
}
