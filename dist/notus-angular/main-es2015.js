(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Kwz":
/*!*******************************************************************************!*\
  !*** ./src/app/components/cards/card-line-chart/card-line-chart.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CardLineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardLineChartComponent", function() { return CardLineChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_line_chart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-line-chart.component.html */ "lLla");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);




let CardLineChartComponent = class CardLineChartComponent {
    constructor() { }
    ngOnInit() { }
    ngAfterViewInit() {
        var config = {
            type: "line",
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                ],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: "#4c51bf",
                        borderColor: "#4c51bf",
                        data: [65, 78, 66, 44, 56, 67, 75],
                        fill: false,
                    },
                    {
                        label: new Date().getFullYear() - 1,
                        fill: false,
                        backgroundColor: "#fff",
                        borderColor: "#fff",
                        data: [40, 68, 86, 74, 56, 60, 87],
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: "Sales Charts",
                    fontColor: "white",
                },
                legend: {
                    labels: {
                        fontColor: "white",
                    },
                    align: "end",
                    position: "bottom",
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                },
                hover: {
                    mode: "nearest",
                    intersect: true,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontColor: "rgba(255,255,255,.7)",
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Month",
                                fontColor: "white",
                            },
                            gridLines: {
                                display: false,
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.3)",
                                zeroLineColor: "rgba(0, 0, 0, 0)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontColor: "rgba(255,255,255,.7)",
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Value",
                                fontColor: "white",
                            },
                            gridLines: {
                                borderDash: [3],
                                borderDashOffset: [3],
                                drawBorder: false,
                                color: "rgba(255, 255, 255, 0.15)",
                                zeroLineColor: "rgba(33, 37, 41, 0)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        let ctx = document.getElementById("line-chart");
        ctx = ctx.getContext("2d");
        new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(ctx, config);
    }
};
CardLineChartComponent.ctorParameters = () => [];
CardLineChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-line-chart",
        template: _raw_loader_card_line_chart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardLineChartComponent);



/***/ }),

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
        if (this.authService.isLoggedIn !== true) {
            this.router.navigate(['auth/login']);
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
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "/GnJ":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-bar-chart/card-bar-chart.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\r\n>\r\n  <div class=\"rounded-t mb-0 px-4 py-3 bg-transparent\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"relative w-full max-w-full flex-grow flex-1\">\r\n        <h6 class=\"uppercase text-blueGray-400 mb-1 text-xs font-semibold\">\r\n          Performance\r\n        </h6>\r\n        <h2 class=\"text-blueGray-700 text-xl font-semibold\">Total orders</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"p-4 flex-auto\">\r\n    <!-- Chart -->\r\n    <div class=\"relative\" style=\"height: 350px\">\r\n      <canvas id=\"bar-chart\"></canvas>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

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
        this.signinForm = this.fb.group({
            email: [''],
            password: ['']
        });
    }
    ngOnInit() { }
    loginUser() {
        this.authService.logIn(this.signinForm.value);
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
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <app-sidebar></app-sidebar>\r\n  <div class=\"relative md:ml-64 bg-blueGray-100\">\r\n    <app-admin-navbar></app-admin-navbar>\r\n    <app-header-stats></app-header-stats>\r\n    <div class=\"px-4 md:px-10 mx-auto w-full -m-24\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

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

/***/ "0uaz":
/*!************************************************************************!*\
  !*** ./src/app/views/admin/manage-saloons/manage-saloons.component.ts ***!
  \************************************************************************/
/*! exports provided: ManageSaloonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageSaloonsComponent", function() { return ManageSaloonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_manage_saloons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./manage-saloons.component.html */ "pzeq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ManageSaloonsComponent = class ManageSaloonsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ManageSaloonsComponent.ctorParameters = () => [];
ManageSaloonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-manage-saloons',
        template: _raw_loader_manage_saloons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ManageSaloonsComponent);



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

/***/ "1DoU":
/*!***************************************************************!*\
  !*** ./src/app/components/footers/footer/footer.component.ts ***!
  \***************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "CzbP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let FooterComponent = class FooterComponent {
    constructor() {
        this.date = new Date().getFullYear();
    }
    ngOnInit() { }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-footer",
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], FooterComponent);



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
    sendMail(email) {
        return this.http.post(`${this.endpoint}/email`, {
            email
        });
    }
};
MailerServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MailerServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], MailerServiceService);



/***/ }),

/***/ "3IhM":
/*!*********************************************************************************!*\
  !*** ./src/app/components/cards/card-page-visits/card-page-visits.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CardPageVisitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageVisitsComponent", function() { return CardPageVisitsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_page_visits_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-page-visits.component.html */ "L/HX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardPageVisitsComponent = class CardPageVisitsComponent {
    constructor() { }
    ngOnInit() { }
};
CardPageVisitsComponent.ctorParameters = () => [];
CardPageVisitsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-page-visits",
        template: _raw_loader_card_page_visits_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardPageVisitsComponent);



/***/ }),

/***/ "3YbZ":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/dropdown/dropdown.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- This example requires Tailwind CSS v2.0+ -->\r\n<div class=\"relative inline-block text-left\">\r\n  <div>\r\n    <button type=\"button\" class=\"inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500\" id=\"menu-button\" aria-expanded=\"true\" aria-haspopup=\"true\">\r\n      Add Saloon \r\n    </button>\r\n  </div>\r\n\r\n  <!--\r\n    Dropdown menu, show/hide based on menu state.\r\n\r\n    Entering: \"transition ease-out duration-100\"\r\n      From: \"transform opacity-0 scale-95\"\r\n      To: \"transform opacity-100 scale-100\"\r\n    Leaving: \"transition ease-in duration-75\"\r\n      From: \"transform opacity-100 scale-100\"\r\n      To: \"transform opacity-0 scale-95\"\r\n  -->\r\n  <div class=\"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none\" role=\"menu\" aria-orientation=\"vertical\" aria-labelledby=\"menu-button\" tabindex=\"-1\">\r\n    <div class=\"py-1\" role=\"none\">\r\n      <!-- Active: \"bg-gray-100 text-gray-900\", Not Active: \"text-gray-700\" -->\r\n      <a href=\"#\" class=\"text-gray-700 block px-4 py-2 text-sm\" role=\"menuitem\" tabindex=\"-1\" id=\"menu-item-0\">Edit</a>\r\n      <a href=\"#\" class=\"text-gray-700 block px-4 py-2 text-sm\" role=\"menuitem\" tabindex=\"-1\" id=\"menu-item-1\">Duplicate</a>\r\n    </div>\r\n    <div class=\"py-1\" role=\"none\">\r\n      <a href=\"#\" class=\"text-gray-700 block px-4 py-2 text-sm\" role=\"menuitem\" tabindex=\"-1\" id=\"menu-item-2\">Archive</a>\r\n      <a href=\"#\" class=\"text-gray-700 block px-4 py-2 text-sm\" role=\"menuitem\" tabindex=\"-1\" id=\"menu-item-3\">Move</a>\r\n    </div>\r\n    <div class=\"py-1\" role=\"none\">\r\n      <a href=\"#\" class=\"text-gray-700 block px-4 py-2 text-sm\" role=\"menuitem\" tabindex=\"-1\" id=\"menu-item-4\">Share</a>\r\n      <a href=\"#\" class=\"text-gray-700 block px-4 py-2 text-sm\" role=\"menuitem\" tabindex=\"-1\" id=\"menu-item-5\">Add to favorites</a>\r\n    </div>\r\n    <div class=\"py-1\" role=\"none\">\r\n      <a href=\"#\" class=\"text-gray-700 block px-4 py-2 text-sm\" role=\"menuitem\" tabindex=\"-1\" id=\"menu-item-6\">Delete</a>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "40b+":
/*!****************************************************!*\
  !*** ./src/app/services/manage-saloons.service.ts ***!
  \****************************************************/
/*! exports provided: ManageSaloonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageSaloonsService", function() { return ManageSaloonsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let ManageSaloonsService = class ManageSaloonsService {
    constructor(http) {
        this.http = http;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Content-Type", "application/json");
    }
    getSaloons() {
        return this.http.get(`${this.endpoint}/salon`);
    }
    sendImage(uploadData) {
        return this.http.post(`${this.endpoint}/file-upload`, uploadData);
    }
    createSaloon(salon) {
        return this.http.post(`${this.endpoint}/salon`, salon);
    }
    createManager(manager) {
        return this.http.post(`${this.endpoint}/auth/signup`, manager);
    }
};
ManageSaloonsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ManageSaloonsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], ManageSaloonsService);



/***/ }),

/***/ "4b2p":
/*!***************************************************************************!*\
  !*** ./src/app/components/navbars/index-navbar/index-navbar.component.ts ***!
  \***************************************************************************/
/*! exports provided: IndexNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexNavbarComponent", function() { return IndexNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_index_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index-navbar.component.html */ "RORk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let IndexNavbarComponent = class IndexNavbarComponent {
    constructor() {
        this.navbarOpen = false;
    }
    ngOnInit() { }
    setNavbarOpen() {
        this.navbarOpen = !this.navbarOpen;
    }
};
IndexNavbarComponent.ctorParameters = () => [];
IndexNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-index-navbar",
        template: _raw_loader_index_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], IndexNavbarComponent);



/***/ }),

/***/ "7S+c":
/*!*********************************************************************!*\
  !*** ./src/app/components/table-saloons/table-saloons.component.ts ***!
  \*********************************************************************/
/*! exports provided: TableSaloonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSaloonsComponent", function() { return TableSaloonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_table_saloons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./table-saloons.component.html */ "uEih");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_manage_saloons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/manage-saloons.service */ "40b+");




let TableSaloonsComponent = class TableSaloonsComponent {
    constructor(manageSaloons) {
        this.manageSaloons = manageSaloons;
        this._color = "light";
        this.live = true;
        this.manageSaloons.getSaloons().subscribe((res) => { this.saloons = res; });
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== "light" && color !== "dark" ? "light" : color;
    }
    ngOnInit() { }
};
TableSaloonsComponent.ctorParameters = () => [
    { type: src_app_services_manage_saloons_service__WEBPACK_IMPORTED_MODULE_3__["ManageSaloonsService"] }
];
TableSaloonsComponent.propDecorators = {
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
TableSaloonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-table-saloons',
        template: _raw_loader_table_saloons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TableSaloonsComponent);



/***/ }),

/***/ "7aL3":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal.component.html */ "P6R5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_mailer_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/mailer-service.service */ "1Xo0");




let ModalComponent = class ModalComponent {
    constructor(mailerService) {
        this.mailerService = mailerService;
        this.email = "";
        this.showModal = false;
    }
    toggleModal() {
        this.showModal = !this.showModal;
    }
    sendMail() {
        this.mailerService.sendMail(this.email).subscribe((res) => {
            console.log(res);
            this.email = '';
            this.toggleModal();
        });
    }
};
ModalComponent.ctorParameters = () => [
    { type: src_app_services_mailer_service_service__WEBPACK_IMPORTED_MODULE_3__["MailerServiceService"] }
];
ModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-modal',
        template: _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ModalComponent);



/***/ }),

/***/ "8GP7":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/profile/profile.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-auth-navbar></app-auth-navbar>\r\n<main class=\"profile-page\">\r\n  <section class=\"relative block h-500-px\">\r\n    <div\r\n      class=\"absolute top-0 w-full h-full bg-center bg-cover\"\r\n      style=\"\r\n        background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80');\r\n      \"\r\n    >\r\n      <span\r\n        id=\"blackOverlay\"\r\n        class=\"w-full h-full absolute opacity-50 bg-black\"\r\n      ></span>\r\n    </div>\r\n    <div\r\n      class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px\"\r\n      style=\"transform: translateZ(0)\"\r\n    >\r\n      <svg\r\n        class=\"absolute bottom-0 overflow-hidden\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        preserveAspectRatio=\"none\"\r\n        version=\"1.1\"\r\n        viewBox=\"0 0 2560 100\"\r\n        x=\"0\"\r\n        y=\"0\"\r\n      >\r\n        <polygon\r\n          class=\"text-blueGray-200 fill-current\"\r\n          points=\"2560 0 2560 100 0 100\"\r\n        ></polygon>\r\n      </svg>\r\n    </div>\r\n  </section>\r\n  <section class=\"relative py-16 bg-blueGray-200\">\r\n    <div class=\"container mx-auto px-4\">\r\n      <div\r\n        class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64\"\r\n      >\r\n        <div class=\"px-6\">\r\n          <div class=\"flex flex-wrap justify-center\">\r\n            <div class=\"w-full lg:w-3/12 px-4 lg:order-2 flex justify-center\">\r\n              <div class=\"relative\">\r\n                <img\r\n                  alt=\"...\"\r\n                  src=\"assets/img/team-2-800x800.jpg\"\r\n                  class=\"shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px\"\r\n                />\r\n              </div>\r\n            </div>\r\n            <div\r\n              class=\"w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center\"\r\n            >\r\n              <div class=\"py-6 px-3 mt-32 sm:mt-0\">\r\n                <button\r\n                  class=\"bg-red-600 active:bg-red-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150\"\r\n                  type=\"button\"\r\n                >\r\n                  Connect\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"w-full lg:w-4/12 px-4 lg:order-1\">\r\n              <div class=\"flex justify-center py-4 lg:pt-4 pt-8\">\r\n                <div class=\"mr-4 p-3 text-center\">\r\n                  <span\r\n                    class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\r\n                  >\r\n                    22\r\n                  </span>\r\n                  <span class=\"text-sm text-blueGray-400\">Friends</span>\r\n                </div>\r\n                <div class=\"mr-4 p-3 text-center\">\r\n                  <span\r\n                    class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\r\n                  >\r\n                    10\r\n                  </span>\r\n                  <span class=\"text-sm text-blueGray-400\">Photos</span>\r\n                </div>\r\n                <div class=\"lg:mr-4 p-3 text-center\">\r\n                  <span\r\n                    class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\r\n                  >\r\n                    89\r\n                  </span>\r\n                  <span class=\"text-sm text-blueGray-400\">Comments</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"text-center mt-12\">\r\n            <h3\r\n              class=\"text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2\"\r\n            >\r\n              Jenna Stones\r\n            </h3>\r\n            <div\r\n              class=\"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase\"\r\n            >\r\n              <i\r\n                class=\"fas fa-map-marker-alt mr-2 text-lg text-blueGray-400\"\r\n              ></i>\r\n              Los Angeles, California\r\n            </div>\r\n            <div class=\"mb-2 text-blueGray-600 mt-10\">\r\n              <i class=\"fas fa-briefcase mr-2 text-lg text-blueGray-400\"></i>\r\n              Solution Manager - Creative Tim Officer\r\n            </div>\r\n            <div class=\"mb-2 text-blueGray-600\">\r\n              <i class=\"fas fa-university mr-2 text-lg text-blueGray-400\"></i>\r\n              University of Computer Science\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-10 py-10 border-t border-blueGray-200 text-center\">\r\n            <div class=\"flex flex-wrap justify-center\">\r\n              <div class=\"w-full lg:w-9/12 px-4\">\r\n                <p class=\"mb-4 text-lg leading-relaxed text-blueGray-700\">\r\n                  An artist of considerable range, Jenna the name taken by\r\n                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs\r\n                  and records all of his own music, giving it a warm, intimate\r\n                  feel with a solid groove structure. An artist of considerable\r\n                  range.\r\n                </p>\r\n                <a href=\"javascript:void(0)\" class=\"font-normal text-red-600\">\r\n                  Show more\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n<app-footer></app-footer>\r\n");

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

/***/ "A8uX":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-clients/table-clients.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"\r\n    relative\r\n    flex flex-col\r\n    min-w-0\r\n    break-words\r\n    w-full\r\n    mb-6\r\n    shadow-lg\r\n    rounded\r\n  \"\r\n  [ngClass]=\"color === 'light' ? 'bg-white' : 'bg-red-900 text-white'\"\r\n>\r\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\r\n        <h3\r\n          class=\"font-semibold text-lg\"\r\n          [ngClass]=\"color === 'light' ? 'text-blueGray-700' : 'text-white'\"\r\n        >\r\n          Customers\r\n        </h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"block w-full overflow-x-auto\">\r\n    <!-- Projects table -->\r\n    <table class=\"items-center w-full bg-transparent border-collapse\">\r\n      <thead>\r\n        <tr>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            ID\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Name\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Email\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Signed up At\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let client of clients; let i = index\" [attr.data-index]=\"i\">\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ i }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ client.full_name }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ client.email }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ client.createdAt | timeago:live }}\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "AN84":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/landing/landing.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-auth-navbar></app-auth-navbar>\r\n<main>\r\n  <div\r\n    class=\"relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75\"\r\n  >\r\n    <div\r\n      class=\"absolute top-0 w-full h-full bg-center bg-cover\"\r\n      style=\"\r\n        background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');\r\n      \"\r\n    >\r\n      <span\r\n        id=\"blackOverlay\"\r\n        class=\"w-full h-full absolute opacity-75 bg-black\"\r\n      ></span>\r\n    </div>\r\n    <div class=\"container relative mx-auto\">\r\n      <div class=\"items-center flex flex-wrap\">\r\n        <div class=\"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center\">\r\n          <div class=\"pr-12\">\r\n            <h1 class=\"text-white font-semibold text-5xl\">\r\n              Your story starts with us.\r\n            </h1>\r\n            <p class=\"mt-4 text-lg text-blueGray-200\">\r\n              This is a simple example of a Landing Page you can build using\r\n              Notus Angular. It features multiple CSS components based on the\r\n              Tailwind CSS design system.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div\r\n      class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px\"\r\n      style=\"transform: translateZ(0)\"\r\n    >\r\n      <svg\r\n        class=\"absolute bottom-0 overflow-hidden\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        preserveAspectRatio=\"none\"\r\n        version=\"1.1\"\r\n        viewBox=\"0 0 2560 100\"\r\n        x=\"0\"\r\n        y=\"0\"\r\n      >\r\n        <polygon\r\n          class=\"text-blueGray-200 fill-current\"\r\n          points=\"2560 0 2560 100 0 100\"\r\n        ></polygon>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n\r\n  <section class=\"pb-20 bg-blueGray-200 -mt-24\">\r\n    <div class=\"container mx-auto px-4\">\r\n      <div class=\"flex flex-wrap\">\r\n        <div class=\"lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center\">\r\n          <div\r\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\"\r\n          >\r\n            <div class=\"px-4 py-5 flex-auto\">\r\n              <div\r\n                class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400\"\r\n              >\r\n                <i class=\"fas fa-award\"></i>\r\n              </div>\r\n              <h6 class=\"text-xl font-semibold\">Awarded Agency</h6>\r\n              <p class=\"mt-2 mb-4 text-blueGray-500\">\r\n                Divide details about your product or agency work into parts. A\r\n                paragraph describing a feature will be enough.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"w-full md:w-4/12 px-4 text-center\">\r\n          <div\r\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\"\r\n          >\r\n            <div class=\"px-4 py-5 flex-auto\">\r\n              <div\r\n                class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400\"\r\n              >\r\n                <i class=\"fas fa-retweet\"></i>\r\n              </div>\r\n              <h6 class=\"text-xl font-semibold\">Free Revisions</h6>\r\n              <p class=\"mt-2 mb-4 text-blueGray-500\">\r\n                Keep you user engaged by providing meaningful information.\r\n                Remember that by this time, the user is curious.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"pt-6 w-full md:w-4/12 px-4 text-center\">\r\n          <div\r\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\"\r\n          >\r\n            <div class=\"px-4 py-5 flex-auto\">\r\n              <div\r\n                class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400\"\r\n              >\r\n                <i class=\"fas fa-fingerprint\"></i>\r\n              </div>\r\n              <h6 class=\"text-xl font-semibold\">Verified Company</h6>\r\n              <p class=\"mt-2 mb-4 text-blueGray-500\">\r\n                Write a few lines about each one. A paragraph describing a\r\n                feature will be enough. Keep you user engaged!\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"flex flex-wrap items-center mt-32\">\r\n        <div class=\"w-full md:w-5/12 px-4 mr-auto ml-auto\">\r\n          <div\r\n            class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\"\r\n          >\r\n            <i class=\"fas fa-user-friends text-xl\"></i>\r\n          </div>\r\n          <h3 class=\"text-3xl mb-2 font-semibold leading-normal\">\r\n            Working with us is a pleasure\r\n          </h3>\r\n          <p\r\n            class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600\"\r\n          >\r\n            Don't let your uses guess by attaching tooltips and popoves to any\r\n            element. Just make sure you enable them first via JavaScript.\r\n          </p>\r\n          <p\r\n            class=\"text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600\"\r\n          >\r\n            The kit comes with three pre-built pages to help you get started\r\n            faster. You can change the text and images and you're good to go.\r\n            Just make sure you enable them first via JavaScript.\r\n          </p>\r\n          <a [routerLink]=\"['/']\" class=\"font-bold text-blueGray-700 mt-8\">\r\n            Check Notus Angular!\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"w-full md:w-4/12 px-4 mr-auto ml-auto\">\r\n          <div\r\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-600\"\r\n          >\r\n            <img\r\n              alt=\"...\"\r\n              src=\"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80\"\r\n              class=\"w-full align-middle rounded-t-lg\"\r\n            />\r\n            <blockquote class=\"relative p-8 mb-4\">\r\n              <svg\r\n                preserveAspectRatio=\"none\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                viewBox=\"0 0 583 95\"\r\n                class=\"absolute left-0 w-full block h-95-px -top-94-px\"\r\n              >\r\n                <polygon\r\n                  points=\"-30,95 583,95 583,65\"\r\n                  class=\"text-red-600 fill-current\"\r\n                ></polygon>\r\n              </svg>\r\n              <h4 class=\"text-xl font-bold text-white\">Top Notch Services</h4>\r\n              <p class=\"text-md font-light mt-2 text-white\">\r\n                The Arctic Ocean freezes every winter and much of the sea-ice\r\n                then thaws every summer, and that process will continue whatever\r\n                happens.\r\n              </p>\r\n            </blockquote>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"relative py-20\">\r\n    <div\r\n      class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\"\r\n      style=\"transform: translateZ(0)\"\r\n    >\r\n      <svg\r\n        class=\"absolute bottom-0 overflow-hidden\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        preserveAspectRatio=\"none\"\r\n        version=\"1.1\"\r\n        viewBox=\"0 0 2560 100\"\r\n        x=\"0\"\r\n        y=\"0\"\r\n      >\r\n        <polygon\r\n          class=\"text-white fill-current\"\r\n          points=\"2560 0 2560 100 0 100\"\r\n        ></polygon>\r\n      </svg>\r\n    </div>\r\n\r\n    <div class=\"container mx-auto px-4\">\r\n      <div class=\"items-center flex flex-wrap\">\r\n        <div class=\"w-full md:w-4/12 ml-auto mr-auto px-4\">\r\n          <img\r\n            alt=\"...\"\r\n            class=\"max-w-full rounded-lg shadow-lg\"\r\n            src=\"https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80\"\r\n          />\r\n        </div>\r\n        <div class=\"w-full md:w-5/12 ml-auto mr-auto px-4\">\r\n          <div class=\"md:pr-12\">\r\n            <div\r\n              class=\"text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-300\"\r\n            >\r\n              <i class=\"fas fa-rocket text-xl\"></i>\r\n            </div>\r\n            <h3 class=\"text-3xl font-semibold\">A growing company</h3>\r\n            <p class=\"mt-4 text-lg leading-relaxed text-blueGray-500\">\r\n              The extension comes with three pre-built pages to help you get\r\n              started faster. You can change the text and images and you're good\r\n              to go.\r\n            </p>\r\n            <ul class=\"list-none mt-6\">\r\n              <li class=\"py-2\">\r\n                <div class=\"flex items-center\">\r\n                  <div>\r\n                    <span\r\n                      class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3\"\r\n                    >\r\n                      <i class=\"fas fa-fingerprint\"></i>\r\n                    </span>\r\n                  </div>\r\n                  <div>\r\n                    <h4 class=\"text-blueGray-500\">\r\n                      Carefully crafted components\r\n                    </h4>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"flex items-center\">\r\n                  <div>\r\n                    <span\r\n                      class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3\"\r\n                    >\r\n                      <i class=\"fab fa-html5\"></i>\r\n                    </span>\r\n                  </div>\r\n                  <div>\r\n                    <h4 class=\"text-blueGray-500\">Amazing page examples</h4>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"flex items-center\">\r\n                  <div>\r\n                    <span\r\n                      class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3\"\r\n                    >\r\n                      <i class=\"far fa-paper-plane\"></i>\r\n                    </span>\r\n                  </div>\r\n                  <div>\r\n                    <h4 class=\"text-blueGray-500\">Dynamic components</h4>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"pt-20 pb-48\">\r\n    <div class=\"container mx-auto px-4\">\r\n      <div class=\"flex flex-wrap justify-center text-center mb-24\">\r\n        <div class=\"w-full lg:w-6/12 px-4\">\r\n          <h2 class=\"text-4xl font-semibold\">Here are our heroes</h2>\r\n          <p class=\"text-lg leading-relaxed m-4 text-blueGray-500\">\r\n            According to the National Oceanic and Atmospheric Administration,\r\n            Ted, Scambos, NSIDClead scentist, puts the potentially record\r\n            maximum.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"flex flex-wrap\">\r\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\r\n          <div class=\"px-6\">\r\n            <img\r\n              alt=\"...\"\r\n              src=\"assets/img/team-1-800x800.jpg\"\r\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\r\n            />\r\n            <div class=\"pt-6 text-center\">\r\n              <h5 class=\"text-xl font-bold\">Ryan Tompson</h5>\r\n              <p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\">\r\n                Web Developer\r\n              </p>\r\n              <div class=\"mt-6\">\r\n                <button\r\n                  class=\"bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-twitter\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-facebook-f\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-dribbble\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\r\n          <div class=\"px-6\">\r\n            <img\r\n              alt=\"...\"\r\n              src=\"assets/img/team-2-800x800.jpg\"\r\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\r\n            />\r\n            <div class=\"pt-6 text-center\">\r\n              <h5 class=\"text-xl font-bold\">Romina Hadid</h5>\r\n              <p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\">\r\n                Marketing Specialist\r\n              </p>\r\n              <div class=\"mt-6\">\r\n                <button\r\n                  class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-google\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-facebook-f\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\r\n          <div class=\"px-6\">\r\n            <img\r\n              alt=\"...\"\r\n              src=\"assets/img/team-3-800x800.jpg\"\r\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\r\n            />\r\n            <div class=\"pt-6 text-center\">\r\n              <h5 class=\"text-xl font-bold\">Alexa Smith</h5>\r\n              <p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\">\r\n                UI/UX Designer\r\n              </p>\r\n              <div class=\"mt-6\">\r\n                <button\r\n                  class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-google\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-twitter\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-instagram\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\r\n          <div class=\"px-6\">\r\n            <img\r\n              alt=\"...\"\r\n              src=\"assets/img/team-4-470x470.png\"\r\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\r\n            />\r\n            <div class=\"pt-6 text-center\">\r\n              <h5 class=\"text-xl font-bold\">Jenna Kardi</h5>\r\n              <p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\">\r\n                Founder and CEO\r\n              </p>\r\n              <div class=\"mt-6\">\r\n                <button\r\n                  class=\"bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-dribbble\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-google\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-twitter\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-instagram\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"pb-20 relative block bg-blueGray-800\">\r\n    <div\r\n      class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\"\r\n      style=\"transform: translateZ(0)\"\r\n    >\r\n      <svg\r\n        class=\"absolute bottom-0 overflow-hidden\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        preserveAspectRatio=\"none\"\r\n        version=\"1.1\"\r\n        viewBox=\"0 0 2560 100\"\r\n        x=\"0\"\r\n        y=\"0\"\r\n      >\r\n        <polygon\r\n          class=\"text-blueGray-800 fill-current\"\r\n          points=\"2560 0 2560 100 0 100\"\r\n        ></polygon>\r\n      </svg>\r\n    </div>\r\n\r\n    <div class=\"container mx-auto px-4 lg:pt-24 lg:pb-64\">\r\n      <div class=\"flex flex-wrap text-center justify-center\">\r\n        <div class=\"w-full lg:w-6/12 px-4\">\r\n          <h2 class=\"text-4xl font-semibold text-white\">Build something</h2>\r\n          <p class=\"text-lg leading-relaxed mt-4 mb-4 text-blueGray-400\">\r\n            Put the potentially record low maximum sea ice extent tihs year down\r\n            to low ice. According to the National Oceanic and Atmospheric\r\n            Administration, Ted, Scambos.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"flex flex-wrap mt-12 justify-center\">\r\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\r\n          <div\r\n            class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\r\n          >\r\n            <i class=\"fas fa-medal text-xl\"></i>\r\n          </div>\r\n          <h6 class=\"text-xl mt-5 font-semibold text-white\">\r\n            Excelent Services\r\n          </h6>\r\n          <p class=\"mt-2 mb-4 text-blueGray-400\">\r\n            Some quick example text to build on the card title and make up the\r\n            bulk of the card's content.\r\n          </p>\r\n        </div>\r\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\r\n          <div\r\n            class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\r\n          >\r\n            <i class=\"fas fa-poll text-xl\"></i>\r\n          </div>\r\n          <h5 class=\"text-xl mt-5 font-semibold text-white\">\r\n            Grow your market\r\n          </h5>\r\n          <p class=\"mt-2 mb-4 text-blueGray-400\">\r\n            Some quick example text to build on the card title and make up the\r\n            bulk of the card's content.\r\n          </p>\r\n        </div>\r\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\r\n          <div\r\n            class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\r\n          >\r\n            <i class=\"fas fa-lightbulb text-xl\"></i>\r\n          </div>\r\n          <h5 class=\"text-xl mt-5 font-semibold text-white\">Launch time</h5>\r\n          <p class=\"mt-2 mb-4 text-blueGray-400\">\r\n            Some quick example text to build on the card title and make up the\r\n            bulk of the card's content.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"relative block py-24 lg:pt-0 bg-blueGray-800\">\r\n    <div class=\"container mx-auto px-4\">\r\n      <div class=\"flex flex-wrap justify-center lg:-mt-64 -mt-48\">\r\n        <div class=\"w-full lg:w-6/12 px-4\">\r\n          <div\r\n            class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200\"\r\n          >\r\n            <div class=\"flex-auto p-5 lg:p-10\">\r\n              <h4 class=\"text-2xl font-semibold\">Want to work with us?</h4>\r\n              <p class=\"leading-relaxed mt-1 mb-4 text-blueGray-500\">\r\n                Complete this form and we will get back to you in 24 hours.\r\n              </p>\r\n              <div class=\"relative w-full mb-3 mt-8\">\r\n                <label\r\n                  class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                  htmlFor=\"full-name\"\r\n                >\r\n                  Full Name\r\n                </label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n                  placeholder=\"Full Name\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"relative w-full mb-3\">\r\n                <label\r\n                  class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                  htmlFor=\"email\"\r\n                >\r\n                  Email\r\n                </label>\r\n                <input\r\n                  type=\"email\"\r\n                  class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n                  placeholder=\"Email\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"relative w-full mb-3\">\r\n                <label\r\n                  class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                  htmlFor=\"message\"\r\n                >\r\n                  Message\r\n                </label>\r\n                <textarea\r\n                  rows=\"4\"\r\n                  cols=\"80\"\r\n                  class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full\"\r\n                  placeholder=\"Type a message...\"\r\n                ></textarea>\r\n              </div>\r\n              <div class=\"text-center mt-6\">\r\n                <button\r\n                  class=\"bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\r\n                  type=\"button\"\r\n                >\r\n                  Send Message\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "AiJS":
/*!************************************************!*\
  !*** ./src/app/views/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index.component.html */ "W8yq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let IndexComponent = class IndexComponent {
    constructor() { }
    ngOnInit() { }
};
IndexComponent.ctorParameters = () => [];
IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-index",
        template: _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], IndexComponent);



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
    production: false,
    apiUrl: "http://icoiff-backend.herokuapp.com",
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

/***/ "CzbP":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer/footer.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"relative bg-blueGray-200 pt-8 pb-6\">\r\n  <div\r\n    class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\"\r\n    style=\"transform: translateZ(0)\"\r\n  >\r\n    <svg\r\n      class=\"absolute bottom-0 overflow-hidden\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      preserveAspectRatio=\"none\"\r\n      version=\"1.1\"\r\n      viewBox=\"0 0 2560 100\"\r\n      x=\"0\"\r\n      y=\"0\"\r\n    >\r\n      <polygon\r\n        class=\"text-blueGray-200 fill-current\"\r\n        points=\"2560 0 2560 100 0 100\"\r\n      ></polygon>\r\n    </svg>\r\n  </div>\r\n  <div class=\"container mx-auto px-4\">\r\n    <div class=\"flex flex-wrap text-center lg:text-left\">\r\n      <div class=\"w-full lg:w-6/12 px-4\">\r\n        <h4 class=\"text-3xl font-semibold\">Let's keep in touch!</h4>\r\n        <h5 class=\"text-lg mt-0 mb-2 text-blueGray-600\">\r\n          Find us on any of these platforms, we respond 1-2 business days.\r\n        </h5>\r\n        <div class=\"mt-6 lg:mb-0 mb-6\">\r\n          <button\r\n            class=\"bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\r\n            type=\"button\"\r\n          >\r\n            <i class=\"fab fa-twitter\"></i>\r\n          </button>\r\n          <button\r\n            class=\"bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\r\n            type=\"button\"\r\n          >\r\n            <i class=\"fab fa-facebook-square\"></i>\r\n          </button>\r\n          <button\r\n            class=\"bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\r\n            type=\"button\"\r\n          >\r\n            <i class=\"fab fa-dribbble\"></i>\r\n          </button>\r\n          <button\r\n            class=\"bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\r\n            type=\"button\"\r\n          >\r\n            <i class=\"fab fa-github\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"w-full lg:w-6/12 px-4\">\r\n        <div class=\"flex flex-wrap items-top mb-6\">\r\n          <div class=\"w-full lg:w-4/12 px-4 ml-auto\">\r\n            <span\r\n              class=\"block uppercase text-blueGray-500 text-sm font-semibold mb-2\"\r\n            >\r\n              Useful Links\r\n            </span>\r\n            <ul class=\"list-unstyled\">\r\n              <li>\r\n                <a\r\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://www.creative-tim.com/presentation?ref=na-footer\"\r\n                >\r\n                  About Us\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://blog.creative-tim.com?ref=na-footer\"\r\n                >\r\n                  Blog\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://www.github.com/creativetimofficial?ref=na-footer\"\r\n                >\r\n                  Github\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://www.creative-tim.com/bootstrap-themes/free?ref=na-footer\"\r\n                >\r\n                  Free Products\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"w-full lg:w-4/12 px-4\">\r\n            <span\r\n              class=\"block uppercase text-blueGray-500 text-sm font-semibold mb-2\"\r\n            >\r\n              Other Resources\r\n            </span>\r\n            <ul class=\"list-unstyled\">\r\n              <li>\r\n                <a\r\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://github.com/creativetimofficial/notus-angular/blob/main/LICENSE.md?ref=creativetim\"\r\n                >\r\n                  MIT License\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://creative-tim.com/terms?ref=na-footer\"\r\n                >\r\n                  Terms & Conditions\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://creative-tim.com/privacy?ref=na-footer\"\r\n                >\r\n                  Privacy Policy\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://creative-tim.com/contact-us?ref=na-footer\"\r\n                >\r\n                  Contact Us\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr class=\"my-6 border-blueGray-300\" />\r\n    <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\r\n      <div class=\"w-full md:w-4/12 px-4 mx-auto text-center\">\r\n        <div class=\"text-sm text-blueGray-500 font-semibold py-1\">\r\n          Copyright © {{ date }} Notus Angular by\r\n          <a\r\n            href=\"https://www.creative-tim.com?ref=na-footer\"\r\n            class=\"text-blueGray-500 hover:text-blueGray-800\"\r\n          >\r\n            Creative Tim\r\n          </a>\r\n          .\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "DLfO":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer-small/footer-small.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer\r\n  class=\"pb-6\"\r\n  [ngClass]=\"absolute ? 'absolute w-full bottom-0 bg-blueGray-800' : 'relative'\"\r\n>\r\n  <div class=\"container mx-auto px-4\">\r\n    <hr class=\"mb-6 border-b-1 border-blueGray-600\" />\r\n    <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\r\n      <div class=\"w-full md:w-4/12 px-4\">\r\n        <div\r\n          class=\"text-sm text-white font-semibold py-1 text-center md:text-left\"\r\n        >\r\n          Copyright © {{ date }}\r\n          <a\r\n            href=\"https://www.creative-tim.com?ref=na-footer-small\"\r\n            class=\"text-white hover:text-blueGray-300 text-sm font-semibold py-1\"\r\n          >\r\n            Creative Tim\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"w-full md:w-8/12 px-4\">\r\n        <ul class=\"flex flex-wrap list-none md:justify-end justify-center\">\r\n          <li>\r\n            <a\r\n              href=\"https://www.creative-tim.com?ref=na-footer-small\"\r\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              Creative Tim\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a\r\n              href=\"https://www.creative-tim.com/presentation?ref=na-footer-small\"\r\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              About Us\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a\r\n              href=\"http://blog.creative-tim.com?ref=na-footer-small\"\r\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              Blog\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a\r\n              href=\"https://github.com/creativetimofficial/notus-angular/blob/main/LICENSE.md?ref=creativetim\"\r\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              MIT License\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "EbUq":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer-admin/footer-admin.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"block py-4\">\r\n  <div class=\"container mx-auto px-4\">\r\n    <hr class=\"mb-4 border-b-1 border-blueGray-200\" />\r\n    <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\r\n      <div class=\"w-full md:w-4/12 px-4\">\r\n        <div\r\n          class=\"text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left\"\r\n        >\r\n          Copyright © {{ date }}\r\n          <a\r\n            href=\"https://www.creative-tim.com?ref=na-footer-admin\"\r\n            class=\"text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1\"\r\n          >\r\n            Creative Tim\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"w-full md:w-8/12 px-4\">\r\n        <ul class=\"flex flex-wrap list-none md:justify-end justify-center\">\r\n          <li>\r\n            <a\r\n              href=\"https://www.creative-tim.com?ref=na-footer-admin\"\r\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              Creative Tim\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a\r\n              href=\"https://www.creative-tim.com/presentation?ref=na-footer-admin\"\r\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              About Us\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a\r\n              href=\"http://blog.creative-tim.com?ref=na-footer-admin\"\r\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              Blog\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a\r\n              href=\"https://github.com/creativetimofficial/notus-angular/blob/main/LICENSE.md?ref=creativetim\"\r\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              MIT License\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "H3xT":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/user-dropdown/user-dropdown.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\r\n  class=\"text-blueGray-500 block\"\r\n  href=\"#pablo\"\r\n  (click)=\"toggleDropdown($event)\"\r\n  #btnDropdownRef\r\n>\r\n  <div class=\"items-center flex\">\r\n    <span\r\n      class=\"\r\n        w-12\r\n        h-12\r\n        text-sm text-white\r\n        bg-blueGray-200\r\n        inline-flex\r\n        items-center\r\n        justify-center\r\n        rounded-full\r\n      \"\r\n    >\r\n      <img\r\n        alt=\"...\"\r\n        class=\"w-full rounded-full align-middle border-none shadow-lg\"\r\n        src=\"assets/img/team-1-800x800.jpg\"\r\n      />\r\n    </span>\r\n  </div>\r\n</a>\r\n<div class=\"min-w-48 z-50\" #popoverDropdownRef>\r\n  <div\r\n    class=\"\r\n      bg-white\r\n      text-base\r\n      z-50\r\n      float-left\r\n      py-2\r\n      list-none\r\n      text-left\r\n      rounded\r\n      shadow-lg\r\n      mt-1\r\n      min-w-48\r\n    \"\r\n    [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\r\n  >\r\n    <a\r\n      [routerLink]=\"['/admin/profile']\"\r\n      routerLinkActive\r\n      class=\"\r\n        text-sm\r\n        py-2\r\n        px-4\r\n        font-normal\r\n        block\r\n        w-full\r\n        whitespace-nowrap\r\n        bg-transparent\r\n        text-blueGray-700\r\n        cursor-pointer\r\n      \"\r\n    >\r\n    <i\r\n    class=\"fas fa-id-badge mr-2 text-sm\"\r\n    ></i>\r\n    Profile\r\n    </a>\r\n    <div class=\"h-0 my-2 border border-solid border-blueGray-100\"></div>\r\n    <a\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 cursor-pointer\"\r\n      (click)= \"logout()\"\r\n    >\r\n      <i\r\n        class=\"fas fa-sign-out-alt mr-2 text-sm\"\r\n      ></i>\r\n      Logout\r\n    </a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "HEly":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-stats/card-stats.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg\"\r\n>\r\n  <div class=\"flex-auto p-4\">\r\n    <div class=\"flex flex-wrap\">\r\n      <div class=\"relative w-full pr-4 max-w-full flex-grow flex-1\">\r\n        <h5 class=\"text-blueGray-400 uppercase font-bold text-xs\">\r\n          {{ statSubtitle }}\r\n        </h5>\r\n        <span class=\"font-semibold text-xl text-blueGray-700\">\r\n          {{ statTitle }}\r\n        </span>\r\n      </div>\r\n      <div class=\"relative w-auto pl-4 flex-initial\">\r\n        <div\r\n          class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full\"\r\n          [ngClass]=\"[statIconColor]\"\r\n        >\r\n          <i [ngClass]=\"statIconName\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <p class=\"text-sm text-blueGray-400 mt-4\">\r\n      <span class=\"mr-2\" [ngClass]=\"statPercentColor\">\r\n        <i\r\n          [ngClass]=\"\r\n            statArrow === 'up' ? 'fas fa-arrow-up' : 'fas fa-arrow-down'\r\n          \"\r\n        ></i>\r\n        {{ statPercent }}%\r\n      </span>\r\n      <span class=\"whitespace-nowrap\">{{ statDescripiron }}</span>\r\n    </p>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "J87Q":
/*!*********************************************************************!*\
  !*** ./src/app/components/cards/card-stats/card-stats.component.ts ***!
  \*********************************************************************/
/*! exports provided: CardStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardStatsComponent", function() { return CardStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-stats.component.html */ "HEly");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardStatsComponent = class CardStatsComponent {
    constructor() {
        this._statSubtitle = "Traffic";
        this._statTitle = "350,897";
        this._statArrow = "up";
        this._statPercent = "3.48";
        this._statPercentColor = "text-emerald-500";
        this._statDescripiron = "Since last month";
        this._statIconName = "far fa-chart-bar";
        this._statIconColor = "bg-red-500";
    }
    get statSubtitle() {
        return this._statSubtitle;
    }
    set statSubtitle(statSubtitle) {
        this._statSubtitle = statSubtitle === undefined ? "Traffic" : statSubtitle;
    }
    get statTitle() {
        return this._statTitle;
    }
    set statTitle(statTitle) {
        this._statTitle = statTitle === undefined ? "350,897" : statTitle;
    }
    // The value must match one of up or down
    get statArrow() {
        return this._statArrow;
    }
    set statArrow(statArrow) {
        this._statArrow =
            statArrow !== "down" && statArrow !== "up" ? "up" : statArrow;
    }
    get statPercent() {
        return this._statPercent;
    }
    set statPercent(statPercent) {
        this._statPercent = statPercent === undefined ? "3.48" : statPercent;
    }
    // can be any of the text color utilities
    // from tailwindcss
    get statPercentColor() {
        return this._statPercentColor;
    }
    set statPercentColor(statPercentColor) {
        this._statPercentColor =
            statPercentColor === undefined ? "text-emerald-500" : statPercentColor;
    }
    get statDescripiron() {
        return this._statDescripiron;
    }
    set statDescripiron(statDescripiron) {
        this._statDescripiron =
            statDescripiron === undefined ? "Since last month" : statDescripiron;
    }
    get statIconName() {
        return this._statIconName;
    }
    set statIconName(statIconName) {
        this._statIconName =
            statIconName === undefined ? "far fa-chart-bar" : statIconName;
    }
    // can be any of the background color utilities
    // from tailwindcss
    get statIconColor() {
        return this._statIconColor;
    }
    set statIconColor(statIconColor) {
        this._statIconColor =
            statIconColor === undefined ? "bg-red-500" : statIconColor;
    }
    ngOnInit() { }
};
CardStatsComponent.ctorParameters = () => [];
CardStatsComponent.propDecorators = {
    statSubtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statPercent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statPercentColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statDescripiron: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statIconName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statIconColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
CardStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-stats",
        template: _raw_loader_card_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardStatsComponent);



/***/ }),

/***/ "J8Ne":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dropdowns/index-dropdown/index-dropdown.component.ts ***!
  \*********************************************************************************/
/*! exports provided: IndexDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexDropdownComponent", function() { return IndexDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_index_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index-dropdown.component.html */ "e8es");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core */ "EjV/");




let IndexDropdownComponent = class IndexDropdownComponent {
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
IndexDropdownComponent.propDecorators = {
    btnDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["btnDropdownRef", { static: false },] }],
    popoverDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["popoverDropdownRef", { static: false },] }]
};
IndexDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-index-dropdown",
        template: _raw_loader_index_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], IndexDropdownComponent);



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

/***/ "K8FB":
/*!****************************************************************!*\
  !*** ./src/app/views/create-saloon/create-saloon.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateSaloonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSaloonComponent", function() { return CreateSaloonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_saloon_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-saloon.component.html */ "W6Sf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_manage_saloons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/manage-saloons.service */ "40b+");







let CreateSaloonComponent = class CreateSaloonComponent {
    constructor(route, router, manageSaloons, authService) {
        this.route = route;
        this.router = router;
        this.manageSaloons = manageSaloons;
        this.authService = authService;
        this.success = null;
        this.profileImagePath = '';
        this.saloonImagePath = '';
        this.uploaded = '';
        this.access_token = '';
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
        this.route.queryParams.subscribe(params => {
            this.access_token = params.access_token;
            if (!this.access_token) {
                this.router.navigate(['/error-404']);
            }
            this.authService.verifyToken(this.access_token).subscribe((response) => {
                if (response.error) {
                    this.router.navigate(['/error-404']);
                }
            });
        });
    }
    onProfileImageChanged(event) {
        this.selectedFile = event.target.files[0];
        const uploadData = new FormData();
        uploadData.append('profile-photo', this.selectedFile, this.selectedFile.name);
        this.manageSaloons.sendImage(uploadData).subscribe((response) => {
            console.log(response);
            this.profileImagePath = response.url;
            this.uploaded = 'image uploaded';
        });
    }
    onSaloonImageChanged(event) {
        this.selectedFile = event.target.files[0];
        const uploadData = new FormData();
        uploadData.append('profile-photo', this.selectedFile, this.selectedFile.name + this.selectedFile.type);
        this.manageSaloons.sendImage(uploadData).subscribe((response) => {
            console.log(response);
            this.saloonImagePath = response.url;
        });
    }
    onSubmit() {
        const manager = {
            first_name: this.profileForm.value.first_name,
            last_name: this.profileForm.value.last_name,
            email: this.profileForm.value.email,
            password: this.profileForm.value.password,
            role: 'Manager',
            salon: ''
        };
        const salon = {
            name: this.profileForm.value.name,
            image: this.saloonImagePath
        };
        this.manageSaloons.createSaloon(salon).subscribe((response) => {
            manager.salon = response === null || response === void 0 ? void 0 : response._id;
            this.manageSaloons.createManager(manager).subscribe((response) => {
                if (response.user) {
                    this.success = "Your account has been created you will be redirected shortly";
                }
            });
        });
    }
    ngOnInit() {
    }
};
CreateSaloonComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_manage_saloons_service__WEBPACK_IMPORTED_MODULE_6__["ManageSaloonsService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
CreateSaloonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-create-saloon',
        template: _raw_loader_create_saloon_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CreateSaloonComponent);



/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\r\n  class=\"md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6\"\r\n>\r\n  <div\r\n    class=\"md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto\"\r\n  >\r\n    <!-- Toggler -->\r\n    <button\r\n      class=\"cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent\"\r\n      type=\"button\"\r\n      (click)=\"toggleCollapseShow('bg-white m-2 py-3 px-6')\"\r\n    >\r\n      <i class=\"fas fa-bars\"></i>\r\n    </button>\r\n    <!-- Brand -->\r\n    <a\r\n      [routerLink]=\"['/']\"\r\n      class=\"md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0\"\r\n    >\r\n      <span class=\"block sm:hidden\"> ICoiff </span>\r\n      <span class=\"hidden sm:block\"> ICoiff </span>\r\n    </a>\r\n    <!-- User -->\r\n    <ul class=\"md:hidden items-center flex flex-wrap list-none\">\r\n      <li class=\"inline-block relative\">\r\n        <app-notification-dropdown class=\"block\"></app-notification-dropdown>\r\n      </li>\r\n      <li class=\"inline-block relative\">\r\n        <app-user-dropdown class=\"block\"></app-user-dropdown>\r\n      </li>\r\n    </ul>\r\n    <!-- Collapse -->\r\n    <div\r\n      class=\"md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded\"\r\n      [ngClass]=\"collapseShow\"\r\n    >\r\n      <!-- Collapse header -->\r\n      <div\r\n        class=\"md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200\"\r\n      >\r\n        <div class=\"flex flex-wrap\">\r\n          <div class=\"w-6/12\">\r\n            <a\r\n              [routerLink]=\"['/']\"\r\n              class=\"md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0\"\r\n            >\r\n              ICoiff\r\n            </a>\r\n          </div>\r\n          <div class=\"w-6/12 flex justify-end\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent\"\r\n              (click)=\"toggleCollapseShow('hidden')\"\r\n            >\r\n              <i class=\"fas fa-times\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Form -->\r\n      <form class=\"mt-6 mb-4 md:hidden\">\r\n        <div class=\"mb-3 pt-0\">\r\n          <input\r\n            type=\"text\"\r\n            placeholder=\"Search\"\r\n            class=\"border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal\"\r\n          />\r\n        </div>\r\n      </form>\r\n\r\n      <!-- Divider -->\r\n      <hr class=\"my-4 md:min-w-full\" />\r\n      <!-- Heading -->\r\n      <h6\r\n        class=\"md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline\"\r\n      >\r\n        Back Office\r\n      </h6>\r\n      <!-- Navigation -->\r\n\r\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none\">\r\n        <li class=\"items-center\">\r\n          <a\r\n            [routerLink]=\"['/admin/clients']\"\r\n            class=\"text-xs uppercase py-3 font-bold block\"\r\n            routerLinkActive\r\n            #adminDashboard=\"routerLinkActive\"\r\n            [ngClass]=\"\r\n              adminDashboard.isActive\r\n                ? 'text-red-600 hover:text-red-700'\r\n                : 'text-blueGray-700 hover:text-blueGray-500'\r\n            \"\r\n          >\r\n            <i\r\n              class=\"fas fa-user-circle mr-2 text-sm\"\r\n              [ngClass]=\"\r\n                adminDashboard.isActive ? 'opacity-75' : 'text-blueGray-300'\r\n              \"\r\n            ></i>\r\n            Manage Clients\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"items-center\">\r\n          <a\r\n            [routerLink]=\"['/admin/saloons']\"\r\n            class=\"text-xs uppercase py-3 font-bold block\"\r\n            routerLinkActive\r\n            #adminSettings=\"routerLinkActive\"\r\n            [ngClass]=\"\r\n              adminSettings.isActive\r\n                ? 'text-red-600 hover:text-red-700'\r\n                : 'text-blueGray-700 hover:text-blueGray-500'\r\n            \"\r\n          >\r\n            <i\r\n              class=\"fas fa-bed mr-2 text-sm\"\r\n              [ngClass]=\"\r\n                adminSettings.isActive ? 'opacity-75' : 'text-blueGray-300'\r\n              \"\r\n            ></i>\r\n            Manage Saloons\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n");

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

/***/ "L/HX":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-page-visits/card-page-visits.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\r\n>\r\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\r\n        <h3 class=\"font-semibold text-base text-blueGray-700\">Page visits</h3>\r\n      </div>\r\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1 text-right\">\r\n        <button\r\n          class=\"bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\r\n          type=\"button\"\r\n        >\r\n          See all\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"block w-full overflow-x-auto\">\r\n    <!-- Projects table -->\r\n    <table class=\"items-center w-full bg-transparent border-collapse\">\r\n      <thead>\r\n        <tr>\r\n          <th\r\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n          >\r\n            Page name\r\n          </th>\r\n          <th\r\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n          >\r\n            Visitors\r\n          </th>\r\n          <th\r\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n          >\r\n            Unique users\r\n          </th>\r\n          <th\r\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n          >\r\n            Bounce rate\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\r\n          >\r\n            /argon/\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            4,569\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            340\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <i class=\"fas fa-arrow-up text-emerald-500 mr-4\"></i>\r\n            46,53%\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\r\n          >\r\n            /argon/index.html\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            3,985\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            319\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <i class=\"fas fa-arrow-down text-orange-500 mr-4\"></i>\r\n            46,53%\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\r\n          >\r\n            /argon/charts.html\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            3,513\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            294\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <i class=\"fas fa-arrow-down text-orange-500 mr-4\"></i>\r\n            36,49%\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\r\n          >\r\n            /argon/tables.html\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            2,050\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            147\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <i class=\"fas fa-arrow-up text-emerald-500 mr-4\"></i>\r\n            50,87%\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\r\n          >\r\n            /argon/profile.html\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            1,795\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            190\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <i class=\"fas fa-arrow-down text-red-500 mr-4\"></i>\r\n            46,53%\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n");

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

/***/ "LUN3":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mx-auto px-4 h-full\">\r\n  <div class=\"flex content-center items-center justify-center h-full\">\r\n    <div class=\"w-full lg:w-4/12 px-4\">\r\n      <div\r\n        class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0\"\r\n      >\r\n        <div class=\"rounded-t mb-0 px-6 py-6\">\r\n          <div class=\"text-center mb-3\">\r\n            <h6 class=\"text-blueGray-500 text-sm font-bold\">Sign in</h6>\r\n          </div>\r\n          <hr class=\"mt-6 border-b-1 border-blueGray-300\" />\r\n        </div>\r\n        <div class=\"flex-auto px-4 lg:px-10 py-10 pt-0\">\r\n          <form [formGroup]=\"signinForm\" (ngSubmit)=\"loginUser()\">\r\n            <div class=\"relative w-full mb-3\">\r\n              <label\r\n                class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                htmlFor=\"grid-password\"\r\n              >\r\n                Email\r\n              </label>\r\n              <input\r\n                type=\"email\"\r\n                class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n                formControlName=\"email\" placeholder=\"Enter email\" required\r\n              />\r\n            </div>\r\n\r\n            <div class=\"relative w-full mb-3\">\r\n              <label\r\n                class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                htmlFor=\"grid-password\"\r\n              >\r\n                Password\r\n              </label>\r\n              <input\r\n                type=\"password\"\r\n                class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n                formControlName=\"password\" placeholder=\"Password\" required\r\n              />\r\n            </div>\r\n            <div>\r\n              <label class=\"inline-flex items-center cursor-pointer\">\r\n                <input\r\n                  id=\"customCheckLogin\"\r\n                  type=\"checkbox\"\r\n                  class=\"form-checkbox border-0 text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150 rounded\"\r\n                />\r\n                <span class=\"ml-2 text-sm font-semibold text-blueGray-600\">\r\n                  Remember me\r\n                </span>\r\n              </label>\r\n            </div>\r\n\r\n            <div class=\"text-center mt-6\">\r\n              <button\r\n                class=\"bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150\"\r\n                type=\"submit\"\r\n              >\r\n                Sign In\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"flex flex-wrap mt-6 relative\">\r\n        <div class=\"w-1/2\">\r\n          <a href=\"javascript:void(0)\" class=\"text-blueGray-200\">\r\n            <small>Forgot password?</small>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "P6R5":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\r\n  class=\"\r\n    bg-emerald-500\r\n    text-white\r\n    active:bg-emerald-600\r\n    font-bold\r\n    uppercase\r\n    text-sm\r\n    px-6\r\n    py-3\r\n    rounded\r\n    shadow\r\n    hover:shadow-lg\r\n    outline-none\r\n    focus:outline-none\r\n    mr-1\r\n    mb-1\r\n    ease-linear\r\n    transition-all\r\n    duration-150\r\n  \"\r\n  type=\"button\"\r\n  (click)=\"toggleModal()\"\r\n>\r\n  <i class=\"fas fa-plus\"></i> Add Saloon\r\n</button>\r\n<div\r\n  *ngIf=\"showModal\"\r\n  class=\"\r\n    border-1 border-blueGray-500 border-solid\r\n    overflow-x-hidden overflow-y-auto\r\n    fixed\r\n    inset-0\r\n    z-50\r\n    px-16\r\n    justify-center\r\n    items-center\r\n    flex\r\n  \"\r\n>\r\n  <div class=\"relative w-auto mx-auto max-w-xl bg-red-100 \">\r\n    <!--content-->\r\n    <div\r\n      class=\"\r\n        border-2 border-blueGray-500 border-solid\r\n        rounded-lg\r\n        shadow-lg\r\n        relative\r\n        flex flex-col\r\n        w-full\r\n        bg-white\r\n        outline-none\r\n        focus:outline-none\r\n      \"\r\n    >\r\n      <!--header-->\r\n      <div\r\n        class=\"\r\n          flex\r\n          items-center\r\n          justify-between\r\n          p-5\r\n          border-b border-solid border-blueGray-200\r\n          rounded-t\r\n        \"\r\n      >\r\n        <h3 class=\"text-sm font-semibold\">Add Manager to Saloon</h3>\r\n        <button\r\n          class=\"\r\n            p-1\r\n            ml-auto\r\n            bg-transparent\r\n            border-0\r\n            text-black\r\n            opacity-5\r\n            float-right\r\n            text-3xl\r\n            leading-none\r\n            font-semibold\r\n            outline-none\r\n            focus:outline-none\r\n          \"\r\n          (click)=\"toggleModal()\"\r\n        >\r\n          <span\r\n            class=\"\r\n              bg-transparent\r\n              text-black\r\n              opacity-5\r\n              h-6\r\n              w-6\r\n              text-2xl\r\n              block\r\n              outline-none\r\n              focus:outline-none\r\n            \"\r\n          >\r\n            ×\r\n          </span>\r\n        </button>\r\n      </div>\r\n      <!--body-->\r\n      <div class=\"relative px-6 py-6 sm:px-16 flex-auto\">\r\n        <div>\r\n          <label for=\"email\" class=\"block text-sm font-medium text-gray-700\"\r\n            >Email</label\r\n          >\r\n          <div class=\"mt-1\">\r\n            <input\r\n              type=\"text\"\r\n              name=\"email\"\r\n              id=\"email\"\r\n              class=\"\r\n                shadow-sm\r\n                focus:ring-indigo-500 focus:border-indigo-500\r\n                block\r\n                w-full\r\n                sm:text-sm\r\n                border-gray-300\r\n                rounded-md\r\n              \"\r\n              [(ngModel)]=\"email\"\r\n              placeholder=\"you@example.com\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--footer-->\r\n      <div\r\n        class=\"\r\n          flex\r\n          items-center\r\n          justify-end\r\n          p-6\r\n          border-t border-solid border-blueGray-200\r\n          rounded-b\r\n        \"\r\n      >\r\n        <button\r\n          class=\"\r\n          bg-red-500\r\n          text-white\r\n          active:bg-red-600\r\n          font-bold\r\n          uppercase\r\n          text-sm\r\n          px-6\r\n          py-2\r\n          rounded\r\n          shadow\r\n          hover:shadow-lg\r\n          outline-none\r\n          focus:outline-none\r\n          mr-1\r\n          mb-1\r\n          ease-linear\r\n          transition-all\r\n          duration-150\r\n          \"\r\n          type=\"button\"\r\n          (click)=\"toggleModal()\"\r\n        >\r\n          Close\r\n        </button>\r\n        <button\r\n          class=\"\r\n            bg-emerald-500\r\n            text-white\r\n            active:bg-emerald-600\r\n            font-bold\r\n            uppercase\r\n            text-sm\r\n            px-6\r\n            py-2\r\n            rounded\r\n            shadow\r\n            hover:shadow-lg\r\n            outline-none\r\n            focus:outline-none\r\n            mr-1\r\n            mb-1\r\n            ease-linear\r\n            transition-all\r\n            duration-150\r\n          \"\r\n          type=\"button\"\r\n          (click)=\"sendMail()\"\r\n        >\r\n          Save Changes\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"showModal\" class=\"border-1 border-blueGray-500 border-solid opacity-25 fixed inset-0 z-40 bg-black\"></div>\r\n`\r\n");

/***/ }),

/***/ "Pibi":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/admin-navbar/admin-navbar.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Navbar -->\r\n<nav\r\n  class=\"absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4\"\r\n>\r\n  <div\r\n    class=\"w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4\"\r\n  >\r\n    <!-- Brand -->\r\n    <a\r\n      class=\"text-white text-sm uppercase hidden lg:inline-block font-semibold\"\r\n      href=\"#pablo\"\r\n      >Dashboard</a\r\n    >\r\n    <!-- Form -->\r\n    <form\r\n      class=\"md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3\"\r\n    >\r\n      <div class=\"relative flex w-full flex-wrap items-stretch\">\r\n        <span\r\n          class=\"z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3\"\r\n          ><i class=\"fas fa-search\"></i\r\n        ></span>\r\n        <input\r\n          type=\"text\"\r\n          placeholder=\"Search here...\"\r\n          class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10\"\r\n        />\r\n      </div>\r\n    </form>\r\n    <!-- User -->\r\n    <ul class=\"flex-col md:flex-row list-none items-center hidden md:flex\">\r\n      <app-user-dropdown class=\"block\"></app-user-dropdown>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n");

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

/***/ "RMzx":
/*!****************************************************!*\
  !*** ./src/app/views/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./landing.component.html */ "AN84");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let LandingComponent = class LandingComponent {
    constructor() { }
    ngOnInit() { }
};
LandingComponent.ctorParameters = () => [];
LandingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-landing",
        template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], LandingComponent);



/***/ }),

/***/ "RORk":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/index-navbar/index-navbar.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\r\n  class=\"top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow\"\r\n>\r\n  <div\r\n    class=\"container px-4 mx-auto flex flex-wrap items-center justify-between\"\r\n  >\r\n    <div\r\n      class=\"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start\"\r\n    >\r\n      <a\r\n        [routerLink]=\"['/']\"\r\n        class=\"text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase\"\r\n        href=\"#pablo\"\r\n      >\r\n        Notus Angular\r\n      </a>\r\n      <button\r\n        class=\"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none\"\r\n        type=\"button\"\r\n        (click)=\"setNavbarOpen()\"\r\n      >\r\n        <i class=\"fas fa-bars\"></i>\r\n      </button>\r\n    </div>\r\n    <div\r\n      class=\"lg:flex flex-grow items-center\"\r\n      [ngClass]=\"{ hidden: !navbarOpen, block: navbarOpen }\"\r\n      id=\"example-navbar-warning\"\r\n    >\r\n      <ul class=\"flex flex-col lg:flex-row list-none mr-auto\">\r\n        <li class=\"flex items-center\">\r\n          <a\r\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\r\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus?ref=na-index-navbar\"\r\n          >\r\n            <i\r\n              class=\"text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2\"\r\n            ></i>\r\n            Docs\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"flex flex-col lg:flex-row list-none lg:ml-auto\">\r\n        <li class=\"flex items-center\">\r\n          <app-index-dropdown class=\"block\"></app-index-dropdown>\r\n        </li>\r\n        <li class=\"flex items-center\">\r\n          <a\r\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\r\n            href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-angular%2F\"\r\n            target=\"_blank\"\r\n          >\r\n            <i class=\"text-blueGray-400 fab fa-facebook text-lg leading-lg\"></i>\r\n            <span class=\"lg:hidden inline-block ml-2\">Share</span>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"flex items-center\">\r\n          <a\r\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\r\n            href=\"https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-angular%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20Angular%20UI%20Kit%20and%20Admin.%20Let%20Notus%20Angular%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.\"\r\n            target=\"_blank\"\r\n          >\r\n            <i class=\"text-blueGray-400 fab fa-twitter text-lg leading-lg\"></i>\r\n            <span class=\"lg:hidden inline-block ml-2\">Tweet</span>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"flex items-center\">\r\n          <a\r\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\r\n            href=\"https://github.com/creativetimofficial/notus-angular?ref=na-index-navbar\"\r\n            target=\"_blank\"\r\n          >\r\n            <i class=\"text-blueGray-400 fab fa-github text-lg leading-lg\"></i>\r\n            <span class=\"lg:hidden inline-block ml-2\">Star</span>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"flex items-center\">\r\n          <button\r\n            class=\"bg-red-600 text-white active:bg-red-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150\"\r\n            type=\"button\"\r\n          >\r\n            <i class=\"fas fa-arrow-alt-circle-down\"></i> Download\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Skd6":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/dropdowns/notification-dropdown/notification-dropdown.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NotificationDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDropdownComponent", function() { return NotificationDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notification_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notification-dropdown.component.html */ "XqAX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core */ "EjV/");




let NotificationDropdownComponent = class NotificationDropdownComponent {
    constructor() {
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
};
NotificationDropdownComponent.propDecorators = {
    btnDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["btnDropdownRef", { static: false },] }],
    popoverDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["popoverDropdownRef", { static: false },] }]
};
NotificationDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-notification-dropdown",
        template: _raw_loader_notification_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], NotificationDropdownComponent);



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

/***/ "TmC4":
/*!*****************************************************************************!*\
  !*** ./src/app/components/cards/card-bar-chart/card-bar-chart.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CardBarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBarChartComponent", function() { return CardBarChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_bar_chart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-bar-chart.component.html */ "/GnJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);




let CardBarChartComponent = class CardBarChartComponent {
    constructor() { }
    ngOnInit() { }
    ngAfterViewInit() {
        let config = {
            type: "bar",
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                ],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: "#ed64a6",
                        borderColor: "#ed64a6",
                        data: [30, 78, 56, 34, 100, 45, 13],
                        fill: false,
                        barThickness: 8,
                    },
                    {
                        label: new Date().getFullYear() - 1,
                        fill: false,
                        backgroundColor: "#4c51bf",
                        borderColor: "#4c51bf",
                        data: [27, 68, 86, 74, 10, 4, 87],
                        barThickness: 8,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: "Orders Chart",
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                },
                hover: {
                    mode: "nearest",
                    intersect: true,
                },
                legend: {
                    labels: {
                        fontColor: "rgba(0,0,0,.4)",
                    },
                    align: "end",
                    position: "bottom",
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                            scaleLabel: {
                                display: true,
                                labelString: "Month",
                            },
                            gridLines: {
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.3)",
                                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Value",
                            },
                            gridLines: {
                                borderDash: [2],
                                drawBorder: false,
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.2)",
                                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        let ctx = document.getElementById("bar-chart");
        ctx = ctx.getContext("2d");
        new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(ctx, config);
    }
};
CardBarChartComponent.ctorParameters = () => [];
CardBarChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-bar-chart",
        template: _raw_loader_card_bar_chart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardBarChartComponent);



/***/ }),

/***/ "UIMn":
/*!***************************************************************************!*\
  !*** ./src/app/components/footers/footer-admin/footer-admin.component.ts ***!
  \***************************************************************************/
/*! exports provided: FooterAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterAdminComponent", function() { return FooterAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer-admin.component.html */ "EbUq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let FooterAdminComponent = class FooterAdminComponent {
    constructor() {
        this.date = new Date().getFullYear();
    }
    ngOnInit() { }
};
FooterAdminComponent.ctorParameters = () => [];
FooterAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-footer-admin",
        template: _raw_loader_footer_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], FooterAdminComponent);



/***/ }),

/***/ "UY35":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dropdowns/table-dropdown/table-dropdown.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TableDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDropdownComponent", function() { return TableDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_table_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./table-dropdown.component.html */ "rOy2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core */ "EjV/");




let TableDropdownComponent = class TableDropdownComponent {
    constructor() {
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
};
TableDropdownComponent.propDecorators = {
    btnDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["btnDropdownRef", { static: false },] }],
    popoverDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["popoverDropdownRef", { static: false },] }]
};
TableDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-table-dropdown",
        template: _raw_loader_table_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TableDropdownComponent);



/***/ }),

/***/ "UhXh":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/headers/header-stats/header-stats.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Header -->\r\n<div class=\"relative bg-red-600 md:pt-32 pb-32 pt-12\">\r\n</div>\r\n");

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

/***/ "W6Sf":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/create-saloon/create-saloon.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mx-auto \" *ngIf=\"success\">\r\n  <h1 class=\"text-4xl py-16 px-48\">\r\n    {{success}}\r\n  </h1>\r\n</div>\r\n<div *ngIf=\"!success\">\r\n<form class=\"space-y-8 divide-y divide-teal-600 p-8\" [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"space-y-8 divide-y divide-teal-600 sm:space-y-5\">\r\n    <div class=\"flex flex-col gap-6 divide-y divide-teal-600\">\r\n      <div>\r\n        <h3 class=\"text-lg leading-6 font-medium text-gray-900\">\r\n          Manager Profile\r\n        </h3>\r\n        <p class=\"mt-1 max-w-xl text-sm text-gray-500\">\r\n          This information will be displayed publicly aso be creful what you\r\n          share.\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"mt-6 sm:mt-5 space-y-6 sm:space-y-5\">\r\n        <div\r\n          class=\"\r\n            sm:grid\r\n            sm:grid-cols-3\r\n            sm:gap-4\r\n            sm:items-start\r\n            sm:border-t\r\n            sm:border-gray-200\r\n            sm:pt-5\r\n          \"\r\n        >\r\n          <label\r\n            for=\"first_name\"\r\n            class=\"block text-md font-medium text-gray-700 sm:mt-px sm:pt-2\"\r\n          >\r\n            First Name\r\n          </label>\r\n          <div class=\"mt-1 sm:mt-0 sm:col-span-2\">\r\n            <div class=\"max-w-4xl flex rounded-md shadow-sm\">\r\n              <input\r\n                required\r\n                type=\"text\"\r\n                name=\"first_name\"\r\n                id=\"first_name\"\r\n                autocomplete=\"given-name\"\r\n                class=\"\r\n                  flex-1\r\n                  block\r\n                  w-full\r\n                  focus:ring-indigo-500 focus:border-indigo-500\r\n                  min-w-0\r\n                  rounded-none rounded-r-md\r\n                  sm:text-sm\r\n                  border-gray-300\r\n                \"\r\n                formControlName=\"first_name\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <label\r\n            for=\"last_name\"\r\n            class=\"block text-md font-medium text-gray-700 sm:mt-px sm:pt-2\"\r\n          >\r\n            Last Name\r\n          </label>\r\n          <div class=\"mt-1 sm:mt-0 sm:col-span-2\">\r\n            <div class=\"max-w-4xl flex rounded-md shadow-sm\">\r\n              <input\r\n                type=\"text\"\r\n                name=\"last_name\"\r\n                id=\"last_name\"\r\n                autocomplete=\"family-name\"\r\n                class=\"\r\n                  flex-1\r\n                  block\r\n                  w-full\r\n                  focus:ring-indigo-500 focus:border-indigo-500\r\n                  min-w-0\r\n                  rounded-none rounded-r-md\r\n                  sm:text-sm\r\n                  border-gray-300\r\n                \"\r\n                formControlName=\"last_name\"\r\n\r\n              />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div\r\n          class=\"\r\n            sm:grid\r\n            sm:grid-cols-3\r\n            sm:gap-4\r\n            sm:items-start\r\n            sm:border-t\r\n            sm:border-gray-200\r\n            sm:pt-5\r\n          \"\r\n        >\r\n          <label\r\n            for=\"email\"\r\n            class=\"block text-lg font-medium text-gray-700 sm:mt-px sm:pt-2\"\r\n          >\r\n            Email\r\n          </label>\r\n          <div class=\"mt-1 sm:mt-0 sm:col-span-2\">\r\n            <div class=\"max-w-4xl flex rounded-md shadow-sm\">\r\n              <input\r\n                type=\"email\"\r\n                name=\"email\"\r\n                id=\"email\"\r\n                autocomplete=\"email\"\r\n                class=\"\r\n                  flex-1\r\n                  block\r\n                  w-full\r\n                  focus:ring-indigo-500 focus:border-indigo-500\r\n                  min-w-0\r\n                  rounded-none rounded-r-md\r\n                  sm:text-lg\r\n                  border-gray-300\r\n                \"\r\n                formControlName=\"email\"\r\n              />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div\r\n          class=\"\r\n            sm:grid\r\n            sm:grid-cols-3\r\n            sm:gap-4\r\n            sm:items-start\r\n            sm:border-t\r\n            sm:border-gray-200\r\n            sm:pt-5\r\n          \"\r\n        >\r\n          <label\r\n            for=\"password\"\r\n            class=\"block text-lg font-medium text-gray-700 sm:mt-px sm:pt-2\"\r\n          >\r\n            Password\r\n          </label>\r\n          <div class=\"mt-1 sm:mt-0 sm:col-span-2\">\r\n            <div class=\"max-w-4xl flex rounded-md shadow-sm\">\r\n              <input\r\n                type=\"password\"\r\n                name=\"password\"\r\n                id=\"password\"\r\n                autocomplete=\"password\"\r\n                class=\"\r\n                  flex-1\r\n                  block\r\n                  w-full\r\n                  focus:ring-indigo-500 focus:border-indigo-500\r\n                  min-w-0\r\n                  rounded-none rounded-r-md\r\n                  sm:text-lg\r\n                  border-gray-300\r\n                \"\r\n                formControlName=\"password\"\r\n\r\n              />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div\r\n          class=\"\r\n            sm:grid\r\n            sm:grid-cols-3\r\n            sm:gap-4\r\n            sm:items-center\r\n            sm:border-t\r\n            sm:border-gray-200\r\n            sm:pt-5\r\n            mb-6\r\n          \"\r\n        >\r\n          <label for=\"photo\" class=\"block text-lg font-medium text-gray-700\">\r\n            Photo\r\n          </label>\r\n          <div class=\"mt-1 sm:mt-0 sm:col-span-2\">\r\n            <div class=\"flex items-center\">\r\n              <span class=\"h-12 w-12 rounded-full overflow-hidden bg-gray-100\">\r\n                <img *ngIf=\"profileImagePath\" [src] = \"profileImagePath\" alt=\"\" srcset=\"\">\r\n                <svg \r\n                  *ngIf=\"!profileImagePath\"\r\n                  class=\"h-full w-full text-gray-300\"\r\n                  fill=\"currentColor\"\r\n                  viewBox=\"0 0 24 24\"\r\n                >\r\n                  <path\r\n                    d=\"M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z\"\r\n                  />\r\n                </svg>\r\n              </span>\r\n              <input\r\n                style=\"display: none\"\r\n                type=\"file\"\r\n                (change)=\"onProfileImageChanged($event)\"\r\n                #fileInput\r\n              />\r\n              <button\r\n                type=\"button\"\r\n                class=\"\r\n                  ml-5\r\n                  bg-white\r\n                  py-2\r\n                  px-3\r\n                  border border-gray-300\r\n                  rounded-md\r\n                  shadow-sm\r\n                  text-sm\r\n                  leading-4\r\n                  font-medium\r\n                  text-gray-700\r\n                  hover:bg-gray-50\r\n                  focus:outline-none\r\n                  focus:ring-2\r\n                  focus:ring-offset-2\r\n                  focus:ring-indigo-500\r\n                \"\r\n                (click)=\"fileInput.click()\"\r\n              >\r\n                Change\r\n              </button> {{uploaded}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"pt-8 space-y-8 sm:pt-10 sm:space-y-8 divide-y divide-teal-600\">\r\n      <div>\r\n        <h3 class=\"text-lg leading-6 font-medium text-gray-900\">\r\n          Saloon Information\r\n        </h3>\r\n        <p class=\"mt-1 max-w-4xl text-sm text-gray-500 mb-6\">\r\n          Please Provide us with all the information about your saloon\r\n        </p>\r\n      </div>\r\n      <div class=\"flex flex-col gap-6\">\r\n        <div\r\n          class=\"\r\n            pt-6\r\n            sm:grid\r\n            sm:grid-cols-3\r\n            sm:gap-4\r\n            sm:items-start\r\n            sm:border-t\r\n            sm:border-gray-200\r\n            sm:pt-5\r\n          \"\r\n        >\r\n          <label\r\n            for=\"saloon-name\"\r\n            class=\"block text-lg font-medium text-gray-700 sm:mt-px sm:pt-2\"\r\n          >\r\n            Saloon name\r\n          </label>\r\n          <div class=\"mt-1 sm:mt-0 sm:col-span-2\">\r\n            <input\r\n              type=\"text\"\r\n              name=\"saloon-name\"\r\n              id=\"saloon-name\"\r\n              class=\"\r\n                max-w-lg\r\n                block\r\n                w-full\r\n                shadow-sm\r\n                focus:ring-indigo-500 focus:border-indigo-500\r\n                sm:max-w-xs sm:text-sm\r\n                border-gray-300\r\n                rounded-md\r\n              \"\r\n              formControlName=\"name\"\r\n            />\r\n          </div>\r\n        </div>\r\n\r\n        <div\r\n          class=\"\r\n            sm:grid\r\n            sm:grid-cols-3\r\n            sm:gap-4\r\n            sm:items-start\r\n            sm:border-t\r\n            sm:border-gray-200\r\n            sm:pt-5\r\n          \"\r\n        >\r\n          <label\r\n            for=\"cover_photo\"\r\n            class=\"block text-lg font-medium text-gray-700 sm:mt-px sm:pt-2\"\r\n          >\r\n            Saloon photo\r\n          </label>\r\n          <div class=\"mt-1 sm:mt-0 sm:col-span-2\">\r\n            <div\r\n              class=\"\r\n                max-w-lg\r\n                flex\r\n                justify-center\r\n                px-6\r\n                pt-5\r\n                pb-6\r\n                border-2 border-gray-300 border-dashed\r\n                rounded-md\r\n              \"\r\n            >\r\n              <div class=\"space-y-1 text-center\">\r\n                <svg\r\n                  class=\"mx-auto h-12 w-12 text-gray-400\"\r\n                  stroke=\"currentColor\"\r\n                  fill=\"none\"\r\n                  viewBox=\"0 0 48 48\"\r\n                  aria-hidden=\"true\"\r\n                >\r\n                  <path\r\n                    d=\"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02\"\r\n                    stroke-width=\"2\"\r\n                    stroke-linecap=\"round\"\r\n                    stroke-linejoin=\"round\"\r\n                  />\r\n                </svg>\r\n                <div class=\"flex text-lg text-gray-600\">\r\n                  <label\r\n                    for=\"file-upload\"\r\n                    class=\"\r\n                      relative\r\n                      cursor-pointer\r\n                      bg-white\r\n                      rounded-md\r\n                      font-medium\r\n                      text-indigo-600\r\n                      hover:text-indigo-500\r\n                      focus-within:outline-none\r\n                      focus-within:ring-2\r\n                      focus-within:ring-offset-2\r\n                      focus-within:ring-indigo-500\r\n                    \"\r\n                  >\r\n                    <span>Upload a file</span>\r\n                    <input\r\n                      id=\"file-upload\"\r\n                      name=\"file-upload\"\r\n                      type=\"file\"\r\n                      class=\"sr-only\"\r\n                      (change)=\"onSaloonImageChanged($event)\"\r\n                    />\r\n                  </label> \r\n                  <p class=\"pl-1\">or drag and drop</p>\r\n                </div>\r\n                <p class=\"text-xs text-gray-500\">PNG, JPG, GIF up to 10MB</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"pt-6\">\r\n    <div class=\"flex justify-end\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"\r\n          bg-red-500\r\n          py-2\r\n          px-4\r\n          border border-gray-300\r\n          rounded-md\r\n          shadow-sm\r\n          text-sm\r\n          font-medium\r\n          text-white\r\n          hover:bg-gray-500\r\n          focus:outline-none\r\n          focus:ring-2\r\n          focus:ring-offset-2\r\n          focus:ring-indigo-500\r\n        \"\r\n      >\r\n        Reset\r\n      </button>\r\n      <button\r\n        type=\"submit\"\r\n        class=\"\r\n          ml-3\r\n          inline-flex\r\n          justify-center\r\n          py-2\r\n          px-4\r\n          border border-transparent\r\n          shadow-sm\r\n          text-sm\r\n          font-medium\r\n          rounded-md\r\n          text-white\r\n          bg-emerald-500\r\n          hover:bg-emerald-800\r\n          focus:outline-none\r\n          focus:ring-2\r\n          focus:ring-offset-2\r\n          focus:ring-indigo-500\r\n        \"\r\n      >\r\n        Save\r\n      </button>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n</div>");

/***/ }),

/***/ "W8yq":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/index/index.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-index-navbar></app-index-navbar>\r\n<section class=\"header relative pt-16 items-center flex h-screen max-h-860-px\">\r\n  <div class=\"container mx-auto items-center flex flex-wrap\">\r\n    <div class=\"w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4\">\r\n      <div class=\"pt-32 sm:pt-0\">\r\n        <h2 class=\"font-semibold text-4xl text-blueGray-600\">\r\n          Notus Angular - A beautiful extension for Tailwind CSS.\r\n        </h2>\r\n        <p class=\"mt-4 text-lg leading-relaxed text-blueGray-500\">\r\n          Notus Angular is Free and Open Source. It does not change any of the\r\n          CSS from\r\n          <a\r\n            href=\"https://tailwindcss.com/?ref=creativetim\"\r\n            class=\"text-blueGray-600\"\r\n            target=\"_blank\"\r\n          >\r\n            Tailwind CSS.\r\n          </a>\r\n          It features multiple HTML elements and it comes with dynamic\r\n          components for ReactJS, Vue and Angular.\r\n        </p>\r\n        <div class=\"mt-12\">\r\n          <a\r\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus?ref=na-index-page\"\r\n            target=\"_blank\"\r\n            class=\"get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-600 active:bg-red-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\"\r\n          >\r\n            Get started\r\n          </a>\r\n          <a\r\n            href=\"https://github.com/creativetimofficial/notus-angular?ref=creativetim\"\r\n            class=\"github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\"\r\n            target=\"_blank\"\r\n          >\r\n            Github Star\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <img\r\n    class=\"absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px\"\r\n    src=\"assets/img/pattern_angular.png\"\r\n    alt=\"...\"\r\n  />\r\n</section>\r\n\r\n<section class=\"mt-48 md:mt-40 pb-40 relative bg-blueGray-100\">\r\n  <div\r\n    class=\"-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20\"\r\n    style=\"transform: translateZ(0)\"\r\n  >\r\n    <svg\r\n      class=\"absolute bottom-0 overflow-hidden\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      preserveAspectRatio=\"none\"\r\n      version=\"1.1\"\r\n      viewBox=\"0 0 2560 100\"\r\n      x=\"0\"\r\n      y=\"0\"\r\n    >\r\n      <polygon\r\n        class=\"text-blueGray-100 fill-current\"\r\n        points=\"2560 0 2560 100 0 100\"\r\n      ></polygon>\r\n    </svg>\r\n  </div>\r\n  <div class=\"container mx-auto\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div\r\n        class=\"w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32\"\r\n      >\r\n        <div\r\n          class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-600\"\r\n        >\r\n          <img\r\n            alt=\"...\"\r\n            src=\"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80\"\r\n            class=\"w-full align-middle rounded-t-lg\"\r\n          />\r\n          <blockquote class=\"relative p-8 mb-4\">\r\n            <svg\r\n              preserveAspectRatio=\"none\"\r\n              xmlns=\"http://www.w3.org/2000/svg\"\r\n              viewBox=\"0 0 583 95\"\r\n              class=\"absolute left-0 w-full block h-95-px -top-94-px\"\r\n            >\r\n              <polygon\r\n                points=\"-30,95 583,95 583,65\"\r\n                class=\"text-red-600 fill-current\"\r\n              ></polygon>\r\n            </svg>\r\n            <h4 class=\"text-xl font-bold text-white\">\r\n              Great for your awesome project\r\n            </h4>\r\n            <p class=\"text-md font-light mt-2 text-white\">\r\n              Putting together a page has never been easier than matching\r\n              together pre-made components. From landing pages presentation to\r\n              login areas, you can easily customise and built your pages.\r\n            </p>\r\n          </blockquote>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"w-full md:w-6/12 px-4\">\r\n        <div class=\"flex flex-wrap\">\r\n          <div class=\"w-full md:w-6/12 px-4\">\r\n            <div class=\"relative flex flex-col mt-4\">\r\n              <div class=\"px-4 py-5 flex-auto\">\r\n                <div\r\n                  class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\"\r\n                >\r\n                  <i class=\"fas fa-sitemap\"></i>\r\n                </div>\r\n                <h6 class=\"text-xl mb-1 font-semibold\">CSS Components</h6>\r\n                <p class=\"mb-4 text-blueGray-500\">\r\n                  Notus Angular comes with a huge number of Fully Coded CSS\r\n                  components.\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"relative flex flex-col min-w-0\">\r\n              <div class=\"px-4 py-5 flex-auto\">\r\n                <div\r\n                  class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\"\r\n                >\r\n                  <i class=\"fas fa-drafting-compass\"></i>\r\n                </div>\r\n                <h6 class=\"text-xl mb-1 font-semibold\">\r\n                  JavaScript Components\r\n                </h6>\r\n                <p class=\"mb-4 text-blueGray-500\">\r\n                  We also feature many dynamic components for React, NextJS, Vue\r\n                  and Angular.\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"w-full md:w-6/12 px-4\">\r\n            <div class=\"relative flex flex-col min-w-0 mt-4\">\r\n              <div class=\"px-4 py-5 flex-auto\">\r\n                <div\r\n                  class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\"\r\n                >\r\n                  <i class=\"fas fa-newspaper\"></i>\r\n                </div>\r\n                <h6 class=\"text-xl mb-1 font-semibold\">Pages</h6>\r\n                <p class=\"mb-4 text-blueGray-500\">\r\n                  This extension also comes with 3 sample pages. They are fully\r\n                  coded so you can start working instantly.\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"relative flex flex-col min-w-0\">\r\n              <div class=\"px-4 py-5 flex-auto\">\r\n                <div\r\n                  class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\"\r\n                >\r\n                  <i class=\"fas fa-file-alt\"></i>\r\n                </div>\r\n                <h6 class=\"text-xl mb-1 font-semibold\">Documentation</h6>\r\n                <p class=\"mb-4 text-blueGray-500\">\r\n                  Built by developers for developers. You will love how easy is\r\n                  to to work with Notus Angular.\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container mx-auto overflow-hidden pb-20\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48\">\r\n        <div\r\n          class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\"\r\n        >\r\n          <i class=\"fas fa-sitemap text-xl\"></i>\r\n        </div>\r\n        <h3 class=\"text-3xl mb-2 font-semibold leading-normal\">\r\n          CSS Components\r\n        </h3>\r\n        <p\r\n          class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600\"\r\n        >\r\n          Every element that you need in a product comes built in as a\r\n          component. All components fit perfectly with each other and can have\r\n          different colours.\r\n        </p>\r\n        <div class=\"block pb-6\">\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Buttons\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Inputs\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Labels\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Menus\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Navbars\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Pagination\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Progressbars\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Typography\r\n          </span>\r\n        </div>\r\n        <a\r\n          href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=na-index-page\"\r\n          target=\"_blank\"\r\n          class=\"font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150\"\r\n        >\r\n          View All\r\n          <i class=\"fa fa-angle-double-right ml-1 leading-relaxed\"></i>\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"w-full md:w-5/12 px-4 mr-auto ml-auto mt-32\">\r\n        <div class=\"relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0\">\r\n          <img\r\n            alt=\"...\"\r\n            src=\"assets/img/component-btn.png\"\r\n            class=\"w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3\"\r\n          />\r\n          <img\r\n            alt=\"...\"\r\n            src=\"assets/img/component-profile-card.png\"\r\n            class=\"w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px\"\r\n          />\r\n          <img\r\n            alt=\"...\"\r\n            src=\"assets/img/component-info-card.png\"\r\n            class=\"w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2\"\r\n          />\r\n          <img\r\n            alt=\"...\"\r\n            src=\"assets/img/component-info-2.png\"\r\n            class=\"w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px\"\r\n          />\r\n          <img\r\n            alt=\"...\"\r\n            src=\"assets/img/component-menu.png\"\r\n            class=\"w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px\"\r\n          />\r\n          <img\r\n            alt=\"...\"\r\n            src=\"assets/img/component-btn-pink.png\"\r\n            class=\"w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"flex flex-wrap items-center pt-32\">\r\n      <div class=\"w-full md:w-6/12 px-4 mr-auto ml-auto mt-32\">\r\n        <div class=\"justify-center flex flex-wrap relative\">\r\n          <div class=\"my-4 w-full lg:w-6/12 px-4\">\r\n            <a\r\n              href=\"https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index\"\r\n              target=\"_blank\"\r\n            >\r\n              <div class=\"bg-red-600 shadow-lg rounded-lg text-center p-8\">\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\r\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg\"\r\n                />\r\n                <p class=\"text-lg text-white mt-4 font-semibold\">Svelte</p>\r\n              </div>\r\n            </a>\r\n            <a\r\n              href=\"https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index\"\r\n              target=\"_blank\"\r\n            >\r\n              <div\r\n                class=\"bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8\"\r\n              >\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\r\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg\"\r\n                />\r\n                <p class=\"text-lg text-white mt-4 font-semibold\">ReactJS</p>\r\n              </div>\r\n            </a>\r\n            <a\r\n              href=\"https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index\"\r\n              target=\"_blank\"\r\n            >\r\n              <div\r\n                class=\"bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8\"\r\n              >\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\r\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg\"\r\n                />\r\n                <p class=\"text-lg text-white mt-4 font-semibold\">NextJS</p>\r\n              </div>\r\n            </a>\r\n          </div>\r\n          <div class=\"my-4 w-full lg:w-6/12 px-4 lg:mt-16\">\r\n            <a\r\n              href=\"https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index\"\r\n              target=\"_blank\"\r\n            >\r\n              <div class=\"bg-yellow-500 shadow-lg rounded-lg text-center p-8\">\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\r\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png\"\r\n                />\r\n                <p class=\"text-lg text-white mt-4 font-semibold\">JavaScript</p>\r\n              </div>\r\n            </a>\r\n            <a\r\n              href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index\"\r\n              target=\"_blank\"\r\n            >\r\n              <div class=\"bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8\">\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\r\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg\"\r\n                />\r\n                <p class=\"text-lg text-white mt-4 font-semibold\">Angular</p>\r\n              </div>\r\n            </a>\r\n            <a\r\n              href=\"https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index\"\r\n              target=\"_blank\"\r\n            >\r\n              <div\r\n                class=\"bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8\"\r\n              >\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\r\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg\"\r\n                />\r\n                <p class=\"text-lg text-white mt-4 font-semibold\">Vue.js</p>\r\n              </div>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48\">\r\n        <div\r\n          class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\"\r\n        >\r\n          <i class=\"fas fa-drafting-compass text-xl\"></i>\r\n        </div>\r\n        <h3 class=\"text-3xl mb-2 font-semibold leading-normal\">\r\n          Javascript Components\r\n        </h3>\r\n        <p\r\n          class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600\"\r\n        >\r\n          In order to create a great User Experience some components require\r\n          JavaScript. In this way you can manipulate the elements on the page\r\n          and give more options to your users.\r\n        </p>\r\n        <p\r\n          class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600\"\r\n        >\r\n          We created a set of Components that are dynamic and come to help you.\r\n        </p>\r\n        <div class=\"block pb-6\">\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Alerts\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Dropdowns\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Menus\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Modals\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Navbars\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Popovers\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Tabs\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Tooltips\r\n          </span>\r\n        </div>\r\n        <a\r\n          href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=na-index-page\"\r\n          target=\"_blank\"\r\n          class=\"font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150\"\r\n        >\r\n          View all\r\n          <i class=\"fa fa-angle-double-right ml-1 leading-relaxed\"></i>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container mx-auto px-4 pb-32 pt-48\">\r\n    <div class=\"items-center flex flex-wrap\">\r\n      <div class=\"w-full md:w-5/12 ml-auto px-12 md:px-4\">\r\n        <div class=\"md:pr-12\">\r\n          <div\r\n            class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\"\r\n          >\r\n            <i class=\"fas fa-file-alt text-xl\"></i>\r\n          </div>\r\n          <h3 class=\"text-3xl font-semibold\">Complex Documentation</h3>\r\n          <p class=\"mt-4 text-lg leading-relaxed text-blueGray-500\">\r\n            This extension comes a lot of fully coded examples that help you get\r\n            started faster. You can adjust the colors and also the programming\r\n            language. You can change the text and images and you're good to go.\r\n          </p>\r\n          <ul class=\"list-none mt-6\">\r\n            <li class=\"py-2\">\r\n              <div class=\"flex items-center\">\r\n                <div>\r\n                  <span\r\n                    class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3\"\r\n                  >\r\n                    <i class=\"fas fa-fingerprint\"></i>\r\n                  </span>\r\n                </div>\r\n                <div>\r\n                  <h4 class=\"text-blueGray-500\">\r\n                    Built by Developers for Developers\r\n                  </h4>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"py-2\">\r\n              <div class=\"flex items-center\">\r\n                <div>\r\n                  <span\r\n                    class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3\"\r\n                  >\r\n                    <i class=\"fab fa-html5\"></i>\r\n                  </span>\r\n                </div>\r\n                <div>\r\n                  <h4 class=\"text-blueGray-500\">\r\n                    Carefully crafted code for Components\r\n                  </h4>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"py-2\">\r\n              <div class=\"flex items-center\">\r\n                <div>\r\n                  <span\r\n                    class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3\"\r\n                  >\r\n                    <i class=\"far fa-paper-plane\"></i>\r\n                  </span>\r\n                </div>\r\n                <div>\r\n                  <h4 class=\"text-blueGray-500\">\r\n                    Dynamic Javascript Components\r\n                  </h4>\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0\">\r\n        <img\r\n          alt=\"...\"\r\n          class=\"max-w-full rounded-lg shadow-xl\"\r\n          style=\"\r\n            transform: scale(1) perspective(1040px) rotateY(-11deg)\r\n              rotateX(2deg) rotate(2deg);\r\n          \"\r\n          src=\"assets/img/documentation.png\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"justify-center text-center flex flex-wrap mt-24\">\r\n    <div class=\"w-full md:w-6/12 px-12 md:px-4\">\r\n      <h2 class=\"font-semibold text-4xl\">Beautiful Example Pages</h2>\r\n      <p class=\"text-lg leading-relaxed mt-4 mb-4 text-blueGray-500\">\r\n        Notus Angular is a completly new product built using our past experience\r\n        in web templates. Take the examples we made for you and start playing\r\n        with them.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"block relative z-1 bg-blueGray-600\">\r\n  <div class=\"container mx-auto\">\r\n    <div class=\"justify-center flex flex-wrap\">\r\n      <div class=\"w-full lg:w-12/12 px-4 -mt-24\">\r\n        <div class=\"flex flex-wrap\">\r\n          <div class=\"w-full lg:w-4/12 px-4\">\r\n            <h5 class=\"text-xl font-semibold pb-4 text-center\">Login Page</h5>\r\n            <a [routerLink]=\"['/auth/login']\">\r\n              <div\r\n                class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\"\r\n              >\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"align-middle border-none max-w-full h-auto rounded-lg\"\r\n                  src=\"assets/img/login.jpg\"\r\n                />\r\n              </div>\r\n            </a>\r\n          </div>\r\n\r\n          <div class=\"w-full lg:w-4/12 px-4\">\r\n            <h5 class=\"text-xl font-semibold pb-4 text-center\">Profile Page</h5>\r\n            <a [routerLink]=\"['/profile']\">\r\n              <div\r\n                class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\"\r\n              >\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"align-middle border-none max-w-full h-auto rounded-lg\"\r\n                  src=\"assets/img/profile.jpg\"\r\n                />\r\n              </div>\r\n            </a>\r\n          </div>\r\n\r\n          <div class=\"w-full lg:w-4/12 px-4\">\r\n            <h5 class=\"text-xl font-semibold pb-4 text-center\">Landing Page</h5>\r\n            <a [routerLink]=\"['/landing']\">\r\n              <div\r\n                class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\"\r\n              >\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"align-middle border-none max-w-full h-auto rounded-lg\"\r\n                  src=\"assets/img/landing.jpg\"\r\n                />\r\n              </div>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"py-20 bg-blueGray-600 overflow-hidden\">\r\n  <div class=\"container mx-auto pb-64\">\r\n    <div class=\"flex flex-wrap justify-center\">\r\n      <div class=\"w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64\">\r\n        <div\r\n          class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\"\r\n        >\r\n          <i class=\"fas fa-code-branch text-xl\"></i>\r\n        </div>\r\n        <h3 class=\"text-3xl mb-2 font-semibold leading-normal text-white\">\r\n          Open Source\r\n        </h3>\r\n        <p\r\n          class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400\"\r\n        >\r\n          Since\r\n          <a\r\n            href=\"https://tailwindcss.com/?ref=creativetim\"\r\n            class=\"text-blueGray-300\"\r\n            target=\"_blank\"\r\n          >\r\n            Tailwind CSS\r\n          </a>\r\n          is an open source project we wanted to continue this movement too. You\r\n          can give this version a try to feel the design and also test the\r\n          quality of the code!\r\n        </p>\r\n        <p\r\n          class=\"text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400\"\r\n        >\r\n          Get it free on Github and please help us spread the news with a Star!\r\n        </p>\r\n        <a\r\n          href=\"https://github.com/creativetimofficial/notus-angular?ref=creativetim\"\r\n          target=\"_blank\"\r\n          class=\"github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\"\r\n        >\r\n          Github Star\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative\">\r\n        <i\r\n          class=\"fab fa-github text-blueGray-700 text-55 absolute -top-150-px -right-100 left-auto opacity-80\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"pb-16 bg-blueGray-200 relative pt-32\">\r\n  <div\r\n    class=\"-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20\"\r\n    style=\"transform: translateZ(0)\"\r\n  >\r\n    <svg\r\n      class=\"absolute bottom-0 overflow-hidden\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      preserveAspectRatio=\"none\"\r\n      version=\"1.1\"\r\n      viewBox=\"0 0 2560 100\"\r\n      x=\"0\"\r\n      y=\"0\"\r\n    >\r\n      <polygon\r\n        class=\"text-blueGray-200 fill-current\"\r\n        points=\"2560 0 2560 100 0 100\"\r\n      ></polygon>\r\n    </svg>\r\n  </div>\r\n\r\n  <div class=\"container mx-auto\">\r\n    <div\r\n      class=\"flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10\"\r\n    >\r\n      <div class=\"w-full text-center lg:w-8/12\">\r\n        <p class=\"text-4xl text-center\">\r\n          <span role=\"img\" aria-label=\"love\"> 😍 </span>\r\n        </p>\r\n        <h3 class=\"font-semibold text-3xl\">Do you love this Starter Kit?</h3>\r\n        <p class=\"text-blueGray-500 text-lg leading-relaxed mt-4 mb-4\">\r\n          Cause if you do, it can be yours now. Hit the buttons below to\r\n          navigate to get the Free version for your next project. Build a new\r\n          web app or give an old project a new look!\r\n        </p>\r\n        <div class=\"sm:block flex flex-col mt-10\">\r\n          <a\r\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus?ref=na-index-page\"\r\n            target=\"_blank\"\r\n            class=\"get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-red-600 active:bg-red-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\"\r\n          >\r\n            Get started\r\n          </a>\r\n          <a\r\n            href=\"https://github.com/creativetimofficial/notus-angular?ref=creativetim\"\r\n            target=\"_blank\"\r\n            class=\"github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\"\r\n          >\r\n            <i class=\"fab fa-github text-lg mr-1\"></i>\r\n            <span>Help With a Star</span>\r\n          </a>\r\n        </div>\r\n        <div class=\"text-center mt-16\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<app-footer></app-footer>\r\n");

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

/***/ "XqAX":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/notification-dropdown/notification-dropdown.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\r\n  class=\"text-blueGray-500 block py-1 px-3\"\r\n  href=\"#pablo\"\r\n  (click)=\"toggleDropdown($event)\"\r\n  #btnDropdownRef\r\n>\r\n  <i class=\"fas fa-bell\"></i>\r\n</a>\r\n<div class=\"min-w-48 z-50\" #popoverDropdownRef>\r\n  <div\r\n    class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48\"\r\n    [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\r\n  >\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Action\r\n    </a>\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Another action\r\n    </a>\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Something else here\r\n    </a>\r\n    <div class=\"h-0 my-2 border border-solid border-blueGray-100\"></div>\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Seprated link\r\n    </a>\r\n  </div>\r\n</div>\r\n");

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

/***/ "YpXG":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-social-traffic/card-social-traffic.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\r\n>\r\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\r\n        <h3 class=\"font-semibold text-base text-blueGray-700\">\r\n          Social traffic\r\n        </h3>\r\n      </div>\r\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1 text-right\">\r\n        <button\r\n          class=\"bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\r\n          type=\"button\"\r\n        >\r\n          See all\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"block w-full overflow-x-auto\">\r\n    <!-- Projects table -->\r\n    <table class=\"items-center w-full bg-transparent border-collapse\">\r\n      <thead class=\"thead-light\">\r\n        <tr>\r\n          <th\r\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n          >\r\n            Referral\r\n          </th>\r\n          <th\r\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n          >\r\n            Visitors\r\n          </th>\r\n          <th\r\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px\"\r\n          ></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\r\n          >\r\n            Facebook\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            1,480\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex items-center\">\r\n              <span class=\"mr-2\">60%</span>\r\n              <div class=\"relative w-full\">\r\n                <div\r\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-red-200\"\r\n                >\r\n                  <div\r\n                    style=\"width: 60%\"\r\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500\"\r\n                  ></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\r\n          >\r\n            Facebook\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            5,480\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex items-center\">\r\n              <span class=\"mr-2\">70%</span>\r\n              <div class=\"relative w-full\">\r\n                <div\r\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-emerald-200\"\r\n                >\r\n                  <div\r\n                    style=\"width: 70%\"\r\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500\"\r\n                  ></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\r\n          >\r\n            Google\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            4,807\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex items-center\">\r\n              <span class=\"mr-2\">80%</span>\r\n              <div class=\"relative w-full\">\r\n                <div\r\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-purple-200\"\r\n                >\r\n                  <div\r\n                    style=\"width: 80%\"\r\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500\"\r\n                  ></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\r\n          >\r\n            Instagram\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            3,678\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex items-center\">\r\n              <span class=\"mr-2\">75%</span>\r\n              <div class=\"relative w-full\">\r\n                <div\r\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-lightBlue-200\"\r\n                >\r\n                  <div\r\n                    style=\"width: 75%\"\r\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500\"\r\n                  ></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\r\n          >\r\n            twitter\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            2,645\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex items-center\">\r\n              <span class=\"mr-2\">30%</span>\r\n              <div class=\"relative w-full\">\r\n                <div\r\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-orange-200\"\r\n                >\r\n                  <div\r\n                    style=\"width: 30%\"\r\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500\"\r\n                  ></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n");

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
/* harmony import */ var _views_index_index_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/index/index.component */ "AiJS");
/* harmony import */ var _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/landing/landing.component */ "RMzx");
/* harmony import */ var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/profile/profile.component */ "wF9P");
/* harmony import */ var _components_navbars_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/navbars/admin-navbar/admin-navbar.component */ "Xodl");
/* harmony import */ var _components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/navbars/auth-navbar/auth-navbar.component */ "zslb");
/* harmony import */ var _components_cards_card_bar_chart_card_bar_chart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/cards/card-bar-chart/card-bar-chart.component */ "TmC4");
/* harmony import */ var _components_cards_card_line_chart_card_line_chart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/cards/card-line-chart/card-line-chart.component */ "+Kwz");
/* harmony import */ var _components_cards_card_page_visits_card_page_visits_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/cards/card-page-visits/card-page-visits.component */ "3IhM");
/* harmony import */ var _components_cards_card_profile_card_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/cards/card-profile/card-profile.component */ "diaN");
/* harmony import */ var _components_cards_card_settings_card_settings_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/cards/card-settings/card-settings.component */ "vwLF");
/* harmony import */ var _components_cards_card_social_traffic_card_social_traffic_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/cards/card-social-traffic/card-social-traffic.component */ "xud4");
/* harmony import */ var _components_cards_card_stats_card_stats_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/cards/card-stats/card-stats.component */ "J87Q");
/* harmony import */ var _components_cards_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/cards/card-table/card-table.component */ "uhhN");
/* harmony import */ var _components_footers_footer_admin_footer_admin_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/footers/footer-admin/footer-admin.component */ "UIMn");
/* harmony import */ var _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/footers/footer/footer.component */ "1DoU");
/* harmony import */ var _components_footers_footer_small_footer_small_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/footers/footer-small/footer-small.component */ "xlab");
/* harmony import */ var _components_headers_header_stats_header_stats_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/headers/header-stats/header-stats.component */ "RLAj");
/* harmony import */ var _components_navbars_index_navbar_index_navbar_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/navbars/index-navbar/index-navbar.component */ "4b2p");
/* harmony import */ var _components_maps_map_example_map_example_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/maps/map-example/map-example.component */ "u/sr");
/* harmony import */ var _components_dropdowns_index_dropdown_index_dropdown_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/dropdowns/index-dropdown/index-dropdown.component */ "J8Ne");
/* harmony import */ var _components_dropdowns_table_dropdown_table_dropdown_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/dropdowns/table-dropdown/table-dropdown.component */ "UY35");
/* harmony import */ var _components_dropdowns_pages_dropdown_pages_dropdown_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/dropdowns/pages-dropdown/pages-dropdown.component */ "wcq5");
/* harmony import */ var _components_dropdowns_notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/dropdowns/notification-dropdown/notification-dropdown.component */ "Skd6");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _components_dropdowns_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/dropdowns/user-dropdown/user-dropdown.component */ "0slC");
/* harmony import */ var _views_admin_manage_saloons_manage_saloons_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./views/admin/manage-saloons/manage-saloons.component */ "0uaz");
/* harmony import */ var _components_table_saloons_table_saloons_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/table-saloons/table-saloons.component */ "7S+c");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _services_manage_saloons_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/manage-saloons.service */ "40b+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_authConfig_interceptor__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/authConfig.interceptor */ "rD10");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_table_clients_table_clients_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/table-clients/table-clients.component */ "JkxU");
/* harmony import */ var _components_dropdowns_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/dropdowns/dropdown/dropdown.component */ "vWvs");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/modal/modal.component */ "7aL3");
/* harmony import */ var _views_create_saloon_create_saloon_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./views/create-saloon/create-saloon.component */ "K8FB");
/* harmony import */ var _views_error404_error404_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./views/error404/error404.component */ "kku7");






// layouts


// admin views




// auth views

// no layouts views



// components for views and layouts


































let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
            _components_cards_card_bar_chart_card_bar_chart_component__WEBPACK_IMPORTED_MODULE_18__["CardBarChartComponent"],
            _components_cards_card_line_chart_card_line_chart_component__WEBPACK_IMPORTED_MODULE_19__["CardLineChartComponent"],
            _components_dropdowns_index_dropdown_index_dropdown_component__WEBPACK_IMPORTED_MODULE_32__["IndexDropdownComponent"],
            _components_dropdowns_pages_dropdown_pages_dropdown_component__WEBPACK_IMPORTED_MODULE_34__["PagesDropdownComponent"],
            _components_dropdowns_table_dropdown_table_dropdown_component__WEBPACK_IMPORTED_MODULE_33__["TableDropdownComponent"],
            _components_dropdowns_notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_35__["NotificationDropdownComponent"],
            _components_dropdowns_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_37__["UserDropdownComponent"],
            _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_36__["SidebarComponent"],
            _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"],
            _components_footers_footer_small_footer_small_component__WEBPACK_IMPORTED_MODULE_28__["FooterSmallComponent"],
            _components_footers_footer_admin_footer_admin_component__WEBPACK_IMPORTED_MODULE_26__["FooterAdminComponent"],
            _components_cards_card_page_visits_card_page_visits_component__WEBPACK_IMPORTED_MODULE_20__["CardPageVisitsComponent"],
            _components_cards_card_profile_card_profile_component__WEBPACK_IMPORTED_MODULE_21__["CardProfileComponent"],
            _components_cards_card_settings_card_settings_component__WEBPACK_IMPORTED_MODULE_22__["CardSettingsComponent"],
            _components_cards_card_social_traffic_card_social_traffic_component__WEBPACK_IMPORTED_MODULE_23__["CardSocialTrafficComponent"],
            _components_cards_card_stats_card_stats_component__WEBPACK_IMPORTED_MODULE_24__["CardStatsComponent"],
            _components_cards_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_25__["CardTableComponent"],
            _components_headers_header_stats_header_stats_component__WEBPACK_IMPORTED_MODULE_29__["HeaderStatsComponent"],
            _components_maps_map_example_map_example_component__WEBPACK_IMPORTED_MODULE_31__["MapExampleComponent"],
            _components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_17__["AuthNavbarComponent"],
            _components_navbars_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_16__["AdminNavbarComponent"],
            _components_navbars_index_navbar_index_navbar_component__WEBPACK_IMPORTED_MODULE_30__["IndexNavbarComponent"],
            _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"],
            _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"],
            _views_admin_maps_maps_component__WEBPACK_IMPORTED_MODULE_9__["MapsComponent"],
            _views_admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"],
            _views_admin_tables_tables_component__WEBPACK_IMPORTED_MODULE_11__["TablesComponent"],
            _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _views_index_index_component__WEBPACK_IMPORTED_MODULE_13__["IndexComponent"],
            _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_14__["LandingComponent"],
            _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
            _views_admin_manage_saloons_manage_saloons_component__WEBPACK_IMPORTED_MODULE_38__["ManageSaloonsComponent"],
            _components_table_saloons_table_saloons_component__WEBPACK_IMPORTED_MODULE_39__["TableSaloonsComponent"],
            _components_table_clients_table_clients_component__WEBPACK_IMPORTED_MODULE_45__["TableClientsComponent"],
            _components_dropdowns_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_46__["DropdownComponent"],
            _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_47__["ModalComponent"],
            _views_create_saloon_create_saloon_component__WEBPACK_IMPORTED_MODULE_48__["CreateSaloonComponent"],
            _views_error404_error404_component__WEBPACK_IMPORTED_MODULE_49__["Error404Component"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_42__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_44__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_44__["FormsModule"],
            ngx_timeago__WEBPACK_IMPORTED_MODULE_5__["TimeagoModule"].forRoot()
        ],
        providers: [
            _services_auth_service__WEBPACK_IMPORTED_MODULE_40__["AuthService"],
            _services_manage_saloons_service__WEBPACK_IMPORTED_MODULE_41__["ManageSaloonsService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_42__["HTTP_INTERCEPTORS"],
                useClass: _services_authConfig_interceptor__WEBPACK_IMPORTED_MODULE_43__["AuthInterceptor"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



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

/***/ "c9Li":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-profile/card-profile.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16\"\r\n>\r\n  <div class=\"px-6\">\r\n    <div class=\"flex flex-wrap justify-center\">\r\n      <div class=\"w-full px-4 flex justify-center\">\r\n        <div class=\"relative\">\r\n          <img\r\n            alt=\"...\"\r\n            src=\"assets/img/team-2-800x800.jpg\"\r\n            class=\"shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"w-full px-4 text-center mt-20\">\r\n        <div class=\"flex justify-center py-4 lg:pt-4 pt-8\">\r\n          <div class=\"mr-4 p-3 text-center\">\r\n            <span\r\n              class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\r\n            >\r\n              22\r\n            </span>\r\n            <span class=\"text-sm text-blueGray-400\">Friends</span>\r\n          </div>\r\n          <div class=\"mr-4 p-3 text-center\">\r\n            <span\r\n              class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\r\n            >\r\n              10\r\n            </span>\r\n            <span class=\"text-sm text-blueGray-400\">Photos</span>\r\n          </div>\r\n          <div class=\"lg:mr-4 p-3 text-center\">\r\n            <span\r\n              class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\r\n            >\r\n              89\r\n            </span>\r\n            <span class=\"text-sm text-blueGray-400\">Comments</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"text-center mt-12\">\r\n      <h3\r\n        class=\"text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2\"\r\n      >\r\n        Jenna Stones\r\n      </h3>\r\n      <div\r\n        class=\"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase\"\r\n      >\r\n        <i class=\"fas fa-map-marker-alt mr-2 text-lg text-blueGray-400\"></i>\r\n        Los Angeles, California\r\n      </div>\r\n      <div class=\"mb-2 text-blueGray-600 mt-10\">\r\n        <i class=\"fas fa-briefcase mr-2 text-lg text-blueGray-400\"></i>\r\n        Solution Manager - Creative Tim Officer\r\n      </div>\r\n      <div class=\"mb-2 text-blueGray-600\">\r\n        <i class=\"fas fa-university mr-2 text-lg text-blueGray-400\"></i>\r\n        University of Computer Science\r\n      </div>\r\n    </div>\r\n    <div class=\"mt-10 py-10 border-t border-blueGray-200 text-center\">\r\n      <div class=\"flex flex-wrap justify-center\">\r\n        <div class=\"w-full lg:w-9/12 px-4\">\r\n          <p class=\"mb-4 text-lg leading-relaxed text-blueGray-700\">\r\n            An artist of considerable range, Jenna the name taken by\r\n            Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and\r\n            records all of his own music, giving it a warm, intimate feel with a\r\n            solid groove structure. An artist of considerable range.\r\n          </p>\r\n          <a href=\"javascript:void(0);\" class=\"font-normal text-red-600\">\r\n            Show more\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "diaN":
/*!*************************************************************************!*\
  !*** ./src/app/components/cards/card-profile/card-profile.component.ts ***!
  \*************************************************************************/
/*! exports provided: CardProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardProfileComponent", function() { return CardProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-profile.component.html */ "c9Li");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardProfileComponent = class CardProfileComponent {
    constructor() { }
    ngOnInit() { }
};
CardProfileComponent.ctorParameters = () => [];
CardProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-profile",
        template: _raw_loader_card_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardProfileComponent);



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

/***/ "e8es":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/index-dropdown/index-dropdown.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\r\n  class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\r\n  href=\"#pablo\"\r\n  (click)=\"toggleDropdown($event)\"\r\n  #btnDropdownRef\r\n>\r\n  Demo Pages\r\n</a>\r\n<div\r\n  class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48\"\r\n  [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\r\n  #popoverDropdownRef\r\n>\r\n  <span\r\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\r\n  >\r\n    Admin Layout\r\n  </span>\r\n  <a\r\n    [routerLink]=\"['/admin/dashboard']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Dashboard\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/admin/settings']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Settings\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/admin/tables']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Tables\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/admin/maps']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Maps\r\n  </a>\r\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\r\n  <span\r\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\r\n  >\r\n    Auth Layout\r\n  </span>\r\n  <a\r\n    [routerLink]=\"['/auth/login']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Login\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/auth/register']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Register\r\n  </a>\r\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\r\n  <span\r\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\r\n  >\r\n    No Layout\r\n  </span>\r\n  <a\r\n    [routerLink]=\"['/landing']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Landing\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/profile']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Profile\r\n  </a>\r\n</div>\r\n");

/***/ }),

/***/ "e8ip":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/auth-navbar/auth-navbar.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\r\n  class=\"top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg\"\r\n>\r\n  <div\r\n    class=\"container px-4 mx-auto flex flex-wrap items-center justify-between\"\r\n  >\r\n    <div\r\n      class=\"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start\"\r\n    >\r\n      <a\r\n        [routerLink]=\"['/']\"\r\n        class=\"text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase\"\r\n      >\r\n        Notus Angular\r\n      </a>\r\n      <button\r\n        class=\"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none\"\r\n        type=\"button\"\r\n        (click)=\"setNavbarOpen()\"\r\n      >\r\n        <i class=\"text-white fas fa-bars\"></i>\r\n      </button>\r\n    </div>\r\n    <div\r\n      class=\"lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none\"\r\n      [ngClass]=\"{ hidden: !navbarOpen, 'block rounded shadow-lg': navbarOpen }\"\r\n      id=\"example-navbar-warning\"\r\n    >\r\n      <ul class=\"flex flex-col lg:flex-row list-none mr-auto\">\r\n        <li class=\"flex items-center\">\r\n          <a\r\n            class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\r\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus?ref=na-auth-navbar\"\r\n          >\r\n            <i\r\n              class=\"lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2\"\r\n            ></i>\r\n            Docs\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"flex flex-col lg:flex-row list-none lg:ml-auto\">\r\n        <li class=\"flex items-center\">\r\n          <app-pages-dropdown class=\"block\"></app-pages-dropdown>\r\n        </li>\r\n        <li class=\"flex items-center\">\r\n          <a\r\n            class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\r\n            href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-angular%2F\"\r\n            target=\"_blank\"\r\n          >\r\n            <i\r\n              class=\"lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg\"\r\n            ></i>\r\n            <span class=\"lg:hidden inline-block ml-2\">Share</span>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"flex items-center\">\r\n          <a\r\n            class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\r\n            href=\"https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-angular%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20Angular%20UI%20Kit%20and%20Admin.%20Let%20Notus%20Angular%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.\"\r\n            target=\"_blank\"\r\n          >\r\n            <i\r\n              class=\"lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg\"\r\n            ></i>\r\n            <span class=\"lg:hidden inline-block ml-2\">Tweet</span>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"flex items-center\">\r\n          <a\r\n            class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\r\n            href=\"https://github.com/creativetimofficial/notus-angular?ref=na-auth-navbar\"\r\n            target=\"_blank\"\r\n          >\r\n            <i\r\n              class=\"lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg\"\r\n            ></i>\r\n            <span class=\"lg:hidden inline-block ml-2\">Star</span>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"flex items-center\">\r\n          <button\r\n            class=\"bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150\"\r\n            type=\"button\"\r\n          >\r\n            <i class=\"fas fa-arrow-alt-circle-down\"></i> Download\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "eix7":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-settings/card-settings.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0\"\r\n>\r\n  <div class=\"rounded-t bg-white mb-0 px-6 py-6\">\r\n    <div class=\"text-center flex justify-between\">\r\n      <h6 class=\"text-blueGray-700 text-xl font-bold\">My account</h6>\r\n      <button\r\n        class=\"bg-red-600 text-white active:bg-red-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150\"\r\n        type=\"button\"\r\n      >\r\n        Settings\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"flex-auto px-4 lg:px-10 py-10 pt-0\">\r\n    <form>\r\n      <h6 class=\"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase\">\r\n        User Information\r\n      </h6>\r\n      <div class=\"flex flex-wrap\">\r\n        <div class=\"w-full lg:w-6/12 px-4\">\r\n          <div class=\"relative w-full mb-3\">\r\n            <label\r\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n              htmlFor=\"grid-password\"\r\n            >\r\n              Username\r\n            </label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n              value=\"lucky.jesse\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full lg:w-6/12 px-4\">\r\n          <div class=\"relative w-full mb-3\">\r\n            <label\r\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n              htmlFor=\"grid-password\"\r\n            >\r\n              Email address\r\n            </label>\r\n            <input\r\n              type=\"email\"\r\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n              value=\"jesse@example.com\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full lg:w-6/12 px-4\">\r\n          <div class=\"relative w-full mb-3\">\r\n            <label\r\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n              htmlFor=\"grid-password\"\r\n            >\r\n              First Name\r\n            </label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n              value=\"Lucky\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full lg:w-6/12 px-4\">\r\n          <div class=\"relative w-full mb-3\">\r\n            <label\r\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n              htmlFor=\"grid-password\"\r\n            >\r\n              Last Name\r\n            </label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n              value=\"Jesse\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <hr class=\"mt-6 border-b-1 border-blueGray-300\" />\r\n\r\n      <h6 class=\"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase\">\r\n        Contact Information\r\n      </h6>\r\n      <div class=\"flex flex-wrap\">\r\n        <div class=\"w-full lg:w-12/12 px-4\">\r\n          <div class=\"relative w-full mb-3\">\r\n            <label\r\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n              htmlFor=\"grid-password\"\r\n            >\r\n              Address\r\n            </label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n              value=\"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full lg:w-4/12 px-4\">\r\n          <div class=\"relative w-full mb-3\">\r\n            <label\r\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n              htmlFor=\"grid-password\"\r\n            >\r\n              City\r\n            </label>\r\n            <input\r\n              type=\"email\"\r\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n              value=\"New York\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full lg:w-4/12 px-4\">\r\n          <div class=\"relative w-full mb-3\">\r\n            <label\r\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n              htmlFor=\"grid-password\"\r\n            >\r\n              Country\r\n            </label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n              value=\"United States\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full lg:w-4/12 px-4\">\r\n          <div class=\"relative w-full mb-3\">\r\n            <label\r\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n              htmlFor=\"grid-password\"\r\n            >\r\n              Postal Code\r\n            </label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n              value=\"Postal Code\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <hr class=\"mt-6 border-b-1 border-blueGray-300\" />\r\n\r\n      <h6 class=\"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase\">\r\n        About Me\r\n      </h6>\r\n      <div class=\"flex flex-wrap\">\r\n        <div class=\"w-full lg:w-12/12 px-4\">\r\n          <div class=\"relative w-full mb-3\">\r\n            <label\r\n              class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n              htmlFor=\"grid-password\"\r\n            >\r\n              About me\r\n            </label>\r\n            <textarea\r\n              type=\"text\"\r\n              class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n              rows=\"4\"\r\n            >\r\n                  A beautiful UI Kit and Admin for Angular & Tailwind CSS. It is Free\r\n                  and Open Source.\r\n                </textarea\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

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
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.currentUser = {};
    }
    // Sign-in
    logIn(user) {
        return this.http.post(`${this.endpoint}/auth/login`, user)
            .subscribe((res) => {
            console.log(res);
            localStorage.setItem('access_token', res.token);
            localStorage.setItem('user_id', res.user._id);
            this.router.navigate(['admin/clients']);
        });
    }
    getToken() {
        return localStorage.getItem('access_token');
    }
    verifyToken(token) {
        this.headers.set('Authorization', `Bearer ${token}`);
        return this.http.get(`${this.endpoint}/auth/verifyauthentication`);
    }
    get isLoggedIn() {
        let authToken = localStorage.getItem('access_token');
        return (authToken !== null) ? true : false;
    }
    doLogout() {
        localStorage.removeItem('user_id');
        if (localStorage.removeItem('access_token') == null) {
            this.router.navigate(['auth/login']);
        }
    }
    // Error 
    handleError(error) {
        let msg = '';
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
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "lLla":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-line-chart/card-line-chart.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700\"\r\n>\r\n  <div class=\"rounded-t mb-0 px-4 py-3 bg-transparent\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"relative w-full max-w-full flex-grow flex-1\">\r\n        <h6 class=\"uppercase text-blueGray-100 mb-1 text-xs font-semibold\">\r\n          Overview\r\n        </h6>\r\n        <h2 class=\"text-white text-xl font-semibold\">Sales value</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"p-4 flex-auto\">\r\n    <!-- Chart -->\r\n    <div class=\"relative\" style=\"height: 350px\">\r\n      <canvas id=\"line-chart\"></canvas>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "owMO":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/pages-dropdown/pages-dropdown.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\r\n  class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\r\n  href=\"#pablo\"\r\n  (click)=\"toggleDropdown($event)\"\r\n  #btnDropdownRef\r\n>\r\n  Demo Pages\r\n</a>\r\n<div\r\n  class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48\"\r\n  [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\r\n  #popoverDropdownRef\r\n>\r\n  <span\r\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\r\n  >\r\n    Admin Layout\r\n  </span>\r\n  <a\r\n    [routerLink]=\"['/admin/dashboard']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Dashboard\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/admin/settings']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Settings\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/admin/tables']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Tables\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/admin/maps']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Maps\r\n  </a>\r\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\r\n  <span\r\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\r\n  >\r\n    Auth Layout\r\n  </span>\r\n  <a\r\n    [routerLink]=\"['/auth/login']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Login\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/auth/register']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Register\r\n  </a>\r\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\r\n  <span\r\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\r\n  >\r\n    No Layout\r\n  </span>\r\n  <a\r\n    [routerLink]=\"['/landing']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Landing\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/profile']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Profile\r\n  </a>\r\n</div>\r\n");

/***/ }),

/***/ "pzeq":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/manage-saloons/manage-saloons.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-full mb-12 xl:mb-0 px-4\">\r\n  <app-table-saloons color=\"light\"></app-table-saloons>\r\n</div>\r\n");

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
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
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

/***/ "rOy2":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/table-dropdown/table-dropdown.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\r\n  class=\"text-blueGray-500 block py-1 px-3\"\r\n  href=\"#pablo\"\r\n  (click)=\"toggleDropdown($event)\"\r\n  #btnDropdownRef\r\n>\r\n  <i class=\"fas fa-ellipsis-v\"></i>\r\n</a>\r\n<div class=\"min-w-48 z-50\" #popoverDropdownRef>\r\n  <div\r\n    class=\"bg-white text-base float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48\"\r\n    [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\r\n  >\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Action\r\n    </a>\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Another action\r\n    </a>\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Something else here\r\n    </a>\r\n    <div class=\"h-0 my-2 border border-solid border-blueGray-100\"></div>\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Seprated link\r\n    </a>\r\n  </div>\r\n</div>\r\n");

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

/***/ "u/sr":
/*!**********************************************************************!*\
  !*** ./src/app/components/maps/map-example/map-example.component.ts ***!
  \**********************************************************************/
/*! exports provided: MapExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapExampleComponent", function() { return MapExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_map_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./map-example.component.html */ "xkbx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let MapExampleComponent = class MapExampleComponent {
    constructor() { }
    ngOnInit() {
        let map = document.getElementById("map-canvas");
        let lat = map.getAttribute("data-lat");
        let lng = map.getAttribute("data-lng");
        const myLatlng = new google.maps.LatLng(lat, lng);
        const mapOptions = {
            zoom: 12,
            scrollwheel: false,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#444444" }],
                },
                {
                    featureType: "landscape",
                    elementType: "all",
                    stylers: [{ color: "#f2f2f2" }],
                },
                {
                    featureType: "poi",
                    elementType: "all",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "road",
                    elementType: "all",
                    stylers: [{ saturation: -100 }, { lightness: 45 }],
                },
                {
                    featureType: "road.highway",
                    elementType: "all",
                    stylers: [{ visibility: "simplified" }],
                },
                {
                    featureType: "road.arterial",
                    elementType: "labels.icon",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "transit",
                    elementType: "all",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "water",
                    elementType: "all",
                    stylers: [{ color: "#feb2b2" }, { visibility: "on" }],
                },
            ],
        };
        map = new google.maps.Map(map, mapOptions);
        const marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Hello World!",
        });
        const contentString = '<div class="info-window-content"><h2>Notus Angular</h2>' +
            "<p>A beautiful UI Kit and Admin for Tailwind CSS. It is Free and Open Source.</p></div>";
        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });
        google.maps.event.addListener(marker, "click", function () {
            infowindow.open(map, marker);
        });
    }
};
MapExampleComponent.ctorParameters = () => [];
MapExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-map-example",
        template: _raw_loader_map_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], MapExampleComponent);



/***/ }),

/***/ "uEih":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-saloons/table-saloons.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"\r\n    relative\r\n    flex flex-col\r\n    min-w-0\r\n    break-words\r\n    w-full\r\n    mb-6\r\n    shadow-lg\r\n    rounded\r\n  \"\r\n  [ngClass]=\"color === 'light' ? 'bg-white' : 'bg-red-900 text-white'\"\r\n>\r\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"relative w-full px-4 max-w-full flex-grow justify-between\">\r\n        <h3\r\n          class=\"font-semibold text-lg\"\r\n          [ngClass]=\"color === 'light' ? 'text-blueGray-700' : 'text-white'\"\r\n        >\r\n          Saloons\r\n        </h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"block w-full overflow-x-auto\">\r\n    <!-- Projects table -->\r\n    <table class=\"items-center w-full bg-transparent border-collapse\">\r\n      <thead>\r\n        <tr>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            ID\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Name\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Managers\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Hairdressers\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Formulas\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Created\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Image\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let saloon of saloons; let i = index\" [attr.data-index]=\"i\">\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ i }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ saloon.name }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            <ul *ngFor=\"let manager of saloon.managers\">\r\n              <li>{{ manager.first_name }} {{ manager.last_name }}</li>\r\n            </ul>\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            <ul *ngFor=\"let hairdresser of saloon.hairdressers\">\r\n              <li>{{ hairdresser.first_name }} {{ hairdresser.last_name }}</li>\r\n            </ul>\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n            \"\r\n          >\r\n            <ul class=\"list-disc\" *ngFor=\"let formula of saloon.formulas\">\r\n              <li>{{ formula.formula.name }} | {{ formula.price }} DT</li>\r\n            </ul>\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ saloon.createdAt | timeago: live }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n              <img\r\n                class=\"inline-block h-6 w-6 rounded-md max-w-100-px\"\r\n                [src]=\"saloon.image\"\r\n                alt=\"\"\r\n              />\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n<div class=\"flex justify-end\">\r\n  <app-modal></app-modal>\r\n</div>\r\n");

/***/ }),

/***/ "uhhN":
/*!*********************************************************************!*\
  !*** ./src/app/components/cards/card-table/card-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: CardTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTableComponent", function() { return CardTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_table_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-table.component.html */ "wMhV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardTableComponent = class CardTableComponent {
    constructor() {
        this._color = "light";
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color !== "light" && color !== "dark" ? "light" : color;
    }
    ngOnInit() { }
};
CardTableComponent.ctorParameters = () => [];
CardTableComponent.propDecorators = {
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
CardTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-table",
        template: _raw_loader_card_table_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardTableComponent);



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
/* harmony import */ var _views_admin_manage_saloons_manage_saloons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/admin/manage-saloons/manage-saloons.component */ "0uaz");
/* harmony import */ var _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/auth/login/login.component */ "/kjZ");
/* harmony import */ var _views_create_saloon_create_saloon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/create-saloon/create-saloon.component */ "K8FB");
/* harmony import */ var _views_error404_error404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/error404/error404.component */ "kku7");
/* harmony import */ var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/profile/profile.component */ "wF9P");



// layouts



// admin views


// auth views



// no layouts views

const routes = [
    {
        path: "create/saloon",
        component: _views_create_saloon_create_saloon_component__WEBPACK_IMPORTED_MODULE_9__["CreateSaloonComponent"]
    },
    // admin views
    {
        path: "admin",
        component: _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [
            { path: "profile", component: _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
            { path: "clients", component: _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
            { path: "saloons", component: _views_admin_manage_saloons_manage_saloons_component__WEBPACK_IMPORTED_MODULE_7__["ManageSaloonsComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
            { path: "", redirectTo: "dashboard", pathMatch: "full" },
        ],
    },
    // auth views
    {
        path: "auth",
        component: _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
        children: [
            { path: "login", component: _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
            { path: "", redirectTo: "login", pathMatch: "full" },
        ],
    },
    {
        path: 'error-404',
        component: _views_error404_error404_component__WEBPACK_IMPORTED_MODULE_10__["Error404Component"]
    },
    { path: "", redirectTo: "auth/login", pathMatch: "full" },
    { path: '**', redirectTo: 'error-404', pathMatch: "full" }
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

/***/ "vwLF":
/*!***************************************************************************!*\
  !*** ./src/app/components/cards/card-settings/card-settings.component.ts ***!
  \***************************************************************************/
/*! exports provided: CardSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSettingsComponent", function() { return CardSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-settings.component.html */ "eix7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardSettingsComponent = class CardSettingsComponent {
    constructor() { }
    ngOnInit() { }
};
CardSettingsComponent.ctorParameters = () => [];
CardSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-settings",
        template: _raw_loader_card_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardSettingsComponent);



/***/ }),

/***/ "wF9P":
/*!****************************************************!*\
  !*** ./src/app/views/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "8GP7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() { }
};
ProfileComponent.ctorParameters = () => [];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-profile",
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ProfileComponent);



/***/ }),

/***/ "wMhV":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-table/card-table.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded\"\r\n  [ngClass]=\"color === 'light' ? 'bg-white' : 'bg-red-900 text-white'\"\r\n>\r\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\r\n        <h3\r\n          class=\"font-semibold text-lg\"\r\n          [ngClass]=\"color === 'light' ? 'text-blueGray-700' : 'text-white'\"\r\n        >\r\n          Card Tables\r\n        </h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"block w-full overflow-x-auto\">\r\n    <!-- Projects table -->\r\n    <table class=\"items-center w-full bg-transparent border-collapse\">\r\n      <thead>\r\n        <tr>\r\n          <th\r\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Project\r\n          </th>\r\n          <th\r\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Budget\r\n          </th>\r\n          <th\r\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Status\r\n          </th>\r\n          <th\r\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Users\r\n          </th>\r\n          <th\r\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Completion\r\n          </th>\r\n          <th\r\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          ></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center\"\r\n          >\r\n            <img\r\n              src=\"assets/img/bootstrap.jpg\"\r\n              class=\"h-12 w-12 bg-white rounded-full border\"\r\n              alt=\"...\"\r\n            />\r\n            <span\r\n              class=\"ml-3 font-bold\"\r\n              [ngClass]=\"color === 'light' ? 'text-blueGray-600' : 'text-white'\"\r\n            >\r\n              Argon Design System\r\n            </span>\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            $2,500 USD\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <i class=\"fas fa-circle text-orange-500 mr-2\"></i> pending\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex\">\r\n              <img\r\n                src=\"assets/img/team-1-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-2-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-3-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-4-470x470.png\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n            </div>\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex items-center\">\r\n              <span class=\"mr-2\">60%</span>\r\n              <div class=\"relative w-full\">\r\n                <div\r\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-red-200\"\r\n                >\r\n                  <div\r\n                    style=\"width: 60%\"\r\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500\"\r\n                  ></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right\"\r\n          >\r\n            <app-table-dropdown></app-table-dropdown>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center\"\r\n          >\r\n            <img\r\n              src=\"assets/img/angular.jpg\"\r\n              class=\"h-12 w-12 bg-white rounded-full border\"\r\n              alt=\"...\"\r\n            />\r\n            <span\r\n              class=\"ml-3 font-bold\"\r\n              [ngClass]=\"color === 'light' ? 'text-blueGray-600' : 'text-white'\"\r\n            >\r\n              Angular Now UI Kit PRO\r\n            </span>\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            $1,800 USD\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <i class=\"fas fa-circle text-emerald-500 mr-2\"></i>\r\n            completed\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex\">\r\n              <img\r\n                src=\"assets/img/team-1-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-2-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-3-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-4-470x470.png\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n            </div>\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex items-center\">\r\n              <span class=\"mr-2\">100%</span>\r\n              <div class=\"relative w-full\">\r\n                <div\r\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-emerald-200\"\r\n                >\r\n                  <div\r\n                    style=\"width: 100%\"\r\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500\"\r\n                  ></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right\"\r\n          >\r\n            <app-table-dropdown></app-table-dropdown>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center\"\r\n          >\r\n            <img\r\n              src=\"assets/img/sketch.jpg\"\r\n              class=\"h-12 w-12 bg-white rounded-full border\"\r\n              alt=\"...\"\r\n            />\r\n            <span\r\n              class=\"ml-3 font-bold\"\r\n              [ngClass]=\"color === 'light' ? 'text-blueGray-600' : 'text-white'\"\r\n            >\r\n              Black Dashboard Sketch\r\n            </span>\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            $3,150 USD\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <i class=\"fas fa-circle text-red-500 mr-2\"></i> delayed\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex\">\r\n              <img\r\n                src=\"assets/img/team-1-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-2-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-3-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-4-470x470.png\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n            </div>\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex items-center\">\r\n              <span class=\"mr-2\">73%</span>\r\n              <div class=\"relative w-full\">\r\n                <div\r\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-red-200\"\r\n                >\r\n                  <div\r\n                    style=\"width: 73%\"\r\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500\"\r\n                  ></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right\"\r\n          >\r\n            <app-table-dropdown></app-table-dropdown>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center\"\r\n          >\r\n            <img\r\n              src=\"assets/img/react.jpg\"\r\n              class=\"h-12 w-12 bg-white rounded-full border\"\r\n              alt=\"...\"\r\n            />\r\n            <span\r\n              class=\"ml-3 font-bold\"\r\n              [ngClass]=\"color === 'light' ? 'text-blueGray-600' : 'text-white'\"\r\n            >\r\n              React Material Dashboard\r\n            </span>\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            $4,400 USD\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <i class=\"fas fa-circle text-teal-500 mr-2\"></i> on schedule\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex\">\r\n              <img\r\n                src=\"assets/img/team-1-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-2-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-3-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-4-470x470.png\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n            </div>\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex items-center\">\r\n              <span class=\"mr-2\">90%</span>\r\n              <div class=\"relative w-full\">\r\n                <div\r\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-teal-200\"\r\n                >\r\n                  <div\r\n                    style=\"width: 90%\"\r\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500\"\r\n                  ></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right\"\r\n          >\r\n            <app-table-dropdown></app-table-dropdown>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center\"\r\n          >\r\n            <img\r\n              src=\"assets/img/vue.jpg\"\r\n              class=\"h-12 w-12 bg-white rounded-full border\"\r\n              alt=\"...\"\r\n            />\r\n            <span\r\n              class=\"ml-3 font-bold\"\r\n              [ngClass]=\"color === 'light' ? 'text-blueGray-600' : 'text-white'\"\r\n            >\r\n              React Material Dashboard\r\n            </span>\r\n          </th>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            $2,200 USD\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <i class=\"fas fa-circle text-emerald-500 mr-2\"></i>\r\n            completed\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex\">\r\n              <img\r\n                src=\"assets/img/team-1-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-2-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-3-800x800.jpg\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n              <img\r\n                src=\"assets/img/team-4-470x470.png\"\r\n                alt=\"...\"\r\n                class=\"w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4\"\r\n              />\r\n            </div>\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\r\n          >\r\n            <div class=\"flex items-center\">\r\n              <span class=\"mr-2\">100%</span>\r\n              <div class=\"relative w-full\">\r\n                <div\r\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-emerald-200\"\r\n                >\r\n                  <div\r\n                    style=\"width: 100%\"\r\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500\"\r\n                  ></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td\r\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right\"\r\n          >\r\n            <app-table-dropdown></app-table-dropdown>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n");

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

/***/ "xkbx":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/maps/map-example/map-example.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  id=\"map-canvas\"\r\n  class=\"relative w-full rounded h-600-px\"\r\n  data-lat=\"40.748817\"\r\n  data-lng=\"-73.985428\"\r\n></div>\r\n");

/***/ }),

/***/ "xlab":
/*!***************************************************************************!*\
  !*** ./src/app/components/footers/footer-small/footer-small.component.ts ***!
  \***************************************************************************/
/*! exports provided: FooterSmallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterSmallComponent", function() { return FooterSmallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_small_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer-small.component.html */ "DLfO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let FooterSmallComponent = class FooterSmallComponent {
    constructor() {
        this.date = new Date().getFullYear();
        this._absolute = false;
    }
    get absolute() {
        return this._absolute;
    }
    set absolute(absolute) {
        this._absolute = absolute === undefined ? false : absolute;
    }
    ngOnInit() { }
};
FooterSmallComponent.ctorParameters = () => [];
FooterSmallComponent.propDecorators = {
    absolute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
FooterSmallComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-footer-small",
        template: _raw_loader_footer_small_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], FooterSmallComponent);



/***/ }),

/***/ "xud4":
/*!***************************************************************************************!*\
  !*** ./src/app/components/cards/card-social-traffic/card-social-traffic.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CardSocialTrafficComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSocialTrafficComponent", function() { return CardSocialTrafficComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_social_traffic_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-social-traffic.component.html */ "YpXG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardSocialTrafficComponent = class CardSocialTrafficComponent {
    constructor() { }
    ngOnInit() { }
};
CardSocialTrafficComponent.ctorParameters = () => [];
CardSocialTrafficComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-social-traffic",
        template: _raw_loader_card_social_traffic_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardSocialTrafficComponent);



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

/***/ }),

/***/ "zslb":
/*!*************************************************************************!*\
  !*** ./src/app/components/navbars/auth-navbar/auth-navbar.component.ts ***!
  \*************************************************************************/
/*! exports provided: AuthNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthNavbarComponent", function() { return AuthNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auth_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth-navbar.component.html */ "e8ip");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AuthNavbarComponent = class AuthNavbarComponent {
    constructor() {
        this.navbarOpen = false;
    }
    ngOnInit() { }
    setNavbarOpen() {
        this.navbarOpen = !this.navbarOpen;
    }
};
AuthNavbarComponent.ctorParameters = () => [];
AuthNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-auth-navbar",
        template: _raw_loader_auth_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AuthNavbarComponent);



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map