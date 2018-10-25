webpackJsonp([17],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferConsultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_get_product_det_get_product_det__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OfferConsultPage = /** @class */ (function () {
    function OfferConsultPage(navCtrl, navParams, prodDetProv, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.prodDetProv = prodDetProv;
        this.alertCtrl = alertCtrl;
        this.id = navParams.get('id');
        this.userMe = navParams.get('user');
        this.GetDetails();
    }
    OfferConsultPage.prototype.ionViewDidLoad = function () { };
    OfferConsultPage.prototype.GetDetails = function () {
        var _this = this;
        this.prodDetProv.GetProductDetails(this.id).subscribe(function (res) {
            if (res.status == "ok") {
                _this.infos = res.reponse;
            }
            else {
                _this.showAlert("ERREUR", res.message);
            }
        }, function (err) { return _this.showAlert("ERREUR", "Erreur sur le serveur :( :( "); });
    };
    //*********** Function pour alert */
    OfferConsultPage.prototype.showAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['OK']
        });
        alert.present();
    };
    OfferConsultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offer-consult',template:/*ion-inline-start:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/offer-consult/offer-consult.html"*/'<ion-header>\n\n  <ion-navbar>\n    <div style="font-family: Snell Roundhand, cursive; " class="text-info">\n      Offer Consult\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <pre *ngIf="infos">\n\n<img src={{infos.ProductPicture}}  >\n\nProductName  {{infos.ProductName }}\nProductDate  {{infos.ProductDate}}\nProductDescription  {{infos.ProductDescription}}\nProductPicture  {{infos.ProductPicture}}\nUserMail  {{infos.UserMail}}\nUserAdress  {{infos.UserAdress}}\n\nProductId  {{infos.ProductId}}\nProductPrice  {{infos.ProductPrice}}\nProductStatus  {{infos.ProductStatus}}\nUserId  {{infos.UserId}}\nUserPhone  {{infos.UserPhone}}\n\n</pre>\n</ion-content>'/*ion-inline-end:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/offer-consult/offer-consult.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_get_product_det_get_product_det__["a" /* GetProductDetProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], OfferConsultPage);
    return OfferConsultPage;
}());

//# sourceMappingURL=offer-consult.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditOfferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_Offer__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_edit_product_edit_product__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_pubs_my_pubs__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditOfferPage = /** @class */ (function () {
    function EditOfferPage(navCtrl, navParams, alertCtrl, EditProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.EditProvider = EditProvider;
        this.offre = new __WEBPACK_IMPORTED_MODULE_2__class_Offer__["a" /* Offer */]();
        this.offre = this.navParams.get('offre');
        this.userMe = navParams.get('user');
    }
    EditOfferPage.prototype.ionViewDidLoad = function () { };
    EditOfferPage.prototype.onFileSelected = function (ev) {
        // TODO
        // this.product.ProductPicture = ev.target.value;
        // console.log(ev);
    };
    EditOfferPage.prototype.EditProduct = function () {
        var _this = this;
        this.offre.ProductDescription = this.offre.ProductDescription.toLowerCase();
        this.offre.ProductName = this.offre.ProductName.toLowerCase();
        this.EditProvider.EditProduct(this.offre).subscribe(function (res) {
            if (res.status == "ok") {
                _this.showAlert("SUCCESS", res.message);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__my_pubs_my_pubs__["a" /* MyPubsPage */], { user: _this.userMe });
            }
            else {
                _this.showAlert("ERREUR", res.message);
            }
        }, function (err) { return _this.showAlert("ERREUR", "Erreur sur le serveur :( :( "); });
    };
    //*********** Function pour alert */
    EditOfferPage.prototype.showAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['OK']
        });
        alert.present();
    };
    EditOfferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-offer',template:/*ion-inline-start:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/edit-offer/edit-offer.html"*/'<ion-header>\n\n  <ion-navbar>\n    <div style="font-family: Snell Roundhand, cursive; " class="text-info">\n      Edit Offer\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n\n  <!-- Login form -->\n  <form class="list-form  bg-dark">\n\n    <ion-item>\n      <img src={{offre.ProductPicture}} class="Thumbnail mx-auto d-block img-fluid" />\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>\n        Product Name\n      </ion-label>\n      <ion-input type="text" [(ngModel)]="offre.ProductName" [ngModelOptions]="{standalone: true}"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>\n        Product Description\n      </ion-label>\n      <ion-textarea type="text" [(ngModel)]="offre.ProductDescription" [ngModelOptions]="{standalone: true}" rows="5"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>\n        Product Price\n      </ion-label>\n      <ion-input type="number" [(ngModel)]="offre.ProductPrice" [ngModelOptions]="{standalone: true}"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>\n        Product Picture\n      </ion-label>\n      <ion-input type="file" (change)="onFileSelected($event)" accept="image/*"></ion-input>\n    </ion-item>\n\n  </form>\n\n\n  <div>\n    <button ion-button icon-start block class="bg-info" tappable (click)="EditProduct()">\n      <ion-icon name="md-checkmark-circle"></ion-icon>\n      Register\n    </button>\n\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/edit-offer/edit-offer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_edit_product_edit_product__["a" /* EditProductProvider */]])
    ], EditOfferPage);
    return EditOfferPage;
}());

//# sourceMappingURL=edit-offer.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_update_profile_service_update_profile_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_user__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_home_user_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(30);
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
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(_editProfile, navCtrl, _auth) {
        this._editProfile = _editProfile;
        this.navCtrl = navCtrl;
        this._auth = _auth;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__class_user__["a" /* User */]("", "");
        this.selectedFile = null;
    }
    EditProfilePage.prototype.ionViewWillEnter = function () {
        // console.log('ionViewDidLoad InscriptionPage');
        this.user = this._auth.getUser();
    };
    EditProfilePage.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(this.selectedFile);
    };
    EditProfilePage.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.user.userPicture = btoa(binaryString);
    };
    EditProfilePage.prototype.EditProfile = function () {
        var _this = this;
        this._editProfile.updateProfile(this.user).subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_home_user_home__["a" /* UserHomePage */]);
        }, function (err) { return console.log(err); });
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/edit-profile/edit-profile.html"*/'<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>EditProfile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-icon name="person-add" id="person"></ion-icon>\n    <div id="container">\n        \n        <ion-item>\n            <ion-label floating>userName : </ion-label>\n            <ion-input type="text" [(ngModel)]="user.userName"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label floating>Email</ion-label>\n          <ion-input type="email" [(ngModel)]="user.userMail" ></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label floating>Password : </ion-label>\n          <ion-input type="password" [(ngModel)]="user.userPassword"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating> user Address : </ion-label>\n            <ion-input type="text" [(ngModel)]="user.userAddress"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label floating>user Phone : </ion-label>\n            <ion-input type="tel" [(ngModel)]="user.userPhone"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked > user Picture : </ion-label>\n            <ion-input type="file"  (change)="onFileSelected($event)"></ion-input>\n        </ion-item>\n        \n    \n        <button ion-button (tap)="EditProfile()" id="editProfile"> valider </button>\n        \n      </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/edit-profile/edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_update_profile_service_update_profile_service__["a" /* UpdateProfileServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_user__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sign_up_sign_up__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(111);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(_auth, http, navCtrl) {
        this._auth = _auth;
        this.http = http;
        this.navCtrl = navCtrl;
        this.done = true;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__class_user__["a" /* User */]("", "");
    }
    LoginPage.prototype.logIn = function () {
        var _this = this;
        this.done = false;
        this._auth.login(this.user).subscribe(function (res) {
            console.log(res);
            _this.user = res.reponse;
            _this._auth.setUser(_this.user);
            localStorage.setItem('token', res.token);
        }, function (err) {
            _this.done = true;
            console.log(err);
        }, function () {
            _this.done = true;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */]);
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/login/login.html"*/'<!-- -->\n<ion-content padding class="animated fadeIn login auth-page"> \n  <div class="login-content">\n  \n      <!-- Logo -->\n      <div padding-horizontal text-center class="animated fadeInDown">\n        <div class="logo"></div>\n        <h2 ion-text class="text-primary">\n          <strong>Wastless</strong>\n          <p> Economisons notre argent </p>\n        </h2>\n      </div>\n  \n      <!-- Login form -->\n      <form class="list-form">\n        <ion-item>\n          <ion-label floating>\n            <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n            Email\n          </ion-label>\n          <ion-input type="email" [(ngModel)]="user.userMail" name="userMail"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label floating>\n            <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n            Password\n          </ion-label>\n          <ion-input type="password" [(ngModel)]="user.userPassword" name="userPassword">\n          </ion-input>\n        </ion-item>\n      </form>\n  \n      \n      <div>\n        <button ion-button icon-start block color="dark" tappable (click)="logIn()">\n          <ion-icon name="log-in"></ion-icon>\n          SIGN IN\n          <ion-spinner id="spinner" name="circles" *ngIf="done == false"></ion-spinner> \n        </button>\n      </div>\n  \n  \n      <!-- Other links -->\n      <div text-center margin-top>\n        <span ion-text color="secondary" tappable (click)="register()">New here? <strong>Sign up</strong></span>\n      </div>\n  \n    </div>\n  </ion-content>\n  \n\n\n\n<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div id="container">\n  <ion-item>\n    <ion-label stacked>Email</ion-label>\n    <ion-input type="email" [(ngModel)]="user.userMail" ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Password : </ion-label>\n    <ion-input type="password" [(ngModel)]="user.userPassword"></ion-input>\n  </ion-item>\n  \n  <button ion-button (tap)="logIn()" id="login"> Log In </button>\n\n</div>\n</ion-content>\n-->'/*ion-inline-end:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _c || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_home_user_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_offer_add_offer__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_profile_edit_profile__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(49);
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
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, _auth, _appCtrl) {
        this.navCtrl = navCtrl;
        this._auth = _auth;
        this._appCtrl = _appCtrl;
        this.pages = [];
    }
    MenuPage.prototype.ionViewWillEnter = function () {
        if (this._auth.loggedIn) {
            this.pages = [
                { title: 'edit profile', page: __WEBPACK_IMPORTED_MODULE_5__edit_profile_edit_profile__["a" /* EditProfilePage */] },
                { title: 'addProduct', page: __WEBPACK_IMPORTED_MODULE_4__add_offer_add_offer__["a" /* AddOfferPage */] }
            ];
            this.openPage(__WEBPACK_IMPORTED_MODULE_3__user_home_user_home__["a" /* UserHomePage */]);
        }
        else {
            this._appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
        }
    };
    MenuPage.prototype.openPage = function (page) {
        this.nav.setRoot(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/menu/menu.html"*/'<!--\n  Generated template for the MenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-menu [content]="mycontent">\n    \n  \n    <ion-header>\n\n        <ion-navbar>\n          <ion-title>menu</ion-title>\n        </ion-navbar>\n      \n      </ion-header>\n      \n      <ion-content>\n        <ion-list>\n         <button ion-item detail-none menuClose *ngFor="let p of pages" (click)="openPage(p.page)">\n          {{p.title}}\n         </button>\n        </ion-list>\n      </ion-content>\n  </ion-menu>\n  \n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n\n\n\n'/*ion-inline-end:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-offer/add-offer.module": [
		308,
		16
	],
	"../pages/book-product/book-product.module": [
		309,
		15
	],
	"../pages/cancel-reservation/cancel-reservation.module": [
		310,
		14
	],
	"../pages/driving/driving.module": [
		311,
		2
	],
	"../pages/edit-offer/edit-offer.module": [
		312,
		13
	],
	"../pages/edit-profile/edit-profile.module": [
		313,
		12
	],
	"../pages/login/login.module": [
		314,
		11
	],
	"../pages/menu/menu.module": [
		315,
		10
	],
	"../pages/my-pubs/my-pubs.module": [
		316,
		9
	],
	"../pages/offer-consult/offer-consult.module": [
		317,
		8
	],
	"../pages/offer-search/offer-search.module": [
		318,
		7
	],
	"../pages/sign-out/sign-out.module": [
		319,
		1
	],
	"../pages/sign-up/sign-up.module": [
		320,
		6
	],
	"../pages/user-home/user-home.module": [
		321,
		5
	],
	"../pages/validate-product/validate-product.module": [
		322,
		4
	],
	"../pages/view-history/view-history.module": [
		323,
		0
	],
	"../pages/weather/weather.module": [
		324,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Offer; });
var Offer = /** @class */ (function () {
    function Offer() {
    }
    return Offer;
}());

//# sourceMappingURL=Offer.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddProductProvider = /** @class */ (function () {
    function AddProductProvider(http) {
        this.http = http;
        this.lien = "https://wastless.herokuapp.com/AddProduct";
        console.log('Hello AddProductProvider Provider');
    }
    AddProductProvider.prototype.AddProduct = function (product) {
        return this.http.post(this.lien, product);
    };
    AddProductProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], AddProductProvider);
    return AddProductProvider;
}());

//# sourceMappingURL=add-product.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetProductDetProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetProductDetProvider = /** @class */ (function () {
    function GetProductDetProvider(http) {
        this.http = http;
        this.lien = 'https://wastless.herokuapp.com/ProductDetail?ProductId=';
        console.log('Hello GetProductDetProvider Provider');
    }
    GetProductDetProvider.prototype.GetProductDetails = function (id) {
        return this.http.get(this.lien + id);
    };
    GetProductDetProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], GetProductDetProvider);
    return GetProductDetProvider;
}());

//# sourceMappingURL=get-product-det.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetProductsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetProductsProvider = /** @class */ (function () {
    function GetProductsProvider(http) {
        this.http = http;
        this.lien = 'https://wastless.herokuapp.com/ProductSearch?ProductName=';
    }
    GetProductsProvider.prototype.GetProducts = function (product, page) {
        var lienSerch = this.lien + product + '&Page=' + page;
        return this.http.get(lienSerch);
    };
    GetProductsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], GetProductsProvider);
    return GetProductsProvider;
}());

//# sourceMappingURL=get-products.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditProductProvider = /** @class */ (function () {
    function EditProductProvider(http) {
        this.http = http;
        this.lien = 'https://wastless.herokuapp.com/EditProduct';
    }
    EditProductProvider.prototype.EditProduct = function (product) {
        return this.http.post(this.lien, product);
    };
    EditProductProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], EditProductProvider);
    return EditProductProvider;
}());

//# sourceMappingURL=edit-product.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteProductProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeleteProductProvider = /** @class */ (function () {
    function DeleteProductProvider(http) {
        this.http = http;
        this.lien = 'https://wastless.herokuapp.com/DeleteProduct?idProduct=';
        console.log('Hello DeleteProductProvider Provider');
    }
    DeleteProductProvider.prototype.DeleteProduct = function (id) {
        return this.http.delete(this.lien + id);
    };
    DeleteProductProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], DeleteProductProvider);
    return DeleteProductProvider;
}());

//# sourceMappingURL=delete-product.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPubsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyPubsProvider = /** @class */ (function () {
    function MyPubsProvider(http) {
        this.http = http;
        this.lien = 'https://wastless.herokuapp.com/MyPubs?idUser=';
        console.log('Hello MyPubsProvider Provider');
    }
    MyPubsProvider.prototype.MyPubs = function (id) {
        return this.http.get(this.lien + id);
    };
    MyPubsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], MyPubsProvider);
    return MyPubsProvider;
}());

//# sourceMappingURL=my-pubs.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateProfileServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UpdateProfileServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UpdateProfileServiceProvider = /** @class */ (function () {
    function UpdateProfileServiceProvider(http) {
        this.http = http;
        this._url = "https://wastless.herokuapp.com/editprofile";
        console.log('Hello UpdateProfileServiceProvider Provider');
    }
    UpdateProfileServiceProvider.prototype.updateProfile = function (user) {
        return this.http.post(this._url, user);
    };
    UpdateProfileServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], UpdateProfileServiceProvider);
    return UpdateProfileServiceProvider;
}());

//# sourceMappingURL=update-profile-service.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHomeServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UserHomeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserHomeServiceProvider = /** @class */ (function () {
    function UserHomeServiceProvider(http) {
        this.http = http;
        this._userHome = "https://wastless.herokuapp.com/userhome";
    }
    UserHomeServiceProvider.prototype.getMyProducts = function () {
        return this.http.get(this._userHome);
    };
    UserHomeServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], UserHomeServiceProvider);
    return UserHomeServiceProvider;
}());

//# sourceMappingURL=user-home-service.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOfferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_Offer__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_add_product_add_product__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offer_search_offer_search__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddOfferPage = /** @class */ (function () {
    function AddOfferPage(navCtrl, navParams, addProdProvid, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.addProdProvid = addProdProvid;
        this.alertCtrl = alertCtrl;
        this.product = new __WEBPACK_IMPORTED_MODULE_2__class_Offer__["a" /* Offer */]();
        this.userMe = this.navParams.get('user');
        this.product.ProductPicture = 'https://www.tuxboard.com/photos/2016/10/plus-belles-filles-internet-12.jpg';
        this.product.ProductDate = "2018-10-20";
        this.product.ProductName = "";
        this.product.ProductDescription = "";
        this.product.ProductPrice = 0;
        this.product.UserId = this.userMe.userId;
    }
    AddOfferPage.prototype.onFileSelected = function (ev) {
        // TODO
        // this.product.ProductPicture = ev.target.value;
        // console.log(ev);
    };
    AddOfferPage.prototype.addProduct = function () {
        var _this = this;
        this.product.ProductDescription = this.product.ProductDescription.toLowerCase();
        this.product.ProductName = this.product.ProductName.toLowerCase();
        this.addProdProvid.AddProduct(this.product).subscribe(function (res) {
            if (res.status == "ok") {
                _this.showAlert("SUCCESS", res.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__offer_search_offer_search__["a" /* OfferSearchPage */]);
            }
            else {
                _this.showAlert("ERREUR", res.message);
            }
        }, function (err) { return _this.showAlert("ERREUR", "Erreur sur le serveur :( :( "); });
    };
    //*********** Function pour alert */
    AddOfferPage.prototype.showAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['OK']
        });
        alert.present();
    };
    AddOfferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-offer',template:/*ion-inline-start:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/add-offer/add-offer.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <div style="font-family: Snell Roundhand, cursive; " class="text-info">\n     Add Offer \n  </div>\n  </ion-navbar>\n\n</ion-header>\n \n\n<ion-content padding class="animated fadeIn login auth-page bg-dark">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class="animated fadeInDown">\n      <div class="logo"></div>\n      <h2 ion-text class="text-info">\n        <strong>Wastless</strong>\n        <p> Economisons notre argent </p>\n      </h2>\n \n    </div>\n\n    <!-- Login form -->\n    <form class="list-form  bg-dark">\n      <ion-item>\n        <ion-label floating>\n          Product Name\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="product.ProductName" name="productName"></ion-input>\n      </ion-item>\n \n      <ion-item >\n        \n        <ion-label floating>\n          Product Description\n        </ion-label>\n        <ion-textarea type="text" [(ngModel)]="product.ProductDescription" name="ProductDescription" rows="5"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          Product Price\n        </ion-label>\n        <ion-input type="number" [(ngModel)]="product.ProductPrice" name="ProductPrice"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>\n          Product Picture\n        </ion-label>\n        <ion-input type="file" (change)="onFileSelected($event)" accept="image/*"></ion-input>\n      </ion-item>\n\n    </form>\n\n    \n    <div>\n      <button ion-button icon-start block class="bg-info" tappable (click)="addProduct()">\n        <ion-icon name="md-checkmark-circle"></ion-icon>\n        Register\n      </button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/add-offer/add-offer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_add_product_add_product__["a" /* AddProductProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AddOfferPage);
    return AddOfferPage;
}());

//# sourceMappingURL=add-offer.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the BookProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BookProductPage = /** @class */ (function () {
    function BookProductPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BookProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookProductPage');
    };
    BookProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book-product',template:/*ion-inline-start:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/book-product/book-product.html"*/'<!--\n  Generated template for the BookProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>BookProduct</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/book-product/book-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BookProductPage);
    return BookProductPage;
}());

//# sourceMappingURL=book-product.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelReservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the CancelReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CancelReservationPage = /** @class */ (function () {
    function CancelReservationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CancelReservationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CancelReservationPage');
    };
    CancelReservationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cancel-reservation',template:/*ion-inline-start:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/cancel-reservation/cancel-reservation.html"*/'<!--\n  Generated template for the CancelReservationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>CancelReservation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/cancel-reservation/cancel-reservation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CancelReservationPage);
    return CancelReservationPage;
}());

//# sourceMappingURL=cancel-reservation.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPubsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_delete_product_delete_product__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_my_pubs_my_pubs__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_offer_edit_offer__ = __webpack_require__(108);
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
                _this.GetProduct();
            }
            else {
                _this.showAlert("ERREUR", res.message);
            }
        }, function (err) { return _this.showAlert("ERREUR", "Erreur sur le serveur :( :( "); });
    };
    MyPubsPage.prototype.Edit = function (offre) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_offer_edit_offer__["a" /* EditOfferPage */], { offre: offre, user: this.userMe });
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
            selector: 'page-my-pubs',template:/*ion-inline-start:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/my-pubs/my-pubs.html"*/'<ion-header>\n\n  <ion-navbar>\n    <div style="font-family: Snell Roundhand, cursive; " class="text-info">\n      My publications\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div class="row" *ngIf="OffLenght !== 0">\n    <ion-card class="bg-secondary text-light col-sm-3 col-lg-2" *ngFor="let off of offrs">\n      <img src={{off.ProductPicture}} />\n      <ion-card-content>\n        <ion-card-title>\n          <h3>{{off.ProductName}}\n            <small>\n              <ion-badge item-end class="btn-info">{{off.ProductPrice}} EUR</ion-badge>\n            </small>\n          </h3>\n        </ion-card-title>\n\n        <p class="text-light">{{off.ProductDescription}}</p>\n        <button class="btn-info" ion-button round (click)="Delete(off.ProductId)">DELETE</button>\n        <button class="btn-info" ion-button round (click)="Edit(off)">EDIT</button>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/my-pubs/my-pubs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_delete_product_delete_product__["a" /* DeleteProductProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_my_pubs_my_pubs__["a" /* MyPubsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyPubsPage);
    return MyPubsPage;
}());

//# sourceMappingURL=my-pubs.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the ValidateProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ValidateProductPage = /** @class */ (function () {
    function ValidateProductPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ValidateProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ValidateProductPage');
    };
    ValidateProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-validate-product',template:/*ion-inline-start:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/validate-product/validate-product.html"*/'<!--\n  Generated template for the ValidateProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ValidateProduct</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/validate-product/validate-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ValidateProductPage);
    return ValidateProductPage;
}());

//# sourceMappingURL=validate-product.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WeatherPage = /** @class */ (function () {
    function WeatherPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    WeatherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-weather',template:/*ion-inline-start:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/weather/weather.html"*/'<!--\n  Generated template for the WeatherPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Weather</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/weather/weather.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], WeatherPage);
    return WeatherPage;
}());

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(248);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_book_product_book_product__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cancel_reservation_cancel_reservation__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_edit_offer_edit_offer__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_edit_profile_edit_profile__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_offer_consult_offer_consult__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_offer_search_offer_search__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_sign_up_sign_up__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_validate_product_validate_product__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_token_interceptor_token_interceptor__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_storage__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_weather_weather__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_user_home_service_user_home_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_menu_menu__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_update_profile_service_update_profile_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_get_products_get_products__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_add_product_add_product__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_get_product_det_get_product_det__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_delete_product_delete_product__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_my_pubs_my_pubs__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_edit_product_edit_product__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_book_product_book_product__["a" /* BookProductPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cancel_reservation_cancel_reservation__["a" /* CancelReservationPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_offer_edit_offer__["a" /* EditOfferPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_offer_consult_offer_consult__["a" /* OfferConsultPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_offer_search_offer_search__["a" /* OfferSearchPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_validate_product_validate_product__["a" /* ValidateProductPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_weather_weather__["a" /* WeatherPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_menu_menu__["a" /* MenuPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-offer/add-offer.module#AddOfferPageModule', name: 'AddOfferPage', segment: 'add-offer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/book-product/book-product.module#BookProductPageModule', name: 'BookProductPage', segment: 'book-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cancel-reservation/cancel-reservation.module#CancelReservationPageModule', name: 'CancelReservationPage', segment: 'cancel-reservation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driving/driving.module#DrivingPageModule', name: 'DrivingPage', segment: 'driving', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-offer/edit-offer.module#EditOfferPageModule', name: 'EditOfferPage', segment: 'edit-offer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-pubs/my-pubs.module#MyPubsPageModule', name: 'MyPubsPage', segment: 'my-pubs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offer-consult/offer-consult.module#OfferConsultPageModule', name: 'OfferConsultPage', segment: 'offer-consult', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offer-search/offer-search.module#OfferSearchPageModule', name: 'OfferSearchPage', segment: 'offer-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-out/sign-out.module#SignOutPageModule', name: 'SignOutPage', segment: 'sign-out', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-home/user-home.module#UserHomePageModule', name: 'UserHomePage', segment: 'user-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/validate-product/validate-product.module#ValidateProductPageModule', name: 'ValidateProductPage', segment: 'validate-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-history/view-history.module#ViewHistoryPageModule', name: 'ViewHistoryPage', segment: 'view-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/weather/weather.module#WeatherPageModule', name: 'WeatherPage', segment: 'weather', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_book_product_book_product__["a" /* BookProductPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cancel_reservation_cancel_reservation__["a" /* CancelReservationPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_offer_edit_offer__["a" /* EditOfferPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_offer_consult_offer_consult__["a" /* OfferConsultPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_offer_search_offer_search__["a" /* OfferSearchPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_validate_product_validate_product__["a" /* ValidateProductPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_weather_weather__["a" /* WeatherPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_menu_menu__["a" /* MenuPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__["a" /* AuthProvider */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_18__providers_token_interceptor_token_interceptor__["a" /* TokenInterceptorProvider */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_21__providers_user_home_service_user_home_service__["a" /* UserHomeServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_update_profile_service_update_profile_service__["a" /* UpdateProfileServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_get_products_get_products__["a" /* GetProductsProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_add_product_add_product__["a" /* AddProductProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_get_product_det_get_product_det__["a" /* GetProductDetProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_delete_product_delete_product__["a" /* DeleteProductProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_my_pubs_my_pubs__["a" /* MyPubsProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_edit_product_edit_product__["a" /* EditProductProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return user; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_user__ = __webpack_require__(35);

var user = new __WEBPACK_IMPORTED_MODULE_0__class_user__["a" /* User */]("m.ghersa.s@gmailcom", "string", 1, "GHERSA", "34 rue victor basch 91300 massy", "07 55 11 54 59", "https://firebasestorage.googleapis.com/v0/b/wastless-4b5a9.appspot.com/o/GHERSA-Sofiane.JPEG?alt=media&token=ca284d29-3a50-4e28-8929-f2c67f980faf");
//# sourceMappingURL=user.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reponse; });
var Reponse = /** @class */ (function () {
    function Reponse(status, message, token, reponse) {
        this.status = status;
        this.message = message;
        this.token = token;
        this.reponse = reponse;
    }
    return Reponse;
}());

//# sourceMappingURL=reponse.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_class_user__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http) {
        this.http = http;
        this._loginUrl = "https://wastless.herokuapp.com/authen";
        this._registerUrl = "https://wastless.herokuapp.com/signup";
        this._user = new __WEBPACK_IMPORTED_MODULE_2__pages_class_user__["a" /* User */]("", "");
    }
    AuthProvider.prototype.register = function (user) {
        return this.http.post(this._registerUrl, user);
    };
    AuthProvider.prototype.login = function (user) {
        return this.http.post(this._loginUrl, user);
    };
    AuthProvider.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    AuthProvider.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthProvider.prototype.setUser = function (user) {
        this._user = user;
    };
    AuthProvider.prototype.getUser = function () {
        return this._user;
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], AuthProvider);
    return AuthProvider;
    var _a;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the TokenInterceptorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TokenInterceptorProvider = /** @class */ (function () {
    function TokenInterceptorProvider(_injector) {
        this._injector = _injector;
    }
    TokenInterceptorProvider.prototype.intercept = function (req, next) {
        var authService = this._injector.get(__WEBPACK_IMPORTED_MODULE_1__auth_auth__["a" /* AuthProvider */]);
        var token = authService.getToken();
        if (token) {
            var cloned = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + token)
            });
            return next.handle(cloned).do(function (succ) { return console.log(succ); }, function (err) { return console.log(err); });
        }
        else {
            return next.handle(req);
        }
    };
    TokenInterceptorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
    ], TokenInterceptorProvider);
    return TokenInterceptorProvider;
}());

//# sourceMappingURL=token-interceptor.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(userMail, userPassword, userId, userName, userAdress, userPhone, userPicture) {
        this.userMail = userMail;
        this.userPassword = userPassword;
        this.userId = userId;
        this.userName = userName;
        this.userAdress = userAdress;
        this.userPhone = userPhone;
        this.userPicture = userPicture;
    }
    ;
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offer_search_offer_search__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    HomePage.prototype.search = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__offer_search_offer_search__["a" /* OfferSearchPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="font-family: Snell Roundhand, cursive; " class="row">\n     <div style="color: #00ccff;"> \n      <label class="col-lg-9 col-sm-7 col-7 ">Wastless</label>  \n    \n    <button ion-button (tap)="login()" class="btn btn-sm btn-info col-lg-1 col-sm-2 col-2 align-self-end"><ion-icon name="md-log-in"> LogIn </ion-icon>  </button>\n    <button ion-button (tap)="register()" class="btn btn-sm btn-info col-lg-1 col-sm-2 col-2 align-self-end"> <ion-icon name="ios-create"> Register </ion-icon> </button>\n  </div> \n  </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg-dark">\n  \n  <button ion-button (tap)="search()"> search </button>\n \n\n</ion-content>\n'/*ion-inline-end:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offer_consult_offer_consult__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_get_products_get_products__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__test_user__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OfferSearchPage = /** @class */ (function () {
    function OfferSearchPage(navCtrl, navParams, getproductsProv, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getproductsProv = getproductsProv;
        this.alertCtrl = alertCtrl;
        this.OffreAChercher = '';
        this.OffLenght = 0;
        this.page = 0;
        this.userMe = __WEBPACK_IMPORTED_MODULE_4__test_user__["a" /* user */];
    }
    OfferSearchPage.prototype.ionViewDidLoad = function () {
        this.getoffresBypage('', this.page);
    };
    // ********* Function Fin
    OfferSearchPage.prototype.goToPageOfferConsult = function (id) {
        // go to the MyPage component
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__offer_consult_offer_consult__["a" /* OfferConsultPage */], { id: id, user: this.userMe });
    };
    OfferSearchPage.prototype.openPage = function (page) {
        this.navCtrl.push(page, { user: this.userMe });
    };
    OfferSearchPage.prototype.getOffres = function (ev) {
        this.page = 0;
        this.OffreAChercher = ev.target.value;
        this.getoffresBypage(this.OffreAChercher, this.page);
    };
    OfferSearchPage.prototype.getoffresBypage = function (cle, page) {
        var _this = this;
        this.getproductsProv.GetProducts(cle, page).subscribe(function (res) {
            if (res.status == "ok") {
                _this.offrs = res.reponse;
                _this.OffLenght = _this.offrs.length;
            }
            else {
                _this.showAlert("ERREUR", res.message);
            }
        }, function (err) { return _this.showAlert("ERREUR", "Erreur sur le serveur :( :( "); });
    };
    OfferSearchPage.prototype.PreviousPage = function () {
        if (this.page !== 0) {
            this.page = this.page - 1;
            this.getoffresBypage(this.OffreAChercher, this.page);
        }
    };
    OfferSearchPage.prototype.NextPage = function () {
        if (this.OffLenght !== 0) {
            this.page = this.page + 1;
            this.getoffresBypage(this.OffreAChercher, this.page);
        }
    };
    //*********** Function pour alert */
    OfferSearchPage.prototype.showAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['OK']
        });
        alert.present();
    };
    OfferSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offer-search',template:/*ion-inline-start:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/offer-search/offer-search.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu" menuToggle></ion-icon>\n    </button>\n    <ion-title>\n      <ion-searchbar (keyup.enter)="getOffres($event)"> </ion-searchbar>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="bg-dark">\n\n  <!-- DIV pour l\'ensemble des offres  -->\n  <div class="row" *ngIf="OffLenght !== 0">\n    <ion-card class="bg-secondary text-light col-sm-3 col-lg-2" (click)="goToPageOfferConsult(off.ProductId)" *ngFor="let off of offrs">\n      <img src="https://www.tuxboard.com/photos/2016/10/plus-belles-filles-internet-12.jpg" />\n      <ion-card-content>\n        <ion-card-title>\n          <h3>{{off.ProductName}}\n            <small>\n              <ion-badge item-end class="btn-info">{{off.ProductPrice}} EUR</ion-badge>\n            </small>\n          </h3>\n        </ion-card-title>\n\n\n        <p class="text-light">{{off.ProductDescription}}</p>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!-- DIV en cas que aucune offre n\'est trouver -->\n  <div *ngIf="OffLenght === 0">\n    <h1>AUCUNE OFFRE</h1>\n  </div>\n\n  <!-- DIV gestion des pages  -->\n  <br>\n  <div>\n    <ul class="pagination justify-content-center ">\n      <li class="page-item" [class.disabled]="page === 0 " (click)="PreviousPage()">\n        <a class="page-link bg-secondary text-light" [class.bg-danger]="page === 0 ">\n          <ion-icon name="ios-arrow-back"></ion-icon> Previous\n        </a>\n      </li>\n\n      <li class="page-item active"><a class="page-link bg-info text-light">Current page{{page}}</a></li>\n\n      <li class="page-item" [class.disabled]="OffLenght === 0 " (click)="NextPage()">\n        <a class="page-link  bg-secondary text-light" [class.bg-danger]="OffLenght === 0 ">\n          Next <ion-icon name="ios-arrow-forward"></ion-icon>\n        </a>\n      </li>\n    </ul>\n  </div>\n\n</ion-content>\n\n<!-- ************************* Menu -->\n<ion-menu type="overlay" side="left" [content]="mycontent">\n\n  <ion-header>\n    <ion-toolbar (click)="openPage(\'UserHomePage\')">\n      <ion-title>\n\n        <p style="color: #00ccff; font-family: Snell Roundhand, cursive; ">\n\n          <img src="{{userMe.userPicture}}" width="10%" height="10%" class="rounded-circle mr-4 ">\n          {{userMe.userName}}\n\n        </p>\n\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n\n      <button ion-item (click)="openPage(\'OfferSearchPage\')">\n        <p>\n          <ion-icon name="md-search" class="mr-5"></ion-icon> Search\n        </p>\n      </button>\n\n      <button ion-item (click)="openPage(\'AddOfferPage\')">\n        <p>\n          <ion-icon name="md-add" class="mr-5"></ion-icon> Add\n        </p>\n      </button>\n\n      <button ion-item (click)="openPage(\'MyPubsPage\')">\n        <p>\n          <ion-icon name="md-albums" class="mr-5"></ion-icon> My publications\n        </p>\n      </button>\n\n      <button ion-item (click)="openPage(\'DrivingPage\')">\n        <p>\n          <ion-icon name="md-basket" class="mr-5"></ion-icon> Driving\n        </p>\n      </button>\n\n      <button ion-item (click)="openPage(\'ViewHistoryPage\')">\n        <p>\n          <ion-icon name="ios-archive" class="mr-5"></ion-icon> History\n        </p>\n      </button>\n\n      <button ion-item (click)="openPage(\'SignOutPage\')">\n        <p>\n          <ion-icon name="md-log-out" class="mr-5"></ion-icon> Sign Out\n        </p>\n      </button>\n\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-nav #mycontent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/offer-search/offer-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_get_products_get_products__["a" /* GetProductsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], OfferSearchPage);
    return OfferSearchPage;
}());

//# sourceMappingURL=offer-search.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_user__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_home_service_user_home_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_reponse__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserHomePage = /** @class */ (function () {
    function UserHomePage(navCtrl, _auth, _userHome) {
        this.navCtrl = navCtrl;
        this._auth = _auth;
        this._userHome = _userHome;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__class_user__["a" /* User */]("", "");
        this.pages = [];
    }
    UserHomePage.prototype.ionViewCanEnter = function () {
        if (this._auth.loggedIn()) {
            /**
            const helper = new JwtHelperService();
            let token = localStorage.getItem('token');
            this.user = helper.decodeToken(token);
            */
            this.user = this._auth.getUser();
            this.offres();
            return true;
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            return false;
        }
    };
    UserHomePage.prototype.ionViewDidLeave = function () {
        localStorage.removeItem('token');
    };
    UserHomePage.prototype.ionViewWillLeave = function () {
        localStorage.removeItem('token');
    };
    UserHomePage.prototype.achats = function () {
        alert("achats");
    };
    UserHomePage.prototype.acheter = function () {
        alert("acheter");
    };
    UserHomePage.prototype.offres = function () {
        var _this = this;
        this._userHome.getMyProducts().subscribe(function (res) {
            var rep = new __WEBPACK_IMPORTED_MODULE_6__class_reponse__["a" /* Reponse */]("", "");
            rep = res;
            _this.products = rep.reponse;
        }, function (err) { return console.log(err); });
    };
    UserHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-home',template:/*ion-inline-start:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/user-home/user-home.html"*/'<!--\n  Generated template for the UserHomePage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>userHome</ion-title>\n  </ion-navbar>\n\n\n  <ion-avatar item-start float-right (tap)="updateProfile()" id="profile">\n    <img src="data:image/png;base64,{{user.userPicture}}" id="userPicture">\n  </ion-avatar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ul>\n    <li *ngFor="let product of products">\n\n      <ion-card>\n        <img src="data:image/png;base64,{{product.ProductPicture}}" />\n        <ion-card-content>\n          <ion-card-title>\n            {{product.ProductName }}\n          </ion-card-title>\n          <p>\n            {{ product.ProductDescription }}\n          </p>\n        </ion-card-content>\n\n        <ion-row>\n          <ion-col>\n            <button ion-button icon-start clear small>\n              <ion-icon ios="ios-cash" md="md-cash"></ion-icon>\n              <div> {{ product.ProductPrice }} </div>\n            </button>\n          </ion-col>\n          <ion-col center text-center>\n            <ion-note>\n              {{ product.ProductDate }}\n            </ion-note>\n          </ion-col>\n        </ion-row>\n\n      </ion-card>\n\n\n\n    </li>\n  </ul>\n\n</ion-content>'/*ion-inline-end:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/user-home/user-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_user_home_service_user_home_service__["a" /* UserHomeServiceProvider */]])
    ], UserHomePage);
    return UserHomePage;
}());

//# sourceMappingURL=user-home.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_user__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_home_user_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(30);
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
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = /** @class */ (function () {
    function SignUpPage(_auth, navCtrl, navParams) {
        this._auth = _auth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__class_user__["a" /* User */]("", "");
        this.selectedFile = null;
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InscriptionPage');
    };
    SignUpPage.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(this.selectedFile);
    };
    SignUpPage.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.user.userPicture = btoa(binaryString);
    };
    SignUpPage.prototype.logUp = function () {
        var _this = this;
        this._auth.register(this.user).subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__user_home_user_home__["a" /* UserHomePage */]);
        }, function (err) { return console.log(err); });
        /**
        this.http.post(this.url, JSON.stringify(this.user))
        .subscribe(
                    res =>
                     {
                         this.reponse = res.json();
                             if(this.reponse.status == "ok")
                             {
                               this.user = this.reponse.reponse;
                               this.navCtrl.push(UserHomePage, {user : this.user});
                             }
                             else
                             alert(this.reponse.message);
                     },
                     error => {console.log(error)}
                    );
      */
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/sign-up/sign-up.html"*/'<!--\n  Generated template for the InscriptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>inscription</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-icon name="person-add" id="person"></ion-icon>\n    <div id="container">\n        \n        <ion-item>\n            <ion-label stacked>userName : </ion-label>\n            <ion-input type="text" [(ngModel)]="user.userName"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label stacked>Email</ion-label>\n          <ion-input type="email" [(ngModel)]="user.userMail" ></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label stacked>Password : </ion-label>\n          <ion-input type="password" [(ngModel)]="user.userPassword"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked>user Address : </ion-label>\n            <ion-input type="text" [(ngModel)]="user.userAddress"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label stacked>user Phone : </ion-label>\n            <ion-input type="tel" [(ngModel)]="user.userPhone"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked>user Picture : </ion-label>\n            <ion-input type="file" (change)="onFileSelected($event)" #fileInput>\n             \n            </ion-input>  \n          </ion-item>\n        \n        \n      \n        <button ion-button (tap)="logUp()" id="logup"> LogUp </button>\n        \n      </div>\n\n</ion-content>\n'/*ion-inline-end:"/media/ghersa/FilleUbuntu/M2/DAR/Workspace/wastless-customer/src/pages/sign-up/sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ })

},[224]);
//# sourceMappingURL=main.js.map