(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+VzF":
    /*!****************************************!*\
      !*** ./src/app/services/auth.guard.ts ***!
      \****************************************/

    /*! exports provided: AuthGuard */

    /***/
    function VzF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth.service */
      "lGQG");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            if (this.authService.isLoggedIn !== true) {
              this.router.navigate(['auth/login']);
            }

            return true;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthGuard);
      /***/
    },

    /***/
    "/kjZ":
    /*!*****************************************************!*\
      !*** ./src/app/views/auth/login/login.component.ts ***!
      \*****************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function kjZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "LUN3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(fb, authService, router) {
          _classCallCheck(this, LoginComponent);

          this.fb = fb;
          this.authService = authService;
          this.router = router;
          this.signinForm = this.fb.group({
            email: [''],
            password: ['']
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "loginUser",
          value: function loginUser() {
            this.authService.logIn(this.signinForm.value);
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-login",
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LoginComponent);
      /***/
    },

    /***/
    "/ztn":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin/admin.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function ztn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\r\n  <app-sidebar></app-sidebar>\r\n  <div class=\"relative md:ml-64 bg-blueGray-100\">\r\n    <app-admin-navbar></app-admin-navbar>\r\n    <app-header-stats></app-header-stats>\r\n    <div class=\"px-4 md:px-10 mx-auto w-full -m-24\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\USER\Desktop\Work\icoiff\icoiff-back-office\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0slC":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/dropdowns/user-dropdown/user-dropdown.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: UserDropdownComponent */

    /***/
    function slC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDropdownComponent", function () {
        return UserDropdownComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-dropdown.component.html */
      "H3xT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @popperjs/core */
      "EjV/");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");

      var UserDropdownComponent = /*#__PURE__*/function () {
        function UserDropdownComponent(authService) {
          _classCallCheck(this, UserDropdownComponent);

          this.authService = authService;
          this.dropdownPopoverShow = false;
        }

        _createClass(UserDropdownComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
              placement: "bottom-start"
            });
          }
        }, {
          key: "toggleDropdown",
          value: function toggleDropdown(event) {
            event.preventDefault();

            if (this.dropdownPopoverShow) {
              this.dropdownPopoverShow = false;
            } else {
              this.dropdownPopoverShow = true;
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.doLogout();
          }
        }]);

        return UserDropdownComponent;
      }();

      UserDropdownComponent.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      };

      UserDropdownComponent.propDecorators = {
        btnDropdownRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["btnDropdownRef", {
            "static": false
          }]
        }],
        popoverDropdownRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["popoverDropdownRef", {
            "static": false
          }]
        }]
      };
      UserDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-user-dropdown",
        template: _raw_loader_user_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], UserDropdownComponent);
      /***/
    },

    /***/
    "165v":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/maps/maps.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"flex flex-wrap\">\r\n  <div class=\"w-full px-4\">\r\n    <div\r\n      class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\r\n    >\r\n      <app-map-example></app-map-example>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "1Xo0":
    /*!****************************************************!*\
      !*** ./src/app/services/mailer-service.service.ts ***!
      \****************************************************/

    /*! exports provided: MailerServiceService */

    /***/
    function Xo0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailerServiceService", function () {
        return MailerServiceService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var MailerServiceService = /*#__PURE__*/function () {
        function MailerServiceService(http) {
          _classCallCheck(this, MailerServiceService);

          this.http = http;
          this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        }

        _createClass(MailerServiceService, [{
          key: "sendMail",
          value: function sendMail(email) {
            return this.http.post("".concat(this.endpoint, "/email"), {
              email: email
            });
          }
        }]);

        return MailerServiceService;
      }();

      MailerServiceService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      MailerServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], MailerServiceService);
      /***/
    },

    /***/
    "3YbZ":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/dropdown/dropdown.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YbZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- This example requires Tailwind CSS v2.0+ -->\r\n<div class=\"relative inline-block text-left\">\r\n  <div>\r\n    <button\r\n      type=\"button\"\r\n      class=\"\r\n        inline-flex\r\n        justify-center\r\n        w-full\r\n        rounded-md\r\n        border border-gray-300\r\n        shadow-sm\r\n        px-4\r\n        py-2\r\n        bg-white\r\n        text-sm\r\n        font-medium\r\n        text-gray-700\r\n        hover:bg-gray-50\r\n        focus:outline-none\r\n        focus:ring-2\r\n        focus:ring-offset-2\r\n        focus:ring-offset-gray-100\r\n        focus:ring-indigo-500\r\n      \"\r\n      id=\"menu-button\"\r\n      aria-expanded=\"true\"\r\n      aria-haspopup=\"true\"\r\n    >\r\n      Ajouter un Salon\r\n    </button>\r\n  </div>\r\n\r\n  <div\r\n    class=\"\r\n      origin-top-right\r\n      absolute\r\n      right-0\r\n      mt-2\r\n      w-56\r\n      rounded-md\r\n      shadow-lg\r\n      bg-white\r\n      ring-1 ring-black ring-opacity-5\r\n      divide-y divide-gray-100\r\n      focus:outline-none\r\n    \"\r\n    role=\"menu\"\r\n    aria-orientation=\"vertical\"\r\n    aria-labelledby=\"menu-button\"\r\n    tabindex=\"-1\"\r\n  >\r\n    <div class=\"py-1\" role=\"none\">\r\n      <!-- Active: \"bg-gray-100 text-gray-900\", Not Active: \"text-gray-700\" -->\r\n      <a\r\n        href=\"#\"\r\n        class=\"text-gray-700 block px-4 py-2 text-sm\"\r\n        role=\"menuitem\"\r\n        tabindex=\"-1\"\r\n        id=\"menu-item-0\"\r\n        >Modifier</a\r\n      >\r\n      <a\r\n        href=\"#\"\r\n        class=\"text-gray-700 block px-4 py-2 text-sm\"\r\n        role=\"menuitem\"\r\n        tabindex=\"-1\"\r\n        id=\"menu-item-1\"\r\n        >Dupliquer</a\r\n      >\r\n    </div>\r\n    <div class=\"py-1\" role=\"none\">\r\n      <a\r\n        href=\"#\"\r\n        class=\"text-gray-700 block px-4 py-2 text-sm\"\r\n        role=\"menuitem\"\r\n        tabindex=\"-1\"\r\n        id=\"menu-item-2\"\r\n        >Archive</a\r\n      >\r\n      <a\r\n        href=\"#\"\r\n        class=\"text-gray-700 block px-4 py-2 text-sm\"\r\n        role=\"menuitem\"\r\n        tabindex=\"-1\"\r\n        id=\"menu-item-3\"\r\n        >Déplacer</a\r\n      >\r\n    </div>\r\n    <div class=\"py-1\" role=\"none\">\r\n      <a\r\n        href=\"#\"\r\n        class=\"text-gray-700 block px-4 py-2 text-sm\"\r\n        role=\"menuitem\"\r\n        tabindex=\"-1\"\r\n        id=\"menu-item-4\"\r\n        >Partager</a\r\n      >\r\n      <a\r\n        href=\"#\"\r\n        class=\"text-gray-700 block px-4 py-2 text-sm\"\r\n        role=\"menuitem\"\r\n        tabindex=\"-1\"\r\n        id=\"menu-item-5\"\r\n        >Ajouter aux favoris</a\r\n      >\r\n    </div>\r\n    <div class=\"py-1\" role=\"none\">\r\n      <a\r\n        href=\"#\"\r\n        class=\"text-gray-700 block px-4 py-2 text-sm\"\r\n        role=\"menuitem\"\r\n        tabindex=\"-1\"\r\n        id=\"menu-item-6\"\r\n        >Supprimer</a\r\n      >\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "7aL3":
    /*!*****************************************************!*\
      !*** ./src/app/components/modal/modal.component.ts ***!
      \*****************************************************/

    /*! exports provided: ModalComponent */

    /***/
    function aL3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
        return ModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal.component.html */
      "P6R5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_mailer_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/mailer-service.service */
      "1Xo0");

      var ModalComponent = /*#__PURE__*/function () {
        function ModalComponent(mailerService) {
          _classCallCheck(this, ModalComponent);

          this.mailerService = mailerService;
          this.email = "";
          this.showModal = false;
        }

        _createClass(ModalComponent, [{
          key: "toggleModal",
          value: function toggleModal() {
            this.showModal = !this.showModal;
          }
        }, {
          key: "sendMail",
          value: function sendMail() {
            var _this = this;

            this.mailerService.sendMail(this.email).subscribe(function (res) {
              console.log(res);
              _this.email = '';

              _this.toggleModal();
            });
          }
        }]);

        return ModalComponent;
      }();

      ModalComponent.ctorParameters = function () {
        return [{
          type: src_app_services_mailer_service_service__WEBPACK_IMPORTED_MODULE_3__["MailerServiceService"]
        }];
      };

      ModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-modal',
        template: _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ModalComponent);
      /***/
    },

    /***/
    "90Li":
    /*!************************************************************!*\
      !*** ./src/app/views/admin/settings/settings.component.ts ***!
      \************************************************************/

    /*! exports provided: SettingsComponent */

    /***/
    function Li(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
        return SettingsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./settings.component.html */
      "YV8C");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SettingsComponent = /*#__PURE__*/function () {
        function SettingsComponent() {
          _classCallCheck(this, SettingsComponent);
        }

        _createClass(SettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SettingsComponent;
      }();

      SettingsComponent.ctorParameters = function () {
        return [];
      };

      SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-settings",
        template: _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], SettingsComponent);
      /***/
    },

    /***/
    "9yi7":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/create-salon/create-salon.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yi7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"mx-auto\" *ngIf=\"success\">\r\n  <h1 class=\"text-4xl py-16 px-48\">\r\n    {{ success }}\r\n  </h1>\r\n</div>\r\n<div *ngIf=\"!success\">\r\n  <form\r\n    class=\"space-y-8 divide-y divide-teal-600 p-8\"\r\n    [formGroup]=\"profileForm\"\r\n    (ngSubmit)=\"onSubmit()\"\r\n  >\r\n    <div class=\"space-y-8 divide-y divide-teal-600 sm:space-y-5\">\r\n      <div class=\"flex flex-col gap-6 divide-y divide-teal-600\">\r\n        <div>\r\n          <h3 class=\"text-lg leading-6 font-medium text-gray-900\">\r\n            Profile Manager\r\n          </h3>\r\n          <p class=\"mt-1 max-w-xl text-sm text-gray-500\">\r\n            Ces informations apparaitrons sur l'application iCoiff. Faites bien attention aux informations que vous partagez.\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"mt-6 sm:mt-5 space-y-6 sm:space-y-5\">\r\n          <div\r\n            class=\"\r\n              sm:grid\r\n              sm:grid-cols-3\r\n              sm:gap-4\r\n              sm:items-start\r\n              sm:border-t\r\n              sm:border-gray-200\r\n              sm:pt-5\r\n            \"\r\n          >\r\n            <label\r\n              for=\"first_name\"\r\n              class=\"block text-md font-medium text-gray-700 sm:mt-px sm:pt-2\"\r\n            >\r\n              Prénom\r\n            </label>\r\n            <div class=\"mt-1 sm:mt-0 sm:col-span-2\">\r\n              <div class=\"max-w-4xl flex rounded-md shadow-sm\">\r\n                <input\r\n                  required\r\n                  type=\"text\"\r\n                  name=\"first_name\"\r\n                  id=\"first_name\"\r\n                  autocomplete=\"given-name\"\r\n                  class=\"\r\n                    flex-1\r\n                    block\r\n                    w-full\r\n                    focus:ring-indigo-500 focus:border-indigo-500\r\n                    min-w-0\r\n                    rounded-none rounded-r-md\r\n                    sm:text-sm\r\n                    border-gray-300\r\n                  \"\r\n                  formControlName=\"first_name\"\r\n                />\r\n              </div>\r\n            </div>\r\n            <label\r\n              for=\"last_name\"\r\n              class=\"block text-md font-medium text-gray-700 sm:mt-px sm:pt-2\"\r\n            >\r\n              Nom\r\n            </label>\r\n            <div class=\"mt-1 sm:mt-0 sm:col-span-2\">\r\n              <div class=\"max-w-4xl flex rounded-md shadow-sm\">\r\n                <input\r\n                  type=\"text\"\r\n                  name=\"last_name\"\r\n                  id=\"last_name\"\r\n                  autocomplete=\"family-name\"\r\n                  class=\"\r\n                    flex-1\r\n                    block\r\n                    w-full\r\n                    focus:ring-indigo-500 focus:border-indigo-500\r\n                    min-w-0\r\n                    rounded-none rounded-r-md\r\n                    sm:text-sm\r\n                    border-gray-300\r\n                  \"\r\n                  formControlName=\"last_name\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            class=\"\r\n              sm:grid\r\n              sm:grid-cols-3\r\n              sm:gap-4\r\n              sm:items-start\r\n              sm:border-t\r\n              sm:border-gray-200\r\n              sm:pt-5\r\n            \"\r\n          >\r\n            <label\r\n              for=\"email\"\r\n              class=\"block text-lg font-medium text-gray-700 sm:mt-px sm:pt-2\"\r\n            >\r\n              Email\r\n            </label>\r\n            <div class=\"mt-1 sm:mt-0 sm:col-span-2\">\r\n              <div class=\"max-w-4xl flex rounded-md shadow-sm\">\r\n                <input\r\n                  type=\"email\"\r\n                  name=\"email\"\r\n                  id=\"email\"\r\n                  autocomplete=\"email\"\r\n                  class=\"\r\n                    flex-1\r\n                    block\r\n                    w-full\r\n                    focus:ring-indigo-500 focus:border-indigo-500\r\n                    min-w-0\r\n                    rounded-none rounded-r-md\r\n                    sm:text-lg\r\n                    border-gray-300\r\n                  \"\r\n                  formControlName=\"email\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div\r\n            class=\"\r\n              sm:grid\r\n              sm:grid-cols-3\r\n              sm:gap-4\r\n              sm:items-start\r\n              sm:border-t\r\n              sm:border-gray-200\r\n              sm:pt-5\r\n            \"\r\n          >\r\n            <label\r\n              for=\"password\"\r\n              class=\"block text-lg font-medium text-gray-700 sm:mt-px sm:pt-2\"\r\n            >\r\n              Mot de passe\r\n            </label>\r\n            <div class=\"mt-1 sm:mt-0 sm:col-span-2\">\r\n              <div class=\"max-w-4xl flex rounded-md shadow-sm\">\r\n                <input\r\n                  type=\"password\"\r\n                  name=\"password\"\r\n                  id=\"password\"\r\n                  autocomplete=\"password\"\r\n                  class=\"\r\n                    flex-1\r\n                    block\r\n                    w-full\r\n                    focus:ring-indigo-500 focus:border-indigo-500\r\n                    min-w-0\r\n                    rounded-none rounded-r-md\r\n                    sm:text-lg\r\n                    border-gray-300\r\n                  \"\r\n                  formControlName=\"password\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            class=\"\r\n              sm:grid\r\n              sm:grid-cols-3\r\n              sm:gap-4\r\n              sm:items-center\r\n              sm:border-t\r\n              sm:border-gray-200\r\n              sm:pt-5\r\n              mb-6\r\n            \"\r\n          >\r\n            <label for=\"photo\" class=\"block text-lg font-medium text-gray-700\">\r\n              Photo Manager\r\n            </label>\r\n            <div class=\"mt-1 sm:mt-0 sm:col-span-2\">\r\n              <div class=\"flex items-center\">\r\n                <span\r\n                  class=\"h-12 w-12 rounded-full overflow-hidden bg-gray-100\"\r\n                >\r\n                  <img\r\n                    *ngIf=\"profileImagePath\"\r\n                    [src]=\"profileImagePath\"\r\n                    alt=\"\"\r\n                    srcset=\"\"\r\n                  />\r\n                  <svg\r\n                    *ngIf=\"!profileImagePath\"\r\n                    class=\"h-full w-full text-gray-300\"\r\n                    fill=\"currentColor\"\r\n                    viewBox=\"0 0 24 24\"\r\n                  >\r\n                    <path\r\n                      d=\"M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z\"\r\n                    />\r\n                  </svg>\r\n                </span>\r\n                <input\r\n                  style=\"display: none\"\r\n                  type=\"file\"\r\n                  (change)=\"onProfileImageChanged($event)\"\r\n                  #fileInput\r\n                />\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"\r\n                    ml-5\r\n                    bg-white\r\n                    py-2\r\n                    px-3\r\n                    border border-gray-300\r\n                    rounded-md\r\n                    shadow-sm\r\n                    text-sm\r\n                    leading-4\r\n                    font-medium\r\n                    text-gray-700\r\n                    hover:bg-gray-50\r\n                    focus:outline-none\r\n                    focus:ring-2\r\n                    focus:ring-offset-2\r\n                    focus:ring-indigo-500\r\n                  \"\r\n                  (click)=\"fileInput.click()\"\r\n                >\r\n                  Changer\r\n                </button>\r\n                {{ uploaded }}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div\r\n        class=\"pt-8 space-y-8 sm:pt-10 sm:space-y-8 divide-y divide-teal-600\"\r\n      >\r\n        <div>\r\n          <h3 class=\"text-lg leading-6 font-medium text-gray-900\">\r\n            Informations du Salon\r\n          </h3>\r\n          <p class=\"mt-1 max-w-4xl text-sm text-gray-500 mb-6\">\r\n            Prière de fournir les informations relatives à votre salon.\r\n          </p>\r\n        </div>\r\n        <div class=\"flex flex-col gap-6\">\r\n          <div\r\n            class=\"\r\n              pt-6\r\n              sm:grid\r\n              sm:grid-cols-3\r\n              sm:gap-4\r\n              sm:items-start\r\n              sm:border-t\r\n              sm:border-gray-200\r\n              sm:pt-5\r\n            \"\r\n          >\r\n            <label\r\n              for=\"salon-name\"\r\n              class=\"block text-lg font-medium text-gray-700 sm:mt-px sm:pt-2\"\r\n            >\r\n              Nom du Salon\r\n            </label>\r\n            <div class=\"mt-1 sm:mt-0 sm:col-span-2\">\r\n              <input\r\n                type=\"text\"\r\n                name=\"salon-name\"\r\n                id=\"salon-name\"\r\n                class=\"\r\n                  max-w-lg\r\n                  block\r\n                  w-full\r\n                  shadow-sm\r\n                  focus:ring-indigo-500 focus:border-indigo-500\r\n                  sm:max-w-xs sm:text-sm\r\n                  border-gray-300\r\n                  rounded-md\r\n                \"\r\n                formControlName=\"name\"\r\n              />\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            class=\"\r\n              sm:grid\r\n              sm:grid-cols-3\r\n              sm:gap-4\r\n              sm:items-start\r\n              sm:border-t\r\n              sm:border-gray-200\r\n              sm:pt-5\r\n            \"\r\n          >\r\n            <label\r\n              for=\"cover_photo\"\r\n              class=\"block text-lg font-medium text-gray-700 sm:mt-px sm:pt-2\"\r\n            >\r\n              Logo du Salon\r\n            </label>\r\n            <div class=\"mt-1 sm:mt-0 sm:col-span-2\">\r\n              <div\r\n                class=\"\r\n                  max-w-lg\r\n                  flex\r\n                  justify-center\r\n                  px-6\r\n                  pt-5\r\n                  pb-6\r\n                  border-2 border-gray-300 border-dashed\r\n                  rounded-md\r\n                \"\r\n              >\r\n                <div class=\"space-y-1 text-center\">\r\n                  <svg\r\n                    class=\"mx-auto h-12 w-12 text-gray-400\"\r\n                    stroke=\"currentColor\"\r\n                    fill=\"none\"\r\n                    viewBox=\"0 0 48 48\"\r\n                    aria-hidden=\"true\"\r\n                  >\r\n                    <path\r\n                      d=\"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02\"\r\n                      stroke-width=\"2\"\r\n                      stroke-linecap=\"round\"\r\n                      stroke-linejoin=\"round\"\r\n                    />\r\n                  </svg>\r\n                  <div class=\"flex text-lg text-gray-600\">\r\n                    <label\r\n                      for=\"file-upload\"\r\n                      class=\"\r\n                        relative\r\n                        cursor-pointer\r\n                        bg-white\r\n                        rounded-md\r\n                        font-medium\r\n                        text-indigo-600\r\n                        hover:text-indigo-500\r\n                        focus-within:outline-none\r\n                        focus-within:ring-2\r\n                        focus-within:ring-offset-2\r\n                        focus-within:ring-indigo-500\r\n                      \"\r\n                    >\r\n                      <span>Upload a file</span>\r\n                      <input\r\n                        id=\"file-upload\"\r\n                        name=\"file-upload\"\r\n                        type=\"file\"\r\n                        class=\"sr-only\"\r\n                        (change)=\"onSalonImageChanged($event)\"\r\n                      />\r\n                    </label>\r\n                    <p class=\"pl-1\">or drag and drop</p>\r\n                  </div>\r\n                  <p class=\"text-xs text-gray-500\">PNG, JPG, GIF up to 10MB</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"pt-6\">\r\n      <div class=\"flex justify-end\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"\r\n            bg-red-500\r\n            py-2\r\n            px-4\r\n            border border-gray-300\r\n            rounded-md\r\n            shadow-sm\r\n            text-sm\r\n            font-medium\r\n            text-white\r\n            hover:bg-gray-500\r\n            focus:outline-none\r\n            focus:ring-2\r\n            focus:ring-offset-2\r\n            focus:ring-indigo-500\r\n          \"\r\n        >\r\n          Réinitialiser\r\n        </button>\r\n        <button\r\n          type=\"submit\"\r\n          class=\"\r\n            ml-3\r\n            inline-flex\r\n            justify-center\r\n            py-2\r\n            px-4\r\n            border border-transparent\r\n            shadow-sm\r\n            text-sm\r\n            font-medium\r\n            rounded-md\r\n            text-white\r\n            bg-emerald-500\r\n            hover:bg-emerald-800\r\n            focus:outline-none\r\n            focus:ring-2\r\n            focus:ring-offset-2\r\n            focus:ring-indigo-500\r\n          \"\r\n        >\r\n          Enregistrer\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n";
      /***/
    },

    /***/
    "A8uX":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-clients/table-clients.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function A8uX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\r\n  class=\"\r\n    relative\r\n    flex flex-col\r\n    min-w-0\r\n    break-words\r\n    w-full\r\n    mb-6\r\n    shadow-lg\r\n    rounded\r\n  \"\r\n  [ngClass]=\"color === 'light' ? 'bg-white' : 'bg-red-900 text-white'\"\r\n>\r\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\r\n        <h3\r\n          class=\"font-semibold text-lg\"\r\n          [ngClass]=\"color === 'light' ? 'text-blueGray-700' : 'text-white'\"\r\n        >\r\n          Clients\r\n        </h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"block w-full overflow-x-auto\">\r\n    <!-- Projects table -->\r\n    <table class=\"items-center w-full bg-transparent border-collapse\">\r\n      <thead>\r\n        <tr>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            ID\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Nom\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Numéro de téléphone\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Date d'inscription\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let client of clients; let i = index\" [attr.data-index]=\"i\">\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ i }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ client.full_name }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ client.phone_number }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ client.createdAt | timeago:live }}\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "AvFx":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/table-salons/table-salons.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AvFx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\r\n  class=\"\r\n    relative\r\n    flex flex-col\r\n    min-w-0\r\n    break-words\r\n    w-full\r\n    mb-6\r\n    shadow-lg\r\n    rounded\r\n  \"\r\n  [ngClass]=\"color === 'light' ? 'bg-white' : 'bg-red-900 text-white'\"\r\n>\r\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"relative w-full px-4 max-w-full flex-grow justify-between\">\r\n        <h3\r\n          class=\"font-semibold text-lg\"\r\n          [ngClass]=\"color === 'light' ? 'text-blueGray-700' : 'text-white'\"\r\n        >\r\n          Salons\r\n        </h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"block w-full overflow-x-auto\">\r\n    <!-- Projects table -->\r\n    <table class=\"items-center w-full bg-transparent border-collapse\">\r\n      <thead>\r\n        <tr>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Image\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Nom\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Managers\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Coiffeurs\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Formules\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Date de création\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-center\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Actions\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let salon of salons; let i = index\" [attr.data-index]=\"i\">\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            <img\r\n              class=\"inline-block h-6 w-6 rounded-md max-w-100-px\"\r\n              [src]=\"salon.image\"\r\n              alt=\"\"\r\n            />\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ salon.name }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            <ul *ngFor=\"let manager of salon.managers\">\r\n              <li>{{ manager.first_name }} {{ manager.last_name }}</li>\r\n            </ul>\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            <ul *ngFor=\"let hairdresser of salon.hairdressers\">\r\n              <li>{{ hairdresser.first_name }} {{ hairdresser.last_name }}</li>\r\n            </ul>\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n            \"\r\n          >\r\n            <ul class=\"list-disc\" *ngFor=\"let formula of salon.formulas\">\r\n              <li>{{ formula.formula.name }} | {{ formula.price }} DT</li>\r\n            </ul>\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ salon.createdAt | timeago: live }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n              text-center\r\n            \"\r\n          >\r\n            <button\r\n              class=\"\r\n                bg-blueGray-500\r\n                hover:bg-blueGray-700\r\n                text-white\r\n                py-1\r\n                px-2\r\n                rounded-l\r\n              \"\r\n            >\r\n              <i class=\"far fa-edit px-2 text-sm\"></i>\r\n            </button>\r\n            <button\r\n              *ngIf=\"salon.isActive\"\r\n              (click)=\"toggleActivation(salon)\"\r\n              class=\"bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded-r\"\r\n            >\r\n              <i class=\"far fa-trash-alt px-2 text-sm\"></i>\r\n            </button>\r\n\r\n            <button\r\n              *ngIf=\"!salon.isActive\"\r\n              (click)=\"toggleActivation(salon)\"\r\n              class=\"\r\n                bg-green-500\r\n                hover:bg-green-700\r\n                text-white\r\n                py-1\r\n                px-2\r\n                rounded-r\r\n              \"\r\n            >\r\n              <i class=\"far fa-check-square px-2 text-sm\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n<div class=\"flex justify-end\">\r\n  <app-modal></app-modal>\r\n</div>\r\n";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        // production: false,
        // apiUrl: "http://localhost:3030",
        production: true,
        apiUrl: "https://api.icoiff.com"
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "GB+I":
    /*!*******************************************************************!*\
      !*** ./src/app/components/table-salons/table-salons.component.ts ***!
      \*******************************************************************/

    /*! exports provided: TableSalonsComponent */

    /***/
    function GBI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableSalonsComponent", function () {
        return TableSalonsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_table_salons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./table-salons.component.html */
      "AvFx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_manage_salons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/manage-salons.service */
      "RV1I");

      var TableSalonsComponent = /*#__PURE__*/function () {
        function TableSalonsComponent(manageSalons) {
          var _this2 = this;

          _classCallCheck(this, TableSalonsComponent);

          this.manageSalons = manageSalons;
          this._color = "light";
          this.live = true;
          this.manageSalons.getSalons().subscribe(function (res) {
            _this2.salons = res;
          });
        }

        _createClass(TableSalonsComponent, [{
          key: "color",
          get: function get() {
            return this._color;
          },
          set: function set(color) {
            this._color = color !== "light" && color !== "dark" ? "light" : color;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleActivation",
          value: function toggleActivation(selectedSalon) {
            var _this3 = this;

            this.manageSalons.toggleActivation(selectedSalon).subscribe(function (updatedSalon) {
              _this3.salons = _this3.salons.map(function (salon, index) {
                return salon._id === updatedSalon._id ? Object.assign(Object.assign({}, salon), {
                  isActive: updatedSalon.isActive
                }) : salon;
              });
            });
          }
        }]);

        return TableSalonsComponent;
      }();

      TableSalonsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_manage_salons_service__WEBPACK_IMPORTED_MODULE_3__["ManageSalonsService"]
        }];
      };

      TableSalonsComponent.propDecorators = {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      TableSalonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-table-salons",
        template: _raw_loader_table_salons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TableSalonsComponent);
      /***/
    },

    /***/
    "H3xT":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/user-dropdown/user-dropdown.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function H3xT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a\r\n  class=\"text-blueGray-500 block\"\r\n  href=\"#pablo\"\r\n  (click)=\"toggleDropdown($event)\"\r\n  #btnDropdownRef\r\n>\r\n  <div class=\"items-center flex\">\r\n    <span\r\n      class=\"\r\n        w-12\r\n        h-12\r\n        text-sm text-white\r\n        bg-blueGray-200\r\n        inline-flex\r\n        items-center\r\n        justify-center\r\n        rounded-full\r\n      \"\r\n    >\r\n      <img\r\n        alt=\"...\"\r\n        class=\"w-full rounded-full align-middle border-none shadow-lg\"\r\n        src=\"assets/img/team-1-800x800.jpg\"\r\n      />\r\n    </span>\r\n  </div>\r\n</a>\r\n<div class=\"min-w-48 z-50\" #popoverDropdownRef>\r\n  <div\r\n    class=\"\r\n      bg-white\r\n      text-base\r\n      z-50\r\n      float-left\r\n      py-2\r\n      list-none\r\n      text-left\r\n      rounded\r\n      shadow-lg\r\n      mt-1\r\n      min-w-48\r\n    \"\r\n    [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\r\n  >\r\n    <a\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 cursor-pointer\"\r\n      (click)= \"logout()\"\r\n    >\r\n      <i\r\n        class=\"fas fa-sign-out-alt mr-2 text-sm\"\r\n      ></i>\r\n      Logout\r\n    </a>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "JkxU":
    /*!*********************************************************************!*\
      !*** ./src/app/components/table-clients/table-clients.component.ts ***!
      \*********************************************************************/

    /*! exports provided: TableClientsComponent */

    /***/
    function JkxU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableClientsComponent", function () {
        return TableClientsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_table_clients_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./table-clients.component.html */
      "A8uX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_manage_clients_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/manage-clients.service */
      "s5KC");

      var TableClientsComponent = /*#__PURE__*/function () {
        function TableClientsComponent(manageClientsService) {
          var _this4 = this;

          _classCallCheck(this, TableClientsComponent);

          this.manageClientsService = manageClientsService;
          this._color = "light";
          this.live = true;
          this.manageClientsService.getClients().subscribe(function (res) {
            return _this4.clients = res;
          });
        }

        _createClass(TableClientsComponent, [{
          key: "color",
          get: function get() {
            return this._color;
          },
          set: function set(color) {
            this._color = color !== "light" && color !== "dark" ? "light" : color;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TableClientsComponent;
      }();

      TableClientsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_manage_clients_service__WEBPACK_IMPORTED_MODULE_3__["ManageClientsService"]
        }];
      };

      TableClientsComponent.propDecorators = {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      TableClientsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-table-clients',
        template: _raw_loader_table_clients_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TableClientsComponent);
      /***/
    },

    /***/
    "KKA+":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KKA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav\r\n  class=\"\r\n    md:left-0\r\n    md:block\r\n    md:fixed\r\n    md:top-0\r\n    md:bottom-0\r\n    md:overflow-y-auto\r\n    md:flex-row\r\n    md:flex-nowrap\r\n    md:overflow-hidden\r\n    shadow-xl\r\n    bg-white\r\n    flex flex-wrap\r\n    items-center\r\n    justify-between\r\n    relative\r\n    md:w-64\r\n    z-10\r\n    py-4\r\n    px-6\r\n  \"\r\n>\r\n  <div\r\n    class=\"\r\n      md:flex-col md:items-stretch md:min-h-full md:flex-nowrap\r\n      px-0\r\n      flex flex-wrap\r\n      items-center\r\n      justify-between\r\n      w-full\r\n      mx-auto\r\n    \"\r\n  >\r\n    <!-- Toggler -->\r\n    <button\r\n      class=\"\r\n        cursor-pointer\r\n        text-black\r\n        opacity-50\r\n        md:hidden\r\n        px-3\r\n        py-1\r\n        text-xl\r\n        leading-none\r\n        bg-transparent\r\n        rounded\r\n        border border-solid border-transparent\r\n      \"\r\n      type=\"button\"\r\n      (click)=\"toggleCollapseShow('bg-white m-2 py-3 px-6')\"\r\n    >\r\n      <i class=\"fas fa-bars\"></i>\r\n    </button>\r\n    <!-- Brand -->\r\n    <a\r\n      [routerLink]=\"['/admin/clients']\"\r\n      class=\"\r\n        md:block\r\n        text-left\r\n        md:pb-2\r\n        text-blueGray-600\r\n        mr-0\r\n        inline-block\r\n        whitespace-nowrap\r\n        text-sm\r\n        uppercase\r\n        font-bold\r\n        p-4\r\n        px-0\r\n      \"\r\n    >\r\n      <span class=\"block sm:hidden\"> ICoiff </span>\r\n      <span class=\"hidden sm:block\"> ICoiff </span>\r\n    </a>\r\n    <!-- User -->\r\n    <ul class=\"md:hidden items-center flex flex-wrap list-none\">\r\n      <li class=\"inline-block relative\">\r\n        <app-user-dropdown class=\"block\"></app-user-dropdown>\r\n      </li>\r\n    </ul>\r\n    <!-- Collapse -->\r\n    <div\r\n      class=\"\r\n        md:flex\r\n        md:flex-col\r\n        md:items-stretch\r\n        md:opacity-100\r\n        md:relative\r\n        md:mt-4\r\n        md:shadow-none\r\n        shadow\r\n        absolute\r\n        top-0\r\n        left-0\r\n        right-0\r\n        z-40\r\n        overflow-y-auto overflow-x-hidden\r\n        h-auto\r\n        items-center\r\n        flex-1\r\n        rounded\r\n      \"\r\n      [ngClass]=\"collapseShow\"\r\n    >\r\n      <!-- Collapse header -->\r\n      <div\r\n        class=\"\r\n          md:min-w-full md:hidden\r\n          block\r\n          pb-4\r\n          mb-4\r\n          border-b border-solid border-blueGray-200\r\n        \"\r\n      >\r\n        <div class=\"flex flex-wrap\">\r\n          <div class=\"w-6/12\">\r\n            <a\r\n              [routerLink]=\"['/admin/clients']\"\r\n              class=\"\r\n                md:block\r\n                text-left\r\n                md:pb-2\r\n                text-blueGray-600\r\n                mr-0\r\n                inline-block\r\n                whitespace-nowrap\r\n                text-sm\r\n                uppercase\r\n                font-bold\r\n                p-4\r\n                px-0\r\n              \"\r\n            >\r\n              ICoiff\r\n            </a>\r\n          </div>\r\n          <div class=\"w-6/12 flex justify-end\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"\r\n                cursor-pointer\r\n                text-black\r\n                opacity-50\r\n                md:hidden\r\n                px-3\r\n                py-1\r\n                text-xl\r\n                leading-none\r\n                bg-transparent\r\n                rounded\r\n                border border-solid border-transparent\r\n              \"\r\n              (click)=\"toggleCollapseShow('hidden')\"\r\n            >\r\n              <i class=\"fas fa-times\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Form -->\r\n      <form class=\"mt-6 mb-4 md:hidden\">\r\n        <div class=\"mb-3 pt-0\">\r\n          <input\r\n            type=\"text\"\r\n            placeholder=\"Search\"\r\n            class=\"\r\n              border-0\r\n              px-3\r\n              py-2\r\n              h-12\r\n              border border-solid border-blueGray-500\r\n              placeholder-blueGray-300\r\n              text-blueGray-600\r\n              bg-white\r\n              rounded\r\n              text-base\r\n              leading-snug\r\n              shadow-none\r\n              outline-none\r\n              focus:outline-none\r\n              w-full\r\n              font-normal\r\n            \"\r\n          />\r\n        </div>\r\n      </form>\r\n\r\n      <!-- Divider -->\r\n      <hr class=\"my-4 md:min-w-full\" />\r\n      <!-- Heading -->\r\n      <h6\r\n        class=\"\r\n          md:min-w-full\r\n          text-blueGray-500 text-xs\r\n          uppercase\r\n          font-bold\r\n          block\r\n          pt-1\r\n          pb-4\r\n          no-underline\r\n        \"\r\n      >\r\n        Back Office\r\n      </h6>\r\n      <!-- Navigation -->\r\n\r\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none\">\r\n        <li class=\"items-center\">\r\n          <a\r\n            [routerLink]=\"['/admin/clients']\"\r\n            class=\"text-xs uppercase py-3 font-bold block\"\r\n            routerLinkActive\r\n            #adminDashboard=\"routerLinkActive\"\r\n            [ngClass]=\"\r\n              adminDashboard.isActive\r\n                ? 'text-red-600 hover:text-red-700'\r\n                : 'text-blueGray-700 hover:text-blueGray-500'\r\n            \"\r\n          >\r\n            <i\r\n              class=\"fas fa-user-circle mr-2 text-sm\"\r\n              [ngClass]=\"\r\n                adminDashboard.isActive ? 'opacity-75' : 'text-blueGray-300'\r\n              \"\r\n            ></i>\r\n            Gestion des clients\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"items-center\">\r\n          <a\r\n            [routerLink]=\"['/admin/salons']\"\r\n            class=\"text-xs uppercase py-3 font-bold block\"\r\n            routerLinkActive\r\n            #adminSettings=\"routerLinkActive\"\r\n            [ngClass]=\"\r\n              adminSettings.isActive\r\n                ? 'text-red-600 hover:text-red-700'\r\n                : 'text-blueGray-700 hover:text-blueGray-500'\r\n            \"\r\n          >\r\n            <i\r\n              class=\"fas fa-bed mr-2 text-sm\"\r\n              [ngClass]=\"\r\n                adminSettings.isActive ? 'opacity-75' : 'text-blueGray-300'\r\n              \"\r\n            ></i>\r\n            Gestion des salons\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n";
      /***/
    },

    /***/
    "KxJz":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/dashboard/dashboard.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KxJz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-table-clients></app-table-clients>\r\n";
      /***/
    },

    /***/
    "LDS7":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error404/error404.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function LDS7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"background\">\r\n\t<svg width=\"380px\" height=\"500px\" viewBox=\"0 0 837 1045\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\r\n\t\t<g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\r\n\t\t\t\t<path d=\"M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z\" id=\"Polygon-1\" stroke=\"#007FB2\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n\t\t\t\t<path d=\"M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z\" id=\"Polygon-2\" stroke=\"#EF4A5B\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n\t\t\t\t<path d=\"M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z\" id=\"Polygon-3\" stroke=\"#795D9C\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n\t\t\t\t<path d=\"M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z\" id=\"Polygon-4\" stroke=\"#F2773F\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n\t\t\t\t<path d=\"M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z\" id=\"Polygon-5\" stroke=\"#36B455\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n\t\t</g>\r\n\t</svg>\r\n\t<div class=\"message-box\">\r\n\t<h1>404</h1>\r\n\t<p>Page not found</p>\r\n\t<div class=\"buttons-con\">\r\n\t\t<div class=\"action-link-wrap\">\r\n\t\t\t<a onclick=\"history.back(-1)\" class=\"link-button link-back-button\">Go Back</a>\r\n\t\t\t<a href=\"\" class=\"link-button\">Go to Home Page</a>\r\n\t\t</div>\r\n\t</div>\r\n\t</div>\r\n</div>";
      /***/
    },

    /***/
    "LUN3":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth/login/login.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function LUN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container mx-auto px-4 h-full\">\r\n  <div class=\"flex content-center items-center justify-center h-full\">\r\n    <div class=\"w-full lg:w-4/12 px-4\">\r\n      <div\r\n        class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0\"\r\n      >\r\n        <div class=\"rounded-t mb-0 px-6 py-6\">\r\n          <div class=\"text-center mb-3\">\r\n            <h6 class=\"text-blueGray-500 text-sm font-bold\">Se connecter</h6>\r\n          </div>\r\n          <hr class=\"mt-6 border-b-1 border-blueGray-300\" />\r\n        </div>\r\n        <div class=\"flex-auto px-4 lg:px-10 py-10 pt-0\">\r\n          <form [formGroup]=\"signinForm\" (ngSubmit)=\"loginUser()\">\r\n            <div class=\"relative w-full mb-3\">\r\n              <label\r\n                class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                htmlFor=\"grid-password\"\r\n              >\r\n                Email\r\n              </label>\r\n              <input\r\n                type=\"email\"\r\n                class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n                formControlName=\"email\" placeholder=\"Votre email\" required\r\n              />\r\n            </div>\r\n\r\n            <div class=\"relative w-full mb-3\">\r\n              <label\r\n                class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                htmlFor=\"grid-password\"\r\n              >\r\n                Mot de passe\r\n              </label>\r\n              <input\r\n                type=\"password\"\r\n                class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n                formControlName=\"password\" placeholder=\"Votre mot de passe\" required\r\n              />\r\n            </div>\r\n            <div>\r\n              <label class=\"inline-flex items-center cursor-pointer\">\r\n                <input\r\n                  id=\"customCheckLogin\"\r\n                  type=\"checkbox\"\r\n                  class=\"form-checkbox border-0 text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150 rounded\"\r\n                />\r\n                <span class=\"ml-2 text-sm font-semibold text-blueGray-600\">\r\n                  Se souvenir de moi\r\n                </span>\r\n              </label>\r\n            </div>\r\n\r\n            <div class=\"text-center mt-6\">\r\n              <button\r\n                class=\"bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150\"\r\n                type=\"submit\"\r\n              >\r\n                Se connecter\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"flex flex-wrap mt-6 relative\">\r\n        <div class=\"w-1/2\">\r\n          <a href=\"javascript:void(0)\" class=\"text-blueGray-200\">\r\n            <small>Mot de passe oublié?</small>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "P6R5":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function P6R5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button\r\n  class=\"\r\n    bg-emerald-500\r\n    text-white\r\n    active:bg-emerald-600\r\n    font-bold\r\n    uppercase\r\n    text-sm\r\n    px-6\r\n    py-3\r\n    rounded\r\n    shadow\r\n    hover:shadow-lg\r\n    outline-none\r\n    focus:outline-none\r\n    mr-1\r\n    mb-1\r\n    ease-linear\r\n    transition-all\r\n    duration-150\r\n  \"\r\n  type=\"button\"\r\n  (click)=\"toggleModal()\"\r\n>\r\n  <i class=\"fas fa-plus\"></i> Ajouter un Salon\r\n</button>\r\n<div\r\n  *ngIf=\"showModal\"\r\n  class=\"\r\n    border-1 border-blueGray-500 border-solid\r\n    overflow-x-hidden overflow-y-auto\r\n    fixed\r\n    inset-0\r\n    z-50\r\n    px-16\r\n    justify-center\r\n    items-center\r\n    flex\r\n  \"\r\n>\r\n  <div class=\"relative w-auto mx-auto max-w-xl bg-red-100\">\r\n    <!--content-->\r\n    <div\r\n      class=\"\r\n        border-2 border-blueGray-500 border-solid\r\n        rounded-lg\r\n        shadow-lg\r\n        relative\r\n        flex flex-col\r\n        w-full\r\n        bg-white\r\n        outline-none\r\n        focus:outline-none\r\n      \"\r\n    >\r\n      <!--header-->\r\n      <div\r\n        class=\"\r\n          flex\r\n          items-center\r\n          justify-between\r\n          p-5\r\n          border-b border-solid border-blueGray-200\r\n          rounded-t\r\n        \"\r\n      >\r\n        <h3 class=\"text-sm font-semibold\">Ajouter un manager au salon</h3>\r\n        <button\r\n          class=\"\r\n            p-1\r\n            ml-auto\r\n            bg-transparent\r\n            border-0\r\n            text-black\r\n            opacity-5\r\n            float-right\r\n            text-3xl\r\n            leading-none\r\n            font-semibold\r\n            outline-none\r\n            focus:outline-none\r\n          \"\r\n          (click)=\"toggleModal()\"\r\n        >\r\n          <span\r\n            class=\"\r\n              bg-transparent\r\n              text-black\r\n              opacity-5\r\n              h-6\r\n              w-6\r\n              text-2xl\r\n              block\r\n              outline-none\r\n              focus:outline-none\r\n            \"\r\n          >\r\n            ×\r\n          </span>\r\n        </button>\r\n      </div>\r\n      <!--body-->\r\n      <div class=\"relative px-6 py-6 sm:px-16 flex-auto\">\r\n        <div>\r\n          <label for=\"email\" class=\"block text-sm font-medium text-gray-700\"\r\n            >Email</label\r\n          >\r\n          <div class=\"mt-1\">\r\n            <input\r\n              type=\"text\"\r\n              name=\"email\"\r\n              id=\"email\"\r\n              class=\"\r\n                shadow-sm\r\n                focus:ring-indigo-500 focus:border-indigo-500\r\n                block\r\n                w-full\r\n                sm:text-sm\r\n                border-gray-300\r\n                rounded-md\r\n              \"\r\n              [(ngModel)]=\"email\"\r\n              placeholder=\"you@example.com\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--footer-->\r\n      <div\r\n        class=\"\r\n          flex\r\n          items-center\r\n          justify-end\r\n          p-6\r\n          border-t border-solid border-blueGray-200\r\n          rounded-b\r\n        \"\r\n      >\r\n        <button\r\n          class=\"\r\n            bg-red-500\r\n            text-white\r\n            active:bg-red-600\r\n            font-bold\r\n            uppercase\r\n            text-sm\r\n            px-6\r\n            py-2\r\n            rounded\r\n            shadow\r\n            hover:shadow-lg\r\n            outline-none\r\n            focus:outline-none\r\n            mr-1\r\n            mb-1\r\n            ease-linear\r\n            transition-all\r\n            duration-150\r\n          \"\r\n          type=\"button\"\r\n          (click)=\"toggleModal()\"\r\n        >\r\n          Fermer\r\n        </button>\r\n        <button\r\n          class=\"\r\n            bg-emerald-500\r\n            text-white\r\n            active:bg-emerald-600\r\n            font-bold\r\n            uppercase\r\n            text-sm\r\n            px-6\r\n            py-2\r\n            rounded\r\n            shadow\r\n            hover:shadow-lg\r\n            outline-none\r\n            focus:outline-none\r\n            mr-1\r\n            mb-1\r\n            ease-linear\r\n            transition-all\r\n            duration-150\r\n          \"\r\n          type=\"button\"\r\n          (click)=\"sendMail()\"\r\n        >\r\n          Enregistrer\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div\r\n  *ngIf=\"showModal\"\r\n  class=\"\r\n    border-1 border-blueGray-500 border-solid\r\n    opacity-25\r\n    fixed\r\n    inset-0\r\n    z-40\r\n    bg-black\r\n  \"\r\n></div>\r\n`\r\n";
      /***/
    },

    /***/
    "Pibi":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/admin-navbar/admin-navbar.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Pibi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Navbar -->\r\n<nav\r\n  class=\"absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4\"\r\n>\r\n  <div\r\n    class=\"w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4\"\r\n  >\r\n    <!-- Brand -->\r\n    <a\r\n      class=\"text-white text-sm uppercase hidden lg:inline-block font-semibold\"\r\n      href=\"/admin/clients\"\r\n      >Dashboard</a\r\n    >\r\n    <!-- User -->\r\n    <ul class=\"flex-col md:flex-row list-none items-center hidden md:flex\">\r\n      <app-user-dropdown class=\"block\"></app-user-dropdown>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n";
      /***/
    },

    /***/
    "PxUm":
    /*!*******************************************************!*\
      !*** ./src/app/views/error404/error404.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function PxUm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".background {\n  background-color: #2F3242;\n}\n\nsvg {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -250px;\n  margin-left: -400px;\n}\n\n.message-box {\n  height: 200px;\n  width: 380px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: 50px;\n  color: #000;\n  font-family: Roboto;\n  font-weight: 300;\n}\n\n.message-box h1 {\n  font-size: 60px;\n  line-height: 46px;\n  margin-bottom: 40px;\n}\n\n.buttons-con .action-link-wrap {\n  margin-top: 40px;\n}\n\n.buttons-con .action-link-wrap a {\n  background: #68c950;\n  padding: 8px 25px;\n  border-radius: 4px;\n  color: #FFF;\n  font-weight: bold;\n  font-size: 14px;\n  transition: all 0.3s linear;\n  cursor: pointer;\n  text-decoration: none;\n  margin-right: 10px\n}\n\n.buttons-con .action-link-wrap a:hover {\n  background: #5A5C6C;\n  color: #fff;\n}\n\n#Polygon-1 , #Polygon-2 , #Polygon-3 , #Polygon-4 , #Polygon-4, #Polygon-5 {\n  -webkit-animation: float 1s infinite ease-in-out alternate;\n          animation: float 1s infinite ease-in-out alternate;\n}\n\n#Polygon-2 {\n  -webkit-animation-delay: .2s;\n          animation-delay: .2s;\n}\n\n#Polygon-3 {\n  -webkit-animation-delay: .4s;\n          animation-delay: .4s;\n}\n\n#Polygon-4 {\n  -webkit-animation-delay: .6s;\n          animation-delay: .6s;\n}\n\n#Polygon-5 {\n  -webkit-animation-delay: .8s;\n          animation-delay: .8s;\n}\n\n@-webkit-keyframes float {\n  100% {\n    transform: translateY(20px);\n  }\n}\n\n@keyframes float {\n  100% {\n    transform: translateY(20px);\n  }\n}\n\n@media (max-width: 450px) {\n  svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: -250px;\n    margin-left: -190px;\n  }\n\n  .message-box {\n    top: 50%;\n    left: 50%;\n    margin-top: -100px;\n    margin-left: -190px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yNDA0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQjtBQUNGOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBEQUFrRDtVQUFsRCxrREFBa0Q7QUFDcEQ7O0FBQ0E7RUFDRSw0QkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLDRCQUFvQjtVQUFwQixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSw0QkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRjs7QUFKQTtFQUNFO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBQ0E7SUFDRSxRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoiZXJyb3I0MDQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkYzMjQyO1xyXG59XHJcbnN2ZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAtMjUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC00MDBweDtcclxufVxyXG4ubWVzc2FnZS1ib3gge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDM4MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4ubWVzc2FnZS1ib3ggaDEge1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBsaW5lLWhlaWdodDogNDZweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcbi5idXR0b25zLWNvbiAuYWN0aW9uLWxpbmstd3JhcCB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4uYnV0dG9ucy1jb24gLmFjdGlvbi1saW5rLXdyYXAgYSB7XHJcbiAgYmFja2dyb3VuZDogIzY4Yzk1MDtcclxuICBwYWRkaW5nOiA4cHggMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweFxyXG59XHJcbi5idXR0b25zLWNvbiAuYWN0aW9uLWxpbmstd3JhcCBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNUE1QzZDO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jUG9seWdvbi0xICwgI1BvbHlnb24tMiAsICNQb2x5Z29uLTMgLCAjUG9seWdvbi00ICwgI1BvbHlnb24tNCwgI1BvbHlnb24tNSB7XHJcbiAgYW5pbWF0aW9uOiBmbG9hdCAxcyBpbmZpbml0ZSBlYXNlLWluLW91dCBhbHRlcm5hdGU7XHJcbn1cclxuI1BvbHlnb24tMiB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAuMnM7IFxyXG59XHJcbiNQb2x5Z29uLTMge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLjRzOyBcclxufVxyXG4jUG9seWdvbi00IHtcclxuICBhbmltYXRpb24tZGVsYXk6IC42czsgXHJcbn1cclxuI1BvbHlnb24tNSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAuOHM7IFxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZsb2F0IHtcclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgc3ZnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTI1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xOTBweDtcclxuICB9XHJcbiAgLm1lc3NhZ2UtYm94IHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xOTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "R+tk":
    /*!**************************************************!*\
      !*** ./src/app/layouts/admin/admin.component.ts ***!
      \**************************************************/

    /*! exports provided: AdminComponent */

    /***/
    function RTk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
        return AdminComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin.component.html */
      "/ztn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdminComponent = /*#__PURE__*/function () {
        function AdminComponent() {
          _classCallCheck(this, AdminComponent);
        }

        _createClass(AdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminComponent;
      }();

      AdminComponent.ctorParameters = function () {
        return [];
      };

      AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-admin",
        template: _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AdminComponent);
      /***/
    },

    /***/
    "RLAj":
    /*!***************************************************************************!*\
      !*** ./src/app/components/headers/header-stats/header-stats.component.ts ***!
      \***************************************************************************/

    /*! exports provided: HeaderStatsComponent */

    /***/
    function RLAj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderStatsComponent", function () {
        return HeaderStatsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_header_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./header-stats.component.html */
      "UhXh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderStatsComponent = /*#__PURE__*/function () {
        function HeaderStatsComponent() {
          _classCallCheck(this, HeaderStatsComponent);
        }

        _createClass(HeaderStatsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderStatsComponent;
      }();

      HeaderStatsComponent.ctorParameters = function () {
        return [];
      };

      HeaderStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-header-stats",
        template: _raw_loader_header_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], HeaderStatsComponent);
      /***/
    },

    /***/
    "RV1I":
    /*!***************************************************!*\
      !*** ./src/app/services/manage-salons.service.ts ***!
      \***************************************************/

    /*! exports provided: ManageSalonsService */

    /***/
    function RV1I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageSalonsService", function () {
        return ManageSalonsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var ManageSalonsService = /*#__PURE__*/function () {
        function ManageSalonsService(http) {
          _classCallCheck(this, ManageSalonsService);

          this.http = http;
          this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Content-Type", "application/json");
        }

        _createClass(ManageSalonsService, [{
          key: "getSalons",
          value: function getSalons() {
            return this.http.get("".concat(this.endpoint, "/salon"));
          }
        }, {
          key: "sendImage",
          value: function sendImage(uploadData) {
            return this.http.post("".concat(this.endpoint, "/file-upload"), uploadData);
          }
        }, {
          key: "createSalon",
          value: function createSalon(salon) {
            return this.http.post("".concat(this.endpoint, "/salon"), salon);
          }
        }, {
          key: "createManager",
          value: function createManager(manager) {
            return this.http.post("".concat(this.endpoint, "/auth/signup"), manager);
          }
        }, {
          key: "toggleActivation",
          value: function toggleActivation(_ref) {
            var _id = _ref._id;
            return this.http.patch("".concat(this.endpoint, "/salon/activation/").concat(_id), null);
          }
        }]);

        return ManageSalonsService;
      }();

      ManageSalonsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      ManageSalonsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root"
      })], ManageSalonsService);
      /***/
    },

    /***/
    "S1No":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/manage-salons/manage-salons.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function S1No(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"w-full mb-12 xl:mb-0 px-4\">\r\n  <app-table-salons color=\"light\"></app-table-salons>\r\n</div>\r\n";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = "angular-dashboard-page";
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-root",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppComponent);
      /***/
    },

    /***/
    "T8Xr":
    /*!**************************************************************!*\
      !*** ./src/app/views/create-salon/create-salon.component.ts ***!
      \**************************************************************/

    /*! exports provided: CreateSalonComponent */

    /***/
    function T8Xr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateSalonComponent", function () {
        return CreateSalonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_create_salon_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./create-salon.component.html */
      "9yi7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_manage_salons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/manage-salons.service */
      "RV1I");

      var CreateSalonComponent = /*#__PURE__*/function () {
        function CreateSalonComponent(route, router, manageSalons, authService) {
          var _this5 = this;

          _classCallCheck(this, CreateSalonComponent);

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
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("")
          });
          this.route.queryParams.subscribe(function (params) {
            _this5.access_token = params.access_token;

            if (!_this5.access_token) {
              _this5.router.navigate(["/error-404"]);
            }

            _this5.authService.verifyToken(_this5.access_token).subscribe(function (response) {
              if (response.error) {
                _this5.router.navigate(["/error-404"]);
              }
            });
          });
        }

        _createClass(CreateSalonComponent, [{
          key: "onProfileImageChanged",
          value: function onProfileImageChanged(event) {
            var _this6 = this;

            this.selectedFile = event.target.files[0];
            var uploadData = new FormData();
            uploadData.append("profile-photo", this.selectedFile, this.selectedFile.name);
            this.manageSalons.sendImage(uploadData).subscribe(function (response) {
              console.log(response);
              _this6.profileImagePath = response.url;
              _this6.uploaded = "image uploaded";
            });
          }
        }, {
          key: "onSalonImageChanged",
          value: function onSalonImageChanged(event) {
            var _this7 = this;

            this.selectedFile = event.target.files[0];
            var uploadData = new FormData();
            uploadData.append("profile-photo", this.selectedFile, this.selectedFile.name + this.selectedFile.type);
            this.manageSalons.sendImage(uploadData).subscribe(function (response) {
              console.log(response);
              _this7.salonImagePath = response.url;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this8 = this;

            var manager = {
              first_name: this.profileForm.value.first_name,
              last_name: this.profileForm.value.last_name,
              email: this.profileForm.value.email,
              password: this.profileForm.value.password,
              role: "Manager",
              salon: ""
            };
            var salon = {
              name: this.profileForm.value.name,
              image: this.salonImagePath
            };
            this.manageSalons.createSalon(salon).subscribe(function (response) {
              manager.salon = response === null || response === void 0 ? void 0 : response._id;

              _this8.manageSalons.createManager(manager).subscribe(function (response) {
                if (response.user) {
                  _this8.success = "Your account has been created you will be redirected shortly";
                }
              });
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CreateSalonComponent;
      }();

      CreateSalonComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_manage_salons_service__WEBPACK_IMPORTED_MODULE_6__["ManageSalonsService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      };

      CreateSalonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-create-salon",
        template: _raw_loader_create_salon_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CreateSalonComponent);
      /***/
    },

    /***/
    "UhXh":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/headers/header-stats/header-stats.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UhXh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Header -->\r\n<div class=\"relative bg-red-600 md:pt-32 pb-32 pt-12\">\r\n</div>";
      /***/
    },

    /***/
    "VTaN":
    /*!********************************************************!*\
      !*** ./src/app/views/admin/tables/tables.component.ts ***!
      \********************************************************/

    /*! exports provided: TablesComponent */

    /***/
    function VTaN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesComponent", function () {
        return TablesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tables_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tables.component.html */
      "a9TL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TablesComponent = /*#__PURE__*/function () {
        function TablesComponent() {
          _classCallCheck(this, TablesComponent);
        }

        _createClass(TablesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TablesComponent;
      }();

      TablesComponent.ctorParameters = function () {
        return [];
      };

      TablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-tables",
        template: _raw_loader_tables_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TablesComponent);
      /***/
    },

    /***/
    "Vbwu":
    /*!************************************************!*\
      !*** ./src/app/layouts/auth/auth.component.ts ***!
      \************************************************/

    /*! exports provided: AuthComponent */

    /***/
    function Vbwu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
        return AuthComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./auth.component.html */
      "dnvD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthComponent = /*#__PURE__*/function () {
        function AuthComponent() {
          _classCallCheck(this, AuthComponent);
        }

        _createClass(AuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthComponent;
      }();

      AuthComponent.ctorParameters = function () {
        return [];
      };

      AuthComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-auth",
        template: _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AuthComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "Xodl":
    /*!***************************************************************************!*\
      !*** ./src/app/components/navbars/admin-navbar/admin-navbar.component.ts ***!
      \***************************************************************************/

    /*! exports provided: AdminNavbarComponent */

    /***/
    function Xodl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminNavbarComponent", function () {
        return AdminNavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin-navbar.component.html */
      "Pibi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdminNavbarComponent = /*#__PURE__*/function () {
        function AdminNavbarComponent() {
          _classCallCheck(this, AdminNavbarComponent);
        }

        _createClass(AdminNavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminNavbarComponent;
      }();

      AdminNavbarComponent.ctorParameters = function () {
        return [];
      };

      AdminNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-admin-navbar",
        template: _raw_loader_admin_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AdminNavbarComponent);
      /***/
    },

    /***/
    "YV8C":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/settings/settings.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YV8C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"flex flex-wrap\">\r\n  <div class=\"w-full lg:w-8/12 px-4\">\r\n    <app-card-settings></app-card-settings>\r\n  </div>\r\n  <div class=\"w-full lg:w-4/12 px-4\">\r\n    <app-card-profile></app-card-profile>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var ngx_timeago__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-timeago */
      "twue");
      /* harmony import */


      var _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./layouts/admin/admin.component */
      "R+tk");
      /* harmony import */


      var _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./layouts/auth/auth.component */
      "Vbwu");
      /* harmony import */


      var _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./views/admin/dashboard/dashboard.component */
      "zmeh");
      /* harmony import */


      var _views_admin_maps_maps_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./views/admin/maps/maps.component */
      "rKqC");
      /* harmony import */


      var _views_admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./views/admin/settings/settings.component */
      "90Li");
      /* harmony import */


      var _views_admin_tables_tables_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./views/admin/tables/tables.component */
      "VTaN");
      /* harmony import */


      var _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./views/auth/login/login.component */
      "/kjZ");
      /* harmony import */


      var _components_navbars_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/navbars/admin-navbar/admin-navbar.component */
      "Xodl");
      /* harmony import */


      var _components_headers_header_stats_header_stats_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/headers/header-stats/header-stats.component */
      "RLAj");
      /* harmony import */


      var _components_dropdowns_pages_dropdown_pages_dropdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/dropdowns/pages-dropdown/pages-dropdown.component */
      "wcq5");
      /* harmony import */


      var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/sidebar/sidebar.component */
      "zBoC");
      /* harmony import */


      var _components_dropdowns_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/dropdowns/user-dropdown/user-dropdown.component */
      "0slC");
      /* harmony import */


      var _views_admin_manage_salons_manage_salons_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./views/admin/manage-salons/manage-salons.component */
      "gFck");
      /* harmony import */


      var _components_table_salons_table_salons_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/table-salons/table-salons.component */
      "GB+I");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./services/auth.service */
      "lGQG");
      /* harmony import */


      var _services_manage_salons_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./services/manage-salons.service */
      "RV1I");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _services_authConfig_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./services/authConfig.interceptor */
      "rD10");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_table_clients_table_clients_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./components/table-clients/table-clients.component */
      "JkxU");
      /* harmony import */


      var _components_dropdowns_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./components/dropdowns/dropdown/dropdown.component */
      "vWvs");
      /* harmony import */


      var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./components/modal/modal.component */
      "7aL3");
      /* harmony import */


      var _views_create_salon_create_salon_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./views/create-salon/create-salon.component */
      "T8Xr");
      /* harmony import */


      var _views_error404_error404_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./views/error404/error404.component */
      "kku7"); // layouts
      // admin views
      // auth views
      // components for views and layouts


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], _components_dropdowns_pages_dropdown_pages_dropdown_component__WEBPACK_IMPORTED_MODULE_15__["PagesDropdownComponent"], _components_dropdowns_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_17__["UserDropdownComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"], _components_headers_header_stats_header_stats_component__WEBPACK_IMPORTED_MODULE_14__["HeaderStatsComponent"], _components_navbars_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_13__["AdminNavbarComponent"], _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"], _views_admin_maps_maps_component__WEBPACK_IMPORTED_MODULE_9__["MapsComponent"], _views_admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"], _views_admin_tables_tables_component__WEBPACK_IMPORTED_MODULE_11__["TablesComponent"], _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _views_admin_manage_salons_manage_salons_component__WEBPACK_IMPORTED_MODULE_18__["ManageSalonsComponent"], _components_table_salons_table_salons_component__WEBPACK_IMPORTED_MODULE_19__["TableSalonsComponent"], _components_table_clients_table_clients_component__WEBPACK_IMPORTED_MODULE_25__["TableClientsComponent"], _components_dropdowns_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_26__["DropdownComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_27__["ModalComponent"], _views_create_salon_create_salon_component__WEBPACK_IMPORTED_MODULE_28__["CreateSalonComponent"], _views_error404_error404_component__WEBPACK_IMPORTED_MODULE_29__["Error404Component"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"], ngx_timeago__WEBPACK_IMPORTED_MODULE_5__["TimeagoModule"].forRoot()],
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"], _services_manage_salons_service__WEBPACK_IMPORTED_MODULE_21__["ManageSalonsService"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HTTP_INTERCEPTORS"],
          useClass: _services_authConfig_interceptor__WEBPACK_IMPORTED_MODULE_23__["AuthInterceptor"],
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "a9TL":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/tables/tables.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function a9TL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"flex flex-wrap mt-4\">\r\n  <div class=\"w-full mb-12 px-4\">\r\n    <app-card-table></app-card-table>\r\n  </div>\r\n  <div class=\"w-full mb-12 px-4\">\r\n    <app-card-table color=\"dark\"></app-card-table>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "dnvD":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function dnvD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\r\n  <main>\r\n    <section class=\"relative w-full h-full py-40 min-h-screen\">\r\n      <div\r\n        class=\"absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full\"\r\n        style=\"background-image: url('assets/img/register_bg_2.png')\"\r\n      ></div>\r\n      <router-outlet></router-outlet>\r\n    </section>\r\n  </main>\r\n</div>\r\n";
      /***/
    },

    /***/
    "gFck":
    /*!**********************************************************************!*\
      !*** ./src/app/views/admin/manage-salons/manage-salons.component.ts ***!
      \**********************************************************************/

    /*! exports provided: ManageSalonsComponent */

    /***/
    function gFck(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageSalonsComponent", function () {
        return ManageSalonsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_manage_salons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./manage-salons.component.html */
      "S1No");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ManageSalonsComponent = /*#__PURE__*/function () {
        function ManageSalonsComponent() {
          _classCallCheck(this, ManageSalonsComponent);
        }

        _createClass(ManageSalonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ManageSalonsComponent;
      }();

      ManageSalonsComponent.ctorParameters = function () {
        return [];
      };

      ManageSalonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-manage-salons",
        template: _raw_loader_manage_salons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ManageSalonsComponent);
      /***/
    },

    /***/
    "kku7":
    /*!******************************************************!*\
      !*** ./src/app/views/error404/error404.component.ts ***!
      \******************************************************/

    /*! exports provided: Error404Component */

    /***/
    function kku7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Error404Component", function () {
        return Error404Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_error404_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./error404.component.html */
      "LDS7");
      /* harmony import */


      var _error404_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./error404.component.css */
      "PxUm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Error404Component = /*#__PURE__*/function () {
        function Error404Component() {
          _classCallCheck(this, Error404Component);
        }

        _createClass(Error404Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Error404Component;
      }();

      Error404Component.ctorParameters = function () {
        return [];
      };

      Error404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-error404',
        template: _raw_loader_error404_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_error404_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Error404Component);
      /***/
    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, router) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.router = router;
          this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
          this.currentUser = {};
        } // Sign-in


        _createClass(AuthService, [{
          key: "logIn",
          value: function logIn(user) {
            var _this9 = this;

            return this.http.post("".concat(this.endpoint, "/auth/login"), user).subscribe(function (res) {
              console.log(res);
              localStorage.setItem('access_token', res.token);
              localStorage.setItem('user_id', res.user._id);

              _this9.router.navigate(['admin/clients']);
            });
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return localStorage.getItem('access_token');
          }
        }, {
          key: "verifyToken",
          value: function verifyToken(token) {
            this.headers.set('Authorization', "Bearer ".concat(token));
            return this.http.get("".concat(this.endpoint, "/auth/verifyauthentication"));
          }
        }, {
          key: "isLoggedIn",
          get: function get() {
            var authToken = localStorage.getItem('access_token');
            return authToken !== null ? true : false;
          }
        }, {
          key: "doLogout",
          value: function doLogout() {
            localStorage.removeItem('user_id');

            if (localStorage.removeItem('access_token') == null) {
              this.router.navigate(['auth/login']);
            }
          } // Error 

        }, {
          key: "handleError",
          value: function handleError(error) {
            var msg = '';

            if (error.error instanceof ErrorEvent) {
              // client-side error
              msg = error.error.message;
            } else {
              // server-side error
              msg = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(msg);
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "owMO":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/pages-dropdown/pages-dropdown.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function owMO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a\r\n  class=\"\r\n    lg:text-white lg:hover:text-blueGray-200\r\n    text-blueGray-700\r\n    px-3\r\n    py-4\r\n    lg:py-2\r\n    flex\r\n    items-center\r\n    text-xs\r\n    uppercase\r\n    font-bold\r\n  \"\r\n  href=\"#pablo\"\r\n  (click)=\"toggleDropdown($event)\"\r\n  #btnDropdownRef\r\n>\r\n  Demo Pages\r\n</a>\r\n<div\r\n  class=\"\r\n    bg-white\r\n    text-base\r\n    z-50\r\n    float-left\r\n    py-2\r\n    list-none\r\n    text-left\r\n    rounded\r\n    shadow-lg\r\n    min-w-48\r\n  \"\r\n  [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\r\n  #popoverDropdownRef\r\n>\r\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\r\n  <span\r\n    class=\"\r\n      text-sm\r\n      pt-2\r\n      pb-0\r\n      px-4\r\n      font-bold\r\n      block\r\n      w-full\r\n      whitespace-nowrap\r\n      bg-transparent\r\n      text-blueGray-400\r\n    \"\r\n  >\r\n    Auth Layout\r\n  </span>\r\n  <a\r\n    [routerLink]=\"['/auth/login']\"\r\n    class=\"\r\n      text-sm\r\n      py-2\r\n      px-4\r\n      font-normal\r\n      block\r\n      w-full\r\n      whitespace-nowrap\r\n      bg-transparent\r\n      text-blueGray-700\r\n    \"\r\n  >\r\n    Login\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/auth/register']\"\r\n    class=\"\r\n      text-sm\r\n      py-2\r\n      px-4\r\n      font-normal\r\n      block\r\n      w-full\r\n      whitespace-nowrap\r\n      bg-transparent\r\n      text-blueGray-700\r\n    \"\r\n  >\r\n    Register\r\n  </a>\r\n</div>\r\n";
      /***/
    },

    /***/
    "rD10":
    /*!****************************************************!*\
      !*** ./src/app/services/authConfig.interceptor.ts ***!
      \****************************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function rD10(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.service */
      "lGQG");

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(authService) {
          _classCallCheck(this, AuthInterceptor);

          this.authService = authService;
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var authToken = this.authService.getToken();
            req = req.clone({
              setHeaders: {
                Authorization: "Bearer " + authToken
              }
            });
            return next.handle(req);
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
      /***/
    },

    /***/
    "rKqC":
    /*!****************************************************!*\
      !*** ./src/app/views/admin/maps/maps.component.ts ***!
      \****************************************************/

    /*! exports provided: MapsComponent */

    /***/
    function rKqC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapsComponent", function () {
        return MapsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_maps_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./maps.component.html */
      "165v");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MapsComponent = /*#__PURE__*/function () {
        function MapsComponent() {
          _classCallCheck(this, MapsComponent);
        }

        _createClass(MapsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MapsComponent;
      }();

      MapsComponent.ctorParameters = function () {
        return [];
      };

      MapsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-maps",
        template: _raw_loader_maps_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], MapsComponent);
      /***/
    },

    /***/
    "s5KC":
    /*!****************************************************!*\
      !*** ./src/app/services/manage-clients.service.ts ***!
      \****************************************************/

    /*! exports provided: ManageClientsService */

    /***/
    function s5KC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageClientsService", function () {
        return ManageClientsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var ManageClientsService = /*#__PURE__*/function () {
        function ManageClientsService(http) {
          _classCallCheck(this, ManageClientsService);

          this.http = http;
          this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        }

        _createClass(ManageClientsService, [{
          key: "getClients",
          value: function getClients() {
            return this.http.get("".concat(this.endpoint, "/customer"));
          }
        }]);

        return ManageClientsService;
      }();

      ManageClientsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      ManageClientsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], ManageClientsService);
      /***/
    },

    /***/
    "vWvs":
    /*!*********************************************************************!*\
      !*** ./src/app/components/dropdowns/dropdown/dropdown.component.ts ***!
      \*********************************************************************/

    /*! exports provided: DropdownComponent */

    /***/
    function vWvs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () {
        return DropdownComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dropdown.component.html */
      "3YbZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DropdownComponent = /*#__PURE__*/function () {
        function DropdownComponent() {
          _classCallCheck(this, DropdownComponent);
        }

        _createClass(DropdownComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DropdownComponent;
      }();

      DropdownComponent.ctorParameters = function () {
        return [];
      };

      DropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dropdown',
        template: _raw_loader_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], DropdownComponent);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./layouts/admin/admin.component */
      "R+tk");
      /* harmony import */


      var _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./layouts/auth/auth.component */
      "Vbwu");
      /* harmony import */


      var _services_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/auth.guard */
      "+VzF");
      /* harmony import */


      var _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./views/admin/dashboard/dashboard.component */
      "zmeh");
      /* harmony import */


      var _views_admin_manage_salons_manage_salons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./views/admin/manage-salons/manage-salons.component */
      "gFck");
      /* harmony import */


      var _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./views/auth/login/login.component */
      "/kjZ");
      /* harmony import */


      var _views_create_salon_create_salon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./views/create-salon/create-salon.component */
      "T8Xr");
      /* harmony import */


      var _views_error404_error404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./views/error404/error404.component */
      "kku7"); // layouts
      // admin views
      // auth views


      var routes = [{
        path: "create/salon",
        component: _views_create_salon_create_salon_component__WEBPACK_IMPORTED_MODULE_9__["CreateSalonComponent"]
      }, // admin views
      {
        path: "admin",
        component: _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [{
          path: "clients",
          component: _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
          canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
        }, {
          path: "salons",
          component: _views_admin_manage_salons_manage_salons_component__WEBPACK_IMPORTED_MODULE_7__["ManageSalonsComponent"],
          canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
        }, {
          path: "",
          redirectTo: "dashboard",
          pathMatch: "full"
        }]
      }, // auth views
      {
        path: "auth",
        component: _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
        children: [{
          path: "login",
          component: _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
        }, {
          path: "",
          redirectTo: "login",
          pathMatch: "full"
        }]
      }, {
        path: "error-404",
        component: _views_error404_error404_component__WEBPACK_IMPORTED_MODULE_10__["Error404Component"]
      }, {
        path: "",
        redirectTo: "auth/login",
        pathMatch: "full"
      }, {
        path: "**",
        redirectTo: "error-404",
        pathMatch: "full"
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "wcq5":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/dropdowns/pages-dropdown/pages-dropdown.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: PagesDropdownComponent */

    /***/
    function wcq5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagesDropdownComponent", function () {
        return PagesDropdownComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pages_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pages-dropdown.component.html */
      "owMO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @popperjs/core */
      "EjV/");

      var PagesDropdownComponent = /*#__PURE__*/function () {
        function PagesDropdownComponent() {
          _classCallCheck(this, PagesDropdownComponent);

          this.dropdownPopoverShow = false;
        }

        _createClass(PagesDropdownComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleDropdown",
          value: function toggleDropdown(event) {
            event.preventDefault();

            if (this.dropdownPopoverShow) {
              this.dropdownPopoverShow = false;
            } else {
              this.dropdownPopoverShow = true;
              this.createPoppper();
            }
          }
        }, {
          key: "createPoppper",
          value: function createPoppper() {
            Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
              placement: "bottom-start"
            });
          }
        }]);

        return PagesDropdownComponent;
      }();

      PagesDropdownComponent.propDecorators = {
        btnDropdownRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["btnDropdownRef", {
            "static": false
          }]
        }],
        popoverDropdownRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["popoverDropdownRef", {
            "static": false
          }]
        }]
      };
      PagesDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-pages-dropdown",
        template: _raw_loader_pages_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PagesDropdownComponent);
      /***/
    },

    /***/
    "zBoC":
    /*!*********************************************************!*\
      !*** ./src/app/components/sidebar/sidebar.component.ts ***!
      \*********************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function zBoC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "KKA+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent() {
          _classCallCheck(this, SidebarComponent);

          this.collapseShow = "hidden";
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleCollapseShow",
          value: function toggleCollapseShow(classes) {
            this.collapseShow = classes;
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ctorParameters = function () {
        return [];
      };

      SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-sidebar",
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], SidebarComponent);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zmeh":
    /*!**************************************************************!*\
      !*** ./src/app/views/admin/dashboard/dashboard.component.ts ***!
      \**************************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function zmeh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "KxJz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ctorParameters = function () {
        return [];
      };

      DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], DashboardComponent);
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map