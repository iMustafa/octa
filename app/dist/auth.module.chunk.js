webpackJsonp(["auth.module"],{

/***/ "../../../../../src/app/modules/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_material_module__ = __webpack_require__("../../../../../src/app/modules/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__("../../../../../src/app/modules/auth/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_router__ = __webpack_require__("../../../../../src/app/modules/auth/auth.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__globals_layouts_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/modules/globals/layouts/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login_component__ = __webpack_require__("../../../../../src/app/modules/auth/pages/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__auth_router__["a" /* AUTHROUTES */]),
            __WEBPACK_IMPORTED_MODULE_3__material_material_module__["a" /* MaterialModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_6__globals_layouts_navbar_navbar_component__["a" /* NavbarComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */]
        ]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/auth/auth.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTHROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login_component__ = __webpack_require__("../../../../../src/app/modules/auth/pages/login/login.component.ts");

var AUTHROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__pages_login_login_component__["a" /* LoginComponent */] }
];
//# sourceMappingURL=auth.router.js.map

/***/ }),

/***/ "../../../../../src/app/modules/auth/pages/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/auth/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"login_main\">\n\t<section class=\"memory\">\n\t\t<div class=\"brand text-center\">\n\t\t\t<h1>Octa</h1>\n\t\t</div>\n\t</section>\n\t<div class=\"login container\">\n\t\t<h3 class='text-center'>\n\t\t\tMember Login\n\t\t</h3>\n\t\t<a href='/oauth/fb'>Login With Facebook</a>\n\t</div>\n</main>"

/***/ }),

/***/ "../../../../../src/app/modules/auth/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/modules/auth/pages/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/auth/pages/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/auth/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(router) {
        this.router = router;
    }
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/modules/globals/layouts/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n    background-color: #AAA\n}\n\n.navbar-default {\n    border-color: transparent;\n    margin: 0;\n    border-radius: 0;\n    color: #888\n}\n\n.navbar-default * {\n    color: #333\n}\n\nul.navbar-right {\n    margin-top: 10px\n}\n\n.sidenav {\n    position: fixed;\n    top: 0;\n    width: 40%;\n    height: 100%;\n    background-color: #FFF\n}\n.links_ul {\n    list-style: none;\n    margin-top: 80px;\n    display: inline-block;\n    padding-left: 0px;\n}\n\n\nmd-icon {\n    color: #333 !important;\n    font-size: 30px\n}\n\na {\n    text-decoration: none !important;\n    outline: none !important\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/globals/layouts/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\" style=\"min-height:65px;\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#sideNav\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n      <a class=\"navbar-brand\" routerLink=\"/tasks\" style='margin-top: 10px'>OCTA</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"sideNav\">\n      <ul class=\"nav navbar-nav navbar-right col-md-6 col-xs-12 text-center\" matchHeightMax='match'>\n        <li class='col-md-7 col-xs-12 match'>\n          <ul class='col-xs-12' style='height: 100%; list-style: none; margin-top: 5px'>\n            <li class='col-xs-4 text-center'>\n              <a md-button class='text-center' routerLinkActive='active' routerLink=\"/tasks\">TASKS</a>\n            </li>\n            <li class='col-xs-4 text-center'>\n              <a md-button class='text-center' routerLinkActive='active' routerLink=\"/pages\" *ngIf=\"admin\">PAGES</a>\n            </li>\n            <li class='col-xs-4 text-center'>\n              <a md-button class='text-center' routerLinkActive='active' routerLink=\"/all-members\" *ngIf=\"admin\">MEMBERS</a>\n            </li>\n            <div class=\"clearfix\"></div>\n          </ul>\n        </li>\n        <li class='col-md-5 col-xs-12 match'>\n          <ul class='col-xs-12' style='height: 100%; list-style: none'>\n            <li class='col-xs-4 text-center'>\n              <button routerLink=\"/my-profile\" md-icon-button mdTooltip='Profile' color=\"accent\">\n                <md-icon>notifications</md-icon>\n              </button>\n            </li>\n            <li class='col-xs-4 text-center'>\n              <button md-icon-button mdTooltip='Notifications' color=\"accent\">\n                <md-icon>account_circle</md-icon>\n              </button>\n            </li>\n            <li class='col-xs-4 text-center'>\n              <button md-icon-button mdTooltip='Logout' color=\"accent\" (click)=\"_auth.logout()\">\n                <md-icon>exit_to_app</md-icon>\n              </button>\n            </li>\n            <div class=\"clearfix\"></div>\n          </ul>\n        </li>\n        <div class=\"clearfix\"></div>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/modules/globals/layouts/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authorization_service__ = __webpack_require__("../../../../../src/app/modules/globals/services/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cookies_service__ = __webpack_require__("../../../../../src/app/modules/globals/services/cookies.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(_auth, cookies) {
        this._auth = _auth;
        this.cookies = cookies;
        this.admin = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = "http://127.0.0.1:8080/user_api/check_user";
        this._auth.sendTokenizedRequest(null, url, 'Get')
            .then(function (response) {
            var re = JSON.parse(response._body);
            re.response == "admin" ? _this.admin = true : _this.admin = false;
        })
            .catch(function (reject) {
            console.log(reject);
        });
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/modules/globals/layouts/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/globals/layouts/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authorization_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authorization_service__["a" /* AuthorizationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_cookies_service__["a" /* CookiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_cookies_service__["a" /* CookiesService */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ })

});
//# sourceMappingURL=auth.module.chunk.js.map