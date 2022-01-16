(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+VzF":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "lGQG");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (!this.authService.isLoggedIn) {
            localStorage.removeItem("access_token");
            localStorage.removeItem("user_id");
            this.router.navigate(["auth/login"]);
        }
        else {
            const token = localStorage.getItem("access_token");
            this.authService.verifyToken(token).subscribe((data) => {
                return true;
            }, (error) => {
                localStorage.removeItem("access_token");
                localStorage.removeItem("user_id");
                this.router.navigate(["auth/login"]);
            });
            return true;
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], AuthGuard);



/***/ }),

/***/ "/e9F":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-formulas/table-formulas.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"\r\n    relative\r\n    flex flex-col\r\n    min-w-0\r\n    break-words\r\n    w-full\r\n    mb-6\r\n    shadow-lg\r\n    rounded\r\n  \"\r\n  [ngClass]=\"color === 'light' ? 'bg-white' : 'bg-red-900 text-white'\"\r\n>\r\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\r\n        <h3\r\n          class=\"font-semibold text-lg\"\r\n          [ngClass]=\"color === 'light' ? 'text-blueGray-700' : 'text-white'\"\r\n        >\r\n          Formules\r\n        </h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"block w-full overflow-x-auto\">\r\n    <!-- Projects table -->\r\n    <table class=\"items-center w-full bg-transparent border-collapse\">\r\n      <thead>\r\n        <tr>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Formule\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Réservations\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Durée\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Prix\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Revenue\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr\r\n          *ngFor=\"let formula of formulas; let i = index\"\r\n          [attr.data-index]=\"i\"\r\n        >\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n              cursor-pointer\r\n            \"\r\n          >\r\n            {{ formula.formula[0].name }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ formula.quantity }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ formula._id.duration }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ formula._id.price }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ formula._id.price * formula.quantity }}\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "/kjZ":
/*!*****************************************************!*\
  !*** ./src/app/views/auth/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "LUN3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");






let LoginComponent = class LoginComponent {
    constructor(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.error = "";
        this.signinForm = this.fb.group({
            email: [""],
            password: [""],
        });
    }
    ngOnInit() { }
    loginUser() {
        this.error = "";
        this.authService.logIn(this.signinForm.value).subscribe((res) => {
            if (res.user.role === "Admin") {
                localStorage.setItem("access_token", res.token);
                localStorage.setItem("user_id", res.user._id);
                this.router.navigate(["admin/clients"]);
            }
            else {
                localStorage.removeItem("access_token");
                localStorage.removeItem("user_id");
                this.error = "Accès résérvé aux administrateurs du site.";
            }
        }, (err) => {
            this.error = err.error.details[0];
            localStorage.removeItem("access_token");
            localStorage.removeItem("user_id");
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-login",
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], LoginComponent);



/***/ }),

/***/ "/ztn":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin/admin.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <app-sidebar></app-sidebar>\r\n  <div class=\"relative md:ml-64 bg-blueGray-100\">\r\n    <app-admin-navbar></app-admin-navbar>\r\n    <app-header-stats></app-header-stats>\r\n    <div class=\"px-4 md:px-10 mx-auto w-full -m-24\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\USER\Desktop\Work\icoiff\icoiff-back-office\src\main.ts */"zUnb");


/***/ }),

/***/ "0slC":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dropdowns/user-dropdown/user-dropdown.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDropdownComponent", function() { return UserDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-dropdown.component.html */ "H3xT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core */ "EjV/");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");





let UserDropdownComponent = class UserDropdownComponent {
    constructor(authService) {
        this.authService = authService;
        this.dropdownPopoverShow = false;
    }
    ngAfterViewInit() {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: "bottom-start",
        });
    }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
        }
    }
    logout() {
        this.authService.doLogout();
    }
};
UserDropdownComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
UserDropdownComponent.propDecorators = {
    btnDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["btnDropdownRef", { static: false },] }],
    popoverDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["popoverDropdownRef", { static: false },] }]
};
UserDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-user-dropdown",
        template: _raw_loader_user_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UserDropdownComponent);



/***/ }),

/***/ "165v":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/maps/maps.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex flex-wrap\">\r\n  <div class=\"w-full px-4\">\r\n    <div\r\n      class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\r\n    >\r\n      <app-map-example></app-map-example>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "1AoF":
/*!***********************************************************************!*\
  !*** ./src/app/components/table-formulas/table-formulas.component.ts ***!
  \***********************************************************************/
/*! exports provided: TableFormulasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFormulasComponent", function() { return TableFormulasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_table_formulas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./table-formulas.component.html */ "/e9F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let TableFormulasComponent = class TableFormulasComponent {
    constructor() {
        this._color = "light";
        this.live = true;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== "light" && color !== "dark" ? "light" : color;
    }
    ngOnInit() { }
};
TableFormulasComponent.ctorParameters = () => [];
TableFormulasComponent.propDecorators = {
    formulas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
TableFormulasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-table-formulas",
        template: _raw_loader_table_formulas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TableFormulasComponent);



/***/ }),

/***/ "1Xo0":
/*!****************************************************!*\
  !*** ./src/app/services/mailer-service.service.ts ***!
  \****************************************************/
/*! exports provided: MailerServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailerServiceService", function() { return MailerServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let MailerServiceService = class MailerServiceService {
    constructor(http) {
        this.http = http;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    sendRegistrationMail(email) {
        return this.http.post(`${this.endpoint}/email/register`, {
            email,
        });
    }
    sendResetPasswordMail(email) {
        return this.http.post(`${this.endpoint}/email/reset`, {
            email,
        });
    }
};
MailerServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MailerServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], MailerServiceService);



/***/ }),

/***/ "2n7v":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/customer-details/customer-details.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <app-sidebar></app-sidebar>\r\n  <div class=\"relative md:ml-64 bg-blueGray-100\">\r\n    <app-admin-navbar></app-admin-navbar>\r\n    <div class=\"relative bg-red-600 md:pt-32 pb-32 pt-12\">\r\n      <div class=\"px-4 md:px-10 mx-auto w-full\">\r\n        <div>\r\n          <!-- Card stats -->\r\n          <div class=\"flex flex-wrap\">\r\n            <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\r\n              <app-card-stats\r\n                title=\"Réservations\"\r\n                [data]=\"bookingsCount\"\r\n                icon=\"fas fa-users\"\r\n                color=\"bg-red-500\"\r\n              ></app-card-stats>\r\n            </div>\r\n            <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\r\n              <app-card-stats\r\n                title=\"Salons visités\"\r\n                [data]=\"visitedSalonsCount\"\r\n                icon=\"fas fa-store\"\r\n                color=\"bg-orange-500\"\r\n              ></app-card-stats>\r\n            </div>\r\n            <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\r\n              <app-card-stats\r\n                title=\"Total dépenses\"\r\n                [data]=\"totalSpending\"\r\n                icon=\"fas fa-euro-sign\"\r\n                color=\"bg-pink-500\"\r\n              ></app-card-stats>\r\n            </div>\r\n            <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\r\n              <app-card-stats\r\n                title=\"Panier moyen\"\r\n                [data]=\"average\"\r\n                icon=\"fas fa-chart-pie\"\r\n                color=\"bg-emerald-500\"\r\n              ></app-card-stats>\r\n            </div>\r\n          </div>\r\n          <div class=\"flex flex-wrap mt-4\">\r\n            <div class=\"w-full lg:w-6/12 xl:w-6/12 px-4\">\r\n              <app-card-stats\r\n                title=\"Coiffeur Préféré\"\r\n                [data]=\"favoriteHairdresser.full_name\"\r\n                icon=\"fas fa-chart-pie\"\r\n                [image]=\"favoriteHairdresser.image\"\r\n                color=\"bg-emerald-500\"\r\n              ></app-card-stats>\r\n            </div>\r\n            <div class=\"w-full lg:w-6/12 xl:w-6/12 px-4\">\r\n              <app-card-stats\r\n                title=\"Salon Préféré\"\r\n                [data]=\"favoriteSalon.name\"\r\n                icon=\"fas fa-chart-pie\"\r\n                [image]=\"favoriteSalon.image\"\r\n                color=\"bg-emerald-500\"\r\n              ></app-card-stats>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"px-4 md:px-10 mx-auto w-full -m-24\">\r\n      <!-- <router-outlet></router-outlet> -->\r\n      <app-table-bookings\r\n        [bookings]=\"bookings\"\r\n        [color]=\"'dark'\"\r\n      ></app-table-bookings>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "3YbZ":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/dropdown/dropdown.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- This example requires Tailwind CSS v2.0+ -->\r\n<div class=\"relative inline-block text-left\">\r\n  <div>\r\n    <button\r\n      type=\"button\"\r\n      class=\"\r\n        inline-flex\r\n        justify-center\r\n        w-full\r\n        rounded-md\r\n        border border-gray-300\r\n        shadow-sm\r\n        px-4\r\n        py-2\r\n        bg-white\r\n        text-sm\r\n        font-medium\r\n        text-gray-700\r\n        hover:bg-gray-50\r\n        focus:outline-none\r\n        focus:ring-2\r\n        focus:ring-offset-2\r\n        focus:ring-offset-gray-100\r\n        focus:ring-indigo-500\r\n      \"\r\n      id=\"menu-button\"\r\n      aria-expanded=\"true\"\r\n      aria-haspopup=\"true\"\r\n    >\r\n      Ajouter un Salon\r\n    </button>\r\n  </div>\r\n\r\n  <div\r\n    class=\"\r\n      origin-top-right\r\n      absolute\r\n      right-0\r\n      mt-2\r\n      w-56\r\n      rounded-md\r\n      shadow-lg\r\n      bg-white\r\n      ring-1 ring-black ring-opacity-5\r\n      divide-y divide-gray-100\r\n      focus:outline-none\r\n    \"\r\n    role=\"menu\"\r\n    aria-orientation=\"vertical\"\r\n    aria-labelledby=\"menu-button\"\r\n    tabindex=\"-1\"\r\n  >\r\n    <div class=\"py-1\" role=\"none\">\r\n      <!-- Active: \"bg-gray-100 text-gray-900\", Not Active: \"text-gray-700\" -->\r\n      <a\r\n        href=\"#\"\r\n        class=\"text-gray-700 block px-4 py-2 text-sm\"\r\n        role=\"menuitem\"\r\n        tabindex=\"-1\"\r\n        id=\"menu-item-0\"\r\n        >Modifier</a\r\n      >\r\n      <a\r\n        href=\"#\"\r\n        class=\"text-gray-700 block px-4 py-2 text-sm\"\r\n        role=\"menuitem\"\r\n        tabindex=\"-1\"\r\n        id=\"menu-item-1\"\r\n        >Dupliquer</a\r\n      >\r\n    </div>\r\n    <div class=\"py-1\" role=\"none\">\r\n      <a\r\n        href=\"#\"\r\n        class=\"text-gray-700 block px-4 py-2 text-sm\"\r\n        role=\"menuitem\"\r\n        tabindex=\"-1\"\r\n        id=\"menu-item-2\"\r\n        >Archive</a\r\n      >\r\n      <a\r\n        href=\"#\"\r\n        class=\"text-gray-700 block px-4 py-2 text-sm\"\r\n        role=\"menuitem\"\r\n        tabindex=\"-1\"\r\n        id=\"menu-item-3\"\r\n        >Déplacer</a\r\n      >\r\n    </div>\r\n    <div class=\"py-1\" role=\"none\">\r\n      <a\r\n        href=\"#\"\r\n        class=\"text-gray-700 block px-4 py-2 text-sm\"\r\n        role=\"menuitem\"\r\n        tabindex=\"-1\"\r\n        id=\"menu-item-4\"\r\n        >Partager</a\r\n      >\r\n      <a\r\n        href=\"#\"\r\n        class=\"text-gray-700 block px-4 py-2 text-sm\"\r\n        role=\"menuitem\"\r\n        tabindex=\"-1\"\r\n        id=\"menu-item-5\"\r\n        >Ajouter aux favoris</a\r\n      >\r\n    </div>\r\n    <div class=\"py-1\" role=\"none\">\r\n      <a\r\n        href=\"#\"\r\n        class=\"text-gray-700 block px-4 py-2 text-sm\"\r\n        role=\"menuitem\"\r\n        tabindex=\"-1\"\r\n        id=\"menu-item-6\"\r\n        >Supprimer</a\r\n      >\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "4EXa":
/*!*************************************************************************!*\
  !*** ./src/app/components/add-salon-modal/add-salon-modal.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddSalonModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSalonModalComponent", function() { return AddSalonModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_salon_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-salon-modal.component.html */ "Ja89");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_mailer_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/mailer-service.service */ "1Xo0");




let AddSalonModalComponent = class AddSalonModalComponent {
    constructor(mailerService) {
        this.mailerService = mailerService;
        this.email = "";
        this.showModal = false;
    }
    toggleModal() {
        this.showModal = !this.showModal;
    }
    sendRegistrationMail() {
        this.mailerService.sendRegistrationMail(this.email).subscribe((res) => {
            this.email = '';
            this.toggleModal();
        });
    }
};
AddSalonModalComponent.ctorParameters = () => [
    { type: src_app_services_mailer_service_service__WEBPACK_IMPORTED_MODULE_3__["MailerServiceService"] }
];
AddSalonModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-add-salon-modal',
        template: _raw_loader_add_salon_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AddSalonModalComponent);



/***/ }),

/***/ "7MB8":
/*!************************************************************************!*\
  !*** ./src/app/views/reset/reset-password/reset-password.component.ts ***!
  \************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reset_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reset-password.component.html */ "HO7h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_mailer_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/mailer-service.service */ "1Xo0");






let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(fb, mailerService, router) {
        this.fb = fb;
        this.mailerService = mailerService;
        this.router = router;
        this.message = "";
        this.show = false;
        this.success = false;
        this.passwordForm = this.fb.group({
            email: [""],
        });
    }
    ngOnInit() { }
    sendResetPasswordMail() {
        this.mailerService
            .sendResetPasswordMail(this.passwordForm.value.email)
            .subscribe((res) => {
            if (res.accepted.length) {
                this.success = true;
                this.message =
                    "Prière de consulter votre boite mail. Si le mail ne figure pas dans votre boite principale, prière de consulter les autre boites de réception (Notifications, Spam...)";
                this.show = true;
            }
            else {
                this.success = false;
                this.message = "Une erreur est survenue. Veuillez réessayer";
                this.show = true;
            }
        });
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_mailer_service_service__WEBPACK_IMPORTED_MODULE_5__["MailerServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ResetPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-reset-password",
        template: _raw_loader_reset_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ResetPasswordComponent);



/***/ }),

/***/ "90Li":
/*!************************************************************!*\
  !*** ./src/app/views/admin/settings/settings.component.ts ***!
  \************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.component.html */ "YV8C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let SettingsComponent = class SettingsComponent {
    constructor() { }
    ngOnInit() { }
};
SettingsComponent.ctorParameters = () => [];
SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-settings",
        template: _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], SettingsComponent);



/***/ }),

/***/ "9yi7":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/create-salon/create-salon.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mx-auto\" *ngIf=\"success\">\r\n  <h1 class=\"text-4xl py-16 px-48\">\r\n    {{ success }}\r\n  </h1>\r\n</div>\r\n<div *ngIf=\"!success\">\r\n  <form\r\n    class=\"space-y-8 divide-y divide-teal-600 p-8\"\r\n    [formGroup]=\"profileForm\"\r\n    (ngSubmit)=\"onSubmit()\"\r\n  >\r\n    <div class=\"space-y-8 divide-y divide-teal-600 sm:space-y-5\">\r\n      <div class=\"flex flex-col gap-6 divide-y divide-teal-600\">\r\n        <div>\r\n          <h3 class=\"text-lg leading-6 font-medium text-gray-900\">\r\n            Profile Manager\r\n          </h3>\r\n          <p class=\"mt-1 max-w-xl text-sm text-gray-500\">\r\n            Ces informations apparaitrons sur l'application iCoiff. Faites bien attention aux informations que vous partagez.\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"mt-6 sm:mt-5 space-y-6 sm:space-y-5\">\r\n          <div\r\n            class=\"\r\n              sm:grid\r\n              sm:grid-cols-3\r\n              sm:gap-4\r\n              sm:items-start\r\n              sm:border-t\r\n              sm:border-gray-200\r\n              sm:pt-5\r\n            \"\r\n          >\r\n            <label\r\n              for=\"first_name\"\r\n              class=\"block text-md font-medium text-gray-700 sm:mt-px sm:pt-2\"\r\n            >\r\n              Prénom\r\n            </label>\r\n            <div class=\"mt-1 sm:mt-0 sm:col-span-2\">\r\n              <div class=\"max-w-4xl flex rounded-md shadow-sm\">\r\n                <input\r\n                  required\r\n                  type=\"text\"\r\n                  name=\"first_name\"\r\n                  id=\"first_name\"\r\n                  autocomplete=\"given-name\"\r\n                  class=\"\r\n                    flex-1\r\n                    block\r\n                    w-full\r\n                    focus:ring-indigo-500 focus:border-indigo-500\r\n                    min-w-0\r\n                    rounded-none rounded-r-md\r\n                    sm:text-sm\r\n                    border-gray-300\r\n                  \"\r\n                  formControlName=\"first_name\"\r\n                />\r\n              </div>\r\n            </div>\r\n            <label\r\n              for=\"last_name\"\r\n              class=\"block text-md font-medium text-gray-700 sm:mt-px sm:pt-2\"\r\n            >\r\n              Nom\r\n            </label>\r\n            <div class=\"mt-1 sm:mt-0 sm:col-span-2\">\r\n              <div class=\"max-w-4xl flex rounded-md shadow-sm\">\r\n                <input\r\n                  type=\"text\"\r\n                  name=\"last_name\"\r\n                  id=\"last_name\"\r\n                  autocomplete=\"family-name\"\r\n                  class=\"\r\n                    flex-1\r\n                    block\r\n                    w-full\r\n                    focus:ring-indigo-500 focus:border-indigo-500\r\n                    min-w-0\r\n                    rounded-none rounded-r-md\r\n                    sm:text-sm\r\n                    border-gray-300\r\n                  \"\r\n                  formControlName=\"last_name\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            class=\"\r\n              sm:grid\r\n              sm:grid-cols-3\r\n              sm:gap-4\r\n              sm:items-start\r\n              sm:border-t\r\n              sm:border-gray-200\r\n              sm:pt-5\r\n            \"\r\n          >\r\n            <label\r\n              for=\"email\"\r\n              class=\"block text-lg font-medium text-gray-700 sm:mt-px sm:pt-2\"\r\n            >\r\n              Email\r\n            </label>\r\n            <div class=\"mt-1 sm:mt-0 sm:col-span-2\">\r\n              <div class=\"max-w-4xl flex rounded-md shadow-sm\">\r\n                <input\r\n                  type=\"email\"\r\n                  name=\"email\"\r\n                  id=\"email\"\r\n                  autocomplete=\"email\"\r\n                  class=\"\r\n                    flex-1\r\n                    block\r\n                    w-full\r\n                    focus:ring-indigo-500 focus:border-indigo-500\r\n                    min-w-0\r\n                    rounded-none rounded-r-md\r\n                    sm:text-lg\r\n                    border-gray-300\r\n                  \"\r\n                  formControlName=\"email\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div\r\n            class=\"\r\n              sm:grid\r\n              sm:grid-cols-3\r\n              sm:gap-4\r\n              sm:items-start\r\n              sm:border-t\r\n              sm:border-gray-200\r\n              sm:pt-5\r\n            \"\r\n          >\r\n            <label\r\n              for=\"password\"\r\n              class=\"block text-lg font-medium text-gray-700 sm:mt-px sm:pt-2\"\r\n            >\r\n              Mot de passe\r\n            </label>\r\n            <div class=\"mt-1 sm:mt-0 sm:col-span-2\">\r\n              <div class=\"max-w-4xl flex rounded-md shadow-sm\">\r\n                <input\r\n                  type=\"password\"\r\n                  name=\"password\"\r\n                  id=\"password\"\r\n                  autocomplete=\"password\"\r\n                  class=\"\r\n                    flex-1\r\n                    block\r\n                    w-full\r\n                    focus:ring-indigo-500 focus:border-indigo-500\r\n                    min-w-0\r\n                    rounded-none rounded-r-md\r\n                    sm:text-lg\r\n                    border-gray-300\r\n                  \"\r\n                  formControlName=\"password\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            class=\"\r\n              sm:grid\r\n              sm:grid-cols-3\r\n              sm:gap-4\r\n              sm:items-center\r\n              sm:border-t\r\n              sm:border-gray-200\r\n              sm:pt-5\r\n              mb-6\r\n            \"\r\n          >\r\n            <label for=\"photo\" class=\"block text-lg font-medium text-gray-700\">\r\n              Photo Manager\r\n            </label>\r\n            <div class=\"mt-1 sm:mt-0 sm:col-span-2\">\r\n              <div class=\"flex items-center\">\r\n                <span\r\n                  class=\"h-12 w-12 rounded-full overflow-hidden bg-gray-100\"\r\n                >\r\n                  <img\r\n                    *ngIf=\"profileImagePath\"\r\n                    [src]=\"profileImagePath\"\r\n                    alt=\"\"\r\n                    srcset=\"\"\r\n                  />\r\n                  <svg\r\n                    *ngIf=\"!profileImagePath\"\r\n                    class=\"h-full w-full text-gray-300\"\r\n                    fill=\"currentColor\"\r\n                    viewBox=\"0 0 24 24\"\r\n                  >\r\n                    <path\r\n                      d=\"M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z\"\r\n                    />\r\n                  </svg>\r\n                </span>\r\n                <input\r\n                  style=\"display: none\"\r\n                  type=\"file\"\r\n                  (change)=\"onProfileImageChanged($event)\"\r\n                  #fileInput\r\n                />\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"\r\n                    ml-5\r\n                    bg-white\r\n                    py-2\r\n                    px-3\r\n                    border border-gray-300\r\n                    rounded-md\r\n                    shadow-sm\r\n                    text-sm\r\n                    leading-4\r\n                    font-medium\r\n                    text-gray-700\r\n                    hover:bg-gray-50\r\n                    focus:outline-none\r\n                    focus:ring-2\r\n                    focus:ring-offset-2\r\n                    focus:ring-indigo-500\r\n                  \"\r\n                  (click)=\"fileInput.click()\"\r\n                >\r\n                  Changer\r\n                </button>\r\n                {{ uploaded }}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div\r\n        class=\"pt-8 space-y-8 sm:pt-10 sm:space-y-8 divide-y divide-teal-600\"\r\n      >\r\n        <div>\r\n          <h3 class=\"text-lg leading-6 font-medium text-gray-900\">\r\n            Informations du Salon\r\n          </h3>\r\n          <p class=\"mt-1 max-w-4xl text-sm text-gray-500 mb-6\">\r\n            Prière de fournir les informations relatives à votre salon.\r\n          </p>\r\n        </div>\r\n        <div class=\"flex flex-col gap-6\">\r\n          <div\r\n            class=\"\r\n              pt-6\r\n              sm:grid\r\n              sm:grid-cols-3\r\n              sm:gap-4\r\n              sm:items-start\r\n              sm:border-t\r\n              sm:border-gray-200\r\n              sm:pt-5\r\n            \"\r\n          >\r\n            <label\r\n              for=\"salon-name\"\r\n              class=\"block text-lg font-medium text-gray-700 sm:mt-px sm:pt-2\"\r\n            >\r\n              Nom du Salon\r\n            </label>\r\n            <div class=\"mt-1 sm:mt-0 sm:col-span-2\">\r\n              <input\r\n                type=\"text\"\r\n                name=\"salon-name\"\r\n                id=\"salon-name\"\r\n                class=\"\r\n                  max-w-lg\r\n                  block\r\n                  w-full\r\n                  shadow-sm\r\n                  focus:ring-indigo-500 focus:border-indigo-500\r\n                  sm:max-w-xs sm:text-sm\r\n                  border-gray-300\r\n                  rounded-md\r\n                \"\r\n                formControlName=\"name\"\r\n              />\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            class=\"\r\n              sm:grid\r\n              sm:grid-cols-3\r\n              sm:gap-4\r\n              sm:items-start\r\n              sm:border-t\r\n              sm:border-gray-200\r\n              sm:pt-5\r\n            \"\r\n          >\r\n            <label\r\n              for=\"cover_photo\"\r\n              class=\"block text-lg font-medium text-gray-700 sm:mt-px sm:pt-2\"\r\n            >\r\n              Logo du Salon\r\n            </label>\r\n            <div class=\"mt-1 sm:mt-0 sm:col-span-2\">\r\n              <div\r\n                class=\"\r\n                  max-w-lg\r\n                  flex\r\n                  justify-center\r\n                  px-6\r\n                  pt-5\r\n                  pb-6\r\n                  border-2 border-gray-300 border-dashed\r\n                  rounded-md\r\n                \"\r\n              >\r\n                <div class=\"space-y-1 text-center\">\r\n                  <svg\r\n                    class=\"mx-auto h-12 w-12 text-gray-400\"\r\n                    stroke=\"currentColor\"\r\n                    fill=\"none\"\r\n                    viewBox=\"0 0 48 48\"\r\n                    aria-hidden=\"true\"\r\n                  >\r\n                    <path\r\n                      d=\"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02\"\r\n                      stroke-width=\"2\"\r\n                      stroke-linecap=\"round\"\r\n                      stroke-linejoin=\"round\"\r\n                    />\r\n                  </svg>\r\n                  <div class=\"flex text-lg text-gray-600\">\r\n                    <label\r\n                      for=\"file-upload\"\r\n                      class=\"\r\n                        relative\r\n                        cursor-pointer\r\n                        bg-white\r\n                        rounded-md\r\n                        font-medium\r\n                        text-indigo-600\r\n                        hover:text-indigo-500\r\n                        focus-within:outline-none\r\n                        focus-within:ring-2\r\n                        focus-within:ring-offset-2\r\n                        focus-within:ring-indigo-500\r\n                      \"\r\n                    >\r\n                      <span>Upload a file</span>\r\n                      <input\r\n                        id=\"file-upload\"\r\n                        name=\"file-upload\"\r\n                        type=\"file\"\r\n                        class=\"sr-only\"\r\n                        (change)=\"onSalonImageChanged($event)\"\r\n                      />\r\n                    </label>\r\n                    <p class=\"pl-1\">or drag and drop</p>\r\n                  </div>\r\n                  <p class=\"text-xs text-gray-500\">PNG, JPG, GIF up to 10MB</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"pt-6\">\r\n      <div class=\"flex justify-end\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"\r\n            bg-red-500\r\n            py-2\r\n            px-4\r\n            border border-gray-300\r\n            rounded-md\r\n            shadow-sm\r\n            text-sm\r\n            font-medium\r\n            text-white\r\n            hover:bg-gray-500\r\n            focus:outline-none\r\n            focus:ring-2\r\n            focus:ring-offset-2\r\n            focus:ring-indigo-500\r\n          \"\r\n        >\r\n          Réinitialiser\r\n        </button>\r\n        <button\r\n          type=\"submit\"\r\n          class=\"\r\n            ml-3\r\n            inline-flex\r\n            justify-center\r\n            py-2\r\n            px-4\r\n            border border-transparent\r\n            shadow-sm\r\n            text-sm\r\n            font-medium\r\n            rounded-md\r\n            text-white\r\n            bg-emerald-500\r\n            hover:bg-emerald-800\r\n            focus:outline-none\r\n            focus:ring-2\r\n            focus:ring-offset-2\r\n            focus:ring-indigo-500\r\n          \"\r\n        >\r\n          Enregistrer\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "A8uX":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-clients/table-clients.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"\r\n    relative\r\n    flex flex-col\r\n    min-w-0\r\n    break-words\r\n    w-full\r\n    mb-6\r\n    shadow-lg\r\n    rounded\r\n  \"\r\n  [ngClass]=\"color === 'light' ? 'bg-white' : 'bg-red-900 text-white'\"\r\n>\r\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\r\n        <h3\r\n          class=\"font-semibold text-lg\"\r\n          [ngClass]=\"color === 'light' ? 'text-blueGray-700' : 'text-white'\"\r\n        >\r\n          Clients\r\n        </h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"block w-full overflow-x-auto\">\r\n    <!-- Projects table -->\r\n    <table class=\"items-center w-full bg-transparent border-collapse\">\r\n      <thead>\r\n        <tr>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            ID\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Nom\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Numéro de téléphone\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Date d'inscription\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let client of clients; let i = index\" [attr.data-index]=\"i\">\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ i }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n              cursor-pointer\r\n            \"\r\n            [routerLink]=\"['/admin/clients', client._id]\"\r\n          >\r\n            {{ client.full_name }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ client.phone_number }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ client.createdAt | timeago: live }}\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "AvFx":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-salons/table-salons.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"\r\n    relative\r\n    flex flex-col\r\n    min-w-0\r\n    break-words\r\n    w-full\r\n    mb-6\r\n    shadow-lg\r\n    rounded\r\n  \"\r\n  [ngClass]=\"color === 'light' ? 'bg-white' : 'bg-red-900 text-white'\"\r\n>\r\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"relative w-full px-4 max-w-full flex-grow justify-between\">\r\n        <h3\r\n          class=\"font-semibold text-lg\"\r\n          [ngClass]=\"color === 'light' ? 'text-blueGray-700' : 'text-white'\"\r\n        >\r\n          Salons\r\n        </h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"block w-full overflow-x-auto\">\r\n    <!-- Projects table -->\r\n    <table class=\"items-center w-full bg-transparent border-collapse\">\r\n      <thead>\r\n        <tr>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Image\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Nom\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Managers\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Coiffeurs\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Formules\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Date de création\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-center\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Actions\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let salon of salons; let i = index\" [attr.data-index]=\"i\">\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            <img\r\n              class=\"inline-block h-6 w-6 rounded-md max-w-100-px\"\r\n              [src]=\"salon.image\"\r\n              alt=\"\"\r\n            />\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n              cursor-pointer\r\n            \"\r\n            [routerLink]=\"['/admin/salons', salon._id]\"\r\n          >\r\n            {{ salon.name }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            <ul *ngFor=\"let manager of salon.managers\">\r\n              <li>{{ manager.first_name }} {{ manager.last_name }}</li>\r\n            </ul>\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            <ul *ngFor=\"let hairdresser of salon.hairdressers\">\r\n              <li>{{ hairdresser.first_name }} {{ hairdresser.last_name }}</li>\r\n            </ul>\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n            \"\r\n          >\r\n            <ul class=\"list-disc\" *ngFor=\"let formula of salon.formulas\">\r\n              <li>{{ formula.formula.name }} | {{ formula.price }} DT</li>\r\n            </ul>\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ salon.createdAt | timeago: live }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n              text-center\r\n            \"\r\n          >\r\n            <button\r\n              (click)=\"showEditModal(salon)\"\r\n              class=\"\r\n                bg-blueGray-500\r\n                hover:bg-blueGray-700\r\n                text-white\r\n                py-1\r\n                px-2\r\n                rounded-l\r\n              \"\r\n            >\r\n              <i class=\"far fa-edit px-2 text-sm\"></i>\r\n            </button>\r\n            <button\r\n              *ngIf=\"salon.isActive\"\r\n              (click)=\"toggleActivation(salon)\"\r\n              class=\"bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded-r\"\r\n            >\r\n              <i class=\"far fa-trash-alt px-2 text-sm\"></i>\r\n            </button>\r\n\r\n            <button\r\n              *ngIf=\"!salon.isActive\"\r\n              (click)=\"toggleActivation(salon)\"\r\n              class=\"\r\n                bg-green-500\r\n                hover:bg-green-700\r\n                text-white\r\n                py-1\r\n                px-2\r\n                rounded-r\r\n              \"\r\n            >\r\n              <i class=\"far fa-check-square px-2 text-sm\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n<div class=\"flex justify-end\">\r\n  <app-add-salon-modal></app-add-salon-modal>\r\n  <app-edit-salon-modal\r\n    *ngIf=\"edit\"\r\n    [(edit)]=\"edit\"\r\n    [(salon)]=\"salon\"\r\n    [(salons)]=\"salons\"\r\n  ></app-edit-salon-modal>\r\n</div>\r\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    // production: false,
    // apiUrl: "http://localhost:3030",
    production: true,
    apiUrl: "https://api.icoiff.com",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FC71":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/salon-details/salon-details.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <app-sidebar></app-sidebar>\r\n  <div class=\"relative md:ml-64 bg-blueGray-100\">\r\n    <app-admin-navbar></app-admin-navbar>\r\n    <div class=\"relative bg-red-600 md:pt-32 pb-32 pt-12\">\r\n      <div class=\"px-4 md:px-10 mx-auto w-full\">\r\n        <div>\r\n          <!-- Card stats -->\r\n          <div class=\"flex flex-wrap\">\r\n            <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\r\n              <app-card-stats\r\n                title=\"Clients\"\r\n                [data]=\"customersCount\"\r\n                icon=\"fas fa-user\"\r\n                color=\"bg-red-500\"\r\n              ></app-card-stats>\r\n            </div>\r\n            <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\r\n              <app-card-stats\r\n                title=\"Réservations\"\r\n                [data]=\"bookingsCount\"\r\n                icon=\"fas fa-users\"\r\n                color=\"bg-orange-500\"\r\n              ></app-card-stats>\r\n            </div>\r\n            <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\r\n              <app-card-stats\r\n                title=\"Chiffre d'affaire\"\r\n                [data]=\"totalRevenue\"\r\n                icon=\"fas fa-euro-sign\"\r\n                color=\"bg-pink-500\"\r\n              ></app-card-stats>\r\n            </div>\r\n            <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\r\n              <app-card-stats\r\n                title=\"Panier Moyen\"\r\n                [data]=\"average\"\r\n                icon=\"fas fa-chart-pie\"\r\n                color=\"bg-emerald-500\"\r\n              ></app-card-stats>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"px-4 md:px-10 mx-auto w-full -m-24\">\r\n      <div class=\"flex\">\r\n        <div class=\"w-1/2 p-5\">\r\n          <app-table-hairdressers [hairdressers]=\"hairdresserBreakdown\">\r\n          </app-table-hairdressers>\r\n        </div>\r\n        <div class=\"w-1/2 p-5\">\r\n          <!-- Meilleurs clients? -->\r\n          <app-table-formulas [formulas]=\"formulasBreakdown\">\r\n          </app-table-formulas>\r\n        </div>\r\n      </div>\r\n      <app-table-bookings\r\n        [bookings]=\"bookings\"\r\n        [color]=\"'dark'\"\r\n      ></app-table-bookings>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "GB+I":
/*!*******************************************************************!*\
  !*** ./src/app/components/table-salons/table-salons.component.ts ***!
  \*******************************************************************/
/*! exports provided: TableSalonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSalonsComponent", function() { return TableSalonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_table_salons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./table-salons.component.html */ "AvFx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_manage_salons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/manage-salons.service */ "RV1I");




let TableSalonsComponent = class TableSalonsComponent {
    constructor(manageSalons) {
        this.manageSalons = manageSalons;
        this._color = "light";
        this.live = true;
        this.edit = false;
        this.salon = null;
        this.manageSalons.getSalons().subscribe((res) => {
            this.salons = res;
        });
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== "light" && color !== "dark" ? "light" : color;
    }
    ngOnInit() { }
    toggleActivation(selectedSalon) {
        this.manageSalons
            .toggleActivation(selectedSalon)
            .subscribe((updatedSalon) => {
            this.salons = this.salons.map((salon, index) => salon._id === updatedSalon._id
                ? Object.assign(Object.assign({}, salon), { isActive: updatedSalon.isActive }) : salon);
        });
    }
    showEditModal(salon) {
        this.edit = true;
        this.salon = salon;
    }
};
TableSalonsComponent.ctorParameters = () => [
    { type: src_app_services_manage_salons_service__WEBPACK_IMPORTED_MODULE_3__["ManageSalonsService"] }
];
TableSalonsComponent.propDecorators = {
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
TableSalonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-table-salons",
        template: _raw_loader_table_salons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TableSalonsComponent);



/***/ }),

/***/ "H3xT":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/user-dropdown/user-dropdown.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\r\n  class=\"text-blueGray-500 block\"\r\n  href=\"#pablo\"\r\n  (click)=\"toggleDropdown($event)\"\r\n  #btnDropdownRef\r\n>\r\n  <div class=\"items-center flex\">\r\n    <span\r\n      class=\"\r\n        w-12\r\n        h-12\r\n        text-sm text-white\r\n        bg-blueGray-200\r\n        inline-flex\r\n        items-center\r\n        justify-center\r\n        rounded-full\r\n      \"\r\n    >\r\n      <img\r\n        alt=\"...\"\r\n        class=\"w-full rounded-full align-middle border-none shadow-lg\"\r\n        src=\"assets/img/team-1-800x800.jpg\"\r\n      />\r\n    </span>\r\n  </div>\r\n</a>\r\n<div class=\"min-w-48 z-50\" #popoverDropdownRef>\r\n  <div\r\n    class=\"\r\n      bg-white\r\n      text-base\r\n      z-50\r\n      float-left\r\n      py-2\r\n      list-none\r\n      text-left\r\n      rounded\r\n      shadow-lg\r\n      mt-1\r\n      min-w-48\r\n    \"\r\n    [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\r\n  >\r\n    <a\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 cursor-pointer\"\r\n      (click)= \"logout()\"\r\n    >\r\n      <i\r\n        class=\"fas fa-sign-out-alt mr-2 text-sm\"\r\n      ></i>\r\n      Logout\r\n    </a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "HO7h":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reset/reset-password/reset-password.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mx-auto px-4 h-full\">\r\n  <div class=\"flex content-center items-center justify-center h-full\">\r\n    <div class=\"w-full lg:w-4/12 px-4\">\r\n      <div\r\n        class=\"\r\n          relative\r\n          flex flex-col\r\n          min-w-0\r\n          break-words\r\n          w-full\r\n          mb-6\r\n          shadow-lg\r\n          rounded-lg\r\n          bg-blueGray-200\r\n          border-0\r\n        \"\r\n      >\r\n        <div class=\"rounded-t mb-0 px-6 py-6\">\r\n          <div class=\"text-center mb-3\">\r\n            <h6 class=\"text-blueGray-500 text-sm font-bold\">\r\n              Réinitialisez votre mot de passe\r\n            </h6>\r\n          </div>\r\n          <hr class=\"mt-6 border-b-1 border-blueGray-300\" />\r\n        </div>\r\n        <div class=\"flex-auto px-4 lg:px-10 py-10 pt-0\">\r\n          <form [formGroup]=\"passwordForm\" (ngSubmit)=\"sendResetPasswordMail()\">\r\n            <div class=\"relative w-full mb-3\">\r\n              <label\r\n                class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                htmlFor=\"grid-password\"\r\n              >\r\n                Email\r\n              </label>\r\n              <input\r\n                type=\"email\"\r\n                class=\"\r\n                  border-0\r\n                  px-3\r\n                  py-3\r\n                  placeholder-blueGray-300\r\n                  text-blueGray-600\r\n                  bg-white\r\n                  rounded\r\n                  text-sm\r\n                  shadow\r\n                  focus:outline-none focus:ring\r\n                  w-full\r\n                  ease-linear\r\n                  transition-all\r\n                  duration-150\r\n                \"\r\n                formControlName=\"email\"\r\n                placeholder=\"Votre email\"\r\n                required\r\n              />\r\n            </div>\r\n\r\n            <div class=\"text-center mt-6\">\r\n              <button\r\n                class=\"\r\n                  bg-blueGray-800\r\n                  text-white\r\n                  active:bg-blueGray-600\r\n                  text-sm\r\n                  font-bold\r\n                  uppercase\r\n                  px-6\r\n                  py-3\r\n                  rounded\r\n                  shadow\r\n                  hover:shadow-lg\r\n                  outline-none\r\n                  focus:outline-none\r\n                  mr-1\r\n                  mb-1\r\n                  w-full\r\n                  ease-linear\r\n                  transition-all\r\n                  duration-150\r\n                \"\r\n                type=\"submit\"\r\n              >\r\n                Réinitialiser\r\n              </button>\r\n            </div>\r\n          </form>\r\n          <div class=\"text-center\" *ngIf=\"show\">\r\n            <p *ngIf=\"success\" class=\"m-2 text-green-700\">Email envoyé!</p>\r\n            <p *ngIf=\"success\" class=\"m-2 text-green-700\">{{ message }}</p>\r\n            <p *ngIf=\"!success\" class=\"m-2 text-red-600\">Erreur</p>\r\n            <p *ngIf=\"!success\" class=\"m-2 text-red-600\">{{ message }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "Ja89":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-salon-modal/add-salon-modal.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\r\n  class=\"\r\n    bg-emerald-500\r\n    text-white\r\n    active:bg-emerald-600\r\n    font-bold\r\n    uppercase\r\n    text-sm\r\n    px-6\r\n    py-3\r\n    rounded\r\n    shadow\r\n    hover:shadow-lg\r\n    outline-none\r\n    focus:outline-none\r\n    mr-1\r\n    mb-1\r\n    ease-linear\r\n    transition-all\r\n    duration-150\r\n  \"\r\n  type=\"button\"\r\n  (click)=\"toggleModal()\"\r\n>\r\n  <i class=\"fas fa-plus\"></i> Ajouter un Salon\r\n</button>\r\n<div\r\n  *ngIf=\"showModal\"\r\n  class=\"\r\n    border-1 border-blueGray-500 border-solid\r\n    overflow-x-hidden overflow-y-auto\r\n    fixed\r\n    inset-0\r\n    z-50\r\n    px-16\r\n    justify-center\r\n    items-center\r\n    flex\r\n  \"\r\n>\r\n  <div class=\"relative w-auto mx-auto max-w-xl bg-red-100\">\r\n    <!--content-->\r\n    <div\r\n      class=\"\r\n        border-2 border-blueGray-500 border-solid\r\n        rounded-lg\r\n        shadow-lg\r\n        relative\r\n        flex flex-col\r\n        w-full\r\n        bg-white\r\n        outline-none\r\n        focus:outline-none\r\n      \"\r\n    >\r\n      <!--header-->\r\n      <div\r\n        class=\"\r\n          flex\r\n          items-center\r\n          justify-between\r\n          p-5\r\n          border-b border-solid border-blueGray-200\r\n          rounded-t\r\n        \"\r\n      >\r\n        <h3 class=\"text-sm font-semibold\">Ajouter un manager au salon</h3>\r\n        <button\r\n          class=\"\r\n            p-1\r\n            ml-auto\r\n            bg-transparent\r\n            border-0\r\n            text-black\r\n            opacity-5\r\n            float-right\r\n            text-3xl\r\n            leading-none\r\n            font-semibold\r\n            outline-none\r\n            focus:outline-none\r\n          \"\r\n          (click)=\"toggleModal()\"\r\n        >\r\n          <span\r\n            class=\"\r\n              bg-transparent\r\n              text-black\r\n              opacity-5\r\n              h-6\r\n              w-6\r\n              text-2xl\r\n              block\r\n              outline-none\r\n              focus:outline-none\r\n            \"\r\n          >\r\n            ×\r\n          </span>\r\n        </button>\r\n      </div>\r\n      <!--body-->\r\n      <div class=\"relative px-6 py-6 sm:px-16 flex-auto\">\r\n        <div>\r\n          <label for=\"email\" class=\"block text-sm font-medium text-gray-700\"\r\n            >Email</label\r\n          >\r\n          <div class=\"mt-1\">\r\n            <input\r\n              type=\"text\"\r\n              name=\"email\"\r\n              id=\"email\"\r\n              class=\"\r\n                shadow-sm\r\n                focus:ring-indigo-500 focus:border-indigo-500\r\n                block\r\n                w-full\r\n                sm:text-sm\r\n                border-gray-300\r\n                rounded-md\r\n              \"\r\n              [(ngModel)]=\"email\"\r\n              placeholder=\"you@example.com\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--footer-->\r\n      <div\r\n        class=\"\r\n          flex\r\n          items-center\r\n          justify-end\r\n          p-6\r\n          border-t border-solid border-blueGray-200\r\n          rounded-b\r\n        \"\r\n      >\r\n        <button\r\n          class=\"\r\n            bg-red-500\r\n            text-white\r\n            active:bg-red-600\r\n            font-bold\r\n            uppercase\r\n            text-sm\r\n            px-6\r\n            py-2\r\n            rounded\r\n            shadow\r\n            hover:shadow-lg\r\n            outline-none\r\n            focus:outline-none\r\n            mr-1\r\n            mb-1\r\n            ease-linear\r\n            transition-all\r\n            duration-150\r\n          \"\r\n          type=\"button\"\r\n          (click)=\"toggleModal()\"\r\n        >\r\n          Fermer\r\n        </button>\r\n        <button\r\n          class=\"\r\n            bg-emerald-500\r\n            text-white\r\n            active:bg-emerald-600\r\n            font-bold\r\n            uppercase\r\n            text-sm\r\n            px-6\r\n            py-2\r\n            rounded\r\n            shadow\r\n            hover:shadow-lg\r\n            outline-none\r\n            focus:outline-none\r\n            mr-1\r\n            mb-1\r\n            ease-linear\r\n            transition-all\r\n            duration-150\r\n          \"\r\n          type=\"button\"\r\n          (click)=\"sendRegistrationMail()\"\r\n        >\r\n          Enregistrer\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div\r\n  *ngIf=\"showModal\"\r\n  class=\"\r\n    border-1 border-blueGray-500 border-solid\r\n    opacity-25\r\n    fixed\r\n    inset-0\r\n    z-40\r\n    bg-black\r\n  \"\r\n></div>\r\n`\r\n");

/***/ }),

/***/ "JkxU":
/*!*********************************************************************!*\
  !*** ./src/app/components/table-clients/table-clients.component.ts ***!
  \*********************************************************************/
/*! exports provided: TableClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableClientsComponent", function() { return TableClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_table_clients_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./table-clients.component.html */ "A8uX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_manage_clients_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/manage-clients.service */ "s5KC");




let TableClientsComponent = class TableClientsComponent {
    constructor(manageClientsService) {
        this.manageClientsService = manageClientsService;
        this._color = "light";
        this.live = true;
        this.manageClientsService.getClients().subscribe((res) => this.clients = res);
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== "light" && color !== "dark" ? "light" : color;
    }
    ngOnInit() { }
};
TableClientsComponent.ctorParameters = () => [
    { type: src_app_services_manage_clients_service__WEBPACK_IMPORTED_MODULE_3__["ManageClientsService"] }
];
TableClientsComponent.propDecorators = {
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
TableClientsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-table-clients',
        template: _raw_loader_table_clients_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], TableClientsComponent);



/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\r\n  class=\"md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6\"\r\n>\r\n  <div\r\n    class=\"md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto\"\r\n  >\r\n    <!-- Toggler -->\r\n    <button\r\n      class=\"cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent\"\r\n      type=\"button\"\r\n      (click)=\"toggleCollapseShow('bg-white m-2 py-3 px-6')\"\r\n    >\r\n      <i class=\"fas fa-bars\"></i>\r\n    </button>\r\n    <!-- Brand -->\r\n    <a\r\n      [routerLink]=\"['/admin/clients']\"\r\n      class=\"md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0\"\r\n    >\r\n      <span class=\"block sm:hidden\"> ICoiff </span>\r\n      <span class=\"hidden sm:block\"> ICoiff </span>\r\n    </a>\r\n    <!-- User -->\r\n    <ul class=\"md:hidden items-center flex flex-wrap list-none\">\r\n      <li class=\"inline-block relative\">\r\n        <app-user-dropdown class=\"block\"></app-user-dropdown>\r\n      </li>\r\n    </ul>\r\n    <!-- Collapse -->\r\n    <div\r\n      class=\"md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded\"\r\n      [ngClass]=\"collapseShow\"\r\n    >\r\n      <!-- Collapse header -->\r\n      <div\r\n        class=\"md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200\"\r\n      >\r\n        <div class=\"flex flex-wrap\">\r\n          <div class=\"w-6/12\">\r\n            <a\r\n              [routerLink]=\"['/admin/clients']\"\r\n              class=\"md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0\"\r\n            >\r\n              ICoiff\r\n            </a>\r\n          </div>\r\n          <div class=\"w-6/12 flex justify-end\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent\"\r\n              (click)=\"toggleCollapseShow('hidden')\"\r\n            >\r\n              <i class=\"fas fa-times\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Form -->\r\n      <form class=\"mt-6 mb-4 md:hidden\">\r\n        <div class=\"mb-3 pt-0\">\r\n          <input\r\n            type=\"text\"\r\n            placeholder=\"Search\"\r\n            class=\"border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal\"\r\n          />\r\n        </div>\r\n      </form>\r\n\r\n      <!-- Divider -->\r\n      <hr class=\"my-4 md:min-w-full\" />\r\n      <!-- Heading -->\r\n      <h6\r\n        class=\"md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline\"\r\n      >\r\n        Back Office\r\n      </h6>\r\n      <!-- Navigation -->\r\n      <div class=\"flex flex-col justify-between flex-auto\">\r\n        <ul class=\"md:flex-col md:min-w-full flex flex-col list-none\">\r\n          <li class=\"items-center\">\r\n            <a\r\n              [routerLink]=\"['/admin/clients']\"\r\n              class=\"text-xs uppercase py-3 font-bold block\"\r\n              routerLinkActive\r\n              #adminDashboard=\"routerLinkActive\"\r\n              [ngClass]=\"\r\n                adminDashboard.isActive\r\n                  ? 'text-red-600 hover:text-red-700'\r\n                  : 'text-blueGray-700 hover:text-blueGray-500'\r\n              \"\r\n            >\r\n              <i\r\n                class=\"fas fa-user-circle mr-2 text-sm\"\r\n                [ngClass]=\"\r\n                  adminDashboard.isActive ? 'opacity-75' : 'text-blueGray-300'\r\n                \"\r\n              ></i>\r\n              Gestion des clients\r\n            </a>\r\n          </li>\r\n\r\n          <li class=\"items-center\">\r\n            <a\r\n              [routerLink]=\"['/admin/salons']\"\r\n              class=\"text-xs uppercase py-3 font-bold block\"\r\n              routerLinkActive\r\n              #adminSettings=\"routerLinkActive\"\r\n              [ngClass]=\"\r\n                adminSettings.isActive\r\n                  ? 'text-red-600 hover:text-red-700'\r\n                  : 'text-blueGray-700 hover:text-blueGray-500'\r\n              \"\r\n            >\r\n              <i\r\n                class=\"fas fa-bed mr-2 text-sm\"\r\n                [ngClass]=\"\r\n                  adminSettings.isActive ? 'opacity-75' : 'text-blueGray-300'\r\n                \"\r\n              ></i>\r\n              Gestion des salons\r\n            </a>\r\n          </li>\r\n        </ul>\r\n\r\n        <ul class=\"md:flex-col md:min-w-full flex flex-col list-none\">\r\n          <li class=\"items-center py-2\">\r\n            <a\r\n              download\r\n              href=\"https://api.icoiff.com/excel\"\r\n              class=\"w-full bg-emerald-500 text-white active:bg-emerald-600 text-center py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none\"\r\n              type=\"button\"\r\n            >\r\n              <i class=\"fas fa-file-excel mr-2\"></i> Résumé\r\n            </a>\r\n          </li>\r\n          <li class=\"items-center py-2\">\r\n            <a\r\n              download\r\n              href=\"https://api.icoiff.com/excel/salons\"\r\n              class=\"w-full bg-emerald-500 text-white active:bg-emerald-600 text-center py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none\"\r\n              type=\"button\"\r\n            >\r\n              <i class=\"fas fa-file-excel mr-2\"></i> Salons\r\n            </a>\r\n          </li>\r\n          <li class=\"items-center py-2\">\r\n            <a\r\n              download\r\n              href=\"https://api.icoiff.com/excel/customers\"\r\n              class=\"w-full bg-emerald-500 text-white active:bg-emerald-600 text-center py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none\"\r\n              type=\"button\"\r\n            >\r\n              <i class=\"fas fa-file-excel mr-2\"></i> Clients\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "KxJz":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/dashboard/dashboard.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-table-clients></app-table-clients>\r\n");

/***/ }),

/***/ "LDS7":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error404/error404.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\">\r\n\t<svg width=\"380px\" height=\"500px\" viewBox=\"0 0 837 1045\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\r\n\t\t<g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\r\n\t\t\t\t<path d=\"M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z\" id=\"Polygon-1\" stroke=\"#007FB2\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n\t\t\t\t<path d=\"M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z\" id=\"Polygon-2\" stroke=\"#EF4A5B\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n\t\t\t\t<path d=\"M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z\" id=\"Polygon-3\" stroke=\"#795D9C\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n\t\t\t\t<path d=\"M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z\" id=\"Polygon-4\" stroke=\"#F2773F\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n\t\t\t\t<path d=\"M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z\" id=\"Polygon-5\" stroke=\"#36B455\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n\t\t</g>\r\n\t</svg>\r\n\t<div class=\"message-box\">\r\n\t<h1>404</h1>\r\n\t<p>Page not found</p>\r\n\t<div class=\"buttons-con\">\r\n\t\t<div class=\"action-link-wrap\">\r\n\t\t\t<a onclick=\"history.back(-1)\" class=\"link-button link-back-button\">Go Back</a>\r\n\t\t\t<a href=\"\" class=\"link-button\">Go to Home Page</a>\r\n\t\t</div>\r\n\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "LK0y":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-salon-modal/edit-salon-modal.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  *ngIf=\"edit\"\r\n  class=\"\r\n    border-1 border-blueGray-500 border-solid\r\n    overflow-x-hidden overflow-y-auto\r\n    fixed\r\n    inset-0\r\n    z-50\r\n    px-16\r\n    justify-center\r\n    items-center\r\n    flex\r\n  \"\r\n>\r\n  <div class=\"relative w-auto mx-auto max-w-xl bg-red-100\">\r\n    <!--content-->\r\n    <div\r\n      class=\"\r\n        border-2 border-blueGray-500 border-solid\r\n        rounded-lg\r\n        shadow-lg\r\n        relative\r\n        flex flex-col\r\n        w-full\r\n        bg-white\r\n        outline-none\r\n        focus:outline-none\r\n      \"\r\n    >\r\n      <!--header-->\r\n      <div\r\n        class=\"\r\n          flex\r\n          items-center\r\n          justify-between\r\n          p-5\r\n          border-b border-solid border-blueGray-200\r\n          rounded-t\r\n        \"\r\n      >\r\n        <h3 class=\"text-sm font-semibold\">\r\n          Modifier le salon {{ salon.name }}\r\n        </h3>\r\n        <button\r\n          class=\"\r\n            p-1\r\n            ml-auto\r\n            bg-transparent\r\n            border-0\r\n            text-black\r\n            opacity-5\r\n            float-right\r\n            text-3xl\r\n            leading-none\r\n            font-semibold\r\n            outline-none\r\n            focus:outline-none\r\n          \"\r\n          (click)=\"toggleModal()\"\r\n        >\r\n          <span\r\n            class=\"\r\n              bg-transparent\r\n              text-black\r\n              opacity-5\r\n              h-6\r\n              w-6\r\n              text-2xl\r\n              block\r\n              outline-none\r\n              focus:outline-none\r\n            \"\r\n          >\r\n            ×\r\n          </span>\r\n        </button>\r\n      </div>\r\n      <!--body-->\r\n      <div class=\"relative px-6 py-6 sm:px-16 flex-auto\">\r\n        <div>\r\n          <label for=\"name\" class=\"block text-sm font-medium text-gray-700\"\r\n            >Nom du Salon</label\r\n          >\r\n          <div class=\"mt-1\">\r\n            <input\r\n              type=\"text\"\r\n              name=\"name\"\r\n              id=\"name\"\r\n              class=\"\r\n                shadow-sm\r\n                focus:ring-indigo-500 focus:border-indigo-500\r\n                block\r\n                w-full\r\n                sm:text-sm\r\n                border-gray-300\r\n                rounded-md\r\n              \"\r\n              [(ngModel)]=\"name\"\r\n              placeholder=\"you@example.com\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"relative px-6 py-6 sm:px-16 flex-auto\">\r\n        <div>\r\n          <label for=\"image\" class=\"block text-sm font-medium text-gray-700\"\r\n            >Image du Salon</label\r\n          >\r\n          <div class=\"mt-1 sm:mt-0 sm:col-span-2\">\r\n            <div class=\"flex items-center flex-col\">\r\n              <span class=\"h-20 w-20 rounded-full overflow-hidden bg-gray-100\">\r\n                <img [src]=\"image\" alt=\"\" srcset=\"\" />\r\n              </span>\r\n              <input\r\n                style=\"display: none\"\r\n                type=\"file\"\r\n                (change)=\"onImageChanged($event)\"\r\n                #fileInput\r\n              />\r\n              <button\r\n                type=\"button\"\r\n                class=\"\r\n                  bg-white\r\n                  py-2\r\n                  px-3\r\n                  border border-gray-300\r\n                  rounded-md\r\n                  shadow-sm\r\n                  text-sm\r\n                  leading-4\r\n                  font-medium\r\n                  text-gray-700\r\n                  hover:bg-gray-50\r\n                  focus:outline-none\r\n                  focus:ring-2\r\n                  focus:ring-offset-2\r\n                  focus:ring-indigo-500\r\n                \"\r\n                (click)=\"fileInput.click()\"\r\n              >\r\n                Changer\r\n              </button>\r\n              {{ uploaded }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--footer-->\r\n      <div\r\n        class=\"\r\n          flex\r\n          items-center\r\n          justify-end\r\n          p-6\r\n          border-t border-solid border-blueGray-200\r\n          rounded-b\r\n        \"\r\n      >\r\n        <button\r\n          class=\"\r\n            bg-red-500\r\n            text-white\r\n            active:bg-red-600\r\n            font-bold\r\n            uppercase\r\n            text-sm\r\n            px-6\r\n            py-2\r\n            rounded\r\n            shadow\r\n            hover:shadow-lg\r\n            outline-none\r\n            focus:outline-none\r\n            mr-1\r\n            mb-1\r\n            ease-linear\r\n            transition-all\r\n            duration-150\r\n          \"\r\n          type=\"button\"\r\n          (click)=\"toggleModal()\"\r\n        >\r\n          Fermer\r\n        </button>\r\n        <button\r\n          class=\"\r\n            bg-emerald-500\r\n            text-white\r\n            active:bg-emerald-600\r\n            font-bold\r\n            uppercase\r\n            text-sm\r\n            px-6\r\n            py-2\r\n            rounded\r\n            shadow\r\n            hover:shadow-lg\r\n            outline-none\r\n            focus:outline-none\r\n            mr-1\r\n            mb-1\r\n            ease-linear\r\n            transition-all\r\n            duration-150\r\n            disabled:bg-gray-500\r\n          \"\r\n          [disabled]=\"loading\"\r\n          type=\"button\"\r\n          (click)=\"sendRegistrationMail()\"\r\n        >\r\n          Enregistrer\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div\r\n  *ngIf=\"edit\"\r\n  class=\"\r\n    border-1 border-blueGray-500 border-solid\r\n    opacity-25\r\n    fixed\r\n    inset-0\r\n    z-40\r\n    bg-black\r\n  \"\r\n></div>\r\n`\r\n");

/***/ }),

/***/ "LUN3":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mx-auto px-4 h-full\">\r\n  <div class=\"flex content-center items-center justify-center h-full\">\r\n    <div class=\"w-full lg:w-4/12 px-4\">\r\n      <div\r\n        class=\"\r\n          relative\r\n          flex flex-col\r\n          min-w-0\r\n          break-words\r\n          w-full\r\n          mb-6\r\n          shadow-lg\r\n          rounded-lg\r\n          bg-blueGray-200\r\n          border-0\r\n        \"\r\n      >\r\n        <div class=\"rounded-t mb-0 px-6 py-6\">\r\n          <div class=\"text-center mb-3\">\r\n            <h6 class=\"text-blueGray-500 text-sm font-bold\">Se connecter</h6>\r\n          </div>\r\n          <hr class=\"mt-6 border-b-1 border-blueGray-300\" />\r\n        </div>\r\n        <span *ngIf=\"error\" class=\"mb-5 text-center text-red-600 text-xs\">{{\r\n          error\r\n        }}</span>\r\n        <div class=\"flex-auto px-4 lg:px-10 py-10 pt-0\">\r\n          <form [formGroup]=\"signinForm\" (ngSubmit)=\"loginUser()\">\r\n            <div class=\"relative w-full mb-3\">\r\n              <label\r\n                class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                htmlFor=\"grid-password\"\r\n              >\r\n                Email\r\n              </label>\r\n              <input\r\n                type=\"email\"\r\n                class=\"\r\n                  border-0\r\n                  px-3\r\n                  py-3\r\n                  placeholder-blueGray-300\r\n                  text-blueGray-600\r\n                  bg-white\r\n                  rounded\r\n                  text-sm\r\n                  shadow\r\n                  focus:outline-none focus:ring\r\n                  w-full\r\n                  ease-linear\r\n                  transition-all\r\n                  duration-150\r\n                \"\r\n                formControlName=\"email\"\r\n                placeholder=\"Votre email\"\r\n                required\r\n              />\r\n            </div>\r\n\r\n            <div class=\"relative w-full mb-3\">\r\n              <label\r\n                class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                htmlFor=\"grid-password\"\r\n              >\r\n                Mot de passe\r\n              </label>\r\n              <input\r\n                type=\"password\"\r\n                class=\"\r\n                  border-0\r\n                  px-3\r\n                  py-3\r\n                  placeholder-blueGray-300\r\n                  text-blueGray-600\r\n                  bg-white\r\n                  rounded\r\n                  text-sm\r\n                  shadow\r\n                  focus:outline-none focus:ring\r\n                  w-full\r\n                  ease-linear\r\n                  transition-all\r\n                  duration-150\r\n                \"\r\n                formControlName=\"password\"\r\n                placeholder=\"Votre mot de passe\"\r\n                required\r\n              />\r\n            </div>\r\n            <div>\r\n              <label class=\"inline-flex items-center cursor-pointer\">\r\n                <input\r\n                  id=\"customCheckLogin\"\r\n                  type=\"checkbox\"\r\n                  class=\"\r\n                    form-checkbox\r\n                    border-0\r\n                    text-blueGray-700\r\n                    ml-1\r\n                    w-5\r\n                    h-5\r\n                    ease-linear\r\n                    transition-all\r\n                    duration-150\r\n                    rounded\r\n                  \"\r\n                />\r\n                <span class=\"ml-2 text-sm font-semibold text-blueGray-600\">\r\n                  Se souvenir de moi\r\n                </span>\r\n              </label>\r\n            </div>\r\n\r\n            <div class=\"text-center mt-6\">\r\n              <button\r\n                class=\"\r\n                  bg-blueGray-800\r\n                  text-white\r\n                  active:bg-blueGray-600\r\n                  text-sm\r\n                  font-bold\r\n                  uppercase\r\n                  px-6\r\n                  py-3\r\n                  rounded\r\n                  shadow\r\n                  hover:shadow-lg\r\n                  outline-none\r\n                  focus:outline-none\r\n                  mr-1\r\n                  mb-1\r\n                  w-full\r\n                  ease-linear\r\n                  transition-all\r\n                  duration-150\r\n                \"\r\n                type=\"submit\"\r\n              >\r\n                Se connecter\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"flex flex-wrap mt-6 relative\">\r\n        <div class=\"w-1/2\">\r\n          <a [routerLink]=\"['/auth/reset-password']\" class=\"text-blueGray-200\">\r\n            <small>Mot de passe oublié?</small>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "Pibi":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/admin-navbar/admin-navbar.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Navbar -->\r\n<nav\r\n  class=\"absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4\"\r\n>\r\n  <div\r\n    class=\"w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4\"\r\n  >\r\n    <!-- Brand -->\r\n    <a\r\n      class=\"text-white text-sm uppercase hidden lg:inline-block font-semibold\"\r\n      href=\"/admin/clients\"\r\n      >Dashboard</a\r\n    >\r\n    <!-- User -->\r\n    <ul class=\"flex-col md:flex-row list-none items-center hidden md:flex\">\r\n      <app-user-dropdown class=\"block\"></app-user-dropdown>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "PxUm":
/*!*******************************************************!*\
  !*** ./src/app/views/error404/error404.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  background-color: #2F3242;\n}\n\nsvg {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -250px;\n  margin-left: -400px;\n}\n\n.message-box {\n  height: 200px;\n  width: 380px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: 50px;\n  color: #000;\n  font-family: Roboto;\n  font-weight: 300;\n}\n\n.message-box h1 {\n  font-size: 60px;\n  line-height: 46px;\n  margin-bottom: 40px;\n}\n\n.buttons-con .action-link-wrap {\n  margin-top: 40px;\n}\n\n.buttons-con .action-link-wrap a {\n  background: #68c950;\n  padding: 8px 25px;\n  border-radius: 4px;\n  color: #FFF;\n  font-weight: bold;\n  font-size: 14px;\n  transition: all 0.3s linear;\n  cursor: pointer;\n  text-decoration: none;\n  margin-right: 10px\n}\n\n.buttons-con .action-link-wrap a:hover {\n  background: #5A5C6C;\n  color: #fff;\n}\n\n#Polygon-1 , #Polygon-2 , #Polygon-3 , #Polygon-4 , #Polygon-4, #Polygon-5 {\n  -webkit-animation: float 1s infinite ease-in-out alternate;\n          animation: float 1s infinite ease-in-out alternate;\n}\n\n#Polygon-2 {\n  -webkit-animation-delay: .2s;\n          animation-delay: .2s;\n}\n\n#Polygon-3 {\n  -webkit-animation-delay: .4s;\n          animation-delay: .4s;\n}\n\n#Polygon-4 {\n  -webkit-animation-delay: .6s;\n          animation-delay: .6s;\n}\n\n#Polygon-5 {\n  -webkit-animation-delay: .8s;\n          animation-delay: .8s;\n}\n\n@-webkit-keyframes float {\n  100% {\n    transform: translateY(20px);\n  }\n}\n\n@keyframes float {\n  100% {\n    transform: translateY(20px);\n  }\n}\n\n@media (max-width: 450px) {\n  svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: -250px;\n    margin-left: -190px;\n  }\n\n  .message-box {\n    top: 50%;\n    left: 50%;\n    margin-top: -100px;\n    margin-left: -190px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yNDA0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQjtBQUNGOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBEQUFrRDtVQUFsRCxrREFBa0Q7QUFDcEQ7O0FBQ0E7RUFDRSw0QkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLDRCQUFvQjtVQUFwQixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSw0QkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRjs7QUFKQTtFQUNFO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBQ0E7SUFDRSxRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoiZXJyb3I0MDQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkYzMjQyO1xyXG59XHJcbnN2ZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAtMjUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC00MDBweDtcclxufVxyXG4ubWVzc2FnZS1ib3gge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDM4MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4ubWVzc2FnZS1ib3ggaDEge1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBsaW5lLWhlaWdodDogNDZweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcbi5idXR0b25zLWNvbiAuYWN0aW9uLWxpbmstd3JhcCB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4uYnV0dG9ucy1jb24gLmFjdGlvbi1saW5rLXdyYXAgYSB7XHJcbiAgYmFja2dyb3VuZDogIzY4Yzk1MDtcclxuICBwYWRkaW5nOiA4cHggMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweFxyXG59XHJcbi5idXR0b25zLWNvbiAuYWN0aW9uLWxpbmstd3JhcCBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNUE1QzZDO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jUG9seWdvbi0xICwgI1BvbHlnb24tMiAsICNQb2x5Z29uLTMgLCAjUG9seWdvbi00ICwgI1BvbHlnb24tNCwgI1BvbHlnb24tNSB7XHJcbiAgYW5pbWF0aW9uOiBmbG9hdCAxcyBpbmZpbml0ZSBlYXNlLWluLW91dCBhbHRlcm5hdGU7XHJcbn1cclxuI1BvbHlnb24tMiB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAuMnM7IFxyXG59XHJcbiNQb2x5Z29uLTMge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLjRzOyBcclxufVxyXG4jUG9seWdvbi00IHtcclxuICBhbmltYXRpb24tZGVsYXk6IC42czsgXHJcbn1cclxuI1BvbHlnb24tNSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAuOHM7IFxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZsb2F0IHtcclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgc3ZnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTI1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xOTBweDtcclxuICB9XHJcbiAgLm1lc3NhZ2UtYm94IHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xOTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "R+tk":
/*!**************************************************!*\
  !*** ./src/app/layouts/admin/admin.component.ts ***!
  \**************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin.component.html */ "/ztn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() { }
};
AdminComponent.ctorParameters = () => [];
AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-admin",
        template: _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AdminComponent);



/***/ }),

/***/ "RLAj":
/*!***************************************************************************!*\
  !*** ./src/app/components/headers/header-stats/header-stats.component.ts ***!
  \***************************************************************************/
/*! exports provided: HeaderStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderStatsComponent", function() { return HeaderStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header-stats.component.html */ "UhXh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let HeaderStatsComponent = class HeaderStatsComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderStatsComponent.ctorParameters = () => [];
HeaderStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-header-stats",
        template: _raw_loader_header_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], HeaderStatsComponent);



/***/ }),

/***/ "RV1I":
/*!***************************************************!*\
  !*** ./src/app/services/manage-salons.service.ts ***!
  \***************************************************/
/*! exports provided: ManageSalonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageSalonsService", function() { return ManageSalonsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let ManageSalonsService = class ManageSalonsService {
    constructor(http) {
        this.http = http;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Content-Type", "application/json");
    }
    getSalons() {
        return this.http.get(`${this.endpoint}/salon`);
    }
    getSalon(_id) {
        return this.http.get(`${this.endpoint}/salon/${_id}`);
    }
    sendImage(uploadData) {
        return this.http.post(`${this.endpoint}/file-upload`, uploadData);
    }
    createSalon(salon) {
        return this.http.post(`${this.endpoint}/salon`, salon);
    }
    createManager(manager) {
        return this.http.post(`${this.endpoint}/auth/signup`, manager);
    }
    toggleActivation({ _id }) {
        return this.http.patch(`${this.endpoint}/salon/activation/${_id}`, null);
    }
    editSalon({ _id, name, image }) {
        return this.http.patch(`${this.endpoint}/salon/${_id}`, {
            name,
            image,
        });
    }
};
ManageSalonsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ManageSalonsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], ManageSalonsService);



/***/ }),

/***/ "S1No":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/manage-salons/manage-salons.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-full mb-12 xl:mb-0 px-4\">\r\n  <app-table-salons color=\"light\"></app-table-salons>\r\n</div>\r\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AppComponent = class AppComponent {
    constructor() {
        this.title = "angular-dashboard-page";
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-root",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AppComponent);



/***/ }),

/***/ "T8Xr":
/*!**************************************************************!*\
  !*** ./src/app/views/create-salon/create-salon.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateSalonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSalonComponent", function() { return CreateSalonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_salon_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-salon.component.html */ "9yi7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_manage_salons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/manage-salons.service */ "RV1I");







let CreateSalonComponent = class CreateSalonComponent {
    constructor(route, router, manageSalons, authService) {
        this.route = route;
        this.router = router;
        this.manageSalons = manageSalons;
        this.authService = authService;
        this.success = null;
        this.profileImagePath = "";
        this.salonImagePath = "";
        this.uploaded = "";
        this.access_token = "";
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
        });
        this.route.queryParams.subscribe((params) => {
            this.access_token = params.access_token;
            if (!this.access_token) {
                this.router.navigate(["/error-404"]);
            }
            this.authService
                .verifyToken(this.access_token)
                .subscribe((response) => {
                if (response.error) {
                    this.router.navigate(["/error-404"]);
                }
            });
        });
    }
    onProfileImageChanged(event) {
        this.selectedFile = event.target.files[0];
        const uploadData = new FormData();
        uploadData.append("profile-photo", this.selectedFile, this.selectedFile.name);
        this.manageSalons.sendImage(uploadData).subscribe((response) => {
            this.profileImagePath = response.url;
            this.uploaded = "image uploaded";
        });
    }
    onSalonImageChanged(event) {
        this.selectedFile = event.target.files[0];
        const uploadData = new FormData();
        uploadData.append("profile-photo", this.selectedFile, this.selectedFile.name + this.selectedFile.type);
        this.manageSalons.sendImage(uploadData).subscribe((response) => {
            this.salonImagePath = response.url;
        });
    }
    onSubmit() {
        const manager = {
            first_name: this.profileForm.value.first_name,
            last_name: this.profileForm.value.last_name,
            email: this.profileForm.value.email,
            password: this.profileForm.value.password,
            role: "Manager",
            salon: "",
        };
        const salon = {
            name: this.profileForm.value.name,
            image: this.salonImagePath,
        };
        this.manageSalons.createSalon(salon).subscribe((response) => {
            manager.salon = response === null || response === void 0 ? void 0 : response._id;
            this.manageSalons.createManager(manager).subscribe((response) => {
                if (response.user) {
                    this.success =
                        "Your account has been created you will be redirected shortly";
                }
            });
        });
    }
    ngOnInit() { }
};
CreateSalonComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_manage_salons_service__WEBPACK_IMPORTED_MODULE_6__["ManageSalonsService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
CreateSalonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-create-salon",
        template: _raw_loader_create_salon_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CreateSalonComponent);



/***/ }),

/***/ "UhXh":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/headers/header-stats/header-stats.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Header -->\r\n<div class=\"relative bg-red-600 md:pt-32 pb-32 pt-12\">\r\n</div>");

/***/ }),

/***/ "VTaN":
/*!********************************************************!*\
  !*** ./src/app/views/admin/tables/tables.component.ts ***!
  \********************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tables_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tables.component.html */ "a9TL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let TablesComponent = class TablesComponent {
    constructor() { }
    ngOnInit() { }
};
TablesComponent.ctorParameters = () => [];
TablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-tables",
        template: _raw_loader_tables_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TablesComponent);



/***/ }),

/***/ "Vbwu":
/*!************************************************!*\
  !*** ./src/app/layouts/auth/auth.component.ts ***!
  \************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth.component.html */ "dnvD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AuthComponent = class AuthComponent {
    constructor() { }
    ngOnInit() { }
};
AuthComponent.ctorParameters = () => [];
AuthComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-auth",
        template: _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AuthComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "Xkqe":
/*!*******************************************************************************!*\
  !*** ./src/app/components/table-hairdressers/table-hairdressers.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TableHairdressersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHairdressersComponent", function() { return TableHairdressersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_table_hairdressers_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./table-hairdressers.component.html */ "kQtk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let TableHairdressersComponent = class TableHairdressersComponent {
    constructor() {
        this._color = "light";
        this.live = true;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== "light" && color !== "dark" ? "light" : color;
    }
    ngOnInit() { }
};
TableHairdressersComponent.ctorParameters = () => [];
TableHairdressersComponent.propDecorators = {
    hairdressers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
TableHairdressersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-table-hairdressers",
        template: _raw_loader_table_hairdressers_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TableHairdressersComponent);



/***/ }),

/***/ "Xodl":
/*!***************************************************************************!*\
  !*** ./src/app/components/navbars/admin-navbar/admin-navbar.component.ts ***!
  \***************************************************************************/
/*! exports provided: AdminNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNavbarComponent", function() { return AdminNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-navbar.component.html */ "Pibi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AdminNavbarComponent = class AdminNavbarComponent {
    constructor() { }
    ngOnInit() { }
};
AdminNavbarComponent.ctorParameters = () => [];
AdminNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-admin-navbar",
        template: _raw_loader_admin_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AdminNavbarComponent);



/***/ }),

/***/ "YV8C":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/settings/settings.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex flex-wrap\">\r\n  <div class=\"w-full lg:w-8/12 px-4\">\r\n    <app-card-settings></app-card-settings>\r\n  </div>\r\n  <div class=\"w-full lg:w-4/12 px-4\">\r\n    <app-card-profile></app-card-profile>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-timeago */ "twue");
/* harmony import */ var _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/admin/admin.component */ "R+tk");
/* harmony import */ var _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/auth/auth.component */ "Vbwu");
/* harmony import */ var _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/admin/dashboard/dashboard.component */ "zmeh");
/* harmony import */ var _views_admin_maps_maps_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/admin/maps/maps.component */ "rKqC");
/* harmony import */ var _views_admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/admin/settings/settings.component */ "90Li");
/* harmony import */ var _views_admin_tables_tables_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/admin/tables/tables.component */ "VTaN");
/* harmony import */ var _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/auth/login/login.component */ "/kjZ");
/* harmony import */ var _components_navbars_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/navbars/admin-navbar/admin-navbar.component */ "Xodl");
/* harmony import */ var _components_headers_header_stats_header_stats_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/headers/header-stats/header-stats.component */ "RLAj");
/* harmony import */ var _components_dropdowns_pages_dropdown_pages_dropdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dropdowns/pages-dropdown/pages-dropdown.component */ "wcq5");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _components_dropdowns_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dropdowns/user-dropdown/user-dropdown.component */ "0slC");
/* harmony import */ var _views_admin_manage_salons_manage_salons_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/admin/manage-salons/manage-salons.component */ "gFck");
/* harmony import */ var _components_table_salons_table_salons_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/table-salons/table-salons.component */ "GB+I");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _services_manage_salons_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/manage-salons.service */ "RV1I");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_authConfig_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/authConfig.interceptor */ "rD10");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_table_clients_table_clients_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/table-clients/table-clients.component */ "JkxU");
/* harmony import */ var _components_dropdowns_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/dropdowns/dropdown/dropdown.component */ "vWvs");
/* harmony import */ var _components_add_salon_modal_add_salon_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/add-salon-modal/add-salon-modal.component */ "4EXa");
/* harmony import */ var _components_edit_salon_modal_edit_salon_modal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/edit-salon-modal/edit-salon-modal.component */ "d8XR");
/* harmony import */ var _views_create_salon_create_salon_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./views/create-salon/create-salon.component */ "T8Xr");
/* harmony import */ var _views_error404_error404_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./views/error404/error404.component */ "kku7");
/* harmony import */ var _views_reset_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./views/reset/reset-password/reset-password.component */ "7MB8");
/* harmony import */ var _views_reset_reset_password_form_reset_password_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./views/reset/reset-password-form/reset-password-form.component */ "ejuQ");
/* harmony import */ var _views_salon_details_salon_details_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./views/salon-details/salon-details.component */ "eG5t");
/* harmony import */ var _views_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./views/customer-details/customer-details.component */ "rUr9");
/* harmony import */ var _components_card_stats_card_stats_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/card-stats/card-stats.component */ "xaVu");
/* harmony import */ var _services_manage_clients_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/manage-clients.service */ "s5KC");
/* harmony import */ var _services_mailer_service_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/mailer-service.service */ "1Xo0");
/* harmony import */ var _services_booking_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/booking.service */ "p7Zy");
/* harmony import */ var _components_table_bookings_table_bookings_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/table-bookings/table-bookings.component */ "xH/y");
/* harmony import */ var _components_table_hairdressers_table_hairdressers_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/table-hairdressers/table-hairdressers.component */ "Xkqe");
/* harmony import */ var _components_table_formulas_table_formulas_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/table-formulas/table-formulas.component */ "1AoF");






// layouts


// admin views




// auth views

// components for views and layouts





























let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
            _components_dropdowns_pages_dropdown_pages_dropdown_component__WEBPACK_IMPORTED_MODULE_15__["PagesDropdownComponent"],
            _components_dropdowns_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_17__["UserDropdownComponent"],
            _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"],
            _components_headers_header_stats_header_stats_component__WEBPACK_IMPORTED_MODULE_14__["HeaderStatsComponent"],
            _components_navbars_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_13__["AdminNavbarComponent"],
            _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"],
            _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"],
            _views_admin_maps_maps_component__WEBPACK_IMPORTED_MODULE_9__["MapsComponent"],
            _views_admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"],
            _views_admin_tables_tables_component__WEBPACK_IMPORTED_MODULE_11__["TablesComponent"],
            _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _views_admin_manage_salons_manage_salons_component__WEBPACK_IMPORTED_MODULE_18__["ManageSalonsComponent"],
            _components_table_salons_table_salons_component__WEBPACK_IMPORTED_MODULE_19__["TableSalonsComponent"],
            _components_table_clients_table_clients_component__WEBPACK_IMPORTED_MODULE_25__["TableClientsComponent"],
            _components_table_bookings_table_bookings_component__WEBPACK_IMPORTED_MODULE_39__["TableBookingsComponent"],
            _components_table_hairdressers_table_hairdressers_component__WEBPACK_IMPORTED_MODULE_40__["TableHairdressersComponent"],
            _components_table_formulas_table_formulas_component__WEBPACK_IMPORTED_MODULE_41__["TableFormulasComponent"],
            _components_dropdowns_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_26__["DropdownComponent"],
            _components_add_salon_modal_add_salon_modal_component__WEBPACK_IMPORTED_MODULE_27__["AddSalonModalComponent"],
            _components_edit_salon_modal_edit_salon_modal_component__WEBPACK_IMPORTED_MODULE_28__["EditSalonModalComponent"],
            _views_create_salon_create_salon_component__WEBPACK_IMPORTED_MODULE_29__["CreateSalonComponent"],
            _views_error404_error404_component__WEBPACK_IMPORTED_MODULE_30__["Error404Component"],
            _views_reset_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_31__["ResetPasswordComponent"],
            _views_reset_reset_password_form_reset_password_form_component__WEBPACK_IMPORTED_MODULE_32__["ResetPasswordFormComponent"],
            _views_salon_details_salon_details_component__WEBPACK_IMPORTED_MODULE_33__["SalonDetailsComponent"],
            _views_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_34__["CustomerDetailsComponent"],
            _components_card_stats_card_stats_component__WEBPACK_IMPORTED_MODULE_35__["CardStatsComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"],
            ngx_timeago__WEBPACK_IMPORTED_MODULE_5__["TimeagoModule"].forRoot(),
        ],
        providers: [
            _services_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"],
            _services_manage_salons_service__WEBPACK_IMPORTED_MODULE_21__["ManageSalonsService"],
            _services_manage_clients_service__WEBPACK_IMPORTED_MODULE_36__["ManageClientsService"],
            _services_mailer_service_service__WEBPACK_IMPORTED_MODULE_37__["MailerServiceService"],
            _services_booking_service__WEBPACK_IMPORTED_MODULE_38__["BookingService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HTTP_INTERCEPTORS"],
                useClass: _services_authConfig_interceptor__WEBPACK_IMPORTED_MODULE_23__["AuthInterceptor"],
                multi: true,
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "a+Ia":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-bookings/table-bookings.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"\r\n    relative\r\n    flex flex-col\r\n    min-w-0\r\n    break-words\r\n    w-full\r\n    mb-6\r\n    shadow-lg\r\n    rounded\r\n  \"\r\n  [ngClass]=\"color === 'light' ? 'bg-white' : 'bg-red-900 text-white'\"\r\n>\r\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\r\n        <h3\r\n          class=\"font-semibold text-lg\"\r\n          [ngClass]=\"color === 'light' ? 'text-blueGray-700' : 'text-white'\"\r\n        >\r\n          Réservations\r\n        </h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"block w-full overflow-x-auto\">\r\n    <!-- Projects table -->\r\n    <table class=\"items-center w-full bg-transparent border-collapse\">\r\n      <thead>\r\n        <tr>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            ID\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Client\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Téléphone\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Coiffeur\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Formules\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Prix\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Durée\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Status\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Date\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr\r\n          *ngFor=\"let booking of bookings; let i = index\"\r\n          [attr.data-index]=\"i\"\r\n        >\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ i }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n              cursor-pointer\r\n            \"\r\n            [routerLink]=\"['/admin/clients', booking.customer._id]\"\r\n          >\r\n            {{ booking.customer.full_name }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ booking.customer.phone_number }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ booking.hairdresser.first_name }}\r\n            {{ booking.hairdresser.last_name }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            <ul>\r\n              <li *ngFor=\"let formula of booking.chosen_formulas\">\r\n                {{ formula.formula.name }}\r\n              </li>\r\n            </ul>\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ booking.total_price }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ booking.total_duration }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ booking.status }}\r\n          </td>\r\n\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ booking.createdAt | date: \"short\" }}\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "a9TL":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/tables/tables.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex flex-wrap mt-4\">\r\n  <div class=\"w-full mb-12 px-4\">\r\n    <app-card-table></app-card-table>\r\n  </div>\r\n  <div class=\"w-full mb-12 px-4\">\r\n    <app-card-table color=\"dark\"></app-card-table>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "b2uX":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/card-stats/card-stats.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"\r\n    relative\r\n    flex flex-col\r\n    min-w-0\r\n    break-words\r\n    bg-white\r\n    rounded\r\n    mb-6\r\n    xl:mb-0\r\n    shadow-lg\r\n  \"\r\n>\r\n  <div class=\"flex-auto p-4\">\r\n    <div class=\"flex flex-wrap\">\r\n      <div class=\"relative w-full pr-4 max-w-full flex-grow flex-1\">\r\n        <h5 class=\"text-blueGray-400 uppercase font-bold text-xs\">\r\n          {{ title }}\r\n        </h5>\r\n        <span class=\"font-semibold text-xl text-blueGray-700\">\r\n          {{ data }}\r\n        </span>\r\n      </div>\r\n      <div class=\"relative w-auto pl-4 flex-initial\">\r\n        <div\r\n          *ngIf=\"!image\"\r\n          class=\"\r\n            text-white\r\n            p-3\r\n            text-center\r\n            inline-flex\r\n            items-center\r\n            justify-center\r\n            w-12\r\n            h-12\r\n            shadow-lg\r\n            rounded-full\r\n          \"\r\n          [ngClass]=\"color\"\r\n        >\r\n          <i [ngClass]=\"icon\"></i>\r\n        </div>\r\n        <div class=\"items-center flex\" *ngIf=\"image\">\r\n          <span\r\n            class=\"\r\n              w-12\r\n              h-12\r\n              text-sm text-white\r\n              bg-blueGray-200\r\n              inline-flex\r\n              items-center\r\n              justify-center\r\n              rounded-full\r\n            \"\r\n          >\r\n            <img\r\n              alt=\"...\"\r\n              class=\"w-full rounded-full align-middle border-none shadow-lg\"\r\n              [src]=\"image\"\r\n            />\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "d8XR":
/*!***************************************************************************!*\
  !*** ./src/app/components/edit-salon-modal/edit-salon-modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditSalonModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSalonModalComponent", function() { return EditSalonModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_salon_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-salon-modal.component.html */ "LK0y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_manage_salons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/manage-salons.service */ "RV1I");




let EditSalonModalComponent = class EditSalonModalComponent {
    constructor(manageSalonService) {
        this.manageSalonService = manageSalonService;
        this.editChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.salonsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.name = "";
        this.image = "";
        this.loading = false;
        this.uploaded = "";
    }
    ngOnInit() {
        this.name = this.salon.name;
        this.image = this.salon.image;
    }
    toggleModal() {
        this.edit = !this.edit;
        this.editChange.emit(this.edit);
    }
    onImageChanged(event) {
        this.loading = true;
        this.uploaded = "Uploading...";
        this.selectedFile = event.target.files[0];
        const uploadData = new FormData();
        uploadData.append("profile-photo", this.selectedFile, this.selectedFile.name);
        this.manageSalonService.sendImage(uploadData).subscribe((response) => {
            this.image = response.url;
            this.loading = false;
            this.uploaded = "image uploaded";
        });
    }
    sendRegistrationMail() {
        this.manageSalonService
            .editSalon({
            _id: this.salon._id,
            name: this.name,
            image: this.image,
        })
            .subscribe((res) => {
            this.salons = this.salons.map((salon) => salon._id !== this.salon._id
                ? salon
                : Object.assign(Object.assign({}, this.salon), { name: this.name, image: this.image }));
            this.salonsChange.emit(this.salons);
            this.toggleModal();
        });
    }
};
EditSalonModalComponent.ctorParameters = () => [
    { type: src_app_services_manage_salons_service__WEBPACK_IMPORTED_MODULE_3__["ManageSalonsService"] }
];
EditSalonModalComponent.propDecorators = {
    edit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    editChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    salon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    salons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    salonsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
EditSalonModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-edit-salon-modal",
        template: _raw_loader_edit_salon_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], EditSalonModalComponent);



/***/ }),

/***/ "dnvD":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <main>\r\n    <section class=\"relative w-full h-full py-40 min-h-screen\">\r\n      <div\r\n        class=\"absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full\"\r\n        style=\"background-image: url('assets/img/register_bg_2.png')\"\r\n      ></div>\r\n      <router-outlet></router-outlet>\r\n    </section>\r\n  </main>\r\n</div>\r\n");

/***/ }),

/***/ "eG5t":
/*!****************************************************************!*\
  !*** ./src/app/views/salon-details/salon-details.component.ts ***!
  \****************************************************************/
/*! exports provided: SalonDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalonDetailsComponent", function() { return SalonDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_salon_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./salon-details.component.html */ "FC71");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_booking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/booking.service */ "p7Zy");
/* harmony import */ var src_app_services_manage_salons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/manage-salons.service */ "RV1I");







let SalonDetailsComponent = class SalonDetailsComponent {
    constructor(activatedRoute, manageSalonsService, bookingService) {
        this.activatedRoute = activatedRoute;
        this.manageSalonsService = manageSalonsService;
        this.bookingService = bookingService;
        this.salon = null;
        this.bookings = null;
        this.customersCount = 0;
        this.bookingsCount = 0;
        this.totalRevenue = 0;
        this.average = "0";
        this.hairdresserBreakdown = [];
        this.formulasBreakdown = [];
    }
    ngOnInit() {
        this.salonId = this.activatedRoute.snapshot.params._id;
        this.manageSalonsService.getSalon(this.salonId).subscribe((res) => {
            this.salon = res;
            const arrayOfPromises = [
                this.bookingService.getBookingsBySalon(this.salon._id),
                this.bookingService.getTotalVisitsAndRevenueBySalon(this.salon._id),
                // this.bookingService.getBookingsBySalonCount(this.salon._id),  // replaced in getTotalVisitsAndRevenueBySalon
                this.bookingService.getCustomersBySalonCount(this.salon._id),
                this.bookingService.getHairdresserBookingsBySalon(this.salon._id),
                this.bookingService.getFormulaBookingsBySalon(this.salon._id),
            ];
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(arrayOfPromises).subscribe((result) => {
                console.log(result);
                this.bookings = result[0];
                this.bookingsCount = result[1][0].visits;
                this.totalRevenue = result[1][0].revenue;
                this.customersCount = result[2][0].visits;
                this.average = (this.totalRevenue / this.bookingsCount).toFixed(2);
                this.hairdresserBreakdown = result[3].sort((a, b) => b.revenue - a.revenue);
                this.formulasBreakdown = result[4].sort((a, b) => b.quantity - a.quantity);
            });
        }, (err) => {
            console.log(err);
        });
    }
};
SalonDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_manage_salons_service__WEBPACK_IMPORTED_MODULE_6__["ManageSalonsService"] },
    { type: src_app_services_booking_service__WEBPACK_IMPORTED_MODULE_5__["BookingService"] }
];
SalonDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-salon-details",
        template: _raw_loader_salon_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], SalonDetailsComponent);



/***/ }),

/***/ "ejuQ":
/*!**********************************************************************************!*\
  !*** ./src/app/views/reset/reset-password-form/reset-password-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ResetPasswordFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordFormComponent", function() { return ResetPasswordFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reset_password_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reset-password-form.component.html */ "m7Ij");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");






let ResetPasswordFormComponent = class ResetPasswordFormComponent {
    constructor(route, router, fb, authService) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.access_token = "";
        this.user = null;
        this.success = false;
        this.show = false;
        this.message = "";
        this.passwordForm = this.fb.group({
            password: [""],
            confirmPassword: [""],
        });
        this.route.queryParams.subscribe((params) => {
            this.access_token = params.access_token;
            if (!this.access_token) {
                this.router.navigate(["/error-404"]);
            }
            this.authService.verifyToken(this.access_token).subscribe((response) => {
                if (response.error) {
                    this.router.navigate(["/error-404"]);
                }
                else {
                    this.user = response;
                }
            }, (err) => {
                this.router.navigate(["/error-404"]);
            });
        });
    }
    submit() {
        const { password, confirmPassword } = this.passwordForm.value;
        if (password === confirmPassword) {
            this.authService
                .resetPassword({
                email: this.user.email,
                password,
            })
                .subscribe((res) => {
                this.success = true;
                this.message = "Mot de passe changé";
                this.show = true;
            }, (err) => {
                // if (err.error.)
                this.success = false;
                if (err.error.statusCode === 400) {
                    this.message =
                        "Le mot de passe doit contenir au moins 4 caractères.";
                }
                else {
                    this.message = "Une erreur est survenue. Prière de réessayer";
                }
                this.show = true;
            });
        }
        else {
            this.success = false;
            this.message = "Les deux mots de passes saisis ne corréspondent pas";
            this.show = true;
        }
    }
    ngOnInit() { }
};
ResetPasswordFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
ResetPasswordFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-reset-password-form",
        template: _raw_loader_reset_password_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ResetPasswordFormComponent);



/***/ }),

/***/ "gFck":
/*!**********************************************************************!*\
  !*** ./src/app/views/admin/manage-salons/manage-salons.component.ts ***!
  \**********************************************************************/
/*! exports provided: ManageSalonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageSalonsComponent", function() { return ManageSalonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_manage_salons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./manage-salons.component.html */ "S1No");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ManageSalonsComponent = class ManageSalonsComponent {
    constructor() { }
    ngOnInit() { }
};
ManageSalonsComponent.ctorParameters = () => [];
ManageSalonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-manage-salons",
        template: _raw_loader_manage_salons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ManageSalonsComponent);



/***/ }),

/***/ "kQtk":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-hairdressers/table-hairdressers.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"\r\n    relative\r\n    flex flex-col\r\n    min-w-0\r\n    break-words\r\n    w-full\r\n    mb-6\r\n    shadow-lg\r\n    rounded\r\n  \"\r\n  [ngClass]=\"color === 'light' ? 'bg-white' : 'bg-red-900 text-white'\"\r\n>\r\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\r\n        <h3\r\n          class=\"font-semibold text-lg\"\r\n          [ngClass]=\"color === 'light' ? 'text-blueGray-700' : 'text-white'\"\r\n        >\r\n          Coiffeurs\r\n        </h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"block w-full overflow-x-auto\">\r\n    <!-- Projects table -->\r\n    <table class=\"items-center w-full bg-transparent border-collapse\">\r\n      <thead>\r\n        <tr>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Nom\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Réservations\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Spécialité\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Revenue\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr\r\n          *ngFor=\"let hairdresser of hairdressers; let i = index\"\r\n          [attr.data-index]=\"i\"\r\n        >\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n              cursor-pointer\r\n            \"\r\n          >\r\n            {{ hairdresser.hairdresser.first_name }}\r\n            {{ hairdresser.hairdresser.last_name }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ hairdresser.visits }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            <!-- {{ booking.hairdresser.first_name }} -->\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ hairdresser.revenue }}\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "kku7":
/*!******************************************************!*\
  !*** ./src/app/views/error404/error404.component.ts ***!
  \******************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_error404_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./error404.component.html */ "LDS7");
/* harmony import */ var _error404_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error404.component.css */ "PxUm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Error404Component = class Error404Component {
    constructor() { }
    ngOnInit() {
    }
};
Error404Component.ctorParameters = () => [];
Error404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-error404',
        template: _raw_loader_error404_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_error404_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Error404Component);



/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");






let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set("Content-Type", "application/json");
        this.currentUser = {};
    }
    // Sign-in
    logIn(user) {
        return this.http.post(`${this.endpoint}/auth/login`, user);
    }
    resetPassword(payload) {
        return this.http.post(`${this.endpoint}/auth/reset-password`, payload);
    }
    getToken() {
        return localStorage.getItem("access_token");
    }
    verifyToken(token) {
        this.headers.set("Authorization", `Bearer ${token}`);
        return this.http.get(`${this.endpoint}/auth/verifyauthentication`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
    get isLoggedIn() {
        let authToken = localStorage.getItem("access_token");
        return authToken !== null ? true : false;
    }
    doLogout() {
        localStorage.removeItem("user_id");
        if (localStorage.removeItem("access_token") == null) {
            this.router.navigate(["auth/login"]);
        }
    }
    // Error
    handleError(error) {
        let msg = "";
        if (error.error instanceof ErrorEvent) {
            // client-side error
            msg = error.error.message;
        }
        else {
            // server-side error
            msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(msg);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], AuthService);



/***/ }),

/***/ "m7Ij":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reset/reset-password-form/reset-password-form.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mx-auto px-4 h-full\">\r\n  <div class=\"flex content-center items-center justify-center h-full\">\r\n    <div class=\"w-full lg:w-4/12 px-4\">\r\n      <div\r\n        class=\"\r\n          relative\r\n          flex flex-col\r\n          min-w-0\r\n          break-words\r\n          w-full\r\n          mb-6\r\n          shadow-lg\r\n          rounded-lg\r\n          bg-blueGray-200\r\n          border-0\r\n        \"\r\n      >\r\n        <div class=\"rounded-t mb-0 px-6 py-6\">\r\n          <div class=\"text-center mb-3\">\r\n            <h6 class=\"text-blueGray-500 text-sm font-bold\">\r\n              Réinitialisez votre mot de passe\r\n            </h6>\r\n          </div>\r\n          <hr class=\"mt-6 border-b-1 border-blueGray-300\" />\r\n        </div>\r\n        <div class=\"flex-auto px-4 lg:px-10 py-10 pt-0\">\r\n          <form [formGroup]=\"passwordForm\" (ngSubmit)=\"submit()\">\r\n            <div class=\"relative w-full mb-3\">\r\n              <label\r\n                class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                htmlFor=\"grid-password\"\r\n              >\r\n                Nouveau mot de passe\r\n              </label>\r\n              <input\r\n                type=\"password\"\r\n                class=\"\r\n                  border-0\r\n                  px-3\r\n                  py-3\r\n                  placeholder-blueGray-300\r\n                  text-blueGray-600\r\n                  bg-white\r\n                  rounded\r\n                  text-sm\r\n                  shadow\r\n                  focus:outline-none focus:ring\r\n                  w-full\r\n                  ease-linear\r\n                  transition-all\r\n                  duration-150\r\n                \"\r\n                formControlName=\"password\"\r\n                placeholder=\"Votre mot de passe\"\r\n                required\r\n              />\r\n            </div>\r\n            <div class=\"relative w-full mb-3\">\r\n              <label\r\n                class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                htmlFor=\"grid-password\"\r\n              >\r\n                Confirmez votre mot de passe\r\n              </label>\r\n              <input\r\n                type=\"password\"\r\n                class=\"\r\n                  border-0\r\n                  px-3\r\n                  py-3\r\n                  placeholder-blueGray-300\r\n                  text-blueGray-600\r\n                  bg-white\r\n                  rounded\r\n                  text-sm\r\n                  shadow\r\n                  focus:outline-none focus:ring\r\n                  w-full\r\n                  ease-linear\r\n                  transition-all\r\n                  duration-150\r\n                \"\r\n                formControlName=\"confirmPassword\"\r\n                placeholder=\"Votre mot de passe\"\r\n                required\r\n              />\r\n            </div>\r\n\r\n            <div class=\"text-center mt-6\">\r\n              <button\r\n                class=\"\r\n                  bg-blueGray-800\r\n                  text-white\r\n                  active:bg-blueGray-600\r\n                  text-sm\r\n                  font-bold\r\n                  uppercase\r\n                  px-6\r\n                  py-3\r\n                  rounded\r\n                  shadow\r\n                  hover:shadow-lg\r\n                  outline-none\r\n                  focus:outline-none\r\n                  mr-1\r\n                  mb-1\r\n                  w-full\r\n                  ease-linear\r\n                  transition-all\r\n                  duration-150\r\n                \"\r\n                type=\"submit\"\r\n              >\r\n                Réinitialiser\r\n              </button>\r\n            </div>\r\n          </form>\r\n          <div class=\"text-center\" *ngIf=\"show\">\r\n            <p *ngIf=\"success\" class=\"m-2 text-green-700\">{{ message }}</p>\r\n            <p *ngIf=\"!success\" class=\"m-2 text-red-600\">{{ message }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "owMO":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/pages-dropdown/pages-dropdown.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\r\n  class=\"\r\n    lg:text-white lg:hover:text-blueGray-200\r\n    text-blueGray-700\r\n    px-3\r\n    py-4\r\n    lg:py-2\r\n    flex\r\n    items-center\r\n    text-xs\r\n    uppercase\r\n    font-bold\r\n  \"\r\n  href=\"#pablo\"\r\n  (click)=\"toggleDropdown($event)\"\r\n  #btnDropdownRef\r\n>\r\n  Demo Pages\r\n</a>\r\n<div\r\n  class=\"\r\n    bg-white\r\n    text-base\r\n    z-50\r\n    float-left\r\n    py-2\r\n    list-none\r\n    text-left\r\n    rounded\r\n    shadow-lg\r\n    min-w-48\r\n  \"\r\n  [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\r\n  #popoverDropdownRef\r\n>\r\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\r\n  <span\r\n    class=\"\r\n      text-sm\r\n      pt-2\r\n      pb-0\r\n      px-4\r\n      font-bold\r\n      block\r\n      w-full\r\n      whitespace-nowrap\r\n      bg-transparent\r\n      text-blueGray-400\r\n    \"\r\n  >\r\n    Auth Layout\r\n  </span>\r\n  <a\r\n    [routerLink]=\"['/auth/login']\"\r\n    class=\"\r\n      text-sm\r\n      py-2\r\n      px-4\r\n      font-normal\r\n      block\r\n      w-full\r\n      whitespace-nowrap\r\n      bg-transparent\r\n      text-blueGray-700\r\n    \"\r\n  >\r\n    Login\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/auth/register']\"\r\n    class=\"\r\n      text-sm\r\n      py-2\r\n      px-4\r\n      font-normal\r\n      block\r\n      w-full\r\n      whitespace-nowrap\r\n      bg-transparent\r\n      text-blueGray-700\r\n    \"\r\n  >\r\n    Register\r\n  </a>\r\n</div>\r\n");

/***/ }),

/***/ "p7Zy":
/*!*********************************************!*\
  !*** ./src/app/services/booking.service.ts ***!
  \*********************************************/
/*! exports provided: BookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingService", function() { return BookingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let BookingService = class BookingService {
    constructor(http) {
        this.http = http;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Content-Type", "application/json");
    }
    getBookingsByCustomer(_id) {
        return this.http.get(`${this.endpoint}/booking/customer/${_id}`);
    }
    getBookingsBySalon(_id) {
        return this.http.get(`${this.endpoint}/booking/salon/${_id}`);
    }
    /**
     * Replaced in getTotalVisitsAndSpendingByCustomer
     */
    // getBookingsByCustomerCount(_id: string) {
    //   return this.http.get<any>(`${this.endpoint}/booking/customer/count/${_id}`);
    // }
    /**
     * Replaced in getTotalVisitsAndRevenueBySalon
     */
    // getBookingsBySalonCount(_id: string) {
    //   return this.http.get<any>(`${this.endpoint}/booking/salon/count/${_id}`);
    // }
    getVisitedSalonsByCustomerCount(_id) {
        return this.http.get(`${this.endpoint}/booking/customer/visits/${_id}`);
    }
    getTotalVisitsAndSpendingByCustomer(_id) {
        return this.http.get(`${this.endpoint}/booking/customer/spending/${_id}`);
    }
    getCustomersBySalonCount(_id) {
        return this.http.get(`${this.endpoint}/booking/salon/customers/${_id}`);
    }
    getTotalVisitsAndRevenueBySalon(_id) {
        return this.http.get(`${this.endpoint}/booking/salon/revenue/${_id}`);
    }
    getHairdresserBookingsBySalon(_id) {
        return this.http.get(`${this.endpoint}/booking/salon/hairdresser/${_id}`);
    }
    getFormulaBookingsBySalon(_id) {
        return this.http.get(`${this.endpoint}/booking/salon/formulas/${_id}`);
    }
};
BookingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BookingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], BookingService);



/***/ }),

/***/ "rD10":
/*!****************************************************!*\
  !*** ./src/app/services/authConfig.interceptor.ts ***!
  \****************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "lGQG");



let AuthInterceptor = class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const authToken = this.authService.getToken();
        if (authToken) {
            req = req.clone({
                setHeaders: {
                    Authorization: "Bearer " + authToken,
                },
            });
        }
        return next.handle(req);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "rKqC":
/*!****************************************************!*\
  !*** ./src/app/views/admin/maps/maps.component.ts ***!
  \****************************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_maps_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./maps.component.html */ "165v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let MapsComponent = class MapsComponent {
    constructor() { }
    ngOnInit() { }
};
MapsComponent.ctorParameters = () => [];
MapsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-maps",
        template: _raw_loader_maps_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], MapsComponent);



/***/ }),

/***/ "rUr9":
/*!**********************************************************************!*\
  !*** ./src/app/views/customer-details/customer-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customer_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customer-details.component.html */ "2n7v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_booking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/booking.service */ "p7Zy");
/* harmony import */ var src_app_services_manage_clients_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/manage-clients.service */ "s5KC");







let CustomerDetailsComponent = class CustomerDetailsComponent {
    constructor(activatedRoute, manageClientsService, bookingService) {
        this.activatedRoute = activatedRoute;
        this.manageClientsService = manageClientsService;
        this.bookingService = bookingService;
        this.customer = null;
        this.bookings = null;
        this.bookingsCount = 0;
        this.visitedSalonsCount = 0;
        this.totalSpending = 0;
        this.average = "0";
        this.favoriteHairdresser = "";
        this.favoriteSalon = "";
    }
    ngOnInit() {
        this.customerId = this.activatedRoute.snapshot.params._id;
        this.manageClientsService.getClient(this.customerId).subscribe((res) => {
            this.customer = res;
            const arrayOfPromises = [
                this.bookingService.getBookingsByCustomer(this.customer._id),
                this.bookingService.getTotalVisitsAndSpendingByCustomer(this.customer._id),
                // this.bookingService.getBookingsByCustomerCount(this.customer._id), // replaced in getTotalVisitsAndSpendingByCustomer
                this.bookingService.getVisitedSalonsByCustomerCount(this.customer._id),
            ];
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(arrayOfPromises).subscribe((result) => {
                console.log(result);
                this.bookings = result[0];
                const hairdresser = this.favorite(this.bookings.map((booking) => booking.hairdresser));
                this.favoriteHairdresser = Object.assign(Object.assign({}, hairdresser), { full_name: `${hairdresser.first_name} ${hairdresser.last_name}` });
                this.favoriteSalon = this.favorite(this.bookings.map((booking) => booking.salon));
                this.bookingsCount = result[1][0].visits;
                this.totalSpending = result[1][0].spending;
                this.visitedSalonsCount = result[2][0].visits;
                this.average = (this.totalSpending / this.bookingsCount).toFixed(2);
            });
        }, (err) => {
            console.log(err);
        });
    }
    favorite(array) {
        if (array.length == 0)
            return null;
        var modeMap = {};
        var maxEl = array[0]._id, maxObj = array[0], maxCount = 1;
        for (var i = 0; i < array.length; i++) {
            var el = array[i]._id;
            var obj = array[i];
            if (modeMap[el] == null)
                modeMap[el] = 1;
            else
                modeMap[el]++;
            if (modeMap[el] > maxCount) {
                maxEl = el;
                maxObj = obj;
                maxCount = modeMap[el];
            }
        }
        console.log(maxObj);
        return maxObj;
    }
};
CustomerDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_manage_clients_service__WEBPACK_IMPORTED_MODULE_6__["ManageClientsService"] },
    { type: src_app_services_booking_service__WEBPACK_IMPORTED_MODULE_5__["BookingService"] }
];
CustomerDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-customer-details",
        template: _raw_loader_customer_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CustomerDetailsComponent);



/***/ }),

/***/ "s5KC":
/*!****************************************************!*\
  !*** ./src/app/services/manage-clients.service.ts ***!
  \****************************************************/
/*! exports provided: ManageClientsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageClientsService", function() { return ManageClientsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let ManageClientsService = class ManageClientsService {
    constructor(http) {
        this.http = http;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    getClients() {
        return this.http.get(`${this.endpoint}/customer`);
    }
    getClient(_id) {
        return this.http.get(`${this.endpoint}/customer/${_id}`);
    }
};
ManageClientsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ManageClientsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ManageClientsService);



/***/ }),

/***/ "vWvs":
/*!*********************************************************************!*\
  !*** ./src/app/components/dropdowns/dropdown/dropdown.component.ts ***!
  \*********************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dropdown.component.html */ "3YbZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let DropdownComponent = class DropdownComponent {
    constructor() { }
    ngOnInit() {
    }
};
DropdownComponent.ctorParameters = () => [];
DropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dropdown',
        template: _raw_loader_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], DropdownComponent);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/admin/admin.component */ "R+tk");
/* harmony import */ var _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/auth/auth.component */ "Vbwu");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.guard */ "+VzF");
/* harmony import */ var _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/admin/dashboard/dashboard.component */ "zmeh");
/* harmony import */ var _views_admin_manage_salons_manage_salons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/admin/manage-salons/manage-salons.component */ "gFck");
/* harmony import */ var _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/auth/login/login.component */ "/kjZ");
/* harmony import */ var _views_create_salon_create_salon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/create-salon/create-salon.component */ "T8Xr");
/* harmony import */ var _views_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/customer-details/customer-details.component */ "rUr9");
/* harmony import */ var _views_error404_error404_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/error404/error404.component */ "kku7");
/* harmony import */ var _views_reset_reset_password_form_reset_password_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/reset/reset-password-form/reset-password-form.component */ "ejuQ");
/* harmony import */ var _views_reset_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/reset/reset-password/reset-password.component */ "7MB8");
/* harmony import */ var _views_salon_details_salon_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/salon-details/salon-details.component */ "eG5t");



// layouts



// admin views


// auth views







const routes = [
    {
        path: "create/salon",
        component: _views_create_salon_create_salon_component__WEBPACK_IMPORTED_MODULE_9__["CreateSalonComponent"],
    },
    // admin views
    {
        path: "admin",
        component: _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [
            {
                path: "clients",
                component: _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
            },
            {
                path: "salons",
                component: _views_admin_manage_salons_manage_salons_component__WEBPACK_IMPORTED_MODULE_7__["ManageSalonsComponent"],
                canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
            },
            { path: "", redirectTo: "dashboard", pathMatch: "full" },
        ],
    },
    {
        path: "admin/clients/:_id",
        component: _views_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_10__["CustomerDetailsComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
    },
    {
        path: "admin/salons/:_id",
        component: _views_salon_details_salon_details_component__WEBPACK_IMPORTED_MODULE_14__["SalonDetailsComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
    },
    // auth views
    {
        path: "auth",
        component: _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
        children: [
            { path: "login", component: _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
            {
                path: "reset-password",
                component: _views_reset_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__["ResetPasswordComponent"],
            },
            {
                path: "reset-password-form",
                component: _views_reset_reset_password_form_reset_password_form_component__WEBPACK_IMPORTED_MODULE_12__["ResetPasswordFormComponent"],
            },
            { path: "", redirectTo: "login", pathMatch: "full" },
        ],
    },
    {
        path: "error-404",
        component: _views_error404_error404_component__WEBPACK_IMPORTED_MODULE_11__["Error404Component"],
    },
    { path: "", redirectTo: "auth/login", pathMatch: "full" },
    { path: "**", redirectTo: "error-404", pathMatch: "full" },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "wcq5":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dropdowns/pages-dropdown/pages-dropdown.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PagesDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesDropdownComponent", function() { return PagesDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pages_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pages-dropdown.component.html */ "owMO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core */ "EjV/");




let PagesDropdownComponent = class PagesDropdownComponent {
    constructor() {
        this.dropdownPopoverShow = false;
    }
    ngOnInit() { }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
            this.createPoppper();
        }
    }
    createPoppper() {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: "bottom-start",
        });
    }
};
PagesDropdownComponent.propDecorators = {
    btnDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["btnDropdownRef", { static: false },] }],
    popoverDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["popoverDropdownRef", { static: false },] }]
};
PagesDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-pages-dropdown",
        template: _raw_loader_pages_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], PagesDropdownComponent);



/***/ }),

/***/ "xH/y":
/*!***********************************************************************!*\
  !*** ./src/app/components/table-bookings/table-bookings.component.ts ***!
  \***********************************************************************/
/*! exports provided: TableBookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBookingsComponent", function() { return TableBookingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_table_bookings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./table-bookings.component.html */ "a+Ia");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let TableBookingsComponent = class TableBookingsComponent {
    constructor() {
        this._color = "light";
        this.live = true;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== "light" && color !== "dark" ? "light" : color;
    }
    ngOnInit() { }
};
TableBookingsComponent.ctorParameters = () => [];
TableBookingsComponent.propDecorators = {
    bookings: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
TableBookingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-table-bookings",
        template: _raw_loader_table_bookings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TableBookingsComponent);



/***/ }),

/***/ "xaVu":
/*!***************************************************************!*\
  !*** ./src/app/components/card-stats/card-stats.component.ts ***!
  \***************************************************************/
/*! exports provided: CardStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardStatsComponent", function() { return CardStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-stats.component.html */ "b2uX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardStatsComponent = class CardStatsComponent {
    constructor() { }
    ngOnInit() { }
};
CardStatsComponent.ctorParameters = () => [];
CardStatsComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
CardStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-stats",
        template: _raw_loader_card_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardStatsComponent);



/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let SidebarComponent = class SidebarComponent {
    constructor() {
        this.collapseShow = "hidden";
    }
    ngOnInit() { }
    toggleCollapseShow(classes) {
        this.collapseShow = classes;
    }
};
SidebarComponent.ctorParameters = () => [];
SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-sidebar",
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], SidebarComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zmeh":
/*!**************************************************************!*\
  !*** ./src/app/views/admin/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "KxJz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() { }
};
DashboardComponent.ctorParameters = () => [];
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], DashboardComponent);



/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map