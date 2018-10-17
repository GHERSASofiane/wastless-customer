webpackJsonp([15],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__ = __webpack_require__(158);
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Wasteless\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <button ion-button (tap)="login()"><ion-icon name="log-in"> LogIn </ion-icon>  </button>\n\n  <button ion-button (tap)="register()"> register </button>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_user__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_home_user_home__ = __webpack_require__(159);
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
    function LoginPage(_auth, http, navCtrl, navParams) {
        this._auth = _auth;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__class_user__["a" /* User */]("", "");
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.logIn = function () {
        var _this = this;
        this._auth.login(this.user).subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__user_home_user_home__["a" /* UserHomePage */]);
            //  this.navCtrl.setRoot(WeatherPage);
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
                                        this.navCtrl.setRoot(UserHomePage, {user : this.user});
                                      //  this.navCtrl.push(UserHomePage, {user : this.user});
                                      }
                                     else
                                      alert(this.reponse.message);
                              },
                              error => {console.log(error)}
                             );
           */
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<div id="container">\n\n  <ion-item>\n\n    <ion-label stacked>Email</ion-label>\n\n    <ion-input type="email" [(ngModel)]="user.userMail" ></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Password : </ion-label>\n\n    <ion-input type="password" [(ngModel)]="user.userPassword"></ion-input>\n\n  </ion-item>\n\n  \n\n  <button ion-button (tap)="logIn()" id="login"> Log In </button>\n\n\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _d || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth0_angular_jwt__ = __webpack_require__(391);
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
    function WeatherPage(navCtrl, navParams, _auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._auth = _auth;
    }
    WeatherPage.prototype.ionViewCanEnter = function () {
        if (this._auth.loggedIn()) {
            var helper = new __WEBPACK_IMPORTED_MODULE_4__auth0_angular_jwt__["a" /* JwtHelperService */]();
            var t = helper.decodeToken(localStorage.getItem('token'));
            var user = t;
            console.log(user.userMail);
            return true;
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            return false;
        }
    };
    WeatherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-weather',template:/*ion-inline-start:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\weather\weather.html"*/'<!--\n\n  Generated template for the WeatherPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Weather</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\weather\weather.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _c || Object])
    ], WeatherPage);
    return WeatherPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_user__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_home_user_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(56);
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
            selector: 'page-sign-up',template:/*ion-inline-start:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\sign-up\sign-up.html"*/'<!--\n\n  Generated template for the InscriptionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>inscription</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-icon name="person-add" id="person"></ion-icon>\n\n    <div id="container">\n\n        \n\n        <ion-item>\n\n            <ion-label stacked>userName : </ion-label>\n\n            <ion-input type="text" [(ngModel)]="user.userName"></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label stacked>Email</ion-label>\n\n          <ion-input type="email" [(ngModel)]="user.userMail" ></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label stacked>Password : </ion-label>\n\n          <ion-input type="password" [(ngModel)]="user.userPassword"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>user Address : </ion-label>\n\n            <ion-input type="text" [(ngModel)]="user.userAddress"></ion-input>\n\n        </ion-item>\n\n        \n\n        <ion-item>\n\n            <ion-label stacked>user Phone : </ion-label>\n\n            <ion-input type="tel" [(ngModel)]="user.userPhone"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>user Picture : </ion-label>\n\n            <ion-input type="file" (change)="onFileSelected($event)"></ion-input>\n\n        </ion-item>\n\n    \n\n        <button ion-button (tap)="logUp()" id="logup"> LogUp </button>\n\n        \n\n      </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_home_service_user_home_service__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(119);
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
 * Generated class for the UserHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserHomePage = /** @class */ (function () {
    function UserHomePage(navCtrl, _auth, _userHome) {
        this.navCtrl = navCtrl;
        this._auth = _auth;
        this._userHome = _userHome;
    }
    UserHomePage.prototype.ionViewCanEnter = function () {
        if (this._auth.loggedIn()) {
            this.user = this._auth.getUserDetails();
            this.offres();
            return true;
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            return false;
        }
    };
    UserHomePage.prototype.updateProfile = function () {
    };
    UserHomePage.prototype.logout = function () {
        //  this.navCtrl.push(HomePage);
    };
    UserHomePage.prototype.achats = function () {
        alert("achats");
    };
    UserHomePage.prototype.acheter = function () {
        alert("acheter");
    };
    UserHomePage.prototype.offres = function () {
        this._userHome.getMyProducts(this.user.userId).subscribe(function (res) {
            console.log(res);
        }, function (err) { return console.log(err); });
    };
    UserHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-home',template:/*ion-inline-start:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\user-home\user-home.html"*/'<!--\n\n  Generated template for the UserHomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>userHome</ion-title>\n\n  </ion-navbar>\n\n\n\n  \n\n  <ion-avatar item-start float-right (tap)="updateProfile()" id="profile">\n\n    <img src="data:image/png;base64,{{user.userPicture}}" id="userPicture">    \n\n  </ion-avatar>\n\n    \n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<ul>\n\n  <li *ngFor="let product of products">\n\n\n\n  </li>\n\n</ul>\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\user-home\user-home.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_user_home_service_user_home_service__["a" /* UserHomeServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_user_home_service_user_home_service__["a" /* UserHomeServiceProvider */]) === "function" && _c || Object])
    ], UserHomePage);
    return UserHomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=user-home.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferConsultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the OfferConsultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfferConsultPage = /** @class */ (function () {
    function OfferConsultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OfferConsultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OfferConsultPage');
    };
    OfferConsultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offer-consult',template:/*ion-inline-start:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\offer-consult\offer-consult.html"*/'<!--\n\n  Generated template for the OfferConsultPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>OfferConsult</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\offer-consult\offer-consult.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], OfferConsultPage);
    return OfferConsultPage;
}());

//# sourceMappingURL=offer-consult.js.map

/***/ }),

/***/ 171:
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
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-offer/add-offer.module": [
		705,
		14
	],
	"../pages/book-product/book-product.module": [
		706,
		13
	],
	"../pages/cancel-reservation/cancel-reservation.module": [
		707,
		12
	],
	"../pages/edit-offer/edit-offer.module": [
		708,
		11
	],
	"../pages/edit-profile/edit-profile.module": [
		709,
		10
	],
	"../pages/login/login.module": [
		710,
		9
	],
	"../pages/offer-consult/offer-consult.module": [
		711,
		8
	],
	"../pages/offer-search/offer-search.module": [
		712,
		7
	],
	"../pages/remove-offer/remove-offer.module": [
		713,
		6
	],
	"../pages/sign-out/sign-out.module": [
		714,
		5
	],
	"../pages/sign-up/sign-up.module": [
		715,
		4
	],
	"../pages/user-home/user-home.module": [
		716,
		3
	],
	"../pages/validate-product/validate-product.module": [
		717,
		2
	],
	"../pages/view-history/view-history.module": [
		718,
		1
	],
	"../pages/weather/weather.module": [
		719,
		0
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
webpackAsyncContext.id = 217;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 218:
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

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOfferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the AddOfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddOfferPage = /** @class */ (function () {
    function AddOfferPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddOfferPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddOfferPage');
    };
    AddOfferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-offer',template:/*ion-inline-start:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\add-offer\add-offer.html"*/'<!--\n\n  Generated template for the AddOfferPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>AddOffer</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\add-offer\add-offer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AddOfferPage);
    return AddOfferPage;
}());

//# sourceMappingURL=add-offer.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
            selector: 'page-book-product',template:/*ion-inline-start:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\book-product\book-product.html"*/'<!--\n\n  Generated template for the BookProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>BookProduct</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\book-product\book-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BookProductPage);
    return BookProductPage;
}());

//# sourceMappingURL=book-product.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelReservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
            selector: 'page-cancel-reservation',template:/*ion-inline-start:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\cancel-reservation\cancel-reservation.html"*/'<!--\n\n  Generated template for the CancelReservationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>CancelReservation</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\cancel-reservation\cancel-reservation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CancelReservationPage);
    return CancelReservationPage;
}());

//# sourceMappingURL=cancel-reservation.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditOfferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the EditOfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditOfferPage = /** @class */ (function () {
    function EditOfferPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditOfferPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditOfferPage');
    };
    EditOfferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-offer',template:/*ion-inline-start:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\edit-offer\edit-offer.html"*/'<!--\n\n  Generated template for the EditOfferPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>EditOffer</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\edit-offer\edit-offer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EditOfferPage);
    return EditOfferPage;
}());

//# sourceMappingURL=edit-offer.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
    function EditProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\edit-profile\edit-profile.html"*/'<!--\n\n  Generated template for the EditProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>EditProfile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\edit-profile\edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offer_consult_offer_consult__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_taboff__ = __webpack_require__(411);
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
 * Generated class for the OfferSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfferSearchPage = /** @class */ (function () {
    function OfferSearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offrs = __WEBPACK_IMPORTED_MODULE_3__class_taboff__["a" /* TabOffs */];
    }
    OfferSearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OfferSearchPage');
    };
    OfferSearchPage.prototype.getOffres = function (ev) {
        this.OffresAChercher = ev.target.value;
        // TODO recherche dans serve
    };
    OfferSearchPage.prototype.goToPageOfferConsult = function () {
        // go to the MyPage component
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__offer_consult_offer_consult__["a" /* OfferConsultPage */]);
    };
    OfferSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offer-search',template:/*ion-inline-start:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\offer-search\offer-search.html"*/'<!--\n\n  Generated template for the OfferSearchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>OfferSearch</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar  (keyup.enter)="getOffres($event)" > </ion-searchbar>\n\n<ion-list>\n\n\n\n\n\n  <ion-item *ngFor="let off of offrs">\n\n    <div class="row align-items-center">\n\n\n\n      <img class="col-12 col-md-3" width="20%" alt="" src="http://images.mortderire.com/images/rire-de-hyene.jpg">\n\n\n\n      <div class="col-12 col-md-6"><br>\n\n        <h3>{{off.ProductName}} : <small>UserName</small> </h3>\n\n        <p>{{off.ProductDescription}}</p>\n\n        <ion-badge item-end>Ajouter Le : 2018-11-13</ion-badge>\n\n        <ion-badge item-end>260 EUR</ion-badge>\n\n        <a class="btn btn-primary my-3 btn-block" (click)="goToPageOfferConsult()">View Details <ion-icon name="eye"></ion-icon>\n\n        </a>\n\n      </div>\n\n\n\n    </div>\n\n  </ion-item>\n\n\n\n</ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\offer-search\offer-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], OfferSearchPage);
    return OfferSearchPage;
}());

//# sourceMappingURL=offer-search.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveOfferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the RemoveOfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RemoveOfferPage = /** @class */ (function () {
    function RemoveOfferPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RemoveOfferPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RemoveOfferPage');
    };
    RemoveOfferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-remove-offer',template:/*ion-inline-start:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\remove-offer\remove-offer.html"*/'<!--\n\n  Generated template for the RemoveOfferPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>RemoveOffer</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\remove-offer\remove-offer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RemoveOfferPage);
    return RemoveOfferPage;
}());

//# sourceMappingURL=remove-offer.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignOutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the SignOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignOutPage = /** @class */ (function () {
    function SignOutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignOutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignOutPage');
    };
    SignOutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-out',template:/*ion-inline-start:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\sign-out\sign-out.html"*/'<!--\n\n  Generated template for the SignOutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>SignOut</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\sign-out\sign-out.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SignOutPage);
    return SignOutPage;
}());

//# sourceMappingURL=sign-out.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
            selector: 'page-validate-product',template:/*ion-inline-start:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\validate-product\validate-product.html"*/'<!--\n\n  Generated template for the ValidateProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>ValidateProduct</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\validate-product\validate-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ValidateProductPage);
    return ValidateProductPage;
}());

//# sourceMappingURL=validate-product.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the ViewHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewHistoryPage = /** @class */ (function () {
    function ViewHistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ViewHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewHistoryPage');
    };
    ViewHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-history',template:/*ion-inline-start:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\view-history\view-history.html"*/'<!--\n\n  Generated template for the ViewHistoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>ViewHistory</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\pages\view-history\view-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ViewHistoryPage);
    return ViewHistoryPage;
}());

//# sourceMappingURL=view-history.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(371);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_add_offer_add_offer__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_book_product_book_product__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cancel_reservation_cancel_reservation__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_edit_offer_edit_offer__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_edit_profile_edit_profile__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_offer_consult_offer_consult__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_offer_search_offer_search__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_remove_offer_remove_offer__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_sign_out_sign_out__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_sign_up_sign_up__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_validate_product_validate_product__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_view_history_view_history__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_user_home_user_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_token_interceptor_token_interceptor__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_storage__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_weather_weather__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_user_home_service_user_home_service__ = __webpack_require__(720);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_add_offer_add_offer__["a" /* AddOfferPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_book_product_book_product__["a" /* BookProductPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cancel_reservation_cancel_reservation__["a" /* CancelReservationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_edit_offer_edit_offer__["a" /* EditOfferPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_offer_consult_offer_consult__["a" /* OfferConsultPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_offer_search_offer_search__["a" /* OfferSearchPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_remove_offer_remove_offer__["a" /* RemoveOfferPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sign_out_sign_out__["a" /* SignOutPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_validate_product_validate_product__["a" /* ValidateProductPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_view_history_view_history__["a" /* ViewHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_user_home_user_home__["a" /* UserHomePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_weather_weather__["a" /* WeatherPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-offer/add-offer.module#AddOfferPageModule', name: 'AddOfferPage', segment: 'add-offer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/book-product/book-product.module#BookProductPageModule', name: 'BookProductPage', segment: 'book-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cancel-reservation/cancel-reservation.module#CancelReservationPageModule', name: 'CancelReservationPage', segment: 'cancel-reservation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-offer/edit-offer.module#EditOfferPageModule', name: 'EditOfferPage', segment: 'edit-offer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offer-consult/offer-consult.module#OfferConsultPageModule', name: 'OfferConsultPage', segment: 'offer-consult', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offer-search/offer-search.module#OfferSearchPageModule', name: 'OfferSearchPage', segment: 'offer-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/remove-offer/remove-offer.module#RemoveOfferPageModule', name: 'RemoveOfferPage', segment: 'remove-offer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-out/sign-out.module#SignOutPageModule', name: 'SignOutPage', segment: 'sign-out', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-home/user-home.module#UserHomePageModule', name: 'UserHomePage', segment: 'user-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/validate-product/validate-product.module#ValidateProductPageModule', name: 'ValidateProductPage', segment: 'validate-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-history/view-history.module#ViewHistoryPageModule', name: 'ViewHistoryPage', segment: 'view-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/weather/weather.module#WeatherPageModule', name: 'WeatherPage', segment: 'weather', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_add_offer_add_offer__["a" /* AddOfferPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_book_product_book_product__["a" /* BookProductPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cancel_reservation_cancel_reservation__["a" /* CancelReservationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_edit_offer_edit_offer__["a" /* EditOfferPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_offer_consult_offer_consult__["a" /* OfferConsultPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_offer_search_offer_search__["a" /* OfferSearchPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_remove_offer_remove_offer__["a" /* RemoveOfferPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sign_out_sign_out__["a" /* SignOutPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_validate_product_validate_product__["a" /* ValidateProductPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_view_history_view_history__["a" /* ViewHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_user_home_user_home__["a" /* UserHomePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_weather_weather__["a" /* WeatherPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__["a" /* AuthProvider */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_23__providers_token_interceptor_token_interceptor__["a" /* TokenInterceptorProvider */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_26__providers_user_home_service_user_home_service__["a" /* UserHomeServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabOffs; });
var TabOffs = [
    {
        ProductName: 'ProductName-1',
        ProductDate: 'ProductDate-1',
        ProductDescription: 'ProductDescription-1',
        ProductPicture: 'ProductPicture-1',
        UserName: 'UserName-1',
        ProductId: 0,
        ProductPrice: 10,
        ProductStatus: 0,
        UserId: 0
    },
    {
        ProductName: 'ProductName-2',
        ProductDate: 'ProductDate-2',
        ProductDescription: 'ProductDescription-2',
        ProductPicture: 'ProductPicture-2',
        UserName: 'UserName-2',
        ProductId: 1,
        ProductPrice: 25,
        ProductStatus: 0,
        UserId: 1
    }
];
//# sourceMappingURL=taboff.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(119);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Naim\Desktop\DAR\wastless-customer\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_throw__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__);
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
    function TokenInterceptorProvider(storage, alertCtrl) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
    }
    // Intercepts all HTTP requests!
    TokenInterceptorProvider.prototype.intercept = function (request, next) {
        var _this = this;
        var promise = this.storage.get('token');
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(promise)
            .mergeMap(function (token) {
            var clonedReq = _this.addToken(request, token);
            return next.handle(clonedReq).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["catchError"])(function (error) {
                // Perhaps display an error for specific status codes here already?
                var msg = error.message;
                var alert = _this.alertCtrl.create({
                    title: error.name,
                    message: msg,
                    buttons: ['OK']
                });
                alert.present();
                // Pass the error to the caller of the function
                return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_throw__["_throw"])(error);
            }));
        });
    };
    // Adds the token to your headers if it exists
    TokenInterceptorProvider.prototype.addToken = function (request, token) {
        if (token) {
            var clone = void 0;
            clone = request.clone({
                setHeaders: {
                    'Authorization': "Bearer " + token
                }
            });
            return clone;
        }
        return request;
    };
    TokenInterceptorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object])
    ], TokenInterceptorProvider);
    return TokenInterceptorProvider;
    var _a, _b;
}());

//# sourceMappingURL=token-interceptor.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__ = __webpack_require__(391);
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
    AuthProvider.prototype.getUserDetails = function () {
        var helper = new __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__["a" /* JwtHelperService */]();
        var t = helper.decodeToken(localStorage.getItem('token'));
        var user = t;
        console.log(user);
        return user;
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

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHomeServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
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
        console.log('Hello UserHomeServiceProvider Provider');
    }
    UserHomeServiceProvider.prototype.getMyProducts = function (userId) {
        // TODO : recuperer userId de token
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('userId', userId);
        return this.http.get(this._userHome, { params: params });
    };
    UserHomeServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], UserHomeServiceProvider);
    return UserHomeServiceProvider;
    var _a;
}());

//# sourceMappingURL=user-home-service.js.map

/***/ })

},[366]);
//# sourceMappingURL=main.js.map