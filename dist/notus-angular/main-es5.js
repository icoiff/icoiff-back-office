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
    "1DoU":
    /*!***************************************************************!*\
      !*** ./src/app/components/footers/footer/footer.component.ts ***!
      \***************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function DoU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "CzbP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);

          this.date = new Date().getFullYear();
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ctorParameters = function () {
        return [];
      };

      FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-footer",
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FooterComponent);
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
    "4b2p":
    /*!***************************************************************************!*\
      !*** ./src/app/components/navbars/index-navbar/index-navbar.component.ts ***!
      \***************************************************************************/

    /*! exports provided: IndexNavbarComponent */

    /***/
    function b2p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexNavbarComponent", function () {
        return IndexNavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_index_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./index-navbar.component.html */
      "RORk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var IndexNavbarComponent = /*#__PURE__*/function () {
        function IndexNavbarComponent() {
          _classCallCheck(this, IndexNavbarComponent);

          this.navbarOpen = false;
        }

        _createClass(IndexNavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setNavbarOpen",
          value: function setNavbarOpen() {
            this.navbarOpen = !this.navbarOpen;
          }
        }]);

        return IndexNavbarComponent;
      }();

      IndexNavbarComponent.ctorParameters = function () {
        return [];
      };

      IndexNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-index-navbar",
        template: _raw_loader_index_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], IndexNavbarComponent);
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
    "8GP7":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/profile/profile.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function GP7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-auth-navbar></app-auth-navbar>\r\n<main class=\"profile-page\">\r\n  <section class=\"relative block h-500-px\">\r\n    <div\r\n      class=\"absolute top-0 w-full h-full bg-center bg-cover\"\r\n      style=\"\r\n        background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80');\r\n      \"\r\n    >\r\n      <span\r\n        id=\"blackOverlay\"\r\n        class=\"w-full h-full absolute opacity-50 bg-black\"\r\n      ></span>\r\n    </div>\r\n    <div\r\n      class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px\"\r\n      style=\"transform: translateZ(0)\"\r\n    >\r\n      <svg\r\n        class=\"absolute bottom-0 overflow-hidden\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        preserveAspectRatio=\"none\"\r\n        version=\"1.1\"\r\n        viewBox=\"0 0 2560 100\"\r\n        x=\"0\"\r\n        y=\"0\"\r\n      >\r\n        <polygon\r\n          class=\"text-blueGray-200 fill-current\"\r\n          points=\"2560 0 2560 100 0 100\"\r\n        ></polygon>\r\n      </svg>\r\n    </div>\r\n  </section>\r\n  <section class=\"relative py-16 bg-blueGray-200\">\r\n    <div class=\"container mx-auto px-4\">\r\n      <div\r\n        class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64\"\r\n      >\r\n        <div class=\"px-6\">\r\n          <div class=\"flex flex-wrap justify-center\">\r\n            <div class=\"w-full lg:w-3/12 px-4 lg:order-2 flex justify-center\">\r\n              <div class=\"relative\">\r\n                <img\r\n                  alt=\"...\"\r\n                  src=\"assets/img/team-2-800x800.jpg\"\r\n                  class=\"shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px\"\r\n                />\r\n              </div>\r\n            </div>\r\n            <div\r\n              class=\"w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center\"\r\n            >\r\n              <div class=\"py-6 px-3 mt-32 sm:mt-0\">\r\n                <button\r\n                  class=\"bg-red-600 active:bg-red-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150\"\r\n                  type=\"button\"\r\n                >\r\n                  Connect\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"w-full lg:w-4/12 px-4 lg:order-1\">\r\n              <div class=\"flex justify-center py-4 lg:pt-4 pt-8\">\r\n                <div class=\"mr-4 p-3 text-center\">\r\n                  <span\r\n                    class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\r\n                  >\r\n                    22\r\n                  </span>\r\n                  <span class=\"text-sm text-blueGray-400\">Friends</span>\r\n                </div>\r\n                <div class=\"mr-4 p-3 text-center\">\r\n                  <span\r\n                    class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\r\n                  >\r\n                    10\r\n                  </span>\r\n                  <span class=\"text-sm text-blueGray-400\">Photos</span>\r\n                </div>\r\n                <div class=\"lg:mr-4 p-3 text-center\">\r\n                  <span\r\n                    class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\r\n                  >\r\n                    89\r\n                  </span>\r\n                  <span class=\"text-sm text-blueGray-400\">Comments</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"text-center mt-12\">\r\n            <h3\r\n              class=\"text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2\"\r\n            >\r\n              Jenna Stones\r\n            </h3>\r\n            <div\r\n              class=\"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase\"\r\n            >\r\n              <i\r\n                class=\"fas fa-map-marker-alt mr-2 text-lg text-blueGray-400\"\r\n              ></i>\r\n              Los Angeles, California\r\n            </div>\r\n            <div class=\"mb-2 text-blueGray-600 mt-10\">\r\n              <i class=\"fas fa-briefcase mr-2 text-lg text-blueGray-400\"></i>\r\n              Solution Manager - Creative Tim Officer\r\n            </div>\r\n            <div class=\"mb-2 text-blueGray-600\">\r\n              <i class=\"fas fa-university mr-2 text-lg text-blueGray-400\"></i>\r\n              University of Computer Science\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-10 py-10 border-t border-blueGray-200 text-center\">\r\n            <div class=\"flex flex-wrap justify-center\">\r\n              <div class=\"w-full lg:w-9/12 px-4\">\r\n                <p class=\"mb-4 text-lg leading-relaxed text-blueGray-700\">\r\n                  An artist of considerable range, Jenna the name taken by\r\n                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs\r\n                  and records all of his own music, giving it a warm, intimate\r\n                  feel with a solid groove structure. An artist of considerable\r\n                  range.\r\n                </p>\r\n                <a href=\"javascript:void(0)\" class=\"font-normal text-red-600\">\r\n                  Show more\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n<app-footer></app-footer>\r\n";
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
    "AN84":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/landing/landing.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function AN84(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-auth-navbar></app-auth-navbar>\r\n<main>\r\n  <div\r\n    class=\"relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75\"\r\n  >\r\n    <div\r\n      class=\"absolute top-0 w-full h-full bg-center bg-cover\"\r\n      style=\"\r\n        background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');\r\n      \"\r\n    >\r\n      <span\r\n        id=\"blackOverlay\"\r\n        class=\"w-full h-full absolute opacity-75 bg-black\"\r\n      ></span>\r\n    </div>\r\n    <div class=\"container relative mx-auto\">\r\n      <div class=\"items-center flex flex-wrap\">\r\n        <div class=\"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center\">\r\n          <div class=\"pr-12\">\r\n            <h1 class=\"text-white font-semibold text-5xl\">\r\n              Your story starts with us.\r\n            </h1>\r\n            <p class=\"mt-4 text-lg text-blueGray-200\">\r\n              This is a simple example of a Landing Page you can build using\r\n              Notus Angular. It features multiple CSS components based on the\r\n              Tailwind CSS design system.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div\r\n      class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px\"\r\n      style=\"transform: translateZ(0)\"\r\n    >\r\n      <svg\r\n        class=\"absolute bottom-0 overflow-hidden\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        preserveAspectRatio=\"none\"\r\n        version=\"1.1\"\r\n        viewBox=\"0 0 2560 100\"\r\n        x=\"0\"\r\n        y=\"0\"\r\n      >\r\n        <polygon\r\n          class=\"text-blueGray-200 fill-current\"\r\n          points=\"2560 0 2560 100 0 100\"\r\n        ></polygon>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n\r\n  <section class=\"pb-20 bg-blueGray-200 -mt-24\">\r\n    <div class=\"container mx-auto px-4\">\r\n      <div class=\"flex flex-wrap\">\r\n        <div class=\"lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center\">\r\n          <div\r\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\"\r\n          >\r\n            <div class=\"px-4 py-5 flex-auto\">\r\n              <div\r\n                class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400\"\r\n              >\r\n                <i class=\"fas fa-award\"></i>\r\n              </div>\r\n              <h6 class=\"text-xl font-semibold\">Awarded Agency</h6>\r\n              <p class=\"mt-2 mb-4 text-blueGray-500\">\r\n                Divide details about your product or agency work into parts. A\r\n                paragraph describing a feature will be enough.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"w-full md:w-4/12 px-4 text-center\">\r\n          <div\r\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\"\r\n          >\r\n            <div class=\"px-4 py-5 flex-auto\">\r\n              <div\r\n                class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400\"\r\n              >\r\n                <i class=\"fas fa-retweet\"></i>\r\n              </div>\r\n              <h6 class=\"text-xl font-semibold\">Free Revisions</h6>\r\n              <p class=\"mt-2 mb-4 text-blueGray-500\">\r\n                Keep you user engaged by providing meaningful information.\r\n                Remember that by this time, the user is curious.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"pt-6 w-full md:w-4/12 px-4 text-center\">\r\n          <div\r\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\"\r\n          >\r\n            <div class=\"px-4 py-5 flex-auto\">\r\n              <div\r\n                class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400\"\r\n              >\r\n                <i class=\"fas fa-fingerprint\"></i>\r\n              </div>\r\n              <h6 class=\"text-xl font-semibold\">Verified Company</h6>\r\n              <p class=\"mt-2 mb-4 text-blueGray-500\">\r\n                Write a few lines about each one. A paragraph describing a\r\n                feature will be enough. Keep you user engaged!\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"flex flex-wrap items-center mt-32\">\r\n        <div class=\"w-full md:w-5/12 px-4 mr-auto ml-auto\">\r\n          <div\r\n            class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\"\r\n          >\r\n            <i class=\"fas fa-user-friends text-xl\"></i>\r\n          </div>\r\n          <h3 class=\"text-3xl mb-2 font-semibold leading-normal\">\r\n            Working with us is a pleasure\r\n          </h3>\r\n          <p\r\n            class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600\"\r\n          >\r\n            Don't let your uses guess by attaching tooltips and popoves to any\r\n            element. Just make sure you enable them first via JavaScript.\r\n          </p>\r\n          <p\r\n            class=\"text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600\"\r\n          >\r\n            The kit comes with three pre-built pages to help you get started\r\n            faster. You can change the text and images and you're good to go.\r\n            Just make sure you enable them first via JavaScript.\r\n          </p>\r\n          <a [routerLink]=\"['/']\" class=\"font-bold text-blueGray-700 mt-8\">\r\n            Check Notus Angular!\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"w-full md:w-4/12 px-4 mr-auto ml-auto\">\r\n          <div\r\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-600\"\r\n          >\r\n            <img\r\n              alt=\"...\"\r\n              src=\"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80\"\r\n              class=\"w-full align-middle rounded-t-lg\"\r\n            />\r\n            <blockquote class=\"relative p-8 mb-4\">\r\n              <svg\r\n                preserveAspectRatio=\"none\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                viewBox=\"0 0 583 95\"\r\n                class=\"absolute left-0 w-full block h-95-px -top-94-px\"\r\n              >\r\n                <polygon\r\n                  points=\"-30,95 583,95 583,65\"\r\n                  class=\"text-red-600 fill-current\"\r\n                ></polygon>\r\n              </svg>\r\n              <h4 class=\"text-xl font-bold text-white\">Top Notch Services</h4>\r\n              <p class=\"text-md font-light mt-2 text-white\">\r\n                The Arctic Ocean freezes every winter and much of the sea-ice\r\n                then thaws every summer, and that process will continue whatever\r\n                happens.\r\n              </p>\r\n            </blockquote>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"relative py-20\">\r\n    <div\r\n      class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\"\r\n      style=\"transform: translateZ(0)\"\r\n    >\r\n      <svg\r\n        class=\"absolute bottom-0 overflow-hidden\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        preserveAspectRatio=\"none\"\r\n        version=\"1.1\"\r\n        viewBox=\"0 0 2560 100\"\r\n        x=\"0\"\r\n        y=\"0\"\r\n      >\r\n        <polygon\r\n          class=\"text-white fill-current\"\r\n          points=\"2560 0 2560 100 0 100\"\r\n        ></polygon>\r\n      </svg>\r\n    </div>\r\n\r\n    <div class=\"container mx-auto px-4\">\r\n      <div class=\"items-center flex flex-wrap\">\r\n        <div class=\"w-full md:w-4/12 ml-auto mr-auto px-4\">\r\n          <img\r\n            alt=\"...\"\r\n            class=\"max-w-full rounded-lg shadow-lg\"\r\n            src=\"https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80\"\r\n          />\r\n        </div>\r\n        <div class=\"w-full md:w-5/12 ml-auto mr-auto px-4\">\r\n          <div class=\"md:pr-12\">\r\n            <div\r\n              class=\"text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-300\"\r\n            >\r\n              <i class=\"fas fa-rocket text-xl\"></i>\r\n            </div>\r\n            <h3 class=\"text-3xl font-semibold\">A growing company</h3>\r\n            <p class=\"mt-4 text-lg leading-relaxed text-blueGray-500\">\r\n              The extension comes with three pre-built pages to help you get\r\n              started faster. You can change the text and images and you're good\r\n              to go.\r\n            </p>\r\n            <ul class=\"list-none mt-6\">\r\n              <li class=\"py-2\">\r\n                <div class=\"flex items-center\">\r\n                  <div>\r\n                    <span\r\n                      class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3\"\r\n                    >\r\n                      <i class=\"fas fa-fingerprint\"></i>\r\n                    </span>\r\n                  </div>\r\n                  <div>\r\n                    <h4 class=\"text-blueGray-500\">\r\n                      Carefully crafted components\r\n                    </h4>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"flex items-center\">\r\n                  <div>\r\n                    <span\r\n                      class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3\"\r\n                    >\r\n                      <i class=\"fab fa-html5\"></i>\r\n                    </span>\r\n                  </div>\r\n                  <div>\r\n                    <h4 class=\"text-blueGray-500\">Amazing page examples</h4>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"flex items-center\">\r\n                  <div>\r\n                    <span\r\n                      class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3\"\r\n                    >\r\n                      <i class=\"far fa-paper-plane\"></i>\r\n                    </span>\r\n                  </div>\r\n                  <div>\r\n                    <h4 class=\"text-blueGray-500\">Dynamic components</h4>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"pt-20 pb-48\">\r\n    <div class=\"container mx-auto px-4\">\r\n      <div class=\"flex flex-wrap justify-center text-center mb-24\">\r\n        <div class=\"w-full lg:w-6/12 px-4\">\r\n          <h2 class=\"text-4xl font-semibold\">Here are our heroes</h2>\r\n          <p class=\"text-lg leading-relaxed m-4 text-blueGray-500\">\r\n            According to the National Oceanic and Atmospheric Administration,\r\n            Ted, Scambos, NSIDClead scentist, puts the potentially record\r\n            maximum.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"flex flex-wrap\">\r\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\r\n          <div class=\"px-6\">\r\n            <img\r\n              alt=\"...\"\r\n              src=\"assets/img/team-1-800x800.jpg\"\r\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\r\n            />\r\n            <div class=\"pt-6 text-center\">\r\n              <h5 class=\"text-xl font-bold\">Ryan Tompson</h5>\r\n              <p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\">\r\n                Web Developer\r\n              </p>\r\n              <div class=\"mt-6\">\r\n                <button\r\n                  class=\"bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-twitter\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-facebook-f\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-dribbble\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\r\n          <div class=\"px-6\">\r\n            <img\r\n              alt=\"...\"\r\n              src=\"assets/img/team-2-800x800.jpg\"\r\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\r\n            />\r\n            <div class=\"pt-6 text-center\">\r\n              <h5 class=\"text-xl font-bold\">Romina Hadid</h5>\r\n              <p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\">\r\n                Marketing Specialist\r\n              </p>\r\n              <div class=\"mt-6\">\r\n                <button\r\n                  class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-google\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-facebook-f\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\r\n          <div class=\"px-6\">\r\n            <img\r\n              alt=\"...\"\r\n              src=\"assets/img/team-3-800x800.jpg\"\r\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\r\n            />\r\n            <div class=\"pt-6 text-center\">\r\n              <h5 class=\"text-xl font-bold\">Alexa Smith</h5>\r\n              <p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\">\r\n                UI/UX Designer\r\n              </p>\r\n              <div class=\"mt-6\">\r\n                <button\r\n                  class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-google\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-twitter\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-instagram\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\r\n          <div class=\"px-6\">\r\n            <img\r\n              alt=\"...\"\r\n              src=\"assets/img/team-4-470x470.png\"\r\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\r\n            />\r\n            <div class=\"pt-6 text-center\">\r\n              <h5 class=\"text-xl font-bold\">Jenna Kardi</h5>\r\n              <p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\">\r\n                Founder and CEO\r\n              </p>\r\n              <div class=\"mt-6\">\r\n                <button\r\n                  class=\"bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-dribbble\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-google\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-twitter\"></i>\r\n                </button>\r\n                <button\r\n                  class=\"bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-instagram\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"pb-20 relative block bg-blueGray-800\">\r\n    <div\r\n      class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\"\r\n      style=\"transform: translateZ(0)\"\r\n    >\r\n      <svg\r\n        class=\"absolute bottom-0 overflow-hidden\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        preserveAspectRatio=\"none\"\r\n        version=\"1.1\"\r\n        viewBox=\"0 0 2560 100\"\r\n        x=\"0\"\r\n        y=\"0\"\r\n      >\r\n        <polygon\r\n          class=\"text-blueGray-800 fill-current\"\r\n          points=\"2560 0 2560 100 0 100\"\r\n        ></polygon>\r\n      </svg>\r\n    </div>\r\n\r\n    <div class=\"container mx-auto px-4 lg:pt-24 lg:pb-64\">\r\n      <div class=\"flex flex-wrap text-center justify-center\">\r\n        <div class=\"w-full lg:w-6/12 px-4\">\r\n          <h2 class=\"text-4xl font-semibold text-white\">Build something</h2>\r\n          <p class=\"text-lg leading-relaxed mt-4 mb-4 text-blueGray-400\">\r\n            Put the potentially record low maximum sea ice extent tihs year down\r\n            to low ice. According to the National Oceanic and Atmospheric\r\n            Administration, Ted, Scambos.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"flex flex-wrap mt-12 justify-center\">\r\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\r\n          <div\r\n            class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\r\n          >\r\n            <i class=\"fas fa-medal text-xl\"></i>\r\n          </div>\r\n          <h6 class=\"text-xl mt-5 font-semibold text-white\">\r\n            Excelent Services\r\n          </h6>\r\n          <p class=\"mt-2 mb-4 text-blueGray-400\">\r\n            Some quick example text to build on the card title and make up the\r\n            bulk of the card's content.\r\n          </p>\r\n        </div>\r\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\r\n          <div\r\n            class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\r\n          >\r\n            <i class=\"fas fa-poll text-xl\"></i>\r\n          </div>\r\n          <h5 class=\"text-xl mt-5 font-semibold text-white\">\r\n            Grow your market\r\n          </h5>\r\n          <p class=\"mt-2 mb-4 text-blueGray-400\">\r\n            Some quick example text to build on the card title and make up the\r\n            bulk of the card's content.\r\n          </p>\r\n        </div>\r\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\r\n          <div\r\n            class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\r\n          >\r\n            <i class=\"fas fa-lightbulb text-xl\"></i>\r\n          </div>\r\n          <h5 class=\"text-xl mt-5 font-semibold text-white\">Launch time</h5>\r\n          <p class=\"mt-2 mb-4 text-blueGray-400\">\r\n            Some quick example text to build on the card title and make up the\r\n            bulk of the card's content.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"relative block py-24 lg:pt-0 bg-blueGray-800\">\r\n    <div class=\"container mx-auto px-4\">\r\n      <div class=\"flex flex-wrap justify-center lg:-mt-64 -mt-48\">\r\n        <div class=\"w-full lg:w-6/12 px-4\">\r\n          <div\r\n            class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200\"\r\n          >\r\n            <div class=\"flex-auto p-5 lg:p-10\">\r\n              <h4 class=\"text-2xl font-semibold\">Want to work with us?</h4>\r\n              <p class=\"leading-relaxed mt-1 mb-4 text-blueGray-500\">\r\n                Complete this form and we will get back to you in 24 hours.\r\n              </p>\r\n              <div class=\"relative w-full mb-3 mt-8\">\r\n                <label\r\n                  class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                  htmlFor=\"full-name\"\r\n                >\r\n                  Full Name\r\n                </label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n                  placeholder=\"Full Name\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"relative w-full mb-3\">\r\n                <label\r\n                  class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                  htmlFor=\"email\"\r\n                >\r\n                  Email\r\n                </label>\r\n                <input\r\n                  type=\"email\"\r\n                  class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\r\n                  placeholder=\"Email\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"relative w-full mb-3\">\r\n                <label\r\n                  class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\r\n                  htmlFor=\"message\"\r\n                >\r\n                  Message\r\n                </label>\r\n                <textarea\r\n                  rows=\"4\"\r\n                  cols=\"80\"\r\n                  class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full\"\r\n                  placeholder=\"Type a message...\"\r\n                ></textarea>\r\n              </div>\r\n              <div class=\"text-center mt-6\">\r\n                <button\r\n                  class=\"bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\r\n                  type=\"button\"\r\n                >\r\n                  Send Message\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n<app-footer></app-footer>\r\n";
      /***/
    },

    /***/
    "AiJS":
    /*!************************************************!*\
      !*** ./src/app/views/index/index.component.ts ***!
      \************************************************/

    /*! exports provided: IndexComponent */

    /***/
    function AiJS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
        return IndexComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./index.component.html */
      "W8yq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var IndexComponent = /*#__PURE__*/function () {
        function IndexComponent() {
          _classCallCheck(this, IndexComponent);
        }

        _createClass(IndexComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return IndexComponent;
      }();

      IndexComponent.ctorParameters = function () {
        return [];
      };

      IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-index",
        template: _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], IndexComponent);
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


      __webpack_exports__["default"] = "<div\r\n  class=\"\r\n    relative\r\n    flex flex-col\r\n    min-w-0\r\n    break-words\r\n    w-full\r\n    mb-6\r\n    shadow-lg\r\n    rounded\r\n  \"\r\n  [ngClass]=\"color === 'light' ? 'bg-white' : 'bg-red-900 text-white'\"\r\n>\r\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"relative w-full px-4 max-w-full flex-grow justify-between\">\r\n        <h3\r\n          class=\"font-semibold text-lg\"\r\n          [ngClass]=\"color === 'light' ? 'text-blueGray-700' : 'text-white'\"\r\n        >\r\n          Salons\r\n        </h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"block w-full overflow-x-auto\">\r\n    <!-- Projects table -->\r\n    <table class=\"items-center w-full bg-transparent border-collapse\">\r\n      <thead>\r\n        <tr>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            ID\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Nom\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Managers\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Coiffeurs\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Formules\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Date de création\r\n          </th>\r\n          <th\r\n            class=\"\r\n              px-6\r\n              align-middle\r\n              border border-solid\r\n              py-3\r\n              text-xs\r\n              uppercase\r\n              border-l-0 border-r-0\r\n              whitespace-nowrap\r\n              font-semibold\r\n              text-left\r\n            \"\r\n            [ngClass]=\"\r\n              color === 'light'\r\n                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'\r\n                : 'bg-red-800 text-red-300 border-red-700'\r\n            \"\r\n          >\r\n            Image\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let salon of salons; let i = index\" [attr.data-index]=\"i\">\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ i }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ salon.name }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            <ul *ngFor=\"let manager of salon.managers\">\r\n              <li>{{ manager.first_name }} {{ manager.last_name }}</li>\r\n            </ul>\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            <ul *ngFor=\"let hairdresser of salon.hairdressers\">\r\n              <li>{{ hairdresser.first_name }} {{ hairdresser.last_name }}</li>\r\n            </ul>\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n            \"\r\n          >\r\n            <ul class=\"list-disc\" *ngFor=\"let formula of salon.formulas\">\r\n              <li>{{ formula.formula.name }} | {{ formula.price }} DT</li>\r\n            </ul>\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            {{ salon.createdAt | timeago: live }}\r\n          </td>\r\n          <td\r\n            class=\"\r\n              border-t-0\r\n              px-6\r\n              align-middle\r\n              border-l-0 border-r-0\r\n              text-xs\r\n              whitespace-nowrap\r\n              p-4\r\n            \"\r\n          >\r\n            <img\r\n              class=\"inline-block h-6 w-6 rounded-md max-w-100-px\"\r\n              [src]=\"salon.image\"\r\n              alt=\"\"\r\n            />\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n<div class=\"flex justify-end\">\r\n  <app-modal></app-modal>\r\n</div>\r\n";
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
        production: false,
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
    "CzbP":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer/footer.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CzbP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer class=\"relative bg-blueGray-200 pt-8 pb-6\">\r\n  <div\r\n    class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\"\r\n    style=\"transform: translateZ(0)\"\r\n  >\r\n    <svg\r\n      class=\"absolute bottom-0 overflow-hidden\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      preserveAspectRatio=\"none\"\r\n      version=\"1.1\"\r\n      viewBox=\"0 0 2560 100\"\r\n      x=\"0\"\r\n      y=\"0\"\r\n    >\r\n      <polygon\r\n        class=\"text-blueGray-200 fill-current\"\r\n        points=\"2560 0 2560 100 0 100\"\r\n      ></polygon>\r\n    </svg>\r\n  </div>\r\n  <div class=\"container mx-auto px-4\">\r\n    <div class=\"flex flex-wrap text-center lg:text-left\">\r\n      <div class=\"w-full lg:w-6/12 px-4\">\r\n        <h4 class=\"text-3xl font-semibold\">Let's keep in touch!</h4>\r\n        <h5 class=\"text-lg mt-0 mb-2 text-blueGray-600\">\r\n          Find us on any of these platforms, we respond 1-2 business days.\r\n        </h5>\r\n        <div class=\"mt-6 lg:mb-0 mb-6\">\r\n          <button\r\n            class=\"bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\r\n            type=\"button\"\r\n          >\r\n            <i class=\"fab fa-twitter\"></i>\r\n          </button>\r\n          <button\r\n            class=\"bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\r\n            type=\"button\"\r\n          >\r\n            <i class=\"fab fa-facebook-square\"></i>\r\n          </button>\r\n          <button\r\n            class=\"bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\r\n            type=\"button\"\r\n          >\r\n            <i class=\"fab fa-dribbble\"></i>\r\n          </button>\r\n          <button\r\n            class=\"bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\r\n            type=\"button\"\r\n          >\r\n            <i class=\"fab fa-github\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"w-full lg:w-6/12 px-4\">\r\n        <div class=\"flex flex-wrap items-top mb-6\">\r\n          <div class=\"w-full lg:w-4/12 px-4 ml-auto\">\r\n            <span\r\n              class=\"block uppercase text-blueGray-500 text-sm font-semibold mb-2\"\r\n            >\r\n              Useful Links\r\n            </span>\r\n            <ul class=\"list-unstyled\">\r\n              <li>\r\n                <a\r\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://www.creative-tim.com/presentation?ref=na-footer\"\r\n                >\r\n                  About Us\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://blog.creative-tim.com?ref=na-footer\"\r\n                >\r\n                  Blog\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://www.github.com/creativetimofficial?ref=na-footer\"\r\n                >\r\n                  Github\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://www.creative-tim.com/bootstrap-themes/free?ref=na-footer\"\r\n                >\r\n                  Free Products\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"w-full lg:w-4/12 px-4\">\r\n            <span\r\n              class=\"block uppercase text-blueGray-500 text-sm font-semibold mb-2\"\r\n            >\r\n              Other Resources\r\n            </span>\r\n            <ul class=\"list-unstyled\">\r\n              <li>\r\n                <a\r\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://github.com/creativetimofficial/notus-angular/blob/main/LICENSE.md?ref=creativetim\"\r\n                >\r\n                  MIT License\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://creative-tim.com/terms?ref=na-footer\"\r\n                >\r\n                  Terms & Conditions\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://creative-tim.com/privacy?ref=na-footer\"\r\n                >\r\n                  Privacy Policy\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://creative-tim.com/contact-us?ref=na-footer\"\r\n                >\r\n                  Contact Us\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr class=\"my-6 border-blueGray-300\" />\r\n    <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\r\n      <div class=\"w-full md:w-4/12 px-4 mx-auto text-center\">\r\n        <div class=\"text-sm text-blueGray-500 font-semibold py-1\">\r\n          Copyright © {{ date }} Notus Angular by\r\n          <a\r\n            href=\"https://www.creative-tim.com?ref=na-footer\"\r\n            class=\"text-blueGray-500 hover:text-blueGray-800\"\r\n          >\r\n            Creative Tim\r\n          </a>\r\n          .\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n";
      /***/
    },

    /***/
    "DLfO":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer-small/footer-small.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DLfO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer\r\n  class=\"pb-6\"\r\n  [ngClass]=\"absolute ? 'absolute w-full bottom-0 bg-blueGray-800' : 'relative'\"\r\n>\r\n  <div class=\"container mx-auto px-4\">\r\n    <hr class=\"mb-6 border-b-1 border-blueGray-600\" />\r\n    <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\r\n      <div class=\"w-full md:w-4/12 px-4\">\r\n        <div\r\n          class=\"text-sm text-white font-semibold py-1 text-center md:text-left\"\r\n        >\r\n          Copyright © {{ date }}\r\n          <a\r\n            href=\"https://www.creative-tim.com?ref=na-footer-small\"\r\n            class=\"text-white hover:text-blueGray-300 text-sm font-semibold py-1\"\r\n          >\r\n            Creative Tim\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"w-full md:w-8/12 px-4\">\r\n        <ul class=\"flex flex-wrap list-none md:justify-end justify-center\">\r\n          <li>\r\n            <a\r\n              href=\"https://www.creative-tim.com?ref=na-footer-small\"\r\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              Creative Tim\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a\r\n              href=\"https://www.creative-tim.com/presentation?ref=na-footer-small\"\r\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              About Us\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a\r\n              href=\"http://blog.creative-tim.com?ref=na-footer-small\"\r\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              Blog\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a\r\n              href=\"https://github.com/creativetimofficial/notus-angular/blob/main/LICENSE.md?ref=creativetim\"\r\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              MIT License\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n";
      /***/
    },

    /***/
    "EbUq":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer-admin/footer-admin.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EbUq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer class=\"block py-4\">\r\n  <div class=\"container mx-auto px-4\">\r\n    <hr class=\"mb-4 border-b-1 border-blueGray-200\" />\r\n    <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\r\n      <div class=\"w-full md:w-4/12 px-4\">\r\n        <div\r\n          class=\"text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left\"\r\n        >\r\n          Copyright © {{ date }}\r\n          <a\r\n            href=\"https://www.creative-tim.com?ref=na-footer-admin\"\r\n            class=\"text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1\"\r\n          >\r\n            Creative Tim\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"w-full md:w-8/12 px-4\">\r\n        <ul class=\"flex flex-wrap list-none md:justify-end justify-center\">\r\n          <li>\r\n            <a\r\n              href=\"https://www.creative-tim.com?ref=na-footer-admin\"\r\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              Creative Tim\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a\r\n              href=\"https://www.creative-tim.com/presentation?ref=na-footer-admin\"\r\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              About Us\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a\r\n              href=\"http://blog.creative-tim.com?ref=na-footer-admin\"\r\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              Blog\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a\r\n              href=\"https://github.com/creativetimofficial/notus-angular/blob/main/LICENSE.md?ref=creativetim\"\r\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\r\n            >\r\n              MIT License\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n";
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


      __webpack_exports__["default"] = "<a\r\n  class=\"text-blueGray-500 block\"\r\n  href=\"#pablo\"\r\n  (click)=\"toggleDropdown($event)\"\r\n  #btnDropdownRef\r\n>\r\n  <div class=\"items-center flex\">\r\n    <span\r\n      class=\"\r\n        w-12\r\n        h-12\r\n        text-sm text-white\r\n        bg-blueGray-200\r\n        inline-flex\r\n        items-center\r\n        justify-center\r\n        rounded-full\r\n      \"\r\n    >\r\n      <img\r\n        alt=\"...\"\r\n        class=\"w-full rounded-full align-middle border-none shadow-lg\"\r\n        src=\"assets/img/team-1-800x800.jpg\"\r\n      />\r\n    </span>\r\n  </div>\r\n</a>\r\n<div class=\"min-w-48 z-50\" #popoverDropdownRef>\r\n  <div\r\n    class=\"\r\n      bg-white\r\n      text-base\r\n      z-50\r\n      float-left\r\n      py-2\r\n      list-none\r\n      text-left\r\n      rounded\r\n      shadow-lg\r\n      mt-1\r\n      min-w-48\r\n    \"\r\n    [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\r\n  >\r\n    <a\r\n      [routerLink]=\"['/admin/profile']\"\r\n      routerLinkActive\r\n      class=\"\r\n        text-sm\r\n        py-2\r\n        px-4\r\n        font-normal\r\n        block\r\n        w-full\r\n        whitespace-nowrap\r\n        bg-transparent\r\n        text-blueGray-700\r\n        cursor-pointer\r\n      \"\r\n    >\r\n    <i\r\n    class=\"fas fa-id-badge mr-2 text-sm\"\r\n    ></i>\r\n    Profile\r\n    </a>\r\n    <div class=\"h-0 my-2 border border-solid border-blueGray-100\"></div>\r\n    <a\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 cursor-pointer\"\r\n      (click)= \"logout()\"\r\n    >\r\n      <i\r\n        class=\"fas fa-sign-out-alt mr-2 text-sm\"\r\n      ></i>\r\n      Logout\r\n    </a>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "J8Ne":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/dropdowns/index-dropdown/index-dropdown.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: IndexDropdownComponent */

    /***/
    function J8Ne(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexDropdownComponent", function () {
        return IndexDropdownComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_index_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./index-dropdown.component.html */
      "e8es");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @popperjs/core */
      "EjV/");

      var IndexDropdownComponent = /*#__PURE__*/function () {
        function IndexDropdownComponent() {
          _classCallCheck(this, IndexDropdownComponent);

          this.dropdownPopoverShow = false;
        }

        _createClass(IndexDropdownComponent, [{
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

        return IndexDropdownComponent;
      }();

      IndexDropdownComponent.propDecorators = {
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
      IndexDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-index-dropdown",
        template: _raw_loader_index_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], IndexDropdownComponent);
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
          var _this3 = this;

          _classCallCheck(this, TableClientsComponent);

          this.manageClientsService = manageClientsService;
          this._color = "light";
          this.live = true;
          this.manageClientsService.getClients().subscribe(function (res) {
            return _this3.clients = res;
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


      __webpack_exports__["default"] = "<nav\r\n  class=\"\r\n    md:left-0\r\n    md:block\r\n    md:fixed\r\n    md:top-0\r\n    md:bottom-0\r\n    md:overflow-y-auto\r\n    md:flex-row\r\n    md:flex-nowrap\r\n    md:overflow-hidden\r\n    shadow-xl\r\n    bg-white\r\n    flex flex-wrap\r\n    items-center\r\n    justify-between\r\n    relative\r\n    md:w-64\r\n    z-10\r\n    py-4\r\n    px-6\r\n  \"\r\n>\r\n  <div\r\n    class=\"\r\n      md:flex-col md:items-stretch md:min-h-full md:flex-nowrap\r\n      px-0\r\n      flex flex-wrap\r\n      items-center\r\n      justify-between\r\n      w-full\r\n      mx-auto\r\n    \"\r\n  >\r\n    <!-- Toggler -->\r\n    <button\r\n      class=\"\r\n        cursor-pointer\r\n        text-black\r\n        opacity-50\r\n        md:hidden\r\n        px-3\r\n        py-1\r\n        text-xl\r\n        leading-none\r\n        bg-transparent\r\n        rounded\r\n        border border-solid border-transparent\r\n      \"\r\n      type=\"button\"\r\n      (click)=\"toggleCollapseShow('bg-white m-2 py-3 px-6')\"\r\n    >\r\n      <i class=\"fas fa-bars\"></i>\r\n    </button>\r\n    <!-- Brand -->\r\n    <a\r\n      [routerLink]=\"['/']\"\r\n      class=\"\r\n        md:block\r\n        text-left\r\n        md:pb-2\r\n        text-blueGray-600\r\n        mr-0\r\n        inline-block\r\n        whitespace-nowrap\r\n        text-sm\r\n        uppercase\r\n        font-bold\r\n        p-4\r\n        px-0\r\n      \"\r\n    >\r\n      <span class=\"block sm:hidden\"> ICoiff </span>\r\n      <span class=\"hidden sm:block\"> ICoiff </span>\r\n    </a>\r\n    <!-- User -->\r\n    <ul class=\"md:hidden items-center flex flex-wrap list-none\">\r\n      <li class=\"inline-block relative\">\r\n        <app-notification-dropdown class=\"block\"></app-notification-dropdown>\r\n      </li>\r\n      <li class=\"inline-block relative\">\r\n        <app-user-dropdown class=\"block\"></app-user-dropdown>\r\n      </li>\r\n    </ul>\r\n    <!-- Collapse -->\r\n    <div\r\n      class=\"\r\n        md:flex\r\n        md:flex-col\r\n        md:items-stretch\r\n        md:opacity-100\r\n        md:relative\r\n        md:mt-4\r\n        md:shadow-none\r\n        shadow\r\n        absolute\r\n        top-0\r\n        left-0\r\n        right-0\r\n        z-40\r\n        overflow-y-auto overflow-x-hidden\r\n        h-auto\r\n        items-center\r\n        flex-1\r\n        rounded\r\n      \"\r\n      [ngClass]=\"collapseShow\"\r\n    >\r\n      <!-- Collapse header -->\r\n      <div\r\n        class=\"\r\n          md:min-w-full md:hidden\r\n          block\r\n          pb-4\r\n          mb-4\r\n          border-b border-solid border-blueGray-200\r\n        \"\r\n      >\r\n        <div class=\"flex flex-wrap\">\r\n          <div class=\"w-6/12\">\r\n            <a\r\n              [routerLink]=\"['/']\"\r\n              class=\"\r\n                md:block\r\n                text-left\r\n                md:pb-2\r\n                text-blueGray-600\r\n                mr-0\r\n                inline-block\r\n                whitespace-nowrap\r\n                text-sm\r\n                uppercase\r\n                font-bold\r\n                p-4\r\n                px-0\r\n              \"\r\n            >\r\n              ICoiff\r\n            </a>\r\n          </div>\r\n          <div class=\"w-6/12 flex justify-end\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"\r\n                cursor-pointer\r\n                text-black\r\n                opacity-50\r\n                md:hidden\r\n                px-3\r\n                py-1\r\n                text-xl\r\n                leading-none\r\n                bg-transparent\r\n                rounded\r\n                border border-solid border-transparent\r\n              \"\r\n              (click)=\"toggleCollapseShow('hidden')\"\r\n            >\r\n              <i class=\"fas fa-times\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Form -->\r\n      <form class=\"mt-6 mb-4 md:hidden\">\r\n        <div class=\"mb-3 pt-0\">\r\n          <input\r\n            type=\"text\"\r\n            placeholder=\"Search\"\r\n            class=\"\r\n              border-0\r\n              px-3\r\n              py-2\r\n              h-12\r\n              border border-solid border-blueGray-500\r\n              placeholder-blueGray-300\r\n              text-blueGray-600\r\n              bg-white\r\n              rounded\r\n              text-base\r\n              leading-snug\r\n              shadow-none\r\n              outline-none\r\n              focus:outline-none\r\n              w-full\r\n              font-normal\r\n            \"\r\n          />\r\n        </div>\r\n      </form>\r\n\r\n      <!-- Divider -->\r\n      <hr class=\"my-4 md:min-w-full\" />\r\n      <!-- Heading -->\r\n      <h6\r\n        class=\"\r\n          md:min-w-full\r\n          text-blueGray-500 text-xs\r\n          uppercase\r\n          font-bold\r\n          block\r\n          pt-1\r\n          pb-4\r\n          no-underline\r\n        \"\r\n      >\r\n        Back Office\r\n      </h6>\r\n      <!-- Navigation -->\r\n\r\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none\">\r\n        <li class=\"items-center\">\r\n          <a\r\n            [routerLink]=\"['/admin/clients']\"\r\n            class=\"text-xs uppercase py-3 font-bold block\"\r\n            routerLinkActive\r\n            #adminDashboard=\"routerLinkActive\"\r\n            [ngClass]=\"\r\n              adminDashboard.isActive\r\n                ? 'text-red-600 hover:text-red-700'\r\n                : 'text-blueGray-700 hover:text-blueGray-500'\r\n            \"\r\n          >\r\n            <i\r\n              class=\"fas fa-user-circle mr-2 text-sm\"\r\n              [ngClass]=\"\r\n                adminDashboard.isActive ? 'opacity-75' : 'text-blueGray-300'\r\n              \"\r\n            ></i>\r\n            Gestion des clients\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"items-center\">\r\n          <a\r\n            [routerLink]=\"['/admin/salons']\"\r\n            class=\"text-xs uppercase py-3 font-bold block\"\r\n            routerLinkActive\r\n            #adminSettings=\"routerLinkActive\"\r\n            [ngClass]=\"\r\n              adminSettings.isActive\r\n                ? 'text-red-600 hover:text-red-700'\r\n                : 'text-blueGray-700 hover:text-blueGray-500'\r\n            \"\r\n          >\r\n            <i\r\n              class=\"fas fa-bed mr-2 text-sm\"\r\n              [ngClass]=\"\r\n                adminSettings.isActive ? 'opacity-75' : 'text-blueGray-300'\r\n              \"\r\n            ></i>\r\n            Gestion des salons\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n";
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


      __webpack_exports__["default"] = "<!-- Navbar -->\r\n<nav\r\n  class=\"absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4\"\r\n>\r\n  <div\r\n    class=\"w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4\"\r\n  >\r\n    <!-- Brand -->\r\n    <a\r\n      class=\"text-white text-sm uppercase hidden lg:inline-block font-semibold\"\r\n      href=\"#pablo\"\r\n      >Dashboard</a\r\n    >\r\n    <!-- Form -->\r\n    <form\r\n      class=\"md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3\"\r\n    >\r\n      <div class=\"relative flex w-full flex-wrap items-stretch\">\r\n        <span\r\n          class=\"z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3\"\r\n          ><i class=\"fas fa-search\"></i\r\n        ></span>\r\n        <input\r\n          type=\"text\"\r\n          placeholder=\"Search here...\"\r\n          class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10\"\r\n        />\r\n      </div>\r\n    </form>\r\n    <!-- User -->\r\n    <ul class=\"flex-col md:flex-row list-none items-center hidden md:flex\">\r\n      <app-user-dropdown class=\"block\"></app-user-dropdown>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n";
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
    "RMzx":
    /*!****************************************************!*\
      !*** ./src/app/views/landing/landing.component.ts ***!
      \****************************************************/

    /*! exports provided: LandingComponent */

    /***/
    function RMzx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
        return LandingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./landing.component.html */
      "AN84");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LandingComponent = /*#__PURE__*/function () {
        function LandingComponent() {
          _classCallCheck(this, LandingComponent);
        }

        _createClass(LandingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LandingComponent;
      }();

      LandingComponent.ctorParameters = function () {
        return [];
      };

      LandingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-landing",
        template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LandingComponent);
      /***/
    },

    /***/
    "RORk":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/index-navbar/index-navbar.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RORk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav\r\n  class=\"top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow\"\r\n>\r\n  <div\r\n    class=\"container px-4 mx-auto flex flex-wrap items-center justify-between\"\r\n  >\r\n    <div\r\n      class=\"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start\"\r\n    >\r\n      <a\r\n        [routerLink]=\"['/']\"\r\n        class=\"text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase\"\r\n        href=\"#pablo\"\r\n      >\r\n        Notus Angular\r\n      </a>\r\n      <button\r\n        class=\"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none\"\r\n        type=\"button\"\r\n        (click)=\"setNavbarOpen()\"\r\n      >\r\n        <i class=\"fas fa-bars\"></i>\r\n      </button>\r\n    </div>\r\n    <div\r\n      class=\"lg:flex flex-grow items-center\"\r\n      [ngClass]=\"{ hidden: !navbarOpen, block: navbarOpen }\"\r\n      id=\"example-navbar-warning\"\r\n    >\r\n      <ul class=\"flex flex-col lg:flex-row list-none mr-auto\">\r\n        <li class=\"flex items-center\">\r\n          <a\r\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\r\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus?ref=na-index-navbar\"\r\n          >\r\n            <i\r\n              class=\"text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2\"\r\n            ></i>\r\n            Docs\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"flex flex-col lg:flex-row list-none lg:ml-auto\">\r\n        <li class=\"flex items-center\">\r\n          <app-index-dropdown class=\"block\"></app-index-dropdown>\r\n        </li>\r\n        <li class=\"flex items-center\">\r\n          <a\r\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\r\n            href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-angular%2F\"\r\n            target=\"_blank\"\r\n          >\r\n            <i class=\"text-blueGray-400 fab fa-facebook text-lg leading-lg\"></i>\r\n            <span class=\"lg:hidden inline-block ml-2\">Share</span>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"flex items-center\">\r\n          <a\r\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\r\n            href=\"https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-angular%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20Angular%20UI%20Kit%20and%20Admin.%20Let%20Notus%20Angular%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.\"\r\n            target=\"_blank\"\r\n          >\r\n            <i class=\"text-blueGray-400 fab fa-twitter text-lg leading-lg\"></i>\r\n            <span class=\"lg:hidden inline-block ml-2\">Tweet</span>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"flex items-center\">\r\n          <a\r\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\r\n            href=\"https://github.com/creativetimofficial/notus-angular?ref=na-index-navbar\"\r\n            target=\"_blank\"\r\n          >\r\n            <i class=\"text-blueGray-400 fab fa-github text-lg leading-lg\"></i>\r\n            <span class=\"lg:hidden inline-block ml-2\">Star</span>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"flex items-center\">\r\n          <button\r\n            class=\"bg-red-600 text-white active:bg-red-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150\"\r\n            type=\"button\"\r\n          >\r\n            <i class=\"fas fa-arrow-alt-circle-down\"></i> Download\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n";
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
    "Skd6":
    /*!***********************************************************************************************!*\
      !*** ./src/app/components/dropdowns/notification-dropdown/notification-dropdown.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: NotificationDropdownComponent */

    /***/
    function Skd6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationDropdownComponent", function () {
        return NotificationDropdownComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_notification_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./notification-dropdown.component.html */
      "XqAX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @popperjs/core */
      "EjV/");

      var NotificationDropdownComponent = /*#__PURE__*/function () {
        function NotificationDropdownComponent() {
          _classCallCheck(this, NotificationDropdownComponent);

          this.dropdownPopoverShow = false;
        }

        _createClass(NotificationDropdownComponent, [{
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
        }]);

        return NotificationDropdownComponent;
      }();

      NotificationDropdownComponent.propDecorators = {
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
      NotificationDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-notification-dropdown",
        template: _raw_loader_notification_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], NotificationDropdownComponent);
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
          var _this4 = this;

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
            _this4.access_token = params.access_token;

            if (!_this4.access_token) {
              _this4.router.navigate(["/error-404"]);
            }

            _this4.authService.verifyToken(_this4.access_token).subscribe(function (response) {
              if (response.error) {
                _this4.router.navigate(["/error-404"]);
              }
            });
          });
        }

        _createClass(CreateSalonComponent, [{
          key: "onProfileImageChanged",
          value: function onProfileImageChanged(event) {
            var _this5 = this;

            this.selectedFile = event.target.files[0];
            var uploadData = new FormData();
            uploadData.append("profile-photo", this.selectedFile, this.selectedFile.name);
            this.manageSalons.sendImage(uploadData).subscribe(function (response) {
              console.log(response);
              _this5.profileImagePath = response.url;
              _this5.uploaded = "image uploaded";
            });
          }
        }, {
          key: "onSalonImageChanged",
          value: function onSalonImageChanged(event) {
            var _this6 = this;

            this.selectedFile = event.target.files[0];
            var uploadData = new FormData();
            uploadData.append("profile-photo", this.selectedFile, this.selectedFile.name + this.selectedFile.type);
            this.manageSalons.sendImage(uploadData).subscribe(function (response) {
              console.log(response);
              _this6.salonImagePath = response.url;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this7 = this;

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

              _this7.manageSalons.createManager(manager).subscribe(function (response) {
                if (response.user) {
                  _this7.success = "Your account has been created you will be redirected shortly";
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
    "UIMn":
    /*!***************************************************************************!*\
      !*** ./src/app/components/footers/footer-admin/footer-admin.component.ts ***!
      \***************************************************************************/

    /*! exports provided: FooterAdminComponent */

    /***/
    function UIMn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterAdminComponent", function () {
        return FooterAdminComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer-admin.component.html */
      "EbUq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterAdminComponent = /*#__PURE__*/function () {
        function FooterAdminComponent() {
          _classCallCheck(this, FooterAdminComponent);

          this.date = new Date().getFullYear();
        }

        _createClass(FooterAdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterAdminComponent;
      }();

      FooterAdminComponent.ctorParameters = function () {
        return [];
      };

      FooterAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-footer-admin",
        template: _raw_loader_footer_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FooterAdminComponent);
      /***/
    },

    /***/
    "UY35":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/dropdowns/table-dropdown/table-dropdown.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: TableDropdownComponent */

    /***/
    function UY35(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableDropdownComponent", function () {
        return TableDropdownComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_table_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./table-dropdown.component.html */
      "rOy2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @popperjs/core */
      "EjV/");

      var TableDropdownComponent = /*#__PURE__*/function () {
        function TableDropdownComponent() {
          _classCallCheck(this, TableDropdownComponent);

          this.dropdownPopoverShow = false;
        }

        _createClass(TableDropdownComponent, [{
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
        }]);

        return TableDropdownComponent;
      }();

      TableDropdownComponent.propDecorators = {
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
      TableDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-table-dropdown",
        template: _raw_loader_table_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TableDropdownComponent);
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
    "W8yq":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/index/index.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function W8yq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-index-navbar></app-index-navbar>\r\n<section class=\"header relative pt-16 items-center flex h-screen max-h-860-px\">\r\n  <div class=\"container mx-auto items-center flex flex-wrap\">\r\n    <div class=\"w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4\">\r\n      <div class=\"pt-32 sm:pt-0\">\r\n        <h2 class=\"font-semibold text-4xl text-blueGray-600\">\r\n          Notus Angular - A beautiful extension for Tailwind CSS.\r\n        </h2>\r\n        <p class=\"mt-4 text-lg leading-relaxed text-blueGray-500\">\r\n          Notus Angular is Free and Open Source. It does not change any of the\r\n          CSS from\r\n          <a\r\n            href=\"https://tailwindcss.com/?ref=creativetim\"\r\n            class=\"text-blueGray-600\"\r\n            target=\"_blank\"\r\n          >\r\n            Tailwind CSS.\r\n          </a>\r\n          It features multiple HTML elements and it comes with dynamic\r\n          components for ReactJS, Vue and Angular.\r\n        </p>\r\n        <div class=\"mt-12\">\r\n          <a\r\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus?ref=na-index-page\"\r\n            target=\"_blank\"\r\n            class=\"get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-600 active:bg-red-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\"\r\n          >\r\n            Get started\r\n          </a>\r\n          <a\r\n            href=\"https://github.com/creativetimofficial/notus-angular?ref=creativetim\"\r\n            class=\"github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\"\r\n            target=\"_blank\"\r\n          >\r\n            Github Star\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <img\r\n    class=\"absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px\"\r\n    src=\"assets/img/pattern_angular.png\"\r\n    alt=\"...\"\r\n  />\r\n</section>\r\n\r\n<section class=\"mt-48 md:mt-40 pb-40 relative bg-blueGray-100\">\r\n  <div\r\n    class=\"-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20\"\r\n    style=\"transform: translateZ(0)\"\r\n  >\r\n    <svg\r\n      class=\"absolute bottom-0 overflow-hidden\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      preserveAspectRatio=\"none\"\r\n      version=\"1.1\"\r\n      viewBox=\"0 0 2560 100\"\r\n      x=\"0\"\r\n      y=\"0\"\r\n    >\r\n      <polygon\r\n        class=\"text-blueGray-100 fill-current\"\r\n        points=\"2560 0 2560 100 0 100\"\r\n      ></polygon>\r\n    </svg>\r\n  </div>\r\n  <div class=\"container mx-auto\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div\r\n        class=\"w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32\"\r\n      >\r\n        <div\r\n          class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-600\"\r\n        >\r\n          <img\r\n            alt=\"...\"\r\n            src=\"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80\"\r\n            class=\"w-full align-middle rounded-t-lg\"\r\n          />\r\n          <blockquote class=\"relative p-8 mb-4\">\r\n            <svg\r\n              preserveAspectRatio=\"none\"\r\n              xmlns=\"http://www.w3.org/2000/svg\"\r\n              viewBox=\"0 0 583 95\"\r\n              class=\"absolute left-0 w-full block h-95-px -top-94-px\"\r\n            >\r\n              <polygon\r\n                points=\"-30,95 583,95 583,65\"\r\n                class=\"text-red-600 fill-current\"\r\n              ></polygon>\r\n            </svg>\r\n            <h4 class=\"text-xl font-bold text-white\">\r\n              Great for your awesome project\r\n            </h4>\r\n            <p class=\"text-md font-light mt-2 text-white\">\r\n              Putting together a page has never been easier than matching\r\n              together pre-made components. From landing pages presentation to\r\n              login areas, you can easily customise and built your pages.\r\n            </p>\r\n          </blockquote>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"w-full md:w-6/12 px-4\">\r\n        <div class=\"flex flex-wrap\">\r\n          <div class=\"w-full md:w-6/12 px-4\">\r\n            <div class=\"relative flex flex-col mt-4\">\r\n              <div class=\"px-4 py-5 flex-auto\">\r\n                <div\r\n                  class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\"\r\n                >\r\n                  <i class=\"fas fa-sitemap\"></i>\r\n                </div>\r\n                <h6 class=\"text-xl mb-1 font-semibold\">CSS Components</h6>\r\n                <p class=\"mb-4 text-blueGray-500\">\r\n                  Notus Angular comes with a huge number of Fully Coded CSS\r\n                  components.\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"relative flex flex-col min-w-0\">\r\n              <div class=\"px-4 py-5 flex-auto\">\r\n                <div\r\n                  class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\"\r\n                >\r\n                  <i class=\"fas fa-drafting-compass\"></i>\r\n                </div>\r\n                <h6 class=\"text-xl mb-1 font-semibold\">\r\n                  JavaScript Components\r\n                </h6>\r\n                <p class=\"mb-4 text-blueGray-500\">\r\n                  We also feature many dynamic components for React, NextJS, Vue\r\n                  and Angular.\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"w-full md:w-6/12 px-4\">\r\n            <div class=\"relative flex flex-col min-w-0 mt-4\">\r\n              <div class=\"px-4 py-5 flex-auto\">\r\n                <div\r\n                  class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\"\r\n                >\r\n                  <i class=\"fas fa-newspaper\"></i>\r\n                </div>\r\n                <h6 class=\"text-xl mb-1 font-semibold\">Pages</h6>\r\n                <p class=\"mb-4 text-blueGray-500\">\r\n                  This extension also comes with 3 sample pages. They are fully\r\n                  coded so you can start working instantly.\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"relative flex flex-col min-w-0\">\r\n              <div class=\"px-4 py-5 flex-auto\">\r\n                <div\r\n                  class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\"\r\n                >\r\n                  <i class=\"fas fa-file-alt\"></i>\r\n                </div>\r\n                <h6 class=\"text-xl mb-1 font-semibold\">Documentation</h6>\r\n                <p class=\"mb-4 text-blueGray-500\">\r\n                  Built by developers for developers. You will love how easy is\r\n                  to to work with Notus Angular.\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container mx-auto overflow-hidden pb-20\">\r\n    <div class=\"flex flex-wrap items-center\">\r\n      <div class=\"w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48\">\r\n        <div\r\n          class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\"\r\n        >\r\n          <i class=\"fas fa-sitemap text-xl\"></i>\r\n        </div>\r\n        <h3 class=\"text-3xl mb-2 font-semibold leading-normal\">\r\n          CSS Components\r\n        </h3>\r\n        <p\r\n          class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600\"\r\n        >\r\n          Every element that you need in a product comes built in as a\r\n          component. All components fit perfectly with each other and can have\r\n          different colours.\r\n        </p>\r\n        <div class=\"block pb-6\">\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Buttons\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Inputs\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Labels\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Menus\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Navbars\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Pagination\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Progressbars\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Typography\r\n          </span>\r\n        </div>\r\n        <a\r\n          href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=na-index-page\"\r\n          target=\"_blank\"\r\n          class=\"font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150\"\r\n        >\r\n          View All\r\n          <i class=\"fa fa-angle-double-right ml-1 leading-relaxed\"></i>\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"w-full md:w-5/12 px-4 mr-auto ml-auto mt-32\">\r\n        <div class=\"relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0\">\r\n          <img\r\n            alt=\"...\"\r\n            src=\"assets/img/component-btn.png\"\r\n            class=\"w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3\"\r\n          />\r\n          <img\r\n            alt=\"...\"\r\n            src=\"assets/img/component-profile-card.png\"\r\n            class=\"w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px\"\r\n          />\r\n          <img\r\n            alt=\"...\"\r\n            src=\"assets/img/component-info-card.png\"\r\n            class=\"w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2\"\r\n          />\r\n          <img\r\n            alt=\"...\"\r\n            src=\"assets/img/component-info-2.png\"\r\n            class=\"w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px\"\r\n          />\r\n          <img\r\n            alt=\"...\"\r\n            src=\"assets/img/component-menu.png\"\r\n            class=\"w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px\"\r\n          />\r\n          <img\r\n            alt=\"...\"\r\n            src=\"assets/img/component-btn-pink.png\"\r\n            class=\"w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"flex flex-wrap items-center pt-32\">\r\n      <div class=\"w-full md:w-6/12 px-4 mr-auto ml-auto mt-32\">\r\n        <div class=\"justify-center flex flex-wrap relative\">\r\n          <div class=\"my-4 w-full lg:w-6/12 px-4\">\r\n            <a\r\n              href=\"https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index\"\r\n              target=\"_blank\"\r\n            >\r\n              <div class=\"bg-red-600 shadow-lg rounded-lg text-center p-8\">\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\r\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg\"\r\n                />\r\n                <p class=\"text-lg text-white mt-4 font-semibold\">Svelte</p>\r\n              </div>\r\n            </a>\r\n            <a\r\n              href=\"https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index\"\r\n              target=\"_blank\"\r\n            >\r\n              <div\r\n                class=\"bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8\"\r\n              >\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\r\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg\"\r\n                />\r\n                <p class=\"text-lg text-white mt-4 font-semibold\">ReactJS</p>\r\n              </div>\r\n            </a>\r\n            <a\r\n              href=\"https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index\"\r\n              target=\"_blank\"\r\n            >\r\n              <div\r\n                class=\"bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8\"\r\n              >\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\r\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg\"\r\n                />\r\n                <p class=\"text-lg text-white mt-4 font-semibold\">NextJS</p>\r\n              </div>\r\n            </a>\r\n          </div>\r\n          <div class=\"my-4 w-full lg:w-6/12 px-4 lg:mt-16\">\r\n            <a\r\n              href=\"https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index\"\r\n              target=\"_blank\"\r\n            >\r\n              <div class=\"bg-yellow-500 shadow-lg rounded-lg text-center p-8\">\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\r\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png\"\r\n                />\r\n                <p class=\"text-lg text-white mt-4 font-semibold\">JavaScript</p>\r\n              </div>\r\n            </a>\r\n            <a\r\n              href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index\"\r\n              target=\"_blank\"\r\n            >\r\n              <div class=\"bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8\">\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\r\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg\"\r\n                />\r\n                <p class=\"text-lg text-white mt-4 font-semibold\">Angular</p>\r\n              </div>\r\n            </a>\r\n            <a\r\n              href=\"https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index\"\r\n              target=\"_blank\"\r\n            >\r\n              <div\r\n                class=\"bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8\"\r\n              >\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\r\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg\"\r\n                />\r\n                <p class=\"text-lg text-white mt-4 font-semibold\">Vue.js</p>\r\n              </div>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48\">\r\n        <div\r\n          class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\"\r\n        >\r\n          <i class=\"fas fa-drafting-compass text-xl\"></i>\r\n        </div>\r\n        <h3 class=\"text-3xl mb-2 font-semibold leading-normal\">\r\n          Javascript Components\r\n        </h3>\r\n        <p\r\n          class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600\"\r\n        >\r\n          In order to create a great User Experience some components require\r\n          JavaScript. In this way you can manipulate the elements on the page\r\n          and give more options to your users.\r\n        </p>\r\n        <p\r\n          class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600\"\r\n        >\r\n          We created a set of Components that are dynamic and come to help you.\r\n        </p>\r\n        <div class=\"block pb-6\">\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Alerts\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Dropdowns\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Menus\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Modals\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Navbars\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Popovers\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Tabs\r\n          </span>\r\n          <span\r\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\r\n          >\r\n            Tooltips\r\n          </span>\r\n        </div>\r\n        <a\r\n          href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=na-index-page\"\r\n          target=\"_blank\"\r\n          class=\"font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150\"\r\n        >\r\n          View all\r\n          <i class=\"fa fa-angle-double-right ml-1 leading-relaxed\"></i>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container mx-auto px-4 pb-32 pt-48\">\r\n    <div class=\"items-center flex flex-wrap\">\r\n      <div class=\"w-full md:w-5/12 ml-auto px-12 md:px-4\">\r\n        <div class=\"md:pr-12\">\r\n          <div\r\n            class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\"\r\n          >\r\n            <i class=\"fas fa-file-alt text-xl\"></i>\r\n          </div>\r\n          <h3 class=\"text-3xl font-semibold\">Complex Documentation</h3>\r\n          <p class=\"mt-4 text-lg leading-relaxed text-blueGray-500\">\r\n            This extension comes a lot of fully coded examples that help you get\r\n            started faster. You can adjust the colors and also the programming\r\n            language. You can change the text and images and you're good to go.\r\n          </p>\r\n          <ul class=\"list-none mt-6\">\r\n            <li class=\"py-2\">\r\n              <div class=\"flex items-center\">\r\n                <div>\r\n                  <span\r\n                    class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3\"\r\n                  >\r\n                    <i class=\"fas fa-fingerprint\"></i>\r\n                  </span>\r\n                </div>\r\n                <div>\r\n                  <h4 class=\"text-blueGray-500\">\r\n                    Built by Developers for Developers\r\n                  </h4>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"py-2\">\r\n              <div class=\"flex items-center\">\r\n                <div>\r\n                  <span\r\n                    class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3\"\r\n                  >\r\n                    <i class=\"fab fa-html5\"></i>\r\n                  </span>\r\n                </div>\r\n                <div>\r\n                  <h4 class=\"text-blueGray-500\">\r\n                    Carefully crafted code for Components\r\n                  </h4>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"py-2\">\r\n              <div class=\"flex items-center\">\r\n                <div>\r\n                  <span\r\n                    class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3\"\r\n                  >\r\n                    <i class=\"far fa-paper-plane\"></i>\r\n                  </span>\r\n                </div>\r\n                <div>\r\n                  <h4 class=\"text-blueGray-500\">\r\n                    Dynamic Javascript Components\r\n                  </h4>\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0\">\r\n        <img\r\n          alt=\"...\"\r\n          class=\"max-w-full rounded-lg shadow-xl\"\r\n          style=\"\r\n            transform: scale(1) perspective(1040px) rotateY(-11deg)\r\n              rotateX(2deg) rotate(2deg);\r\n          \"\r\n          src=\"assets/img/documentation.png\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"justify-center text-center flex flex-wrap mt-24\">\r\n    <div class=\"w-full md:w-6/12 px-12 md:px-4\">\r\n      <h2 class=\"font-semibold text-4xl\">Beautiful Example Pages</h2>\r\n      <p class=\"text-lg leading-relaxed mt-4 mb-4 text-blueGray-500\">\r\n        Notus Angular is a completly new product built using our past experience\r\n        in web templates. Take the examples we made for you and start playing\r\n        with them.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"block relative z-1 bg-blueGray-600\">\r\n  <div class=\"container mx-auto\">\r\n    <div class=\"justify-center flex flex-wrap\">\r\n      <div class=\"w-full lg:w-12/12 px-4 -mt-24\">\r\n        <div class=\"flex flex-wrap\">\r\n          <div class=\"w-full lg:w-4/12 px-4\">\r\n            <h5 class=\"text-xl font-semibold pb-4 text-center\">Login Page</h5>\r\n            <a [routerLink]=\"['/auth/login']\">\r\n              <div\r\n                class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\"\r\n              >\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"align-middle border-none max-w-full h-auto rounded-lg\"\r\n                  src=\"assets/img/login.jpg\"\r\n                />\r\n              </div>\r\n            </a>\r\n          </div>\r\n\r\n          <div class=\"w-full lg:w-4/12 px-4\">\r\n            <h5 class=\"text-xl font-semibold pb-4 text-center\">Profile Page</h5>\r\n            <a [routerLink]=\"['/profile']\">\r\n              <div\r\n                class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\"\r\n              >\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"align-middle border-none max-w-full h-auto rounded-lg\"\r\n                  src=\"assets/img/profile.jpg\"\r\n                />\r\n              </div>\r\n            </a>\r\n          </div>\r\n\r\n          <div class=\"w-full lg:w-4/12 px-4\">\r\n            <h5 class=\"text-xl font-semibold pb-4 text-center\">Landing Page</h5>\r\n            <a [routerLink]=\"['/landing']\">\r\n              <div\r\n                class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\"\r\n              >\r\n                <img\r\n                  alt=\"...\"\r\n                  class=\"align-middle border-none max-w-full h-auto rounded-lg\"\r\n                  src=\"assets/img/landing.jpg\"\r\n                />\r\n              </div>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"py-20 bg-blueGray-600 overflow-hidden\">\r\n  <div class=\"container mx-auto pb-64\">\r\n    <div class=\"flex flex-wrap justify-center\">\r\n      <div class=\"w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64\">\r\n        <div\r\n          class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\"\r\n        >\r\n          <i class=\"fas fa-code-branch text-xl\"></i>\r\n        </div>\r\n        <h3 class=\"text-3xl mb-2 font-semibold leading-normal text-white\">\r\n          Open Source\r\n        </h3>\r\n        <p\r\n          class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400\"\r\n        >\r\n          Since\r\n          <a\r\n            href=\"https://tailwindcss.com/?ref=creativetim\"\r\n            class=\"text-blueGray-300\"\r\n            target=\"_blank\"\r\n          >\r\n            Tailwind CSS\r\n          </a>\r\n          is an open source project we wanted to continue this movement too. You\r\n          can give this version a try to feel the design and also test the\r\n          quality of the code!\r\n        </p>\r\n        <p\r\n          class=\"text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400\"\r\n        >\r\n          Get it free on Github and please help us spread the news with a Star!\r\n        </p>\r\n        <a\r\n          href=\"https://github.com/creativetimofficial/notus-angular?ref=creativetim\"\r\n          target=\"_blank\"\r\n          class=\"github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\"\r\n        >\r\n          Github Star\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative\">\r\n        <i\r\n          class=\"fab fa-github text-blueGray-700 text-55 absolute -top-150-px -right-100 left-auto opacity-80\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"pb-16 bg-blueGray-200 relative pt-32\">\r\n  <div\r\n    class=\"-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20\"\r\n    style=\"transform: translateZ(0)\"\r\n  >\r\n    <svg\r\n      class=\"absolute bottom-0 overflow-hidden\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      preserveAspectRatio=\"none\"\r\n      version=\"1.1\"\r\n      viewBox=\"0 0 2560 100\"\r\n      x=\"0\"\r\n      y=\"0\"\r\n    >\r\n      <polygon\r\n        class=\"text-blueGray-200 fill-current\"\r\n        points=\"2560 0 2560 100 0 100\"\r\n      ></polygon>\r\n    </svg>\r\n  </div>\r\n\r\n  <div class=\"container mx-auto\">\r\n    <div\r\n      class=\"flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10\"\r\n    >\r\n      <div class=\"w-full text-center lg:w-8/12\">\r\n        <p class=\"text-4xl text-center\">\r\n          <span role=\"img\" aria-label=\"love\"> 😍 </span>\r\n        </p>\r\n        <h3 class=\"font-semibold text-3xl\">Do you love this Starter Kit?</h3>\r\n        <p class=\"text-blueGray-500 text-lg leading-relaxed mt-4 mb-4\">\r\n          Cause if you do, it can be yours now. Hit the buttons below to\r\n          navigate to get the Free version for your next project. Build a new\r\n          web app or give an old project a new look!\r\n        </p>\r\n        <div class=\"sm:block flex flex-col mt-10\">\r\n          <a\r\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus?ref=na-index-page\"\r\n            target=\"_blank\"\r\n            class=\"get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-red-600 active:bg-red-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\"\r\n          >\r\n            Get started\r\n          </a>\r\n          <a\r\n            href=\"https://github.com/creativetimofficial/notus-angular?ref=creativetim\"\r\n            target=\"_blank\"\r\n            class=\"github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\"\r\n          >\r\n            <i class=\"fab fa-github text-lg mr-1\"></i>\r\n            <span>Help With a Star</span>\r\n          </a>\r\n        </div>\r\n        <div class=\"text-center mt-16\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<app-footer></app-footer>\r\n";
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
    "XqAX":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/notification-dropdown/notification-dropdown.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XqAX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a\r\n  class=\"text-blueGray-500 block py-1 px-3\"\r\n  href=\"#pablo\"\r\n  (click)=\"toggleDropdown($event)\"\r\n  #btnDropdownRef\r\n>\r\n  <i class=\"fas fa-bell\"></i>\r\n</a>\r\n<div class=\"min-w-48 z-50\" #popoverDropdownRef>\r\n  <div\r\n    class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48\"\r\n    [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\r\n  >\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Action\r\n    </a>\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Another action\r\n    </a>\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Something else here\r\n    </a>\r\n    <div class=\"h-0 my-2 border border-solid border-blueGray-100\"></div>\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Seprated link\r\n    </a>\r\n  </div>\r\n</div>\r\n";
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


      var _views_index_index_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./views/index/index.component */
      "AiJS");
      /* harmony import */


      var _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./views/landing/landing.component */
      "RMzx");
      /* harmony import */


      var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./views/profile/profile.component */
      "wF9P");
      /* harmony import */


      var _components_navbars_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/navbars/admin-navbar/admin-navbar.component */
      "Xodl");
      /* harmony import */


      var _components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/navbars/auth-navbar/auth-navbar.component */
      "zslb");
      /* harmony import */


      var _components_footers_footer_admin_footer_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/footers/footer-admin/footer-admin.component */
      "UIMn");
      /* harmony import */


      var _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/footers/footer/footer.component */
      "1DoU");
      /* harmony import */


      var _components_footers_footer_small_footer_small_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/footers/footer-small/footer-small.component */
      "xlab");
      /* harmony import */


      var _components_headers_header_stats_header_stats_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/headers/header-stats/header-stats.component */
      "RLAj");
      /* harmony import */


      var _components_navbars_index_navbar_index_navbar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/navbars/index-navbar/index-navbar.component */
      "4b2p");
      /* harmony import */


      var _components_dropdowns_index_dropdown_index_dropdown_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/dropdowns/index-dropdown/index-dropdown.component */
      "J8Ne");
      /* harmony import */


      var _components_dropdowns_table_dropdown_table_dropdown_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/dropdowns/table-dropdown/table-dropdown.component */
      "UY35");
      /* harmony import */


      var _components_dropdowns_pages_dropdown_pages_dropdown_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./components/dropdowns/pages-dropdown/pages-dropdown.component */
      "wcq5");
      /* harmony import */


      var _components_dropdowns_notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./components/dropdowns/notification-dropdown/notification-dropdown.component */
      "Skd6");
      /* harmony import */


      var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./components/sidebar/sidebar.component */
      "zBoC");
      /* harmony import */


      var _components_dropdowns_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./components/dropdowns/user-dropdown/user-dropdown.component */
      "0slC");
      /* harmony import */


      var _views_admin_manage_salons_manage_salons_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./views/admin/manage-salons/manage-salons.component */
      "gFck");
      /* harmony import */


      var _components_table_salons_table_salons_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./components/table-salons/table-salons.component */
      "GB+I");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./services/auth.service */
      "lGQG");
      /* harmony import */


      var _services_manage_salons_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./services/manage-salons.service */
      "RV1I");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _services_authConfig_interceptor__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./services/authConfig.interceptor */
      "rD10");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_table_clients_table_clients_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./components/table-clients/table-clients.component */
      "JkxU");
      /* harmony import */


      var _components_dropdowns_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./components/dropdowns/dropdown/dropdown.component */
      "vWvs");
      /* harmony import */


      var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./components/modal/modal.component */
      "7aL3");
      /* harmony import */


      var _views_create_salon_create_salon_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./views/create-salon/create-salon.component */
      "T8Xr");
      /* harmony import */


      var _views_error404_error404_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./views/error404/error404.component */
      "kku7"); // layouts
      // admin views
      // auth views
      // no layouts views
      // components for views and layouts


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], _components_dropdowns_index_dropdown_index_dropdown_component__WEBPACK_IMPORTED_MODULE_23__["IndexDropdownComponent"], _components_dropdowns_pages_dropdown_pages_dropdown_component__WEBPACK_IMPORTED_MODULE_25__["PagesDropdownComponent"], _components_dropdowns_table_dropdown_table_dropdown_component__WEBPACK_IMPORTED_MODULE_24__["TableDropdownComponent"], _components_dropdowns_notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_26__["NotificationDropdownComponent"], _components_dropdowns_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_28__["UserDropdownComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_27__["SidebarComponent"], _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"], _components_footers_footer_small_footer_small_component__WEBPACK_IMPORTED_MODULE_20__["FooterSmallComponent"], _components_footers_footer_admin_footer_admin_component__WEBPACK_IMPORTED_MODULE_18__["FooterAdminComponent"], _components_headers_header_stats_header_stats_component__WEBPACK_IMPORTED_MODULE_21__["HeaderStatsComponent"], _components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_17__["AuthNavbarComponent"], _components_navbars_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_16__["AdminNavbarComponent"], _components_navbars_index_navbar_index_navbar_component__WEBPACK_IMPORTED_MODULE_22__["IndexNavbarComponent"], _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"], _views_admin_maps_maps_component__WEBPACK_IMPORTED_MODULE_9__["MapsComponent"], _views_admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"], _views_admin_tables_tables_component__WEBPACK_IMPORTED_MODULE_11__["TablesComponent"], _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _views_index_index_component__WEBPACK_IMPORTED_MODULE_13__["IndexComponent"], _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_14__["LandingComponent"], _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"], _views_admin_manage_salons_manage_salons_component__WEBPACK_IMPORTED_MODULE_29__["ManageSalonsComponent"], _components_table_salons_table_salons_component__WEBPACK_IMPORTED_MODULE_30__["TableSalonsComponent"], _components_table_clients_table_clients_component__WEBPACK_IMPORTED_MODULE_36__["TableClientsComponent"], _components_dropdowns_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_37__["DropdownComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_38__["ModalComponent"], _views_create_salon_create_salon_component__WEBPACK_IMPORTED_MODULE_39__["CreateSalonComponent"], _views_error404_error404_component__WEBPACK_IMPORTED_MODULE_40__["Error404Component"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_35__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_35__["FormsModule"], ngx_timeago__WEBPACK_IMPORTED_MODULE_5__["TimeagoModule"].forRoot()],
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_31__["AuthService"], _services_manage_salons_service__WEBPACK_IMPORTED_MODULE_32__["ManageSalonsService"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HTTP_INTERCEPTORS"],
          useClass: _services_authConfig_interceptor__WEBPACK_IMPORTED_MODULE_34__["AuthInterceptor"],
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
    "e8es":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/index-dropdown/index-dropdown.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function e8es(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a\r\n  class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\r\n  href=\"#pablo\"\r\n  (click)=\"toggleDropdown($event)\"\r\n  #btnDropdownRef\r\n>\r\n  Demo Pages\r\n</a>\r\n<div\r\n  class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48\"\r\n  [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\r\n  #popoverDropdownRef\r\n>\r\n  <span\r\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\r\n  >\r\n    Admin Layout\r\n  </span>\r\n  <a\r\n    [routerLink]=\"['/admin/dashboard']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Dashboard\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/admin/settings']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Settings\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/admin/tables']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Tables\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/admin/maps']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Maps\r\n  </a>\r\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\r\n  <span\r\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\r\n  >\r\n    Auth Layout\r\n  </span>\r\n  <a\r\n    [routerLink]=\"['/auth/login']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Login\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/auth/register']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Register\r\n  </a>\r\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\r\n  <span\r\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\r\n  >\r\n    No Layout\r\n  </span>\r\n  <a\r\n    [routerLink]=\"['/landing']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Landing\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/profile']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Profile\r\n  </a>\r\n</div>\r\n";
      /***/
    },

    /***/
    "e8ip":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/auth-navbar/auth-navbar.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function e8ip(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav\r\n  class=\"top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg\"\r\n>\r\n  <div\r\n    class=\"container px-4 mx-auto flex flex-wrap items-center justify-between\"\r\n  >\r\n    <div\r\n      class=\"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start\"\r\n    >\r\n      <a\r\n        [routerLink]=\"['/']\"\r\n        class=\"text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase\"\r\n      >\r\n        Notus Angular\r\n      </a>\r\n      <button\r\n        class=\"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none\"\r\n        type=\"button\"\r\n        (click)=\"setNavbarOpen()\"\r\n      >\r\n        <i class=\"text-white fas fa-bars\"></i>\r\n      </button>\r\n    </div>\r\n    <div\r\n      class=\"lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none\"\r\n      [ngClass]=\"{ hidden: !navbarOpen, 'block rounded shadow-lg': navbarOpen }\"\r\n      id=\"example-navbar-warning\"\r\n    >\r\n      <ul class=\"flex flex-col lg:flex-row list-none mr-auto\">\r\n        <li class=\"flex items-center\">\r\n          <a\r\n            class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\r\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus?ref=na-auth-navbar\"\r\n          >\r\n            <i\r\n              class=\"lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2\"\r\n            ></i>\r\n            Docs\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"flex flex-col lg:flex-row list-none lg:ml-auto\">\r\n        <li class=\"flex items-center\">\r\n          <app-pages-dropdown class=\"block\"></app-pages-dropdown>\r\n        </li>\r\n        <li class=\"flex items-center\">\r\n          <a\r\n            class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\r\n            href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-angular%2F\"\r\n            target=\"_blank\"\r\n          >\r\n            <i\r\n              class=\"lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg\"\r\n            ></i>\r\n            <span class=\"lg:hidden inline-block ml-2\">Share</span>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"flex items-center\">\r\n          <a\r\n            class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\r\n            href=\"https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-angular%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20Angular%20UI%20Kit%20and%20Admin.%20Let%20Notus%20Angular%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.\"\r\n            target=\"_blank\"\r\n          >\r\n            <i\r\n              class=\"lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg\"\r\n            ></i>\r\n            <span class=\"lg:hidden inline-block ml-2\">Tweet</span>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"flex items-center\">\r\n          <a\r\n            class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\r\n            href=\"https://github.com/creativetimofficial/notus-angular?ref=na-auth-navbar\"\r\n            target=\"_blank\"\r\n          >\r\n            <i\r\n              class=\"lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg\"\r\n            ></i>\r\n            <span class=\"lg:hidden inline-block ml-2\">Star</span>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"flex items-center\">\r\n          <button\r\n            class=\"bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150\"\r\n            type=\"button\"\r\n          >\r\n            <i class=\"fas fa-arrow-alt-circle-down\"></i> Download\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n";
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
            var _this8 = this;

            return this.http.post("".concat(this.endpoint, "/auth/login"), user).subscribe(function (res) {
              console.log(res);
              localStorage.setItem('access_token', res.token);
              localStorage.setItem('user_id', res.user._id);

              _this8.router.navigate(['admin/clients']);
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


      __webpack_exports__["default"] = "<a\r\n  class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\r\n  href=\"#pablo\"\r\n  (click)=\"toggleDropdown($event)\"\r\n  #btnDropdownRef\r\n>\r\n  Demo Pages\r\n</a>\r\n<div\r\n  class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48\"\r\n  [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\r\n  #popoverDropdownRef\r\n>\r\n  <span\r\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\r\n  >\r\n    Admin Layout\r\n  </span>\r\n  <a\r\n    [routerLink]=\"['/admin/dashboard']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Dashboard\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/admin/settings']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Settings\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/admin/tables']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Tables\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/admin/maps']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Maps\r\n  </a>\r\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\r\n  <span\r\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\r\n  >\r\n    Auth Layout\r\n  </span>\r\n  <a\r\n    [routerLink]=\"['/auth/login']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Login\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/auth/register']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Register\r\n  </a>\r\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\r\n  <span\r\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\r\n  >\r\n    No Layout\r\n  </span>\r\n  <a\r\n    [routerLink]=\"['/landing']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Landing\r\n  </a>\r\n  <a\r\n    [routerLink]=\"['/profile']\"\r\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n  >\r\n    Profile\r\n  </a>\r\n</div>\r\n";
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
    "rOy2":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/table-dropdown/table-dropdown.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rOy2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a\r\n  class=\"text-blueGray-500 block py-1 px-3\"\r\n  href=\"#pablo\"\r\n  (click)=\"toggleDropdown($event)\"\r\n  #btnDropdownRef\r\n>\r\n  <i class=\"fas fa-ellipsis-v\"></i>\r\n</a>\r\n<div class=\"min-w-48 z-50\" #popoverDropdownRef>\r\n  <div\r\n    class=\"bg-white text-base float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48\"\r\n    [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\r\n  >\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Action\r\n    </a>\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Another action\r\n    </a>\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Something else here\r\n    </a>\r\n    <div class=\"h-0 my-2 border border-solid border-blueGray-100\"></div>\r\n    <a\r\n      href=\"#pablo\"\r\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\r\n    >\r\n      Seprated link\r\n    </a>\r\n  </div>\r\n</div>\r\n";
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
      "kku7");
      /* harmony import */


      var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./views/profile/profile.component */
      "wF9P"); // layouts
      // admin views
      // auth views
      // no layouts views


      var routes = [{
        path: "create/salon",
        component: _views_create_salon_create_salon_component__WEBPACK_IMPORTED_MODULE_9__["CreateSalonComponent"]
      }, // admin views
      {
        path: "admin",
        component: _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [{
          path: "profile",
          component: _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
          canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
        }, {
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
    "wF9P":
    /*!****************************************************!*\
      !*** ./src/app/views/profile/profile.component.ts ***!
      \****************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function wF9P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.component.html */
      "8GP7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent() {
          _classCallCheck(this, ProfileComponent);
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ctorParameters = function () {
        return [];
      };

      ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-profile",
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ProfileComponent);
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
    "xlab":
    /*!***************************************************************************!*\
      !*** ./src/app/components/footers/footer-small/footer-small.component.ts ***!
      \***************************************************************************/

    /*! exports provided: FooterSmallComponent */

    /***/
    function xlab(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterSmallComponent", function () {
        return FooterSmallComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_small_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer-small.component.html */
      "DLfO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterSmallComponent = /*#__PURE__*/function () {
        function FooterSmallComponent() {
          _classCallCheck(this, FooterSmallComponent);

          this.date = new Date().getFullYear();
          this._absolute = false;
        }

        _createClass(FooterSmallComponent, [{
          key: "absolute",
          get: function get() {
            return this._absolute;
          },
          set: function set(absolute) {
            this._absolute = absolute === undefined ? false : absolute;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterSmallComponent;
      }();

      FooterSmallComponent.ctorParameters = function () {
        return [];
      };

      FooterSmallComponent.propDecorators = {
        absolute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      FooterSmallComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-footer-small",
        template: _raw_loader_footer_small_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FooterSmallComponent);
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
    },

    /***/
    "zslb":
    /*!*************************************************************************!*\
      !*** ./src/app/components/navbars/auth-navbar/auth-navbar.component.ts ***!
      \*************************************************************************/

    /*! exports provided: AuthNavbarComponent */

    /***/
    function zslb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthNavbarComponent", function () {
        return AuthNavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_auth_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./auth-navbar.component.html */
      "e8ip");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthNavbarComponent = /*#__PURE__*/function () {
        function AuthNavbarComponent() {
          _classCallCheck(this, AuthNavbarComponent);

          this.navbarOpen = false;
        }

        _createClass(AuthNavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setNavbarOpen",
          value: function setNavbarOpen() {
            this.navbarOpen = !this.navbarOpen;
          }
        }]);

        return AuthNavbarComponent;
      }();

      AuthNavbarComponent.ctorParameters = function () {
        return [];
      };

      AuthNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-auth-navbar",
        template: _raw_loader_auth_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AuthNavbarComponent);
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map