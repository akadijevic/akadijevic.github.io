(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var _tournament_tournament_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tournament/tournament.component */ "./src/app/tournament/tournament.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'gallery',
        component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__["GalleryComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'statistics',
        component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_6__["StatisticsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'tournament',
        component: _tournament_tournament_component__WEBPACK_IMPORTED_MODULE_7__["TournamentComponent"]
    },
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'GGL';
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                // Show loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                // Hide loading indicator
                document.body.style.background = "#161616";
            }
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-datepicker */ "./node_modules/ng2-datepicker/dist/bundles/ng2-datepicker.umd.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_datepicker__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./my-dialog/my-dialog.component */ "./src/app/my-dialog/my-dialog.component.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-image-zoom */ "./node_modules/ngx-image-zoom/ngx-image-zoom.umd.js");
/* harmony import */ var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(ngx_image_zoom__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _tournament_tournament_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./tournament/tournament.component */ "./src/app/tournament/tournament.component.ts");
/* harmony import */ var _gallery_reverse__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./gallery/reverse */ "./src/app/gallery/reverse.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_22__["GalleryComponent"],
                _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_24__["MyDialogComponent"],
                _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_27__["StatisticsComponent"],
                _tournament_tournament_component__WEBPACK_IMPORTED_MODULE_29__["TournamentComponent"],
                _gallery_reverse__WEBPACK_IMPORTED_MODULE_30__["ReversePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
                ng2_datepicker__WEBPACK_IMPORTED_MODULE_11__["NgDatepickerModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"].forRoot(),
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_20__["HttpModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorageModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"],
                ngx_image_zoom__WEBPACK_IMPORTED_MODULE_28__["NgxImageZoomModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_31__["RouterModule"].forRoot([
                    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
                    { path: 'statistics', component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_27__["StatisticsComponent"] },
                    { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_22__["GalleryComponent"] },
                    { path: 'tournament', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_22__["GalleryComponent"] }
                ]),
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"]
            ],
            entryComponents: [
                _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_24__["MyDialogComponent"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_21__["authService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.afAuth.authState
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) { return !!user; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loggedIn) {
            if (!loggedIn) {
                console.log("access denied"),
                    _this.router.navigate(['/login']);
            }
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: authService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authService", function() { return authService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var authService = /** @class */ (function () {
    function authService(afAuth) {
        this.afAuth = afAuth;
        this.user = afAuth.authState;
    }
    authService.prototype.login = function (email, password) {
        var observableFromPromise = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afAuth.auth.signInWithEmailAndPassword(email, password));
        return observableFromPromise;
    };
    authService.prototype.isAuthenticated = function () {
        return this.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) { return user && user.uid !== undefined; }));
    };
    authService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    authService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], authService);
    return authService;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n    <p *ngFor=\"let data of dataset | async\">{{data.value | json}}</p>\n</div> -->\n<div class=\"wrapper\">\n    <nav class=\"menu\" tabindex=\"0\">\n            <div class=\"smartphone-menu-trigger\"></div>\n          <header class=\"avatar\">\n                <img src=\"../../assets/img/logo.PNG\" />\n            <h2>Gorilla Game Lab</h2>\n          </header>\n            <ul>\n            <li tabindex=\"0\" (click)=\"navigateHome()\"routerlink=\"/home\" class=\"icon-dashboard\"><span>Live Monitoring</span></li>\n            <li tabindex=\"0\" class=\"icon-stats\" (click)=\"navigateStatistics()\" routerlink=\"/statistics\"><span>Statistics</span></li>\n            <li  tabindex=\"0\" class=\"icon-gallery\"><a (click)=\"navigateGallery()\" routerlink=\"/gallery\"> <span>Gallery</span></a></li>\n            <li tabindex=\"0\" class=\"icon-trial\" (click)=\"navigateTrial()\" routerlink=\"/statistics\"><span>Trial</span></li>\n            <li  tabindex=\"0\" class=\"icon-users\"><a (click)=\"logout()\" routerlink=\"/login\" *ngIf=\"isLoggedIn\"> <span>Logout</span></a></li>\n          </ul>\n        </nav>\n        \n        <main>\n          <div class=\"helper\">\n                <div class=\"right\">\n                  <div class=\"filter\">\n                    <mat-form-field>\n                        <mat-select  class=\"example-radio-group\" placeholder=\"Filter by name\">\n\n                        <mat-option (click)=\"onDefault()\">Default</mat-option>\n                        <mat-option (click)=\"onUnknown()\">Unknown</mat-option>\n                        <mat-option (click)=\"onAfia()\">Afia</mat-option>\n                        <mat-option (click)=\"onAyana()\">Ayana</mat-option>\n                        <mat-option (click)=\"onJock()\">Jock</mat-option>\n                        <mat-option (click)=\"onKera()\">Kera</mat-option>\n                        <mat-option (click)=\"onKukena()\">Kukena</mat-option>\n                        <mat-option (click)=\"onRomina()\">Romina</mat-option>\n                        <mat-option (click)=\"onSalome()\">Salome</mat-option>\n                        <mat-option (click)=\"onTouni()\">Touni</mat-option>\n                  \n                  \n                        </mat-select>\n                      </mat-form-field>\n                    </div>\n                    <div class=\"row\"> \n                        <div class=\"column\" *ngFor=\"let photo of photo2 | reverse\">\n                        <img src=\"{{photo.value}}\"  class=\"imagepreview\" style=\"width: 100%;\" >\n                        <p> {{photo.name}}</p>\n                        <button mat-raised-button id=\"{{photo.key}}\"(click)=\"openDialog(photo.key)\">recognize me? </button>\n                        <br>\n                          <!-- <p>Result:{{dialogResult}}</p> -->\n                        </div>\n\n\n                </div> \n         </div>\n        \n        </div>\n\n       </main>\n </div>\n    \n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.scss":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contrainer {\n  height: 300px;\n  padding: 1px; }\n\n.example-radio-group {\n  display: inline-flex;\n  flex-direction: column; }\n\n.row {\n  /* IE10 */\n  display: flex;\n  /* IE10 */\n  flex-wrap: wrap; }\n\n.column {\n  /* IE10 */\n  flex: 28%;\n  max-width: 28%;\n  margin-left: 35px;\n  margin-bottom: 20px; }\n\n.column button {\n    border: none;\n    padding: 2px;\n    background: none;\n    outline: none; }\n\n.column button:hover {\n    color: #ff3377; }\n\n.column img {\n    height: 200px;\n    vertical-align: middle;\n    width: 100%; }\n\n.column img:hover {\n    opacity: 0.6; }\n\nbody {\n  background: #161616; }\n\n.wrapper {\n  width: 100%;\n  margin: auto; }\n\n.filter {\n  text-align: right;\n  margin-right: 6%; }\n\nmain {\n  overflow: hidden;\n  margin-left: 20%;\n  margin-right: 1%; }\n\nmain .helper {\n    float: left;\n    padding: 0.2em 0em;\n    text-align: center;\n    border-radius: 20px; }\n\nmain .helper p {\n      font-size: 12px; }\n\nmain .helper span {\n      color: rgba(0, 0, 0, 0.2);\n      font-size: 0.4em;\n      display: block; }\n\n.mat-datepicker-content .mat-calendar {\n  zoom: 0.25; }\n\n.menu {\n  background: #3b444c;\n  height: 100vh;\n  width: 17%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  outline: none;\n  float: left; }\n\n.menu .avatar {\n    background: rgba(0, 0, 0, 0.1);\n    padding: 2em 0.5em;\n    text-align: center; }\n\n.menu .avatar img {\n      width: 100px;\n      border-radius: 50%;\n      overflow: hidden;\n      border: 4px solid #fff;\n      box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2); }\n\n.menu .avatar h2 {\n      font-weight: normal;\n      margin-bottom: 0; }\n\n.menu ul {\n    list-style: none;\n    padding: 0.5em 0;\n    margin: 0; }\n\n.menu ul li {\n      padding: 0.5em 1em 0.5em 3em;\n      font-size: 0.95em;\n      font-weight: regular;\n      background-repeat: no-repeat;\n      background-position: left 15px center;\n      background-size: auto 20px;\n      transition: all 0.15s linear;\n      cursor: pointer; }\n\n.menu ul li.icon-gallery {\n        background-image: url(\"http://www.entypo.com/images/folder-images.svg\"); }\n\n.menu ul li.icon-dashboard {\n        background-image: url(\"http://www.entypo.com/images/gauge.svg\"); }\n\n.menu ul li.icon-users {\n        background-image: url(\"http://www.entypo.com/images/user.svg\"); }\n\n.menu ul li.icon-stats {\n        background-image: url(\"http://www.entypo.com/images/line-graph.svg\"); }\n\n.menu ul li.icon-trial {\n        background-image: url(\"http://www.entypo.com/images/tools.svg\"); }\n\n.menu ul li:hover {\n        background-color: rgba(0, 0, 0, 0.1); }\n\n.menu ul li:focus {\n        outline: none; }\n\n@media screen and (max-width: 900px) and (min-width: 400px) {\n  body {\n    padding-left: 10%; }\n  .column {\n    flex: 50%;\n    max-width: 50%; }\n  .menu {\n    width: 90px; }\n    .menu .avatar {\n      padding: 0.5em;\n      position: relative; }\n      .menu .avatar img {\n        width: 60px; }\n      .menu .avatar h2 {\n        opacity: 0;\n        position: absolute;\n        top: 50%;\n        left: 100px;\n        margin: 0;\n        min-width: 200px;\n        border-radius: 4px;\n        background: rgba(0, 0, 0, 0.4);\n        -webkit-transform: translate3d(-20px, -50%, 0);\n                transform: translate3d(-20px, -50%, 0);\n        transition: all 0.15s ease-in-out; }\n      .menu .avatar:hover h2 {\n        opacity: 1;\n        -webkit-transform: translate3d(0px, -50%, 0);\n                transform: translate3d(0px, -50%, 0); }\n    .menu ul li {\n      height: 90px/1.5;\n      background-position: center center;\n      background-size: 30px auto;\n      position: relative; }\n      .menu ul li span {\n        opacity: 0;\n        position: absolute;\n        background: rgba(0, 0, 0, 0.5);\n        padding: 0.2em 0.5em;\n        border-radius: 4px;\n        top: 50%;\n        left: 80px;\n        -webkit-transform: translate3d(-15px, -50%, 0);\n                transform: translate3d(-15px, -50%, 0);\n        transition: all 0.15s ease-in-out; }\n        .menu ul li span:before {\n          content: '';\n          width: 0;\n          height: 0;\n          position: absolute;\n          top: 50%;\n          left: -5px;\n          border-top: 5px solid transparent;\n          border-bottom: 5px solid transparent;\n          border-right: 5px solid rgba(0, 0, 0, 0.5);\n          -webkit-transform: translateY(-50%);\n                  transform: translateY(-50%); }\n      .menu ul li:hover span {\n        opacity: 1;\n        -webkit-transform: translate3d(0px, -50%, 0);\n                transform: translate3d(0px, -50%, 0); } }\n\n@media screen and (max-width: 400px) {\n  body {\n    padding-left: 0; }\n  .column {\n    flex: 100%;\n    max-width: 100%; }\n  .menu {\n    width: 230px;\n    box-shadow: 0 0 0 100em rgba(0, 0, 0, 0);\n    -webkit-transform: translate3d(-230px, 0, 0);\n            transform: translate3d(-230px, 0, 0);\n    transition: all 0.3s ease-in-out; }\n    .menu .smartphone-menu-trigger {\n      width: 40px;\n      height: 40px;\n      position: absolute;\n      left: 100%;\n      background: #5bc995; }\n      .menu .smartphone-menu-trigger:before, .menu .smartphone-menu-trigger:after {\n        content: '';\n        width: 50%;\n        height: 2px;\n        background: #fff;\n        border-radius: 10px;\n        position: absolute;\n        top: 45%;\n        left: 50%;\n        -webkit-transform: translate3d(-50%, -50%, 0);\n                transform: translate3d(-50%, -50%, 0); }\n      .menu .smartphone-menu-trigger:after {\n        top: 55%;\n        -webkit-transform: translate3d(-50%, -50%, 0);\n                transform: translate3d(-50%, -50%, 0); }\n    .menu ul li {\n      padding: 1em 1em 1em 3em;\n      font-size: 1.2em; }\n    .menu:focus {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n      box-shadow: 0 0 0 100em rgba(0, 0, 0, 0.6); }\n      .menu:focus .smartphone-menu-trigger {\n        pointer-events: none; } }\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var _plot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plot.service */ "./src/app/plot.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../my-dialog/my-dialog.component */ "./src/app/my-dialog/my-dialog.component.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(dialog, storage, plotservice, authService, router, elementRef) {
        var _this = this;
        this.dialog = dialog;
        this.storage = storage;
        this.plotservice = plotservice;
        this.authService = authService;
        this.router = router;
        this.elementRef = elementRef;
        this.dialogResult = "";
        //syntax used to retrieve the login state of the user 
        authService.isAuthenticated().subscribe(function (success) { return _this.isLoggedIn = success; });
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        //queriying the firebase to extract the data of the entire set
        //here we use SnapshotChanges as we want to retrieve the key of the field as well
        this.plotservice.getEntireSet('Urls')
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.map(function (item) { return (__assign({ key: item.payload.key }, item.payload.val())); });
        })).subscribe(function (data) {
            _this.storeUrl(data);
        });
    };
    //functions for navigation across the website
    GalleryComponent.prototype.navigateHome = function () {
        this.router.navigate(['/home']);
    };
    GalleryComponent.prototype.navigateGallery = function () {
        this.router.navigate(['/gallery']);
    };
    GalleryComponent.prototype.navigateTrial = function () {
        this.router.navigate(['/tournament']);
    };
    GalleryComponent.prototype.navigateStatistics = function () {
        this.router.navigate(['/statistics']);
    };
    //function used to logout the current user and navigate back to the login page
    GalleryComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    //stores the field values of all photos
    GalleryComponent.prototype.storeUrl = function (data) {
        this.photo2 = data;
    };
    //this function is called when the user filters gallery based on the Gorilla name
    GalleryComponent.prototype.onDefault = function () {
        var _this = this;
        this.plotservice.getEntireSet('Urls')
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.map(function (item) { return (__assign({ key: item.payload.key }, item.payload.val())); });
        })).subscribe(function (data) {
            _this.storeUrl(data);
        });
    };
    //this function is called when the user filters gallery based on the Gorilla name
    GalleryComponent.prototype.onUnknown = function () {
        var _this = this;
        this.plotservice.filterGallery('unknown')
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.map(function (item) { return (__assign({ key: item.payload.key }, item.payload.val())); });
        })).subscribe(function (data) {
            _this.storeUrl(data);
        });
    };
    //this function is called when the user filters gallery based on the Gorilla name
    GalleryComponent.prototype.onKera = function () {
        var _this = this;
        this.plotservice.filterGallery('Kera')
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.map(function (item) { return (__assign({ key: item.payload.key }, item.payload.val())); });
        })).subscribe(function (data) {
            _this.storeUrl(data);
        });
    };
    //this function is called when the user filters gallery based on the Gorilla name
    GalleryComponent.prototype.onJock = function () {
        var _this = this;
        this.plotservice.filterGallery('Jock')
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.map(function (item) { return (__assign({ key: item.payload.key }, item.payload.val())); });
        })).subscribe(function (data) {
            _this.storeUrl(data);
        });
    };
    //this function is called when the user filters gallery based on the Gorilla name
    GalleryComponent.prototype.onKukena = function () {
        var _this = this;
        this.plotservice.filterGallery('Kukena')
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.map(function (item) { return (__assign({ key: item.payload.key }, item.payload.val())); });
        })).subscribe(function (data) {
            _this.storeUrl(data);
        });
    };
    //this function is called when the user filters gallery based on the Gorilla name
    GalleryComponent.prototype.onTouni = function () {
        var _this = this;
        this.plotservice.filterGallery('Touni')
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.map(function (item) { return (__assign({ key: item.payload.key }, item.payload.val())); });
        })).subscribe(function (data) {
            _this.storeUrl(data);
        });
    };
    //this function is called when the user filters gallery based on the Gorilla name
    GalleryComponent.prototype.onAfia = function () {
        var _this = this;
        this.plotservice.filterGallery('Afia')
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.map(function (item) { return (__assign({ key: item.payload.key }, item.payload.val())); });
        })).subscribe(function (data) {
            _this.storeUrl(data);
        });
    };
    //this function is called when the user filters gallery based on the Gorilla name
    GalleryComponent.prototype.onAyana = function () {
        var _this = this;
        this.plotservice.filterGallery('Ayana')
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.map(function (item) { return (__assign({ key: item.payload.key }, item.payload.val())); });
        })).subscribe(function (data) {
            _this.storeUrl(data);
        });
    };
    //this function is called when the user filters gallery based on the Gorilla name
    GalleryComponent.prototype.onSalome = function () {
        var _this = this;
        this.plotservice.filterGallery('Salome')
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.map(function (item) { return (__assign({ key: item.payload.key }, item.payload.val())); });
        })).subscribe(function (data) {
            _this.storeUrl(data);
        });
    };
    //this function is called when the user filters gallery based on the Gorilla name
    GalleryComponent.prototype.onRomina = function () {
        var _this = this;
        this.plotservice.filterGallery('Romina')
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.map(function (item) { return (__assign({ key: item.payload.key }, item.payload.val())); });
        })).subscribe(function (data) {
            _this.storeUrl(data);
        });
    };
    /*this opens a dialog once the element is clicked
    * it sends the key of the record/photo
    * this key will then be used to update records based on the inout from the MyDialogComponent
    */
    GalleryComponent.prototype.openDialog = function (el) {
        var _this = this;
        this.storeKey = el;
        console.log(this.storeKey);
        var dialogRef = this.dialog.open(_my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_7__["MyDialogComponent"], {
            width: '250px',
            data: this.storeKey
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.dialogResult = result;
        });
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/gallery/gallery.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"], _plot_service__WEBPACK_IMPORTED_MODULE_2__["PlotService"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["authService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/gallery/reverse.ts":
/*!************************************!*\
  !*** ./src/app/gallery/reverse.ts ***!
  \************************************/
/*! exports provided: ReversePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (values) {
        return values.reverse();
    };
    ReversePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'reverse',
            pure: false
        })
    ], ReversePipe);
    return ReversePipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n    <p *ngFor=\"let data of dataset | async\">{{data.value | json}}</p>\n</div> -->\n<div class=\"wrapper\">\n<nav class=\"menu\" tabindex=\"0\">\n        <div class=\"smartphone-menu-trigger\"></div>\n      <header class=\"avatar\">\n            <img src=\"../../assets/img/logo.PNG\" />\n        <h2>Gorilla Game Lab</h2>\n      </header>\n        <ul>\n        <li tabindex=\"0\" class=\"icon-dashboard\"><span>Live Monitoring</span></li>\n        <li tabindex=\"0\" class=\"icon-stats\" (click)=\"navigateStatistics()\" routerlink=\"/statistics\"><span>Statistics</span></li>\n        <li  tabindex=\"0\" class=\"icon-gallery\" (click)=\"navigateGallery()\" routerlink=\"/gallery\"> <span>Gallery</span></li>\n        <li tabindex=\"0\" class=\"icon-trial\" (click)=\"navigateTrial()\" routerlink=\"/statistics\"><span>Trial</span></li>\n        <li  tabindex=\"0\" class=\"icon-users\" (click)=\"logout()\" routerlink=\"/login\" *ngIf=\"isLoggedIn\"> <span>Logout</span></li>\n      </ul>\n    </nav>\n    \n    <main>\n      <div class=\"helper\">\n            <div class=\"right\">\n                <div class=\"container\">\n                    <div class id=bigChart>\n                    <div class=\"charts\" id=\"smallChart\" #chartAll>\n                        </div>\n                    </div>\n                    <div *ngFor = \"let photo of photo2\" class=\"chartsA\" >\n                        <img src=\"{{photo.value}}\"/>\n                       <p> Last Captured on {{ photo.date }} at {{ photo.time }} </p>\n\n                    </div>\n                    </div>\n                    <div class=\"charts\" #chartA>\n                        <p> Maze A Last Used: {{LastUsedA}} at {{LastDateUsedA}}</p>\n                    </div>\n                    <div class=\"charts\" #chartB>\n                        <p> Maze B Last Used: {{LastUsedB}} at {{LastDateUsedB}}</p>\n                    </div>\n                    <div class=\"charts\" #chartC>\n                        <p> Maze C Last Used: {{LastUsedB}} at {{LastDateUsedB}}</p>\n\n                    </div>\n                    <!-- <div class=\"charts\" #chartD>\n                        <p> Maze B Last Used: {{LastUsedB}} at {{LastDateUsedB}}</p>\n                        <P> Duration: {{DurationB}} min</P>\n\n                    </div>\n                    <div class=\"charts\" #chartE>\n                        <p> Maze B Last Used: {{LastUsedB}} at {{LastDateUsedB}}</p>\n                        <P> Duration: {{DurationB}} min</P>\n\n                    </div>\n                    <div class=\"charts\" #chartF>\n                        <p> Maze B Last Used: {{LastUsedB}} at {{LastDateUsedB}}</p>\n                        <P> Duration: {{DurationB}} min</P>\n\n                    </div> -->\n                    \n\n\n                    </div>\n      </div>\n    </main>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".charts {\n  float: left; }\n\n.contrainer {\n  height: 300px;\n  padding: 1px; }\n\n.chartsA {\n  padding-bottom: 50px; }\n\n.chartsA img {\n    width: 450px;\n    height: 240px;\n    padding-top: 10px; }\n\n.chartsA p {\n    float: left;\n    margin-left: 4.2%; }\n\n#bigChart {\n  width: 50%;\n  float: left; }\n\n#smallChart {\n  width: 510px;\n  height: 300px; }\n\nbody {\n  background: #161616; }\n\n.wrapper {\n  width: 100%;\n  margin: auto; }\n\nmain {\n  overflow: hidden;\n  margin-left: 20%;\n  margin-right: 1%; }\n\nmain .helper {\n    float: left;\n    padding: 0.2em 0em;\n    text-align: center;\n    border-radius: 20px; }\n\nmain .helper p {\n      font-size: 12px; }\n\nmain .helper span {\n      color: rgba(0, 0, 0, 0.2);\n      font-size: 0.4em;\n      display: block; }\n\n.mat-datepicker-content .mat-calendar {\n  zoom: 0.25; }\n\n.menu {\n  background: #3b444c;\n  height: 100vh;\n  width: 17%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  outline: none;\n  float: left; }\n\n.menu .avatar {\n    background: rgba(0, 0, 0, 0.1);\n    padding: 2em 0.5em;\n    text-align: center; }\n\n.menu .avatar img {\n      width: 100px;\n      border-radius: 50%;\n      overflow: hidden;\n      border: 4px solid #fff;\n      box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2); }\n\n.menu .avatar h2 {\n      font-weight: normal;\n      margin-bottom: 0; }\n\n.menu ul {\n    list-style: none;\n    padding: 0.5em 0;\n    margin: 0; }\n\n.menu ul li {\n      padding: 0.5em 1em 0.5em 3em;\n      font-size: 0.95em;\n      font-weight: regular;\n      background-repeat: no-repeat;\n      background-position: left 15px center;\n      background-size: auto 20px;\n      transition: all 0.15s linear;\n      cursor: pointer; }\n\n.menu ul li.icon-gallery {\n        background-image: url(\"http://www.entypo.com/images/folder-images.svg\"); }\n\n.menu ul li.icon-dashboard {\n        background-image: url(\"http://www.entypo.com/images/gauge.svg\"); }\n\n.menu ul li.icon-users {\n        background-image: url(\"http://www.entypo.com/images/user.svg\"); }\n\n.menu ul li.icon-stats {\n        background-image: url(\"http://www.entypo.com/images/line-graph.svg\"); }\n\n.menu ul li.icon-trial {\n        background-image: url(\"http://www.entypo.com/images/tools.svg\"); }\n\n.menu ul li:hover {\n        background-color: rgba(0, 0, 0, 0.1); }\n\n.menu ul li:focus {\n        outline: none; }\n\n@media screen and (max-width: 900px) and (min-width: 400px) {\n  body {\n    padding-left: 10%; }\n  .menu {\n    width: 90px; }\n    .menu .avatar {\n      padding: 0.5em;\n      position: relative; }\n      .menu .avatar img {\n        width: 60px; }\n      .menu .avatar h2 {\n        opacity: 0;\n        position: absolute;\n        top: 50%;\n        left: 100px;\n        margin: 0;\n        min-width: 200px;\n        border-radius: 4px;\n        background: rgba(0, 0, 0, 0.4);\n        -webkit-transform: translate3d(-20px, -50%, 0);\n                transform: translate3d(-20px, -50%, 0);\n        transition: all 0.15s ease-in-out; }\n      .menu .avatar:hover h2 {\n        opacity: 1;\n        -webkit-transform: translate3d(0px, -50%, 0);\n                transform: translate3d(0px, -50%, 0); }\n    .menu ul li {\n      height: 90px/1.5;\n      background-position: center center;\n      background-size: 30px auto;\n      position: relative;\n      padding-bottom: 50%; }\n      .menu ul li span {\n        opacity: 0;\n        position: absolute;\n        background: rgba(0, 0, 0, 0.5);\n        padding: 0.2em 0.5em;\n        border-radius: 4px;\n        top: 50%;\n        left: 80px;\n        -webkit-transform: translate3d(-15px, -50%, 0);\n                transform: translate3d(-15px, -50%, 0);\n        transition: all 0.15s ease-in-out; }\n        .menu ul li span:before {\n          content: '';\n          width: 0;\n          height: 0;\n          position: absolute;\n          top: 50%;\n          left: -5px;\n          border-top: 5px solid transparent;\n          border-bottom: 5px solid transparent;\n          border-right: 5px solid rgba(0, 0, 0, 0.5);\n          -webkit-transform: translateY(-50%);\n                  transform: translateY(-50%); }\n      .menu ul li:hover span {\n        opacity: 1;\n        -webkit-transform: translate3d(0px, -50%, 0);\n                transform: translate3d(0px, -50%, 0); }\n  #bigChart {\n    width: 100%;\n    float: left; }\n  #smallChart {\n    width: 350px;\n    height: 200px; }\n  .chartsA {\n    padding-bottom: 100px; }\n    .chartsA img {\n      width: 350px;\n      height: 200px;\n      float: left; }\n    .chartsA p {\n      margin-left: 4.2%; } }\n\n@media screen and (max-width: 400px) {\n  body {\n    padding-left: 0; }\n  .menu {\n    width: 230px;\n    box-shadow: 0 0 0 100em rgba(0, 0, 0, 0);\n    -webkit-transform: translate3d(-230px, 0, 0);\n            transform: translate3d(-230px, 0, 0);\n    transition: all 0.3s ease-in-out; }\n    .menu .smartphone-menu-trigger {\n      width: 40px;\n      height: 40px;\n      position: absolute;\n      left: 100%;\n      background: #5bc995; }\n      .menu .smartphone-menu-trigger:before, .menu .smartphone-menu-trigger:after {\n        content: '';\n        width: 50%;\n        height: 2px;\n        background: #fff;\n        border-radius: 10px;\n        position: absolute;\n        top: 45%;\n        left: 50%;\n        -webkit-transform: translate3d(-50%, -50%, 0);\n                transform: translate3d(-50%, -50%, 0); }\n      .menu .smartphone-menu-trigger:after {\n        top: 55%;\n        -webkit-transform: translate3d(-50%, -50%, 0);\n                transform: translate3d(-50%, -50%, 0); }\n    .menu ul li {\n      padding: 1em 1em 1em 3em;\n      font-size: 1.2em; }\n    .menu:focus {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n      box-shadow: 0 0 0 100em rgba(0, 0, 0, 0.6); }\n      .menu:focus .smartphone-menu-trigger {\n        pointer-events: none; } }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: AppDateAdapter, APP_DATE_FORMATS, HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDateAdapter", function() { return AppDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_DATE_FORMATS", function() { return APP_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var plotly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! plotly.js */ "./node_modules/plotly.js/dist/plotly.min.js");
/* harmony import */ var plotly_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(plotly_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plot.service */ "./src/app/plot.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppDateAdapter = /** @class */ (function (_super) {
    __extends(AppDateAdapter, _super);
    function AppDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* Formatting the date component for the date picker module
    */
    AppDateAdapter.prototype.format = function (date, displayFormat) {
        if (displayFormat === 'input') {
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return day + "/" + month + "/" + year;
        }
        else {
            return date.toDateString();
        }
    };
    return AppDateAdapter;
}(_angular_material___WEBPACK_IMPORTED_MODULE_4__["NativeDateAdapter"]));

var APP_DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'numeric' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};
var HomeComponent = /** @class */ (function () {
    function HomeComponent(plotservice, authService, router, elementRef) {
        var _this = this;
        this.plotservice = plotservice;
        this.authService = authService;
        this.router = router;
        this.elementRef = elementRef;
        //syntax used to retrieve the login state of the user 
        authService.isAuthenticated().subscribe(function (success) { return _this.isLoggedIn = success; });
    }
    //function used to change the background color
    HomeComponent.prototype.ngOnChanges = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#161616';
    };
    //function that executes as soon as the view renders
    //this function executes as well whenever any of the data changes to which we have subscribed to
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //fetches the last photo that was captured and adds it to the gallery
        this.plotservice.getLastItem('Urls')
            .valueChanges().subscribe(function (data) {
            _this.getLastPhotoDetails(data);
        });
        //query that gets the last 15 values and graphs them out for Maze A
        this.plotservice.getDataLive('SensorMazeA')
            .valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.map(function (item) {
                return item.value;
            });
        })).subscribe(function (data) {
            plotly_js__WEBPACK_IMPORTED_MODULE_1__["purge"](_this.elA.nativeElement);
            plotly_js__WEBPACK_IMPORTED_MODULE_1__["purge"](_this.elAll.nativeElement); //this cleans graph whenever new value is added to database
            _this.monitorChartA(data);
            //REMOVE THISSSSS AND CALL ON ITS OWN WHEN BINDED TO THE RIGHT DATASET!!!!
            //this.monitorChartD(data);
            //this.monitorChartE(data);
            //this.monitorChartF(data);
            _this.returnA(data);
            _this.monitorChartAll(_this.SensorMazeA, _this.SensorMazeB, _this.SensorMazeC); //function that stores the values in observable taht is then being drawn on the next function call
        });
        //retrieving data for live monitoring for maze B
        this.plotservice.getDataLive('SensorMazeB')
            .valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.map(function (item) {
                return item.value;
            });
        })).subscribe(function (data) {
            plotly_js__WEBPACK_IMPORTED_MODULE_1__["purge"](_this.elB.nativeElement);
            plotly_js__WEBPACK_IMPORTED_MODULE_1__["purge"](_this.elAll.nativeElement);
            _this.monitorChartB(data);
            _this.returnB(data); //function that stores the values in observable taht is then being drawn on the next function call
            _this.monitorChartAll(_this.SensorMazeA, _this.SensorMazeB, _this.SensorMazeC);
        });
        this.plotservice.getDataLive('SensorMazeC')
            .valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.map(function (item) {
                return item.value;
            });
        })).subscribe(function (data) {
            plotly_js__WEBPACK_IMPORTED_MODULE_1__["purge"](_this.elC.nativeElement);
            plotly_js__WEBPACK_IMPORTED_MODULE_1__["purge"](_this.elAll.nativeElement);
            _this.monitorChartC(data);
            _this.returnC(data); //function that stores the values in observable taht is then being drawn on the next function call
            _this.monitorChartAll(_this.SensorMazeA, _this.SensorMazeB, _this.SensorMazeC);
        });
        //retrieving data from maze A to plot the total usage of all mazes
        //retrieving the array of data from maze A to determine the last usage
        //will need to be queried for each maze
        //the treshold here can change depending on what values is considered to make a device "active" 
        this.plotservice.getEntireSet('SensorMazeA')
            .valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.filter(function (items) { return items.value > 10; }).map(function (item) {
                return item.time; //mapping to just extract time value
            });
        })).subscribe(function (data) {
            _this.sliceDataA(data);
            _this.durationOfUseA(data);
        });
        this.plotservice.getEntireSet('SensorMazeA')
            .valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.filter(function (items) { return items.value > 10; }).map(function (item) {
                return item.date; //mapping to just extract date value
            });
        })).subscribe(function (data) {
            _this.sliceDataADate(data); //function called to slice just the date value
        });
        //retrieving the array of data from maze A to determine the last usage
        //the treshold here can change depending on how many picks is considered to make a device "active" 
        this.plotservice.getEntireSet('SensorMazeB')
            .valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.filter(function (items) { return items.value > 10; }).map(function (item) {
                return item.time;
            });
        })).subscribe(function (data) {
            _this.sliceDataB(data);
            _this.durationOfUseB(data);
        });
        this.plotservice.getEntireSet('SensorMazeB')
            .valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.filter(function (items) { return items.value > 10; }).map(function (item) {
                return item.date;
            });
        })).subscribe(function (data) {
            _this.sliceDataBDate(data);
        });
    };
    //functions for navigation across the website
    HomeComponent.prototype.navigateHome = function () {
        this.router.navigate(['/home']);
    };
    HomeComponent.prototype.navigateTrial = function () {
        this.router.navigate(['/tournament']);
    };
    HomeComponent.prototype.navigateStatistics = function () {
        this.router.navigate(['/statistics']);
    };
    HomeComponent.prototype.navigateGallery = function () {
        this.router.navigate(['/gallery']);
    };
    //function used to logout the current user and navigate back to the login page
    HomeComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    /*function storing the data for the last photo captured
    *@param: data
    */
    HomeComponent.prototype.getLastPhotoDetails = function (data) {
        this.photo2 = data;
    };
    /*function storing the data for the values
    *@param: data
    * this obserable will be used in the MonitorChartAll plot
    */
    HomeComponent.prototype.returnA = function (data) {
        this.SensorMazeA = data;
    };
    /*function storing the data for the values
    *@param: data
    * this obserable will be used in the MonitorChartAll plot
    */
    HomeComponent.prototype.returnB = function (data) {
        this.SensorMazeB = data;
    };
    /*function storing the data for the values
    *@param: data
    * this obserable will be used in the MonitorChartAll plot
    */
    HomeComponent.prototype.returnC = function (data) {
        this.SensorMazeC = data;
    };
    /*function that calculates the duration of the usage
    *@param: data - queries based on some treshold that is considered active
    * this obserable will be used in the MonitorChartAll plot
    */
    HomeComponent.prototype.durationOfUseA = function (data) {
        this.DurationArrayA = data;
        var samplingRate = 5; //this will need to match the interval in which the data has been taken in arduino Piezo.ino code
        var numberOfActive = this.DurationArrayA.length; //getting number of values that were considered active
        var duration = ((numberOfActive * samplingRate) / 60); //number of values that were labelled as active * sampling rate and converted into minutes
        this.DurationA = duration; //stored as a number
    };
    HomeComponent.prototype.durationOfUseB = function (data) {
        this.DurationArrayB = data;
        var samplingRate = 5; //this will need to match the interval in which the data has been taken in arduino Piezo.ino code
        var numberOfActive = this.DurationArrayB.length; //getting number of values that were considered active
        var duration = ((numberOfActive * samplingRate) / 60); //number of values that were labelled as active * sampling rate and converted into minutes
        this.DurationB = duration; //stored as a number
    };
    /* Function used to retrieve last used element of maze A
    @param data - object story the time of the last usage
    * last usage determined based on some treshold
    */
    HomeComponent.prototype.sliceDataA = function (data) {
        this.LastUsedA = data;
        this.LastUsedA = this.LastUsedA.slice(-1).pop();
    };
    HomeComponent.prototype.sliceDataADate = function (data) {
        this.LastDateUsedA = data;
        this.LastDateUsedA = this.LastDateUsedA.slice(-1).pop();
    };
    /* Function used to retrieve last used element of maze A
    @param data - object story the time of the last usage
    * last usage determined based on some treshold
    */
    HomeComponent.prototype.sliceDataB = function (data) {
        this.LastUsedB = data;
        this.LastUsedB = this.LastUsedB.slice(-1).pop();
    };
    /* Function used to retrieve last used element of maze A
      @param data - object story the date of the last usage
      * last usage determined based on some treshold
      */
    HomeComponent.prototype.sliceDataBDate = function (data) {
        this.LastDateUsedB = data;
        this.LastDateUsedB = this.LastDateUsedB.slice(-1).pop();
    };
    /* Function used to create monitoring chart for maze A
    @param data - object that stores the read value of sensor A
    */
    HomeComponent.prototype.monitorChartA = function (data) {
        var element = this.elA.nativeElement;
        var trace1 = {
            type: 'scatter',
            y: data,
            line: {
                color: '#4682B4',
            }
        };
        var style = {
            margin: {
                l: 40,
                r: 40,
                b: 40,
                t: 60,
                pad: 4
            },
            autosize: true,
            title: 'Maze A',
            width: 350,
            height: 200,
            plot_bgcolor: '#161616',
            paper_bgcolor: '#161616',
            font: {
                color: '#d3d3d3',
                family: 'Raleway, Arial'
            }
        };
        var formattedData = [trace1];
        plotly_js__WEBPACK_IMPORTED_MODULE_1__["plot"](element, formattedData, style);
        // Plotly.extendTraces(element,update,[0])
    };
    /* Function used to create monitoring chart for maze B
    @param data - object that stores the read value of sensor B
    */
    HomeComponent.prototype.monitorChartB = function (data) {
        var element = this.elB.nativeElement;
        var trace1 = {
            type: 'scatter',
            y: data,
            line: {
                color: '#db4052',
            }
        };
        var style = {
            margin: {
                l: 40,
                r: 40,
                b: 40,
                t: 60,
                pad: 4
            },
            autosize: false,
            title: 'Maze B',
            width: 350,
            height: 200,
            plot_bgcolor: '#161616',
            paper_bgcolor: '#161616',
            font: {
                color: '#d3d3d3',
                family: 'Raleway, Arial'
            }
        };
        var formattedData = [trace1];
        plotly_js__WEBPACK_IMPORTED_MODULE_1__["plot"](element, formattedData, style);
        // Plotly.extendTraces(element,update,[0])
    };
    /* Function used to create monitoring chart for maze C
   @param data - object that stores the read value of sensor C
   */
    HomeComponent.prototype.monitorChartC = function (data) {
        var element = this.elC.nativeElement;
        var trace1 = {
            type: 'scatter',
            y: data,
            line: {
                color: '#6dc066',
            }
        };
        var style = {
            margin: {
                l: 40,
                r: 40,
                b: 40,
                t: 60,
                pad: 4
            },
            autosize: false,
            title: 'Maze C',
            width: 350,
            height: 200,
            plot_bgcolor: '#161616',
            paper_bgcolor: '#161616',
            font: {
                color: '#d3d3d3',
                family: 'Raleway, Arial'
            }
        };
        var formattedData = [trace1];
        plotly_js__WEBPACK_IMPORTED_MODULE_1__["plot"](element, formattedData, style);
        // Plotly.extendTraces(element,update,[0])
    };
    //  /* Function used to create monitoring chart for maze D
    // @param data - object that stores the read value of sensor D
    // */
    // monitorChartD(data) {
    //   var element = this.elD.nativeElement
    //   var trace1 = {
    //     type: 'scatter',
    //     y: data,
    //     line: {
    //       color: '#fef65b',
    //     }
    //   };
    //   var style = {
    //     margin: {
    //       l: 40,
    //       r: 40,
    //       b: 40,
    //       t: 60,
    //       pad: 4
    //     },
    //     autosize: false,
    //     title: 'Maze D',
    //     width: 350,
    //     height: 200,
    //     plot_bgcolor: '#161616',
    //     paper_bgcolor: '#161616',
    //     font: {
    //       color: '#d3d3d3',
    //       family: 'Raleway, Arial'
    //     }
    //   }
    //   var formattedData = [trace1];
    //   Plotly.plot(element, formattedData, style)
    //   // Plotly.extendTraces(element,update,[0])
    // }
    //  /* Function used to create monitoring chart for maze E
    // @param data - object that stores the read value of sensor E
    // */
    // monitorChartE(data) {
    //   var element = this.elE.nativeElement
    //   var trace1 = {
    //     type: 'scatter',
    //     y: data,
    //     line: {
    //       color: '#329999',
    //     }
    //   };
    //   var style = {
    //     margin: {
    //       l: 40,
    //       r: 40,
    //       b: 40,
    //       t: 60,
    //       pad: 4
    //     },
    //     autosize: false,
    //     title: 'Maze E',
    //     width: 350,
    //     height: 200,
    //     plot_bgcolor: '#161616',
    //     paper_bgcolor: '#161616',
    //     font: {
    //       color: '#d3d3d3',
    //       family: 'Raleway, Arial'
    //     }
    //   }
    //   var formattedData = [trace1];
    //   Plotly.plot(element, formattedData, style)
    //   // Plotly.extendTraces(element,update,[0])
    // }
    //  /* Function used to create monitoring chart for maze F
    // @param data - object that stores the read value of sensor F
    // */
    // monitorChartF(data) {
    //   var element = this.elF.nativeElement
    //   var trace1 = {
    //     type: 'scatter',
    //     y: data,
    //     line: {
    //       color: '#ff748c',
    //     }
    //   };
    //   var style = {
    //     margin: {
    //       l: 40,
    //       r: 40,
    //       b: 40,
    //       t: 60,
    //       pad: 4
    //     },
    //     autosize: false,
    //     title: 'Maze F',
    //     width: 350,
    //     height: 200,
    //     plot_bgcolor: '#161616',
    //     paper_bgcolor: '#161616',
    //     font: {
    //       color: '#d3d3d3',
    //       family: 'Raleway, Arial'
    //     }
    //   }
    //   var formattedData = [trace1];
    //   Plotly.plot(element, formattedData, style)
    //   // Plotly.extendTraces(element,update,[0])
    // }
    /* Function used to create monitoring chart for all mazes at the same time
     @param sensor Maze A - object that stores the values for sensor A
     */
    HomeComponent.prototype.monitorChartAll = function (SensorMazeA, SensorMazeB, SensorMazeC) {
        var element = this.elAll.nativeElement;
        var trace1 = {
            type: 'scatter',
            y: SensorMazeA,
            line: {
                color: '#4682B4',
            },
            name: 'Maze A',
        };
        var trace2 = {
            type: 'scatter',
            y: SensorMazeB,
            line: {
                color: '#db4052',
            },
            name: 'Maze B',
        };
        var trace3 = {
            type: 'scatter',
            y: SensorMazeC,
            line: {
                color: '#6dc066',
            },
            name: 'Maze C',
        };
        var style = {
            margin: {
                l: 40,
                r: 40,
                b: 40,
                t: 60,
                pad: 4
            },
            autosize: true,
            title: 'Maze A-C',
            plot_bgcolor: '#161616',
            paper_bgcolor: '#161616',
            font: {
                color: '#d3d3d3',
                family: 'Raleway, Arial'
            }
        };
        var formattedData = [trace1, trace2, trace3];
        plotly_js__WEBPACK_IMPORTED_MODULE_1__["plot"](element, formattedData, style);
        // Plotly.extendTraces(element,update,[0])
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chartA'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "elA", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chartB'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "elB", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chartC'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "elC", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chartD'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "elD", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chartE'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "elE", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chartF'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "elF", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chartAll'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "elAll", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")],
            providers: [
                {
                    provide: _angular_material___WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: AppDateAdapter
                },
                {
                    provide: _angular_material___WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: APP_DATE_FORMATS
                }
            ]
        }),
        __metadata("design:paramtypes", [_plot_service__WEBPACK_IMPORTED_MODULE_2__["PlotService"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["authService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login-form-wrap\">\n    <img src=\"../../assets/img/logo.PNG\">\n    <form class=\"login-form\" autocomplete=\"off\" novalidate [formGroup]=\"form\" (submit)=\"login()\">\n      <label>\n          <input type=\"email\" name=\"user\" placeholder=\"Email Address\"  formControlName=\"email\" required />\n        </label>\n      <label>\n          <input type=\"password\" name=\"pass\" placeholder=\"Password\" formControlName=\"password\" required />\n        </label>\n        <input type=\"submit\" name=\"login\" value=\"Log In\"/>\n      </form>\n  </section>\n<!-- <div class=\"login\">\n  <form autocomplete=\"off\" novalidate [formGroup]=\"form\" (submit)=\"login()\">\n    <input type=\"email\" name=\"user\" placeholder=\"Email Address\"  formControlName=\"email\" />\n    <input type=\"password\" name=\"pass\" placeholder=\"Password\" formControlName=\"password\" />\n    <button type=\"submit\" name=\"login\" class=\"btn btn-primary btn-block btn-large\" value=\"login\">Login</button>\n    </form>\n</div> -->"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-image: cover; }\n\n.login-form-wrap {\n  background-color: rgba(0, 0, 0, 0);\n  border-radius: 5px;\n  width: 280px;\n  height: 360px;\n  margin: 60px auto;\n  padding: 40px 25px 40px 25px;\n  text-align: center; }\n\n.login-form-wrap img {\n    margin: 0 0 20px 0;\n    padding: 0;\n    height: 100px;\n    width: 100px;\n    border-radius: 100%;\n    border-color: #000;\n    border-width: 0.1em;\n    border-style: solid; }\n\n.login-form-wrap h5 {\n    margin-top: 40px; }\n\n.login-form-wrap h5 > a {\n    font-size: 14px;\n    color: #fff;\n    text-decoration: none;\n    font-weight: 400; }\n\n.login-form input[type=\"email\"], .login-form input[type=\"password\"] {\n  background: transparent;\n  border-color: transparent;\n  border-bottom: solid #fff 0.08px;\n  width: 100%;\n  padding: 12px 20px;\n  font-weight: 400;\n  color: #DDD;\n  outline: none; }\n\n.login-form input[type=\"email\"]:hover, .login-form input[type=\"password\"]:hover {\n    color: #DDD;\n    outline: none; }\n\n.login-form input[type=\"email\"]::active, .login-form input[type=\"password\"]::active {\n    color: #DDD;\n    outline: none; }\n\n.login-form input[type=\"email\"] {\n  padding-bottom: 13px; }\n\n.login-form input[type=\"submit\"] {\n  font-weight: 400;\n  background-color: #4CAF50;\n  border: none;\n  border-radius: 20px;\n  display: block;\n  margin: 20px auto 0 auto;\n  width: 100%;\n  border: none;\n  padding: 8px;\n  font-size: 14px;\n  color: #fff; }\n\n.login-form input[type=\"submit\"]:hover {\n    background: #2d416d; }\n\n.login-form input[type=\"submit\"]:active {\n    padding-top: 9px;\n    padding-bottom: 7px;\n    background: #2d416d; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authService, router, elementRef) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.elementRef = elementRef;
        this.user$ = this.authService.user;
        this.form = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'url("../../assets/img/banner-02.jpg")';
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    //this function is called when the user tries to login
    LoginComponent.prototype.login = function () {
        var _this = this;
        var inputValue = this.form.value;
        this.authService.login(inputValue.email, inputValue.password)
            .subscribe(function (success) {
            _this.router.navigate(['home']);
        }, function (error) { return alert(error); });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["authService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/my-dialog/my-dialog.component.html":
/*!****************************************************!*\
  !*** ./src/app/my-dialog/my-dialog.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-dialog-content>\n    <p>Which Gorilla am I?</p>\n    </mat-dialog-content>\n    <mat-dialog-actions>\n      <mat-form-field>\n        \n      <mat-select  class=\"example-radio-group\">\n      <mat-option  matTooltip=\"Clicking the name will update the field\" [matTooltipPosition]=\"position.value\"\n      (click)=\"onCloseAfia();openSnackBar()\">Afia</mat-option>\n      <mat-option  matTooltip=\"Clicking the name will update the field\" [matTooltipPosition]=\"position.value\" \n      (click)=\"onCloseAyana();openSnackBar()\">Ayana</mat-option>\n      <mat-option  matTooltip=\"Clicking the name will update the field\" [matTooltipPosition]=\"position.value\"\n      (click)=\"onCloseJock();openSnackBar()\">Jock</mat-option>\n      <mat-option  matTooltip= \"Clicking the name will update the field\" [matTooltipPosition]=\"position.value\"\n      (click)=\"onCloseKera();openSnackBar()\">Kera</mat-option>\n      <mat-option  matTooltip=\"Clicking the name will update the field\"[matTooltipPosition]=\"position.value\"\n      (click)=\"onCloseKukena();openSnackBar()\">Kukena</mat-option>\n      <mat-option  matTooltip=\"Clicking the name will update the field\" [matTooltipPosition]=\"position.value\"\n      (click)=\"onCloseRomina();openSnackBar()\">Romina</mat-option>\n      <mat-option  matTooltip=\"Clicking the name will update the field\" [matTooltipPosition]=\"position.value\"\n      (click)=\"onCloseSalome();openSnackBar()\">Salome</mat-option>\n      <mat-option  matTooltip=\"Clicking the name will update the field\" [matTooltipPosition]=\"position.value\"\n      (click)=\"onCloseTouni();openSnackBar()\">Touni</mat-option>\n      <mat-option  matTooltip=\"Clicking the name will update the field\" [matTooltipPosition]=\"position.value\"\n      (click)=\"onCloseNotGorilla();openSnackBar()\">Not a gorilla</mat-option>\n\n      </mat-select>\n    </mat-form-field>\n    </mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "./src/app/my-dialog/my-dialog.component.scss":
/*!****************************************************!*\
  !*** ./src/app/my-dialog/my-dialog.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-user-input {\n  margin-right: 25px; }\n"

/***/ }),

/***/ "./src/app/my-dialog/my-dialog.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-dialog/my-dialog.component.ts ***!
  \**************************************************/
/*! exports provided: MyDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDialogComponent", function() { return MyDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var MyDialogComponent = /** @class */ (function () {
    function MyDialogComponent(snackBar, db, thisDialogRef, data) {
        this.snackBar = snackBar;
        this.db = db;
        this.thisDialogRef = thisDialogRef;
        this.data = data;
        this.addExtraClass = false;
        this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
        this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.positionOptions[0]);
    }
    MyDialogComponent.prototype.openSnackBar = function () {
        this.snackBar.open('Update applied!', 'Close', { duration: 3000, panelClass: ['snackbar']
        });
    };
    MyDialogComponent.prototype.ngOnInit = function () {
    };
    //these sets of functions are called when the input is selected
    //this then takes the key of the photo and updates its name 
    MyDialogComponent.prototype.onCloseKera = function () {
        this.thisDialogRef.close('Kera');
        this.db.list('Urls').update(this.data, { name: 'Kera' });
    };
    MyDialogComponent.prototype.onCloseJock = function () {
        this.thisDialogRef.close('Jock');
        this.db.list('Urls').update(this.data, { name: 'Jock' });
    };
    MyDialogComponent.prototype.onCloseKukena = function () {
        this.thisDialogRef.close('Kukena');
        this.db.list('Urls').update(this.data, { name: 'Kukena' });
    };
    MyDialogComponent.prototype.onCloseTouni = function () {
        this.thisDialogRef.close('Touni');
        this.db.list('Urls').update(this.data, { name: 'Touni' });
    };
    MyDialogComponent.prototype.onCloseAfia = function () {
        this.thisDialogRef.close('Afia');
        this.db.list('Urls').update(this.data, { name: 'Afia' });
    };
    MyDialogComponent.prototype.onCloseAyana = function () {
        this.thisDialogRef.close('Ayana');
        this.db.list('Urls').update(this.data, { name: 'Ayana' });
    };
    MyDialogComponent.prototype.onCloseSalome = function () {
        this.thisDialogRef.close('Salome');
        this.db.list('Urls').update(this.data, { name: 'Salome' });
    };
    MyDialogComponent.prototype.onCloseRomina = function () {
        this.thisDialogRef.close('Romina');
        this.db.list('Urls').update(this.data, { name: 'Romina' });
    };
    MyDialogComponent.prototype.onCloseNotGorilla = function () {
        this.thisDialogRef.close('Not a Gorilla');
        this.db.list('Urls').update(this.data, { name: 'Not a gorilla' });
    };
    MyDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-dialog',
            template: __webpack_require__(/*! ./my-dialog.component.html */ "./src/app/my-dialog/my-dialog.component.html"),
            styles: [__webpack_require__(/*! ./my-dialog.component.scss */ "./src/app/my-dialog/my-dialog.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], String])
    ], MyDialogComponent);
    return MyDialogComponent;
}());



/***/ }),

/***/ "./src/app/plot.service.ts":
/*!*********************************!*\
  !*** ./src/app/plot.service.ts ***!
  \*********************************/
/*! exports provided: PlotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotService", function() { return PlotService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlotService = /** @class */ (function () {
    function PlotService(db, storage) {
        this.db = db;
        this.storage = storage;
    }
    //rather than having different functions, need to be seperate because they are called on ngOnInit()
    // getDataA() {
    //   return this.db.list<any>('SensorMazeA', ref=> ref.limitToLast(15))
    // }
    // getFileUploads(){
    //   return this.storage.ref('Gorillas/image3.jpeg').getDownloadURL().pipe(then())
    // }
    // getphoto(dataset){
    //   return this.storage.ref(dataset).getDownloadURL();
    // }
    PlotService.prototype.getEntireSet = function (dataset) {
        return this.db.list(dataset);
    };
    PlotService.prototype.getLastItem = function (dataset) {
        return this.db.list(dataset, function (ref) { return ref.limitToLast(1); });
    };
    PlotService.prototype.getDataLive = function (dataset) {
        return this.db.list(dataset, function (ref) { return ref.limitToLast(15); });
    };
    // getLastUsed(dataset) {
    //    return this.db.list<any>(dataset)
    // }
    PlotService.prototype.getDataPie = function (dataset) {
        return this.db.list(dataset).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) {
            return items.map(function (item) {
                return item.value;
            });
        }));
    };
    PlotService.prototype.getVotes = function (dataset, gorilla) {
        return this.db.list(dataset, function (ref) { return ref.orderByChild('name').equalTo(gorilla); });
    };
    PlotService.prototype.getAllData = function (dataset, date) {
        return this.db.list(dataset, function (ref) { return ref.orderByChild('date').equalTo(date); }).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) {
            return items.map(function (item) {
                return item.value;
            });
        }));
    };
    PlotService.prototype.filterGallery = function (gorilla) {
        return this.db.list('Urls', function (ref) { return ref.orderByChild('name').equalTo(gorilla); });
    };
    PlotService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]])
    ], PlotService);
    return PlotService;
}());



/***/ }),

/***/ "./src/app/statistics/statistics.component.html":
/*!******************************************************!*\
  !*** ./src/app/statistics/statistics.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <nav class=\"menu\" tabindex=\"0\">\n          <div class=\"smartphone-menu-trigger\"></div>\n        <header class=\"avatar\">\n              <img src=\"../../assets/img/logo.PNG\" />\n          <h2>Gorilla Game Lab</h2>\n        </header>\n          <ul>\n          <li tabindex=\"0\" class=\"icon-dashboard\" (click)=\"navigateHome()\" routerlink=\"/home\"><span>Live Monitoring</span></li>\n          <li tabindex=\"0\" class=\"icon-stats\" (click)=\"navigateStatistics()\" routerlink=\"/statistics\"><span>Statistics</span></li>\n          <li  tabindex=\"0\" class=\"icon-gallery\" (click)=\"navigateGallery()\" routerlink=\"/gallery\"> <span>Gallery</span></li>\n          <li tabindex=\"0\" class=\"icon-trial\" (click)=\"navigateTrial()\" routerlink=\"/statistics\"><span>Trial</span></li>\n          <li  tabindex=\"0\" class=\"icon-users\"(click)=\"logout()\" routerlink=\"/login\" *ngIf=\"isLoggedIn\"> <span>Logout</span></li>\n        </ul>\n      </nav>\n      \n      <main>\n        <div class=\"helper\">\n              <div class=\"right\">\n                      <div class=\"charts\" #Piechart>\n                      </div>\n\n                      <div  class=\"charts\" #Votechart>\n                        \n                        </div>\n                        \n                      <div  class=\"charts\" #Barchart2>\n                        \n                        </div>\n                      <div class=\"charts\">\n                            <div #Barchart>\n                              \n                              </div>\n                        <mat-form-field class=\"example-full-width\">\n                        <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\"  [ngModel]=\"selectedDate\" (ngModelChange)='selectedDate = onDateSelected($event)'>\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker></mat-datepicker>\n                        </mat-form-field>\n                      </div>\n                     \n                      <!-- <p> Jock: {{Jock}}</p>\n                      <p> Kera: {{Kera}}</p>\n                      <p> Kukena: {{Kukena}}</p>\n                      <p> Touni: {{Touni}}</p>\n                      <p> Afia: {{Afia}}</p>\n                      <p> Ayana: {{Ayana}}</p>\n                      <p> Salome: {{Salome}}</p>\n                      <p> Romina: {{Romina}}</p> -->\n                     \n\n                </div>\n        </div>\n      </main>\n  </div>"

/***/ }),

/***/ "./src/app/statistics/statistics.component.scss":
/*!******************************************************!*\
  !*** ./src/app/statistics/statistics.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".charts {\n  float: left; }\n\nbody {\n  background: #161616; }\n\n.wrapper {\n  width: 100%;\n  margin: auto; }\n\nmain {\n  overflow: hidden;\n  margin-left: 20%;\n  margin-right: 1%; }\n\nmain .helper {\n    float: left;\n    padding: 0.2em 0em;\n    text-align: center;\n    border-radius: 20px; }\n\nmain .helper p {\n      font-size: 12px; }\n\nmain .helper span {\n      color: rgba(0, 0, 0, 0.2);\n      font-size: 0.4em;\n      display: block; }\n\n.mat-datepicker-content .mat-calendar {\n  zoom: 0.25; }\n\n.menu {\n  background: #3b444c;\n  height: 100vh;\n  width: 17%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  outline: none;\n  float: left; }\n\n.menu .avatar {\n    background: rgba(0, 0, 0, 0.1);\n    padding: 2em 0.5em;\n    text-align: center; }\n\n.menu .avatar img {\n      width: 100px;\n      border-radius: 50%;\n      overflow: hidden;\n      border: 4px solid #fff;\n      box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2); }\n\n.menu .avatar h2 {\n      font-weight: normal;\n      margin-bottom: 0; }\n\n.menu ul {\n    list-style: none;\n    padding: 0.5em 0;\n    margin: 0; }\n\n.menu ul li {\n      padding: 0.5em 1em 0.5em 3em;\n      font-size: 0.95em;\n      font-weight: regular;\n      background-repeat: no-repeat;\n      background-position: left 15px center;\n      background-size: auto 20px;\n      transition: all 0.15s linear;\n      cursor: pointer; }\n\n.menu ul li.icon-gallery {\n        background-image: url(\"http://www.entypo.com/images/folder-images.svg\"); }\n\n.menu ul li.icon-dashboard {\n        background-image: url(\"http://www.entypo.com/images/gauge.svg\"); }\n\n.menu ul li.icon-users {\n        background-image: url(\"http://www.entypo.com/images/user.svg\"); }\n\n.menu ul li.icon-trial {\n        background-image: url(\"http://www.entypo.com/images/tools.svg\"); }\n\n.menu ul li.icon-stats {\n        background-image: url(\"http://www.entypo.com/images/line-graph.svg\"); }\n\n.menu ul li:hover {\n        background-color: rgba(0, 0, 0, 0.1); }\n\n.menu ul li:focus {\n        outline: none; }\n\n@media screen and (max-width: 900px) and (min-width: 400px) {\n  body {\n    padding-left: 10%; }\n  .menu {\n    width: 90px; }\n    .menu .avatar {\n      padding: 0.5em;\n      position: relative; }\n      .menu .avatar img {\n        width: 60px; }\n      .menu .avatar h2 {\n        opacity: 0;\n        position: absolute;\n        top: 50%;\n        left: 100px;\n        margin: 0;\n        min-width: 200px;\n        border-radius: 4px;\n        background: rgba(0, 0, 0, 0.4);\n        -webkit-transform: translate3d(-20px, -50%, 0);\n                transform: translate3d(-20px, -50%, 0);\n        transition: all 0.15s ease-in-out; }\n      .menu .avatar:hover h2 {\n        opacity: 1;\n        -webkit-transform: translate3d(0px, -50%, 0);\n                transform: translate3d(0px, -50%, 0); }\n    .menu ul li {\n      height: 90px/1.5;\n      background-position: center center;\n      background-size: 30px auto;\n      position: relative; }\n      .menu ul li span {\n        opacity: 0;\n        position: absolute;\n        background: rgba(0, 0, 0, 0.5);\n        padding: 0.2em 0.5em;\n        border-radius: 4px;\n        top: 50%;\n        left: 80px;\n        -webkit-transform: translate3d(-15px, -50%, 0);\n                transform: translate3d(-15px, -50%, 0);\n        transition: all 0.15s ease-in-out; }\n        .menu ul li span:before {\n          content: '';\n          width: 0;\n          height: 0;\n          position: absolute;\n          top: 50%;\n          left: -5px;\n          border-top: 5px solid transparent;\n          border-bottom: 5px solid transparent;\n          border-right: 5px solid rgba(0, 0, 0, 0.5);\n          -webkit-transform: translateY(-50%);\n                  transform: translateY(-50%); }\n      .menu ul li:hover span {\n        opacity: 1;\n        -webkit-transform: translate3d(0px, -50%, 0);\n                transform: translate3d(0px, -50%, 0); } }\n\n@media screen and (max-width: 400px) {\n  body {\n    padding-left: 0; }\n  .menu {\n    width: 230px;\n    box-shadow: 0 0 0 100em rgba(0, 0, 0, 0);\n    -webkit-transform: translate3d(-230px, 0, 0);\n            transform: translate3d(-230px, 0, 0);\n    transition: all 0.3s ease-in-out; }\n    .menu .smartphone-menu-trigger {\n      width: 40px;\n      height: 40px;\n      position: absolute;\n      left: 100%;\n      background: #5bc995; }\n      .menu .smartphone-menu-trigger:before, .menu .smartphone-menu-trigger:after {\n        content: '';\n        width: 50%;\n        height: 2px;\n        background: #fff;\n        border-radius: 10px;\n        position: absolute;\n        top: 45%;\n        left: 50%;\n        -webkit-transform: translate3d(-50%, -50%, 0);\n                transform: translate3d(-50%, -50%, 0); }\n      .menu .smartphone-menu-trigger:after {\n        top: 55%;\n        -webkit-transform: translate3d(-50%, -50%, 0);\n                transform: translate3d(-50%, -50%, 0); }\n    .menu ul li {\n      padding: 1em 1em 1em 3em;\n      font-size: 1.2em; }\n    .menu:focus {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n      box-shadow: 0 0 0 100em rgba(0, 0, 0, 0.6); }\n      .menu:focus .smartphone-menu-trigger {\n        pointer-events: none; } }\n"

/***/ }),

/***/ "./src/app/statistics/statistics.component.ts":
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/*! exports provided: AppDateAdapter, APP_DATE_FORMATS, StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDateAdapter", function() { return AppDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_DATE_FORMATS", function() { return APP_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var plotly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! plotly.js */ "./node_modules/plotly.js/dist/plotly.min.js");
/* harmony import */ var plotly_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(plotly_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plot.service */ "./src/app/plot.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppDateAdapter = /** @class */ (function (_super) {
    __extends(AppDateAdapter, _super);
    function AppDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* Formatting the date component for the date picker module
    */
    AppDateAdapter.prototype.format = function (date, displayFormat) {
        if (displayFormat === 'input') {
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return day + "/" + month + "/" + year;
        }
        else {
            return date.toDateString();
        }
    };
    return AppDateAdapter;
}(_angular_material___WEBPACK_IMPORTED_MODULE_4__["NativeDateAdapter"]));

var APP_DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'numeric' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};
var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(plotservice, authService, router, elementRef) {
        var _this = this;
        this.plotservice = plotservice;
        this.authService = authService;
        this.router = router;
        this.elementRef = elementRef;
        this.minDate = new Date(2018, 5, 9);
        this.maxDate = new Date();
        //syntax used to retrieve the login state of the user 
        authService.isAuthenticated().subscribe(function (success) { return _this.isLoggedIn = success; });
    }
    StatisticsComponent.prototype.ngOnChanges = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#161616';
    };
    StatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //retrieving data for Gorilla Kera
        this.plotservice.getVotes('Urls', 'Kera')
            .valueChanges().subscribe(function (data) {
            _this.getSumKera(data);
            _this.voteChart(_this.Jock, _this.Kera, _this.Kukena, _this.Touni, _this.Afia, _this.Ayana, _this.Salome, _this.Romina);
        });
        //retrieving data for Gorilla Jock
        this.plotservice.getVotes('Urls', 'Jock')
            .valueChanges().subscribe(function (data) {
            _this.getSumJock(data);
            _this.voteChart(_this.Jock, _this.Kera, _this.Kukena, _this.Touni, _this.Afia, _this.Ayana, _this.Salome, _this.Romina);
        });
        //retrieving data for Gorilla Kukena
        this.plotservice.getVotes('Urls', 'Kukena')
            .valueChanges().subscribe(function (data) {
            _this.getSumKukena(data);
            _this.voteChart(_this.Jock, _this.Kera, _this.Kukena, _this.Touni, _this.Afia, _this.Ayana, _this.Salome, _this.Romina);
        });
        //retrieving data for Gorilla Touni
        this.plotservice.getVotes('Urls', 'Touni')
            .valueChanges().subscribe(function (data) {
            _this.getSumTouni(data);
            _this.voteChart(_this.Jock, _this.Kera, _this.Kukena, _this.Touni, _this.Afia, _this.Ayana, _this.Salome, _this.Romina);
        });
        //retrieving data for Gorilla Afia
        this.plotservice.getVotes('Urls', 'Afia')
            .valueChanges().subscribe(function (data) {
            _this.getSumAfia(data);
            _this.voteChart(_this.Jock, _this.Kera, _this.Kukena, _this.Touni, _this.Afia, _this.Ayana, _this.Salome, _this.Romina);
        });
        //retrieving data for Gorilla Ayana
        this.plotservice.getVotes('Urls', 'Ayana')
            .valueChanges().subscribe(function (data) {
            _this.getSumAyana(data);
            _this.voteChart(_this.Jock, _this.Kera, _this.Kukena, _this.Touni, _this.Afia, _this.Ayana, _this.Salome, _this.Romina);
        });
        //retrieving data for Gorilla Salome
        this.plotservice.getVotes('Urls', 'Salome')
            .valueChanges().subscribe(function (data) {
            _this.getSumSalome(data);
            _this.voteChart(_this.Jock, _this.Kera, _this.Kukena, _this.Touni, _this.Afia, _this.Ayana, _this.Salome, _this.Romina);
        });
        //retrieving data for Gorilla Romina
        this.plotservice.getVotes('Urls', 'Romina')
            .valueChanges().subscribe(function (data) {
            _this.getSumRomina(data);
            _this.voteChart(_this.Jock, _this.Kera, _this.Kukena, _this.Touni, _this.Afia, _this.Ayana, _this.Salome, _this.Romina);
        });
        //retrieving data from maze A to plot the total usage of all mazes
        this.plotservice.getDataPie('SensorMazeA')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (arr) { return arr.reduce(function (total, data) { return total + data; }); })) //this adds up all the data
            .subscribe(function (data) {
            plotly_js__WEBPACK_IMPORTED_MODULE_1__["purge"](_this.elPie.nativeElement);
            _this.getSumA(data);
            _this.pieChart(_this.SensorSumA, _this.SensorSumB, _this.SensorSumC);
        });
        //retrieving data from maze B to plot the total usage of all mazes
        this.plotservice.getDataPie('SensorMazeB')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (arr) { return arr.reduce(function (total, data) { return total + data; }, 0); }))
            .subscribe(function (data) {
            plotly_js__WEBPACK_IMPORTED_MODULE_1__["purge"](_this.elPie.nativeElement);
            _this.getSumB(data);
            _this.pieChart(_this.SensorSumA, _this.SensorSumB, _this.SensorSumC);
        });
        //retrieving data from maze C to plot the total usage of all mazes
        this.plotservice.getDataPie('SensorMazeC')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (arr) { return arr.reduce(function (total, data) { return total + data; }); }))
            .subscribe(function (data) {
            plotly_js__WEBPACK_IMPORTED_MODULE_1__["purge"](_this.elPie.nativeElement);
            _this.getSumC(data);
            _this.pieChart(_this.SensorSumA, _this.SensorSumB, _this.SensorSumC);
        });
        this.plotservice.getEntireSet('IRsensorA')
            .valueChanges()
            .subscribe(function (data) {
            _this.getSumIRA(data);
            _this.completedGames(_this.IRA, _this.IRB, _this.IRC);
        });
        this.plotservice.getEntireSet('IRsensorB')
            .valueChanges()
            .subscribe(function (data) {
            _this.getSumIRB(data);
            _this.completedGames(_this.IRA, _this.IRB, _this.IRC);
        });
        this.plotservice.getEntireSet('IRsensorC')
            .valueChanges()
            .subscribe(function (data) {
            _this.getSumIRC(data);
            _this.completedGames(_this.IRA, _this.IRB, _this.IRC);
        });
        //   //retirieving data to determine the average for maze A
        //    this.plotservice.getEntireSet('SensorMazeA')
        //    .valueChanges().pipe(map(items => { //first map
        //     return items.filter(items=> items.value > 0).map(item => { //second map
        //       return item.value;
        //     })
        //   })).subscribe(data => {
        //     this.getAverageA(data);
        // })
        //   //retirieving data to determine the average for maze A
        // this.plotservice.getEntireSet('SensorMazeB')
        //    .valueChanges().pipe(map(items => { //first map
        //     return items.filter(items=> items.value > 0).map(item => { //second map
        //       return item.value;
        //     })
        //   })).subscribe(data => {
        //     this.getAverageB(data);
        //     this.barChartAverage(this.AverageA, this.AverageB);
        // })
    };
    //functions for navigation across the website
    StatisticsComponent.prototype.navigateHome = function () {
        this.router.navigate(['/home']);
    };
    StatisticsComponent.prototype.navigateStatistics = function () {
        this.router.navigate(['/statistics']);
    };
    StatisticsComponent.prototype.navigateTrial = function () {
        this.router.navigate(['/tournament']);
    };
    StatisticsComponent.prototype.navigateGallery = function () {
        this.router.navigate(['/gallery']);
    };
    //function used to logout the current user and navigate back to the login page
    StatisticsComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    //function used to get the current gate and match it to the format in which it has been stored in the database
    StatisticsComponent.prototype.getDate = function () {
        var dateTime = new Date();
        var date = new String();
        var month = new String();
        var dd = dateTime.getDate();
        var mm = dateTime.getMonth() + 1; // Plus one because Jan is 0
        date = dd.toFixed();
        month = mm.toFixed();
        var yyyy = dateTime.getFullYear();
        if (dd < 10) {
            date = '0' + date;
        }
        if (mm < 10) {
            month = '0' + month;
        }
        var today = date + '-' + month + '-' + yyyy;
        return today;
    };
    /* function used to get the current date and call the function whenever datepicker value changes
   * @param val gets the selected date
   *  additional formatting has been done to match the format in the database and in the date picker
   */
    StatisticsComponent.prototype.onDateSelected = function (val) {
        var _this = this;
        var date = new String();
        var month = new String();
        var dd = val.getDate();
        var mm = val.getMonth() + 1; // Plus one because Jan is 0
        date = dd.toFixed();
        month = mm.toFixed();
        var yyyy = val.getFullYear();
        if (dd < 10) {
            date = '0' + date;
        }
        if (mm < 10) {
            month = '0' + month;
        }
        var dateSelected = month + '-' + date + '-' + yyyy;
        this.selectedDate = dateSelected; //storing the selected date in an object
        console.log(this.selectedDate);
        // querying data for maze A, and calling functions to plot the chart
        this.plotservice.getAllData('SensorMazeA', this.selectedDate)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (arr) { return arr.reduce(function (total, data) { return total + data; }); }))
            .subscribe(function (data) {
            plotly_js__WEBPACK_IMPORTED_MODULE_1__["purge"](_this.elBar.nativeElement);
            _this.getDatedSumA(data);
        });
        // querying data for maze B, and calling functions to plot the chart
        this.plotservice.getAllData('SensorMazeB', this.selectedDate)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (arr) { return arr.reduce(function (total, data) { return total + data; }); }))
            .subscribe(function (data) {
            plotly_js__WEBPACK_IMPORTED_MODULE_1__["purge"](_this.elBar.nativeElement);
            _this.getDatedSumB(data);
            //this.barChart(this.SensorDatedSumA, this.SensorDatedSumB,this.SensorDatedSumC);
        });
        // querying data for maze B, and calling functions to plot the chart
        this.plotservice.getAllData('SensorMazeC', this.selectedDate)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (arr) { return arr.reduce(function (total, data) { return total + data; }); }))
            .subscribe(function (data) {
            plotly_js__WEBPACK_IMPORTED_MODULE_1__["purge"](_this.elBar.nativeElement);
            _this.getDatedSumC(data);
            _this.barChart(_this.SensorDatedSumA, _this.SensorDatedSumB, _this.SensorDatedSumC);
        });
    };
    /*function used to store all the records where the field value child has the following value
    *@param data holds the corresponding value for the gorilla named 'Kera'
    */
    StatisticsComponent.prototype.getSumKera = function (data) {
        this.SumKera = data;
        this.Kera = this.SumKera.length;
    };
    /*function used to store all the records where the field value child has the following value
    *@param data holds the corresponding value for the gorilla named 'Jock'
    */
    StatisticsComponent.prototype.getSumJock = function (data) {
        this.SumJock = data;
        this.Jock = this.SumJock.length;
    };
    /*function used to store all the records where the field value child has the following value
    *@param data holds the corresponding value for the gorilla named 'Kukena'
    */
    StatisticsComponent.prototype.getSumKukena = function (data) {
        this.SumKukena = data;
        this.Kukena = this.SumKukena.length;
    };
    /*function used to store all the records where the field value child has the following value
    *@param data holds the corresponding value for the gorilla named 'Touni'
    */
    StatisticsComponent.prototype.getSumTouni = function (data) {
        this.SumTouni = data;
        this.Touni = this.SumTouni.length;
    };
    /*function used to store all the records where the field value child has the following value
    *@param data holds the corresponding value for the gorilla named 'Afia'
    */
    StatisticsComponent.prototype.getSumAfia = function (data) {
        this.SumAfia = data;
        this.Afia = this.SumAfia.length;
    };
    /*function used to store all the records where the field value child has the following value
    *@param data holds the corresponding value for the gorilla named 'Ayana'
    */
    StatisticsComponent.prototype.getSumAyana = function (data) {
        this.SumAyana = data;
        this.Ayana = this.SumAyana.length;
    };
    /*function used to store all the records where the field value child has the following value
    *@param data holds the corresponding value for the gorilla named 'Salome'
    */
    StatisticsComponent.prototype.getSumSalome = function (data) {
        this.SumSalome = data;
        this.Salome = this.SumSalome.length;
    };
    /*function used to store all the records where the field value child has the following value
    *@param data holds the corresponding value for the gorilla named 'Romina'
    */
    StatisticsComponent.prototype.getSumRomina = function (data) {
        this.SumRomina = data;
        this.Romina = this.SumRomina.length;
    };
    /*function used to store all the records where the field value child has the following value
  *@param data holds the corresponding value for the gorilla named 'Romina'
  */
    StatisticsComponent.prototype.getSumIRA = function (data) {
        this.sumIRA = data;
        this.IRA = this.sumIRA.length;
        console.log(this.IRA);
    };
    /*function used to store all the records where the field value child has the following value
    *@param data holds the corresponding value for the gorilla named 'Romina'
    */
    StatisticsComponent.prototype.getSumIRB = function (data) {
        this.sumIRB = data;
        this.IRB = this.sumIRB.length;
        console.log(this.IRB);
    };
    /*function used to store all the records where the field value child has the following value
    *@param data holds the corresponding value for the gorilla named 'Romina'
    */
    StatisticsComponent.prototype.getSumIRC = function (data) {
        this.sumIRC = data;
        this.IRC = this.sumIRC.length;
        console.log(this.IRC);
    };
    /*function used to store the sum of maze A for the purpose of plotting it
      @param data - object storing the queried data
    */
    StatisticsComponent.prototype.getSumA = function (data) {
        this.SensorSumA = data;
    };
    /*function used to store the sum of maze B for the purpose of plotting it
      @param data - object storing the queried data
    */
    StatisticsComponent.prototype.getSumB = function (data) {
        this.SensorSumB = data;
        console.log(this.SensorSumB);
    };
    StatisticsComponent.prototype.getSumC = function (data) {
        this.SensorSumC = data;
    };
    /* Function used to store the sum of maze A on a date selected
  @param data - object storing the queried data
  */
    StatisticsComponent.prototype.getDatedSumA = function (data) {
        this.SensorDatedSumA = data;
    };
    /*function used to store the sum of maze B on a date selected
      @param data - object storing the queried data
    */
    StatisticsComponent.prototype.getDatedSumB = function (data) {
        this.SensorDatedSumB = data;
    };
    /*function used to store the sum of maze B on a date selected
      @param data - object storing the queried data
    */
    StatisticsComponent.prototype.getDatedSumC = function (data) {
        this.SensorDatedSumC = data;
    };
    //function that stores the average picks of each Maze
    // getAverageA(data) {
    //   this.AveragePicksA = data;
    //   var sum;
    //   var avg = 0;
    //   const reducer = (accumulator, currentValue) => accumulator + currentValue;
    //   sum = this.AveragePicksA.reduce(reducer);
    //   avg =Math.round(sum /this.AveragePicksA.length);
    //   this.AverageA = avg;
    // }
    //function that stores the average picks of each Maze
    // getAverageB(data) {
    //   this.AveragePicksB = data;
    //   var sum;
    //   var avg = 0;
    //   const reducer = (accumulator, currentValue) => accumulator + currentValue;
    //   sum = this.AveragePicksB.reduce(reducer);
    //   avg =Math.round(sum /this.AveragePicksB.length);
    //   this.AverageB = avg;
    // }
    /* function that stores the average picks of each Maze
    *@param SensorSumA holds the total value for maze A
    *@param SensorSumB holds the total value for maze B
    * using the total values we can determine which maze has been used the most
    */
    StatisticsComponent.prototype.pieChart = function (SensorSumA, SensorSumB, SensorSumC) {
        var element = this.elPie.nativeElement;
        var formattedData = [{
                values: [SensorSumA, SensorSumB, SensorSumC],
                labels: ['Maze A', 'Maze B', 'Maze C'],
                type: 'pie',
                marker: {
                    colors: ['#4682B4', '#db4052', '#6dc066']
                }
            }];
        var style = {
            margin: {
                l: 97,
                r: 40,
                b: 40,
                t: 60,
                pad: 4
            },
            autosize: false,
            title: 'All-time Most Used',
            width: 510,
            height: 300,
            plot_bgcolor: '#161616',
            paper_bgcolor: '#161616',
            font: {
                color: '#d3d3d3',
                family: 'Raleway, Arial'
            }
        };
        plotly_js__WEBPACK_IMPORTED_MODULE_1__["plot"](element, formattedData, style);
    };
    /* function that stores interaction for the corresponding date
    *@param SensorSumA holds the total value for maze A
    *@param SensorSumB holds the total value for maze B
    * using the total values we can determine which maze has been used the most on the given date
    */
    StatisticsComponent.prototype.barChart = function (SensorSumA, SensorSumB, SensorSumC) {
        var element = this.elBar.nativeElement;
        var trace1 = {
            x: ['Maze A'],
            y: [SensorSumA],
            width: [0.7],
            type: 'bar',
            marker: {
                color: '#4682B4',
            }
        };
        var trace2 = {
            x: ['Maze B'],
            y: [SensorSumB],
            width: [0.7],
            type: 'bar',
            marker: {
                color: '#db4052',
            }
        };
        var trace3 = {
            x: ['Maze C'],
            y: [SensorSumC],
            width: [0.7],
            type: 'bar',
            marker: {
                color: '#6dc066',
            }
        };
        var style = {
            margin: {
                l: 40,
                r: 40,
                b: 40,
                t: 60,
                pad: 4
            },
            showlegend: false,
            autosize: false,
            title: 'Most Used on Given Date ',
            width: 510,
            height: 300,
            plot_bgcolor: '#161616',
            paper_bgcolor: '#161616',
            font: {
                color: '#d3d3d3',
                family: 'Raleway, Arial'
            }
        };
        var formattedData = [trace1, trace2, trace3];
        plotly_js__WEBPACK_IMPORTED_MODULE_1__["plot"](element, formattedData, style);
    };
    StatisticsComponent.prototype.completedGames = function (IRA, IRB, IRC) {
        var element = this.elCompletedGames.nativeElement;
        var trace1 = {
            x: ['Maze A', 'Maze B', 'Maze C'],
            y: [IRA, IRB, IRC],
            name: 'Started Games',
            width: [0.7],
            type: 'bar',
            marker: {
                color: ['#4682B4', '#db4052', '#6dc066', '#fef65b', '#329999', '#ff748c',],
            }
        };
        var trace2 = {
            x: ['Maze A', 'Maze B', 'Maze C'],
            y: [IRB, IRC, IRC],
            name: 'Completed Games',
            width: [0.7],
            type: 'bar',
            marker: {
                color: ['#386890', '#af3341', '#579951', '#cbc448', '#287a7a', '#cc5c70',],
            }
        };
        var style = {
            margin: {
                l: 40,
                r: 40,
                b: 40,
                t: 60,
                pad: 4
            },
            showlegend: true,
            autosize: false,
            title: 'Ration of Started and Completed Games ',
            width: 510,
            height: 300,
            barmode: 'stack',
            plot_bgcolor: '#161616',
            paper_bgcolor: '#161616',
            font: {
                color: '#d3d3d3',
                family: 'Raleway, Arial'
            }
        };
        var formattedData = [trace1, trace2];
        plotly_js__WEBPACK_IMPORTED_MODULE_1__["newPlot"](element, formattedData, style);
    };
    // barChartAverage(AverageA, AverageB) {
    //   const element = this.elBarAverage.nativeElement
    //   const style = {
    //     margin: {
    //       l: 40,
    //       r: 40,
    //       b: 40,
    //       t: 60,
    //       pad: 4
    //     },
    //     title: 'Average Number of Picks when Active',
    //     width: 510,
    //     height: 300,
    //     plot_bgcolor: '#161616',
    //     paper_bgcolor: '#161616',
    //     font: {
    //       color: '#d3d3d3',
    //       family: 'Raleway, Arial'
    //     }
    //   }
    //   var colors = ['#4682B4', '#db4052', '#6dc066', '#fef65b', '#329999', '#ff748c']
    //   var formattedData = [
    //     {
    //       x: ['Maze A', 'Maze B', 'Maze C', 'Maze D', 'Maze E', 'Maze F'],
    //       y: [AverageA, AverageB, AverageB, AverageA, AverageB, AverageA],
    //       type: 'bar',
    //       marker: {
    //         color: colors
    //       }
    //     }
    //   ];
    //   Plotly.plot(element, formattedData, style)
    // }
    /* function that draws out which gorilla is "the most playfull"
      *this is based on the keepers input on which gorilla has been recognized and which has not been recognized
      *@param Jock holds the number of records which have been recognized to have this Gorilla on the image
      *@param Kera holds the number of records which have been recognized to have this Gorilla on the image
      *etc.
      * using the total values we can determine which maze has been used the most
      */
    StatisticsComponent.prototype.voteChart = function (Jock, Kera, Kukena, Touni, Afia, Ayana, Salome, Romina) {
        var element = this.elVote.nativeElement;
        var formattedData = [{
                type: 'bar',
                x: [Touni, Salome, Romina, Kukena, Kera, Jock, Ayana, Afia],
                y: ['Touni', 'Salome', 'Romina', 'Kukena', 'Kera', 'Jock', 'Ayana', 'Afia'],
                orientation: 'h'
            }];
        var style = {
            margin: {
                l: 150,
                r: 0,
                b: 40,
                t: 60,
                pad: 4
            },
            autosize: false,
            title: 'Most Playful Gorilla',
            width: 510,
            height: 300,
            plot_bgcolor: '#161616',
            paper_bgcolor: '#161616',
            font: {
                color: '#d3d3d3',
                family: 'Raleway, Arial'
            }
        };
        plotly_js__WEBPACK_IMPORTED_MODULE_1__["newPlot"](element, formattedData, style);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('Piechart'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StatisticsComponent.prototype, "elPie", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('Barchart'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StatisticsComponent.prototype, "elBar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('Barchart2'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StatisticsComponent.prototype, "elCompletedGames", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('Votechart'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StatisticsComponent.prototype, "elVote", void 0);
    StatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! ./statistics.component.html */ "./src/app/statistics/statistics.component.html"),
            styles: [__webpack_require__(/*! ./statistics.component.scss */ "./src/app/statistics/statistics.component.scss")]
        }),
        __metadata("design:paramtypes", [_plot_service__WEBPACK_IMPORTED_MODULE_2__["PlotService"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["authService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/tournament/tournament.component.html":
/*!******************************************************!*\
  !*** ./src/app/tournament/tournament.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n<div class=\"topDiv\">\n    <p tabindex=\"0\" class=\"link\" (click)=\"navigateHome()\" routerlink=\"/home\"><span>Navigate Home</span></p>\n  <h1 class=\"heading\">How fast can YOU solve the maze?</h1>\n    \n    <div *ngFor = \"let score of durationSession\" class=\"score\" >\n      <p> {{score}}</p>\n    </div>\n</div>    \n<div class=\"bottomDiv\">\n      <h1>{{durationLast}}</h1>\n      <p><span style=\"font-family: 'Raleway', 'Arial'; color:#fff; font-size: 20px;\">Maze A: </span><span style=\"font-size: 18px\">{{durationLastAB}}</span></p>\n      <p><span style=\"font-family: 'Raleway', 'Arial'; color:#fff; font-size: 20px;\">Maze B: </span><span style=\"font-size: 18px\">{{durationLastBC}}</span></p>\n      <button mat-button (click)=\"findAvgFunction(); findAvgFunctionAB(); findAvgFunctionBC();\">Get Average</button>\n      <p><span style=\"font-size: 18px\"><span style=\"font-family: 'Raleway', 'Arial';  font-size: 20px;\"> <span style= \"color:#fff;\">Total:</span> {{avg}} <span style= \"color:#fff;\"> Maze A: </span> {{avgAB}}  <span style= \"color:#fff;\"> Maze B:</span> {{avgBC}}</span></span></p>\n    </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/tournament/tournament.component.scss":
/*!******************************************************!*\
  !*** ./src/app/tournament/tournament.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Orbitron\");\nhtml, body {\n  height: 100%; }\n.wrapper {\n  font-family: 'Orbitron', sans-serif;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0; }\n.wrapper .topDiv {\n    color: #4682B4;\n    position: absolute;\n    top: 0;\n    right: 2%;\n    left: 2%;\n    bottom: 50%;\n    overflow: auto;\n    text-align: left;\n    padding-left: 5%;\n    padding-right: 5%; }\n.wrapper .topDiv .link {\n      font-family: 'Raleway', 'Arial';\n      font-size: 15px;\n      color: #fff;\n      text-align: right; }\n.wrapper .topDiv .link:hover {\n        color: #db4052; }\n.wrapper .topDiv .score {\n      width: 10%;\n      display: inline-block;\n      line-height: 10px;\n      font-size: 18px; }\n.wrapper .topDiv .heading {\n      font-family: 'Raleway', 'Arial';\n      font-weight: 100;\n      text-align: center;\n      color: #fff;\n      font-size: 50px;\n      padding-bottom: 10px; }\n.wrapper .bottomDiv {\n    position: absolute;\n    font-size: 45px;\n    color: #db4052;\n    top: 50%;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    text-align: center; }\n.wrapper .bottomDiv h1 {\n      margin: 0;\n      padding: 5 0; }\n.wrapper .bottomDiv p {\n      margin: 0;\n      padding: 5 0; }\n.wrapper .bottomDiv button:hover {\n      color: #4682B4; }\n"

/***/ }),

/***/ "./src/app/tournament/tournament.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tournament/tournament.component.ts ***!
  \****************************************************/
/*! exports provided: TournamentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentComponent", function() { return TournamentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _plot_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plot.service */ "./src/app/plot.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TournamentComponent = /** @class */ (function () {
    function TournamentComponent(plotservice, router, elementRef) {
        this.plotservice = plotservice;
        this.router = router;
        this.elementRef = elementRef;
        this.StartToArray = new Array(); //used to convert an observable to an array 
        this.MiddleToArray = new Array(); //used to convert an observable to an array 
        this.EndToArray = new Array(); //used to convert an observable to an array
        this.durationSession = new Array(); //stores all the time differences for a current session(refresh page ends the session)
        this.durationSessionA = new Array(); //stores all the time differences for a current session(refresh page ends the session)
        this.durationSessionB = new Array(); //stores all the time differences for a current session(refresh page ends the session)
        this.findAvg = new Array();
        this.findAvgAB = new Array();
        this.findAvgBC = new Array();
    }
    TournamentComponent.prototype.ngOnInit = function () {
        var _this = this;
        //retrieves the last time when the Maze A sensor was triggered
        this.plotservice.getLastItem('Tournament')
            .valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) {
            return items.map(function (item) {
                return item.DetectedA;
            });
        })).subscribe(function (data) {
            _this.storeLastStart(data);
            _this.DurationLast(_this.dateStart, _this.dateEnd);
            _this.DurationLastAB(_this.dateStart, _this.dateMiddle);
        });
        //retrieves the last time when the Maze B sensor was triggered
        this.plotservice.getLastItem('Tournament')
            .valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) {
            return items.map(function (item) {
                return item.DetectedB;
            });
        })).subscribe(function (data) {
            _this.storeLastMiddle(data);
            _this.DurationLastBC(_this.dateMiddle, _this.dateEnd);
        });
        //retrieves the last time when the Maze C sensor was triggered 
        this.plotservice.getLastItem('Tournament')
            .valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) {
            return items.map(function (item) {
                return item.DetectedC;
            });
        })).subscribe(function (data) {
            _this.storeLastEnd(data);
        });
        //retrieves all the times when Maze A was triggered to find the average
        this.subscriptionA = this.plotservice.getEntireSet('Tournament')
            .valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) {
            return items.map(function (item) {
                return item.DetectedA;
            });
        })).subscribe(function (data) {
            _this.storeTimesStart(data);
            _this.DurationAll(_this.StartToArray, _this.EndToArray);
            _this.DurationAllAB(_this.StartToArray, _this.MiddleToArray);
            _this.subscriptionA.unsubscribe();
        });
        //retrieves all the times when Maze B was triggered to find the average
        this.subscriptionB = this.plotservice.getEntireSet('Tournament')
            .valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) {
            return items.map(function (item) {
                return item.DetectedB;
            });
        })).subscribe(function (data) {
            _this.storeTimesMiddle(data);
            _this.subscriptionB.unsubscribe();
            _this.DurationAllBC(_this.MiddleToArray, _this.EndToArray);
        });
        //retrieves all the times when Maze C was triggered to find the average
        this.subscriptionC = this.plotservice.getEntireSet('Tournament')
            .valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) {
            return items.map(function (item) {
                return item.DetectedC;
            });
        })).subscribe(function (data) {
            _this.storeTimesEnd(data);
            _this.subscriptionC.unsubscribe();
        });
    };
    TournamentComponent.prototype.navigateHome = function () {
        this.router.navigate(['/home']);
    };
    /* function that stores the last time the Maze A was triggered
    *@param data: value of the last time difference
    */
    TournamentComponent.prototype.storeLastStart = function (data) {
        this.dateStart = data; //stored in an array form
        this.dateStart = this.dateStart[0]; //this converts it to string
    };
    /* function that stores all the times the Maze A was triggered at
     *@param data: value of all the time differences
     */
    TournamentComponent.prototype.storeTimesStart = function (data) {
        this.timesStart = data; //stored in an array 
        for (var i = 0; i < this.timesStart.length; i++) {
            var value = new Date(this.timesStart[i]); //convert dates to correct date Format
            this.StartToArray.push(value);
        }
    };
    /* function that stores the last time the Maze B was triggered
    *@param data: value of the last time difference
    */
    TournamentComponent.prototype.storeLastMiddle = function (data) {
        this.dateMiddle = data; //stored in an array form
        this.dateMiddle = this.dateMiddle[0]; //this converts it to string
    };
    /* function that stores all the times the Maze B was triggered at
     *@param data: value of all the time differences
     */
    TournamentComponent.prototype.storeTimesMiddle = function (data) {
        this.timesMiddle = data; //stored in an array 
        for (var i = 0; i < this.timesMiddle.length; i++) {
            var value = new Date(this.timesMiddle[i]); //convert dates to correct date Format
            this.MiddleToArray.push(value);
        }
    };
    /* function that stores all the times the Maze C was triggered at
     *@param data: value of all the time differences
     */
    TournamentComponent.prototype.storeTimesEnd = function (data) {
        this.timesEnd = data; //stored in an array 
        for (var i = 0; i < this.timesEnd.length; i++) {
            var value = new Date(this.timesEnd[i]); //convert dates to correct date Format
            this.EndToArray.push(value);
        }
    };
    /* function that stores the last time the Maze C was triggered
     *@param data: value of the last time difference
     */
    TournamentComponent.prototype.storeLastEnd = function (data) {
        this.dateEnd = data; //store as array
        this.dateEnd = this.dateEnd[0]; // convert to string
    };
    /* function that finds the difference between the times of the last trial
    *@param dateStart: array that stores all Maze A times in correct date form
    *@param dateStart: array that stores all Maze C times in correct date form
    */
    TournamentComponent.prototype.DurationLast = function (dateStart, dateEnd) {
        var date1 = new Date(dateStart); //store in the right format
        var date2 = new Date(dateEnd);
        var diff = date2.getTime() - date1.getTime(); //find difference
        var msec = diff;
        var hh = Math.floor(msec / 1000 / 60 / 60); //convert hours
        msec -= hh * 1000 * 60 * 60;
        var mm = Math.floor(msec / 1000 / 60); //convert months
        msec -= mm * 1000 * 60;
        var ss = Math.floor(msec / 1000); //convert seconds
        msec -= ss * 1000;
        if (ss < 10) {
            this.durationLast = ("0" + hh + ":0" + mm + ":0" + ss); //output
        }
        else {
            this.durationLast = ("0" + hh + ":0" + mm + ":" + ss); //output
        }
        if (hh !== hh || mm !== mm || ss != ss) {
            // console.log("Nan input")
        }
        else {
            this.durationSession.push(this.durationLast); //store in the array for the current session
        }
        //console.log(this.durationLast)
    };
    /* function that finds the difference between the times of the last trial
    *@param dateStart: array that stores all Maze A times in correct date form
    *@param dateStart: array that stores all Maze C times in correct date form
    */
    TournamentComponent.prototype.DurationLastAB = function (dateStart, dateEnd) {
        var date1 = new Date(dateStart); //store in the right format
        var date2 = new Date(dateEnd);
        var diff = date2.getTime() - date1.getTime(); //find difference
        var msec = diff;
        var hh = Math.floor(msec / 1000 / 60 / 60); //convert hours
        msec -= hh * 1000 * 60 * 60;
        var mm = Math.floor(msec / 1000 / 60); //convert months
        msec -= mm * 1000 * 60;
        var ss = Math.floor(msec / 1000); //convert seconds
        msec -= ss * 1000;
        if (ss < 10) {
            this.durationLastAB = ("0" + hh + ":0" + mm + ":0" + ss); //output
        }
        else {
            this.durationLastAB = ("0" + hh + ":0" + mm + ":" + ss); //output
        }
        if (hh !== hh || mm !== mm || ss != ss) {
            // console.log("Nan input")
        }
        else {
            this.durationSessionA.push(this.durationLastAB);
        }
        //console.log(this.durationLast)
    };
    /* function that finds the difference between the times of the last trial
    *@param dateStart: array that stores all Maze A times in correct date form
    *@param dateStart: array that stores all Maze C times in correct date form
    */
    TournamentComponent.prototype.DurationLastBC = function (dateStart, dateEnd) {
        var date1 = new Date(dateStart); //store in the right format
        var date2 = new Date(dateEnd);
        var diff = date2.getTime() - date1.getTime(); //find difference
        var msec = diff;
        var hh = Math.floor(msec / 1000 / 60 / 60); //convert hours
        msec -= hh * 1000 * 60 * 60;
        var mm = Math.floor(msec / 1000 / 60); //convert months
        msec -= mm * 1000 * 60;
        var ss = Math.floor(msec / 1000); //convert seconds
        msec -= ss * 1000;
        if (ss < 10) {
            this.durationLastBC = ("0" + hh + ":0" + mm + ":0" + ss); //output
        }
        else {
            this.durationLastBC = ("0" + hh + ":0" + mm + ":" + ss); //output
        }
        if (hh !== hh || mm !== mm || ss != ss) {
            // console.log("Nan input")
        }
        else {
            this.durationSessionB.push(this.durationLastBC);
        }
        //console.log(this.durationLast)
    };
    // /* function that finds the average of all times retrieved
    // *@param avg: holds all the time differences
    // */
    // findAvgFunct(avg) {
    // var sum = 0
    // //console.log(avg)
    // var times = avg
    // var input = document.createElement('input')
    // input.type = 'time'
    // sum = times.reduce(function(prev, time) { //.reduce() sums up all the times 
    //   input.value = time
    //   return prev + input.valueAsNumber
    // },0)
    // input.valueAsNumber = sum / times.length // sum divided by the number of elements
    // this.avg = input.value;
    // }
    /* function that finds the average of all times retrieved
    *@param avg: holds all the time differences
    */
    TournamentComponent.prototype.findAvgFunctionAB = function () {
        var sum = 0;
        var times = this.durationSessionA;
        var input2 = document.createElement('input');
        input2.type = 'time';
        sum = times.reduce(function (prev, time) {
            input2.value = time;
            return prev + input2.valueAsNumber;
        }, 0);
        input2.valueAsNumber = sum / times.length; // sum divided by the number of elements
        this.avgAB = input2.value;
    };
    TournamentComponent.prototype.findAvgFunctionBC = function () {
        var sum = 0;
        var times = [];
        var times = this.durationSessionB;
        console.log(times);
        var input = document.createElement('input');
        input.type = 'time';
        sum = times.reduce(function (prev, time) {
            input.value = time;
            return prev + input.valueAsNumber;
        }, 0);
        input.valueAsNumber = sum / times.length; // sum divided by the number of elements
        this.avgBC = input.value;
    };
    TournamentComponent.prototype.findAvgFunction = function () {
        var sum = 0;
        //console.log(avg)
        var times = this.durationSession;
        var input = document.createElement('input');
        input.type = 'time';
        sum = times.reduce(function (prev, time) {
            input.value = time;
            return prev + input.valueAsNumber;
        }, 0);
        input.valueAsNumber = sum / times.length; // sum divided by the number of elements
        this.avg = input.value;
        console.log(times);
    };
    /* function that finds the difference between the times of all the trials
    *@param timesStart: array that stores all Maze A times in correct date form
    *@param timesEnd: array that stores all Maze C times in correct date form
    */
    TournamentComponent.prototype.DurationAll = function (timesStart, timesEnd) {
        var A = timesEnd;
        var B = timesStart;
        for (var i = 0; i < A.length; i++) {
            var diff = A[i].getTime() - B[i].getTime();
            var msec = diff;
            var hh = Math.floor(msec / 1000 / 60 / 60);
            msec -= hh * 1000 * 60 * 60;
            var mm = Math.floor(msec / 1000 / 60);
            msec -= mm * 1000 * 60;
            var ss = Math.floor(msec / 1000);
            msec -= ss * 1000;
            if (ss < 10) {
                this.durationSession.push("0" + hh + ":0" + mm + ":0" + ss);
            }
            else {
                this.durationSession.push("0" + hh + ":0" + mm + ":" + ss);
            }
            //console.log(this.durationSession);
        }
    };
    // QueryDuration() {
    //   this.plotservice.getEntireSet('Tournament')
    //     .valueChanges().pipe(map(items => { //first map
    //       return items.map(item => { //second map
    //         return item.DetectedA;
    //       })
    //     })).subscribe(data => {
    //         this.storeTimesStart(data);
    //         this.DurationAll(this.StartToArray,this.EndToArray);
    //       })
    //     //retrieves all the times when Maze C was triggered to find the avarage
    //     this.plotservice.getEntireSet('Tournament')
    //     .valueChanges().pipe(map(items => { //first map
    //       return items.map(item => { //second map
    //         return item.DetectedC;
    //       })
    //     })).subscribe(data => {
    //         this.storeTimesEnd(data);
    //     })
    // }
    /* function that finds the difference between the times of all the trials
    *@param timesStart: array that stores all Maze A times in correct date form
    *@param timesEnd: array that stores all Maze C times in correct date form
    */
    TournamentComponent.prototype.DurationAllAB = function (timesStart, timesEnd) {
        var A = timesEnd;
        var B = timesStart;
        for (var i = 0; i < A.length; i++) {
            var diff = A[i].getTime() - B[i].getTime();
            var msec = diff;
            var hh = Math.floor(msec / 1000 / 60 / 60);
            msec -= hh * 1000 * 60 * 60;
            var mm = Math.floor(msec / 1000 / 60);
            msec -= mm * 1000 * 60;
            var ss = Math.floor(msec / 1000);
            msec -= ss * 1000;
            if (ss < 10) {
                this.durationSessionA.push("0" + hh + ":0" + mm + ":0" + ss);
            }
            else {
                this.durationSessionA.push("0" + hh + ":0" + mm + ":" + ss);
            }
        }
    };
    /* function that finds the difference between the times of all the trials
    *@param timesStart: array that stores all Maze A times in correct date form
    *@param timesEnd: array that stores all Maze C times in correct date form
    */
    TournamentComponent.prototype.DurationAllBC = function (timesStart, timesEnd) {
        var A = timesEnd;
        var B = timesStart;
        for (var i = 0; i < A.length; i++) {
            var diff = A[i].getTime() - B[i].getTime();
            var msec = diff;
            var hh = Math.floor(msec / 1000 / 60 / 60);
            msec -= hh * 1000 * 60 * 60;
            var mm = Math.floor(msec / 1000 / 60);
            msec -= mm * 1000 * 60;
            var ss = Math.floor(msec / 1000);
            msec -= ss * 1000;
            if (ss < 10) {
                this.durationSessionB.push("0" + hh + ":0" + mm + ":0" + ss);
            }
            else {
                this.durationSessionB.push("0" + hh + ":0" + mm + ":" + ss);
            }
        }
    };
    TournamentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tournament',
            template: __webpack_require__(/*! ./tournament.component.html */ "./src/app/tournament/tournament.component.html"),
            styles: [__webpack_require__(/*! ./tournament.component.scss */ "./src/app/tournament/tournament.component.scss")]
        }),
        __metadata("design:paramtypes", [_plot_service__WEBPACK_IMPORTED_MODULE_1__["PlotService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], TournamentComponent);
    return TournamentComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCVAJEpn5mpCvUEVwXlm9kLyVasqEyW1tY",
        authDomain: "gorillagamelab-5c212.firebaseapp.com",
        databaseURL: "https://gorillagamelab-5c212.firebaseio.com",
        projectId: "gorillagamelab-5c212",
        storageBucket: "gorillagamelab-5c212.appspot.com",
        messagingSenderId: "596162693283"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kadij\Project\ng5\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map