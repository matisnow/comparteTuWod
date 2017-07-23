webpackJsonp([2],{

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InicioPageModule = (function () {
    function InicioPageModule() {
    }
    return InicioPageModule;
}());
InicioPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__inicio__["a" /* InicioPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__inicio__["a" /* InicioPage */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__inicio__["a" /* InicioPage */]
        ]
    })
], InicioPageModule);

//# sourceMappingURL=inicio.module.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_base_data_base__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the InicioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var InicioPage = (function () {
    function InicioPage(navCtrl, navParams, alertCtrl, camera, socialSharing, dataBase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.socialSharing = socialSharing;
        this.dataBase = dataBase;
        this.nuevoWod = new __WEBPACK_IMPORTED_MODULE_2__app_app_component__["b" /* Wod */]();
    }
    InicioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioPage');
    };
    InicioPage.prototype.mostrarMensaje = function (texto, titulo) {
        if (titulo === void 0) { titulo = 'Mensaje'; }
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['Ok']
        });
        alert.present();
    };
    InicioPage.prototype.limpiarWod = function (fab, nuevoWodForm) {
        nuevoWodForm.reset();
        fab.close();
    };
    InicioPage.prototype.guardarWod = function (fab, nuevoWodForm, limpiar) {
        var _this = this;
        if (limpiar === void 0) { limpiar = true; }
        return this.dataBase.addWod(this.nuevoWod).then(function (wod) {
            _this.mostrarMensaje('Se ha guardado correctamente.');
            if (limpiar) {
                _this.limpiarWod(fab, nuevoWodForm);
            }
        }, function (err) { _this.mostrarMensaje(err, 'Error'); });
    };
    InicioPage.prototype.formatWodShare = function (wod) {
        var stringWod = '';
        if (wod.nombre) {
            stringWod += wod.nombre;
        }
        if (wod.descripcion) {
            stringWod += ' - ' + wod.descripcion;
        }
        if (wod.fecha) {
            var dateFecha = new Date(wod.fecha);
            stringWod += ' - ' + dateFecha.getDate() + '/' + dateFecha.getMonth() + '/' + dateFecha.getFullYear();
        }
        if (wod.tiempo) {
            stringWod += ' - ' + wod.tiempo;
        }
        if (wod.repeticiones) {
            stringWod += ' - ' + wod.repeticiones;
        }
        return stringWod;
    };
    InicioPage.prototype.compartirWod = function (fab, nuevoWodForm) {
        var _this = this;
        this.guardarWod(fab, nuevoWodForm, false).then(function () {
            _this.socialSharing.share(_this.formatWodShare(_this.nuevoWod), '', _this.nuevoWod.imagen, null).then(function () {
                _this.limpiarWod(fab, nuevoWodForm);
            }).catch(function (e) {
                _this.mostrarMensaje('Error al compartir en Facebook' + e, 'Error');
            });
        });
    };
    InicioPage.prototype.compartirWodFacebook = function (fab, nuevoWodForm) {
        var _this = this;
        this.guardarWod(fab, nuevoWodForm, false).then(function () {
            _this.socialSharing.shareViaFacebookWithPasteMessageHint(_this.formatWodShare(_this.nuevoWod), _this.nuevoWod.imagen, null, _this.formatWodShare(_this.nuevoWod)).then(function () {
                _this.limpiarWod(fab, nuevoWodForm);
            }).catch(function (e) {
                _this.mostrarMensaje('Error al compartir en Facebook' + e, 'Error');
            });
        });
    };
    InicioPage.prototype.compartirWodTwitter = function (fab, nuevoWodForm) {
        var _this = this;
        this.guardarWod(fab, nuevoWodForm, false).then(function () {
            _this.socialSharing.shareViaTwitter(_this.formatWodShare(_this.nuevoWod), _this.nuevoWod.imagen, null).then(function () {
                _this.limpiarWod(fab, nuevoWodForm);
            }).catch(function (e) {
                _this.mostrarMensaje('Error al compartir en Twitter' + e, 'Error');
            });
        });
    };
    InicioPage.prototype.compartirWodWhatsapp = function (fab, nuevoWodForm) {
        var _this = this;
        this.guardarWod(fab, nuevoWodForm, false).then(function () {
            _this.socialSharing.shareViaWhatsApp(_this.formatWodShare(_this.nuevoWod), _this.nuevoWod.imagen, null).then(function () {
                _this.limpiarWod(fab, nuevoWodForm);
            }).catch(function (e) {
                _this.mostrarMensaje('Error al compartir en WhatsApp: ' + e, 'Error');
            });
        });
    };
    InicioPage.prototype.compartirWodInstagram = function (fab, nuevoWodForm) {
        var _this = this;
        this.guardarWod(fab, nuevoWodForm, false).then(function () {
            _this.socialSharing.shareViaInstagram(_this.formatWodShare(_this.nuevoWod), _this.nuevoWod.imagen).then(function () {
                _this.limpiarWod(fab, nuevoWodForm);
            }).catch(function (e) {
                _this.mostrarMensaje('Error al compartir en Instagram' + e, 'Error');
            });
        });
    };
    InicioPage.prototype.obtenerImagen = function () {
        var _this = this;
        var cameraOptions = {
            quality: 50,
            encodingType: this.camera.EncodingType.JPEG,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            // imageData is a base64 encoded string
            _this.nuevoWod.imagen = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // this.mostrarMensaje(err, 'Error');
        });
    };
    return InicioPage;
}());
InicioPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'page-inicio',template:/*ion-inline-start:"C:\Users\SnOw\Desktop\comparteTuWod\src\pages\inicio\inicio.html"*/'<!--\n\n  Generated template for the InicioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{ \'Titulo\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      {{ \'NuevoWod\' | translate }}\n\n      <ion-fab top right #fabMenu>\n\n        <button ion-fab mini [disabled]="!nuevoWodForm.form.valid"><ion-icon name="add"></ion-icon></button>\n\n        <ion-fab-list>\n\n          <button ion-fab (click)="guardarWod(fabMenu, nuevoWodForm)"><ion-icon name="create"></ion-icon></button>\n\n          <button ion-fab (click)="compartirWodFacebook(fabMenu, nuevoWodForm)"><ion-icon name="logo-facebook"></ion-icon></button>\n\n          <button ion-fab (click)="compartirWodTwitter(fabMenu, nuevoWodForm)"><ion-icon name="logo-twitter"></ion-icon></button>\n\n          <button ion-fab (click)="compartirWodWhatsapp(fabMenu, nuevoWodForm)"><ion-icon name="logo-whatsapp"></ion-icon></button>\n\n          <button ion-fab (click)="compartirWodInstagram(fabMenu, nuevoWodForm)"><ion-icon name="logo-instagram"></ion-icon></button>\n\n          <button ion-fab (click)="compartirWod(fabMenu, nuevoWodForm)"><ion-icon name="share"></ion-icon></button>\n\n        </ion-fab-list>\n\n      </ion-fab>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-avatar>\n\n        <img [src]="nuevoWod.imagen" *ngIf="nuevoWod.imagen" (tap)="obtenerImagen()" />\n\n        <img src="assets/img/no-thumb.png" *ngIf="!nuevoWod.imagen" (tap)="obtenerImagen()" />\n\n      </ion-avatar>\n\n      <form #nuevoWodForm="ngForm">\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label stacked>{{ "Nombre" | translate }}</ion-label>\n\n            <ion-input [(ngModel)]="nuevoWod.nombre" name="nombre" placeholder="{{ \'Nombre\' | translate }}" required></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label stacked>{{ "Descipcion" | translate }}</ion-label>\n\n            <ion-textarea [(ngModel)]="nuevoWod.descripcion" name="descripcion" placeholder="{{ \'Descipcion\' | translate }}"></ion-textarea>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label stacked>{{ "Fecha" | translate }}</ion-label>\n\n            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="nuevoWod.fecha" name="fecha"></ion-datetime>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label stacked>{{ "Tiempo" | translate }}</ion-label>\n\n            <ion-datetime displayFormat="HH:mm:ss" [(ngModel)]="nuevoWod.tiempo" name="tiempo"></ion-datetime>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label stacked>{{ "Repeticiones" | translate }}</ion-label>\n\n            <ion-input [(ngModel)]="nuevoWod.repeticiones" name="repeticiones" type="number"></ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n      </form>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\SnOw\Desktop\comparteTuWod\src\pages\inicio\inicio.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_5__providers_data_base_data_base__["a" /* DataBaseProvider */]])
], InicioPage);

//# sourceMappingURL=inicio.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map