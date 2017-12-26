webpackJsonp(["user.module"],{

/***/ "../../../../../src/app/modules/user/pages/profile/my-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/user/pages/profile/my-profile.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/modules/user/pages/profile/my-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyProfileComponent = (function () {
    function MyProfileComponent(fb) {
        this.fb = fb;
    }
    MyProfileComponent.prototype.ngOnInit = function () {
    };
    return MyProfileComponent;
}());
MyProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-my-profile',
        template: __webpack_require__("../../../../../src/app/modules/user/pages/profile/my-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/user/pages/profile/my-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object])
], MyProfileComponent);

var _a;
//# sourceMappingURL=my-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/user/pages/tasks-page/tasks-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n\tfont-family: 'Mark-Gurgius-Wants-This';\n\tcolor: #999;\n\tfont-size: 40px\n}\n\n.card {\n\tposition: relative;\n\tborder: 1px solid #414141;\n\tpadding: 5px 7px\n}\n\n.card h5 {\n\tdisplay: inline-block;\n\tmargin: 0;\n\tpadding: 0;\n\tcolor: #818181;\n\tfont-size: 26px\n}\n\n.card ul li span,\n.card ul li strong {\n\tfont-family: 'Mark-Gurgius-Wants-This';\n\tcolor: #414141;\n\tfont-size: 17px\n}\n\n.card ul {\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0\n}\n\n.card-state {\n\tposition: absolute;\n\tfont-family: 'Mark-Gurgius-Wants-This';\n\ttop: 8px; right: 8px;\n\tfont-size: 15px;\n\tcursor: pointer\n}\n\n.active {\n\tcolor: #0F0\n}\n\n.inactive {\n\tcolor: #F00\n}\n\nbutton {\n\tfont-family: 'Mark-Gurgius-Wants-This';\n\tfont-size: 17px;\n}\n\nmd-spinner {\n\ttext-align: center;\n\twidth: 100%;\n\tmargin-top: 50px\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/user/pages/tasks-page/tasks-page.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"tasks-page\">\n\t<!-- <app-navbar></app-navbar> -->\n\t<h2 class='text-center'>Tasks</h2>\n\n\t<section *ngIf='!loading' class=\"container\" matchHeightMax='match'>\n\t\t<form [formGroup]='dateRangeForm' (ngSubmit)='getTasksByDateRange(dateRangeForm)'>\n\t\t\t<md-select class='col-xs-3' formControlName='TIME' placeholder=\"Filter by\">\n\t\t\t\t<md-option value=\"in_progress\">In Progress</md-option>\n\t\t\t\t<md-option value=\"late\">Late</md-option>\n\t\t\t</md-select>\n\t\t\t<section class=\"col-xs-9\">\n\t\t\t\t<md-form-field class=\"col-xs-6\">\n\t\t\t\t\t<input mdInput formControlName='SINCE' [mdDatepicker]=\"SINCE_PICKER\" placeholder=\"Start Date\">\n\t\t\t\t\t<md-datepicker-toggle mdSuffix [for]=\"SINCE_PICKER\"></md-datepicker-toggle>\n\t\t\t\t\t<md-datepicker #SINCE_PICKER></md-datepicker>\n\t\t\t\t</md-form-field>\n\t\t\t\t<md-form-field class=\"col-xs-6\">\n\t\t\t\t\t<input mdInput formControlName='UNTIL' [mdDatepicker]=\"UNTIL_PICKER\" placeholder=\"End Date\">\n\t\t\t\t\t<md-datepicker-toggle mdSuffix [for]=\"UNTIL_PICKER\"></md-datepicker-toggle>\n\t\t\t\t\t<md-datepicker #UNTIL_PICKER></md-datepicker>\n\t\t\t\t</md-form-field>\n\t\t\t</section>\n\t\t\t<div class=\"clearfix\"></div>\n\t\t\t<div class=\"text-center\">\n\t\t\t\t<button md-button type='submit'>Filter</button>\n\t\t\t\t<button md-button type='button' (click)='getTasks()'>Reset Filter</button>\n\t\t\t</div>\n\t\t</form>\n\n\t\t<hr>\n\n\t\t<!-- Active Packages Loop -->\n\t\t<div *ngFor='let task of tasks' class='col-lg-3 col-md-4 col-xs-6'>\n\t\t\t<div class=\"user card match\">\n\t\t\t\t<span class='card-state inactive' (click)='changeTaskState(task)' *ngIf='(task)?.STATE'>Mark Undone</span>\n\t\t\t\t<span class='card-state active' (click)='changeTaskState(task)' *ngIf='!(task)?.STATE'>Mark Done</span>\n\t\t\t\t<h5>{{(task)?.NAME}}</h5><br>\n\t\t\t\t<span style='margin-bottom: 10px'>{{(task)?.message}}</span>\n\t\t\t\t<ul>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<strong>Start Time</strong> <span>{{(task)?.START_TIME | date:'fullDate'}}</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<strong>Deadline</strong> <span>{{(task)?.DEAD_LINE | date:'fullDate'}}</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<strong>Page</strong> <span>{{(task)?.PAGE?.NAME}}</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<strong>Descreption</strong> <span>{{(task)?.DESCRIPTION}}</span>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t<button md-button (click)='openUpdateTaskDialog(task)'>\n\t\t\t\t\t\t<md-icon>mode_edit</md-icon>\n\t\t\t\t\t\t<span>Update</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<div class=\"clearfix\"></div>\n\t</section>\n\n\t<section *ngIf='loading' class='loading text-center'>\n\t\t<md-spinner></md-spinner>\n\t</section>\n\n\t<section *ngIf='failed' class=\"failed text-center\">\n\t\t<h3>\n\t\t\tUsers loading failed, please check your connection and try again.\n\t\t</h3>\n\t\t<button md-button (click)='getUsers()'>Try Again</button>\n\t</section>\n</main>"

/***/ }),

/***/ "../../../../../src/app/modules/user/pages/tasks-page/tasks-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_admin_services_system_admin_service__ = __webpack_require__("../../../../../src/app/modules/admin/services/system-admin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TasksPageComponent = (function () {
    function TasksPageComponent(dialog, system, _fb) {
        this.dialog = dialog;
        this.system = system;
        this._fb = _fb;
        this.loading = true;
        this.failed = false;
        this.dateRangeFormBuilder();
    }
    TasksPageComponent.prototype.getTasks = function () {
        var _this = this;
        this.loading = true;
        this.system.getMyData().subscribe(function (response) {
            _this.loading = false;
            _this.tasks = response.TASKS;
        }, function (err) {
            _this.loading = false;
            _this.failed = true;
            throw new Error(err);
        });
    };
    TasksPageComponent.prototype.getTasksByDateRange = function ($formData) {
        var _this = this;
        if ($formData.valid) {
            var TIME = $formData.value.TIME, SINCE = $formData.value.SINCE, UNTIL = $formData.value.UNTIL;
            this.system.getTasksByDateRange(TIME, SINCE, UNTIL)
                .toPromise()
                .then(function (response) {
                _this.tasks = response;
            })
                .catch(function (reject) {
                console.log(reject);
            });
        }
        else {
            alert('Invalid Period Selected');
        }
    };
    TasksPageComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    TasksPageComponent.prototype.changeTaskState = function ($task) {
        var state = !$task.STATE;
        this.system.changeTaskState($task._id, state)
            .toPromise()
            .then(function (res) { return true; })
            .catch(function (rej) { throw new Error(rej); });
    };
    TasksPageComponent.prototype.dateRangeFormBuilder = function () {
        this.dateRangeForm = this._fb.group({
            TIME: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            SINCE: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            UNTIL: [null]
        });
    };
    return TasksPageComponent;
}());
TasksPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-tasks-page',
        template: __webpack_require__("../../../../../src/app/modules/user/pages/tasks-page/tasks-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/user/pages/tasks-page/tasks-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__modules_admin_services_system_admin_service__["a" /* SystemAdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__modules_admin_services_system_admin_service__["a" /* SystemAdminService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _c || Object])
], TasksPageComponent);

var _a, _b, _c;
//# sourceMappingURL=tasks-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_material_module__ = __webpack_require__("../../../../../src/app/modules/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_admin_services_system_admin_service__ = __webpack_require__("../../../../../src/app/modules/admin/services/system-admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__globals_services_socket_service__ = __webpack_require__("../../../../../src/app/modules/globals/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tasks_page_tasks_page_component__ = __webpack_require__("../../../../../src/app/modules/user/pages/tasks-page/tasks-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_my_profile_component__ = __webpack_require__("../../../../../src/app/modules/user/pages/profile/my-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_router__ = __webpack_require__("../../../../../src/app/modules/user/user.router.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__material_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_9__user_router__["a" /* USERROUTER */])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__pages_tasks_page_tasks_page_component__["a" /* TasksPageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_profile_my_profile_component__["a" /* MyProfileComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__modules_admin_services_system_admin_service__["a" /* SystemAdminService */], __WEBPACK_IMPORTED_MODULE_6__globals_services_socket_service__["a" /* SocketService */]]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/user/user.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USERROUTER; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tasks_page_tasks_page_component__ = __webpack_require__("../../../../../src/app/modules/user/pages/tasks-page/tasks-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_profile_my_profile_component__ = __webpack_require__("../../../../../src/app/modules/user/pages/profile/my-profile.component.ts");


var USERROUTER = [
    { path: 'tasks', component: __WEBPACK_IMPORTED_MODULE_0__pages_tasks_page_tasks_page_component__["a" /* TasksPageComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_1__pages_profile_my_profile_component__["a" /* MyProfileComponent */] }
];
//# sourceMappingURL=user.router.js.map

/***/ })

});
//# sourceMappingURL=user.module.chunk.js.map