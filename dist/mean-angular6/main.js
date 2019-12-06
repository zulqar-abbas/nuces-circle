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

/***/ "./src/app/about-page/about-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/about-page/about-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Sets items to be centred */\r\n.center {\r\n    text-align: center;\r\n}\r\n/* Sets items to be indented left */\r\n.left {\r\n   float: left; \r\n}\r\n/* Angular mat-card item settings */\r\n.card {\r\n    max-width: 450px;\r\n    min-width: 400px;  \r\n    margin: 10px;\r\n}\r\n/* Container div for set children div side by side */\r\n#container {\r\n    display:                 -webkit-box;\r\n    display:                 flex;\r\n    display:                 -webkit-flex; /* Safari 8 */\r\n    flex-wrap:               wrap;\r\n    -webkit-flex-wrap:       wrap;         /* Safari 8 */\r\n    -webkit-box-pack:         center;\r\n            justify-content:         center;\r\n    -webkit-justify-content: center;       /* Safari 8 */\r\n}"

/***/ }),

/***/ "./src/app/about-page/about-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/about-page/about-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <h1>\n    Welcome\n  </h1>\n  <p>\n    TechBook is a github project developed by Cian Gannon and Kevin Barry as part of their coursework in GMIT. This website was\n    devloped as their final year project as part of the Level 8 Software Development course.\n  </p>\n\n  <br>\n\n  <h1>\n    The Team:\n  </h1>\n  <div id=\"container\">\n    <!-- Angular material card for Cian Gannon's GitHub -->\n    <div>\n      <mat-card class=\"card\">\n        <mat-card-header>\n          <img mat-card-avatar src='https://avatars1.githubusercontent.com/u/22448047?s=460&v=4.png'>\n          <mat-card-title><a href=\"https://github.com/cian2009\">Cian Gannon's GitHub</a></mat-card-title>\n          <mat-card-subtitle>Github profile for Cian Gannon</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <p>\n            Software developement (Level 8) student from GMIT\n          </p>\n        </mat-card-content>\n      </mat-card>\n    </div>\n\n    <!-- Angular material card for Kevin Barry's GitHub -->\n    <div>\n      <mat-card class=\"card\">\n        <mat-card-header>\n          <img mat-card-avatar src='https://avatars2.githubusercontent.com/u/22517425?s=460&v=4.png'>\n          <mat-card-title><a href=\"https://github.com/kbarry91\">Kevin Barry's GitHub</a></mat-card-title>\n          <mat-card-subtitle>Github profile for Kevin Barry</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <p>\n            Software developement (Level 8) student from GMIT\n          </p>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n\n  <h1>\n    Documentation:\n  </h1>\n  <div id=\"container\">\n    <!-- Angular material card for Project source code on GitHub -->\n    <div>\n      <mat-card class=\"card\">\n        <mat-card-header>\n          <img mat-card-avatar src='https://avatars2.githubusercontent.com/u/44436082?s=200&v=4.png'>\n          <mat-card-title><a href=\"https://github.com/Final-Year-Project-Cian-Kevin/final-project\">Project Source Code</a></mat-card-title>\n          <mat-card-subtitle>Swagger UI documentation for project API</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <p>\n            The Swagger UI is an open source project to visually render documentation for an API defined with the OpenAPI (Swagger) Specification.\n          </p>\n          <p>\n            Swagger UI lets you visualize and interact with the API’s resources without having any of the implementation logic in place,\n            making it easy for back end implementation and client side consumption.\n          </p>\n        </mat-card-content>\n      </mat-card>\n    </div>\n\n    <!-- Angular material card for Swagger Documentation -->\n    <div>\n      <mat-card class=\"card\">\n        <mat-card-header>\n          <img mat-card-avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Swagger-logo.png/150px-Swagger-logo.png'>\n          <mat-card-title><a href=\"/api-docs/\">Swagger Documentation</a></mat-card-title>\n          <mat-card-subtitle>Swagger UI documentation for project API</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <p>\n            The Swagger UI is an open source project to visually render documentation for an API defined with the OpenAPI (Swagger) Specification.\n          </p>\n          <p>\n            Swagger UI lets you visualize and interact with the API’s resources without having any of the implementation logic in place,\n            making it easy for back end implementation and client side consumption.\n          </p>\n        </mat-card-content>\n      </mat-card>\n    </div>\n\n    <!-- Angular material card for TypeDoc -->\n    <div>\n      <mat-card class=\"card\">\n        <mat-card-header>\n          <img mat-card-avatar src='https://www.sitepen.com/blog/wp-content/uploads/2017/04/typedoc.png'>\n          <mat-card-title><a href=\"/typedoc/\">TypeDoc</a></mat-card-title>\n          <mat-card-subtitle>TypeDoc Documentation</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <p>\n            Typedoc is a Typescript documentation tool. It Create api documentations for typescript projects.\n          </p>\n          <p>\n            TypeDoc is an effective tool for documenting TypeScript projects by annotating functions. \n            TypeDoc can convert this annotated source code and render it into HTML documentation.\n          </p>\n        </mat-card-content>\n      </mat-card>\n    </div>\n\n    <!-- Angular material card for Project Dissertation -->\n    <div>\n      <mat-card class=\"card\">\n        <mat-card-header>\n          <img mat-card-avatar src='https://4.imimg.com/data4/JD/VW/ANDROID-38062260/product-500x500.jpeg'>\n          <mat-card-title><a href=\"https://github.com/Final-Year-Project-Cian-Kevin/final-project\">Dissertation</a></mat-card-title>\n          <mat-card-subtitle>Dissertation for the project</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <p>\n            The disseration goes over all aspects of the project and the technologies involved in developement.\n          </p>\n          <p>\n            The dissertation shows the technologies we picked the advantages over others and other research related to the project. The\n            dissertation.\n          </p>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n\n  <br>\n\n  <h1>\n    The Project Components:\n  </h1>\n  <!-- Angular material card for MEAN Stack -->\n  <div class=\"left\">\n    <mat-card class=\"card\">\n      <mat-card-header>\n        <img mat-card-avatar src='https://www.linnovate.net/sites/all/themes/linnovate/images/mean-picture.png'>\n        <mat-card-title><a href=\"http://mean.io/\">MEAN Stack</a></mat-card-title>\n        <mat-card-subtitle>Mongo, Express, Angular and Node</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>\n          MEAN is a free and open-source JavaScript software stack for building dynamic web sites and web applications.\n        </p>\n        <p>\n          The MEAN stack is MongoDB, Express.js, AngularJS (or Angular), and Node.js. Because all components of the MEAN stack support\n          programs that are written in JavaScript, MEAN applications can be written in one language for both server-side\n          and client-side execution environments.\n        </p>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <!-- Angular material card for Reddit API -->\n  <div class=\"left\">\n    <mat-card class=\"card\">\n      <mat-card-header>\n        <img mat-card-avatar src='https://s18955.pcdn.co/wp-content/uploads/2017/05/Reddit.png'>\n        <mat-card-title><a href=\"https://www.reddit.com/dev/api/\">Reddit API</a></mat-card-title>\n        <mat-card-subtitle>Reddit API used to get more content</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>\n          Reddit is an American social news aggregation, web content rating, and discussion website. Registered members submit content\n          to the site such as links, text posts, and images, which are then voted up or down by other members.\n        </p>\n        <p>\n          Reddit API offers an easy and less stenosis way of accessing the user content on Reddit. It offers access to nearly every\n          feature on the site that a typical user has access to.\n        </p>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <!-- Angular material card for MongoDB -->\n  <div class=\"left\">\n    <mat-card class=\"card\">\n      <mat-card-header>\n        <img mat-card-avatar src='https://miro.medium.com/max/576/1*fY5KPXK0C6csHKhnXkQQ8g.png'>\n        <mat-card-title><a href=\"https://www.mongodb.com/\">MongoDB</a></mat-card-title>\n        <mat-card-subtitle>JSON-like documents with schemata</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>\n          MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like\n          documents with schemata.\n        </p>\n        <p>\n          A record in MongoDB is a document, which is a data structure composed of field and value pairs. MongoDB documents are similar\n          to JavaScript Object Notation objects but use a variant called Binary JSON (BSON)\n        </p>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <!-- Angular material card for Express.js -->\n  <div class=\"left\">\n    <mat-card class=\"card\">\n      <mat-card-header>\n        <img mat-card-avatar src='https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/landscape/expressjslogo.png'>\n        <mat-card-title><a href=\"https://expressjs.com/\">Express.js</a></mat-card-title>\n        <mat-card-subtitle>Web framework for Node.js</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>\n          Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under\n          the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard\n          server framework for Node.js.\n        </p>\n        <p>\n          Fast, unopinionated, minimalist web framework for Node.js. Released on the 22nd of May 2010.\n        </p>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <!-- Angular material card for Angular framework -->\n  <div class=\"left\">\n    <mat-card class=\"card\">\n      <mat-card-header>\n        <img mat-card-avatar src='https://angular.io/assets/images/logos/angular/angular.svg'>\n        <mat-card-title><a href=\"https://angular.io/\">Angular Framework</a></mat-card-title>\n        <mat-card-subtitle>Angular 6 Framework</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>\n          Angular 6 is a JavaScript framework for building web applications and apps in JavaScript, html, and TypeScript, which is\n          a superset of JavaScript. Angular provides built-in features for animation, http service, and materials which in\n          turn has features such as auto-complete, navigation, toolbar, menus, etc.\n        </p>\n        <p>\n          The code is written in TypeScript, which compiles to JavaScript and displays the same in the browser.\n        </p>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <!-- Angular material card for Node.js -->\n  <div class=\"left\">\n    <mat-card class=\"card\">\n      <mat-card-header>\n        <img mat-card-avatar src='https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png'>\n        <mat-card-title><a href=\"https://nodejs.org/en/\">Node.JS</a></mat-card-title>\n        <mat-card-subtitle>JavaScript run-time environment</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>\n          Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.\n          Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts\n          server-side to produce dynamic web page content.\n        </p>\n        <p>\n          Node.js represents a \"JavaScript everywhere\" paradigm, unifying web application development around a single language.\n        </p>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <!-- Angular material card for Passport.js -->\n  <div class=\"left\">\n    <mat-card class=\"card\">\n      <mat-card-header>\n        <img mat-card-avatar src='https://cdn.glitch.com/project-avatar/0d184ee3-fd8d-4b94-acf4-b4e686e57375.png'>\n        <mat-card-title><a href=\"http://www.passportjs.org/\">Passport.JS</a></mat-card-title>\n        <mat-card-subtitle>Authentication middleware for Node.js</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>\n          Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped\n          in to any Express-based web application. A comprehensive set of strategies support authentication using a username\n          and password, Facebook, Twitter, and more.\n        </p>\n        <p>\n          Passport.js offers a secure and flexible way of authenticating users through the JWT which acts as a sites 'Passport'.\n        </p>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <!-- Angular material card for HTML -->\n  <div class=\"left\">\n    <mat-card class=\"card\">\n      <mat-card-header>\n        <img mat-card-avatar src='https://www.lvsys.com/pub/photo/thumb/512px-HTML5-logo.svg_fitbox_700x700.png'>\n        <mat-card-title><a href=\"https://www.w3.org/html/\">HTML</a></mat-card-title>\n        <mat-card-subtitle>Web Pages</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>\n          Hypertext Markup Language is the standard markup language for creating web pages and web applications. With Cascading Style\n          Sheets and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.\n        </p>\n        <p>\n          HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms\n          may be embedded into the rendered page.\n        </p>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <!-- Angular material card for CSS -->\n  <div class=\"left\">\n    <mat-card class=\"card\">\n      <mat-card-header>\n        <img mat-card-avatar src='https://fuzati.com/wp-content/uploads/2016/12/CSS-Logo.png'>\n        <mat-card-title><a href=\"https://www.w3.org/Style/CSS/\">CSS</a></mat-card-title>\n        <mat-card-subtitle>Styling for Web Documents</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>\n          Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup\n          language like HTML.[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.\n        </p>\n        <p>\n          CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. Enables multiple\n          web pages to share CSS in a separate .css file\n        </p>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about-page/about-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/about-page/about-page.component.ts ***!
  \****************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Component for about page.
 *
 * @export
 * @class AboutPageComponent
 * @implements {OnInit}
 */
var AboutPageComponent = /** @class */ (function () {
    /**
     *Creates an instance of AboutPageComponent.
     * @param {Title} titleService
     * @memberof AboutPageComponent
     */
    function AboutPageComponent(titleService) {
        this.titleService = titleService;
    }
    /**
     * Sets page title.
     *
     * @param {string} newTitle - the new title.
     * @memberof AboutPageComponent
     */
    AboutPageComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    /**
     * Runs on page call.
     *
     * @memberof AboutPageComponent
     */
    AboutPageComponent.prototype.ngOnInit = function () {
        // Set page title.
        this.setTitle("TB: About Us");
    };
    AboutPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.css */ "./src/app/about-page/about-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n     This is the main component of an angular app, \n     and all other components are usually present within this component. \n     src/app/app.component.ts is the logic for this component, \n     and src/app/app.component.css is the CSS for this component.\n     This component itself does not do any important logic, but acts as a container for other components.\n-->\n\n<!-- app-header is the component used to fix the logo image to the page -->\n<app-header></app-header>\n\n<!-- router-outlet is used to dynamically bring components into the view when they are called -->\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * This file contains logic for src/app/app.component.html.
 *
 * @export
 * @class AppComponent
 */
var AppComponent = /** @class */ (function () {
    /**
     *Creates an instance of AppComponent.
     * @param {Router} router
     * @param {Renderer2} renderer
     * @memberof AppComponent
     */
    function AppComponent(router, renderer) {
        this.router = router;
        this.renderer = renderer;
        this.title = 'app';
    }
    /**
     * Initilise component.
     *
     * @memberof AppComponent
     */
    AppComponent.prototype.ngOnInit = function () {
        this.renderer.setStyle(document.body, 'background-color', '#DAE0E6'); // Makes all pages have a grey background
    };
    /**
     * Remove JWT token.
     *
     * @memberof AppComponent
     */
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('jwtToken');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _home_page_index_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-page/index/index.component */ "./src/app/home-page/index/index.component.ts");
/* harmony import */ var _books_book_book_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./books/book/book.component */ "./src/app/books/book/book.component.ts");
/* harmony import */ var _books_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./books/book-detail/book-detail.component */ "./src/app/books/book-detail/book-detail.component.ts");
/* harmony import */ var _books_book_create_book_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./books/book-create/book-create.component */ "./src/app/books/book-create/book-create.component.ts");
/* harmony import */ var _books_book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./books/book-edit/book-edit.component */ "./src/app/books/book-edit/book-edit.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _post_reddit_post_reddit_post_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./post/reddit-post/reddit-post.component */ "./src/app/post/reddit-post/reddit-post.component.ts");
/* harmony import */ var _post_comments_comments_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./post/comments/comments.component */ "./src/app/post/comments/comments.component.ts");
/* harmony import */ var _home_page_post_reddit_post_reddit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home-page/post-reddit/post-reddit.component */ "./src/app/home-page/post-reddit/post-reddit.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _post_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./post/post-create/post-create.component */ "./src/app/post/post-create/post-create.component.ts");
/* harmony import */ var _follow_follow_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./follow/follow.component */ "./src/app/follow/follow.component.ts");
/* harmony import */ var _savedposts_savedposts_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./savedposts/savedposts.component */ "./src/app/savedposts/savedposts.component.ts");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");
/* harmony import */ var _logo_header_logo_header_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./logo-header/logo-header.component */ "./src/app/logo-header/logo-header.component.ts");
/* harmony import */ var _shared_image_preview_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/image-preview.directive */ "./src/app/shared/image-preview.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
This is the file where all the components, providers, and modules are defined.
 Without defining them here, they can’t be used elsewhere in the code.
*/







// import the ng2-file-upload directive for uploading images .


// Component Source.



















// Angular Routes.
var appRoutes = [
    {
        path: 'index',
        component: _home_page_index_index_component__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"],
        data: { title: 'Index  Page' }
    },
    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
        data: { title: 'Login' }
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"],
        data: { title: 'Sign Up' }
    },
    {
        path: 'profile/:id',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"],
        data: { title: 'Profile' }
    },
    {
        path: 'post/:id',
        component: _post_reddit_post_reddit_post_component__WEBPACK_IMPORTED_MODULE_18__["RedditPostComponent"],
        data: { title: 'Post' }
    },
    {
        path: 'post-create',
        component: _post_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_22__["PostCreateComponent"],
        data: { title: 'Create New Post' }
    },
    {
        path: 'settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_21__["SettingsComponent"],
        data: { title: 'Settings' }
    },
    {
        path: 'saved/:id',
        component: _savedposts_savedposts_component__WEBPACK_IMPORTED_MODULE_24__["SavedpostsComponent"],
        data: { title: 'Saved' }
    },
    {
        path: 'follow/:id',
        component: _follow_follow_component__WEBPACK_IMPORTED_MODULE_23__["FollowComponent"],
        data: { title: 'Follow List' }
    },
    {
        path: 'about',
        component: _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_25__["AboutPageComponent"],
        data: { title: 'About TechBook' }
    },
    // Book routes used during early development.
    {
        path: 'books',
        component: _books_book_book_component__WEBPACK_IMPORTED_MODULE_10__["BookComponent"],
        data: { title: 'Book List' }
    },
    {
        path: 'book-details/:id',
        component: _books_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_11__["BookDetailComponent"],
        data: { title: 'Book Details' }
    },
    {
        path: 'book-create',
        component: _books_book_create_book_create_component__WEBPACK_IMPORTED_MODULE_12__["BookCreateComponent"],
        data: { title: 'Create Book' }
    },
    {
        path: 'book-edit/:id',
        component: _books_book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_13__["BookEditComponent"],
        data: { title: 'Edit Book' }
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _books_book_book_component__WEBPACK_IMPORTED_MODULE_10__["BookComponent"],
                _books_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_11__["BookDetailComponent"],
                _books_book_create_book_create_component__WEBPACK_IMPORTED_MODULE_12__["BookCreateComponent"],
                _books_book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_13__["BookEditComponent"],
                _home_page_index_index_component__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"],
                _post_reddit_post_reddit_post_component__WEBPACK_IMPORTED_MODULE_18__["RedditPostComponent"],
                _post_comments_comments_component__WEBPACK_IMPORTED_MODULE_19__["CommentsComponent"],
                _home_page_post_reddit_post_reddit_component__WEBPACK_IMPORTED_MODULE_20__["PostRedditComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_21__["SettingsComponent"],
                _post_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_22__["PostCreateComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileSelectDirective"],
                _follow_follow_component__WEBPACK_IMPORTED_MODULE_23__["FollowComponent"],
                _savedposts_savedposts_component__WEBPACK_IMPORTED_MODULE_24__["SavedpostsComponent"],
                _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_25__["AboutPageComponent"],
                _logo_header_logo_header_component__WEBPACK_IMPORTED_MODULE_26__["LogoHeaderComponent"],
                _shared_image_preview_directive__WEBPACK_IMPORTED_MODULE_27__["ImagePreviewDirective"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/books/book-create/book-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/books/book-create/book-create.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-full-width:nth-last-child() {\n  margin-bottom: 10px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/books/book-create/book-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/books/book-create/book-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/books']\"><mat-icon>list</mat-icon></a>\n</div>\n<form [formGroup]=\"bookForm\" (ngSubmit)=\"onFormSubmit(bookForm.value)\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"ISBN\" formControlName=\"isbn\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('isbn').valid && bookForm.get('isbn').touched\">Please enter ISBN</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Title\" formControlName=\"title\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('title').valid && bookForm.get('title').touched\">Please enter Book Title</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Author\" formControlName=\"author\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('author').valid && bookForm.get('author').touched\">Please enter Book Author</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Description\" formControlName=\"description\"\n           [errorStateMatcher]=\"matcher\"></textarea>\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('description').valid && bookForm.get('description').touched\">Please enter Book Description</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Publisher\" formControlName=\"publisher\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('publisher').valid && bookForm.get('publisher').touched\">Please enter Publisher</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Published Year\" formControlName=\"published_year\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('published_year').valid && bookForm.get('published_year').touched\">Please enter Published Year</span>\n    </mat-error>\n  </mat-form-field>\n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!bookForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/books/book-create/book-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/books/book-create/book-create.component.ts ***!
  \************************************************************/
/*! exports provided: BookCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCreateComponent", function() { return BookCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
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




var BookCreateComponent = /** @class */ (function () {
    function BookCreateComponent(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.isbn = '';
        this.title = '';
        this.description = '';
        this.author = '';
        this.publisher = '';
        this.published_year = '';
    }
    BookCreateComponent.prototype.ngOnInit = function () {
        this.bookForm = this.formBuilder.group({
            'isbn': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'title': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'description': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'author': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'publisher': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'published_year': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    BookCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.postBook(form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/book-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    BookCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-create',
            template: __webpack_require__(/*! ./book-create.component.html */ "./src/app/books/book-create/book-create.component.html"),
            styles: [__webpack_require__(/*! ./book-create.component.css */ "./src/app/books/book-create/book-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], BookCreateComponent);
    return BookCreateComponent;
}());



/***/ }),

/***/ "./src/app/books/book-detail/book-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/books/book-detail/book-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 500px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/books/book-detail/book-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/books/book-detail/book-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/books']\"><mat-icon>list</mat-icon></a>\n</div>\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title><h2>{{book.title}}</h2></mat-card-title>\n    <mat-card-subtitle>{{book.description}}</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <dl>\n      <dt>ISBN:</dt>\n      <dd>{{book.isbn}}</dd>\n      <dt>Author:</dt>\n      <dd>{{book.author}}</dd>\n      <dt>Publisher:</dt>\n      <dd>{{book.publisher}}</dd>\n      <dt>Publish Year:</dt>\n      <dd>{{book.published_year}}</dd>\n      <dt>Update Date:</dt>\n      <dd>{{book.updated_date | date}}</dd>\n    </dl>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" [routerLink]=\"['/book-edit', book._id]\"><mat-icon>edit</mat-icon></a>\n    <a mat-raised-button color=\"warn\" (click)=\"deleteBook(book._id)\"><mat-icon>delete</mat-icon></a>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/books/book-detail/book-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/books/book-detail/book-detail.component.ts ***!
  \************************************************************/
/*! exports provided: BookDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailComponent", function() { return BookDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookDetailComponent = /** @class */ (function () {
    function BookDetailComponent(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.book = {};
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        this.getBookDetails(this.route.snapshot.params['id']);
    };
    BookDetailComponent.prototype.getBookDetails = function (id) {
        var _this = this;
        this.api.getBook(id)
            .subscribe(function (data) {
            console.log(data);
            _this.book = data;
        });
    };
    BookDetailComponent.prototype.deleteBook = function (id) {
        var _this = this;
        this.api.deleteBook(id)
            .subscribe(function (res) {
            _this.router.navigate(['/books']);
        }, function (err) {
            console.log(err);
        });
    };
    BookDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-detail',
            template: __webpack_require__(/*! ./book-detail.component.html */ "./src/app/books/book-detail/book-detail.component.html"),
            styles: [__webpack_require__(/*! ./book-detail.component.css */ "./src/app/books/book-detail/book-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BookDetailComponent);
    return BookDetailComponent;
}());



/***/ }),

/***/ "./src/app/books/book-edit/book-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/books/book-edit/book-edit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-full-width:nth-last-child() {\n  margin-bottom: 10px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/books/book-edit/book-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/books/book-edit/book-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" (click)=\"bookDetails()\"><mat-icon>show</mat-icon></a>\n</div>\n<form [formGroup]=\"bookForm\" (ngSubmit)=\"onFormSubmit(bookForm.value)\">\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"ISBN\" formControlName=\"isbn\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('isbn').valid && bookForm.get('isbn').touched\">Please enter ISBN</span>\n    </mat-error>\n  </mat-form-field>\n  \n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Title\" formControlName=\"title\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('title').valid && bookForm.get('title').touched\">Please enter Book Title</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Author\" formControlName=\"author\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('author').valid && bookForm.get('author').touched\">Please enter Book Author</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Description\" formControlName=\"description\"\n           [errorStateMatcher]=\"matcher\"></textarea>\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('description').valid && bookForm.get('description').touched\">Please enter Book Description</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Publisher\" formControlName=\"publisher\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('publisher').valid && bookForm.get('publisher').touched\">Please enter Publisher</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Published Year\" formControlName=\"published_year\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('published_year').valid && bookForm.get('published_year').touched\">Please enter Published Year</span>\n    </mat-error>\n  </mat-form-field>\n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!bookForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/books/book-edit/book-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/books/book-edit/book-edit.component.ts ***!
  \********************************************************/
/*! exports provided: BookEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookEditComponent", function() { return BookEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
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




var BookEditComponent = /** @class */ (function () {
    function BookEditComponent(router, route, api, formBuilder) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.id = '';
        this.isbn = '';
        this.title = '';
        this.description = '';
        this.author = '';
        this.publisher = '';
        this.published_year = '';
    }
    BookEditComponent.prototype.ngOnInit = function () {
        this.getBook(this.route.snapshot.params['id']);
        this.bookForm = this.formBuilder.group({
            'isbn': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'title': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'description': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'author': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'publisher': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'published_year': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    BookEditComponent.prototype.getBook = function (id) {
        var _this = this;
        this.api.getBook(id).subscribe(function (data) {
            _this.id = data._id;
            _this.bookForm.setValue({
                isbn: data.isbn,
                title: data.title,
                description: data.description,
                author: data.author,
                publisher: data.publisher,
                published_year: data.published_year
            });
        });
    };
    BookEditComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.updateBook(this.id, form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/book-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    BookEditComponent.prototype.bookDetails = function () {
        this.router.navigate(['/book-details', this.id]);
    };
    BookEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-edit',
            template: __webpack_require__(/*! ./book-edit.component.html */ "./src/app/books/book-edit/book-edit.component.html"),
            styles: [__webpack_require__(/*! ./book-edit.component.css */ "./src/app/books/book-edit/book-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], BookEditComponent);
    return BookEditComponent;
}());



/***/ }),

/***/ "./src/app/books/book/book.component.css":
/*!***********************************************!*\
  !*** ./src/app/books/book/book.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  overflow: auto;\n}\n\n.isbn-col {\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 100px !important;\n  white-space: unset !important;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/books/book/book.component.html":
/*!************************************************!*\
  !*** ./src/app/books/book/book.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/book-create']\"><mat-icon>add</mat-icon></a>\n</div>\n<div class=\"example-container mat-elevation-z8\">\n  <table mat-table #table [dataSource]=\"dataSource\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"isbn\">\n      <th mat-header-cell *matHeaderCellDef> ISBN </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"isbn-col\"> {{element.isbn}} </td>\n    </ng-container>\n\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef> Title </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n    </ng-container>\n\n    <!-- Author Column -->\n    <ng-container matColumnDef=\"author\">\n      <th mat-header-cell *matHeaderCellDef> Author </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.author}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/book-details/', row._id]\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/books/book/book.component.ts":
/*!**********************************************!*\
  !*** ./src/app/books/book/book.component.ts ***!
  \**********************************************/
/*! exports provided: BookComponent, BookDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDataSource", function() { return BookDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var BookComponent = /** @class */ (function () {
    function BookComponent(api, router) {
        this.api = api;
        this.router = router;
        this.displayedColumns = ['isbn', 'title', 'author'];
        this.dataSource = new BookDataSource(this.api);
        console.log('DEBUG : BookComponent: IN constructor');
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getBooks()
            .subscribe(function (res) {
            console.log(res);
            console.log("test");
            _this.books = res;
        }, function (err) {
            console.log(err);
            if (err.status = 401) {
                _this.router.navigate(['login']);
            }
        });
    };
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/books/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/books/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BookComponent);
    return BookComponent;
}());

var BookDataSource = /** @class */ (function (_super) {
    __extends(BookDataSource, _super);
    function BookDataSource(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        return _this;
    }
    BookDataSource.prototype.connect = function () {
        console.log('connect book component');
        return this.api.getBooks();
    };
    BookDataSource.prototype.disconnect = function () {
    };
    return BookDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/follow/follow.component.css":
/*!*********************************************!*\
  !*** ./src/app/follow/follow.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Angular mat card for profile */\n.profile-card {\n  margin: auto;\n  width: 50%;\n  padding: 10px;\n}\n.mat-button-toggle-group {\n  margin: auto;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n.card{\n  border-radius: 10%;\n  color: lightslategray;\n  border: 3px solid blue;\n\n}\nh3 {\n  text-align: center;\n}\n/* Angular mat h3 tag */\n.profile-card h3 {\n  text-align: center;\n}\n/* Sets scrollable div tag */\ndiv.scrollmenu {\n  overflow: auto;\n  white-space: nowrap;\n}\n/* Sets scrollable div tag */\ndiv.scrollmenu div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  color: black;\n  text-align: center;\n  padding: 14px;\n  text-decoration: none;\n}\n/* Centres image */\nimg.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n"

/***/ }),

/***/ "./src/app/follow/follow.component.html":
/*!**********************************************!*\
  !*** ./src/app/follow/follow.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Toggle to display follow or following -->\n    <h3>Friends of {{username}}</h3>\n<mat-button-toggle-group #group=\"matButtonToggleGroup\" [value]=\"selectedVal\" (change)=\"onValChange()\">\n  \n  <mat-button-toggle value=\"Followers\">\n    <mat-icon>format_align_left</mat-icon>\n    Followers\n  </mat-button-toggle>\n\n  <mat-button-toggle value=\"Following\">\n    <mat-icon>format_align_right</mat-icon>\n    Following\n  </mat-button-toggle>\n\n</mat-button-toggle-group>\n\n<!-- List of all that is following user -->\n<div class=\"profile-card\" *ngIf=\"selectedVal\">\n  <h3>Followers</h3>\n  <div class=\"scrollmenu\">\n\n    <div *ngFor=\"let user of allFollowers\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <img class=\"center\" mat-card-avatar alt=\"Poster\" id=\"poster\" src='/api/assets/images/{{user.image}}'>\n          <h4 class=\"card-title my-0\">{{ user.fullName }}</h4>\n          <p class=\"text-muted my-0\"><a [routerLink]=\"['/profile', user.username]\">@{{ user.username }}</a></p>\n          <p class=\"card-text my-0\">{{ user.bio || 'No bio info'}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- List of all that a user is following -->\n<div class=\"profile-card\" *ngIf=\"!selectedVal\">\n  <h3>Following</h3>\n  <div class=\"scrollmenu\">\n\n    <div *ngFor=\"let user of allFollowing\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <img class=\"center\" mat-card-avatar alt=\"Poster\" id=\"poster\" src='/api/assets/images/{{user.image}}'>\n          <h4 class=\"card-title my-0\">{{ user.fullName }}</h4>\n          <p class=\"text-muted my-0\"><a [routerLink]=\"['/profile', user.username]\">@{{ user.username }}</a></p>\n          <p class=\"card-text my-0\">{{ user.bio || 'No bio info'}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/follow/follow.component.ts":
/*!********************************************!*\
  !*** ./src/app/follow/follow.component.ts ***!
  \********************************************/
/*! exports provided: FollowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowComponent", function() { return FollowComponent; });
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_follow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/follow.service */ "./src/app/services/follow.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Componet for follow page.
 *
 * @export
 * @class FollowComponent
 * @implements {OnInit}
 */
var FollowComponent = /** @class */ (function () {
    /**
     *Creates an instance of FollowComponent.
     * @param {ActivatedRoute} route
     * @param {Title} titleService
     * @param {FollowService} followService
     * @param {Router} router
     * @param {UserService} userService
     * @memberof FollowComponent
     */
    function FollowComponent(route, titleService, followService, router, userService) {
        this.route = route;
        this.titleService = titleService;
        this.followService = followService;
        this.router = router;
        this.userService = userService;
        this.allFollowing = []; // Users that currentuser is following.
        this.allFollowers = []; // Users that are following currentuser.
        this.message = '';
    }
    /**
     * Sets title.
     *
     * @param {string} newTitle - the new title.
     * @memberof FollowComponent
     */
    FollowComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    /**
     * Runs on page call.
     *
     * @memberof FollowComponent
     */
    FollowComponent.prototype.ngOnInit = function () {
        // Set the username to the valuue passed by route.
        this.username = this.route.snapshot.params['id'];
        // Load the follwing data using the username.
        this.loadFollowData(this.username);
        // Set the initial value of the toggle button.
        this.selectedVal = true;
        this.setTitle("TB: " + this.username + "'s Circle");
    };
    /**
     * Change selected value when button is toggled.
     *
     * @memberof FollowComponent
     */
    FollowComponent.prototype.onValChange = function () {
        this.selectedVal = !this.selectedVal;
    };
    /**
     * Load all following data.
     *
     * @param {*} username - username to load.
     * @memberof FollowComponent
     */
    FollowComponent.prototype.loadFollowData = function (username) {
        var _this = this;
        this.followService.getFollowers(username)
            .subscribe(function (res) {
            // If server returned 'true' state.
            if (res.state) {
                var response = res.doc;
                var followers_1 = [];
                var following_1 = [];
                // For each object in response add to array.
                response.forEach(function (obj) {
                    followers_1 = followers_1.concat(obj.userFollowers);
                    following_1 = following_1.concat(obj.userFollowing);
                });
                // Add data to local variables for view.
                _this.allFollowers = followers_1;
                _this.allFollowing = following_1;
                // If server returns false statement
            }
            else {
                _this.message = res.json().msg;
            }
        });
    };
    FollowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-follow',
            template: __webpack_require__(/*! ./follow.component.html */ "./src/app/follow/follow.component.html"),
            styles: [__webpack_require__(/*! ./follow.component.css */ "./src/app/follow/follow.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"], _services_follow_service__WEBPACK_IMPORTED_MODULE_2__["FollowService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])
    ], FollowComponent);
    return FollowComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Header page settings */\n.header-page {\n  color: #fff;\n  font-size: 12px;\n  line-height: 50px;\n  padding: 0 10px;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n/* Divier used to seperate tags */\n.divider {\n  display: inline-block;\n  opacity: .5;\n  padding: 0 4px;\n}\n/* Settings used for buttons */\n.index-button {\n  height: 17%;\n  width: 17%;\n  -webkit-filter: brightness(1.5);\n          filter: brightness(1.5);\n}\n/* Drop down menu options settings */\n.link{\n  padding-right: 10px;\n}\n/* On hover on buttons */\na:hover {\n  text-decoration: none;\n  opacity: 1; \n}\n/* Active buttons */\na:active {\n  text-decoration: none;\n  text-decoration: underline;\n}\n/* Default state of buttons */\na {\n  opacity: 0.7; \n  color: white;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-logo-header></app-logo-header>\n\n<!-- Sticky navbar -->\n<nav class=\"navbar  navbar-light bg-dark navbar-fixed-top sticky-top\">\n\n  <div class=\"container\">\n    <!-- Do not show if user is logged in -->\n    <div *ngIf=\"!userService.isLoggedIn()\">\n      \n      <!-- Form containing basic website function and login bar -->\n      <form class=\"form-inline\">\n        <a [routerLink]=\"['/index']\">\n            <img src=\"/api/assets/images/Logo-Small.png\" class=\"index-button\"/>\n            <span>Home</span>\n        </a>\n\n        <!-- Error message bar -->\n        <div class=\"alert alert-warning alert-dismissible\" role=\"alert\" *ngIf=\"message !== ''\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button> {{message}}\n        </div>\n\n        <!-- Login form -->\n        <form class=\"form-signin\" (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"loginData.username\" name=\"username\" placeholder=\"Username....\" required/>\n          -<input type=\"password\" class=\"form-control\" [(ngModel)]=\"loginData.password\" name=\"password\" placeholder=\"Password....\" required />\n          <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!loginForm.form.valid\">Login</button>\n\n          <!-- Bind anchor to state to automatically generate and update ref-->\n          <!--https://ui-router.github.io/ng1/docs/0.4.2/#/api/ui.router.state.directive:ui-sref-->\n          <a [routerLink]=\"['/signup']\">Signup here</a>\n        </form>\n      </form>\n    </div>\n\n    <!-- Show if user is logged in -->\n    <div *ngIf=\"userService.isLoggedIn()\">\n      <form class=\"form-inline\">\n\n        <!-- Home button route using angular routing -->\n        <a [routerLink]=\"['/index']\" class=\"link\">\n          <mat-icon>home</mat-icon>\n          <span>Home</span>\n        </a>\n\n        <!-- Create post route using angular routing -->\n        <a [routerLink]=\"['/post-create']\" class=\"link\">\n          <mat-icon>local_post_office</mat-icon>\n          <span>Make post</span>\n        </a>\n\n        <!-- About page route using angular routing-->\n        <a [routerLink]=\"['/about']\" class=\"link\">\n          <mat-icon>info</mat-icon>\n          <span>About Us</span>\n        </a>\n\n        <!-- Drop down menu and user image and username -->\n        <div class=\"header-page\">\n          <!-- Logged in users image and username -->\n          <img mat-card-avatar alt=\"Poster\" id=\"poster\" src='/api/assets/images/{{usernamepic}}'> {{username}}\n\n          <!-- Drop down menu button call -->\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n          <mat-icon>arrow_drop_down</mat-icon>\n          </button>\n          <!-- Drop down menu -->\n          <mat-menu #menu=\"matMenu\">\n            <!-- Empty button for padding -->\n            <button mat-menu-item [disabled]=\"isDisabled\">\n                <mat-icon></mat-icon>\n                <span></span>\n            </button>\n\n            <!-- Profile route using angular routing -->\n            <button mat-menu-item [routerLink]=\"['/profile', username]\">\n              <mat-icon>account_circle</mat-icon>\n              <span>Profile</span>\n            </button>\n\n            <!-- Settings route using angular routing -->\n            <button mat-menu-item [routerLink]=\"['/settings']\">\n              <mat-icon>settings</mat-icon>\n              <span>Account</span>\n            </button>\n\n            <!-- Follow routing using angular routing -->\n            <button mat-menu-item [routerLink]=\"['/follow', username]\">\n              <mat-icon>group</mat-icon>\n              <span>Friends</span>\n            </button>\n\n            <!-- Saved route using angular routing -->\n            <button mat-menu-item [routerLink]=\"['/saved', username]\">\n              <mat-icon>save</mat-icon>\n              <span>Saved Posts</span>\n            </button>\n\n            <!-- Logout button -->\n            <button mat-menu-item (click)=\"logout()\">\n              <mat-icon>exit_to_app</mat-icon>\n              <span>Logout</span>\n            </button>\n          </mat-menu>\n        </div>\n      </form>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Component for header.
 *
 * @export
 * @class HeaderComponent
 * @implements {OnInit}
 */
var HeaderComponent = /** @class */ (function () {
    /**
     *Creates an instance of HeaderComponent.
     * @param {UserService} userService
     * @param {Router} router
     * @memberof HeaderComponent
     */
    function HeaderComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loginData = { username: '', password: '' };
        this.message = '';
    }
    /**
     * Initilise page.
     *
     * @memberof HeaderComponent
     */
    HeaderComponent.prototype.ngOnInit = function () {
        // Run username check.
        this.usernameCheck();
    };
    /**
     * Login a user.
     *
     * @memberof HeaderComponent
     */
    HeaderComponent.prototype.login = function () {
        var _this = this;
        this.userService.loginUser(this.loginData)
            .subscribe(function (resp) {
            _this.data = resp;
            // Save response jwtToken.
            _this.userService.saveJwtToken(_this.data.token);
            _this.router.navigate(['index']);
            // Check if user is logged in.
            if (_this.userService.isLoggedIn) {
                // Get user details.
                var curUser = _this.userService.getUserPayLoad();
                // Set logged in user as current user.
                _this.userService.setCurrentUser(curUser);
                // Checks current username.
                _this.usernameCheck();
            }
        }, function (err) {
            // Error message.
            _this.message = err.error.msg;
            // if an error route to main login page.
            _this.router.navigate(['login']);
        });
    };
    /**
     * Logout user.
     *
     * @memberof HeaderComponent
     */
    HeaderComponent.prototype.logout = function () {
        this.username = ""; // Set username to nothing.
        this.userService.logout(); // Logout user using userService.
        this.router.navigate(['index']); // Route user to index.
    };
    /**
     * Checks if user is logged in.
     *
     * @memberof HeaderComponent
     */
    HeaderComponent.prototype.usernameCheck = function () {
        var _this = this;
        if (this.userService.isLoggedIn()) {
            this.userService.getUserData()
                .subscribe(function (res) {
                _this.username = res; // Response from the server.
                _this.getProfileData(res); // Get profile data from logged in user.
            }, function (err) {
                console.log(err);
                if (err.status = 401) {
                    _this.router.navigate(['login']);
                }
            });
        }
    };
    /**
     * Get profile data using username of the user.
     *
     * @param {*} id - the id of profile to get.
     * @memberof HeaderComponent
     */
    HeaderComponent.prototype.getProfileData = function (id) {
        var _this = this;
        this.userService.getProfile(id)
            .subscribe(function (data) {
            _this.usernamepic = data[0].image; // Set user iamge as the image of the returned userdata.
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home-page/index/index.component.css":
/*!*****************************************************!*\
  !*** ./src/app/home-page/index/index.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Index component has no elements of its own. \r\n   Only  inherited elements from other componenets*/"

/***/ }),

/***/ "./src/app/home-page/index/index.component.html":
/*!******************************************************!*\
  !*** ./src/app/home-page/index/index.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Import reddit posts component -->\r\n<app-post-reddit></app-post-reddit>"

/***/ }),

/***/ "./src/app/home-page/index/index.component.ts":
/*!****************************************************!*\
  !*** ./src/app/home-page/index/index.component.ts ***!
  \****************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * IndexComponent for index.
 *
 * @export
 * @class IndexComponent
 * @implements {OnInit}
 */
var IndexComponent = /** @class */ (function () {
    /**
     * Creates an instance of IndexComponent.
     * @param {Renderer2} renderer
     * @memberof IndexComponent
     */
    function IndexComponent(renderer) {
        this.renderer = renderer;
    }
    // On page call.
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/home-page/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/home-page/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/home-page/post-reddit/post-reddit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/home-page/post-reddit/post-reddit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Angular mat card settings */\r\n.post-card {\r\n  max-width: 400px;\r\n  min-width: 400px;\r\n}\r\n/* Settings for username on posts */\r\n.user {\r\n  float: left;\r\n}\r\n/* Settings for title on posts */\r\n.post {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  max-width: 300px;\r\n}\r\n/* Makes scrollable div */\r\ndiv.scrollmenu {\r\n  overflow: auto;\r\n  white-space: nowrap;\r\n}\r\n/* Makes scrollable div */\r\ndiv.scrollmenu div {\r\n  display: inline-block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px;\r\n  text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/home-page/post-reddit/post-reddit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/home-page/post-reddit/post-reddit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- News/Information posts -->\n<h1>News Posts:</h1>\n<!-- Scrollable div -->\n<div class=\"scrollmenu\">\n  <!-- Loop through postsNews variable and ouput each object value -->\n  <div *ngFor=\"let postNews of postsNews\" class=\"example-item\">\n    <!-- Angular mat-card containing a single post -->\n    <mat-card class=\"post-card\">\n      <mat-card-header>\n        <img mat-card-avatar alt=\"Poster\" id=\"poster\" src='/api/assets/images/{{postNews.image}}'>\n        <mat-card-title class=\"post\">{{postNews.title}}</mat-card-title>\n        <mat-card-subtitle [routerLink]=\"['/profile/', postNews.subreddit]\" class=\"user\">{{postNews.subreddit}}</mat-card-subtitle>\n      </mat-card-header>\n      <img mat-card-image [src]=\"postNews.thumbnail\" width=\"100\" height=\"200\">\n      <mat-card-content>\n        <p>\n          {{postNews.selftext}}\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button [routerLink]=\"['/post/', postNews._id]\">VIEW</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n\n<!-- Funny/Entertainment posts -->\n<h1>Banter Bay:</h1>\n<!-- Scrollable div -->\n<div class=\"scrollmenu\">\n  <!-- Loop through postsPopular variable and ouput each object value -->\n  <div *ngFor=\"let postUser of postsPopular\" class=\"example-item\">\n    <!-- Angular mat-card containing a single post -->\n    <mat-card class=\"post-card\">\n      <mat-card-header>\n        <img mat-card-avatar alt=\"Poster\" id=\"poster\" src='/api/assets/images/{{postUser.image}}'>\n        <mat-card-title class=\"post\">{{postUser.title}}</mat-card-title>\n        <mat-card-subtitle [routerLink]=\"['/profile/', postUser.subreddit]\" class=\"user\">{{postUser.subreddit}}</mat-card-subtitle>\n      </mat-card-header>\n      <img mat-card-image [src]=\"postUser.thumbnail\" width=\"100\" height=\"200\">\n      <mat-card-content>\n        <p>\n          {{postUser.selftext}}\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button [routerLink]=\"['/post/', postUser._id]\">VIEW</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n\n<!--Posts made by users on the site -->\n<h1>User Posts:</h1>\n<!-- Scrollable div -->\n<div class=\"scrollmenu\">\n  <!-- Loop through postsUser variable and ouput each object value -->\n  <div *ngFor=\"let postUser of postsUser\" class=\"example-item\">\n    <!-- Angular mat-card containing a single post -->\n    <mat-card class=\"post-card\">\n      <mat-card-header>\n        <img mat-card-avatar alt=\"Poster\" id=\"poster\" src='/api/assets/images/{{postUser.image}}'>\n        <mat-card-title class=\"post\">{{postUser.title}}</mat-card-title>\n        <mat-card-subtitle [routerLink]=\"['/profile/', postUser.subreddit]\" class=\"user\">{{postUser.subreddit}}</mat-card-subtitle>\n      </mat-card-header>\n      <img mat-card-image [src]=\"postUser.thumbnail\" width=\"100\" height=\"200\">\n      <mat-card-content>\n        <p>\n          {{postUser.selftext}}\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button [routerLink]=\"['/post/', postUser._id]\">VIEW</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home-page/post-reddit/post-reddit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/home-page/post-reddit/post-reddit.component.ts ***!
  \****************************************************************/
/*! exports provided: PostRedditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostRedditComponent", function() { return PostRedditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reddit_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/reddit-api.service */ "./src/app/services/reddit-api.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Componet for reddit posts.
 *
 * @export
 * @class PostRedditComponent
 * @implements {OnInit}
 */
var PostRedditComponent = /** @class */ (function () {
    /**
     *Creates an instance of PostRedditComponent.
     * @param {RedditApiService} api
     * @param {Router} router
     * @param {Title} titleService
     * @param {FormBuilder} formBuilder
     * @param {UserService} userAPI
     * @memberof PostRedditComponent
     */
    function PostRedditComponent(api, router, titleService, formBuilder, userAPI) {
        this.api = api;
        this.router = router;
        this.titleService = titleService;
        this.formBuilder = formBuilder;
        this.userAPI = userAPI;
    }
    /**
     * Set title.
     *
     * @param {string} newTitle - the title to set.
     * @memberof PostRedditComponent
     */
    PostRedditComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    /**
     * Runs when page is called.
     *
     * @memberof PostRedditComponent
     */
    PostRedditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Gets all Funny/Entertaining posts from the API.
        this.api.getPostsPF()
            .subscribe(function (res) {
            _this.postsPopular = res; // Set data to local variable.
        }, function (err) {
            console.log(err);
            if (err.status = 401) {
                _this.router.navigate(['login']);
            }
        });
        // Gets all news posts from the API.
        this.api.getPostsNews()
            .subscribe(function (res) {
            _this.postsNews = res;
        }, function (err) {
            console.log(err);
            if (err.status = 401) {
                _this.router.navigate(['login']);
            }
        });
        // Gets all user posts from the API.
        this.api.getPostsUser()
            .subscribe(function (res) {
            _this.postsUser = res;
        }, function (err) {
            console.log(err);
            if (err.status = 401) {
                _this.router.navigate(['login']);
            }
        });
        // Check if user is logged in.
        if (this.userAPI.isLoggedIn()) {
            this.userAPI.getUserData()
                .subscribe(function (res) {
                _this.username = res; // Set username as a local variable.
            }, function (err) {
                console.log(err);
                if (err.status = 401) {
                    _this.router.navigate(['login']);
                }
            });
        }
        // Set title of page.
        this.setTitle("TB: Popular Today!");
        // Wait for get methods to api to finish then run.
        setTimeout(function () {
            _this.getProfileData(); // Gets profile data for each poster.
        }, 200);
    };
    /**
     * Get profile data for each poster.
     *
     * @memberof PostRedditComponent
     */
    PostRedditComponent.prototype.getProfileData = function () {
        var _this = this;
        // Loop through each postsPopular.
        for (var i = 0; i < this.postsPopular.length; i++) {
            // Get profile data for that user.
            this.userAPI.getProfile(this.postsPopular[i].subreddit)
                .subscribe(function (data) {
                for (var i = 0; i < _this.postsPopular.length; i++) {
                    if (_this.postsPopular[i].subreddit == data[0].username) {
                        _this.postsPopular[i]['image'] = data[0].image;
                    }
                }
            });
        }
        // Loop through each postsNews.
        for (var i = 0; i < this.postsNews.length; i++) {
            // Get profile data for that user.
            this.userAPI.getProfile(this.postsNews[i].subreddit)
                .subscribe(function (data) {
                for (var i = 0; i < _this.postsNews.length; i++) {
                    if (_this.postsNews[i].subreddit == data[0].username) {
                        _this.postsNews[i]['image'] = data[0].image;
                    }
                }
            });
        }
        // Loop through each postsUser.
        for (var i = 0; i < this.postsUser.length; i++) {
            // Get profile data for that user.
            this.userAPI.getProfile(this.postsUser[i].subreddit)
                .subscribe(function (data) {
                for (var i = 0; i < _this.postsUser.length; i++) {
                    if (_this.postsUser[i].subreddit == data[0].username) {
                        _this.postsUser[i]['image'] = data[0].image;
                    }
                }
            });
        }
    };
    PostRedditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-reddit',
            template: __webpack_require__(/*! ./post-reddit.component.html */ "./src/app/home-page/post-reddit/post-reddit.component.html"),
            styles: [__webpack_require__(/*! ./post-reddit.component.css */ "./src/app/home-page/post-reddit/post-reddit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_reddit_api_service__WEBPACK_IMPORTED_MODULE_1__["RedditApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], PostRedditComponent);
    return PostRedditComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Form for loggin in user settings */\n.form-signin {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n  margin-bottom: 10px;\n}\n.form-signin .checkbox {\n  font-weight: normal;\n}\n.form-signin .form-control {\n  position: relative;\n  height: auto;\n  box-sizing: border-box;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.form-signin p {\n  margin-top: 10px;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- div containing login data and information -->\n<div class=\"container\">\n  <!-- Form for logging in user -->\n  <form class=\"form-signin\" (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n    <!--Error div that will inform user of incorrect login data -->\n    <div class=\"alert alert-warning alert-dismissible\" role=\"alert\" *ngIf=\"message !== ''\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button> {{message}}\n    </div>\n    <h2 class=\"form-signin-heading\">Please sign in</h2>\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n    <input type=\"email\" class=\"form-control\" placeholder=\"Email address\" [(ngModel)]=\"loginData.username\" name=\"username\" required/>\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"loginData.password\" name=\"password\" required/>\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!loginForm.form.valid\">Sign in</button>\n    <p>\n      Not a member?\n    </p>\n  </form>\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Component for log in page.
 *
 * @export
 * @class LoginComponent
 * @implements {OnInit}
 */
var LoginComponent = /** @class */ (function () {
    /**
     *Creates an instance of LoginComponent.
     * @param {Router} router
     * @param {UserService} userService
     * @param {Title} titleService
     * @memberof LoginComponent
     */
    function LoginComponent(router, userService, titleService) {
        this.router = router;
        this.userService = userService;
        this.titleService = titleService;
        this.loginData = { username: '', password: '' };
        this.message = '';
    }
    /**
     * Set title.
     *
     * @param {string} newTitle- new title.
     * @memberof LoginComponent
     */
    LoginComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    /**
     * Runs when page is called.
     *
     * @memberof LoginComponent
     */
    LoginComponent.prototype.ngOnInit = function () {
        // Set page title.
        this.setTitle("TB: Login");
        // Check if user is already logged in.
        if (this.userService.isLoggedIn()) {
            // Route user to index page.
            this.router.navigate(['index']);
        }
    };
    /**
     * Login a user.
     *
     * @memberof LoginComponent
     */
    LoginComponent.prototype.login = function () {
        var _this = this;
        // Login a user.
        this.userService.loginUser(this.loginData)
            .subscribe(function (resp) {
            _this.data = resp;
            // Save response jwtToken.
            _this.userService.saveJwtToken(_this.data.token);
            location.reload(true); // Page refresh.
        }, function (err) {
            _this.message = err.error.msg;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logo-header/logo-header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/logo-header/logo-header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Angular bakcground settings */\n:host {\n    background-color: white;\n    display: block;\n}\n/* Image settings */\n.header-img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n}"

/***/ }),

/***/ "./src/app/logo-header/logo-header.component.html":
/*!********************************************************!*\
  !*** ./src/app/logo-header/logo-header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Image at the top of every page -->\n<img src=\"/api/assets/images/Logo.png\" class=\"header-img\" />\n"

/***/ }),

/***/ "./src/app/logo-header/logo-header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/logo-header/logo-header.component.ts ***!
  \******************************************************/
/*! exports provided: LogoHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoHeaderComponent", function() { return LogoHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Component for header logo.
 *
 * @export
 * @class LogoHeaderComponent
 * @implements {OnInit}
 */
var LogoHeaderComponent = /** @class */ (function () {
    /**
     *Creates an instance of LogoHeaderComponent.
     * @memberof LogoHeaderComponent
     */
    function LogoHeaderComponent() {
    }
    // Runs when page is called
    LogoHeaderComponent.prototype.ngOnInit = function () {
    };
    LogoHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logo-header',
            template: __webpack_require__(/*! ./logo-header.component.html */ "./src/app/logo-header/logo-header.component.html"),
            styles: [__webpack_require__(/*! ./logo-header.component.css */ "./src/app/logo-header/logo-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoHeaderComponent);
    return LogoHeaderComponent;
}());



/***/ }),

/***/ "./src/app/post/comments/comments.component.css":
/*!******************************************************!*\
  !*** ./src/app/post/comments/comments.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Fill screen from left to right */\r\n.full-with-field {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/post/comments/comments.component.html":
/*!*******************************************************!*\
  !*** ./src/app/post/comments/comments.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- If the user is logged in -->\n<!-- Comment submission form to add a comment to the given post -->\n<div *ngIf=\"userAPI.isLoggedIn()\">\n  <form [formGroup]=\"commentForm\" (ngSubmit)=\"onFormSubmit(commentForm.value)\">\n    <mat-form-field class=\"full-with-field\" appearance=\"outline\">\n      <mat-label>Comment here {{username}} to join the community discussion!</mat-label>\n      <input matInput formControlName=\"comment\" [errorStateMatcher]=\"matcher\">\n      <mat-icon matSuffix>comment</mat-icon>\n      <mat-error>\n        <span *ngIf=\"!commentForm.get('comment').valid && commentForm.get('comment').touched\">Comment cannot be blank!</span>\n      </mat-error>\n    </mat-form-field>\n\n    <!--- Btton used to submit inputted comment -->\n    <div class=\"button-row\">\n      <button type=\"submit\" [disabled]=\"!commentForm.valid\" mat-raised-button color=\"primary\"><mat-icon>comment</mat-icon>Submit</button>\n    </div>\n  </form>\n</div>\n\n<!-- Only shown if user isn't logged in telling them to log in or sign up -->\n<div *ngIf=\"!userAPI.isLoggedIn()\">\n  <p><a [routerLink]=\"['/login']\">Login</a> or <a [routerLink]=\"['/signup']\">Sign-Up</a> to tell the community what you think!</p>\n</div>\n\n<!-- Container for all comments -->\n<div layout=\"column\" layout-align=\"center end\" class=\"example-container mat-elevation-z8\">\n  <table mat-table #table [dataSource]=\"dataSource\">\n\n    <!--- Note that these columns can be defined in any order. The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"profile\">\n      <th mat-header-cell *matHeaderCellDef> Profile ID </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"picture-col\"><a color=\"primary\" [routerLink]=\"['/profile', element.profile_id]\"> {{element.profile_id}} </a></td>\n    </ng-container>\n\n    <!-- Comment Column -->\n    <ng-container matColumnDef=\"comment\">\n      <th mat-header-cell *matHeaderCellDef> Comment </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.comment}} </td>\n    </ng-container>\n\n    <!-- Date Column -->\n    <ng-container matColumnDef=\"date\">\n      <th mat-header-cell *matHeaderCellDef> Date </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\n    </ng-container>\n\n    <!-- Table settings -->\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/post/comments/comments.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/post/comments/comments.component.ts ***!
  \*****************************************************/
/*! exports provided: CommentsComponent, CommentDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentDataSource", function() { return CommentDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_comments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/comments.service */ "./src/app/services/comments.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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






/**
 * Component for comments.
 *
 * @export
 * @class CommentsComponent
 * @implements {OnInit}
 */
var CommentsComponent = /** @class */ (function () {
    /**
     *Creates an instance of CommentsComponent.
     * @param {ActivatedRoute} route
     * @param {CommentsService} commentAPI
     * @param {Router} router
     * @param {FormBuilder} formBuilder
     * @param {UserService} userAPI
     * @memberof CommentsComponent
     */
    function CommentsComponent(route, commentAPI, router, formBuilder, userAPI) {
        this.route = route;
        this.commentAPI = commentAPI;
        this.router = router;
        this.formBuilder = formBuilder;
        this.userAPI = userAPI;
        this.displayedColumns = ['profile', 'comment', 'date'];
        this.dataSource = new CommentDataSource(this.commentAPI);
        this.comment = '';
    }
    /**
     * Runs when page is called.
     *
     * @memberof PostRedditComponent
     */
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get comments using post ID.
        this.getCommentDetails(localStorage.getItem("postID"));
        // Set post ID to local variable.
        this.postID = localStorage.getItem("postID");
        // Check if a user is logged in.
        if (this.userAPI.isLoggedIn()) {
            this.userAPI.getUserData()
                .subscribe(function (res) {
                _this.username = res; // Set the logged in users name to a local variable.
            }, function (err) {
                console.log(err);
                if (err.status = 401) {
                    _this.router.navigate(['login']);
                }
            });
        }
        // Gets comments.
        this.commentAPI.getCommentPostId(localStorage.getItem("postID"))
            .subscribe(function (res) {
            _this.comments = res; // Sets comments object to local variable.
        }, function (err) {
            console.log(err);
            if (err.status = 401) {
                _this.router.navigate(['login']);
            }
        });
        // Comment form.
        this.commentForm = this.formBuilder.group({
            'post_id': [null],
            'profile_id': [null],
            'comment': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    /**
     * Get comments
     *
     * @param {*} id - the post id.
     * @memberof CommentsComponent
     */
    CommentsComponent.prototype.getCommentDetails = function (id) {
        var _this = this;
        this.commentAPI.getCommentPostId(id)
            .subscribe(function (data) {
            _this.comments = data;
        });
    };
    /**
     * Comment submission function.
     *
     * @param {*} form
     * @memberof CommentsComponent
     */
    CommentsComponent.prototype.onFormSubmit = function (form) {
        // Set post ID in form object.
        form.post_id = this.postID;
        // Set profile username in form object.
        form.profile_id = this.username;
        this.commentAPI.postComment(form)
            .subscribe(function (res) {
            var id = res['_id'];
            location.reload(true); // Page refresh.
        }, function (err) {
            console.log(err);
        });
    };
    CommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/post/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.css */ "./src/app/post/comments/comments.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_comments_service__WEBPACK_IMPORTED_MODULE_2__["CommentsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], CommentsComponent);
    return CommentsComponent;
}());

/**
 * Datasource for getting comments.
 *
 * @export
 * @class CommentDataSource
 * @extends {DataSource<any>}
 */
var CommentDataSource = /** @class */ (function (_super) {
    __extends(CommentDataSource, _super);
    /**
     *Creates an instance of CommentDataSource.
     * @param {CommentsService} api
     * @memberof CommentDataSource
     */
    function CommentDataSource(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        return _this;
    }
    /**
     * Gets comments.
     *
     * @returns
     * @memberof CommentDataSource
     */
    CommentDataSource.prototype.connect = function () {
        return this.api.getCommentPostId(localStorage.getItem("postID"));
    };
    /**
     *
     * @memberof CommentDataSource
     */
    CommentDataSource.prototype.disconnect = function () {
    };
    return CommentDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["DataSource"]));



/***/ }),

/***/ "./src/app/post/post-create/post-create.component.css":
/*!************************************************************!*\
  !*** ./src/app/post/post-create/post-create.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Post form settings */\r\n.form-signin {\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n}"

/***/ }),

/***/ "./src/app/post/post-create/post-create.component.html":
/*!*************************************************************!*\
  !*** ./src/app/post/post-create/post-create.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin\" [formGroup]=\"postForm\" (ngSubmit)=\"onFormSubmit(postForm.value)\">\n    <h3>\n      Create post\n    </h3>\n  <mat-form-field>\n    <input matInput placeholder=\"Title\" formControlName=\"title\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!postForm.get('title').valid && postForm.get('title').touched\">Please enter Title</span>\n    </mat-error>\n  </mat-form-field>\n\n  <br>\n\n  <mat-form-field>\n    <input matInput placeholder=\"URL\" formControlName=\"url\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!postForm.get('url').valid && postForm.get('url').touched\">Please enter URL</span>\n    </mat-error>\n  </mat-form-field>\n\n  <br>\n\n  <mat-form-field>\n    <input matInput placeholder=\"selftext\" formControlName=\"selftext\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!postForm.get('selftext').valid && postForm.get('selftext').touched\">Please enter text</span>\n    </mat-error>\n  </mat-form-field>\n  \n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!postForm.valid\" mat-raised-button color=\"primary\"><mat-icon>send</mat-icon></button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/post/post-create/post-create.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/post/post-create/post-create.component.ts ***!
  \***********************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_reddit_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/reddit-api.service */ "./src/app/services/reddit-api.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * component for creating a post.
 *
 * @export
 * @class PostCreateComponent
 * @implements {OnInit}
 */
var PostCreateComponent = /** @class */ (function () {
    /**
     *Creates an instance of PostCreateComponent.
     * @param {ActivatedRoute} route
     * @param {RedditApiService} api
     * @param {Router} router
     * @param {FormBuilder} formBuilder
     * @param {UserService} userAPI
     * @param {Title} titleService
     * @memberof PostCreateComponent
     */
    function PostCreateComponent(route, api, router, formBuilder, userAPI, titleService) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
        this.userAPI = userAPI;
        this.titleService = titleService;
        this.title = '';
        this.url = '';
        this.thumbnail = '';
        this.selftext = '';
    }
    /**
     * Set title.
     *
     * @param {string} newTitle - the title to set.
     * @memberof PostRedditComponent
     */
    PostCreateComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    /**
     * Runs when page is called.
     *
     * @memberof PostRedditComponent
     */
    PostCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get user data.
        this.userAPI.getUserData()
            .subscribe(function (res) {
            _this.subreddit = res; // Set user data from api to local variable.
        }, function (err) {
            console.log(err);
            if (err.status = 401) {
                _this.router.navigate(['login']);
            }
        });
        // Form settings.
        this.postForm = this.formBuilder.group({
            '_id': this._id,
            'title': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'url': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'pic': [null],
            'thumbnail': [null],
            'subreddit': this.subreddit,
            'selftext': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        // Set page title.
        this.setTitle("TB: Create Post");
    };
    /**
     * Post create form submit.
     *
     * @memberof PostCreateComponent
     */
    PostCreateComponent.prototype.onFormSubmit = function () {
        var _this = this;
        // Create post ID.
        this._id = this.subreddit + "-" + Math.floor(Math.random() * 99999999) + 1;
        // Add post ID and username to form data.
        this.postForm.patchValue({
            _id: this._id,
            subreddit: this.subreddit
        });
        // Create post by sending data to API.
        this.api.postCreate(this.postForm.value)
            .subscribe(function (res) {
            var id = res['_id'];
        }, function (err) {
            console.log(err);
        });
        // Add post to user post table by sending data to API.
        this.api.postCreateUser(this.postForm.value)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/post', _this._id]);
        }, function (err) {
            console.log(err);
        });
    };
    PostCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-create',
            template: __webpack_require__(/*! ./post-create.component.html */ "./src/app/post/post-create/post-create.component.html"),
            styles: [__webpack_require__(/*! ./post-create.component.css */ "./src/app/post/post-create/post-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_reddit_api_service__WEBPACK_IMPORTED_MODULE_2__["RedditApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], PostCreateComponent);
    return PostCreateComponent;
}());



/***/ }),

/***/ "./src/app/post/reddit-post/reddit-post.component.css":
/*!************************************************************!*\
  !*** ./src/app/post/reddit-post/reddit-post.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Post card settings */\r\n.card {\r\n    margin: 15px;\r\n}"

/***/ }),

/***/ "./src/app/post/reddit-post/reddit-post.component.html":
/*!*************************************************************!*\
  !*** ./src/app/post/reddit-post/reddit-post.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Post card that contain post data -->\n<mat-card class=\"card\">\n  <mat-card-header>\n    <mat-card-title align=\"left\"><img src=\"{{post?.thumbnail}}\" height=\"50\" width=\"50\" align=\"left\"/><a align=\"left\" href=\"{{post.url}}\"><h2>{{post.title}}</h2></a></mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <dl>\n      <dd><img src=\"{{post?.pic}}\" height=\"500\"/></dd>\n      <dd><p> {{post.selftext}} </p></dd>\n    </dl>\n    <mat-card-actions>\n      <!-- If user is logged in -->\n      <div *ngIf=\"userAPI.isLoggedIn()\">\n          <button mat-button color=\"primary\" *ngIf=\"!followed\" (click)=\"sub()\"><mat-icon>add</mat-icon>SUBSCRIBE</button>\n          <button mat-button color=\"primary\" *ngIf=\"followed\" (click)=\"unsub()\"><mat-icon>check_box</mat-icon>SUBSCRIBED</button>\n          <button mat-button color=\"primary\" [routerLink]=\"['/profile/', post.subreddit]\"><mat-icon>person</mat-icon>{{post.subreddit}}'s Profile</button>\n      </div>\n      <!-- If user is not logged in -->\n      <div *ngIf=\"!userAPI.isLoggedIn()\">\n          <button mat-button color=\"primary\" [routerLink]=\"['/login/']\"><mat-icon>add</mat-icon>SUBSCRIBE</button>\n          <button mat-button color=\"primary\" [routerLink]=\"['/profile/', post.subreddit]\"><mat-icon>person</mat-icon>{{post.subreddit}}'s Profile</button>\n      </div>\n    </mat-card-actions>\n  </mat-card-content>\n</mat-card>\n\n<!-- Comments card with comments component -->\n<mat-card class=\"card\">\n  <app-comments></app-comments>\n</mat-card>"

/***/ }),

/***/ "./src/app/post/reddit-post/reddit-post.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/post/reddit-post/reddit-post.component.ts ***!
  \***********************************************************/
/*! exports provided: RedditPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedditPostComponent", function() { return RedditPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_reddit_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/reddit-api.service */ "./src/app/services/reddit-api.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Component for reddit posts.
 *
 * @export
 * @class RedditPostComponent
 * @implements {OnInit}
 */
var RedditPostComponent = /** @class */ (function () {
    /**
     *Creates an instance of RedditPostComponent.
     * @param {ActivatedRoute} route
     * @param {RedditApiService} api
     * @param {Router} router
     * @param {Title} titleService
     * @param {UserService} userAPI
     * @param {FormBuilder} formBuilder
     * @memberof RedditPostComponent
     */
    function RedditPostComponent(route, api, router, titleService, userAPI, formBuilder) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.titleService = titleService;
        this.userAPI = userAPI;
        this.formBuilder = formBuilder;
        this.post = {};
        this.followData = {};
    }
    /**
     * Set title.
     *
     * @param {string} newTitle - the title to set.
     * @memberof PostRedditComponent
     */
    RedditPostComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    /**
     * Runs when page is called.
     *
     * @memberof PostRedditComponent
     */
    RedditPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get post details using ID of the route.
        this.getPostDetails(this.route.snapshot.params['id']);
        // Sewt post ID in local storage to be accessed by other components.
        localStorage.setItem("postID", this.route.snapshot.params['id']);
        // Check if user is logged in.
        if (this.userAPI.isLoggedIn()) {
            this.userAPI.getUserData()
                .subscribe(function (res) {
                _this.username = res;
                _this.getIsSaved(_this.route.snapshot.params['id'], res);
            }, function (err) {
                console.log(err);
                if (err.status = 401) {
                    _this.router.navigate(['login']);
                }
            });
        }
        // Form settings.
        this.saveForm = this.formBuilder.group({
            'profile_id': [null],
            'post_id': [null]
        });
    };
    /**
     * Get post details from the API.
     *
     * @param {*} id - id of posts.
     * @memberof RedditPostComponent
     */
    RedditPostComponent.prototype.getPostDetails = function (id) {
        var _this = this;
        this.api.getPost(id)
            .subscribe(function (data) {
            _this.post = data;
            _this.setTitle("TB: " + data.title); // Set page title as the post title .
        });
    };
    /**
     * Check if user is subscribed to post
     *
     * @param {*} id - post id.
     * @param {*} username - users name.
     * @memberof RedditPostComponent
     */
    RedditPostComponent.prototype.getIsSaved = function (id, username) {
        var _this = this;
        this.api.getIsSaved(id, username)
            .subscribe(function (data) {
            _this.followData = data;
            if (data.length > 0) {
                _this.followed = true; // set followed to true.
            }
            else {
                _this.followed = false; // set followed to false.
            }
        });
    };
    /**
     * Subscribe to post.
     *
     * @memberof RedditPostComponent
     */
    RedditPostComponent.prototype.sub = function () {
        // Add profile ID and post ID to form.
        this.saveForm.patchValue({
            profile_id: this.username,
            post_id: this.route.snapshot.params['id']
        });
        // Send form to the API to save a user to the post.
        this.api.postSave(this.saveForm.value)
            .subscribe(function (res) {
            var id = res['_id'];
            location.reload(true); // Page refresh.
        }, function (err) {
            console.log(err);
        });
    };
    /**
     * Unsubscribe from post.
     *
     * @memberof RedditPostComponent
     */
    RedditPostComponent.prototype.unsub = function () {
        // Send API post ID and username to remove from database with API.
        this.api.delUnSub(this.route.snapshot.params['id'], this.username)
            .subscribe(function (res) {
            location.reload(true); // Page refresh.
        }, function (err) {
            console.log(err);
        });
    };
    RedditPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reddit-post',
            template: __webpack_require__(/*! ./reddit-post.component.html */ "./src/app/post/reddit-post/reddit-post.component.html"),
            styles: [__webpack_require__(/*! ./reddit-post.component.css */ "./src/app/post/reddit-post/reddit-post.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_reddit_api_service__WEBPACK_IMPORTED_MODULE_2__["RedditApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], RedditPostComponent);
    return RedditPostComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* profile mat-card for pofile information */\n.profile-card img{\n  border-radius: 20%;\n  padding: 3px;\n  border: 1px solid #ddd;\n  \n}\n/* Comment card settings for mat-card */\n.comment-card {\n  max-width: 450px;\n  min-width: 400px;\n  float: left;\n  margin: 15px;\n}\n/* Post title in mat-card */\n.post {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 300px;\n}\n/* Post card settings for users posts*/\n.post-card {\n  max-width: 400px;\n  min-width: 400px;\n}\n/* Floats username left */\n.user {\n  float: left;\n}\n/* Scrollable div */\ndiv.scrollmenu {\n  overflow: auto;\n  white-space: nowrap;\n}\n/* Scrollable div child div settings */\ndiv.scrollmenu div {\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 14px;\n  text-decoration: none;\n}\nbutton.user_buttons {\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdc-layout-grid\">\n  <div class=\"mdc-layout-grid__inner\">\n\n    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4\">\n      <mat-card class=\"profile-card\">\n        <mat-card-header>\n          <mat-card-title>{{profile.first_name}} {{profile.surname}}</mat-card-title>\n          <mat-card-subtitle>{{profile.username}}</mat-card-subtitle>\n          <img mat-card-avatar alt=\"Poster\" id=\"poster\" src='/api/assets/images/{{profile.image}}'>\n        </mat-card-header>\n        <img mat-card-image alt='Profile image' src='/api/assets/images/{{profile.image}}'>\n\n        <mat-card-content>\n\n          <p>\n            {{profile.bio}}\n          </p>\n          <p>\n            Email : {{profile.email}}\n          </p>\n          <p>\n            User since : {{profile.join_date}}\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <!-- If user is logged in -->\n          <div *ngIf=\"userAPI.isLoggedIn()\">\n            <button mat-button [routerLink]=\"['/saved/', profile.username]\">SUBSCRIBED POSTS</button>\n            <button mat-button [routerLink]=\"['/follow/', profile.username]\">FRIENDS</button>\n            <button *ngIf=\"!isFollowing && !isUser\" mat-button (click)=\"follow(profile._id)\">FOLLOW</button>\n            <button *ngIf=\"isFollowing && !isUser\" mat-button (click)=\"unFollow(profile._id)\">UNFOLLOW</button>\n          </div>\n          <!-- If user is not logged in -->\n          <div class=\"user-buttons\" *ngIf=\"!userAPI.isLoggedIn()\">\n            <button mat-button [routerLink]=\"['/saved/', profile.username]\">SUBSCRIBED POSTS</button>\n            <button mat-button [routerLink]=\"['/follow/', profile.username]\">FOLLOW STUFF</button>\n          </div>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n\n    <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-8\">\n      <div class=\"mdc-layout-grid__inner \">\n        <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\n\n\n          <!-- If the user has made any posts -->\n          <div *ngIf=\"postsUser.length > 0\">\n            <h1>Recent Posts:</h1>\n            <!-- Scrollable div -->\n            <div class=\"scrollmenu\">\n              <!-- Loop through postsUser and output all posts -->\n              <div *ngFor=\"let postUser of postsUser\" class=\"example-item\">\n                <!-- mat-card for users posts -->\n                <mat-card class=\"post-card\">\n                  <mat-card-header>\n                    <img mat-card-avatar alt=\"Poster\" id=\"poster\" src='/api/assets/images/{{profile.image}}'>\n                    <mat-card-title class=\"post\">{{postUser.title}}</mat-card-title>\n                    <mat-card-subtitle class=\"user\">{{postUser.subreddit}}</mat-card-subtitle>\n                  </mat-card-header>\n                  <img mat-card-image [src]=\"postUser.thumbnail\" width=\"100\" height=\"200\">\n                  <mat-card-content>\n                    <p>\n                      {{postUser.selftext}}\n                    </p>\n                  </mat-card-content>\n                  <mat-card-actions>\n                    <button mat-button [routerLink]=\"['/post/', postUser._id]\">VIEW</button>\n                  </mat-card-actions>\n                </mat-card>\n              </div>\n            </div>\n          </div>\n\n          <!-- If the user hasn't made any post -->\n          <div *ngIf=\"!postsUser.length > 0\">\n            <h1>No posts to show</h1>\n            <p>Tell {{profile.username}} to get posting!</p>\n          </div>\n\n        </div>\n        <div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\">\n\n          <!-- If the user has made any comments -->\n          <div *ngIf=\"commentsUser.length > 0\">\n            <h1>Recent Comments:</h1>\n            <!-- Comment card -->\n            <mat-card class=\"comment-card\" *ngFor=\"let commentUser of commentsUser\">\n              <mat-card-header>\n                <mat-card-title [routerLink]=\"['/post/', commentUser.post_id]\">{{commentUser.comment}}</mat-card-title>\n                <mat-card-subtitle>{{commentUser.date}}</mat-card-subtitle>\n              </mat-card-header>\n            </mat-card>\n          </div>\n\n          <!-- If the user hasn't made any comments -->\n          <div *ngIf=\"!commentsUser.length > 0\">\n            <h1>No comments to show</h1>\n            <p>Tell {{profile.username}} to get commenting!</p>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_follow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/follow.service */ "./src/app/services/follow.service.ts");
/* harmony import */ var _services_reddit_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/reddit-api.service */ "./src/app/services/reddit-api.service.ts");
/* harmony import */ var _services_comments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/comments.service */ "./src/app/services/comments.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Component for Profile.
 *
 * @export
 * @class ProfileComponent
 * @implements {OnInit}
 */
var ProfileComponent = /** @class */ (function () {
    /**
     *Creates an instance of ProfileComponent.
     * @param {ActivatedRoute} route
     * @param {FollowService} followService
     * @param {Router} router
     * @param {UserService} userAPI
     * @param {RedditApiService} postAPI
     * @param {CommentsService} commentAPI
     * @param {Title} titleService
     * @memberof ProfileComponent
     */
    function ProfileComponent(route, followService, router, userAPI, postAPI, commentAPI, titleService) {
        this.route = route;
        this.followService = followService;
        this.router = router;
        this.userAPI = userAPI;
        this.postAPI = postAPI;
        this.commentAPI = commentAPI;
        this.titleService = titleService;
        this.isFollowing = false; // Boolean to hold
    }
    /**
     * Set page title.
     *
     * @param {string} newTitle - the title.
     * @memberof ProfileComponent
     */
    ProfileComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    /**
     * Runs on page call.
     *
     * @memberof ProfileComponent
     */
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get profile data using page ID.
        this.getProfileData(this.route.snapshot.params['id']);
        // Set title using page ID.
        this.setTitle("TB: " + this.route.snapshot.params['id'] + "'s Profile");
        // Get profile data using page ID.
        this.postAPI.getRecentPostsUser(this.route.snapshot.params['id'])
            .subscribe(function (res) {
            _this.postsUser = res;
        }, function (err) {
            console.log(err);
            if (err.status = 401) {
                _this.router.navigate(['login']);
            }
        });
        // Get comments the user made using page ID.
        this.commentAPI.getCommentProfileId(this.route.snapshot.params['id'])
            .subscribe(function (res) {
            _this.commentsUser = res;
        }, function (err) {
            console.log(err);
            if (err.status = 401) {
                _this.router.navigate(['login']);
            }
        });
        // Check if user is loggged in.
        if (this.userAPI.isLoggedIn()) {
            // Get current user.
            this.currentUser = this.userAPI.getUserPayLoad();
            // Get following data
            this.getFollowList();
        }
    };
    /**
     * Loads the profile data for the current user we want to display the profile of.
     *
     * @param {*} id - users id.
     * @memberof ProfileComponent
     */
    ProfileComponent.prototype.getProfileData = function (id) {
        var _this = this;
        this.userAPI.getProfile(id)
            .subscribe(function (data) {
            _this.profile = data[0];
            // Check if this is the logged in users profile.
            _this.isUser = (_this.currentUser.id === _this.profile._id);
        });
    };
    /**
     * Get the list of following.
     *
     * @memberof ProfileComponent
     */
    ProfileComponent.prototype.getFollowList = function () {
        var _this = this;
        this.followService.getIsFollowing(this.currentUser.username)
            .subscribe(function (res) {
            // If server returned 'true' state.
            if (res.state) {
                var userIsFollowing = [];
                for (var _i = 0, _a = res.followlist; _i < _a.length; _i++) {
                    var username = _a[_i];
                    userIsFollowing.push(username);
                    if (username == _this.profile.username) {
                        _this.isFollowing = true;
                    }
                }
            }
            else {
                console.log('[INFO]: Something is wrong');
            }
        });
    };
    /**
     * Allows a user to be followed.
     * Adds the user in the follows db table to the logged in users 'following' array.
     * Also adds the user to the following users 'followers' array.
     *
     * @param {*} _id - id of user to follow.
     * @memberof ProfileComponent
     */
    ProfileComponent.prototype.follow = function (_id) {
        var _this = this;
        var user = this.userAPI.getUserPayLoad();
        var user_id = user.id;
        // FollowUser is an object to be sent to the server containing a user_id and follow_id field.
        var followUser = {
            user_id: user_id,
            follow_id: _id
        };
        // Follow this user.
        this.followService.followUser(followUser)
            .subscribe(function (res) {
            // Set isFollowing to true;
            _this.isFollowing = true;
        }, function (err) {
            console.log(err);
        });
    };
    /**
     * Allows a user to be unfollowed.
     * Removes the user in the follows db table from the logged in users 'following' array.
     * Also removes the user from the following users 'followers' array.
     *
     * @param {*} _id
     * @memberof ProfileComponent
     */
    ProfileComponent.prototype.unFollow = function (_id) {
        var _this = this;
        var user = this.userAPI.getUserPayLoad();
        var user_id = user.id;
        // Folow user object.
        var followUser = {
            user_id: user_id,
            follow_id: _id
        };
        // Send API data to unfollow a user.
        this.followService.unFollowUser(followUser)
            .subscribe(function (res) {
            // Set isFollowing to false;
            _this.isFollowing = false;
        }, function (err) {
            console.log(err);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_follow_service__WEBPACK_IMPORTED_MODULE_3__["FollowService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_reddit_api_service__WEBPACK_IMPORTED_MODULE_4__["RedditApiService"], _services_comments_service__WEBPACK_IMPORTED_MODULE_5__["CommentsService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/savedposts/savedposts.component.css":
/*!*****************************************************!*\
  !*** ./src/app/savedposts/savedposts.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* mat-card settings for posts */\n.post-card {\n    max-width: 400px;\n    min-width: 400px;\n    float: left;\n    margin: 25px;\n}\n/* Post header settings */\n.post-header-image {\n    background-image: url('https://b.thumbs.redditmedia.com/4KtrAN4OLE6PG-FY0Xtfn65arqXZrFRrsFDi_JvQCWM.png');\n    background-size: cover;\n}\n/* Float username in mat-card left */\n.user {\n    float: left;\n}\n/* Post mat-card settings */\n.post {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 300px;\n}"

/***/ }),

/***/ "./src/app/savedposts/savedposts.component.html":
/*!******************************************************!*\
  !*** ./src/app/savedposts/savedposts.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- If there are no saved posts from given user -->\n<div *ngIf=\"!posts.length > 0\">\n  <h1>{{id}} has no saved posts</h1>\n  <p>Tell {{id}} to save the post they enjoy.</p>\n</div>\n\n<!-- Loop through eahc elements in posts object -->\n<div *ngFor=\"let post of posts\">\n  <!-- mat-card for each post -->\n  <mat-card class=\"post-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"post-header-image\"></div>\n      <mat-card-title class=\"post\">{{post.title}}</mat-card-title>\n      <mat-card-subtitle [routerLink]=\"['/profile/', post.subreddit]\" class=\"user\">{{post.subreddit}}</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image [src]=\"post.thumbnail\" width=\"100\" height=\"200\">\n    <mat-card-content>\n      <p>\n        {{post.selftext}}\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button [routerLink]=\"['/post/', post._id]\">VIEW</button>\n      <div *ngIf=\"userAPI.isLoggedIn() && username == id\">\n        <button mat-button (click)=\"unsub(post._id)\">UNSUBSCRIBE</button>\n      </div>\n    </mat-card-actions>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/savedposts/savedposts.component.ts":
/*!****************************************************!*\
  !*** ./src/app/savedposts/savedposts.component.ts ***!
  \****************************************************/
/*! exports provided: SavedpostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedpostsComponent", function() { return SavedpostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_reddit_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/reddit-api.service */ "./src/app/services/reddit-api.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Component for saved posts.
 *
 * @export
 * @class SavedpostsComponent
 * @implements {OnInit}
 */
var SavedpostsComponent = /** @class */ (function () {
    /**
     *Creates an instance of SavedpostsComponent.
     * @param {ActivatedRoute} route
     * @param {RedditApiService} api
     * @param {Router} router
     * @param {UserService} userAPI
     * @param {Title} titleService
     * @memberof SavedpostsComponent
     */
    function SavedpostsComponent(route, api, router, userAPI, titleService) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.userAPI = userAPI;
        this.titleService = titleService;
        this.posts = [];
    }
    /**
     * Function to change title of page.
     *
     * @param {string} newTitle - title to set.
     * @memberof SavedpostsComponent
     */
    SavedpostsComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    /**
     * Function runs when page is called.
     *
     * @memberof SavedpostsComponent
     */
    SavedpostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get saved posts using page ID (Username).
        this.getSavedPosts(this.route.snapshot.params['id']);
        // Get page ID.
        this.id = this.route.snapshot.params['id'];
        // Check if user is logged in.
        if (this.userAPI.isLoggedIn()) {
            this.userAPI.getUserData()
                .subscribe(function (res) {
                _this.username = res;
            }, function (err) {
                console.log(err);
                if (err.status = 401) {
                    _this.router.navigate(['login']);
                }
            });
        }
        // Set page title.
        this.setTitle("TB: " + this.route.snapshot.params['id'] + "'s Saved Posts");
    };
    /**
     * Get saved posts using username.
     *
     * @param {*} id - user id.
     * @memberof SavedpostsComponent
     */
    SavedpostsComponent.prototype.getSavedPosts = function (id) {
        var _this = this;
        this.api.getSaved(id)
            .subscribe(function (data) {
            _this.getIDs(data);
        });
    };
    /**
     * Get posts using the saved posts ID gotten from the saved posts API.
     *
     * @param {*} data - the saved post.
     * @memberof SavedpostsComponent
     */
    SavedpostsComponent.prototype.getIDs = function (data) {
        for (var i = 0; i < data.length; i++) {
            this.getPostDetails(data[i].post_id);
        }
    };
    /**
     * Get post details.
     *
     * @param {*} id - id of post.
     * @memberof SavedpostsComponent
     */
    SavedpostsComponent.prototype.getPostDetails = function (id) {
        var _this = this;
        this.api.getPost(id)
            .subscribe(function (data) {
            _this.posts.push(data); // Add post to the posts object
        });
    };
    /**
     * Unsubscrive user from the post.
     *
     * @param {*} id - the  user id.
     * @memberof SavedpostsComponent
     */
    SavedpostsComponent.prototype.unsub = function (id) {
        // Unsub the user from the post using the post ID and username.
        this.api.delUnSub(id, this.username)
            .subscribe(function (res) {
            location.reload(true); // Page refresh.
        }, function (err) {
            console.log(err);
        });
    };
    SavedpostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-savedposts',
            template: __webpack_require__(/*! ./savedposts.component.html */ "./src/app/savedposts/savedposts.component.html"),
            styles: [__webpack_require__(/*! ./savedposts.component.css */ "./src/app/savedposts/savedposts.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_reddit_api_service__WEBPACK_IMPORTED_MODULE_2__["RedditApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], SavedpostsComponent);
    return SavedpostsComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
// url to API route.
var apiUrl = "/api/books";
/**
 * ApiService handles function calls to the  API route.
 *
 * @export
 * @class ApiService
 */
var ApiService = /** @class */ (function () {
    /**
     *Creates an instance of ApiService.
     * @param {HttpClient} http
     * @memberof ApiService
     */
    function ApiService(http) {
        this.http = http;
    }
    /**
    * Handles http errors.
    *
    * @private
    * @param {HttpErrorResponse} error
    * @returns an observable with a user-facing error message.
    * @memberof RedditApiService
    */
    ApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // Return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    /**
    * Extract data from response.
    *
    * @private
    * @param {Response} res
    * @returns the body of the response.
    * @memberof UserService
    */
    ApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    /**
     * Get all books.
     *
     * @returns {Observable<any>}
     * @memberof ApiService
     */
    ApiService.prototype.getBooks = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('jwtToken') })
        };
        return this.http.get(apiUrl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     *  Get single book using id of book .
     *
     * @param {string} id - book id.
     * @returns {Observable<any>}
     * @memberof ApiService
     */
    ApiService.prototype.getBook = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * Add a book.
     *
     * @param {*} data
     * @returns {Observable<any>}
     * @memberof ApiService
     */
    ApiService.prototype.postBook = function (data) {
        return this.http.post(apiUrl, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * Update a book using book ID.
     *
     * @param {string} id - book id.
     * @param {*} data - book data.
     * @returns {Observable<any>}
     * @memberof ApiService
     */
    ApiService.prototype.updateBook = function (id, data) {
        var url = apiUrl + "/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * Delete a book using ID.
     *
     * @param {string} id -book id.
     * @returns {Observable<{}>}
     * @memberof ApiService
     */
    ApiService.prototype.deleteBook = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/comments.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/comments.service.ts ***!
  \**********************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
/**
 * CommentsService handles function calls to the comment API route.
 *
 * @export
 * @class CommentsService
 */
var CommentsService = /** @class */ (function () {
    /**
     *Creates an instance of CommentsService.
     * @param {HttpClient} http
     * @memberof CommentsService
     */
    function CommentsService(http) {
        this.http = http;
    }
    /**
    * Handles http errors.
    *
    * @private
    * @param {HttpErrorResponse} error
    * @returns an observable with a user-facing error message.
    * @memberof RedditApiService
    */
    CommentsService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    /**
    * Extract data from response.
    *
    * @private
    * @param {Response} res
    * @returns the body of the response.
    * @memberof UserService
    */
    CommentsService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    /**
     * Get all comments made by users.
     *
     * @returns {Observable<any>}
     * @memberof CommentsService
     */
    CommentsService.prototype.getComments = function () {
        return this.http.get("/api/comment/all", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * Get all comments made on a post using post ID.
     *
     * @param {string} id - the id of the post.
     * @returns {Observable<any>}
     * @memberof CommentsService
     */
    CommentsService.prototype.getCommentPostId = function (id) {
        var url = "api/comment/post" + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * Get comments recently made by a user using username.
     *
     * @param {string} id - user id.
     * @returns {Observable<any>}
     * @memberof CommentsService
     */
    CommentsService.prototype.getCommentProfileId = function (id) {
        var url = "/api/comment/profiledate" + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * Post comment using comment object.
     *
     * @param {*} data - data to post.
     * @returns {Observable<any>}
     * @memberof CommentsService
     */
    CommentsService.prototype.postComment = function (data) {
        var url = "/api/comment/post";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    CommentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CommentsService);
    return CommentsService;
}());



/***/ }),

/***/ "./src/app/services/follow.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/follow.service.ts ***!
  \********************************************/
/*! exports provided: FollowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowService", function() { return FollowService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Define constants.
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var userApiURL = "/api/user";
var followApiURL = "/api/follow";
/**
 * FollowService handles function calls to the follow API route.
 *
 * @export
 * @class FollowService
 */
var FollowService = /** @class */ (function () {
    /**
     *Creates an instance of FollowService.
     * @param {HttpClient} http
     * @memberof FollowService
     */
    function FollowService(http) {
        this.http = http;
    }
    /**
     * Handles http errors.
     *
     * @private
     * @param {HttpErrorResponse} error
     * @returns an observable with a user-facing error message.
     * @memberof RedditApiService
     */
    FollowService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    /**
    * Extract data from response.
    *
    * @private
    * @param {Response} res
    * @returns the body of the response.
    * @memberof UserService
    */
    FollowService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    /**
     * Follow a user.
     *
     * @param {*} data - the user to follow and the user being followed.
     * @returns {Observable<any>}
     * @memberof FollowService
     */
    FollowService.prototype.followUser = function (data) {
        var url = followApiURL + "/add";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    };
    /**
     * Unfollow a user a user using object.
     *
     * @param {*} data- the user to follow and the user being followed.
     * @returns {Observable<any>}
     * @memberof FollowService
     */
    FollowService.prototype.unFollowUser = function (data) {
        var url = followApiURL + "/remove";
        return this.http.post(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    };
    /**
     * Returns a http call to recieve a users following data.
     *
     * @param {string} id - id of user.
     * @returns {Observable<any>}
     * @memberof FollowService
     */
    FollowService.prototype.getFollowers = function (id) {
        var url = followApiURL + "/" + id;
        console.log("[DEBUG] getFollowers id/username: ", id);
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    };
    /**
     *  Returns a http call to recieve a users following data.
     *
     * @param {string} id - user id.
     * @returns {Observable<any>}
     * @memberof FollowService
     */
    FollowService.prototype.getIsFollowing = function (id) {
        var url = followApiURL + "/check/" + id;
        console.log("[DEBUG] getFollowers id/username: ", id);
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    };
    FollowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FollowService);
    return FollowService;
}());



/***/ }),

/***/ "./src/app/services/reddit-api.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/reddit-api.service.ts ***!
  \************************************************/
/*! exports provided: RedditApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedditApiService", function() { return RedditApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
/**
 * RedditApiService handles function calls to the API.
 *
 * @export
 * @class RedditApiService
 */
var RedditApiService = /** @class */ (function () {
    function RedditApiService(http) {
        this.http = http;
    }
    /**
     * Handles http errors.
     *
     * @private
     * @param {HttpErrorResponse} error
     * @returns an observable with a user-facing error message.
     * @memberof RedditApiService
     */
    RedditApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // Return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    /**
     * Get data from response.
     *
     * @private
     * @param {Response} res - the http response,
     * @returns a string reponse.
     * @memberof RedditApiService
     */
    RedditApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    /**
     * Get all posts.
     *
     * @returns {Observable<any>}
     * @memberof RedditApiService
     */
    RedditApiService.prototype.getPosts = function () {
        return this.http.get("/api/redditapi/all", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     *  Get post by ID.
     *
     * @param {string} id - the post id.
     * @returns {Observable<any>}
     * @memberof RedditApiService
     */
    RedditApiService.prototype.getPost = function (id) {
        var url = "/api/redditapi/all" + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * Get all funny/entertaining posts.
     *
     * @returns {Observable<any>}
     * @memberof RedditApiService
     */
    RedditApiService.prototype.getPostsPF = function () {
        return this.http.get("/api/redditapi/pf", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * Get all news/information posts.
     *
     * @returns {Observable<any>}
     * @memberof RedditApiService
     */
    RedditApiService.prototype.getPostsNews = function () {
        return this.http.get("/api/redditapi/news", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * Get all users posts.
     *
     * @returns {Observable<any>}
     * @memberof RedditApiService
     */
    RedditApiService.prototype.getPostsUser = function () {
        return this.http.get("/api/redditapi/userpost", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * Get recent posts made by a user using username.
     *
     * @param {string} id - id  of user.
     * @returns {Observable<any>}
     * @memberof RedditApiService
     */
    RedditApiService.prototype.getRecentPostsUser = function (id) {
        var url = "/api/redditapi/allprofile" + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * Create a post using post details object.
     *
     * @param {*} data - the post data.
     * @returns {Observable<any>}
     * @memberof RedditApiService
     */
    RedditApiService.prototype.postCreate = function (data) {
        return this.http.post("/api/redditapi/postall", data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     *  Create user posts using post details object.
     *
     * @param {*} data - the post data.
     * @returns {Observable<any>}
     * @memberof RedditApiService
     */
    RedditApiService.prototype.postCreateUser = function (data) {
        return this.http.post("/api/redditapi/postuser", data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * Posts which have been saved by the user using username and post ID.
     *
     * @param {*} data - the post data.
     * @returns {Observable<any>}
     * @memberof RedditApiService
     */
    RedditApiService.prototype.postSave = function (data) {
        return this.http.post("/api/savedPost/post", data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * Post ID and username to see if an entry matches. If one is found the user is following given post.
     *
     * @param {string} id1 - users id.
     * @param {string} id2 - users id.
     * @returns {Observable<any>}
     * @memberof RedditApiService
     */
    RedditApiService.prototype.getIsSaved = function (id1, id2) {
        var url = "/api/savedpost/post" + "/" + id1 + "/" + id2;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * Get saved posts.
     *
     * @param {string} id - users username.
     * @returns {Observable<any>}
     * @memberof RedditApiService
     */
    RedditApiService.prototype.getSaved = function (id) {
        var url = "/api/savedpost/profile" + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * Unsubscribe a user from a post.
     *
     * @param {string} id1 - user id.
     * @param {string} id2 - post id.
     * @returns {Observable<any>}
     * @memberof RedditApiService
     */
    RedditApiService.prototype.delUnSub = function (id1, id2) {
        var url = "/api/savedpost/delete" + "/" + id1 + "/" + id2;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    RedditApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RedditApiService);
    return RedditApiService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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




// Define constants.
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
// Route to api.
var userApiURL = "/api/user";
/**
 * UserService is a api service for dealing with all user resources.
 *
 * @export
 * @class UserService
 */
var UserService = /** @class */ (function () {
    /**
     *Creates an instance of UserService.
     * @param {HttpClient} http
     * @memberof UserService
     */
    function UserService(http) {
        this.http = http;
    }
    /**
     * Error handler
     *
     * @private
     * @param {HttpErrorResponse} error
     * @returns an observable with a user-facing error message.
     * @memberof UserService
     */
    UserService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    /**
     * Extract data from response
     *
     * @private
     * @param {Response} res
     * @returns the body of the response.
     * @memberof UserService
     */
    UserService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    /************************ API use functions ********************************/
    /**
     * GET request to API to return profile data.
     * Can take either a user_id or username.
     *
     * @param {string} id - the user id to search.
     * @returns {Observable<any>}
     * @memberof UserService
     */
    UserService.prototype.getProfile = function (id) {
        var url = "/api/profile" + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * PUT request to API to update profile data.
     *
     * @param {string} id - user id to upadte.
     * @param {*} data - data to update.
     * @returns {Observable<any>}
     * @memberof UserService
     */
    UserService.prototype.updateUser = function (id, data) {
        var url = userApiURL + "/update/" + id;
        return this.http.put(url, data, httpOptions);
    };
    /**
     * POST request to api to add a new user to the 'users' table in db.
     *
     * @param {*} data - the data to send.
     * @returns {Observable<any>}
     * @memberof UserService
     */
    UserService.prototype.postUser = function (data) {
        return this.http.post(userApiURL + "/signup", data, httpOptions);
    };
    /**
     * POST request to api to log in a user from the 'users' table in db.
     *
     * @param data - the log in data.
     */
    UserService.prototype.loginUser = function (data) {
        var baseObject;
        return this.http.post(userApiURL + "/signin", data, httpOptions);
    };
    /**
     * GET user data.
     *
     * @returns {Observable<any>}
     * @memberof UserService
     */
    UserService.prototype.getUserData = function () {
        var url = "/api/user/userdata" + "/" + this.getJwtToken();
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /************************ General use functions ********************************/
    /**
     * Saves a JWT token in storage.
     *
     * @param {string} token - the token to save.
     * @memberof UserService
     */
    UserService.prototype.saveJwtToken = function (token) {
        localStorage.setItem('jwtToken', token);
        this.token = token;
    };
    /**
     * Get the jwt token.
     *
     * @returns {string} - ther jwt string.
     * @memberof UserService
     */
    UserService.prototype.getJwtToken = function () {
        return localStorage.getItem('jwtToken');
    };
    /**
     * Logout a user by removing token.
     *
     * @memberof UserService
     */
    UserService.prototype.logout = function () {
        localStorage.removeItem('jwtToken');
        this.isLoggedIn();
    };
    /**
     * Check if user is logged in.
     *
     * @returns {boolean} - true or false if logged in.
     * @memberof UserService
     */
    UserService.prototype.isLoggedIn = function () {
        var currentToken = this.getJwtToken();
        if (currentToken) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Set current logged in user.
     *
     * @param {*} user - the current user.
     * @memberof UserService
     */
    UserService.prototype.setCurrentUser = function (user) {
        this.currentUser = user;
    };
    /**
     * Get the current user.
     *
     * @returns current user.
     * @memberof UserService
     */
    UserService.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    /**
     * Get user details from token.
     *
     * @returns json representation of user.
     * @memberof UserService
     */
    UserService.prototype.getUserPayLoad = function () {
        var token = this.getJwtToken();
        if (token) {
            var userPayload = atob(token.split('.')[1]);
            this.currentUser = userPayload;
            return JSON.parse(userPayload);
        }
        else {
            return null;
        }
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Form settings */\n.form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n/* Fill screen from left to right */\n.full-width {\n  width: 100%;\n}\n/* Child elements of full-width */\n.full-width:nth-last-child() {\n  margin-bottom: 10px;\n}\n/* Used for button divs */\n.button-row {\n  margin: 10px 0;\n}\n/* Main form settings */\n.form-signin {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n/* All h3 tags inside the form-signin class */\n.form-signin h3 {\n  text-align: center;\n}\n/* All h3 tags*/\nh3 {\n  text-align: center;\n}\n/* All button tags */\nbutton {\n  text-align: center;\n}\n/* mat-card settings */\n.card {\n  max-width: 400px;\n}\n/* Used to center tags */\n.alligner{\n  text-align: center\n}\n/* Used to center input tag of alligner class */\n.alligner input{\n  text-align: center\n}"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Form used to update users data -->\n<form class=\"form-signin\" [formGroup]=\"settingsForm\" (ngSubmit)=\"onFormSubmit(settingsForm.value)\">\n  <h3>\n    Edit settings for<strong> {{ currentUserName }}</strong>\n  </h3>\n  <mat-form-field class=\"full-width\">\n    <!-- Error message -->\n    <div class=\"alert alert-warning alert-dismissible\" role=\"alert\" *ngIf=\"errorMessage !== ''\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button> {{errorMessage}}\n    </div>\n    <input matInput placeholder=\"Email\" formControlName=\"email\" [errorStateMatcher]=\"matcher\">\n    <mat-error *ngIf=\"settingsForm.hasError('email')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"!settingsForm.get('email').valid && settingsForm.get('email').touched\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n\n  <!-- Users first name input -->\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"first_name\" formControlName=\"first_name\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!settingsForm.get('first_name').valid && settingsForm.get('first_name').touched\">Please enter\n        firstname</span>\n    </mat-error>\n  </mat-form-field>\n\n  <!-- Users surname input -->\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"surname\" formControlName=\"surname\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!settingsForm.get('surname').valid && settingsForm.get('surname').touched\">Please enter\n        surname</span>\n    </mat-error>\n  </mat-form-field>\n\n  <!-- Users bio input -->\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"bio\" formControlName=\"bio\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!settingsForm.get('bio').valid && settingsForm.get('bio').touched\">Please enter bio</span>\n    </mat-error>\n  </mat-form-field>\n\n  <!-- Profile settings submit button -->\n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!settingsForm.valid\" mat-raised-button color=\"primary\">\n      <mat-icon>save</mat-icon>\n    </button>\n  </div>\n\n  <!-- image upload-->\n  <h3>Edit Profile Image</h3>\n  <!-- mat-card for  -->\n  <mat-card class=\"card\">\n    <mat-card-header>\n    </mat-card-header>\n    <!-- Preview the image to be uploaded-->\n    <div *ngFor=\"let item of uploader.queue\" class=\"media\">\n      <div class=\"media-left\">\n        <img mat-card-image src=\"\" imgPreview [image]=\"item?._file\" class=\"media-object\" />\n      </div>\n    </div>\n    <mat-card-content>\n      <p>\n        Click choose file to preview new profile image\n      </p>\n    </mat-card-content>\n    <mat-card-actions class=\"alligner\">\n      <!-- File input for the file-upload plugin, with special ng2-file-upload directive called ng2FileSelect -->\n      <input type=\"file\" name=\"{{currentUserName}}\" ng2FileSelect [uploader]=\"uploader\" accept=\"image/*\" />\n      <!-- button to trigger the file upload when submitted -->\n      <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n        Upload new profile image </button> </mat-card-actions>\n  </mat-card>\n</form>"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Import plugin for file upload.

// API route url.
var URL = '/api/assets/';
/**
 * Component for settings page.
 *
 * @export
 * @class SettingsComponent
 * @implements {OnInit}
 */
var SettingsComponent = /** @class */ (function () {
    /**
     *Creates an instance of SettingsComponent.
     * @param {UserService} userService
     * @param {Router} router
     * @param {FormBuilder} formBuilder
     * @param {Title} titleService
     * @memberof SettingsComponent
     */
    function SettingsComponent(userService, router, formBuilder, titleService) {
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.titleService = titleService;
        this.first_name = '';
        this.surname = '';
        this.bio = '';
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email,
        ]);
        this.errorMessage = '';
        /**
         * Declare a property called fileuploader and assign it to an instance of a new fileUploader.
         * Pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the file input when sending the post request.
         * @type {FileUploader}
         * @memberof SettingsComponent
         */
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({
            url: URL,
            itemAlias: 'photo',
            allowedFileType: ['image']
        });
    }
    /**
     *  Function used to set page title
     *
     * @param {string} newTitle - new title.
     * @memberof SettingsComponent
     */
    SettingsComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    /**
     * Runs on page call.
     *
     * @memberof SettingsComponent
     */
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.userService.getUserPayLoad();
        this.currentUserName = this.currentUser.username;
        this.setForm(this.currentUserName);
        this.settingsForm = this.formBuilder.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email],
            'first_name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'surname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'bio': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        // Overide the onCompleteItem property of the uploader so we are able to deal with the server response.
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            // Update the user profile with the new image url.
            _this.userService.updateUser(_this.profileinfo._id, response)
                .subscribe(function (res) {
                _this.router.navigate(['/profile', _this.profileinfo.username]);
            }, function (err) {
                console.log(err);
            });
        };
        // Set page title.
        this.setTitle("TB: Profile Settings");
    };
    /**
     * Set the form data in SettingsForm to the details of the current user.
     *
     * @param {*} id - the current users id.
     * @memberof SettingsComponent
     */
    SettingsComponent.prototype.setForm = function (id) {
        var _this = this;
        this.userService.getProfile(id)
            .subscribe(function (profile) {
            // Must extract profile data from response.
            _this.profileinfo = profile[0];
            // Form object
            _this.settingsForm.setValue({
                email: _this.profileinfo.email,
                first_name: _this.profileinfo.first_name,
                surname: _this.profileinfo.surname,
                bio: _this.profileinfo.bio
            });
        });
    };
    /**
     * Sends a request to userService to update user details.
     *
     * @param {NgForm} form - the form to submit.
     * @memberof SettingsComponent
     */
    SettingsComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.userService.updateUser(this.profileinfo._id, form)
            .subscribe(function (res) {
            // Route user to profile page.
            _this.router.navigate(['/profile', _this.profileinfo.username]);
        }, function (err) {
            _this.errorMessage = err.error.msg;
            console.error("[ERROR] submitting update :", _this.errorMessage);
        });
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], SettingsComponent);
    return SettingsComponent;
}()); // End of SettingsComponent



/***/ }),

/***/ "./src/app/shared/image-preview.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/image-preview.directive.ts ***!
  \***************************************************/
/*! exports provided: ImagePreviewDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePreviewDirective", function() { return ImagePreviewDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * ImagePreview Directive works alongside n2-file-upload to allow an image to be previewed after it is selected for file upload.
 * Adapted from {@link  https://github.com/valor-software/ng2-file-upload/issues/461|github}.
 *
 * @export
 * @class ImagePreviewDirective
 */
var ImagePreviewDirective = /** @class */ (function () {
    /**
     *Creates an instance of ImagePreviewDirective.
     * @param {ElementRef} el
     * @param {Renderer} renderer
     * @memberof ImagePreviewDirective
     */
    function ImagePreviewDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * Activated when a change is detected.
     *
     * @param {SimpleChanges} changes
     * @returns
     * @memberof ImagePreviewDirective
     */
    ImagePreviewDirective.prototype.ngOnChanges = function (changes) {
        var reader = new FileReader();
        var el = this.el;
        reader.onloadend = function (e) {
            el.nativeElement.src = reader.result;
        };
        // Must insure image is loaded.
        if (this.image) {
            return reader.readAsDataURL(this.image);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImagePreviewDirective.prototype, "image", void 0);
    ImagePreviewDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'img[imgPreview]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], ImagePreviewDirective);
    return ImagePreviewDirective;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Register form settings */\n.form-register {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n/* Margin settings */\n.form-register .form-register-heading,\n.form-signin .checkbox {\n  margin-bottom: 10px;\n}\n/* Font settings */\n.form-register .checkbox {\n  font-weight: normal;\n}\n/* Form settings  */\n.form-register .form-control {\n  position: relative;\n  height: auto;\n  box-sizing: border-box;\n  padding: 10px;\n  font-size: 16px;\n}\n/* Form settings */\n.form-register .form-control:focus {\n  z-index: 2;\n}\n/* Form settings email */\n.form-register input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/* Form settings password */\n.form-register input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n/* p tag settings in form */\n.form-register p {\n  margin-top: 10px;\n}\n/* h3 tag settings in form */\n.form-register h3 {\n  text-align: center;\n}\n/* Used to create space between tags */\n.spacer{\n  margin-top: 10px;\n  width: 100%;\n}\n/* Spacer children elements */\n.spacerh:nth-last-child() {\n  margin-bottom: 10px;\n}\n/* Button settings */\n.button-row {\n  margin: auto;\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- Form for user signup -->  \n  <form class=\"form-register\" [formGroup]=\"passwordFormGroup\" (ngSubmit)=\"onFormSubmit()\">\n    <h3>Register new user account</h3>\n    <div class=\"alert alert-warning alert-dismissible\" role=\"alert\" *ngIf=\"serverErrorMessage !== ''\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>      {{serverErrorMessage}}\n    </div>\n\n    <!-- Username input box -->    \n    <mat-form-field class=\"spacer\">\n      <input matInput placeholder=\"username\" formControlName=\"username\" [errorStateMatcher]=\"matcher\">\n      <mat-error>\n        <span *ngIf=\"!passwordFormGroup.get('username').valid && passwordFormGroup.get('username').touched\">Please\n          Enter\n          Username</span>\n      </mat-error>\n      <mat-error>\n        <span *ngIf=\"serverErrorType === 'username'\">{{serverErrorMessage}}</span>\n      </mat-error>\n    </mat-form-field>\n\n    <!-- First name input box -->    \n    <mat-form-field class=\"spacer\">\n      <input matInput placeholder=\"first_name\" formControlName=\"first_name\" [errorStateMatcher]=\"matcher\">\n      <mat-error>\n        <span *ngIf=\"!passwordFormGroup.get('first_name').valid && passwordFormGroup.get('first_name').touched\">Please\n          Enter\n          firstname</span>\n      </mat-error>\n    </mat-form-field>\n\n    <!-- Surname input box -->\n    <mat-form-field class=\"spacer\">\n      <input matInput placeholder=\"surname\" formControlName=\"surname\" [errorStateMatcher]=\"matcher\">\n      <mat-error>\n        <span *ngIf=\"!passwordFormGroup.get('surname').valid && passwordFormGroup.get('surname').touched\">Please enter\n          surname</span>\n      </mat-error>\n    </mat-form-field>\n\n    <!-- Email input box -->\n    <mat-form-field class=\"spacer\">\n      <input matInput placeholder=\"Email\" formControlName=\"email\" [errorStateMatcher]=\"matcher\">\n      <mat-error *ngIf=\"!passwordFormGroup.get('email').valid && passwordFormGroup  .get('email').touched\">\n        Email is <strong>required</strong>\n      </mat-error>\n      <mat-error *ngIf=\"passwordFormGroup.hasError('email')\">Please enter a valid email address</mat-error>\n      <mat-error *ngIf=\"serverErrorType == 'email' && serverErrorMessage != ''\"><strong>{{serverErrorMessage}}</strong></mat-error>\n    </mat-form-field>\n\n    <!-- Password 1 input box -->\n    <mat-form-field class=\"spacer\">\n      <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" (input)=\"onPasswordInput()\">\n      <mat-error *ngIf=\"password.hasError('required')\">Password is required</mat-error>\n      <mat-error *ngIf=\"password.hasError('minlength')\">Password must have at least {{minimumPwLength}} characters</mat-error>\n    </mat-form-field>\n\n    <!-- Password 2 input box -->\n    <mat-form-field class=\"spacer\">\n      <input matInput type=\"password\" placeholder=\"Confirm password\" formControlName=\"password2\" (input)=\"onPasswordInput()\">\n      <mat-error *ngIf=\"password2.hasError('required')\">Please confirm your password</mat-error>\n      <mat-error *ngIf=\"password2.invalid && !password2.hasError('required')\">Passwords don't match</mat-error>\n    </mat-form-field>\n\n    <!-- Button submission -->\n    <div class=\"button-row\">\n      <button type=\"submit\" [disabled]=\"!passwordFormGroup.valid\" mat-raised-button color=\"primary\">Register<mat-icon>save</mat-icon></button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Component for sign up page.
 *
 * @export
 * @class SignupComponent
 * @implements {OnInit}
 */
var SignupComponent = /** @class */ (function () {
    /**
     *Creates an instance of SignupComponent.
     * @param {Router} router
     * @param {UserService} api
     * @param {FormBuilder} formBuilder
     * @param {Title} titleService
     * @memberof SignupComponent
     */
    function SignupComponent(router, api, formBuilder, titleService) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.titleService = titleService;
        // Form group variables.
        this.minimumPwLength = 8;
        // Server Response messages.
        this.message = '';
        this.serverErrorMessage = '';
        this.serverErrorType = '';
        /**
         * Validate passwords inputed to ensure values are equal.
         *
         * @type {ValidatorFn}
         * @memberof SignupComponent
         */
        this.passwordMatchValidator = function (formGroup) {
            if (formGroup.get('password').value === formGroup.get('password2').value)
                return null;
            else
                return {
                    passwordMismatch: true
                };
        };
    }
    /**
     * Function used to set page title.
     *
     * @param {string} newTitle - new title to set.
     * @memberof SignupComponent
     */
    SignupComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    /**
     * Function runs on page call.
     *
     * @memberof SignupComponent
     */
    SignupComponent.prototype.ngOnInit = function () {
        // Password form setttings. 
        this.passwordFormGroup = this.formBuilder.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            first_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            surname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(this.minimumPwLength)]],
            password2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        }, { validator: this.passwordMatchValidator });
        // Set page title.
        this.setTitle("TB: Signup");
    };
    Object.defineProperty(SignupComponent.prototype, "password", {
        /**
         * Used the check if passwords match.
         *
         * Adapted from {@link https://stackoverflow.com/questions/50728460/password-confirm-angular-material| here}.
         * @readonly
         * @memberof SignupComponent
         */
        get: function () { return this.passwordFormGroup.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "password2", {
        get: function () { return this.passwordFormGroup.get('password2'); },
        enumerable: true,
        configurable: true
    });
    /**
     * Called on each input in either password field.
     *
     * @memberof SignupComponent
     */
    SignupComponent.prototype.onPasswordInput = function () {
        // Check if passwords are the same.
        if (this.passwordFormGroup.hasError('passwordMismatch'))
            this.password2.setErrors([{ 'passwordMismatch': true }]);
        else
            this.password2.setErrors(null);
    };
    /**
     * Subscribes to userService to register a user.
     *
     * @param {NgForm} form - the form to register.
     * @memberof SignupComponent
     */
    SignupComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        // Reset the error message.
        this.serverErrorMessage = '';
        this.api.postUser(this.passwordFormGroup.value)
            .subscribe(function (resp) {
            alert("Account created welcome to TechBook !");
            _this.router.navigate(['login']);
        }, function (err) {
            _this.serverErrorMessage = err.error.msg;
            console.error(_this.serverErrorMessage);
            // Check error type returned from server and assign to serverErrorType.
            // This section is not in use but may be used to move error to specific input.
            if (_this.serverErrorMessage.includes('email')) {
                _this.serverErrorType = 'email';
            }
            else if (_this.serverErrorMessage.includes('username')) {
                _this.serverErrorType = 'username';
            }
            else {
                _this.serverErrorType = 'generic';
            }
        });
    };
    ;
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], SignupComponent);
    return SignupComponent;
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
    production: false
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
// Main file that starts angular application




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

module.exports = __webpack_require__(/*! /home/zulkar/Desktop/webassign/final-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map