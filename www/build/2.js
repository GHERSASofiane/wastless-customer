webpackJsonp([2],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPubsPageModule", function() { return MyPubsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_pubs__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyPubsPageModule = /** @class */ (function () {
    function MyPubsPageModule() {
    }
    MyPubsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_pubs__["a" /* MyPubsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_pubs__["a" /* MyPubsPage */]),
            ],
        })
    ], MyPubsPageModule);
    return MyPubsPageModule;
}());

//# sourceMappingURL=my-pubs.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPubsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_delete_product_delete_product__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_my_pubs_my_pubs__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_offer_edit_offer__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyPubsPage = /** @class */ (function () {
    function MyPubsPage(navCtrl, navParams, DeletProv, MyPubProv, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.DeletProv = DeletProv;
        this.MyPubProv = MyPubProv;
        this.alertCtrl = alertCtrl;
        this.OffLenght = 0;
        this.userMe = navParams.get('user');
        this.GetProduct();
    }
    MyPubsPage.prototype.ionViewDidLoad = function () { };
    MyPubsPage.prototype.GetProduct = function () {
        var _this = this;
        this.MyPubProv.MyPubs(this.userMe.userId).subscribe(function (res) {
            if (res.status == "ok") {
                _this.offrs = res.reponse;
                _this.OffLenght = _this.offrs.length;
            }
            else {
                _this.showAlert("ERREUR", res.message);
            }
        }, function (err) { return _this.showAlert("ERREUR", "Erreur sur le serveur :( :( "); });
    };
    MyPubsPage.prototype.Delete = function (id) {
        var _this = this;
        this.DeletProv.DeleteProduct(id).subscribe(function (res) {
            if (res.status == "ok") {
                _this.showAlert("SUCCESS", res.message);
            }
            else {
                _this.showAlert("ERREUR", res.message);
            }
        }, function (err) { return _this.showAlert("ERREUR", "Erreur sur le serveur :( :( "); });
    };
    MyPubsPage.prototype.Edit = function (offre) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_offer_edit_offer__["a" /* EditOfferPage */], { offre: offre });
    };
    //*********** Function pour alert */
    MyPubsPage.prototype.showAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['OK']
        });
        alert.present();
    };
    MyPubsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-pubs',template:/*ion-inline-start:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/my-pubs/my-pubs.html"*/'<ion-header>\n\n  <ion-navbar>\n  <div style="font-family: Snell Roundhand, cursive; " class="text-info">\n    My publications\n  </div>\n</ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div class="row" *ngIf="OffLenght !== 0">\n    <ion-card class="bg-secondary text-light col-sm-3 col-lg-2" *ngFor="let off of offrs">\n      <img src={{off.ProductPicture}} />\n      <ion-card-content>\n        <ion-card-title>\n          <h3>{{off.ProductName}}\n            <small>\n              <ion-badge item-end class="btn-info">{{off.ProductPrice}} EUR</ion-badge>\n            </small>\n          </h3>\n        </ion-card-title>\n\n        <p class="text-light">{{off.ProductDescription}}</p>\n        <button class="btn-info" ion-button round (click)="Delete(off.ProductId)">DELETE</button>\n        <button class="btn-info" ion-button round (click)="Edit(off)">EDIT</button>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/my-pubs/my-pubs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_delete_product_delete_product__["a" /* DeleteProductProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_my_pubs_my_pubs__["a" /* MyPubsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyPubsPage);
    return MyPubsPage;
}());

//# sourceMappingURL=my-pubs.js.map

/***/ })

});
//# sourceMappingURL=2.js.map