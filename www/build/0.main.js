webpackJsonp([0],{

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDetalleWodPageModule", function() { return ModalDetalleWodPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_detalle_wod__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModalDetalleWodPageModule = (function () {
    function ModalDetalleWodPageModule() {
    }
    return ModalDetalleWodPageModule;
}());
ModalDetalleWodPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal_detalle_wod__["a" /* ModalDetalleWodPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_detalle_wod__["a" /* ModalDetalleWodPage */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__modal_detalle_wod__["a" /* ModalDetalleWodPage */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]
        ]
    })
], ModalDetalleWodPageModule);

//# sourceMappingURL=modal-detalle-wod.module.js.map

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDetalleWodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_base_data_base__ = __webpack_require__(180);
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
 * Generated class for the ModalDetalleWodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ModalDetalleWodPage = (function () {
    function ModalDetalleWodPage(navCtrl, navParams, viewCtrl, alertCtrl, camera, socialSharing, dataBase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.socialSharing = socialSharing;
        this.dataBase = dataBase;
        this.edicion = false;
        this.wod = this.navParams.data;
    }
    ModalDetalleWodPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalDetalleWodPage');
    };
    ModalDetalleWodPage.prototype.cerrarModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalDetalleWodPage.prototype.mostrarMensaje = function (texto, titulo) {
        if (titulo === void 0) { titulo = 'Mensaje'; }
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['Ok']
        });
        alert.present();
    };
    ModalDetalleWodPage.prototype.initModal = function (fab) {
        fab.close();
        this.edicion = false;
    };
    ModalDetalleWodPage.prototype.guardarWod = function (fab) {
        var _this = this;
        if (this.edicion) {
            return this.dataBase.updateWod(this.wod).then(function (wod) {
                _this.mostrarMensaje('Se ha guardado correctamente.');
                _this.initModal(fab);
            }, function (err) { _this.mostrarMensaje(err, 'Error'); });
        }
        else {
            this.edicion = true;
            fab.close();
        }
    };
    ModalDetalleWodPage.prototype.formatWodShare = function (wod) {
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
    ModalDetalleWodPage.prototype.compartirWod = function (fab) {
        var _this = this;
        this.socialSharing.share(this.formatWodShare(this.wod), '', this.wod.imagen, null).then(function () {
            _this.initModal(fab);
        }).catch(function (e) {
            _this.mostrarMensaje('Error al compartir en Facebook' + e, 'Error');
        });
    };
    ModalDetalleWodPage.prototype.compartirWodFacebook = function (fab) {
        var _this = this;
        this.socialSharing.shareViaFacebookWithPasteMessageHint(this.formatWodShare(this.wod), this.wod.imagen, null, this.formatWodShare(this.wod)).then(function () {
            _this.initModal(fab);
        }).catch(function (e) {
            _this.mostrarMensaje('Error al compartir en Facebook' + e, 'Error');
        });
    };
    ModalDetalleWodPage.prototype.compartirWodTwitter = function (fab) {
        var _this = this;
        this.socialSharing.shareViaTwitter(this.formatWodShare(this.wod), this.wod.imagen, null).then(function () {
            _this.initModal(fab);
        }).catch(function (e) {
            _this.mostrarMensaje('Error al compartir en Twitter' + e, 'Error');
        });
    };
    ModalDetalleWodPage.prototype.compartirWodWhatsapp = function (fab) {
        var _this = this;
        this.socialSharing.shareViaWhatsApp(this.formatWodShare(this.wod), this.wod.imagen, null).then(function () {
            _this.initModal(fab);
        }).catch(function (e) {
            _this.mostrarMensaje('Error al compartir en WhatsApp: ' + e, 'Error');
        });
    };
    ModalDetalleWodPage.prototype.compartirWodInstagram = function (fab) {
        var _this = this;
        this.socialSharing.shareViaInstagram(this.formatWodShare(this.wod), this.wod.imagen).then(function () {
            _this.initModal(fab);
        }).catch(function (e) {
            _this.mostrarMensaje('Error al compartir en Instagram' + e, 'Error');
        });
    };
    ModalDetalleWodPage.prototype.obtenerImagen = function () {
        var _this = this;
        if (this.edicion) {
            var cameraOptions = {
                quality: 50,
                encodingType: this.camera.EncodingType.JPEG,
                destinationType: this.camera.DestinationType.DATA_URL,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            this.camera.getPicture(cameraOptions).then(function (imageData) {
                // imageData is a base64 encoded string
                _this.wod.imagen = 'data:image/jpeg;base64,' + imageData;
            }, function (err) {
                // this.mostrarMensaje(err, 'Error');
            });
        }
    };
    return ModalDetalleWodPage;
}());
ModalDetalleWodPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'page-modal-detalle-wod',template:/*ion-inline-start:"C:\Users\mbleon\Desktop\comparteTuWod\src\pages\modal-detalle-wod\modal-detalle-wod.html"*/'<!--\n  Generated template for the ModalDetalleWodPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ wod.nombre }}</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="cerrarModal()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <ion-fab top right #fabMenu>\n        <button ion-fab mini [disabled]="!wodForm.form.valid && edicion"><ion-icon name="add"></ion-icon></button>\n        <ion-fab-list>\n          <button ion-fab (click)="guardarWod(fabMenu)" *ngIf="!edicion"><ion-icon name="create"></ion-icon></button>\n          <button ion-fab (click)="guardarWod(fabMenu)" *ngIf="edicion"><ion-icon name="md-thumbs-up"></ion-icon></button>\n          <button ion-fab (click)="compartirWodFacebook(fabMenu)"><ion-icon name="logo-facebook"></ion-icon></button>\n          <button ion-fab (click)="compartirWodTwitter(fabMenu)"><ion-icon name="logo-twitter"></ion-icon></button>\n          <button ion-fab (click)="compartirWodWhatsapp(fabMenu)"><ion-icon name="logo-whatsapp"></ion-icon></button>\n          <button ion-fab (click)="compartirWodInstagram(fabMenu)"><ion-icon name="logo-instagram"></ion-icon></button>\n          <button ion-fab (click)="compartirWod(fabMenu, nuevoWodForm)"><ion-icon name="share"></ion-icon></button>\n        </ion-fab-list>\n      </ion-fab>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-avatar>\n        <img [src]="wod.imagen" *ngIf="wod.imagen" (tap)="obtenerImagen()" />\n        <img src="assets/img/no-thumb.png" *ngIf="!wod.imagen" (tap)="obtenerImagen()" />\n      </ion-avatar>\n      <form #wodForm="ngForm">\n        <ion-list>\n          <ion-item>\n            <ion-label stacked>{{ \'Nombre\' | translate }}</ion-label>\n            <ion-input [(ngModel)]="wod.nombre" [disabled]="!edicion" name="nombre" placeholder="{{ \'Nombre\' | translate }}" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label stacked>{{ \'Descipcion\' | translate }}</ion-label>\n            <ion-textarea [(ngModel)]="wod.descripcion" [disabled]="!edicion" name="descripcion" placeholder="{{ \'Descipcion\' | translate }}"></ion-textarea>\n          </ion-item>\n          <ion-item>\n            <ion-label stacked>{{ \'Fecha\' | translate }}</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY" [disabled]="!edicion" [(ngModel)]="wod.fecha" name="fecha"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-label stacked>{{ \'Tiempo\' | translate }}</ion-label>\n            <ion-datetime displayFormat="HH:mm:ss" [disabled]="!edicion" [(ngModel)]="wod.tiempo" name="tiempo"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-label stacked>{{ \'Repeticiones\' | translate }}</ion-label>\n            <ion-input [(ngModel)]="wod.repeticiones" [disabled]="!edicion" name="repeticiones" type="number"></ion-input>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\mbleon\Desktop\comparteTuWod\src\pages\modal-detalle-wod\modal-detalle-wod.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_4__providers_data_base_data_base__["a" /* DataBaseProvider */]])
], ModalDetalleWodPage);

//# sourceMappingURL=modal-detalle-wod.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map