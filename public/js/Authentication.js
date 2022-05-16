(self["webpackChunk"] = self["webpackChunk"] || []).push([["Authentication"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Auth/Authentication.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Auth/Authentication.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Plugins_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Plugins/client */ "./resources/js/Plugins/client.js");
/* harmony import */ var lottie_vuejs_src_LottieAnimation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lottie-vuejs/src/LottieAnimation.vue */ "./node_modules/lottie-vuejs/src/LottieAnimation.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Authentication",
  components: {
    LottieAnimation: lottie_vuejs_src_LottieAnimation_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      loading: false,
      is_login: true,
      form: {
        name: null,
        email: null,
        password: '',
        password_confirmation: '',
        role: null
      },
      valid: false,
      AccountTypes: [{
        title: "Seller",
        value: "seller"
      }, {
        title: "Buyer",
        value: "buyer"
      }],
      nameRules: [function (v) {
        return !!v || 'Name is required';
      }],
      roleRules: [function (v) {
        return !!v || 'Role is required';
      }],
      emailRules: [function (v) {
        return !!v || 'Email is required';
      }, function (v) {
        return /.+@.+\..+/.test(v) || 'Email must be valid';
      }],
      passwordRules: [function (v) {
        return !!v || 'Password is required';
      }, function (v) {
        return v.length >= 6 || 'Password must be at least 6 characters';
      }]
    };
  },
  methods: {
    Login: function Login() {
      var _this = this;

      this.loading = true;
      this.$refs.form.validate();

      if (this.valid) {
        _Plugins_client__WEBPACK_IMPORTED_MODULE_0__.client.post('/api/auth/login', this.form).then(function (response) {
          console.log(response.data);

          _this.$store.commit('auth', {
            token: response.data.token,
            user: response.data.user
          });
        })["catch"](function (error) {
          console.log(error.response);
        })["finally"](function () {
          _this.loading = false;
        });
      }
    },
    Register: function Register() {
      var _this2 = this;

      this.loading = true;
      this.$refs.form.validate();

      if (this.valid) {
        _Plugins_client__WEBPACK_IMPORTED_MODULE_0__.client.post('/api/auth/register', this.form).then(function (response) {
          console.log(response.data);
          _this2.is_login = true;
        })["catch"](function (error) {
          console.log(error.response);
        })["finally"](function () {
          _this2.loading = false;
        });
      }
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VCard/VCard.sass":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VCard/VCard.sass ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".theme--light.v-card {\n  background-color: #FFFFFF;\n  color: rgba(0, 0, 0, 0.87);\n}\n.theme--light.v-card > .v-card__text,\n.theme--light.v-card > .v-card__subtitle {\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.theme--dark.v-card {\n  background-color: #1E1E1E;\n  color: #FFFFFF;\n}\n.theme--dark.v-card > .v-card__text,\n.theme--dark.v-card > .v-card__subtitle {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.v-sheet.v-card {\n  border-radius: 4px;\n}\n.v-sheet.v-card:not(.v-sheet--outlined) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.v-sheet.v-card.v-sheet--shaped {\n  border-radius: 24px 4px;\n}\n\n.v-card {\n  border-width: thin;\n  display: block;\n  max-width: 100%;\n  outline: none;\n  text-decoration: none;\n  transition-property: box-shadow, opacity;\n  overflow-wrap: break-word;\n  position: relative;\n  white-space: normal;\n}\n.v-card > *:first-child:not(.v-btn):not(.v-chip):not(.v-avatar),\n.v-card > .v-card__progress + *:not(.v-btn):not(.v-chip):not(.v-avatar) {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n.v-card > *:last-child:not(.v-btn):not(.v-chip):not(.v-avatar) {\n  border-bottom-left-radius: inherit;\n  border-bottom-right-radius: inherit;\n}\n\n.v-card__progress {\n  top: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n}\n\n.v-card__subtitle + .v-card__text {\n  padding-top: 0;\n}\n\n.v-card__subtitle,\n.v-card__text {\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.375rem;\n  letter-spacing: 0.0071428571em;\n}\n\n.v-card__subtitle,\n.v-card__text,\n.v-card__title {\n  padding: 16px;\n}\n\n.v-card__title {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0.0125em;\n  line-height: 2rem;\n  word-break: break-all;\n}\n.v-card__title + .v-card__subtitle,\n.v-card__title + .v-card__text {\n  padding-top: 0;\n}\n.v-card__title + .v-card__subtitle {\n  margin-top: -16px;\n}\n\n.v-card__text {\n  width: 100%;\n}\n\n.v-card__actions {\n  align-items: center;\n  display: flex;\n  padding: 8px;\n}\n.v-card__actions > .v-btn.v-btn {\n  padding: 0 8px;\n}\n.v-application--is-ltr .v-card__actions > .v-btn.v-btn + .v-btn {\n  margin-left: 8px;\n}\n.v-application--is-ltr .v-card__actions > .v-btn.v-btn .v-icon--left {\n  margin-left: 4px;\n}\n.v-application--is-ltr .v-card__actions > .v-btn.v-btn .v-icon--right {\n  margin-right: 4px;\n}\n.v-application--is-rtl .v-card__actions > .v-btn.v-btn + .v-btn {\n  margin-right: 8px;\n}\n.v-application--is-rtl .v-card__actions > .v-btn.v-btn .v-icon--left {\n  margin-right: 4px;\n}\n.v-application--is-rtl .v-card__actions > .v-btn.v-btn .v-icon--right {\n  margin-left: 4px;\n}\n\n.v-card--flat {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-sheet.v-card--hover {\n  cursor: pointer;\n  transition: box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.v-sheet.v-card--hover:hover, .v-sheet.v-card--hover:focus {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.v-card--link {\n  cursor: pointer;\n}\n.v-card--link .v-chip {\n  cursor: pointer;\n}\n.v-card--link:focus:before {\n  opacity: 0.08;\n}\n.v-card--link:before {\n  background: currentColor;\n  bottom: 0;\n  content: \"\";\n  left: 0;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: 0.2s opacity;\n}\n\n.v-card--disabled {\n  pointer-events: none;\n  user-select: none;\n}\n.v-card--disabled > *:not(.v-card__progress) {\n  opacity: 0.6;\n  transition: inherit;\n}\n\n.v-card--loading {\n  overflow: hidden;\n}\n\n.v-card--raised {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VCheckbox/VSimpleCheckbox.sass":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VCheckbox/VSimpleCheckbox.sass ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".v-simple-checkbox {\n  align-self: center;\n  line-height: normal;\n  position: relative;\n  user-select: none;\n}\n.v-simple-checkbox .v-icon {\n  cursor: pointer;\n}\n\n.v-simple-checkbox--disabled {\n  cursor: default;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VChip/VChip.sass":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VChip/VChip.sass ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".v-chip:not(.v-chip--outlined).primary, .v-chip:not(.v-chip--outlined).secondary, .v-chip:not(.v-chip--outlined).accent, .v-chip:not(.v-chip--outlined).success, .v-chip:not(.v-chip--outlined).error, .v-chip:not(.v-chip--outlined).warning, .v-chip:not(.v-chip--outlined).info {\n  color: #FFFFFF;\n}\n\n.theme--light.v-chip {\n  border-color: rgba(0, 0, 0, 0.12);\n  color: rgba(0, 0, 0, 0.87);\n}\n.theme--light.v-chip:not(.v-chip--active) {\n  background: #e0e0e0;\n}\n.theme--light.v-chip:hover::before {\n  opacity: 0.04;\n}\n.theme--light.v-chip:focus::before {\n  opacity: 0.12;\n}\n.theme--light.v-chip--active:hover::before, .theme--light.v-chip--active::before {\n  opacity: 0.12;\n}\n.theme--light.v-chip--active:focus::before {\n  opacity: 0.16;\n}\n\n.theme--dark.v-chip {\n  border-color: rgba(255, 255, 255, 0.12);\n  color: #FFFFFF;\n}\n.theme--dark.v-chip:not(.v-chip--active) {\n  background: #555;\n}\n.theme--dark.v-chip:hover::before {\n  opacity: 0.08;\n}\n.theme--dark.v-chip:focus::before {\n  opacity: 0.24;\n}\n.theme--dark.v-chip--active:hover::before, .theme--dark.v-chip--active::before {\n  opacity: 0.24;\n}\n.theme--dark.v-chip--active:focus::before {\n  opacity: 0.32;\n}\n\n.v-chip {\n  align-items: center;\n  cursor: default;\n  display: inline-flex;\n  line-height: 20px;\n  max-width: 100%;\n  outline: none;\n  overflow: hidden;\n  padding: 0 12px;\n  position: relative;\n  text-decoration: none;\n  transition-duration: 0.28s;\n  transition-property: box-shadow, opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.v-chip:before {\n  background-color: currentColor;\n  bottom: 0;\n  border-radius: inherit;\n  content: \"\";\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  pointer-events: none;\n  right: 0;\n  top: 0;\n}\n.v-chip .v-avatar {\n  height: 24px !important;\n  min-width: 24px !important;\n  width: 24px !important;\n}\n.v-chip .v-icon {\n  font-size: 24px;\n}\n.v-application--is-ltr .v-chip .v-avatar--left,\n.v-application--is-ltr .v-chip .v-icon--left {\n  margin-left: -6px;\n  margin-right: 6px;\n}\n.v-application--is-ltr .v-chip .v-avatar--right,\n.v-application--is-ltr .v-chip .v-icon--right {\n  margin-left: 6px;\n  margin-right: -6px;\n}\n.v-application--is-rtl .v-chip .v-avatar--left,\n.v-application--is-rtl .v-chip .v-icon--left {\n  margin-left: 6px;\n  margin-right: -6px;\n}\n.v-application--is-rtl .v-chip .v-avatar--right,\n.v-application--is-rtl .v-chip .v-icon--right {\n  margin-left: -6px;\n  margin-right: 6px;\n}\n.v-chip:not(.v-chip--no-color) .v-icon {\n  color: inherit;\n}\n\n.v-chip .v-chip__close.v-icon {\n  font-size: 18px;\n  max-height: 18px;\n  max-width: 18px;\n  user-select: none;\n}\n.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right {\n  margin-right: -4px;\n}\n.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right {\n  margin-left: -4px;\n}\n.v-chip .v-chip__close.v-icon:hover, .v-chip .v-chip__close.v-icon:focus, .v-chip .v-chip__close.v-icon:active {\n  opacity: 0.72;\n}\n.v-chip .v-chip__content {\n  align-items: center;\n  display: inline-flex;\n  height: 100%;\n  max-width: 100%;\n}\n\n.v-chip--active .v-icon {\n  color: inherit;\n}\n\n.v-chip--link::before {\n  transition: opacity 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-chip--link:focus::before {\n  opacity: 0.32;\n}\n\n.v-chip--clickable {\n  cursor: pointer;\n  user-select: none;\n}\n.v-chip--clickable:active {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.v-chip--disabled {\n  opacity: 0.4;\n  pointer-events: none;\n  user-select: none;\n}\n\n.v-chip__filter {\n  max-width: 24px;\n}\n.v-chip__filter.v-icon {\n  color: inherit;\n}\n.v-chip__filter.expand-x-transition-leave-active, .v-chip__filter.expand-x-transition-enter {\n  margin: 0;\n}\n\n.v-chip--pill .v-chip__filter {\n  margin-right: 0 16px 0 0;\n}\n.v-chip--pill .v-avatar {\n  height: 32px !important;\n  width: 32px !important;\n}\n.v-application--is-ltr .v-chip--pill .v-avatar--left {\n  margin-left: -12px;\n}\n.v-application--is-ltr .v-chip--pill .v-avatar--right {\n  margin-right: -12px;\n}\n.v-application--is-rtl .v-chip--pill .v-avatar--left {\n  margin-right: -12px;\n}\n.v-application--is-rtl .v-chip--pill .v-avatar--right {\n  margin-left: -12px;\n}\n\n.v-chip--label {\n  border-radius: 4px !important;\n}\n\n.v-chip.v-chip--outlined {\n  border-width: thin;\n  border-style: solid;\n}\n.v-chip.v-chip--outlined.v-chip--active:before {\n  opacity: 0.08;\n}\n.v-chip.v-chip--outlined .v-icon {\n  color: inherit;\n}\n.v-chip.v-chip--outlined.v-chip.v-chip {\n  background-color: transparent !important;\n}\n\n.v-chip.v-chip--selected {\n  background: transparent;\n}\n.v-chip.v-chip--selected:after {\n  opacity: 0.28;\n}\n\n.v-chip.v-size--x-small {\n  border-radius: 8px;\n  font-size: 10px;\n  height: 16px;\n}\n.v-chip.v-size--small {\n  border-radius: 12px;\n  font-size: 12px;\n  height: 24px;\n}\n.v-chip.v-size--default {\n  border-radius: 16px;\n  font-size: 14px;\n  height: 32px;\n}\n.v-chip.v-size--large {\n  border-radius: 27px;\n  font-size: 16px;\n  height: 54px;\n}\n.v-chip.v-size--x-large {\n  border-radius: 33px;\n  font-size: 18px;\n  height: 66px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VCounter/VCounter.sass":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VCounter/VCounter.sass ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Theme */\n.theme--light.v-counter {\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.theme--dark.v-counter {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.v-counter {\n  flex: 0 1 auto;\n  font-size: 12px;\n  min-height: 12px;\n  line-height: 12px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VGrid/_grid.sass":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VGrid/_grid.sass ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container.grow-shrink-0 {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.container.fill-height {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n}\n.container.fill-height > .row {\n  flex: 1 1 100%;\n  max-width: calc(100% + 24px);\n}\n.container.fill-height > .layout {\n  height: 100%;\n  flex: 1 1 auto;\n}\n.container.fill-height > .layout.grow-shrink-0 {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.container.grid-list-xs .layout .flex {\n  padding: 1px;\n}\n.container.grid-list-xs .layout:only-child {\n  margin: -1px;\n}\n.container.grid-list-xs .layout:not(:only-child) {\n  margin: auto -1px;\n}\n.container.grid-list-xs *:not(:only-child) .layout:first-child {\n  margin-top: -1px;\n}\n.container.grid-list-xs *:not(:only-child) .layout:last-child {\n  margin-bottom: -1px;\n}\n.container.grid-list-sm .layout .flex {\n  padding: 2px;\n}\n.container.grid-list-sm .layout:only-child {\n  margin: -2px;\n}\n.container.grid-list-sm .layout:not(:only-child) {\n  margin: auto -2px;\n}\n.container.grid-list-sm *:not(:only-child) .layout:first-child {\n  margin-top: -2px;\n}\n.container.grid-list-sm *:not(:only-child) .layout:last-child {\n  margin-bottom: -2px;\n}\n.container.grid-list-md .layout .flex {\n  padding: 4px;\n}\n.container.grid-list-md .layout:only-child {\n  margin: -4px;\n}\n.container.grid-list-md .layout:not(:only-child) {\n  margin: auto -4px;\n}\n.container.grid-list-md *:not(:only-child) .layout:first-child {\n  margin-top: -4px;\n}\n.container.grid-list-md *:not(:only-child) .layout:last-child {\n  margin-bottom: -4px;\n}\n.container.grid-list-lg .layout .flex {\n  padding: 8px;\n}\n.container.grid-list-lg .layout:only-child {\n  margin: -8px;\n}\n.container.grid-list-lg .layout:not(:only-child) {\n  margin: auto -8px;\n}\n.container.grid-list-lg *:not(:only-child) .layout:first-child {\n  margin-top: -8px;\n}\n.container.grid-list-lg *:not(:only-child) .layout:last-child {\n  margin-bottom: -8px;\n}\n.container.grid-list-xl .layout .flex {\n  padding: 12px;\n}\n.container.grid-list-xl .layout:only-child {\n  margin: -12px;\n}\n.container.grid-list-xl .layout:not(:only-child) {\n  margin: auto -12px;\n}\n.container.grid-list-xl *:not(:only-child) .layout:first-child {\n  margin-top: -12px;\n}\n.container.grid-list-xl *:not(:only-child) .layout:last-child {\n  margin-bottom: -12px;\n}\n\n.layout {\n  display: flex;\n  flex: 1 1 auto;\n  flex-wrap: nowrap;\n  min-width: 0;\n}\n.layout.reverse {\n  flex-direction: row-reverse;\n}\n.layout.column {\n  flex-direction: column;\n}\n.layout.column.reverse {\n  flex-direction: column-reverse;\n}\n.layout.column > .flex {\n  max-width: 100%;\n}\n.layout.wrap {\n  flex-wrap: wrap;\n}\n.layout.grow-shrink-0 {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n@media all and (min-width: 0) {\n  .flex.xs12 {\n    flex-basis: 100%;\n    flex-grow: 0;\n    max-width: 100%;\n  }\n\n  .flex.order-xs12 {\n    order: 12;\n  }\n\n  .flex.xs11 {\n    flex-basis: 91.6666666667%;\n    flex-grow: 0;\n    max-width: 91.6666666667%;\n  }\n\n  .flex.order-xs11 {\n    order: 11;\n  }\n\n  .flex.xs10 {\n    flex-basis: 83.3333333333%;\n    flex-grow: 0;\n    max-width: 83.3333333333%;\n  }\n\n  .flex.order-xs10 {\n    order: 10;\n  }\n\n  .flex.xs9 {\n    flex-basis: 75%;\n    flex-grow: 0;\n    max-width: 75%;\n  }\n\n  .flex.order-xs9 {\n    order: 9;\n  }\n\n  .flex.xs8 {\n    flex-basis: 66.6666666667%;\n    flex-grow: 0;\n    max-width: 66.6666666667%;\n  }\n\n  .flex.order-xs8 {\n    order: 8;\n  }\n\n  .flex.xs7 {\n    flex-basis: 58.3333333333%;\n    flex-grow: 0;\n    max-width: 58.3333333333%;\n  }\n\n  .flex.order-xs7 {\n    order: 7;\n  }\n\n  .flex.xs6 {\n    flex-basis: 50%;\n    flex-grow: 0;\n    max-width: 50%;\n  }\n\n  .flex.order-xs6 {\n    order: 6;\n  }\n\n  .flex.xs5 {\n    flex-basis: 41.6666666667%;\n    flex-grow: 0;\n    max-width: 41.6666666667%;\n  }\n\n  .flex.order-xs5 {\n    order: 5;\n  }\n\n  .flex.xs4 {\n    flex-basis: 33.3333333333%;\n    flex-grow: 0;\n    max-width: 33.3333333333%;\n  }\n\n  .flex.order-xs4 {\n    order: 4;\n  }\n\n  .flex.xs3 {\n    flex-basis: 25%;\n    flex-grow: 0;\n    max-width: 25%;\n  }\n\n  .flex.order-xs3 {\n    order: 3;\n  }\n\n  .flex.xs2 {\n    flex-basis: 16.6666666667%;\n    flex-grow: 0;\n    max-width: 16.6666666667%;\n  }\n\n  .flex.order-xs2 {\n    order: 2;\n  }\n\n  .flex.xs1 {\n    flex-basis: 8.3333333333%;\n    flex-grow: 0;\n    max-width: 8.3333333333%;\n  }\n\n  .flex.order-xs1 {\n    order: 1;\n  }\n\n  .v-application--is-ltr .flex.offset-xs12 {\n    margin-left: 100%;\n  }\n  .v-application--is-rtl .flex.offset-xs12 {\n    margin-right: 100%;\n  }\n\n  .v-application--is-ltr .flex.offset-xs11 {\n    margin-left: 91.6666666667%;\n  }\n  .v-application--is-rtl .flex.offset-xs11 {\n    margin-right: 91.6666666667%;\n  }\n\n  .v-application--is-ltr .flex.offset-xs10 {\n    margin-left: 83.3333333333%;\n  }\n  .v-application--is-rtl .flex.offset-xs10 {\n    margin-right: 83.3333333333%;\n  }\n\n  .v-application--is-ltr .flex.offset-xs9 {\n    margin-left: 75%;\n  }\n  .v-application--is-rtl .flex.offset-xs9 {\n    margin-right: 75%;\n  }\n\n  .v-application--is-ltr .flex.offset-xs8 {\n    margin-left: 66.6666666667%;\n  }\n  .v-application--is-rtl .flex.offset-xs8 {\n    margin-right: 66.6666666667%;\n  }\n\n  .v-application--is-ltr .flex.offset-xs7 {\n    margin-left: 58.3333333333%;\n  }\n  .v-application--is-rtl .flex.offset-xs7 {\n    margin-right: 58.3333333333%;\n  }\n\n  .v-application--is-ltr .flex.offset-xs6 {\n    margin-left: 50%;\n  }\n  .v-application--is-rtl .flex.offset-xs6 {\n    margin-right: 50%;\n  }\n\n  .v-application--is-ltr .flex.offset-xs5 {\n    margin-left: 41.6666666667%;\n  }\n  .v-application--is-rtl .flex.offset-xs5 {\n    margin-right: 41.6666666667%;\n  }\n\n  .v-application--is-ltr .flex.offset-xs4 {\n    margin-left: 33.3333333333%;\n  }\n  .v-application--is-rtl .flex.offset-xs4 {\n    margin-right: 33.3333333333%;\n  }\n\n  .v-application--is-ltr .flex.offset-xs3 {\n    margin-left: 25%;\n  }\n  .v-application--is-rtl .flex.offset-xs3 {\n    margin-right: 25%;\n  }\n\n  .v-application--is-ltr .flex.offset-xs2 {\n    margin-left: 16.6666666667%;\n  }\n  .v-application--is-rtl .flex.offset-xs2 {\n    margin-right: 16.6666666667%;\n  }\n\n  .v-application--is-ltr .flex.offset-xs1 {\n    margin-left: 8.3333333333%;\n  }\n  .v-application--is-rtl .flex.offset-xs1 {\n    margin-right: 8.3333333333%;\n  }\n\n  .v-application--is-ltr .flex.offset-xs0 {\n    margin-left: 0%;\n  }\n  .v-application--is-rtl .flex.offset-xs0 {\n    margin-right: 0%;\n  }\n}\n@media all and (min-width: 600px) {\n  .flex.sm12 {\n    flex-basis: 100%;\n    flex-grow: 0;\n    max-width: 100%;\n  }\n\n  .flex.order-sm12 {\n    order: 12;\n  }\n\n  .flex.sm11 {\n    flex-basis: 91.6666666667%;\n    flex-grow: 0;\n    max-width: 91.6666666667%;\n  }\n\n  .flex.order-sm11 {\n    order: 11;\n  }\n\n  .flex.sm10 {\n    flex-basis: 83.3333333333%;\n    flex-grow: 0;\n    max-width: 83.3333333333%;\n  }\n\n  .flex.order-sm10 {\n    order: 10;\n  }\n\n  .flex.sm9 {\n    flex-basis: 75%;\n    flex-grow: 0;\n    max-width: 75%;\n  }\n\n  .flex.order-sm9 {\n    order: 9;\n  }\n\n  .flex.sm8 {\n    flex-basis: 66.6666666667%;\n    flex-grow: 0;\n    max-width: 66.6666666667%;\n  }\n\n  .flex.order-sm8 {\n    order: 8;\n  }\n\n  .flex.sm7 {\n    flex-basis: 58.3333333333%;\n    flex-grow: 0;\n    max-width: 58.3333333333%;\n  }\n\n  .flex.order-sm7 {\n    order: 7;\n  }\n\n  .flex.sm6 {\n    flex-basis: 50%;\n    flex-grow: 0;\n    max-width: 50%;\n  }\n\n  .flex.order-sm6 {\n    order: 6;\n  }\n\n  .flex.sm5 {\n    flex-basis: 41.6666666667%;\n    flex-grow: 0;\n    max-width: 41.6666666667%;\n  }\n\n  .flex.order-sm5 {\n    order: 5;\n  }\n\n  .flex.sm4 {\n    flex-basis: 33.3333333333%;\n    flex-grow: 0;\n    max-width: 33.3333333333%;\n  }\n\n  .flex.order-sm4 {\n    order: 4;\n  }\n\n  .flex.sm3 {\n    flex-basis: 25%;\n    flex-grow: 0;\n    max-width: 25%;\n  }\n\n  .flex.order-sm3 {\n    order: 3;\n  }\n\n  .flex.sm2 {\n    flex-basis: 16.6666666667%;\n    flex-grow: 0;\n    max-width: 16.6666666667%;\n  }\n\n  .flex.order-sm2 {\n    order: 2;\n  }\n\n  .flex.sm1 {\n    flex-basis: 8.3333333333%;\n    flex-grow: 0;\n    max-width: 8.3333333333%;\n  }\n\n  .flex.order-sm1 {\n    order: 1;\n  }\n\n  .v-application--is-ltr .flex.offset-sm12 {\n    margin-left: 100%;\n  }\n  .v-application--is-rtl .flex.offset-sm12 {\n    margin-right: 100%;\n  }\n\n  .v-application--is-ltr .flex.offset-sm11 {\n    margin-left: 91.6666666667%;\n  }\n  .v-application--is-rtl .flex.offset-sm11 {\n    margin-right: 91.6666666667%;\n  }\n\n  .v-application--is-ltr .flex.offset-sm10 {\n    margin-left: 83.3333333333%;\n  }\n  .v-application--is-rtl .flex.offset-sm10 {\n    margin-right: 83.3333333333%;\n  }\n\n  .v-application--is-ltr .flex.offset-sm9 {\n    margin-left: 75%;\n  }\n  .v-application--is-rtl .flex.offset-sm9 {\n    margin-right: 75%;\n  }\n\n  .v-application--is-ltr .flex.offset-sm8 {\n    margin-left: 66.6666666667%;\n  }\n  .v-application--is-rtl .flex.offset-sm8 {\n    margin-right: 66.6666666667%;\n  }\n\n  .v-application--is-ltr .flex.offset-sm7 {\n    margin-left: 58.3333333333%;\n  }\n  .v-application--is-rtl .flex.offset-sm7 {\n    margin-right: 58.3333333333%;\n  }\n\n  .v-application--is-ltr .flex.offset-sm6 {\n    margin-left: 50%;\n  }\n  .v-application--is-rtl .flex.offset-sm6 {\n    margin-right: 50%;\n  }\n\n  .v-application--is-ltr .flex.offset-sm5 {\n    margin-left: 41.6666666667%;\n  }\n  .v-application--is-rtl .flex.offset-sm5 {\n    margin-right: 41.6666666667%;\n  }\n\n  .v-application--is-ltr .flex.offset-sm4 {\n    margin-left: 33.3333333333%;\n  }\n  .v-application--is-rtl .flex.offset-sm4 {\n    margin-right: 33.3333333333%;\n  }\n\n  .v-application--is-ltr .flex.offset-sm3 {\n    margin-left: 25%;\n  }\n  .v-application--is-rtl .flex.offset-sm3 {\n    margin-right: 25%;\n  }\n\n  .v-application--is-ltr .flex.offset-sm2 {\n    margin-left: 16.6666666667%;\n  }\n  .v-application--is-rtl .flex.offset-sm2 {\n    margin-right: 16.6666666667%;\n  }\n\n  .v-application--is-ltr .flex.offset-sm1 {\n    margin-left: 8.3333333333%;\n  }\n  .v-application--is-rtl .flex.offset-sm1 {\n    margin-right: 8.3333333333%;\n  }\n\n  .v-application--is-ltr .flex.offset-sm0 {\n    margin-left: 0%;\n  }\n  .v-application--is-rtl .flex.offset-sm0 {\n    margin-right: 0%;\n  }\n}\n@media all and (min-width: 960px) {\n  .flex.md12 {\n    flex-basis: 100%;\n    flex-grow: 0;\n    max-width: 100%;\n  }\n\n  .flex.order-md12 {\n    order: 12;\n  }\n\n  .flex.md11 {\n    flex-basis: 91.6666666667%;\n    flex-grow: 0;\n    max-width: 91.6666666667%;\n  }\n\n  .flex.order-md11 {\n    order: 11;\n  }\n\n  .flex.md10 {\n    flex-basis: 83.3333333333%;\n    flex-grow: 0;\n    max-width: 83.3333333333%;\n  }\n\n  .flex.order-md10 {\n    order: 10;\n  }\n\n  .flex.md9 {\n    flex-basis: 75%;\n    flex-grow: 0;\n    max-width: 75%;\n  }\n\n  .flex.order-md9 {\n    order: 9;\n  }\n\n  .flex.md8 {\n    flex-basis: 66.6666666667%;\n    flex-grow: 0;\n    max-width: 66.6666666667%;\n  }\n\n  .flex.order-md8 {\n    order: 8;\n  }\n\n  .flex.md7 {\n    flex-basis: 58.3333333333%;\n    flex-grow: 0;\n    max-width: 58.3333333333%;\n  }\n\n  .flex.order-md7 {\n    order: 7;\n  }\n\n  .flex.md6 {\n    flex-basis: 50%;\n    flex-grow: 0;\n    max-width: 50%;\n  }\n\n  .flex.order-md6 {\n    order: 6;\n  }\n\n  .flex.md5 {\n    flex-basis: 41.6666666667%;\n    flex-grow: 0;\n    max-width: 41.6666666667%;\n  }\n\n  .flex.order-md5 {\n    order: 5;\n  }\n\n  .flex.md4 {\n    flex-basis: 33.3333333333%;\n    flex-grow: 0;\n    max-width: 33.3333333333%;\n  }\n\n  .flex.order-md4 {\n    order: 4;\n  }\n\n  .flex.md3 {\n    flex-basis: 25%;\n    flex-grow: 0;\n    max-width: 25%;\n  }\n\n  .flex.order-md3 {\n    order: 3;\n  }\n\n  .flex.md2 {\n    flex-basis: 16.6666666667%;\n    flex-grow: 0;\n    max-width: 16.6666666667%;\n  }\n\n  .flex.order-md2 {\n    order: 2;\n  }\n\n  .flex.md1 {\n    flex-basis: 8.3333333333%;\n    flex-grow: 0;\n    max-width: 8.3333333333%;\n  }\n\n  .flex.order-md1 {\n    order: 1;\n  }\n\n  .v-application--is-ltr .flex.offset-md12 {\n    margin-left: 100%;\n  }\n  .v-application--is-rtl .flex.offset-md12 {\n    margin-right: 100%;\n  }\n\n  .v-application--is-ltr .flex.offset-md11 {\n    margin-left: 91.6666666667%;\n  }\n  .v-application--is-rtl .flex.offset-md11 {\n    margin-right: 91.6666666667%;\n  }\n\n  .v-application--is-ltr .flex.offset-md10 {\n    margin-left: 83.3333333333%;\n  }\n  .v-application--is-rtl .flex.offset-md10 {\n    margin-right: 83.3333333333%;\n  }\n\n  .v-application--is-ltr .flex.offset-md9 {\n    margin-left: 75%;\n  }\n  .v-application--is-rtl .flex.offset-md9 {\n    margin-right: 75%;\n  }\n\n  .v-application--is-ltr .flex.offset-md8 {\n    margin-left: 66.6666666667%;\n  }\n  .v-application--is-rtl .flex.offset-md8 {\n    margin-right: 66.6666666667%;\n  }\n\n  .v-application--is-ltr .flex.offset-md7 {\n    margin-left: 58.3333333333%;\n  }\n  .v-application--is-rtl .flex.offset-md7 {\n    margin-right: 58.3333333333%;\n  }\n\n  .v-application--is-ltr .flex.offset-md6 {\n    margin-left: 50%;\n  }\n  .v-application--is-rtl .flex.offset-md6 {\n    margin-right: 50%;\n  }\n\n  .v-application--is-ltr .flex.offset-md5 {\n    margin-left: 41.6666666667%;\n  }\n  .v-application--is-rtl .flex.offset-md5 {\n    margin-right: 41.6666666667%;\n  }\n\n  .v-application--is-ltr .flex.offset-md4 {\n    margin-left: 33.3333333333%;\n  }\n  .v-application--is-rtl .flex.offset-md4 {\n    margin-right: 33.3333333333%;\n  }\n\n  .v-application--is-ltr .flex.offset-md3 {\n    margin-left: 25%;\n  }\n  .v-application--is-rtl .flex.offset-md3 {\n    margin-right: 25%;\n  }\n\n  .v-application--is-ltr .flex.offset-md2 {\n    margin-left: 16.6666666667%;\n  }\n  .v-application--is-rtl .flex.offset-md2 {\n    margin-right: 16.6666666667%;\n  }\n\n  .v-application--is-ltr .flex.offset-md1 {\n    margin-left: 8.3333333333%;\n  }\n  .v-application--is-rtl .flex.offset-md1 {\n    margin-right: 8.3333333333%;\n  }\n\n  .v-application--is-ltr .flex.offset-md0 {\n    margin-left: 0%;\n  }\n  .v-application--is-rtl .flex.offset-md0 {\n    margin-right: 0%;\n  }\n}\n@media all and (min-width: 1264px) {\n  .flex.lg12 {\n    flex-basis: 100%;\n    flex-grow: 0;\n    max-width: 100%;\n  }\n\n  .flex.order-lg12 {\n    order: 12;\n  }\n\n  .flex.lg11 {\n    flex-basis: 91.6666666667%;\n    flex-grow: 0;\n    max-width: 91.6666666667%;\n  }\n\n  .flex.order-lg11 {\n    order: 11;\n  }\n\n  .flex.lg10 {\n    flex-basis: 83.3333333333%;\n    flex-grow: 0;\n    max-width: 83.3333333333%;\n  }\n\n  .flex.order-lg10 {\n    order: 10;\n  }\n\n  .flex.lg9 {\n    flex-basis: 75%;\n    flex-grow: 0;\n    max-width: 75%;\n  }\n\n  .flex.order-lg9 {\n    order: 9;\n  }\n\n  .flex.lg8 {\n    flex-basis: 66.6666666667%;\n    flex-grow: 0;\n    max-width: 66.6666666667%;\n  }\n\n  .flex.order-lg8 {\n    order: 8;\n  }\n\n  .flex.lg7 {\n    flex-basis: 58.3333333333%;\n    flex-grow: 0;\n    max-width: 58.3333333333%;\n  }\n\n  .flex.order-lg7 {\n    order: 7;\n  }\n\n  .flex.lg6 {\n    flex-basis: 50%;\n    flex-grow: 0;\n    max-width: 50%;\n  }\n\n  .flex.order-lg6 {\n    order: 6;\n  }\n\n  .flex.lg5 {\n    flex-basis: 41.6666666667%;\n    flex-grow: 0;\n    max-width: 41.6666666667%;\n  }\n\n  .flex.order-lg5 {\n    order: 5;\n  }\n\n  .flex.lg4 {\n    flex-basis: 33.3333333333%;\n    flex-grow: 0;\n    max-width: 33.3333333333%;\n  }\n\n  .flex.order-lg4 {\n    order: 4;\n  }\n\n  .flex.lg3 {\n    flex-basis: 25%;\n    flex-grow: 0;\n    max-width: 25%;\n  }\n\n  .flex.order-lg3 {\n    order: 3;\n  }\n\n  .flex.lg2 {\n    flex-basis: 16.6666666667%;\n    flex-grow: 0;\n    max-width: 16.6666666667%;\n  }\n\n  .flex.order-lg2 {\n    order: 2;\n  }\n\n  .flex.lg1 {\n    flex-basis: 8.3333333333%;\n    flex-grow: 0;\n    max-width: 8.3333333333%;\n  }\n\n  .flex.order-lg1 {\n    order: 1;\n  }\n\n  .v-application--is-ltr .flex.offset-lg12 {\n    margin-left: 100%;\n  }\n  .v-application--is-rtl .flex.offset-lg12 {\n    margin-right: 100%;\n  }\n\n  .v-application--is-ltr .flex.offset-lg11 {\n    margin-left: 91.6666666667%;\n  }\n  .v-application--is-rtl .flex.offset-lg11 {\n    margin-right: 91.6666666667%;\n  }\n\n  .v-application--is-ltr .flex.offset-lg10 {\n    margin-left: 83.3333333333%;\n  }\n  .v-application--is-rtl .flex.offset-lg10 {\n    margin-right: 83.3333333333%;\n  }\n\n  .v-application--is-ltr .flex.offset-lg9 {\n    margin-left: 75%;\n  }\n  .v-application--is-rtl .flex.offset-lg9 {\n    margin-right: 75%;\n  }\n\n  .v-application--is-ltr .flex.offset-lg8 {\n    margin-left: 66.6666666667%;\n  }\n  .v-application--is-rtl .flex.offset-lg8 {\n    margin-right: 66.6666666667%;\n  }\n\n  .v-application--is-ltr .flex.offset-lg7 {\n    margin-left: 58.3333333333%;\n  }\n  .v-application--is-rtl .flex.offset-lg7 {\n    margin-right: 58.3333333333%;\n  }\n\n  .v-application--is-ltr .flex.offset-lg6 {\n    margin-left: 50%;\n  }\n  .v-application--is-rtl .flex.offset-lg6 {\n    margin-right: 50%;\n  }\n\n  .v-application--is-ltr .flex.offset-lg5 {\n    margin-left: 41.6666666667%;\n  }\n  .v-application--is-rtl .flex.offset-lg5 {\n    margin-right: 41.6666666667%;\n  }\n\n  .v-application--is-ltr .flex.offset-lg4 {\n    margin-left: 33.3333333333%;\n  }\n  .v-application--is-rtl .flex.offset-lg4 {\n    margin-right: 33.3333333333%;\n  }\n\n  .v-application--is-ltr .flex.offset-lg3 {\n    margin-left: 25%;\n  }\n  .v-application--is-rtl .flex.offset-lg3 {\n    margin-right: 25%;\n  }\n\n  .v-application--is-ltr .flex.offset-lg2 {\n    margin-left: 16.6666666667%;\n  }\n  .v-application--is-rtl .flex.offset-lg2 {\n    margin-right: 16.6666666667%;\n  }\n\n  .v-application--is-ltr .flex.offset-lg1 {\n    margin-left: 8.3333333333%;\n  }\n  .v-application--is-rtl .flex.offset-lg1 {\n    margin-right: 8.3333333333%;\n  }\n\n  .v-application--is-ltr .flex.offset-lg0 {\n    margin-left: 0%;\n  }\n  .v-application--is-rtl .flex.offset-lg0 {\n    margin-right: 0%;\n  }\n}\n@media all and (min-width: 1904px) {\n  .flex.xl12 {\n    flex-basis: 100%;\n    flex-grow: 0;\n    max-width: 100%;\n  }\n\n  .flex.order-xl12 {\n    order: 12;\n  }\n\n  .flex.xl11 {\n    flex-basis: 91.6666666667%;\n    flex-grow: 0;\n    max-width: 91.6666666667%;\n  }\n\n  .flex.order-xl11 {\n    order: 11;\n  }\n\n  .flex.xl10 {\n    flex-basis: 83.3333333333%;\n    flex-grow: 0;\n    max-width: 83.3333333333%;\n  }\n\n  .flex.order-xl10 {\n    order: 10;\n  }\n\n  .flex.xl9 {\n    flex-basis: 75%;\n    flex-grow: 0;\n    max-width: 75%;\n  }\n\n  .flex.order-xl9 {\n    order: 9;\n  }\n\n  .flex.xl8 {\n    flex-basis: 66.6666666667%;\n    flex-grow: 0;\n    max-width: 66.6666666667%;\n  }\n\n  .flex.order-xl8 {\n    order: 8;\n  }\n\n  .flex.xl7 {\n    flex-basis: 58.3333333333%;\n    flex-grow: 0;\n    max-width: 58.3333333333%;\n  }\n\n  .flex.order-xl7 {\n    order: 7;\n  }\n\n  .flex.xl6 {\n    flex-basis: 50%;\n    flex-grow: 0;\n    max-width: 50%;\n  }\n\n  .flex.order-xl6 {\n    order: 6;\n  }\n\n  .flex.xl5 {\n    flex-basis: 41.6666666667%;\n    flex-grow: 0;\n    max-width: 41.6666666667%;\n  }\n\n  .flex.order-xl5 {\n    order: 5;\n  }\n\n  .flex.xl4 {\n    flex-basis: 33.3333333333%;\n    flex-grow: 0;\n    max-width: 33.3333333333%;\n  }\n\n  .flex.order-xl4 {\n    order: 4;\n  }\n\n  .flex.xl3 {\n    flex-basis: 25%;\n    flex-grow: 0;\n    max-width: 25%;\n  }\n\n  .flex.order-xl3 {\n    order: 3;\n  }\n\n  .flex.xl2 {\n    flex-basis: 16.6666666667%;\n    flex-grow: 0;\n    max-width: 16.6666666667%;\n  }\n\n  .flex.order-xl2 {\n    order: 2;\n  }\n\n  .flex.xl1 {\n    flex-basis: 8.3333333333%;\n    flex-grow: 0;\n    max-width: 8.3333333333%;\n  }\n\n  .flex.order-xl1 {\n    order: 1;\n  }\n\n  .v-application--is-ltr .flex.offset-xl12 {\n    margin-left: 100%;\n  }\n  .v-application--is-rtl .flex.offset-xl12 {\n    margin-right: 100%;\n  }\n\n  .v-application--is-ltr .flex.offset-xl11 {\n    margin-left: 91.6666666667%;\n  }\n  .v-application--is-rtl .flex.offset-xl11 {\n    margin-right: 91.6666666667%;\n  }\n\n  .v-application--is-ltr .flex.offset-xl10 {\n    margin-left: 83.3333333333%;\n  }\n  .v-application--is-rtl .flex.offset-xl10 {\n    margin-right: 83.3333333333%;\n  }\n\n  .v-application--is-ltr .flex.offset-xl9 {\n    margin-left: 75%;\n  }\n  .v-application--is-rtl .flex.offset-xl9 {\n    margin-right: 75%;\n  }\n\n  .v-application--is-ltr .flex.offset-xl8 {\n    margin-left: 66.6666666667%;\n  }\n  .v-application--is-rtl .flex.offset-xl8 {\n    margin-right: 66.6666666667%;\n  }\n\n  .v-application--is-ltr .flex.offset-xl7 {\n    margin-left: 58.3333333333%;\n  }\n  .v-application--is-rtl .flex.offset-xl7 {\n    margin-right: 58.3333333333%;\n  }\n\n  .v-application--is-ltr .flex.offset-xl6 {\n    margin-left: 50%;\n  }\n  .v-application--is-rtl .flex.offset-xl6 {\n    margin-right: 50%;\n  }\n\n  .v-application--is-ltr .flex.offset-xl5 {\n    margin-left: 41.6666666667%;\n  }\n  .v-application--is-rtl .flex.offset-xl5 {\n    margin-right: 41.6666666667%;\n  }\n\n  .v-application--is-ltr .flex.offset-xl4 {\n    margin-left: 33.3333333333%;\n  }\n  .v-application--is-rtl .flex.offset-xl4 {\n    margin-right: 33.3333333333%;\n  }\n\n  .v-application--is-ltr .flex.offset-xl3 {\n    margin-left: 25%;\n  }\n  .v-application--is-rtl .flex.offset-xl3 {\n    margin-right: 25%;\n  }\n\n  .v-application--is-ltr .flex.offset-xl2 {\n    margin-left: 16.6666666667%;\n  }\n  .v-application--is-rtl .flex.offset-xl2 {\n    margin-right: 16.6666666667%;\n  }\n\n  .v-application--is-ltr .flex.offset-xl1 {\n    margin-left: 8.3333333333%;\n  }\n  .v-application--is-rtl .flex.offset-xl1 {\n    margin-right: 8.3333333333%;\n  }\n\n  .v-application--is-ltr .flex.offset-xl0 {\n    margin-left: 0%;\n  }\n  .v-application--is-rtl .flex.offset-xl0 {\n    margin-right: 0%;\n  }\n}\n.flex,\n.child-flex > * {\n  flex: 1 1 auto;\n  max-width: 100%;\n}\n.flex.grow-shrink-0,\n.child-flex > *.grow-shrink-0 {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.spacer {\n  flex-grow: 1 !important;\n}\n\n.grow {\n  flex-grow: 1 !important;\n  flex-shrink: 0 !important;\n}\n\n.shrink {\n  flex-grow: 0 !important;\n  flex-shrink: 1 !important;\n}\n\n.fill-height {\n  height: 100%;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VInput/VInput.sass":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VInput/VInput.sass ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Theme */\n.theme--light.v-input {\n  color: rgba(0, 0, 0, 0.87);\n}\n.theme--light.v-input input,\n.theme--light.v-input textarea {\n  color: rgba(0, 0, 0, 0.87);\n}\n.theme--light.v-input input::placeholder,\n.theme--light.v-input textarea::placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n.theme--light.v-input--is-disabled {\n  color: rgba(0, 0, 0, 0.38);\n}\n.theme--light.v-input--is-disabled input,\n.theme--light.v-input--is-disabled textarea {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.theme--dark.v-input {\n  color: #FFFFFF;\n}\n.theme--dark.v-input input,\n.theme--dark.v-input textarea {\n  color: #FFFFFF;\n}\n.theme--dark.v-input input::placeholder,\n.theme--dark.v-input textarea::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.theme--dark.v-input--is-disabled {\n  color: rgba(255, 255, 255, 0.5);\n}\n.theme--dark.v-input--is-disabled input,\n.theme--dark.v-input--is-disabled textarea {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.v-input {\n  align-items: flex-start;\n  display: flex;\n  flex: 1 1 auto;\n  font-size: 16px;\n  letter-spacing: normal;\n  max-width: 100%;\n  text-align: left;\n}\n.v-input .v-progress-linear {\n  top: calc(100% - 1px);\n  left: 0;\n}\n.v-input input {\n  max-height: 32px;\n}\n.v-input input:invalid,\n.v-input textarea:invalid {\n  box-shadow: none;\n}\n.v-input input:focus, .v-input input:active,\n.v-input textarea:focus,\n.v-input textarea:active {\n  outline: none;\n}\n.v-input .v-label {\n  height: 20px;\n  line-height: 20px;\n  letter-spacing: normal;\n}\n.v-input__append-outer, .v-input__prepend-outer {\n  display: inline-flex;\n  margin-bottom: 4px;\n  margin-top: 4px;\n  line-height: 1;\n}\n.v-input__append-outer .v-icon, .v-input__prepend-outer .v-icon {\n  user-select: none;\n}\n.v-application--is-ltr .v-input__append-outer {\n  margin-left: 9px;\n}\n.v-application--is-rtl .v-input__append-outer {\n  margin-right: 9px;\n}\n.v-application--is-ltr .v-input__prepend-outer {\n  margin-right: 9px;\n}\n.v-application--is-rtl .v-input__prepend-outer {\n  margin-left: 9px;\n}\n.v-input__control {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  min-width: 0;\n  width: 100%;\n}\n.v-input__icon {\n  align-items: center;\n  display: inline-flex;\n  height: 24px;\n  flex: 1 0 auto;\n  justify-content: center;\n  min-width: 24px;\n  width: 24px;\n}\n.v-input__icon--clear {\n  border-radius: 50%;\n}\n.v-input__icon--clear .v-icon--disabled {\n  visibility: hidden;\n}\n.v-input__slot {\n  align-items: center;\n  color: inherit;\n  display: flex;\n  margin-bottom: 8px;\n  min-height: inherit;\n  position: relative;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  width: 100%;\n}\n.v-input--dense > .v-input__control > .v-input__slot {\n  margin-bottom: 4px;\n}\n.v-input--is-disabled:not(.v-input--is-readonly) {\n  pointer-events: none;\n}\n.v-input--is-loading > .v-input__control > .v-input__slot:before, .v-input--is-loading > .v-input__control > .v-input__slot:after {\n  display: none;\n}\n.v-input--hide-details > .v-input__control > .v-input__slot {\n  margin-bottom: 0;\n}\n.v-input--has-state.error--text .v-label {\n  animation: v-shake 0.6s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-input--hide-spin-buttons input::-webkit-outer-spin-button,\n.v-input--hide-spin-buttons input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.v-input--hide-spin-buttons input[type=number] {\n  -moz-appearance: textfield;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VLabel/VLabel.sass":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VLabel/VLabel.sass ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".theme--light.v-label {\n  color: rgba(0, 0, 0, 0.6);\n}\n.theme--light.v-label--is-disabled {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.theme--dark.v-label {\n  color: rgba(255, 255, 255, 0.7);\n}\n.theme--dark.v-label--is-disabled {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.v-label {\n  font-size: 16px;\n  line-height: 1;\n  min-height: 8px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VMenu/VMenu.sass":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VMenu/VMenu.sass ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".v-menu {\n  display: none;\n}\n.v-menu--attached {\n  display: inline;\n}\n.v-menu__content {\n  position: absolute;\n  display: inline-block;\n  max-width: 80%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  contain: content;\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n}\n.v-menu__content--active {\n  pointer-events: none;\n}\n.v-menu__content--auto .v-list-item {\n  transition-property: transform, opacity;\n  transition-duration: 0.3s;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.v-menu__content--fixed {\n  position: fixed;\n}\n.v-menu__content > .card {\n  contain: content;\n  backface-visibility: hidden;\n}\n.v-menu > .v-menu__content {\n  max-width: none;\n}\n.v-menu-transition-enter .v-list-item {\n  min-width: 0;\n  pointer-events: none;\n}\n.v-menu-transition-enter-to .v-list-item {\n  transition-delay: 0.1s;\n}\n.v-menu-transition-leave-active, .v-menu-transition-leave-to {\n  pointer-events: none;\n}\n.v-menu-transition-enter, .v-menu-transition-leave-to {\n  opacity: 0;\n}\n.v-menu-transition-enter-active, .v-menu-transition-leave-active {\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.v-menu-transition-enter.v-menu__content--auto {\n  transition: none !important;\n}\n.v-menu-transition-enter.v-menu__content--auto .v-list-item {\n  opacity: 0;\n  transform: translateY(-15px);\n}\n.v-menu-transition-enter.v-menu__content--auto .v-list-item--active {\n  opacity: 1;\n  transform: none !important;\n  pointer-events: auto;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VMessages/VMessages.sass":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VMessages/VMessages.sass ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Theme */\n.theme--light.v-messages {\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.theme--dark.v-messages {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.v-messages {\n  flex: 1 1 auto;\n  font-size: 12px;\n  min-height: 14px;\n  min-width: 1px;\n  position: relative;\n}\n.v-application--is-ltr .v-messages {\n  text-align: left;\n}\n.v-application--is-rtl .v-messages {\n  text-align: right;\n}\n.v-messages__message {\n  line-height: 12px;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  hyphens: auto;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VProgressLinear/VProgressLinear.sass":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VProgressLinear/VProgressLinear.sass ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".theme--light.v-progress-linear {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.theme--dark.v-progress-linear {\n  color: #FFFFFF;\n}\n\n.v-progress-linear {\n  background: transparent;\n  overflow: hidden;\n  position: relative;\n  transition: 0.2s cubic-bezier(0.4, 0, 0.6, 1);\n  width: 100%;\n}\n\n.v-progress-linear__buffer {\n  height: inherit;\n  left: 0;\n  position: absolute;\n  top: 0;\n  transition: inherit;\n  width: 100%;\n}\n\n.v-progress-linear--reverse .v-progress-linear__buffer {\n  left: auto;\n  right: 0;\n}\n\n.v-progress-linear__background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  top: 0;\n  transition: inherit;\n}\n\n.v-progress-linear--reverse .v-progress-linear__background {\n  left: auto;\n  right: 0;\n}\n\n.v-progress-linear__content {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  left: 0;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.v-progress-linear--reverse .v-progress-linear__content {\n  left: auto;\n  right: 0;\n}\n\n.v-progress-linear__determinate {\n  height: inherit;\n  left: 0;\n  position: absolute;\n  transition: inherit;\n}\n\n.v-progress-linear--reverse .v-progress-linear__determinate {\n  left: auto;\n  right: 0;\n}\n\n.v-progress-linear .v-progress-linear__indeterminate .long, .v-progress-linear .v-progress-linear__indeterminate .short {\n  animation-play-state: paused;\n  background-color: inherit;\n  bottom: 0;\n  height: inherit;\n  left: 0;\n  position: absolute;\n  right: auto;\n  top: 0;\n  width: auto;\n  will-change: left, right;\n}\n.v-progress-linear .v-progress-linear__indeterminate--active .long {\n  animation-name: indeterminate-ltr;\n  animation-duration: 2.2s;\n  animation-iteration-count: infinite;\n}\n.v-progress-linear .v-progress-linear__indeterminate--active .short {\n  animation-name: indeterminate-short-ltr;\n  animation-duration: 2.2s;\n  animation-iteration-count: infinite;\n}\n\n.v-progress-linear--reverse .v-progress-linear__indeterminate .long, .v-progress-linear--reverse .v-progress-linear__indeterminate .short {\n  left: auto;\n  right: 0;\n}\n.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long {\n  animation-name: indeterminate-rtl;\n}\n.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short {\n  animation-name: indeterminate-short-rtl;\n}\n\n.v-progress-linear__stream {\n  animation: stream-ltr 0.25s infinite linear;\n  animation-play-state: paused;\n  border-color: currentColor;\n  border-top: 4px dotted;\n  bottom: 0;\n  left: auto;\n  right: -8px;\n  opacity: 0.3;\n  pointer-events: none;\n  position: absolute;\n  top: calc(50% - 2px);\n  transition: inherit;\n}\n\n.v-progress-linear--reverse .v-progress-linear__stream {\n  animation: stream-rtl 0.25s infinite linear;\n  left: -8px;\n  right: auto;\n}\n\n.v-progress-linear__wrapper {\n  overflow: hidden;\n  position: relative;\n  transition: inherit;\n}\n\n.v-progress-linear--absolute,\n.v-progress-linear--fixed {\n  left: 0;\n  z-index: 1;\n}\n\n.v-progress-linear--absolute {\n  position: absolute;\n}\n\n.v-progress-linear--fixed {\n  position: fixed;\n}\n\n.v-progress-linear--reactive .v-progress-linear__content {\n  pointer-events: none;\n}\n\n.v-progress-linear--rounded {\n  border-radius: 4px;\n}\n\n.v-progress-linear--striped .v-progress-linear__determinate {\n  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 25%, transparent 0, transparent 50%, rgba(255, 255, 255, 0.25) 0, rgba(255, 255, 255, 0.25) 75%, transparent 0, transparent);\n  background-size: 40px 40px;\n  background-repeat: repeat;\n}\n\n.v-progress-linear--query .v-progress-linear__indeterminate--active .long {\n  animation-name: query-ltr;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n}\n.v-progress-linear--query .v-progress-linear__indeterminate--active .short {\n  animation-name: query-short-ltr;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n}\n.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long {\n  animation-name: query-rtl;\n}\n.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short {\n  animation-name: query-short-rtl;\n}\n\n.v-progress-linear--visible .v-progress-linear__indeterminate--active .long, .v-progress-linear--visible .v-progress-linear__indeterminate--active .short {\n  animation-play-state: running;\n}\n.v-progress-linear--visible .v-progress-linear__stream {\n  animation-play-state: running;\n}\n\n@keyframes indeterminate-ltr {\n  0% {\n    left: -90%;\n    right: 100%;\n  }\n  60% {\n    left: -90%;\n    right: 100%;\n  }\n  100% {\n    left: 100%;\n    right: -35%;\n  }\n}\n@keyframes indeterminate-rtl {\n  0% {\n    left: 100%;\n    right: -90%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: -35%;\n    right: 100%;\n  }\n}\n@keyframes indeterminate-short-ltr {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n@keyframes indeterminate-short-rtl {\n  0% {\n    left: 100%;\n    right: -200%;\n  }\n  60% {\n    left: -8%;\n    right: 107%;\n  }\n  100% {\n    left: -8%;\n    right: 107%;\n  }\n}\n@keyframes query-ltr {\n  0% {\n    right: -90%;\n    left: 100%;\n  }\n  60% {\n    right: -90%;\n    left: 100%;\n  }\n  100% {\n    right: 100%;\n    left: -35%;\n  }\n}\n@keyframes query-rtl {\n  0% {\n    right: 100%;\n    left: -90%;\n  }\n  60% {\n    right: 100%;\n    left: -90%;\n  }\n  100% {\n    right: -35%;\n    left: 100%;\n  }\n}\n@keyframes query-short-ltr {\n  0% {\n    right: -200%;\n    left: 100%;\n  }\n  60% {\n    right: 107%;\n    left: -8%;\n  }\n  100% {\n    right: 107%;\n    left: -8%;\n  }\n}\n@keyframes query-short-rtl {\n  0% {\n    right: 100%;\n    left: -200%;\n  }\n  60% {\n    right: -8%;\n    left: 107%;\n  }\n  100% {\n    right: -8%;\n    left: 107%;\n  }\n}\n@keyframes stream-ltr {\n  to {\n    transform: translateX(-8px);\n  }\n}\n@keyframes stream-rtl {\n  to {\n    transform: translateX(8px);\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VSelect/VSelect.sass":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VSelect/VSelect.sass ***!
  \************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".theme--light.v-select .v-select__selections {\n  color: rgba(0, 0, 0, 0.87);\n  min-height: 10px;\n}\n.theme--light.v-select.v-input--is-disabled .v-select__selections {\n  color: rgba(0, 0, 0, 0.38);\n}\n.theme--light.v-select .v-select__selection--disabled {\n  color: rgba(0, 0, 0, 0.38);\n}\n.theme--light.v-select.v-text-field--solo-inverted.v-input--is-focused .v-select__selections {\n  color: #FFFFFF;\n}\n\n.theme--dark.v-select .v-select__selections {\n  color: #FFFFFF;\n  min-height: 10px;\n}\n.theme--dark.v-select.v-input--is-disabled .v-select__selections {\n  color: rgba(255, 255, 255, 0.5);\n}\n.theme--dark.v-select .v-select__selection--disabled {\n  color: rgba(255, 255, 255, 0.5);\n}\n.theme--dark.v-select.v-text-field--solo-inverted.v-input--is-focused .v-select__selections {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.v-select {\n  position: relative;\n}\n.v-select:not(.v-select--is-multi).v-text-field--single-line .v-select__selections {\n  flex-wrap: nowrap;\n}\n.v-select > .v-input__control > .v-input__slot {\n  cursor: pointer;\n}\n.v-select .v-chip {\n  flex: 0 1 auto;\n  margin: 4px;\n}\n.v-select .v-chip--selected:after {\n  opacity: 0.22;\n}\n.v-select .fade-transition-leave-active {\n  position: absolute;\n  left: 0;\n}\n.v-select.v-input--is-dirty ::placeholder {\n  color: transparent !important;\n}\n.v-select:not(.v-input--is-dirty):not(.v-input--is-focused) .v-text-field__prefix {\n  line-height: 20px;\n  top: 7px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-select.v-text-field--enclosed:not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__selections {\n  padding-top: 20px;\n}\n.v-select.v-text-field--outlined:not(.v-text-field--single-line) .v-select__selections {\n  padding: 8px 0;\n}\n.v-select.v-text-field--outlined:not(.v-text-field--single-line).v-input--dense .v-select__selections {\n  padding: 4px 0;\n}\n.v-select.v-text-field input {\n  flex: 1 1;\n  min-width: 0;\n  pointer-events: none;\n  position: relative;\n}\n.v-select.v-text-field:not(.v-text-field--single-line) input {\n  margin-top: 0;\n}\n.v-select.v-select--is-menu-active .v-input__icon--append .v-icon {\n  transform: rotate(180deg);\n}\n.v-select.v-select--chips input {\n  margin: 0;\n}\n.v-select.v-select--chips .v-select__selections {\n  min-height: 42px;\n}\n.v-select.v-select--chips.v-input--dense .v-select__selections {\n  min-height: 40px;\n}\n.v-select.v-select--chips .v-chip--select.v-chip--active::before {\n  opacity: 0.2;\n}\n.v-select.v-select--chips.v-select--chips--small .v-select__selections {\n  min-height: 26px;\n}\n.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--box .v-select__selections, .v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--enclosed .v-select__selections {\n  min-height: 68px;\n}\n.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--box.v-input--dense .v-select__selections, .v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--enclosed.v-input--dense .v-select__selections {\n  min-height: 40px;\n}\n.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--box.v-select--chips--small .v-select__selections, .v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--enclosed.v-select--chips--small .v-select__selections {\n  min-height: 26px;\n}\n.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--box.v-select--chips--small.v-input--dense .v-select__selections, .v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--enclosed.v-select--chips--small.v-input--dense .v-select__selections {\n  min-height: 38px;\n}\n.v-select.v-text-field--reverse .v-select__slot,\n.v-select.v-text-field--reverse .v-select__selections {\n  flex-direction: row-reverse;\n}\n.v-select__selections {\n  align-items: center;\n  display: flex;\n  flex: 1 1;\n  flex-wrap: wrap;\n  line-height: 18px;\n  max-width: 100%;\n  min-width: 0;\n}\n.v-select__selection {\n  max-width: 90%;\n}\n.v-select__selection--comma {\n  margin: 7px 4px 7px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.v-select.v-input--dense .v-select__selection--comma {\n  margin: 5px 4px 3px 0;\n}\n.v-select.v-input--dense .v-chip {\n  margin: 0 4px 0 4px;\n}\n.v-select__slot {\n  position: relative;\n  align-items: center;\n  display: flex;\n  max-width: 100%;\n  min-width: 0;\n  width: 100%;\n}\n.v-select:not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot > input {\n  align-self: flex-end;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VSubheader/VSubheader.sass":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VSubheader/VSubheader.sass ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".theme--light.v-subheader {\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.theme--dark.v-subheader {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.v-subheader {\n  align-items: center;\n  display: flex;\n  height: 48px;\n  font-size: 0.875rem;\n  font-weight: 400;\n  padding: 0 16px 0 16px;\n}\n.v-subheader--inset {\n  margin-left: 56px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VTextField/VTextField.sass":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VTextField/VTextField.sass ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".theme--light.v-text-field > .v-input__control > .v-input__slot:before {\n  border-color: rgba(0, 0, 0, 0.42);\n}\n.theme--light.v-text-field:not(.v-input--has-state):hover > .v-input__control > .v-input__slot:before {\n  border-color: rgba(0, 0, 0, 0.87);\n}\n.theme--light.v-text-field.v-input--is-disabled .v-input__slot::before {\n  border-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.38) 0px, rgba(0, 0, 0, 0.38) 2px, transparent 2px, transparent 4px) 1 repeat;\n}\n.theme--light.v-text-field--filled > .v-input__control > .v-input__slot {\n  background: rgba(0, 0, 0, 0.06);\n}\n.theme--light.v-text-field--filled:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot:hover {\n  background: rgba(0, 0, 0, 0.12);\n}\n.theme--light.v-text-field--solo > .v-input__control > .v-input__slot {\n  background: #FFFFFF;\n}\n.theme--light.v-text-field--solo-inverted > .v-input__control > .v-input__slot {\n  background: rgba(0, 0, 0, 0.06);\n}\n.theme--light.v-text-field--solo-inverted.v-input--is-focused > .v-input__control > .v-input__slot {\n  background: #424242;\n}\n.theme--light.v-text-field--solo-inverted.v-input--is-focused > .v-input__control > .v-input__slot input {\n  color: #FFFFFF;\n}\n.theme--light.v-text-field--solo-inverted.v-input--is-focused > .v-input__control > .v-input__slot input::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.theme--light.v-text-field--solo-inverted.v-input--is-focused > .v-input__control > .v-input__slot .v-label {\n  color: rgba(255, 255, 255, 0.7);\n}\n.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot fieldset {\n  color: rgba(0, 0, 0, 0.38);\n}\n.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state):not(.v-input--is-disabled) > .v-input__control > .v-input__slot:hover fieldset {\n  color: rgba(0, 0, 0, 0.86);\n}\n.theme--light.v-text-field--outlined:not(.v-input--is-focused).v-input--is-disabled > .v-input__control > .v-input__slot fieldset {\n  color: rgba(0, 0, 0, 0.26);\n}\n\n.theme--dark.v-text-field > .v-input__control > .v-input__slot:before {\n  border-color: rgba(255, 255, 255, 0.7);\n}\n.theme--dark.v-text-field:not(.v-input--has-state):hover > .v-input__control > .v-input__slot:before {\n  border-color: #FFFFFF;\n}\n.theme--dark.v-text-field.v-input--is-disabled .v-input__slot::before {\n  border-image: repeating-linear-gradient(to right, rgba(255, 255, 255, 0.5) 0px, rgba(255, 255, 255, 0.5) 2px, transparent 2px, transparent 4px) 1 repeat;\n}\n.theme--dark.v-text-field--filled > .v-input__control > .v-input__slot {\n  background: rgba(255, 255, 255, 0.08);\n}\n.theme--dark.v-text-field--filled:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot:hover {\n  background: rgba(255, 255, 255, 0.16);\n}\n.theme--dark.v-text-field--solo > .v-input__control > .v-input__slot {\n  background: #1E1E1E;\n}\n.theme--dark.v-text-field--solo-inverted > .v-input__control > .v-input__slot {\n  background: rgba(255, 255, 255, 0.16);\n}\n.theme--dark.v-text-field--solo-inverted.v-input--is-focused > .v-input__control > .v-input__slot {\n  background: #FFFFFF;\n}\n.theme--dark.v-text-field--solo-inverted.v-input--is-focused > .v-input__control > .v-input__slot input {\n  color: rgba(0, 0, 0, 0.87);\n}\n.theme--dark.v-text-field--solo-inverted.v-input--is-focused > .v-input__control > .v-input__slot input::placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n.theme--dark.v-text-field--solo-inverted.v-input--is-focused > .v-input__control > .v-input__slot .v-label {\n  color: rgba(0, 0, 0, 0.6);\n}\n.theme--dark.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot fieldset {\n  color: rgba(255, 255, 255, 0.24);\n}\n.theme--dark.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state):not(.v-input--is-disabled) > .v-input__control > .v-input__slot:hover fieldset {\n  color: #FFFFFF;\n}\n.theme--dark.v-text-field--outlined:not(.v-input--is-focused).v-input--is-disabled > .v-input__control > .v-input__slot fieldset {\n  color: rgba(255, 255, 255, 0.16);\n}\n\n.v-text-field {\n  padding-top: 12px;\n  margin-top: 4px;\n}\n.v-text-field__prefix, .v-text-field__suffix {\n  line-height: 20px;\n}\n.v-text-field input {\n  flex: 1 1 auto;\n  line-height: 20px;\n  padding: 8px 0 8px;\n  max-width: 100%;\n  min-width: 0px;\n  width: 100%;\n}\n.v-text-field fieldset,\n.v-text-field .v-input__control,\n.v-text-field .v-input__slot {\n  border-radius: inherit;\n}\n.v-text-field fieldset,\n.v-text-field .v-input__control {\n  color: currentColor;\n}\n.v-text-field.v-input--has-state .v-input__control > .v-text-field__details > .v-counter {\n  color: currentColor;\n}\n.v-text-field.v-input--is-disabled .v-input__control > .v-text-field__details > .v-counter,\n.v-text-field.v-input--is-disabled .v-input__control > .v-text-field__details > .v-messages {\n  color: currentColor;\n}\n.v-text-field.v-input--dense {\n  padding-top: 0;\n}\n.v-text-field.v-input--dense .v-label {\n  top: 4px;\n}\n.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__prefix,\n.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__suffix,\n.v-text-field.v-input--dense:not(.v-text-field--outlined) input {\n  padding: 4px 0 2px;\n}\n.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__prefix {\n  padding-right: 4px;\n}\n.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__suffix {\n  padding-left: 4px;\n}\n.v-text-field.v-input--dense[type=text]::-ms-clear {\n  display: none;\n}\n.v-text-field.v-input--dense .v-input__prepend-inner,\n.v-text-field.v-input--dense .v-input__append-inner {\n  margin-top: 0px;\n}\n.v-text-field .v-input__prepend-inner,\n.v-text-field .v-input__append-inner {\n  align-self: flex-start;\n  display: inline-flex;\n  margin-top: 4px;\n  line-height: 1;\n  user-select: none;\n}\n.v-application--is-ltr .v-text-field .v-input__prepend-inner {\n  margin-right: auto;\n  padding-right: 4px;\n}\n.v-application--is-rtl .v-text-field .v-input__prepend-inner {\n  margin-left: auto;\n  padding-left: 4px;\n}\n.v-application--is-ltr .v-text-field .v-input__append-inner {\n  margin-left: auto;\n  padding-left: 4px;\n}\n.v-application--is-rtl .v-text-field .v-input__append-inner {\n  margin-right: auto;\n  padding-right: 4px;\n}\n.v-text-field .v-counter {\n  white-space: nowrap;\n}\n.v-application--is-ltr .v-text-field .v-counter {\n  margin-left: 8px;\n}\n.v-application--is-rtl .v-text-field .v-counter {\n  margin-right: 8px;\n}\n.v-text-field .v-label {\n  max-width: 90%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  top: 6px;\n  white-space: nowrap;\n  pointer-events: none;\n}\n.v-application--is-ltr .v-text-field .v-label {\n  transform-origin: top left;\n}\n.v-application--is-rtl .v-text-field .v-label {\n  transform-origin: top right;\n}\n.v-text-field .v-label--active {\n  max-width: 133%;\n  transform: translateY(-18px) scale(0.75);\n  pointer-events: auto;\n}\n.v-text-field > .v-input__control > .v-input__slot {\n  cursor: text;\n}\n.v-text-field > .v-input__control > .v-input__slot:before, .v-text-field > .v-input__control > .v-input__slot:after {\n  bottom: -1px;\n  content: \"\";\n  left: 0;\n  position: absolute;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  width: 100%;\n}\n.v-text-field > .v-input__control > .v-input__slot:before {\n  border-color: inherit;\n  border-style: solid;\n  border-width: thin 0 0 0;\n}\n.v-text-field > .v-input__control > .v-input__slot:after {\n  background-color: currentColor;\n  border-color: currentColor;\n  border-style: solid;\n  border-width: thin 0 thin 0;\n  transform: scaleX(0);\n}\n.v-text-field__details {\n  display: flex;\n  flex: 1 0 auto;\n  max-width: 100%;\n  min-height: 14px;\n  overflow: hidden;\n}\n.v-text-field__prefix, .v-text-field__suffix {\n  align-self: center;\n  cursor: default;\n  transition: color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  white-space: nowrap;\n}\n.v-application--is-ltr .v-text-field__prefix {\n  text-align: right;\n  padding-right: 4px;\n}\n.v-application--is-rtl .v-text-field__prefix {\n  text-align: left;\n  padding-left: 4px;\n}\n.v-text-field__suffix {\n  white-space: nowrap;\n}\n.v-application--is-ltr .v-text-field__suffix {\n  padding-left: 4px;\n}\n.v-application--is-rtl .v-text-field__suffix {\n  padding-right: 4px;\n}\n.v-application--is-ltr .v-text-field--reverse .v-text-field__prefix {\n  text-align: left;\n  padding-right: 0;\n  padding-left: 4px;\n}\n.v-application--is-rtl .v-text-field--reverse .v-text-field__prefix {\n  text-align: right;\n  padding-right: 4px;\n  padding-left: 0;\n}\n.v-application--is-ltr .v-text-field--reverse .v-text-field__suffix {\n  padding-left: 0;\n  padding-right: 4px;\n}\n.v-application--is-rtl .v-text-field--reverse .v-text-field__suffix {\n  padding-left: 4px;\n  padding-right: 0;\n}\n.v-text-field > .v-input__control > .v-input__slot > .v-text-field__slot {\n  display: flex;\n  flex: 1 1 auto;\n  position: relative;\n}\n.v-text-field:not(.v-text-field--is-booted) .v-label,\n.v-text-field:not(.v-text-field--is-booted) legend {\n  transition: none;\n}\n.v-text-field--filled, .v-text-field--full-width, .v-text-field--outlined {\n  position: relative;\n}\n.v-text-field--filled > .v-input__control > .v-input__slot, .v-text-field--full-width > .v-input__control > .v-input__slot, .v-text-field--outlined > .v-input__control > .v-input__slot {\n  align-items: stretch;\n  min-height: 56px;\n}\n.v-text-field--filled.v-input--dense > .v-input__control > .v-input__slot, .v-text-field--full-width.v-input--dense > .v-input__control > .v-input__slot, .v-text-field--outlined.v-input--dense > .v-input__control > .v-input__slot {\n  min-height: 52px;\n}\n.v-text-field--filled.v-input--dense.v-text-field--single-line > .v-input__control > .v-input__slot, .v-text-field--filled.v-input--dense.v-text-field--outlined > .v-input__control > .v-input__slot, .v-text-field--filled.v-input--dense.v-text-field--outlined.v-text-field--filled > .v-input__control > .v-input__slot, .v-text-field--full-width.v-input--dense.v-text-field--single-line > .v-input__control > .v-input__slot, .v-text-field--full-width.v-input--dense.v-text-field--outlined > .v-input__control > .v-input__slot, .v-text-field--full-width.v-input--dense.v-text-field--outlined.v-text-field--filled > .v-input__control > .v-input__slot, .v-text-field--outlined.v-input--dense.v-text-field--single-line > .v-input__control > .v-input__slot, .v-text-field--outlined.v-input--dense.v-text-field--outlined > .v-input__control > .v-input__slot, .v-text-field--outlined.v-input--dense.v-text-field--outlined.v-text-field--filled > .v-input__control > .v-input__slot {\n  min-height: 40px;\n}\n.v-text-field--outlined {\n  border-radius: 4px;\n}\n.v-text-field--full-width .v-input__prepend-outer,\n.v-text-field--full-width .v-input__prepend-inner,\n.v-text-field--full-width .v-input__append-inner,\n.v-text-field--full-width .v-input__append-outer, .v-text-field--enclosed .v-input__prepend-outer,\n.v-text-field--enclosed .v-input__prepend-inner,\n.v-text-field--enclosed .v-input__append-inner,\n.v-text-field--enclosed .v-input__append-outer {\n  margin-top: 17px;\n}\n.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__prepend-outer,\n.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__prepend-inner,\n.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__append-inner,\n.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__append-outer, .v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__prepend-outer,\n.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__prepend-inner,\n.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__append-inner,\n.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__append-outer {\n  margin-top: 14px;\n}\n.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-outer,\n.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-inner,\n.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-inner,\n.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-outer, .v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-outer,\n.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-inner,\n.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-inner,\n.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-outer {\n  margin-top: 9px;\n}\n.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-outer,\n.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-inner,\n.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-inner,\n.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-outer, .v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-outer,\n.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-inner,\n.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-inner,\n.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-outer {\n  margin-top: 8px;\n}\n.v-text-field--filled .v-label, .v-text-field--full-width .v-label {\n  top: 18px;\n}\n.v-text-field--filled .v-label--active, .v-text-field--full-width .v-label--active {\n  transform: translateY(-6px) scale(0.75);\n}\n.v-text-field--filled.v-input--dense .v-label, .v-text-field--full-width.v-input--dense .v-label {\n  top: 17px;\n}\n.v-text-field--filled.v-input--dense .v-label--active, .v-text-field--full-width.v-input--dense .v-label--active {\n  transform: translateY(-10px) scale(0.75);\n}\n.v-text-field--filled.v-input--dense.v-text-field--single-line .v-label, .v-text-field--full-width.v-input--dense.v-text-field--single-line .v-label {\n  top: 11px;\n}\n.v-text-field--filled {\n  border-radius: 4px 4px 0 0;\n}\n.v-text-field--filled:not(.v-text-field--single-line) input {\n  margin-top: 22px;\n}\n.v-text-field--filled.v-input--dense:not(.v-text-field--single-line).v-text-field--outlined input {\n  margin-top: 0;\n}\n.v-text-field--filled .v-text-field__prefix,\n.v-text-field--filled .v-text-field__suffix {\n  max-height: 32px;\n  margin-top: 20px;\n}\n.v-text-field--full-width {\n  border-radius: 0;\n}\n.v-text-field--outlined .v-text-field__slot, .v-text-field--single-line .v-text-field__slot {\n  align-items: center;\n}\n.v-text-field.v-text-field--enclosed {\n  margin: 0;\n  padding: 0;\n}\n.v-text-field.v-text-field--enclosed.v-text-field--single-line .v-text-field__prefix,\n.v-text-field.v-text-field--enclosed.v-text-field--single-line .v-text-field__suffix {\n  margin-top: 0;\n}\n.v-text-field.v-text-field--enclosed:not(.v-text-field--filled) .v-progress-linear__background {\n  display: none;\n}\n.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded) > .v-input__control > .v-input__slot,\n.v-text-field.v-text-field--enclosed .v-text-field__details {\n  padding: 0 12px;\n}\n.v-text-field.v-text-field--enclosed .v-text-field__details {\n  padding-top: 0px;\n  margin-bottom: 8px;\n}\n.v-application--is-ltr .v-text-field--reverse input {\n  text-align: right;\n}\n.v-application--is-rtl .v-text-field--reverse input {\n  text-align: left;\n}\n.v-application--is-ltr .v-text-field--reverse .v-label {\n  transform-origin: top right;\n}\n.v-application--is-rtl .v-text-field--reverse .v-label {\n  transform-origin: top left;\n}\n.v-text-field--reverse > .v-input__control > .v-input__slot,\n.v-text-field--reverse .v-text-field__slot {\n  flex-direction: row-reverse;\n}\n.v-text-field--outlined > .v-input__control > .v-input__slot:before, .v-text-field--outlined > .v-input__control > .v-input__slot:after, .v-text-field--solo > .v-input__control > .v-input__slot:before, .v-text-field--solo > .v-input__control > .v-input__slot:after, .v-text-field--rounded > .v-input__control > .v-input__slot:before, .v-text-field--rounded > .v-input__control > .v-input__slot:after {\n  display: none;\n}\n.v-text-field--outlined, .v-text-field--solo {\n  border-radius: 4px;\n}\n.v-text-field--outlined {\n  margin-bottom: 16px;\n  transition: border 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-text-field--outlined .v-label {\n  top: 18px;\n}\n.v-text-field--outlined .v-label--active {\n  transform: translateY(-24px) scale(0.75);\n}\n.v-text-field--outlined.v-input--dense .v-label {\n  top: 10px;\n}\n.v-text-field--outlined.v-input--dense .v-label--active {\n  transform: translateY(-16px) scale(0.75);\n}\n.v-text-field--outlined fieldset {\n  border-collapse: collapse;\n  border-color: currentColor;\n  border-style: solid;\n  border-width: 1px;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: -5px;\n  transition-duration: 0.15s;\n  transition-property: color;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.v-application--is-ltr .v-text-field--outlined fieldset {\n  padding-left: 8px;\n}\n.v-application--is-rtl .v-text-field--outlined fieldset {\n  padding-right: 8px;\n}\n.v-application--is-ltr .v-text-field--outlined.v-text-field--reverse fieldset {\n  padding-right: 8px;\n}\n.v-application--is-rtl .v-text-field--outlined.v-text-field--reverse fieldset {\n  padding-left: 8px;\n}\n.v-text-field--outlined legend {\n  line-height: 11px;\n  padding: 0;\n  transition: width 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-application--is-ltr .v-text-field--outlined legend {\n  text-align: left;\n}\n.v-application--is-rtl .v-text-field--outlined legend {\n  text-align: right;\n}\n.v-application--is-ltr .v-text-field--outlined.v-text-field--reverse legend {\n  margin-left: auto;\n}\n.v-application--is-rtl .v-text-field--outlined.v-text-field--reverse legend {\n  margin-right: auto;\n}\n.v-application--is-ltr .v-text-field--outlined.v-text-field--rounded legend {\n  margin-left: 12px;\n}\n.v-application--is-rtl .v-text-field--outlined.v-text-field--rounded legend {\n  margin-right: 12px;\n}\n.v-text-field--outlined > .v-input__control > .v-input__slot {\n  background: transparent;\n}\n.v-text-field--outlined .v-text-field__prefix {\n  max-height: 32px;\n}\n.v-text-field--outlined .v-input__prepend-outer,\n.v-text-field--outlined .v-input__append-outer {\n  margin-top: 18px;\n}\n.v-text-field--outlined.v-input--is-focused fieldset, .v-text-field--outlined.v-input--has-state fieldset {\n  border: 2px solid currentColor;\n}\n.v-text-field--rounded {\n  border-radius: 28px;\n}\n.v-text-field--rounded > .v-input__control > .v-input__slot {\n  padding: 0 24px;\n}\n.v-text-field--shaped {\n  border-radius: 16px 16px 0 0;\n}\n.v-text-field.v-text-field--solo .v-label {\n  top: calc(50% - 9px);\n}\n.v-text-field.v-text-field--solo .v-input__control {\n  min-height: 48px;\n  padding: 0;\n}\n.v-text-field.v-text-field--solo .v-input__control input {\n  caret-color: auto;\n}\n.v-text-field.v-text-field--solo.v-input--dense > .v-input__control {\n  min-height: 38px;\n}\n.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.v-text-field.v-text-field--solo .v-input__append-inner,\n.v-text-field.v-text-field--solo .v-input__prepend-inner {\n  align-self: center;\n  margin-top: 0;\n}\n.v-text-field.v-text-field--solo .v-input__prepend-outer,\n.v-text-field.v-text-field--solo .v-input__append-outer {\n  margin-top: 12px;\n}\n.v-text-field.v-text-field--solo.v-input--dense .v-input__prepend-outer,\n.v-text-field.v-text-field--solo.v-input--dense .v-input__append-outer {\n  margin-top: 7px;\n}\n.v-text-field.v-input--is-focused > .v-input__control > .v-input__slot:after {\n  transform: scaleX(1);\n}\n.v-text-field.v-input--has-state > .v-input__control > .v-input__slot:before {\n  border-color: currentColor;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/lottie-vuejs/node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/adapters/xhr.js":
/*!**************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/adapters/xhr.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/lottie-vuejs/node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/lottie-vuejs/node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/lottie-vuejs/node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/lottie-vuejs/node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/axios.js":
/*!*******************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/axios.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/lottie-vuejs/node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/lottie-vuejs/node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/lottie-vuejs/node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/lottie-vuejs/node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/lottie-vuejs/node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/lottie-vuejs/node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/lottie-vuejs/node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/cancel/Cancel.js":
/*!***************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/cancel/Cancel.js ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/cancel/CancelToken.js":
/*!********************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/cancel/CancelToken.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/lottie-vuejs/node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/cancel/isCancel.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/cancel/isCancel.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/core/Axios.js":
/*!************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/core/Axios.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/lottie-vuejs/node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/lottie-vuejs/node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/lottie-vuejs/node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/lottie-vuejs/node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/core/InterceptorManager.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/core/InterceptorManager.js ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/lottie-vuejs/node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/core/buildFullPath.js":
/*!********************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/core/buildFullPath.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/core/createError.js":
/*!******************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/core/createError.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/lottie-vuejs/node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/core/dispatchRequest.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/core/dispatchRequest.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/lottie-vuejs/node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/lottie-vuejs/node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/lottie-vuejs/node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/lottie-vuejs/node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/core/enhanceError.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/core/enhanceError.js ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/core/mergeConfig.js":
/*!******************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/core/mergeConfig.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/lottie-vuejs/node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/core/settle.js":
/*!*************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/core/settle.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/lottie-vuejs/node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/core/transformData.js":
/*!********************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/core/transformData.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/lottie-vuejs/node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/defaults.js":
/*!**********************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/defaults.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");


var utils = __webpack_require__(/*! ./utils */ "./node_modules/lottie-vuejs/node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/lottie-vuejs/node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/lottie-vuejs/node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/bind.js":
/*!**************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/bind.js ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/buildURL.js":
/*!******************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/buildURL.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/lottie-vuejs/node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/combineURLs.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/combineURLs.js ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/cookies.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/cookies.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/lottie-vuejs/node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/lottie-vuejs/node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/lottie-vuejs/node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/parseHeaders.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/parseHeaders.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/lottie-vuejs/node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/spread.js":
/*!****************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/spread.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/lottie-vuejs/node_modules/axios/lib/utils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/lottie-vuejs/node_modules/axios/lib/utils.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/lottie-vuejs/node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/lottie-web/build/player/lottie.js":
/*!********************************************************!*\
  !*** ./node_modules/lottie-web/build/player/lottie.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;(typeof navigator !== "undefined") && (function(root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return factory(root);
        }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}((window || {}), function(window) {
	/* global locationHref:writable, animationManager, subframeEnabled:writable, defaultCurveSegments:writable, roundValues,
expressionsPlugin:writable, PropertyFactory, ShapePropertyFactory, Matrix, idPrefix:writable, _useWebWorker:writable */
/* exported locationHref, subframeEnabled, expressionsPlugin, idPrefix, _useWebWorker */

'use strict';

/* exported svgNS, locationHref, initialDefaultFrame, _useWebWorker */

var svgNS = 'http://www.w3.org/2000/svg';

var locationHref = '';

var initialDefaultFrame = -999999;

var _useWebWorker = false;

/* global createSizedArray */
/* exported subframeEnabled, expressionsPlugin, isSafari, cachedColors, bmPow, bmSqrt, bmFloor, bmMax, bmMin, ProjectInterface,
defaultCurveSegments, degToRads, roundCorner, bmRnd, styleDiv, BMEnterFrameEvent, BMCompleteEvent, BMCompleteLoopEvent,
BMSegmentStartEvent, BMDestroyEvent, BMRenderFrameErrorEvent, BMConfigErrorEvent, BMAnimationConfigErrorEvent, createElementID,
addSaturationToRGB, addBrightnessToRGB, addHueToRGB, rgbToHex */

var subframeEnabled = true;
var idPrefix = '';
var expressionsPlugin;
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var cachedColors = {};
var bmRnd;
var bmPow = Math.pow;
var bmSqrt = Math.sqrt;
var bmFloor = Math.floor;
var bmMax = Math.max;
var bmMin = Math.min;

var BMMath = {};
(function () {
  var propertyNames = ['abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'atan2', 'ceil', 'cbrt', 'expm1', 'clz32', 'cos', 'cosh', 'exp', 'floor', 'fround', 'hypot', 'imul', 'log', 'log1p', 'log2', 'log10', 'max', 'min', 'pow', 'random', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc', 'E', 'LN10', 'LN2', 'LOG10E', 'LOG2E', 'PI', 'SQRT1_2', 'SQRT2'];
  var i;
  var len = propertyNames.length;
  for (i = 0; i < len; i += 1) {
    BMMath[propertyNames[i]] = Math[propertyNames[i]];
  }
}());

function ProjectInterface() { return {}; }

BMMath.random = Math.random;
BMMath.abs = function (val) {
  var tOfVal = typeof val;
  if (tOfVal === 'object' && val.length) {
    var absArr = createSizedArray(val.length);
    var i;
    var len = val.length;
    for (i = 0; i < len; i += 1) {
      absArr[i] = Math.abs(val[i]);
    }
    return absArr;
  }
  return Math.abs(val);
};
var defaultCurveSegments = 150;
var degToRads = Math.PI / 180;
var roundCorner = 0.5519;

function roundValues(flag) {
  if (flag) {
    bmRnd = Math.round;
  } else {
    bmRnd = function (val) {
      return val;
    };
  }
}
roundValues(false);

function styleDiv(element) {
  element.style.position = 'absolute';
  element.style.top = 0;
  element.style.left = 0;
  element.style.display = 'block';
  element.style.transformOrigin = '0 0';
  element.style.webkitTransformOrigin = '0 0';
  element.style.backfaceVisibility = 'visible';
  element.style.webkitBackfaceVisibility = 'visible';
  element.style.transformStyle = 'preserve-3d';
  element.style.webkitTransformStyle = 'preserve-3d';
  element.style.mozTransformStyle = 'preserve-3d';
}

function BMEnterFrameEvent(type, currentTime, totalTime, frameMultiplier) {
  this.type = type;
  this.currentTime = currentTime;
  this.totalTime = totalTime;
  this.direction = frameMultiplier < 0 ? -1 : 1;
}

function BMCompleteEvent(type, frameMultiplier) {
  this.type = type;
  this.direction = frameMultiplier < 0 ? -1 : 1;
}

function BMCompleteLoopEvent(type, totalLoops, currentLoop, frameMultiplier) {
  this.type = type;
  this.currentLoop = currentLoop;
  this.totalLoops = totalLoops;
  this.direction = frameMultiplier < 0 ? -1 : 1;
}

function BMSegmentStartEvent(type, firstFrame, totalFrames) {
  this.type = type;
  this.firstFrame = firstFrame;
  this.totalFrames = totalFrames;
}

function BMDestroyEvent(type, target) {
  this.type = type;
  this.target = target;
}

function BMRenderFrameErrorEvent(nativeError, currentTime) {
  this.type = 'renderFrameError';
  this.nativeError = nativeError;
  this.currentTime = currentTime;
}

function BMConfigErrorEvent(nativeError) {
  this.type = 'configError';
  this.nativeError = nativeError;
}

function BMAnimationConfigErrorEvent(type, nativeError) {
  this.type = type;
  this.nativeError = nativeError;
}

var createElementID = (function () {
  var _count = 0;
  return function createID() {
    _count += 1;
    return idPrefix + '__lottie_element_' + _count;
  };
}());

function HSVtoRGB(h, s, v) {
  var r;
  var g;
  var b;
  var i;
  var f;
  var p;
  var q;
  var t;
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0: r = v; g = t; b = p; break;
    case 1: r = q; g = v; b = p; break;
    case 2: r = p; g = v; b = t; break;
    case 3: r = p; g = q; b = v; break;
    case 4: r = t; g = p; b = v; break;
    case 5: r = v; g = p; b = q; break;
    default: break;
  }
  return [r,
    g,
    b];
}

function RGBtoHSV(r, g, b) {
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var d = max - min;
  var h;
  var s = (max === 0 ? 0 : d / max);
  var v = max / 255;

  switch (max) {
    case min: h = 0; break;
    case r: h = (g - b) + d * (g < b ? 6 : 0); h /= 6 * d; break;
    case g: h = (b - r) + d * 2; h /= 6 * d; break;
    case b: h = (r - g) + d * 4; h /= 6 * d; break;
    default: break;
  }

  return [
    h,
    s,
    v,
  ];
}

function addSaturationToRGB(color, offset) {
  var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
  hsv[1] += offset;
  if (hsv[1] > 1) {
    hsv[1] = 1;
  } else if (hsv[1] <= 0) {
    hsv[1] = 0;
  }
  return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
}

function addBrightnessToRGB(color, offset) {
  var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
  hsv[2] += offset;
  if (hsv[2] > 1) {
    hsv[2] = 1;
  } else if (hsv[2] < 0) {
    hsv[2] = 0;
  }
  return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
}

function addHueToRGB(color, offset) {
  var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
  hsv[0] += offset / 360;
  if (hsv[0] > 1) {
    hsv[0] -= 1;
  } else if (hsv[0] < 0) {
    hsv[0] += 1;
  }
  return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
}

var rgbToHex = (function () {
  var colorMap = [];
  var i;
  var hex;
  for (i = 0; i < 256; i += 1) {
    hex = i.toString(16);
    colorMap[i] = hex.length === 1 ? '0' + hex : hex;
  }

  return function (r, g, b) {
    if (r < 0) {
      r = 0;
    }
    if (g < 0) {
      g = 0;
    }
    if (b < 0) {
      b = 0;
    }
    return '#' + colorMap[r] + colorMap[g] + colorMap[b];
  };
}());

function BaseEvent() {}
BaseEvent.prototype = {
  triggerEvent: function (eventName, args) {
    if (this._cbs[eventName]) {
      var callbacks = this._cbs[eventName];
      for (var i = 0; i < callbacks.length; i += 1) {
        callbacks[i](args);
      }
    }
  },
  addEventListener: function (eventName, callback) {
    if (!this._cbs[eventName]) {
      this._cbs[eventName] = [];
    }
    this._cbs[eventName].push(callback);

    return function () {
      this.removeEventListener(eventName, callback);
    }.bind(this);
  },
  removeEventListener: function (eventName, callback) {
    if (!callback) {
      this._cbs[eventName] = null;
    } else if (this._cbs[eventName]) {
      var i = 0;
      var len = this._cbs[eventName].length;
      while (i < len) {
        if (this._cbs[eventName][i] === callback) {
          this._cbs[eventName].splice(i, 1);
          i -= 1;
          len -= 1;
        }
        i += 1;
      }
      if (!this._cbs[eventName].length) {
        this._cbs[eventName] = null;
      }
    }
  },
};

/* exported createTypedArray, createSizedArray */

var createTypedArray = (function () {
  function createRegularArray(type, len) {
    var i = 0;
    var arr = [];
    var value;
    switch (type) {
      case 'int16':
      case 'uint8c':
        value = 1;
        break;
      default:
        value = 1.1;
        break;
    }
    for (i = 0; i < len; i += 1) {
      arr.push(value);
    }
    return arr;
  }
  function createTypedArrayFactory(type, len) {
    if (type === 'float32') {
      return new Float32Array(len);
    } if (type === 'int16') {
      return new Int16Array(len);
    } if (type === 'uint8c') {
      return new Uint8ClampedArray(len);
    }
    return createRegularArray(type, len);
  }
  if (typeof Uint8ClampedArray === 'function' && typeof Float32Array === 'function') {
    return createTypedArrayFactory;
  }
  return createRegularArray;
}());

function createSizedArray(len) {
  return Array.apply(null, { length: len });
}

/* global svgNS */
/* exported createNS */

function createNS(type) {
  // return {appendChild:function(){},setAttribute:function(){},style:{}}
  return document.createElementNS(svgNS, type);
}

/* exported createTag */

function createTag(type) {
  // return {appendChild:function(){},setAttribute:function(){},style:{}}
  return document.createElement(type);
}

function DynamicPropertyContainer() {}
DynamicPropertyContainer.prototype = {
  addDynamicProperty: function (prop) {
    if (this.dynamicProperties.indexOf(prop) === -1) {
      this.dynamicProperties.push(prop);
      this.container.addDynamicProperty(this);
      this._isAnimated = true;
    }
  },
  iterateDynamicProperties: function () {
    this._mdf = false;
    var i;
    var len = this.dynamicProperties.length;
    for (i = 0; i < len; i += 1) {
      this.dynamicProperties[i].getValue();
      if (this.dynamicProperties[i]._mdf) {
        this._mdf = true;
      }
    }
  },
  initDynamicPropertyContainer: function (container) {
    this.container = container;
    this.dynamicProperties = [];
    this._mdf = false;
    this._isAnimated = false;
  },
};

/* exported getBlendMode */

var getBlendMode = (function () {
  var blendModeEnums = {
    0: 'source-over',
    1: 'multiply',
    2: 'screen',
    3: 'overlay',
    4: 'darken',
    5: 'lighten',
    6: 'color-dodge',
    7: 'color-burn',
    8: 'hard-light',
    9: 'soft-light',
    10: 'difference',
    11: 'exclusion',
    12: 'hue',
    13: 'saturation',
    14: 'color',
    15: 'luminosity',
  };

  return function (mode) {
    return blendModeEnums[mode] || '';
  };
}());

/* exported lineCapEnum, lineJoinEnum */

var lineCapEnum = {
  1: 'butt',
  2: 'round',
  3: 'square',
};

var lineJoinEnum = {
  1: 'miter',
  2: 'round',
  3: 'bevel',
};

/* global createTypedArray */

/*!
 Transformation Matrix v2.0
 (c) Epistemex 2014-2015
 www.epistemex.com
 By Ken Fyrstenberg
 Contributions by leeoniya.
 License: MIT, header required.
 */

/**
 * 2D transformation matrix object initialized with identity matrix.
 *
 * The matrix can synchronize a canvas context by supplying the context
 * as an argument, or later apply current absolute transform to an
 * existing context.
 *
 * All values are handled as floating point values.
 *
 * @param {CanvasRenderingContext2D} [context] - Optional context to sync with Matrix
 * @prop {number} a - scale x
 * @prop {number} b - shear y
 * @prop {number} c - shear x
 * @prop {number} d - scale y
 * @prop {number} e - translate x
 * @prop {number} f - translate y
 * @prop {CanvasRenderingContext2D|null} [context=null] - set or get current canvas context
 * @constructor
 */

var Matrix = (function () {
  var _cos = Math.cos;
  var _sin = Math.sin;
  var _tan = Math.tan;
  var _rnd = Math.round;

  function reset() {
    this.props[0] = 1;
    this.props[1] = 0;
    this.props[2] = 0;
    this.props[3] = 0;
    this.props[4] = 0;
    this.props[5] = 1;
    this.props[6] = 0;
    this.props[7] = 0;
    this.props[8] = 0;
    this.props[9] = 0;
    this.props[10] = 1;
    this.props[11] = 0;
    this.props[12] = 0;
    this.props[13] = 0;
    this.props[14] = 0;
    this.props[15] = 1;
    return this;
  }

  function rotate(angle) {
    if (angle === 0) {
      return this;
    }
    var mCos = _cos(angle);
    var mSin = _sin(angle);
    return this._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }

  function rotateX(angle) {
    if (angle === 0) {
      return this;
    }
    var mCos = _cos(angle);
    var mSin = _sin(angle);
    return this._t(1, 0, 0, 0, 0, mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1);
  }

  function rotateY(angle) {
    if (angle === 0) {
      return this;
    }
    var mCos = _cos(angle);
    var mSin = _sin(angle);
    return this._t(mCos, 0, mSin, 0, 0, 1, 0, 0, -mSin, 0, mCos, 0, 0, 0, 0, 1);
  }

  function rotateZ(angle) {
    if (angle === 0) {
      return this;
    }
    var mCos = _cos(angle);
    var mSin = _sin(angle);
    return this._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }

  function shear(sx, sy) {
    return this._t(1, sy, sx, 1, 0, 0);
  }

  function skew(ax, ay) {
    return this.shear(_tan(ax), _tan(ay));
  }

  function skewFromAxis(ax, angle) {
    var mCos = _cos(angle);
    var mSin = _sin(angle);
    return this._t(mCos, mSin, 0, 0, -mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      ._t(1, 0, 0, 0, _tan(ax), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      ._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    // return this._t(mCos, mSin, -mSin, mCos, 0, 0)._t(1, 0, _tan(ax), 1, 0, 0)._t(mCos, -mSin, mSin, mCos, 0, 0);
  }

  function scale(sx, sy, sz) {
    if (!sz && sz !== 0) {
      sz = 1;
    }
    if (sx === 1 && sy === 1 && sz === 1) {
      return this;
    }
    return this._t(sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1);
  }

  function setTransform(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    this.props[0] = a;
    this.props[1] = b;
    this.props[2] = c;
    this.props[3] = d;
    this.props[4] = e;
    this.props[5] = f;
    this.props[6] = g;
    this.props[7] = h;
    this.props[8] = i;
    this.props[9] = j;
    this.props[10] = k;
    this.props[11] = l;
    this.props[12] = m;
    this.props[13] = n;
    this.props[14] = o;
    this.props[15] = p;
    return this;
  }

  function translate(tx, ty, tz) {
    tz = tz || 0;
    if (tx !== 0 || ty !== 0 || tz !== 0) {
      return this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, tx, ty, tz, 1);
    }
    return this;
  }

  function transform(a2, b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2) {
    var _p = this.props;

    if (a2 === 1 && b2 === 0 && c2 === 0 && d2 === 0 && e2 === 0 && f2 === 1 && g2 === 0 && h2 === 0 && i2 === 0 && j2 === 0 && k2 === 1 && l2 === 0) {
      // NOTE: commenting this condition because TurboFan deoptimizes code when present
      // if(m2 !== 0 || n2 !== 0 || o2 !== 0){
      _p[12] = _p[12] * a2 + _p[15] * m2;
      _p[13] = _p[13] * f2 + _p[15] * n2;
      _p[14] = _p[14] * k2 + _p[15] * o2;
      _p[15] *= p2;
      // }
      this._identityCalculated = false;
      return this;
    }

    var a1 = _p[0];
    var b1 = _p[1];
    var c1 = _p[2];
    var d1 = _p[3];
    var e1 = _p[4];
    var f1 = _p[5];
    var g1 = _p[6];
    var h1 = _p[7];
    var i1 = _p[8];
    var j1 = _p[9];
    var k1 = _p[10];
    var l1 = _p[11];
    var m1 = _p[12];
    var n1 = _p[13];
    var o1 = _p[14];
    var p1 = _p[15];

    /* matrix order (canvas compatible):
         * ace
         * bdf
         * 001
         */
    _p[0] = a1 * a2 + b1 * e2 + c1 * i2 + d1 * m2;
    _p[1] = a1 * b2 + b1 * f2 + c1 * j2 + d1 * n2;
    _p[2] = a1 * c2 + b1 * g2 + c1 * k2 + d1 * o2;
    _p[3] = a1 * d2 + b1 * h2 + c1 * l2 + d1 * p2;

    _p[4] = e1 * a2 + f1 * e2 + g1 * i2 + h1 * m2;
    _p[5] = e1 * b2 + f1 * f2 + g1 * j2 + h1 * n2;
    _p[6] = e1 * c2 + f1 * g2 + g1 * k2 + h1 * o2;
    _p[7] = e1 * d2 + f1 * h2 + g1 * l2 + h1 * p2;

    _p[8] = i1 * a2 + j1 * e2 + k1 * i2 + l1 * m2;
    _p[9] = i1 * b2 + j1 * f2 + k1 * j2 + l1 * n2;
    _p[10] = i1 * c2 + j1 * g2 + k1 * k2 + l1 * o2;
    _p[11] = i1 * d2 + j1 * h2 + k1 * l2 + l1 * p2;

    _p[12] = m1 * a2 + n1 * e2 + o1 * i2 + p1 * m2;
    _p[13] = m1 * b2 + n1 * f2 + o1 * j2 + p1 * n2;
    _p[14] = m1 * c2 + n1 * g2 + o1 * k2 + p1 * o2;
    _p[15] = m1 * d2 + n1 * h2 + o1 * l2 + p1 * p2;

    this._identityCalculated = false;
    return this;
  }

  function isIdentity() {
    if (!this._identityCalculated) {
      this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1);
      this._identityCalculated = true;
    }
    return this._identity;
  }

  function equals(matr) {
    var i = 0;
    while (i < 16) {
      if (matr.props[i] !== this.props[i]) {
        return false;
      }
      i += 1;
    }
    return true;
  }

  function clone(matr) {
    var i;
    for (i = 0; i < 16; i += 1) {
      matr.props[i] = this.props[i];
    }
    return matr;
  }

  function cloneFromProps(props) {
    var i;
    for (i = 0; i < 16; i += 1) {
      this.props[i] = props[i];
    }
  }

  function applyToPoint(x, y, z) {
    return {
      x: x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12],
      y: x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13],
      z: x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14],
    };
    /* return {
         x: x * me.a + y * me.c + me.e,
         y: x * me.b + y * me.d + me.f
         }; */
  }
  function applyToX(x, y, z) {
    return x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12];
  }
  function applyToY(x, y, z) {
    return x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13];
  }
  function applyToZ(x, y, z) {
    return x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14];
  }

  function getInverseMatrix() {
    var determinant = this.props[0] * this.props[5] - this.props[1] * this.props[4];
    var a = this.props[5] / determinant;
    var b = -this.props[1] / determinant;
    var c = -this.props[4] / determinant;
    var d = this.props[0] / determinant;
    var e = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / determinant;
    var f = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / determinant;
    var inverseMatrix = new Matrix();
    inverseMatrix.props[0] = a;
    inverseMatrix.props[1] = b;
    inverseMatrix.props[4] = c;
    inverseMatrix.props[5] = d;
    inverseMatrix.props[12] = e;
    inverseMatrix.props[13] = f;
    return inverseMatrix;
  }

  function inversePoint(pt) {
    var inverseMatrix = this.getInverseMatrix();
    return inverseMatrix.applyToPointArray(pt[0], pt[1], pt[2] || 0);
  }

  function inversePoints(pts) {
    var i;
    var len = pts.length;
    var retPts = [];
    for (i = 0; i < len; i += 1) {
      retPts[i] = inversePoint(pts[i]);
    }
    return retPts;
  }

  function applyToTriplePoints(pt1, pt2, pt3) {
    var arr = createTypedArray('float32', 6);
    if (this.isIdentity()) {
      arr[0] = pt1[0];
      arr[1] = pt1[1];
      arr[2] = pt2[0];
      arr[3] = pt2[1];
      arr[4] = pt3[0];
      arr[5] = pt3[1];
    } else {
      var p0 = this.props[0];
      var p1 = this.props[1];
      var p4 = this.props[4];
      var p5 = this.props[5];
      var p12 = this.props[12];
      var p13 = this.props[13];
      arr[0] = pt1[0] * p0 + pt1[1] * p4 + p12;
      arr[1] = pt1[0] * p1 + pt1[1] * p5 + p13;
      arr[2] = pt2[0] * p0 + pt2[1] * p4 + p12;
      arr[3] = pt2[0] * p1 + pt2[1] * p5 + p13;
      arr[4] = pt3[0] * p0 + pt3[1] * p4 + p12;
      arr[5] = pt3[0] * p1 + pt3[1] * p5 + p13;
    }
    return arr;
  }

  function applyToPointArray(x, y, z) {
    var arr;
    if (this.isIdentity()) {
      arr = [x, y, z];
    } else {
      arr = [
        x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12],
        x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13],
        x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14],
      ];
    }
    return arr;
  }

  function applyToPointStringified(x, y) {
    if (this.isIdentity()) {
      return x + ',' + y;
    }
    var _p = this.props;
    return Math.round((x * _p[0] + y * _p[4] + _p[12]) * 100) / 100 + ',' + Math.round((x * _p[1] + y * _p[5] + _p[13]) * 100) / 100;
  }

  function toCSS() {
    // Doesn't make much sense to add this optimization. If it is an identity matrix, it's very likely this will get called only once since it won't be keyframed.
    /* if(this.isIdentity()) {
            return '';
        } */
    var i = 0;
    var props = this.props;
    var cssValue = 'matrix3d(';
    var v = 10000;
    while (i < 16) {
      cssValue += _rnd(props[i] * v) / v;
      cssValue += i === 15 ? ')' : ',';
      i += 1;
    }
    return cssValue;
  }

  function roundMatrixProperty(val) {
    var v = 10000;
    if ((val < 0.000001 && val > 0) || (val > -0.000001 && val < 0)) {
      return _rnd(val * v) / v;
    }
    return val;
  }

  function to2dCSS() {
    // Doesn't make much sense to add this optimization. If it is an identity matrix, it's very likely this will get called only once since it won't be keyframed.
    /* if(this.isIdentity()) {
            return '';
        } */
    var props = this.props;
    var _a = roundMatrixProperty(props[0]);
    var _b = roundMatrixProperty(props[1]);
    var _c = roundMatrixProperty(props[4]);
    var _d = roundMatrixProperty(props[5]);
    var _e = roundMatrixProperty(props[12]);
    var _f = roundMatrixProperty(props[13]);
    return 'matrix(' + _a + ',' + _b + ',' + _c + ',' + _d + ',' + _e + ',' + _f + ')';
  }

  return function () {
    this.reset = reset;
    this.rotate = rotate;
    this.rotateX = rotateX;
    this.rotateY = rotateY;
    this.rotateZ = rotateZ;
    this.skew = skew;
    this.skewFromAxis = skewFromAxis;
    this.shear = shear;
    this.scale = scale;
    this.setTransform = setTransform;
    this.translate = translate;
    this.transform = transform;
    this.applyToPoint = applyToPoint;
    this.applyToX = applyToX;
    this.applyToY = applyToY;
    this.applyToZ = applyToZ;
    this.applyToPointArray = applyToPointArray;
    this.applyToTriplePoints = applyToTriplePoints;
    this.applyToPointStringified = applyToPointStringified;
    this.toCSS = toCSS;
    this.to2dCSS = to2dCSS;
    this.clone = clone;
    this.cloneFromProps = cloneFromProps;
    this.equals = equals;
    this.inversePoints = inversePoints;
    this.inversePoint = inversePoint;
    this.getInverseMatrix = getInverseMatrix;
    this._t = this.transform;
    this.isIdentity = isIdentity;
    this._identity = true;
    this._identityCalculated = false;

    this.props = createTypedArray('float32', 16);
    this.reset();
  };
}());

/* eslint-disable */
/*
 Copyright 2014 David Bau.

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 */

(function (pool, math) {
//
// The following constants are related to IEEE 754 limits.
//
    var global = this,
        width = 256,        // each RC4 output is 0 <= x < 256
        chunks = 6,         // at least six RC4 outputs for each double
        digits = 52,        // there are 52 significant digits in a double
        rngname = 'random', // rngname: name for Math.random and Math.seedrandom
        startdenom = math.pow(width, chunks),
        significance = math.pow(2, digits),
        overflow = significance * 2,
        mask = width - 1,
        nodecrypto;         // node.js crypto module, initialized at the bottom.

//
// seedrandom()
// This is the seedrandom function described above.
//
    function seedrandom(seed, options, callback) {
        var key = [];
        options = (options === true) ? { entropy: true } : (options || {});

        // Flatten the seed string or build one from local entropy if needed.
        var shortseed = mixkey(flatten(
            options.entropy ? [seed, tostring(pool)] :
                (seed === null) ? autoseed() : seed, 3), key);

        // Use the seed to initialize an ARC4 generator.
        var arc4 = new ARC4(key);

        // This function returns a random double in [0, 1) that contains
        // randomness in every bit of the mantissa of the IEEE 754 value.
        var prng = function() {
            var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
                d = startdenom,                 //   and denominator d = 2 ^ 48.
                x = 0;                          //   and no 'extra last byte'.
            while (n < significance) {          // Fill up all significant digits by
                n = (n + x) * width;              //   shifting numerator and
                d *= width;                       //   denominator and generating a
                x = arc4.g(1);                    //   new least-significant-byte.
            }
            while (n >= overflow) {             // To avoid rounding up, before adding
                n /= 2;                           //   last byte, shift everything
                d /= 2;                           //   right using integer math until
                x >>>= 1;                         //   we have exactly the desired bits.
            }
            return (n + x) / d;                 // Form the number within [0, 1).
        };

        prng.int32 = function() { return arc4.g(4) | 0; };
        prng.quick = function() { return arc4.g(4) / 0x100000000; };
        prng.double = prng;

        // Mix the randomness into accumulated entropy.
        mixkey(tostring(arc4.S), pool);

        // Calling convention: what to return as a function of prng, seed, is_math.
        return (options.pass || callback ||
        function(prng, seed, is_math_call, state) {
            if (state) {
                // Load the arc4 state from the given state if it has an S array.
                if (state.S) { copy(state, arc4); }
                // Only provide the .state method if requested via options.state.
                prng.state = function() { return copy(arc4, {}); };
            }

            // If called as a method of Math (Math.seedrandom()), mutate
            // Math.random because that is how seedrandom.js has worked since v1.0.
            if (is_math_call) { math[rngname] = prng; return seed; }

            // Otherwise, it is a newer calling convention, so return the
            // prng directly.
            else return prng;
        })(
            prng,
            shortseed,
            'global' in options ? options.global : (this == math),
            options.state);
    }
    math['seed' + rngname] = seedrandom;

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
    function ARC4(key) {
        var t, keylen = key.length,
            me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

        // The empty key [] is treated as [0].
        if (!keylen) { key = [keylen++]; }

        // Set up S using the standard key scheduling algorithm.
        while (i < width) {
            s[i] = i++;
        }
        for (i = 0; i < width; i++) {
            s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
            s[j] = t;
        }

        // The "g" method returns the next (count) outputs as one number.
        me.g = function(count) {
            // Using instance members instead of closure state nearly doubles speed.
            var t, r = 0,
                i = me.i, j = me.j, s = me.S;
            while (count--) {
                t = s[i = mask & (i + 1)];
                r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
            }
            me.i = i; me.j = j;
            return r;
            // For robust unpredictability, the function call below automatically
            // discards an initial batch of values.  This is called RC4-drop[256].
            // See http://google.com/search?q=rsa+fluhrer+response&btnI
        };
    }

//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
    function copy(f, t) {
        t.i = f.i;
        t.j = f.j;
        t.S = f.S.slice();
        return t;
    }

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
    function flatten(obj, depth) {
        var result = [], typ = (typeof obj), prop;
        if (depth && typ == 'object') {
            for (prop in obj) {
                try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
            }
        }
        return (result.length ? result : typ == 'string' ? obj : obj + '\0');
    }

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
    function mixkey(seed, key) {
        var stringseed = seed + '', smear, j = 0;
        while (j < stringseed.length) {
            key[mask & j] =
                mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
        }
        return tostring(key);
    }

//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
    function autoseed() {
        try {
            if (nodecrypto) { return tostring(nodecrypto.randomBytes(width)); }
            var out = new Uint8Array(width);
            (global.crypto || global.msCrypto).getRandomValues(out);
            return tostring(out);
        } catch (e) {
            var browser = global.navigator,
                plugins = browser && browser.plugins;
            return [+new Date(), global, plugins, global.screen, tostring(pool)];
        }
    }

//
// tostring()
// Converts an array of charcodes to a string
//
    function tostring(a) {
        return String.fromCharCode.apply(0, a);
    }

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
    mixkey(math.random(), pool);

//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//

// End anonymous scope, and pass initial values.
})(
    [],     // pool: entropy pool starts empty
    BMMath    // math: package containing random, pow, and seedrandom
);
/* eslint-disable */
var BezierFactory = (function () {
  /**
     * BezierEasing - use bezier curve for transition easing function
     * by Gaëtan Renaudeau 2014 - 2015 – MIT License
     *
     * Credits: is based on Firefox's nsSMILKeySpline.cpp
     * Usage:
     * var spline = BezierEasing([ 0.25, 0.1, 0.25, 1.0 ])
     * spline.get(x) => returns the easing value | x must be in [0, 1] range
     *
     */

  var ob = {};
  ob.getBezierEasing = getBezierEasing;
  var beziers = {};

  function getBezierEasing(a, b, c, d, nm) {
    var str = nm || ('bez_' + a + '_' + b + '_' + c + '_' + d).replace(/\./g, 'p');
    if (beziers[str]) {
      return beziers[str];
    }
    var bezEasing = new BezierEasing([a, b, c, d]);
    beziers[str] = bezEasing;
    return bezEasing;
  }

  // These values are established by empiricism with tests (tradeoff: performance VS precision)
  var NEWTON_ITERATIONS = 4;
  var NEWTON_MIN_SLOPE = 0.001;
  var SUBDIVISION_PRECISION = 0.0000001;
  var SUBDIVISION_MAX_ITERATIONS = 10;

  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  var float32ArraySupported = typeof Float32Array === 'function';

  function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
  function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
  function C(aA1) { return 3.0 * aA1; }

  // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
  function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
  }

  // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
  function getSlope(aT, aA1, aA2) {
    return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
  }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX,
      currentT,
      i = 0;
    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0.0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0.0) return aGuessT;
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }

  /**
     * points is an array of [ mX1, mY1, mX2, mY2 ]
     */
  function BezierEasing(points) {
    this._p = points;
    this._mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    this._precomputed = false;

    this.get = this.get.bind(this);
  }

  BezierEasing.prototype = {

    get: function (x) {
      var mX1 = this._p[0],
        mY1 = this._p[1],
        mX2 = this._p[2],
        mY2 = this._p[3];
      if (!this._precomputed) this._precompute();
      if (mX1 === mY1 && mX2 === mY2) return x; // linear
      // Because JavaScript number are imprecise, we should guarantee the extremes are right.
      if (x === 0) return 0;
      if (x === 1) return 1;
      return calcBezier(this._getTForX(x), mY1, mY2);
    },

    // Private part

    _precompute: function () {
      var mX1 = this._p[0],
        mY1 = this._p[1],
        mX2 = this._p[2],
        mY2 = this._p[3];
      this._precomputed = true;
      if (mX1 !== mY1 || mX2 !== mY2) { this._calcSampleValues(); }
    },

    _calcSampleValues: function () {
      var mX1 = this._p[0],
        mX2 = this._p[2];
      for (var i = 0; i < kSplineTableSize; ++i) {
        this._mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    },

    /**
         * getTForX chose the fastest heuristic to determine the percentage value precisely from a given X projection.
         */
    _getTForX: function (aX) {
      var mX1 = this._p[0],
        mX2 = this._p[2],
        mSampleValues = this._mSampleValues;

      var intervalStart = 0.0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }
      --currentSample;

      // Interpolate to provide an initial guess for t
      var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;

      var initialSlope = getSlope(guessForT, mX1, mX2);
      if (initialSlope >= NEWTON_MIN_SLOPE) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } if (initialSlope === 0.0) {
        return guessForT;
      }
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    },
  };

  return ob;
}());

(function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) { // eslint-disable-line no-plusplus
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = setTimeout(function () {
        callback(currTime + timeToCall);
      },
      timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
}());

/* exported extendPrototype, getDescriptor, createProxyFunction */

function extendPrototype(sources, destination) {
  var i;
  var len = sources.length;
  var sourcePrototype;
  for (i = 0; i < len; i += 1) {
    sourcePrototype = sources[i].prototype;
    for (var attr in sourcePrototype) {
      if (Object.prototype.hasOwnProperty.call(sourcePrototype, attr)) destination.prototype[attr] = sourcePrototype[attr];
    }
  }
}

function getDescriptor(object, prop) {
  return Object.getOwnPropertyDescriptor(object, prop);
}

function createProxyFunction(prototype) {
  function ProxyFunction() {}
  ProxyFunction.prototype = prototype;
  return ProxyFunction;
}

/* global segmentsLengthPool, defaultCurveSegments, createSizedArray, bmPow, bmSqrt, bmFloor, createTypedArray, bezierLengthPool */
/* exported bez */

function bezFunction() {
  var math = Math;

  function pointOnLine2D(x1, y1, x2, y2, x3, y3) {
    var det1 = (x1 * y2) + (y1 * x3) + (x2 * y3) - (x3 * y2) - (y3 * x1) - (x2 * y1);
    return det1 > -0.001 && det1 < 0.001;
  }

  function pointOnLine3D(x1, y1, z1, x2, y2, z2, x3, y3, z3) {
    if (z1 === 0 && z2 === 0 && z3 === 0) {
      return pointOnLine2D(x1, y1, x2, y2, x3, y3);
    }
    var dist1 = math.sqrt(math.pow(x2 - x1, 2) + math.pow(y2 - y1, 2) + math.pow(z2 - z1, 2));
    var dist2 = math.sqrt(math.pow(x3 - x1, 2) + math.pow(y3 - y1, 2) + math.pow(z3 - z1, 2));
    var dist3 = math.sqrt(math.pow(x3 - x2, 2) + math.pow(y3 - y2, 2) + math.pow(z3 - z2, 2));
    var diffDist;
    if (dist1 > dist2) {
      if (dist1 > dist3) {
        diffDist = dist1 - dist2 - dist3;
      } else {
        diffDist = dist3 - dist2 - dist1;
      }
    } else if (dist3 > dist2) {
      diffDist = dist3 - dist2 - dist1;
    } else {
      diffDist = dist2 - dist1 - dist3;
    }
    return diffDist > -0.0001 && diffDist < 0.0001;
  }

  var getBezierLength = (function () {
    return function (pt1, pt2, pt3, pt4) {
      var curveSegments = defaultCurveSegments;
      var k;
      var i;
      var len;
      var ptCoord;
      var perc;
      var addedLength = 0;
      var ptDistance;
      var point = [];
      var lastPoint = [];
      var lengthData = bezierLengthPool.newElement();
      len = pt3.length;
      for (k = 0; k < curveSegments; k += 1) {
        perc = k / (curveSegments - 1);
        ptDistance = 0;
        for (i = 0; i < len; i += 1) {
          ptCoord = bmPow(1 - perc, 3) * pt1[i] + 3 * bmPow(1 - perc, 2) * perc * pt3[i] + 3 * (1 - perc) * bmPow(perc, 2) * pt4[i] + bmPow(perc, 3) * pt2[i];
          point[i] = ptCoord;
          if (lastPoint[i] !== null) {
            ptDistance += bmPow(point[i] - lastPoint[i], 2);
          }
          lastPoint[i] = point[i];
        }
        if (ptDistance) {
          ptDistance = bmSqrt(ptDistance);
          addedLength += ptDistance;
        }
        lengthData.percents[k] = perc;
        lengthData.lengths[k] = addedLength;
      }
      lengthData.addedLength = addedLength;
      return lengthData;
    };
  }());

  function getSegmentsLength(shapeData) {
    var segmentsLength = segmentsLengthPool.newElement();
    var closed = shapeData.c;
    var pathV = shapeData.v;
    var pathO = shapeData.o;
    var pathI = shapeData.i;
    var i;
    var len = shapeData._length;
    var lengths = segmentsLength.lengths;
    var totalLength = 0;
    for (i = 0; i < len - 1; i += 1) {
      lengths[i] = getBezierLength(pathV[i], pathV[i + 1], pathO[i], pathI[i + 1]);
      totalLength += lengths[i].addedLength;
    }
    if (closed && len) {
      lengths[i] = getBezierLength(pathV[i], pathV[0], pathO[i], pathI[0]);
      totalLength += lengths[i].addedLength;
    }
    segmentsLength.totalLength = totalLength;
    return segmentsLength;
  }

  function BezierData(length) {
    this.segmentLength = 0;
    this.points = new Array(length);
  }

  function PointData(partial, point) {
    this.partialLength = partial;
    this.point = point;
  }

  var buildBezierData = (function () {
    var storedData = {};

    return function (pt1, pt2, pt3, pt4) {
      var bezierName = (pt1[0] + '_' + pt1[1] + '_' + pt2[0] + '_' + pt2[1] + '_' + pt3[0] + '_' + pt3[1] + '_' + pt4[0] + '_' + pt4[1]).replace(/\./g, 'p');
      if (!storedData[bezierName]) {
        var curveSegments = defaultCurveSegments;
        var k;
        var i;
        var len;
        var ptCoord;
        var perc;
        var addedLength = 0;
        var ptDistance;
        var point;
        var lastPoint = null;
        if (pt1.length === 2 && (pt1[0] !== pt2[0] || pt1[1] !== pt2[1]) && pointOnLine2D(pt1[0], pt1[1], pt2[0], pt2[1], pt1[0] + pt3[0], pt1[1] + pt3[1]) && pointOnLine2D(pt1[0], pt1[1], pt2[0], pt2[1], pt2[0] + pt4[0], pt2[1] + pt4[1])) {
          curveSegments = 2;
        }
        var bezierData = new BezierData(curveSegments);
        len = pt3.length;
        for (k = 0; k < curveSegments; k += 1) {
          point = createSizedArray(len);
          perc = k / (curveSegments - 1);
          ptDistance = 0;
          for (i = 0; i < len; i += 1) {
            ptCoord = bmPow(1 - perc, 3) * pt1[i] + 3 * bmPow(1 - perc, 2) * perc * (pt1[i] + pt3[i]) + 3 * (1 - perc) * bmPow(perc, 2) * (pt2[i] + pt4[i]) + bmPow(perc, 3) * pt2[i];
            point[i] = ptCoord;
            if (lastPoint !== null) {
              ptDistance += bmPow(point[i] - lastPoint[i], 2);
            }
          }
          ptDistance = bmSqrt(ptDistance);
          addedLength += ptDistance;
          bezierData.points[k] = new PointData(ptDistance, point);
          lastPoint = point;
        }
        bezierData.segmentLength = addedLength;
        storedData[bezierName] = bezierData;
      }
      return storedData[bezierName];
    };
  }());

  function getDistancePerc(perc, bezierData) {
    var percents = bezierData.percents;
    var lengths = bezierData.lengths;
    var len = percents.length;
    var initPos = bmFloor((len - 1) * perc);
    var lengthPos = perc * bezierData.addedLength;
    var lPerc = 0;
    if (initPos === len - 1 || initPos === 0 || lengthPos === lengths[initPos]) {
      return percents[initPos];
    }
    var dir = lengths[initPos] > lengthPos ? -1 : 1;
    var flag = true;
    while (flag) {
      if (lengths[initPos] <= lengthPos && lengths[initPos + 1] > lengthPos) {
        lPerc = (lengthPos - lengths[initPos]) / (lengths[initPos + 1] - lengths[initPos]);
        flag = false;
      } else {
        initPos += dir;
      }
      if (initPos < 0 || initPos >= len - 1) {
        // FIX for TypedArrays that don't store floating point values with enough accuracy
        if (initPos === len - 1) {
          return percents[initPos];
        }
        flag = false;
      }
    }
    return percents[initPos] + (percents[initPos + 1] - percents[initPos]) * lPerc;
  }

  function getPointInSegment(pt1, pt2, pt3, pt4, percent, bezierData) {
    var t1 = getDistancePerc(percent, bezierData);
    var u1 = 1 - t1;
    var ptX = math.round((u1 * u1 * u1 * pt1[0] + (t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1) * pt3[0] + (t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1) * pt4[0] + t1 * t1 * t1 * pt2[0]) * 1000) / 1000;
    var ptY = math.round((u1 * u1 * u1 * pt1[1] + (t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1) * pt3[1] + (t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1) * pt4[1] + t1 * t1 * t1 * pt2[1]) * 1000) / 1000;
    return [ptX, ptY];
  }

  var bezierSegmentPoints = createTypedArray('float32', 8);

  function getNewSegment(pt1, pt2, pt3, pt4, startPerc, endPerc, bezierData) {
    if (startPerc < 0) {
      startPerc = 0;
    } else if (startPerc > 1) {
      startPerc = 1;
    }
    var t0 = getDistancePerc(startPerc, bezierData);
    endPerc = endPerc > 1 ? 1 : endPerc;
    var t1 = getDistancePerc(endPerc, bezierData);
    var i;
    var len = pt1.length;
    var u0 = 1 - t0;
    var u1 = 1 - t1;
    var u0u0u0 = u0 * u0 * u0;
    var t0u0u0_3 = t0 * u0 * u0 * 3; // eslint-disable-line camelcase
    var t0t0u0_3 = t0 * t0 * u0 * 3; // eslint-disable-line camelcase
    var t0t0t0 = t0 * t0 * t0;
    //
    var u0u0u1 = u0 * u0 * u1;
    var t0u0u1_3 = t0 * u0 * u1 + u0 * t0 * u1 + u0 * u0 * t1; // eslint-disable-line camelcase
    var t0t0u1_3 = t0 * t0 * u1 + u0 * t0 * t1 + t0 * u0 * t1; // eslint-disable-line camelcase
    var t0t0t1 = t0 * t0 * t1;
    //
    var u0u1u1 = u0 * u1 * u1;
    var t0u1u1_3 = t0 * u1 * u1 + u0 * t1 * u1 + u0 * u1 * t1; // eslint-disable-line camelcase
    var t0t1u1_3 = t0 * t1 * u1 + u0 * t1 * t1 + t0 * u1 * t1; // eslint-disable-line camelcase
    var t0t1t1 = t0 * t1 * t1;
    //
    var u1u1u1 = u1 * u1 * u1;
    var t1u1u1_3 = t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1; // eslint-disable-line camelcase
    var t1t1u1_3 = t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1; // eslint-disable-line camelcase
    var t1t1t1 = t1 * t1 * t1;
    for (i = 0; i < len; i += 1) {
      bezierSegmentPoints[i * 4] = math.round((u0u0u0 * pt1[i] + t0u0u0_3 * pt3[i] + t0t0u0_3 * pt4[i] + t0t0t0 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase
      bezierSegmentPoints[i * 4 + 1] = math.round((u0u0u1 * pt1[i] + t0u0u1_3 * pt3[i] + t0t0u1_3 * pt4[i] + t0t0t1 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase
      bezierSegmentPoints[i * 4 + 2] = math.round((u0u1u1 * pt1[i] + t0u1u1_3 * pt3[i] + t0t1u1_3 * pt4[i] + t0t1t1 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase
      bezierSegmentPoints[i * 4 + 3] = math.round((u1u1u1 * pt1[i] + t1u1u1_3 * pt3[i] + t1t1u1_3 * pt4[i] + t1t1t1 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase
    }

    return bezierSegmentPoints;
  }

  return {
    getSegmentsLength: getSegmentsLength,
    getNewSegment: getNewSegment,
    getPointInSegment: getPointInSegment,
    buildBezierData: buildBezierData,
    pointOnLine2D: pointOnLine2D,
    pointOnLine3D: pointOnLine3D,
  };
}

var bez = bezFunction();

/* global _useWebWorker */

var dataManager = (function () {
  var _counterId = 1;
  var processes = [];
  var workerFn;
  var workerInstance;
  var workerProxy = {
    onmessage: function () {

    },
    postMessage: function (path) {
      workerFn({
        data: path,
      });
    },
  };
  var _workerSelf = {
    postMessage: function (data) {
      workerProxy.onmessage({
        data: data,
      });
    },
  };
  function createWorker(fn) {
    if (window.Worker && window.Blob && _useWebWorker) {
      var blob = new Blob(['var _workerSelf = self; self.onmessage = ', fn.toString()], { type: 'text/javascript' });
      // var blob = new Blob(['self.onmessage = ', fn.toString()], { type: 'text/javascript' });
      var url = URL.createObjectURL(blob);
      return new Worker(url);
    }
    workerFn = fn;
    return workerProxy;
  }

  function setupWorker() {
    if (!workerInstance) {
      workerInstance = createWorker(function workerStart(e) {
        /* exported dataManager */

        function dataFunctionManager() {
          // var tCanvasHelper = createTag('canvas').getContext('2d');

          function completeLayers(layers, comps) {
            var layerData;
            var i;
            var len = layers.length;
            var j;
            var jLen;
            var k;
            var kLen;
            for (i = 0; i < len; i += 1) {
              layerData = layers[i];
              if (('ks' in layerData) && !layerData.completed) {
                layerData.completed = true;
                if (layerData.tt) {
                  layers[i - 1].td = layerData.tt;
                }
                if (layerData.hasMask) {
                  var maskProps = layerData.masksProperties;
                  jLen = maskProps.length;
                  for (j = 0; j < jLen; j += 1) {
                    if (maskProps[j].pt.k.i) {
                      convertPathsToAbsoluteValues(maskProps[j].pt.k);
                    } else {
                      kLen = maskProps[j].pt.k.length;
                      for (k = 0; k < kLen; k += 1) {
                        if (maskProps[j].pt.k[k].s) {
                          convertPathsToAbsoluteValues(maskProps[j].pt.k[k].s[0]);
                        }
                        if (maskProps[j].pt.k[k].e) {
                          convertPathsToAbsoluteValues(maskProps[j].pt.k[k].e[0]);
                        }
                      }
                    }
                  }
                }
                if (layerData.ty === 0) {
                  layerData.layers = findCompLayers(layerData.refId, comps);
                  completeLayers(layerData.layers, comps);
                } else if (layerData.ty === 4) {
                  completeShapes(layerData.shapes);
                } else if (layerData.ty === 5) {
                  completeText(layerData);
                }
              }
            }
          }

          function findCompLayers(id, comps) {
            var i = 0;
            var len = comps.length;
            while (i < len) {
              if (comps[i].id === id) {
                if (!comps[i].layers.__used) {
                  comps[i].layers.__used = true;
                  return comps[i].layers;
                }
                return JSON.parse(JSON.stringify(comps[i].layers));
              }
              i += 1;
            }
            return null;
          }

          function completeShapes(arr) {
            var i;
            var len = arr.length;
            var j;
            var jLen;
            for (i = len - 1; i >= 0; i -= 1) {
              if (arr[i].ty === 'sh') {
                if (arr[i].ks.k.i) {
                  convertPathsToAbsoluteValues(arr[i].ks.k);
                } else {
                  jLen = arr[i].ks.k.length;
                  for (j = 0; j < jLen; j += 1) {
                    if (arr[i].ks.k[j].s) {
                      convertPathsToAbsoluteValues(arr[i].ks.k[j].s[0]);
                    }
                    if (arr[i].ks.k[j].e) {
                      convertPathsToAbsoluteValues(arr[i].ks.k[j].e[0]);
                    }
                  }
                }
              } else if (arr[i].ty === 'gr') {
                completeShapes(arr[i].it);
              }
            }
          }

          function convertPathsToAbsoluteValues(path) {
            var i;
            var len = path.i.length;
            for (i = 0; i < len; i += 1) {
              path.i[i][0] += path.v[i][0];
              path.i[i][1] += path.v[i][1];
              path.o[i][0] += path.v[i][0];
              path.o[i][1] += path.v[i][1];
            }
          }

          function checkVersion(minimum, animVersionString) {
            var animVersion = animVersionString ? animVersionString.split('.') : [100, 100, 100];
            if (minimum[0] > animVersion[0]) {
              return true;
            } if (animVersion[0] > minimum[0]) {
              return false;
            }
            if (minimum[1] > animVersion[1]) {
              return true;
            } if (animVersion[1] > minimum[1]) {
              return false;
            }
            if (minimum[2] > animVersion[2]) {
              return true;
            } if (animVersion[2] > minimum[2]) {
              return false;
            }
            return null;
          }

          var checkText = (function () {
            var minimumVersion = [4, 4, 14];

            function updateTextLayer(textLayer) {
              var documentData = textLayer.t.d;
              textLayer.t.d = {
                k: [
                  {
                    s: documentData,
                    t: 0,
                  },
                ],
              };
            }

            function iterateLayers(layers) {
              var i;
              var len = layers.length;
              for (i = 0; i < len; i += 1) {
                if (layers[i].ty === 5) {
                  updateTextLayer(layers[i]);
                }
              }
            }

            return function (animationData) {
              if (checkVersion(minimumVersion, animationData.v)) {
                iterateLayers(animationData.layers);
                if (animationData.assets) {
                  var i;
                  var len = animationData.assets.length;
                  for (i = 0; i < len; i += 1) {
                    if (animationData.assets[i].layers) {
                      iterateLayers(animationData.assets[i].layers);
                    }
                  }
                }
              }
            };
          }());

          var checkChars = (function () {
            var minimumVersion = [4, 7, 99];
            return function (animationData) {
              if (animationData.chars && !checkVersion(minimumVersion, animationData.v)) {
                var i;
                var len = animationData.chars.length;
                var j;
                var jLen;
                var pathData;
                var paths;
                for (i = 0; i < len; i += 1) {
                  if (animationData.chars[i].data && animationData.chars[i].data.shapes) {
                    paths = animationData.chars[i].data.shapes[0].it;
                    jLen = paths.length;

                    for (j = 0; j < jLen; j += 1) {
                      pathData = paths[j].ks.k;
                      if (!pathData.__converted) {
                        convertPathsToAbsoluteValues(paths[j].ks.k);
                        pathData.__converted = true;
                      }
                    }
                  }
                }
              }
            };
          }());

          var checkPathProperties = (function () {
            var minimumVersion = [5, 7, 15];

            function updateTextLayer(textLayer) {
              var pathData = textLayer.t.p;
              if (typeof pathData.a === 'number') {
                pathData.a = {
                  a: 0,
                  k: pathData.a,
                };
              }
              if (typeof pathData.p === 'number') {
                pathData.p = {
                  a: 0,
                  k: pathData.p,
                };
              }
              if (typeof pathData.r === 'number') {
                pathData.r = {
                  a: 0,
                  k: pathData.r,
                };
              }
            }

            function iterateLayers(layers) {
              var i;
              var len = layers.length;
              for (i = 0; i < len; i += 1) {
                if (layers[i].ty === 5) {
                  updateTextLayer(layers[i]);
                }
              }
            }

            return function (animationData) {
              if (checkVersion(minimumVersion, animationData.v)) {
                iterateLayers(animationData.layers);
                if (animationData.assets) {
                  var i;
                  var len = animationData.assets.length;
                  for (i = 0; i < len; i += 1) {
                    if (animationData.assets[i].layers) {
                      iterateLayers(animationData.assets[i].layers);
                    }
                  }
                }
              }
            };
          }());

          var checkColors = (function () {
            var minimumVersion = [4, 1, 9];

            function iterateShapes(shapes) {
              var i;
              var len = shapes.length;
              var j;
              var jLen;
              for (i = 0; i < len; i += 1) {
                if (shapes[i].ty === 'gr') {
                  iterateShapes(shapes[i].it);
                } else if (shapes[i].ty === 'fl' || shapes[i].ty === 'st') {
                  if (shapes[i].c.k && shapes[i].c.k[0].i) {
                    jLen = shapes[i].c.k.length;
                    for (j = 0; j < jLen; j += 1) {
                      if (shapes[i].c.k[j].s) {
                        shapes[i].c.k[j].s[0] /= 255;
                        shapes[i].c.k[j].s[1] /= 255;
                        shapes[i].c.k[j].s[2] /= 255;
                        shapes[i].c.k[j].s[3] /= 255;
                      }
                      if (shapes[i].c.k[j].e) {
                        shapes[i].c.k[j].e[0] /= 255;
                        shapes[i].c.k[j].e[1] /= 255;
                        shapes[i].c.k[j].e[2] /= 255;
                        shapes[i].c.k[j].e[3] /= 255;
                      }
                    }
                  } else {
                    shapes[i].c.k[0] /= 255;
                    shapes[i].c.k[1] /= 255;
                    shapes[i].c.k[2] /= 255;
                    shapes[i].c.k[3] /= 255;
                  }
                }
              }
            }

            function iterateLayers(layers) {
              var i;
              var len = layers.length;
              for (i = 0; i < len; i += 1) {
                if (layers[i].ty === 4) {
                  iterateShapes(layers[i].shapes);
                }
              }
            }

            return function (animationData) {
              if (checkVersion(minimumVersion, animationData.v)) {
                iterateLayers(animationData.layers);
                if (animationData.assets) {
                  var i;
                  var len = animationData.assets.length;
                  for (i = 0; i < len; i += 1) {
                    if (animationData.assets[i].layers) {
                      iterateLayers(animationData.assets[i].layers);
                    }
                  }
                }
              }
            };
          }());

          var checkShapes = (function () {
            var minimumVersion = [4, 4, 18];

            function completeClosingShapes(arr) {
              var i;
              var len = arr.length;
              var j;
              var jLen;
              for (i = len - 1; i >= 0; i -= 1) {
                if (arr[i].ty === 'sh') {
                  if (arr[i].ks.k.i) {
                    arr[i].ks.k.c = arr[i].closed;
                  } else {
                    jLen = arr[i].ks.k.length;
                    for (j = 0; j < jLen; j += 1) {
                      if (arr[i].ks.k[j].s) {
                        arr[i].ks.k[j].s[0].c = arr[i].closed;
                      }
                      if (arr[i].ks.k[j].e) {
                        arr[i].ks.k[j].e[0].c = arr[i].closed;
                      }
                    }
                  }
                } else if (arr[i].ty === 'gr') {
                  completeClosingShapes(arr[i].it);
                }
              }
            }

            function iterateLayers(layers) {
              var layerData;
              var i;
              var len = layers.length;
              var j;
              var jLen;
              var k;
              var kLen;
              for (i = 0; i < len; i += 1) {
                layerData = layers[i];
                if (layerData.hasMask) {
                  var maskProps = layerData.masksProperties;
                  jLen = maskProps.length;
                  for (j = 0; j < jLen; j += 1) {
                    if (maskProps[j].pt.k.i) {
                      maskProps[j].pt.k.c = maskProps[j].cl;
                    } else {
                      kLen = maskProps[j].pt.k.length;
                      for (k = 0; k < kLen; k += 1) {
                        if (maskProps[j].pt.k[k].s) {
                          maskProps[j].pt.k[k].s[0].c = maskProps[j].cl;
                        }
                        if (maskProps[j].pt.k[k].e) {
                          maskProps[j].pt.k[k].e[0].c = maskProps[j].cl;
                        }
                      }
                    }
                  }
                }
                if (layerData.ty === 4) {
                  completeClosingShapes(layerData.shapes);
                }
              }
            }

            return function (animationData) {
              if (checkVersion(minimumVersion, animationData.v)) {
                iterateLayers(animationData.layers);
                if (animationData.assets) {
                  var i;
                  var len = animationData.assets.length;
                  for (i = 0; i < len; i += 1) {
                    if (animationData.assets[i].layers) {
                      iterateLayers(animationData.assets[i].layers);
                    }
                  }
                }
              }
            };
          }());

          function completeData(animationData) {
            if (animationData.__complete) {
              return;
            }
            checkColors(animationData);
            checkText(animationData);
            checkChars(animationData);
            checkPathProperties(animationData);
            checkShapes(animationData);
            completeLayers(animationData.layers, animationData.assets);
            animationData.__complete = true;
          }

          function completeText(data) {
            if (data.t.a.length === 0 && !('m' in data.t.p)) {
              data.singleShape = true;
            }
          }

          var moduleOb = {};
          moduleOb.completeData = completeData;
          moduleOb.checkColors = checkColors;
          moduleOb.checkChars = checkChars;
          moduleOb.checkPathProperties = checkPathProperties;
          moduleOb.checkShapes = checkShapes;
          moduleOb.completeLayers = completeLayers;

          return moduleOb;
        }
        if (!_workerSelf.dataManager) {
          _workerSelf.dataManager = dataFunctionManager();
        }

        /* exported assetLoader */
        if (!_workerSelf.assetLoader) {
          _workerSelf.assetLoader = (function () {
            function formatResponse(xhr) {
              // using typeof doubles the time of execution of this method,
              // so if available, it's better to use the header to validate the type
              var contentTypeHeader = xhr.getResponseHeader('content-type');
              if (contentTypeHeader && xhr.responseType === 'json' && contentTypeHeader.indexOf('json') !== -1) {
                return xhr.response;
              }
              if (xhr.response && typeof xhr.response === 'object') {
                return xhr.response;
              } if (xhr.response && typeof xhr.response === 'string') {
                return JSON.parse(xhr.response);
              } if (xhr.responseText) {
                return JSON.parse(xhr.responseText);
              }
              return null;
            }

            function loadAsset(path, fullPath, callback, errorCallback) {
              var response;
              var xhr = new XMLHttpRequest();
              // set responseType after calling open or IE will break.
              try {
                // This crashes on Android WebView prior to KitKat
                xhr.responseType = 'json';
              } catch (err) {} // eslint-disable-line no-empty
              xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                  if (xhr.status === 200) {
                    response = formatResponse(xhr);
                    callback(response);
                  } else {
                    try {
                      response = formatResponse(xhr);
                      callback(response);
                    } catch (err) {
                      if (errorCallback) {
                        errorCallback(err);
                      }
                    }
                  }
                }
              };
              try {
                xhr.open('GET', path, true);
              } catch (error) {
                xhr.open('GET', fullPath + '/' + path, true);
              }
              xhr.send();
            }
            return {
              load: loadAsset,
            };
          }());
        }

        if (e.data.type === 'loadAnimation') {
          _workerSelf.assetLoader.load(
            e.data.path,
            e.data.fullPath,
            function (data) {
              _workerSelf.dataManager.completeData(data);
              _workerSelf.postMessage({
                id: e.data.id,
                payload: data,
                status: 'success',
              });
            },
            function () {
              _workerSelf.postMessage({
                id: e.data.id,
                status: 'error',
              });
            }
          );
        } else if (e.data.type === 'complete') {
          var animation = e.data.animation;
          _workerSelf.dataManager.completeData(animation);
          _workerSelf.postMessage({
            id: e.data.id,
            payload: animation,
            status: 'success',
          });
        } else if (e.data.type === 'loadData') {
          _workerSelf.assetLoader.load(
            e.data.path,
            e.data.fullPath,
            function (data) {
              _workerSelf.postMessage({
                id: e.data.id,
                payload: data,
                status: 'success',
              });
            },
            function () {
              _workerSelf.postMessage({
                id: e.data.id,
                status: 'error',
              });
            }
          );
        }
      });

      workerInstance.onmessage = function (event) {
        var data = event.data;
        var id = data.id;
        var process = processes[id];
        processes[id] = null;
        if (data.status === 'success') {
          process.onComplete(data.payload);
        } else if (process.onError) {
          process.onError();
        }
      };
    }
  }

  function createProcess(onComplete, onError) {
    _counterId += 1;
    var id = 'processId_' + _counterId;
    processes[id] = {
      onComplete: onComplete,
      onError: onError,
    };
    return id;
  }

  function loadAnimation(path, onComplete, onError) {
    setupWorker();
    var processId = createProcess(onComplete, onError);
    workerInstance.postMessage({
      type: 'loadAnimation',
      path: path,
      fullPath: window.location.origin + window.location.pathname,
      id: processId,
    });
  }

  function loadData(path, onComplete, onError) {
    setupWorker();
    var processId = createProcess(onComplete, onError);
    workerInstance.postMessage({
      type: 'loadData',
      path: path,
      fullPath: window.location.origin + window.location.pathname,
      id: processId,
    });
  }

  function completeAnimation(anim, onComplete, onError) {
    setupWorker();
    var processId = createProcess(onComplete, onError);
    workerInstance.postMessage({
      type: 'complete',
      animation: anim,
      id: processId,
    });
  }

  return {
    loadAnimation: loadAnimation,
    loadData: loadData,
    completeAnimation: completeAnimation,
  };
}());

/* exported getFontProperties */

function getFontProperties(fontData) {
  var styles = fontData.fStyle ? fontData.fStyle.split(' ') : [];

  var fWeight = 'normal'; var
    fStyle = 'normal';
  var len = styles.length;
  var styleName;
  for (var i = 0; i < len; i += 1) {
    styleName = styles[i].toLowerCase();
    switch (styleName) {
      case 'italic':
        fStyle = 'italic';
        break;
      case 'bold':
        fWeight = '700';
        break;
      case 'black':
        fWeight = '900';
        break;
      case 'medium':
        fWeight = '500';
        break;
      case 'regular':
      case 'normal':
        fWeight = '400';
        break;
      case 'light':
      case 'thin':
        fWeight = '200';
        break;
      default:
        break;
    }
  }

  return {
    style: fStyle,
    weight: fontData.fWeight || fWeight,
  };
}

/* global createNS, createTag, getFontProperties */
/* exported FontManager */

var FontManager = (function () {
  var maxWaitingTime = 5000;
  var emptyChar = {
    w: 0,
    size: 0,
    shapes: [],
  };
  var combinedCharacters = [];
  // Hindi characters
  combinedCharacters = combinedCharacters.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366,
    2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379,
    2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);

  var surrogateModifiers = [
    'd83cdffb',
    'd83cdffc',
    'd83cdffd',
    'd83cdffe',
    'd83cdfff',
  ];

  var zeroWidthJoiner = [65039, 8205];

  function trimFontOptions(font) {
    var familyArray = font.split(',');
    var i;
    var len = familyArray.length;
    var enabledFamilies = [];
    for (i = 0; i < len; i += 1) {
      if (familyArray[i] !== 'sans-serif' && familyArray[i] !== 'monospace') {
        enabledFamilies.push(familyArray[i]);
      }
    }
    return enabledFamilies.join(',');
  }

  function setUpNode(font, family) {
    var parentNode = createTag('span');
    // Node is invisible to screen readers.
    parentNode.setAttribute('aria-hidden', true);
    parentNode.style.fontFamily = family;
    var node = createTag('span');
    // Characters that vary significantly among different fonts
    node.innerText = 'giItT1WQy@!-/#';
    // Visible - so we can measure it - but not on the screen
    parentNode.style.position = 'absolute';
    parentNode.style.left = '-10000px';
    parentNode.style.top = '-10000px';
    // Large font size makes even subtle changes obvious
    parentNode.style.fontSize = '300px';
    // Reset any font properties
    parentNode.style.fontVariant = 'normal';
    parentNode.style.fontStyle = 'normal';
    parentNode.style.fontWeight = 'normal';
    parentNode.style.letterSpacing = '0';
    parentNode.appendChild(node);
    document.body.appendChild(parentNode);

    // Remember width with no applied web font
    var width = node.offsetWidth;
    node.style.fontFamily = trimFontOptions(font) + ', ' + family;
    return { node: node, w: width, parent: parentNode };
  }

  function checkLoadedFonts() {
    var i;
    var len = this.fonts.length;
    var node;
    var w;
    var loadedCount = len;
    for (i = 0; i < len; i += 1) {
      if (this.fonts[i].loaded) {
        loadedCount -= 1;
      } else if (this.fonts[i].fOrigin === 'n' || this.fonts[i].origin === 0) {
        this.fonts[i].loaded = true;
      } else {
        node = this.fonts[i].monoCase.node;
        w = this.fonts[i].monoCase.w;
        if (node.offsetWidth !== w) {
          loadedCount -= 1;
          this.fonts[i].loaded = true;
        } else {
          node = this.fonts[i].sansCase.node;
          w = this.fonts[i].sansCase.w;
          if (node.offsetWidth !== w) {
            loadedCount -= 1;
            this.fonts[i].loaded = true;
          }
        }
        if (this.fonts[i].loaded) {
          this.fonts[i].sansCase.parent.parentNode.removeChild(this.fonts[i].sansCase.parent);
          this.fonts[i].monoCase.parent.parentNode.removeChild(this.fonts[i].monoCase.parent);
        }
      }
    }

    if (loadedCount !== 0 && Date.now() - this.initTime < maxWaitingTime) {
      setTimeout(this.checkLoadedFontsBinded, 20);
    } else {
      setTimeout(this.setIsLoadedBinded, 10);
    }
  }

  function createHelper(def, fontData) {
    var tHelper = createNS('text');
    tHelper.style.fontSize = '100px';
    // tHelper.style.fontFamily = fontData.fFamily;

    var fontProps = getFontProperties(fontData);
    tHelper.setAttribute('font-family', fontData.fFamily);
    tHelper.setAttribute('font-style', fontProps.style);
    tHelper.setAttribute('font-weight', fontProps.weight);
    tHelper.textContent = '1';
    if (fontData.fClass) {
      tHelper.style.fontFamily = 'inherit';
      tHelper.setAttribute('class', fontData.fClass);
    } else {
      tHelper.style.fontFamily = fontData.fFamily;
    }
    def.appendChild(tHelper);
    var tCanvasHelper = createTag('canvas').getContext('2d');
    tCanvasHelper.font = fontData.fWeight + ' ' + fontData.fStyle + ' 100px ' + fontData.fFamily;
    // tCanvasHelper.font = ' 100px '+ fontData.fFamily;
    return tHelper;
  }

  function addFonts(fontData, defs) {
    if (!fontData) {
      this.isLoaded = true;
      return;
    }
    if (this.chars) {
      this.isLoaded = true;
      this.fonts = fontData.list;
      return;
    }

    var fontArr = fontData.list;
    var i;
    var len = fontArr.length;
    var _pendingFonts = len;
    for (i = 0; i < len; i += 1) {
      var shouldLoadFont = true;
      var loadedSelector;
      var j;
      fontArr[i].loaded = false;
      fontArr[i].monoCase = setUpNode(fontArr[i].fFamily, 'monospace');
      fontArr[i].sansCase = setUpNode(fontArr[i].fFamily, 'sans-serif');
      if (!fontArr[i].fPath) {
        fontArr[i].loaded = true;
        _pendingFonts -= 1;
      } else if (fontArr[i].fOrigin === 'p' || fontArr[i].origin === 3) {
        loadedSelector = document.querySelectorAll('style[f-forigin="p"][f-family="' + fontArr[i].fFamily + '"], style[f-origin="3"][f-family="' + fontArr[i].fFamily + '"]');

        if (loadedSelector.length > 0) {
          shouldLoadFont = false;
        }

        if (shouldLoadFont) {
          var s = createTag('style');
          s.setAttribute('f-forigin', fontArr[i].fOrigin);
          s.setAttribute('f-origin', fontArr[i].origin);
          s.setAttribute('f-family', fontArr[i].fFamily);
          s.type = 'text/css';
          s.innerText = '@font-face {font-family: ' + fontArr[i].fFamily + "; font-style: normal; src: url('" + fontArr[i].fPath + "');}";
          defs.appendChild(s);
        }
      } else if (fontArr[i].fOrigin === 'g' || fontArr[i].origin === 1) {
        loadedSelector = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]');

        for (j = 0; j < loadedSelector.length; j += 1) {
          if (loadedSelector[j].href.indexOf(fontArr[i].fPath) !== -1) {
            // Font is already loaded
            shouldLoadFont = false;
          }
        }

        if (shouldLoadFont) {
          var l = createTag('link');
          l.setAttribute('f-forigin', fontArr[i].fOrigin);
          l.setAttribute('f-origin', fontArr[i].origin);
          l.type = 'text/css';
          l.rel = 'stylesheet';
          l.href = fontArr[i].fPath;
          document.body.appendChild(l);
        }
      } else if (fontArr[i].fOrigin === 't' || fontArr[i].origin === 2) {
        loadedSelector = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]');

        for (j = 0; j < loadedSelector.length; j += 1) {
          if (fontArr[i].fPath === loadedSelector[j].src) {
            // Font is already loaded
            shouldLoadFont = false;
          }
        }

        if (shouldLoadFont) {
          var sc = createTag('link');
          sc.setAttribute('f-forigin', fontArr[i].fOrigin);
          sc.setAttribute('f-origin', fontArr[i].origin);
          sc.setAttribute('rel', 'stylesheet');
          sc.setAttribute('href', fontArr[i].fPath);
          defs.appendChild(sc);
        }
      }
      fontArr[i].helper = createHelper(defs, fontArr[i]);
      fontArr[i].cache = {};
      this.fonts.push(fontArr[i]);
    }
    if (_pendingFonts === 0) {
      this.isLoaded = true;
    } else {
      // On some cases even if the font is loaded, it won't load correctly when measuring text on canvas.
      // Adding this timeout seems to fix it
      setTimeout(this.checkLoadedFonts.bind(this), 100);
    }
  }

  function addChars(chars) {
    if (!chars) {
      return;
    }
    if (!this.chars) {
      this.chars = [];
    }
    var i;
    var len = chars.length;
    var j;
    var jLen = this.chars.length;
    var found;
    for (i = 0; i < len; i += 1) {
      j = 0;
      found = false;
      while (j < jLen) {
        if (this.chars[j].style === chars[i].style && this.chars[j].fFamily === chars[i].fFamily && this.chars[j].ch === chars[i].ch) {
          found = true;
        }
        j += 1;
      }
      if (!found) {
        this.chars.push(chars[i]);
        jLen += 1;
      }
    }
  }

  function getCharData(char, style, font) {
    var i = 0;
    var len = this.chars.length;
    while (i < len) {
      if (this.chars[i].ch === char && this.chars[i].style === style && this.chars[i].fFamily === font) {
        return this.chars[i];
      }
      i += 1;
    }
    if (((typeof char === 'string' && char.charCodeAt(0) !== 13) || !char)
            && console
            && console.warn // eslint-disable-line no-console
            && !this._warned
    ) {
      this._warned = true;
      console.warn('Missing character from exported characters list: ', char, style, font); // eslint-disable-line no-console
    }
    return emptyChar;
  }

  function measureText(char, fontName, size) {
    var fontData = this.getFontByName(fontName);
    var index = char.charCodeAt(0);
    if (!fontData.cache[index + 1]) {
      var tHelper = fontData.helper;
      // Canvas version
      // fontData.cache[index] = tHelper.measureText(char).width / 100;
      // SVG version
      // console.log(tHelper.getBBox().width)
      if (char === ' ') {
        tHelper.textContent = '|' + char + '|';
        var doubleSize = tHelper.getComputedTextLength();
        tHelper.textContent = '||';
        var singleSize = tHelper.getComputedTextLength();
        fontData.cache[index + 1] = (doubleSize - singleSize) / 100;
      } else {
        tHelper.textContent = char;
        fontData.cache[index + 1] = (tHelper.getComputedTextLength()) / 100;
      }
    }
    return fontData.cache[index + 1] * size;
  }

  function getFontByName(name) {
    var i = 0;
    var len = this.fonts.length;
    while (i < len) {
      if (this.fonts[i].fName === name) {
        return this.fonts[i];
      }
      i += 1;
    }
    return this.fonts[0];
  }

  function isModifier(firstCharCode, secondCharCode) {
    var sum = firstCharCode.toString(16) + secondCharCode.toString(16);
    return surrogateModifiers.indexOf(sum) !== -1;
  }

  function isZeroWidthJoiner(firstCharCode, secondCharCode) {
    if (!secondCharCode) {
      return firstCharCode === zeroWidthJoiner[1];
    }
    return firstCharCode === zeroWidthJoiner[0] && secondCharCode === zeroWidthJoiner[1];
  }

  function isCombinedCharacter(char) {
    return combinedCharacters.indexOf(char) !== -1;
  }

  function setIsLoaded() {
    this.isLoaded = true;
  }

  var Font = function () {
    this.fonts = [];
    this.chars = null;
    this.typekitLoaded = 0;
    this.isLoaded = false;
    this._warned = false;
    this.initTime = Date.now();
    this.setIsLoadedBinded = this.setIsLoaded.bind(this);
    this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
  };
  Font.isModifier = isModifier;
  Font.isZeroWidthJoiner = isZeroWidthJoiner;
  Font.isCombinedCharacter = isCombinedCharacter;

  var fontPrototype = {
    addChars: addChars,
    addFonts: addFonts,
    getCharData: getCharData,
    getFontByName: getFontByName,
    measureText: measureText,
    checkLoadedFonts: checkLoadedFonts,
    setIsLoaded: setIsLoaded,
  };

  Font.prototype = fontPrototype;

  return Font;
}());

/* global initialDefaultFrame, BezierFactory, degToRads, bez, createTypedArray */
/* exported PropertyFactory */

var PropertyFactory = (function () {
  var initFrame = initialDefaultFrame;
  var mathAbs = Math.abs;

  function interpolateValue(frameNum, caching) {
    var offsetTime = this.offsetTime;
    var newValue;
    if (this.propType === 'multidimensional') {
      newValue = createTypedArray('float32', this.pv.length);
    }
    var iterationIndex = caching.lastIndex;
    var i = iterationIndex;
    var len = this.keyframes.length - 1;
    var flag = true;
    var keyData;
    var nextKeyData;
    var keyframeMetadata;

    while (flag) {
      keyData = this.keyframes[i];
      nextKeyData = this.keyframes[i + 1];
      if (i === len - 1 && frameNum >= nextKeyData.t - offsetTime) {
        if (keyData.h) {
          keyData = nextKeyData;
        }
        iterationIndex = 0;
        break;
      }
      if ((nextKeyData.t - offsetTime) > frameNum) {
        iterationIndex = i;
        break;
      }
      if (i < len - 1) {
        i += 1;
      } else {
        iterationIndex = 0;
        flag = false;
      }
    }
    keyframeMetadata = this.keyframesMetadata[i] || {};

    var k;
    var kLen;
    var perc;
    var jLen;
    var j;
    var fnc;
    var nextKeyTime = nextKeyData.t - offsetTime;
    var keyTime = keyData.t - offsetTime;
    var endValue;
    if (keyData.to) {
      if (!keyframeMetadata.bezierData) {
        keyframeMetadata.bezierData = bez.buildBezierData(keyData.s, nextKeyData.s || keyData.e, keyData.to, keyData.ti);
      }
      var bezierData = keyframeMetadata.bezierData;
      if (frameNum >= nextKeyTime || frameNum < keyTime) {
        var ind = frameNum >= nextKeyTime ? bezierData.points.length - 1 : 0;
        kLen = bezierData.points[ind].point.length;
        for (k = 0; k < kLen; k += 1) {
          newValue[k] = bezierData.points[ind].point[k];
        }
        // caching._lastKeyframeIndex = -1;
      } else {
        if (keyframeMetadata.__fnct) {
          fnc = keyframeMetadata.__fnct;
        } else {
          fnc = BezierFactory.getBezierEasing(keyData.o.x, keyData.o.y, keyData.i.x, keyData.i.y, keyData.n).get;
          keyframeMetadata.__fnct = fnc;
        }
        perc = fnc((frameNum - keyTime) / (nextKeyTime - keyTime));
        var distanceInLine = bezierData.segmentLength * perc;

        var segmentPerc;
        var addedLength = (caching.lastFrame < frameNum && caching._lastKeyframeIndex === i) ? caching._lastAddedLength : 0;
        j = (caching.lastFrame < frameNum && caching._lastKeyframeIndex === i) ? caching._lastPoint : 0;
        flag = true;
        jLen = bezierData.points.length;
        while (flag) {
          addedLength += bezierData.points[j].partialLength;
          if (distanceInLine === 0 || perc === 0 || j === bezierData.points.length - 1) {
            kLen = bezierData.points[j].point.length;
            for (k = 0; k < kLen; k += 1) {
              newValue[k] = bezierData.points[j].point[k];
            }
            break;
          } else if (distanceInLine >= addedLength && distanceInLine < addedLength + bezierData.points[j + 1].partialLength) {
            segmentPerc = (distanceInLine - addedLength) / bezierData.points[j + 1].partialLength;
            kLen = bezierData.points[j].point.length;
            for (k = 0; k < kLen; k += 1) {
              newValue[k] = bezierData.points[j].point[k] + (bezierData.points[j + 1].point[k] - bezierData.points[j].point[k]) * segmentPerc;
            }
            break;
          }
          if (j < jLen - 1) {
            j += 1;
          } else {
            flag = false;
          }
        }
        caching._lastPoint = j;
        caching._lastAddedLength = addedLength - bezierData.points[j].partialLength;
        caching._lastKeyframeIndex = i;
      }
    } else {
      var outX;
      var outY;
      var inX;
      var inY;
      var keyValue;
      len = keyData.s.length;
      endValue = nextKeyData.s || keyData.e;
      if (this.sh && keyData.h !== 1) {
        if (frameNum >= nextKeyTime) {
          newValue[0] = endValue[0];
          newValue[1] = endValue[1];
          newValue[2] = endValue[2];
        } else if (frameNum <= keyTime) {
          newValue[0] = keyData.s[0];
          newValue[1] = keyData.s[1];
          newValue[2] = keyData.s[2];
        } else {
          var quatStart = createQuaternion(keyData.s);
          var quatEnd = createQuaternion(endValue);
          var time = (frameNum - keyTime) / (nextKeyTime - keyTime);
          quaternionToEuler(newValue, slerp(quatStart, quatEnd, time));
        }
      } else {
        for (i = 0; i < len; i += 1) {
          if (keyData.h !== 1) {
            if (frameNum >= nextKeyTime) {
              perc = 1;
            } else if (frameNum < keyTime) {
              perc = 0;
            } else {
              if (keyData.o.x.constructor === Array) {
                if (!keyframeMetadata.__fnct) {
                  keyframeMetadata.__fnct = [];
                }
                if (!keyframeMetadata.__fnct[i]) {
                  outX = keyData.o.x[i] === undefined ? keyData.o.x[0] : keyData.o.x[i];
                  outY = keyData.o.y[i] === undefined ? keyData.o.y[0] : keyData.o.y[i];
                  inX = keyData.i.x[i] === undefined ? keyData.i.x[0] : keyData.i.x[i];
                  inY = keyData.i.y[i] === undefined ? keyData.i.y[0] : keyData.i.y[i];
                  fnc = BezierFactory.getBezierEasing(outX, outY, inX, inY).get;
                  keyframeMetadata.__fnct[i] = fnc;
                } else {
                  fnc = keyframeMetadata.__fnct[i];
                }
              } else if (!keyframeMetadata.__fnct) {
                outX = keyData.o.x;
                outY = keyData.o.y;
                inX = keyData.i.x;
                inY = keyData.i.y;
                fnc = BezierFactory.getBezierEasing(outX, outY, inX, inY).get;
                keyData.keyframeMetadata = fnc;
              } else {
                fnc = keyframeMetadata.__fnct;
              }
              perc = fnc((frameNum - keyTime) / (nextKeyTime - keyTime));
            }
          }

          endValue = nextKeyData.s || keyData.e;
          keyValue = keyData.h === 1 ? keyData.s[i] : keyData.s[i] + (endValue[i] - keyData.s[i]) * perc;

          if (this.propType === 'multidimensional') {
            newValue[i] = keyValue;
          } else {
            newValue = keyValue;
          }
        }
      }
    }
    caching.lastIndex = iterationIndex;
    return newValue;
  }

  // based on @Toji's https://github.com/toji/gl-matrix/
  function slerp(a, b, t) {
    var out = [];
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    var aw = a[3];
    var bx = b[0];
    var by = b[1];
    var bz = b[2];
    var bw = b[3];

    var omega;
    var cosom;
    var sinom;
    var scale0;
    var scale1;

    cosom = ax * bx + ay * by + az * bz + aw * bw;
    if (cosom < 0.0) {
      cosom = -cosom;
      bx = -bx;
      by = -by;
      bz = -bz;
      bw = -bw;
    }
    if ((1.0 - cosom) > 0.000001) {
      omega = Math.acos(cosom);
      sinom = Math.sin(omega);
      scale0 = Math.sin((1.0 - t) * omega) / sinom;
      scale1 = Math.sin(t * omega) / sinom;
    } else {
      scale0 = 1.0 - t;
      scale1 = t;
    }
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;

    return out;
  }

  function quaternionToEuler(out, quat) {
    var qx = quat[0];
    var qy = quat[1];
    var qz = quat[2];
    var qw = quat[3];
    var heading = Math.atan2(2 * qy * qw - 2 * qx * qz, 1 - 2 * qy * qy - 2 * qz * qz);
    var attitude = Math.asin(2 * qx * qy + 2 * qz * qw);
    var bank = Math.atan2(2 * qx * qw - 2 * qy * qz, 1 - 2 * qx * qx - 2 * qz * qz);
    out[0] = heading / degToRads;
    out[1] = attitude / degToRads;
    out[2] = bank / degToRads;
  }

  function createQuaternion(values) {
    var heading = values[0] * degToRads;
    var attitude = values[1] * degToRads;
    var bank = values[2] * degToRads;
    var c1 = Math.cos(heading / 2);
    var c2 = Math.cos(attitude / 2);
    var c3 = Math.cos(bank / 2);
    var s1 = Math.sin(heading / 2);
    var s2 = Math.sin(attitude / 2);
    var s3 = Math.sin(bank / 2);
    var w = c1 * c2 * c3 - s1 * s2 * s3;
    var x = s1 * s2 * c3 + c1 * c2 * s3;
    var y = s1 * c2 * c3 + c1 * s2 * s3;
    var z = c1 * s2 * c3 - s1 * c2 * s3;

    return [x, y, z, w];
  }

  function getValueAtCurrentTime() {
    var frameNum = this.comp.renderedFrame - this.offsetTime;
    var initTime = this.keyframes[0].t - this.offsetTime;
    var endTime = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
    if (!(frameNum === this._caching.lastFrame || (this._caching.lastFrame !== initFrame && ((this._caching.lastFrame >= endTime && frameNum >= endTime) || (this._caching.lastFrame < initTime && frameNum < initTime))))) {
      if (this._caching.lastFrame >= frameNum) {
        this._caching._lastKeyframeIndex = -1;
        this._caching.lastIndex = 0;
      }

      var renderResult = this.interpolateValue(frameNum, this._caching);
      this.pv = renderResult;
    }
    this._caching.lastFrame = frameNum;
    return this.pv;
  }

  function setVValue(val) {
    var multipliedValue;
    if (this.propType === 'unidimensional') {
      multipliedValue = val * this.mult;
      if (mathAbs(this.v - multipliedValue) > 0.00001) {
        this.v = multipliedValue;
        this._mdf = true;
      }
    } else {
      var i = 0;
      var len = this.v.length;
      while (i < len) {
        multipliedValue = val[i] * this.mult;
        if (mathAbs(this.v[i] - multipliedValue) > 0.00001) {
          this.v[i] = multipliedValue;
          this._mdf = true;
        }
        i += 1;
      }
    }
  }

  function processEffectsSequence() {
    if (this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) {
      return;
    }
    if (this.lock) {
      this.setVValue(this.pv);
      return;
    }
    this.lock = true;
    this._mdf = this._isFirstFrame;
    var i;
    var len = this.effectsSequence.length;
    var finalValue = this.kf ? this.pv : this.data.k;
    for (i = 0; i < len; i += 1) {
      finalValue = this.effectsSequence[i](finalValue);
    }
    this.setVValue(finalValue);
    this._isFirstFrame = false;
    this.lock = false;
    this.frameId = this.elem.globalData.frameId;
  }

  function addEffect(effectFunction) {
    this.effectsSequence.push(effectFunction);
    this.container.addDynamicProperty(this);
  }

  function ValueProperty(elem, data, mult, container) {
    this.propType = 'unidimensional';
    this.mult = mult || 1;
    this.data = data;
    this.v = mult ? data.k * mult : data.k;
    this.pv = data.k;
    this._mdf = false;
    this.elem = elem;
    this.container = container;
    this.comp = elem.comp;
    this.k = false;
    this.kf = false;
    this.vel = 0;
    this.effectsSequence = [];
    this._isFirstFrame = true;
    this.getValue = processEffectsSequence;
    this.setVValue = setVValue;
    this.addEffect = addEffect;
  }

  function MultiDimensionalProperty(elem, data, mult, container) {
    this.propType = 'multidimensional';
    this.mult = mult || 1;
    this.data = data;
    this._mdf = false;
    this.elem = elem;
    this.container = container;
    this.comp = elem.comp;
    this.k = false;
    this.kf = false;
    this.frameId = -1;
    var i;
    var len = data.k.length;
    this.v = createTypedArray('float32', len);
    this.pv = createTypedArray('float32', len);
    this.vel = createTypedArray('float32', len);
    for (i = 0; i < len; i += 1) {
      this.v[i] = data.k[i] * this.mult;
      this.pv[i] = data.k[i];
    }
    this._isFirstFrame = true;
    this.effectsSequence = [];
    this.getValue = processEffectsSequence;
    this.setVValue = setVValue;
    this.addEffect = addEffect;
  }

  function KeyframedValueProperty(elem, data, mult, container) {
    this.propType = 'unidimensional';
    this.keyframes = data.k;
    this.keyframesMetadata = [];
    this.offsetTime = elem.data.st;
    this.frameId = -1;
    this._caching = {
      lastFrame: initFrame, lastIndex: 0, value: 0, _lastKeyframeIndex: -1,
    };
    this.k = true;
    this.kf = true;
    this.data = data;
    this.mult = mult || 1;
    this.elem = elem;
    this.container = container;
    this.comp = elem.comp;
    this.v = initFrame;
    this.pv = initFrame;
    this._isFirstFrame = true;
    this.getValue = processEffectsSequence;
    this.setVValue = setVValue;
    this.interpolateValue = interpolateValue;
    this.effectsSequence = [getValueAtCurrentTime.bind(this)];
    this.addEffect = addEffect;
  }

  function KeyframedMultidimensionalProperty(elem, data, mult, container) {
    this.propType = 'multidimensional';
    var i;
    var len = data.k.length;
    var s;
    var e;
    var to;
    var ti;
    for (i = 0; i < len - 1; i += 1) {
      if (data.k[i].to && data.k[i].s && data.k[i + 1] && data.k[i + 1].s) {
        s = data.k[i].s;
        e = data.k[i + 1].s;
        to = data.k[i].to;
        ti = data.k[i].ti;
        if ((s.length === 2 && !(s[0] === e[0] && s[1] === e[1]) && bez.pointOnLine2D(s[0], s[1], e[0], e[1], s[0] + to[0], s[1] + to[1]) && bez.pointOnLine2D(s[0], s[1], e[0], e[1], e[0] + ti[0], e[1] + ti[1])) || (s.length === 3 && !(s[0] === e[0] && s[1] === e[1] && s[2] === e[2]) && bez.pointOnLine3D(s[0], s[1], s[2], e[0], e[1], e[2], s[0] + to[0], s[1] + to[1], s[2] + to[2]) && bez.pointOnLine3D(s[0], s[1], s[2], e[0], e[1], e[2], e[0] + ti[0], e[1] + ti[1], e[2] + ti[2]))) {
          data.k[i].to = null;
          data.k[i].ti = null;
        }
        if (s[0] === e[0] && s[1] === e[1] && to[0] === 0 && to[1] === 0 && ti[0] === 0 && ti[1] === 0) {
          if (s.length === 2 || (s[2] === e[2] && to[2] === 0 && ti[2] === 0)) {
            data.k[i].to = null;
            data.k[i].ti = null;
          }
        }
      }
    }
    this.effectsSequence = [getValueAtCurrentTime.bind(this)];
    this.data = data;
    this.keyframes = data.k;
    this.keyframesMetadata = [];
    this.offsetTime = elem.data.st;
    this.k = true;
    this.kf = true;
    this._isFirstFrame = true;
    this.mult = mult || 1;
    this.elem = elem;
    this.container = container;
    this.comp = elem.comp;
    this.getValue = processEffectsSequence;
    this.setVValue = setVValue;
    this.interpolateValue = interpolateValue;
    this.frameId = -1;
    var arrLen = data.k[0].s.length;
    this.v = createTypedArray('float32', arrLen);
    this.pv = createTypedArray('float32', arrLen);
    for (i = 0; i < arrLen; i += 1) {
      this.v[i] = initFrame;
      this.pv[i] = initFrame;
    }
    this._caching = { lastFrame: initFrame, lastIndex: 0, value: createTypedArray('float32', arrLen) };
    this.addEffect = addEffect;
  }

  function getProp(elem, data, type, mult, container) {
    var p;
    if (!data.k.length) {
      p = new ValueProperty(elem, data, mult, container);
    } else if (typeof (data.k[0]) === 'number') {
      p = new MultiDimensionalProperty(elem, data, mult, container);
    } else {
      switch (type) {
        case 0:
          p = new KeyframedValueProperty(elem, data, mult, container);
          break;
        case 1:
          p = new KeyframedMultidimensionalProperty(elem, data, mult, container);
          break;
        default:
          break;
      }
    }
    if (p.effectsSequence.length) {
      container.addDynamicProperty(p);
    }
    return p;
  }

  var ob = {
    getProp: getProp,
  };
  return ob;
}());

/* global Matrix, degToRads, PropertyFactory, extendPrototype, DynamicPropertyContainer */
/* exported TransformPropertyFactory */

var TransformPropertyFactory = (function () {
  var defaultVector = [0, 0];

  function applyToMatrix(mat) {
    var _mdf = this._mdf;
    this.iterateDynamicProperties();
    this._mdf = this._mdf || _mdf;
    if (this.a) {
      mat.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
    }
    if (this.s) {
      mat.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
    }
    if (this.sk) {
      mat.skewFromAxis(-this.sk.v, this.sa.v);
    }
    if (this.r) {
      mat.rotate(-this.r.v);
    } else {
      mat.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2])
        .rotateY(this.or.v[1])
        .rotateX(this.or.v[0]);
    }
    if (this.data.p.s) {
      if (this.data.p.z) {
        mat.translate(this.px.v, this.py.v, -this.pz.v);
      } else {
        mat.translate(this.px.v, this.py.v, 0);
      }
    } else {
      mat.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
    }
  }
  function processKeys(forceRender) {
    if (this.elem.globalData.frameId === this.frameId) {
      return;
    }
    if (this._isDirty) {
      this.precalculateMatrix();
      this._isDirty = false;
    }

    this.iterateDynamicProperties();

    if (this._mdf || forceRender) {
      var frameRate;
      this.v.cloneFromProps(this.pre.props);
      if (this.appliedTransformations < 1) {
        this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
      }
      if (this.appliedTransformations < 2) {
        this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
      }
      if (this.sk && this.appliedTransformations < 3) {
        this.v.skewFromAxis(-this.sk.v, this.sa.v);
      }
      if (this.r && this.appliedTransformations < 4) {
        this.v.rotate(-this.r.v);
      } else if (!this.r && this.appliedTransformations < 4) {
        this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2])
          .rotateY(this.or.v[1])
          .rotateX(this.or.v[0]);
      }
      if (this.autoOriented) {
        var v1;
        var v2;
        frameRate = this.elem.globalData.frameRate;
        if (this.p && this.p.keyframes && this.p.getValueAtTime) {
          if (this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t) {
            v1 = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / frameRate, 0);
            v2 = this.p.getValueAtTime(this.p.keyframes[0].t / frameRate, 0);
          } else if (this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t) {
            v1 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t / frameRate), 0);
            v2 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / frameRate, 0);
          } else {
            v1 = this.p.pv;
            v2 = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / frameRate, this.p.offsetTime);
          }
        } else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
          v1 = [];
          v2 = [];
          var px = this.px;
          var py = this.py;
          if (px._caching.lastFrame + px.offsetTime <= px.keyframes[0].t) {
            v1[0] = px.getValueAtTime((px.keyframes[0].t + 0.01) / frameRate, 0);
            v1[1] = py.getValueAtTime((py.keyframes[0].t + 0.01) / frameRate, 0);
            v2[0] = px.getValueAtTime((px.keyframes[0].t) / frameRate, 0);
            v2[1] = py.getValueAtTime((py.keyframes[0].t) / frameRate, 0);
          } else if (px._caching.lastFrame + px.offsetTime >= px.keyframes[px.keyframes.length - 1].t) {
            v1[0] = px.getValueAtTime((px.keyframes[px.keyframes.length - 1].t / frameRate), 0);
            v1[1] = py.getValueAtTime((py.keyframes[py.keyframes.length - 1].t / frameRate), 0);
            v2[0] = px.getValueAtTime((px.keyframes[px.keyframes.length - 1].t - 0.01) / frameRate, 0);
            v2[1] = py.getValueAtTime((py.keyframes[py.keyframes.length - 1].t - 0.01) / frameRate, 0);
          } else {
            v1 = [px.pv, py.pv];
            v2[0] = px.getValueAtTime((px._caching.lastFrame + px.offsetTime - 0.01) / frameRate, px.offsetTime);
            v2[1] = py.getValueAtTime((py._caching.lastFrame + py.offsetTime - 0.01) / frameRate, py.offsetTime);
          }
        } else {
          v2 = defaultVector;
          v1 = v2;
        }
        this.v.rotate(-Math.atan2(v1[1] - v2[1], v1[0] - v2[0]));
      }
      if (this.data.p && this.data.p.s) {
        if (this.data.p.z) {
          this.v.translate(this.px.v, this.py.v, -this.pz.v);
        } else {
          this.v.translate(this.px.v, this.py.v, 0);
        }
      } else {
        this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }
    }
    this.frameId = this.elem.globalData.frameId;
  }

  function precalculateMatrix() {
    if (!this.a.k) {
      this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
      this.appliedTransformations = 1;
    } else {
      return;
    }
    if (!this.s.effectsSequence.length) {
      this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
      this.appliedTransformations = 2;
    } else {
      return;
    }
    if (this.sk) {
      if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) {
        this.pre.skewFromAxis(-this.sk.v, this.sa.v);
        this.appliedTransformations = 3;
      } else {
        return;
      }
    }
    if (this.r) {
      if (!this.r.effectsSequence.length) {
        this.pre.rotate(-this.r.v);
        this.appliedTransformations = 4;
      }
    } else if (!this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length) {
      this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2])
        .rotateY(this.or.v[1])
        .rotateX(this.or.v[0]);
      this.appliedTransformations = 4;
    }
  }

  function autoOrient() {
    //
    // var prevP = this.getValueAtTime();
  }

  function addDynamicProperty(prop) {
    this._addDynamicProperty(prop);
    this.elem.addDynamicProperty(prop);
    this._isDirty = true;
  }

  function TransformProperty(elem, data, container) {
    this.elem = elem;
    this.frameId = -1;
    this.propType = 'transform';
    this.data = data;
    this.v = new Matrix();
    // Precalculated matrix with non animated properties
    this.pre = new Matrix();
    this.appliedTransformations = 0;
    this.initDynamicPropertyContainer(container || elem);
    if (data.p && data.p.s) {
      this.px = PropertyFactory.getProp(elem, data.p.x, 0, 0, this);
      this.py = PropertyFactory.getProp(elem, data.p.y, 0, 0, this);
      if (data.p.z) {
        this.pz = PropertyFactory.getProp(elem, data.p.z, 0, 0, this);
      }
    } else {
      this.p = PropertyFactory.getProp(elem, data.p || { k: [0, 0, 0] }, 1, 0, this);
    }
    if (data.rx) {
      this.rx = PropertyFactory.getProp(elem, data.rx, 0, degToRads, this);
      this.ry = PropertyFactory.getProp(elem, data.ry, 0, degToRads, this);
      this.rz = PropertyFactory.getProp(elem, data.rz, 0, degToRads, this);
      if (data.or.k[0].ti) {
        var i;
        var len = data.or.k.length;
        for (i = 0; i < len; i += 1) {
          data.or.k[i].to = null;
          data.or.k[i].ti = null;
        }
      }
      this.or = PropertyFactory.getProp(elem, data.or, 1, degToRads, this);
      // sh Indicates it needs to be capped between -180 and 180
      this.or.sh = true;
    } else {
      this.r = PropertyFactory.getProp(elem, data.r || { k: 0 }, 0, degToRads, this);
    }
    if (data.sk) {
      this.sk = PropertyFactory.getProp(elem, data.sk, 0, degToRads, this);
      this.sa = PropertyFactory.getProp(elem, data.sa, 0, degToRads, this);
    }
    this.a = PropertyFactory.getProp(elem, data.a || { k: [0, 0, 0] }, 1, 0, this);
    this.s = PropertyFactory.getProp(elem, data.s || { k: [100, 100, 100] }, 1, 0.01, this);
    // Opacity is not part of the transform properties, that's why it won't use this.dynamicProperties. That way transforms won't get updated if opacity changes.
    if (data.o) {
      this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, elem);
    } else {
      this.o = { _mdf: false, v: 1 };
    }
    this._isDirty = true;
    if (!this.dynamicProperties.length) {
      this.getValue(true);
    }
  }

  TransformProperty.prototype = {
    applyToMatrix: applyToMatrix,
    getValue: processKeys,
    precalculateMatrix: precalculateMatrix,
    autoOrient: autoOrient,
  };

  extendPrototype([DynamicPropertyContainer], TransformProperty);
  TransformProperty.prototype.addDynamicProperty = addDynamicProperty;
  TransformProperty.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;

  function getTransformProperty(elem, data, container) {
    return new TransformProperty(elem, data, container);
  }

  return {
    getTransformProperty: getTransformProperty,
  };
}());

/* global createSizedArray, createSizedArray, pointPool */

function ShapePath() {
  this.c = false;
  this._length = 0;
  this._maxLength = 8;
  this.v = createSizedArray(this._maxLength);
  this.o = createSizedArray(this._maxLength);
  this.i = createSizedArray(this._maxLength);
}

ShapePath.prototype.setPathData = function (closed, len) {
  this.c = closed;
  this.setLength(len);
  var i = 0;
  while (i < len) {
    this.v[i] = pointPool.newElement();
    this.o[i] = pointPool.newElement();
    this.i[i] = pointPool.newElement();
    i += 1;
  }
};

ShapePath.prototype.setLength = function (len) {
  while (this._maxLength < len) {
    this.doubleArrayLength();
  }
  this._length = len;
};

ShapePath.prototype.doubleArrayLength = function () {
  this.v = this.v.concat(createSizedArray(this._maxLength));
  this.i = this.i.concat(createSizedArray(this._maxLength));
  this.o = this.o.concat(createSizedArray(this._maxLength));
  this._maxLength *= 2;
};

ShapePath.prototype.setXYAt = function (x, y, type, pos, replace) {
  var arr;
  this._length = Math.max(this._length, pos + 1);
  if (this._length >= this._maxLength) {
    this.doubleArrayLength();
  }
  switch (type) {
    case 'v':
      arr = this.v;
      break;
    case 'i':
      arr = this.i;
      break;
    case 'o':
      arr = this.o;
      break;
    default:
      arr = [];
      break;
  }
  if (!arr[pos] || (arr[pos] && !replace)) {
    arr[pos] = pointPool.newElement();
  }
  arr[pos][0] = x;
  arr[pos][1] = y;
};

ShapePath.prototype.setTripleAt = function (vX, vY, oX, oY, iX, iY, pos, replace) {
  this.setXYAt(vX, vY, 'v', pos, replace);
  this.setXYAt(oX, oY, 'o', pos, replace);
  this.setXYAt(iX, iY, 'i', pos, replace);
};

ShapePath.prototype.reverse = function () {
  var newPath = new ShapePath();
  newPath.setPathData(this.c, this._length);
  var vertices = this.v;
  var outPoints = this.o;
  var inPoints = this.i;
  var init = 0;
  if (this.c) {
    newPath.setTripleAt(vertices[0][0], vertices[0][1], inPoints[0][0], inPoints[0][1], outPoints[0][0], outPoints[0][1], 0, false);
    init = 1;
  }
  var cnt = this._length - 1;
  var len = this._length;

  var i;
  for (i = init; i < len; i += 1) {
    newPath.setTripleAt(vertices[cnt][0], vertices[cnt][1], inPoints[cnt][0], inPoints[cnt][1], outPoints[cnt][0], outPoints[cnt][1], i, false);
    cnt -= 1;
  }
  return newPath;
};

/* global extendPrototype, roundCorner, BezierFactory, shapePool, degToRads,
  shapeCollectionPool, PropertyFactory, bmMin, DynamicPropertyContainer */
/* exported ShapePropertyFactory */

var ShapePropertyFactory = (function () {
  var initFrame = -999999;

  function interpolateShape(frameNum, previousValue, caching) {
    var iterationIndex = caching.lastIndex;
    var keyPropS;
    var keyPropE;
    var isHold;
    var j;
    var k;
    var jLen;
    var kLen;
    var perc;
    var vertexValue;
    var kf = this.keyframes;
    if (frameNum < kf[0].t - this.offsetTime) {
      keyPropS = kf[0].s[0];
      isHold = true;
      iterationIndex = 0;
    } else if (frameNum >= kf[kf.length - 1].t - this.offsetTime) {
      keyPropS = kf[kf.length - 1].s ? kf[kf.length - 1].s[0] : kf[kf.length - 2].e[0];
      /* if(kf[kf.length - 1].s){
                keyPropS = kf[kf.length - 1].s[0];
            }else{
                keyPropS = kf[kf.length - 2].e[0];
            } */
      isHold = true;
    } else {
      var i = iterationIndex;
      var len = kf.length - 1;
      var flag = true;
      var keyData;
      var nextKeyData;
      var keyframeMetadata;
      while (flag) {
        keyData = kf[i];
        nextKeyData = kf[i + 1];
        if ((nextKeyData.t - this.offsetTime) > frameNum) {
          break;
        }
        if (i < len - 1) {
          i += 1;
        } else {
          flag = false;
        }
      }
      keyframeMetadata = this.keyframesMetadata[i] || {};
      isHold = keyData.h === 1;
      iterationIndex = i;
      if (!isHold) {
        if (frameNum >= nextKeyData.t - this.offsetTime) {
          perc = 1;
        } else if (frameNum < keyData.t - this.offsetTime) {
          perc = 0;
        } else {
          var fnc;
          if (keyframeMetadata.__fnct) {
            fnc = keyframeMetadata.__fnct;
          } else {
            fnc = BezierFactory.getBezierEasing(keyData.o.x, keyData.o.y, keyData.i.x, keyData.i.y).get;
            keyframeMetadata.__fnct = fnc;
          }
          perc = fnc((frameNum - (keyData.t - this.offsetTime)) / ((nextKeyData.t - this.offsetTime) - (keyData.t - this.offsetTime)));
        }
        keyPropE = nextKeyData.s ? nextKeyData.s[0] : keyData.e[0];
      }
      keyPropS = keyData.s[0];
    }
    jLen = previousValue._length;
    kLen = keyPropS.i[0].length;
    caching.lastIndex = iterationIndex;

    for (j = 0; j < jLen; j += 1) {
      for (k = 0; k < kLen; k += 1) {
        vertexValue = isHold ? keyPropS.i[j][k] : keyPropS.i[j][k] + (keyPropE.i[j][k] - keyPropS.i[j][k]) * perc;
        previousValue.i[j][k] = vertexValue;
        vertexValue = isHold ? keyPropS.o[j][k] : keyPropS.o[j][k] + (keyPropE.o[j][k] - keyPropS.o[j][k]) * perc;
        previousValue.o[j][k] = vertexValue;
        vertexValue = isHold ? keyPropS.v[j][k] : keyPropS.v[j][k] + (keyPropE.v[j][k] - keyPropS.v[j][k]) * perc;
        previousValue.v[j][k] = vertexValue;
      }
    }
  }

  function interpolateShapeCurrentTime() {
    var frameNum = this.comp.renderedFrame - this.offsetTime;
    var initTime = this.keyframes[0].t - this.offsetTime;
    var endTime = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
    var lastFrame = this._caching.lastFrame;
    if (!(lastFrame !== initFrame && ((lastFrame < initTime && frameNum < initTime) || (lastFrame > endTime && frameNum > endTime)))) {
      /// /
      this._caching.lastIndex = lastFrame < frameNum ? this._caching.lastIndex : 0;
      this.interpolateShape(frameNum, this.pv, this._caching);
      /// /
    }
    this._caching.lastFrame = frameNum;
    return this.pv;
  }

  function resetShape() {
    this.paths = this.localShapeCollection;
  }

  function shapesEqual(shape1, shape2) {
    if (shape1._length !== shape2._length || shape1.c !== shape2.c) {
      return false;
    }
    var i;
    var len = shape1._length;
    for (i = 0; i < len; i += 1) {
      if (shape1.v[i][0] !== shape2.v[i][0]
            || shape1.v[i][1] !== shape2.v[i][1]
            || shape1.o[i][0] !== shape2.o[i][0]
            || shape1.o[i][1] !== shape2.o[i][1]
            || shape1.i[i][0] !== shape2.i[i][0]
            || shape1.i[i][1] !== shape2.i[i][1]) {
        return false;
      }
    }
    return true;
  }

  function setVValue(newPath) {
    if (!shapesEqual(this.v, newPath)) {
      this.v = shapePool.clone(newPath);
      this.localShapeCollection.releaseShapes();
      this.localShapeCollection.addShape(this.v);
      this._mdf = true;
      this.paths = this.localShapeCollection;
    }
  }

  function processEffectsSequence() {
    if (this.elem.globalData.frameId === this.frameId) {
      return;
    } if (!this.effectsSequence.length) {
      this._mdf = false;
      return;
    }
    if (this.lock) {
      this.setVValue(this.pv);
      return;
    }
    this.lock = true;
    this._mdf = false;
    var finalValue;
    if (this.kf) {
      finalValue = this.pv;
    } else if (this.data.ks) {
      finalValue = this.data.ks.k;
    } else {
      finalValue = this.data.pt.k;
    }
    var i;
    var len = this.effectsSequence.length;
    for (i = 0; i < len; i += 1) {
      finalValue = this.effectsSequence[i](finalValue);
    }
    this.setVValue(finalValue);
    this.lock = false;
    this.frameId = this.elem.globalData.frameId;
  }

  function ShapeProperty(elem, data, type) {
    this.propType = 'shape';
    this.comp = elem.comp;
    this.container = elem;
    this.elem = elem;
    this.data = data;
    this.k = false;
    this.kf = false;
    this._mdf = false;
    var pathData = type === 3 ? data.pt.k : data.ks.k;
    this.v = shapePool.clone(pathData);
    this.pv = shapePool.clone(this.v);
    this.localShapeCollection = shapeCollectionPool.newShapeCollection();
    this.paths = this.localShapeCollection;
    this.paths.addShape(this.v);
    this.reset = resetShape;
    this.effectsSequence = [];
  }

  function addEffect(effectFunction) {
    this.effectsSequence.push(effectFunction);
    this.container.addDynamicProperty(this);
  }

  ShapeProperty.prototype.interpolateShape = interpolateShape;
  ShapeProperty.prototype.getValue = processEffectsSequence;
  ShapeProperty.prototype.setVValue = setVValue;
  ShapeProperty.prototype.addEffect = addEffect;

  function KeyframedShapeProperty(elem, data, type) {
    this.propType = 'shape';
    this.comp = elem.comp;
    this.elem = elem;
    this.container = elem;
    this.offsetTime = elem.data.st;
    this.keyframes = type === 3 ? data.pt.k : data.ks.k;
    this.keyframesMetadata = [];
    this.k = true;
    this.kf = true;
    var len = this.keyframes[0].s[0].i.length;
    this.v = shapePool.newElement();
    this.v.setPathData(this.keyframes[0].s[0].c, len);
    this.pv = shapePool.clone(this.v);
    this.localShapeCollection = shapeCollectionPool.newShapeCollection();
    this.paths = this.localShapeCollection;
    this.paths.addShape(this.v);
    this.lastFrame = initFrame;
    this.reset = resetShape;
    this._caching = { lastFrame: initFrame, lastIndex: 0 };
    this.effectsSequence = [interpolateShapeCurrentTime.bind(this)];
  }
  KeyframedShapeProperty.prototype.getValue = processEffectsSequence;
  KeyframedShapeProperty.prototype.interpolateShape = interpolateShape;
  KeyframedShapeProperty.prototype.setVValue = setVValue;
  KeyframedShapeProperty.prototype.addEffect = addEffect;

  var EllShapeProperty = (function () {
    var cPoint = roundCorner;

    function EllShapePropertyFactory(elem, data) {
      /* this.v = {
                v: createSizedArray(4),
                i: createSizedArray(4),
                o: createSizedArray(4),
                c: true
            }; */
      this.v = shapePool.newElement();
      this.v.setPathData(true, 4);
      this.localShapeCollection = shapeCollectionPool.newShapeCollection();
      this.paths = this.localShapeCollection;
      this.localShapeCollection.addShape(this.v);
      this.d = data.d;
      this.elem = elem;
      this.comp = elem.comp;
      this.frameId = -1;
      this.initDynamicPropertyContainer(elem);
      this.p = PropertyFactory.getProp(elem, data.p, 1, 0, this);
      this.s = PropertyFactory.getProp(elem, data.s, 1, 0, this);
      if (this.dynamicProperties.length) {
        this.k = true;
      } else {
        this.k = false;
        this.convertEllToPath();
      }
    }

    EllShapePropertyFactory.prototype = {
      reset: resetShape,
      getValue: function () {
        if (this.elem.globalData.frameId === this.frameId) {
          return;
        }
        this.frameId = this.elem.globalData.frameId;
        this.iterateDynamicProperties();

        if (this._mdf) {
          this.convertEllToPath();
        }
      },
      convertEllToPath: function () {
        var p0 = this.p.v[0];
        var p1 = this.p.v[1];
        var s0 = this.s.v[0] / 2;
        var s1 = this.s.v[1] / 2;
        var _cw = this.d !== 3;
        var _v = this.v;
        _v.v[0][0] = p0;
        _v.v[0][1] = p1 - s1;
        _v.v[1][0] = _cw ? p0 + s0 : p0 - s0;
        _v.v[1][1] = p1;
        _v.v[2][0] = p0;
        _v.v[2][1] = p1 + s1;
        _v.v[3][0] = _cw ? p0 - s0 : p0 + s0;
        _v.v[3][1] = p1;
        _v.i[0][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
        _v.i[0][1] = p1 - s1;
        _v.i[1][0] = _cw ? p0 + s0 : p0 - s0;
        _v.i[1][1] = p1 - s1 * cPoint;
        _v.i[2][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
        _v.i[2][1] = p1 + s1;
        _v.i[3][0] = _cw ? p0 - s0 : p0 + s0;
        _v.i[3][1] = p1 + s1 * cPoint;
        _v.o[0][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
        _v.o[0][1] = p1 - s1;
        _v.o[1][0] = _cw ? p0 + s0 : p0 - s0;
        _v.o[1][1] = p1 + s1 * cPoint;
        _v.o[2][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
        _v.o[2][1] = p1 + s1;
        _v.o[3][0] = _cw ? p0 - s0 : p0 + s0;
        _v.o[3][1] = p1 - s1 * cPoint;
      },
    };

    extendPrototype([DynamicPropertyContainer], EllShapePropertyFactory);

    return EllShapePropertyFactory;
  }());

  var StarShapeProperty = (function () {
    function StarShapePropertyFactory(elem, data) {
      this.v = shapePool.newElement();
      this.v.setPathData(true, 0);
      this.elem = elem;
      this.comp = elem.comp;
      this.data = data;
      this.frameId = -1;
      this.d = data.d;
      this.initDynamicPropertyContainer(elem);
      if (data.sy === 1) {
        this.ir = PropertyFactory.getProp(elem, data.ir, 0, 0, this);
        this.is = PropertyFactory.getProp(elem, data.is, 0, 0.01, this);
        this.convertToPath = this.convertStarToPath;
      } else {
        this.convertToPath = this.convertPolygonToPath;
      }
      this.pt = PropertyFactory.getProp(elem, data.pt, 0, 0, this);
      this.p = PropertyFactory.getProp(elem, data.p, 1, 0, this);
      this.r = PropertyFactory.getProp(elem, data.r, 0, degToRads, this);
      this.or = PropertyFactory.getProp(elem, data.or, 0, 0, this);
      this.os = PropertyFactory.getProp(elem, data.os, 0, 0.01, this);
      this.localShapeCollection = shapeCollectionPool.newShapeCollection();
      this.localShapeCollection.addShape(this.v);
      this.paths = this.localShapeCollection;
      if (this.dynamicProperties.length) {
        this.k = true;
      } else {
        this.k = false;
        this.convertToPath();
      }
    }

    StarShapePropertyFactory.prototype = {
      reset: resetShape,
      getValue: function () {
        if (this.elem.globalData.frameId === this.frameId) {
          return;
        }
        this.frameId = this.elem.globalData.frameId;
        this.iterateDynamicProperties();
        if (this._mdf) {
          this.convertToPath();
        }
      },
      convertStarToPath: function () {
        var numPts = Math.floor(this.pt.v) * 2;
        var angle = (Math.PI * 2) / numPts;
        /* this.v.v.length = numPts;
                this.v.i.length = numPts;
                this.v.o.length = numPts; */
        var longFlag = true;
        var longRad = this.or.v;
        var shortRad = this.ir.v;
        var longRound = this.os.v;
        var shortRound = this.is.v;
        var longPerimSegment = (2 * Math.PI * longRad) / (numPts * 2);
        var shortPerimSegment = (2 * Math.PI * shortRad) / (numPts * 2);
        var i;
        var rad;
        var roundness;
        var perimSegment;
        var currentAng = -Math.PI / 2;
        currentAng += this.r.v;
        var dir = this.data.d === 3 ? -1 : 1;
        this.v._length = 0;
        for (i = 0; i < numPts; i += 1) {
          rad = longFlag ? longRad : shortRad;
          roundness = longFlag ? longRound : shortRound;
          perimSegment = longFlag ? longPerimSegment : shortPerimSegment;
          var x = rad * Math.cos(currentAng);
          var y = rad * Math.sin(currentAng);
          var ox = x === 0 && y === 0 ? 0 : y / Math.sqrt(x * x + y * y);
          var oy = x === 0 && y === 0 ? 0 : -x / Math.sqrt(x * x + y * y);
          x += +this.p.v[0];
          y += +this.p.v[1];
          this.v.setTripleAt(x, y, x - ox * perimSegment * roundness * dir, y - oy * perimSegment * roundness * dir, x + ox * perimSegment * roundness * dir, y + oy * perimSegment * roundness * dir, i, true);

          /* this.v.v[i] = [x,y];
                    this.v.i[i] = [x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir];
                    this.v.o[i] = [x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir];
                    this.v._length = numPts; */
          longFlag = !longFlag;
          currentAng += angle * dir;
        }
      },
      convertPolygonToPath: function () {
        var numPts = Math.floor(this.pt.v);
        var angle = (Math.PI * 2) / numPts;
        var rad = this.or.v;
        var roundness = this.os.v;
        var perimSegment = (2 * Math.PI * rad) / (numPts * 4);
        var i;
        var currentAng = -Math.PI * 0.5;
        var dir = this.data.d === 3 ? -1 : 1;
        currentAng += this.r.v;
        this.v._length = 0;
        for (i = 0; i < numPts; i += 1) {
          var x = rad * Math.cos(currentAng);
          var y = rad * Math.sin(currentAng);
          var ox = x === 0 && y === 0 ? 0 : y / Math.sqrt(x * x + y * y);
          var oy = x === 0 && y === 0 ? 0 : -x / Math.sqrt(x * x + y * y);
          x += +this.p.v[0];
          y += +this.p.v[1];
          this.v.setTripleAt(x, y, x - ox * perimSegment * roundness * dir, y - oy * perimSegment * roundness * dir, x + ox * perimSegment * roundness * dir, y + oy * perimSegment * roundness * dir, i, true);
          currentAng += angle * dir;
        }
        this.paths.length = 0;
        this.paths[0] = this.v;
      },

    };
    extendPrototype([DynamicPropertyContainer], StarShapePropertyFactory);

    return StarShapePropertyFactory;
  }());

  var RectShapeProperty = (function () {
    function RectShapePropertyFactory(elem, data) {
      this.v = shapePool.newElement();
      this.v.c = true;
      this.localShapeCollection = shapeCollectionPool.newShapeCollection();
      this.localShapeCollection.addShape(this.v);
      this.paths = this.localShapeCollection;
      this.elem = elem;
      this.comp = elem.comp;
      this.frameId = -1;
      this.d = data.d;
      this.initDynamicPropertyContainer(elem);
      this.p = PropertyFactory.getProp(elem, data.p, 1, 0, this);
      this.s = PropertyFactory.getProp(elem, data.s, 1, 0, this);
      this.r = PropertyFactory.getProp(elem, data.r, 0, 0, this);
      if (this.dynamicProperties.length) {
        this.k = true;
      } else {
        this.k = false;
        this.convertRectToPath();
      }
    }

    RectShapePropertyFactory.prototype = {
      convertRectToPath: function () {
        var p0 = this.p.v[0];
        var p1 = this.p.v[1];
        var v0 = this.s.v[0] / 2;
        var v1 = this.s.v[1] / 2;
        var round = bmMin(v0, v1, this.r.v);
        var cPoint = round * (1 - roundCorner);
        this.v._length = 0;

        if (this.d === 2 || this.d === 1) {
          this.v.setTripleAt(p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + cPoint, 0, true);
          this.v.setTripleAt(p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - cPoint, p0 + v0, p1 + v1 - round, 1, true);
          if (round !== 0) {
            this.v.setTripleAt(p0 + v0 - round, p1 + v1, p0 + v0 - round, p1 + v1, p0 + v0 - cPoint, p1 + v1, 2, true);
            this.v.setTripleAt(p0 - v0 + round, p1 + v1, p0 - v0 + cPoint, p1 + v1, p0 - v0 + round, p1 + v1, 3, true);
            this.v.setTripleAt(p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - cPoint, 4, true);
            this.v.setTripleAt(p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + cPoint, p0 - v0, p1 - v1 + round, 5, true);
            this.v.setTripleAt(p0 - v0 + round, p1 - v1, p0 - v0 + round, p1 - v1, p0 - v0 + cPoint, p1 - v1, 6, true);
            this.v.setTripleAt(p0 + v0 - round, p1 - v1, p0 + v0 - cPoint, p1 - v1, p0 + v0 - round, p1 - v1, 7, true);
          } else {
            this.v.setTripleAt(p0 - v0, p1 + v1, p0 - v0 + cPoint, p1 + v1, p0 - v0, p1 + v1, 2);
            this.v.setTripleAt(p0 - v0, p1 - v1, p0 - v0, p1 - v1 + cPoint, p0 - v0, p1 - v1, 3);
          }
        } else {
          this.v.setTripleAt(p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + cPoint, p0 + v0, p1 - v1 + round, 0, true);
          if (round !== 0) {
            this.v.setTripleAt(p0 + v0 - round, p1 - v1, p0 + v0 - round, p1 - v1, p0 + v0 - cPoint, p1 - v1, 1, true);
            this.v.setTripleAt(p0 - v0 + round, p1 - v1, p0 - v0 + cPoint, p1 - v1, p0 - v0 + round, p1 - v1, 2, true);
            this.v.setTripleAt(p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + cPoint, 3, true);
            this.v.setTripleAt(p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - cPoint, p0 - v0, p1 + v1 - round, 4, true);
            this.v.setTripleAt(p0 - v0 + round, p1 + v1, p0 - v0 + round, p1 + v1, p0 - v0 + cPoint, p1 + v1, 5, true);
            this.v.setTripleAt(p0 + v0 - round, p1 + v1, p0 + v0 - cPoint, p1 + v1, p0 + v0 - round, p1 + v1, 6, true);
            this.v.setTripleAt(p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - cPoint, 7, true);
          } else {
            this.v.setTripleAt(p0 - v0, p1 - v1, p0 - v0 + cPoint, p1 - v1, p0 - v0, p1 - v1, 1, true);
            this.v.setTripleAt(p0 - v0, p1 + v1, p0 - v0, p1 + v1 - cPoint, p0 - v0, p1 + v1, 2, true);
            this.v.setTripleAt(p0 + v0, p1 + v1, p0 + v0 - cPoint, p1 + v1, p0 + v0, p1 + v1, 3, true);
          }
        }
      },
      getValue: function () {
        if (this.elem.globalData.frameId === this.frameId) {
          return;
        }
        this.frameId = this.elem.globalData.frameId;
        this.iterateDynamicProperties();
        if (this._mdf) {
          this.convertRectToPath();
        }
      },
      reset: resetShape,
    };
    extendPrototype([DynamicPropertyContainer], RectShapePropertyFactory);

    return RectShapePropertyFactory;
  }());

  function getShapeProp(elem, data, type) {
    var prop;
    if (type === 3 || type === 4) {
      var dataProp = type === 3 ? data.pt : data.ks;
      var keys = dataProp.k;
      if (keys.length) {
        prop = new KeyframedShapeProperty(elem, data, type);
      } else {
        prop = new ShapeProperty(elem, data, type);
      }
    } else if (type === 5) {
      prop = new RectShapeProperty(elem, data);
    } else if (type === 6) {
      prop = new EllShapeProperty(elem, data);
    } else if (type === 7) {
      prop = new StarShapeProperty(elem, data);
    }
    if (prop.k) {
      elem.addDynamicProperty(prop);
    }
    return prop;
  }

  function getConstructorFunction() {
    return ShapeProperty;
  }

  function getKeyframedConstructorFunction() {
    return KeyframedShapeProperty;
  }

  var ob = {};
  ob.getShapeProp = getShapeProp;
  ob.getConstructorFunction = getConstructorFunction;
  ob.getKeyframedConstructorFunction = getKeyframedConstructorFunction;
  return ob;
}());

/* global shapeCollectionPool, initialDefaultFrame, extendPrototype, DynamicPropertyContainer */
/* exported ShapeModifiers */

var ShapeModifiers = (function () {
  var ob = {};
  var modifiers = {};
  ob.registerModifier = registerModifier;
  ob.getModifier = getModifier;

  function registerModifier(nm, factory) {
    if (!modifiers[nm]) {
      modifiers[nm] = factory;
    }
  }

  function getModifier(nm, elem, data) {
    return new modifiers[nm](elem, data);
  }

  return ob;
}());

function ShapeModifier() {}
ShapeModifier.prototype.initModifierProperties = function () {};
ShapeModifier.prototype.addShapeToModifier = function () {};
ShapeModifier.prototype.addShape = function (data) {
  if (!this.closed) {
    // Adding shape to dynamic properties. It covers the case where a shape has no effects applied, to reset it's _mdf state on every tick.
    data.sh.container.addDynamicProperty(data.sh);
    var shapeData = { shape: data.sh, data: data, localShapeCollection: shapeCollectionPool.newShapeCollection() };
    this.shapes.push(shapeData);
    this.addShapeToModifier(shapeData);
    if (this._isAnimated) {
      data.setAsAnimated();
    }
  }
};
ShapeModifier.prototype.init = function (elem, data) {
  this.shapes = [];
  this.elem = elem;
  this.initDynamicPropertyContainer(elem);
  this.initModifierProperties(elem, data);
  this.frameId = initialDefaultFrame;
  this.closed = false;
  this.k = false;
  if (this.dynamicProperties.length) {
    this.k = true;
  } else {
    this.getValue(true);
  }
};
ShapeModifier.prototype.processKeys = function () {
  if (this.elem.globalData.frameId === this.frameId) {
    return;
  }
  this.frameId = this.elem.globalData.frameId;
  this.iterateDynamicProperties();
};

extendPrototype([DynamicPropertyContainer], ShapeModifier);

/* global extendPrototype, ShapeModifier, PropertyFactory, segmentsLengthPool, bez, shapePool, ShapeModifiers */

function TrimModifier() {
}
extendPrototype([ShapeModifier], TrimModifier);
TrimModifier.prototype.initModifierProperties = function (elem, data) {
  this.s = PropertyFactory.getProp(elem, data.s, 0, 0.01, this);
  this.e = PropertyFactory.getProp(elem, data.e, 0, 0.01, this);
  this.o = PropertyFactory.getProp(elem, data.o, 0, 0, this);
  this.sValue = 0;
  this.eValue = 0;
  this.getValue = this.processKeys;
  this.m = data.m;
  this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
};

TrimModifier.prototype.addShapeToModifier = function (shapeData) {
  shapeData.pathsData = [];
};

TrimModifier.prototype.calculateShapeEdges = function (s, e, shapeLength, addedLength, totalModifierLength) {
  var segments = [];
  if (e <= 1) {
    segments.push({
      s: s,
      e: e,
    });
  } else if (s >= 1) {
    segments.push({
      s: s - 1,
      e: e - 1,
    });
  } else {
    segments.push({
      s: s,
      e: 1,
    });
    segments.push({
      s: 0,
      e: e - 1,
    });
  }
  var shapeSegments = [];
  var i;
  var len = segments.length;
  var segmentOb;
  for (i = 0; i < len; i += 1) {
    segmentOb = segments[i];
    if (!(segmentOb.e * totalModifierLength < addedLength || segmentOb.s * totalModifierLength > addedLength + shapeLength)) {
      var shapeS;
      var shapeE;
      if (segmentOb.s * totalModifierLength <= addedLength) {
        shapeS = 0;
      } else {
        shapeS = (segmentOb.s * totalModifierLength - addedLength) / shapeLength;
      }
      if (segmentOb.e * totalModifierLength >= addedLength + shapeLength) {
        shapeE = 1;
      } else {
        shapeE = ((segmentOb.e * totalModifierLength - addedLength) / shapeLength);
      }
      shapeSegments.push([shapeS, shapeE]);
    }
  }
  if (!shapeSegments.length) {
    shapeSegments.push([0, 0]);
  }
  return shapeSegments;
};

TrimModifier.prototype.releasePathsData = function (pathsData) {
  var i;
  var len = pathsData.length;
  for (i = 0; i < len; i += 1) {
    segmentsLengthPool.release(pathsData[i]);
  }
  pathsData.length = 0;
  return pathsData;
};

TrimModifier.prototype.processShapes = function (_isFirstFrame) {
  var s;
  var e;
  if (this._mdf || _isFirstFrame) {
    var o = (this.o.v % 360) / 360;
    if (o < 0) {
      o += 1;
    }
    if (this.s.v > 1) {
      s = 1 + o;
    } else if (this.s.v < 0) {
      s = 0 + o;
    } else {
      s = this.s.v + o;
    }
    if (this.e.v > 1) {
      e = 1 + o;
    } else if (this.e.v < 0) {
      e = 0 + o;
    } else {
      e = this.e.v + o;
    }

    if (s > e) {
      var _s = s;
      s = e;
      e = _s;
    }
    s = Math.round(s * 10000) * 0.0001;
    e = Math.round(e * 10000) * 0.0001;
    this.sValue = s;
    this.eValue = e;
  } else {
    s = this.sValue;
    e = this.eValue;
  }
  var shapePaths;
  var i;
  var len = this.shapes.length;
  var j;
  var jLen;
  var pathsData;
  var pathData;
  var totalShapeLength;
  var totalModifierLength = 0;

  if (e === s) {
    for (i = 0; i < len; i += 1) {
      this.shapes[i].localShapeCollection.releaseShapes();
      this.shapes[i].shape._mdf = true;
      this.shapes[i].shape.paths = this.shapes[i].localShapeCollection;
      if (this._mdf) {
        this.shapes[i].pathsData.length = 0;
      }
    }
  } else if (!((e === 1 && s === 0) || (e === 0 && s === 1))) {
    var segments = [];
    var shapeData;
    var localShapeCollection;
    for (i = 0; i < len; i += 1) {
      shapeData = this.shapes[i];
      // if shape hasn't changed and trim properties haven't changed, cached previous path can be used
      if (!shapeData.shape._mdf && !this._mdf && !_isFirstFrame && this.m !== 2) {
        shapeData.shape.paths = shapeData.localShapeCollection;
      } else {
        shapePaths = shapeData.shape.paths;
        jLen = shapePaths._length;
        totalShapeLength = 0;
        if (!shapeData.shape._mdf && shapeData.pathsData.length) {
          totalShapeLength = shapeData.totalShapeLength;
        } else {
          pathsData = this.releasePathsData(shapeData.pathsData);
          for (j = 0; j < jLen; j += 1) {
            pathData = bez.getSegmentsLength(shapePaths.shapes[j]);
            pathsData.push(pathData);
            totalShapeLength += pathData.totalLength;
          }
          shapeData.totalShapeLength = totalShapeLength;
          shapeData.pathsData = pathsData;
        }

        totalModifierLength += totalShapeLength;
        shapeData.shape._mdf = true;
      }
    }
    var shapeS = s;
    var shapeE = e;
    var addedLength = 0;
    var edges;
    for (i = len - 1; i >= 0; i -= 1) {
      shapeData = this.shapes[i];
      if (shapeData.shape._mdf) {
        localShapeCollection = shapeData.localShapeCollection;
        localShapeCollection.releaseShapes();
        // if m === 2 means paths are trimmed individually so edges need to be found for this specific shape relative to whoel group
        if (this.m === 2 && len > 1) {
          edges = this.calculateShapeEdges(s, e, shapeData.totalShapeLength, addedLength, totalModifierLength);
          addedLength += shapeData.totalShapeLength;
        } else {
          edges = [[shapeS, shapeE]];
        }
        jLen = edges.length;
        for (j = 0; j < jLen; j += 1) {
          shapeS = edges[j][0];
          shapeE = edges[j][1];
          segments.length = 0;
          if (shapeE <= 1) {
            segments.push({
              s: shapeData.totalShapeLength * shapeS,
              e: shapeData.totalShapeLength * shapeE,
            });
          } else if (shapeS >= 1) {
            segments.push({
              s: shapeData.totalShapeLength * (shapeS - 1),
              e: shapeData.totalShapeLength * (shapeE - 1),
            });
          } else {
            segments.push({
              s: shapeData.totalShapeLength * shapeS,
              e: shapeData.totalShapeLength,
            });
            segments.push({
              s: 0,
              e: shapeData.totalShapeLength * (shapeE - 1),
            });
          }
          var newShapesData = this.addShapes(shapeData, segments[0]);
          if (segments[0].s !== segments[0].e) {
            if (segments.length > 1) {
              var lastShapeInCollection = shapeData.shape.paths.shapes[shapeData.shape.paths._length - 1];
              if (lastShapeInCollection.c) {
                var lastShape = newShapesData.pop();
                this.addPaths(newShapesData, localShapeCollection);
                newShapesData = this.addShapes(shapeData, segments[1], lastShape);
              } else {
                this.addPaths(newShapesData, localShapeCollection);
                newShapesData = this.addShapes(shapeData, segments[1]);
              }
            }
            this.addPaths(newShapesData, localShapeCollection);
          }
        }
        shapeData.shape.paths = localShapeCollection;
      }
    }
  } else if (this._mdf) {
    for (i = 0; i < len; i += 1) {
      // Releasign Trim Cached paths data when no trim applied in case shapes are modified inbetween.
      // Don't remove this even if it's losing cached info.
      this.shapes[i].pathsData.length = 0;
      this.shapes[i].shape._mdf = true;
    }
  }
};

TrimModifier.prototype.addPaths = function (newPaths, localShapeCollection) {
  var i;
  var len = newPaths.length;
  for (i = 0; i < len; i += 1) {
    localShapeCollection.addShape(newPaths[i]);
  }
};

TrimModifier.prototype.addSegment = function (pt1, pt2, pt3, pt4, shapePath, pos, newShape) {
  shapePath.setXYAt(pt2[0], pt2[1], 'o', pos);
  shapePath.setXYAt(pt3[0], pt3[1], 'i', pos + 1);
  if (newShape) {
    shapePath.setXYAt(pt1[0], pt1[1], 'v', pos);
  }
  shapePath.setXYAt(pt4[0], pt4[1], 'v', pos + 1);
};

TrimModifier.prototype.addSegmentFromArray = function (points, shapePath, pos, newShape) {
  shapePath.setXYAt(points[1], points[5], 'o', pos);
  shapePath.setXYAt(points[2], points[6], 'i', pos + 1);
  if (newShape) {
    shapePath.setXYAt(points[0], points[4], 'v', pos);
  }
  shapePath.setXYAt(points[3], points[7], 'v', pos + 1);
};

TrimModifier.prototype.addShapes = function (shapeData, shapeSegment, shapePath) {
  var pathsData = shapeData.pathsData;
  var shapePaths = shapeData.shape.paths.shapes;
  var i;
  var len = shapeData.shape.paths._length;
  var j;
  var jLen;
  var addedLength = 0;
  var currentLengthData;
  var segmentCount;
  var lengths;
  var segment;
  var shapes = [];
  var initPos;
  var newShape = true;
  if (!shapePath) {
    shapePath = shapePool.newElement();
    segmentCount = 0;
    initPos = 0;
  } else {
    segmentCount = shapePath._length;
    initPos = shapePath._length;
  }
  shapes.push(shapePath);
  for (i = 0; i < len; i += 1) {
    lengths = pathsData[i].lengths;
    shapePath.c = shapePaths[i].c;
    jLen = shapePaths[i].c ? lengths.length : lengths.length + 1;
    for (j = 1; j < jLen; j += 1) {
      currentLengthData = lengths[j - 1];
      if (addedLength + currentLengthData.addedLength < shapeSegment.s) {
        addedLength += currentLengthData.addedLength;
        shapePath.c = false;
      } else if (addedLength > shapeSegment.e) {
        shapePath.c = false;
        break;
      } else {
        if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + currentLengthData.addedLength) {
          this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[j], shapePaths[i].v[j], shapePath, segmentCount, newShape);
          newShape = false;
        } else {
          segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[j], shapePaths[i].o[j - 1], shapePaths[i].i[j], (shapeSegment.s - addedLength) / currentLengthData.addedLength, (shapeSegment.e - addedLength) / currentLengthData.addedLength, lengths[j - 1]);
          this.addSegmentFromArray(segment, shapePath, segmentCount, newShape);
          // this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);
          newShape = false;
          shapePath.c = false;
        }
        addedLength += currentLengthData.addedLength;
        segmentCount += 1;
      }
    }
    if (shapePaths[i].c && lengths.length) {
      currentLengthData = lengths[j - 1];
      if (addedLength <= shapeSegment.e) {
        var segmentLength = lengths[j - 1].addedLength;
        if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + segmentLength) {
          this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[0], shapePaths[i].v[0], shapePath, segmentCount, newShape);
          newShape = false;
        } else {
          segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[0], shapePaths[i].o[j - 1], shapePaths[i].i[0], (shapeSegment.s - addedLength) / segmentLength, (shapeSegment.e - addedLength) / segmentLength, lengths[j - 1]);
          this.addSegmentFromArray(segment, shapePath, segmentCount, newShape);
          // this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);
          newShape = false;
          shapePath.c = false;
        }
      } else {
        shapePath.c = false;
      }
      addedLength += currentLengthData.addedLength;
      segmentCount += 1;
    }
    if (shapePath._length) {
      shapePath.setXYAt(shapePath.v[initPos][0], shapePath.v[initPos][1], 'i', initPos);
      shapePath.setXYAt(shapePath.v[shapePath._length - 1][0], shapePath.v[shapePath._length - 1][1], 'o', shapePath._length - 1);
    }
    if (addedLength > shapeSegment.e) {
      break;
    }
    if (i < len - 1) {
      shapePath = shapePool.newElement();
      newShape = true;
      shapes.push(shapePath);
      segmentCount = 0;
    }
  }
  return shapes;
};

ShapeModifiers.registerModifier('tm', TrimModifier);

/* global extendPrototype, ShapeModifier, PropertyFactory, shapePool, roundCorner, ShapeModifiers */

function RoundCornersModifier() {}
extendPrototype([ShapeModifier], RoundCornersModifier);
RoundCornersModifier.prototype.initModifierProperties = function (elem, data) {
  this.getValue = this.processKeys;
  this.rd = PropertyFactory.getProp(elem, data.r, 0, null, this);
  this._isAnimated = !!this.rd.effectsSequence.length;
};

RoundCornersModifier.prototype.processPath = function (path, round) {
  var clonedPath = shapePool.newElement();
  clonedPath.c = path.c;
  var i;
  var len = path._length;
  var currentV;
  var currentI;
  var currentO;
  var closerV;
  var distance;
  var newPosPerc;
  var index = 0;
  var vX;
  var vY;
  var oX;
  var oY;
  var iX;
  var iY;
  for (i = 0; i < len; i += 1) {
    currentV = path.v[i];
    currentO = path.o[i];
    currentI = path.i[i];
    if (currentV[0] === currentO[0] && currentV[1] === currentO[1] && currentV[0] === currentI[0] && currentV[1] === currentI[1]) {
      if ((i === 0 || i === len - 1) && !path.c) {
        clonedPath.setTripleAt(currentV[0], currentV[1], currentO[0], currentO[1], currentI[0], currentI[1], index);
        /* clonedPath.v[index] = currentV;
                clonedPath.o[index] = currentO;
                clonedPath.i[index] = currentI; */
        index += 1;
      } else {
        if (i === 0) {
          closerV = path.v[len - 1];
        } else {
          closerV = path.v[i - 1];
        }
        distance = Math.sqrt(Math.pow(currentV[0] - closerV[0], 2) + Math.pow(currentV[1] - closerV[1], 2));
        newPosPerc = distance ? Math.min(distance / 2, round) / distance : 0;
        iX = currentV[0] + (closerV[0] - currentV[0]) * newPosPerc;
        vX = iX;
        iY = currentV[1] - (currentV[1] - closerV[1]) * newPosPerc;
        vY = iY;
        oX = vX - (vX - currentV[0]) * roundCorner;
        oY = vY - (vY - currentV[1]) * roundCorner;
        clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, index);
        index += 1;

        if (i === len - 1) {
          closerV = path.v[0];
        } else {
          closerV = path.v[i + 1];
        }
        distance = Math.sqrt(Math.pow(currentV[0] - closerV[0], 2) + Math.pow(currentV[1] - closerV[1], 2));
        newPosPerc = distance ? Math.min(distance / 2, round) / distance : 0;
        oX = currentV[0] + (closerV[0] - currentV[0]) * newPosPerc;
        vX = oX;
        oY = currentV[1] + (closerV[1] - currentV[1]) * newPosPerc;
        vY = oY;
        iX = vX - (vX - currentV[0]) * roundCorner;
        iY = vY - (vY - currentV[1]) * roundCorner;
        clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, index);
        index += 1;
      }
    } else {
      clonedPath.setTripleAt(path.v[i][0], path.v[i][1], path.o[i][0], path.o[i][1], path.i[i][0], path.i[i][1], index);
      index += 1;
    }
  }
  return clonedPath;
};

RoundCornersModifier.prototype.processShapes = function (_isFirstFrame) {
  var shapePaths;
  var i;
  var len = this.shapes.length;
  var j;
  var jLen;
  var rd = this.rd.v;

  if (rd !== 0) {
    var shapeData;
    var localShapeCollection;
    for (i = 0; i < len; i += 1) {
      shapeData = this.shapes[i];
      localShapeCollection = shapeData.localShapeCollection;
      if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
        localShapeCollection.releaseShapes();
        shapeData.shape._mdf = true;
        shapePaths = shapeData.shape.paths.shapes;
        jLen = shapeData.shape.paths._length;
        for (j = 0; j < jLen; j += 1) {
          localShapeCollection.addShape(this.processPath(shapePaths[j], rd));
        }
      }
      shapeData.shape.paths = shapeData.localShapeCollection;
    }
  }
  if (!this.dynamicProperties.length) {
    this._mdf = false;
  }
};

ShapeModifiers.registerModifier('rd', RoundCornersModifier);

/* global extendPrototype, ShapeModifier, PropertyFactory, shapePool, ShapeModifiers */

function PuckerAndBloatModifier() {}
extendPrototype([ShapeModifier], PuckerAndBloatModifier);
PuckerAndBloatModifier.prototype.initModifierProperties = function (elem, data) {
  this.getValue = this.processKeys;
  this.amount = PropertyFactory.getProp(elem, data.a, 0, null, this);
  this._isAnimated = !!this.amount.effectsSequence.length;
};

PuckerAndBloatModifier.prototype.processPath = function (path, amount) {
  var percent = amount / 100;
  var centerPoint = [0, 0];
  var pathLength = path._length;
  var i = 0;
  for (i = 0; i < pathLength; i += 1) {
    centerPoint[0] += path.v[i][0];
    centerPoint[1] += path.v[i][1];
  }
  centerPoint[0] /= pathLength;
  centerPoint[1] /= pathLength;
  var clonedPath = shapePool.newElement();
  clonedPath.c = path.c;
  var vX;
  var vY;
  var oX;
  var oY;
  var iX;
  var iY;
  for (i = 0; i < pathLength; i += 1) {
    vX = path.v[i][0] + (centerPoint[0] - path.v[i][0]) * percent;
    vY = path.v[i][1] + (centerPoint[1] - path.v[i][1]) * percent;
    oX = path.o[i][0] + (centerPoint[0] - path.o[i][0]) * -percent;
    oY = path.o[i][1] + (centerPoint[1] - path.o[i][1]) * -percent;
    iX = path.i[i][0] + (centerPoint[0] - path.i[i][0]) * -percent;
    iY = path.i[i][1] + (centerPoint[1] - path.i[i][1]) * -percent;
    clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, i);
  }
  return clonedPath;
};

PuckerAndBloatModifier.prototype.processShapes = function (_isFirstFrame) {
  var shapePaths;
  var i;
  var len = this.shapes.length;
  var j;
  var jLen;
  var amount = this.amount.v;

  if (amount !== 0) {
    var shapeData;
    var localShapeCollection;
    for (i = 0; i < len; i += 1) {
      shapeData = this.shapes[i];
      localShapeCollection = shapeData.localShapeCollection;
      if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
        localShapeCollection.releaseShapes();
        shapeData.shape._mdf = true;
        shapePaths = shapeData.shape.paths.shapes;
        jLen = shapeData.shape.paths._length;
        for (j = 0; j < jLen; j += 1) {
          localShapeCollection.addShape(this.processPath(shapePaths[j], amount));
        }
      }
      shapeData.shape.paths = shapeData.localShapeCollection;
    }
  }
  if (!this.dynamicProperties.length) {
    this._mdf = false;
  }
};
ShapeModifiers.registerModifier('pb', PuckerAndBloatModifier);

/* global extendPrototype, ShapeModifier, TransformPropertyFactory, PropertyFactory, Matrix, ShapeModifiers */

function RepeaterModifier() {}
extendPrototype([ShapeModifier], RepeaterModifier);

RepeaterModifier.prototype.initModifierProperties = function (elem, data) {
  this.getValue = this.processKeys;
  this.c = PropertyFactory.getProp(elem, data.c, 0, null, this);
  this.o = PropertyFactory.getProp(elem, data.o, 0, null, this);
  this.tr = TransformPropertyFactory.getTransformProperty(elem, data.tr, this);
  this.so = PropertyFactory.getProp(elem, data.tr.so, 0, 0.01, this);
  this.eo = PropertyFactory.getProp(elem, data.tr.eo, 0, 0.01, this);
  this.data = data;
  if (!this.dynamicProperties.length) {
    this.getValue(true);
  }
  this._isAnimated = !!this.dynamicProperties.length;
  this.pMatrix = new Matrix();
  this.rMatrix = new Matrix();
  this.sMatrix = new Matrix();
  this.tMatrix = new Matrix();
  this.matrix = new Matrix();
};

RepeaterModifier.prototype.applyTransforms = function (pMatrix, rMatrix, sMatrix, transform, perc, inv) {
  var dir = inv ? -1 : 1;
  var scaleX = transform.s.v[0] + (1 - transform.s.v[0]) * (1 - perc);
  var scaleY = transform.s.v[1] + (1 - transform.s.v[1]) * (1 - perc);
  pMatrix.translate(transform.p.v[0] * dir * perc, transform.p.v[1] * dir * perc, transform.p.v[2]);
  rMatrix.translate(-transform.a.v[0], -transform.a.v[1], transform.a.v[2]);
  rMatrix.rotate(-transform.r.v * dir * perc);
  rMatrix.translate(transform.a.v[0], transform.a.v[1], transform.a.v[2]);
  sMatrix.translate(-transform.a.v[0], -transform.a.v[1], transform.a.v[2]);
  sMatrix.scale(inv ? 1 / scaleX : scaleX, inv ? 1 / scaleY : scaleY);
  sMatrix.translate(transform.a.v[0], transform.a.v[1], transform.a.v[2]);
};

RepeaterModifier.prototype.init = function (elem, arr, pos, elemsData) {
  this.elem = elem;
  this.arr = arr;
  this.pos = pos;
  this.elemsData = elemsData;
  this._currentCopies = 0;
  this._elements = [];
  this._groups = [];
  this.frameId = -1;
  this.initDynamicPropertyContainer(elem);
  this.initModifierProperties(elem, arr[pos]);
  while (pos > 0) {
    pos -= 1;
    // this._elements.unshift(arr.splice(pos,1)[0]);
    this._elements.unshift(arr[pos]);
  }
  if (this.dynamicProperties.length) {
    this.k = true;
  } else {
    this.getValue(true);
  }
};

RepeaterModifier.prototype.resetElements = function (elements) {
  var i;
  var len = elements.length;
  for (i = 0; i < len; i += 1) {
    elements[i]._processed = false;
    if (elements[i].ty === 'gr') {
      this.resetElements(elements[i].it);
    }
  }
};

RepeaterModifier.prototype.cloneElements = function (elements) {
  var newElements = JSON.parse(JSON.stringify(elements));
  this.resetElements(newElements);
  return newElements;
};

RepeaterModifier.prototype.changeGroupRender = function (elements, renderFlag) {
  var i;
  var len = elements.length;
  for (i = 0; i < len; i += 1) {
    elements[i]._render = renderFlag;
    if (elements[i].ty === 'gr') {
      this.changeGroupRender(elements[i].it, renderFlag);
    }
  }
};

RepeaterModifier.prototype.processShapes = function (_isFirstFrame) {
  var items;
  var itemsTransform;
  var i;
  var dir;
  var cont;
  var hasReloaded = false;
  if (this._mdf || _isFirstFrame) {
    var copies = Math.ceil(this.c.v);
    if (this._groups.length < copies) {
      while (this._groups.length < copies) {
        var group = {
          it: this.cloneElements(this._elements),
          ty: 'gr',
        };
        group.it.push({
          a: { a: 0, ix: 1, k: [0, 0] }, nm: 'Transform', o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: 'tr',
        });

        this.arr.splice(0, 0, group);
        this._groups.splice(0, 0, group);
        this._currentCopies += 1;
      }
      this.elem.reloadShapes();
      hasReloaded = true;
    }
    cont = 0;
    var renderFlag;
    for (i = 0; i <= this._groups.length - 1; i += 1) {
      renderFlag = cont < copies;
      this._groups[i]._render = renderFlag;
      this.changeGroupRender(this._groups[i].it, renderFlag);
      if (!renderFlag) {
        var elems = this.elemsData[i].it;
        var transformData = elems[elems.length - 1];
        if (transformData.transform.op.v !== 0) {
          transformData.transform.op._mdf = true;
          transformData.transform.op.v = 0;
        } else {
          transformData.transform.op._mdf = false;
        }
      }
      cont += 1;
    }

    this._currentCopies = copies;
    /// /

    var offset = this.o.v;
    var offsetModulo = offset % 1;
    var roundOffset = offset > 0 ? Math.floor(offset) : Math.ceil(offset);
    var pProps = this.pMatrix.props;
    var rProps = this.rMatrix.props;
    var sProps = this.sMatrix.props;
    this.pMatrix.reset();
    this.rMatrix.reset();
    this.sMatrix.reset();
    this.tMatrix.reset();
    this.matrix.reset();
    var iteration = 0;

    if (offset > 0) {
      while (iteration < roundOffset) {
        this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
        iteration += 1;
      }
      if (offsetModulo) {
        this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, offsetModulo, false);
        iteration += offsetModulo;
      }
    } else if (offset < 0) {
      while (iteration > roundOffset) {
        this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true);
        iteration -= 1;
      }
      if (offsetModulo) {
        this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -offsetModulo, true);
        iteration -= offsetModulo;
      }
    }
    i = this.data.m === 1 ? 0 : this._currentCopies - 1;
    dir = this.data.m === 1 ? 1 : -1;
    cont = this._currentCopies;
    var j;
    var jLen;
    while (cont) {
      items = this.elemsData[i].it;
      itemsTransform = items[items.length - 1].transform.mProps.v.props;
      jLen = itemsTransform.length;
      items[items.length - 1].transform.mProps._mdf = true;
      items[items.length - 1].transform.op._mdf = true;
      items[items.length - 1].transform.op.v = this._currentCopies === 1
        ? this.so.v
        : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1));

      if (iteration !== 0) {
        if ((i !== 0 && dir === 1) || (i !== this._currentCopies - 1 && dir === -1)) {
          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
        }
        this.matrix.transform(rProps[0], rProps[1], rProps[2], rProps[3], rProps[4], rProps[5], rProps[6], rProps[7], rProps[8], rProps[9], rProps[10], rProps[11], rProps[12], rProps[13], rProps[14], rProps[15]);
        this.matrix.transform(sProps[0], sProps[1], sProps[2], sProps[3], sProps[4], sProps[5], sProps[6], sProps[7], sProps[8], sProps[9], sProps[10], sProps[11], sProps[12], sProps[13], sProps[14], sProps[15]);
        this.matrix.transform(pProps[0], pProps[1], pProps[2], pProps[3], pProps[4], pProps[5], pProps[6], pProps[7], pProps[8], pProps[9], pProps[10], pProps[11], pProps[12], pProps[13], pProps[14], pProps[15]);

        for (j = 0; j < jLen; j += 1) {
          itemsTransform[j] = this.matrix.props[j];
        }
        this.matrix.reset();
      } else {
        this.matrix.reset();
        for (j = 0; j < jLen; j += 1) {
          itemsTransform[j] = this.matrix.props[j];
        }
      }
      iteration += 1;
      cont -= 1;
      i += dir;
    }
  } else {
    cont = this._currentCopies;
    i = 0;
    dir = 1;
    while (cont) {
      items = this.elemsData[i].it;
      itemsTransform = items[items.length - 1].transform.mProps.v.props;
      items[items.length - 1].transform.mProps._mdf = false;
      items[items.length - 1].transform.op._mdf = false;
      cont -= 1;
      i += dir;
    }
  }
  return hasReloaded;
};

RepeaterModifier.prototype.addShape = function () {};

ShapeModifiers.registerModifier('rp', RepeaterModifier);

/* global createSizedArray, shapePool */

function ShapeCollection() {
  this._length = 0;
  this._maxLength = 4;
  this.shapes = createSizedArray(this._maxLength);
}

ShapeCollection.prototype.addShape = function (shapeData) {
  if (this._length === this._maxLength) {
    this.shapes = this.shapes.concat(createSizedArray(this._maxLength));
    this._maxLength *= 2;
  }
  this.shapes[this._length] = shapeData;
  this._length += 1;
};

ShapeCollection.prototype.releaseShapes = function () {
  var i;
  for (i = 0; i < this._length; i += 1) {
    shapePool.release(this.shapes[i]);
  }
  this._length = 0;
};

/* global createSizedArray, createTypedArray, PropertyFactory, extendPrototype, DynamicPropertyContainer */

function DashProperty(elem, data, renderer, container) {
  this.elem = elem;
  this.frameId = -1;
  this.dataProps = createSizedArray(data.length);
  this.renderer = renderer;
  this.k = false;
  this.dashStr = '';
  this.dashArray = createTypedArray('float32', data.length ? data.length - 1 : 0);
  this.dashoffset = createTypedArray('float32', 1);
  this.initDynamicPropertyContainer(container);
  var i;
  var len = data.length || 0;
  var prop;
  for (i = 0; i < len; i += 1) {
    prop = PropertyFactory.getProp(elem, data[i].v, 0, 0, this);
    this.k = prop.k || this.k;
    this.dataProps[i] = { n: data[i].n, p: prop };
  }
  if (!this.k) {
    this.getValue(true);
  }
  this._isAnimated = this.k;
}

DashProperty.prototype.getValue = function (forceRender) {
  if (this.elem.globalData.frameId === this.frameId && !forceRender) {
    return;
  }
  this.frameId = this.elem.globalData.frameId;
  this.iterateDynamicProperties();
  this._mdf = this._mdf || forceRender;
  if (this._mdf) {
    var i = 0;
    var len = this.dataProps.length;
    if (this.renderer === 'svg') {
      this.dashStr = '';
    }
    for (i = 0; i < len; i += 1) {
      if (this.dataProps[i].n !== 'o') {
        if (this.renderer === 'svg') {
          this.dashStr += ' ' + this.dataProps[i].p.v;
        } else {
          this.dashArray[i] = this.dataProps[i].p.v;
        }
      } else {
        this.dashoffset[0] = this.dataProps[i].p.v;
      }
    }
  }
};
extendPrototype([DynamicPropertyContainer], DashProperty);

/* global createTypedArray, PropertyFactory, extendPrototype, DynamicPropertyContainer */
function GradientProperty(elem, data, container) {
  this.data = data;
  this.c = createTypedArray('uint8c', data.p * 4);
  var cLength = data.k.k[0].s ? (data.k.k[0].s.length - data.p * 4) : data.k.k.length - data.p * 4;
  this.o = createTypedArray('float32', cLength);
  this._cmdf = false;
  this._omdf = false;
  this._collapsable = this.checkCollapsable();
  this._hasOpacity = cLength;
  this.initDynamicPropertyContainer(container);
  this.prop = PropertyFactory.getProp(elem, data.k, 1, null, this);
  this.k = this.prop.k;
  this.getValue(true);
}

GradientProperty.prototype.comparePoints = function (values, points) {
  var i = 0;
  var len = this.o.length / 2;
  var diff;
  while (i < len) {
    diff = Math.abs(values[i * 4] - values[points * 4 + i * 2]);
    if (diff > 0.01) {
      return false;
    }
    i += 1;
  }
  return true;
};

GradientProperty.prototype.checkCollapsable = function () {
  if (this.o.length / 2 !== this.c.length / 4) {
    return false;
  }
  if (this.data.k.k[0].s) {
    var i = 0;
    var len = this.data.k.k.length;
    while (i < len) {
      if (!this.comparePoints(this.data.k.k[i].s, this.data.p)) {
        return false;
      }
      i += 1;
    }
  } else if (!this.comparePoints(this.data.k.k, this.data.p)) {
    return false;
  }
  return true;
};

GradientProperty.prototype.getValue = function (forceRender) {
  this.prop.getValue();
  this._mdf = false;
  this._cmdf = false;
  this._omdf = false;
  if (this.prop._mdf || forceRender) {
    var i;
    var len = this.data.p * 4;
    var mult;
    var val;
    for (i = 0; i < len; i += 1) {
      mult = i % 4 === 0 ? 100 : 255;
      val = Math.round(this.prop.v[i] * mult);
      if (this.c[i] !== val) {
        this.c[i] = val;
        this._cmdf = !forceRender;
      }
    }
    if (this.o.length) {
      len = this.prop.v.length;
      for (i = this.data.p * 4; i < len; i += 1) {
        mult = i % 2 === 0 ? 100 : 1;
        val = i % 2 === 0 ? Math.round(this.prop.v[i] * 100) : this.prop.v[i];
        if (this.o[i - this.data.p * 4] !== val) {
          this.o[i - this.data.p * 4] = val;
          this._omdf = !forceRender;
        }
      }
    }
    this._mdf = !forceRender;
  }
};

extendPrototype([DynamicPropertyContainer], GradientProperty);

/* exported buildShapeString */

var buildShapeString = function (pathNodes, length, closed, mat) {
  if (length === 0) {
    return '';
  }
  var _o = pathNodes.o;
  var _i = pathNodes.i;
  var _v = pathNodes.v;
  var i;
  var shapeString = ' M' + mat.applyToPointStringified(_v[0][0], _v[0][1]);
  for (i = 1; i < length; i += 1) {
    shapeString += ' C' + mat.applyToPointStringified(_o[i - 1][0], _o[i - 1][1]) + ' ' + mat.applyToPointStringified(_i[i][0], _i[i][1]) + ' ' + mat.applyToPointStringified(_v[i][0], _v[i][1]);
  }
  if (closed && length) {
    shapeString += ' C' + mat.applyToPointStringified(_o[i - 1][0], _o[i - 1][1]) + ' ' + mat.applyToPointStringified(_i[0][0], _i[0][1]) + ' ' + mat.applyToPointStringified(_v[0][0], _v[0][1]);
    shapeString += 'z';
  }
  return shapeString;
};

/* global Howl */
/* exported audioControllerFactory */

var audioControllerFactory = (function () {
  function AudioController(audioFactory) {
    this.audios = [];
    this.audioFactory = audioFactory;
    this._volume = 1;
    this._isMuted = false;
  }

  AudioController.prototype = {
    addAudio: function (audio) {
      this.audios.push(audio);
    },
    pause: function () {
      var i;
      var len = this.audios.length;
      for (i = 0; i < len; i += 1) {
        this.audios[i].pause();
      }
    },
    resume: function () {
      var i;
      var len = this.audios.length;
      for (i = 0; i < len; i += 1) {
        this.audios[i].resume();
      }
    },
    setRate: function (rateValue) {
      var i;
      var len = this.audios.length;
      for (i = 0; i < len; i += 1) {
        this.audios[i].setRate(rateValue);
      }
    },
    createAudio: function (assetPath) {
      if (this.audioFactory) {
        return this.audioFactory(assetPath);
      } if (Howl) {
        return new Howl({
          src: [assetPath],
        });
      }
      return {
        isPlaying: false,
        play: function () { this.isPlaying = true; },
        seek: function () { this.isPlaying = false; },
        playing: function () {},
        rate: function () {},
        setVolume: function () {},
      };
    },
    setAudioFactory: function (audioFactory) {
      this.audioFactory = audioFactory;
    },
    setVolume: function (value) {
      this._volume = value;
      this._updateVolume();
    },
    mute: function () {
      this._isMuted = true;
      this._updateVolume();
    },
    unmute: function () {
      this._isMuted = false;
      this._updateVolume();
    },
    getVolume: function () {
      return this._volume;
    },
    _updateVolume: function () {
      var i;
      var len = this.audios.length;
      for (i = 0; i < len; i += 1) {
        this.audios[i].volume(this._volume * (this._isMuted ? 0 : 1));
      }
    },
  };

  return function () {
    return new AudioController();
  };
}());

/* global createTag, createNS, isSafari, dataManager */
/* exported ImagePreloader */

var ImagePreloader = (function () {
  var proxyImage = (function () {
    var canvas = createTag('canvas');
    canvas.width = 1;
    canvas.height = 1;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, 1, 1);
    return canvas;
  }());

  function imageLoaded() {
    this.loadedAssets += 1;
    if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages) {
      if (this.imagesLoadedCb) {
        this.imagesLoadedCb(null);
      }
    }
  }
  function footageLoaded() {
    this.loadedFootagesCount += 1;
    if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages) {
      if (this.imagesLoadedCb) {
        this.imagesLoadedCb(null);
      }
    }
  }

  function getAssetsPath(assetData, assetsPath, originalPath) {
    var path = '';
    if (assetData.e) {
      path = assetData.p;
    } else if (assetsPath) {
      var imagePath = assetData.p;
      if (imagePath.indexOf('images/') !== -1) {
        imagePath = imagePath.split('/')[1];
      }
      path = assetsPath + imagePath;
    } else {
      path = originalPath;
      path += assetData.u ? assetData.u : '';
      path += assetData.p;
    }
    return path;
  }

  function testImageLoaded(img) {
    var _count = 0;
    var intervalId = setInterval(function () {
      var box = img.getBBox();
      if (box.width || _count > 500) {
        this._imageLoaded();
        clearInterval(intervalId);
      }
      _count += 1;
    }.bind(this), 50);
  }

  function createImageData(assetData) {
    var path = getAssetsPath(assetData, this.assetsPath, this.path);
    var img = createNS('image');
    if (isSafari) {
      this.testImageLoaded(img);
    } else {
      img.addEventListener('load', this._imageLoaded, false);
    }
    img.addEventListener('error', function () {
      ob.img = proxyImage;
      this._imageLoaded();
    }.bind(this), false);
    img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', path);
    if (this._elementHelper.append) {
      this._elementHelper.append(img);
    } else {
      this._elementHelper.appendChild(img);
    }
    var ob = {
      img: img,
      assetData: assetData,
    };
    return ob;
  }

  function createImgData(assetData) {
    var path = getAssetsPath(assetData, this.assetsPath, this.path);
    var img = createTag('img');
    img.crossOrigin = 'anonymous';
    img.addEventListener('load', this._imageLoaded, false);
    img.addEventListener('error', function () {
      ob.img = proxyImage;
      this._imageLoaded();
    }.bind(this), false);
    img.src = path;
    var ob = {
      img: img,
      assetData: assetData,
    };
    return ob;
  }

  function createFootageData(data) {
    var ob = {
      assetData: data,
    };
    var path = getAssetsPath(data, this.assetsPath, this.path);
    dataManager.loadData(path, function (footageData) {
      ob.img = footageData;
      this._footageLoaded();
    }.bind(this), function () {
      ob.img = {};
      this._footageLoaded();
    }.bind(this));
    return ob;
  }

  function loadAssets(assets, cb) {
    this.imagesLoadedCb = cb;
    var i;
    var len = assets.length;
    for (i = 0; i < len; i += 1) {
      if (!assets[i].layers) {
        if (!assets[i].t || assets[i].t === 'seq') {
          this.totalImages += 1;
          this.images.push(this._createImageData(assets[i]));
        } else if (assets[i].t === 3) {
          this.totalFootages += 1;
          this.images.push(this.createFootageData(assets[i]));
        }
      }
    }
  }

  function setPath(path) {
    this.path = path || '';
  }

  function setAssetsPath(path) {
    this.assetsPath = path || '';
  }

  function getAsset(assetData) {
    var i = 0;
    var len = this.images.length;
    while (i < len) {
      if (this.images[i].assetData === assetData) {
        return this.images[i].img;
      }
      i += 1;
    }
    return null;
  }

  function destroy() {
    this.imagesLoadedCb = null;
    this.images.length = 0;
  }

  function loadedImages() {
    return this.totalImages === this.loadedAssets;
  }

  function loadedFootages() {
    return this.totalFootages === this.loadedFootagesCount;
  }

  function setCacheType(type, elementHelper) {
    if (type === 'svg') {
      this._elementHelper = elementHelper;
      this._createImageData = this.createImageData.bind(this);
    } else {
      this._createImageData = this.createImgData.bind(this);
    }
  }

  function ImagePreloaderFactory() {
    this._imageLoaded = imageLoaded.bind(this);
    this._footageLoaded = footageLoaded.bind(this);
    this.testImageLoaded = testImageLoaded.bind(this);
    this.createFootageData = createFootageData.bind(this);
    this.assetsPath = '';
    this.path = '';
    this.totalImages = 0;
    this.totalFootages = 0;
    this.loadedAssets = 0;
    this.loadedFootagesCount = 0;
    this.imagesLoadedCb = null;
    this.images = [];
  }

  ImagePreloaderFactory.prototype = {
    loadAssets: loadAssets,
    setAssetsPath: setAssetsPath,
    setPath: setPath,
    loadedImages: loadedImages,
    loadedFootages: loadedFootages,
    destroy: destroy,
    getAsset: getAsset,
    createImgData: createImgData,
    createImageData: createImageData,
    imageLoaded: imageLoaded,
    footageLoaded: footageLoaded,
    setCacheType: setCacheType,
  };

  return ImagePreloaderFactory;
}());

/* exported featureSupport */

var featureSupport = (function () {
  var ob = {
    maskType: true,
  };
  if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
    ob.maskType = false;
  }
  return ob;
}());

/* global createNS */
/* exported filtersFactory */

var filtersFactory = (function () {
  var ob = {};
  ob.createFilter = createFilter;
  ob.createAlphaToLuminanceFilter = createAlphaToLuminanceFilter;

  function createFilter(filId, skipCoordinates) {
    var fil = createNS('filter');
    fil.setAttribute('id', filId);
    if (skipCoordinates !== true) {
      fil.setAttribute('filterUnits', 'objectBoundingBox');
      fil.setAttribute('x', '0%');
      fil.setAttribute('y', '0%');
      fil.setAttribute('width', '100%');
      fil.setAttribute('height', '100%');
    }
    return fil;
  }

  function createAlphaToLuminanceFilter() {
    var feColorMatrix = createNS('feColorMatrix');
    feColorMatrix.setAttribute('type', 'matrix');
    feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
    feColorMatrix.setAttribute('values', '0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1');
    return feColorMatrix;
  }

  return ob;
}());

/* global createSizedArray, PropertyFactory, TextAnimatorDataProperty, bez, addHueToRGB,
  addSaturationToRGB, addBrightnessToRGB, LetterProps, Matrix, extendPrototype, DynamicPropertyContainer */

function TextAnimatorProperty(textData, renderType, elem) {
  this._isFirstFrame = true;
  this._hasMaskedPath = false;
  this._frameId = -1;
  this._textData = textData;
  this._renderType = renderType;
  this._elem = elem;
  this._animatorsData = createSizedArray(this._textData.a.length);
  this._pathData = {};
  this._moreOptions = {
    alignment: {},
  };
  this.renderedLetters = [];
  this.lettersChangedFlag = false;
  this.initDynamicPropertyContainer(elem);
}

TextAnimatorProperty.prototype.searchProperties = function () {
  var i;
  var len = this._textData.a.length;
  var animatorProps;
  var getProp = PropertyFactory.getProp;
  for (i = 0; i < len; i += 1) {
    animatorProps = this._textData.a[i];
    this._animatorsData[i] = new TextAnimatorDataProperty(this._elem, animatorProps, this);
  }
  if (this._textData.p && 'm' in this._textData.p) {
    this._pathData = {
      a: getProp(this._elem, this._textData.p.a, 0, 0, this),
      f: getProp(this._elem, this._textData.p.f, 0, 0, this),
      l: getProp(this._elem, this._textData.p.l, 0, 0, this),
      r: getProp(this._elem, this._textData.p.r, 0, 0, this),
      p: getProp(this._elem, this._textData.p.p, 0, 0, this),
      m: this._elem.maskManager.getMaskProperty(this._textData.p.m),
    };
    this._hasMaskedPath = true;
  } else {
    this._hasMaskedPath = false;
  }
  this._moreOptions.alignment = getProp(this._elem, this._textData.m.a, 1, 0, this);
};

TextAnimatorProperty.prototype.getMeasures = function (documentData, lettersChangedFlag) {
  this.lettersChangedFlag = lettersChangedFlag;
  if (!this._mdf && !this._isFirstFrame && !lettersChangedFlag && (!this._hasMaskedPath || !this._pathData.m._mdf)) {
    return;
  }
  this._isFirstFrame = false;
  var alignment = this._moreOptions.alignment.v;
  var animators = this._animatorsData;
  var textData = this._textData;
  var matrixHelper = this.mHelper;
  var renderType = this._renderType;
  var renderedLettersCount = this.renderedLetters.length;
  var xPos;
  var yPos;
  var i;
  var len;
  var letters = documentData.l;
  var pathInfo;
  var currentLength;
  var currentPoint;
  var segmentLength;
  var flag;
  var pointInd;
  var segmentInd;
  var prevPoint;
  var points;
  var segments;
  var partialLength;
  var totalLength;
  var perc;
  var tanAngle;
  var mask;
  if (this._hasMaskedPath) {
    mask = this._pathData.m;
    if (!this._pathData.n || this._pathData._mdf) {
      var paths = mask.v;
      if (this._pathData.r.v) {
        paths = paths.reverse();
      }
      // TODO: release bezier data cached from previous pathInfo: this._pathData.pi
      pathInfo = {
        tLength: 0,
        segments: [],
      };
      len = paths._length - 1;
      var bezierData;
      totalLength = 0;
      for (i = 0; i < len; i += 1) {
        bezierData = bez.buildBezierData(paths.v[i],
          paths.v[i + 1],
          [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]],
          [paths.i[i + 1][0] - paths.v[i + 1][0], paths.i[i + 1][1] - paths.v[i + 1][1]]);
        pathInfo.tLength += bezierData.segmentLength;
        pathInfo.segments.push(bezierData);
        totalLength += bezierData.segmentLength;
      }
      i = len;
      if (mask.v.c) {
        bezierData = bez.buildBezierData(paths.v[i],
          paths.v[0],
          [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]],
          [paths.i[0][0] - paths.v[0][0], paths.i[0][1] - paths.v[0][1]]);
        pathInfo.tLength += bezierData.segmentLength;
        pathInfo.segments.push(bezierData);
        totalLength += bezierData.segmentLength;
      }
      this._pathData.pi = pathInfo;
    }
    pathInfo = this._pathData.pi;

    currentLength = this._pathData.f.v;
    segmentInd = 0;
    pointInd = 1;
    segmentLength = 0;
    flag = true;
    segments = pathInfo.segments;
    if (currentLength < 0 && mask.v.c) {
      if (pathInfo.tLength < Math.abs(currentLength)) {
        currentLength = -Math.abs(currentLength) % pathInfo.tLength;
      }
      segmentInd = segments.length - 1;
      points = segments[segmentInd].points;
      pointInd = points.length - 1;
      while (currentLength < 0) {
        currentLength += points[pointInd].partialLength;
        pointInd -= 1;
        if (pointInd < 0) {
          segmentInd -= 1;
          points = segments[segmentInd].points;
          pointInd = points.length - 1;
        }
      }
    }
    points = segments[segmentInd].points;
    prevPoint = points[pointInd - 1];
    currentPoint = points[pointInd];
    partialLength = currentPoint.partialLength;
  }

  len = letters.length;
  xPos = 0;
  yPos = 0;
  var yOff = documentData.finalSize * 1.2 * 0.714;
  var firstLine = true;
  var animatorProps;
  var animatorSelector;
  var j;
  var jLen;
  var letterValue;

  jLen = animators.length;

  var mult;
  var ind = -1;
  var offf;
  var xPathPos;
  var yPathPos;
  var initPathPos = currentLength;
  var initSegmentInd = segmentInd;
  var initPointInd = pointInd;
  var currentLine = -1;
  var elemOpacity;
  var sc;
  var sw;
  var fc;
  var k;
  var letterSw;
  var letterSc;
  var letterFc;
  var letterM = '';
  var letterP = this.defaultPropsArray;
  var letterO;

  //
  if (documentData.j === 2 || documentData.j === 1) {
    var animatorJustifyOffset = 0;
    var animatorFirstCharOffset = 0;
    var justifyOffsetMult = documentData.j === 2 ? -0.5 : -1;
    var lastIndex = 0;
    var isNewLine = true;

    for (i = 0; i < len; i += 1) {
      if (letters[i].n) {
        if (animatorJustifyOffset) {
          animatorJustifyOffset += animatorFirstCharOffset;
        }
        while (lastIndex < i) {
          letters[lastIndex].animatorJustifyOffset = animatorJustifyOffset;
          lastIndex += 1;
        }
        animatorJustifyOffset = 0;
        isNewLine = true;
      } else {
        for (j = 0; j < jLen; j += 1) {
          animatorProps = animators[j].a;
          if (animatorProps.t.propType) {
            if (isNewLine && documentData.j === 2) {
              animatorFirstCharOffset += animatorProps.t.v * justifyOffsetMult;
            }
            animatorSelector = animators[j].s;
            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
            if (mult.length) {
              animatorJustifyOffset += animatorProps.t.v * mult[0] * justifyOffsetMult;
            } else {
              animatorJustifyOffset += animatorProps.t.v * mult * justifyOffsetMult;
            }
          }
        }
        isNewLine = false;
      }
    }
    if (animatorJustifyOffset) {
      animatorJustifyOffset += animatorFirstCharOffset;
    }
    while (lastIndex < i) {
      letters[lastIndex].animatorJustifyOffset = animatorJustifyOffset;
      lastIndex += 1;
    }
  }
  //

  for (i = 0; i < len; i += 1) {
    matrixHelper.reset();
    elemOpacity = 1;
    if (letters[i].n) {
      xPos = 0;
      yPos += documentData.yOffset;
      yPos += firstLine ? 1 : 0;
      currentLength = initPathPos;
      firstLine = false;
      if (this._hasMaskedPath) {
        segmentInd = initSegmentInd;
        pointInd = initPointInd;
        points = segments[segmentInd].points;
        prevPoint = points[pointInd - 1];
        currentPoint = points[pointInd];
        partialLength = currentPoint.partialLength;
        segmentLength = 0;
      }
      letterM = '';
      letterFc = '';
      letterSw = '';
      letterO = '';
      letterP = this.defaultPropsArray;
    } else {
      if (this._hasMaskedPath) {
        if (currentLine !== letters[i].line) {
          switch (documentData.j) {
            case 1:
              currentLength += totalLength - documentData.lineWidths[letters[i].line];
              break;
            case 2:
              currentLength += (totalLength - documentData.lineWidths[letters[i].line]) / 2;
              break;
            default:
              break;
          }
          currentLine = letters[i].line;
        }
        if (ind !== letters[i].ind) {
          if (letters[ind]) {
            currentLength += letters[ind].extra;
          }
          currentLength += letters[i].an / 2;
          ind = letters[i].ind;
        }
        currentLength += (alignment[0] * letters[i].an) * 0.005;
        var animatorOffset = 0;
        for (j = 0; j < jLen; j += 1) {
          animatorProps = animators[j].a;
          if (animatorProps.p.propType) {
            animatorSelector = animators[j].s;
            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
            if (mult.length) {
              animatorOffset += animatorProps.p.v[0] * mult[0];
            } else {
              animatorOffset += animatorProps.p.v[0] * mult;
            }
          }
          if (animatorProps.a.propType) {
            animatorSelector = animators[j].s;
            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
            if (mult.length) {
              animatorOffset += animatorProps.a.v[0] * mult[0];
            } else {
              animatorOffset += animatorProps.a.v[0] * mult;
            }
          }
        }
        flag = true;
        // Force alignment only works with a single line for now
        if (this._pathData.a.v) {
          currentLength = letters[0].an * 0.5 + ((totalLength - this._pathData.f.v - letters[0].an * 0.5 - letters[letters.length - 1].an * 0.5) * ind) / (len - 1);
          currentLength += this._pathData.f.v;
        }
        while (flag) {
          if (segmentLength + partialLength >= currentLength + animatorOffset || !points) {
            perc = (currentLength + animatorOffset - segmentLength) / currentPoint.partialLength;
            xPathPos = prevPoint.point[0] + (currentPoint.point[0] - prevPoint.point[0]) * perc;
            yPathPos = prevPoint.point[1] + (currentPoint.point[1] - prevPoint.point[1]) * perc;
            matrixHelper.translate((-alignment[0] * letters[i].an) * 0.005, -(alignment[1] * yOff) * 0.01);
            flag = false;
          } else if (points) {
            segmentLength += currentPoint.partialLength;
            pointInd += 1;
            if (pointInd >= points.length) {
              pointInd = 0;
              segmentInd += 1;
              if (!segments[segmentInd]) {
                if (mask.v.c) {
                  pointInd = 0;
                  segmentInd = 0;
                  points = segments[segmentInd].points;
                } else {
                  segmentLength -= currentPoint.partialLength;
                  points = null;
                }
              } else {
                points = segments[segmentInd].points;
              }
            }
            if (points) {
              prevPoint = currentPoint;
              currentPoint = points[pointInd];
              partialLength = currentPoint.partialLength;
            }
          }
        }
        offf = letters[i].an / 2 - letters[i].add;
        matrixHelper.translate(-offf, 0, 0);
      } else {
        offf = letters[i].an / 2 - letters[i].add;
        matrixHelper.translate(-offf, 0, 0);

        // Grouping alignment
        matrixHelper.translate((-alignment[0] * letters[i].an) * 0.005, (-alignment[1] * yOff) * 0.01, 0);
      }

      for (j = 0; j < jLen; j += 1) {
        animatorProps = animators[j].a;
        if (animatorProps.t.propType) {
          animatorSelector = animators[j].s;
          mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
          // This condition is to prevent applying tracking to first character in each line. Might be better to use a boolean "isNewLine"
          if (xPos !== 0 || documentData.j !== 0) {
            if (this._hasMaskedPath) {
              if (mult.length) {
                currentLength += animatorProps.t.v * mult[0];
              } else {
                currentLength += animatorProps.t.v * mult;
              }
            } else if (mult.length) {
              xPos += animatorProps.t.v * mult[0];
            } else {
              xPos += animatorProps.t.v * mult;
            }
          }
        }
      }
      if (documentData.strokeWidthAnim) {
        sw = documentData.sw || 0;
      }
      if (documentData.strokeColorAnim) {
        if (documentData.sc) {
          sc = [documentData.sc[0], documentData.sc[1], documentData.sc[2]];
        } else {
          sc = [0, 0, 0];
        }
      }
      if (documentData.fillColorAnim && documentData.fc) {
        fc = [documentData.fc[0], documentData.fc[1], documentData.fc[2]];
      }
      for (j = 0; j < jLen; j += 1) {
        animatorProps = animators[j].a;
        if (animatorProps.a.propType) {
          animatorSelector = animators[j].s;
          mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

          if (mult.length) {
            matrixHelper.translate(-animatorProps.a.v[0] * mult[0], -animatorProps.a.v[1] * mult[1], animatorProps.a.v[2] * mult[2]);
          } else {
            matrixHelper.translate(-animatorProps.a.v[0] * mult, -animatorProps.a.v[1] * mult, animatorProps.a.v[2] * mult);
          }
        }
      }
      for (j = 0; j < jLen; j += 1) {
        animatorProps = animators[j].a;
        if (animatorProps.s.propType) {
          animatorSelector = animators[j].s;
          mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
          if (mult.length) {
            matrixHelper.scale(1 + ((animatorProps.s.v[0] - 1) * mult[0]), 1 + ((animatorProps.s.v[1] - 1) * mult[1]), 1);
          } else {
            matrixHelper.scale(1 + ((animatorProps.s.v[0] - 1) * mult), 1 + ((animatorProps.s.v[1] - 1) * mult), 1);
          }
        }
      }
      for (j = 0; j < jLen; j += 1) {
        animatorProps = animators[j].a;
        animatorSelector = animators[j].s;
        mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
        if (animatorProps.sk.propType) {
          if (mult.length) {
            matrixHelper.skewFromAxis(-animatorProps.sk.v * mult[0], animatorProps.sa.v * mult[1]);
          } else {
            matrixHelper.skewFromAxis(-animatorProps.sk.v * mult, animatorProps.sa.v * mult);
          }
        }
        if (animatorProps.r.propType) {
          if (mult.length) {
            matrixHelper.rotateZ(-animatorProps.r.v * mult[2]);
          } else {
            matrixHelper.rotateZ(-animatorProps.r.v * mult);
          }
        }
        if (animatorProps.ry.propType) {
          if (mult.length) {
            matrixHelper.rotateY(animatorProps.ry.v * mult[1]);
          } else {
            matrixHelper.rotateY(animatorProps.ry.v * mult);
          }
        }
        if (animatorProps.rx.propType) {
          if (mult.length) {
            matrixHelper.rotateX(animatorProps.rx.v * mult[0]);
          } else {
            matrixHelper.rotateX(animatorProps.rx.v * mult);
          }
        }
        if (animatorProps.o.propType) {
          if (mult.length) {
            elemOpacity += ((animatorProps.o.v) * mult[0] - elemOpacity) * mult[0];
          } else {
            elemOpacity += ((animatorProps.o.v) * mult - elemOpacity) * mult;
          }
        }
        if (documentData.strokeWidthAnim && animatorProps.sw.propType) {
          if (mult.length) {
            sw += animatorProps.sw.v * mult[0];
          } else {
            sw += animatorProps.sw.v * mult;
          }
        }
        if (documentData.strokeColorAnim && animatorProps.sc.propType) {
          for (k = 0; k < 3; k += 1) {
            if (mult.length) {
              sc[k] += (animatorProps.sc.v[k] - sc[k]) * mult[0];
            } else {
              sc[k] += (animatorProps.sc.v[k] - sc[k]) * mult;
            }
          }
        }
        if (documentData.fillColorAnim && documentData.fc) {
          if (animatorProps.fc.propType) {
            for (k = 0; k < 3; k += 1) {
              if (mult.length) {
                fc[k] += (animatorProps.fc.v[k] - fc[k]) * mult[0];
              } else {
                fc[k] += (animatorProps.fc.v[k] - fc[k]) * mult;
              }
            }
          }
          if (animatorProps.fh.propType) {
            if (mult.length) {
              fc = addHueToRGB(fc, animatorProps.fh.v * mult[0]);
            } else {
              fc = addHueToRGB(fc, animatorProps.fh.v * mult);
            }
          }
          if (animatorProps.fs.propType) {
            if (mult.length) {
              fc = addSaturationToRGB(fc, animatorProps.fs.v * mult[0]);
            } else {
              fc = addSaturationToRGB(fc, animatorProps.fs.v * mult);
            }
          }
          if (animatorProps.fb.propType) {
            if (mult.length) {
              fc = addBrightnessToRGB(fc, animatorProps.fb.v * mult[0]);
            } else {
              fc = addBrightnessToRGB(fc, animatorProps.fb.v * mult);
            }
          }
        }
      }

      for (j = 0; j < jLen; j += 1) {
        animatorProps = animators[j].a;

        if (animatorProps.p.propType) {
          animatorSelector = animators[j].s;
          mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
          if (this._hasMaskedPath) {
            if (mult.length) {
              matrixHelper.translate(0, animatorProps.p.v[1] * mult[0], -animatorProps.p.v[2] * mult[1]);
            } else {
              matrixHelper.translate(0, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
            }
          } else if (mult.length) {
            matrixHelper.translate(animatorProps.p.v[0] * mult[0], animatorProps.p.v[1] * mult[1], -animatorProps.p.v[2] * mult[2]);
          } else {
            matrixHelper.translate(animatorProps.p.v[0] * mult, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
          }
        }
      }
      if (documentData.strokeWidthAnim) {
        letterSw = sw < 0 ? 0 : sw;
      }
      if (documentData.strokeColorAnim) {
        letterSc = 'rgb(' + Math.round(sc[0] * 255) + ',' + Math.round(sc[1] * 255) + ',' + Math.round(sc[2] * 255) + ')';
      }
      if (documentData.fillColorAnim && documentData.fc) {
        letterFc = 'rgb(' + Math.round(fc[0] * 255) + ',' + Math.round(fc[1] * 255) + ',' + Math.round(fc[2] * 255) + ')';
      }

      if (this._hasMaskedPath) {
        matrixHelper.translate(0, -documentData.ls);

        matrixHelper.translate(0, (alignment[1] * yOff) * 0.01 + yPos, 0);
        if (this._pathData.p.v) {
          tanAngle = (currentPoint.point[1] - prevPoint.point[1]) / (currentPoint.point[0] - prevPoint.point[0]);
          var rot = (Math.atan(tanAngle) * 180) / Math.PI;
          if (currentPoint.point[0] < prevPoint.point[0]) {
            rot += 180;
          }
          matrixHelper.rotate((-rot * Math.PI) / 180);
        }
        matrixHelper.translate(xPathPos, yPathPos, 0);
        currentLength -= (alignment[0] * letters[i].an) * 0.005;
        if (letters[i + 1] && ind !== letters[i + 1].ind) {
          currentLength += letters[i].an / 2;
          currentLength += (documentData.tr * 0.001) * documentData.finalSize;
        }
      } else {
        matrixHelper.translate(xPos, yPos, 0);

        if (documentData.ps) {
          // matrixHelper.translate(documentData.ps[0],documentData.ps[1],0);
          matrixHelper.translate(documentData.ps[0], documentData.ps[1] + documentData.ascent, 0);
        }
        switch (documentData.j) {
          case 1:
            matrixHelper.translate(letters[i].animatorJustifyOffset + documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]), 0, 0);
            break;
          case 2:
            matrixHelper.translate(letters[i].animatorJustifyOffset + documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]) / 2, 0, 0);
            break;
          default:
            break;
        }
        matrixHelper.translate(0, -documentData.ls);
        matrixHelper.translate(offf, 0, 0);
        matrixHelper.translate((alignment[0] * letters[i].an) * 0.005, (alignment[1] * yOff) * 0.01, 0);
        xPos += letters[i].l + (documentData.tr * 0.001) * documentData.finalSize;
      }
      if (renderType === 'html') {
        letterM = matrixHelper.toCSS();
      } else if (renderType === 'svg') {
        letterM = matrixHelper.to2dCSS();
      } else {
        letterP = [matrixHelper.props[0], matrixHelper.props[1], matrixHelper.props[2], matrixHelper.props[3], matrixHelper.props[4], matrixHelper.props[5], matrixHelper.props[6], matrixHelper.props[7], matrixHelper.props[8], matrixHelper.props[9], matrixHelper.props[10], matrixHelper.props[11], matrixHelper.props[12], matrixHelper.props[13], matrixHelper.props[14], matrixHelper.props[15]];
      }
      letterO = elemOpacity;
    }

    if (renderedLettersCount <= i) {
      letterValue = new LetterProps(letterO, letterSw, letterSc, letterFc, letterM, letterP);
      this.renderedLetters.push(letterValue);
      renderedLettersCount += 1;
      this.lettersChangedFlag = true;
    } else {
      letterValue = this.renderedLetters[i];
      this.lettersChangedFlag = letterValue.update(letterO, letterSw, letterSc, letterFc, letterM, letterP) || this.lettersChangedFlag;
    }
  }
};

TextAnimatorProperty.prototype.getValue = function () {
  if (this._elem.globalData.frameId === this._frameId) {
    return;
  }
  this._frameId = this._elem.globalData.frameId;
  this.iterateDynamicProperties();
};

TextAnimatorProperty.prototype.mHelper = new Matrix();
TextAnimatorProperty.prototype.defaultPropsArray = [];
extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);

/* global PropertyFactory, degToRads, TextSelectorProp */
/* exported TextAnimatorDataProperty */

function TextAnimatorDataProperty(elem, animatorProps, container) {
  var defaultData = { propType: false };
  var getProp = PropertyFactory.getProp;
  var textAnimatorAnimatables = animatorProps.a;
  this.a = {
    r: textAnimatorAnimatables.r ? getProp(elem, textAnimatorAnimatables.r, 0, degToRads, container) : defaultData,
    rx: textAnimatorAnimatables.rx ? getProp(elem, textAnimatorAnimatables.rx, 0, degToRads, container) : defaultData,
    ry: textAnimatorAnimatables.ry ? getProp(elem, textAnimatorAnimatables.ry, 0, degToRads, container) : defaultData,
    sk: textAnimatorAnimatables.sk ? getProp(elem, textAnimatorAnimatables.sk, 0, degToRads, container) : defaultData,
    sa: textAnimatorAnimatables.sa ? getProp(elem, textAnimatorAnimatables.sa, 0, degToRads, container) : defaultData,
    s: textAnimatorAnimatables.s ? getProp(elem, textAnimatorAnimatables.s, 1, 0.01, container) : defaultData,
    a: textAnimatorAnimatables.a ? getProp(elem, textAnimatorAnimatables.a, 1, 0, container) : defaultData,
    o: textAnimatorAnimatables.o ? getProp(elem, textAnimatorAnimatables.o, 0, 0.01, container) : defaultData,
    p: textAnimatorAnimatables.p ? getProp(elem, textAnimatorAnimatables.p, 1, 0, container) : defaultData,
    sw: textAnimatorAnimatables.sw ? getProp(elem, textAnimatorAnimatables.sw, 0, 0, container) : defaultData,
    sc: textAnimatorAnimatables.sc ? getProp(elem, textAnimatorAnimatables.sc, 1, 0, container) : defaultData,
    fc: textAnimatorAnimatables.fc ? getProp(elem, textAnimatorAnimatables.fc, 1, 0, container) : defaultData,
    fh: textAnimatorAnimatables.fh ? getProp(elem, textAnimatorAnimatables.fh, 0, 0, container) : defaultData,
    fs: textAnimatorAnimatables.fs ? getProp(elem, textAnimatorAnimatables.fs, 0, 0.01, container) : defaultData,
    fb: textAnimatorAnimatables.fb ? getProp(elem, textAnimatorAnimatables.fb, 0, 0.01, container) : defaultData,
    t: textAnimatorAnimatables.t ? getProp(elem, textAnimatorAnimatables.t, 0, 0, container) : defaultData,
  };

  this.s = TextSelectorProp.getTextSelectorProp(elem, animatorProps.s, container);
  this.s.t = animatorProps.s.t;
}

function LetterProps(o, sw, sc, fc, m, p) {
  this.o = o;
  this.sw = sw;
  this.sc = sc;
  this.fc = fc;
  this.m = m;
  this.p = p;
  this._mdf = {
    o: true,
    sw: !!sw,
    sc: !!sc,
    fc: !!fc,
    m: true,
    p: true,
  };
}

LetterProps.prototype.update = function (o, sw, sc, fc, m, p) {
  this._mdf.o = false;
  this._mdf.sw = false;
  this._mdf.sc = false;
  this._mdf.fc = false;
  this._mdf.m = false;
  this._mdf.p = false;
  var updated = false;

  if (this.o !== o) {
    this.o = o;
    this._mdf.o = true;
    updated = true;
  }
  if (this.sw !== sw) {
    this.sw = sw;
    this._mdf.sw = true;
    updated = true;
  }
  if (this.sc !== sc) {
    this.sc = sc;
    this._mdf.sc = true;
    updated = true;
  }
  if (this.fc !== fc) {
    this.fc = fc;
    this._mdf.fc = true;
    updated = true;
  }
  if (this.m !== m) {
    this.m = m;
    this._mdf.m = true;
    updated = true;
  }
  if (p.length && (this.p[0] !== p[0] || this.p[1] !== p[1] || this.p[4] !== p[4] || this.p[5] !== p[5] || this.p[12] !== p[12] || this.p[13] !== p[13])) {
    this.p = p;
    this._mdf.p = true;
    updated = true;
  }
  return updated;
};

/* global FontManager, initialDefaultFrame, getFontProperties */
/* exported TextProperty */

function TextProperty(elem, data) {
  this._frameId = initialDefaultFrame;
  this.pv = '';
  this.v = '';
  this.kf = false;
  this._isFirstFrame = true;
  this._mdf = false;
  this.data = data;
  this.elem = elem;
  this.comp = this.elem.comp;
  this.keysIndex = 0;
  this.canResize = false;
  this.minimumFontSize = 1;
  this.effectsSequence = [];
  this.currentData = {
    ascent: 0,
    boxWidth: this.defaultBoxWidth,
    f: '',
    fStyle: '',
    fWeight: '',
    fc: '',
    j: '',
    justifyOffset: '',
    l: [],
    lh: 0,
    lineWidths: [],
    ls: '',
    of: '',
    s: '',
    sc: '',
    sw: 0,
    t: 0,
    tr: 0,
    sz: 0,
    ps: null,
    fillColorAnim: false,
    strokeColorAnim: false,
    strokeWidthAnim: false,
    yOffset: 0,
    finalSize: 0,
    finalText: [],
    finalLineHeight: 0,
    __complete: false,

  };
  this.copyData(this.currentData, this.data.d.k[0].s);

  if (!this.searchProperty()) {
    this.completeTextData(this.currentData);
  }
}

TextProperty.prototype.defaultBoxWidth = [0, 0];

TextProperty.prototype.copyData = function (obj, data) {
  for (var s in data) {
    if (Object.prototype.hasOwnProperty.call(data, s)) {
      obj[s] = data[s];
    }
  }
  return obj;
};

TextProperty.prototype.setCurrentData = function (data) {
  if (!data.__complete) {
    this.completeTextData(data);
  }
  this.currentData = data;
  this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth;
  this._mdf = true;
};

TextProperty.prototype.searchProperty = function () {
  return this.searchKeyframes();
};

TextProperty.prototype.searchKeyframes = function () {
  this.kf = this.data.d.k.length > 1;
  if (this.kf) {
    this.addEffect(this.getKeyframeValue.bind(this));
  }
  return this.kf;
};

TextProperty.prototype.addEffect = function (effectFunction) {
  this.effectsSequence.push(effectFunction);
  this.elem.addDynamicProperty(this);
};

TextProperty.prototype.getValue = function (_finalValue) {
  if ((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !_finalValue) {
    return;
  }
  this.currentData.t = this.data.d.k[this.keysIndex].s.t;
  var currentValue = this.currentData;
  var currentIndex = this.keysIndex;
  if (this.lock) {
    this.setCurrentData(this.currentData);
    return;
  }
  this.lock = true;
  this._mdf = false;
  var i; var
    len = this.effectsSequence.length;
  var finalValue = _finalValue || this.data.d.k[this.keysIndex].s;
  for (i = 0; i < len; i += 1) {
    // Checking if index changed to prevent creating a new object every time the expression updates.
    if (currentIndex !== this.keysIndex) {
      finalValue = this.effectsSequence[i](finalValue, finalValue.t);
    } else {
      finalValue = this.effectsSequence[i](this.currentData, finalValue.t);
    }
  }
  if (currentValue !== finalValue) {
    this.setCurrentData(finalValue);
  }
  this.v = this.currentData;
  this.pv = this.v;
  this.lock = false;
  this.frameId = this.elem.globalData.frameId;
};

TextProperty.prototype.getKeyframeValue = function () {
  var textKeys = this.data.d.k;
  var frameNum = this.elem.comp.renderedFrame;
  var i = 0; var
    len = textKeys.length;
  while (i <= len - 1) {
    if (i === len - 1 || textKeys[i + 1].t > frameNum) {
      break;
    }
    i += 1;
  }
  if (this.keysIndex !== i) {
    this.keysIndex = i;
  }
  return this.data.d.k[this.keysIndex].s;
};

TextProperty.prototype.buildFinalText = function (text) {
  var charactersArray = [];
  var i = 0;
  var len = text.length;
  var charCode;
  var secondCharCode;
  var shouldCombine = false;
  while (i < len) {
    charCode = text.charCodeAt(i);
    if (FontManager.isCombinedCharacter(charCode)) {
      charactersArray[charactersArray.length - 1] += text.charAt(i);
    } else if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      secondCharCode = text.charCodeAt(i + 1);
      if (secondCharCode >= 0xDC00 && secondCharCode <= 0xDFFF) {
        if (shouldCombine || FontManager.isModifier(charCode, secondCharCode)) {
          charactersArray[charactersArray.length - 1] += text.substr(i, 2);
          shouldCombine = false;
        } else {
          charactersArray.push(text.substr(i, 2));
        }
        i += 1;
      } else {
        charactersArray.push(text.charAt(i));
      }
    } else if (charCode > 0xDBFF) {
      secondCharCode = text.charCodeAt(i + 1);
      if (FontManager.isZeroWidthJoiner(charCode, secondCharCode)) {
        shouldCombine = true;
        charactersArray[charactersArray.length - 1] += text.substr(i, 2);
        i += 1;
      } else {
        charactersArray.push(text.charAt(i));
      }
    } else if (FontManager.isZeroWidthJoiner(charCode)) {
      charactersArray[charactersArray.length - 1] += text.charAt(i);
      shouldCombine = true;
    } else {
      charactersArray.push(text.charAt(i));
    }
    i += 1;
  }
  return charactersArray;
};

TextProperty.prototype.completeTextData = function (documentData) {
  documentData.__complete = true;
  var fontManager = this.elem.globalData.fontManager;
  var data = this.data;
  var letters = [];
  var i; var
    len;
  var newLineFlag; var index = 0; var
    val;
  var anchorGrouping = data.m.g;
  var currentSize = 0; var currentPos = 0; var currentLine = 0; var
    lineWidths = [];
  var lineWidth = 0;
  var maxLineWidth = 0;
  var j; var
    jLen;
  var fontData = fontManager.getFontByName(documentData.f);
  var charData; var
    cLength = 0;

  var fontProps = getFontProperties(fontData);
  documentData.fWeight = fontProps.weight;
  documentData.fStyle = fontProps.style;
  documentData.finalSize = documentData.s;
  documentData.finalText = this.buildFinalText(documentData.t);
  len = documentData.finalText.length;
  documentData.finalLineHeight = documentData.lh;
  var trackingOffset = (documentData.tr / 1000) * documentData.finalSize;
  var charCode;
  if (documentData.sz) {
    var flag = true;
    var boxWidth = documentData.sz[0];
    var boxHeight = documentData.sz[1];
    var currentHeight; var
      finalText;
    while (flag) {
      finalText = this.buildFinalText(documentData.t);
      currentHeight = 0;
      lineWidth = 0;
      len = finalText.length;
      trackingOffset = (documentData.tr / 1000) * documentData.finalSize;
      var lastSpaceIndex = -1;
      for (i = 0; i < len; i += 1) {
        charCode = finalText[i].charCodeAt(0);
        newLineFlag = false;
        if (finalText[i] === ' ') {
          lastSpaceIndex = i;
        } else if (charCode === 13 || charCode === 3) {
          lineWidth = 0;
          newLineFlag = true;
          currentHeight += documentData.finalLineHeight || documentData.finalSize * 1.2;
        }
        if (fontManager.chars) {
          charData = fontManager.getCharData(finalText[i], fontData.fStyle, fontData.fFamily);
          cLength = newLineFlag ? 0 : (charData.w * documentData.finalSize) / 100;
        } else {
          // tCanvasHelper.font = documentData.s + 'px '+ fontData.fFamily;
          cLength = fontManager.measureText(finalText[i], documentData.f, documentData.finalSize);
        }
        if (lineWidth + cLength > boxWidth && finalText[i] !== ' ') {
          if (lastSpaceIndex === -1) {
            len += 1;
          } else {
            i = lastSpaceIndex;
          }
          currentHeight += documentData.finalLineHeight || documentData.finalSize * 1.2;
          finalText.splice(i, lastSpaceIndex === i ? 1 : 0, '\r');
          // finalText = finalText.substr(0,i) + "\r" + finalText.substr(i === lastSpaceIndex ? i + 1 : i);
          lastSpaceIndex = -1;
          lineWidth = 0;
        } else {
          lineWidth += cLength;
          lineWidth += trackingOffset;
        }
      }
      currentHeight += (fontData.ascent * documentData.finalSize) / 100;
      if (this.canResize && documentData.finalSize > this.minimumFontSize && boxHeight < currentHeight) {
        documentData.finalSize -= 1;
        documentData.finalLineHeight = (documentData.finalSize * documentData.lh) / documentData.s;
      } else {
        documentData.finalText = finalText;
        len = documentData.finalText.length;
        flag = false;
      }
    }
  }
  lineWidth = -trackingOffset;
  cLength = 0;
  var uncollapsedSpaces = 0;
  var currentChar;
  for (i = 0; i < len; i += 1) {
    newLineFlag = false;
    currentChar = documentData.finalText[i];
    charCode = currentChar.charCodeAt(0);
    if (charCode === 13 || charCode === 3) {
      uncollapsedSpaces = 0;
      lineWidths.push(lineWidth);
      maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
      lineWidth = -2 * trackingOffset;
      val = '';
      newLineFlag = true;
      currentLine += 1;
    } else {
      val = currentChar;
    }
    if (fontManager.chars) {
      charData = fontManager.getCharData(currentChar, fontData.fStyle, fontManager.getFontByName(documentData.f).fFamily);
      cLength = newLineFlag ? 0 : (charData.w * documentData.finalSize) / 100;
    } else {
      // var charWidth = fontManager.measureText(val, documentData.f, documentData.finalSize);
      // tCanvasHelper.font = documentData.finalSize + 'px '+ fontManager.getFontByName(documentData.f).fFamily;
      cLength = fontManager.measureText(val, documentData.f, documentData.finalSize);
    }

    //
    if (currentChar === ' ') {
      uncollapsedSpaces += cLength + trackingOffset;
    } else {
      lineWidth += cLength + trackingOffset + uncollapsedSpaces;
      uncollapsedSpaces = 0;
    }
    letters.push({
      l: cLength, an: cLength, add: currentSize, n: newLineFlag, anIndexes: [], val: val, line: currentLine, animatorJustifyOffset: 0,
    });
    if (anchorGrouping == 2) { // eslint-disable-line eqeqeq
      currentSize += cLength;
      if (val === '' || val === ' ' || i === len - 1) {
        if (val === '' || val === ' ') {
          currentSize -= cLength;
        }
        while (currentPos <= i) {
          letters[currentPos].an = currentSize;
          letters[currentPos].ind = index;
          letters[currentPos].extra = cLength;
          currentPos += 1;
        }
        index += 1;
        currentSize = 0;
      }
    } else if (anchorGrouping == 3) { // eslint-disable-line eqeqeq
      currentSize += cLength;
      if (val === '' || i === len - 1) {
        if (val === '') {
          currentSize -= cLength;
        }
        while (currentPos <= i) {
          letters[currentPos].an = currentSize;
          letters[currentPos].ind = index;
          letters[currentPos].extra = cLength;
          currentPos += 1;
        }
        currentSize = 0;
        index += 1;
      }
    } else {
      letters[index].ind = index;
      letters[index].extra = 0;
      index += 1;
    }
  }
  documentData.l = letters;
  maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
  lineWidths.push(lineWidth);
  if (documentData.sz) {
    documentData.boxWidth = documentData.sz[0];
    documentData.justifyOffset = 0;
  } else {
    documentData.boxWidth = maxLineWidth;
    switch (documentData.j) {
      case 1:
        documentData.justifyOffset = -documentData.boxWidth;
        break;
      case 2:
        documentData.justifyOffset = -documentData.boxWidth / 2;
        break;
      default:
        documentData.justifyOffset = 0;
    }
  }
  documentData.lineWidths = lineWidths;

  var animators = data.a; var animatorData; var
    letterData;
  jLen = animators.length;
  var based; var ind; var
    indexes = [];
  for (j = 0; j < jLen; j += 1) {
    animatorData = animators[j];
    if (animatorData.a.sc) {
      documentData.strokeColorAnim = true;
    }
    if (animatorData.a.sw) {
      documentData.strokeWidthAnim = true;
    }
    if (animatorData.a.fc || animatorData.a.fh || animatorData.a.fs || animatorData.a.fb) {
      documentData.fillColorAnim = true;
    }
    ind = 0;
    based = animatorData.s.b;
    for (i = 0; i < len; i += 1) {
      letterData = letters[i];
      letterData.anIndexes[j] = ind;
      if ((based == 1 && letterData.val !== '') || (based == 2 && letterData.val !== '' && letterData.val !== ' ') || (based == 3 && (letterData.n || letterData.val == ' ' || i == len - 1)) || (based == 4 && (letterData.n || i == len - 1))) { // eslint-disable-line eqeqeq
        if (animatorData.s.rn === 1) {
          indexes.push(ind);
        }
        ind += 1;
      }
    }
    data.a[j].s.totalChars = ind;
    var currentInd = -1; var
      newInd;
    if (animatorData.s.rn === 1) {
      for (i = 0; i < len; i += 1) {
        letterData = letters[i];
        if (currentInd != letterData.anIndexes[j]) { // eslint-disable-line eqeqeq
          currentInd = letterData.anIndexes[j];
          newInd = indexes.splice(Math.floor(Math.random() * indexes.length), 1)[0];
        }
        letterData.anIndexes[j] = newInd;
      }
    }
  }
  documentData.yOffset = documentData.finalLineHeight || documentData.finalSize * 1.2;
  documentData.ls = documentData.ls || 0;
  documentData.ascent = (fontData.ascent * documentData.finalSize) / 100;
};

TextProperty.prototype.updateDocumentData = function (newData, index) {
  index = index === undefined ? this.keysIndex : index;
  var dData = this.copyData({}, this.data.d.k[index].s);
  dData = this.copyData(dData, newData);
  this.data.d.k[index].s = dData;
  this.recalculate(index);
  this.elem.addDynamicProperty(this);
};

TextProperty.prototype.recalculate = function (index) {
  var dData = this.data.d.k[index].s;
  dData.__complete = false;
  this.keysIndex = 0;
  this._isFirstFrame = true;
  this.getValue(dData);
};

TextProperty.prototype.canResizeFont = function (_canResize) {
  this.canResize = _canResize;
  this.recalculate(this.keysIndex);
  this.elem.addDynamicProperty(this);
};

TextProperty.prototype.setMinimumFontSize = function (_fontValue) {
  this.minimumFontSize = Math.floor(_fontValue) || 1;
  this.recalculate(this.keysIndex);
  this.elem.addDynamicProperty(this);
};

/* global extendPrototype, BezierFactory, PropertyFactory, DynamicPropertyContainer */
/* exported TextSelectorProp */

var TextSelectorProp = (function () {
  var max = Math.max;
  var min = Math.min;
  var floor = Math.floor;

  function TextSelectorPropFactory(elem, data) {
    this._currentTextLength = -1;
    this.k = false;
    this.data = data;
    this.elem = elem;
    this.comp = elem.comp;
    this.finalS = 0;
    this.finalE = 0;
    this.initDynamicPropertyContainer(elem);
    this.s = PropertyFactory.getProp(elem, data.s || { k: 0 }, 0, 0, this);
    if ('e' in data) {
      this.e = PropertyFactory.getProp(elem, data.e, 0, 0, this);
    } else {
      this.e = { v: 100 };
    }
    this.o = PropertyFactory.getProp(elem, data.o || { k: 0 }, 0, 0, this);
    this.xe = PropertyFactory.getProp(elem, data.xe || { k: 0 }, 0, 0, this);
    this.ne = PropertyFactory.getProp(elem, data.ne || { k: 0 }, 0, 0, this);
    this.sm = PropertyFactory.getProp(elem, data.sm || { k: 100 }, 0, 0, this);
    this.a = PropertyFactory.getProp(elem, data.a, 0, 0.01, this);
    if (!this.dynamicProperties.length) {
      this.getValue();
    }
  }

  TextSelectorPropFactory.prototype = {
    getMult: function (ind) {
      if (this._currentTextLength !== this.elem.textProperty.currentData.l.length) {
        this.getValue();
      }
      // var easer = bez.getEasingCurve(this.ne.v/100,0,1-this.xe.v/100,1);
      var x1 = 0;
      var y1 = 0;
      var x2 = 1;
      var y2 = 1;
      if (this.ne.v > 0) {
        x1 = this.ne.v / 100.0;
      } else {
        y1 = -this.ne.v / 100.0;
      }
      if (this.xe.v > 0) {
        x2 = 1.0 - this.xe.v / 100.0;
      } else {
        y2 = 1.0 + this.xe.v / 100.0;
      }
      var easer = BezierFactory.getBezierEasing(x1, y1, x2, y2).get;

      var mult = 0;
      var s = this.finalS;
      var e = this.finalE;
      var type = this.data.sh;
      if (type === 2) {
        if (e === s) {
          mult = ind >= e ? 1 : 0;
        } else {
          mult = max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
        }
        mult = easer(mult);
      } else if (type === 3) {
        if (e === s) {
          mult = ind >= e ? 0 : 1;
        } else {
          mult = 1 - max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
        }

        mult = easer(mult);
      } else if (type === 4) {
        if (e === s) {
          mult = 0;
        } else {
          mult = max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
          if (mult < 0.5) {
            mult *= 2;
          } else {
            mult = 1 - 2 * (mult - 0.5);
          }
        }
        mult = easer(mult);
      } else if (type === 5) {
        if (e === s) {
          mult = 0;
        } else {
          var tot = e - s;
          /* ind += 0.5;
                    mult = -4/(tot*tot)*(ind*ind)+(4/tot)*ind; */
          ind = min(max(0, ind + 0.5 - s), e - s);
          var x = -tot / 2 + ind;
          var a = tot / 2;
          mult = Math.sqrt(1 - (x * x) / (a * a));
        }
        mult = easer(mult);
      } else if (type === 6) {
        if (e === s) {
          mult = 0;
        } else {
          ind = min(max(0, ind + 0.5 - s), e - s);
          mult = (1 + (Math.cos((Math.PI + Math.PI * 2 * (ind) / (e - s))))) / 2; // eslint-disable-line
        }
        mult = easer(mult);
      } else {
        if (ind >= floor(s)) {
          if (ind - s < 0) {
            mult = max(0, min(min(e, 1) - (s - ind), 1));
          } else {
            mult = max(0, min(e - ind, 1));
          }
        }
        mult = easer(mult);
      }
      // Smoothness implementation.
      // The smoothness represents a reduced range of the original [0; 1] range.
      // if smoothness is 25%, the new range will be [0.375; 0.625]
      // Steps are:
      // - find the lower value of the new range (threshold)
      // - if multiplier is smaller than that value, floor it to 0
      // - if it is larger,
      //     - subtract the threshold
      //     - divide it by the smoothness (this will return the range to [0; 1])
      // Note: If it doesn't work on some scenarios, consider applying it before the easer.
      if (this.sm.v !== 100) {
        var smoothness = this.sm.v * 0.01;
        if (smoothness === 0) {
          smoothness = 0.00000001;
        }
        var threshold = 0.5 - smoothness * 0.5;
        if (mult < threshold) {
          mult = 0;
        } else {
          mult = (mult - threshold) / smoothness;
          if (mult > 1) {
            mult = 1;
          }
        }
      }
      return mult * this.a.v;
    },
    getValue: function (newCharsFlag) {
      this.iterateDynamicProperties();
      this._mdf = newCharsFlag || this._mdf;
      this._currentTextLength = this.elem.textProperty.currentData.l.length || 0;
      if (newCharsFlag && this.data.r === 2) {
        this.e.v = this._currentTextLength;
      }
      var divisor = this.data.r === 2 ? 1 : 100 / this.data.totalChars;
      var o = this.o.v / divisor;
      var s = this.s.v / divisor + o;
      var e = (this.e.v / divisor) + o;
      if (s > e) {
        var _s = s;
        s = e;
        e = _s;
      }
      this.finalS = s;
      this.finalE = e;
    },
  };
  extendPrototype([DynamicPropertyContainer], TextSelectorPropFactory);

  function getTextSelectorProp(elem, data, arr) {
    return new TextSelectorPropFactory(elem, data, arr);
  }

  return {
    getTextSelectorProp: getTextSelectorProp,
  };
}());

/* global createSizedArray, pooling */
/* exported poolFactory */

var poolFactory = (function () {
  return function (initialLength, _create, _release) {
    var _length = 0;
    var _maxLength = initialLength;
    var pool = createSizedArray(_maxLength);

    var ob = {
      newElement: newElement,
      release: release,
    };

    function newElement() {
      var element;
      if (_length) {
        _length -= 1;
        element = pool[_length];
      } else {
        element = _create();
      }
      return element;
    }

    function release(element) {
      if (_length === _maxLength) {
        pool = pooling.double(pool);
        _maxLength *= 2;
      }
      if (_release) {
        _release(element);
      }
      pool[_length] = element;
      _length += 1;
    }

    return ob;
  };
}());

/* global createSizedArray */
/* exported pooling */

var pooling = (function () {
  function double(arr) {
    return arr.concat(createSizedArray(arr.length));
  }

  return {
    double: double,
  };
}());

/* global createTypedArray, poolFactory */
/* exported pointPool */

var pointPool = (function () {
  function create() {
    return createTypedArray('float32', 2);
  }
  return poolFactory(8, create);
}());

/* global ShapePath, pointPool, poolFactory */
/* exported shapePool */

var shapePool = (function () {
  function create() {
    return new ShapePath();
  }

  function release(shapePath) {
    var len = shapePath._length;
    var i;
    for (i = 0; i < len; i += 1) {
      pointPool.release(shapePath.v[i]);
      pointPool.release(shapePath.i[i]);
      pointPool.release(shapePath.o[i]);
      shapePath.v[i] = null;
      shapePath.i[i] = null;
      shapePath.o[i] = null;
    }
    shapePath._length = 0;
    shapePath.c = false;
  }

  function clone(shape) {
    var cloned = factory.newElement();
    var i;
    var len = shape._length === undefined ? shape.v.length : shape._length;
    cloned.setLength(len);
    cloned.c = shape.c;

    for (i = 0; i < len; i += 1) {
      cloned.setTripleAt(shape.v[i][0], shape.v[i][1], shape.o[i][0], shape.o[i][1], shape.i[i][0], shape.i[i][1], i);
    }
    return cloned;
  }

  var factory = poolFactory(4, create, release);
  factory.clone = clone;

  return factory;
}());

/* global createSizedArray, ShapeCollection, shapePool, pooling */
/* exported shapeCollectionPool */

var shapeCollectionPool = (function () {
  var ob = {
    newShapeCollection: newShapeCollection,
    release: release,
  };

  var _length = 0;
  var _maxLength = 4;
  var pool = createSizedArray(_maxLength);

  function newShapeCollection() {
    var shapeCollection;
    if (_length) {
      _length -= 1;
      shapeCollection = pool[_length];
    } else {
      shapeCollection = new ShapeCollection();
    }
    return shapeCollection;
  }

  function release(shapeCollection) {
    var i;
    var len = shapeCollection._length;
    for (i = 0; i < len; i += 1) {
      shapePool.release(shapeCollection.shapes[i]);
    }
    shapeCollection._length = 0;

    if (_length === _maxLength) {
      pool = pooling.double(pool);
      _maxLength *= 2;
    }
    pool[_length] = shapeCollection;
    _length += 1;
  }

  return ob;
}());

/* global poolFactory, bezierLengthPool */
/* exported segmentsLengthPool */

var segmentsLengthPool = (function () {
  function create() {
    return {
      lengths: [],
      totalLength: 0,
    };
  }

  function release(element) {
    var i;
    var len = element.lengths.length;
    for (i = 0; i < len; i += 1) {
      bezierLengthPool.release(element.lengths[i]);
    }
    element.lengths.length = 0;
  }

  return poolFactory(8, create, release);
}());

/* global createTypedArray, defaultCurveSegments, poolFactory */
/* exported bezierLengthPool */

var bezierLengthPool = (function () {
  function create() {
    return {
      addedLength: 0,
      percents: createTypedArray('float32', defaultCurveSegments),
      lengths: createTypedArray('float32', defaultCurveSegments),
    };
  }
  return poolFactory(8, create);
}());

/* exported markerParser */

var markerParser = (

  function () {
    function parsePayloadLines(payload) {
      var lines = payload.split('\r\n');
      var keys = {};
      var line;
      var keysCount = 0;
      for (var i = 0; i < lines.length; i += 1) {
        line = lines[i].split(':');
        if (line.length === 2) {
          keys[line[0]] = line[1].trim();
          keysCount += 1;
        }
      }
      if (keysCount === 0) {
        throw new Error();
      }
      return keys;
    }

    return function (_markers) {
      var markers = [];
      for (var i = 0; i < _markers.length; i += 1) {
        var _marker = _markers[i];
        var markerData = {
          time: _marker.tm,
          duration: _marker.dr,
        };
        try {
          markerData.payload = JSON.parse(_markers[i].cm);
        } catch (_) {
          try {
            markerData.payload = parsePayloadLines(_markers[i].cm);
          } catch (__) {
            markerData.payload = {
              name: _markers[i],
            };
          }
        }
        markers.push(markerData);
      }
      return markers;
    };
  }());

/* global AudioElement, FootageElement, FontManager */

function BaseRenderer() {}
BaseRenderer.prototype.checkLayers = function (num) {
  var i;
  var len = this.layers.length;
  var data;
  this.completeLayers = true;
  for (i = len - 1; i >= 0; i -= 1) {
    if (!this.elements[i]) {
      data = this.layers[i];
      if (data.ip - data.st <= (num - this.layers[i].st) && data.op - data.st > (num - this.layers[i].st)) {
        this.buildItem(i);
      }
    }
    this.completeLayers = this.elements[i] ? this.completeLayers : false;
  }
  this.checkPendingElements();
};

BaseRenderer.prototype.createItem = function (layer) {
  switch (layer.ty) {
    case 2:
      return this.createImage(layer);
    case 0:
      return this.createComp(layer);
    case 1:
      return this.createSolid(layer);
    case 3:
      return this.createNull(layer);
    case 4:
      return this.createShape(layer);
    case 5:
      return this.createText(layer);
    case 6:
      return this.createAudio(layer);
    case 13:
      return this.createCamera(layer);
    case 15:
      return this.createFootage(layer);
    default:
      return this.createNull(layer);
  }
};

BaseRenderer.prototype.createCamera = function () {
  throw new Error('You\'re using a 3d camera. Try the html renderer.');
};

BaseRenderer.prototype.createAudio = function (data) {
  return new AudioElement(data, this.globalData, this);
};

BaseRenderer.prototype.createFootage = function (data) {
  return new FootageElement(data, this.globalData, this);
};

BaseRenderer.prototype.buildAllItems = function () {
  var i;
  var len = this.layers.length;
  for (i = 0; i < len; i += 1) {
    this.buildItem(i);
  }
  this.checkPendingElements();
};

BaseRenderer.prototype.includeLayers = function (newLayers) {
  this.completeLayers = false;
  var i;
  var len = newLayers.length;
  var j;
  var jLen = this.layers.length;
  for (i = 0; i < len; i += 1) {
    j = 0;
    while (j < jLen) {
      if (this.layers[j].id === newLayers[i].id) {
        this.layers[j] = newLayers[i];
        break;
      }
      j += 1;
    }
  }
};

BaseRenderer.prototype.setProjectInterface = function (pInterface) {
  this.globalData.projectInterface = pInterface;
};

BaseRenderer.prototype.initItems = function () {
  if (!this.globalData.progressiveLoad) {
    this.buildAllItems();
  }
};
BaseRenderer.prototype.buildElementParenting = function (element, parentName, hierarchy) {
  var elements = this.elements;
  var layers = this.layers;
  var i = 0;
  var len = layers.length;
  while (i < len) {
    if (layers[i].ind == parentName) { // eslint-disable-line eqeqeq
      if (!elements[i] || elements[i] === true) {
        this.buildItem(i);
        this.addPendingElement(element);
      } else {
        hierarchy.push(elements[i]);
        elements[i].setAsParent();
        if (layers[i].parent !== undefined) {
          this.buildElementParenting(element, layers[i].parent, hierarchy);
        } else {
          element.setHierarchy(hierarchy);
        }
      }
    }
    i += 1;
  }
};

BaseRenderer.prototype.addPendingElement = function (element) {
  this.pendingElements.push(element);
};

BaseRenderer.prototype.searchExtraCompositions = function (assets) {
  var i;
  var len = assets.length;
  for (i = 0; i < len; i += 1) {
    if (assets[i].xt) {
      var comp = this.createComp(assets[i]);
      comp.initExpressions();
      this.globalData.projectInterface.registerComposition(comp);
    }
  }
};

BaseRenderer.prototype.setupGlobalData = function (animData, fontsContainer) {
  this.globalData.fontManager = new FontManager();
  this.globalData.fontManager.addChars(animData.chars);
  this.globalData.fontManager.addFonts(animData.fonts, fontsContainer);
  this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem);
  this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem);
  this.globalData.imageLoader = this.animationItem.imagePreloader;
  this.globalData.audioController = this.animationItem.audioController;
  this.globalData.frameId = 0;
  this.globalData.frameRate = animData.fr;
  this.globalData.nm = animData.nm;
  this.globalData.compSize = {
    w: animData.w,
    h: animData.h,
  };
};

/* global createElementID, extendPrototype, BaseRenderer, NullElement, SVGShapeElement, SVGTextLottieElement,
IImageElement, SVGCompElement, ISolidElement, createNS, locationHref, createSizedArray, expressionsPlugin */

function SVGRenderer(animationItem, config) {
  this.animationItem = animationItem;
  this.layers = null;
  this.renderedFrame = -1;
  this.svgElement = createNS('svg');
  var ariaLabel = '';
  if (config && config.title) {
    var titleElement = createNS('title');
    var titleId = createElementID();
    titleElement.setAttribute('id', titleId);
    titleElement.textContent = config.title;
    this.svgElement.appendChild(titleElement);
    ariaLabel += titleId;
  }
  if (config && config.description) {
    var descElement = createNS('desc');
    var descId = createElementID();
    descElement.setAttribute('id', descId);
    descElement.textContent = config.description;
    this.svgElement.appendChild(descElement);
    ariaLabel += ' ' + descId;
  }
  if (ariaLabel) {
    this.svgElement.setAttribute('aria-labelledby', ariaLabel);
  }
  var defs = createNS('defs');
  this.svgElement.appendChild(defs);
  var maskElement = createNS('g');
  this.svgElement.appendChild(maskElement);
  this.layerElement = maskElement;
  this.renderConfig = {
    preserveAspectRatio: (config && config.preserveAspectRatio) || 'xMidYMid meet',
    imagePreserveAspectRatio: (config && config.imagePreserveAspectRatio) || 'xMidYMid slice',
    contentVisibility: (config && config.contentVisibility) || 'visible',
    progressiveLoad: (config && config.progressiveLoad) || false,
    hideOnTransparent: !((config && config.hideOnTransparent === false)),
    viewBoxOnly: (config && config.viewBoxOnly) || false,
    viewBoxSize: (config && config.viewBoxSize) || false,
    className: (config && config.className) || '',
    id: (config && config.id) || '',
    focusable: config && config.focusable,
    filterSize: {
      width: (config && config.filterSize && config.filterSize.width) || '100%',
      height: (config && config.filterSize && config.filterSize.height) || '100%',
      x: (config && config.filterSize && config.filterSize.x) || '0%',
      y: (config && config.filterSize && config.filterSize.y) || '0%',
    },
  };

  this.globalData = {
    _mdf: false,
    frameNum: -1,
    defs: defs,
    renderConfig: this.renderConfig,
  };
  this.elements = [];
  this.pendingElements = [];
  this.destroyed = false;
  this.rendererType = 'svg';
}

extendPrototype([BaseRenderer], SVGRenderer);

SVGRenderer.prototype.createNull = function (data) {
  return new NullElement(data, this.globalData, this);
};

SVGRenderer.prototype.createShape = function (data) {
  return new SVGShapeElement(data, this.globalData, this);
};

SVGRenderer.prototype.createText = function (data) {
  return new SVGTextLottieElement(data, this.globalData, this);
};

SVGRenderer.prototype.createImage = function (data) {
  return new IImageElement(data, this.globalData, this);
};

SVGRenderer.prototype.createComp = function (data) {
  return new SVGCompElement(data, this.globalData, this);
};

SVGRenderer.prototype.createSolid = function (data) {
  return new ISolidElement(data, this.globalData, this);
};

SVGRenderer.prototype.configAnimation = function (animData) {
  this.svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  if (this.renderConfig.viewBoxSize) {
    this.svgElement.setAttribute('viewBox', this.renderConfig.viewBoxSize);
  } else {
    this.svgElement.setAttribute('viewBox', '0 0 ' + animData.w + ' ' + animData.h);
  }

  if (!this.renderConfig.viewBoxOnly) {
    this.svgElement.setAttribute('width', animData.w);
    this.svgElement.setAttribute('height', animData.h);
    this.svgElement.style.width = '100%';
    this.svgElement.style.height = '100%';
    this.svgElement.style.transform = 'translate3d(0,0,0)';
    this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility;
  }
  if (this.renderConfig.className) {
    this.svgElement.setAttribute('class', this.renderConfig.className);
  }
  if (this.renderConfig.id) {
    this.svgElement.setAttribute('id', this.renderConfig.id);
  }
  if (this.renderConfig.focusable !== undefined) {
    this.svgElement.setAttribute('focusable', this.renderConfig.focusable);
  }
  this.svgElement.setAttribute('preserveAspectRatio', this.renderConfig.preserveAspectRatio);
  // this.layerElement.style.transform = 'translate3d(0,0,0)';
  // this.layerElement.style.transformOrigin = this.layerElement.style.mozTransformOrigin = this.layerElement.style.webkitTransformOrigin = this.layerElement.style['-webkit-transform'] = "0px 0px 0px";
  this.animationItem.wrapper.appendChild(this.svgElement);
  // Mask animation
  var defs = this.globalData.defs;

  this.setupGlobalData(animData, defs);
  this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
  this.data = animData;

  var maskElement = createNS('clipPath');
  var rect = createNS('rect');
  rect.setAttribute('width', animData.w);
  rect.setAttribute('height', animData.h);
  rect.setAttribute('x', 0);
  rect.setAttribute('y', 0);
  var maskId = createElementID();
  maskElement.setAttribute('id', maskId);
  maskElement.appendChild(rect);
  this.layerElement.setAttribute('clip-path', 'url(' + locationHref + '#' + maskId + ')');

  defs.appendChild(maskElement);
  this.layers = animData.layers;
  this.elements = createSizedArray(animData.layers.length);
};

SVGRenderer.prototype.destroy = function () {
  if (this.animationItem.wrapper) {
    this.animationItem.wrapper.innerText = '';
  }
  this.layerElement = null;
  this.globalData.defs = null;
  var i;
  var len = this.layers ? this.layers.length : 0;
  for (i = 0; i < len; i += 1) {
    if (this.elements[i]) {
      this.elements[i].destroy();
    }
  }
  this.elements.length = 0;
  this.destroyed = true;
  this.animationItem = null;
};

SVGRenderer.prototype.updateContainerSize = function () {
};

SVGRenderer.prototype.buildItem = function (pos) {
  var elements = this.elements;
  if (elements[pos] || this.layers[pos].ty === 99) {
    return;
  }
  elements[pos] = true;
  var element = this.createItem(this.layers[pos]);

  elements[pos] = element;
  if (expressionsPlugin) {
    if (this.layers[pos].ty === 0) {
      this.globalData.projectInterface.registerComposition(element);
    }
    element.initExpressions();
  }
  this.appendElementInPos(element, pos);
  if (this.layers[pos].tt) {
    if (!this.elements[pos - 1] || this.elements[pos - 1] === true) {
      this.buildItem(pos - 1);
      this.addPendingElement(element);
    } else {
      element.setMatte(elements[pos - 1].layerId);
    }
  }
};

SVGRenderer.prototype.checkPendingElements = function () {
  while (this.pendingElements.length) {
    var element = this.pendingElements.pop();
    element.checkParenting();
    if (element.data.tt) {
      var i = 0;
      var len = this.elements.length;
      while (i < len) {
        if (this.elements[i] === element) {
          element.setMatte(this.elements[i - 1].layerId);
          break;
        }
        i += 1;
      }
    }
  }
};

SVGRenderer.prototype.renderFrame = function (num) {
  if (this.renderedFrame === num || this.destroyed) {
    return;
  }
  if (num === null) {
    num = this.renderedFrame;
  } else {
    this.renderedFrame = num;
  }
  // console.log('-------');
  // console.log('FRAME ',num);
  this.globalData.frameNum = num;
  this.globalData.frameId += 1;
  this.globalData.projectInterface.currentFrame = num;
  this.globalData._mdf = false;
  var i;
  var len = this.layers.length;
  if (!this.completeLayers) {
    this.checkLayers(num);
  }
  for (i = len - 1; i >= 0; i -= 1) {
    if (this.completeLayers || this.elements[i]) {
      this.elements[i].prepareFrame(num - this.layers[i].st);
    }
  }
  if (this.globalData._mdf) {
    for (i = 0; i < len; i += 1) {
      if (this.completeLayers || this.elements[i]) {
        this.elements[i].renderFrame();
      }
    }
  }
};

SVGRenderer.prototype.appendElementInPos = function (element, pos) {
  var newElement = element.getBaseElement();
  if (!newElement) {
    return;
  }
  var i = 0;
  var nextElement;
  while (i < pos) {
    if (this.elements[i] && this.elements[i] !== true && this.elements[i].getBaseElement()) {
      nextElement = this.elements[i].getBaseElement();
    }
    i += 1;
  }
  if (nextElement) {
    this.layerElement.insertBefore(newElement, nextElement);
  } else {
    this.layerElement.appendChild(newElement);
  }
};

SVGRenderer.prototype.hide = function () {
  this.layerElement.style.display = 'none';
};

SVGRenderer.prototype.show = function () {
  this.layerElement.style.display = 'block';
};

/* global CVContextData, Matrix, extendPrototype, BaseRenderer, CVShapeElement, CVTextElement,
CVImageElement, CVCompElement, CVSolidElement, SVGRenderer, createTag, createSizedArray */

function CanvasRenderer(animationItem, config) {
  this.animationItem = animationItem;
  this.renderConfig = {
    clearCanvas: (config && config.clearCanvas !== undefined) ? config.clearCanvas : true,
    context: (config && config.context) || null,
    progressiveLoad: (config && config.progressiveLoad) || false,
    preserveAspectRatio: (config && config.preserveAspectRatio) || 'xMidYMid meet',
    imagePreserveAspectRatio: (config && config.imagePreserveAspectRatio) || 'xMidYMid slice',
    contentVisibility: (config && config.contentVisibility) || 'visible',
    className: (config && config.className) || '',
    id: (config && config.id) || '',
  };
  this.renderConfig.dpr = (config && config.dpr) || 1;
  if (this.animationItem.wrapper) {
    this.renderConfig.dpr = (config && config.dpr) || window.devicePixelRatio || 1;
  }
  this.renderedFrame = -1;
  this.globalData = {
    frameNum: -1,
    _mdf: false,
    renderConfig: this.renderConfig,
    currentGlobalAlpha: -1,
  };
  this.contextData = new CVContextData();
  this.elements = [];
  this.pendingElements = [];
  this.transformMat = new Matrix();
  this.completeLayers = false;
  this.rendererType = 'canvas';
}
extendPrototype([BaseRenderer], CanvasRenderer);

CanvasRenderer.prototype.createShape = function (data) {
  return new CVShapeElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createText = function (data) {
  return new CVTextElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createImage = function (data) {
  return new CVImageElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createComp = function (data) {
  return new CVCompElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createSolid = function (data) {
  return new CVSolidElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull;

CanvasRenderer.prototype.ctxTransform = function (props) {
  if (props[0] === 1 && props[1] === 0 && props[4] === 0 && props[5] === 1 && props[12] === 0 && props[13] === 0) {
    return;
  }
  if (!this.renderConfig.clearCanvas) {
    this.canvasContext.transform(props[0], props[1], props[4], props[5], props[12], props[13]);
    return;
  }
  this.transformMat.cloneFromProps(props);
  var cProps = this.contextData.cTr.props;
  this.transformMat.transform(cProps[0], cProps[1], cProps[2], cProps[3], cProps[4], cProps[5], cProps[6], cProps[7], cProps[8], cProps[9], cProps[10], cProps[11], cProps[12], cProps[13], cProps[14], cProps[15]);
  // this.contextData.cTr.transform(props[0],props[1],props[2],props[3],props[4],props[5],props[6],props[7],props[8],props[9],props[10],props[11],props[12],props[13],props[14],props[15]);
  this.contextData.cTr.cloneFromProps(this.transformMat.props);
  var trProps = this.contextData.cTr.props;
  this.canvasContext.setTransform(trProps[0], trProps[1], trProps[4], trProps[5], trProps[12], trProps[13]);
};

CanvasRenderer.prototype.ctxOpacity = function (op) {
  /* if(op === 1){
        return;
    } */
  if (!this.renderConfig.clearCanvas) {
    this.canvasContext.globalAlpha *= op < 0 ? 0 : op;
    this.globalData.currentGlobalAlpha = this.contextData.cO;
    return;
  }
  this.contextData.cO *= op < 0 ? 0 : op;
  if (this.globalData.currentGlobalAlpha !== this.contextData.cO) {
    this.canvasContext.globalAlpha = this.contextData.cO;
    this.globalData.currentGlobalAlpha = this.contextData.cO;
  }
};

CanvasRenderer.prototype.reset = function () {
  if (!this.renderConfig.clearCanvas) {
    this.canvasContext.restore();
    return;
  }
  this.contextData.reset();
};

CanvasRenderer.prototype.save = function (actionFlag) {
  if (!this.renderConfig.clearCanvas) {
    this.canvasContext.save();
    return;
  }
  if (actionFlag) {
    this.canvasContext.save();
  }
  var props = this.contextData.cTr.props;
  if (this.contextData._length <= this.contextData.cArrPos) {
    this.contextData.duplicate();
  }
  var i;
  var arr = this.contextData.saved[this.contextData.cArrPos];
  for (i = 0; i < 16; i += 1) {
    arr[i] = props[i];
  }
  this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO;
  this.contextData.cArrPos += 1;
};

CanvasRenderer.prototype.restore = function (actionFlag) {
  if (!this.renderConfig.clearCanvas) {
    this.canvasContext.restore();
    return;
  }
  if (actionFlag) {
    this.canvasContext.restore();
    this.globalData.blendMode = 'source-over';
  }
  this.contextData.cArrPos -= 1;
  var popped = this.contextData.saved[this.contextData.cArrPos];
  var i;
  var arr = this.contextData.cTr.props;
  for (i = 0; i < 16; i += 1) {
    arr[i] = popped[i];
  }
  this.canvasContext.setTransform(popped[0], popped[1], popped[4], popped[5], popped[12], popped[13]);
  popped = this.contextData.savedOp[this.contextData.cArrPos];
  this.contextData.cO = popped;
  if (this.globalData.currentGlobalAlpha !== popped) {
    this.canvasContext.globalAlpha = popped;
    this.globalData.currentGlobalAlpha = popped;
  }
};

CanvasRenderer.prototype.configAnimation = function (animData) {
  if (this.animationItem.wrapper) {
    this.animationItem.container = createTag('canvas');
    var containerStyle = this.animationItem.container.style;
    containerStyle.width = '100%';
    containerStyle.height = '100%';
    var origin = '0px 0px 0px';
    containerStyle.transformOrigin = origin;
    containerStyle.mozTransformOrigin = origin;
    containerStyle.webkitTransformOrigin = origin;
    containerStyle['-webkit-transform'] = origin;
    containerStyle.contentVisibility = this.renderConfig.contentVisibility;
    this.animationItem.wrapper.appendChild(this.animationItem.container);
    this.canvasContext = this.animationItem.container.getContext('2d');
    if (this.renderConfig.className) {
      this.animationItem.container.setAttribute('class', this.renderConfig.className);
    }
    if (this.renderConfig.id) {
      this.animationItem.container.setAttribute('id', this.renderConfig.id);
    }
  } else {
    this.canvasContext = this.renderConfig.context;
  }
  this.data = animData;
  this.layers = animData.layers;
  this.transformCanvas = {
    w: animData.w,
    h: animData.h,
    sx: 0,
    sy: 0,
    tx: 0,
    ty: 0,
  };
  this.setupGlobalData(animData, document.body);
  this.globalData.canvasContext = this.canvasContext;
  this.globalData.renderer = this;
  this.globalData.isDashed = false;
  this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
  this.globalData.transformCanvas = this.transformCanvas;
  this.elements = createSizedArray(animData.layers.length);

  this.updateContainerSize();
};

CanvasRenderer.prototype.updateContainerSize = function () {
  this.reset();
  var elementWidth;
  var elementHeight;
  if (this.animationItem.wrapper && this.animationItem.container) {
    elementWidth = this.animationItem.wrapper.offsetWidth;
    elementHeight = this.animationItem.wrapper.offsetHeight;
    this.animationItem.container.setAttribute('width', elementWidth * this.renderConfig.dpr);
    this.animationItem.container.setAttribute('height', elementHeight * this.renderConfig.dpr);
  } else {
    elementWidth = this.canvasContext.canvas.width * this.renderConfig.dpr;
    elementHeight = this.canvasContext.canvas.height * this.renderConfig.dpr;
  }
  var elementRel;
  var animationRel;
  if (this.renderConfig.preserveAspectRatio.indexOf('meet') !== -1 || this.renderConfig.preserveAspectRatio.indexOf('slice') !== -1) {
    var par = this.renderConfig.preserveAspectRatio.split(' ');
    var fillType = par[1] || 'meet';
    var pos = par[0] || 'xMidYMid';
    var xPos = pos.substr(0, 4);
    var yPos = pos.substr(4);
    elementRel = elementWidth / elementHeight;
    animationRel = this.transformCanvas.w / this.transformCanvas.h;
    if ((animationRel > elementRel && fillType === 'meet') || (animationRel < elementRel && fillType === 'slice')) {
      this.transformCanvas.sx = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
      this.transformCanvas.sy = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
    } else {
      this.transformCanvas.sx = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
      this.transformCanvas.sy = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
    }

    if (xPos === 'xMid' && ((animationRel < elementRel && fillType === 'meet') || (animationRel > elementRel && fillType === 'slice'))) {
      this.transformCanvas.tx = ((elementWidth - this.transformCanvas.w * (elementHeight / this.transformCanvas.h)) / 2) * this.renderConfig.dpr;
    } else if (xPos === 'xMax' && ((animationRel < elementRel && fillType === 'meet') || (animationRel > elementRel && fillType === 'slice'))) {
      this.transformCanvas.tx = (elementWidth - this.transformCanvas.w * (elementHeight / this.transformCanvas.h)) * this.renderConfig.dpr;
    } else {
      this.transformCanvas.tx = 0;
    }
    if (yPos === 'YMid' && ((animationRel > elementRel && fillType === 'meet') || (animationRel < elementRel && fillType === 'slice'))) {
      this.transformCanvas.ty = ((elementHeight - this.transformCanvas.h * (elementWidth / this.transformCanvas.w)) / 2) * this.renderConfig.dpr;
    } else if (yPos === 'YMax' && ((animationRel > elementRel && fillType === 'meet') || (animationRel < elementRel && fillType === 'slice'))) {
      this.transformCanvas.ty = ((elementHeight - this.transformCanvas.h * (elementWidth / this.transformCanvas.w))) * this.renderConfig.dpr;
    } else {
      this.transformCanvas.ty = 0;
    }
  } else if (this.renderConfig.preserveAspectRatio === 'none') {
    this.transformCanvas.sx = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
    this.transformCanvas.sy = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
    this.transformCanvas.tx = 0;
    this.transformCanvas.ty = 0;
  } else {
    this.transformCanvas.sx = this.renderConfig.dpr;
    this.transformCanvas.sy = this.renderConfig.dpr;
    this.transformCanvas.tx = 0;
    this.transformCanvas.ty = 0;
  }
  this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1];
  /* var i, len = this.elements.length;
    for(i=0;i<len;i+=1){
        if(this.elements[i] && this.elements[i].data.ty === 0){
            this.elements[i].resize(this.globalData.transformCanvas);
        }
    } */
  this.ctxTransform(this.transformCanvas.props);
  this.canvasContext.beginPath();
  this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h);
  this.canvasContext.closePath();
  this.canvasContext.clip();

  this.renderFrame(this.renderedFrame, true);
};

CanvasRenderer.prototype.destroy = function () {
  if (this.renderConfig.clearCanvas && this.animationItem.wrapper) {
    this.animationItem.wrapper.innerText = '';
  }
  var i;
  var len = this.layers ? this.layers.length : 0;
  for (i = len - 1; i >= 0; i -= 1) {
    if (this.elements[i]) {
      this.elements[i].destroy();
    }
  }
  this.elements.length = 0;
  this.globalData.canvasContext = null;
  this.animationItem.container = null;
  this.destroyed = true;
};

CanvasRenderer.prototype.renderFrame = function (num, forceRender) {
  if ((this.renderedFrame === num && this.renderConfig.clearCanvas === true && !forceRender) || this.destroyed || num === -1) {
    return;
  }
  this.renderedFrame = num;
  this.globalData.frameNum = num - this.animationItem._isFirstFrame;
  this.globalData.frameId += 1;
  this.globalData._mdf = !this.renderConfig.clearCanvas || forceRender;
  this.globalData.projectInterface.currentFrame = num;

  // console.log('--------');
  // console.log('NEW: ',num);
  var i;
  var len = this.layers.length;
  if (!this.completeLayers) {
    this.checkLayers(num);
  }

  for (i = 0; i < len; i += 1) {
    if (this.completeLayers || this.elements[i]) {
      this.elements[i].prepareFrame(num - this.layers[i].st);
    }
  }
  if (this.globalData._mdf) {
    if (this.renderConfig.clearCanvas === true) {
      this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h);
    } else {
      this.save();
    }
    for (i = len - 1; i >= 0; i -= 1) {
      if (this.completeLayers || this.elements[i]) {
        this.elements[i].renderFrame();
      }
    }
    if (this.renderConfig.clearCanvas !== true) {
      this.restore();
    }
  }
};

CanvasRenderer.prototype.buildItem = function (pos) {
  var elements = this.elements;
  if (elements[pos] || this.layers[pos].ty === 99) {
    return;
  }
  var element = this.createItem(this.layers[pos], this, this.globalData);
  elements[pos] = element;
  element.initExpressions();
  /* if(this.layers[pos].ty === 0){
        element.resize(this.globalData.transformCanvas);
    } */
};

CanvasRenderer.prototype.checkPendingElements = function () {
  while (this.pendingElements.length) {
    var element = this.pendingElements.pop();
    element.checkParenting();
  }
};

CanvasRenderer.prototype.hide = function () {
  this.animationItem.container.style.display = 'none';
};

CanvasRenderer.prototype.show = function () {
  this.animationItem.container.style.display = 'block';
};

/* global extendPrototype, BaseRenderer, SVGRenderer, SVGShapeElement, HShapeElement, SVGTextLottieElement,
HTextElement, HCameraElement, IImageElement, HImageElement, SVGCompElement, HCompElement, ISolidElement,
HSolidElement, styleDiv, createTag, createNS */

function HybridRenderer(animationItem, config) {
  this.animationItem = animationItem;
  this.layers = null;
  this.renderedFrame = -1;
  this.renderConfig = {
    className: (config && config.className) || '',
    imagePreserveAspectRatio: (config && config.imagePreserveAspectRatio) || 'xMidYMid slice',
    hideOnTransparent: !(config && config.hideOnTransparent === false),
    filterSize: {
      width: (config && config.filterSize && config.filterSize.width) || '400%',
      height: (config && config.filterSize && config.filterSize.height) || '400%',
      x: (config && config.filterSize && config.filterSize.x) || '-100%',
      y: (config && config.filterSize && config.filterSize.y) || '-100%',
    },
  };
  this.globalData = {
    _mdf: false,
    frameNum: -1,
    renderConfig: this.renderConfig,
  };
  this.pendingElements = [];
  this.elements = [];
  this.threeDElements = [];
  this.destroyed = false;
  this.camera = null;
  this.supports3d = true;
  this.rendererType = 'html';
}

extendPrototype([BaseRenderer], HybridRenderer);

HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem;

HybridRenderer.prototype.checkPendingElements = function () {
  while (this.pendingElements.length) {
    var element = this.pendingElements.pop();
    element.checkParenting();
  }
};

HybridRenderer.prototype.appendElementInPos = function (element, pos) {
  var newDOMElement = element.getBaseElement();
  if (!newDOMElement) {
    return;
  }
  var layer = this.layers[pos];
  if (!layer.ddd || !this.supports3d) {
    if (this.threeDElements) {
      this.addTo3dContainer(newDOMElement, pos);
    } else {
      var i = 0;
      var nextDOMElement;
      var nextLayer;
      var tmpDOMElement;
      while (i < pos) {
        if (this.elements[i] && this.elements[i] !== true && this.elements[i].getBaseElement) {
          nextLayer = this.elements[i];
          tmpDOMElement = this.layers[i].ddd ? this.getThreeDContainerByPos(i) : nextLayer.getBaseElement();
          nextDOMElement = tmpDOMElement || nextDOMElement;
        }
        i += 1;
      }
      if (nextDOMElement) {
        if (!layer.ddd || !this.supports3d) {
          this.layerElement.insertBefore(newDOMElement, nextDOMElement);
        }
      } else if (!layer.ddd || !this.supports3d) {
        this.layerElement.appendChild(newDOMElement);
      }
    }
  } else {
    this.addTo3dContainer(newDOMElement, pos);
  }
};

HybridRenderer.prototype.createShape = function (data) {
  if (!this.supports3d) {
    return new SVGShapeElement(data, this.globalData, this);
  }
  return new HShapeElement(data, this.globalData, this);
};

HybridRenderer.prototype.createText = function (data) {
  if (!this.supports3d) {
    return new SVGTextLottieElement(data, this.globalData, this);
  }
  return new HTextElement(data, this.globalData, this);
};

HybridRenderer.prototype.createCamera = function (data) {
  this.camera = new HCameraElement(data, this.globalData, this);
  return this.camera;
};

HybridRenderer.prototype.createImage = function (data) {
  if (!this.supports3d) {
    return new IImageElement(data, this.globalData, this);
  }
  return new HImageElement(data, this.globalData, this);
};

HybridRenderer.prototype.createComp = function (data) {
  if (!this.supports3d) {
    return new SVGCompElement(data, this.globalData, this);
  }
  return new HCompElement(data, this.globalData, this);
};

HybridRenderer.prototype.createSolid = function (data) {
  if (!this.supports3d) {
    return new ISolidElement(data, this.globalData, this);
  }
  return new HSolidElement(data, this.globalData, this);
};

HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull;

HybridRenderer.prototype.getThreeDContainerByPos = function (pos) {
  var i = 0;
  var len = this.threeDElements.length;
  while (i < len) {
    if (this.threeDElements[i].startPos <= pos && this.threeDElements[i].endPos >= pos) {
      return this.threeDElements[i].perspectiveElem;
    }
    i += 1;
  }
  return null;
};

HybridRenderer.prototype.createThreeDContainer = function (pos, type) {
  var perspectiveElem = createTag('div');
  var style;
  var containerStyle;
  styleDiv(perspectiveElem);
  var container = createTag('div');
  styleDiv(container);
  if (type === '3d') {
    style = perspectiveElem.style;
    style.width = this.globalData.compSize.w + 'px';
    style.height = this.globalData.compSize.h + 'px';
    var center = '50% 50%';
    style.webkitTransformOrigin = center;
    style.mozTransformOrigin = center;
    style.transformOrigin = center;
    containerStyle = container.style;
    var matrix = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
    containerStyle.transform = matrix;
    containerStyle.webkitTransform = matrix;
  }

  perspectiveElem.appendChild(container);
  // this.resizerElem.appendChild(perspectiveElem);
  var threeDContainerData = {
    container: container,
    perspectiveElem: perspectiveElem,
    startPos: pos,
    endPos: pos,
    type: type,
  };
  this.threeDElements.push(threeDContainerData);
  return threeDContainerData;
};

HybridRenderer.prototype.build3dContainers = function () {
  var i;
  var len = this.layers.length;
  var lastThreeDContainerData;
  var currentContainer = '';
  for (i = 0; i < len; i += 1) {
    if (this.layers[i].ddd && this.layers[i].ty !== 3) {
      if (currentContainer !== '3d') {
        currentContainer = '3d';
        lastThreeDContainerData = this.createThreeDContainer(i, '3d');
      }
      lastThreeDContainerData.endPos = Math.max(lastThreeDContainerData.endPos, i);
    } else {
      if (currentContainer !== '2d') {
        currentContainer = '2d';
        lastThreeDContainerData = this.createThreeDContainer(i, '2d');
      }
      lastThreeDContainerData.endPos = Math.max(lastThreeDContainerData.endPos, i);
    }
  }
  len = this.threeDElements.length;
  for (i = len - 1; i >= 0; i -= 1) {
    this.resizerElem.appendChild(this.threeDElements[i].perspectiveElem);
  }
};

HybridRenderer.prototype.addTo3dContainer = function (elem, pos) {
  var i = 0;
  var len = this.threeDElements.length;
  while (i < len) {
    if (pos <= this.threeDElements[i].endPos) {
      var j = this.threeDElements[i].startPos;
      var nextElement;
      while (j < pos) {
        if (this.elements[j] && this.elements[j].getBaseElement) {
          nextElement = this.elements[j].getBaseElement();
        }
        j += 1;
      }
      if (nextElement) {
        this.threeDElements[i].container.insertBefore(elem, nextElement);
      } else {
        this.threeDElements[i].container.appendChild(elem);
      }
      break;
    }
    i += 1;
  }
};

HybridRenderer.prototype.configAnimation = function (animData) {
  var resizerElem = createTag('div');
  var wrapper = this.animationItem.wrapper;
  var style = resizerElem.style;
  style.width = animData.w + 'px';
  style.height = animData.h + 'px';
  this.resizerElem = resizerElem;
  styleDiv(resizerElem);
  style.transformStyle = 'flat';
  style.mozTransformStyle = 'flat';
  style.webkitTransformStyle = 'flat';
  if (this.renderConfig.className) {
    resizerElem.setAttribute('class', this.renderConfig.className);
  }
  wrapper.appendChild(resizerElem);

  style.overflow = 'hidden';
  var svg = createNS('svg');
  svg.setAttribute('width', '1');
  svg.setAttribute('height', '1');
  styleDiv(svg);
  this.resizerElem.appendChild(svg);
  var defs = createNS('defs');
  svg.appendChild(defs);
  this.data = animData;
  // Mask animation
  this.setupGlobalData(animData, svg);
  this.globalData.defs = defs;
  this.layers = animData.layers;
  this.layerElement = this.resizerElem;
  this.build3dContainers();
  this.updateContainerSize();
};

HybridRenderer.prototype.destroy = function () {
  if (this.animationItem.wrapper) {
    this.animationItem.wrapper.innerText = '';
  }
  this.animationItem.container = null;
  this.globalData.defs = null;
  var i;
  var len = this.layers ? this.layers.length : 0;
  for (i = 0; i < len; i += 1) {
    this.elements[i].destroy();
  }
  this.elements.length = 0;
  this.destroyed = true;
  this.animationItem = null;
};

HybridRenderer.prototype.updateContainerSize = function () {
  var elementWidth = this.animationItem.wrapper.offsetWidth;
  var elementHeight = this.animationItem.wrapper.offsetHeight;
  var elementRel = elementWidth / elementHeight;
  var animationRel = this.globalData.compSize.w / this.globalData.compSize.h;
  var sx;
  var sy;
  var tx;
  var ty;
  if (animationRel > elementRel) {
    sx = elementWidth / (this.globalData.compSize.w);
    sy = elementWidth / (this.globalData.compSize.w);
    tx = 0;
    ty = ((elementHeight - this.globalData.compSize.h * (elementWidth / this.globalData.compSize.w)) / 2);
  } else {
    sx = elementHeight / (this.globalData.compSize.h);
    sy = elementHeight / (this.globalData.compSize.h);
    tx = (elementWidth - this.globalData.compSize.w * (elementHeight / this.globalData.compSize.h)) / 2;
    ty = 0;
  }
  var style = this.resizerElem.style;
  style.webkitTransform = 'matrix3d(' + sx + ',0,0,0,0,' + sy + ',0,0,0,0,1,0,' + tx + ',' + ty + ',0,1)';
  style.transform = style.webkitTransform;
};

HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame;

HybridRenderer.prototype.hide = function () {
  this.resizerElem.style.display = 'none';
};

HybridRenderer.prototype.show = function () {
  this.resizerElem.style.display = 'block';
};

HybridRenderer.prototype.initItems = function () {
  this.buildAllItems();
  if (this.camera) {
    this.camera.setup();
  } else {
    var cWidth = this.globalData.compSize.w;
    var cHeight = this.globalData.compSize.h;
    var i;
    var len = this.threeDElements.length;
    for (i = 0; i < len; i += 1) {
      var style = this.threeDElements[i].perspectiveElem.style;
      style.webkitPerspective = Math.sqrt(Math.pow(cWidth, 2) + Math.pow(cHeight, 2)) + 'px';
      style.perspective = style.webkitPerspective;
    }
  }
};

HybridRenderer.prototype.searchExtraCompositions = function (assets) {
  var i;
  var len = assets.length;
  var floatingContainer = createTag('div');
  for (i = 0; i < len; i += 1) {
    if (assets[i].xt) {
      var comp = this.createComp(assets[i], floatingContainer, this.globalData.comp, null);
      comp.initExpressions();
      this.globalData.projectInterface.registerComposition(comp);
    }
  }
};

/* global createSizedArray, createElementID, PropertyFactory, ShapePropertyFactory, createNS, locationHref */

function MaskElement(data, element, globalData) {
  this.data = data;
  this.element = element;
  this.globalData = globalData;
  this.storedData = [];
  this.masksProperties = this.data.masksProperties || [];
  this.maskElement = null;
  var defs = this.globalData.defs;
  var i;
  var len = this.masksProperties ? this.masksProperties.length : 0;
  this.viewData = createSizedArray(len);
  this.solidPath = '';

  var path;
  var properties = this.masksProperties;
  var count = 0;
  var currentMasks = [];
  var j;
  var jLen;
  var layerId = createElementID();
  var rect;
  var expansor;
  var feMorph;
  var x;
  var maskType = 'clipPath';
  var maskRef = 'clip-path';
  for (i = 0; i < len; i += 1) {
    if ((properties[i].mode !== 'a' && properties[i].mode !== 'n') || properties[i].inv || properties[i].o.k !== 100 || properties[i].o.x) {
      maskType = 'mask';
      maskRef = 'mask';
    }

    if ((properties[i].mode === 's' || properties[i].mode === 'i') && count === 0) {
      rect = createNS('rect');
      rect.setAttribute('fill', '#ffffff');
      rect.setAttribute('width', this.element.comp.data.w || 0);
      rect.setAttribute('height', this.element.comp.data.h || 0);
      currentMasks.push(rect);
    } else {
      rect = null;
    }

    path = createNS('path');
    if (properties[i].mode === 'n') {
      // TODO move this to a factory or to a constructor
      this.viewData[i] = {
        op: PropertyFactory.getProp(this.element, properties[i].o, 0, 0.01, this.element),
        prop: ShapePropertyFactory.getShapeProp(this.element, properties[i], 3),
        elem: path,
        lastPath: '',
      };
      defs.appendChild(path);
    } else {
      count += 1;

      path.setAttribute('fill', properties[i].mode === 's' ? '#000000' : '#ffffff');
      path.setAttribute('clip-rule', 'nonzero');
      var filterID;

      if (properties[i].x.k !== 0) {
        maskType = 'mask';
        maskRef = 'mask';
        x = PropertyFactory.getProp(this.element, properties[i].x, 0, null, this.element);
        filterID = createElementID();
        expansor = createNS('filter');
        expansor.setAttribute('id', filterID);
        feMorph = createNS('feMorphology');
        feMorph.setAttribute('operator', 'erode');
        feMorph.setAttribute('in', 'SourceGraphic');
        feMorph.setAttribute('radius', '0');
        expansor.appendChild(feMorph);
        defs.appendChild(expansor);
        path.setAttribute('stroke', properties[i].mode === 's' ? '#000000' : '#ffffff');
      } else {
        feMorph = null;
        x = null;
      }

      // TODO move this to a factory or to a constructor
      this.storedData[i] = {
        elem: path,
        x: x,
        expan: feMorph,
        lastPath: '',
        lastOperator: '',
        filterId: filterID,
        lastRadius: 0,
      };
      if (properties[i].mode === 'i') {
        jLen = currentMasks.length;
        var g = createNS('g');
        for (j = 0; j < jLen; j += 1) {
          g.appendChild(currentMasks[j]);
        }
        var mask = createNS('mask');
        mask.setAttribute('mask-type', 'alpha');
        mask.setAttribute('id', layerId + '_' + count);
        mask.appendChild(path);
        defs.appendChild(mask);
        g.setAttribute('mask', 'url(' + locationHref + '#' + layerId + '_' + count + ')');

        currentMasks.length = 0;
        currentMasks.push(g);
      } else {
        currentMasks.push(path);
      }
      if (properties[i].inv && !this.solidPath) {
        this.solidPath = this.createLayerSolidPath();
      }
      // TODO move this to a factory or to a constructor
      this.viewData[i] = {
        elem: path,
        lastPath: '',
        op: PropertyFactory.getProp(this.element, properties[i].o, 0, 0.01, this.element),
        prop: ShapePropertyFactory.getShapeProp(this.element, properties[i], 3),
        invRect: rect,
      };
      if (!this.viewData[i].prop.k) {
        this.drawPath(properties[i], this.viewData[i].prop.v, this.viewData[i]);
      }
    }
  }

  this.maskElement = createNS(maskType);

  len = currentMasks.length;
  for (i = 0; i < len; i += 1) {
    this.maskElement.appendChild(currentMasks[i]);
  }

  if (count > 0) {
    this.maskElement.setAttribute('id', layerId);
    this.element.maskedElement.setAttribute(maskRef, 'url(' + locationHref + '#' + layerId + ')');
    defs.appendChild(this.maskElement);
  }
  if (this.viewData.length) {
    this.element.addRenderableComponent(this);
  }
}

MaskElement.prototype.getMaskProperty = function (pos) {
  return this.viewData[pos].prop;
};

MaskElement.prototype.renderFrame = function (isFirstFrame) {
  var finalMat = this.element.finalTransform.mat;
  var i;
  var len = this.masksProperties.length;
  for (i = 0; i < len; i += 1) {
    if (this.viewData[i].prop._mdf || isFirstFrame) {
      this.drawPath(this.masksProperties[i], this.viewData[i].prop.v, this.viewData[i]);
    }
    if (this.viewData[i].op._mdf || isFirstFrame) {
      this.viewData[i].elem.setAttribute('fill-opacity', this.viewData[i].op.v);
    }
    if (this.masksProperties[i].mode !== 'n') {
      if (this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || isFirstFrame)) {
        this.viewData[i].invRect.setAttribute('transform', finalMat.getInverseMatrix().to2dCSS());
      }
      if (this.storedData[i].x && (this.storedData[i].x._mdf || isFirstFrame)) {
        var feMorph = this.storedData[i].expan;
        if (this.storedData[i].x.v < 0) {
          if (this.storedData[i].lastOperator !== 'erode') {
            this.storedData[i].lastOperator = 'erode';
            this.storedData[i].elem.setAttribute('filter', 'url(' + locationHref + '#' + this.storedData[i].filterId + ')');
          }
          feMorph.setAttribute('radius', -this.storedData[i].x.v);
        } else {
          if (this.storedData[i].lastOperator !== 'dilate') {
            this.storedData[i].lastOperator = 'dilate';
            this.storedData[i].elem.setAttribute('filter', null);
          }
          this.storedData[i].elem.setAttribute('stroke-width', this.storedData[i].x.v * 2);
        }
      }
    }
  }
};

MaskElement.prototype.getMaskelement = function () {
  return this.maskElement;
};

MaskElement.prototype.createLayerSolidPath = function () {
  var path = 'M0,0 ';
  path += ' h' + this.globalData.compSize.w;
  path += ' v' + this.globalData.compSize.h;
  path += ' h-' + this.globalData.compSize.w;
  path += ' v-' + this.globalData.compSize.h + ' ';
  return path;
};

MaskElement.prototype.drawPath = function (pathData, pathNodes, viewData) {
  var pathString = ' M' + pathNodes.v[0][0] + ',' + pathNodes.v[0][1];
  var i;
  var len;
  len = pathNodes._length;
  for (i = 1; i < len; i += 1) {
    // pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[i][0]+','+pathNodes.i[i][1] + " "+pathNodes.v[i][0]+','+pathNodes.v[i][1];
    pathString += ' C' + pathNodes.o[i - 1][0] + ',' + pathNodes.o[i - 1][1] + ' ' + pathNodes.i[i][0] + ',' + pathNodes.i[i][1] + ' ' + pathNodes.v[i][0] + ',' + pathNodes.v[i][1];
  }
  // pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[0][0]+','+pathNodes.i[0][1] + " "+pathNodes.v[0][0]+','+pathNodes.v[0][1];
  if (pathNodes.c && len > 1) {
    pathString += ' C' + pathNodes.o[i - 1][0] + ',' + pathNodes.o[i - 1][1] + ' ' + pathNodes.i[0][0] + ',' + pathNodes.i[0][1] + ' ' + pathNodes.v[0][0] + ',' + pathNodes.v[0][1];
  }
  // pathNodes.__renderedString = pathString;

  if (viewData.lastPath !== pathString) {
    var pathShapeValue = '';
    if (viewData.elem) {
      if (pathNodes.c) {
        pathShapeValue = pathData.inv ? this.solidPath + pathString : pathString;
      }
      viewData.elem.setAttribute('d', pathShapeValue);
    }
    viewData.lastPath = pathString;
  }
};

MaskElement.prototype.destroy = function () {
  this.element = null;
  this.globalData = null;
  this.maskElement = null;
  this.data = null;
  this.masksProperties = null;
};

/**
 * @file
 * Handles AE's layer parenting property.
 *
 */

function HierarchyElement() {}

HierarchyElement.prototype = {
  /**
     * @function
     * Initializes hierarchy properties
     *
     */
  initHierarchy: function () {
    // element's parent list
    this.hierarchy = [];
    // if element is parent of another layer _isParent will be true
    this._isParent = false;
    this.checkParenting();
  },
  /**
     * @function
     * Sets layer's hierarchy.
     * @param {array} hierarch
     * layer's parent list
     *
     */
  setHierarchy: function (hierarchy) {
    this.hierarchy = hierarchy;
  },
  /**
     * @function
     * Sets layer as parent.
     *
     */
  setAsParent: function () {
    this._isParent = true;
  },
  /**
     * @function
     * Searches layer's parenting chain
     *
     */
  checkParenting: function () {
    if (this.data.parent !== undefined) {
      this.comp.buildElementParenting(this, this.data.parent, []);
    }
  },
};

/**
 * @file
 * Handles element's layer frame update.
 * Checks layer in point and out point
 *
 */

function FrameElement() {}

FrameElement.prototype = {
  /**
     * @function
     * Initializes frame related properties.
     *
     */
  initFrame: function () {
    // set to true when inpoint is rendered
    this._isFirstFrame = false;
    // list of animated properties
    this.dynamicProperties = [];
    // If layer has been modified in current tick this will be true
    this._mdf = false;
  },
  /**
     * @function
     * Calculates all dynamic values
     *
     * @param {number} num
     * current frame number in Layer's time
     * @param {boolean} isVisible
     * if layers is currently in range
     *
     */
  prepareProperties: function (num, isVisible) {
    var i;
    var len = this.dynamicProperties.length;
    for (i = 0; i < len; i += 1) {
      if (isVisible || (this._isParent && this.dynamicProperties[i].propType === 'transform')) {
        this.dynamicProperties[i].getValue();
        if (this.dynamicProperties[i]._mdf) {
          this.globalData._mdf = true;
          this._mdf = true;
        }
      }
    }
  },
  addDynamicProperty: function (prop) {
    if (this.dynamicProperties.indexOf(prop) === -1) {
      this.dynamicProperties.push(prop);
    }
  },
};

/* global TransformPropertyFactory, Matrix */

function TransformElement() {}

TransformElement.prototype = {
  initTransform: function () {
    this.finalTransform = {
      mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 },
      _matMdf: false,
      _opMdf: false,
      mat: new Matrix(),
    };
    if (this.data.ao) {
      this.finalTransform.mProp.autoOriented = true;
    }

    // TODO: check TYPE 11: Guided elements
    if (this.data.ty !== 11) {
      // this.createElements();
    }
  },
  renderTransform: function () {
    this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame;
    this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame;

    if (this.hierarchy) {
      var mat;
      var finalMat = this.finalTransform.mat;
      var i = 0;
      var len = this.hierarchy.length;
      // Checking if any of the transformation matrices in the hierarchy chain has changed.
      if (!this.finalTransform._matMdf) {
        while (i < len) {
          if (this.hierarchy[i].finalTransform.mProp._mdf) {
            this.finalTransform._matMdf = true;
            break;
          }
          i += 1;
        }
      }

      if (this.finalTransform._matMdf) {
        mat = this.finalTransform.mProp.v.props;
        finalMat.cloneFromProps(mat);
        for (i = 0; i < len; i += 1) {
          mat = this.hierarchy[i].finalTransform.mProp.v.props;
          finalMat.transform(mat[0], mat[1], mat[2], mat[3], mat[4], mat[5], mat[6], mat[7], mat[8], mat[9], mat[10], mat[11], mat[12], mat[13], mat[14], mat[15]);
        }
      }
    }
  },
  globalToLocal: function (pt) {
    var transforms = [];
    transforms.push(this.finalTransform);
    var flag = true;
    var comp = this.comp;
    while (flag) {
      if (comp.finalTransform) {
        if (comp.data.hasMask) {
          transforms.splice(0, 0, comp.finalTransform);
        }
        comp = comp.comp;
      } else {
        flag = false;
      }
    }
    var i;
    var len = transforms.length;
    var ptNew;
    for (i = 0; i < len; i += 1) {
      ptNew = transforms[i].mat.applyToPointArray(0, 0, 0);
      // ptNew = transforms[i].mat.applyToPointArray(pt[0],pt[1],pt[2]);
      pt = [pt[0] - ptNew[0], pt[1] - ptNew[1], 0];
    }
    return pt;
  },
  mHelper: new Matrix(),
};

function RenderableElement() {

}

RenderableElement.prototype = {
  initRenderable: function () {
    // layer's visibility related to inpoint and outpoint. Rename isVisible to isInRange
    this.isInRange = false;
    // layer's display state
    this.hidden = false;
    // If layer's transparency equals 0, it can be hidden
    this.isTransparent = false;
    // list of animated components
    this.renderableComponents = [];
  },
  addRenderableComponent: function (component) {
    if (this.renderableComponents.indexOf(component) === -1) {
      this.renderableComponents.push(component);
    }
  },
  removeRenderableComponent: function (component) {
    if (this.renderableComponents.indexOf(component) !== -1) {
      this.renderableComponents.splice(this.renderableComponents.indexOf(component), 1);
    }
  },
  prepareRenderableFrame: function (num) {
    this.checkLayerLimits(num);
  },
  checkTransparency: function () {
    if (this.finalTransform.mProp.o.v <= 0) {
      if (!this.isTransparent && this.globalData.renderConfig.hideOnTransparent) {
        this.isTransparent = true;
        this.hide();
      }
    } else if (this.isTransparent) {
      this.isTransparent = false;
      this.show();
    }
  },
  /**
     * @function
     * Initializes frame related properties.
     *
     * @param {number} num
     * current frame number in Layer's time
     *
     */
  checkLayerLimits: function (num) {
    if (this.data.ip - this.data.st <= num && this.data.op - this.data.st > num) {
      if (this.isInRange !== true) {
        this.globalData._mdf = true;
        this._mdf = true;
        this.isInRange = true;
        this.show();
      }
    } else if (this.isInRange !== false) {
      this.globalData._mdf = true;
      this.isInRange = false;
      this.hide();
    }
  },
  renderRenderable: function () {
    var i;
    var len = this.renderableComponents.length;
    for (i = 0; i < len; i += 1) {
      this.renderableComponents[i].renderFrame(this._isFirstFrame);
    }
    /* this.maskManager.renderFrame(this.finalTransform.mat);
        this.renderableEffectsManager.renderFrame(this._isFirstFrame); */
  },
  sourceRectAtTime: function () {
    return {
      top: 0,
      left: 0,
      width: 100,
      height: 100,
    };
  },
  getLayerSize: function () {
    if (this.data.ty === 5) {
      return { w: this.data.textData.width, h: this.data.textData.height };
    }
    return { w: this.data.width, h: this.data.height };
  },
};

/* global extendPrototype, RenderableElement, createProxyFunction */

function RenderableDOMElement() {}

(function () {
  var _prototype = {
    initElement: function (data, globalData, comp) {
      this.initFrame();
      this.initBaseData(data, globalData, comp);
      this.initTransform(data, globalData, comp);
      this.initHierarchy();
      this.initRenderable();
      this.initRendererElement();
      this.createContainerElements();
      this.createRenderableComponents();
      this.createContent();
      this.hide();
    },
    hide: function () {
      if (!this.hidden && (!this.isInRange || this.isTransparent)) {
        var elem = this.baseElement || this.layerElement;
        elem.style.display = 'none';
        this.hidden = true;
      }
    },
    show: function () {
      if (this.isInRange && !this.isTransparent) {
        if (!this.data.hd) {
          var elem = this.baseElement || this.layerElement;
          elem.style.display = 'block';
        }
        this.hidden = false;
        this._isFirstFrame = true;
      }
    },
    renderFrame: function () {
      // If it is exported as hidden (data.hd === true) no need to render
      // If it is not visible no need to render
      if (this.data.hd || this.hidden) {
        return;
      }
      this.renderTransform();
      this.renderRenderable();
      this.renderElement();
      this.renderInnerContent();
      if (this._isFirstFrame) {
        this._isFirstFrame = false;
      }
    },
    renderInnerContent: function () {},
    prepareFrame: function (num) {
      this._mdf = false;
      this.prepareRenderableFrame(num);
      this.prepareProperties(num, this.isInRange);
      this.checkTransparency();
    },
    destroy: function () {
      this.innerElem = null;
      this.destroyBaseElement();
    },
  };
  extendPrototype([RenderableElement, createProxyFunction(_prototype)], RenderableDOMElement);
}());

/* exported ProcessedElement */

function ProcessedElement(element, position) {
  this.elem = element;
  this.pos = position;
}

/* global createNS */

function SVGStyleData(data, level) {
  this.data = data;
  this.type = data.ty;
  this.d = '';
  this.lvl = level;
  this._mdf = false;
  this.closed = data.hd === true;
  this.pElem = createNS('path');
  this.msElem = null;
}

SVGStyleData.prototype.reset = function () {
  this.d = '';
  this._mdf = false;
};

function SVGShapeData(transformers, level, shape) {
  this.caches = [];
  this.styles = [];
  this.transformers = transformers;
  this.lStr = '';
  this.sh = shape;
  this.lvl = level;
  // TODO find if there are some cases where _isAnimated can be false.
  // For now, since shapes add up with other shapes. They have to be calculated every time.
  // One way of finding out is checking if all styles associated to this shape depend only of this shape
  this._isAnimated = !!shape.k;
  // TODO: commenting this for now since all shapes are animated
  var i = 0;
  var len = transformers.length;
  while (i < len) {
    if (transformers[i].mProps.dynamicProperties.length) {
      this._isAnimated = true;
      break;
    }
    i += 1;
  }
}

SVGShapeData.prototype.setAsAnimated = function () {
  this._isAnimated = true;
};

/* exported SVGTransformData */

function SVGTransformData(mProps, op, container) {
  this.transform = {
    mProps: mProps,
    op: op,
    container: container,
  };
  this.elements = [];
  this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
}

/* global DashProperty, PropertyFactory, extendPrototype, DynamicPropertyContainer */

function SVGStrokeStyleData(elem, data, styleOb) {
  this.initDynamicPropertyContainer(elem);
  this.getValue = this.iterateDynamicProperties;
  this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, this);
  this.w = PropertyFactory.getProp(elem, data.w, 0, null, this);
  this.d = new DashProperty(elem, data.d || {}, 'svg', this);
  this.c = PropertyFactory.getProp(elem, data.c, 1, 255, this);
  this.style = styleOb;
  this._isAnimated = !!this._isAnimated;
}

extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);

/* global PropertyFactory, extendPrototype, DynamicPropertyContainer */

function SVGFillStyleData(elem, data, styleOb) {
  this.initDynamicPropertyContainer(elem);
  this.getValue = this.iterateDynamicProperties;
  this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, this);
  this.c = PropertyFactory.getProp(elem, data.c, 1, 255, this);
  this.style = styleOb;
}

extendPrototype([DynamicPropertyContainer], SVGFillStyleData);

/* global PropertyFactory, degToRads, GradientProperty, createElementID, createNS, locationHref,
extendPrototype, DynamicPropertyContainer, lineCapEnum, lineJoinEnum */

function SVGGradientFillStyleData(elem, data, styleOb) {
  this.initDynamicPropertyContainer(elem);
  this.getValue = this.iterateDynamicProperties;
  this.initGradientData(elem, data, styleOb);
}

SVGGradientFillStyleData.prototype.initGradientData = function (elem, data, styleOb) {
  this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, this);
  this.s = PropertyFactory.getProp(elem, data.s, 1, null, this);
  this.e = PropertyFactory.getProp(elem, data.e, 1, null, this);
  this.h = PropertyFactory.getProp(elem, data.h || { k: 0 }, 0, 0.01, this);
  this.a = PropertyFactory.getProp(elem, data.a || { k: 0 }, 0, degToRads, this);
  this.g = new GradientProperty(elem, data.g, this);
  this.style = styleOb;
  this.stops = [];
  this.setGradientData(styleOb.pElem, data);
  this.setGradientOpacity(data, styleOb);
  this._isAnimated = !!this._isAnimated;
};

SVGGradientFillStyleData.prototype.setGradientData = function (pathElement, data) {
  var gradientId = createElementID();
  var gfill = createNS(data.t === 1 ? 'linearGradient' : 'radialGradient');
  gfill.setAttribute('id', gradientId);
  gfill.setAttribute('spreadMethod', 'pad');
  gfill.setAttribute('gradientUnits', 'userSpaceOnUse');
  var stops = [];
  var stop;
  var j;
  var jLen;
  jLen = data.g.p * 4;
  for (j = 0; j < jLen; j += 4) {
    stop = createNS('stop');
    gfill.appendChild(stop);
    stops.push(stop);
  }
  pathElement.setAttribute(data.ty === 'gf' ? 'fill' : 'stroke', 'url(' + locationHref + '#' + gradientId + ')');
  this.gf = gfill;
  this.cst = stops;
};

SVGGradientFillStyleData.prototype.setGradientOpacity = function (data, styleOb) {
  if (this.g._hasOpacity && !this.g._collapsable) {
    var stop;
    var j;
    var jLen;
    var mask = createNS('mask');
    var maskElement = createNS('path');
    mask.appendChild(maskElement);
    var opacityId = createElementID();
    var maskId = createElementID();
    mask.setAttribute('id', maskId);
    var opFill = createNS(data.t === 1 ? 'linearGradient' : 'radialGradient');
    opFill.setAttribute('id', opacityId);
    opFill.setAttribute('spreadMethod', 'pad');
    opFill.setAttribute('gradientUnits', 'userSpaceOnUse');
    jLen = data.g.k.k[0].s ? data.g.k.k[0].s.length : data.g.k.k.length;
    var stops = this.stops;
    for (j = data.g.p * 4; j < jLen; j += 2) {
      stop = createNS('stop');
      stop.setAttribute('stop-color', 'rgb(255,255,255)');
      opFill.appendChild(stop);
      stops.push(stop);
    }
    maskElement.setAttribute(data.ty === 'gf' ? 'fill' : 'stroke', 'url(' + locationHref + '#' + opacityId + ')');
    if (data.ty === 'gs') {
      maskElement.setAttribute('stroke-linecap', lineCapEnum[data.lc || 2]);
      maskElement.setAttribute('stroke-linejoin', lineJoinEnum[data.lj || 2]);
      if (data.lj === 1) {
        maskElement.setAttribute('stroke-miterlimit', data.ml);
      }
    }
    this.of = opFill;
    this.ms = mask;
    this.ost = stops;
    this.maskId = maskId;
    styleOb.msElem = maskElement;
  }
};

extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);

/* global PropertyFactory, DashProperty, extendPrototype, SVGGradientFillStyleData, DynamicPropertyContainer */

function SVGGradientStrokeStyleData(elem, data, styleOb) {
  this.initDynamicPropertyContainer(elem);
  this.getValue = this.iterateDynamicProperties;
  this.w = PropertyFactory.getProp(elem, data.w, 0, null, this);
  this.d = new DashProperty(elem, data.d || {}, 'svg', this);
  this.initGradientData(elem, data, styleOb);
  this._isAnimated = !!this._isAnimated;
}

extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);

/* global createNS */
/* exported ShapeGroupData */

function ShapeGroupData() {
  this.it = [];
  this.prevViewData = [];
  this.gr = createNS('g');
}

/* global Matrix, buildShapeString, bmFloor */
/* exported SVGElementsRenderer */

var SVGElementsRenderer = (function () {
  var _identityMatrix = new Matrix();
  var _matrixHelper = new Matrix();

  var ob = {
    createRenderFunction: createRenderFunction,
  };

  function createRenderFunction(data) {
    switch (data.ty) {
      case 'fl':
        return renderFill;
      case 'gf':
        return renderGradient;
      case 'gs':
        return renderGradientStroke;
      case 'st':
        return renderStroke;
      case 'sh':
      case 'el':
      case 'rc':
      case 'sr':
        return renderPath;
      case 'tr':
        return renderContentTransform;
      default:
        return null;
    }
  }

  function renderContentTransform(styleData, itemData, isFirstFrame) {
    if (isFirstFrame || itemData.transform.op._mdf) {
      itemData.transform.container.setAttribute('opacity', itemData.transform.op.v);
    }
    if (isFirstFrame || itemData.transform.mProps._mdf) {
      itemData.transform.container.setAttribute('transform', itemData.transform.mProps.v.to2dCSS());
    }
  }

  function renderPath(styleData, itemData, isFirstFrame) {
    var j;
    var jLen;
    var pathStringTransformed;
    var redraw;
    var pathNodes;
    var l;
    var lLen = itemData.styles.length;
    var lvl = itemData.lvl;
    var paths;
    var mat;
    var props;
    var iterations;
    var k;
    for (l = 0; l < lLen; l += 1) {
      redraw = itemData.sh._mdf || isFirstFrame;
      if (itemData.styles[l].lvl < lvl) {
        mat = _matrixHelper.reset();
        iterations = lvl - itemData.styles[l].lvl;
        k = itemData.transformers.length - 1;
        while (!redraw && iterations > 0) {
          redraw = itemData.transformers[k].mProps._mdf || redraw;
          iterations -= 1;
          k -= 1;
        }
        if (redraw) {
          iterations = lvl - itemData.styles[l].lvl;
          k = itemData.transformers.length - 1;
          while (iterations > 0) {
            props = itemData.transformers[k].mProps.v.props;
            mat.transform(props[0], props[1], props[2], props[3], props[4], props[5], props[6], props[7], props[8], props[9], props[10], props[11], props[12], props[13], props[14], props[15]);
            iterations -= 1;
            k -= 1;
          }
        }
      } else {
        mat = _identityMatrix;
      }
      paths = itemData.sh.paths;
      jLen = paths._length;
      if (redraw) {
        pathStringTransformed = '';
        for (j = 0; j < jLen; j += 1) {
          pathNodes = paths.shapes[j];
          if (pathNodes && pathNodes._length) {
            pathStringTransformed += buildShapeString(pathNodes, pathNodes._length, pathNodes.c, mat);
          }
        }
        itemData.caches[l] = pathStringTransformed;
      } else {
        pathStringTransformed = itemData.caches[l];
      }
      itemData.styles[l].d += styleData.hd === true ? '' : pathStringTransformed;
      itemData.styles[l]._mdf = redraw || itemData.styles[l]._mdf;
    }
  }

  function renderFill(styleData, itemData, isFirstFrame) {
    var styleElem = itemData.style;

    if (itemData.c._mdf || isFirstFrame) {
      styleElem.pElem.setAttribute('fill', 'rgb(' + bmFloor(itemData.c.v[0]) + ',' + bmFloor(itemData.c.v[1]) + ',' + bmFloor(itemData.c.v[2]) + ')');
    }
    if (itemData.o._mdf || isFirstFrame) {
      styleElem.pElem.setAttribute('fill-opacity', itemData.o.v);
    }
  }

  function renderGradientStroke(styleData, itemData, isFirstFrame) {
    renderGradient(styleData, itemData, isFirstFrame);
    renderStroke(styleData, itemData, isFirstFrame);
  }

  function renderGradient(styleData, itemData, isFirstFrame) {
    var gfill = itemData.gf;
    var hasOpacity = itemData.g._hasOpacity;
    var pt1 = itemData.s.v;
    var pt2 = itemData.e.v;

    if (itemData.o._mdf || isFirstFrame) {
      var attr = styleData.ty === 'gf' ? 'fill-opacity' : 'stroke-opacity';
      itemData.style.pElem.setAttribute(attr, itemData.o.v);
    }
    if (itemData.s._mdf || isFirstFrame) {
      var attr1 = styleData.t === 1 ? 'x1' : 'cx';
      var attr2 = attr1 === 'x1' ? 'y1' : 'cy';
      gfill.setAttribute(attr1, pt1[0]);
      gfill.setAttribute(attr2, pt1[1]);
      if (hasOpacity && !itemData.g._collapsable) {
        itemData.of.setAttribute(attr1, pt1[0]);
        itemData.of.setAttribute(attr2, pt1[1]);
      }
    }
    var stops;
    var i;
    var len;
    var stop;
    if (itemData.g._cmdf || isFirstFrame) {
      stops = itemData.cst;
      var cValues = itemData.g.c;
      len = stops.length;
      for (i = 0; i < len; i += 1) {
        stop = stops[i];
        stop.setAttribute('offset', cValues[i * 4] + '%');
        stop.setAttribute('stop-color', 'rgb(' + cValues[i * 4 + 1] + ',' + cValues[i * 4 + 2] + ',' + cValues[i * 4 + 3] + ')');
      }
    }
    if (hasOpacity && (itemData.g._omdf || isFirstFrame)) {
      var oValues = itemData.g.o;
      if (itemData.g._collapsable) {
        stops = itemData.cst;
      } else {
        stops = itemData.ost;
      }
      len = stops.length;
      for (i = 0; i < len; i += 1) {
        stop = stops[i];
        if (!itemData.g._collapsable) {
          stop.setAttribute('offset', oValues[i * 2] + '%');
        }
        stop.setAttribute('stop-opacity', oValues[i * 2 + 1]);
      }
    }
    if (styleData.t === 1) {
      if (itemData.e._mdf || isFirstFrame) {
        gfill.setAttribute('x2', pt2[0]);
        gfill.setAttribute('y2', pt2[1]);
        if (hasOpacity && !itemData.g._collapsable) {
          itemData.of.setAttribute('x2', pt2[0]);
          itemData.of.setAttribute('y2', pt2[1]);
        }
      }
    } else {
      var rad;
      if (itemData.s._mdf || itemData.e._mdf || isFirstFrame) {
        rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
        gfill.setAttribute('r', rad);
        if (hasOpacity && !itemData.g._collapsable) {
          itemData.of.setAttribute('r', rad);
        }
      }
      if (itemData.e._mdf || itemData.h._mdf || itemData.a._mdf || isFirstFrame) {
        if (!rad) {
          rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
        }
        var ang = Math.atan2(pt2[1] - pt1[1], pt2[0] - pt1[0]);

        var percent = itemData.h.v;
        if (percent >= 1) {
          percent = 0.99;
        } else if (percent <= -1) {
          percent = -0.99;
        }
        var dist = rad * percent;
        var x = Math.cos(ang + itemData.a.v) * dist + pt1[0];
        var y = Math.sin(ang + itemData.a.v) * dist + pt1[1];
        gfill.setAttribute('fx', x);
        gfill.setAttribute('fy', y);
        if (hasOpacity && !itemData.g._collapsable) {
          itemData.of.setAttribute('fx', x);
          itemData.of.setAttribute('fy', y);
        }
      }
      // gfill.setAttribute('fy','200');
    }
  }

  function renderStroke(styleData, itemData, isFirstFrame) {
    var styleElem = itemData.style;
    var d = itemData.d;
    if (d && (d._mdf || isFirstFrame) && d.dashStr) {
      styleElem.pElem.setAttribute('stroke-dasharray', d.dashStr);
      styleElem.pElem.setAttribute('stroke-dashoffset', d.dashoffset[0]);
    }
    if (itemData.c && (itemData.c._mdf || isFirstFrame)) {
      styleElem.pElem.setAttribute('stroke', 'rgb(' + bmFloor(itemData.c.v[0]) + ',' + bmFloor(itemData.c.v[1]) + ',' + bmFloor(itemData.c.v[2]) + ')');
    }
    if (itemData.o._mdf || isFirstFrame) {
      styleElem.pElem.setAttribute('stroke-opacity', itemData.o.v);
    }
    if (itemData.w._mdf || isFirstFrame) {
      styleElem.pElem.setAttribute('stroke-width', itemData.w.v);
      if (styleElem.msElem) {
        styleElem.msElem.setAttribute('stroke-width', itemData.w.v);
      }
    }
  }

  return ob;
}());

/* global Matrix */

function ShapeTransformManager() {
  this.sequences = {};
  this.sequenceList = [];
  this.transform_key_count = 0;
}

ShapeTransformManager.prototype = {
  addTransformSequence: function (transforms) {
    var i;
    var len = transforms.length;
    var key = '_';
    for (i = 0; i < len; i += 1) {
      key += transforms[i].transform.key + '_';
    }
    var sequence = this.sequences[key];
    if (!sequence) {
      sequence = {
        transforms: [].concat(transforms),
        finalTransform: new Matrix(),
        _mdf: false,
      };
      this.sequences[key] = sequence;
      this.sequenceList.push(sequence);
    }
    return sequence;
  },
  processSequence: function (sequence, isFirstFrame) {
    var i = 0;
    var len = sequence.transforms.length;
    var _mdf = isFirstFrame;
    while (i < len && !isFirstFrame) {
      if (sequence.transforms[i].transform.mProps._mdf) {
        _mdf = true;
        break;
      }
      i += 1;
    }
    if (_mdf) {
      var props;
      sequence.finalTransform.reset();
      for (i = len - 1; i >= 0; i -= 1) {
        props = sequence.transforms[i].transform.mProps.v.props;
        sequence.finalTransform.transform(props[0], props[1], props[2], props[3], props[4], props[5], props[6], props[7], props[8], props[9], props[10], props[11], props[12], props[13], props[14], props[15]);
      }
    }
    sequence._mdf = _mdf;
  },
  processSequences: function (isFirstFrame) {
    var i;
    var len = this.sequenceList.length;
    for (i = 0; i < len; i += 1) {
      this.processSequence(this.sequenceList[i], isFirstFrame);
    }
  },
  getNewKey: function () {
    this.transform_key_count += 1;
    return '_' + this.transform_key_count;
  },
};

/* global ShapePropertyFactory, SVGShapeData */

function CVShapeData(element, data, styles, transformsManager) {
  this.styledShapes = [];
  this.tr = [0, 0, 0, 0, 0, 0];
  var ty = 4;
  if (data.ty === 'rc') {
    ty = 5;
  } else if (data.ty === 'el') {
    ty = 6;
  } else if (data.ty === 'sr') {
    ty = 7;
  }
  this.sh = ShapePropertyFactory.getShapeProp(element, data, ty, element);
  var i;
  var len = styles.length;
  var styledShape;
  for (i = 0; i < len; i += 1) {
    if (!styles[i].closed) {
      styledShape = {
        transforms: transformsManager.addTransformSequence(styles[i].transforms),
        trNodes: [],
      };
      this.styledShapes.push(styledShape);
      styles[i].elements.push(styledShape);
    }
  }
}

CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;

/* global LayerExpressionInterface, EffectsExpressionInterface, CompExpressionInterface, ShapeExpressionInterface,
TextExpressionInterface, getBlendMode,createElementID, EffectsManager */

function BaseElement() {
}

BaseElement.prototype = {
  checkMasks: function () {
    if (!this.data.hasMask) {
      return false;
    }
    var i = 0;
    var len = this.data.masksProperties.length;
    while (i < len) {
      if ((this.data.masksProperties[i].mode !== 'n' && this.data.masksProperties[i].cl !== false)) {
        return true;
      }
      i += 1;
    }
    return false;
  },
  initExpressions: function () {
    this.layerInterface = LayerExpressionInterface(this);
    if (this.data.hasMask && this.maskManager) {
      this.layerInterface.registerMaskInterface(this.maskManager);
    }
    var effectsInterface = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
    this.layerInterface.registerEffectsInterface(effectsInterface);

    if (this.data.ty === 0 || this.data.xt) {
      this.compInterface = CompExpressionInterface(this);
    } else if (this.data.ty === 4) {
      this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface);
      this.layerInterface.content = this.layerInterface.shapeInterface;
    } else if (this.data.ty === 5) {
      this.layerInterface.textInterface = TextExpressionInterface(this);
      this.layerInterface.text = this.layerInterface.textInterface;
    }
  },
  setBlendMode: function () {
    var blendModeValue = getBlendMode(this.data.bm);
    var elem = this.baseElement || this.layerElement;

    elem.style['mix-blend-mode'] = blendModeValue;
  },
  initBaseData: function (data, globalData, comp) {
    this.globalData = globalData;
    this.comp = comp;
    this.data = data;
    this.layerId = createElementID();

    // Stretch factor for old animations missing this property.
    if (!this.data.sr) {
      this.data.sr = 1;
    }
    // effects manager
    this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
  },
  getType: function () {
    return this.type;
  },
  sourceRectAtTime: function () {},
};

/* global extendPrototype, BaseElement, TransformElement, HierarchyElement, FrameElement */

function NullElement(data, globalData, comp) {
  this.initFrame();
  this.initBaseData(data, globalData, comp);
  this.initFrame();
  this.initTransform(data, globalData, comp);
  this.initHierarchy();
}

NullElement.prototype.prepareFrame = function (num) {
  this.prepareProperties(num, true);
};

NullElement.prototype.renderFrame = function () {
};

NullElement.prototype.getBaseElement = function () {
  return null;
};

NullElement.prototype.destroy = function () {
};

NullElement.prototype.sourceRectAtTime = function () {
};

NullElement.prototype.hide = function () {
};

extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);

/* global filtersFactory, featureSupport, filtersFactory, createElementID, createNS, MaskElement, SVGEffects, locationHref */

function SVGBaseElement() {
}

SVGBaseElement.prototype = {
  initRendererElement: function () {
    this.layerElement = createNS('g');
  },
  createContainerElements: function () {
    this.matteElement = createNS('g');
    this.transformedElement = this.layerElement;
    this.maskedElement = this.layerElement;
    this._sizeChanged = false;
    var layerElementParent = null;
    // If this layer acts as a mask for the following layer
    var filId;
    var fil;
    var gg;
    if (this.data.td) {
      if (this.data.td == 3 || this.data.td == 1) { // eslint-disable-line eqeqeq
        var masker = createNS('mask');
        masker.setAttribute('id', this.layerId);
        masker.setAttribute('mask-type', this.data.td == 3 ? 'luminance' : 'alpha'); // eslint-disable-line eqeqeq
        masker.appendChild(this.layerElement);
        layerElementParent = masker;
        this.globalData.defs.appendChild(masker);
        // This is only for IE and Edge when mask if of type alpha
        if (!featureSupport.maskType && this.data.td == 1) { // eslint-disable-line eqeqeq
          masker.setAttribute('mask-type', 'luminance');
          filId = createElementID();
          fil = filtersFactory.createFilter(filId);
          this.globalData.defs.appendChild(fil);
          fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
          gg = createNS('g');
          gg.appendChild(this.layerElement);
          layerElementParent = gg;
          masker.appendChild(gg);
          gg.setAttribute('filter', 'url(' + locationHref + '#' + filId + ')');
        }
      } else if (this.data.td == 2) { // eslint-disable-line eqeqeq
        var maskGroup = createNS('mask');
        maskGroup.setAttribute('id', this.layerId);
        maskGroup.setAttribute('mask-type', 'alpha');
        var maskGrouper = createNS('g');
        maskGroup.appendChild(maskGrouper);
        filId = createElementID();
        fil = filtersFactory.createFilter(filId);
        /// /

        // This solution doesn't work on Android when meta tag with viewport attribute is set
        /* var feColorMatrix = createNS('feColorMatrix');
                feColorMatrix.setAttribute('type', 'matrix');
                feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
                feColorMatrix.setAttribute('values','1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1');
                fil.appendChild(feColorMatrix); */
        /// /
        var feCTr = createNS('feComponentTransfer');
        feCTr.setAttribute('in', 'SourceGraphic');
        fil.appendChild(feCTr);
        var feFunc = createNS('feFuncA');
        feFunc.setAttribute('type', 'table');
        feFunc.setAttribute('tableValues', '1.0 0.0');
        feCTr.appendChild(feFunc);
        /// /
        this.globalData.defs.appendChild(fil);
        var alphaRect = createNS('rect');
        alphaRect.setAttribute('width', this.comp.data.w);
        alphaRect.setAttribute('height', this.comp.data.h);
        alphaRect.setAttribute('x', '0');
        alphaRect.setAttribute('y', '0');
        alphaRect.setAttribute('fill', '#ffffff');
        alphaRect.setAttribute('opacity', '0');
        maskGrouper.setAttribute('filter', 'url(' + locationHref + '#' + filId + ')');
        maskGrouper.appendChild(alphaRect);
        maskGrouper.appendChild(this.layerElement);
        layerElementParent = maskGrouper;
        if (!featureSupport.maskType) {
          maskGroup.setAttribute('mask-type', 'luminance');
          fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
          gg = createNS('g');
          maskGrouper.appendChild(alphaRect);
          gg.appendChild(this.layerElement);
          layerElementParent = gg;
          maskGrouper.appendChild(gg);
        }
        this.globalData.defs.appendChild(maskGroup);
      }
    } else if (this.data.tt) {
      this.matteElement.appendChild(this.layerElement);
      layerElementParent = this.matteElement;
      this.baseElement = this.matteElement;
    } else {
      this.baseElement = this.layerElement;
    }
    if (this.data.ln) {
      this.layerElement.setAttribute('id', this.data.ln);
    }
    if (this.data.cl) {
      this.layerElement.setAttribute('class', this.data.cl);
    }
    // Clipping compositions to hide content that exceeds boundaries. If collapsed transformations is on, component should not be clipped
    if (this.data.ty === 0 && !this.data.hd) {
      var cp = createNS('clipPath');
      var pt = createNS('path');
      pt.setAttribute('d', 'M0,0 L' + this.data.w + ',0 L' + this.data.w + ',' + this.data.h + ' L0,' + this.data.h + 'z');
      var clipId = createElementID();
      cp.setAttribute('id', clipId);
      cp.appendChild(pt);
      this.globalData.defs.appendChild(cp);

      if (this.checkMasks()) {
        var cpGroup = createNS('g');
        cpGroup.setAttribute('clip-path', 'url(' + locationHref + '#' + clipId + ')');
        cpGroup.appendChild(this.layerElement);
        this.transformedElement = cpGroup;
        if (layerElementParent) {
          layerElementParent.appendChild(this.transformedElement);
        } else {
          this.baseElement = this.transformedElement;
        }
      } else {
        this.layerElement.setAttribute('clip-path', 'url(' + locationHref + '#' + clipId + ')');
      }
    }
    if (this.data.bm !== 0) {
      this.setBlendMode();
    }
  },
  renderElement: function () {
    if (this.finalTransform._matMdf) {
      this.transformedElement.setAttribute('transform', this.finalTransform.mat.to2dCSS());
    }
    if (this.finalTransform._opMdf) {
      this.transformedElement.setAttribute('opacity', this.finalTransform.mProp.o.v);
    }
  },
  destroyBaseElement: function () {
    this.layerElement = null;
    this.matteElement = null;
    this.maskManager.destroy();
  },
  getBaseElement: function () {
    if (this.data.hd) {
      return null;
    }
    return this.baseElement;
  },
  createRenderableComponents: function () {
    this.maskManager = new MaskElement(this.data, this, this.globalData);
    this.renderableEffectsManager = new SVGEffects(this);
  },
  setMatte: function (id) {
    if (!this.matteElement) {
      return;
    }
    this.matteElement.setAttribute('mask', 'url(' + locationHref + '#' + id + ')');
  },
};

/* global ProcessedElement */

function IShapeElement() {
}

IShapeElement.prototype = {
  addShapeToModifiers: function (data) {
    var i;
    var len = this.shapeModifiers.length;
    for (i = 0; i < len; i += 1) {
      this.shapeModifiers[i].addShape(data);
    }
  },
  isShapeInAnimatedModifiers: function (data) {
    var i = 0;
    var len = this.shapeModifiers.length;
    while (i < len) {
      if (this.shapeModifiers[i].isAnimatedWithShape(data)) {
        return true;
      }
    }
    return false;
  },
  renderModifiers: function () {
    if (!this.shapeModifiers.length) {
      return;
    }
    var i;
    var len = this.shapes.length;
    for (i = 0; i < len; i += 1) {
      this.shapes[i].sh.reset();
    }

    len = this.shapeModifiers.length;
    var shouldBreakProcess;
    for (i = len - 1; i >= 0; i -= 1) {
      shouldBreakProcess = this.shapeModifiers[i].processShapes(this._isFirstFrame);
      // workaround to fix cases where a repeater resets the shape so the following processes get called twice
      // TODO: find a better solution for this
      if (shouldBreakProcess) {
        break;
      }
    }
  },

  searchProcessedElement: function (elem) {
    var elements = this.processedElements;
    var i = 0;
    var len = elements.length;
    while (i < len) {
      if (elements[i].elem === elem) {
        return elements[i].pos;
      }
      i += 1;
    }
    return 0;
  },
  addProcessedElement: function (elem, pos) {
    var elements = this.processedElements;
    var i = elements.length;
    while (i) {
      i -= 1;
      if (elements[i].elem === elem) {
        elements[i].pos = pos;
        return;
      }
    }
    elements.push(new ProcessedElement(elem, pos));
  },
  prepareFrame: function (num) {
    this.prepareRenderableFrame(num);
    this.prepareProperties(num, this.isInRange);
  },
};

/* global TextProperty, TextAnimatorProperty, buildShapeString, LetterProps */

function ITextElement() {
}

ITextElement.prototype.initElement = function (data, globalData, comp) {
  this.lettersChangedFlag = true;
  this.initFrame();
  this.initBaseData(data, globalData, comp);
  this.textProperty = new TextProperty(this, data.t, this.dynamicProperties);
  this.textAnimator = new TextAnimatorProperty(data.t, this.renderType, this);
  this.initTransform(data, globalData, comp);
  this.initHierarchy();
  this.initRenderable();
  this.initRendererElement();
  this.createContainerElements();
  this.createRenderableComponents();
  this.createContent();
  this.hide();
  this.textAnimator.searchProperties(this.dynamicProperties);
};

ITextElement.prototype.prepareFrame = function (num) {
  this._mdf = false;
  this.prepareRenderableFrame(num);
  this.prepareProperties(num, this.isInRange);
  if (this.textProperty._mdf || this.textProperty._isFirstFrame) {
    this.buildNewText();
    this.textProperty._isFirstFrame = false;
    this.textProperty._mdf = false;
  }
};

ITextElement.prototype.createPathShape = function (matrixHelper, shapes) {
  var j;
  var jLen = shapes.length;
  var pathNodes;
  var shapeStr = '';
  for (j = 0; j < jLen; j += 1) {
    pathNodes = shapes[j].ks.k;
    shapeStr += buildShapeString(pathNodes, pathNodes.i.length, true, matrixHelper);
  }
  return shapeStr;
};

ITextElement.prototype.updateDocumentData = function (newData, index) {
  this.textProperty.updateDocumentData(newData, index);
};

ITextElement.prototype.canResizeFont = function (_canResize) {
  this.textProperty.canResizeFont(_canResize);
};

ITextElement.prototype.setMinimumFontSize = function (_fontSize) {
  this.textProperty.setMinimumFontSize(_fontSize);
};

ITextElement.prototype.applyTextPropertiesToMatrix = function (documentData, matrixHelper, lineNumber, xPos, yPos) {
  if (documentData.ps) {
    matrixHelper.translate(documentData.ps[0], documentData.ps[1] + documentData.ascent, 0);
  }
  matrixHelper.translate(0, -documentData.ls, 0);
  switch (documentData.j) {
    case 1:
      matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[lineNumber]), 0, 0);
      break;
    case 2:
      matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[lineNumber]) / 2, 0, 0);
      break;
    default:
      break;
  }
  matrixHelper.translate(xPos, yPos, 0);
};

ITextElement.prototype.buildColor = function (colorData) {
  return 'rgb(' + Math.round(colorData[0] * 255) + ',' + Math.round(colorData[1] * 255) + ',' + Math.round(colorData[2] * 255) + ')';
};

ITextElement.prototype.emptyProp = new LetterProps();

ITextElement.prototype.destroy = function () {

};

/* global extendPrototype, BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement */

function ICompElement() {}

extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement);

ICompElement.prototype.initElement = function (data, globalData, comp) {
  this.initFrame();
  this.initBaseData(data, globalData, comp);
  this.initTransform(data, globalData, comp);
  this.initRenderable();
  this.initHierarchy();
  this.initRendererElement();
  this.createContainerElements();
  this.createRenderableComponents();
  if (this.data.xt || !globalData.progressiveLoad) {
    this.buildAllItems();
  }
  this.hide();
};

/* ICompElement.prototype.hide = function(){
    if(!this.hidden){
        this.hideElement();
        var i,len = this.elements.length;
        for( i = 0; i < len; i+=1 ){
            if(this.elements[i]){
                this.elements[i].hide();
            }
        }
    }
}; */

ICompElement.prototype.prepareFrame = function (num) {
  this._mdf = false;
  this.prepareRenderableFrame(num);
  this.prepareProperties(num, this.isInRange);
  if (!this.isInRange && !this.data.xt) {
    return;
  }

  if (!this.tm._placeholder) {
    var timeRemapped = this.tm.v;
    if (timeRemapped === this.data.op) {
      timeRemapped = this.data.op - 1;
    }
    this.renderedFrame = timeRemapped;
  } else {
    this.renderedFrame = num / this.data.sr;
  }
  var i;
  var len = this.elements.length;
  if (!this.completeLayers) {
    this.checkLayers(this.renderedFrame);
  }
  // This iteration needs to be backwards because of how expressions connect between each other
  for (i = len - 1; i >= 0; i -= 1) {
    if (this.completeLayers || this.elements[i]) {
      this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st);
      if (this.elements[i]._mdf) {
        this._mdf = true;
      }
    }
  }
};

ICompElement.prototype.renderInnerContent = function () {
  var i;
  var len = this.layers.length;
  for (i = 0; i < len; i += 1) {
    if (this.completeLayers || this.elements[i]) {
      this.elements[i].renderFrame();
    }
  }
};

ICompElement.prototype.setElements = function (elems) {
  this.elements = elems;
};

ICompElement.prototype.getElements = function () {
  return this.elements;
};

ICompElement.prototype.destroyElements = function () {
  var i;
  var len = this.layers.length;
  for (i = 0; i < len; i += 1) {
    if (this.elements[i]) {
      this.elements[i].destroy();
    }
  }
};

ICompElement.prototype.destroy = function () {
  this.destroyElements();
  this.destroyBaseElement();
};

/* global extendPrototype, BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, createNS */

function IImageElement(data, globalData, comp) {
  this.assetData = globalData.getAssetData(data.refId);
  this.initElement(data, globalData, comp);
  this.sourceRect = {
    top: 0, left: 0, width: this.assetData.w, height: this.assetData.h,
  };
}

extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement);

IImageElement.prototype.createContent = function () {
  var assetPath = this.globalData.getAssetsPath(this.assetData);

  this.innerElem = createNS('image');
  this.innerElem.setAttribute('width', this.assetData.w + 'px');
  this.innerElem.setAttribute('height', this.assetData.h + 'px');
  this.innerElem.setAttribute('preserveAspectRatio', this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio);
  this.innerElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', assetPath);

  this.layerElement.appendChild(this.innerElem);
};

IImageElement.prototype.sourceRectAtTime = function () {
  return this.sourceRect;
};

/* global extendPrototype, IImageElement, createNS */

function ISolidElement(data, globalData, comp) {
  this.initElement(data, globalData, comp);
}
extendPrototype([IImageElement], ISolidElement);

ISolidElement.prototype.createContent = function () {
  var rect = createNS('rect');
  /// /rect.style.width = this.data.sw;
  /// /rect.style.height = this.data.sh;
  /// /rect.style.fill = this.data.sc;
  rect.setAttribute('width', this.data.sw);
  rect.setAttribute('height', this.data.sh);
  rect.setAttribute('fill', this.data.sc);
  this.layerElement.appendChild(rect);
};

/* global PropertyFactory, extendPrototype, RenderableElement, BaseElement, FrameElement */

function AudioElement(data, globalData, comp) {
  this.initFrame();
  this.initRenderable();
  this.assetData = globalData.getAssetData(data.refId);
  this.initBaseData(data, globalData, comp);
  this._isPlaying = false;
  this._canPlay = false;
  var assetPath = this.globalData.getAssetsPath(this.assetData);
  this.audio = this.globalData.audioController.createAudio(assetPath);
  this._currentTime = 0;
  this.globalData.audioController.addAudio(this);
  this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : { _placeholder: true };
}

AudioElement.prototype.prepareFrame = function (num) {
  this.prepareRenderableFrame(num, true);
  this.prepareProperties(num, true);
  if (!this.tm._placeholder) {
    var timeRemapped = this.tm.v;
    this._currentTime = timeRemapped;
  } else {
    this._currentTime = num / this.data.sr;
  }
};

extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement);

AudioElement.prototype.renderFrame = function () {
  if (this.isInRange && this._canPlay) {
    if (!this._isPlaying) {
      this.audio.play();
      this.audio.seek(this._currentTime / this.globalData.frameRate);
      this._isPlaying = true;
    } else if (!this.audio.playing()
      || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1
    ) {
      this.audio.seek(this._currentTime / this.globalData.frameRate);
    }
  }
};

AudioElement.prototype.show = function () {
  // this.audio.play()
};

AudioElement.prototype.hide = function () {
  this.audio.pause();
  this._isPlaying = false;
};

AudioElement.prototype.pause = function () {
  this.audio.pause();
  this._isPlaying = false;
  this._canPlay = false;
};

AudioElement.prototype.resume = function () {
  this._canPlay = true;
};

AudioElement.prototype.setRate = function (rateValue) {
  this.audio.rate(rateValue);
};

AudioElement.prototype.volume = function (volumeValue) {
  this.audio.volume(volumeValue);
};

AudioElement.prototype.getBaseElement = function () {
  return null;
};

AudioElement.prototype.destroy = function () {
};

AudioElement.prototype.sourceRectAtTime = function () {
};

AudioElement.prototype.initExpressions = function () {
};

/* global extendPrototype, RenderableElement, BaseElement, FrameElement, FootageInterface */

function FootageElement(data, globalData, comp) {
  this.initFrame();
  this.initRenderable();
  this.assetData = globalData.getAssetData(data.refId);
  this.footageData = globalData.imageLoader.getAsset(this.assetData);
  this.initBaseData(data, globalData, comp);
}

FootageElement.prototype.prepareFrame = function () {
};

extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement);

FootageElement.prototype.getBaseElement = function () {
  return null;
};

FootageElement.prototype.renderFrame = function () {
};

FootageElement.prototype.destroy = function () {
};

FootageElement.prototype.initExpressions = function () {
  this.layerInterface = FootageInterface(this);
};

FootageElement.prototype.getFootageData = function () {
  return this.footageData;
};

/* global createSizedArray, PropertyFactory, extendPrototype, SVGRenderer, ICompElement, SVGBaseElement */

function SVGCompElement(data, globalData, comp) {
  this.layers = data.layers;
  this.supports3d = true;
  this.completeLayers = false;
  this.pendingElements = [];
  this.elements = this.layers ? createSizedArray(this.layers.length) : [];
  // this.layerElement = createNS('g');
  this.initElement(data, globalData, comp);
  this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : { _placeholder: true };
}

extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement);

/* global extendPrototype, BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement,
RenderableDOMElement, ITextElement, createSizedArray, createNS */

function SVGTextLottieElement(data, globalData, comp) {
  this.textSpans = [];
  this.renderType = 'svg';
  this.initElement(data, globalData, comp);
}

extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement);

SVGTextLottieElement.prototype.createContent = function () {
  if (this.data.singleShape && !this.globalData.fontManager.chars) {
    this.textContainer = createNS('text');
  }
};

SVGTextLottieElement.prototype.buildTextContents = function (textArray) {
  var i = 0;
  var len = textArray.length;
  var textContents = [];
  var currentTextContent = '';
  while (i < len) {
    if (textArray[i] === String.fromCharCode(13) || textArray[i] === String.fromCharCode(3)) {
      textContents.push(currentTextContent);
      currentTextContent = '';
    } else {
      currentTextContent += textArray[i];
    }
    i += 1;
  }
  textContents.push(currentTextContent);
  return textContents;
};

SVGTextLottieElement.prototype.buildNewText = function () {
  var i;
  var len;

  var documentData = this.textProperty.currentData;
  this.renderedLetters = createSizedArray(documentData ? documentData.l.length : 0);
  if (documentData.fc) {
    this.layerElement.setAttribute('fill', this.buildColor(documentData.fc));
  } else {
    this.layerElement.setAttribute('fill', 'rgba(0,0,0,0)');
  }
  if (documentData.sc) {
    this.layerElement.setAttribute('stroke', this.buildColor(documentData.sc));
    this.layerElement.setAttribute('stroke-width', documentData.sw);
  }
  this.layerElement.setAttribute('font-size', documentData.finalSize);
  var fontData = this.globalData.fontManager.getFontByName(documentData.f);
  if (fontData.fClass) {
    this.layerElement.setAttribute('class', fontData.fClass);
  } else {
    this.layerElement.setAttribute('font-family', fontData.fFamily);
    var fWeight = documentData.fWeight;
    var fStyle = documentData.fStyle;
    this.layerElement.setAttribute('font-style', fStyle);
    this.layerElement.setAttribute('font-weight', fWeight);
  }
  this.layerElement.setAttribute('aria-label', documentData.t);

  var letters = documentData.l || [];
  var usesGlyphs = !!this.globalData.fontManager.chars;
  len = letters.length;

  var tSpan;
  var matrixHelper = this.mHelper;
  var shapes;
  var shapeStr = '';
  var singleShape = this.data.singleShape;
  var xPos = 0;
  var yPos = 0;
  var firstLine = true;
  var trackingOffset = documentData.tr * 0.001 * documentData.finalSize;
  if (singleShape && !usesGlyphs && !documentData.sz) {
    var tElement = this.textContainer;
    var justify = 'start';
    switch (documentData.j) {
      case 1:
        justify = 'end';
        break;
      case 2:
        justify = 'middle';
        break;
      default:
        justify = 'start';
        break;
    }
    tElement.setAttribute('text-anchor', justify);
    tElement.setAttribute('letter-spacing', trackingOffset);
    var textContent = this.buildTextContents(documentData.finalText);
    len = textContent.length;
    yPos = documentData.ps ? documentData.ps[1] + documentData.ascent : 0;
    for (i = 0; i < len; i += 1) {
      tSpan = this.textSpans[i] || createNS('tspan');
      tSpan.textContent = textContent[i];
      tSpan.setAttribute('x', 0);
      tSpan.setAttribute('y', yPos);
      tSpan.style.display = 'inherit';
      tElement.appendChild(tSpan);
      this.textSpans[i] = tSpan;
      yPos += documentData.finalLineHeight;
    }

    this.layerElement.appendChild(tElement);
  } else {
    var cachedSpansLength = this.textSpans.length;
    var shapeData;
    var charData;
    for (i = 0; i < len; i += 1) {
      if (!usesGlyphs || !singleShape || i === 0) {
        tSpan = cachedSpansLength > i ? this.textSpans[i] : createNS(usesGlyphs ? 'path' : 'text');
        if (cachedSpansLength <= i) {
          tSpan.setAttribute('stroke-linecap', 'butt');
          tSpan.setAttribute('stroke-linejoin', 'round');
          tSpan.setAttribute('stroke-miterlimit', '4');
          this.textSpans[i] = tSpan;
          this.layerElement.appendChild(tSpan);
        }
        tSpan.style.display = 'inherit';
      }

      matrixHelper.reset();
      matrixHelper.scale(documentData.finalSize / 100, documentData.finalSize / 100);
      if (singleShape) {
        if (letters[i].n) {
          xPos = -trackingOffset;
          yPos += documentData.yOffset;
          yPos += firstLine ? 1 : 0;
          firstLine = false;
        }
        this.applyTextPropertiesToMatrix(documentData, matrixHelper, letters[i].line, xPos, yPos);
        xPos += letters[i].l || 0;
        // xPos += letters[i].val === ' ' ? 0 : trackingOffset;
        xPos += trackingOffset;
      }
      if (usesGlyphs) {
        charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
        shapeData = (charData && charData.data) || {};
        shapes = shapeData.shapes ? shapeData.shapes[0].it : [];
        if (!singleShape) {
          tSpan.setAttribute('d', this.createPathShape(matrixHelper, shapes));
        } else {
          shapeStr += this.createPathShape(matrixHelper, shapes);
        }
      } else {
        if (singleShape) {
          tSpan.setAttribute('transform', 'translate(' + matrixHelper.props[12] + ',' + matrixHelper.props[13] + ')');
        }
        tSpan.textContent = letters[i].val;
        tSpan.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve');
      }
      //
    }
    if (singleShape && tSpan) {
      tSpan.setAttribute('d', shapeStr);
    }
  }
  while (i < this.textSpans.length) {
    this.textSpans[i].style.display = 'none';
    i += 1;
  }

  this._sizeChanged = true;
};

SVGTextLottieElement.prototype.sourceRectAtTime = function () {
  this.prepareFrame(this.comp.renderedFrame - this.data.st);
  this.renderInnerContent();
  if (this._sizeChanged) {
    this._sizeChanged = false;
    var textBox = this.layerElement.getBBox();
    this.bbox = {
      top: textBox.y,
      left: textBox.x,
      width: textBox.width,
      height: textBox.height,
    };
  }
  return this.bbox;
};

SVGTextLottieElement.prototype.renderInnerContent = function () {
  if (!this.data.singleShape) {
    this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
    if (this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
      this._sizeChanged = true;
      var i;
      var len;
      var renderedLetters = this.textAnimator.renderedLetters;

      var letters = this.textProperty.currentData.l;

      len = letters.length;
      var renderedLetter;
      var textSpan;
      for (i = 0; i < len; i += 1) {
        if (!letters[i].n) {
          renderedLetter = renderedLetters[i];
          textSpan = this.textSpans[i];
          if (renderedLetter._mdf.m) {
            textSpan.setAttribute('transform', renderedLetter.m);
          }
          if (renderedLetter._mdf.o) {
            textSpan.setAttribute('opacity', renderedLetter.o);
          }
          if (renderedLetter._mdf.sw) {
            textSpan.setAttribute('stroke-width', renderedLetter.sw);
          }
          if (renderedLetter._mdf.sc) {
            textSpan.setAttribute('stroke', renderedLetter.sc);
          }
          if (renderedLetter._mdf.fc) {
            textSpan.setAttribute('fill', renderedLetter.fc);
          }
        }
      }
    }
  }
};

/* global extendPrototype, BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement,
FrameElement, RenderableDOMElement, Matrix, SVGStyleData, SVGStrokeStyleData, SVGFillStyleData,
SVGGradientFillStyleData, SVGGradientStrokeStyleData, locationHref, getBlendMode, ShapeGroupData,
TransformPropertyFactory, SVGTransformData, ShapePropertyFactory, SVGShapeData, SVGElementsRenderer, ShapeModifiers,
lineCapEnum, lineJoinEnum */

function SVGShapeElement(data, globalData, comp) {
  // List of drawable elements
  this.shapes = [];
  // Full shape data
  this.shapesData = data.shapes;
  // List of styles that will be applied to shapes
  this.stylesList = [];
  // List of modifiers that will be applied to shapes
  this.shapeModifiers = [];
  // List of items in shape tree
  this.itemsData = [];
  // List of items in previous shape tree
  this.processedElements = [];
  // List of animated components
  this.animatedContents = [];
  this.initElement(data, globalData, comp);
  // Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
  // List of elements that have been created
  this.prevViewData = [];
  // Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
}

extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement);

SVGShapeElement.prototype.initSecondaryElement = function () {
};

SVGShapeElement.prototype.identityMatrix = new Matrix();

SVGShapeElement.prototype.buildExpressionInterface = function () {};

SVGShapeElement.prototype.createContent = function () {
  this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
  this.filterUniqueShapes();
};

/*
This method searches for multiple shapes that affect a single element and one of them is animated
*/
SVGShapeElement.prototype.filterUniqueShapes = function () {
  var i;
  var len = this.shapes.length;
  var shape;
  var j;
  var jLen = this.stylesList.length;
  var style;
  var tempShapes = [];
  var areAnimated = false;
  for (j = 0; j < jLen; j += 1) {
    style = this.stylesList[j];
    areAnimated = false;
    tempShapes.length = 0;
    for (i = 0; i < len; i += 1) {
      shape = this.shapes[i];
      if (shape.styles.indexOf(style) !== -1) {
        tempShapes.push(shape);
        areAnimated = shape._isAnimated || areAnimated;
      }
    }
    if (tempShapes.length > 1 && areAnimated) {
      this.setShapesAsAnimated(tempShapes);
    }
  }
};

SVGShapeElement.prototype.setShapesAsAnimated = function (shapes) {
  var i;
  var len = shapes.length;
  for (i = 0; i < len; i += 1) {
    shapes[i].setAsAnimated();
  }
};

SVGShapeElement.prototype.createStyleElement = function (data, level) {
  // TODO: prevent drawing of hidden styles
  var elementData;
  var styleOb = new SVGStyleData(data, level);

  var pathElement = styleOb.pElem;
  if (data.ty === 'st') {
    elementData = new SVGStrokeStyleData(this, data, styleOb);
  } else if (data.ty === 'fl') {
    elementData = new SVGFillStyleData(this, data, styleOb);
  } else if (data.ty === 'gf' || data.ty === 'gs') {
    var GradientConstructor = data.ty === 'gf' ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
    elementData = new GradientConstructor(this, data, styleOb);
    this.globalData.defs.appendChild(elementData.gf);
    if (elementData.maskId) {
      this.globalData.defs.appendChild(elementData.ms);
      this.globalData.defs.appendChild(elementData.of);
      pathElement.setAttribute('mask', 'url(' + locationHref + '#' + elementData.maskId + ')');
    }
  }

  if (data.ty === 'st' || data.ty === 'gs') {
    pathElement.setAttribute('stroke-linecap', lineCapEnum[data.lc || 2]);
    pathElement.setAttribute('stroke-linejoin', lineJoinEnum[data.lj || 2]);
    pathElement.setAttribute('fill-opacity', '0');
    if (data.lj === 1) {
      pathElement.setAttribute('stroke-miterlimit', data.ml);
    }
  }

  if (data.r === 2) {
    pathElement.setAttribute('fill-rule', 'evenodd');
  }

  if (data.ln) {
    pathElement.setAttribute('id', data.ln);
  }
  if (data.cl) {
    pathElement.setAttribute('class', data.cl);
  }
  if (data.bm) {
    pathElement.style['mix-blend-mode'] = getBlendMode(data.bm);
  }
  this.stylesList.push(styleOb);
  this.addToAnimatedContents(data, elementData);
  return elementData;
};

SVGShapeElement.prototype.createGroupElement = function (data) {
  var elementData = new ShapeGroupData();
  if (data.ln) {
    elementData.gr.setAttribute('id', data.ln);
  }
  if (data.cl) {
    elementData.gr.setAttribute('class', data.cl);
  }
  if (data.bm) {
    elementData.gr.style['mix-blend-mode'] = getBlendMode(data.bm);
  }
  return elementData;
};

SVGShapeElement.prototype.createTransformElement = function (data, container) {
  var transformProperty = TransformPropertyFactory.getTransformProperty(this, data, this);
  var elementData = new SVGTransformData(transformProperty, transformProperty.o, container);
  this.addToAnimatedContents(data, elementData);
  return elementData;
};

SVGShapeElement.prototype.createShapeElement = function (data, ownTransformers, level) {
  var ty = 4;
  if (data.ty === 'rc') {
    ty = 5;
  } else if (data.ty === 'el') {
    ty = 6;
  } else if (data.ty === 'sr') {
    ty = 7;
  }
  var shapeProperty = ShapePropertyFactory.getShapeProp(this, data, ty, this);
  var elementData = new SVGShapeData(ownTransformers, level, shapeProperty);
  this.shapes.push(elementData);
  this.addShapeToModifiers(elementData);
  this.addToAnimatedContents(data, elementData);
  return elementData;
};

SVGShapeElement.prototype.addToAnimatedContents = function (data, element) {
  var i = 0;
  var len = this.animatedContents.length;
  while (i < len) {
    if (this.animatedContents[i].element === element) {
      return;
    }
    i += 1;
  }
  this.animatedContents.push({
    fn: SVGElementsRenderer.createRenderFunction(data),
    element: element,
    data: data,
  });
};

SVGShapeElement.prototype.setElementStyles = function (elementData) {
  var arr = elementData.styles;
  var j;
  var jLen = this.stylesList.length;
  for (j = 0; j < jLen; j += 1) {
    if (!this.stylesList[j].closed) {
      arr.push(this.stylesList[j]);
    }
  }
};

SVGShapeElement.prototype.reloadShapes = function () {
  this._isFirstFrame = true;
  var i;
  var len = this.itemsData.length;
  for (i = 0; i < len; i += 1) {
    this.prevViewData[i] = this.itemsData[i];
  }
  this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
  this.filterUniqueShapes();
  len = this.dynamicProperties.length;
  for (i = 0; i < len; i += 1) {
    this.dynamicProperties[i].getValue();
  }
  this.renderModifiers();
};

SVGShapeElement.prototype.searchShapes = function (arr, itemsData, prevViewData, container, level, transformers, render) {
  var ownTransformers = [].concat(transformers);
  var i;
  var len = arr.length - 1;
  var j;
  var jLen;
  var ownStyles = [];
  var ownModifiers = [];
  var currentTransform;
  var modifier;
  var processedPos;
  for (i = len; i >= 0; i -= 1) {
    processedPos = this.searchProcessedElement(arr[i]);
    if (!processedPos) {
      arr[i]._render = render;
    } else {
      itemsData[i] = prevViewData[processedPos - 1];
    }
    if (arr[i].ty === 'fl' || arr[i].ty === 'st' || arr[i].ty === 'gf' || arr[i].ty === 'gs') {
      if (!processedPos) {
        itemsData[i] = this.createStyleElement(arr[i], level);
      } else {
        itemsData[i].style.closed = false;
      }
      if (arr[i]._render) {
        if (itemsData[i].style.pElem.parentNode !== container) {
          container.appendChild(itemsData[i].style.pElem);
        }
      }
      ownStyles.push(itemsData[i].style);
    } else if (arr[i].ty === 'gr') {
      if (!processedPos) {
        itemsData[i] = this.createGroupElement(arr[i]);
      } else {
        jLen = itemsData[i].it.length;
        for (j = 0; j < jLen; j += 1) {
          itemsData[i].prevViewData[j] = itemsData[i].it[j];
        }
      }
      this.searchShapes(arr[i].it, itemsData[i].it, itemsData[i].prevViewData, itemsData[i].gr, level + 1, ownTransformers, render);
      if (arr[i]._render) {
        if (itemsData[i].gr.parentNode !== container) {
          container.appendChild(itemsData[i].gr);
        }
      }
    } else if (arr[i].ty === 'tr') {
      if (!processedPos) {
        itemsData[i] = this.createTransformElement(arr[i], container);
      }
      currentTransform = itemsData[i].transform;
      ownTransformers.push(currentTransform);
    } else if (arr[i].ty === 'sh' || arr[i].ty === 'rc' || arr[i].ty === 'el' || arr[i].ty === 'sr') {
      if (!processedPos) {
        itemsData[i] = this.createShapeElement(arr[i], ownTransformers, level);
      }
      this.setElementStyles(itemsData[i]);
    } else if (arr[i].ty === 'tm' || arr[i].ty === 'rd' || arr[i].ty === 'ms' || arr[i].ty === 'pb') {
      if (!processedPos) {
        modifier = ShapeModifiers.getModifier(arr[i].ty);
        modifier.init(this, arr[i]);
        itemsData[i] = modifier;
        this.shapeModifiers.push(modifier);
      } else {
        modifier = itemsData[i];
        modifier.closed = false;
      }
      ownModifiers.push(modifier);
    } else if (arr[i].ty === 'rp') {
      if (!processedPos) {
        modifier = ShapeModifiers.getModifier(arr[i].ty);
        itemsData[i] = modifier;
        modifier.init(this, arr, i, itemsData);
        this.shapeModifiers.push(modifier);
        render = false;
      } else {
        modifier = itemsData[i];
        modifier.closed = true;
      }
      ownModifiers.push(modifier);
    }
    this.addProcessedElement(arr[i], i + 1);
  }
  len = ownStyles.length;
  for (i = 0; i < len; i += 1) {
    ownStyles[i].closed = true;
  }
  len = ownModifiers.length;
  for (i = 0; i < len; i += 1) {
    ownModifiers[i].closed = true;
  }
};

SVGShapeElement.prototype.renderInnerContent = function () {
  this.renderModifiers();
  var i;
  var len = this.stylesList.length;
  for (i = 0; i < len; i += 1) {
    this.stylesList[i].reset();
  }
  this.renderShape();

  for (i = 0; i < len; i += 1) {
    if (this.stylesList[i]._mdf || this._isFirstFrame) {
      if (this.stylesList[i].msElem) {
        this.stylesList[i].msElem.setAttribute('d', this.stylesList[i].d);
        // Adding M0 0 fixes same mask bug on all browsers
        this.stylesList[i].d = 'M0 0' + this.stylesList[i].d;
      }
      this.stylesList[i].pElem.setAttribute('d', this.stylesList[i].d || 'M0 0');
    }
  }
};

SVGShapeElement.prototype.renderShape = function () {
  var i;
  var len = this.animatedContents.length;
  var animatedContent;
  for (i = 0; i < len; i += 1) {
    animatedContent = this.animatedContents[i];
    if ((this._isFirstFrame || animatedContent.element._isAnimated) && animatedContent.data !== true) {
      animatedContent.fn(animatedContent.data, animatedContent.element, this._isFirstFrame);
    }
  }
};

SVGShapeElement.prototype.destroy = function () {
  this.destroyBaseElement();
  this.shapesData = null;
  this.itemsData = null;
};

/* global createNS */

function SVGTintFilter(filter, filterManager) {
  this.filterManager = filterManager;
  var feColorMatrix = createNS('feColorMatrix');
  feColorMatrix.setAttribute('type', 'matrix');
  feColorMatrix.setAttribute('color-interpolation-filters', 'linearRGB');
  feColorMatrix.setAttribute('values', '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0');
  feColorMatrix.setAttribute('result', 'f1');
  filter.appendChild(feColorMatrix);
  feColorMatrix = createNS('feColorMatrix');
  feColorMatrix.setAttribute('type', 'matrix');
  feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
  feColorMatrix.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');
  feColorMatrix.setAttribute('result', 'f2');
  filter.appendChild(feColorMatrix);
  this.matrixFilter = feColorMatrix;
  if (filterManager.effectElements[2].p.v !== 100 || filterManager.effectElements[2].p.k) {
    var feMerge = createNS('feMerge');
    filter.appendChild(feMerge);
    var feMergeNode;
    feMergeNode = createNS('feMergeNode');
    feMergeNode.setAttribute('in', 'SourceGraphic');
    feMerge.appendChild(feMergeNode);
    feMergeNode = createNS('feMergeNode');
    feMergeNode.setAttribute('in', 'f2');
    feMerge.appendChild(feMergeNode);
  }
}

SVGTintFilter.prototype.renderFrame = function (forceRender) {
  if (forceRender || this.filterManager._mdf) {
    var colorBlack = this.filterManager.effectElements[0].p.v;
    var colorWhite = this.filterManager.effectElements[1].p.v;
    var opacity = this.filterManager.effectElements[2].p.v / 100;
    this.matrixFilter.setAttribute('values', (colorWhite[0] - colorBlack[0]) + ' 0 0 0 ' + colorBlack[0] + ' ' + (colorWhite[1] - colorBlack[1]) + ' 0 0 0 ' + colorBlack[1] + ' ' + (colorWhite[2] - colorBlack[2]) + ' 0 0 0 ' + colorBlack[2] + ' 0 0 0 ' + opacity + ' 0');
  }
};

/* global createNS */

function SVGFillFilter(filter, filterManager) {
  this.filterManager = filterManager;
  var feColorMatrix = createNS('feColorMatrix');
  feColorMatrix.setAttribute('type', 'matrix');
  feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
  feColorMatrix.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');
  filter.appendChild(feColorMatrix);
  this.matrixFilter = feColorMatrix;
}
SVGFillFilter.prototype.renderFrame = function (forceRender) {
  if (forceRender || this.filterManager._mdf) {
    var color = this.filterManager.effectElements[2].p.v;
    var opacity = this.filterManager.effectElements[6].p.v;
    this.matrixFilter.setAttribute('values', '0 0 0 0 ' + color[0] + ' 0 0 0 0 ' + color[1] + ' 0 0 0 0 ' + color[2] + ' 0 0 0 ' + opacity + ' 0');
  }
};

/* global createNS */

function SVGGaussianBlurEffect(filter, filterManager) {
  // Outset the filter region by 100% on all sides to accommodate blur expansion.
  filter.setAttribute('x', '-100%');
  filter.setAttribute('y', '-100%');
  filter.setAttribute('width', '300%');
  filter.setAttribute('height', '300%');

  this.filterManager = filterManager;
  var feGaussianBlur = createNS('feGaussianBlur');
  filter.appendChild(feGaussianBlur);
  this.feGaussianBlur = feGaussianBlur;
}

SVGGaussianBlurEffect.prototype.renderFrame = function (forceRender) {
  if (forceRender || this.filterManager._mdf) {
    // Empirical value, matching AE's blur appearance.
    var kBlurrinessToSigma = 0.3;
    var sigma = this.filterManager.effectElements[0].p.v * kBlurrinessToSigma;

    // Dimensions mapping:
    //
    //   1 -> horizontal & vertical
    //   2 -> horizontal only
    //   3 -> vertical only
    //
    var dimensions = this.filterManager.effectElements[1].p.v;
    var sigmaX = (dimensions == 3) ? 0 : sigma; // eslint-disable-line eqeqeq
    var sigmaY = (dimensions == 2) ? 0 : sigma; // eslint-disable-line eqeqeq

    this.feGaussianBlur.setAttribute('stdDeviation', sigmaX + ' ' + sigmaY);

    // Repeat edges mapping:
    //
    //   0 -> off -> duplicate
    //   1 -> on  -> wrap
    var edgeMode = (this.filterManager.effectElements[2].p.v == 1) ? 'wrap' : 'duplicate'; // eslint-disable-line eqeqeq
    this.feGaussianBlur.setAttribute('edgeMode', edgeMode);
  }
};

/* global createNS, createElementID, locationHref, bmFloor */

function SVGStrokeEffect(elem, filterManager) {
  this.initialized = false;
  this.filterManager = filterManager;
  this.elem = elem;
  this.paths = [];
}

SVGStrokeEffect.prototype.initialize = function () {
  var elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;
  var path;
  var groupPath;
  var i;
  var len;
  if (this.filterManager.effectElements[1].p.v === 1) {
    len = this.elem.maskManager.masksProperties.length;
    i = 0;
  } else {
    i = this.filterManager.effectElements[0].p.v - 1;
    len = i + 1;
  }
  groupPath = createNS('g');
  groupPath.setAttribute('fill', 'none');
  groupPath.setAttribute('stroke-linecap', 'round');
  groupPath.setAttribute('stroke-dashoffset', 1);
  for (i; i < len; i += 1) {
    path = createNS('path');
    groupPath.appendChild(path);
    this.paths.push({ p: path, m: i });
  }
  if (this.filterManager.effectElements[10].p.v === 3) {
    var mask = createNS('mask');
    var id = createElementID();
    mask.setAttribute('id', id);
    mask.setAttribute('mask-type', 'alpha');
    mask.appendChild(groupPath);
    this.elem.globalData.defs.appendChild(mask);
    var g = createNS('g');
    g.setAttribute('mask', 'url(' + locationHref + '#' + id + ')');
    while (elemChildren[0]) {
      g.appendChild(elemChildren[0]);
    }
    this.elem.layerElement.appendChild(g);
    this.masker = mask;
    groupPath.setAttribute('stroke', '#fff');
  } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
    if (this.filterManager.effectElements[10].p.v === 2) {
      elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;
      while (elemChildren.length) {
        this.elem.layerElement.removeChild(elemChildren[0]);
      }
    }
    this.elem.layerElement.appendChild(groupPath);
    this.elem.layerElement.removeAttribute('mask');
    groupPath.setAttribute('stroke', '#fff');
  }
  this.initialized = true;
  this.pathMasker = groupPath;
};

SVGStrokeEffect.prototype.renderFrame = function (forceRender) {
  if (!this.initialized) {
    this.initialize();
  }
  var i;
  var len = this.paths.length;
  var mask;
  var path;
  for (i = 0; i < len; i += 1) {
    if (this.paths[i].m !== -1) {
      mask = this.elem.maskManager.viewData[this.paths[i].m];
      path = this.paths[i].p;
      if (forceRender || this.filterManager._mdf || mask.prop._mdf) {
        path.setAttribute('d', mask.lastPath);
      }
      if (forceRender || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || mask.prop._mdf) {
        var dasharrayValue;
        if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
          var s = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01;
          var e = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01;
          var l = path.getTotalLength();
          dasharrayValue = '0 0 0 ' + l * s + ' ';
          var lineLength = l * (e - s);
          var segment = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
          var units = Math.floor(lineLength / segment);
          var j;
          for (j = 0; j < units; j += 1) {
            dasharrayValue += '1 ' + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01 + ' ';
          }
          dasharrayValue += '0 ' + l * 10 + ' 0 0';
        } else {
          dasharrayValue = '1 ' + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
        }
        path.setAttribute('stroke-dasharray', dasharrayValue);
      }
    }
  }
  if (forceRender || this.filterManager.effectElements[4].p._mdf) {
    this.pathMasker.setAttribute('stroke-width', this.filterManager.effectElements[4].p.v * 2);
  }

  if (forceRender || this.filterManager.effectElements[6].p._mdf) {
    this.pathMasker.setAttribute('opacity', this.filterManager.effectElements[6].p.v);
  }
  if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
    if (forceRender || this.filterManager.effectElements[3].p._mdf) {
      var color = this.filterManager.effectElements[3].p.v;
      this.pathMasker.setAttribute('stroke', 'rgb(' + bmFloor(color[0] * 255) + ',' + bmFloor(color[1] * 255) + ',' + bmFloor(color[2] * 255) + ')');
    }
  }
};

/* global createNS */

function SVGTritoneFilter(filter, filterManager) {
  this.filterManager = filterManager;
  var feColorMatrix = createNS('feColorMatrix');
  feColorMatrix.setAttribute('type', 'matrix');
  feColorMatrix.setAttribute('color-interpolation-filters', 'linearRGB');
  feColorMatrix.setAttribute('values', '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0');
  feColorMatrix.setAttribute('result', 'f1');
  filter.appendChild(feColorMatrix);
  var feComponentTransfer = createNS('feComponentTransfer');
  feComponentTransfer.setAttribute('color-interpolation-filters', 'sRGB');
  filter.appendChild(feComponentTransfer);
  this.matrixFilter = feComponentTransfer;
  var feFuncR = createNS('feFuncR');
  feFuncR.setAttribute('type', 'table');
  feComponentTransfer.appendChild(feFuncR);
  this.feFuncR = feFuncR;
  var feFuncG = createNS('feFuncG');
  feFuncG.setAttribute('type', 'table');
  feComponentTransfer.appendChild(feFuncG);
  this.feFuncG = feFuncG;
  var feFuncB = createNS('feFuncB');
  feFuncB.setAttribute('type', 'table');
  feComponentTransfer.appendChild(feFuncB);
  this.feFuncB = feFuncB;
}

SVGTritoneFilter.prototype.renderFrame = function (forceRender) {
  if (forceRender || this.filterManager._mdf) {
    var color1 = this.filterManager.effectElements[0].p.v;
    var color2 = this.filterManager.effectElements[1].p.v;
    var color3 = this.filterManager.effectElements[2].p.v;
    var tableR = color3[0] + ' ' + color2[0] + ' ' + color1[0];
    var tableG = color3[1] + ' ' + color2[1] + ' ' + color1[1];
    var tableB = color3[2] + ' ' + color2[2] + ' ' + color1[2];
    this.feFuncR.setAttribute('tableValues', tableR);
    this.feFuncG.setAttribute('tableValues', tableG);
    this.feFuncB.setAttribute('tableValues', tableB);
    // var opacity = this.filterManager.effectElements[2].p.v/100;
    // this.matrixFilter.setAttribute('values',(colorWhite[0]- colorBlack[0])+' 0 0 0 '+ colorBlack[0] +' '+ (colorWhite[1]- colorBlack[1]) +' 0 0 0 '+ colorBlack[1] +' '+ (colorWhite[2]- colorBlack[2]) +' 0 0 0 '+ colorBlack[2] +' 0 0 0 ' + opacity + ' 0');
  }
};

/* global createNS */

function SVGProLevelsFilter(filter, filterManager) {
  this.filterManager = filterManager;
  var effectElements = this.filterManager.effectElements;
  var feComponentTransfer = createNS('feComponentTransfer');

  if (effectElements[10].p.k || effectElements[10].p.v !== 0 || effectElements[11].p.k || effectElements[11].p.v !== 1 || effectElements[12].p.k || effectElements[12].p.v !== 1 || effectElements[13].p.k || effectElements[13].p.v !== 0 || effectElements[14].p.k || effectElements[14].p.v !== 1) {
    this.feFuncR = this.createFeFunc('feFuncR', feComponentTransfer);
  }
  if (effectElements[17].p.k || effectElements[17].p.v !== 0 || effectElements[18].p.k || effectElements[18].p.v !== 1 || effectElements[19].p.k || effectElements[19].p.v !== 1 || effectElements[20].p.k || effectElements[20].p.v !== 0 || effectElements[21].p.k || effectElements[21].p.v !== 1) {
    this.feFuncG = this.createFeFunc('feFuncG', feComponentTransfer);
  }
  if (effectElements[24].p.k || effectElements[24].p.v !== 0 || effectElements[25].p.k || effectElements[25].p.v !== 1 || effectElements[26].p.k || effectElements[26].p.v !== 1 || effectElements[27].p.k || effectElements[27].p.v !== 0 || effectElements[28].p.k || effectElements[28].p.v !== 1) {
    this.feFuncB = this.createFeFunc('feFuncB', feComponentTransfer);
  }
  if (effectElements[31].p.k || effectElements[31].p.v !== 0 || effectElements[32].p.k || effectElements[32].p.v !== 1 || effectElements[33].p.k || effectElements[33].p.v !== 1 || effectElements[34].p.k || effectElements[34].p.v !== 0 || effectElements[35].p.k || effectElements[35].p.v !== 1) {
    this.feFuncA = this.createFeFunc('feFuncA', feComponentTransfer);
  }

  if (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) {
    feComponentTransfer.setAttribute('color-interpolation-filters', 'sRGB');
    filter.appendChild(feComponentTransfer);
    feComponentTransfer = createNS('feComponentTransfer');
  }

  if (effectElements[3].p.k || effectElements[3].p.v !== 0 || effectElements[4].p.k || effectElements[4].p.v !== 1 || effectElements[5].p.k || effectElements[5].p.v !== 1 || effectElements[6].p.k || effectElements[6].p.v !== 0 || effectElements[7].p.k || effectElements[7].p.v !== 1) {
    feComponentTransfer.setAttribute('color-interpolation-filters', 'sRGB');
    filter.appendChild(feComponentTransfer);
    this.feFuncRComposed = this.createFeFunc('feFuncR', feComponentTransfer);
    this.feFuncGComposed = this.createFeFunc('feFuncG', feComponentTransfer);
    this.feFuncBComposed = this.createFeFunc('feFuncB', feComponentTransfer);
  }
}

SVGProLevelsFilter.prototype.createFeFunc = function (type, feComponentTransfer) {
  var feFunc = createNS(type);
  feFunc.setAttribute('type', 'table');
  feComponentTransfer.appendChild(feFunc);
  return feFunc;
};

SVGProLevelsFilter.prototype.getTableValue = function (inputBlack, inputWhite, gamma, outputBlack, outputWhite) {
  var cnt = 0;
  var segments = 256;
  var perc;
  var min = Math.min(inputBlack, inputWhite);
  var max = Math.max(inputBlack, inputWhite);
  var table = Array.call(null, { length: segments });
  var colorValue;
  var pos = 0;
  var outputDelta = outputWhite - outputBlack;
  var inputDelta = inputWhite - inputBlack;
  while (cnt <= 256) {
    perc = cnt / 256;
    if (perc <= min) {
      colorValue = inputDelta < 0 ? outputWhite : outputBlack;
    } else if (perc >= max) {
      colorValue = inputDelta < 0 ? outputBlack : outputWhite;
    } else {
      colorValue = (outputBlack + outputDelta * Math.pow((perc - inputBlack) / inputDelta, 1 / gamma));
    }
    table[pos] = colorValue;
    pos += 1;
    cnt += 256 / (segments - 1);
  }
  return table.join(' ');
};

SVGProLevelsFilter.prototype.renderFrame = function (forceRender) {
  if (forceRender || this.filterManager._mdf) {
    var val;
    var effectElements = this.filterManager.effectElements;
    if (this.feFuncRComposed && (forceRender || effectElements[3].p._mdf || effectElements[4].p._mdf || effectElements[5].p._mdf || effectElements[6].p._mdf || effectElements[7].p._mdf)) {
      val = this.getTableValue(effectElements[3].p.v, effectElements[4].p.v, effectElements[5].p.v, effectElements[6].p.v, effectElements[7].p.v);
      this.feFuncRComposed.setAttribute('tableValues', val);
      this.feFuncGComposed.setAttribute('tableValues', val);
      this.feFuncBComposed.setAttribute('tableValues', val);
    }

    if (this.feFuncR && (forceRender || effectElements[10].p._mdf || effectElements[11].p._mdf || effectElements[12].p._mdf || effectElements[13].p._mdf || effectElements[14].p._mdf)) {
      val = this.getTableValue(effectElements[10].p.v, effectElements[11].p.v, effectElements[12].p.v, effectElements[13].p.v, effectElements[14].p.v);
      this.feFuncR.setAttribute('tableValues', val);
    }

    if (this.feFuncG && (forceRender || effectElements[17].p._mdf || effectElements[18].p._mdf || effectElements[19].p._mdf || effectElements[20].p._mdf || effectElements[21].p._mdf)) {
      val = this.getTableValue(effectElements[17].p.v, effectElements[18].p.v, effectElements[19].p.v, effectElements[20].p.v, effectElements[21].p.v);
      this.feFuncG.setAttribute('tableValues', val);
    }

    if (this.feFuncB && (forceRender || effectElements[24].p._mdf || effectElements[25].p._mdf || effectElements[26].p._mdf || effectElements[27].p._mdf || effectElements[28].p._mdf)) {
      val = this.getTableValue(effectElements[24].p.v, effectElements[25].p.v, effectElements[26].p.v, effectElements[27].p.v, effectElements[28].p.v);
      this.feFuncB.setAttribute('tableValues', val);
    }

    if (this.feFuncA && (forceRender || effectElements[31].p._mdf || effectElements[32].p._mdf || effectElements[33].p._mdf || effectElements[34].p._mdf || effectElements[35].p._mdf)) {
      val = this.getTableValue(effectElements[31].p.v, effectElements[32].p.v, effectElements[33].p.v, effectElements[34].p.v, effectElements[35].p.v);
      this.feFuncA.setAttribute('tableValues', val);
    }
  }
};

/* global createNS, rgbToHex, degToRads */

function SVGDropShadowEffect(filter, filterManager) {
  var filterSize = filterManager.container.globalData.renderConfig.filterSize;
  filter.setAttribute('x', filterSize.x);
  filter.setAttribute('y', filterSize.y);
  filter.setAttribute('width', filterSize.width);
  filter.setAttribute('height', filterSize.height);
  this.filterManager = filterManager;

  var feGaussianBlur = createNS('feGaussianBlur');
  feGaussianBlur.setAttribute('in', 'SourceAlpha');
  feGaussianBlur.setAttribute('result', 'drop_shadow_1');
  feGaussianBlur.setAttribute('stdDeviation', '0');
  this.feGaussianBlur = feGaussianBlur;
  filter.appendChild(feGaussianBlur);

  var feOffset = createNS('feOffset');
  feOffset.setAttribute('dx', '25');
  feOffset.setAttribute('dy', '0');
  feOffset.setAttribute('in', 'drop_shadow_1');
  feOffset.setAttribute('result', 'drop_shadow_2');
  this.feOffset = feOffset;
  filter.appendChild(feOffset);
  var feFlood = createNS('feFlood');
  feFlood.setAttribute('flood-color', '#00ff00');
  feFlood.setAttribute('flood-opacity', '1');
  feFlood.setAttribute('result', 'drop_shadow_3');
  this.feFlood = feFlood;
  filter.appendChild(feFlood);

  var feComposite = createNS('feComposite');
  feComposite.setAttribute('in', 'drop_shadow_3');
  feComposite.setAttribute('in2', 'drop_shadow_2');
  feComposite.setAttribute('operator', 'in');
  feComposite.setAttribute('result', 'drop_shadow_4');
  filter.appendChild(feComposite);

  var feMerge = createNS('feMerge');
  filter.appendChild(feMerge);
  var feMergeNode;
  feMergeNode = createNS('feMergeNode');
  feMerge.appendChild(feMergeNode);
  feMergeNode = createNS('feMergeNode');
  feMergeNode.setAttribute('in', 'SourceGraphic');
  this.feMergeNode = feMergeNode;
  this.feMerge = feMerge;
  this.originalNodeAdded = false;
  feMerge.appendChild(feMergeNode);
}

SVGDropShadowEffect.prototype.renderFrame = function (forceRender) {
  if (forceRender || this.filterManager._mdf) {
    if (forceRender || this.filterManager.effectElements[4].p._mdf) {
      this.feGaussianBlur.setAttribute('stdDeviation', this.filterManager.effectElements[4].p.v / 4);
    }
    if (forceRender || this.filterManager.effectElements[0].p._mdf) {
      var col = this.filterManager.effectElements[0].p.v;
      this.feFlood.setAttribute('flood-color', rgbToHex(Math.round(col[0] * 255), Math.round(col[1] * 255), Math.round(col[2] * 255)));
    }
    if (forceRender || this.filterManager.effectElements[1].p._mdf) {
      this.feFlood.setAttribute('flood-opacity', this.filterManager.effectElements[1].p.v / 255);
    }
    if (forceRender || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
      var distance = this.filterManager.effectElements[3].p.v;
      var angle = (this.filterManager.effectElements[2].p.v - 90) * degToRads;
      var x = distance * Math.cos(angle);
      var y = distance * Math.sin(angle);
      this.feOffset.setAttribute('dx', x);
      this.feOffset.setAttribute('dy', y);
    }
    /* if(forceRender || this.filterManager.effectElements[5].p._mdf){
            if(this.filterManager.effectElements[5].p.v === 1 && this.originalNodeAdded) {
                this.feMerge.removeChild(this.feMergeNode);
                this.originalNodeAdded = false;
            } else if(this.filterManager.effectElements[5].p.v === 0 && !this.originalNodeAdded) {
                this.feMerge.appendChild(this.feMergeNode);
                this.originalNodeAdded = true;
            }
        } */
  }
};

/* global createElementID, createNS */

var _svgMatteSymbols = [];

function SVGMatte3Effect(filterElem, filterManager, elem) {
  this.initialized = false;
  this.filterManager = filterManager;
  this.filterElem = filterElem;
  this.elem = elem;
  elem.matteElement = createNS('g');
  elem.matteElement.appendChild(elem.layerElement);
  elem.matteElement.appendChild(elem.transformedElement);
  elem.baseElement = elem.matteElement;
}

SVGMatte3Effect.prototype.findSymbol = function (mask) {
  var i = 0;
  var len = _svgMatteSymbols.length;
  while (i < len) {
    if (_svgMatteSymbols[i] === mask) {
      return _svgMatteSymbols[i];
    }
    i += 1;
  }
  return null;
};

SVGMatte3Effect.prototype.replaceInParent = function (mask, symbolId) {
  var parentNode = mask.layerElement.parentNode;
  if (!parentNode) {
    return;
  }
  var children = parentNode.children;
  var i = 0;
  var len = children.length;
  while (i < len) {
    if (children[i] === mask.layerElement) {
      break;
    }
    i += 1;
  }
  var nextChild;
  if (i <= len - 2) {
    nextChild = children[i + 1];
  }
  var useElem = createNS('use');
  useElem.setAttribute('href', '#' + symbolId);
  if (nextChild) {
    parentNode.insertBefore(useElem, nextChild);
  } else {
    parentNode.appendChild(useElem);
  }
};

SVGMatte3Effect.prototype.setElementAsMask = function (elem, mask) {
  if (!this.findSymbol(mask)) {
    var symbolId = createElementID();
    var masker = createNS('mask');
    masker.setAttribute('id', mask.layerId);
    masker.setAttribute('mask-type', 'alpha');
    _svgMatteSymbols.push(mask);
    var defs = elem.globalData.defs;
    defs.appendChild(masker);
    var symbol = createNS('symbol');
    symbol.setAttribute('id', symbolId);
    this.replaceInParent(mask, symbolId);
    symbol.appendChild(mask.layerElement);
    defs.appendChild(symbol);
    var useElem = createNS('use');
    useElem.setAttribute('href', '#' + symbolId);
    masker.appendChild(useElem);
    mask.data.hd = false;
    mask.show();
  }
  elem.setMatte(mask.layerId);
};

SVGMatte3Effect.prototype.initialize = function () {
  var ind = this.filterManager.effectElements[0].p.v;
  var elements = this.elem.comp.elements;
  var i = 0;
  var len = elements.length;
  while (i < len) {
    if (elements[i] && elements[i].data.ind === ind) {
      this.setElementAsMask(this.elem, elements[i]);
    }
    i += 1;
  }
  this.initialized = true;
};

SVGMatte3Effect.prototype.renderFrame = function () {
  if (!this.initialized) {
    this.initialize();
  }
};

/* global createElementID, filtersFactory, SVGTintFilter, SVGFillFilter, SVGStrokeEffect, SVGTritoneFilter,
SVGProLevelsFilter, SVGDropShadowEffect, SVGMatte3Effect, SVGGaussianBlurEffect, locationHref */

function SVGEffects(elem) {
  var i;
  var len = elem.data.ef ? elem.data.ef.length : 0;
  var filId = createElementID();
  var fil = filtersFactory.createFilter(filId, true);
  var count = 0;
  this.filters = [];
  var filterManager;
  for (i = 0; i < len; i += 1) {
    filterManager = null;
    if (elem.data.ef[i].ty === 20) {
      count += 1;
      filterManager = new SVGTintFilter(fil, elem.effectsManager.effectElements[i]);
    } else if (elem.data.ef[i].ty === 21) {
      count += 1;
      filterManager = new SVGFillFilter(fil, elem.effectsManager.effectElements[i]);
    } else if (elem.data.ef[i].ty === 22) {
      filterManager = new SVGStrokeEffect(elem, elem.effectsManager.effectElements[i]);
    } else if (elem.data.ef[i].ty === 23) {
      count += 1;
      filterManager = new SVGTritoneFilter(fil, elem.effectsManager.effectElements[i]);
    } else if (elem.data.ef[i].ty === 24) {
      count += 1;
      filterManager = new SVGProLevelsFilter(fil, elem.effectsManager.effectElements[i]);
    } else if (elem.data.ef[i].ty === 25) {
      count += 1;
      filterManager = new SVGDropShadowEffect(fil, elem.effectsManager.effectElements[i]);
    } else if (elem.data.ef[i].ty === 28) {
      // count += 1;
      filterManager = new SVGMatte3Effect(fil, elem.effectsManager.effectElements[i], elem);
    } else if (elem.data.ef[i].ty === 29) {
      count += 1;
      filterManager = new SVGGaussianBlurEffect(fil, elem.effectsManager.effectElements[i]);
    }
    if (filterManager) {
      this.filters.push(filterManager);
    }
  }
  if (count) {
    elem.globalData.defs.appendChild(fil);
    elem.layerElement.setAttribute('filter', 'url(' + locationHref + '#' + filId + ')');
  }
  if (this.filters.length) {
    elem.addRenderableComponent(this);
  }
}

SVGEffects.prototype.renderFrame = function (_isFirstFrame) {
  var i;
  var len = this.filters.length;
  for (i = 0; i < len; i += 1) {
    this.filters[i].renderFrame(_isFirstFrame);
  }
};

/* global Matrix, createTypedArray */

function CVContextData() {
  this.saved = [];
  this.cArrPos = 0;
  this.cTr = new Matrix();
  this.cO = 1;
  var i;
  var len = 15;
  this.savedOp = createTypedArray('float32', len);
  for (i = 0; i < len; i += 1) {
    this.saved[i] = createTypedArray('float32', 16);
  }
  this._length = len;
}

CVContextData.prototype.duplicate = function () {
  var newLength = this._length * 2;
  var currentSavedOp = this.savedOp;
  this.savedOp = createTypedArray('float32', newLength);
  this.savedOp.set(currentSavedOp);
  var i = 0;
  for (i = this._length; i < newLength; i += 1) {
    this.saved[i] = createTypedArray('float32', 16);
  }
  this._length = newLength;
};

CVContextData.prototype.reset = function () {
  this.cArrPos = 0;
  this.cTr.reset();
  this.cO = 1;
};

/* global CVEffects, getBlendMode, CVMaskElement, Matrix */

function CVBaseElement() {
}

CVBaseElement.prototype = {
  createElements: function () {},
  initRendererElement: function () {},
  createContainerElements: function () {
    this.canvasContext = this.globalData.canvasContext;
    this.renderableEffectsManager = new CVEffects(this);
  },
  createContent: function () {},
  setBlendMode: function () {
    var globalData = this.globalData;
    if (globalData.blendMode !== this.data.bm) {
      globalData.blendMode = this.data.bm;
      var blendModeValue = getBlendMode(this.data.bm);
      globalData.canvasContext.globalCompositeOperation = blendModeValue;
    }
  },
  createRenderableComponents: function () {
    this.maskManager = new CVMaskElement(this.data, this);
  },
  hideElement: function () {
    if (!this.hidden && (!this.isInRange || this.isTransparent)) {
      this.hidden = true;
    }
  },
  showElement: function () {
    if (this.isInRange && !this.isTransparent) {
      this.hidden = false;
      this._isFirstFrame = true;
      this.maskManager._isFirstFrame = true;
    }
  },
  renderFrame: function () {
    if (this.hidden || this.data.hd) {
      return;
    }
    this.renderTransform();
    this.renderRenderable();
    this.setBlendMode();
    var forceRealStack = this.data.ty === 0;
    this.globalData.renderer.save(forceRealStack);
    this.globalData.renderer.ctxTransform(this.finalTransform.mat.props);
    this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v);
    this.renderInnerContent();
    this.globalData.renderer.restore(forceRealStack);
    if (this.maskManager.hasMasks) {
      this.globalData.renderer.restore(true);
    }
    if (this._isFirstFrame) {
      this._isFirstFrame = false;
    }
  },
  destroy: function () {
    this.canvasContext = null;
    this.data = null;
    this.globalData = null;
    this.maskManager.destroy();
  },
  mHelper: new Matrix(),
};
CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement;
CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;

/* global extendPrototype, BaseElement, TransformElement, CVBaseElement,HierarchyElement, FrameElement,
RenderableElement, SVGShapeElement, IImageElement, createTag */

function CVImageElement(data, globalData, comp) {
  this.assetData = globalData.getAssetData(data.refId);
  this.img = globalData.imageLoader.getAsset(this.assetData);
  this.initElement(data, globalData, comp);
}
extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement);

CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement;
CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;

CVImageElement.prototype.createContent = function () {
  if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
    var canvas = createTag('canvas');
    canvas.width = this.assetData.w;
    canvas.height = this.assetData.h;
    var ctx = canvas.getContext('2d');

    var imgW = this.img.width;
    var imgH = this.img.height;
    var imgRel = imgW / imgH;
    var canvasRel = this.assetData.w / this.assetData.h;
    var widthCrop;
    var heightCrop;
    var par = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
    if ((imgRel > canvasRel && par === 'xMidYMid slice') || (imgRel < canvasRel && par !== 'xMidYMid slice')) {
      heightCrop = imgH;
      widthCrop = heightCrop * canvasRel;
    } else {
      widthCrop = imgW;
      heightCrop = widthCrop / canvasRel;
    }
    ctx.drawImage(this.img, (imgW - widthCrop) / 2, (imgH - heightCrop) / 2, widthCrop, heightCrop, 0, 0, this.assetData.w, this.assetData.h);
    this.img = canvas;
  }
};

CVImageElement.prototype.renderInnerContent = function () {
  this.canvasContext.drawImage(this.img, 0, 0);
};

CVImageElement.prototype.destroy = function () {
  this.img = null;
};

/* global createSizedArray, PropertyFactory, extendPrototype, CanvasRenderer, ICompElement, CVBaseElement */

function CVCompElement(data, globalData, comp) {
  this.completeLayers = false;
  this.layers = data.layers;
  this.pendingElements = [];
  this.elements = createSizedArray(this.layers.length);
  this.initElement(data, globalData, comp);
  this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : { _placeholder: true };
}

extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement);

CVCompElement.prototype.renderInnerContent = function () {
  var ctx = this.canvasContext;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(this.data.w, 0);
  ctx.lineTo(this.data.w, this.data.h);
  ctx.lineTo(0, this.data.h);
  ctx.lineTo(0, 0);
  ctx.clip();
  var i;
  var len = this.layers.length;
  for (i = len - 1; i >= 0; i -= 1) {
    if (this.completeLayers || this.elements[i]) {
      this.elements[i].renderFrame();
    }
  }
};

CVCompElement.prototype.destroy = function () {
  var i;
  var len = this.layers.length;
  for (i = len - 1; i >= 0; i -= 1) {
    if (this.elements[i]) {
      this.elements[i].destroy();
    }
  }
  this.layers = null;
  this.elements = null;
};

/* global createSizedArray, ShapePropertyFactory, MaskElement */

function CVMaskElement(data, element) {
  this.data = data;
  this.element = element;
  this.masksProperties = this.data.masksProperties || [];
  this.viewData = createSizedArray(this.masksProperties.length);
  var i;
  var len = this.masksProperties.length;
  var hasMasks = false;
  for (i = 0; i < len; i += 1) {
    if (this.masksProperties[i].mode !== 'n') {
      hasMasks = true;
    }
    this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
  }
  this.hasMasks = hasMasks;
  if (hasMasks) {
    this.element.addRenderableComponent(this);
  }
}

CVMaskElement.prototype.renderFrame = function () {
  if (!this.hasMasks) {
    return;
  }
  var transform = this.element.finalTransform.mat;
  var ctx = this.element.canvasContext;
  var i;
  var len = this.masksProperties.length;
  var pt;
  var pts;
  var data;
  ctx.beginPath();
  for (i = 0; i < len; i += 1) {
    if (this.masksProperties[i].mode !== 'n') {
      if (this.masksProperties[i].inv) {
        ctx.moveTo(0, 0);
        ctx.lineTo(this.element.globalData.compSize.w, 0);
        ctx.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h);
        ctx.lineTo(0, this.element.globalData.compSize.h);
        ctx.lineTo(0, 0);
      }
      data = this.viewData[i].v;
      pt = transform.applyToPointArray(data.v[0][0], data.v[0][1], 0);
      ctx.moveTo(pt[0], pt[1]);
      var j;
      var jLen = data._length;
      for (j = 1; j < jLen; j += 1) {
        pts = transform.applyToTriplePoints(data.o[j - 1], data.i[j], data.v[j]);
        ctx.bezierCurveTo(pts[0], pts[1], pts[2], pts[3], pts[4], pts[5]);
      }
      pts = transform.applyToTriplePoints(data.o[j - 1], data.i[0], data.v[0]);
      ctx.bezierCurveTo(pts[0], pts[1], pts[2], pts[3], pts[4], pts[5]);
    }
  }
  this.element.globalData.renderer.save(true);
  ctx.clip();
};

CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty;

CVMaskElement.prototype.destroy = function () {
  this.element = null;
};

/* global ShapeTransformManager, extendPrototype, BaseElement, TransformElement, CVBaseElement, IShapeElement,
HierarchyElement, FrameElement, RenderableElement, RenderableDOMElement, PropertyFactory, degToRads, GradientProperty,
DashProperty, TransformPropertyFactory, CVShapeData, ShapeModifiers, bmFloor, lineCapEnum, lineJoinEnum */

function CVShapeElement(data, globalData, comp) {
  this.shapes = [];
  this.shapesData = data.shapes;
  this.stylesList = [];
  this.itemsData = [];
  this.prevViewData = [];
  this.shapeModifiers = [];
  this.processedElements = [];
  this.transformsManager = new ShapeTransformManager();
  this.initElement(data, globalData, comp);
}

extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement);

CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement;

CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: false };

CVShapeElement.prototype.dashResetter = [];

CVShapeElement.prototype.createContent = function () {
  this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
};

CVShapeElement.prototype.createStyleElement = function (data, transforms) {
  var styleElem = {
    data: data,
    type: data.ty,
    preTransforms: this.transformsManager.addTransformSequence(transforms),
    transforms: [],
    elements: [],
    closed: data.hd === true,
  };
  var elementData = {};
  if (data.ty === 'fl' || data.ty === 'st') {
    elementData.c = PropertyFactory.getProp(this, data.c, 1, 255, this);
    if (!elementData.c.k) {
      styleElem.co = 'rgb(' + bmFloor(elementData.c.v[0]) + ',' + bmFloor(elementData.c.v[1]) + ',' + bmFloor(elementData.c.v[2]) + ')';
    }
  } else if (data.ty === 'gf' || data.ty === 'gs') {
    elementData.s = PropertyFactory.getProp(this, data.s, 1, null, this);
    elementData.e = PropertyFactory.getProp(this, data.e, 1, null, this);
    elementData.h = PropertyFactory.getProp(this, data.h || { k: 0 }, 0, 0.01, this);
    elementData.a = PropertyFactory.getProp(this, data.a || { k: 0 }, 0, degToRads, this);
    elementData.g = new GradientProperty(this, data.g, this);
  }
  elementData.o = PropertyFactory.getProp(this, data.o, 0, 0.01, this);
  if (data.ty === 'st' || data.ty === 'gs') {
    styleElem.lc = lineCapEnum[data.lc || 2];
    styleElem.lj = lineJoinEnum[data.lj || 2];
    if (data.lj == 1) { // eslint-disable-line eqeqeq
      styleElem.ml = data.ml;
    }
    elementData.w = PropertyFactory.getProp(this, data.w, 0, null, this);
    if (!elementData.w.k) {
      styleElem.wi = elementData.w.v;
    }
    if (data.d) {
      var d = new DashProperty(this, data.d, 'canvas', this);
      elementData.d = d;
      if (!elementData.d.k) {
        styleElem.da = elementData.d.dashArray;
        styleElem.do = elementData.d.dashoffset[0];
      }
    }
  } else {
    styleElem.r = data.r === 2 ? 'evenodd' : 'nonzero';
  }
  this.stylesList.push(styleElem);
  elementData.style = styleElem;
  return elementData;
};

CVShapeElement.prototype.createGroupElement = function () {
  var elementData = {
    it: [],
    prevViewData: [],
  };
  return elementData;
};

CVShapeElement.prototype.createTransformElement = function (data) {
  var elementData = {
    transform: {
      opacity: 1,
      _opMdf: false,
      key: this.transformsManager.getNewKey(),
      op: PropertyFactory.getProp(this, data.o, 0, 0.01, this),
      mProps: TransformPropertyFactory.getTransformProperty(this, data, this),
    },
  };
  return elementData;
};

CVShapeElement.prototype.createShapeElement = function (data) {
  var elementData = new CVShapeData(this, data, this.stylesList, this.transformsManager);

  this.shapes.push(elementData);
  this.addShapeToModifiers(elementData);
  return elementData;
};

CVShapeElement.prototype.reloadShapes = function () {
  this._isFirstFrame = true;
  var i;
  var len = this.itemsData.length;
  for (i = 0; i < len; i += 1) {
    this.prevViewData[i] = this.itemsData[i];
  }
  this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
  len = this.dynamicProperties.length;
  for (i = 0; i < len; i += 1) {
    this.dynamicProperties[i].getValue();
  }
  this.renderModifiers();
  this.transformsManager.processSequences(this._isFirstFrame);
};

CVShapeElement.prototype.addTransformToStyleList = function (transform) {
  var i;
  var len = this.stylesList.length;
  for (i = 0; i < len; i += 1) {
    if (!this.stylesList[i].closed) {
      this.stylesList[i].transforms.push(transform);
    }
  }
};

CVShapeElement.prototype.removeTransformFromStyleList = function () {
  var i;
  var len = this.stylesList.length;
  for (i = 0; i < len; i += 1) {
    if (!this.stylesList[i].closed) {
      this.stylesList[i].transforms.pop();
    }
  }
};

CVShapeElement.prototype.closeStyles = function (styles) {
  var i;
  var len = styles.length;
  for (i = 0; i < len; i += 1) {
    styles[i].closed = true;
  }
};

CVShapeElement.prototype.searchShapes = function (arr, itemsData, prevViewData, shouldRender, transforms) {
  var i;
  var len = arr.length - 1;
  var j;
  var jLen;
  var ownStyles = [];
  var ownModifiers = [];
  var processedPos;
  var modifier;
  var currentTransform;
  var ownTransforms = [].concat(transforms);
  for (i = len; i >= 0; i -= 1) {
    processedPos = this.searchProcessedElement(arr[i]);
    if (!processedPos) {
      arr[i]._shouldRender = shouldRender;
    } else {
      itemsData[i] = prevViewData[processedPos - 1];
    }
    if (arr[i].ty === 'fl' || arr[i].ty === 'st' || arr[i].ty === 'gf' || arr[i].ty === 'gs') {
      if (!processedPos) {
        itemsData[i] = this.createStyleElement(arr[i], ownTransforms);
      } else {
        itemsData[i].style.closed = false;
      }

      ownStyles.push(itemsData[i].style);
    } else if (arr[i].ty === 'gr') {
      if (!processedPos) {
        itemsData[i] = this.createGroupElement(arr[i]);
      } else {
        jLen = itemsData[i].it.length;
        for (j = 0; j < jLen; j += 1) {
          itemsData[i].prevViewData[j] = itemsData[i].it[j];
        }
      }
      this.searchShapes(arr[i].it, itemsData[i].it, itemsData[i].prevViewData, shouldRender, ownTransforms);
    } else if (arr[i].ty === 'tr') {
      if (!processedPos) {
        currentTransform = this.createTransformElement(arr[i]);
        itemsData[i] = currentTransform;
      }
      ownTransforms.push(itemsData[i]);
      this.addTransformToStyleList(itemsData[i]);
    } else if (arr[i].ty === 'sh' || arr[i].ty === 'rc' || arr[i].ty === 'el' || arr[i].ty === 'sr') {
      if (!processedPos) {
        itemsData[i] = this.createShapeElement(arr[i]);
      }
    } else if (arr[i].ty === 'tm' || arr[i].ty === 'rd' || arr[i].ty === 'pb') {
      if (!processedPos) {
        modifier = ShapeModifiers.getModifier(arr[i].ty);
        modifier.init(this, arr[i]);
        itemsData[i] = modifier;
        this.shapeModifiers.push(modifier);
      } else {
        modifier = itemsData[i];
        modifier.closed = false;
      }
      ownModifiers.push(modifier);
    } else if (arr[i].ty === 'rp') {
      if (!processedPos) {
        modifier = ShapeModifiers.getModifier(arr[i].ty);
        itemsData[i] = modifier;
        modifier.init(this, arr, i, itemsData);
        this.shapeModifiers.push(modifier);
        shouldRender = false;
      } else {
        modifier = itemsData[i];
        modifier.closed = true;
      }
      ownModifiers.push(modifier);
    }
    this.addProcessedElement(arr[i], i + 1);
  }
  this.removeTransformFromStyleList();
  this.closeStyles(ownStyles);
  len = ownModifiers.length;
  for (i = 0; i < len; i += 1) {
    ownModifiers[i].closed = true;
  }
};

CVShapeElement.prototype.renderInnerContent = function () {
  this.transformHelper.opacity = 1;
  this.transformHelper._opMdf = false;
  this.renderModifiers();
  this.transformsManager.processSequences(this._isFirstFrame);
  this.renderShape(this.transformHelper, this.shapesData, this.itemsData, true);
};

CVShapeElement.prototype.renderShapeTransform = function (parentTransform, groupTransform) {
  if (parentTransform._opMdf || groupTransform.op._mdf || this._isFirstFrame) {
    groupTransform.opacity = parentTransform.opacity;
    groupTransform.opacity *= groupTransform.op.v;
    groupTransform._opMdf = true;
  }
};

CVShapeElement.prototype.drawLayer = function () {
  var i;
  var len = this.stylesList.length;
  var j;
  var jLen;
  var k;
  var kLen;
  var elems;
  var nodes;
  var renderer = this.globalData.renderer;
  var ctx = this.globalData.canvasContext;
  var type;
  var currentStyle;
  for (i = 0; i < len; i += 1) {
    currentStyle = this.stylesList[i];
    type = currentStyle.type;

    // Skipping style when
    // Stroke width equals 0
    // style should not be rendered (extra unused repeaters)
    // current opacity equals 0
    // global opacity equals 0
    if (!(((type === 'st' || type === 'gs') && currentStyle.wi === 0) || !currentStyle.data._shouldRender || currentStyle.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
      renderer.save();
      elems = currentStyle.elements;
      if (type === 'st' || type === 'gs') {
        ctx.strokeStyle = type === 'st' ? currentStyle.co : currentStyle.grd;
        ctx.lineWidth = currentStyle.wi;
        ctx.lineCap = currentStyle.lc;
        ctx.lineJoin = currentStyle.lj;
        ctx.miterLimit = currentStyle.ml || 0;
      } else {
        ctx.fillStyle = type === 'fl' ? currentStyle.co : currentStyle.grd;
      }
      renderer.ctxOpacity(currentStyle.coOp);
      if (type !== 'st' && type !== 'gs') {
        ctx.beginPath();
      }
      renderer.ctxTransform(currentStyle.preTransforms.finalTransform.props);
      jLen = elems.length;
      for (j = 0; j < jLen; j += 1) {
        if (type === 'st' || type === 'gs') {
          ctx.beginPath();
          if (currentStyle.da) {
            ctx.setLineDash(currentStyle.da);
            ctx.lineDashOffset = currentStyle.do;
          }
        }
        nodes = elems[j].trNodes;
        kLen = nodes.length;

        for (k = 0; k < kLen; k += 1) {
          if (nodes[k].t === 'm') {
            ctx.moveTo(nodes[k].p[0], nodes[k].p[1]);
          } else if (nodes[k].t === 'c') {
            ctx.bezierCurveTo(nodes[k].pts[0], nodes[k].pts[1], nodes[k].pts[2], nodes[k].pts[3], nodes[k].pts[4], nodes[k].pts[5]);
          } else {
            ctx.closePath();
          }
        }
        if (type === 'st' || type === 'gs') {
          ctx.stroke();
          if (currentStyle.da) {
            ctx.setLineDash(this.dashResetter);
          }
        }
      }
      if (type !== 'st' && type !== 'gs') {
        ctx.fill(currentStyle.r);
      }
      renderer.restore();
    }
  }
};

CVShapeElement.prototype.renderShape = function (parentTransform, items, data, isMain) {
  var i;
  var len = items.length - 1;
  var groupTransform;
  groupTransform = parentTransform;
  for (i = len; i >= 0; i -= 1) {
    if (items[i].ty === 'tr') {
      groupTransform = data[i].transform;
      this.renderShapeTransform(parentTransform, groupTransform);
    } else if (items[i].ty === 'sh' || items[i].ty === 'el' || items[i].ty === 'rc' || items[i].ty === 'sr') {
      this.renderPath(items[i], data[i]);
    } else if (items[i].ty === 'fl') {
      this.renderFill(items[i], data[i], groupTransform);
    } else if (items[i].ty === 'st') {
      this.renderStroke(items[i], data[i], groupTransform);
    } else if (items[i].ty === 'gf' || items[i].ty === 'gs') {
      this.renderGradientFill(items[i], data[i], groupTransform);
    } else if (items[i].ty === 'gr') {
      this.renderShape(groupTransform, items[i].it, data[i].it);
    } else if (items[i].ty === 'tm') {
      //
    }
  }
  if (isMain) {
    this.drawLayer();
  }
};

CVShapeElement.prototype.renderStyledShape = function (styledShape, shape) {
  if (this._isFirstFrame || shape._mdf || styledShape.transforms._mdf) {
    var shapeNodes = styledShape.trNodes;
    var paths = shape.paths;
    var i;
    var len;
    var j;
    var jLen = paths._length;
    shapeNodes.length = 0;
    var groupTransformMat = styledShape.transforms.finalTransform;
    for (j = 0; j < jLen; j += 1) {
      var pathNodes = paths.shapes[j];
      if (pathNodes && pathNodes.v) {
        len = pathNodes._length;
        for (i = 1; i < len; i += 1) {
          if (i === 1) {
            shapeNodes.push({
              t: 'm',
              p: groupTransformMat.applyToPointArray(pathNodes.v[0][0], pathNodes.v[0][1], 0),
            });
          }
          shapeNodes.push({
            t: 'c',
            pts: groupTransformMat.applyToTriplePoints(pathNodes.o[i - 1], pathNodes.i[i], pathNodes.v[i]),
          });
        }
        if (len === 1) {
          shapeNodes.push({
            t: 'm',
            p: groupTransformMat.applyToPointArray(pathNodes.v[0][0], pathNodes.v[0][1], 0),
          });
        }
        if (pathNodes.c && len) {
          shapeNodes.push({
            t: 'c',
            pts: groupTransformMat.applyToTriplePoints(pathNodes.o[i - 1], pathNodes.i[0], pathNodes.v[0]),
          });
          shapeNodes.push({
            t: 'z',
          });
        }
      }
    }
    styledShape.trNodes = shapeNodes;
  }
};

CVShapeElement.prototype.renderPath = function (pathData, itemData) {
  if (pathData.hd !== true && pathData._shouldRender) {
    var i;
    var len = itemData.styledShapes.length;
    for (i = 0; i < len; i += 1) {
      this.renderStyledShape(itemData.styledShapes[i], itemData.sh);
    }
  }
};

CVShapeElement.prototype.renderFill = function (styleData, itemData, groupTransform) {
  var styleElem = itemData.style;

  if (itemData.c._mdf || this._isFirstFrame) {
    styleElem.co = 'rgb('
        + bmFloor(itemData.c.v[0]) + ','
        + bmFloor(itemData.c.v[1]) + ','
        + bmFloor(itemData.c.v[2]) + ')';
  }
  if (itemData.o._mdf || groupTransform._opMdf || this._isFirstFrame) {
    styleElem.coOp = itemData.o.v * groupTransform.opacity;
  }
};

CVShapeElement.prototype.renderGradientFill = function (styleData, itemData, groupTransform) {
  var styleElem = itemData.style;
  var grd;
  if (!styleElem.grd || itemData.g._mdf || itemData.s._mdf || itemData.e._mdf || (styleData.t !== 1 && (itemData.h._mdf || itemData.a._mdf))) {
    var ctx = this.globalData.canvasContext;
    var pt1 = itemData.s.v;
    var pt2 = itemData.e.v;
    if (styleData.t === 1) {
      grd = ctx.createLinearGradient(pt1[0], pt1[1], pt2[0], pt2[1]);
    } else {
      var rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
      var ang = Math.atan2(pt2[1] - pt1[1], pt2[0] - pt1[0]);

      var percent = itemData.h.v;
      if (percent >= 1) {
        percent = 0.99;
      } else if (percent <= -1) {
        percent = -0.99;
      }
      var dist = rad * percent;
      var x = Math.cos(ang + itemData.a.v) * dist + pt1[0];
      var y = Math.sin(ang + itemData.a.v) * dist + pt1[1];
      grd = ctx.createRadialGradient(x, y, 0, pt1[0], pt1[1], rad);
    }

    var i;
    var len = styleData.g.p;
    var cValues = itemData.g.c;
    var opacity = 1;

    for (i = 0; i < len; i += 1) {
      if (itemData.g._hasOpacity && itemData.g._collapsable) {
        opacity = itemData.g.o[i * 2 + 1];
      }
      grd.addColorStop(cValues[i * 4] / 100, 'rgba(' + cValues[i * 4 + 1] + ',' + cValues[i * 4 + 2] + ',' + cValues[i * 4 + 3] + ',' + opacity + ')');
    }
    styleElem.grd = grd;
  }
  styleElem.coOp = itemData.o.v * groupTransform.opacity;
};

CVShapeElement.prototype.renderStroke = function (styleData, itemData, groupTransform) {
  var styleElem = itemData.style;
  var d = itemData.d;
  if (d && (d._mdf || this._isFirstFrame)) {
    styleElem.da = d.dashArray;
    styleElem.do = d.dashoffset[0];
  }
  if (itemData.c._mdf || this._isFirstFrame) {
    styleElem.co = 'rgb(' + bmFloor(itemData.c.v[0]) + ',' + bmFloor(itemData.c.v[1]) + ',' + bmFloor(itemData.c.v[2]) + ')';
  }
  if (itemData.o._mdf || groupTransform._opMdf || this._isFirstFrame) {
    styleElem.coOp = itemData.o.v * groupTransform.opacity;
  }
  if (itemData.w._mdf || this._isFirstFrame) {
    styleElem.wi = itemData.w.v;
  }
};

CVShapeElement.prototype.destroy = function () {
  this.shapesData = null;
  this.globalData = null;
  this.canvasContext = null;
  this.stylesList.length = 0;
  this.itemsData.length = 0;
};

/* global extendPrototype, BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement,
SVGShapeElement, IImageElement */

function CVSolidElement(data, globalData, comp) {
  this.initElement(data, globalData, comp);
}
extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement);

CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement;
CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;

CVSolidElement.prototype.renderInnerContent = function () {
  var ctx = this.canvasContext;
  ctx.fillStyle = this.data.sc;
  ctx.fillRect(0, 0, this.data.sw, this.data.sh);
  //
};

/* global extendPrototype, BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement,
RenderableElement, ITextElement, createTag, createSizedArray */

function CVTextElement(data, globalData, comp) {
  this.textSpans = [];
  this.yOffset = 0;
  this.fillColorAnim = false;
  this.strokeColorAnim = false;
  this.strokeWidthAnim = false;
  this.stroke = false;
  this.fill = false;
  this.justifyOffset = 0;
  this.currentRender = null;
  this.renderType = 'canvas';
  this.values = {
    fill: 'rgba(0,0,0,0)',
    stroke: 'rgba(0,0,0,0)',
    sWidth: 0,
    fValue: '',
  };
  this.initElement(data, globalData, comp);
}
extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement);

CVTextElement.prototype.tHelper = createTag('canvas').getContext('2d');

CVTextElement.prototype.buildNewText = function () {
  var documentData = this.textProperty.currentData;
  this.renderedLetters = createSizedArray(documentData.l ? documentData.l.length : 0);

  var hasFill = false;
  if (documentData.fc) {
    hasFill = true;
    this.values.fill = this.buildColor(documentData.fc);
  } else {
    this.values.fill = 'rgba(0,0,0,0)';
  }
  this.fill = hasFill;
  var hasStroke = false;
  if (documentData.sc) {
    hasStroke = true;
    this.values.stroke = this.buildColor(documentData.sc);
    this.values.sWidth = documentData.sw;
  }
  var fontData = this.globalData.fontManager.getFontByName(documentData.f);
  var i;
  var len;
  var letters = documentData.l;
  var matrixHelper = this.mHelper;
  this.stroke = hasStroke;
  this.values.fValue = documentData.finalSize + 'px ' + this.globalData.fontManager.getFontByName(documentData.f).fFamily;
  len = documentData.finalText.length;
  // this.tHelper.font = this.values.fValue;
  var charData;
  var shapeData;
  var k;
  var kLen;
  var shapes;
  var j;
  var jLen;
  var pathNodes;
  var commands;
  var pathArr;
  var singleShape = this.data.singleShape;
  var trackingOffset = documentData.tr * 0.001 * documentData.finalSize;
  var xPos = 0;
  var yPos = 0;
  var firstLine = true;
  var cnt = 0;
  for (i = 0; i < len; i += 1) {
    charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
    shapeData = (charData && charData.data) || {};
    matrixHelper.reset();
    if (singleShape && letters[i].n) {
      xPos = -trackingOffset;
      yPos += documentData.yOffset;
      yPos += firstLine ? 1 : 0;
      firstLine = false;
    }

    shapes = shapeData.shapes ? shapeData.shapes[0].it : [];
    jLen = shapes.length;
    matrixHelper.scale(documentData.finalSize / 100, documentData.finalSize / 100);
    if (singleShape) {
      this.applyTextPropertiesToMatrix(documentData, matrixHelper, letters[i].line, xPos, yPos);
    }
    commands = createSizedArray(jLen);
    for (j = 0; j < jLen; j += 1) {
      kLen = shapes[j].ks.k.i.length;
      pathNodes = shapes[j].ks.k;
      pathArr = [];
      for (k = 1; k < kLen; k += 1) {
        if (k === 1) {
          pathArr.push(matrixHelper.applyToX(pathNodes.v[0][0], pathNodes.v[0][1], 0), matrixHelper.applyToY(pathNodes.v[0][0], pathNodes.v[0][1], 0));
        }
        pathArr.push(matrixHelper.applyToX(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToY(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToX(pathNodes.i[k][0], pathNodes.i[k][1], 0), matrixHelper.applyToY(pathNodes.i[k][0], pathNodes.i[k][1], 0), matrixHelper.applyToX(pathNodes.v[k][0], pathNodes.v[k][1], 0), matrixHelper.applyToY(pathNodes.v[k][0], pathNodes.v[k][1], 0));
      }
      pathArr.push(matrixHelper.applyToX(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToY(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToX(pathNodes.i[0][0], pathNodes.i[0][1], 0), matrixHelper.applyToY(pathNodes.i[0][0], pathNodes.i[0][1], 0), matrixHelper.applyToX(pathNodes.v[0][0], pathNodes.v[0][1], 0), matrixHelper.applyToY(pathNodes.v[0][0], pathNodes.v[0][1], 0));
      commands[j] = pathArr;
    }
    if (singleShape) {
      xPos += letters[i].l;
      xPos += trackingOffset;
    }
    if (this.textSpans[cnt]) {
      this.textSpans[cnt].elem = commands;
    } else {
      this.textSpans[cnt] = { elem: commands };
    }
    cnt += 1;
  }
};

CVTextElement.prototype.renderInnerContent = function () {
  var ctx = this.canvasContext;
  ctx.font = this.values.fValue;
  ctx.lineCap = 'butt';
  ctx.lineJoin = 'miter';
  ctx.miterLimit = 4;

  if (!this.data.singleShape) {
    this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
  }

  var i;
  var len;
  var j;
  var jLen;
  var k;
  var kLen;
  var renderedLetters = this.textAnimator.renderedLetters;

  var letters = this.textProperty.currentData.l;

  len = letters.length;
  var renderedLetter;
  var lastFill = null;
  var lastStroke = null;
  var lastStrokeW = null;
  var commands;
  var pathArr;
  for (i = 0; i < len; i += 1) {
    if (!letters[i].n) {
      renderedLetter = renderedLetters[i];
      if (renderedLetter) {
        this.globalData.renderer.save();
        this.globalData.renderer.ctxTransform(renderedLetter.p);
        this.globalData.renderer.ctxOpacity(renderedLetter.o);
      }
      if (this.fill) {
        if (renderedLetter && renderedLetter.fc) {
          if (lastFill !== renderedLetter.fc) {
            lastFill = renderedLetter.fc;
            ctx.fillStyle = renderedLetter.fc;
          }
        } else if (lastFill !== this.values.fill) {
          lastFill = this.values.fill;
          ctx.fillStyle = this.values.fill;
        }
        commands = this.textSpans[i].elem;
        jLen = commands.length;
        this.globalData.canvasContext.beginPath();
        for (j = 0; j < jLen; j += 1) {
          pathArr = commands[j];
          kLen = pathArr.length;
          this.globalData.canvasContext.moveTo(pathArr[0], pathArr[1]);
          for (k = 2; k < kLen; k += 6) {
            this.globalData.canvasContext.bezierCurveTo(pathArr[k], pathArr[k + 1], pathArr[k + 2], pathArr[k + 3], pathArr[k + 4], pathArr[k + 5]);
          }
        }
        this.globalData.canvasContext.closePath();
        this.globalData.canvasContext.fill();
        /// ctx.fillText(this.textSpans[i].val,0,0);
      }
      if (this.stroke) {
        if (renderedLetter && renderedLetter.sw) {
          if (lastStrokeW !== renderedLetter.sw) {
            lastStrokeW = renderedLetter.sw;
            ctx.lineWidth = renderedLetter.sw;
          }
        } else if (lastStrokeW !== this.values.sWidth) {
          lastStrokeW = this.values.sWidth;
          ctx.lineWidth = this.values.sWidth;
        }
        if (renderedLetter && renderedLetter.sc) {
          if (lastStroke !== renderedLetter.sc) {
            lastStroke = renderedLetter.sc;
            ctx.strokeStyle = renderedLetter.sc;
          }
        } else if (lastStroke !== this.values.stroke) {
          lastStroke = this.values.stroke;
          ctx.strokeStyle = this.values.stroke;
        }
        commands = this.textSpans[i].elem;
        jLen = commands.length;
        this.globalData.canvasContext.beginPath();
        for (j = 0; j < jLen; j += 1) {
          pathArr = commands[j];
          kLen = pathArr.length;
          this.globalData.canvasContext.moveTo(pathArr[0], pathArr[1]);
          for (k = 2; k < kLen; k += 6) {
            this.globalData.canvasContext.bezierCurveTo(pathArr[k], pathArr[k + 1], pathArr[k + 2], pathArr[k + 3], pathArr[k + 4], pathArr[k + 5]);
          }
        }
        this.globalData.canvasContext.closePath();
        this.globalData.canvasContext.stroke();
        /// ctx.strokeText(letters[i].val,0,0);
      }
      if (renderedLetter) {
        this.globalData.renderer.restore();
      }
    }
  }
};

function CVEffects() {

}
CVEffects.prototype.renderFrame = function () {};

/* global createTag, createNS, styleDiv, CVEffects, MaskElement, SVGBaseElement, HybridRenderer */

function HBaseElement() {}
HBaseElement.prototype = {
  checkBlendMode: function () {},
  initRendererElement: function () {
    this.baseElement = createTag(this.data.tg || 'div');
    if (this.data.hasMask) {
      this.svgElement = createNS('svg');
      this.layerElement = createNS('g');
      this.maskedElement = this.layerElement;
      this.svgElement.appendChild(this.layerElement);
      this.baseElement.appendChild(this.svgElement);
    } else {
      this.layerElement = this.baseElement;
    }
    styleDiv(this.baseElement);
  },
  createContainerElements: function () {
    this.renderableEffectsManager = new CVEffects(this);
    this.transformedElement = this.baseElement;
    this.maskedElement = this.layerElement;
    if (this.data.ln) {
      this.layerElement.setAttribute('id', this.data.ln);
    }
    if (this.data.cl) {
      this.layerElement.setAttribute('class', this.data.cl);
    }
    if (this.data.bm !== 0) {
      this.setBlendMode();
    }
  },
  renderElement: function () {
    var transformedElementStyle = this.transformedElement ? this.transformedElement.style : {};
    if (this.finalTransform._matMdf) {
      var matrixValue = this.finalTransform.mat.toCSS();
      transformedElementStyle.transform = matrixValue;
      transformedElementStyle.webkitTransform = matrixValue;
    }
    if (this.finalTransform._opMdf) {
      transformedElementStyle.opacity = this.finalTransform.mProp.o.v;
    }
  },
  renderFrame: function () {
    // If it is exported as hidden (data.hd === true) no need to render
    // If it is not visible no need to render
    if (this.data.hd || this.hidden) {
      return;
    }
    this.renderTransform();
    this.renderRenderable();
    this.renderElement();
    this.renderInnerContent();
    if (this._isFirstFrame) {
      this._isFirstFrame = false;
    }
  },
  destroy: function () {
    this.layerElement = null;
    this.transformedElement = null;
    if (this.matteElement) {
      this.matteElement = null;
    }
    if (this.maskManager) {
      this.maskManager.destroy();
      this.maskManager = null;
    }
  },
  createRenderableComponents: function () {
    this.maskManager = new MaskElement(this.data, this, this.globalData);
  },
  addEffects: function () {
  },
  setMatte: function () {},
};
HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement;
HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy;
HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting;

/* global extendPrototype, BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement,
RenderableDOMElement, createNS, createTag */

function HSolidElement(data, globalData, comp) {
  this.initElement(data, globalData, comp);
}
extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement);

HSolidElement.prototype.createContent = function () {
  var rect;
  if (this.data.hasMask) {
    rect = createNS('rect');
    rect.setAttribute('width', this.data.sw);
    rect.setAttribute('height', this.data.sh);
    rect.setAttribute('fill', this.data.sc);
    this.svgElement.setAttribute('width', this.data.sw);
    this.svgElement.setAttribute('height', this.data.sh);
  } else {
    rect = createTag('div');
    rect.style.width = this.data.sw + 'px';
    rect.style.height = this.data.sh + 'px';
    rect.style.backgroundColor = this.data.sc;
  }
  this.layerElement.appendChild(rect);
};

/* global createSizedArray, PropertyFactory, extendPrototype, HybridRenderer, ICompElement, HBaseElement */

function HCompElement(data, globalData, comp) {
  this.layers = data.layers;
  this.supports3d = !data.hasMask;
  this.completeLayers = false;
  this.pendingElements = [];
  this.elements = this.layers ? createSizedArray(this.layers.length) : [];
  this.initElement(data, globalData, comp);
  this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : { _placeholder: true };
}

extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement);
HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements;

HCompElement.prototype.createContainerElements = function () {
  this._createBaseContainerElements();
  // divElement.style.clip = 'rect(0px, '+this.data.w+'px, '+this.data.h+'px, 0px)';
  if (this.data.hasMask) {
    this.svgElement.setAttribute('width', this.data.w);
    this.svgElement.setAttribute('height', this.data.h);
    this.transformedElement = this.baseElement;
  } else {
    this.transformedElement = this.layerElement;
  }
};

HCompElement.prototype.addTo3dContainer = function (elem, pos) {
  var j = 0;
  var nextElement;
  while (j < pos) {
    if (this.elements[j] && this.elements[j].getBaseElement) {
      nextElement = this.elements[j].getBaseElement();
    }
    j += 1;
  }
  if (nextElement) {
    this.layerElement.insertBefore(elem, nextElement);
  } else {
    this.layerElement.appendChild(elem);
  }
};

/* global createNS, extendPrototype, BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement,
HierarchyElement, FrameElement, RenderableElement, createNS, bmMin, bmSqrt, bmMin, bmMax, bmPow */

function HShapeElement(data, globalData, comp) {
  // List of drawable elements
  this.shapes = [];
  // Full shape data
  this.shapesData = data.shapes;
  // List of styles that will be applied to shapes
  this.stylesList = [];
  // List of modifiers that will be applied to shapes
  this.shapeModifiers = [];
  // List of items in shape tree
  this.itemsData = [];
  // List of items in previous shape tree
  this.processedElements = [];
  // List of animated components
  this.animatedContents = [];
  this.shapesContainer = createNS('g');
  this.initElement(data, globalData, comp);
  // Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
  // List of elements that have been created
  this.prevViewData = [];
  this.currentBBox = {
    x: 999999,
    y: -999999,
    h: 0,
    w: 0,
  };
}
extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement);
HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent;

HShapeElement.prototype.createContent = function () {
  var cont;
  this.baseElement.style.fontSize = 0;
  if (this.data.hasMask) {
    this.layerElement.appendChild(this.shapesContainer);
    cont = this.svgElement;
  } else {
    cont = createNS('svg');
    var size = this.comp.data ? this.comp.data : this.globalData.compSize;
    cont.setAttribute('width', size.w);
    cont.setAttribute('height', size.h);
    cont.appendChild(this.shapesContainer);
    this.layerElement.appendChild(cont);
  }

  this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], true);
  this.filterUniqueShapes();
  this.shapeCont = cont;
};

HShapeElement.prototype.getTransformedPoint = function (transformers, point) {
  var i;
  var len = transformers.length;
  for (i = 0; i < len; i += 1) {
    point = transformers[i].mProps.v.applyToPointArray(point[0], point[1], 0);
  }
  return point;
};

HShapeElement.prototype.calculateShapeBoundingBox = function (item, boundingBox) {
  var shape = item.sh.v;
  var transformers = item.transformers;
  var i;
  var len = shape._length;
  var vPoint;
  var oPoint;
  var nextIPoint;
  var nextVPoint;
  if (len <= 1) {
    return;
  }
  for (i = 0; i < len - 1; i += 1) {
    vPoint = this.getTransformedPoint(transformers, shape.v[i]);
    oPoint = this.getTransformedPoint(transformers, shape.o[i]);
    nextIPoint = this.getTransformedPoint(transformers, shape.i[i + 1]);
    nextVPoint = this.getTransformedPoint(transformers, shape.v[i + 1]);
    this.checkBounds(vPoint, oPoint, nextIPoint, nextVPoint, boundingBox);
  }
  if (shape.c) {
    vPoint = this.getTransformedPoint(transformers, shape.v[i]);
    oPoint = this.getTransformedPoint(transformers, shape.o[i]);
    nextIPoint = this.getTransformedPoint(transformers, shape.i[0]);
    nextVPoint = this.getTransformedPoint(transformers, shape.v[0]);
    this.checkBounds(vPoint, oPoint, nextIPoint, nextVPoint, boundingBox);
  }
};

HShapeElement.prototype.checkBounds = function (vPoint, oPoint, nextIPoint, nextVPoint, boundingBox) {
  this.getBoundsOfCurve(vPoint, oPoint, nextIPoint, nextVPoint);
  var bounds = this.shapeBoundingBox;
  boundingBox.x = bmMin(bounds.left, boundingBox.x);
  boundingBox.xMax = bmMax(bounds.right, boundingBox.xMax);
  boundingBox.y = bmMin(bounds.top, boundingBox.y);
  boundingBox.yMax = bmMax(bounds.bottom, boundingBox.yMax);
};

HShapeElement.prototype.shapeBoundingBox = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};

HShapeElement.prototype.tempBoundingBox = {
  x: 0,
  xMax: 0,
  y: 0,
  yMax: 0,
  width: 0,
  height: 0,
};

HShapeElement.prototype.getBoundsOfCurve = function (p0, p1, p2, p3) {
  var bounds = [[p0[0], p3[0]], [p0[1], p3[1]]];

  for (var a, b, c, t, b2ac, t1, t2, i = 0; i < 2; ++i) { // eslint-disable-line no-plusplus
    b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
    a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
    c = 3 * p1[i] - 3 * p0[i];

    b |= 0; // eslint-disable-line no-bitwise
    a |= 0; // eslint-disable-line no-bitwise
    c |= 0; // eslint-disable-line no-bitwise

    if (a === 0 && b === 0) {
      //
    } else if (a === 0) {
      t = -c / b;

      if (t > 0 && t < 1) {
        bounds[i].push(this.calculateF(t, p0, p1, p2, p3, i));
      }
    } else {
      b2ac = b * b - 4 * c * a;

      if (b2ac >= 0) {
        t1 = (-b + bmSqrt(b2ac)) / (2 * a);
        if (t1 > 0 && t1 < 1) bounds[i].push(this.calculateF(t1, p0, p1, p2, p3, i));
        t2 = (-b - bmSqrt(b2ac)) / (2 * a);
        if (t2 > 0 && t2 < 1) bounds[i].push(this.calculateF(t2, p0, p1, p2, p3, i));
      }
    }
  }

  this.shapeBoundingBox.left = bmMin.apply(null, bounds[0]);
  this.shapeBoundingBox.top = bmMin.apply(null, bounds[1]);
  this.shapeBoundingBox.right = bmMax.apply(null, bounds[0]);
  this.shapeBoundingBox.bottom = bmMax.apply(null, bounds[1]);
};

HShapeElement.prototype.calculateF = function (t, p0, p1, p2, p3, i) {
  return bmPow(1 - t, 3) * p0[i]
        + 3 * bmPow(1 - t, 2) * t * p1[i]
        + 3 * (1 - t) * bmPow(t, 2) * p2[i]
        + bmPow(t, 3) * p3[i];
};

HShapeElement.prototype.calculateBoundingBox = function (itemsData, boundingBox) {
  var i;
  var len = itemsData.length;
  for (i = 0; i < len; i += 1) {
    if (itemsData[i] && itemsData[i].sh) {
      this.calculateShapeBoundingBox(itemsData[i], boundingBox);
    } else if (itemsData[i] && itemsData[i].it) {
      this.calculateBoundingBox(itemsData[i].it, boundingBox);
    }
  }
};

HShapeElement.prototype.currentBoxContains = function (box) {
  return this.currentBBox.x <= box.x
    && this.currentBBox.y <= box.y
    && this.currentBBox.width + this.currentBBox.x >= box.x + box.width
    && this.currentBBox.height + this.currentBBox.y >= box.y + box.height;
};

HShapeElement.prototype.renderInnerContent = function () {
  this._renderShapeFrame();

  if (!this.hidden && (this._isFirstFrame || this._mdf)) {
    var tempBoundingBox = this.tempBoundingBox;
    var max = 999999;
    tempBoundingBox.x = max;
    tempBoundingBox.xMax = -max;
    tempBoundingBox.y = max;
    tempBoundingBox.yMax = -max;
    this.calculateBoundingBox(this.itemsData, tempBoundingBox);
    tempBoundingBox.width = tempBoundingBox.xMax < tempBoundingBox.x ? 0 : tempBoundingBox.xMax - tempBoundingBox.x;
    tempBoundingBox.height = tempBoundingBox.yMax < tempBoundingBox.y ? 0 : tempBoundingBox.yMax - tempBoundingBox.y;
    // var tempBoundingBox = this.shapeCont.getBBox();
    if (this.currentBoxContains(tempBoundingBox)) {
      return;
    }
    var changed = false;
    if (this.currentBBox.w !== tempBoundingBox.width) {
      this.currentBBox.w = tempBoundingBox.width;
      this.shapeCont.setAttribute('width', tempBoundingBox.width);
      changed = true;
    }
    if (this.currentBBox.h !== tempBoundingBox.height) {
      this.currentBBox.h = tempBoundingBox.height;
      this.shapeCont.setAttribute('height', tempBoundingBox.height);
      changed = true;
    }
    if (changed || this.currentBBox.x !== tempBoundingBox.x || this.currentBBox.y !== tempBoundingBox.y) {
      this.currentBBox.w = tempBoundingBox.width;
      this.currentBBox.h = tempBoundingBox.height;
      this.currentBBox.x = tempBoundingBox.x;
      this.currentBBox.y = tempBoundingBox.y;

      this.shapeCont.setAttribute('viewBox', this.currentBBox.x + ' ' + this.currentBBox.y + ' ' + this.currentBBox.w + ' ' + this.currentBBox.h);
      var shapeStyle = this.shapeCont.style;
      var shapeTransform = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
      shapeStyle.transform = shapeTransform;
      shapeStyle.webkitTransform = shapeTransform;
    }
  }
};

/* global extendPrototype, BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement,
RenderableDOMElement, ITextElement, createSizedArray, createTag, styleDiv, createNS, lineJoinEnum, lineCapEnum */

function HTextElement(data, globalData, comp) {
  this.textSpans = [];
  this.textPaths = [];
  this.currentBBox = {
    x: 999999,
    y: -999999,
    h: 0,
    w: 0,
  };
  this.renderType = 'svg';
  this.isMasked = false;
  this.initElement(data, globalData, comp);
}
extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement);

HTextElement.prototype.createContent = function () {
  this.isMasked = this.checkMasks();
  if (this.isMasked) {
    this.renderType = 'svg';
    this.compW = this.comp.data.w;
    this.compH = this.comp.data.h;
    this.svgElement.setAttribute('width', this.compW);
    this.svgElement.setAttribute('height', this.compH);
    var g = createNS('g');
    this.maskedElement.appendChild(g);
    this.innerElem = g;
  } else {
    this.renderType = 'html';
    this.innerElem = this.layerElement;
  }

  this.checkParenting();
};

HTextElement.prototype.buildNewText = function () {
  var documentData = this.textProperty.currentData;
  this.renderedLetters = createSizedArray(documentData.l ? documentData.l.length : 0);
  var innerElemStyle = this.innerElem.style;
  var textColor = documentData.fc ? this.buildColor(documentData.fc) : 'rgba(0,0,0,0)';
  innerElemStyle.fill = textColor;
  innerElemStyle.color = textColor;
  if (documentData.sc) {
    innerElemStyle.stroke = this.buildColor(documentData.sc);
    innerElemStyle.strokeWidth = documentData.sw + 'px';
  }
  var fontData = this.globalData.fontManager.getFontByName(documentData.f);
  if (!this.globalData.fontManager.chars) {
    innerElemStyle.fontSize = documentData.finalSize + 'px';
    innerElemStyle.lineHeight = documentData.finalSize + 'px';
    if (fontData.fClass) {
      this.innerElem.className = fontData.fClass;
    } else {
      innerElemStyle.fontFamily = fontData.fFamily;
      var fWeight = documentData.fWeight;
      var fStyle = documentData.fStyle;
      innerElemStyle.fontStyle = fStyle;
      innerElemStyle.fontWeight = fWeight;
    }
  }
  var i;
  var len;

  var letters = documentData.l;
  len = letters.length;
  var tSpan;
  var tParent;
  var tCont;
  var matrixHelper = this.mHelper;
  var shapes;
  var shapeStr = '';
  var cnt = 0;
  for (i = 0; i < len; i += 1) {
    if (this.globalData.fontManager.chars) {
      if (!this.textPaths[cnt]) {
        tSpan = createNS('path');
        tSpan.setAttribute('stroke-linecap', lineCapEnum[1]);
        tSpan.setAttribute('stroke-linejoin', lineJoinEnum[2]);
        tSpan.setAttribute('stroke-miterlimit', '4');
      } else {
        tSpan = this.textPaths[cnt];
      }
      if (!this.isMasked) {
        if (this.textSpans[cnt]) {
          tParent = this.textSpans[cnt];
          tCont = tParent.children[0];
        } else {
          tParent = createTag('div');
          tParent.style.lineHeight = 0;
          tCont = createNS('svg');
          tCont.appendChild(tSpan);
          styleDiv(tParent);
        }
      }
    } else if (!this.isMasked) {
      if (this.textSpans[cnt]) {
        tParent = this.textSpans[cnt];
        tSpan = this.textPaths[cnt];
      } else {
        tParent = createTag('span');
        styleDiv(tParent);
        tSpan = createTag('span');
        styleDiv(tSpan);
        tParent.appendChild(tSpan);
      }
    } else {
      tSpan = this.textPaths[cnt] ? this.textPaths[cnt] : createNS('text');
    }
    // tSpan.setAttribute('visibility', 'hidden');
    if (this.globalData.fontManager.chars) {
      var charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
      var shapeData;
      if (charData) {
        shapeData = charData.data;
      } else {
        shapeData = null;
      }
      matrixHelper.reset();
      if (shapeData && shapeData.shapes) {
        shapes = shapeData.shapes[0].it;
        matrixHelper.scale(documentData.finalSize / 100, documentData.finalSize / 100);
        shapeStr = this.createPathShape(matrixHelper, shapes);
        tSpan.setAttribute('d', shapeStr);
      }
      if (!this.isMasked) {
        this.innerElem.appendChild(tParent);
        if (shapeData && shapeData.shapes) {
          // document.body.appendChild is needed to get exact measure of shape
          document.body.appendChild(tCont);
          var boundingBox = tCont.getBBox();
          tCont.setAttribute('width', boundingBox.width + 2);
          tCont.setAttribute('height', boundingBox.height + 2);
          tCont.setAttribute('viewBox', (boundingBox.x - 1) + ' ' + (boundingBox.y - 1) + ' ' + (boundingBox.width + 2) + ' ' + (boundingBox.height + 2));
          var tContStyle = tCont.style;
          var tContTranslation = 'translate(' + (boundingBox.x - 1) + 'px,' + (boundingBox.y - 1) + 'px)';
          tContStyle.transform = tContTranslation;
          tContStyle.webkitTransform = tContTranslation;

          letters[i].yOffset = boundingBox.y - 1;
        } else {
          tCont.setAttribute('width', 1);
          tCont.setAttribute('height', 1);
        }
        tParent.appendChild(tCont);
      } else {
        this.innerElem.appendChild(tSpan);
      }
    } else {
      tSpan.textContent = letters[i].val;
      tSpan.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve');
      if (!this.isMasked) {
        this.innerElem.appendChild(tParent);
        //
        var tStyle = tSpan.style;
        var tSpanTranslation = 'translate3d(0,' + -documentData.finalSize / 1.2 + 'px,0)';
        tStyle.transform = tSpanTranslation;
        tStyle.webkitTransform = tSpanTranslation;
      } else {
        this.innerElem.appendChild(tSpan);
      }
    }
    //
    if (!this.isMasked) {
      this.textSpans[cnt] = tParent;
    } else {
      this.textSpans[cnt] = tSpan;
    }
    this.textSpans[cnt].style.display = 'block';
    this.textPaths[cnt] = tSpan;
    cnt += 1;
  }
  while (cnt < this.textSpans.length) {
    this.textSpans[cnt].style.display = 'none';
    cnt += 1;
  }
};

HTextElement.prototype.renderInnerContent = function () {
  var svgStyle;
  if (this.data.singleShape) {
    if (!this._isFirstFrame && !this.lettersChangedFlag) {
      return;
    } if (this.isMasked && this.finalTransform._matMdf) {
      // Todo Benchmark if using this is better than getBBox
      this.svgElement.setAttribute('viewBox', -this.finalTransform.mProp.p.v[0] + ' ' + -this.finalTransform.mProp.p.v[1] + ' ' + this.compW + ' ' + this.compH);
      svgStyle = this.svgElement.style;
      var translation = 'translate(' + -this.finalTransform.mProp.p.v[0] + 'px,' + -this.finalTransform.mProp.p.v[1] + 'px)';
      svgStyle.transform = translation;
      svgStyle.webkitTransform = translation;
    }
  }

  this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
  if (!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag) {
    return;
  }
  var i;
  var len;
  var count = 0;
  var renderedLetters = this.textAnimator.renderedLetters;

  var letters = this.textProperty.currentData.l;

  len = letters.length;
  var renderedLetter;
  var textSpan;
  var textPath;
  for (i = 0; i < len; i += 1) {
    if (letters[i].n) {
      count += 1;
    } else {
      textSpan = this.textSpans[i];
      textPath = this.textPaths[i];
      renderedLetter = renderedLetters[count];
      count += 1;
      if (renderedLetter._mdf.m) {
        if (!this.isMasked) {
          textSpan.style.webkitTransform = renderedLetter.m;
          textSpan.style.transform = renderedLetter.m;
        } else {
          textSpan.setAttribute('transform', renderedLetter.m);
        }
      }
      /// /textSpan.setAttribute('opacity',renderedLetter.o);
      textSpan.style.opacity = renderedLetter.o;
      if (renderedLetter.sw && renderedLetter._mdf.sw) {
        textPath.setAttribute('stroke-width', renderedLetter.sw);
      }
      if (renderedLetter.sc && renderedLetter._mdf.sc) {
        textPath.setAttribute('stroke', renderedLetter.sc);
      }
      if (renderedLetter.fc && renderedLetter._mdf.fc) {
        textPath.setAttribute('fill', renderedLetter.fc);
        textPath.style.color = renderedLetter.fc;
      }
    }
  }

  if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
    var boundingBox = this.innerElem.getBBox();

    if (this.currentBBox.w !== boundingBox.width) {
      this.currentBBox.w = boundingBox.width;
      this.svgElement.setAttribute('width', boundingBox.width);
    }
    if (this.currentBBox.h !== boundingBox.height) {
      this.currentBBox.h = boundingBox.height;
      this.svgElement.setAttribute('height', boundingBox.height);
    }

    var margin = 1;
    if (this.currentBBox.w !== (boundingBox.width + margin * 2) || this.currentBBox.h !== (boundingBox.height + margin * 2) || this.currentBBox.x !== (boundingBox.x - margin) || this.currentBBox.y !== (boundingBox.y - margin)) {
      this.currentBBox.w = boundingBox.width + margin * 2;
      this.currentBBox.h = boundingBox.height + margin * 2;
      this.currentBBox.x = boundingBox.x - margin;
      this.currentBBox.y = boundingBox.y - margin;

      this.svgElement.setAttribute('viewBox', this.currentBBox.x + ' ' + this.currentBBox.y + ' ' + this.currentBBox.w + ' ' + this.currentBBox.h);
      svgStyle = this.svgElement.style;
      var svgTransform = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
      svgStyle.transform = svgTransform;
      svgStyle.webkitTransform = svgTransform;
    }
  }
};

/* global extendPrototype, BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement,
FrameElement, RenderableElement, createNS */

function HImageElement(data, globalData, comp) {
  this.assetData = globalData.getAssetData(data.refId);
  this.initElement(data, globalData, comp);
}

extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement);

HImageElement.prototype.createContent = function () {
  var assetPath = this.globalData.getAssetsPath(this.assetData);
  var img = new Image();

  if (this.data.hasMask) {
    this.imageElem = createNS('image');
    this.imageElem.setAttribute('width', this.assetData.w + 'px');
    this.imageElem.setAttribute('height', this.assetData.h + 'px');
    this.imageElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', assetPath);
    this.layerElement.appendChild(this.imageElem);
    this.baseElement.setAttribute('width', this.assetData.w);
    this.baseElement.setAttribute('height', this.assetData.h);
  } else {
    this.layerElement.appendChild(img);
  }
  img.crossOrigin = 'anonymous';
  img.src = assetPath;
  if (this.data.ln) {
    this.baseElement.setAttribute('id', this.data.ln);
  }
};

/* global PropertyFactory, degToRads, Matrix, extendPrototype, BaseElement, FrameElement, HierarchyElement */

function HCameraElement(data, globalData, comp) {
  this.initFrame();
  this.initBaseData(data, globalData, comp);
  this.initHierarchy();
  var getProp = PropertyFactory.getProp;
  this.pe = getProp(this, data.pe, 0, 0, this);
  if (data.ks.p.s) {
    this.px = getProp(this, data.ks.p.x, 1, 0, this);
    this.py = getProp(this, data.ks.p.y, 1, 0, this);
    this.pz = getProp(this, data.ks.p.z, 1, 0, this);
  } else {
    this.p = getProp(this, data.ks.p, 1, 0, this);
  }
  if (data.ks.a) {
    this.a = getProp(this, data.ks.a, 1, 0, this);
  }
  if (data.ks.or.k.length && data.ks.or.k[0].to) {
    var i;
    var len = data.ks.or.k.length;
    for (i = 0; i < len; i += 1) {
      data.ks.or.k[i].to = null;
      data.ks.or.k[i].ti = null;
    }
  }
  this.or = getProp(this, data.ks.or, 1, degToRads, this);
  this.or.sh = true;
  this.rx = getProp(this, data.ks.rx, 0, degToRads, this);
  this.ry = getProp(this, data.ks.ry, 0, degToRads, this);
  this.rz = getProp(this, data.ks.rz, 0, degToRads, this);
  this.mat = new Matrix();
  this._prevMat = new Matrix();
  this._isFirstFrame = true;

  // TODO: find a better way to make the HCamera element to be compatible with the LayerInterface and TransformInterface.
  this.finalTransform = {
    mProp: this,
  };
}
extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement);

HCameraElement.prototype.setup = function () {
  var i;
  var len = this.comp.threeDElements.length;
  var comp;
  var perspectiveStyle;
  var containerStyle;
  for (i = 0; i < len; i += 1) {
    // [perspectiveElem,container]
    comp = this.comp.threeDElements[i];
    if (comp.type === '3d') {
      perspectiveStyle = comp.perspectiveElem.style;
      containerStyle = comp.container.style;
      var perspective = this.pe.v + 'px';
      var origin = '0px 0px 0px';
      var matrix = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
      perspectiveStyle.perspective = perspective;
      perspectiveStyle.webkitPerspective = perspective;
      containerStyle.transformOrigin = origin;
      containerStyle.mozTransformOrigin = origin;
      containerStyle.webkitTransformOrigin = origin;
      perspectiveStyle.transform = matrix;
      perspectiveStyle.webkitTransform = matrix;
    }
  }
};

HCameraElement.prototype.createElements = function () {
};

HCameraElement.prototype.hide = function () {
};

HCameraElement.prototype.renderFrame = function () {
  var _mdf = this._isFirstFrame;
  var i;
  var len;
  if (this.hierarchy) {
    len = this.hierarchy.length;
    for (i = 0; i < len; i += 1) {
      _mdf = this.hierarchy[i].finalTransform.mProp._mdf || _mdf;
    }
  }
  if (_mdf || this.pe._mdf || (this.p && this.p._mdf) || (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || (this.a && this.a._mdf)) {
    this.mat.reset();

    if (this.hierarchy) {
      len = this.hierarchy.length - 1;
      for (i = len; i >= 0; i -= 1) {
        var mTransf = this.hierarchy[i].finalTransform.mProp;
        this.mat.translate(-mTransf.p.v[0], -mTransf.p.v[1], mTransf.p.v[2]);
        this.mat.rotateX(-mTransf.or.v[0]).rotateY(-mTransf.or.v[1]).rotateZ(mTransf.or.v[2]);
        this.mat.rotateX(-mTransf.rx.v).rotateY(-mTransf.ry.v).rotateZ(mTransf.rz.v);
        this.mat.scale(1 / mTransf.s.v[0], 1 / mTransf.s.v[1], 1 / mTransf.s.v[2]);
        this.mat.translate(mTransf.a.v[0], mTransf.a.v[1], mTransf.a.v[2]);
      }
    }
    if (this.p) {
      this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]);
    } else {
      this.mat.translate(-this.px.v, -this.py.v, this.pz.v);
    }
    if (this.a) {
      var diffVector;
      if (this.p) {
        diffVector = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]];
      } else {
        diffVector = [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
      }
      var mag = Math.sqrt(Math.pow(diffVector[0], 2) + Math.pow(diffVector[1], 2) + Math.pow(diffVector[2], 2));
      // var lookDir = getNormalizedPoint(getDiffVector(this.a.v,this.p.v));
      var lookDir = [diffVector[0] / mag, diffVector[1] / mag, diffVector[2] / mag];
      var lookLengthOnXZ = Math.sqrt(lookDir[2] * lookDir[2] + lookDir[0] * lookDir[0]);
      var mRotationX = (Math.atan2(lookDir[1], lookLengthOnXZ));
      var mRotationY = (Math.atan2(lookDir[0], -lookDir[2]));
      this.mat.rotateY(mRotationY).rotateX(-mRotationX);
    }
    this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v);
    this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]);
    this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0);
    this.mat.translate(0, 0, this.pe.v);

    var hasMatrixChanged = !this._prevMat.equals(this.mat);
    if ((hasMatrixChanged || this.pe._mdf) && this.comp.threeDElements) {
      len = this.comp.threeDElements.length;
      var comp;
      var perspectiveStyle;
      var containerStyle;
      for (i = 0; i < len; i += 1) {
        comp = this.comp.threeDElements[i];
        if (comp.type === '3d') {
          if (hasMatrixChanged) {
            var matValue = this.mat.toCSS();
            containerStyle = comp.container.style;
            containerStyle.transform = matValue;
            containerStyle.webkitTransform = matValue;
          }
          if (this.pe._mdf) {
            perspectiveStyle = comp.perspectiveElem.style;
            perspectiveStyle.perspective = this.pe.v + 'px';
            perspectiveStyle.webkitPerspective = this.pe.v + 'px';
          }
        }
      }
      this.mat.clone(this._prevMat);
    }
  }
  this._isFirstFrame = false;
};

HCameraElement.prototype.prepareFrame = function (num) {
  this.prepareProperties(num, true);
};

HCameraElement.prototype.destroy = function () {
};
HCameraElement.prototype.getBaseElement = function () { return null; };

function HEffects() {
}
HEffects.prototype.renderFrame = function () {};

/* global createTag, AnimationItem */
/* exported animationManager */

var animationManager = (function () {
  var moduleOb = {};
  var registeredAnimations = [];
  var initTime = 0;
  var len = 0;
  var playingAnimationsNum = 0;
  var _stopped = true;
  var _isFrozen = false;

  function removeElement(ev) {
    var i = 0;
    var animItem = ev.target;
    while (i < len) {
      if (registeredAnimations[i].animation === animItem) {
        registeredAnimations.splice(i, 1);
        i -= 1;
        len -= 1;
        if (!animItem.isPaused) {
          subtractPlayingCount();
        }
      }
      i += 1;
    }
  }

  function registerAnimation(element, animationData) {
    if (!element) {
      return null;
    }
    var i = 0;
    while (i < len) {
      if (registeredAnimations[i].elem === element && registeredAnimations[i].elem !== null) {
        return registeredAnimations[i].animation;
      }
      i += 1;
    }
    var animItem = new AnimationItem();
    setupAnimation(animItem, element);
    animItem.setData(element, animationData);
    return animItem;
  }

  function getRegisteredAnimations() {
    var i;
    var lenAnims = registeredAnimations.length;
    var animations = [];
    for (i = 0; i < lenAnims; i += 1) {
      animations.push(registeredAnimations[i].animation);
    }
    return animations;
  }

  function addPlayingCount() {
    playingAnimationsNum += 1;
    activate();
  }

  function subtractPlayingCount() {
    playingAnimationsNum -= 1;
  }

  function setupAnimation(animItem, element) {
    animItem.addEventListener('destroy', removeElement);
    animItem.addEventListener('_active', addPlayingCount);
    animItem.addEventListener('_idle', subtractPlayingCount);
    registeredAnimations.push({ elem: element, animation: animItem });
    len += 1;
  }

  function loadAnimation(params) {
    var animItem = new AnimationItem();
    setupAnimation(animItem, null);
    animItem.setParams(params);
    return animItem;
  }

  function setSpeed(val, animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.setSpeed(val, animation);
    }
  }

  function setDirection(val, animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.setDirection(val, animation);
    }
  }

  function play(animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.play(animation);
    }
  }
  function resume(nowTime) {
    var elapsedTime = nowTime - initTime;
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.advanceTime(elapsedTime);
    }
    initTime = nowTime;
    if (playingAnimationsNum && !_isFrozen) {
      window.requestAnimationFrame(resume);
    } else {
      _stopped = true;
    }
  }

  function first(nowTime) {
    initTime = nowTime;
    window.requestAnimationFrame(resume);
  }

  function pause(animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.pause(animation);
    }
  }

  function goToAndStop(value, isFrame, animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.goToAndStop(value, isFrame, animation);
    }
  }

  function stop(animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.stop(animation);
    }
  }

  function togglePause(animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.togglePause(animation);
    }
  }

  function destroy(animation) {
    var i;
    for (i = (len - 1); i >= 0; i -= 1) {
      registeredAnimations[i].animation.destroy(animation);
    }
  }

  function searchAnimations(animationData, standalone, renderer) {
    var animElements = [].concat([].slice.call(document.getElementsByClassName('lottie')),
      [].slice.call(document.getElementsByClassName('bodymovin')));
    var i;
    var lenAnims = animElements.length;
    for (i = 0; i < lenAnims; i += 1) {
      if (renderer) {
        animElements[i].setAttribute('data-bm-type', renderer);
      }
      registerAnimation(animElements[i], animationData);
    }
    if (standalone && lenAnims === 0) {
      if (!renderer) {
        renderer = 'svg';
      }
      var body = document.getElementsByTagName('body')[0];
      body.innerText = '';
      var div = createTag('div');
      div.style.width = '100%';
      div.style.height = '100%';
      div.setAttribute('data-bm-type', renderer);
      body.appendChild(div);
      registerAnimation(div, animationData);
    }
  }

  function resize() {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.resize();
    }
  }

  function activate() {
    if (!_isFrozen && playingAnimationsNum) {
      if (_stopped) {
        window.requestAnimationFrame(first);
        _stopped = false;
      }
    }
  }

  function freeze() {
    _isFrozen = true;
  }

  function unfreeze() {
    _isFrozen = false;
    activate();
  }

  function setVolume(val, animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.setVolume(val, animation);
    }
  }

  function mute(animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.mute(animation);
    }
  }

  function unmute(animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.unmute(animation);
    }
  }

  moduleOb.registerAnimation = registerAnimation;
  moduleOb.loadAnimation = loadAnimation;
  moduleOb.setSpeed = setSpeed;
  moduleOb.setDirection = setDirection;
  moduleOb.play = play;
  moduleOb.pause = pause;
  moduleOb.stop = stop;
  moduleOb.togglePause = togglePause;
  moduleOb.searchAnimations = searchAnimations;
  moduleOb.resize = resize;
  // moduleOb.start = start;
  moduleOb.goToAndStop = goToAndStop;
  moduleOb.destroy = destroy;
  moduleOb.freeze = freeze;
  moduleOb.unfreeze = unfreeze;
  moduleOb.setVolume = setVolume;
  moduleOb.mute = mute;
  moduleOb.unmute = unmute;
  moduleOb.getRegisteredAnimations = getRegisteredAnimations;
  return moduleOb;
}());

/* global createElementID, subframeEnabled, ProjectInterface, ImagePreloader, audioControllerFactory, extendPrototype, BaseEvent,
CanvasRenderer, SVGRenderer, HybridRenderer, dataManager, expressionsPlugin, BMEnterFrameEvent, BMCompleteLoopEvent,
BMCompleteEvent, BMSegmentStartEvent, BMDestroyEvent, BMEnterFrameEvent, BMCompleteLoopEvent, BMCompleteEvent, BMSegmentStartEvent,
BMDestroyEvent, BMRenderFrameErrorEvent, BMConfigErrorEvent, markerParser */

var AnimationItem = function () {
  this._cbs = [];
  this.name = '';
  this.path = '';
  this.isLoaded = false;
  this.currentFrame = 0;
  this.currentRawFrame = 0;
  this.firstFrame = 0;
  this.totalFrames = 0;
  this.frameRate = 0;
  this.frameMult = 0;
  this.playSpeed = 1;
  this.playDirection = 1;
  this.playCount = 0;
  this.animationData = {};
  this.assets = [];
  this.isPaused = true;
  this.autoplay = false;
  this.loop = true;
  this.renderer = null;
  this.animationID = createElementID();
  this.assetsPath = '';
  this.timeCompleted = 0;
  this.segmentPos = 0;
  this.isSubframeEnabled = subframeEnabled;
  this.segments = [];
  this._idle = true;
  this._completedLoop = false;
  this.projectInterface = ProjectInterface();
  this.imagePreloader = new ImagePreloader();
  this.audioController = audioControllerFactory();
  this.markers = [];
  this.configAnimation = this.configAnimation.bind(this);
  this.onSetupError = this.onSetupError.bind(this);
  this.onSegmentComplete = this.onSegmentComplete.bind(this);
};

extendPrototype([BaseEvent], AnimationItem);

AnimationItem.prototype.setParams = function (params) {
  if (params.wrapper || params.container) {
    this.wrapper = params.wrapper || params.container;
  }
  var animType = 'svg';
  if (params.animType) {
    animType = params.animType;
  } else if (params.renderer) {
    animType = params.renderer;
  }
  switch (animType) {
    case 'canvas':
      this.renderer = new CanvasRenderer(this, params.rendererSettings);
      break;
    case 'svg':
      this.renderer = new SVGRenderer(this, params.rendererSettings);
      break;
    default:
      this.renderer = new HybridRenderer(this, params.rendererSettings);
      break;
  }
  this.imagePreloader.setCacheType(animType, this.renderer.globalData.defs);
  this.renderer.setProjectInterface(this.projectInterface);
  this.animType = animType;
  if (params.loop === ''
        || params.loop === null
        || params.loop === undefined
        || params.loop === true) {
    this.loop = true;
  } else if (params.loop === false) {
    this.loop = false;
  } else {
    this.loop = parseInt(params.loop, 10);
  }
  this.autoplay = 'autoplay' in params ? params.autoplay : true;
  this.name = params.name ? params.name : '';
  this.autoloadSegments = Object.prototype.hasOwnProperty.call(params, 'autoloadSegments') ? params.autoloadSegments : true;
  this.assetsPath = params.assetsPath;
  this.initialSegment = params.initialSegment;
  if (params.audioFactory) {
    this.audioController.setAudioFactory(params.audioFactory);
  }
  if (params.animationData) {
    this.setupAnimation(params.animationData);
  } else if (params.path) {
    if (params.path.lastIndexOf('\\') !== -1) {
      this.path = params.path.substr(0, params.path.lastIndexOf('\\') + 1);
    } else {
      this.path = params.path.substr(0, params.path.lastIndexOf('/') + 1);
    }
    this.fileName = params.path.substr(params.path.lastIndexOf('/') + 1);
    this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf('.json'));
    dataManager.loadAnimation(
      params.path,
      this.configAnimation,
      this.onSetupError
    );
  }
};

AnimationItem.prototype.onSetupError = function () {
  this.trigger('data_failed');
};

AnimationItem.prototype.setupAnimation = function (data) {
  dataManager.completeAnimation(
    data,
    this.configAnimation
  );
};

AnimationItem.prototype.setData = function (wrapper, animationData) {
  if (animationData) {
    if (typeof animationData !== 'object') {
      animationData = JSON.parse(animationData);
    }
  }
  var params = {
    wrapper: wrapper,
    animationData: animationData,
  };
  var wrapperAttributes = wrapper.attributes;

  params.path = wrapperAttributes.getNamedItem('data-animation-path') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-animation-path').value
    : wrapperAttributes.getNamedItem('data-bm-path') // eslint-disable-line no-nested-ternary
      ? wrapperAttributes.getNamedItem('data-bm-path').value
      : wrapperAttributes.getNamedItem('bm-path')
        ? wrapperAttributes.getNamedItem('bm-path').value
        : '';
  params.animType = wrapperAttributes.getNamedItem('data-anim-type') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-anim-type').value
    : wrapperAttributes.getNamedItem('data-bm-type') // eslint-disable-line no-nested-ternary
      ? wrapperAttributes.getNamedItem('data-bm-type').value
      : wrapperAttributes.getNamedItem('bm-type') // eslint-disable-line no-nested-ternary
        ? wrapperAttributes.getNamedItem('bm-type').value
        : wrapperAttributes.getNamedItem('data-bm-renderer') // eslint-disable-line no-nested-ternary
          ? wrapperAttributes.getNamedItem('data-bm-renderer').value
          : wrapperAttributes.getNamedItem('bm-renderer')
            ? wrapperAttributes.getNamedItem('bm-renderer').value
            : 'canvas';

  var loop = wrapperAttributes.getNamedItem('data-anim-loop') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-anim-loop').value
    : wrapperAttributes.getNamedItem('data-bm-loop') // eslint-disable-line no-nested-ternary
      ? wrapperAttributes.getNamedItem('data-bm-loop').value
      : wrapperAttributes.getNamedItem('bm-loop')
        ? wrapperAttributes.getNamedItem('bm-loop').value
        : '';
  if (loop === 'false') {
    params.loop = false;
  } else if (loop === 'true') {
    params.loop = true;
  } else if (loop !== '') {
    params.loop = parseInt(loop, 10);
  }
  var autoplay = wrapperAttributes.getNamedItem('data-anim-autoplay') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-anim-autoplay').value
    : wrapperAttributes.getNamedItem('data-bm-autoplay') // eslint-disable-line no-nested-ternary
      ? wrapperAttributes.getNamedItem('data-bm-autoplay').value
      : wrapperAttributes.getNamedItem('bm-autoplay')
        ? wrapperAttributes.getNamedItem('bm-autoplay').value
        : true;
  params.autoplay = autoplay !== 'false';

  params.name = wrapperAttributes.getNamedItem('data-name') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-name').value
    : wrapperAttributes.getNamedItem('data-bm-name') // eslint-disable-line no-nested-ternary
      ? wrapperAttributes.getNamedItem('data-bm-name').value
      : wrapperAttributes.getNamedItem('bm-name')
        ? wrapperAttributes.getNamedItem('bm-name').value
        : '';
  var prerender = wrapperAttributes.getNamedItem('data-anim-prerender') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-anim-prerender').value
    : wrapperAttributes.getNamedItem('data-bm-prerender') // eslint-disable-line no-nested-ternary
      ? wrapperAttributes.getNamedItem('data-bm-prerender').value
      : wrapperAttributes.getNamedItem('bm-prerender')
        ? wrapperAttributes.getNamedItem('bm-prerender').value
        : '';

  if (prerender === 'false') {
    params.prerender = false;
  }
  this.setParams(params);
};

AnimationItem.prototype.includeLayers = function (data) {
  if (data.op > this.animationData.op) {
    this.animationData.op = data.op;
    this.totalFrames = Math.floor(data.op - this.animationData.ip);
  }
  var layers = this.animationData.layers;
  var i;
  var len = layers.length;
  var newLayers = data.layers;
  var j;
  var jLen = newLayers.length;
  for (j = 0; j < jLen; j += 1) {
    i = 0;
    while (i < len) {
      if (layers[i].id === newLayers[j].id) {
        layers[i] = newLayers[j];
        break;
      }
      i += 1;
    }
  }
  if (data.chars || data.fonts) {
    this.renderer.globalData.fontManager.addChars(data.chars);
    this.renderer.globalData.fontManager.addFonts(data.fonts, this.renderer.globalData.defs);
  }
  if (data.assets) {
    len = data.assets.length;
    for (i = 0; i < len; i += 1) {
      this.animationData.assets.push(data.assets[i]);
    }
  }
  this.animationData.__complete = false;
  dataManager.completeAnimation(
    this.animationData,
    this.onSegmentComplete
  );
};

AnimationItem.prototype.onSegmentComplete = function (data) {
  this.animationData = data;
  if (expressionsPlugin) {
    expressionsPlugin.initExpressions(this);
  }
  this.loadNextSegment();
};

AnimationItem.prototype.loadNextSegment = function () {
  var segments = this.animationData.segments;
  if (!segments || segments.length === 0 || !this.autoloadSegments) {
    this.trigger('data_ready');
    this.timeCompleted = this.totalFrames;
    return;
  }
  var segment = segments.shift();
  this.timeCompleted = segment.time * this.frameRate;
  var segmentPath = this.path + this.fileName + '_' + this.segmentPos + '.json';
  this.segmentPos += 1;
  dataManager.loadData(segmentPath, this.includeLayers.bind(this), function () {
    this.trigger('data_failed');
  }.bind(this));
};

AnimationItem.prototype.loadSegments = function () {
  var segments = this.animationData.segments;
  if (!segments) {
    this.timeCompleted = this.totalFrames;
  }
  this.loadNextSegment();
};

AnimationItem.prototype.imagesLoaded = function () {
  this.trigger('loaded_images');
  this.checkLoaded();
};

AnimationItem.prototype.preloadImages = function () {
  this.imagePreloader.setAssetsPath(this.assetsPath);
  this.imagePreloader.setPath(this.path);
  this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
};

AnimationItem.prototype.configAnimation = function (animData) {
  if (!this.renderer) {
    return;
  }
  try {
    this.animationData = animData;
    if (this.initialSegment) {
      this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]);
      this.firstFrame = Math.round(this.initialSegment[0]);
    } else {
      this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip);
      this.firstFrame = Math.round(this.animationData.ip);
    }
    this.renderer.configAnimation(animData);
    if (!animData.assets) {
      animData.assets = [];
    }

    this.assets = this.animationData.assets;
    this.frameRate = this.animationData.fr;
    this.frameMult = this.animationData.fr / 1000;
    this.renderer.searchExtraCompositions(animData.assets);
    this.markers = markerParser(animData.markers || []);
    this.trigger('config_ready');
    this.preloadImages();
    this.loadSegments();
    this.updaFrameModifier();
    this.waitForFontsLoaded();
    if (this.isPaused) {
      this.audioController.pause();
    }
  } catch (error) {
    this.triggerConfigError(error);
  }
};

AnimationItem.prototype.waitForFontsLoaded = function () {
  if (!this.renderer) {
    return;
  }
  if (this.renderer.globalData.fontManager.isLoaded) {
    this.checkLoaded();
  } else {
    setTimeout(this.waitForFontsLoaded.bind(this), 20);
  }
};

AnimationItem.prototype.checkLoaded = function () {
  if (!this.isLoaded
        && this.renderer.globalData.fontManager.isLoaded
        && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== 'canvas')
        && (this.imagePreloader.loadedFootages())
  ) {
    this.isLoaded = true;
    if (expressionsPlugin) {
      expressionsPlugin.initExpressions(this);
    }
    this.renderer.initItems();
    setTimeout(function () {
      this.trigger('DOMLoaded');
    }.bind(this), 0);
    this.gotoFrame();
    if (this.autoplay) {
      this.play();
    }
  }
};

AnimationItem.prototype.resize = function () {
  this.renderer.updateContainerSize();
};

AnimationItem.prototype.setSubframe = function (flag) {
  this.isSubframeEnabled = !!flag;
};

AnimationItem.prototype.gotoFrame = function () {
  this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame; // eslint-disable-line no-bitwise

  if (this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted) {
    this.currentFrame = this.timeCompleted;
  }
  this.trigger('enterFrame');
  this.renderFrame();
  this.trigger('drawnFrame');
};

AnimationItem.prototype.renderFrame = function () {
  if (this.isLoaded === false || !this.renderer) {
    return;
  }
  try {
    this.renderer.renderFrame(this.currentFrame + this.firstFrame);
  } catch (error) {
    this.triggerRenderFrameError(error);
  }
};

AnimationItem.prototype.play = function (name) {
  if (name && this.name !== name) {
    return;
  }
  if (this.isPaused === true) {
    this.isPaused = false;
    this.audioController.resume();
    if (this._idle) {
      this._idle = false;
      this.trigger('_active');
    }
  }
};

AnimationItem.prototype.pause = function (name) {
  if (name && this.name !== name) {
    return;
  }
  if (this.isPaused === false) {
    this.isPaused = true;
    this._idle = true;
    this.trigger('_idle');
    this.audioController.pause();
  }
};

AnimationItem.prototype.togglePause = function (name) {
  if (name && this.name !== name) {
    return;
  }
  if (this.isPaused === true) {
    this.play();
  } else {
    this.pause();
  }
};

AnimationItem.prototype.stop = function (name) {
  if (name && this.name !== name) {
    return;
  }
  this.pause();
  this.playCount = 0;
  this._completedLoop = false;
  this.setCurrentRawFrameValue(0);
};

AnimationItem.prototype.getMarkerData = function (markerName) {
  var marker;
  for (var i = 0; i < this.markers.length; i += 1) {
    marker = this.markers[i];
    if (marker.payload && marker.payload.name === markerName) {
      return marker;
    }
  }
  return null;
};

AnimationItem.prototype.goToAndStop = function (value, isFrame, name) {
  if (name && this.name !== name) {
    return;
  }
  var numValue = Number(value);
  if (isNaN(numValue)) {
    var marker = this.getMarkerData(value);
    if (marker) {
      this.goToAndStop(marker.time, true);
    }
  } else if (isFrame) {
    this.setCurrentRawFrameValue(value);
  } else {
    this.setCurrentRawFrameValue(value * this.frameModifier);
  }
  this.pause();
};

AnimationItem.prototype.goToAndPlay = function (value, isFrame, name) {
  if (name && this.name !== name) {
    return;
  }
  var numValue = Number(value);
  if (isNaN(numValue)) {
    var marker = this.getMarkerData(value);
    if (marker) {
      if (!marker.duration) {
        this.goToAndStop(marker.time, true);
      } else {
        this.playSegments([marker.time, marker.time + marker.duration], true);
      }
    }
  } else {
    this.goToAndStop(numValue, isFrame, name);
  }
  this.play();
};

AnimationItem.prototype.advanceTime = function (value) {
  if (this.isPaused === true || this.isLoaded === false) {
    return;
  }
  var nextValue = this.currentRawFrame + value * this.frameModifier;
  var _isComplete = false;
  // Checking if nextValue > totalFrames - 1 for addressing non looping and looping animations.
  // If animation won't loop, it should stop at totalFrames - 1. If it will loop it should complete the last frame and then loop.
  if (nextValue >= this.totalFrames - 1 && this.frameModifier > 0) {
    if (!this.loop || this.playCount === this.loop) {
      if (!this.checkSegments(nextValue > this.totalFrames ? nextValue % this.totalFrames : 0)) {
        _isComplete = true;
        nextValue = this.totalFrames - 1;
      }
    } else if (nextValue >= this.totalFrames) {
      this.playCount += 1;
      if (!this.checkSegments(nextValue % this.totalFrames)) {
        this.setCurrentRawFrameValue(nextValue % this.totalFrames);
        this._completedLoop = true;
        this.trigger('loopComplete');
      }
    } else {
      this.setCurrentRawFrameValue(nextValue);
    }
  } else if (nextValue < 0) {
    if (!this.checkSegments(nextValue % this.totalFrames)) {
      if (this.loop && !(this.playCount-- <= 0 && this.loop !== true)) { // eslint-disable-line no-plusplus
        this.setCurrentRawFrameValue(this.totalFrames + (nextValue % this.totalFrames));
        if (!this._completedLoop) {
          this._completedLoop = true;
        } else {
          this.trigger('loopComplete');
        }
      } else {
        _isComplete = true;
        nextValue = 0;
      }
    }
  } else {
    this.setCurrentRawFrameValue(nextValue);
  }
  if (_isComplete) {
    this.setCurrentRawFrameValue(nextValue);
    this.pause();
    this.trigger('complete');
  }
};

AnimationItem.prototype.adjustSegment = function (arr, offset) {
  this.playCount = 0;
  if (arr[1] < arr[0]) {
    if (this.frameModifier > 0) {
      if (this.playSpeed < 0) {
        this.setSpeed(-this.playSpeed);
      } else {
        this.setDirection(-1);
      }
    }
    this.totalFrames = arr[0] - arr[1];
    this.timeCompleted = this.totalFrames;
    this.firstFrame = arr[1];
    this.setCurrentRawFrameValue(this.totalFrames - 0.001 - offset);
  } else if (arr[1] > arr[0]) {
    if (this.frameModifier < 0) {
      if (this.playSpeed < 0) {
        this.setSpeed(-this.playSpeed);
      } else {
        this.setDirection(1);
      }
    }
    this.totalFrames = arr[1] - arr[0];
    this.timeCompleted = this.totalFrames;
    this.firstFrame = arr[0];
    this.setCurrentRawFrameValue(0.001 + offset);
  }
  this.trigger('segmentStart');
};
AnimationItem.prototype.setSegment = function (init, end) {
  var pendingFrame = -1;
  if (this.isPaused) {
    if (this.currentRawFrame + this.firstFrame < init) {
      pendingFrame = init;
    } else if (this.currentRawFrame + this.firstFrame > end) {
      pendingFrame = end - init;
    }
  }

  this.firstFrame = init;
  this.totalFrames = end - init;
  this.timeCompleted = this.totalFrames;
  if (pendingFrame !== -1) {
    this.goToAndStop(pendingFrame, true);
  }
};

AnimationItem.prototype.playSegments = function (arr, forceFlag) {
  if (forceFlag) {
    this.segments.length = 0;
  }
  if (typeof arr[0] === 'object') {
    var i;
    var len = arr.length;
    for (i = 0; i < len; i += 1) {
      this.segments.push(arr[i]);
    }
  } else {
    this.segments.push(arr);
  }
  if (this.segments.length && forceFlag) {
    this.adjustSegment(this.segments.shift(), 0);
  }
  if (this.isPaused) {
    this.play();
  }
};

AnimationItem.prototype.resetSegments = function (forceFlag) {
  this.segments.length = 0;
  this.segments.push([this.animationData.ip, this.animationData.op]);
  if (forceFlag) {
    this.checkSegments(0);
  }
};
AnimationItem.prototype.checkSegments = function (offset) {
  if (this.segments.length) {
    this.adjustSegment(this.segments.shift(), offset);
    return true;
  }
  return false;
};

AnimationItem.prototype.destroy = function (name) {
  if ((name && this.name !== name) || !this.renderer) {
    return;
  }
  this.renderer.destroy();
  this.imagePreloader.destroy();
  this.trigger('destroy');
  this._cbs = null;
  this.onEnterFrame = null;
  this.onLoopComplete = null;
  this.onComplete = null;
  this.onSegmentStart = null;
  this.onDestroy = null;
  this.renderer = null;
  this.renderer = null;
  this.imagePreloader = null;
  this.projectInterface = null;
};

AnimationItem.prototype.setCurrentRawFrameValue = function (value) {
  this.currentRawFrame = value;
  this.gotoFrame();
};

AnimationItem.prototype.setSpeed = function (val) {
  this.playSpeed = val;
  this.updaFrameModifier();
};

AnimationItem.prototype.setDirection = function (val) {
  this.playDirection = val < 0 ? -1 : 1;
  this.updaFrameModifier();
};

AnimationItem.prototype.setVolume = function (val, name) {
  if (name && this.name !== name) {
    return;
  }
  this.audioController.setVolume(val);
};

AnimationItem.prototype.getVolume = function () {
  return this.audioController.getVolume();
};

AnimationItem.prototype.mute = function (name) {
  if (name && this.name !== name) {
    return;
  }
  this.audioController.mute();
};

AnimationItem.prototype.unmute = function (name) {
  if (name && this.name !== name) {
    return;
  }
  this.audioController.unmute();
};

AnimationItem.prototype.updaFrameModifier = function () {
  this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;
  this.audioController.setRate(this.playSpeed * this.playDirection);
};

AnimationItem.prototype.getPath = function () {
  return this.path;
};

AnimationItem.prototype.getAssetsPath = function (assetData) {
  var path = '';
  if (assetData.e) {
    path = assetData.p;
  } else if (this.assetsPath) {
    var imagePath = assetData.p;
    if (imagePath.indexOf('images/') !== -1) {
      imagePath = imagePath.split('/')[1];
    }
    path = this.assetsPath + imagePath;
  } else {
    path = this.path;
    path += assetData.u ? assetData.u : '';
    path += assetData.p;
  }
  return path;
};

AnimationItem.prototype.getAssetData = function (id) {
  var i = 0;
  var len = this.assets.length;
  while (i < len) {
    if (id === this.assets[i].id) {
      return this.assets[i];
    }
    i += 1;
  }
  return null;
};

AnimationItem.prototype.hide = function () {
  this.renderer.hide();
};

AnimationItem.prototype.show = function () {
  this.renderer.show();
};

AnimationItem.prototype.getDuration = function (isFrame) {
  return isFrame ? this.totalFrames : this.totalFrames / this.frameRate;
};

AnimationItem.prototype.trigger = function (name) {
  if (this._cbs && this._cbs[name]) {
    switch (name) {
      case 'enterFrame':
      case 'drawnFrame':
        this.triggerEvent(name, new BMEnterFrameEvent(name, this.currentFrame, this.totalFrames, this.frameModifier));
        break;
      case 'loopComplete':
        this.triggerEvent(name, new BMCompleteLoopEvent(name, this.loop, this.playCount, this.frameMult));
        break;
      case 'complete':
        this.triggerEvent(name, new BMCompleteEvent(name, this.frameMult));
        break;
      case 'segmentStart':
        this.triggerEvent(name, new BMSegmentStartEvent(name, this.firstFrame, this.totalFrames));
        break;
      case 'destroy':
        this.triggerEvent(name, new BMDestroyEvent(name, this));
        break;
      default:
        this.triggerEvent(name);
    }
  }
  if (name === 'enterFrame' && this.onEnterFrame) {
    this.onEnterFrame.call(this, new BMEnterFrameEvent(name, this.currentFrame, this.totalFrames, this.frameMult));
  }
  if (name === 'loopComplete' && this.onLoopComplete) {
    this.onLoopComplete.call(this, new BMCompleteLoopEvent(name, this.loop, this.playCount, this.frameMult));
  }
  if (name === 'complete' && this.onComplete) {
    this.onComplete.call(this, new BMCompleteEvent(name, this.frameMult));
  }
  if (name === 'segmentStart' && this.onSegmentStart) {
    this.onSegmentStart.call(this, new BMSegmentStartEvent(name, this.firstFrame, this.totalFrames));
  }
  if (name === 'destroy' && this.onDestroy) {
    this.onDestroy.call(this, new BMDestroyEvent(name, this));
  }
};

AnimationItem.prototype.triggerRenderFrameError = function (nativeError) {
  var error = new BMRenderFrameErrorEvent(nativeError, this.currentFrame);
  this.triggerEvent('error', error);

  if (this.onError) {
    this.onError.call(this, error);
  }
};

AnimationItem.prototype.triggerConfigError = function (nativeError) {
  var error = new BMConfigErrorEvent(nativeError, this.currentFrame);
  this.triggerEvent('error', error);

  if (this.onError) {
    this.onError.call(this, error);
  }
};

/* global CompExpressionInterface, expressionsPlugin: writable */
/* exported expressionsPlugin */

var Expressions = (function () {
  var ob = {};
  ob.initExpressions = initExpressions;

  function initExpressions(animation) {
    var stackCount = 0;
    var registers = [];

    function pushExpression() {
      stackCount += 1;
    }

    function popExpression() {
      stackCount -= 1;
      if (stackCount === 0) {
        releaseInstances();
      }
    }

    function registerExpressionProperty(expression) {
      if (registers.indexOf(expression) === -1) {
        registers.push(expression);
      }
    }

    function releaseInstances() {
      var i;
      var len = registers.length;
      for (i = 0; i < len; i += 1) {
        registers[i].release();
      }
      registers.length = 0;
    }

    animation.renderer.compInterface = CompExpressionInterface(animation.renderer);
    animation.renderer.globalData.projectInterface.registerComposition(animation.renderer);
    animation.renderer.globalData.pushExpression = pushExpression;
    animation.renderer.globalData.popExpression = popExpression;
    animation.renderer.globalData.registerExpressionProperty = registerExpressionProperty;
  }
  return ob;
}());

expressionsPlugin = Expressions;

/* eslint-disable camelcase, no-unused-vars */
/* global BMMath, BezierFactory, createTypedArray, degToRads, shapePool */

var ExpressionManager = (function () {
  'use strict';

  var ob = {};
  var Math = BMMath;
  var window = null;
  var document = null;
  var XMLHttpRequest = null;
  var fetch = null;
  var frames = null;

  function $bm_isInstanceOfArray(arr) {
    return arr.constructor === Array || arr.constructor === Float32Array;
  }

  function isNumerable(tOfV, v) {
    return tOfV === 'number' || tOfV === 'boolean' || tOfV === 'string' || v instanceof Number;
  }

  function $bm_neg(a) {
    var tOfA = typeof a;
    if (tOfA === 'number' || tOfA === 'boolean' || a instanceof Number) {
      return -a;
    }
    if ($bm_isInstanceOfArray(a)) {
      var i;
      var lenA = a.length;
      var retArr = [];
      for (i = 0; i < lenA; i += 1) {
        retArr[i] = -a[i];
      }
      return retArr;
    }
    if (a.propType) {
      return a.v;
    }
    return -a;
  }

  var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, 'easeIn').get;
  var easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, 'easeOut').get;
  var easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, 'easeInOut').get;

  function sum(a, b) {
    var tOfA = typeof a;
    var tOfB = typeof b;
    if (tOfA === 'string' || tOfB === 'string') {
      return a + b;
    }
    if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
      return a + b;
    }
    if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
      a = a.slice(0);
      a[0] += b;
      return a;
    }
    if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
      b = b.slice(0);
      b[0] = a + b[0];
      return b;
    }
    if ($bm_isInstanceOfArray(a) && $bm_isInstanceOfArray(b)) {
      var i = 0;
      var lenA = a.length;
      var lenB = b.length;
      var retArr = [];
      while (i < lenA || i < lenB) {
        if ((typeof a[i] === 'number' || a[i] instanceof Number) && (typeof b[i] === 'number' || b[i] instanceof Number)) {
          retArr[i] = a[i] + b[i];
        } else {
          retArr[i] = b[i] === undefined ? a[i] : a[i] || b[i];
        }
        i += 1;
      }
      return retArr;
    }
    return 0;
  }
  var add = sum;

  function sub(a, b) {
    var tOfA = typeof a;
    var tOfB = typeof b;
    if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
      if (tOfA === 'string') {
        a = parseInt(a, 10);
      }
      if (tOfB === 'string') {
        b = parseInt(b, 10);
      }
      return a - b;
    }
    if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
      a = a.slice(0);
      a[0] -= b;
      return a;
    }
    if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
      b = b.slice(0);
      b[0] = a - b[0];
      return b;
    }
    if ($bm_isInstanceOfArray(a) && $bm_isInstanceOfArray(b)) {
      var i = 0;
      var lenA = a.length;
      var lenB = b.length;
      var retArr = [];
      while (i < lenA || i < lenB) {
        if ((typeof a[i] === 'number' || a[i] instanceof Number) && (typeof b[i] === 'number' || b[i] instanceof Number)) {
          retArr[i] = a[i] - b[i];
        } else {
          retArr[i] = b[i] === undefined ? a[i] : a[i] || b[i];
        }
        i += 1;
      }
      return retArr;
    }
    return 0;
  }

  function mul(a, b) {
    var tOfA = typeof a;
    var tOfB = typeof b;
    var arr;
    if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
      return a * b;
    }

    var i;
    var len;
    if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
      len = a.length;
      arr = createTypedArray('float32', len);
      for (i = 0; i < len; i += 1) {
        arr[i] = a[i] * b;
      }
      return arr;
    }
    if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
      len = b.length;
      arr = createTypedArray('float32', len);
      for (i = 0; i < len; i += 1) {
        arr[i] = a * b[i];
      }
      return arr;
    }
    return 0;
  }

  function div(a, b) {
    var tOfA = typeof a;
    var tOfB = typeof b;
    var arr;
    if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
      return a / b;
    }
    var i;
    var len;
    if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
      len = a.length;
      arr = createTypedArray('float32', len);
      for (i = 0; i < len; i += 1) {
        arr[i] = a[i] / b;
      }
      return arr;
    }
    if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
      len = b.length;
      arr = createTypedArray('float32', len);
      for (i = 0; i < len; i += 1) {
        arr[i] = a / b[i];
      }
      return arr;
    }
    return 0;
  }
  function mod(a, b) {
    if (typeof a === 'string') {
      a = parseInt(a, 10);
    }
    if (typeof b === 'string') {
      b = parseInt(b, 10);
    }
    return a % b;
  }
  var $bm_sum = sum;
  var $bm_sub = sub;
  var $bm_mul = mul;
  var $bm_div = div;
  var $bm_mod = mod;

  function clamp(num, min, max) {
    if (min > max) {
      var mm = max;
      max = min;
      min = mm;
    }
    return Math.min(Math.max(num, min), max);
  }

  function radiansToDegrees(val) {
    return val / degToRads;
  }
  var radians_to_degrees = radiansToDegrees;

  function degreesToRadians(val) {
    return val * degToRads;
  }
  var degrees_to_radians = radiansToDegrees;

  var helperLengthArray = [0, 0, 0, 0, 0, 0];

  function length(arr1, arr2) {
    if (typeof arr1 === 'number' || arr1 instanceof Number) {
      arr2 = arr2 || 0;
      return Math.abs(arr1 - arr2);
    }
    if (!arr2) {
      arr2 = helperLengthArray;
    }
    var i;
    var len = Math.min(arr1.length, arr2.length);
    var addedLength = 0;
    for (i = 0; i < len; i += 1) {
      addedLength += Math.pow(arr2[i] - arr1[i], 2);
    }
    return Math.sqrt(addedLength);
  }

  function normalize(vec) {
    return div(vec, length(vec));
  }

  function rgbToHsl(val) {
    var r = val[0]; var g = val[1]; var b = val[2];
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h;
    var s;
    var l = (max + min) / 2;

    if (max === min) {
      h = 0; // achromatic
      s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        default: break;
      }
      h /= 6;
    }

    return [h, s, l, val[3]];
  }

  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }

  function hslToRgb(val) {
    var h = val[0];
    var s = val[1];
    var l = val[2];

    var r;
    var g;
    var b;

    if (s === 0) {
      r = l; // achromatic
      b = l; // achromatic
      g = l; // achromatic
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return [r, g, b, val[3]];
  }

  function linear(t, tMin, tMax, value1, value2) {
    if (value1 === undefined || value2 === undefined) {
      value1 = tMin;
      value2 = tMax;
      tMin = 0;
      tMax = 1;
    }
    if (tMax < tMin) {
      var _tMin = tMax;
      tMax = tMin;
      tMin = _tMin;
    }
    if (t <= tMin) {
      return value1;
    } if (t >= tMax) {
      return value2;
    }
    var perc = tMax === tMin ? 0 : (t - tMin) / (tMax - tMin);
    if (!value1.length) {
      return value1 + (value2 - value1) * perc;
    }
    var i;
    var len = value1.length;
    var arr = createTypedArray('float32', len);
    for (i = 0; i < len; i += 1) {
      arr[i] = value1[i] + (value2[i] - value1[i]) * perc;
    }
    return arr;
  }
  function random(min, max) {
    if (max === undefined) {
      if (min === undefined) {
        min = 0;
        max = 1;
      } else {
        max = min;
        min = undefined;
      }
    }
    if (max.length) {
      var i;
      var len = max.length;
      if (!min) {
        min = createTypedArray('float32', len);
      }
      var arr = createTypedArray('float32', len);
      var rnd = BMMath.random();
      for (i = 0; i < len; i += 1) {
        arr[i] = min[i] + rnd * (max[i] - min[i]);
      }
      return arr;
    }
    if (min === undefined) {
      min = 0;
    }
    var rndm = BMMath.random();
    return min + rndm * (max - min);
  }

  function createPath(points, inTangents, outTangents, closed) {
    var i;
    var len = points.length;
    var path = shapePool.newElement();
    path.setPathData(!!closed, len);
    var arrPlaceholder = [0, 0];
    var inVertexPoint;
    var outVertexPoint;
    for (i = 0; i < len; i += 1) {
      inVertexPoint = (inTangents && inTangents[i]) ? inTangents[i] : arrPlaceholder;
      outVertexPoint = (outTangents && outTangents[i]) ? outTangents[i] : arrPlaceholder;
      path.setTripleAt(points[i][0], points[i][1], outVertexPoint[0] + points[i][0], outVertexPoint[1] + points[i][1], inVertexPoint[0] + points[i][0], inVertexPoint[1] + points[i][1], i, true);
    }
    return path;
  }

  function initiateExpression(elem, data, property) {
    var val = data.x;
    var needsVelocity = /velocity(?![\w\d])/.test(val);
    var _needsRandom = val.indexOf('random') !== -1;
    var elemType = elem.data.ty;
    var transform;
    var $bm_transform;
    var content;
    var effect;
    var thisProperty = property;
    thisProperty.valueAtTime = thisProperty.getValueAtTime;
    Object.defineProperty(thisProperty, 'value', {
      get: function () {
        return thisProperty.v;
      },
    });
    elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate;
    elem.comp.displayStartTime = 0;
    var inPoint = elem.data.ip / elem.comp.globalData.frameRate;
    var outPoint = elem.data.op / elem.comp.globalData.frameRate;
    var width = elem.data.sw ? elem.data.sw : 0;
    var height = elem.data.sh ? elem.data.sh : 0;
    var name = elem.data.nm;
    var loopIn;
    var loop_in;
    var loopOut;
    var loop_out;
    var smooth;
    var toWorld;
    var fromWorld;
    var fromComp;
    var toComp;
    var fromCompToSurface;
    var position;
    var rotation;
    var anchorPoint;
    var scale;
    var thisLayer;
    var thisComp;
    var mask;
    var valueAtTime;
    var velocityAtTime;

    var scoped_bm_rt;
    // val = val.replace(/(\\?"|')((http)(s)?(:\/))?\/.*?(\\?"|')/g, "\"\""); // deter potential network calls
    var expression_function = eval('[function _expression_function(){' + val + ';scoped_bm_rt=$bm_rt}]')[0]; // eslint-disable-line no-eval
    var numKeys = property.kf ? data.k.length : 0;

    var active = !this.data || this.data.hd !== true;

    var wiggle = function wiggle(freq, amp) {
      var iWiggle;
      var j;
      var lenWiggle = this.pv.length ? this.pv.length : 1;
      var addedAmps = createTypedArray('float32', lenWiggle);
      freq = 5;
      var iterations = Math.floor(time * freq);
      iWiggle = 0;
      j = 0;
      while (iWiggle < iterations) {
        // var rnd = BMMath.random();
        for (j = 0; j < lenWiggle; j += 1) {
          addedAmps[j] += -amp + amp * 2 * BMMath.random();
          // addedAmps[j] += -amp + amp*2*rnd;
        }
        iWiggle += 1;
      }
      // var rnd2 = BMMath.random();
      var periods = time * freq;
      var perc = periods - Math.floor(periods);
      var arr = createTypedArray('float32', lenWiggle);
      if (lenWiggle > 1) {
        for (j = 0; j < lenWiggle; j += 1) {
          arr[j] = this.pv[j] + addedAmps[j] + (-amp + amp * 2 * BMMath.random()) * perc;
          // arr[j] = this.pv[j] + addedAmps[j] + (-amp + amp*2*rnd)*perc;
          // arr[i] = this.pv[i] + addedAmp + amp1*perc + amp2*(1-perc);
        }
        return arr;
      }
      return this.pv + addedAmps[0] + (-amp + amp * 2 * BMMath.random()) * perc;
    }.bind(this);

    if (thisProperty.loopIn) {
      loopIn = thisProperty.loopIn.bind(thisProperty);
      loop_in = loopIn;
    }

    if (thisProperty.loopOut) {
      loopOut = thisProperty.loopOut.bind(thisProperty);
      loop_out = loopOut;
    }

    if (thisProperty.smooth) {
      smooth = thisProperty.smooth.bind(thisProperty);
    }

    function loopInDuration(type, duration) {
      return loopIn(type, duration, true);
    }

    function loopOutDuration(type, duration) {
      return loopOut(type, duration, true);
    }

    if (this.getValueAtTime) {
      valueAtTime = this.getValueAtTime.bind(this);
    }

    if (this.getVelocityAtTime) {
      velocityAtTime = this.getVelocityAtTime.bind(this);
    }

    var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);

    function lookAt(elem1, elem2) {
      var fVec = [elem2[0] - elem1[0], elem2[1] - elem1[1], elem2[2] - elem1[2]];
      var pitch = Math.atan2(fVec[0], Math.sqrt(fVec[1] * fVec[1] + fVec[2] * fVec[2])) / degToRads;
      var yaw = -Math.atan2(fVec[1], fVec[2]) / degToRads;
      return [yaw, pitch, 0];
    }

    function easeOut(t, tMin, tMax, val1, val2) {
      return applyEase(easeOutBez, t, tMin, tMax, val1, val2);
    }

    function easeIn(t, tMin, tMax, val1, val2) {
      return applyEase(easeInBez, t, tMin, tMax, val1, val2);
    }

    function ease(t, tMin, tMax, val1, val2) {
      return applyEase(easeInOutBez, t, tMin, tMax, val1, val2);
    }

    function applyEase(fn, t, tMin, tMax, val1, val2) {
      if (val1 === undefined) {
        val1 = tMin;
        val2 = tMax;
      } else {
        t = (t - tMin) / (tMax - tMin);
      }
      if (t > 1) {
        t = 1;
      } else if (t < 0) {
        t = 0;
      }
      var mult = fn(t);
      if ($bm_isInstanceOfArray(val1)) {
        var iKey;
        var lenKey = val1.length;
        var arr = createTypedArray('float32', lenKey);
        for (iKey = 0; iKey < lenKey; iKey += 1) {
          arr[iKey] = (val2[iKey] - val1[iKey]) * mult + val1[iKey];
        }
        return arr;
      }
      return (val2 - val1) * mult + val1;
    }

    function nearestKey(time) {
      var iKey;
      var lenKey = data.k.length;
      var index;
      var keyTime;
      if (!data.k.length || typeof (data.k[0]) === 'number') {
        index = 0;
        keyTime = 0;
      } else {
        index = -1;
        time *= elem.comp.globalData.frameRate;
        if (time < data.k[0].t) {
          index = 1;
          keyTime = data.k[0].t;
        } else {
          for (iKey = 0; iKey < lenKey - 1; iKey += 1) {
            if (time === data.k[iKey].t) {
              index = iKey + 1;
              keyTime = data.k[iKey].t;
              break;
            } else if (time > data.k[iKey].t && time < data.k[iKey + 1].t) {
              if (time - data.k[iKey].t > data.k[iKey + 1].t - time) {
                index = iKey + 2;
                keyTime = data.k[iKey + 1].t;
              } else {
                index = iKey + 1;
                keyTime = data.k[iKey].t;
              }
              break;
            }
          }
          if (index === -1) {
            index = iKey + 1;
            keyTime = data.k[iKey].t;
          }
        }
      }
      var obKey = {};
      obKey.index = index;
      obKey.time = keyTime / elem.comp.globalData.frameRate;
      return obKey;
    }

    function key(ind) {
      var obKey;
      var iKey;
      var lenKey;
      if (!data.k.length || typeof (data.k[0]) === 'number') {
        throw new Error('The property has no keyframe at index ' + ind);
      }
      ind -= 1;
      obKey = {
        time: data.k[ind].t / elem.comp.globalData.frameRate,
        value: [],
      };
      var arr = Object.prototype.hasOwnProperty.call(data.k[ind], 's') ? data.k[ind].s : data.k[ind - 1].e;

      lenKey = arr.length;
      for (iKey = 0; iKey < lenKey; iKey += 1) {
        obKey[iKey] = arr[iKey];
        obKey.value[iKey] = arr[iKey];
      }
      return obKey;
    }

    function framesToTime(fr, fps) {
      if (!fps) {
        fps = elem.comp.globalData.frameRate;
      }
      return fr / fps;
    }

    function timeToFrames(t, fps) {
      if (!t && t !== 0) {
        t = time;
      }
      if (!fps) {
        fps = elem.comp.globalData.frameRate;
      }
      return t * fps;
    }

    function seedRandom(seed) {
      BMMath.seedrandom(randSeed + seed);
    }

    function sourceRectAtTime() {
      return elem.sourceRectAtTime();
    }

    function substring(init, end) {
      if (typeof value === 'string') {
        if (end === undefined) {
          return value.substring(init);
        }
        return value.substring(init, end);
      }
      return '';
    }

    function substr(init, end) {
      if (typeof value === 'string') {
        if (end === undefined) {
          return value.substr(init);
        }
        return value.substr(init, end);
      }
      return '';
    }

    function posterizeTime(framesPerSecond) {
      time = framesPerSecond === 0 ? 0 : Math.floor(time * framesPerSecond) / framesPerSecond;
      value = valueAtTime(time);
    }

    var time;
    var velocity;
    var value;
    var text;
    var textIndex;
    var textTotal;
    var selectorValue;
    var index = elem.data.ind;
    var hasParent = !!(elem.hierarchy && elem.hierarchy.length);
    var parent;
    var randSeed = Math.floor(Math.random() * 1000000);
    var globalData = elem.globalData;
    function executeExpression(_value) {
      // globalData.pushExpression();
      value = _value;
      if (this.frameExpressionId === elem.globalData.frameId && this.propType !== 'textSelector') {
        return value;
      }
      if (this.propType === 'textSelector') {
        textIndex = this.textIndex;
        textTotal = this.textTotal;
        selectorValue = this.selectorValue;
      }
      if (!thisLayer) {
        text = elem.layerInterface.text;
        thisLayer = elem.layerInterface;
        thisComp = elem.comp.compInterface;
        toWorld = thisLayer.toWorld.bind(thisLayer);
        fromWorld = thisLayer.fromWorld.bind(thisLayer);
        fromComp = thisLayer.fromComp.bind(thisLayer);
        toComp = thisLayer.toComp.bind(thisLayer);
        mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null;
        fromCompToSurface = fromComp;
      }
      if (!transform) {
        transform = elem.layerInterface('ADBE Transform Group');
        $bm_transform = transform;
        if (transform) {
          anchorPoint = transform.anchorPoint;
          /* position = transform.position;
                    rotation = transform.rotation;
                    scale = transform.scale; */
        }
      }

      if (elemType === 4 && !content) {
        content = thisLayer('ADBE Root Vectors Group');
      }
      if (!effect) {
        effect = thisLayer(4);
      }
      hasParent = !!(elem.hierarchy && elem.hierarchy.length);
      if (hasParent && !parent) {
        parent = elem.hierarchy[0].layerInterface;
      }
      time = this.comp.renderedFrame / this.comp.globalData.frameRate;
      if (_needsRandom) {
        seedRandom(randSeed + time);
      }
      if (needsVelocity) {
        velocity = velocityAtTime(time);
      }
      expression_function();
      this.frameExpressionId = elem.globalData.frameId;

      // TODO: Check if it's possible to return on ShapeInterface the .v value
      if (scoped_bm_rt.propType === 'shape') {
        scoped_bm_rt = scoped_bm_rt.v;
      }
      // globalData.popExpression();
      return scoped_bm_rt;
    }
    return executeExpression;
  }

  ob.initiateExpression = initiateExpression;
  return ob;
}());

/* global ExpressionManager, createTypedArray */
/* exported expressionHelpers */

var expressionHelpers = (function () {
  function searchExpressions(elem, data, prop) {
    if (data.x) {
      prop.k = true;
      prop.x = true;
      prop.initiateExpression = ExpressionManager.initiateExpression;
      prop.effectsSequence.push(prop.initiateExpression(elem, data, prop).bind(prop));
    }
  }

  function getValueAtTime(frameNum) {
    frameNum *= this.elem.globalData.frameRate;
    frameNum -= this.offsetTime;
    if (frameNum !== this._cachingAtTime.lastFrame) {
      this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < frameNum ? this._cachingAtTime.lastIndex : 0;
      this._cachingAtTime.value = this.interpolateValue(frameNum, this._cachingAtTime);
      this._cachingAtTime.lastFrame = frameNum;
    }
    return this._cachingAtTime.value;
  }

  function getSpeedAtTime(frameNum) {
    var delta = -0.01;
    var v1 = this.getValueAtTime(frameNum);
    var v2 = this.getValueAtTime(frameNum + delta);
    var speed = 0;
    if (v1.length) {
      var i;
      for (i = 0; i < v1.length; i += 1) {
        speed += Math.pow(v2[i] - v1[i], 2);
      }
      speed = Math.sqrt(speed) * 100;
    } else {
      speed = 0;
    }
    return speed;
  }

  function getVelocityAtTime(frameNum) {
    if (this.vel !== undefined) {
      return this.vel;
    }
    var delta = -0.001;
    // frameNum += this.elem.data.st;
    var v1 = this.getValueAtTime(frameNum);
    var v2 = this.getValueAtTime(frameNum + delta);
    var velocity;
    if (v1.length) {
      velocity = createTypedArray('float32', v1.length);
      var i;
      for (i = 0; i < v1.length; i += 1) {
        // removing frameRate
        // if needed, don't add it here
        // velocity[i] = this.elem.globalData.frameRate*((v2[i] - v1[i])/delta);
        velocity[i] = (v2[i] - v1[i]) / delta;
      }
    } else {
      velocity = (v2 - v1) / delta;
    }
    return velocity;
  }

  function getStaticValueAtTime() {
    return this.pv;
  }

  function setGroupProperty(propertyGroup) {
    this.propertyGroup = propertyGroup;
  }

  return {
    searchExpressions: searchExpressions,
    getSpeedAtTime: getSpeedAtTime,
    getVelocityAtTime: getVelocityAtTime,
    getValueAtTime: getValueAtTime,
    getStaticValueAtTime: getStaticValueAtTime,
    setGroupProperty: setGroupProperty,
  };
}());

/* global createTypedArray, Matrix, TransformPropertyFactory, expressionHelpers, PropertyFactory, expressionHelpers,
initialDefaultFrame, shapePool, ShapePropertyFactory, bez, extendPrototype, ExpressionManager, createSizedArray */

(function addPropertyDecorator() {
  function loopOut(type, duration, durationFlag) {
    if (!this.k || !this.keyframes) {
      return this.pv;
    }
    type = type ? type.toLowerCase() : '';
    var currentFrame = this.comp.renderedFrame;
    var keyframes = this.keyframes;
    var lastKeyFrame = keyframes[keyframes.length - 1].t;
    if (currentFrame <= lastKeyFrame) {
      return this.pv;
    }
    var cycleDuration;
    var firstKeyFrame;
    if (!durationFlag) {
      if (!duration || duration > keyframes.length - 1) {
        duration = keyframes.length - 1;
      }
      firstKeyFrame = keyframes[keyframes.length - 1 - duration].t;
      cycleDuration = lastKeyFrame - firstKeyFrame;
    } else {
      if (!duration) {
        cycleDuration = Math.max(0, lastKeyFrame - this.elem.data.ip);
      } else {
        cycleDuration = Math.abs(lastKeyFrame - this.elem.comp.globalData.frameRate * duration);
      }
      firstKeyFrame = lastKeyFrame - cycleDuration;
    }
    var i;
    var len;
    var ret;
    if (type === 'pingpong') {
      var iterations = Math.floor((currentFrame - firstKeyFrame) / cycleDuration);
      if (iterations % 2 !== 0) {
          return this.getValueAtTime(((cycleDuration - (currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame)) / this.comp.globalData.frameRate, 0); // eslint-disable-line
      }
    } else if (type === 'offset') {
      var initV = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
      var endV = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
        var current = this.getValueAtTime(((currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0); // eslint-disable-line
      var repeats = Math.floor((currentFrame - firstKeyFrame) / cycleDuration);
      if (this.pv.length) {
        ret = new Array(initV.length);
        len = ret.length;
        for (i = 0; i < len; i += 1) {
          ret[i] = (endV[i] - initV[i]) * repeats + current[i];
        }
        return ret;
      }
      return (endV - initV) * repeats + current;
    } else if (type === 'continue') {
      var lastValue = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
      var nextLastValue = this.getValueAtTime((lastKeyFrame - 0.001) / this.comp.globalData.frameRate, 0);
      if (this.pv.length) {
        ret = new Array(lastValue.length);
        len = ret.length;
        for (i = 0; i < len; i += 1) {
            ret[i] = lastValue[i] + (lastValue[i] - nextLastValue[i]) * ((currentFrame - lastKeyFrame) / this.comp.globalData.frameRate) / 0.0005; // eslint-disable-line
        }
        return ret;
      }
      return lastValue + (lastValue - nextLastValue) * (((currentFrame - lastKeyFrame)) / 0.001);
    }
      return this.getValueAtTime((((currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame)) / this.comp.globalData.frameRate, 0); // eslint-disable-line

  }

  function loopIn(type, duration, durationFlag) {
    if (!this.k) {
      return this.pv;
    }
    type = type ? type.toLowerCase() : '';
    var currentFrame = this.comp.renderedFrame;
    var keyframes = this.keyframes;
    var firstKeyFrame = keyframes[0].t;
    if (currentFrame >= firstKeyFrame) {
      return this.pv;
    }
    var cycleDuration;
    var lastKeyFrame;
    if (!durationFlag) {
      if (!duration || duration > keyframes.length - 1) {
        duration = keyframes.length - 1;
      }
      lastKeyFrame = keyframes[duration].t;
      cycleDuration = lastKeyFrame - firstKeyFrame;
    } else {
      if (!duration) {
        cycleDuration = Math.max(0, this.elem.data.op - firstKeyFrame);
      } else {
        cycleDuration = Math.abs(this.elem.comp.globalData.frameRate * duration);
      }
      lastKeyFrame = firstKeyFrame + cycleDuration;
    }
    var i;
    var len;
    var ret;
    if (type === 'pingpong') {
      var iterations = Math.floor((firstKeyFrame - currentFrame) / cycleDuration);
      if (iterations % 2 === 0) {
          return this.getValueAtTime((((firstKeyFrame - currentFrame) % cycleDuration + firstKeyFrame)) / this.comp.globalData.frameRate, 0); // eslint-disable-line
      }
    } else if (type === 'offset') {
      var initV = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
      var endV = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
      var current = this.getValueAtTime((cycleDuration - ((firstKeyFrame - currentFrame) % cycleDuration) + firstKeyFrame) / this.comp.globalData.frameRate, 0);
      var repeats = Math.floor((firstKeyFrame - currentFrame) / cycleDuration) + 1;
      if (this.pv.length) {
        ret = new Array(initV.length);
        len = ret.length;
        for (i = 0; i < len; i += 1) {
          ret[i] = current[i] - (endV[i] - initV[i]) * repeats;
        }
        return ret;
      }
      return current - (endV - initV) * repeats;
    } else if (type === 'continue') {
      var firstValue = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
      var nextFirstValue = this.getValueAtTime((firstKeyFrame + 0.001) / this.comp.globalData.frameRate, 0);
      if (this.pv.length) {
        ret = new Array(firstValue.length);
        len = ret.length;
        for (i = 0; i < len; i += 1) {
          ret[i] = firstValue[i] + ((firstValue[i] - nextFirstValue[i]) * (firstKeyFrame - currentFrame)) / 0.001;
        }
        return ret;
      }
      return firstValue + ((firstValue - nextFirstValue) * (firstKeyFrame - currentFrame)) / 0.001;
    }
      return this.getValueAtTime(((cycleDuration - ((firstKeyFrame - currentFrame) % cycleDuration + firstKeyFrame))) / this.comp.globalData.frameRate, 0); // eslint-disable-line

  }

  function smooth(width, samples) {
    if (!this.k) {
      return this.pv;
    }
    width = (width || 0.4) * 0.5;
    samples = Math.floor(samples || 5);
    if (samples <= 1) {
      return this.pv;
    }
    var currentTime = this.comp.renderedFrame / this.comp.globalData.frameRate;
    var initFrame = currentTime - width;
    var endFrame = currentTime + width;
    var sampleFrequency = samples > 1 ? (endFrame - initFrame) / (samples - 1) : 1;
    var i = 0;
    var j = 0;
    var value;
    if (this.pv.length) {
      value = createTypedArray('float32', this.pv.length);
    } else {
      value = 0;
    }
    var sampleValue;
    while (i < samples) {
      sampleValue = this.getValueAtTime(initFrame + i * sampleFrequency);
      if (this.pv.length) {
        for (j = 0; j < this.pv.length; j += 1) {
          value[j] += sampleValue[j];
        }
      } else {
        value += sampleValue;
      }
      i += 1;
    }
    if (this.pv.length) {
      for (j = 0; j < this.pv.length; j += 1) {
        value[j] /= samples;
      }
    } else {
      value /= samples;
    }
    return value;
  }

  function getTransformValueAtTime(time) {
    if (!this._transformCachingAtTime) {
      this._transformCachingAtTime = {
        v: new Matrix(),
      };
    }
    /// /
    var matrix = this._transformCachingAtTime.v;
    matrix.cloneFromProps(this.pre.props);
    if (this.appliedTransformations < 1) {
      var anchor = this.a.getValueAtTime(time);
      matrix.translate(
        -anchor[0] * this.a.mult,
        -anchor[1] * this.a.mult,
        anchor[2] * this.a.mult
      );
    }
    if (this.appliedTransformations < 2) {
      var scale = this.s.getValueAtTime(time);
      matrix.scale(
        scale[0] * this.s.mult,
        scale[1] * this.s.mult,
        scale[2] * this.s.mult
      );
    }
    if (this.sk && this.appliedTransformations < 3) {
      var skew = this.sk.getValueAtTime(time);
      var skewAxis = this.sa.getValueAtTime(time);
      matrix.skewFromAxis(-skew * this.sk.mult, skewAxis * this.sa.mult);
    }
    if (this.r && this.appliedTransformations < 4) {
      var rotation = this.r.getValueAtTime(time);
      matrix.rotate(-rotation * this.r.mult);
    } else if (!this.r && this.appliedTransformations < 4) {
      var rotationZ = this.rz.getValueAtTime(time);
      var rotationY = this.ry.getValueAtTime(time);
      var rotationX = this.rx.getValueAtTime(time);
      var orientation = this.or.getValueAtTime(time);
      matrix.rotateZ(-rotationZ * this.rz.mult)
        .rotateY(rotationY * this.ry.mult)
        .rotateX(rotationX * this.rx.mult)
        .rotateZ(-orientation[2] * this.or.mult)
        .rotateY(orientation[1] * this.or.mult)
        .rotateX(orientation[0] * this.or.mult);
    }
    if (this.data.p && this.data.p.s) {
      var positionX = this.px.getValueAtTime(time);
      var positionY = this.py.getValueAtTime(time);
      if (this.data.p.z) {
        var positionZ = this.pz.getValueAtTime(time);
        matrix.translate(
          positionX * this.px.mult,
          positionY * this.py.mult,
          -positionZ * this.pz.mult
        );
      } else {
        matrix.translate(positionX * this.px.mult, positionY * this.py.mult, 0);
      }
    } else {
      var position = this.p.getValueAtTime(time);
      matrix.translate(
        position[0] * this.p.mult,
        position[1] * this.p.mult,
        -position[2] * this.p.mult
      );
    }
    return matrix;
    /// /
  }

  function getTransformStaticValueAtTime() {
    return this.v.clone(new Matrix());
  }

  var getTransformProperty = TransformPropertyFactory.getTransformProperty;
  TransformPropertyFactory.getTransformProperty = function (elem, data, container) {
    var prop = getTransformProperty(elem, data, container);
    if (prop.dynamicProperties.length) {
      prop.getValueAtTime = getTransformValueAtTime.bind(prop);
    } else {
      prop.getValueAtTime = getTransformStaticValueAtTime.bind(prop);
    }
    prop.setGroupProperty = expressionHelpers.setGroupProperty;
    return prop;
  };

  var propertyGetProp = PropertyFactory.getProp;
  PropertyFactory.getProp = function (elem, data, type, mult, container) {
    var prop = propertyGetProp(elem, data, type, mult, container);
    // prop.getVelocityAtTime = getVelocityAtTime;
    // prop.loopOut = loopOut;
    // prop.loopIn = loopIn;
    if (prop.kf) {
      prop.getValueAtTime = expressionHelpers.getValueAtTime.bind(prop);
    } else {
      prop.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(prop);
    }
    prop.setGroupProperty = expressionHelpers.setGroupProperty;
    prop.loopOut = loopOut;
    prop.loopIn = loopIn;
    prop.smooth = smooth;
    prop.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(prop);
    prop.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(prop);
    prop.numKeys = data.a === 1 ? data.k.length : 0;
    prop.propertyIndex = data.ix;
    var value = 0;
    if (type !== 0) {
      value = createTypedArray('float32', data.a === 1 ? data.k[0].s.length : data.k.length);
    }
    prop._cachingAtTime = {
      lastFrame: initialDefaultFrame,
      lastIndex: 0,
      value: value,
    };
    expressionHelpers.searchExpressions(elem, data, prop);
    if (prop.k) {
      container.addDynamicProperty(prop);
    }

    return prop;
  };

  function getShapeValueAtTime(frameNum) {
    // For now this caching object is created only when needed instead of creating it when the shape is initialized.
    if (!this._cachingAtTime) {
      this._cachingAtTime = {
        shapeValue: shapePool.clone(this.pv),
        lastIndex: 0,
        lastTime: initialDefaultFrame,
      };
    }

    frameNum *= this.elem.globalData.frameRate;
    frameNum -= this.offsetTime;
    if (frameNum !== this._cachingAtTime.lastTime) {
      this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < frameNum ? this._caching.lastIndex : 0;
      this._cachingAtTime.lastTime = frameNum;
      this.interpolateShape(frameNum, this._cachingAtTime.shapeValue, this._cachingAtTime);
    }
    return this._cachingAtTime.shapeValue;
  }

  var ShapePropertyConstructorFunction = ShapePropertyFactory.getConstructorFunction();
  var KeyframedShapePropertyConstructorFunction = ShapePropertyFactory.getKeyframedConstructorFunction();

  function ShapeExpressions() {}
  ShapeExpressions.prototype = {
    vertices: function (prop, time) {
      if (this.k) {
        this.getValue();
      }
      var shapePath = this.v;
      if (time !== undefined) {
        shapePath = this.getValueAtTime(time, 0);
      }
      var i;
      var len = shapePath._length;
      var vertices = shapePath[prop];
      var points = shapePath.v;
      var arr = createSizedArray(len);
      for (i = 0; i < len; i += 1) {
        if (prop === 'i' || prop === 'o') {
          arr[i] = [vertices[i][0] - points[i][0], vertices[i][1] - points[i][1]];
        } else {
          arr[i] = [vertices[i][0], vertices[i][1]];
        }
      }
      return arr;
    },
    points: function (time) {
      return this.vertices('v', time);
    },
    inTangents: function (time) {
      return this.vertices('i', time);
    },
    outTangents: function (time) {
      return this.vertices('o', time);
    },
    isClosed: function () {
      return this.v.c;
    },
    pointOnPath: function (perc, time) {
      var shapePath = this.v;
      if (time !== undefined) {
        shapePath = this.getValueAtTime(time, 0);
      }
      if (!this._segmentsLength) {
        this._segmentsLength = bez.getSegmentsLength(shapePath);
      }

      var segmentsLength = this._segmentsLength;
      var lengths = segmentsLength.lengths;
      var lengthPos = segmentsLength.totalLength * perc;
      var i = 0;
      var len = lengths.length;
      var accumulatedLength = 0;
      var pt;
      while (i < len) {
        if (accumulatedLength + lengths[i].addedLength > lengthPos) {
          var initIndex = i;
          var endIndex = (shapePath.c && i === len - 1) ? 0 : i + 1;
          var segmentPerc = (lengthPos - accumulatedLength) / lengths[i].addedLength;
          pt = bez.getPointInSegment(shapePath.v[initIndex], shapePath.v[endIndex], shapePath.o[initIndex], shapePath.i[endIndex], segmentPerc, lengths[i]);
          break;
        } else {
          accumulatedLength += lengths[i].addedLength;
        }
        i += 1;
      }
      if (!pt) {
        pt = shapePath.c ? [shapePath.v[0][0], shapePath.v[0][1]] : [shapePath.v[shapePath._length - 1][0], shapePath.v[shapePath._length - 1][1]];
      }
      return pt;
    },
    vectorOnPath: function (perc, time, vectorType) {
      // perc doesn't use triple equality because it can be a Number object as well as a primitive.
      if (perc == 1) { // eslint-disable-line eqeqeq
        perc = this.v.c;
      } else if (perc == 0) { // eslint-disable-line eqeqeq
        perc = 0.999;
      }
      var pt1 = this.pointOnPath(perc, time);
      var pt2 = this.pointOnPath(perc + 0.001, time);
      var xLength = pt2[0] - pt1[0];
      var yLength = pt2[1] - pt1[1];
      var magnitude = Math.sqrt(Math.pow(xLength, 2) + Math.pow(yLength, 2));
      if (magnitude === 0) {
        return [0, 0];
      }
      var unitVector = vectorType === 'tangent' ? [xLength / magnitude, yLength / magnitude] : [-yLength / magnitude, xLength / magnitude];
      return unitVector;
    },
    tangentOnPath: function (perc, time) {
      return this.vectorOnPath(perc, time, 'tangent');
    },
    normalOnPath: function (perc, time) {
      return this.vectorOnPath(perc, time, 'normal');
    },
    setGroupProperty: expressionHelpers.setGroupProperty,
    getValueAtTime: expressionHelpers.getStaticValueAtTime,
  };
  extendPrototype([ShapeExpressions], ShapePropertyConstructorFunction);
  extendPrototype([ShapeExpressions], KeyframedShapePropertyConstructorFunction);
  KeyframedShapePropertyConstructorFunction.prototype.getValueAtTime = getShapeValueAtTime;
  KeyframedShapePropertyConstructorFunction.prototype.initiateExpression = ExpressionManager.initiateExpression;

  var propertyGetShapeProp = ShapePropertyFactory.getShapeProp;
  ShapePropertyFactory.getShapeProp = function (elem, data, type, arr, trims) {
    var prop = propertyGetShapeProp(elem, data, type, arr, trims);
    prop.propertyIndex = data.ix;
    prop.lock = false;
    if (type === 3) {
      expressionHelpers.searchExpressions(elem, data.pt, prop);
    } else if (type === 4) {
      expressionHelpers.searchExpressions(elem, data.ks, prop);
    }
    if (prop.k) {
      elem.addDynamicProperty(prop);
    }
    return prop;
  };
}());

/* global ExpressionManager, TextProperty */

(function addDecorator() {
  function searchExpressions() {
    if (this.data.d.x) {
      this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this);
      this.addEffect(this.getExpressionValue.bind(this));
      return true;
    }
    return null;
  }

  TextProperty.prototype.getExpressionValue = function (currentValue, text) {
    var newValue = this.calculateExpression(text);
    if (currentValue.t !== newValue) {
      var newData = {};
      this.copyData(newData, currentValue);
      newData.t = newValue.toString();
      newData.__complete = false;
      return newData;
    }
    return currentValue;
  };

  TextProperty.prototype.searchProperty = function () {
    var isKeyframed = this.searchKeyframes();
    var hasExpressions = this.searchExpressions();
    this.kf = isKeyframed || hasExpressions;
    return this.kf;
  };

  TextProperty.prototype.searchExpressions = searchExpressions;
}());

/* global propertyGroupFactory, PropertyInterface */
/* exported ShapePathInterface */

var ShapePathInterface = (

  function () {
    return function pathInterfaceFactory(shape, view, propertyGroup) {
      var prop = view.sh;

      function interfaceFunction(val) {
        if (val === 'Shape' || val === 'shape' || val === 'Path' || val === 'path' || val === 'ADBE Vector Shape' || val === 2) {
          return interfaceFunction.path;
        }
        return null;
      }

      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
      prop.setGroupProperty(PropertyInterface('Path', _propertyGroup));
      Object.defineProperties(interfaceFunction, {
        path: {
          get: function () {
            if (prop.k) {
              prop.getValue();
            }
            return prop;
          },
        },
        shape: {
          get: function () {
            if (prop.k) {
              prop.getValue();
            }
            return prop;
          },
        },
        _name: { value: shape.nm },
        ix: { value: shape.ix },
        propertyIndex: { value: shape.ix },
        mn: { value: shape.mn },
        propertyGroup: { value: propertyGroup },
      });
      return interfaceFunction;
    };
  }()
);

/* exported propertyGroupFactory */

var propertyGroupFactory = (function () {
  return function (interfaceFunction, parentPropertyGroup) {
    return function (val) {
      val = val === undefined ? 1 : val;
      if (val <= 0) {
        return interfaceFunction;
      }
      return parentPropertyGroup(val - 1);
    };
  };
}());

/* exported PropertyInterface */

var PropertyInterface = (function () {
  return function (propertyName, propertyGroup) {
    var interfaceFunction = {
      _name: propertyName,
    };

    function _propertyGroup(val) {
      val = val === undefined ? 1 : val;
      if (val <= 0) {
        return interfaceFunction;
      }
      return propertyGroup(val - 1);
    }

    return _propertyGroup;
  };
}());

/* global ExpressionPropertyInterface, PropertyInterface, propertyGroupFactory, ShapePathInterface */
/* exported ShapeExpressionInterface */

var ShapeExpressionInterface = (function () {
  function iterateElements(shapes, view, propertyGroup) {
    var arr = [];
    var i;
    var len = shapes ? shapes.length : 0;
    for (i = 0; i < len; i += 1) {
      if (shapes[i].ty === 'gr') {
        arr.push(groupInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'fl') {
        arr.push(fillInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'st') {
        arr.push(strokeInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'tm') {
        arr.push(trimInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'tr') {
        // arr.push(transformInterfaceFactory(shapes[i],view[i],propertyGroup));
      } else if (shapes[i].ty === 'el') {
        arr.push(ellipseInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'sr') {
        arr.push(starInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'sh') {
        arr.push(ShapePathInterface(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'rc') {
        arr.push(rectInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'rd') {
        arr.push(roundedInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'rp') {
        arr.push(repeaterInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'gf') {
        arr.push(gradientFillInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else {
        arr.push(defaultInterfaceFactory(shapes[i], view[i], propertyGroup));
      }
    }
    return arr;
  }

  function contentsInterfaceFactory(shape, view, propertyGroup) {
    var interfaces;
    var interfaceFunction = function _interfaceFunction(value) {
      var i = 0;
      var len = interfaces.length;
      while (i < len) {
        if (interfaces[i]._name === value || interfaces[i].mn === value || interfaces[i].propertyIndex === value || interfaces[i].ix === value || interfaces[i].ind === value) {
          return interfaces[i];
        }
        i += 1;
      }
      if (typeof value === 'number') {
        return interfaces[value - 1];
      }
      return null;
    };

    interfaceFunction.propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
    interfaces = iterateElements(shape.it, view.it, interfaceFunction.propertyGroup);
    interfaceFunction.numProperties = interfaces.length;
    var transformInterface = transformInterfaceFactory(shape.it[shape.it.length - 1], view.it[view.it.length - 1], interfaceFunction.propertyGroup);
    interfaceFunction.transform = transformInterface;
    interfaceFunction.propertyIndex = shape.cix;
    interfaceFunction._name = shape.nm;

    return interfaceFunction;
  }

  function groupInterfaceFactory(shape, view, propertyGroup) {
    var interfaceFunction = function _interfaceFunction(value) {
      switch (value) {
        case 'ADBE Vectors Group':
        case 'Contents':
        case 2:
          return interfaceFunction.content;
          // Not necessary for now. Keeping them here in case a new case appears
          // case 'ADBE Vector Transform Group':
          // case 3:
        default:
          return interfaceFunction.transform;
      }
    };
    interfaceFunction.propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
    var content = contentsInterfaceFactory(shape, view, interfaceFunction.propertyGroup);
    var transformInterface = transformInterfaceFactory(shape.it[shape.it.length - 1], view.it[view.it.length - 1], interfaceFunction.propertyGroup);
    interfaceFunction.content = content;
    interfaceFunction.transform = transformInterface;
    Object.defineProperty(interfaceFunction, '_name', {
      get: function () {
        return shape.nm;
      },
    });
    // interfaceFunction.content = interfaceFunction;
    interfaceFunction.numProperties = shape.np;
    interfaceFunction.propertyIndex = shape.ix;
    interfaceFunction.nm = shape.nm;
    interfaceFunction.mn = shape.mn;
    return interfaceFunction;
  }

  function fillInterfaceFactory(shape, view, propertyGroup) {
    function interfaceFunction(val) {
      if (val === 'Color' || val === 'color') {
        return interfaceFunction.color;
      } if (val === 'Opacity' || val === 'opacity') {
        return interfaceFunction.opacity;
      }
      return null;
    }
    Object.defineProperties(interfaceFunction, {
      color: {
        get: ExpressionPropertyInterface(view.c),
      },
      opacity: {
        get: ExpressionPropertyInterface(view.o),
      },
      _name: { value: shape.nm },
      mn: { value: shape.mn },
    });

    view.c.setGroupProperty(PropertyInterface('Color', propertyGroup));
    view.o.setGroupProperty(PropertyInterface('Opacity', propertyGroup));
    return interfaceFunction;
  }

  function gradientFillInterfaceFactory(shape, view, propertyGroup) {
    function interfaceFunction(val) {
      if (val === 'Start Point' || val === 'start point') {
        return interfaceFunction.startPoint;
      }
      if (val === 'End Point' || val === 'end point') {
        return interfaceFunction.endPoint;
      }
      if (val === 'Opacity' || val === 'opacity') {
        return interfaceFunction.opacity;
      }
      return null;
    }
    Object.defineProperties(interfaceFunction, {
      startPoint: {
        get: ExpressionPropertyInterface(view.s),
      },
      endPoint: {
        get: ExpressionPropertyInterface(view.e),
      },
      opacity: {
        get: ExpressionPropertyInterface(view.o),
      },
      type: {
        get: function () {
          return 'a';
        },
      },
      _name: { value: shape.nm },
      mn: { value: shape.mn },
    });

    view.s.setGroupProperty(PropertyInterface('Start Point', propertyGroup));
    view.e.setGroupProperty(PropertyInterface('End Point', propertyGroup));
    view.o.setGroupProperty(PropertyInterface('Opacity', propertyGroup));
    return interfaceFunction;
  }
  function defaultInterfaceFactory() {
    function interfaceFunction() {
      return null;
    }
    return interfaceFunction;
  }

  function strokeInterfaceFactory(shape, view, propertyGroup) {
    var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
    var _dashPropertyGroup = propertyGroupFactory(dashOb, _propertyGroup);
    function addPropertyToDashOb(i) {
      Object.defineProperty(dashOb, shape.d[i].nm, {
        get: ExpressionPropertyInterface(view.d.dataProps[i].p),
      });
    }
    var i;
    var len = shape.d ? shape.d.length : 0;
    var dashOb = {};
    for (i = 0; i < len; i += 1) {
      addPropertyToDashOb(i);
      view.d.dataProps[i].p.setGroupProperty(_dashPropertyGroup);
    }

    function interfaceFunction(val) {
      if (val === 'Color' || val === 'color') {
        return interfaceFunction.color;
      } if (val === 'Opacity' || val === 'opacity') {
        return interfaceFunction.opacity;
      } if (val === 'Stroke Width' || val === 'stroke width') {
        return interfaceFunction.strokeWidth;
      }
      return null;
    }
    Object.defineProperties(interfaceFunction, {
      color: {
        get: ExpressionPropertyInterface(view.c),
      },
      opacity: {
        get: ExpressionPropertyInterface(view.o),
      },
      strokeWidth: {
        get: ExpressionPropertyInterface(view.w),
      },
      dash: {
        get: function () {
          return dashOb;
        },
      },
      _name: { value: shape.nm },
      mn: { value: shape.mn },
    });

    view.c.setGroupProperty(PropertyInterface('Color', _propertyGroup));
    view.o.setGroupProperty(PropertyInterface('Opacity', _propertyGroup));
    view.w.setGroupProperty(PropertyInterface('Stroke Width', _propertyGroup));
    return interfaceFunction;
  }

  function trimInterfaceFactory(shape, view, propertyGroup) {
    function interfaceFunction(val) {
      if (val === shape.e.ix || val === 'End' || val === 'end') {
        return interfaceFunction.end;
      }
      if (val === shape.s.ix) {
        return interfaceFunction.start;
      }
      if (val === shape.o.ix) {
        return interfaceFunction.offset;
      }
      return null;
    }

    var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
    interfaceFunction.propertyIndex = shape.ix;

    view.s.setGroupProperty(PropertyInterface('Start', _propertyGroup));
    view.e.setGroupProperty(PropertyInterface('End', _propertyGroup));
    view.o.setGroupProperty(PropertyInterface('Offset', _propertyGroup));
    interfaceFunction.propertyIndex = shape.ix;
    interfaceFunction.propertyGroup = propertyGroup;

    Object.defineProperties(interfaceFunction, {
      start: {
        get: ExpressionPropertyInterface(view.s),
      },
      end: {
        get: ExpressionPropertyInterface(view.e),
      },
      offset: {
        get: ExpressionPropertyInterface(view.o),
      },
      _name: { value: shape.nm },
    });
    interfaceFunction.mn = shape.mn;
    return interfaceFunction;
  }

  function transformInterfaceFactory(shape, view, propertyGroup) {
    function interfaceFunction(value) {
      if (shape.a.ix === value || value === 'Anchor Point') {
        return interfaceFunction.anchorPoint;
      }
      if (shape.o.ix === value || value === 'Opacity') {
        return interfaceFunction.opacity;
      }
      if (shape.p.ix === value || value === 'Position') {
        return interfaceFunction.position;
      }
      if (shape.r.ix === value || value === 'Rotation' || value === 'ADBE Vector Rotation') {
        return interfaceFunction.rotation;
      }
      if (shape.s.ix === value || value === 'Scale') {
        return interfaceFunction.scale;
      }
      if ((shape.sk && shape.sk.ix === value) || value === 'Skew') {
        return interfaceFunction.skew;
      }
      if ((shape.sa && shape.sa.ix === value) || value === 'Skew Axis') {
        return interfaceFunction.skewAxis;
      }
      return null;
    }
    var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
    view.transform.mProps.o.setGroupProperty(PropertyInterface('Opacity', _propertyGroup));
    view.transform.mProps.p.setGroupProperty(PropertyInterface('Position', _propertyGroup));
    view.transform.mProps.a.setGroupProperty(PropertyInterface('Anchor Point', _propertyGroup));
    view.transform.mProps.s.setGroupProperty(PropertyInterface('Scale', _propertyGroup));
    view.transform.mProps.r.setGroupProperty(PropertyInterface('Rotation', _propertyGroup));
    if (view.transform.mProps.sk) {
      view.transform.mProps.sk.setGroupProperty(PropertyInterface('Skew', _propertyGroup));
      view.transform.mProps.sa.setGroupProperty(PropertyInterface('Skew Angle', _propertyGroup));
    }
    view.transform.op.setGroupProperty(PropertyInterface('Opacity', _propertyGroup));
    Object.defineProperties(interfaceFunction, {
      opacity: {
        get: ExpressionPropertyInterface(view.transform.mProps.o),
      },
      position: {
        get: ExpressionPropertyInterface(view.transform.mProps.p),
      },
      anchorPoint: {
        get: ExpressionPropertyInterface(view.transform.mProps.a),
      },
      scale: {
        get: ExpressionPropertyInterface(view.transform.mProps.s),
      },
      rotation: {
        get: ExpressionPropertyInterface(view.transform.mProps.r),
      },
      skew: {
        get: ExpressionPropertyInterface(view.transform.mProps.sk),
      },
      skewAxis: {
        get: ExpressionPropertyInterface(view.transform.mProps.sa),
      },
      _name: { value: shape.nm },
    });
    interfaceFunction.ty = 'tr';
    interfaceFunction.mn = shape.mn;
    interfaceFunction.propertyGroup = propertyGroup;
    return interfaceFunction;
  }

  function ellipseInterfaceFactory(shape, view, propertyGroup) {
    function interfaceFunction(value) {
      if (shape.p.ix === value) {
        return interfaceFunction.position;
      }
      if (shape.s.ix === value) {
        return interfaceFunction.size;
      }
      return null;
    }
    var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
    interfaceFunction.propertyIndex = shape.ix;
    var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
    prop.s.setGroupProperty(PropertyInterface('Size', _propertyGroup));
    prop.p.setGroupProperty(PropertyInterface('Position', _propertyGroup));

    Object.defineProperties(interfaceFunction, {
      size: {
        get: ExpressionPropertyInterface(prop.s),
      },
      position: {
        get: ExpressionPropertyInterface(prop.p),
      },
      _name: { value: shape.nm },
    });
    interfaceFunction.mn = shape.mn;
    return interfaceFunction;
  }

  function starInterfaceFactory(shape, view, propertyGroup) {
    function interfaceFunction(value) {
      if (shape.p.ix === value) {
        return interfaceFunction.position;
      }
      if (shape.r.ix === value) {
        return interfaceFunction.rotation;
      }
      if (shape.pt.ix === value) {
        return interfaceFunction.points;
      }
      if (shape.or.ix === value || value === 'ADBE Vector Star Outer Radius') {
        return interfaceFunction.outerRadius;
      }
      if (shape.os.ix === value) {
        return interfaceFunction.outerRoundness;
      }
      if (shape.ir && (shape.ir.ix === value || value === 'ADBE Vector Star Inner Radius')) {
        return interfaceFunction.innerRadius;
      }
      if (shape.is && shape.is.ix === value) {
        return interfaceFunction.innerRoundness;
      }
      return null;
    }

    var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
    var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
    interfaceFunction.propertyIndex = shape.ix;
    prop.or.setGroupProperty(PropertyInterface('Outer Radius', _propertyGroup));
    prop.os.setGroupProperty(PropertyInterface('Outer Roundness', _propertyGroup));
    prop.pt.setGroupProperty(PropertyInterface('Points', _propertyGroup));
    prop.p.setGroupProperty(PropertyInterface('Position', _propertyGroup));
    prop.r.setGroupProperty(PropertyInterface('Rotation', _propertyGroup));
    if (shape.ir) {
      prop.ir.setGroupProperty(PropertyInterface('Inner Radius', _propertyGroup));
      prop.is.setGroupProperty(PropertyInterface('Inner Roundness', _propertyGroup));
    }

    Object.defineProperties(interfaceFunction, {
      position: {
        get: ExpressionPropertyInterface(prop.p),
      },
      rotation: {
        get: ExpressionPropertyInterface(prop.r),
      },
      points: {
        get: ExpressionPropertyInterface(prop.pt),
      },
      outerRadius: {
        get: ExpressionPropertyInterface(prop.or),
      },
      outerRoundness: {
        get: ExpressionPropertyInterface(prop.os),
      },
      innerRadius: {
        get: ExpressionPropertyInterface(prop.ir),
      },
      innerRoundness: {
        get: ExpressionPropertyInterface(prop.is),
      },
      _name: { value: shape.nm },
    });
    interfaceFunction.mn = shape.mn;
    return interfaceFunction;
  }

  function rectInterfaceFactory(shape, view, propertyGroup) {
    function interfaceFunction(value) {
      if (shape.p.ix === value) {
        return interfaceFunction.position;
      }
      if (shape.r.ix === value) {
        return interfaceFunction.roundness;
      }
      if (shape.s.ix === value || value === 'Size' || value === 'ADBE Vector Rect Size') {
        return interfaceFunction.size;
      }
      return null;
    }
    var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

    var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
    interfaceFunction.propertyIndex = shape.ix;
    prop.p.setGroupProperty(PropertyInterface('Position', _propertyGroup));
    prop.s.setGroupProperty(PropertyInterface('Size', _propertyGroup));
    prop.r.setGroupProperty(PropertyInterface('Rotation', _propertyGroup));

    Object.defineProperties(interfaceFunction, {
      position: {
        get: ExpressionPropertyInterface(prop.p),
      },
      roundness: {
        get: ExpressionPropertyInterface(prop.r),
      },
      size: {
        get: ExpressionPropertyInterface(prop.s),
      },
      _name: { value: shape.nm },
    });
    interfaceFunction.mn = shape.mn;
    return interfaceFunction;
  }

  function roundedInterfaceFactory(shape, view, propertyGroup) {
    function interfaceFunction(value) {
      if (shape.r.ix === value || value === 'Round Corners 1') {
        return interfaceFunction.radius;
      }
      return null;
    }

    var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
    var prop = view;
    interfaceFunction.propertyIndex = shape.ix;
    prop.rd.setGroupProperty(PropertyInterface('Radius', _propertyGroup));

    Object.defineProperties(interfaceFunction, {
      radius: {
        get: ExpressionPropertyInterface(prop.rd),
      },
      _name: { value: shape.nm },
    });
    interfaceFunction.mn = shape.mn;
    return interfaceFunction;
  }

  function repeaterInterfaceFactory(shape, view, propertyGroup) {
    function interfaceFunction(value) {
      if (shape.c.ix === value || value === 'Copies') {
        return interfaceFunction.copies;
      } if (shape.o.ix === value || value === 'Offset') {
        return interfaceFunction.offset;
      }
      return null;
    }

    var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
    var prop = view;
    interfaceFunction.propertyIndex = shape.ix;
    prop.c.setGroupProperty(PropertyInterface('Copies', _propertyGroup));
    prop.o.setGroupProperty(PropertyInterface('Offset', _propertyGroup));
    Object.defineProperties(interfaceFunction, {
      copies: {
        get: ExpressionPropertyInterface(prop.c),
      },
      offset: {
        get: ExpressionPropertyInterface(prop.o),
      },
      _name: { value: shape.nm },
    });
    interfaceFunction.mn = shape.mn;
    return interfaceFunction;
  }

  return function (shapes, view, propertyGroup) {
    var interfaces;
    function _interfaceFunction(value) {
      if (typeof value === 'number') {
        value = value === undefined ? 1 : value;
        if (value === 0) {
          return propertyGroup;
        }
        return interfaces[value - 1];
      }
      var i = 0;
      var len = interfaces.length;
      while (i < len) {
        if (interfaces[i]._name === value) {
          return interfaces[i];
        }
        i += 1;
      }
      return null;
    }
    function parentGroupWrapper() {
      return propertyGroup;
    }
    _interfaceFunction.propertyGroup = propertyGroupFactory(_interfaceFunction, parentGroupWrapper);
    interfaces = iterateElements(shapes, view, _interfaceFunction.propertyGroup);
    _interfaceFunction.numProperties = interfaces.length;
    _interfaceFunction._name = 'Contents';
    return _interfaceFunction;
  };
}());

/* exported TextExpressionInterface */

var TextExpressionInterface = (function () {
  return function (elem) {
    var _prevValue;
    var _sourceText;
    function _thisLayerFunction(name) {
      switch (name) {
        case 'ADBE Text Document':
          return _thisLayerFunction.sourceText;
        default:
          return null;
      }
    }
    Object.defineProperty(_thisLayerFunction, 'sourceText', {
      get: function () {
        elem.textProperty.getValue();
        var stringValue = elem.textProperty.currentData.t;
        if (stringValue !== _prevValue) {
          elem.textProperty.currentData.t = _prevValue;
          _sourceText = new String(stringValue); // eslint-disable-line no-new-wrappers
          // If stringValue is an empty string, eval returns undefined, so it has to be returned as a String primitive
          _sourceText.value = stringValue || new String(stringValue); // eslint-disable-line no-new-wrappers
        }
        return _sourceText;
      },
    });
    return _thisLayerFunction;
  };
}());

/* global Matrix, MaskManagerInterface, TransformExpressionInterface, getDescriptor */
/* exported LayerExpressionInterface */

var LayerExpressionInterface = (function () {
  function getMatrix(time) {
    var toWorldMat = new Matrix();
    if (time !== undefined) {
      var propMatrix = this._elem.finalTransform.mProp.getValueAtTime(time);
      propMatrix.clone(toWorldMat);
    } else {
      var transformMat = this._elem.finalTransform.mProp;
      transformMat.applyToMatrix(toWorldMat);
    }
    return toWorldMat;
  }

  function toWorldVec(arr, time) {
    var toWorldMat = this.getMatrix(time);
    toWorldMat.props[12] = 0;
    toWorldMat.props[13] = 0;
    toWorldMat.props[14] = 0;
    return this.applyPoint(toWorldMat, arr);
  }

  function toWorld(arr, time) {
    var toWorldMat = this.getMatrix(time);
    return this.applyPoint(toWorldMat, arr);
  }

  function fromWorldVec(arr, time) {
    var toWorldMat = this.getMatrix(time);
    toWorldMat.props[12] = 0;
    toWorldMat.props[13] = 0;
    toWorldMat.props[14] = 0;
    return this.invertPoint(toWorldMat, arr);
  }

  function fromWorld(arr, time) {
    var toWorldMat = this.getMatrix(time);
    return this.invertPoint(toWorldMat, arr);
  }

  function applyPoint(matrix, arr) {
    if (this._elem.hierarchy && this._elem.hierarchy.length) {
      var i;
      var len = this._elem.hierarchy.length;
      for (i = 0; i < len; i += 1) {
        this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(matrix);
      }
    }
    return matrix.applyToPointArray(arr[0], arr[1], arr[2] || 0);
  }

  function invertPoint(matrix, arr) {
    if (this._elem.hierarchy && this._elem.hierarchy.length) {
      var i;
      var len = this._elem.hierarchy.length;
      for (i = 0; i < len; i += 1) {
        this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(matrix);
      }
    }
    return matrix.inversePoint(arr);
  }

  function fromComp(arr) {
    var toWorldMat = new Matrix();
    toWorldMat.reset();
    this._elem.finalTransform.mProp.applyToMatrix(toWorldMat);
    if (this._elem.hierarchy && this._elem.hierarchy.length) {
      var i;
      var len = this._elem.hierarchy.length;
      for (i = 0; i < len; i += 1) {
        this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(toWorldMat);
      }
      return toWorldMat.inversePoint(arr);
    }
    return toWorldMat.inversePoint(arr);
  }

  function sampleImage() {
    return [1, 1, 1, 1];
  }

  return function (elem) {
    var transformInterface;

    function _registerMaskInterface(maskManager) {
      _thisLayerFunction.mask = new MaskManagerInterface(maskManager, elem);
    }
    function _registerEffectsInterface(effects) {
      _thisLayerFunction.effect = effects;
    }

    function _thisLayerFunction(name) {
      switch (name) {
        case 'ADBE Root Vectors Group':
        case 'Contents':
        case 2:
          return _thisLayerFunction.shapeInterface;
        case 1:
        case 6:
        case 'Transform':
        case 'transform':
        case 'ADBE Transform Group':
          return transformInterface;
        case 4:
        case 'ADBE Effect Parade':
        case 'effects':
        case 'Effects':
          return _thisLayerFunction.effect;
        case 'ADBE Text Properties':
          return _thisLayerFunction.textInterface;
        default:
          return null;
      }
    }
    _thisLayerFunction.getMatrix = getMatrix;
    _thisLayerFunction.invertPoint = invertPoint;
    _thisLayerFunction.applyPoint = applyPoint;
    _thisLayerFunction.toWorld = toWorld;
    _thisLayerFunction.toWorldVec = toWorldVec;
    _thisLayerFunction.fromWorld = fromWorld;
    _thisLayerFunction.fromWorldVec = fromWorldVec;
    _thisLayerFunction.toComp = toWorld;
    _thisLayerFunction.fromComp = fromComp;
    _thisLayerFunction.sampleImage = sampleImage;
    _thisLayerFunction.sourceRectAtTime = elem.sourceRectAtTime.bind(elem);
    _thisLayerFunction._elem = elem;
    transformInterface = TransformExpressionInterface(elem.finalTransform.mProp);
    var anchorPointDescriptor = getDescriptor(transformInterface, 'anchorPoint');
    Object.defineProperties(_thisLayerFunction, {
      hasParent: {
        get: function () {
          return elem.hierarchy.length;
        },
      },
      parent: {
        get: function () {
          return elem.hierarchy[0].layerInterface;
        },
      },
      rotation: getDescriptor(transformInterface, 'rotation'),
      scale: getDescriptor(transformInterface, 'scale'),
      position: getDescriptor(transformInterface, 'position'),
      opacity: getDescriptor(transformInterface, 'opacity'),
      anchorPoint: anchorPointDescriptor,
      anchor_point: anchorPointDescriptor,
      transform: {
        get: function () {
          return transformInterface;
        },
      },
      active: {
        get: function () {
          return elem.isInRange;
        },
      },
    });

    _thisLayerFunction.startTime = elem.data.st;
    _thisLayerFunction.index = elem.data.ind;
    _thisLayerFunction.source = elem.data.refId;
    _thisLayerFunction.height = elem.data.ty === 0 ? elem.data.h : 100;
    _thisLayerFunction.width = elem.data.ty === 0 ? elem.data.w : 100;
    _thisLayerFunction.inPoint = elem.data.ip / elem.comp.globalData.frameRate;
    _thisLayerFunction.outPoint = elem.data.op / elem.comp.globalData.frameRate;
    _thisLayerFunction._name = elem.data.nm;

    _thisLayerFunction.registerMaskInterface = _registerMaskInterface;
    _thisLayerFunction.registerEffectsInterface = _registerEffectsInterface;
    return _thisLayerFunction;
  };
}());

/* global */
/* exported FootageInterface */

var FootageInterface = (function () {
  var outlineInterfaceFactory = (function (elem) {
    var currentPropertyName = '';
    var currentProperty = elem.getFootageData();
    function init() {
      currentPropertyName = '';
      currentProperty = elem.getFootageData();
      return searchProperty;
    }
    function searchProperty(value) {
      if (currentProperty[value]) {
        currentPropertyName = value;
        currentProperty = currentProperty[value];
        if (typeof currentProperty === 'object') {
          return searchProperty;
        }
        return currentProperty;
      }
      var propertyNameIndex = value.indexOf(currentPropertyName);
      if (propertyNameIndex !== -1) {
        var index = parseInt(value.substr(propertyNameIndex + currentPropertyName.length), 10);
        currentProperty = currentProperty[index];
        if (typeof currentProperty === 'object') {
          return searchProperty;
        }
        return currentProperty;
      }
      return '';
    }
    return init;
  });

  var dataInterfaceFactory = function (elem) {
    function interfaceFunction(value) {
      if (value === 'Outline') {
        return interfaceFunction.outlineInterface();
      }
      return null;
    }

    interfaceFunction._name = 'Outline';
    interfaceFunction.outlineInterface = outlineInterfaceFactory(elem);
    return interfaceFunction;
  };

  return function (elem) {
    function _interfaceFunction(value) {
      if (value === 'Data') {
        return _interfaceFunction.dataInterface;
      }
      return null;
    }

    _interfaceFunction._name = 'Data';
    _interfaceFunction.dataInterface = dataInterfaceFactory(elem);
    return _interfaceFunction;
  };
}());

/* exported CompExpressionInterface */

var CompExpressionInterface = (function () {
  return function (comp) {
    function _thisLayerFunction(name) {
      var i = 0;
      var len = comp.layers.length;
      while (i < len) {
        if (comp.layers[i].nm === name || comp.layers[i].ind === name) {
          return comp.elements[i].layerInterface;
        }
        i += 1;
      }
      return null;
      // return {active:false};
    }
    Object.defineProperty(_thisLayerFunction, '_name', { value: comp.data.nm });
    _thisLayerFunction.layer = _thisLayerFunction;
    _thisLayerFunction.pixelAspect = 1;
    _thisLayerFunction.height = comp.data.h || comp.globalData.compSize.h;
    _thisLayerFunction.width = comp.data.w || comp.globalData.compSize.w;
    _thisLayerFunction.pixelAspect = 1;
    _thisLayerFunction.frameDuration = 1 / comp.globalData.frameRate;
    _thisLayerFunction.displayStartTime = 0;
    _thisLayerFunction.numLayers = comp.layers.length;
    return _thisLayerFunction;
  };
}());

/* global ExpressionPropertyInterface */
/* exported TransformExpressionInterface */

var TransformExpressionInterface = (function () {
  return function (transform) {
    function _thisFunction(name) {
      switch (name) {
        case 'scale':
        case 'Scale':
        case 'ADBE Scale':
        case 6:
          return _thisFunction.scale;
        case 'rotation':
        case 'Rotation':
        case 'ADBE Rotation':
        case 'ADBE Rotate Z':
        case 10:
          return _thisFunction.rotation;
        case 'ADBE Rotate X':
          return _thisFunction.xRotation;
        case 'ADBE Rotate Y':
          return _thisFunction.yRotation;
        case 'position':
        case 'Position':
        case 'ADBE Position':
        case 2:
          return _thisFunction.position;
        case 'ADBE Position_0':
          return _thisFunction.xPosition;
        case 'ADBE Position_1':
          return _thisFunction.yPosition;
        case 'ADBE Position_2':
          return _thisFunction.zPosition;
        case 'anchorPoint':
        case 'AnchorPoint':
        case 'Anchor Point':
        case 'ADBE AnchorPoint':
        case 1:
          return _thisFunction.anchorPoint;
        case 'opacity':
        case 'Opacity':
        case 11:
          return _thisFunction.opacity;
        default:
          return null;
      }
    }
    Object.defineProperty(_thisFunction, 'rotation', {
      get: ExpressionPropertyInterface(transform.r || transform.rz),
    });

    Object.defineProperty(_thisFunction, 'zRotation', {
      get: ExpressionPropertyInterface(transform.rz || transform.r),
    });

    Object.defineProperty(_thisFunction, 'xRotation', {
      get: ExpressionPropertyInterface(transform.rx),
    });

    Object.defineProperty(_thisFunction, 'yRotation', {
      get: ExpressionPropertyInterface(transform.ry),
    });
    Object.defineProperty(_thisFunction, 'scale', {
      get: ExpressionPropertyInterface(transform.s),
    });
    var _px;
    var _py;
    var _pz;
    var _transformFactory;
    if (transform.p) {
      _transformFactory = ExpressionPropertyInterface(transform.p);
    } else {
      _px = ExpressionPropertyInterface(transform.px);
      _py = ExpressionPropertyInterface(transform.py);
      if (transform.pz) {
        _pz = ExpressionPropertyInterface(transform.pz);
      }
    }
    Object.defineProperty(_thisFunction, 'position', {
      get: function () {
        if (transform.p) {
          return _transformFactory();
        }
        return [
          _px(),
          _py(),
          _pz ? _pz() : 0];
      },
    });

    Object.defineProperty(_thisFunction, 'xPosition', {
      get: ExpressionPropertyInterface(transform.px),
    });

    Object.defineProperty(_thisFunction, 'yPosition', {
      get: ExpressionPropertyInterface(transform.py),
    });

    Object.defineProperty(_thisFunction, 'zPosition', {
      get: ExpressionPropertyInterface(transform.pz),
    });

    Object.defineProperty(_thisFunction, 'anchorPoint', {
      get: ExpressionPropertyInterface(transform.a),
    });

    Object.defineProperty(_thisFunction, 'opacity', {
      get: ExpressionPropertyInterface(transform.o),
    });

    Object.defineProperty(_thisFunction, 'skew', {
      get: ExpressionPropertyInterface(transform.sk),
    });

    Object.defineProperty(_thisFunction, 'skewAxis', {
      get: ExpressionPropertyInterface(transform.sa),
    });

    Object.defineProperty(_thisFunction, 'orientation', {
      get: ExpressionPropertyInterface(transform.or),
    });

    return _thisFunction;
  };
}());

/* exported ProjectInterface */

var ProjectInterface = (function () {
  function registerComposition(comp) {
    this.compositions.push(comp);
  }

  return function () {
    function _thisProjectFunction(name) {
      var i = 0;
      var len = this.compositions.length;
      while (i < len) {
        if (this.compositions[i].data && this.compositions[i].data.nm === name) {
          if (this.compositions[i].prepareFrame && this.compositions[i].data.xt) {
            this.compositions[i].prepareFrame(this.currentFrame);
          }
          return this.compositions[i].compInterface;
        }
        i += 1;
      }
      return null;
    }

    _thisProjectFunction.compositions = [];
    _thisProjectFunction.currentFrame = 0;

    _thisProjectFunction.registerComposition = registerComposition;

    return _thisProjectFunction;
  };
}());

/* global propertyGroupFactory, ExpressionPropertyInterface, PropertyInterface */
/* exported EffectsExpressionInterface */

var EffectsExpressionInterface = (function () {
  var ob = {
    createEffectsInterface: createEffectsInterface,
  };

  function createEffectsInterface(elem, propertyGroup) {
    if (elem.effectsManager) {
      var effectElements = [];
      var effectsData = elem.data.ef;
      var i;
      var len = elem.effectsManager.effectElements.length;
      for (i = 0; i < len; i += 1) {
        effectElements.push(createGroupInterface(effectsData[i], elem.effectsManager.effectElements[i], propertyGroup, elem));
      }

      var effects = elem.data.ef || [];
      var groupInterface = function (name) {
        i = 0;
        len = effects.length;
        while (i < len) {
          if (name === effects[i].nm || name === effects[i].mn || name === effects[i].ix) {
            return effectElements[i];
          }
          i += 1;
        }
        return null;
      };
      Object.defineProperty(groupInterface, 'numProperties', {
        get: function () {
          return effects.length;
        },
      });
      return groupInterface;
    }
    return null;
  }

  function createGroupInterface(data, elements, propertyGroup, elem) {
    function groupInterface(name) {
      var effects = data.ef;
      var i = 0;
      var len = effects.length;
      while (i < len) {
        if (name === effects[i].nm || name === effects[i].mn || name === effects[i].ix) {
          if (effects[i].ty === 5) {
            return effectElements[i];
          }
          return effectElements[i]();
        }
        i += 1;
      }
      throw new Error();
    }
    var _propertyGroup = propertyGroupFactory(groupInterface, propertyGroup);

    var effectElements = [];
    var i;
    var len = data.ef.length;
    for (i = 0; i < len; i += 1) {
      if (data.ef[i].ty === 5) {
        effectElements.push(createGroupInterface(data.ef[i], elements.effectElements[i], elements.effectElements[i].propertyGroup, elem));
      } else {
        effectElements.push(createValueInterface(elements.effectElements[i], data.ef[i].ty, elem, _propertyGroup));
      }
    }

    if (data.mn === 'ADBE Color Control') {
      Object.defineProperty(groupInterface, 'color', {
        get: function () {
          return effectElements[0]();
        },
      });
    }
    Object.defineProperties(groupInterface, {
      numProperties: {
        get: function () {
          return data.np;
        },
      },
      _name: { value: data.nm },
      propertyGroup: { value: _propertyGroup },
    });
    groupInterface.enabled = data.en !== 0;
    groupInterface.active = groupInterface.enabled;
    return groupInterface;
  }

  function createValueInterface(element, type, elem, propertyGroup) {
    var expressionProperty = ExpressionPropertyInterface(element.p);
    function interfaceFunction() {
      if (type === 10) {
        return elem.comp.compInterface(element.p.v);
      }
      return expressionProperty();
    }

    if (element.p.setGroupProperty) {
      element.p.setGroupProperty(PropertyInterface('', propertyGroup));
    }

    return interfaceFunction;
  }

  return ob;
}());

/* global createSizedArray */
/* exported MaskManagerInterface */

var MaskManagerInterface = (function () {
  function MaskInterface(mask, data) {
    this._mask = mask;
    this._data = data;
  }
  Object.defineProperty(MaskInterface.prototype, 'maskPath', {
    get: function () {
      if (this._mask.prop.k) {
        this._mask.prop.getValue();
      }
      return this._mask.prop;
    },
  });
  Object.defineProperty(MaskInterface.prototype, 'maskOpacity', {
    get: function () {
      if (this._mask.op.k) {
        this._mask.op.getValue();
      }
      return this._mask.op.v * 100;
    },
  });

  var MaskManager = function (maskManager) {
    var _masksInterfaces = createSizedArray(maskManager.viewData.length);
    var i;
    var len = maskManager.viewData.length;
    for (i = 0; i < len; i += 1) {
      _masksInterfaces[i] = new MaskInterface(maskManager.viewData[i], maskManager.masksProperties[i]);
    }

    var maskFunction = function (name) {
      i = 0;
      while (i < len) {
        if (maskManager.masksProperties[i].nm === name) {
          return _masksInterfaces[i];
        }
        i += 1;
      }
      return null;
    };
    return maskFunction;
  };
  return MaskManager;
}());

/* global createTypedArray */
/* exported ExpressionPropertyInterface */

var ExpressionPropertyInterface = (function () {
  var defaultUnidimensionalValue = { pv: 0, v: 0, mult: 1 };
  var defaultMultidimensionalValue = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };

  function completeProperty(expressionValue, property, type) {
    Object.defineProperty(expressionValue, 'velocity', {
      get: function () {
        return property.getVelocityAtTime(property.comp.currentFrame);
      },
    });
    expressionValue.numKeys = property.keyframes ? property.keyframes.length : 0;
    expressionValue.key = function (pos) {
      if (!expressionValue.numKeys) {
        return 0;
      }
      var value = '';
      if ('s' in property.keyframes[pos - 1]) {
        value = property.keyframes[pos - 1].s;
      } else if ('e' in property.keyframes[pos - 2]) {
        value = property.keyframes[pos - 2].e;
      } else {
        value = property.keyframes[pos - 2].s;
      }
      var valueProp = type === 'unidimensional' ? new Number(value) : Object.assign({}, value); // eslint-disable-line no-new-wrappers
      valueProp.time = property.keyframes[pos - 1].t / property.elem.comp.globalData.frameRate;
      valueProp.value = type === 'unidimensional' ? value[0] : value;
      return valueProp;
    };
    expressionValue.valueAtTime = property.getValueAtTime;
    expressionValue.speedAtTime = property.getSpeedAtTime;
    expressionValue.velocityAtTime = property.getVelocityAtTime;
    expressionValue.propertyGroup = property.propertyGroup;
  }

  function UnidimensionalPropertyInterface(property) {
    if (!property || !('pv' in property)) {
      property = defaultUnidimensionalValue;
    }
    var mult = 1 / property.mult;
    var val = property.pv * mult;
    var expressionValue = new Number(val); // eslint-disable-line no-new-wrappers
    expressionValue.value = val;
    completeProperty(expressionValue, property, 'unidimensional');

    return function () {
      if (property.k) {
        property.getValue();
      }
      val = property.v * mult;
      if (expressionValue.value !== val) {
        expressionValue = new Number(val); // eslint-disable-line no-new-wrappers
        expressionValue.value = val;
        completeProperty(expressionValue, property, 'unidimensional');
      }
      return expressionValue;
    };
  }

  function MultidimensionalPropertyInterface(property) {
    if (!property || !('pv' in property)) {
      property = defaultMultidimensionalValue;
    }
    var mult = 1 / property.mult;
    var len = (property.data && property.data.l) || property.pv.length;
    var expressionValue = createTypedArray('float32', len);
    var arrValue = createTypedArray('float32', len);
    expressionValue.value = arrValue;
    completeProperty(expressionValue, property, 'multidimensional');

    return function () {
      if (property.k) {
        property.getValue();
      }
      for (var i = 0; i < len; i += 1) {
        arrValue[i] = property.v[i] * mult;
        expressionValue[i] = arrValue[i];
      }
      return expressionValue;
    };
  }

  // TODO: try to avoid using this getter
  function defaultGetter() {
    return defaultUnidimensionalValue;
  }

  return function (property) {
    if (!property) {
      return defaultGetter;
    } if (property.propType === 'unidimensional') {
      return UnidimensionalPropertyInterface(property);
    }
    return MultidimensionalPropertyInterface(property);
  };
}());

/* global expressionHelpers, TextSelectorProp, ExpressionManager */
/* exported TextExpressionSelectorPropFactory */

var TextExpressionSelectorPropFactory = (function () { // eslint-disable-line no-unused-vars
  function getValueProxy(index, total) {
    this.textIndex = index + 1;
    this.textTotal = total;
    this.v = this.getValue() * this.mult;
    return this.v;
  }

  return function (elem, data) {
    this.pv = 1;
    this.comp = elem.comp;
    this.elem = elem;
    this.mult = 0.01;
    this.propType = 'textSelector';
    this.textTotal = data.totalChars;
    this.selectorValue = 100;
    this.lastValue = [1, 1, 1];
    this.k = true;
    this.x = true;
    this.getValue = ExpressionManager.initiateExpression.bind(this)(elem, data, this);
    this.getMult = getValueProxy;
    this.getVelocityAtTime = expressionHelpers.getVelocityAtTime;
    if (this.kf) {
      this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this);
    } else {
      this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this);
    }
    this.setGroupProperty = expressionHelpers.setGroupProperty;
  };
}());

var propertyGetTextProp = TextSelectorProp.getTextSelectorProp;
TextSelectorProp.getTextSelectorProp = function (elem, data, arr) {
  if (data.t === 1) {
    return new TextExpressionSelectorPropFactory(elem, data, arr); // eslint-disable-line no-undef
  }
  return propertyGetTextProp(elem, data, arr);
};

/* global PropertyFactory */
/* exported SliderEffect, AngleEffect, ColorEffect, PointEffect, LayerIndexEffect, MaskIndexEffect, CheckboxEffect, NoValueEffect */

function SliderEffect(data, elem, container) {
  this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
}
function AngleEffect(data, elem, container) {
  this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
}
function ColorEffect(data, elem, container) {
  this.p = PropertyFactory.getProp(elem, data.v, 1, 0, container);
}
function PointEffect(data, elem, container) {
  this.p = PropertyFactory.getProp(elem, data.v, 1, 0, container);
}
function LayerIndexEffect(data, elem, container) {
  this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
}
function MaskIndexEffect(data, elem, container) {
  this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
}
function CheckboxEffect(data, elem, container) {
  this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
}
function NoValueEffect() {
  this.p = {};
}

/* global extendPrototype, SliderEffect, AngleEffect, ColorEffect, PointEffect, CheckboxEffect, LayerIndexEffect,
MaskIndexEffect, NoValueEffect, DynamicPropertyContainer */

function EffectsManager(data, element) {
  var effects = data.ef || [];
  this.effectElements = [];
  var i;
  var len = effects.length;
  var effectItem;
  for (i = 0; i < len; i += 1) {
    effectItem = new GroupEffect(effects[i], element);
    this.effectElements.push(effectItem);
  }
}

function GroupEffect(data, element) {
  this.init(data, element);
}

extendPrototype([DynamicPropertyContainer], GroupEffect);

GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties;

GroupEffect.prototype.init = function (data, element) {
  this.data = data;
  this.effectElements = [];
  this.initDynamicPropertyContainer(element);
  var i;
  var len = this.data.ef.length;
  var eff;
  var effects = this.data.ef;
  for (i = 0; i < len; i += 1) {
    eff = null;
    switch (effects[i].ty) {
      case 0:
        eff = new SliderEffect(effects[i], element, this);
        break;
      case 1:
        eff = new AngleEffect(effects[i], element, this);
        break;
      case 2:
        eff = new ColorEffect(effects[i], element, this);
        break;
      case 3:
        eff = new PointEffect(effects[i], element, this);
        break;
      case 4:
      case 7:
        eff = new CheckboxEffect(effects[i], element, this);
        break;
      case 10:
        eff = new LayerIndexEffect(effects[i], element, this);
        break;
      case 11:
        eff = new MaskIndexEffect(effects[i], element, this);
        break;
      case 5:
        eff = new EffectsManager(effects[i], element, this);
        break;
        // case 6:
      default:
        eff = new NoValueEffect(effects[i], element, this);
        break;
    }
    if (eff) {
      this.effectElements.push(eff);
    }
  }
};


var lottie = {};

function setLocationHref(href) {
  locationHref = href;
}

function searchAnimations() {
  if (standalone === true) {
    animationManager.searchAnimations(animationData, standalone, renderer);
  } else {
    animationManager.searchAnimations();
  }
}

function setSubframeRendering(flag) {
  subframeEnabled = flag;
}

function setIDPrefix(prefix) {
  idPrefix = prefix;
}

function loadAnimation(params) {
  if (standalone === true) {
    params.animationData = JSON.parse(animationData);
  }
  return animationManager.loadAnimation(params);
}

function setQuality(value) {
  if (typeof value === 'string') {
    switch (value) {
      case 'high':
        defaultCurveSegments = 200;
        break;
      default:
      case 'medium':
        defaultCurveSegments = 50;
        break;
      case 'low':
        defaultCurveSegments = 10;
        break;
    }
  } else if (!isNaN(value) && value > 1) {
    defaultCurveSegments = value;
  }
  if (defaultCurveSegments >= 50) {
    roundValues(false);
  } else {
    roundValues(true);
  }
}

function inBrowser() {
  return typeof navigator !== 'undefined';
}

function installPlugin(type, plugin) {
  if (type === 'expressions') {
    expressionsPlugin = plugin;
  }
}

function getFactory(name) {
  switch (name) {
    case 'propertyFactory':
      return PropertyFactory;
    case 'shapePropertyFactory':
      return ShapePropertyFactory;
    case 'matrix':
      return Matrix;
    default:
      return null;
  }
}

lottie.play = animationManager.play;
lottie.pause = animationManager.pause;
lottie.setLocationHref = setLocationHref;
lottie.togglePause = animationManager.togglePause;
lottie.setSpeed = animationManager.setSpeed;
lottie.setDirection = animationManager.setDirection;
lottie.stop = animationManager.stop;
lottie.searchAnimations = searchAnimations;
lottie.registerAnimation = animationManager.registerAnimation;
lottie.loadAnimation = loadAnimation;
lottie.setSubframeRendering = setSubframeRendering;
lottie.resize = animationManager.resize;
// lottie.start = start;
lottie.goToAndStop = animationManager.goToAndStop;
lottie.destroy = animationManager.destroy;
lottie.setQuality = setQuality;
lottie.inBrowser = inBrowser;
lottie.installPlugin = installPlugin;
lottie.freeze = animationManager.freeze;
lottie.unfreeze = animationManager.unfreeze;
lottie.setVolume = animationManager.setVolume;
lottie.mute = animationManager.mute;
lottie.unmute = animationManager.unmute;
lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations;
lottie.useWebWorker = function (flag) {
  _useWebWorker = flag;
};
lottie.setIDPrefix = setIDPrefix;
lottie.__getFactory = getFactory;
lottie.version = '5.8.1';

function checkReady() {
  if (document.readyState === 'complete') {
    clearInterval(readyStateCheckInterval);
    searchAnimations();
  }
}

function getQueryVariable(variable) {
  var vars = queryString.split('&');
  for (var i = 0; i < vars.length; i += 1) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) { // eslint-disable-line eqeqeq
      return decodeURIComponent(pair[1]);
    }
  }
  return null;
}
var standalone = '__[STANDALONE]__';
var animationData = '__[ANIMATIONDATA]__';
var renderer = '';
var queryString;
if (standalone) {
  var scripts = document.getElementsByTagName('script');
  var index = scripts.length - 1;
  var myScript = scripts[index] || {
    src: '',
  };
  queryString = myScript.src.replace(/^[^\?]+\??/, ''); // eslint-disable-line no-useless-escape
  renderer = getQueryVariable('renderer');
}
var readyStateCheckInterval = setInterval(checkReady, 100);

return lottie;
}));

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/lottie-vuejs/src/LottieAnimation.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/lottie-vuejs/src/LottieAnimation.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/lottie-vuejs/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    path: {
      required: true
    },
    speed: {
      type: Number,
      required: false,
      default: 1
    },
    width: {
      type: Number,
      required: false,
      default: -1
    },
    height: {
      type: Number,
      required: false,
      default: -1
    },
    loop: {
      type:Boolean,
      required: false,
      default: true
    },
    autoPlay: {
      type:Boolean,
      required: false,
      default: true
    },
    loopDelayMin: {
      type: Number,
      required: false,
      default: 0
    },
    loopDelayMax: {
      type: Number,
      required: false,
      default: 0
    },
  },
  data: () => ({
    name: 'lottie-animation',
    rendererSettings: {
      scaleMode: "centerCrop",
      clearCanvas: true,
      progressiveLoad: false,
      hideOnTransparent: true
    },
    anim: null,
    style: null
  }),
  mounted() {
    this.init();
  },
  methods: {
    async loadJsonData(path) {
      return await axios__WEBPACK_IMPORTED_MODULE_1___default().get("/" + path).then(response => {
        return response.data;
      });
    },
    async init() {
      this.style = {
        width: (this.width != -1 )? `${this.width}px` : '100%',
        height: (this.height != -1 )? `${this.height}px` : '100%',
        overflow: "hidden",
        margin: "0 auto"
      };

      let jsonData = await this.loadJsonData(this.path);

      if(this.anim) {
        this.anim.destroy(); // Releases resources. The DOM element will be emptied.
      }

      this.anim = lottie_web__WEBPACK_IMPORTED_MODULE_0___default().loadAnimation({
        container: this.$refs.lavContainer,
        renderer: "svg",
        loop: this.loop,
        autoplay: this.autoPlay,
        animationData: jsonData,
        rendererSettings: this.rendererSettings
      });

      this.$emit("AnimControl", this.anim);

      this.anim.setSpeed(this.speed);
      if (this.loopDelayMin > 0) {
        this.anim.loop = false;
        this.anim.autoplay = false;
        this.executeLoop();
      }
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    },
    executeLoop() {
      this.anim.play();
      setTimeout(() => {
        this.anim.stop();
        this.executeLoop();
      }, this.getRandomInt(this.loopDelayMin, this.loopDelayMax == 0? this.loopDelayMin : this.loopDelayMax));
    },


  },
  watch: {
    path: function(newVal, oldVal) {
      this.init();
    }
  }
});


/***/ }),

/***/ "./resources/js/Auth/Authentication.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Auth/Authentication.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authentication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Authentication.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Auth/Authentication.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authentication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/lottie-vuejs/src/LottieAnimation.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/src/LottieAnimation.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_LottieAnimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/index.js??vue-loader-options!./LottieAnimation.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/lottie-vuejs/src/LottieAnimation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_LottieAnimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/lottie-vuejs/src/LottieAnimation.vue?vue&type=template&id=1346ea1a&":
/*!******************************************************************************************!*\
  !*** ./node_modules/lottie-vuejs/src/LottieAnimation.vue?vue&type=template&id=1346ea1a& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_LottieAnimation_vue_vue_type_template_id_1346ea1a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_LottieAnimation_vue_vue_type_template_id_1346ea1a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_LottieAnimation_vue_vue_type_template_id_1346ea1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../vue-loader/lib/index.js??vue-loader-options!./LottieAnimation.vue?vue&type=template&id=1346ea1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/lottie-vuejs/src/LottieAnimation.vue?vue&type=template&id=1346ea1a&");


/***/ }),

/***/ "./resources/js/Auth/Authentication.vue?vue&type=template&id=9b30059e&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Auth/Authentication.vue?vue&type=template&id=9b30059e&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Authentication_vue_vue_type_template_id_9b30059e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Authentication_vue_vue_type_template_id_9b30059e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Authentication_vue_vue_type_template_id_9b30059e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Authentication.vue?vue&type=template&id=9b30059e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Auth/Authentication.vue?vue&type=template&id=9b30059e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/lottie-vuejs/src/LottieAnimation.vue?vue&type=template&id=1346ea1a&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/lottie-vuejs/src/LottieAnimation.vue?vue&type=template&id=1346ea1a& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.style
    ? _c("div", { ref: "lavContainer", style: _vm.style })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Auth/Authentication.vue?vue&type=template&id=9b30059e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Auth/Authentication.vue?vue&type=template&id=9b30059e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-row",
        { attrs: { "no-gutters": "", justify: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "6" } },
            [
              _c(
                "v-card",
                { staticClass: "rounded-lg mt-16" },
                [
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-row",
                        { attrs: { "no-gutters": "" } },
                        [
                          _c(
                            "v-col",
                            [
                              _c("lottie-animation", {
                                attrs: { path: "./assets/auth.json" },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            [
                              _c("v-card-title", { staticClass: "ml-0 pl-0" }, [
                                _vm.is_login
                                  ? _c("span", { staticClass: "headline" }, [
                                      _vm._v("Sign In"),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                !_vm.is_login
                                  ? _c("span", { staticClass: "headline" }, [
                                      _vm._v("Sign Up"),
                                    ])
                                  : _vm._e(),
                              ]),
                              _vm._v(" "),
                              _vm.is_login
                                ? _c(
                                    "v-form",
                                    {
                                      ref: "form",
                                      attrs: { "lazy-validation": "" },
                                      model: {
                                        value: _vm.valid,
                                        callback: function ($$v) {
                                          _vm.valid = $$v
                                        },
                                        expression: "valid",
                                      },
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          outlined: "",
                                          rules: _vm.emailRules,
                                          label: "Email",
                                          type: "email",
                                          autofocus: "",
                                          required: "",
                                        },
                                        model: {
                                          value: _vm.form.email,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.form, "email", $$v)
                                          },
                                          expression: "form.email",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: {
                                          outlined: "",
                                          rules: _vm.passwordRules,
                                          label: "Password",
                                          type: "password",
                                          required: "",
                                        },
                                        model: {
                                          value: _vm.form.password,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.form, "password", $$v)
                                          },
                                          expression: "form.password",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            loading: _vm.loading,
                                            color: "primary",
                                            dark: "",
                                          },
                                          on: { click: _vm.Login },
                                        },
                                        [
                                          _vm._v(
                                            "\n                                  Sign In\n                              "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { text: "" },
                                          on: {
                                            click: function ($event) {
                                              _vm.is_login = false
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                                  Sign Up\n                              "
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              !_vm.is_login
                                ? _c(
                                    "v-form",
                                    {
                                      ref: "form",
                                      attrs: { "lazy-validation": "" },
                                      model: {
                                        value: _vm.valid,
                                        callback: function ($$v) {
                                          _vm.valid = $$v
                                        },
                                        expression: "valid",
                                      },
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          outlined: "",
                                          rules: _vm.nameRules,
                                          label: "Name",
                                          type: "text",
                                          autofocus: "",
                                          required: "",
                                        },
                                        model: {
                                          value: _vm.form.name,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.form, "name", $$v)
                                          },
                                          expression: "form.name",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: {
                                          outlined: "",
                                          rules: _vm.emailRules,
                                          label: "Email",
                                          type: "email",
                                          autofocus: "",
                                          required: "",
                                        },
                                        model: {
                                          value: _vm.form.email,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.form, "email", $$v)
                                          },
                                          expression: "form.email",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: {
                                          outlined: "",
                                          rules: _vm.passwordRules,
                                          label: "Password",
                                          type: "password",
                                          required: "",
                                        },
                                        model: {
                                          value: _vm.form.password,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.form, "password", $$v)
                                          },
                                          expression: "form.password",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: {
                                          outlined: "",
                                          rules: _vm.passwordRules,
                                          label: "Confirm Password",
                                          type: "password",
                                          required: "",
                                        },
                                        model: {
                                          value: _vm.form.password_confirmation,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "password_confirmation",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "form.password_confirmation",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          outlined: "",
                                          items: _vm.AccountTypes,
                                          "item-text": "title",
                                          "item-value": "value",
                                          rules: _vm.roleRules,
                                          label: "Role",
                                          required: "",
                                        },
                                        model: {
                                          value: _vm.form.role,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.form, "role", $$v)
                                          },
                                          expression: "form.role",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            loading: _vm.loading,
                                            color: "primary",
                                            dark: "",
                                          },
                                          on: { click: _vm.Register },
                                        },
                                        [
                                          _vm._v(
                                            "\n                                  Sign Up\n                              "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { text: "" },
                                          on: {
                                            click: function ($event) {
                                              _vm.is_login = true
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                                  Sign In\n                              "
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify/src/components/VCard/VCard.sass":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VCard/VCard.sass ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!../../../../sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./VCard.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VCard/VCard.sass");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("227bf0cb", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vuetify/src/components/VCheckbox/VSimpleCheckbox.sass":
/*!****************************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VCheckbox/VSimpleCheckbox.sass ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!../../../../sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./VSimpleCheckbox.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VCheckbox/VSimpleCheckbox.sass");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("755c7298", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vuetify/src/components/VChip/VChip.sass":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VChip/VChip.sass ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!../../../../sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./VChip.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VChip/VChip.sass");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("a5cd10e2", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vuetify/src/components/VCounter/VCounter.sass":
/*!********************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VCounter/VCounter.sass ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!../../../../sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./VCounter.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VCounter/VCounter.sass");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("17f73815", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vuetify/src/components/VGrid/_grid.sass":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VGrid/_grid.sass ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!../../../../sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./_grid.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VGrid/_grid.sass");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("07e55435", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vuetify/src/components/VInput/VInput.sass":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VInput/VInput.sass ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!../../../../sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./VInput.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VInput/VInput.sass");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("ee4eb43a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vuetify/src/components/VLabel/VLabel.sass":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VLabel/VLabel.sass ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!../../../../sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./VLabel.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VLabel/VLabel.sass");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("4b0069cd", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vuetify/src/components/VMenu/VMenu.sass":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VMenu/VMenu.sass ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!../../../../sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./VMenu.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VMenu/VMenu.sass");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("9a028308", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vuetify/src/components/VMessages/VMessages.sass":
/*!**********************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VMessages/VMessages.sass ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!../../../../sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./VMessages.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VMessages/VMessages.sass");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("1057ee0f", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vuetify/src/components/VProgressLinear/VProgressLinear.sass":
/*!**********************************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VProgressLinear/VProgressLinear.sass ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!../../../../sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./VProgressLinear.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VProgressLinear/VProgressLinear.sass");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("e1a0e52e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vuetify/src/components/VSelect/VSelect.sass":
/*!******************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VSelect/VSelect.sass ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!../../../../sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./VSelect.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VSelect/VSelect.sass");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("bb9c96c2", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vuetify/src/components/VSubheader/VSubheader.sass":
/*!************************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VSubheader/VSubheader.sass ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!../../../../sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./VSubheader.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VSubheader/VSubheader.sass");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("052416f4", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vuetify/src/components/VTextField/VTextField.sass":
/*!************************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VTextField/VTextField.sass ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!../../../../sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./VTextField.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/vuetify/src/components/VTextField/VTextField.sass");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("4a204386", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/lottie-vuejs/src/LottieAnimation.vue":
/*!***********************************************************!*\
  !*** ./node_modules/lottie-vuejs/src/LottieAnimation.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LottieAnimation_vue_vue_type_template_id_1346ea1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LottieAnimation.vue?vue&type=template&id=1346ea1a& */ "./node_modules/lottie-vuejs/src/LottieAnimation.vue?vue&type=template&id=1346ea1a&");
/* harmony import */ var _LottieAnimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LottieAnimation.vue?vue&type=script&lang=js& */ "./node_modules/lottie-vuejs/src/LottieAnimation.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LottieAnimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LottieAnimation_vue_vue_type_template_id_1346ea1a___WEBPACK_IMPORTED_MODULE_0__.render,
  _LottieAnimation_vue_vue_type_template_id_1346ea1a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/lottie-vuejs/src/LottieAnimation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Auth/Authentication.vue":
/*!**********************************************!*\
  !*** ./resources/js/Auth/Authentication.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Authentication_vue_vue_type_template_id_9b30059e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Authentication.vue?vue&type=template&id=9b30059e&scoped=true& */ "./resources/js/Auth/Authentication.vue?vue&type=template&id=9b30059e&scoped=true&");
/* harmony import */ var _Authentication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Authentication.vue?vue&type=script&lang=js& */ "./resources/js/Auth/Authentication.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/VSelect.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Authentication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Authentication_vue_vue_type_template_id_9b30059e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Authentication_vue_vue_type_template_id_9b30059e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9b30059e",
  null
  
)

/* vuetify-loader */
;










_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["default"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["default"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText,VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardTitle,VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["default"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__["default"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["default"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_11__["default"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Auth/Authentication.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VCard/VCard.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VCard/VCard.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VCard/VCard.sass */ "./node_modules/vuetify/src/components/VCard/VCard.sass");
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../VSheet */ "./node_modules/vuetify/lib/components/VSheet/index.js");
/* harmony import */ var _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/loadable */ "./node_modules/vuetify/lib/mixins/loadable/index.js");
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/routable */ "./node_modules/vuetify/lib/mixins/routable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
// Styles
 // Extensions

 // Mixins


 // Helpers


/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(_mixins_loadable__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_routable__WEBPACK_IMPORTED_MODULE_3__["default"], _VSheet__WEBPACK_IMPORTED_MODULE_4__["default"]).extend({
  name: 'v-card',
  props: {
    flat: Boolean,
    hover: Boolean,
    img: String,
    link: Boolean,
    loaderHeight: {
      type: [Number, String],
      default: 4
    },
    raised: Boolean
  },
  computed: {
    classes() {
      return {
        'v-card': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_3__["default"].options.computed.classes.call(this),
        'v-card--flat': this.flat,
        'v-card--hover': this.hover,
        'v-card--link': this.isClickable,
        'v-card--loading': this.loading,
        'v-card--disabled': this.disabled,
        'v-card--raised': this.raised,
        ..._VSheet__WEBPACK_IMPORTED_MODULE_4__["default"].options.computed.classes.call(this)
      };
    },

    styles() {
      const style = { ..._VSheet__WEBPACK_IMPORTED_MODULE_4__["default"].options.computed.styles.call(this)
      };

      if (this.img) {
        style.background = `url("${this.img}") center center / cover no-repeat`;
      }

      return style;
    }

  },
  methods: {
    genProgress() {
      const render = _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__["default"].options.methods.genProgress.call(this);
      if (!render) return null;
      return this.$createElement('div', {
        staticClass: 'v-card__progress',
        key: 'progress'
      }, [render]);
    }

  },

  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    data.style = this.styles;

    if (this.isClickable) {
      data.attrs = data.attrs || {};
      data.attrs.tabindex = 0;
    }

    return h(tag, this.setBackgroundColor(this.color, data), [this.genProgress(), this.$slots.default]);
  }

}));
//# sourceMappingURL=VCard.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VCard/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VCard/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VCard": () => (/* reexport safe */ _VCard__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "VCardActions": () => (/* binding */ VCardActions),
/* harmony export */   "VCardSubtitle": () => (/* binding */ VCardSubtitle),
/* harmony export */   "VCardText": () => (/* binding */ VCardText),
/* harmony export */   "VCardTitle": () => (/* binding */ VCardTitle),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");


const VCardActions = (0,_util_helpers__WEBPACK_IMPORTED_MODULE_0__.createSimpleFunctional)('v-card__actions');
const VCardSubtitle = (0,_util_helpers__WEBPACK_IMPORTED_MODULE_0__.createSimpleFunctional)('v-card__subtitle');
const VCardText = (0,_util_helpers__WEBPACK_IMPORTED_MODULE_0__.createSimpleFunctional)('v-card__text');
const VCardTitle = (0,_util_helpers__WEBPACK_IMPORTED_MODULE_0__.createSimpleFunctional)('v-card__title');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  $_vuetify_subcomponents: {
    VCard: _VCard__WEBPACK_IMPORTED_MODULE_1__["default"],
    VCardActions,
    VCardSubtitle,
    VCardText,
    VCardTitle
  }
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VCheckbox/VSimpleCheckbox.js":
/*!**************************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VCheckbox/VSimpleCheckbox.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_VCheckbox_VSimpleCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VCheckbox/VSimpleCheckbox.sass */ "./node_modules/vuetify/src/components/VCheckbox/VSimpleCheckbox.sass");
/* harmony import */ var _src_components_VCheckbox_VSimpleCheckbox_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCheckbox_VSimpleCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _directives_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/ripple */ "./node_modules/vuetify/lib/directives/ripple/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/colorable */ "./node_modules/vuetify/lib/mixins/colorable/index.js");
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/mergeData */ "./node_modules/vuetify/lib/util/mergeData.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");



 // Mixins


 // Utilities



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_1__["default"].extend({
  name: 'v-simple-checkbox',
  functional: true,
  directives: {
    ripple: _directives_ripple__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: { ..._mixins_colorable__WEBPACK_IMPORTED_MODULE_3__["default"].options.props,
    ..._mixins_themeable__WEBPACK_IMPORTED_MODULE_4__["default"].options.props,
    disabled: Boolean,
    ripple: {
      type: Boolean,
      default: true
    },
    value: Boolean,
    indeterminate: Boolean,
    indeterminateIcon: {
      type: String,
      default: '$checkboxIndeterminate'
    },
    onIcon: {
      type: String,
      default: '$checkboxOn'
    },
    offIcon: {
      type: String,
      default: '$checkboxOff'
    }
  },

  render(h, {
    props,
    data,
    listeners
  }) {
    const children = [];
    let icon = props.offIcon;
    if (props.indeterminate) icon = props.indeterminateIcon;else if (props.value) icon = props.onIcon;
    children.push(h(_VIcon__WEBPACK_IMPORTED_MODULE_5__["default"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_3__["default"].options.methods.setTextColor(props.value && props.color, {
      props: {
        disabled: props.disabled,
        dark: props.dark,
        light: props.light
      }
    }), icon));

    if (props.ripple && !props.disabled) {
      const ripple = h('div', _mixins_colorable__WEBPACK_IMPORTED_MODULE_3__["default"].options.methods.setTextColor(props.color, {
        staticClass: 'v-input--selection-controls__ripple',
        directives: [{
          name: 'ripple',
          value: {
            center: true
          }
        }]
      }));
      children.push(ripple);
    }

    return h('div', (0,_util_mergeData__WEBPACK_IMPORTED_MODULE_6__["default"])(data, {
      class: {
        'v-simple-checkbox': true,
        'v-simple-checkbox--disabled': props.disabled
      },
      on: {
        click: e => {
          e.stopPropagation();

          if (data.on && data.on.input && !props.disabled) {
            (0,_util_helpers__WEBPACK_IMPORTED_MODULE_7__.wrapInArray)(data.on.input).forEach(f => f(!props.value));
          }
        }
      }
    }), [h('div', {
      staticClass: 'v-input--selection-controls__input'
    }, children)]);
  }

}));
//# sourceMappingURL=VSimpleCheckbox.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VChip/VChip.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VChip/VChip.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VChip/VChip.sass */ "./node_modules/vuetify/src/components/VChip/VChip.sass");
/* harmony import */ var _src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../transitions */ "./node_modules/vuetify/lib/components/transitions/index.js");
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/colorable */ "./node_modules/vuetify/lib/mixins/colorable/index.js");
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/groupable */ "./node_modules/vuetify/lib/mixins/groupable/index.js");
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/toggleable */ "./node_modules/vuetify/lib/mixins/toggleable/index.js");
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/routable */ "./node_modules/vuetify/lib/mixins/routable/index.js");
/* harmony import */ var _mixins_sizeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/sizeable */ "./node_modules/vuetify/lib/mixins/sizeable/index.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
// Styles

 // Components


 // Mixins






 // Utilities


/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_sizeable__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_routable__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_mixins_groupable__WEBPACK_IMPORTED_MODULE_6__.factory)('chipGroup'), (0,_mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__.factory)('inputValue')).extend({
  name: 'v-chip',
  props: {
    active: {
      type: Boolean,
      default: true
    },
    activeClass: {
      type: String,

      default() {
        if (!this.chipGroup) return '';
        return this.chipGroup.activeClass;
      }

    },
    close: Boolean,
    closeIcon: {
      type: String,
      default: '$delete'
    },
    closeLabel: {
      type: String,
      default: '$vuetify.close'
    },
    disabled: Boolean,
    draggable: Boolean,
    filter: Boolean,
    filterIcon: {
      type: String,
      default: '$complete'
    },
    label: Boolean,
    link: Boolean,
    outlined: Boolean,
    pill: Boolean,
    tag: {
      type: String,
      default: 'span'
    },
    textColor: String,
    value: null
  },
  data: () => ({
    proxyClass: 'v-chip--active'
  }),
  computed: {
    classes() {
      return {
        'v-chip': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_4__["default"].options.computed.classes.call(this),
        'v-chip--clickable': this.isClickable,
        'v-chip--disabled': this.disabled,
        'v-chip--draggable': this.draggable,
        'v-chip--label': this.label,
        'v-chip--link': this.isLink,
        'v-chip--no-color': !this.color,
        'v-chip--outlined': this.outlined,
        'v-chip--pill': this.pill,
        'v-chip--removable': this.hasClose,
        ...this.themeClasses,
        ...this.sizeableClasses,
        ...this.groupClasses
      };
    },

    hasClose() {
      return Boolean(this.close);
    },

    isClickable() {
      return Boolean(_mixins_routable__WEBPACK_IMPORTED_MODULE_4__["default"].options.computed.isClickable.call(this) || this.chipGroup);
    }

  },

  created() {
    const breakingProps = [['outline', 'outlined'], ['selected', 'input-value'], ['value', 'active'], ['@input', '@active.sync']];
    /* istanbul ignore next */

    breakingProps.forEach(([original, replacement]) => {
      if (this.$attrs.hasOwnProperty(original)) (0,_util_console__WEBPACK_IMPORTED_MODULE_8__.breaking)(original, replacement, this);
    });
  },

  methods: {
    click(e) {
      this.$emit('click', e);
      this.chipGroup && this.toggle();
    },

    genFilter() {
      const children = [];

      if (this.isActive) {
        children.push(this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
          staticClass: 'v-chip__filter',
          props: {
            left: true
          }
        }, this.filterIcon));
      }

      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_10__.VExpandXTransition, children);
    },

    genClose() {
      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
        staticClass: 'v-chip__close',
        props: {
          right: true,
          size: 18
        },
        attrs: {
          'aria-label': this.$vuetify.lang.t(this.closeLabel)
        },
        on: {
          click: e => {
            e.stopPropagation();
            e.preventDefault();
            this.$emit('click:close');
            this.$emit('update:active', false);
          }
        }
      }, this.closeIcon);
    },

    genContent() {
      return this.$createElement('span', {
        staticClass: 'v-chip__content'
      }, [this.filter && this.genFilter(), this.$slots.default, this.hasClose && this.genClose()]);
    }

  },

  render(h) {
    const children = [this.genContent()];
    let {
      tag,
      data
    } = this.generateRouteLink();
    data.attrs = { ...data.attrs,
      draggable: this.draggable ? 'true' : undefined,
      tabindex: this.chipGroup && !this.disabled ? 0 : data.attrs.tabindex
    };
    data.directives.push({
      name: 'show',
      value: this.active
    });
    data = this.setBackgroundColor(this.color, data);
    const color = this.textColor || this.outlined && this.color;
    return h(tag, this.setTextColor(color, data), children);
  }

}));
//# sourceMappingURL=VChip.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VChip/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VChip/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VChip": () => (/* reexport safe */ _VChip__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VChip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VChip */ "./node_modules/vuetify/lib/components/VChip/VChip.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_VChip__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VCounter/VCounter.js":
/*!******************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VCounter/VCounter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_VCounter_VCounter_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VCounter/VCounter.sass */ "./node_modules/vuetify/src/components/VCounter/VCounter.sass");
/* harmony import */ var _src_components_VCounter_VCounter_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCounter_VCounter_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
// Styles
 // Mixins



/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(_mixins_themeable__WEBPACK_IMPORTED_MODULE_2__["default"]).extend({
  name: 'v-counter',
  functional: true,
  props: {
    value: {
      type: [Number, String],
      default: ''
    },
    max: [Number, String]
  },

  render(h, ctx) {
    const {
      props
    } = ctx;
    const max = parseInt(props.max, 10);
    const value = parseInt(props.value, 10);
    const content = max ? `${value} / ${max}` : String(props.value);
    const isGreater = max && value > max;
    return h('div', {
      staticClass: 'v-counter',
      class: {
        'error--text': isGreater,
        ...(0,_mixins_themeable__WEBPACK_IMPORTED_MODULE_2__.functionalThemeClasses)(ctx)
      }
    }, content);
  }

}));
//# sourceMappingURL=VCounter.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VCounter/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VCounter/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VCounter": () => (/* reexport safe */ _VCounter__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VCounter */ "./node_modules/vuetify/lib/components/VCounter/VCounter.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_VCounter__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VDivider/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VDivider/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VDivider": () => (/* reexport safe */ _VDivider__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VDivider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VDivider */ "./node_modules/vuetify/lib/components/VDivider/VDivider.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_VDivider__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VForm/VForm.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VForm/VForm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/binds-attrs */ "./node_modules/vuetify/lib/mixins/binds-attrs/index.js");
/* harmony import */ var _mixins_registrable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/registrable */ "./node_modules/vuetify/lib/mixins/registrable/index.js");
// Mixins



/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_util_mixins__WEBPACK_IMPORTED_MODULE_0__["default"])(_mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__["default"], (0,_mixins_registrable__WEBPACK_IMPORTED_MODULE_2__.provide)('form')
/* @vue/component */
).extend({
  name: 'v-form',

  provide() {
    return {
      form: this
    };
  },

  inheritAttrs: false,
  props: {
    disabled: Boolean,
    lazyValidation: Boolean,
    readonly: Boolean,
    value: Boolean
  },
  data: () => ({
    inputs: [],
    watchers: [],
    errorBag: {}
  }),
  watch: {
    errorBag: {
      handler(val) {
        const errors = Object.values(val).includes(true);
        this.$emit('input', !errors);
      },

      deep: true,
      immediate: true
    }
  },
  methods: {
    watchInput(input) {
      const watcher = input => {
        return input.$watch('hasError', val => {
          this.$set(this.errorBag, input._uid, val);
        }, {
          immediate: true
        });
      };

      const watchers = {
        _uid: input._uid,
        valid: () => {},
        shouldValidate: () => {}
      };

      if (this.lazyValidation) {
        // Only start watching inputs if we need to
        watchers.shouldValidate = input.$watch('shouldValidate', val => {
          if (!val) return; // Only watch if we're not already doing it

          if (this.errorBag.hasOwnProperty(input._uid)) return;
          watchers.valid = watcher(input);
        });
      } else {
        watchers.valid = watcher(input);
      }

      return watchers;
    },

    /** @public */
    validate() {
      return this.inputs.filter(input => !input.validate(true)).length === 0;
    },

    /** @public */
    reset() {
      this.inputs.forEach(input => input.reset());
      this.resetErrorBag();
    },

    resetErrorBag() {
      if (this.lazyValidation) {
        // Account for timeout in validatable
        setTimeout(() => {
          this.errorBag = {};
        }, 0);
      }
    },

    /** @public */
    resetValidation() {
      this.inputs.forEach(input => input.resetValidation());
      this.resetErrorBag();
    },

    register(input) {
      this.inputs.push(input);
      this.watchers.push(this.watchInput(input));
    },

    unregister(input) {
      const found = this.inputs.find(i => i._uid === input._uid);
      if (!found) return;
      const unwatch = this.watchers.find(i => i._uid === found._uid);

      if (unwatch) {
        unwatch.valid();
        unwatch.shouldValidate();
      }

      this.watchers = this.watchers.filter(i => i._uid !== found._uid);
      this.inputs = this.inputs.filter(i => i._uid !== found._uid);
      this.$delete(this.errorBag, found._uid);
    }

  },

  render(h) {
    return h('form', {
      staticClass: 'v-form',
      attrs: {
        novalidate: true,
        ...this.attrs$
      },
      on: {
        submit: e => this.$emit('submit', e)
      }
    }, this.$slots.default);
  }

}));
//# sourceMappingURL=VForm.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VGrid/VCol.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VGrid/VCol.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VGrid/VGrid.sass */ "./node_modules/vuetify/src/components/VGrid/VGrid.sass");
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/mergeData */ "./node_modules/vuetify/lib/util/mergeData.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");



 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];

const breakpointProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[val] = {
      type: [Boolean, String, Number],
      default: false
    };
    return props;
  }, {});
})();

const offsetProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['offset' + (0,_util_helpers__WEBPACK_IMPORTED_MODULE_1__.upperFirst)(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();

const orderProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['order' + (0,_util_helpers__WEBPACK_IMPORTED_MODULE_1__.upperFirst)(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();

const propMap = {
  col: Object.keys(breakpointProps),
  offset: Object.keys(offsetProps),
  order: Object.keys(orderProps)
};

function breakpointClass(type, prop, val) {
  let className = type;

  if (val == null || val === false) {
    return undefined;
  }

  if (prop) {
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // Handling the boolean style prop when accepting [Boolean, String, Number]
  // means Vue will not convert <v-col sm></v-col> to sm: true for us.
  // Since the default is false, an empty string indicates the prop's presence.


  if (type === 'col' && (val === '' || val === true)) {
    // .col-md
    return className.toLowerCase();
  } // .order-md-6


  className += `-${val}`;
  return className.toLowerCase();
}

const cache = new Map();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_2__["default"].extend({
  name: 'v-col',
  functional: true,
  props: {
    cols: {
      type: [Boolean, String, Number],
      default: false
    },
    ...breakpointProps,
    offset: {
      type: [String, Number],
      default: null
    },
    ...offsetProps,
    order: {
      type: [String, Number],
      default: null
    },
    ...orderProps,
    alignSelf: {
      type: String,
      default: null,
      validator: str => ['auto', 'start', 'end', 'center', 'baseline', 'stretch'].includes(str)
    },
    tag: {
      type: String,
      default: 'div'
    }
  },

  render(h, {
    props,
    data,
    children,
    parent
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';

    for (const prop in props) {
      cacheKey += String(props[prop]);
    }

    let classList = cache.get(cacheKey);

    if (!classList) {
      classList = []; // Loop through `col`, `offset`, `order` breakpoint props

      let type;

      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }

      const hasColClasses = classList.some(className => className.startsWith('col-'));
      classList.push({
        // Default to .col if no other col-{bp}-* classes generated nor `cols` specified.
        col: !hasColClasses || !props.cols,
        [`col-${props.cols}`]: props.cols,
        [`offset-${props.offset}`]: props.offset,
        [`order-${props.order}`]: props.order,
        [`align-self-${props.alignSelf}`]: props.alignSelf
      });
      cache.set(cacheKey, classList);
    }

    return h(props.tag, (0,_util_mergeData__WEBPACK_IMPORTED_MODULE_3__["default"])(data, {
      class: classList
    }), children);
  }

}));
//# sourceMappingURL=VCol.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VGrid/VContainer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VGrid/VContainer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VGrid/_grid.sass */ "./node_modules/vuetify/src/components/VGrid/_grid.sass");
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/components/VGrid/VGrid.sass */ "./node_modules/vuetify/src/components/VGrid/VGrid.sass");
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid */ "./node_modules/vuetify/lib/components/VGrid/grid.js");
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/mergeData */ "./node_modules/vuetify/lib/util/mergeData.js");




/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grid__WEBPACK_IMPORTED_MODULE_2__["default"])('container').extend({
  name: 'v-container',
  functional: true,
  props: {
    id: String,
    tag: {
      type: String,
      default: 'div'
    },
    fluid: {
      type: Boolean,
      default: false
    }
  },

  render(h, {
    props,
    data,
    children
  }) {
    let classes;
    const {
      attrs
    } = data;

    if (attrs) {
      // reset attrs to extract utility clases like pa-3
      data.attrs = {};
      classes = Object.keys(attrs).filter(key => {
        // TODO: Remove once resolved
        // https://github.com/vuejs/vue/issues/7841
        if (key === 'slot') return false;
        const value = attrs[key]; // add back data attributes like data-test="foo" but do not
        // add them as classes

        if (key.startsWith('data-')) {
          data.attrs[key] = value;
          return false;
        }

        return value || typeof value === 'string';
      });
    }

    if (props.id) {
      data.domProps = data.domProps || {};
      data.domProps.id = props.id;
    }

    return h(props.tag, (0,_util_mergeData__WEBPACK_IMPORTED_MODULE_3__["default"])(data, {
      staticClass: 'container',
      class: Array({
        'container--fluid': props.fluid
      }).concat(classes || [])
    }), children);
  }

}));
//# sourceMappingURL=VContainer.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VGrid/grid.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VGrid/grid.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VGrid)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
// Types

function VGrid(name) {
  /* @vue/component */
  return vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
    name: `v-${name}`,
    functional: true,
    props: {
      id: String,
      tag: {
        type: String,
        default: 'div'
      }
    },

    render(h, {
      props,
      data,
      children
    }) {
      data.staticClass = `${name} ${data.staticClass || ''}`.trim();
      const {
        attrs
      } = data;

      if (attrs) {
        // reset attrs to extract utility clases like pa-3
        data.attrs = {};
        const classes = Object.keys(attrs).filter(key => {
          // TODO: Remove once resolved
          // https://github.com/vuejs/vue/issues/7841
          if (key === 'slot') return false;
          const value = attrs[key]; // add back data attributes like data-test="foo" but do not
          // add them as classes

          if (key.startsWith('data-')) {
            data.attrs[key] = value;
            return false;
          }

          return value || typeof value === 'string';
        });
        if (classes.length) data.staticClass += ` ${classes.join(' ')}`;
      }

      if (props.id) {
        data.domProps = data.domProps || {};
        data.domProps.id = props.id;
      }

      return h(props.tag, data, children);
    }

  });
}
//# sourceMappingURL=grid.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VInput/VInput.js":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VInput/VInput.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_VInput_VInput_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VInput/VInput.sass */ "./node_modules/vuetify/src/components/VInput/VInput.sass");
/* harmony import */ var _src_components_VInput_VInput_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VInput_VInput_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var _VLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../VLabel */ "./node_modules/vuetify/lib/components/VLabel/index.js");
/* harmony import */ var _VMessages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../VMessages */ "./node_modules/vuetify/lib/components/VMessages/index.js");
/* harmony import */ var _mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/binds-attrs */ "./node_modules/vuetify/lib/mixins/binds-attrs/index.js");
/* harmony import */ var _mixins_validatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/validatable */ "./node_modules/vuetify/lib/mixins/validatable/index.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/mergeData */ "./node_modules/vuetify/lib/util/mergeData.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
// Styles
 // Components



 // Mixins


 // Utilities




const baseMixins = (0,_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(_mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_validatable__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMixins.extend().extend({
  name: 'v-input',
  inheritAttrs: false,
  props: {
    appendIcon: String,
    backgroundColor: {
      type: String,
      default: ''
    },
    dense: Boolean,
    height: [Number, String],
    hideDetails: [Boolean, String],
    hideSpinButtons: Boolean,
    hint: String,
    id: String,
    label: String,
    loading: Boolean,
    persistentHint: Boolean,
    prependIcon: String,
    value: null
  },

  data() {
    return {
      lazyValue: this.value,
      hasMouseDown: false
    };
  },

  computed: {
    classes() {
      return {
        'v-input--has-state': this.hasState,
        'v-input--hide-details': !this.showDetails,
        'v-input--is-label-active': this.isLabelActive,
        'v-input--is-dirty': this.isDirty,
        'v-input--is-disabled': this.isDisabled,
        'v-input--is-focused': this.isFocused,
        // <v-switch loading>.loading === '' so we can't just cast to boolean
        'v-input--is-loading': this.loading !== false && this.loading != null,
        'v-input--is-readonly': this.isReadonly,
        'v-input--dense': this.dense,
        'v-input--hide-spin-buttons': this.hideSpinButtons,
        ...this.themeClasses
      };
    },

    computedId() {
      return this.id || `input-${this._uid}`;
    },

    hasDetails() {
      return this.messagesToDisplay.length > 0;
    },

    hasHint() {
      return !this.hasMessages && !!this.hint && (this.persistentHint || this.isFocused);
    },

    hasLabel() {
      return !!(this.$slots.label || this.label);
    },

    // Proxy for `lazyValue`
    // This allows an input
    // to function without
    // a provided model
    internalValue: {
      get() {
        return this.lazyValue;
      },

      set(val) {
        this.lazyValue = val;
        this.$emit(this.$_modelEvent, val);
      }

    },

    isDirty() {
      return !!this.lazyValue;
    },

    isLabelActive() {
      return this.isDirty;
    },

    messagesToDisplay() {
      if (this.hasHint) return [this.hint];
      if (!this.hasMessages) return [];
      return this.validations.map(validation => {
        if (typeof validation === 'string') return validation;
        const validationResult = validation(this.internalValue);
        return typeof validationResult === 'string' ? validationResult : '';
      }).filter(message => message !== '');
    },

    showDetails() {
      return this.hideDetails === false || this.hideDetails === 'auto' && this.hasDetails;
    }

  },
  watch: {
    value(val) {
      this.lazyValue = val;
    }

  },

  beforeCreate() {
    // v-radio-group needs to emit a different event
    // https://github.com/vuetifyjs/vuetify/issues/4752
    this.$_modelEvent = this.$options.model && this.$options.model.event || 'input';
  },

  methods: {
    genContent() {
      return [this.genPrependSlot(), this.genControl(), this.genAppendSlot()];
    },

    genControl() {
      return this.$createElement('div', {
        staticClass: 'v-input__control',
        attrs: {
          title: this.attrs$.title
        }
      }, [this.genInputSlot(), this.genMessages()]);
    },

    genDefaultSlot() {
      return [this.genLabel(), this.$slots.default];
    },

    genIcon(type, cb, extraData = {}) {
      const icon = this[`${type}Icon`];
      const eventName = `click:${(0,_util_helpers__WEBPACK_IMPORTED_MODULE_4__.kebabCase)(type)}`;
      const hasListener = !!(this.listeners$[eventName] || cb);
      const data = (0,_util_mergeData__WEBPACK_IMPORTED_MODULE_5__["default"])({
        attrs: {
          'aria-label': hasListener ? (0,_util_helpers__WEBPACK_IMPORTED_MODULE_4__.kebabCase)(type).split('-')[0] + ' icon' : undefined,
          color: this.validationState,
          dark: this.dark,
          disabled: this.isDisabled,
          light: this.light
        },
        on: !hasListener ? undefined : {
          click: e => {
            e.preventDefault();
            e.stopPropagation();
            this.$emit(eventName, e);
            cb && cb(e);
          },
          // Container has g event that will
          // trigger menu open if enclosed
          mouseup: e => {
            e.preventDefault();
            e.stopPropagation();
          }
        }
      }, extraData);
      return this.$createElement('div', {
        staticClass: `v-input__icon`,
        class: type ? `v-input__icon--${(0,_util_helpers__WEBPACK_IMPORTED_MODULE_4__.kebabCase)(type)}` : undefined
      }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_6__["default"], data, icon)]);
    },

    genInputSlot() {
      return this.$createElement('div', this.setBackgroundColor(this.backgroundColor, {
        staticClass: 'v-input__slot',
        style: {
          height: (0,_util_helpers__WEBPACK_IMPORTED_MODULE_4__.convertToUnit)(this.height)
        },
        on: {
          click: this.onClick,
          mousedown: this.onMouseDown,
          mouseup: this.onMouseUp
        },
        ref: 'input-slot'
      }), [this.genDefaultSlot()]);
    },

    genLabel() {
      if (!this.hasLabel) return null;
      return this.$createElement(_VLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        props: {
          color: this.validationState,
          dark: this.dark,
          disabled: this.isDisabled,
          focused: this.hasState,
          for: this.computedId,
          light: this.light
        }
      }, this.$slots.label || this.label);
    },

    genMessages() {
      if (!this.showDetails) return null;
      return this.$createElement(_VMessages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        props: {
          color: this.hasHint ? '' : this.validationState,
          dark: this.dark,
          light: this.light,
          value: this.messagesToDisplay
        },
        attrs: {
          role: this.hasMessages ? 'alert' : null
        },
        scopedSlots: {
          default: props => (0,_util_helpers__WEBPACK_IMPORTED_MODULE_4__.getSlot)(this, 'message', props)
        }
      });
    },

    genSlot(type, location, slot) {
      if (!slot.length) return null;
      const ref = `${type}-${location}`;
      return this.$createElement('div', {
        staticClass: `v-input__${ref}`,
        ref
      }, slot);
    },

    genPrependSlot() {
      const slot = [];

      if (this.$slots.prepend) {
        slot.push(this.$slots.prepend);
      } else if (this.prependIcon) {
        slot.push(this.genIcon('prepend'));
      }

      return this.genSlot('prepend', 'outer', slot);
    },

    genAppendSlot() {
      const slot = []; // Append icon for text field was really
      // an appended inner icon, v-text-field
      // will overwrite this method in order to obtain
      // backwards compat

      if (this.$slots.append) {
        slot.push(this.$slots.append);
      } else if (this.appendIcon) {
        slot.push(this.genIcon('append'));
      }

      return this.genSlot('append', 'outer', slot);
    },

    onClick(e) {
      this.$emit('click', e);
    },

    onMouseDown(e) {
      this.hasMouseDown = true;
      this.$emit('mousedown', e);
    },

    onMouseUp(e) {
      this.hasMouseDown = false;
      this.$emit('mouseup', e);
    }

  },

  render(h) {
    return h('div', this.setTextColor(this.validationState, {
      staticClass: 'v-input',
      class: this.classes
    }), this.genContent());
  }

}));
//# sourceMappingURL=VInput.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VInput/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VInput/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VInput": () => (/* reexport safe */ _VInput__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VInput */ "./node_modules/vuetify/lib/components/VInput/VInput.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_VInput__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VLabel/VLabel.js":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VLabel/VLabel.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_VLabel_VLabel_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VLabel/VLabel.sass */ "./node_modules/vuetify/src/components/VLabel/VLabel.sass");
/* harmony import */ var _src_components_VLabel_VLabel_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VLabel_VLabel_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/colorable */ "./node_modules/vuetify/lib/mixins/colorable/index.js");
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
// Styles
 // Mixins



 // Helpers


/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(_mixins_themeable__WEBPACK_IMPORTED_MODULE_2__["default"]).extend({
  name: 'v-label',
  functional: true,
  props: {
    absolute: Boolean,
    color: {
      type: String,
      default: 'primary'
    },
    disabled: Boolean,
    focused: Boolean,
    for: String,
    left: {
      type: [Number, String],
      default: 0
    },
    right: {
      type: [Number, String],
      default: 'auto'
    },
    value: Boolean
  },

  render(h, ctx) {
    const {
      children,
      listeners,
      props
    } = ctx;
    const data = {
      staticClass: 'v-label',
      class: {
        'v-label--active': props.value,
        'v-label--is-disabled': props.disabled,
        ...(0,_mixins_themeable__WEBPACK_IMPORTED_MODULE_2__.functionalThemeClasses)(ctx)
      },
      attrs: {
        for: props.for,
        'aria-hidden': !props.for
      },
      on: listeners,
      style: {
        left: (0,_util_helpers__WEBPACK_IMPORTED_MODULE_3__.convertToUnit)(props.left),
        right: (0,_util_helpers__WEBPACK_IMPORTED_MODULE_3__.convertToUnit)(props.right),
        position: props.absolute ? 'absolute' : 'relative'
      },
      ref: 'label'
    };
    return h('label', _mixins_colorable__WEBPACK_IMPORTED_MODULE_4__["default"].options.methods.setTextColor(props.focused && props.color, data), children);
  }

}));
//# sourceMappingURL=VLabel.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VLabel/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VLabel/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VLabel": () => (/* reexport safe */ _VLabel__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VLabel */ "./node_modules/vuetify/lib/components/VLabel/VLabel.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_VLabel__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VMenu/VMenu.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VMenu/VMenu.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_VMenu_VMenu_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VMenu/VMenu.sass */ "./node_modules/vuetify/src/components/VMenu/VMenu.sass");
/* harmony import */ var _src_components_VMenu_VMenu_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VMenu_VMenu_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VThemeProvider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../VThemeProvider */ "./node_modules/vuetify/lib/components/VThemeProvider/VThemeProvider.js");
/* harmony import */ var _mixins_activatable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../mixins/activatable */ "./node_modules/vuetify/lib/mixins/activatable/index.js");
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/delayable */ "./node_modules/vuetify/lib/mixins/delayable/index.js");
/* harmony import */ var _mixins_dependent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/dependent */ "./node_modules/vuetify/lib/mixins/dependent/index.js");
/* harmony import */ var _mixins_menuable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/menuable */ "./node_modules/vuetify/lib/mixins/menuable/index.js");
/* harmony import */ var _mixins_returnable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/returnable */ "./node_modules/vuetify/lib/mixins/returnable/index.js");
/* harmony import */ var _mixins_roundable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/roundable */ "./node_modules/vuetify/lib/mixins/roundable/index.js");
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/toggleable */ "./node_modules/vuetify/lib/mixins/toggleable/index.js");
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _directives_click_outside__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../directives/click-outside */ "./node_modules/vuetify/lib/directives/click-outside/index.js");
/* harmony import */ var _directives_resize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../directives/resize */ "./node_modules/vuetify/lib/directives/resize/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _services_goto__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/goto */ "./node_modules/vuetify/lib/services/goto/index.js");
// Styles
 // Components

 // Mixins








 // Directives


 // Utilities





const baseMixins = (0,_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(_mixins_dependent__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_menuable__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_returnable__WEBPACK_IMPORTED_MODULE_5__["default"], _mixins_roundable__WEBPACK_IMPORTED_MODULE_6__["default"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__["default"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_8__["default"]);
/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMixins.extend({
  name: 'v-menu',
  directives: {
    ClickOutside: _directives_click_outside__WEBPACK_IMPORTED_MODULE_9__["default"],
    Resize: _directives_resize__WEBPACK_IMPORTED_MODULE_10__["default"]
  },

  provide() {
    return {
      isInMenu: true,
      // Pass theme through to default slot
      theme: this.theme
    };
  },

  props: {
    auto: Boolean,
    closeOnClick: {
      type: Boolean,
      default: true
    },
    closeOnContentClick: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    disableKeys: Boolean,
    maxHeight: {
      type: [Number, String],
      default: 'auto'
    },
    offsetX: Boolean,
    offsetY: Boolean,
    openOnHover: Boolean,
    origin: {
      type: String,
      default: 'top left'
    },
    transition: {
      type: [Boolean, String],
      default: 'v-menu-transition'
    }
  },

  data() {
    return {
      calculatedTopAuto: 0,
      defaultOffset: 8,
      hasJustFocused: false,
      listIndex: -1,
      resizeTimeout: 0,
      selectedIndex: null,
      tiles: []
    };
  },

  computed: {
    activeTile() {
      return this.tiles[this.listIndex];
    },

    calculatedLeft() {
      const menuWidth = Math.max(this.dimensions.content.width, parseFloat(this.calculatedMinWidth));
      if (!this.auto) return this.calcLeft(menuWidth) || '0';
      return (0,_util_helpers__WEBPACK_IMPORTED_MODULE_11__.convertToUnit)(this.calcXOverflow(this.calcLeftAuto(), menuWidth)) || '0';
    },

    calculatedMaxHeight() {
      const height = this.auto ? '200px' : (0,_util_helpers__WEBPACK_IMPORTED_MODULE_11__.convertToUnit)(this.maxHeight);
      return height || '0';
    },

    calculatedMaxWidth() {
      return (0,_util_helpers__WEBPACK_IMPORTED_MODULE_11__.convertToUnit)(this.maxWidth) || '0';
    },

    calculatedMinWidth() {
      if (this.minWidth) {
        return (0,_util_helpers__WEBPACK_IMPORTED_MODULE_11__.convertToUnit)(this.minWidth) || '0';
      }

      const minWidth = Math.min(this.dimensions.activator.width + Number(this.nudgeWidth) + (this.auto ? 16 : 0), Math.max(this.pageWidth - 24, 0));
      const calculatedMaxWidth = isNaN(parseInt(this.calculatedMaxWidth)) ? minWidth : parseInt(this.calculatedMaxWidth);
      return (0,_util_helpers__WEBPACK_IMPORTED_MODULE_11__.convertToUnit)(Math.min(calculatedMaxWidth, minWidth)) || '0';
    },

    calculatedTop() {
      const top = !this.auto ? this.calcTop() : (0,_util_helpers__WEBPACK_IMPORTED_MODULE_11__.convertToUnit)(this.calcYOverflow(this.calculatedTopAuto));
      return top || '0';
    },

    hasClickableTiles() {
      return Boolean(this.tiles.find(tile => tile.tabIndex > -1));
    },

    styles() {
      return {
        maxHeight: this.calculatedMaxHeight,
        minWidth: this.calculatedMinWidth,
        maxWidth: this.calculatedMaxWidth,
        top: this.calculatedTop,
        left: this.calculatedLeft,
        transformOrigin: this.origin,
        zIndex: this.zIndex || this.activeZIndex
      };
    }

  },
  watch: {
    isActive(val) {
      if (!val) this.listIndex = -1;
    },

    isContentActive(val) {
      this.hasJustFocused = val;
    },

    listIndex(next, prev) {
      if (next in this.tiles) {
        const tile = this.tiles[next];
        tile.classList.add('v-list-item--highlighted');
        const scrollTop = this.$refs.content.scrollTop;
        const contentHeight = this.$refs.content.clientHeight;

        if (scrollTop > tile.offsetTop - 8) {
          (0,_services_goto__WEBPACK_IMPORTED_MODULE_12__["default"])(tile.offsetTop - tile.clientHeight, {
            appOffset: false,
            duration: 300,
            container: this.$refs.content
          });
        } else if (scrollTop + contentHeight < tile.offsetTop + tile.clientHeight + 8) {
          (0,_services_goto__WEBPACK_IMPORTED_MODULE_12__["default"])(tile.offsetTop - contentHeight + tile.clientHeight * 2, {
            appOffset: false,
            duration: 300,
            container: this.$refs.content
          });
        }
      }

      prev in this.tiles && this.tiles[prev].classList.remove('v-list-item--highlighted');
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('full-width')) {
      (0,_util_console__WEBPACK_IMPORTED_MODULE_13__.removed)('full-width', this);
    }
  },

  mounted() {
    this.isActive && this.callActivate();
  },

  methods: {
    activate() {
      // Update coordinates and dimensions of menu
      // and its activator
      this.updateDimensions(); // Start the transition

      requestAnimationFrame(() => {
        // Once transitioning, calculate scroll and top position
        this.startTransition().then(() => {
          if (this.$refs.content) {
            this.calculatedTopAuto = this.calcTopAuto();
            this.auto && (this.$refs.content.scrollTop = this.calcScrollPosition());
          }
        });
      });
    },

    calcScrollPosition() {
      const $el = this.$refs.content;
      const activeTile = $el.querySelector('.v-list-item--active');
      const maxScrollTop = $el.scrollHeight - $el.offsetHeight;
      return activeTile ? Math.min(maxScrollTop, Math.max(0, activeTile.offsetTop - $el.offsetHeight / 2 + activeTile.offsetHeight / 2)) : $el.scrollTop;
    },

    calcLeftAuto() {
      return parseInt(this.dimensions.activator.left - this.defaultOffset * 2);
    },

    calcTopAuto() {
      const $el = this.$refs.content;
      const activeTile = $el.querySelector('.v-list-item--active');

      if (!activeTile) {
        this.selectedIndex = null;
      }

      if (this.offsetY || !activeTile) {
        return this.computedTop;
      }

      this.selectedIndex = Array.from(this.tiles).indexOf(activeTile);
      const tileDistanceFromMenuTop = activeTile.offsetTop - this.calcScrollPosition();
      const firstTileOffsetTop = $el.querySelector('.v-list-item').offsetTop;
      return this.computedTop - tileDistanceFromMenuTop - firstTileOffsetTop - 1;
    },

    changeListIndex(e) {
      // For infinite scroll and autocomplete, re-evaluate children
      this.getTiles();

      if (!this.isActive || !this.hasClickableTiles) {
        return;
      } else if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_11__.keyCodes.tab) {
        this.isActive = false;
        return;
      } else if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_11__.keyCodes.down) {
        this.nextTile();
      } else if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_11__.keyCodes.up) {
        this.prevTile();
      } else if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_11__.keyCodes.end) {
        this.lastTile();
      } else if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_11__.keyCodes.home) {
        this.firstTile();
      } else if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_11__.keyCodes.enter && this.listIndex !== -1) {
        this.tiles[this.listIndex].click();
      } else {
        return;
      } // One of the conditions was met, prevent default action (#2988)


      e.preventDefault();
    },

    closeConditional(e) {
      const target = e.target;
      return this.isActive && !this._isDestroyed && this.closeOnClick && !this.$refs.content.contains(target);
    },

    genActivatorAttributes() {
      const attributes = _mixins_activatable__WEBPACK_IMPORTED_MODULE_14__["default"].options.methods.genActivatorAttributes.call(this);

      if (this.activeTile && this.activeTile.id) {
        return { ...attributes,
          'aria-activedescendant': this.activeTile.id
        };
      }

      return attributes;
    },

    genActivatorListeners() {
      const listeners = _mixins_menuable__WEBPACK_IMPORTED_MODULE_4__["default"].options.methods.genActivatorListeners.call(this);

      if (!this.disableKeys) {
        listeners.keydown = this.onKeyDown;
      }

      return listeners;
    },

    genTransition() {
      const content = this.genContent();
      if (!this.transition) return content;
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, [content]);
    },

    genDirectives() {
      const directives = [{
        name: 'show',
        value: this.isContentActive
      }]; // Do not add click outside for hover menu

      if (!this.openOnHover && this.closeOnClick) {
        directives.push({
          name: 'click-outside',
          value: {
            handler: () => {
              this.isActive = false;
            },
            closeConditional: this.closeConditional,
            include: () => [this.$el, ...this.getOpenDependentElements()]
          }
        });
      }

      return directives;
    },

    genContent() {
      const options = {
        attrs: { ...this.getScopeIdAttrs(),
          role: 'role' in this.$attrs ? this.$attrs.role : 'menu'
        },
        staticClass: 'v-menu__content',
        class: { ...this.rootThemeClasses,
          ...this.roundedClasses,
          'v-menu__content--auto': this.auto,
          'v-menu__content--fixed': this.activatorFixed,
          menuable__content__active: this.isActive,
          [this.contentClass.trim()]: true
        },
        style: this.styles,
        directives: this.genDirectives(),
        ref: 'content',
        on: {
          click: e => {
            const target = e.target;
            if (target.getAttribute('disabled')) return;
            if (this.closeOnContentClick) this.isActive = false;
          },
          keydown: this.onKeyDown
        }
      };

      if (this.$listeners.scroll) {
        options.on = options.on || {};
        options.on.scroll = this.$listeners.scroll;
      }

      if (!this.disabled && this.openOnHover) {
        options.on = options.on || {};
        options.on.mouseenter = this.mouseEnterHandler;
      }

      if (this.openOnHover) {
        options.on = options.on || {};
        options.on.mouseleave = this.mouseLeaveHandler;
      }

      return this.$createElement('div', options, this.getContentSlot());
    },

    getTiles() {
      if (!this.$refs.content) return;
      this.tiles = Array.from(this.$refs.content.querySelectorAll('.v-list-item, .v-divider, .v-subheader'));
    },

    mouseEnterHandler() {
      this.runDelay('open', () => {
        if (this.hasJustFocused) return;
        this.hasJustFocused = true;
      });
    },

    mouseLeaveHandler(e) {
      // Prevent accidental re-activation
      this.runDelay('close', () => {
        var _this$$refs$content;

        if ((_this$$refs$content = this.$refs.content) != null && _this$$refs$content.contains(e.relatedTarget)) return;
        requestAnimationFrame(() => {
          this.isActive = false;
          this.callDeactivate();
        });
      });
    },

    nextTile() {
      const tile = this.tiles[this.listIndex + 1];

      if (!tile) {
        if (!this.tiles.length) return;
        this.listIndex = -1;
        this.nextTile();
        return;
      }

      this.listIndex++;
      if (tile.tabIndex === -1) this.nextTile();
    },

    prevTile() {
      const tile = this.tiles[this.listIndex - 1];

      if (!tile) {
        if (!this.tiles.length) return;
        this.listIndex = this.tiles.length;
        this.prevTile();
        return;
      }

      this.listIndex--;
      if (tile.tabIndex === -1) this.prevTile();
    },

    lastTile() {
      const tile = this.tiles[this.tiles.length - 1];
      if (!tile) return;
      this.listIndex = this.tiles.length - 1;
      if (tile.tabIndex === -1) this.prevTile();
    },

    firstTile() {
      const tile = this.tiles[0];
      if (!tile) return;
      this.listIndex = 0;
      if (tile.tabIndex === -1) this.nextTile();
    },

    onKeyDown(e) {
      if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_11__.keyCodes.esc) {
        // Wait for dependent elements to close first
        setTimeout(() => {
          this.isActive = false;
        });
        const activator = this.getActivator();
        this.$nextTick(() => activator && activator.focus());
      } else if (!this.isActive && [_util_helpers__WEBPACK_IMPORTED_MODULE_11__.keyCodes.up, _util_helpers__WEBPACK_IMPORTED_MODULE_11__.keyCodes.down].includes(e.keyCode)) {
        this.isActive = true;
      } // Allow for isActive watcher to generate tile list


      this.$nextTick(() => this.changeListIndex(e));
    },

    onResize() {
      if (!this.isActive) return; // Account for screen resize
      // and orientation change
      // eslint-disable-next-line no-unused-expressions

      this.$refs.content.offsetWidth;
      this.updateDimensions(); // When resizing to a smaller width
      // content width is evaluated before
      // the new activator width has been
      // set, causing it to not size properly
      // hacky but will revisit in the future

      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = window.setTimeout(this.updateDimensions, 100);
    }

  },

  render(h) {
    const data = {
      staticClass: 'v-menu',
      class: {
        'v-menu--attached': this.attach === '' || this.attach === true || this.attach === 'attach'
      },
      directives: [{
        arg: '500',
        name: 'resize',
        value: this.onResize
      }]
    };
    return h('div', data, [!this.activator && this.genActivator(), this.showLazyContent(() => [this.$createElement(_VThemeProvider__WEBPACK_IMPORTED_MODULE_15__["default"], {
      props: {
        root: true,
        light: this.light,
        dark: this.dark
      }
    }, [this.genTransition()])])]);
  }

}));
//# sourceMappingURL=VMenu.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VMenu/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VMenu/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VMenu": () => (/* reexport safe */ _VMenu__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VMenu */ "./node_modules/vuetify/lib/components/VMenu/VMenu.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_VMenu__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VMessages/VMessages.js":
/*!********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VMessages/VMessages.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_VMessages_VMessages_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VMessages/VMessages.sass */ "./node_modules/vuetify/src/components/VMessages/VMessages.sass");
/* harmony import */ var _src_components_VMessages_VMessages_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VMessages_VMessages_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/colorable */ "./node_modules/vuetify/lib/mixins/colorable/index.js");
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
// Styles
 // Mixins



 // Utilities


/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__["default"]).extend({
  name: 'v-messages',
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    genChildren() {
      return this.$createElement('transition-group', {
        staticClass: 'v-messages__wrapper',
        attrs: {
          name: 'message-transition',
          tag: 'div'
        }
      }, this.value.map(this.genMessage));
    },

    genMessage(message, key) {
      return this.$createElement('div', {
        staticClass: 'v-messages__message',
        key
      }, (0,_util_helpers__WEBPACK_IMPORTED_MODULE_4__.getSlot)(this, 'default', {
        message,
        key
      }) || [message]);
    }

  },

  render(h) {
    return h('div', this.setTextColor(this.color, {
      staticClass: 'v-messages',
      class: this.themeClasses
    }), [this.genChildren()]);
  }

}));
//# sourceMappingURL=VMessages.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VMessages/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VMessages/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VMessages": () => (/* reexport safe */ _VMessages__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VMessages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VMessages */ "./node_modules/vuetify/lib/components/VMessages/VMessages.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_VMessages__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js":
/*!********************************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_VProgressLinear_VProgressLinear_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VProgressLinear/VProgressLinear.sass */ "./node_modules/vuetify/src/components/VProgressLinear/VProgressLinear.sass");
/* harmony import */ var _src_components_VProgressLinear_VProgressLinear_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VProgressLinear_VProgressLinear_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../transitions */ "./node_modules/vuetify/lib/components/transitions/index.js");
/* harmony import */ var _directives_intersect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/intersect */ "./node_modules/vuetify/lib/directives/intersect/index.js");
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/colorable */ "./node_modules/vuetify/lib/mixins/colorable/index.js");
/* harmony import */ var _mixins_positionable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/positionable */ "./node_modules/vuetify/lib/mixins/positionable/index.js");
/* harmony import */ var _mixins_proxyable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/proxyable */ "./node_modules/vuetify/lib/mixins/proxyable/index.js");
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
 // Components

 // Directives

 // Mixins




 // Utilities



const baseMixins = (0,_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_2__["default"], (0,_mixins_positionable__WEBPACK_IMPORTED_MODULE_3__.factory)(['absolute', 'fixed', 'top', 'bottom']), _mixins_proxyable__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMixins.extend({
  name: 'v-progress-linear',
  directives: {
    intersect: _directives_intersect__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    active: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: null
    },
    backgroundOpacity: {
      type: [Number, String],
      default: null
    },
    bufferValue: {
      type: [Number, String],
      default: 100
    },
    color: {
      type: String,
      default: 'primary'
    },
    height: {
      type: [Number, String],
      default: 4
    },
    indeterminate: Boolean,
    query: Boolean,
    reverse: Boolean,
    rounded: Boolean,
    stream: Boolean,
    striped: Boolean,
    value: {
      type: [Number, String],
      default: 0
    }
  },

  data() {
    return {
      internalLazyValue: this.value || 0,
      isVisible: true
    };
  },

  computed: {
    __cachedBackground() {
      return this.$createElement('div', this.setBackgroundColor(this.backgroundColor || this.color, {
        staticClass: 'v-progress-linear__background',
        style: this.backgroundStyle
      }));
    },

    __cachedBar() {
      return this.$createElement(this.computedTransition, [this.__cachedBarType]);
    },

    __cachedBarType() {
      return this.indeterminate ? this.__cachedIndeterminate : this.__cachedDeterminate;
    },

    __cachedBuffer() {
      return this.$createElement('div', {
        staticClass: 'v-progress-linear__buffer',
        style: this.styles
      });
    },

    __cachedDeterminate() {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: `v-progress-linear__determinate`,
        style: {
          width: (0,_util_helpers__WEBPACK_IMPORTED_MODULE_7__.convertToUnit)(this.normalizedValue, '%')
        }
      }));
    },

    __cachedIndeterminate() {
      return this.$createElement('div', {
        staticClass: 'v-progress-linear__indeterminate',
        class: {
          'v-progress-linear__indeterminate--active': this.active
        }
      }, [this.genProgressBar('long'), this.genProgressBar('short')]);
    },

    __cachedStream() {
      if (!this.stream) return null;
      return this.$createElement('div', this.setTextColor(this.color, {
        staticClass: 'v-progress-linear__stream',
        style: {
          width: (0,_util_helpers__WEBPACK_IMPORTED_MODULE_7__.convertToUnit)(100 - this.normalizedBuffer, '%')
        }
      }));
    },

    backgroundStyle() {
      const backgroundOpacity = this.backgroundOpacity == null ? this.backgroundColor ? 1 : 0.3 : parseFloat(this.backgroundOpacity);
      return {
        opacity: backgroundOpacity,
        [this.isReversed ? 'right' : 'left']: (0,_util_helpers__WEBPACK_IMPORTED_MODULE_7__.convertToUnit)(this.normalizedValue, '%'),
        width: (0,_util_helpers__WEBPACK_IMPORTED_MODULE_7__.convertToUnit)(Math.max(0, this.normalizedBuffer - this.normalizedValue), '%')
      };
    },

    classes() {
      return {
        'v-progress-linear--absolute': this.absolute,
        'v-progress-linear--fixed': this.fixed,
        'v-progress-linear--query': this.query,
        'v-progress-linear--reactive': this.reactive,
        'v-progress-linear--reverse': this.isReversed,
        'v-progress-linear--rounded': this.rounded,
        'v-progress-linear--striped': this.striped,
        'v-progress-linear--visible': this.isVisible,
        ...this.themeClasses
      };
    },

    computedTransition() {
      return this.indeterminate ? _transitions__WEBPACK_IMPORTED_MODULE_8__.VFadeTransition : _transitions__WEBPACK_IMPORTED_MODULE_8__.VSlideXTransition;
    },

    isReversed() {
      return this.$vuetify.rtl !== this.reverse;
    },

    normalizedBuffer() {
      return this.normalize(this.bufferValue);
    },

    normalizedValue() {
      return this.normalize(this.internalLazyValue);
    },

    reactive() {
      return Boolean(this.$listeners.change);
    },

    styles() {
      const styles = {};

      if (!this.active) {
        styles.height = 0;
      }

      if (!this.indeterminate && parseFloat(this.normalizedBuffer) !== 100) {
        styles.width = (0,_util_helpers__WEBPACK_IMPORTED_MODULE_7__.convertToUnit)(this.normalizedBuffer, '%');
      }

      return styles;
    }

  },
  methods: {
    genContent() {
      const slot = (0,_util_helpers__WEBPACK_IMPORTED_MODULE_7__.getSlot)(this, 'default', {
        value: this.internalLazyValue
      });
      if (!slot) return null;
      return this.$createElement('div', {
        staticClass: 'v-progress-linear__content'
      }, slot);
    },

    genListeners() {
      const listeners = this.$listeners;

      if (this.reactive) {
        listeners.click = this.onClick;
      }

      return listeners;
    },

    genProgressBar(name) {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: 'v-progress-linear__indeterminate',
        class: {
          [name]: true
        }
      }));
    },

    onClick(e) {
      if (!this.reactive) return;
      const {
        width
      } = this.$el.getBoundingClientRect();
      this.internalValue = e.offsetX / width * 100;
    },

    onObserve(entries, observer, isIntersecting) {
      this.isVisible = isIntersecting;
    },

    normalize(value) {
      if (value < 0) return 0;
      if (value > 100) return 100;
      return parseFloat(value);
    }

  },

  render(h) {
    const data = {
      staticClass: 'v-progress-linear',
      attrs: {
        role: 'progressbar',
        'aria-valuemin': 0,
        'aria-valuemax': this.normalizedBuffer,
        'aria-valuenow': this.indeterminate ? undefined : this.normalizedValue
      },
      class: this.classes,
      directives: [{
        name: 'intersect',
        value: this.onObserve
      }],
      style: {
        bottom: this.bottom ? 0 : undefined,
        height: this.active ? (0,_util_helpers__WEBPACK_IMPORTED_MODULE_7__.convertToUnit)(this.height) : 0,
        top: this.top ? 0 : undefined
      },
      on: this.genListeners()
    };
    return h('div', data, [this.__cachedStream, this.__cachedBackground, this.__cachedBuffer, this.__cachedBar, this.genContent()]);
  }

}));
//# sourceMappingURL=VProgressLinear.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VProgressLinear/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VProgressLinear/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VProgressLinear": () => (/* reexport safe */ _VProgressLinear__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VProgressLinear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_VProgressLinear__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSelect/VSelect.js":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSelect/VSelect.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMenuProps": () => (/* binding */ defaultMenuProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_VTextField_VTextField_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VTextField/VTextField.sass */ "./node_modules/vuetify/src/components/VTextField/VTextField.sass");
/* harmony import */ var _src_components_VTextField_VTextField_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTextField_VTextField_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_VSelect_VSelect_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/components/VSelect/VSelect.sass */ "./node_modules/vuetify/src/components/VSelect/VSelect.sass");
/* harmony import */ var _src_components_VSelect_VSelect_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSelect_VSelect_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VChip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var _VMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../VMenu */ "./node_modules/vuetify/lib/components/VMenu/index.js");
/* harmony import */ var _VSelectList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VSelectList */ "./node_modules/vuetify/lib/components/VSelect/VSelectList.js");
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../VInput */ "./node_modules/vuetify/lib/components/VInput/index.js");
/* harmony import */ var _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VTextField/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");
/* harmony import */ var _mixins_comparable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/comparable */ "./node_modules/vuetify/lib/mixins/comparable/index.js");
/* harmony import */ var _mixins_dependent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/dependent */ "./node_modules/vuetify/lib/mixins/dependent/index.js");
/* harmony import */ var _mixins_filterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/filterable */ "./node_modules/vuetify/lib/mixins/filterable/index.js");
/* harmony import */ var _directives_click_outside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/click-outside */ "./node_modules/vuetify/lib/directives/click-outside/index.js");
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../util/mergeData */ "./node_modules/vuetify/lib/util/mergeData.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
// Styles

 // Components



 // Extensions


 // Mixins



 // Directives

 // Utilities



 // Types


const defaultMenuProps = {
  closeOnClick: false,
  closeOnContentClick: false,
  disableKeys: true,
  openOnClick: false,
  maxHeight: 304
}; // Types

const baseMixins = (0,_util_mixins__WEBPACK_IMPORTED_MODULE_2__["default"])(_VTextField_VTextField__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_comparable__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_dependent__WEBPACK_IMPORTED_MODULE_5__["default"], _mixins_filterable__WEBPACK_IMPORTED_MODULE_6__["default"]);
/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMixins.extend().extend({
  name: 'v-select',
  directives: {
    ClickOutside: _directives_click_outside__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    appendIcon: {
      type: String,
      default: '$dropdown'
    },
    attach: {
      type: null,
      default: false
    },
    cacheItems: Boolean,
    chips: Boolean,
    clearable: Boolean,
    deletableChips: Boolean,
    disableLookup: Boolean,
    eager: Boolean,
    hideSelected: Boolean,
    items: {
      type: Array,
      default: () => []
    },
    itemColor: {
      type: String,
      default: 'primary'
    },
    itemDisabled: {
      type: [String, Array, Function],
      default: 'disabled'
    },
    itemText: {
      type: [String, Array, Function],
      default: 'text'
    },
    itemValue: {
      type: [String, Array, Function],
      default: 'value'
    },
    menuProps: {
      type: [String, Array, Object],
      default: () => defaultMenuProps
    },
    multiple: Boolean,
    openOnClear: Boolean,
    returnObject: Boolean,
    smallChips: Boolean
  },

  data() {
    return {
      cachedItems: this.cacheItems ? this.items : [],
      menuIsBooted: false,
      isMenuActive: false,
      lastItem: 20,
      // As long as a value is defined, show it
      // Otherwise, check if multiple
      // to determine which default to provide
      lazyValue: this.value !== undefined ? this.value : this.multiple ? [] : undefined,
      selectedIndex: -1,
      selectedItems: [],
      keyboardLookupPrefix: '',
      keyboardLookupLastTime: 0
    };
  },

  computed: {
    /* All items that the select has */
    allItems() {
      return this.filterDuplicates(this.cachedItems.concat(this.items));
    },

    classes() {
      return { ..._VTextField_VTextField__WEBPACK_IMPORTED_MODULE_3__["default"].options.computed.classes.call(this),
        'v-select': true,
        'v-select--chips': this.hasChips,
        'v-select--chips--small': this.smallChips,
        'v-select--is-menu-active': this.isMenuActive,
        'v-select--is-multi': this.multiple
      };
    },

    /* Used by other components to overwrite */
    computedItems() {
      return this.allItems;
    },

    computedOwns() {
      return `list-${this._uid}`;
    },

    computedCounterValue() {
      const value = this.multiple ? this.selectedItems : (this.getText(this.selectedItems[0]) || '').toString();

      if (typeof this.counterValue === 'function') {
        return this.counterValue(value);
      }

      return value.length;
    },

    directives() {
      return this.isFocused ? [{
        name: 'click-outside',
        value: {
          handler: this.blur,
          closeConditional: this.closeConditional,
          include: () => this.getOpenDependentElements()
        }
      }] : undefined;
    },

    dynamicHeight() {
      return 'auto';
    },

    hasChips() {
      return this.chips || this.smallChips;
    },

    hasSlot() {
      return Boolean(this.hasChips || this.$scopedSlots.selection);
    },

    isDirty() {
      return this.selectedItems.length > 0;
    },

    listData() {
      const scopeId = this.$vnode && this.$vnode.context.$options._scopeId;
      const attrs = scopeId ? {
        [scopeId]: true
      } : {};
      return {
        attrs: { ...attrs,
          id: this.computedOwns
        },
        props: {
          action: this.multiple,
          color: this.itemColor,
          dense: this.dense,
          hideSelected: this.hideSelected,
          items: this.virtualizedItems,
          itemDisabled: this.itemDisabled,
          itemText: this.itemText,
          itemValue: this.itemValue,
          noDataText: this.$vuetify.lang.t(this.noDataText),
          selectedItems: this.selectedItems
        },
        on: {
          select: this.selectItem
        },
        scopedSlots: {
          item: this.$scopedSlots.item
        }
      };
    },

    staticList() {
      if (this.$slots['no-data'] || this.$slots['prepend-item'] || this.$slots['append-item']) {
        (0,_util_console__WEBPACK_IMPORTED_MODULE_8__.consoleError)('assert: staticList should not be called if slots are used');
      }

      return this.$createElement(_VSelectList__WEBPACK_IMPORTED_MODULE_9__["default"], this.listData);
    },

    virtualizedItems() {
      return this.$_menuProps.auto ? this.computedItems : this.computedItems.slice(0, this.lastItem);
    },

    menuCanShow: () => true,

    $_menuProps() {
      let normalisedProps = typeof this.menuProps === 'string' ? this.menuProps.split(',') : this.menuProps;

      if (Array.isArray(normalisedProps)) {
        normalisedProps = normalisedProps.reduce((acc, p) => {
          acc[p.trim()] = true;
          return acc;
        }, {});
      }

      return { ...defaultMenuProps,
        eager: this.eager,
        value: this.menuCanShow && this.isMenuActive,
        nudgeBottom: normalisedProps.offsetY ? 1 : 0,
        ...normalisedProps
      };
    }

  },
  watch: {
    internalValue(val) {
      this.initialValue = val;
      this.setSelectedItems();
    },

    isMenuActive(val) {
      window.setTimeout(() => this.onMenuActiveChange(val));
    },

    items: {
      immediate: true,

      handler(val) {
        if (this.cacheItems) {
          // Breaks vue-test-utils if
          // this isn't calculated
          // on the next tick
          this.$nextTick(() => {
            this.cachedItems = this.filterDuplicates(this.cachedItems.concat(val));
          });
        }

        this.setSelectedItems();
      }

    }
  },
  methods: {
    /** @public */
    blur(e) {
      _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_3__["default"].options.methods.blur.call(this, e);
      this.isMenuActive = false;
      this.isFocused = false;
      this.selectedIndex = -1;
      this.setMenuIndex(-1);
    },

    /** @public */
    activateMenu() {
      if (!this.isInteractive || this.isMenuActive) return;
      this.isMenuActive = true;
    },

    clearableCallback() {
      this.setValue(this.multiple ? [] : null);
      this.setMenuIndex(-1);
      this.$nextTick(() => this.$refs.input && this.$refs.input.focus());
      if (this.openOnClear) this.isMenuActive = true;
    },

    closeConditional(e) {
      if (!this.isMenuActive) return true;
      return !this._isDestroyed && ( // Click originates from outside the menu content
      // Multiple selects don't close when an item is clicked
      !this.getContent() || !this.getContent().contains(e.target)) && // Click originates from outside the element
      this.$el && !this.$el.contains(e.target) && e.target !== this.$el;
    },

    filterDuplicates(arr) {
      const uniqueValues = new Map();

      for (let index = 0; index < arr.length; ++index) {
        const item = arr[index]; // Do not return null values if existant (#14421)

        if (item == null) {
          continue;
        } // Do not deduplicate headers or dividers (#12517)


        if (item.header || item.divider) {
          uniqueValues.set(item, item);
          continue;
        }

        const val = this.getValue(item); // TODO: comparator

        !uniqueValues.has(val) && uniqueValues.set(val, item);
      }

      return Array.from(uniqueValues.values());
    },

    findExistingIndex(item) {
      const itemValue = this.getValue(item);
      return (this.internalValue || []).findIndex(i => this.valueComparator(this.getValue(i), itemValue));
    },

    getContent() {
      return this.$refs.menu && this.$refs.menu.$refs.content;
    },

    genChipSelection(item, index) {
      const isDisabled = this.isDisabled || this.getDisabled(item);
      const isInteractive = !isDisabled && this.isInteractive;
      return this.$createElement(_VChip__WEBPACK_IMPORTED_MODULE_10__["default"], {
        staticClass: 'v-chip--select',
        attrs: {
          tabindex: -1
        },
        props: {
          close: this.deletableChips && isInteractive,
          disabled: isDisabled,
          inputValue: index === this.selectedIndex,
          small: this.smallChips
        },
        on: {
          click: e => {
            if (!isInteractive) return;
            e.stopPropagation();
            this.selectedIndex = index;
          },
          'click:close': () => this.onChipInput(item)
        },
        key: JSON.stringify(this.getValue(item))
      }, this.getText(item));
    },

    genCommaSelection(item, index, last) {
      const color = index === this.selectedIndex && this.computedColor;
      const isDisabled = this.isDisabled || this.getDisabled(item);
      return this.$createElement('div', this.setTextColor(color, {
        staticClass: 'v-select__selection v-select__selection--comma',
        class: {
          'v-select__selection--disabled': isDisabled
        },
        key: JSON.stringify(this.getValue(item))
      }), `${this.getText(item)}${last ? '' : ', '}`);
    },

    genDefaultSlot() {
      const selections = this.genSelections();
      const input = this.genInput(); // If the return is an empty array
      // push the input

      if (Array.isArray(selections)) {
        selections.push(input); // Otherwise push it into children
      } else {
        selections.children = selections.children || [];
        selections.children.push(input);
      }

      return [this.genFieldset(), this.$createElement('div', {
        staticClass: 'v-select__slot',
        directives: this.directives
      }, [this.genLabel(), this.prefix ? this.genAffix('prefix') : null, selections, this.suffix ? this.genAffix('suffix') : null, this.genClearIcon(), this.genIconSlot(), this.genHiddenInput()]), this.genMenu(), this.genProgress()];
    },

    genIcon(type, cb, extraData) {
      const icon = _VInput__WEBPACK_IMPORTED_MODULE_11__["default"].options.methods.genIcon.call(this, type, cb, extraData);

      if (type === 'append') {
        // Don't allow the dropdown icon to be focused
        icon.children[0].data = (0,_util_mergeData__WEBPACK_IMPORTED_MODULE_12__["default"])(icon.children[0].data, {
          attrs: {
            tabindex: icon.children[0].componentOptions.listeners && '-1',
            'aria-hidden': 'true',
            'aria-label': undefined
          }
        });
      }

      return icon;
    },

    genInput() {
      const input = _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_3__["default"].options.methods.genInput.call(this);
      delete input.data.attrs.name;
      input.data = (0,_util_mergeData__WEBPACK_IMPORTED_MODULE_12__["default"])(input.data, {
        domProps: {
          value: null
        },
        attrs: {
          readonly: true,
          type: 'text',
          'aria-readonly': String(this.isReadonly),
          'aria-activedescendant': (0,_util_helpers__WEBPACK_IMPORTED_MODULE_13__.getObjectValueByPath)(this.$refs.menu, 'activeTile.id'),
          autocomplete: (0,_util_helpers__WEBPACK_IMPORTED_MODULE_13__.getObjectValueByPath)(input.data, 'attrs.autocomplete', 'off'),
          placeholder: !this.isDirty && (this.persistentPlaceholder || this.isFocused || !this.hasLabel) ? this.placeholder : undefined
        },
        on: {
          keypress: this.onKeyPress
        }
      });
      return input;
    },

    genHiddenInput() {
      return this.$createElement('input', {
        domProps: {
          value: this.lazyValue
        },
        attrs: {
          type: 'hidden',
          name: this.attrs$.name
        }
      });
    },

    genInputSlot() {
      const render = _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_3__["default"].options.methods.genInputSlot.call(this);
      render.data.attrs = { ...render.data.attrs,
        role: 'button',
        'aria-haspopup': 'listbox',
        'aria-expanded': String(this.isMenuActive),
        'aria-owns': this.computedOwns
      };
      return render;
    },

    genList() {
      // If there's no slots, we can use a cached VNode to improve performance
      if (this.$slots['no-data'] || this.$slots['prepend-item'] || this.$slots['append-item']) {
        return this.genListWithSlot();
      } else {
        return this.staticList;
      }
    },

    genListWithSlot() {
      const slots = ['prepend-item', 'no-data', 'append-item'].filter(slotName => this.$slots[slotName]).map(slotName => this.$createElement('template', {
        slot: slotName
      }, this.$slots[slotName])); // Requires destructuring due to Vue
      // modifying the `on` property when passed
      // as a referenced object

      return this.$createElement(_VSelectList__WEBPACK_IMPORTED_MODULE_9__["default"], { ...this.listData
      }, slots);
    },

    genMenu() {
      const props = this.$_menuProps;
      props.activator = this.$refs['input-slot']; // Attach to root el so that
      // menu covers prepend/append icons

      if ( // TODO: make this a computed property or helper or something
      this.attach === '' || // If used as a boolean prop (<v-menu attach>)
      this.attach === true || // If bound to a boolean (<v-menu :attach="true">)
      this.attach === 'attach' // If bound as boolean prop in pug (v-menu(attach))
      ) {
          props.attach = this.$el;
        } else {
        props.attach = this.attach;
      }

      return this.$createElement(_VMenu__WEBPACK_IMPORTED_MODULE_14__["default"], {
        attrs: {
          role: undefined
        },
        props,
        on: {
          input: val => {
            this.isMenuActive = val;
            this.isFocused = val;
          },
          scroll: this.onScroll
        },
        ref: 'menu'
      }, [this.genList()]);
    },

    genSelections() {
      let length = this.selectedItems.length;
      const children = new Array(length);
      let genSelection;

      if (this.$scopedSlots.selection) {
        genSelection = this.genSlotSelection;
      } else if (this.hasChips) {
        genSelection = this.genChipSelection;
      } else {
        genSelection = this.genCommaSelection;
      }

      while (length--) {
        children[length] = genSelection(this.selectedItems[length], length, length === children.length - 1);
      }

      return this.$createElement('div', {
        staticClass: 'v-select__selections'
      }, children);
    },

    genSlotSelection(item, index) {
      return this.$scopedSlots.selection({
        attrs: {
          class: 'v-chip--select'
        },
        parent: this,
        item,
        index,
        select: e => {
          e.stopPropagation();
          this.selectedIndex = index;
        },
        selected: index === this.selectedIndex,
        disabled: !this.isInteractive
      });
    },

    getMenuIndex() {
      return this.$refs.menu ? this.$refs.menu.listIndex : -1;
    },

    getDisabled(item) {
      return (0,_util_helpers__WEBPACK_IMPORTED_MODULE_13__.getPropertyFromItem)(item, this.itemDisabled, false);
    },

    getText(item) {
      return (0,_util_helpers__WEBPACK_IMPORTED_MODULE_13__.getPropertyFromItem)(item, this.itemText, item);
    },

    getValue(item) {
      return (0,_util_helpers__WEBPACK_IMPORTED_MODULE_13__.getPropertyFromItem)(item, this.itemValue, this.getText(item));
    },

    onBlur(e) {
      e && this.$emit('blur', e);
    },

    onChipInput(item) {
      if (this.multiple) this.selectItem(item);else this.setValue(null); // If all items have been deleted,
      // open `v-menu`

      if (this.selectedItems.length === 0) {
        this.isMenuActive = true;
      } else {
        this.isMenuActive = false;
      }

      this.selectedIndex = -1;
    },

    onClick(e) {
      if (!this.isInteractive) return;

      if (!this.isAppendInner(e.target)) {
        this.isMenuActive = true;
      }

      if (!this.isFocused) {
        this.isFocused = true;
        this.$emit('focus');
      }

      this.$emit('click', e);
    },

    onEscDown(e) {
      e.preventDefault();

      if (this.isMenuActive) {
        e.stopPropagation();
        this.isMenuActive = false;
      }
    },

    onKeyPress(e) {
      if (this.multiple || !this.isInteractive || this.disableLookup) return;
      const KEYBOARD_LOOKUP_THRESHOLD = 1000; // milliseconds

      const now = performance.now();

      if (now - this.keyboardLookupLastTime > KEYBOARD_LOOKUP_THRESHOLD) {
        this.keyboardLookupPrefix = '';
      }

      this.keyboardLookupPrefix += e.key.toLowerCase();
      this.keyboardLookupLastTime = now;
      const index = this.allItems.findIndex(item => {
        const text = (this.getText(item) || '').toString();
        return text.toLowerCase().startsWith(this.keyboardLookupPrefix);
      });
      const item = this.allItems[index];

      if (index !== -1) {
        this.lastItem = Math.max(this.lastItem, index + 5);
        this.setValue(this.returnObject ? item : this.getValue(item));
        this.$nextTick(() => this.$refs.menu.getTiles());
        setTimeout(() => this.setMenuIndex(index));
      }
    },

    onKeyDown(e) {
      if (this.isReadonly && e.keyCode !== _util_helpers__WEBPACK_IMPORTED_MODULE_13__.keyCodes.tab) return;
      const keyCode = e.keyCode;
      const menu = this.$refs.menu;
      this.$emit('keydown', e);
      if (!menu) return; // If menu is active, allow default
      // listIndex change from menu

      if (this.isMenuActive && [_util_helpers__WEBPACK_IMPORTED_MODULE_13__.keyCodes.up, _util_helpers__WEBPACK_IMPORTED_MODULE_13__.keyCodes.down, _util_helpers__WEBPACK_IMPORTED_MODULE_13__.keyCodes.home, _util_helpers__WEBPACK_IMPORTED_MODULE_13__.keyCodes.end, _util_helpers__WEBPACK_IMPORTED_MODULE_13__.keyCodes.enter].includes(keyCode)) {
        this.$nextTick(() => {
          menu.changeListIndex(e);
          this.$emit('update:list-index', menu.listIndex);
        });
      } // If enter, space, open menu


      if ([_util_helpers__WEBPACK_IMPORTED_MODULE_13__.keyCodes.enter, _util_helpers__WEBPACK_IMPORTED_MODULE_13__.keyCodes.space].includes(keyCode)) this.activateMenu(); // If menu is not active, up/down/home/end can do
      // one of 2 things. If multiple, opens the
      // menu, if not, will cycle through all
      // available options

      if (!this.isMenuActive && [_util_helpers__WEBPACK_IMPORTED_MODULE_13__.keyCodes.up, _util_helpers__WEBPACK_IMPORTED_MODULE_13__.keyCodes.down, _util_helpers__WEBPACK_IMPORTED_MODULE_13__.keyCodes.home, _util_helpers__WEBPACK_IMPORTED_MODULE_13__.keyCodes.end].includes(keyCode)) return this.onUpDown(e); // If escape deactivate the menu

      if (keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_13__.keyCodes.esc) return this.onEscDown(e); // If tab - select item or close menu

      if (keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_13__.keyCodes.tab) return this.onTabDown(e); // If space preventDefault

      if (keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_13__.keyCodes.space) return this.onSpaceDown(e);
    },

    onMenuActiveChange(val) {
      // If menu is closing and mulitple
      // or menuIndex is already set
      // skip menu index recalculation
      if (this.multiple && !val || this.getMenuIndex() > -1) return;
      const menu = this.$refs.menu;
      if (!menu || !this.isDirty) return; // When menu opens, set index of first active item

      this.$refs.menu.getTiles();

      for (let i = 0; i < menu.tiles.length; i++) {
        if (menu.tiles[i].getAttribute('aria-selected') === 'true') {
          this.setMenuIndex(i);
          break;
        }
      }
    },

    onMouseUp(e) {
      // eslint-disable-next-line sonarjs/no-collapsible-if
      if (this.hasMouseDown && e.which !== 3 && this.isInteractive) {
        // If append inner is present
        // and the target is itself
        // or inside, toggle menu
        if (this.isAppendInner(e.target)) {
          this.$nextTick(() => this.isMenuActive = !this.isMenuActive);
        }
      }

      _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_3__["default"].options.methods.onMouseUp.call(this, e);
    },

    onScroll() {
      if (!this.isMenuActive) {
        requestAnimationFrame(() => this.getContent().scrollTop = 0);
      } else {
        if (this.lastItem > this.computedItems.length) return;
        const showMoreItems = this.getContent().scrollHeight - (this.getContent().scrollTop + this.getContent().clientHeight) < 200;

        if (showMoreItems) {
          this.lastItem += 20;
        }
      }
    },

    onSpaceDown(e) {
      e.preventDefault();
    },

    onTabDown(e) {
      const menu = this.$refs.menu;
      if (!menu) return;
      const activeTile = menu.activeTile; // An item that is selected by
      // menu-index should toggled

      if (!this.multiple && activeTile && this.isMenuActive) {
        e.preventDefault();
        e.stopPropagation();
        activeTile.click();
      } else {
        // If we make it here,
        // the user has no selected indexes
        // and is probably tabbing out
        this.blur(e);
      }
    },

    onUpDown(e) {
      const menu = this.$refs.menu;
      if (!menu) return;
      e.preventDefault(); // Multiple selects do not cycle their value
      // when pressing up or down, instead activate
      // the menu

      if (this.multiple) return this.activateMenu();
      const keyCode = e.keyCode; // Cycle through available values to achieve
      // select native behavior

      menu.isBooted = true;
      window.requestAnimationFrame(() => {
        menu.getTiles();
        if (!menu.hasClickableTiles) return this.activateMenu();

        switch (keyCode) {
          case _util_helpers__WEBPACK_IMPORTED_MODULE_13__.keyCodes.up:
            menu.prevTile();
            break;

          case _util_helpers__WEBPACK_IMPORTED_MODULE_13__.keyCodes.down:
            menu.nextTile();
            break;

          case _util_helpers__WEBPACK_IMPORTED_MODULE_13__.keyCodes.home:
            menu.firstTile();
            break;

          case _util_helpers__WEBPACK_IMPORTED_MODULE_13__.keyCodes.end:
            menu.lastTile();
            break;
        }

        this.selectItem(this.allItems[this.getMenuIndex()]);
      });
    },

    selectItem(item) {
      if (!this.multiple) {
        this.setValue(this.returnObject ? item : this.getValue(item));
        this.isMenuActive = false;
      } else {
        const internalValue = (this.internalValue || []).slice();
        const i = this.findExistingIndex(item);
        i !== -1 ? internalValue.splice(i, 1) : internalValue.push(item);
        this.setValue(internalValue.map(i => {
          return this.returnObject ? i : this.getValue(i);
        })); // When selecting multiple
        // adjust menu after each
        // selection

        this.$nextTick(() => {
          this.$refs.menu && this.$refs.menu.updateDimensions();
        }); // There is no item to re-highlight
        // when selections are hidden

        if (this.hideSelected) {
          this.setMenuIndex(-1);
        } else {
          const index = this.allItems.indexOf(item);

          if (~index) {
            this.$nextTick(() => this.$refs.menu.getTiles());
            setTimeout(() => this.setMenuIndex(index));
          }
        }
      }
    },

    setMenuIndex(index) {
      this.$refs.menu && (this.$refs.menu.listIndex = index);
    },

    setSelectedItems() {
      const selectedItems = [];
      const values = !this.multiple || !Array.isArray(this.internalValue) ? [this.internalValue] : this.internalValue;

      for (const value of values) {
        const index = this.allItems.findIndex(v => this.valueComparator(this.getValue(v), this.getValue(value)));

        if (index > -1) {
          selectedItems.push(this.allItems[index]);
        }
      }

      this.selectedItems = selectedItems;
    },

    setValue(value) {
      if (!this.valueComparator(value, this.internalValue)) {
        this.internalValue = value;
        this.$emit('change', value);
      }
    },

    isAppendInner(target) {
      // return true if append inner is present
      // and the target is itself or inside
      const appendInner = this.$refs['append-inner'];
      return appendInner && (appendInner === target || appendInner.contains(target));
    }

  }
}));
//# sourceMappingURL=VSelect.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSelect/VSelectList.js":
/*!********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSelect/VSelectList.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VCheckbox_VSimpleCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../VCheckbox/VSimpleCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/VSimpleCheckbox.js");
/* harmony import */ var _VDivider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var _VSubheader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../VSubheader */ "./node_modules/vuetify/lib/components/VSubheader/index.js");
/* harmony import */ var _VList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../VList */ "./node_modules/vuetify/lib/components/VList/VListItem.js");
/* harmony import */ var _VList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../VList */ "./node_modules/vuetify/lib/components/VList/VListItemAction.js");
/* harmony import */ var _VList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var _VList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../VList */ "./node_modules/vuetify/lib/components/VList/VList.js");
/* harmony import */ var _directives_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/ripple */ "./node_modules/vuetify/lib/directives/ripple/index.js");
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/colorable */ "./node_modules/vuetify/lib/mixins/colorable/index.js");
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
// Components



 // Directives

 // Mixins


 // Helpers

 // Types


/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_util_mixins__WEBPACK_IMPORTED_MODULE_0__["default"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_2__["default"]).extend({
  name: 'v-select-list',
  // https://github.com/vuejs/vue/issues/6872
  directives: {
    ripple: _directives_ripple__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    action: Boolean,
    dense: Boolean,
    hideSelected: Boolean,
    items: {
      type: Array,
      default: () => []
    },
    itemDisabled: {
      type: [String, Array, Function],
      default: 'disabled'
    },
    itemText: {
      type: [String, Array, Function],
      default: 'text'
    },
    itemValue: {
      type: [String, Array, Function],
      default: 'value'
    },
    noDataText: String,
    noFilter: Boolean,
    searchInput: null,
    selectedItems: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    parsedItems() {
      return this.selectedItems.map(item => this.getValue(item));
    },

    tileActiveClass() {
      return Object.keys(this.setTextColor(this.color).class || {}).join(' ');
    },

    staticNoDataTile() {
      const tile = {
        attrs: {
          role: undefined
        },
        on: {
          mousedown: e => e.preventDefault()
        }
      };
      return this.$createElement(_VList__WEBPACK_IMPORTED_MODULE_4__["default"], tile, [this.genTileContent(this.noDataText)]);
    }

  },
  methods: {
    genAction(item, inputValue) {
      return this.$createElement(_VList__WEBPACK_IMPORTED_MODULE_5__["default"], [this.$createElement(_VCheckbox_VSimpleCheckbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
        props: {
          color: this.color,
          value: inputValue,
          ripple: false
        },
        on: {
          input: () => this.$emit('select', item)
        }
      })]);
    },

    genDivider(props) {
      return this.$createElement(_VDivider__WEBPACK_IMPORTED_MODULE_7__["default"], {
        props
      });
    },

    genFilteredText(text) {
      text = text || '';
      if (!this.searchInput || this.noFilter) return (0,_util_helpers__WEBPACK_IMPORTED_MODULE_8__.escapeHTML)(text);
      const {
        start,
        middle,
        end
      } = this.getMaskedCharacters(text);
      return `${(0,_util_helpers__WEBPACK_IMPORTED_MODULE_8__.escapeHTML)(start)}${this.genHighlight(middle)}${(0,_util_helpers__WEBPACK_IMPORTED_MODULE_8__.escapeHTML)(end)}`;
    },

    genHeader(props) {
      return this.$createElement(_VSubheader__WEBPACK_IMPORTED_MODULE_9__["default"], {
        props
      }, props.header);
    },

    genHighlight(text) {
      return `<span class="v-list-item__mask">${(0,_util_helpers__WEBPACK_IMPORTED_MODULE_8__.escapeHTML)(text)}</span>`;
    },

    getMaskedCharacters(text) {
      const searchInput = (this.searchInput || '').toString().toLocaleLowerCase();
      const index = text.toLocaleLowerCase().indexOf(searchInput);
      if (index < 0) return {
        start: text,
        middle: '',
        end: ''
      };
      const start = text.slice(0, index);
      const middle = text.slice(index, index + searchInput.length);
      const end = text.slice(index + searchInput.length);
      return {
        start,
        middle,
        end
      };
    },

    genTile({
      item,
      index,
      disabled = null,
      value = false
    }) {
      if (!value) value = this.hasItem(item);

      if (item === Object(item)) {
        disabled = disabled !== null ? disabled : this.getDisabled(item);
      }

      const tile = {
        attrs: {
          // Default behavior in list does not
          // contain aria-selected by default
          'aria-selected': String(value),
          id: `list-item-${this._uid}-${index}`,
          role: 'option'
        },
        on: {
          mousedown: e => {
            // Prevent onBlur from being called
            e.preventDefault();
          },
          click: () => disabled || this.$emit('select', item)
        },
        props: {
          activeClass: this.tileActiveClass,
          disabled,
          ripple: true,
          inputValue: value
        }
      };

      if (!this.$scopedSlots.item) {
        return this.$createElement(_VList__WEBPACK_IMPORTED_MODULE_4__["default"], tile, [this.action && !this.hideSelected && this.items.length > 0 ? this.genAction(item, value) : null, this.genTileContent(item, index)]);
      }

      const parent = this;
      const scopedSlot = this.$scopedSlots.item({
        parent,
        item,
        attrs: { ...tile.attrs,
          ...tile.props
        },
        on: tile.on
      });
      return this.needsTile(scopedSlot) ? this.$createElement(_VList__WEBPACK_IMPORTED_MODULE_4__["default"], tile, scopedSlot) : scopedSlot;
    },

    genTileContent(item, index = 0) {
      const innerHTML = this.genFilteredText(this.getText(item));
      return this.$createElement(_VList__WEBPACK_IMPORTED_MODULE_10__.VListItemContent, [this.$createElement(_VList__WEBPACK_IMPORTED_MODULE_10__.VListItemTitle, {
        domProps: {
          innerHTML
        }
      })]);
    },

    hasItem(item) {
      return this.parsedItems.indexOf(this.getValue(item)) > -1;
    },

    needsTile(slot) {
      return slot.length !== 1 || slot[0].componentOptions == null || slot[0].componentOptions.Ctor.options.name !== 'v-list-item';
    },

    getDisabled(item) {
      return Boolean((0,_util_helpers__WEBPACK_IMPORTED_MODULE_8__.getPropertyFromItem)(item, this.itemDisabled, false));
    },

    getText(item) {
      return String((0,_util_helpers__WEBPACK_IMPORTED_MODULE_8__.getPropertyFromItem)(item, this.itemText, item));
    },

    getValue(item) {
      return (0,_util_helpers__WEBPACK_IMPORTED_MODULE_8__.getPropertyFromItem)(item, this.itemValue, this.getText(item));
    }

  },

  render() {
    const children = [];
    const itemsLength = this.items.length;

    for (let index = 0; index < itemsLength; index++) {
      const item = this.items[index];
      if (this.hideSelected && this.hasItem(item)) continue;
      if (item == null) children.push(this.genTile({
        item,
        index
      }));else if (item.header) children.push(this.genHeader(item));else if (item.divider) children.push(this.genDivider(item));else children.push(this.genTile({
        item,
        index
      }));
    }

    children.length || children.push(this.$slots['no-data'] || this.staticNoDataTile);
    this.$slots['prepend-item'] && children.unshift(this.$slots['prepend-item']);
    this.$slots['append-item'] && children.push(this.$slots['append-item']);
    return this.$createElement(_VList__WEBPACK_IMPORTED_MODULE_11__["default"], {
      staticClass: 'v-select-list',
      class: this.themeClasses,
      attrs: {
        role: 'listbox',
        tabindex: -1
      },
      props: {
        dense: this.dense
      }
    }, children);
  }

}));
//# sourceMappingURL=VSelectList.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSubheader/VSubheader.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSubheader/VSubheader.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_VSubheader_VSubheader_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VSubheader/VSubheader.sass */ "./node_modules/vuetify/src/components/VSubheader/VSubheader.sass");
/* harmony import */ var _src_components_VSubheader_VSubheader_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSubheader_VSubheader_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
// Styles
 // Mixins



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(_mixins_themeable__WEBPACK_IMPORTED_MODULE_2__["default"]
/* @vue/component */
).extend({
  name: 'v-subheader',
  props: {
    inset: Boolean
  },

  render(h) {
    return h('div', {
      staticClass: 'v-subheader',
      class: {
        'v-subheader--inset': this.inset,
        ...this.themeClasses
      },
      attrs: this.$attrs,
      on: this.$listeners
    }, this.$slots.default);
  }

}));
//# sourceMappingURL=VSubheader.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSubheader/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSubheader/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VSubheader": () => (/* reexport safe */ _VSubheader__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VSubheader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VSubheader */ "./node_modules/vuetify/lib/components/VSubheader/VSubheader.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_VSubheader__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VTextField/VTextField.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VTextField/VTextField.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_VTextField_VTextField_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VTextField/VTextField.sass */ "./node_modules/vuetify/src/components/VTextField/VTextField.sass");
/* harmony import */ var _src_components_VTextField_VTextField_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTextField_VTextField_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VInput */ "./node_modules/vuetify/lib/components/VInput/index.js");
/* harmony import */ var _VCounter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../VCounter */ "./node_modules/vuetify/lib/components/VCounter/index.js");
/* harmony import */ var _VLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../VLabel */ "./node_modules/vuetify/lib/components/VLabel/index.js");
/* harmony import */ var _mixins_intersectable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/intersectable */ "./node_modules/vuetify/lib/mixins/intersectable/index.js");
/* harmony import */ var _mixins_loadable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/loadable */ "./node_modules/vuetify/lib/mixins/loadable/index.js");
/* harmony import */ var _mixins_validatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/validatable */ "./node_modules/vuetify/lib/mixins/validatable/index.js");
/* harmony import */ var _directives_resize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/resize */ "./node_modules/vuetify/lib/directives/resize/index.js");
/* harmony import */ var _directives_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/ripple */ "./node_modules/vuetify/lib/directives/ripple/index.js");
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../util/dom */ "./node_modules/vuetify/lib/util/dom.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
// Styles
 // Extensions

 // Components


 // Mixins



 // Directives


 // Utilities



 // Types


const baseMixins = (0,_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(_VInput__WEBPACK_IMPORTED_MODULE_2__["default"], (0,_mixins_intersectable__WEBPACK_IMPORTED_MODULE_3__["default"])({
  onVisible: ['onResize', 'tryAutofocus']
}), _mixins_loadable__WEBPACK_IMPORTED_MODULE_4__["default"]);
const dirtyTypes = ['color', 'file', 'time', 'date', 'datetime-local', 'week', 'month'];
/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMixins.extend().extend({
  name: 'v-text-field',
  directives: {
    resize: _directives_resize__WEBPACK_IMPORTED_MODULE_5__["default"],
    ripple: _directives_ripple__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  inheritAttrs: false,
  props: {
    appendOuterIcon: String,
    autofocus: Boolean,
    clearable: Boolean,
    clearIcon: {
      type: String,
      default: '$clear'
    },
    counter: [Boolean, Number, String],
    counterValue: Function,
    filled: Boolean,
    flat: Boolean,
    fullWidth: Boolean,
    label: String,
    outlined: Boolean,
    placeholder: String,
    prefix: String,
    prependInnerIcon: String,
    persistentPlaceholder: Boolean,
    reverse: Boolean,
    rounded: Boolean,
    shaped: Boolean,
    singleLine: Boolean,
    solo: Boolean,
    soloInverted: Boolean,
    suffix: String,
    type: {
      type: String,
      default: 'text'
    }
  },
  data: () => ({
    badInput: false,
    labelWidth: 0,
    prefixWidth: 0,
    prependWidth: 0,
    initialValue: null,
    isBooted: false,
    isClearing: false
  }),
  computed: {
    classes() {
      return { ..._VInput__WEBPACK_IMPORTED_MODULE_2__["default"].options.computed.classes.call(this),
        'v-text-field': true,
        'v-text-field--full-width': this.fullWidth,
        'v-text-field--prefix': this.prefix,
        'v-text-field--single-line': this.isSingle,
        'v-text-field--solo': this.isSolo,
        'v-text-field--solo-inverted': this.soloInverted,
        'v-text-field--solo-flat': this.flat,
        'v-text-field--filled': this.filled,
        'v-text-field--is-booted': this.isBooted,
        'v-text-field--enclosed': this.isEnclosed,
        'v-text-field--reverse': this.reverse,
        'v-text-field--outlined': this.outlined,
        'v-text-field--placeholder': this.placeholder,
        'v-text-field--rounded': this.rounded,
        'v-text-field--shaped': this.shaped
      };
    },

    computedColor() {
      const computedColor = _mixins_validatable__WEBPACK_IMPORTED_MODULE_7__["default"].options.computed.computedColor.call(this);
      if (!this.soloInverted || !this.isFocused) return computedColor;
      return this.color || 'primary';
    },

    computedCounterValue() {
      if (typeof this.counterValue === 'function') {
        return this.counterValue(this.internalValue);
      }

      return [...(this.internalValue || '').toString()].length;
    },

    hasCounter() {
      return this.counter !== false && this.counter != null;
    },

    hasDetails() {
      return _VInput__WEBPACK_IMPORTED_MODULE_2__["default"].options.computed.hasDetails.call(this) || this.hasCounter;
    },

    internalValue: {
      get() {
        return this.lazyValue;
      },

      set(val) {
        this.lazyValue = val;
        this.$emit('input', this.lazyValue);
      }

    },

    isDirty() {
      var _this$lazyValue;

      return ((_this$lazyValue = this.lazyValue) == null ? void 0 : _this$lazyValue.toString().length) > 0 || this.badInput;
    },

    isEnclosed() {
      return this.filled || this.isSolo || this.outlined;
    },

    isLabelActive() {
      return this.isDirty || dirtyTypes.includes(this.type);
    },

    isSingle() {
      return this.isSolo || this.singleLine || this.fullWidth || // https://material.io/components/text-fields/#filled-text-field
      this.filled && !this.hasLabel;
    },

    isSolo() {
      return this.solo || this.soloInverted;
    },

    labelPosition() {
      let offset = this.prefix && !this.labelValue ? this.prefixWidth : 0;
      if (this.labelValue && this.prependWidth) offset -= this.prependWidth;
      return this.$vuetify.rtl === this.reverse ? {
        left: offset,
        right: 'auto'
      } : {
        left: 'auto',
        right: offset
      };
    },

    showLabel() {
      return this.hasLabel && !(this.isSingle && this.labelValue);
    },

    labelValue() {
      return this.isFocused || this.isLabelActive || this.persistentPlaceholder;
    }

  },
  watch: {
    // labelValue: 'setLabelWidth', // moved to mounted, see #11533
    outlined: 'setLabelWidth',

    label() {
      this.$nextTick(this.setLabelWidth);
    },

    prefix() {
      this.$nextTick(this.setPrefixWidth);
    },

    isFocused: 'updateValue',

    value(val) {
      this.lazyValue = val;
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('box')) {
      (0,_util_console__WEBPACK_IMPORTED_MODULE_8__.breaking)('box', 'filled', this);
    }
    /* istanbul ignore next */


    if (this.$attrs.hasOwnProperty('browser-autocomplete')) {
      (0,_util_console__WEBPACK_IMPORTED_MODULE_8__.breaking)('browser-autocomplete', 'autocomplete', this);
    }
    /* istanbul ignore if */


    if (this.shaped && !(this.filled || this.outlined || this.isSolo)) {
      (0,_util_console__WEBPACK_IMPORTED_MODULE_8__.consoleWarn)('shaped should be used with either filled or outlined', this);
    }
  },

  mounted() {
    // #11533
    this.$watch(() => this.labelValue, this.setLabelWidth);
    this.autofocus && this.tryAutofocus();
    requestAnimationFrame(() => {
      this.isBooted = true;
      requestAnimationFrame(() => {
        if (!this.isIntersecting) {
          this.onResize();
        }
      });
    });
  },

  methods: {
    /** @public */
    focus() {
      this.onFocus();
    },

    /** @public */
    blur(e) {
      // https://github.com/vuetifyjs/vuetify/issues/5913
      // Safari tab order gets broken if called synchronous
      window.requestAnimationFrame(() => {
        this.$refs.input && this.$refs.input.blur();
      });
    },

    clearableCallback() {
      this.$refs.input && this.$refs.input.focus();
      this.$nextTick(() => this.internalValue = null);
    },

    genAppendSlot() {
      const slot = [];

      if (this.$slots['append-outer']) {
        slot.push(this.$slots['append-outer']);
      } else if (this.appendOuterIcon) {
        slot.push(this.genIcon('appendOuter'));
      }

      return this.genSlot('append', 'outer', slot);
    },

    genPrependInnerSlot() {
      const slot = [];

      if (this.$slots['prepend-inner']) {
        slot.push(this.$slots['prepend-inner']);
      } else if (this.prependInnerIcon) {
        slot.push(this.genIcon('prependInner'));
      }

      return this.genSlot('prepend', 'inner', slot);
    },

    genIconSlot() {
      const slot = [];

      if (this.$slots.append) {
        slot.push(this.$slots.append);
      } else if (this.appendIcon) {
        slot.push(this.genIcon('append'));
      }

      return this.genSlot('append', 'inner', slot);
    },

    genInputSlot() {
      const input = _VInput__WEBPACK_IMPORTED_MODULE_2__["default"].options.methods.genInputSlot.call(this);
      const prepend = this.genPrependInnerSlot();

      if (prepend) {
        input.children = input.children || [];
        input.children.unshift(prepend);
      }

      return input;
    },

    genClearIcon() {
      if (!this.clearable) return null; // if the text field has no content then don't display the clear icon.
      // We add an empty div because other controls depend on a ref to append inner

      if (!this.isDirty) {
        return this.genSlot('append', 'inner', [this.$createElement('div')]);
      }

      return this.genSlot('append', 'inner', [this.genIcon('clear', this.clearableCallback)]);
    },

    genCounter() {
      var _this$$scopedSlots$co, _this$$scopedSlots$co2, _this$$scopedSlots;

      if (!this.hasCounter) return null;
      const max = this.counter === true ? this.attrs$.maxlength : this.counter;
      const props = {
        dark: this.dark,
        light: this.light,
        max,
        value: this.computedCounterValue
      };
      return (_this$$scopedSlots$co = (_this$$scopedSlots$co2 = (_this$$scopedSlots = this.$scopedSlots).counter) == null ? void 0 : _this$$scopedSlots$co2.call(_this$$scopedSlots, {
        props
      })) != null ? _this$$scopedSlots$co : this.$createElement(_VCounter__WEBPACK_IMPORTED_MODULE_9__["default"], {
        props
      });
    },

    genControl() {
      return _VInput__WEBPACK_IMPORTED_MODULE_2__["default"].options.methods.genControl.call(this);
    },

    genDefaultSlot() {
      return [this.genFieldset(), this.genTextFieldSlot(), this.genClearIcon(), this.genIconSlot(), this.genProgress()];
    },

    genFieldset() {
      if (!this.outlined) return null;
      return this.$createElement('fieldset', {
        attrs: {
          'aria-hidden': true
        }
      }, [this.genLegend()]);
    },

    genLabel() {
      if (!this.showLabel) return null;
      const data = {
        props: {
          absolute: true,
          color: this.validationState,
          dark: this.dark,
          disabled: this.isDisabled,
          focused: !this.isSingle && (this.isFocused || !!this.validationState),
          for: this.computedId,
          left: this.labelPosition.left,
          light: this.light,
          right: this.labelPosition.right,
          value: this.labelValue
        }
      };
      return this.$createElement(_VLabel__WEBPACK_IMPORTED_MODULE_10__["default"], data, this.$slots.label || this.label);
    },

    genLegend() {
      const width = !this.singleLine && (this.labelValue || this.isDirty) ? this.labelWidth : 0;
      const span = this.$createElement('span', {
        domProps: {
          innerHTML: '&#8203;'
        },
        staticClass: 'notranslate'
      });
      return this.$createElement('legend', {
        style: {
          width: !this.isSingle ? (0,_util_helpers__WEBPACK_IMPORTED_MODULE_11__.convertToUnit)(width) : undefined
        }
      }, [span]);
    },

    genInput() {
      const listeners = Object.assign({}, this.listeners$);
      delete listeners.change; // Change should not be bound externally

      const {
        title,
        ...inputAttrs
      } = this.attrs$;
      return this.$createElement('input', {
        style: {},
        domProps: {
          value: this.type === 'number' && Object.is(this.lazyValue, -0) ? '-0' : this.lazyValue
        },
        attrs: { ...inputAttrs,
          autofocus: this.autofocus,
          disabled: this.isDisabled,
          id: this.computedId,
          placeholder: this.persistentPlaceholder || this.isFocused || !this.hasLabel ? this.placeholder : undefined,
          readonly: this.isReadonly,
          type: this.type
        },
        on: Object.assign(listeners, {
          blur: this.onBlur,
          input: this.onInput,
          focus: this.onFocus,
          keydown: this.onKeyDown
        }),
        ref: 'input',
        directives: [{
          name: 'resize',
          modifiers: {
            quiet: true
          },
          value: this.onResize
        }]
      });
    },

    genMessages() {
      if (!this.showDetails) return null;
      const messagesNode = _VInput__WEBPACK_IMPORTED_MODULE_2__["default"].options.methods.genMessages.call(this);
      const counterNode = this.genCounter();
      return this.$createElement('div', {
        staticClass: 'v-text-field__details'
      }, [messagesNode, counterNode]);
    },

    genTextFieldSlot() {
      return this.$createElement('div', {
        staticClass: 'v-text-field__slot'
      }, [this.genLabel(), this.prefix ? this.genAffix('prefix') : null, this.genInput(), this.suffix ? this.genAffix('suffix') : null]);
    },

    genAffix(type) {
      return this.$createElement('div', {
        class: `v-text-field__${type}`,
        ref: type
      }, this[type]);
    },

    onBlur(e) {
      this.isFocused = false;
      e && this.$nextTick(() => this.$emit('blur', e));
    },

    onClick() {
      if (this.isFocused || this.isDisabled || !this.$refs.input) return;
      this.$refs.input.focus();
    },

    onFocus(e) {
      if (!this.$refs.input) return;
      const root = (0,_util_dom__WEBPACK_IMPORTED_MODULE_12__.attachedRoot)(this.$el);
      if (!root) return;

      if (root.activeElement !== this.$refs.input) {
        return this.$refs.input.focus();
      }

      if (!this.isFocused) {
        this.isFocused = true;
        e && this.$emit('focus', e);
      }
    },

    onInput(e) {
      const target = e.target;
      this.internalValue = target.value;
      this.badInput = target.validity && target.validity.badInput;
    },

    onKeyDown(e) {
      if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_11__.keyCodes.enter && this.lazyValue !== this.initialValue) {
        this.initialValue = this.lazyValue;
        this.$emit('change', this.initialValue);
      }

      this.$emit('keydown', e);
    },

    onMouseDown(e) {
      // Prevent input from being blurred
      if (e.target !== this.$refs.input) {
        e.preventDefault();
        e.stopPropagation();
      }

      _VInput__WEBPACK_IMPORTED_MODULE_2__["default"].options.methods.onMouseDown.call(this, e);
    },

    onMouseUp(e) {
      if (this.hasMouseDown) this.focus();
      _VInput__WEBPACK_IMPORTED_MODULE_2__["default"].options.methods.onMouseUp.call(this, e);
    },

    setLabelWidth() {
      if (!this.outlined) return;
      this.labelWidth = this.$refs.label ? Math.min(this.$refs.label.scrollWidth * 0.75 + 6, this.$el.offsetWidth - 24) : 0;
    },

    setPrefixWidth() {
      if (!this.$refs.prefix) return;
      this.prefixWidth = this.$refs.prefix.offsetWidth;
    },

    setPrependWidth() {
      if (!this.outlined || !this.$refs['prepend-inner']) return;
      this.prependWidth = this.$refs['prepend-inner'].offsetWidth;
    },

    tryAutofocus() {
      if (!this.autofocus || typeof document === 'undefined' || !this.$refs.input) return false;
      const root = (0,_util_dom__WEBPACK_IMPORTED_MODULE_12__.attachedRoot)(this.$el);
      if (!root || root.activeElement === this.$refs.input) return false;
      this.$refs.input.focus();
      return true;
    },

    updateValue(val) {
      // Sets validationState from validatable
      this.hasColor = val;

      if (val) {
        this.initialValue = this.lazyValue;
      } else if (this.initialValue !== this.lazyValue) {
        this.$emit('change', this.lazyValue);
      }
    },

    onResize() {
      this.setLabelWidth();
      this.setPrefixWidth();
      this.setPrependWidth();
    }

  }
}));
//# sourceMappingURL=VTextField.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VThemeProvider/VThemeProvider.js":
/*!******************************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VThemeProvider/VThemeProvider.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
// Mixins

/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mixins_themeable__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: 'v-theme-provider',
  props: {
    root: Boolean
  },
  computed: {
    isDark() {
      return this.root ? this.rootIsDark : _mixins_themeable__WEBPACK_IMPORTED_MODULE_0__["default"].options.computed.isDark.call(this);
    }

  },

  render() {
    /* istanbul ignore next */
    return this.$slots.default && this.$slots.default.find(node => !node.isComment && node.text !== ' ');
  }

}));
//# sourceMappingURL=VThemeProvider.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/activatable/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/activatable/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _delayable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../delayable */ "./node_modules/vuetify/lib/mixins/delayable/index.js");
/* harmony import */ var _toggleable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toggleable */ "./node_modules/vuetify/lib/mixins/toggleable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
// Mixins

 // Utilities




const baseMixins = (0,_util_mixins__WEBPACK_IMPORTED_MODULE_0__["default"])(_delayable__WEBPACK_IMPORTED_MODULE_1__["default"], _toggleable__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMixins.extend({
  name: 'activatable',
  props: {
    activator: {
      default: null,
      validator: val => {
        return ['string', 'object'].includes(typeof val);
      }
    },
    disabled: Boolean,
    internalActivator: Boolean,
    openOnClick: {
      type: Boolean,
      default: true
    },
    openOnHover: Boolean,
    openOnFocus: Boolean
  },
  data: () => ({
    // Do not use this directly, call getActivator() instead
    activatorElement: null,
    activatorNode: [],
    events: ['click', 'mouseenter', 'mouseleave', 'focus'],
    listeners: {}
  }),
  watch: {
    activator: 'resetActivator',
    openOnFocus: 'resetActivator',
    openOnHover: 'resetActivator'
  },

  mounted() {
    const slotType = (0,_util_helpers__WEBPACK_IMPORTED_MODULE_3__.getSlotType)(this, 'activator', true);

    if (slotType && ['v-slot', 'normal'].includes(slotType)) {
      (0,_util_console__WEBPACK_IMPORTED_MODULE_4__.consoleError)(`The activator slot must be bound, try '<template v-slot:activator="{ on }"><v-btn v-on="on">'`, this);
    }

    this.addActivatorEvents();
  },

  beforeDestroy() {
    this.removeActivatorEvents();
  },

  methods: {
    addActivatorEvents() {
      if (!this.activator || this.disabled || !this.getActivator()) return;
      this.listeners = this.genActivatorListeners();
      const keys = Object.keys(this.listeners);

      for (const key of keys) {
        this.getActivator().addEventListener(key, this.listeners[key]);
      }
    },

    genActivator() {
      const node = (0,_util_helpers__WEBPACK_IMPORTED_MODULE_3__.getSlot)(this, 'activator', Object.assign(this.getValueProxy(), {
        on: this.genActivatorListeners(),
        attrs: this.genActivatorAttributes()
      })) || [];
      this.activatorNode = node;
      return node;
    },

    genActivatorAttributes() {
      return {
        role: this.openOnClick && !this.openOnHover ? 'button' : undefined,
        'aria-haspopup': true,
        'aria-expanded': String(this.isActive)
      };
    },

    genActivatorListeners() {
      if (this.disabled) return {};
      const listeners = {};

      if (this.openOnHover) {
        listeners.mouseenter = e => {
          this.getActivator(e);
          this.runDelay('open');
        };

        listeners.mouseleave = e => {
          this.getActivator(e);
          this.runDelay('close');
        };
      } else if (this.openOnClick) {
        listeners.click = e => {
          const activator = this.getActivator(e);
          if (activator) activator.focus();
          e.stopPropagation();
          this.isActive = !this.isActive;
        };
      }

      if (this.openOnFocus) {
        listeners.focus = e => {
          this.getActivator(e);
          e.stopPropagation();
          this.isActive = !this.isActive;
        };
      }

      return listeners;
    },

    getActivator(e) {
      var _activator;

      // If we've already fetched the activator, re-use
      if (this.activatorElement) return this.activatorElement;
      let activator = null;

      if (this.activator) {
        const target = this.internalActivator ? this.$el : document;

        if (typeof this.activator === 'string') {
          // Selector
          activator = target.querySelector(this.activator);
        } else if (this.activator.$el) {
          // Component (ref)
          activator = this.activator.$el;
        } else {
          // HTMLElement | Element
          activator = this.activator;
        }
      } else if (this.activatorNode.length === 1 || this.activatorNode.length && !e) {
        // Use the contents of the activator slot
        // There's either only one element in it or we
        // don't have a click event to use as a last resort
        const vm = this.activatorNode[0].componentInstance;

        if (vm && vm.$options.mixins && //                         Activatable is indirectly used via Menuable
        vm.$options.mixins.some(m => m.options && ['activatable', 'menuable'].includes(m.options.name))) {
          // Activator is actually another activatible component, use its activator (#8846)
          activator = vm.getActivator();
        } else {
          activator = this.activatorNode[0].elm;
        }
      } else if (e) {
        // Activated by a click or focus event
        activator = e.currentTarget || e.target;
      } // The activator should only be a valid element (Ignore comments and text nodes)


      this.activatorElement = ((_activator = activator) == null ? void 0 : _activator.nodeType) === Node.ELEMENT_NODE ? activator : null;
      return this.activatorElement;
    },

    getContentSlot() {
      return (0,_util_helpers__WEBPACK_IMPORTED_MODULE_3__.getSlot)(this, 'default', this.getValueProxy(), true);
    },

    getValueProxy() {
      const self = this;
      return {
        get value() {
          return self.isActive;
        },

        set value(isActive) {
          self.isActive = isActive;
        }

      };
    },

    removeActivatorEvents() {
      if (!this.activator || !this.activatorElement) return;
      const keys = Object.keys(this.listeners);

      for (const key of keys) {
        this.activatorElement.removeEventListener(key, this.listeners[key]);
      }

      this.listeners = {};
    },

    resetActivator() {
      this.removeActivatorEvents();
      this.activatorElement = null;
      this.getActivator();
      this.addActivatorEvents();
    }

  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/delayable/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/delayable/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

/**
 * Delayable
 *
 * @mixin
 *
 * Changes the open or close delay time for elements
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend().extend({
  name: 'delayable',
  props: {
    openDelay: {
      type: [Number, String],
      default: 0
    },
    closeDelay: {
      type: [Number, String],
      default: 0
    }
  },
  data: () => ({
    openTimeout: undefined,
    closeTimeout: undefined
  }),
  methods: {
    /**
     * Clear any pending delay timers from executing
     */
    clearDelay() {
      clearTimeout(this.openTimeout);
      clearTimeout(this.closeTimeout);
    },

    /**
     * Runs callback after a specified delay
     */
    runDelay(type, cb) {
      this.clearDelay();
      const delay = parseInt(this[`${type}Delay`], 10);
      this[`${type}Timeout`] = setTimeout(cb || (() => {
        this.isActive = {
          open: true,
          close: false
        }[type];
      }), delay);
    }

  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/detachable/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/detachable/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bootable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bootable */ "./node_modules/vuetify/lib/mixins/bootable/index.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
// Mixins
 // Utilities





function validateAttachTarget(val) {
  const type = typeof val;
  if (type === 'boolean' || type === 'string') return true;
  return val.nodeType === Node.ELEMENT_NODE;
}

function removeActivator(activator) {
  activator.forEach(node => {
    node.elm && node.elm.parentNode && node.elm.parentNode.removeChild(node.elm);
  });
}
/* @vue/component */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_util_mixins__WEBPACK_IMPORTED_MODULE_0__["default"])(_bootable__WEBPACK_IMPORTED_MODULE_1__["default"]).extend({
  name: 'detachable',
  props: {
    attach: {
      default: false,
      validator: validateAttachTarget
    },
    contentClass: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    activatorNode: null,
    hasDetached: false
  }),
  watch: {
    attach() {
      this.hasDetached = false;
      this.initDetach();
    },

    hasContent() {
      this.$nextTick(this.initDetach);
    }

  },

  beforeMount() {
    this.$nextTick(() => {
      if (this.activatorNode) {
        const activator = Array.isArray(this.activatorNode) ? this.activatorNode : [this.activatorNode];
        activator.forEach(node => {
          if (!node.elm) return;
          if (!this.$el.parentNode) return;
          const target = this.$el === this.$el.parentNode.firstChild ? this.$el : this.$el.nextSibling;
          this.$el.parentNode.insertBefore(node.elm, target);
        });
      }
    });
  },

  mounted() {
    this.hasContent && this.initDetach();
  },

  deactivated() {
    this.isActive = false;
  },

  beforeDestroy() {
    if (this.$refs.content && this.$refs.content.parentNode) {
      this.$refs.content.parentNode.removeChild(this.$refs.content);
    }
  },

  destroyed() {
    if (this.activatorNode) {
      const activator = Array.isArray(this.activatorNode) ? this.activatorNode : [this.activatorNode];

      if (this.$el.isConnected) {
        // Component has been destroyed but the element still exists, we must be in a transition
        // Wait for the transition to finish before cleaning up the detached activator
        const observer = new MutationObserver(list => {
          if (list.some(record => Array.from(record.removedNodes).includes(this.$el))) {
            observer.disconnect();
            removeActivator(activator);
          }
        });
        observer.observe(this.$el.parentNode, {
          subtree: false,
          childList: true
        });
      } else {
        removeActivator(activator);
      }
    }
  },

  methods: {
    getScopeIdAttrs() {
      const scopeId = (0,_util_helpers__WEBPACK_IMPORTED_MODULE_2__.getObjectValueByPath)(this.$vnode, 'context.$options._scopeId');
      return scopeId && {
        [scopeId]: ''
      };
    },

    initDetach() {
      if (this._isDestroyed || !this.$refs.content || this.hasDetached || // Leave menu in place if attached
      // and dev has not changed target
      this.attach === '' || // If used as a boolean prop (<v-menu attach>)
      this.attach === true || // If bound to a boolean (<v-menu :attach="true">)
      this.attach === 'attach' // If bound as boolean prop in pug (v-menu(attach))
      ) return;
      let target;

      if (this.attach === false) {
        // Default, detach to app
        target = document.querySelector('[data-app]');
      } else if (typeof this.attach === 'string') {
        // CSS selector
        target = document.querySelector(this.attach);
      } else {
        // DOM Element
        target = this.attach;
      }

      if (!target) {
        (0,_util_console__WEBPACK_IMPORTED_MODULE_3__.consoleWarn)(`Unable to locate target ${this.attach || '[data-app]'}`, this);
        return;
      }

      target.appendChild(this.$refs.content);
      this.hasDetached = true;
    }

  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/filterable/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/filterable/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: 'filterable',
  props: {
    noDataText: {
      type: String,
      default: '$vuetify.noDataText'
    }
  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/intersectable/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/intersectable/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ intersectable)
/* harmony export */ });
/* harmony import */ var _directives_intersect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/intersect */ "./node_modules/vuetify/lib/directives/intersect/index.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
// Directives
 // Utilities

 // Types


function intersectable(options) {
  return vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
    name: 'intersectable',
    data: () => ({
      isIntersecting: false
    }),

    mounted() {
      _directives_intersect__WEBPACK_IMPORTED_MODULE_1__["default"].inserted(this.$el, {
        name: 'intersect',
        value: this.onObserve
      }, this.$vnode);
    },

    destroyed() {
      _directives_intersect__WEBPACK_IMPORTED_MODULE_1__["default"].unbind(this.$el, {
        name: 'intersect',
        value: this.onObserve
      }, this.$vnode);
    },

    methods: {
      onObserve(entries, observer, isIntersecting) {
        this.isIntersecting = isIntersecting;
        if (!isIntersecting) return;

        for (let i = 0, length = options.onVisible.length; i < length; i++) {
          const callback = this[options.onVisible[i]];

          if (typeof callback === 'function') {
            callback();
            continue;
          }

          (0,_util_console__WEBPACK_IMPORTED_MODULE_2__.consoleWarn)(options.onVisible[i] + ' method is not available on the instance but referenced in intersectable mixin options');
        }
      }

    }
  });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/loadable/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/loadable/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _components_VProgressLinear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");


/**
 * Loadable
 *
 * @mixin
 *
 * Used to add linear progress bar to components
 * Can use a default bar with a specific color
 * or designate a custom progress linear bar
 */

/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend().extend({
  name: 'loadable',
  props: {
    loading: {
      type: [Boolean, String],
      default: false
    },
    loaderHeight: {
      type: [Number, String],
      default: 2
    }
  },
  methods: {
    genProgress() {
      if (this.loading === false) return null;
      return this.$slots.progress || this.$createElement(_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_1__["default"], {
        props: {
          absolute: true,
          color: this.loading === true || this.loading === '' ? this.color || 'primary' : this.loading,
          height: this.loaderHeight,
          indeterminate: true
        }
      });
    }

  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/menuable/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/menuable/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stackable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stackable */ "./node_modules/vuetify/lib/mixins/stackable/index.js");
/* harmony import */ var _positionable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../positionable */ "./node_modules/vuetify/lib/mixins/positionable/index.js");
/* harmony import */ var _activatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../activatable */ "./node_modules/vuetify/lib/mixins/activatable/index.js");
/* harmony import */ var _detachable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../detachable */ "./node_modules/vuetify/lib/mixins/detachable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
// Mixins



 // Utilities



const baseMixins = (0,_util_mixins__WEBPACK_IMPORTED_MODULE_0__["default"])(_stackable__WEBPACK_IMPORTED_MODULE_1__["default"], (0,_positionable__WEBPACK_IMPORTED_MODULE_2__.factory)(['top', 'right', 'bottom', 'left', 'absolute']), _activatable__WEBPACK_IMPORTED_MODULE_3__["default"], _detachable__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMixins.extend().extend({
  name: 'menuable',
  props: {
    allowOverflow: Boolean,
    light: Boolean,
    dark: Boolean,
    maxWidth: {
      type: [Number, String],
      default: 'auto'
    },
    minWidth: [Number, String],
    nudgeBottom: {
      type: [Number, String],
      default: 0
    },
    nudgeLeft: {
      type: [Number, String],
      default: 0
    },
    nudgeRight: {
      type: [Number, String],
      default: 0
    },
    nudgeTop: {
      type: [Number, String],
      default: 0
    },
    nudgeWidth: {
      type: [Number, String],
      default: 0
    },
    offsetOverflow: Boolean,
    positionX: {
      type: Number,
      default: null
    },
    positionY: {
      type: Number,
      default: null
    },
    zIndex: {
      type: [Number, String],
      default: null
    }
  },
  data: () => ({
    activatorNode: [],
    absoluteX: 0,
    absoluteY: 0,
    activatedBy: null,
    activatorFixed: false,
    dimensions: {
      activator: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: 0,
        height: 0,
        offsetTop: 0,
        scrollHeight: 0,
        offsetLeft: 0
      },
      content: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: 0,
        height: 0,
        offsetTop: 0,
        scrollHeight: 0
      }
    },
    relativeYOffset: 0,
    hasJustFocused: false,
    hasWindow: false,
    inputActivator: false,
    isContentActive: false,
    pageWidth: 0,
    pageYOffset: 0,
    stackClass: 'v-menu__content--active',
    stackMinZIndex: 6
  }),
  computed: {
    computedLeft() {
      const a = this.dimensions.activator;
      const c = this.dimensions.content;
      const activatorLeft = (this.attach !== false ? a.offsetLeft : a.left) || 0;
      const minWidth = Math.max(a.width, c.width);
      let left = 0;
      left += activatorLeft;
      if (this.left || this.$vuetify.rtl && !this.right) left -= minWidth - a.width;

      if (this.offsetX) {
        const maxWidth = isNaN(Number(this.maxWidth)) ? a.width : Math.min(a.width, Number(this.maxWidth));
        left += this.left ? -maxWidth : a.width;
      }

      if (this.nudgeLeft) left -= parseInt(this.nudgeLeft);
      if (this.nudgeRight) left += parseInt(this.nudgeRight);
      return left;
    },

    computedTop() {
      const a = this.dimensions.activator;
      const c = this.dimensions.content;
      let top = 0;
      if (this.top) top += a.height - c.height;
      if (this.attach !== false) top += a.offsetTop;else top += a.top + this.pageYOffset;
      if (this.offsetY) top += this.top ? -a.height : a.height;
      if (this.nudgeTop) top -= parseInt(this.nudgeTop);
      if (this.nudgeBottom) top += parseInt(this.nudgeBottom);
      return top;
    },

    hasActivator() {
      return !!this.$slots.activator || !!this.$scopedSlots.activator || !!this.activator || !!this.inputActivator;
    },

    absoluteYOffset() {
      return this.pageYOffset - this.relativeYOffset;
    }

  },
  watch: {
    disabled(val) {
      val && this.callDeactivate();
    },

    isActive(val) {
      if (this.disabled) return;
      val ? this.callActivate() : this.callDeactivate();
    },

    positionX: 'updateDimensions',
    positionY: 'updateDimensions'
  },

  beforeMount() {
    this.hasWindow = typeof window !== 'undefined';

    if (this.hasWindow) {
      window.addEventListener('resize', this.updateDimensions, false);
    }
  },

  beforeDestroy() {
    if (this.hasWindow) {
      window.removeEventListener('resize', this.updateDimensions, false);
    }
  },

  methods: {
    absolutePosition() {
      return {
        offsetTop: this.positionY || this.absoluteY,
        offsetLeft: this.positionX || this.absoluteX,
        scrollHeight: 0,
        top: this.positionY || this.absoluteY,
        bottom: this.positionY || this.absoluteY,
        left: this.positionX || this.absoluteX,
        right: this.positionX || this.absoluteX,
        height: 0,
        width: 0
      };
    },

    activate() {},

    calcLeft(menuWidth) {
      return (0,_util_helpers__WEBPACK_IMPORTED_MODULE_5__.convertToUnit)(this.attach !== false ? this.computedLeft : this.calcXOverflow(this.computedLeft, menuWidth));
    },

    calcTop() {
      return (0,_util_helpers__WEBPACK_IMPORTED_MODULE_5__.convertToUnit)(this.attach !== false ? this.computedTop : this.calcYOverflow(this.computedTop));
    },

    calcXOverflow(left, menuWidth) {
      const xOverflow = left + menuWidth - this.pageWidth + 12;

      if ((!this.left || this.right) && xOverflow > 0) {
        left = Math.max(left - xOverflow, 0);
      } else {
        left = Math.max(left, 12);
      }

      return left + this.getOffsetLeft();
    },

    calcYOverflow(top) {
      const documentHeight = this.getInnerHeight();
      const toTop = this.absoluteYOffset + documentHeight;
      const activator = this.dimensions.activator;
      const contentHeight = this.dimensions.content.height;
      const totalHeight = top + contentHeight;
      const isOverflowing = toTop < totalHeight; // If overflowing bottom and offset
      // TODO: set 'bottom' position instead of 'top'

      if (isOverflowing && this.offsetOverflow && // If we don't have enough room to offset
      // the overflow, don't offset
      activator.top > contentHeight) {
        top = this.pageYOffset + (activator.top - contentHeight); // If overflowing bottom
      } else if (isOverflowing && !this.allowOverflow) {
        top = toTop - contentHeight - 12; // If overflowing top
      } else if (top < this.absoluteYOffset && !this.allowOverflow) {
        top = this.absoluteYOffset + 12;
      }

      return top < 12 ? 12 : top;
    },

    callActivate() {
      if (!this.hasWindow) return;
      this.activate();
    },

    callDeactivate() {
      this.isContentActive = false;
      this.deactivate();
    },

    checkForPageYOffset() {
      if (this.hasWindow) {
        this.pageYOffset = this.activatorFixed ? 0 : this.getOffsetTop();
      }
    },

    checkActivatorFixed() {
      if (this.attach !== false) return;
      let el = this.getActivator();

      while (el) {
        if (window.getComputedStyle(el).position === 'fixed') {
          this.activatorFixed = true;
          return;
        }

        el = el.offsetParent;
      }

      this.activatorFixed = false;
    },

    deactivate() {},

    genActivatorListeners() {
      const listeners = _activatable__WEBPACK_IMPORTED_MODULE_3__["default"].options.methods.genActivatorListeners.call(this);
      const onClick = listeners.click;

      if (onClick) {
        listeners.click = e => {
          if (this.openOnClick) {
            onClick && onClick(e);
          }

          this.absoluteX = e.clientX;
          this.absoluteY = e.clientY;
        };
      }

      return listeners;
    },

    getInnerHeight() {
      if (!this.hasWindow) return 0;
      return window.innerHeight || document.documentElement.clientHeight;
    },

    getOffsetLeft() {
      if (!this.hasWindow) return 0;
      return window.pageXOffset || document.documentElement.scrollLeft;
    },

    getOffsetTop() {
      if (!this.hasWindow) return 0;
      return window.pageYOffset || document.documentElement.scrollTop;
    },

    getRoundedBoundedClientRect(el) {
      const rect = el.getBoundingClientRect();
      return {
        top: Math.round(rect.top),
        left: Math.round(rect.left),
        bottom: Math.round(rect.bottom),
        right: Math.round(rect.right),
        width: Math.round(rect.width),
        height: Math.round(rect.height)
      };
    },

    measure(el) {
      if (!el || !this.hasWindow) return null;
      const rect = this.getRoundedBoundedClientRect(el); // Account for activator margin

      if (this.attach !== false) {
        const style = window.getComputedStyle(el);
        rect.left = parseInt(style.marginLeft);
        rect.top = parseInt(style.marginTop);
      }

      return rect;
    },

    sneakPeek(cb) {
      requestAnimationFrame(() => {
        const el = this.$refs.content;

        if (!el || el.style.display !== 'none') {
          cb();
          return;
        }

        el.style.display = 'inline-block';
        cb();
        el.style.display = 'none';
      });
    },

    startTransition() {
      return new Promise(resolve => requestAnimationFrame(() => {
        this.isContentActive = this.hasJustFocused = this.isActive;
        resolve();
      }));
    },

    updateDimensions() {
      this.hasWindow = typeof window !== 'undefined';
      this.checkActivatorFixed();
      this.checkForPageYOffset();
      this.pageWidth = document.documentElement.clientWidth;
      const dimensions = {
        activator: { ...this.dimensions.activator
        },
        content: { ...this.dimensions.content
        }
      }; // Activator should already be shown

      if (!this.hasActivator || this.absolute) {
        dimensions.activator = this.absolutePosition();
      } else {
        const activator = this.getActivator();
        if (!activator) return;
        dimensions.activator = this.measure(activator);
        dimensions.activator.offsetLeft = activator.offsetLeft;

        if (this.attach !== false) {
          // account for css padding causing things to not line up
          // this is mostly for v-autocomplete, hopefully it won't break anything
          dimensions.activator.offsetTop = activator.offsetTop;
        } else {
          dimensions.activator.offsetTop = 0;
        }
      } // Display and hide to get dimensions


      this.sneakPeek(() => {
        if (this.$refs.content) {
          if (this.$refs.content.offsetParent) {
            const offsetRect = this.getRoundedBoundedClientRect(this.$refs.content.offsetParent);
            this.relativeYOffset = window.pageYOffset + offsetRect.top;
            dimensions.activator.top -= this.relativeYOffset;
            dimensions.activator.left -= window.pageXOffset + offsetRect.left;
          }

          dimensions.content = this.measure(this.$refs.content);
        }

        this.dimensions = dimensions;
      });
    }

  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/returnable/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/returnable/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: 'returnable',
  props: {
    returnValue: null
  },
  data: () => ({
    isActive: false,
    originalValue: null
  }),
  watch: {
    isActive(val) {
      if (val) {
        this.originalValue = this.returnValue;
      } else {
        this.$emit('update:return-value', this.originalValue);
      }
    }

  },
  methods: {
    save(value) {
      this.originalValue = value;
      setTimeout(() => {
        this.isActive = false;
      });
    }

  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/stackable/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/stackable/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");


/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend().extend({
  name: 'stackable',

  data() {
    return {
      stackElement: null,
      stackExclude: null,
      stackMinZIndex: 0,
      isActive: false
    };
  },

  computed: {
    activeZIndex() {
      if (typeof window === 'undefined') return 0;
      const content = this.stackElement || this.$refs.content; // Return current zindex if not active

      const index = !this.isActive ? (0,_util_helpers__WEBPACK_IMPORTED_MODULE_1__.getZIndex)(content) : this.getMaxZIndex(this.stackExclude || [content]) + 2;
      if (index == null) return index; // Return max current z-index (excluding self) + 2
      // (2 to leave room for an overlay below, if needed)

      return parseInt(index);
    }

  },
  methods: {
    getMaxZIndex(exclude = []) {
      const base = this.$el; // Start with lowest allowed z-index or z-index of
      // base component's element, whichever is greater

      const zis = [this.stackMinZIndex, (0,_util_helpers__WEBPACK_IMPORTED_MODULE_1__.getZIndex)(base)]; // Convert the NodeList to an array to
      // prevent an Edge bug with Symbol.iterator
      // https://github.com/vuetifyjs/vuetify/issues/2146

      const activeElements = [...document.getElementsByClassName('v-menu__content--active'), ...document.getElementsByClassName('v-dialog__content--active')]; // Get z-index for all active dialogs

      for (let index = 0; index < activeElements.length; index++) {
        if (!exclude.includes(activeElements[index])) {
          zis.push((0,_util_helpers__WEBPACK_IMPORTED_MODULE_1__.getZIndex)(activeElements[index]));
        }
      }

      return Math.max(...zis);
    }

  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/validatable/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/validatable/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _colorable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../colorable */ "./node_modules/vuetify/lib/mixins/colorable/index.js");
/* harmony import */ var _themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _registrable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../registrable */ "./node_modules/vuetify/lib/mixins/registrable/index.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
// Mixins


 // Utilities




const baseMixins = (0,_util_mixins__WEBPACK_IMPORTED_MODULE_0__["default"])(_colorable__WEBPACK_IMPORTED_MODULE_1__["default"], (0,_registrable__WEBPACK_IMPORTED_MODULE_2__.inject)('form'), _themeable__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMixins.extend({
  name: 'validatable',
  props: {
    disabled: Boolean,
    error: Boolean,
    errorCount: {
      type: [Number, String],
      default: 1
    },
    errorMessages: {
      type: [String, Array],
      default: () => []
    },
    messages: {
      type: [String, Array],
      default: () => []
    },
    readonly: Boolean,
    rules: {
      type: Array,
      default: () => []
    },
    success: Boolean,
    successMessages: {
      type: [String, Array],
      default: () => []
    },
    validateOnBlur: Boolean,
    value: {
      required: false
    }
  },

  data() {
    return {
      errorBucket: [],
      hasColor: false,
      hasFocused: false,
      hasInput: false,
      isFocused: false,
      isResetting: false,
      lazyValue: this.value,
      valid: false
    };
  },

  computed: {
    computedColor() {
      if (this.isDisabled) return undefined;
      if (this.color) return this.color; // It's assumed that if the input is on a
      // dark background, the user will want to
      // have a white color. If the entire app
      // is setup to be dark, then they will
      // like want to use their primary color

      if (this.isDark && !this.appIsDark) return 'white';else return 'primary';
    },

    hasError() {
      return this.internalErrorMessages.length > 0 || this.errorBucket.length > 0 || this.error;
    },

    // TODO: Add logic that allows the user to enable based
    // upon a good validation
    hasSuccess() {
      return this.internalSuccessMessages.length > 0 || this.success;
    },

    externalError() {
      return this.internalErrorMessages.length > 0 || this.error;
    },

    hasMessages() {
      return this.validationTarget.length > 0;
    },

    hasState() {
      if (this.isDisabled) return false;
      return this.hasSuccess || this.shouldValidate && this.hasError;
    },

    internalErrorMessages() {
      return this.genInternalMessages(this.errorMessages);
    },

    internalMessages() {
      return this.genInternalMessages(this.messages);
    },

    internalSuccessMessages() {
      return this.genInternalMessages(this.successMessages);
    },

    internalValue: {
      get() {
        return this.lazyValue;
      },

      set(val) {
        this.lazyValue = val;
        this.$emit('input', val);
      }

    },

    isDisabled() {
      return this.disabled || !!this.form && this.form.disabled;
    },

    isInteractive() {
      return !this.isDisabled && !this.isReadonly;
    },

    isReadonly() {
      return this.readonly || !!this.form && this.form.readonly;
    },

    shouldValidate() {
      if (this.externalError) return true;
      if (this.isResetting) return false;
      return this.validateOnBlur ? this.hasFocused && !this.isFocused : this.hasInput || this.hasFocused;
    },

    validations() {
      return this.validationTarget.slice(0, Number(this.errorCount));
    },

    validationState() {
      if (this.isDisabled) return undefined;
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor) return this.computedColor;
      return undefined;
    },

    validationTarget() {
      if (this.internalErrorMessages.length > 0) {
        return this.internalErrorMessages;
      } else if (this.successMessages && this.successMessages.length > 0) {
        return this.internalSuccessMessages;
      } else if (this.messages && this.messages.length > 0) {
        return this.internalMessages;
      } else if (this.shouldValidate) {
        return this.errorBucket;
      } else return [];
    }

  },
  watch: {
    rules: {
      handler(newVal, oldVal) {
        if ((0,_util_helpers__WEBPACK_IMPORTED_MODULE_4__.deepEqual)(newVal, oldVal)) return;
        this.validate();
      },

      deep: true
    },

    internalValue() {
      // If it's the first time we're setting input,
      // mark it with hasInput
      this.hasInput = true;
      this.validateOnBlur || this.$nextTick(this.validate);
    },

    isFocused(val) {
      // Should not check validation
      // if disabled
      if (!val && !this.isDisabled) {
        this.hasFocused = true;
        this.validateOnBlur && this.$nextTick(this.validate);
      }
    },

    isResetting() {
      setTimeout(() => {
        this.hasInput = false;
        this.hasFocused = false;
        this.isResetting = false;
        this.validate();
      }, 0);
    },

    hasError(val) {
      if (this.shouldValidate) {
        this.$emit('update:error', val);
      }
    },

    value(val) {
      this.lazyValue = val;
    }

  },

  beforeMount() {
    this.validate();
  },

  created() {
    this.form && this.form.register(this);
  },

  beforeDestroy() {
    this.form && this.form.unregister(this);
  },

  methods: {
    genInternalMessages(messages) {
      if (!messages) return [];else if (Array.isArray(messages)) return messages;else return [messages];
    },

    /** @public */
    reset() {
      this.isResetting = true;
      this.internalValue = Array.isArray(this.internalValue) ? [] : null;
    },

    /** @public */
    resetValidation() {
      this.isResetting = true;
    },

    /** @public */
    validate(force = false, value) {
      const errorBucket = [];
      value = value || this.internalValue;
      if (force) this.hasInput = this.hasFocused = true;

      for (let index = 0; index < this.rules.length; index++) {
        const rule = this.rules[index];
        const valid = typeof rule === 'function' ? rule(value) : rule;

        if (valid === false || typeof valid === 'string') {
          errorBucket.push(valid || '');
        } else if (typeof valid !== 'boolean') {
          (0,_util_console__WEBPACK_IMPORTED_MODULE_5__.consoleError)(`Rules should return a string or boolean, received '${typeof valid}' instead`, this);
        }
      }

      this.errorBucket = errorBucket;
      this.valid = errorBucket.length === 0;
      return this.valid;
    }

  }
}));
//# sourceMappingURL=index.js.map

/***/ })

}]);