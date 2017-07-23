webpackJsonp([1],{

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaWodPageModule", function() { return ListaWodPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_wod__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListaWodPageModule = (function () {
    function ListaWodPageModule() {
    }
    return ListaWodPageModule;
}());
ListaWodPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__lista_wod__["a" /* ListaWodPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lista_wod__["a" /* ListaWodPage */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__lista_wod__["a" /* ListaWodPage */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]
        ]
    })
], ListaWodPageModule);

//# sourceMappingURL=lista-wod.module.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaWodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_base_data_base__ = __webpack_require__(180);
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
 * Generated class for the ListaWodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ListaWodPage = (function () {
    function ListaWodPage(navCtrl, navParams, dataBase, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataBase = dataBase;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.wods = [];
    }
    ListaWodPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListaWodPage');
    };
    ListaWodPage.prototype.ionViewDidEnter = function () {
        this.cargarListaWods();
    };
    ListaWodPage.prototype.cargarListaWods = function () {
        var _this = this;
        this.dataBase.getWods().then(function (res) {
            _this.wods = res;
        }, function (err) { _this.mostrarMensaje(err, 'Error'); });
    };
    ListaWodPage.prototype.mostrarMensaje = function (texto, titulo) {
        if (titulo === void 0) { titulo = 'Mensaje'; }
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['Ok']
        });
        alert.present();
    };
    ListaWodPage.prototype.muestraWod = function (wod) {
        var modalSitio = this.modalCtrl.create('ModalDetalleWodPage', wod);
        modalSitio.present();
    };
    ListaWodPage.prototype.borrarWod = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar borrado',
            message: '¿Estás seguro de que deseas eliminar este wod?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        // Ha respondido que no así que no hacemos nada
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.dataBase.deleleteWod(id).then(function (res) {
                            // Una vez borrado el wod recargamos el listado
                            _this.cargarListaWods();
                        }, function (err) {
                            _this.mostrarMensaje('Error al borrar de la bd: ' + err, 'Error');
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    return ListaWodPage;
}());
ListaWodPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'page-lista-wod',template:/*ion-inline-start:"C:\Users\SnOw\Desktop\comparteTuWod\src\pages\lista-wod\lista-wod.html"*/'<!--\n\n  Generated template for the ListaWodPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{ \'ListaWods\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item-sliding #item *ngFor="let wod of wods">\n\n      <ion-item (click)="muestraWod(wod)">\n\n        <ion-thumbnail item-left>\n\n          <img [src]="wod.imagen" *ngIf="wod.imagen">\n\n          <img src="assets/img/no-thumb.png" *ngIf="!wod.imagen" />\n\n        </ion-thumbnail>\n\n        <h2>{{ wod.nombre }}</h2>\n\n        <p>{{ wod.fecha }}</p>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button  color="danger" (click)="borrarWod(wod.id)">\n\n          <ion-icon name="trash"></ion-icon>\n\n           {{ \'Borrar\' | translate }}\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\SnOw\Desktop\comparteTuWod\src\pages\lista-wod\lista-wod.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_base_data_base__["a" /* DataBaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
], ListaWodPage);

//# sourceMappingURL=lista-wod.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map