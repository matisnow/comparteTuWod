import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, FabContainer, AlertController } from 'ionic-angular';
import { Wod } from '../../app/app.component';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';
import { DataBaseProvider } from '../../providers/data-base/data-base';

/**
 * Generated class for the ModalDetalleWodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-detalle-wod',
  templateUrl: 'modal-detalle-wod.html'
})
export class ModalDetalleWodPage {
  wod: Wod;
  edicion:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl : ViewController, private alertCtrl: AlertController, private camera: Camera, private socialSharing: SocialSharing, private dataBase: DataBaseProvider) {
    this.wod = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalDetalleWodPage');
  }

  cerrarModal(){
    this.viewCtrl.dismiss();
  }

  mostrarMensaje(texto:string, titulo:string = 'Mensaje') {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: texto,
      buttons: ['Ok']
    });
    alert.present();
  }

  initModal(fab: FabContainer) {
    fab.close();
    this.edicion = false;
  }

  guardarWod(fab: FabContainer) {
    if (this.edicion) {
      return this.dataBase.updateWod(this.wod).then((wod)=>{
        this.mostrarMensaje('Se ha guardado correctamente.');
        this.initModal(fab);
      },(err)=>{  this.mostrarMensaje(err, 'Error'); });
    } else {
      this.edicion = true;
      fab.close();
    }
  }

  formatWodShare(wod:Wod) {
    let stringWod:string = '';

    if (wod.nombre) {
      stringWod+= wod.nombre;
    }

    if (wod.descripcion) {
      stringWod+= ' - ' + wod.descripcion;
    }

    if (wod.fecha) {
      let dateFecha = new Date(wod.fecha);
      stringWod+= ' - ' + dateFecha.getDate() + '/'+ dateFecha.getMonth() + '/' + dateFecha.getFullYear();
    }

    if (wod.tiempo) {
      stringWod+= ' - ' + wod.tiempo;
    }

    if (wod.repeticiones) {
      stringWod+= ' - ' + wod.repeticiones;
    }

    return stringWod;
  }

  compartirWod(fab: FabContainer) {
    this.socialSharing.share(this.formatWodShare(this.wod), '', this.wod.imagen, null).then(() => {
      this.initModal(fab);
    }).catch((e) => {
      this.mostrarMensaje('Error al compartir en Facebook' + e, 'Error');
    });
  }

  compartirWodFacebook(fab: FabContainer) {
    this.socialSharing.shareViaFacebookWithPasteMessageHint(this.formatWodShare(this.wod), this.wod.imagen, null, this.formatWodShare(this.wod)).then(() => {
      this.initModal(fab);
    }).catch((e) => {
      this.mostrarMensaje('Error al compartir en Facebook' + e, 'Error');
    });
  }

  compartirWodTwitter(fab: FabContainer) {
    this.socialSharing.shareViaTwitter(this.formatWodShare(this.wod), this.wod.imagen, null).then(() => {
      this.initModal(fab);
    }).catch((e) => {
      this.mostrarMensaje('Error al compartir en Twitter' + e, 'Error');
    });
  }

  compartirWodWhatsapp(fab: FabContainer) {
    this.socialSharing.shareViaWhatsApp(this.formatWodShare(this.wod), this.wod.imagen, null).then(() => {
      this.initModal(fab);
    }).catch((e) => {
      this.mostrarMensaje('Error al compartir en WhatsApp: ' + e, 'Error');
    });
  }

  compartirWodInstagram(fab: FabContainer) {
    this.socialSharing.shareViaInstagram(this.formatWodShare(this.wod), this.wod.imagen).then(() => {
      this.initModal(fab);
    }).catch((e) => {
      this.mostrarMensaje('Error al compartir en Instagram' + e, 'Error');
    });
  }

  obtenerImagen() {
    if (this.edicion) {
      let cameraOptions : CameraOptions = {
          quality: 50,
          encodingType: this.camera.EncodingType.JPEG,
          destinationType: this.camera.DestinationType.DATA_URL,
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
      }

      this.camera.getPicture(cameraOptions).then((imageData) => {
        // imageData is a base64 encoded string
        this.wod.imagen = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        // this.mostrarMensaje(err, 'Error');
      });
    }
  }
}
