import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataBaseProvider } from '../providers/data-base/data-base';
import {TranslateService} from '@ngx-translate/core';

export class Wod {
  id: number;
  nombre: string;
  descripcion: string;
  fecha: string;
  imagen: string;
  tiempo: string;
  repeticiones: number;

  constructor() {
    this.fecha = new Date().toISOString();
  }
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'InicioPage';

  pages: Array<{title: string, component: string, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private dataBase: DataBaseProvider, private alertCtrl: AlertController, private translate: TranslateService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: 'InicioPage', icon: 'add' },
      { title: 'Wods', component: 'ListaWodPage', icon: 'list' }
    ];

    // Traducimos los titulos de Menu
    this.pages.forEach(function(page) {
      translate.get(page.title).subscribe((res: string) => {
        page.title = res;
      });
    });
  }

  mostrarMensaje(texto:string, titulo:string = 'Mensaje') {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: texto,
      buttons: ['Ok']
    });
    alert.present();
  }

  initializeApp() {
    // Cargamos el idioma
    var userLang = navigator.language.split('-')[0]; // use navigator lang if available
    userLang = /(en|es)/gi.test(userLang) ? userLang : 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(userLang);

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // Inicializamos la Base de datos
      this.dataBase.openDb()
      .then(() => {
        this.dataBase.createTableWods().then((res) => {
        },(err)=>{ this.mostrarMensaje(err, 'Error') });
      },(err)=>{ this.mostrarMensaje(err, 'Error') });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
