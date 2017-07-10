import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, FabContainer } from 'ionic-angular';
import {FormGroup} from '@angular/forms';
import { Wod } from '../../app/app.component';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';
import { DataBaseProvider } from '../../providers/data-base/data-base';

/**
 * Generated class for the InicioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  nuevoWod: Wod = new Wod();

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private camera: Camera, private socialSharing: SocialSharing, private dataBase: DataBaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  mostrarMensaje(texto:string, titulo:string = 'Mensaje') {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: texto,
      buttons: ['Ok']
    });
    alert.present();
  }

  limpiarWod(fab: FabContainer, nuevoWodForm: FormGroup) {
    nuevoWodForm.reset();
    fab.close();
  }

  guardarWod(fab: FabContainer, nuevoWodForm: FormGroup, limpiar:boolean = true) {
    return this.dataBase.addWod(this.nuevoWod).then((wod)=>{
      this.mostrarMensaje('Se ha guardado correctamente.');
      if (limpiar) {
        this.limpiarWod(fab, nuevoWodForm);
      }
    },(err)=>{  this.mostrarMensaje(err, 'Error'); })
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

  compartirWod(fab: FabContainer, nuevoWodForm: FormGroup) {
    this.guardarWod(fab, nuevoWodForm, false).then(() => {
      this.socialSharing.share(this.formatWodShare(this.nuevoWod), '', this.nuevoWod.imagen, null).then(() => {
        this.limpiarWod(fab, nuevoWodForm);
      }).catch((e) => {
        this.mostrarMensaje('Error al compartir en Facebook' + e, 'Error');
      });
    });
  }

  compartirWodFacebook(fab: FabContainer, nuevoWodForm: FormGroup) {
    this.guardarWod(fab, nuevoWodForm, false).then(() => {
      this.socialSharing.shareViaFacebookWithPasteMessageHint(this.formatWodShare(this.nuevoWod), this.nuevoWod.imagen, null, this.formatWodShare(this.nuevoWod)).then(() => {
        this.limpiarWod(fab, nuevoWodForm);
      }).catch((e) => {
        this.mostrarMensaje('Error al compartir en Facebook' + e, 'Error');
      });
    });
  }

  compartirWodTwitter(fab: FabContainer, nuevoWodForm: FormGroup) {
    this.guardarWod(fab, nuevoWodForm, false).then(() => {
      this.socialSharing.shareViaTwitter(this.formatWodShare(this.nuevoWod), this.nuevoWod.imagen, null).then(() => {
        this.limpiarWod(fab, nuevoWodForm);
      }).catch((e) => {
        this.mostrarMensaje('Error al compartir en Twitter' + e, 'Error');
      });
    });
  }

  compartirWodWhatsapp(fab: FabContainer, nuevoWodForm: FormGroup) {
    this.guardarWod(fab, nuevoWodForm, false).then(() => {
      this.socialSharing.shareViaWhatsApp(this.formatWodShare(this.nuevoWod), this.nuevoWod.imagen, null).then(() => {
        this.limpiarWod(fab, nuevoWodForm);
      }).catch((e) => {
        this.mostrarMensaje('Error al compartir en WhatsApp: ' + e, 'Error');
      });
    });
  }

  compartirWodInstagram(fab: FabContainer, nuevoWodForm: FormGroup) {
    this.guardarWod(fab, nuevoWodForm, false).then(() => {
      this.socialSharing.shareViaInstagram(this.formatWodShare(this.nuevoWod), this.nuevoWod.imagen).then(() => {
        this.limpiarWod(fab, nuevoWodForm);
      }).catch((e) => {
        this.mostrarMensaje('Error al compartir en Instagram' + e, 'Error');
      });
    });
  }

  obtenerImagen() {
    let cameraOptions : CameraOptions = {
        quality: 50,
        encodingType: this.camera.EncodingType.JPEG,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is a base64 encoded string
      this.nuevoWod.imagen = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // this.mostrarMensaje(err, 'Error');
    });
  }
}
