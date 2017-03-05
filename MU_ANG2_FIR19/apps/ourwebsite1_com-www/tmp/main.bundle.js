webpackJsonp([0,4],{

/***/ 1168:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(567);


/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.title = 'About: My Google Map';
        this.lat = 52.258107; // center of Holland
        this.lng = 5.600592; // center of Holland
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(904),
            styles: [__webpack_require__(892)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/client1/src/about.component.js.map

/***/ },

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(431);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return DialogContent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var HomeComponent = (function () {
    function HomeComponent(_dialog, _snackbar) {
        var _this = this;
        this._dialog = _dialog;
        this._snackbar = _snackbar;
        this.isDarkTheme = false;
        this.foods = [
            { name: 'Pizza', rating: 'Excellent' },
            { name: 'Burritos', rating: 'Great' },
            { name: 'French fries', rating: 'Pretty good' },
        ];
        this.progress = 0;
        // Update the value for the progress-bar on an interval.
        setInterval(function () {
            _this.progress = (_this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this._dialog.open(DialogContent);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.lastDialogResult = result;
        });
    };
    HomeComponent.prototype.showSnackbar = function () {
        this._snackbar.open('YUM SNACKS', 'CHEW');
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(906),
            styles: [__webpack_require__(894)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdDialog */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdDialog */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
var DialogContent = (function () {
    function DialogContent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DialogContent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <p>This is a dialog</p>\n    <p>\n      <label>\n        This is a text box inside of a dialog.\n        <input #dialogInput>\n      </label>\n    </p>\n    <p> <button md-button (click)=\"dialogRef.close(dialogInput.value)\">CLOSE</button> </p>\n  ",
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */]) === 'function' && _a) || Object])
    ], DialogContent);
    return DialogContent;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/client1/src/home.component.js.map

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProductEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductEditorComponent = (function () {
    function ProductEditorComponent() {
    }
    ProductEditorComponent.prototype.ngOnInit = function () {
    };
    ProductEditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-editor',
            template: __webpack_require__(907),
            styles: [__webpack_require__(895)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductEditorComponent);
    return ProductEditorComponent;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/client1/src/product-editor.component.js.map

/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProductViewerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductViewerComponent = (function () {
    function ProductViewerComponent() {
    }
    ProductViewerComponent.prototype.ngOnInit = function () {
    };
    ProductViewerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-viewer',
            template: __webpack_require__(908),
            styles: [__webpack_require__(896)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductViewerComponent);
    return ProductViewerComponent;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/client1/src/product-viewer.component.js.map

/***/ },

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_products_service__ = __webpack_require__(482);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProductsViewerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsViewerComponent = (function () {
    function ProductsViewerComponent(router, route, productsService) {
        this.router = router;
        this.route = route;
        this.productsService = productsService;
        this.count = 0;
        this.offset = 0;
        this.limit = 2; // choose an appropriate number
        this.loading = false;
        this.failed = false;
    }
    ProductsViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var observable = this.route.params
            .map(function (params) { return params['nr']; })
            .map(function (pageNr) { return (pageNr - 1) * _this.limit; });
        observable.subscribe(function (offset) { return _this.offset = offset; });
        observable.share().subscribe(function (offset) { return _this.getAll(offset, _this.limit); });
    };
    ProductsViewerComponent.prototype.getAll = function (offset, limit) {
        var _this = this;
        console.log("ProductsViewerComponent - getAll, offset = ", offset, " limit = ", limit);
        this.products = [];
        this.loading = true;
        this.failed = false;
        this.productsService.getAll(offset, limit).subscribe(function (result) {
            //this.products = result.products;
            //this.count = result.count;
            console.log("ProductsViewerComponent - getAll - result = ", result);
            // ADDED TO TEMPORARILY OVERWRITE THE products
            // this.products = [
            // 	new ProductModel(1, "She Made Them Do It", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(2, "Poka stanitsa spit", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(3, "Memory Lane", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(4, "No Through Road", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(5, "Malcolm & Eddie", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(6, "Violet", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(7, "Last Call with Carson Daly", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(8, "The Yellow Badge of Courage", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(9, "Doctor Who: The Companion Chronicles", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(10, "The Feed", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(11, "Emmerdale Farm", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(12, "The Jeselnik Offensive", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(13, "Zero Minute", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(14, "Nina and the Neurons Go Inventing", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(15, "Dynamo", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(16, "Ammattimies", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(17, "Happening Now", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(18, "The O'Reilly Factor", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(19, "How Do I Look?", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(20, "Electric Playground", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(21, "Commissaire Laviolette", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(22, "The Young Doctors", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(23, "Married with Children", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(24, "Le clan Pasquier", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(25, "The Gale Storm Show: Oh! Susanna", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(26, "Serangoon Road", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(27, "The Young Doctors", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(28, "Family Matters", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(29, "Motormouth", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(30, "Antiques Roadshow", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(31, "Wasak", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(32, "Prime News", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(33, "May bukas pa", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(34, "The Hollywood Squares", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(35, "Els matins a TV3", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(36, "Your Favorite Story", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(37, "Los desayunos de TVE", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(38, "The Small House at Allington", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(39, "Minute to Win It", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(40, "El ministerio del tiempo", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(41, "The Fabulous Picture Show", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(42, "Black Jack", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(43, "Cutting Edge", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(44, "Judge Joe Brown", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(45, "All Saints", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(46, "Quincy M.E.", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(47, "Neighbours", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(48, "Chistoserdechnoe priznanie", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(49, "John Halifax, Gentleman", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(50, "Paul Flynn", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(51, "Texas Monthly Talks", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(52, "David Copperfield", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(53, "Obruchalnoe koltso", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(54, "Rock Macabre", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(55, "The Tonight Show Starring Johnny Carson", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(56, "Daesh molodezh", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(57, "Wicked Wicked Games", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(58, "Music Fair", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(59, "Flip My Food with Chef Jeff", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(60, "Un hombre solo", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(61, "My S Rostova", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(62, "Zwei bei Kallwass", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(63, "Last Call with Carson Daly", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(64, "Jimmy Kimmel Live!", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(65, "Plebs", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(66, "Lonelygirl15", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(67, "Plus belle la vie", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(68, "Watch What Happens: Live", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(69, "WRAL Murder Trials", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(70, "Secrets of the Bible", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(71, "Six O'Clock News", "http://www.imdb.com", "Completed"),
            // 	new ProductModel(72, "Jackie Gleason: American Scene Magazine", "http://www.imdb.com", "Completed")
            // ];
            _this.products = result['products']; // ORIGINAL result['products'];
            console.log("ProductsViewerComponent - getAll - this.products = ", _this.products);
            _this.count = result['count'];
            console.log("ProductsViewerComponent - getAll - this.count = ", _this.count);
            _this.loading = false;
        }, function () {
            _this.loading = false;
            _this.failed = true;
        });
    };
    ProductsViewerComponent.prototype.viewProduct = function (productId) {
        console.log("ProductsViewerComponent - viewProduct called with productId = ", productId);
        // TEMP COMMENTED OUT		this.router.navigate(['product', productId]);
    };
    ProductsViewerComponent.prototype.editProduct = function (productId) {
        console.log("ProductsViewerComponent - editProduct called with productId = ", productId);
        // TEMP COMMENTED OUT		this.router.navigate(['product', productId, 'edit']);
    };
    ProductsViewerComponent.prototype.onPageChange = function (offset) {
        this.offset = offset;
        this.router.navigate(['/page', (offset / this.limit) + 1]);
    };
    ProductsViewerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-products-viewer',
            template: __webpack_require__(909),
            styles: [__webpack_require__(897)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */]) === 'function' && _c) || Object])
    ], ProductsViewerComponent);
    return ProductsViewerComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/client1/src/products-viewer.component.js.map

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_base__ = __webpack_require__(728);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService() {
        this.data = __WEBPACK_IMPORTED_MODULE_2__data_base__["a" /* DataBase */];
    }
    DataService.prototype.list = function (search, page, limit) {
        if (search === void 0) { search = null; }
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 10; }
        console.log("DataService - list, this.data = ", this.data);
        var dataResult = this.data.filter(function (data) {
            return (search) ? data.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 : true;
        });
        var dataResultPage = dataResult.slice((page - 1) * limit, page * limit);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of({ total: dataResult.length, items: dataResultPage }).delay(100);
    };
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], DataService);
    return DataService;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/client1/src/data.service.js.map

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProductsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//END: ADDED
var ProductsService = (function () {
    function ProductsService(http) {
        this.http = http;
        //START: ADDED
        //ORIGINAL  products: ProductModel[] = ProductsBase;  // Takes the products from the static file products.base.ts
        // products: ProductModel[] = [
        //   new ProductModel(1, "She Made Them Do It", "http://www.imdb.com", "Completed")
        // ]; // Make this dynamic, so it get GET from a REST API
        //END: ADDED
        this.baseUrl = 'http://localhost:8001/api';
        this.requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' })
        });
    }
    //START: ADDED
    // getAllProducts(): Observable<ProductModel> {
    // 	return this.http
    // 	  .get(`${this.baseUrl}/products/?offset=${offset}&limit=${limit}`)
    // 		.map(response => response.json())
    // 		.map(results => this.getList(results));
    // }
    //END: ADDED
    ProductsService.prototype.getAll = function (offset, limit) {
        var _this = this;
        if (offset === void 0) { offset = 0; }
        if (limit === void 0) { limit = 2; }
        return this.http
            .get(this.baseUrl + "/products") // ORIGINAL .get(`${this.baseUrl}/products/?offset=${offset}&limit=${limit}`)
            .map(function (response) { return response.json(); })
            .map(function (results) { return _this.getList(results, offset, limit); }); // ORIGINAL .map(results => this.getList(results));
    };
    ProductsService.prototype.get = function (productId) {
        return this.http.get((this.baseUrl + "/products/") + encodeURIComponent(productId.toString())).map(this.extractData).catch(this.handleError);
    };
    ProductsService.prototype.insert = function (product) {
        return this.http.post(this.baseUrl + "/products/", JSON.stringify(product), this.requestOptions).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ProductsService.prototype.update = function (product) {
        return this.http.put((this.baseUrl + "/products/") + encodeURIComponent(product.id.toString()), JSON.stringify(product), this.requestOptions).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ProductsService.prototype.delete = function (productId) {
        return this.http.delete((this.baseUrl + "/products/") + encodeURIComponent(productId.toString())).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ProductsService.prototype.getList = function (data, offset, limit) {
        if (offset === void 0) { offset = 0; }
        if (limit === void 0) { limit = 2; }
        console.log("ProductsService - getList, data = ", data, ", offset = ", offset, ", limit = ", limit);
        // turn the generic data Object into a productModel
        // let products = new Array<ProductModel>();
        // for(let i=0; i<data.length; i++) {
        // 	console.log("ProductsService - getList, data[", i,"].id = ", data[i].id);
        //   products[i] = new ProductModel(data[i].id, "She Made Them Do It", "http://www.imdb.com", "Completed");
        // }
        // data = new Array<ProductModel[]>();
        // data[0] = [new ProductModel(1, "She Made Them Do It", "http://www.imdb.com", "Completed")];
        //START: ADDED
        var result = [];
        var count = data.length;
        var products = data;
        result['count'] = count;
        // ORIGINAL result['products'] = products;
        result['products'] = products.slice(offset * limit, (offset + 1) * limit); // PAGINATION LOGIC
        //END: ADDED
        // room for additional filtering
        return result; // ORIGINAL return data;
    };
    //START: ADDED
    // list(search: string = null, page: number = 1, limit: number = 10): Observable<ProductsListResult<ProductModel>> {
    //   let productsResult = this.products.filter(function(product: ProductModel) {
    //       return (search) ? product.title.toLowerCase().indexOf(search) !== -1 : true;
    //   });
    //   let productsResultPage = productsResult.slice((page - 1) * limit, page * limit);
    //   return Observable.of({totalProducts: productsResult.length, products: productsResultPage}).delay(100);
    // }
    ProductsService.prototype.list = function (products, search, page, limit) {
        if (search === void 0) { search = null; }
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 10; }
        console.log("ProductsService - list, products = ", products);
        console.log("ProductsService - list, search = ", search);
        console.log("ProductsService - list, page = ", page);
        console.log("ProductsService - list, limit = ", limit);
        var productsResult = products.filter(function (product) {
            return (search) ? product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 : true;
        });
        var productsResultPage = productsResult.slice((page - 1) * limit, page * limit);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of({ totalProducts: productsResult.length, products: productsResultPage }).delay(100);
    };
    //END: ADDED
    /**
     * Pick the array that belongs to the key 'products'
     *
     * e.g. { products:[our data is in here] }
     */
    ProductsService.prototype.extractData = function (res) {
        var body = res.json();
        //console.log(body.products);
        return body.products || {};
    };
    /**
     * Handle error
     */
    ProductsService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    ProductsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], ProductsService);
    return ProductsService;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/client1/src/products.service.js.map

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StoreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoreComponent = (function () {
    function StoreComponent() {
    }
    StoreComponent.prototype.ngOnInit = function () {
    };
    StoreComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-store',
            template: __webpack_require__(915),
            styles: [__webpack_require__(902)]
        }), 
        __metadata('design:paramtypes', [])
    ], StoreComponent);
    return StoreComponent;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/client1/src/store.component.js.map

/***/ },

/***/ 566:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 566;


/***/ },

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(724);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/client1/src/main.js.map

/***/ },

/***/ 722:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_store_component__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products_viewer_products_viewer_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_product_viewer_product_viewer_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_product_editor_product_editor_component__ = __webpack_require__(478);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });







var routes = [
    { path: 'client1', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'client1/home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'client1/about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'client1/store', component: __WEBPACK_IMPORTED_MODULE_3__store_store_component__["a" /* StoreComponent */] },
    { path: 'client1/products', redirectTo: 'client1/products/page/1', pathMatch: 'full' },
    { path: 'client1/products/page/:nr', component: __WEBPACK_IMPORTED_MODULE_4__products_products_viewer_products_viewer_component__["a" /* ProductsViewerComponent */] },
    { path: 'client1/products/product/:id', component: __WEBPACK_IMPORTED_MODULE_5__products_product_viewer_product_viewer_component__["a" /* ProductViewerComponent */] },
    { path: 'client1/products/product/:id/edit', component: __WEBPACK_IMPORTED_MODULE_6__products_product_editor_product_editor_component__["a" /* ProductEditorComponent */] }
];
var AppRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true });
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/client1/src/app-routing.module.js.map

/***/ },

/***/ 723:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Our Website';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(905),
            styles: [__webpack_require__(893)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/client1/src/app.component.js.map

/***/ },

/***/ 724:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__(890);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_google_maps_core__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_list_search_list_component__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_search_list_pagination_search_list_pagination_component__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_pagination_pagination_component__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_loader_loader_component__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_data_service__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__store_store_component__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__products_products_viewer_products_viewer_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__products_shared_products_list_products_list_component__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__products_product_viewer_product_viewer_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__products_product_editor_product_editor_component__ = __webpack_require__(478);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["b" /* DialogContent */],
                __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__search_list_search_list_component__["a" /* SearchListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__shared_pagination_pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__shared_loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__shared_search_list_pagination_search_list_pagination_component__["a" /* SearchListPaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_16__store_store_component__["a" /* StoreComponent */],
                __WEBPACK_IMPORTED_MODULE_17__products_products_viewer_products_viewer_component__["a" /* ProductsViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_18__products_shared_products_list_products_list_component__["a" /* ProductsListComponent */],
                __WEBPACK_IMPORTED_MODULE_19__products_product_viewer_product_viewer_component__["a" /* ProductViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_20__products_product_editor_product_editor_component__["a" /* ProductEditorComponent */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_8__home_home_component__["b" /* DialogContent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["e" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBJa7gl2Qf4grJI2--AXdptakh_6YwOTmw'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__services_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/client1/src/app.module.js.map

/***/ },

/***/ 725:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DataModel; });
var DataModel = (function () {
    function DataModel(id, title) {
        this.id = id;
        this.title = title;
    }
    ;
    return DataModel;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/client1/src/data.model.js.map

/***/ },

/***/ 726:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProductsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { DataService } from "../../../services/data.service";
//import { DataModel } from "../../../models/data.model";
//END: SEARCH-LIST
var ProductsListComponent = (function () {
    //END: SEARCH-LIST
    function ProductsListComponent(productsService) {
        this.productsService = productsService;
        //END: PRODUCTS-LIST
        //START: PRODUCTS-LIST
        this.viewProduct = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //END: PRODUCTS-LIST	
        //START: PRODUCTS-LIST
        this.editProduct = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //END: PRODUCTS-LIST
        //START: SEARCH-LIST
        this.terms = "";
        this.searchTermStream = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.page = 1;
        this.pageStream = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ProductsListComponent - ngOnInit(), this.products", this.products);
        //START: SEARCH-LIST		
        //    const searchSource = this.searchTermStream
        //      .debounceTime(1000)
        //      .distinctUntilChanged()
        //      .map(searchTerm => {
        //        this.terms = searchTerm;
        //        return {search: searchTerm, page: 1}
        //      });
        //END: SEARCH-LIST
        //START: PRODUCTS-LIST
        // ADDED TO TEMPORARILY OVERWRITE THE products
        // this.products = [
        //   new ProductModel(1, "She Made Them Do It", "http://www.imdb.com", "Completed")
        // ];
        var searchSourceProducts = this.searchTermStream
            .debounceTime(1000)
            .distinctUntilChanged()
            .map(function (searchTerm) {
            _this.terms = searchTerm;
            return { products: _this.products, search: searchTerm, page: 1 };
        });
        //END : PRODUCTS-LIST
        //START: SEARCH-LIST
        //    const pageSource = this.pageStream.map(pageNumber => {
        //      this.page = pageNumber;
        //      return {search: this.terms, page: pageNumber}
        //    });
        //END: SEARCH-LIST
        //START: PRODUCTS-LIST
        var pageSourceProducts = this.pageStream.map(function (pageNumber) {
            _this.page = pageNumber;
            return { products: _this.products, search: _this.terms, page: pageNumber };
        });
        //END : PRODUCTS-LIST
        //START: SEARCH-LIST
        //    const source = pageSource
        //      .merge(searchSource)
        //      .startWith({search: this.terms, page: this.page})
        //      .switchMap((params: {search: string, page: number}) => {
        //        return this.dataService.list(params.search, params.page)
        //      })
        //      .share();
        //END: SEARCH-LIST
        //START: PRODUCTS-LIST
        var sourceProducts = pageSourceProducts
            .merge(searchSourceProducts)
            .startWith({ products: this.products, search: this.terms, page: this.page })
            .switchMap(function (params) {
            return _this.productsService.list(params.products, params.search, params.page);
        })
            .share();
        //END : PRODUCTS-LIST
        //START: SEARCH-LIST
        //    this.total$ = source.pluck('total');
        //    this.items$ = source.pluck('items');
        //END: SEARCH-LIST		
        //START: PRODUCTS-LIST
        this.totalProducts$ = sourceProducts.pluck('totalProducts');
        this.products$ = sourceProducts.pluck('products');
        //END : PRODUCTS-LIST		
    };
    //START: SEARCH-LIST
    ProductsListComponent.prototype.search = function (terms) {
        this.searchTermStream.next(terms);
    };
    ProductsListComponent.prototype.goToPage = function (page) {
        this.pageStream.next(page);
    };
    //END: SEARCH-LIST
    //START: PRODUCTS-LIST
    ProductsListComponent.prototype.viewProductButton = function (productId) {
        this.viewProduct.emit(productId);
    };
    ProductsListComponent.prototype.editProductButton = function (productId) {
        this.editProduct.emit(productId);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], ProductsListComponent.prototype, "products", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], ProductsListComponent.prototype, "count", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], ProductsListComponent.prototype, "viewProduct", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], ProductsListComponent.prototype, "editProduct", void 0);
    ProductsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-products-list',
            template: __webpack_require__(910),
            styles: [__webpack_require__(898)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */]) === 'function' && _c) || Object])
    ], ProductsListComponent);
    return ProductsListComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/client1/src/products-list.component.js.map

/***/ },

/***/ 727:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(481);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SearchListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchListComponent = (function () {
    function SearchListComponent(dataService) {
        this.dataService = dataService;
        this.terms = "";
        this.searchTermStream = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.page = 1;
        this.pageStream = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    SearchListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var searchSource = this.searchTermStream
            .debounceTime(1000)
            .distinctUntilChanged()
            .map(function (searchTerm) {
            _this.terms = searchTerm;
            return { search: searchTerm, page: 1 };
        });
        var pageSource = this.pageStream.map(function (pageNumber) {
            _this.page = pageNumber;
            return { search: _this.terms, page: pageNumber };
        });
        var source = pageSource
            .merge(searchSource)
            .startWith({ search: this.terms, page: this.page })
            .switchMap(function (params) {
            return _this.dataService.list(params.search, params.page);
        })
            .share();
        this.total$ = source.pluck('total');
        this.items$ = source.pluck('items');
    };
    SearchListComponent.prototype.search = function (terms) {
        this.searchTermStream.next(terms);
    };
    SearchListComponent.prototype.goToPage = function (page) {
        this.pageStream.next(page);
    };
    SearchListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search-list',
            template: __webpack_require__(911),
            styles: [__webpack_require__(899)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === 'function' && _a) || Object])
    ], SearchListComponent);
    return SearchListComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/client1/src/search-list.component.js.map

/***/ },

/***/ 728:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_data_model__ = __webpack_require__(725);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DataBase; });

// Extract from imdb
var DataBase = [
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](1, "She Made Them Do It"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](2, "Poka stanitsa spit"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](3, "Memory Lane"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](4, "No Through Road"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](5, "Malcolm & Eddie"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](6, "Violet"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](7, "Last Call with Carson Daly"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](8, "The Yellow Badge of Courage"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](9, "Doctor Who: The Companion Chronicles"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](10, "The Feed"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](11, "Emmerdale Farm"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](12, "The Jeselnik Offensive"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](13, "Zero Minute"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](14, "Nina and the Neurons Go Inventing"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](15, "Dynamo"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](16, "Ammattimies"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](17, "Happening Now"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](18, "The O'Reilly Factor"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](19, "How Do I Look?"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](20, "Electric Playground"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](21, "Commissaire Laviolette"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](22, "The Young Doctors"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](23, "Married with Children"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](24, "Le clan Pasquier"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](25, "The Gale Storm Show: Oh! Susanna"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](26, "Serangoon Road"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](27, "The Young Doctors"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](28, "Family Matters"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](29, "Motormouth"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](30, "Antiques Roadshow"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](31, "Wasak"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](32, "Prime News"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](33, "May bukas pa"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](34, "The Hollywood Squares"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](35, "Els matins a TV3"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](36, "Your Favorite Story"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](37, "Los desayunos de TVE"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](38, "The Small House at Allington"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](39, "Minute to Win It"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](40, "El ministerio del tiempo"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](41, "The Fabulous Picture Show"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](42, "Black Jack"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](43, "Cutting Edge"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](44, "Judge Joe Brown"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](45, "All Saints"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](46, "Quincy M.E."),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](47, "Neighbours"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](48, "Chistoserdechnoe priznanie"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](49, "John Halifax, Gentleman"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](50, "Paul Flynn"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](51, "Texas Monthly Talks"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](52, "David Copperfield"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](53, "Obruchalnoe koltso"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](54, "Rock Macabre"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](55, "The Tonight Show Starring Johnny Carson"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](56, "Daesh molodezh"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](57, "Wicked Wicked Games"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](58, "Music Fair"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](59, "Flip My Food with Chef Jeff"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](60, "Un hombre solo"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](61, "My S Rostova"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](62, "Zwei bei Kallwass"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](63, "Last Call with Carson Daly"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](64, "Jimmy Kimmel Live!"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](65, "Plebs"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](66, "Lonelygirl15"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](67, "Plus belle la vie"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](68, "Watch What Happens: Live"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](69, "WRAL Murder Trials"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](70, "Secrets of the Bible"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](71, "Six O'Clock News"),
    new __WEBPACK_IMPORTED_MODULE_0__models_data_model__["a" /* DataModel */](72, "Jackie Gleason: American Scene Magazine"),
];
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/client1/src/data.base.js.map

/***/ },

/***/ 729:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = (function () {
    function LoaderComponent() {
        this.loading = false;
        this.failed = false;
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], LoaderComponent.prototype, "loading", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], LoaderComponent.prototype, "failed", void 0);
    LoaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(912)
        }), 
        __metadata('design:paramtypes', [])
    ], LoaderComponent);
    return LoaderComponent;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/client1/src/loader.component.js.map

/***/ },

/***/ 730:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PaginationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Based on 'Creating a pagination component with Angular 2' 
// at https://g00glen00b.be/pagination-component-angular-2/
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.offset = 0;
        this.limit = 1;
        this.size = 1;
        this.range = 3;
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PaginationComponent.prototype.ngOnInit = function () {
        this.getPages(this.offset, this.limit, this.size);
        console.log("Pagination ngOnInit, this.getPages, offset = ", this.offset, ", limit = ", this.limit);
    };
    PaginationComponent.prototype.ngOnChanges = function () {
        this.getPages(this.offset, this.limit, this.size);
        console.log("Pagination ngOnChanges, this.getPages, offset = ", this.offset, ", limit = ", this.limit);
    };
    PaginationComponent.prototype.getPages = function (offset, limit, size) {
        var _this = this;
        console.log("Pagination getPages, offset = ", offset, ", limit = ", limit, ", size = ", size);
        this.currentPage = this.getCurrentPage(offset, limit);
        console.log("Pagination getPages, this.currentPage = ", this.currentPage);
        this.totalPages = this.getTotalPages(limit, size);
        console.log("Pagination getPages, this.totalPages = ", this.totalPages);
        this.pages = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].range(-this.range, this.range * 2 + 1)
            .map(function (offset) { return _this.currentPage + offset; })
            .filter(function (page) { return _this.isValidPageNumber(page, _this.totalPages); })
            .toArray();
        console.log("Pagination getPages, this.pages = ", this.pages);
    };
    PaginationComponent.prototype.isValidPageNumber = function (page, totalPages) {
        console.log("Pagination isValidPageNumber, page = ", page, ", totalPages = ", totalPages);
        console.log("Pagination isValidPageNumber: ", page > 0 && page <= totalPages);
        return page > 0 && page <= totalPages;
    };
    PaginationComponent.prototype.getCurrentPage = function (offset, limit) {
        console.log("Pagination getCurrentPage = ", Math.floor(offset / limit) + 1);
        return Math.floor(offset / limit) + 1;
    };
    PaginationComponent.prototype.getTotalPages = function (limit, size) {
        console.log("Pagination getTotalPages = ", Math.ceil(Math.max(size, 1) / Math.max(limit, 1)));
        return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
    };
    PaginationComponent.prototype.selectPage = function (page, event) {
        console.log("Pagination selectPage, page = ", page, ", event = ", event);
        this.cancelEvent(event);
        if (this.isValidPageNumber(page, this.totalPages)) {
            this.pageChange.emit((page - 1) * this.limit);
        }
    };
    PaginationComponent.prototype.cancelEvent = function (event) {
        console.log("Pagination cancelEvent, event = ", event);
        event.preventDefault();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], PaginationComponent.prototype, "offset", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], PaginationComponent.prototype, "limit", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], PaginationComponent.prototype, "size", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], PaginationComponent.prototype, "range", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], PaginationComponent.prototype, "pageChange", void 0);
    PaginationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(913),
            styles: [__webpack_require__(900)]
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationComponent);
    return PaginationComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/client1/src/pagination.component.js.map

/***/ },

/***/ 731:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SearchListPaginationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchListPaginationComponent = (function () {
    function SearchListPaginationComponent() {
        this.total = 0;
        this.page = 1;
        this.goTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SearchListPaginationComponent.prototype.ngOnInit = function () {
    };
    SearchListPaginationComponent.prototype.totalPages = function () {
        return Math.ceil(this.total / 10);
    };
    SearchListPaginationComponent.prototype.pagesRange = function () {
        return this.range(1, this.totalPages() + 1);
    };
    SearchListPaginationComponent.prototype.prevPage = function () {
        return Math.max(1, this.page - 1);
    };
    SearchListPaginationComponent.prototype.nextPage = function () {
        return Math.min(this.totalPages(), this.page + 1);
    };
    SearchListPaginationComponent.prototype.pageClicked = function (page) {
        this.goTo.next(page);
    };
    SearchListPaginationComponent.prototype.range = function (start, stop, step) {
        if (step === void 0) { step = 1; }
        if (!stop) {
            start = 0;
            stop = start;
        }
        return Array.from(new Array(Number((stop - start) / step)), function (x, i) { return start + i * step; });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], SearchListPaginationComponent.prototype, "total", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], SearchListPaginationComponent.prototype, "page", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], SearchListPaginationComponent.prototype, "goTo", void 0);
    SearchListPaginationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search-list-pagination',
            template: __webpack_require__(914),
            styles: [__webpack_require__(901)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchListPaginationComponent);
    return SearchListPaginationComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/client1/src/search-list-pagination.component.js.map

/***/ },

/***/ 732:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/client1/src/environment.js.map

/***/ },

/***/ 733:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR19/apps/ourwebsite1_com-www/client1/src/polyfills.js.map

/***/ },

/***/ 892:
/***/ function(module, exports) {

module.exports = ".sebm-google-map-container {\n  height: 500px; }\n"

/***/ },

/***/ 893:
/***/ function(module, exports) {

module.exports = "md-sidenav-container.m2app-dark {\n  background: black; }\n\n/*\r\n * The /deep/ selector is simply to overcome view encapsulation\r\n * and be able to select the div.md-sidenav-content generated at runtime\r\n*/\nmd-sidenav-container /deep/ .md-sidenav-content {\n  overflow: hidden; }\n\n.app-content {\n  padding: 20px;\n  height: calc(100% - 64px);\n  overflow: auto; }\n\n.app-sidenav {\n  padding: 0px;\n  min-width: 100px; }\n\n.app-toolbar-filler {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.app-toolbar-menu {\n  padding: 0 14px 0 14px;\n  color: white; }\n\n.app-icon-button {\n  box-shadow: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  -webkit-filter: none;\n          filter: none;\n  font-weight: normal;\n  height: auto;\n  line-height: inherit;\n  margin: 0;\n  min-width: 0;\n  padding: 0;\n  text-align: left;\n  text-decoration: none; }\n\n.app-action {\n  display: inline-block;\n  position: fixed;\n  bottom: 20px;\n  right: 20px; }\n\n.mat-nav-list {\n  padding-top: 0px;\n  display: block; }\n"

/***/ },

/***/ 894:
/***/ function(module, exports) {

module.exports = "md-card {\n  margin: 20px; }\n\nmd-checkbox {\n  margin: 10px; }\n\n.app-action {\n  display: inline-block;\n  position: fixed;\n  bottom: 20px;\n  right: 20px; }\n\n.app-spinner {\n  height: 30px;\n  width: 30px;\n  display: inline-block; }\n\n.app-input-icon {\n  font-size: 16px; }\n\n.app-list {\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  width: 350px;\n  margin: 20px; }\n\n.app-progress {\n  margin: 20px; }\n"

/***/ },

/***/ 895:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 896:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 897:
/***/ function(module, exports) {

module.exports = ".display-4 {\n  font-size: 112px;\n  font-size: 11.2rem;\n  line-height: 128px;\n  line-height: 12.8rem;\n  letter-spacing: -0.1px;\n  letter-spacing: -0.01rem;\n  font-weight: 100;\n  color: #757575;\n  text-transform: inherit; }\n\n.display-3 {\n  font-size: 56px;\n  font-size: 5.6rem;\n  line-height: 84px;\n  line-height: 8.4rem;\n  letter-spacing: -0.05px;\n  letter-spacing: -0.005rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.display-2 {\n  font-size: 45px;\n  font-size: 4.5rem;\n  line-height: 48px;\n  line-height: 4.8rem;\n  letter-spacing: 0px;\n  letter-spacing: 0rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.display-1 {\n  font-size: 34px;\n  font-size: 3.4rem;\n  line-height: 40px;\n  line-height: 4rem;\n  letter-spacing: 0px;\n  letter-spacing: 0rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.headline {\n  font-size: 24px;\n  font-size: 2.4rem;\n  line-height: 32px;\n  line-height: 3.2rem;\n  letter-spacing: 0px;\n  letter-spacing: 0rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.title {\n  font-size: 20px;\n  font-size: 2rem;\n  line-height: 28px;\n  line-height: 2.8rem;\n  letter-spacing: 0.05px;\n  letter-spacing: 0.005rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.subhead-2 {\n  font-size: 15px;\n  font-size: 1.5rem;\n  line-height: 28px;\n  line-height: 2.8rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.subhead-1 {\n  font-size: 15px;\n  font-size: 1.5rem;\n  line-height: 24px;\n  line-height: 2.4rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.body-2 {\n  font-size: 13px;\n  font-size: 1.3rem;\n  line-height: 24px;\n  line-height: 2.4rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.body-1 {\n  font-size: 13px;\n  font-size: 1.3rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.caption {\n  font-size: 12px;\n  font-size: 1.2rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.2px;\n  letter-spacing: 0.02rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.label {\n  font-size: 12px;\n  font-size: 1.2rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.menu {\n  font-size: 13px;\n  font-size: 1.3rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.button {\n  font-size: 14px;\n  font-size: 1.4rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: uppercase; }\n\n@media only screen and (max-width: 960px) {\n  .subhead-2 {\n    font-size: 16px;\n    font-size: 1.6rem; }\n  .subhead-1 {\n    font-size: 16px;\n    font-size: 1.6rem; }\n  .body-2 {\n    font-size: 14px;\n    font-size: 1.4rem; }\n  .body-1 {\n    font-size: 14px;\n    font-size: 1.4rem; }\n  .menu {\n    font-size: 14px;\n    font-size: 1.4rem; } }\n\n.display-4,\n.display-3,\n.display-2,\n.display-1 {\n  margin: 0 0 14px 0;\n  margin-bottom: 1.4rem; }\n\n.headline,\n.title,\n.subhead-2,\n.subhead-1,\n.body-2,\n.body-1,\n.caption,\n.label,\n.menu,\n.button {\n  margin: 0 0 10px 0;\n  margin-bottom: 1rem; }\n"

/***/ },

/***/ 898:
/***/ function(module, exports) {

module.exports = "@import https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic&subset=latin,cyrillic;\n/* -- import Roboto Font ---------------------------- */\n/* -- You can use this tables in Bootstrap (v3) projects. -- */\n/* -- Box model ------------------------------- */\n*,\n*:after,\n*:before {\n  box-sizing: border-box; }\n\n/* -- Demo style ------------------------------- */\nhtml,\nbody {\n  position: relative;\n  min-height: 100%;\n  height: 100%; }\n\nhtml {\n  position: relative;\n  overflow-x: hidden;\n  margin: 16px;\n  padding: 0;\n  min-height: 100%;\n  font-size: 62.5%; }\n\nbody {\n  font-family: 'RobotoDraft', 'Roboto', 'Helvetica Neue, Helvetica, Arial', sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 1.4rem;\n  line-height: 2rem;\n  letter-spacing: 0.01rem;\n  color: #212121;\n  background-color: #f5f5f5;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility; }\n\n#demo {\n  margin: 20px auto;\n  max-width: 960px; }\n\n#demo h1 {\n  font-size: 2.4rem;\n  line-height: 3.2rem;\n  letter-spacing: 0;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit;\n  margin-bottom: 1rem;\n  text-align: center; }\n\n#demo h2 {\n  font-size: 1.5rem;\n  line-height: 2.8rem;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-align: center; }\n\n.shadow-z-1 {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24); }\n\n/* -- Material Design Table style -------------- */\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 2rem;\n  background-color: #ffffff; }\n\n.table > thead > tr,\n.table > tbody > tr,\n.table > tfoot > tr {\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  text-align: left;\n  padding: 1.6rem;\n  vertical-align: top;\n  border-top: 0;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.table > thead > tr > th {\n  font-weight: 400;\n  color: #757575;\n  vertical-align: bottom;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0; }\n\n.table > tbody + tbody {\n  border-top: 1px solid rgba(0, 0, 0, 0.12); }\n\n.table .table {\n  background-color: #ffffff; }\n\n.table .no-border {\n  border: 0; }\n\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 0.8rem; }\n\n.table-bordered {\n  border: 0; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 0;\n  border-bottom: 1px solid #e0e0e0; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px; }\n\n.table-striped > tbody > tr:nth-child(odd) > td,\n.table-striped > tbody > tr:nth-child(odd) > th {\n  background-color: #f5f5f5; }\n\n.table-hover > tbody > tr:hover > td,\n.table-hover > tbody > tr:hover > th {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n@media screen and (max-width: 768px) {\n  .table-responsive-vertical > .table {\n    margin-bottom: 0;\n    background-color: transparent; }\n  .table-responsive-vertical > .table > thead,\n  .table-responsive-vertical > .table > tfoot {\n    display: none; }\n  .table-responsive-vertical > .table > tbody {\n    display: block; }\n  .table-responsive-vertical > .table > tbody > tr {\n    display: block;\n    border: 1px solid #e0e0e0;\n    border-radius: 2px;\n    margin-bottom: 1.6rem; }\n  .table-responsive-vertical > .table > tbody > tr > td {\n    background-color: #ffffff;\n    display: block;\n    vertical-align: middle;\n    text-align: right; }\n  .table-responsive-vertical > .table > tbody > tr > td[data-title]:before {\n    content: attr(data-title);\n    float: left;\n    font-size: inherit;\n    font-weight: 400;\n    color: #757575; }\n  .table-responsive-vertical.shadow-z-1 {\n    box-shadow: none; }\n  .table-responsive-vertical.shadow-z-1 > .table > tbody > tr {\n    border: none;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24); }\n  .table-responsive-vertical > .table-bordered {\n    border: 0; }\n  .table-responsive-vertical > .table-bordered > tbody > tr > td {\n    border: 0;\n    border-bottom: 1px solid #e0e0e0; }\n  .table-responsive-vertical > .table-bordered > tbody > tr > td:last-child {\n    border-bottom: 0; }\n  .table-responsive-vertical > .table-striped > tbody > tr > td,\n  .table-responsive-vertical > .table-striped > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical > .table-striped > tbody > tr > td:nth-child(odd) {\n    background-color: #f5f5f5; }\n  .table-responsive-vertical > .table-hover > tbody > tr:hover > td,\n  .table-responsive-vertical > .table-hover > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical > .table-hover > tbody > tr > td:hover {\n    background-color: rgba(0, 0, 0, 0.12); } }\n\n.table-striped.table-mc-red > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-red > tbody > tr:nth-child(odd) > th {\n  background-color: #fde0dc; }\n\n.table-hover.table-mc-red > tbody > tr:hover > td,\n.table-hover.table-mc-red > tbody > tr:hover > th {\n  background-color: #f9bdbb; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-red > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-red > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-red > tbody > tr > td:nth-child(odd) {\n    background-color: #fde0dc; }\n  .table-responsive-vertical .table-hover.table-mc-red > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-red > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-red > tbody > tr > td:hover {\n    background-color: #f9bdbb; } }\n\n.table-striped.table-mc-pink > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-pink > tbody > tr:nth-child(odd) > th {\n  background-color: #fce4ec; }\n\n.table-hover.table-mc-pink > tbody > tr:hover > td,\n.table-hover.table-mc-pink > tbody > tr:hover > th {\n  background-color: #f8bbd0; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr > td:nth-child(odd) {\n    background-color: #fce4ec; }\n  .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr > td:hover {\n    background-color: #f8bbd0; } }\n\n.table-striped.table-mc-purple > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-purple > tbody > tr:nth-child(odd) > th {\n  background-color: #f3e5f5; }\n\n.table-hover.table-mc-purple > tbody > tr:hover > td,\n.table-hover.table-mc-purple > tbody > tr:hover > th {\n  background-color: #e1bee7; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr > td:nth-child(odd) {\n    background-color: #f3e5f5; }\n  .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr > td:hover {\n    background-color: #e1bee7; } }\n\n.table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) > th {\n  background-color: #ede7f6; }\n\n.table-hover.table-mc-deep-purple > tbody > tr:hover > td,\n.table-hover.table-mc-deep-purple > tbody > tr:hover > th {\n  background-color: #d1c4e9; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr > td:nth-child(odd) {\n    background-color: #ede7f6; }\n  .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr > td:hover {\n    background-color: #d1c4e9; } }\n\n.table-striped.table-mc-indigo > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-indigo > tbody > tr:nth-child(odd) > th {\n  background-color: #e8eaf6; }\n\n.table-hover.table-mc-indigo > tbody > tr:hover > td,\n.table-hover.table-mc-indigo > tbody > tr:hover > th {\n  background-color: #c5cae9; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr > td:nth-child(odd) {\n    background-color: #e8eaf6; }\n  .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr > td:hover {\n    background-color: #c5cae9; } }\n\n.table-striped.table-mc-blue > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-blue > tbody > tr:nth-child(odd) > th {\n  background-color: #e7e9fd; }\n\n.table-hover.table-mc-blue > tbody > tr:hover > td,\n.table-hover.table-mc-blue > tbody > tr:hover > th {\n  background-color: #d0d9ff; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr > td:nth-child(odd) {\n    background-color: #e7e9fd; }\n  .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr > td:hover {\n    background-color: #d0d9ff; } }\n\n.table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) > th {\n  background-color: #e1f5fe; }\n\n.table-hover.table-mc-light-blue > tbody > tr:hover > td,\n.table-hover.table-mc-light-blue > tbody > tr:hover > th {\n  background-color: #b3e5fc; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr > td:nth-child(odd) {\n    background-color: #e1f5fe; }\n  .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr > td:hover {\n    background-color: #b3e5fc; } }\n\n.table-striped.table-mc-cyan > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-cyan > tbody > tr:nth-child(odd) > th {\n  background-color: #e0f7fa; }\n\n.table-hover.table-mc-cyan > tbody > tr:hover > td,\n.table-hover.table-mc-cyan > tbody > tr:hover > th {\n  background-color: #b2ebf2; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr > td:nth-child(odd) {\n    background-color: #e0f7fa; }\n  .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr > td:hover {\n    background-color: #b2ebf2; } }\n\n.table-striped.table-mc-teal > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-teal > tbody > tr:nth-child(odd) > th {\n  background-color: #e0f2f1; }\n\n.table-hover.table-mc-teal > tbody > tr:hover > td,\n.table-hover.table-mc-teal > tbody > tr:hover > th {\n  background-color: #b2dfdb; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr > td:nth-child(odd) {\n    background-color: #e0f2f1; }\n  .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr > td:hover {\n    background-color: #b2dfdb; } }\n\n.table-striped.table-mc-green > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-green > tbody > tr:nth-child(odd) > th {\n  background-color: #d0f8ce; }\n\n.table-hover.table-mc-green > tbody > tr:hover > td,\n.table-hover.table-mc-green > tbody > tr:hover > th {\n  background-color: #a3e9a4; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-green > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-green > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-green > tbody > tr > td:nth-child(odd) {\n    background-color: #d0f8ce; }\n  .table-responsive-vertical .table-hover.table-mc-green > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-green > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-green > tbody > tr > td:hover {\n    background-color: #a3e9a4; } }\n\n.table-striped.table-mc-light-green > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-light-green > tbody > tr:nth-child(odd) > th {\n  background-color: #f1f8e9; }\n\n.table-hover.table-mc-light-green > tbody > tr:hover > td,\n.table-hover.table-mc-light-green > tbody > tr:hover > th {\n  background-color: #dcedc8; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr > td:nth-child(odd) {\n    background-color: #f1f8e9; }\n  .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr > td:hover {\n    background-color: #dcedc8; } }\n\n.table-striped.table-mc-lime > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-lime > tbody > tr:nth-child(odd) > th {\n  background-color: #f9fbe7; }\n\n.table-hover.table-mc-lime > tbody > tr:hover > td,\n.table-hover.table-mc-lime > tbody > tr:hover > th {\n  background-color: #f0f4c3; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr > td:nth-child(odd) {\n    background-color: #f9fbe7; }\n  .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr > td:hover {\n    background-color: #f0f4c3; } }\n\n.table-striped.table-mc-yellow > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-yellow > tbody > tr:nth-child(odd) > th {\n  background-color: #fffde7; }\n\n.table-hover.table-mc-yellow > tbody > tr:hover > td,\n.table-hover.table-mc-yellow > tbody > tr:hover > th {\n  background-color: #fff9c4; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr > td:nth-child(odd) {\n    background-color: #fffde7; }\n  .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr > td:hover {\n    background-color: #fff9c4; } }\n\n.table-striped.table-mc-amber > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-amber > tbody > tr:nth-child(odd) > th {\n  background-color: #fff8e1; }\n\n.table-hover.table-mc-amber > tbody > tr:hover > td,\n.table-hover.table-mc-amber > tbody > tr:hover > th {\n  background-color: #ffecb3; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr > td:nth-child(odd) {\n    background-color: #fff8e1; }\n  .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr > td:hover {\n    background-color: #ffecb3; } }\n\n.table-striped.table-mc-orange > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-orange > tbody > tr:nth-child(odd) > th {\n  background-color: #fff3e0; }\n\n.table-hover.table-mc-orange > tbody > tr:hover > td,\n.table-hover.table-mc-orange > tbody > tr:hover > th {\n  background-color: #ffe0b2; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr > td:nth-child(odd) {\n    background-color: #fff3e0; }\n  .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr > td:hover {\n    background-color: #ffe0b2; } }\n\n.table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) > th {\n  background-color: #fbe9e7; }\n\n.table-hover.table-mc-deep-orange > tbody > tr:hover > td,\n.table-hover.table-mc-deep-orange > tbody > tr:hover > th {\n  background-color: #ffccbc; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr > td:nth-child(odd) {\n    background-color: #fbe9e7; }\n  .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr > td:hover {\n    background-color: #ffccbc; } }\n\n/* -- Input styles ---------------------------------- */\n.form-group {\n  position: relative;\n  margin-top: 35px;\n  margin-bottom: 20px; }\n\n.input-group {\n  position: relative; }\n\n.form-control {\n  display: block;\n  height: 36px;\n  width: 100%;\n  border: none;\n  border-radius: 0 !important;\n  font-size: 16px;\n  font-weight: 300;\n  padding: 0;\n  background-color: transparent;\n  box-shadow: none;\n  border-bottom: 1px solid #757575; }\n\n.input-group .form-control {\n  position: relative;\n  z-index: inherit;\n  float: inherit;\n  width: 100%;\n  margin-bottom: 0; }\n\n.form-control:focus {\n  border-color: #757575;\n  outline: none;\n  box-shadow: none; }\n\n/* -- label styles ---------------------------------- */\nlabel {\n  position: absolute;\n  top: -18px;\n  color: #999;\n  font-size: 12px;\n  font-weight: 300;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n.form-horizontal .control-label {\n  position: relative;\n  top: 0;\n  margin-bottom: 0; }\n\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    font-size: 16px; } }\n\n.float-label {\n  left: 0;\n  top: 7px;\n  font-size: 16px;\n  pointer-events: none; }\n\n/* active state */\n.form-control:focus ~ .float-label,\n.form-control:valid ~ .float-label {\n  top: -18px;\n  font-size: 12px; }\n\n/* input colors ---- */\n.form-control:focus ~ label {\n  color: #03a9f4; }\n\n.form-control:focus ~ .form-bar:before,\n.form-control:focus ~ .form-bar:after {\n  background: #03a9f4; }\n\n/* help-block */\n.form-group .help-block {\n  position: absolute; }\n\n.help-block {\n  color: #bdbdbd;\n  font-size: 12px;\n  font-weight: 300; }\n\n/* input addon ---*/\n.input-group-addon {\n  border: none;\n  background: transparent; }\n\n/* ------  inline ----*/\n.input-group-addon,\n.form-inline .input-group {\n  display: table-cell; }\n\n.input-group-addon,\n.input-group-btn {\n  width: inherit; }\n\n.input-group {\n  width: 100%; }\n\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    margin-top: 16px; }\n  .input-group-btn,\n  .input-group .form-control,\n  .input-group-addon,\n  .form-inline .input-group {\n    display: inline-block; }\n  .input-group {\n    width: auto; } }\n\n/* -- bar styles -------------------------------------- */\n.form-bar {\n  position: relative;\n  display: block;\n  width: 100%; }\n\n.form-bar:before,\n.form-bar:after {\n  content: '';\n  height: 1px;\n  width: 0;\n  bottom: 0;\n  position: absolute;\n  transition: 0.3s ease all;\n  -moz-transition: 0.3s ease all;\n  -webkit-transition: 0.3s ease all; }\n\n.form-bar:before {\n  left: 50%; }\n\n.form-bar:after {\n  right: 50%; }\n\n/* active state */\n.form-control:focus ~ .form-bar:before,\n.form-control:focus ~ .form-bar:after {\n  width: 50%; }\n\n/* -- highlighter styles ------------------------------ */\n.form-highlight {\n  position: absolute;\n  height: 60%;\n  width: 60px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.4; }\n\n/* active state */\n.form-control:focus ~ .form-highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease; }\n\n/* -- highlighter animation --------------------------- */\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: #5264AE; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n@keyframes inputHighlighter {\n  from {\n    background: #5264AE; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n/*-- Checkbox --------------------------- */\n/* \r\n * Core styles required for the checkboxes.\r\n * @author Jason Mayes 2014, www.jasonmayes.com\r\n*/\n.form-group.checkbox {\n  margin-top: 20px; }\n\n.checkbox input[type='checkbox'] {\n  height: 0;\n  width: 0;\n  opacity: 0; }\n\n.checkbox label {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1;\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  top: 10px;\n  padding-left: 0; }\n\n.checkbox .chk-span {\n  top: 0;\n  border: 1px solid #5a5a5a;\n  color: #1d1d1d;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 14px;\n  margin: 0 14px 14px 1px;\n  outline-color: #eaeaea;\n  padding: 0;\n  position: relative;\n  width: 14px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  z-index: 1; }\n\n.checkbox .chk-span.checked {\n  top: -2px;\n  border-left: 2px solid #03a9f4;\n  border-bottom: 4px solid #03a9f4;\n  border-top: 1px solid transparent;\n  border-right: 1px solid transparent;\n  -webkit-transform: rotate(-45deg) scaleY(0.5);\n  transform: rotate(-45deg) scaleY(0.5); }\n\n.checkbox .chk-span.checked {\n  border-left-color: #03a9f4;\n  border-bottom-color: #03a9f4; }\n\n.checkbox input[type='checkbox']:focus ~ label {\n  color: #03a9f4; }\n\n.checkbox input[type='checkbox']:focus ~ label .chk-span {\n  border-color: #03a9f4; }\n\n.checkbox input[type='checkbox']:focus ~ label .chk-span.checked {\n  border-left-color: #03a9f4;\n  border-bottom-color: #03a9f4;\n  border-top: 1px solid transparent;\n  border-right: 1px solid transparent; }\n\n@media (min-width: 768px) {\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 5px; } }\n\n.form-control-static {\n  font-size: 16px; }\n\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: transparent;\n  border-bottom-style: dashed; }\n\n#focusedInput {\n  border-color: #ccc;\n  border-color: rgba(82, 168, 236, 0.8);\n  outline: 0;\n  box-shadow: none; }\n\n.display-4 {\n  font-size: 112px;\n  font-size: 11.2rem;\n  line-height: 128px;\n  line-height: 12.8rem;\n  letter-spacing: -0.1px;\n  letter-spacing: -0.01rem;\n  font-weight: 100;\n  color: #757575;\n  text-transform: inherit; }\n\n.display-3 {\n  font-size: 56px;\n  font-size: 5.6rem;\n  line-height: 84px;\n  line-height: 8.4rem;\n  letter-spacing: -0.05px;\n  letter-spacing: -0.005rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.display-2 {\n  font-size: 45px;\n  font-size: 4.5rem;\n  line-height: 48px;\n  line-height: 4.8rem;\n  letter-spacing: 0px;\n  letter-spacing: 0rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.display-1 {\n  font-size: 34px;\n  font-size: 3.4rem;\n  line-height: 40px;\n  line-height: 4rem;\n  letter-spacing: 0px;\n  letter-spacing: 0rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.headline {\n  font-size: 24px;\n  font-size: 2.4rem;\n  line-height: 32px;\n  line-height: 3.2rem;\n  letter-spacing: 0px;\n  letter-spacing: 0rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.title {\n  font-size: 20px;\n  font-size: 2rem;\n  line-height: 28px;\n  line-height: 2.8rem;\n  letter-spacing: 0.05px;\n  letter-spacing: 0.005rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.subhead-2 {\n  font-size: 15px;\n  font-size: 1.5rem;\n  line-height: 28px;\n  line-height: 2.8rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.subhead-1 {\n  font-size: 15px;\n  font-size: 1.5rem;\n  line-height: 24px;\n  line-height: 2.4rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.body-2 {\n  font-size: 13px;\n  font-size: 1.3rem;\n  line-height: 24px;\n  line-height: 2.4rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.body-1 {\n  font-size: 13px;\n  font-size: 1.3rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.caption {\n  font-size: 12px;\n  font-size: 1.2rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.2px;\n  letter-spacing: 0.02rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.label {\n  font-size: 12px;\n  font-size: 1.2rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.menu {\n  font-size: 13px;\n  font-size: 1.3rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.button {\n  font-size: 14px;\n  font-size: 1.4rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: uppercase; }\n\n@media only screen and (max-width: 960px) {\n  .subhead-2 {\n    font-size: 16px;\n    font-size: 1.6rem; }\n  .subhead-1 {\n    font-size: 16px;\n    font-size: 1.6rem; }\n  .body-2 {\n    font-size: 14px;\n    font-size: 1.4rem; }\n  .body-1 {\n    font-size: 14px;\n    font-size: 1.4rem; }\n  .menu {\n    font-size: 14px;\n    font-size: 1.4rem; } }\n\n.display-4,\n.display-3,\n.display-2,\n.display-1 {\n  margin: 0 0 14px 0;\n  margin-bottom: 1.4rem; }\n\n.headline,\n.title,\n.subhead-2,\n.subhead-1,\n.body-2,\n.body-1,\n.caption,\n.label,\n.menu,\n.button {\n  margin: 0 0 10px 0;\n  margin-bottom: 1rem; }\n\n/* -- Buttons -------------------------------- */\n.btn {\n  font-family: \"Roboto\", 'Helvetica Neue, Helvetica, Arial', sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.1;\n  text-transform: uppercase;\n  letter-spacing: inherit;\n  color: rgba(255, 255, 255, 0.87); }\n\n.btn-default,\n.btn-link {\n  color: rgba(0, 0, 0, 0.87); }\n\n/* -- Buttons style ------------------------------------ */\n.btn {\n  outline: 0;\n  outline-offset: 0;\n  border: 0;\n  border-radius: 2px;\n  transition: all 0.15s ease-in-out;\n  -o-transition: all 0.15s ease-in-out;\n  -moz-transition: all 0.15s ease-in-out;\n  -webkit-transition: all 0.15s ease-in-out; }\n\n.btn:focus,\n.btn:active,\n.btn.active,\n.btn:active:focus,\n.btn.active:focus {\n  outline: 0;\n  outline-offset: 0;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none; }\n\n/* -- Buttons types -------------------------------- */\n.btn-raised {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24); }\n\n.btn-raised:active,\n.btn-raised.active,\n.btn-raised:active:focus,\n.btn-raised.active:focus {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.btn-raised:focus {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.btn.btn-circle {\n  padding: 0;\n  border-radius: 50%; }\n\n/* -- Buttons colors -------------------------------- */\n.btn-default,\n.dropdown-toggle.btn-default {\n  background-color: #ffffff; }\n\n.btn-default:hover,\n.dropdown-toggle.btn-default:hover {\n  background-color: #e5e5e5; }\n\n.btn-default:active,\n.dropdown-toggle.btn-default:active,\n.btn-default.active,\n.dropdown-toggle.btn-default.active {\n  background-color: #e5e5e5; }\n\n.btn-default:focus,\n.dropdown-toggle.btn-default:focus {\n  background-color: #cccccc; }\n\n.btn-default:disabled,\n.dropdown-toggle.btn-default:disabled,\n.btn-default.disabled,\n.dropdown-toggle.btn-default.disabled,\n.btn-default[disabled],\n.dropdown-toggle.btn-default[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-default .ink,\n.dropdown-toggle.btn-default .ink {\n  background-color: #b8b8b8; }\n\n.btn-flat.btn-default {\n  color: #212121;\n  background-color: transparent; }\n\n.btn-flat.btn-default:hover {\n  color: #141414;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-default:active,\n.btn-flat.btn-default.active {\n  color: #020202;\n  background-color: #cccccc; }\n\n.btn-flat.btn-default:focus {\n  color: #000000;\n  background-color: #cccccc; }\n\n.btn-flat.btn-default .ink {\n  background-color: #808080; }\n\n.btn-primary,\n.dropdown-toggle.btn-primary {\n  background-color: #5677fc; }\n\n.btn-primary:hover,\n.dropdown-toggle.btn-primary:hover {\n  background-color: #4e6cef; }\n\n.btn-primary:active,\n.dropdown-toggle.btn-primary:active,\n.btn-primary.active,\n.dropdown-toggle.btn-primary.active {\n  background-color: #4e6cef; }\n\n.btn-primary:focus,\n.dropdown-toggle.btn-primary:focus {\n  background-color: #455ede; }\n\n.btn-primary:disabled,\n.dropdown-toggle.btn-primary:disabled,\n.btn-primary.disabled,\n.dropdown-toggle.btn-primary.disabled,\n.btn-primary[disabled],\n.dropdown-toggle.btn-primary[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-primary .ink,\n.dropdown-toggle.btn-primary .ink {\n  background-color: #3b50ce; }\n\n.btn-flat.btn-primary {\n  color: #5677fc;\n  background-color: transparent; }\n\n.btn-flat.btn-primary:hover {\n  color: #4e6cef;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-primary:active,\n.btn-flat.btn-primary.active {\n  color: #455ede;\n  background-color: #cccccc; }\n\n.btn-flat.btn-primary:focus {\n  color: #3b50ce;\n  background-color: #cccccc; }\n\n.btn-flat.btn-primary .ink {\n  background-color: #808080; }\n\n.btn-success,\n.dropdown-toggle.btn-success {\n  background-color: #259b24; }\n\n.btn-success:hover,\n.dropdown-toggle.btn-success:hover {\n  background-color: #0a8f08; }\n\n.btn-success:active,\n.dropdown-toggle.btn-success:active,\n.btn-success.active,\n.dropdown-toggle.btn-success.active {\n  background-color: #0a8f08; }\n\n.btn-success:focus,\n.dropdown-toggle.btn-success:focus {\n  background-color: #0a7e07; }\n\n.btn-success:disabled,\n.dropdown-toggle.btn-success:disabled,\n.btn-success.disabled,\n.dropdown-toggle.btn-success.disabled,\n.btn-success[disabled],\n.dropdown-toggle.btn-success[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-success .ink,\n.dropdown-toggle.btn-success .ink {\n  background-color: #056f00; }\n\n.btn-flat.btn-success {\n  color: #259b24;\n  background-color: transparent; }\n\n.btn-flat.btn-success:hover {\n  color: #0a8f08;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-success:active,\n.btn-flat.btn-success.active {\n  color: #0a7e07;\n  background-color: #cccccc; }\n\n.btn-flat.btn-success:focus {\n  color: #056f00;\n  background-color: #cccccc; }\n\n.btn-flat.btn-success .ink {\n  background-color: #808080; }\n\n.btn-info,\n.dropdown-toggle.btn-info {\n  background-color: #03a9f4; }\n\n.btn-info:hover,\n.dropdown-toggle.btn-info:hover {\n  background-color: #039be5; }\n\n.btn-info:active,\n.dropdown-toggle.btn-info:active,\n.btn-info.active,\n.dropdown-toggle.btn-info.active {\n  background-color: #039be5; }\n\n.btn-info:focus,\n.dropdown-toggle.btn-info:focus {\n  background-color: #0288d1; }\n\n.btn-info:disabled,\n.dropdown-toggle.btn-info:disabled,\n.btn-info.disabled,\n.dropdown-toggle.btn-info.disabled,\n.btn-info[disabled],\n.dropdown-toggle.btn-info[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-info .ink,\n.dropdown-toggle.btn-info .ink {\n  background-color: #0277bd; }\n\n.btn-flat.btn-info {\n  color: #03a9f4;\n  background-color: transparent; }\n\n.btn-flat.btn-info:hover {\n  color: #039be5;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-info:active,\n.btn-flat.btn-info.active {\n  color: #0288d1;\n  background-color: #cccccc; }\n\n.btn-flat.btn-info:focus {\n  color: #0277bd;\n  background-color: #cccccc; }\n\n.btn-flat.btn-info .ink {\n  background-color: #808080; }\n\n.btn-warning,\n.dropdown-toggle.btn-warning {\n  background-color: #ffc107; }\n\n.btn-warning:hover,\n.dropdown-toggle.btn-warning:hover {\n  background-color: #ffb300; }\n\n.btn-warning:active,\n.dropdown-toggle.btn-warning:active,\n.btn-warning.active,\n.dropdown-toggle.btn-warning.active {\n  background-color: #ffb300; }\n\n.btn-warning:focus,\n.dropdown-toggle.btn-warning:focus {\n  background-color: #ffa000; }\n\n.btn-warning:disabled,\n.dropdown-toggle.btn-warning:disabled,\n.btn-warning.disabled,\n.dropdown-toggle.btn-warning.disabled,\n.btn-warning[disabled],\n.dropdown-toggle.btn-warning[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-warning .ink,\n.dropdown-toggle.btn-warning .ink {\n  background-color: #ff8f00; }\n\n.btn-flat.btn-warning {\n  color: #ffc107;\n  background-color: transparent; }\n\n.btn-flat.btn-warning:hover {\n  color: #ffb300;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-warning:active,\n.btn-flat.btn-warning.active {\n  color: #ffa000;\n  background-color: #cccccc; }\n\n.btn-flat.btn-warning:focus {\n  color: #ff8f00;\n  background-color: #cccccc; }\n\n.btn-flat.btn-warning .ink {\n  background-color: #808080; }\n\n.btn-danger,\n.dropdown-toggle.btn-danger {\n  background-color: #ff5722; }\n\n.btn-danger:hover,\n.dropdown-toggle.btn-danger:hover {\n  background-color: #f4511e; }\n\n.btn-danger:active,\n.dropdown-toggle.btn-danger:active,\n.btn-danger.active,\n.dropdown-toggle.btn-danger.active {\n  background-color: #f4511e; }\n\n.btn-danger:focus,\n.dropdown-toggle.btn-danger:focus {\n  background-color: #e64a19; }\n\n.btn-danger:disabled,\n.dropdown-toggle.btn-danger:disabled,\n.btn-danger.disabled,\n.dropdown-toggle.btn-danger.disabled,\n.btn-danger[disabled],\n.dropdown-toggle.btn-danger[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-danger .ink,\n.dropdown-toggle.btn-danger .ink {\n  background-color: #d84315; }\n\n.btn-flat.btn-danger {\n  color: #ff5722;\n  background-color: transparent; }\n\n.btn-flat.btn-danger:hover {\n  color: #f4511e;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-danger:active,\n.btn-flat.btn-danger.active {\n  color: #e64a19;\n  background-color: #cccccc; }\n\n.btn-flat.btn-danger:focus {\n  color: #d84315;\n  background-color: #cccccc; }\n\n.btn-flat.btn-danger .ink {\n  background-color: #808080; }\n\n/* -- Buttons sizes -------------------------------- */\n.btn {\n  min-width: 88px;\n  padding: 10px 14px; }\n\n.btn-lg,\n.btn-group-lg > .btn {\n  min-width: 122px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3; }\n\n.btn-sm,\n.btn-group-sm > .btn {\n  min-width: 64px;\n  padding: 4px 12px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.btn-xs,\n.btn-group-xs > .btn {\n  min-width: 46px;\n  padding: 2px 10px;\n  font-size: 10px;\n  line-height: 1.5; }\n\n.btn-circle {\n  width: 56px;\n  height: 56px;\n  min-width: 56px; }\n\n.btn-circle span {\n  line-height: 56px; }\n\n.btn-circle.btn-lg {\n  width: 78px;\n  height: 78px;\n  min-width: 78px; }\n\n.btn-circle.btn-lg span {\n  line-height: 78px; }\n\n.btn-circle.btn-sm {\n  width: 40px;\n  height: 40px;\n  min-width: 40px; }\n\n.btn-circle.btn-sm span {\n  line-height: 40px; }\n\n.btn-circle.btn-xs {\n  width: 30px;\n  height: 30px;\n  min-width: 30px; }\n\n.btn-circle.btn-xs span {\n  line-height: 30px; }\n\n/*-- Button groups --------------------------------- */\n.btn-group .btn {\n  border-radius: 2px; }\n\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n  outline-offset: 0;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none; }\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: 0; }\n\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover {\n  z-index: 0; }\n\n.btn-group > .btn:focus:hover,\n.btn-group-vertical > .btn:focus:hover,\n.btn-group > .btn:active:hover,\n.btn-group-vertical > .btn:active:hover,\n.btn-group > .btn.active:hover,\n.btn-group-vertical > .btn.active:hover {\n  z-index: 2; }\n\n/* -- Ripple effect -------------------------------- */\n.ripple-effect {\n  position: relative;\n  overflow: hidden;\n  -webkit-transform: translate3d(0, 0, 0); }\n\n.ink {\n  display: block;\n  position: absolute;\n  pointer-events: none;\n  border-radius: 50%;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  background: #fff;\n  opacity: 1; }\n\n.ink.animate {\n  -webkit-animation: ripple .5s linear;\n  animation: ripple .5s linear; }\n\n@keyframes ripple {\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(2.5);\n            transform: scale(2.5); } }\n\n@-webkit-keyframes ripple {\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(2.5);\n    transform: scale(2.5); } }\n"

/***/ },

/***/ 899:
/***/ function(module, exports) {

module.exports = "@import https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic&subset=latin,cyrillic;\n/* -- import Roboto Font ---------------------------- */\n/* -- You can use this tables in Bootstrap (v3) projects. -- */\n/* -- Box model ------------------------------- */\n*,\n*:after,\n*:before {\n  box-sizing: border-box; }\n\n/* -- Demo style ------------------------------- */\nhtml,\nbody {\n  position: relative;\n  min-height: 100%;\n  height: 100%; }\n\nhtml {\n  position: relative;\n  overflow-x: hidden;\n  margin: 16px;\n  padding: 0;\n  min-height: 100%;\n  font-size: 62.5%; }\n\nbody {\n  font-family: 'RobotoDraft', 'Roboto', 'Helvetica Neue, Helvetica, Arial', sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 1.4rem;\n  line-height: 2rem;\n  letter-spacing: 0.01rem;\n  color: #212121;\n  background-color: #f5f5f5;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility; }\n\n#demo {\n  margin: 20px auto;\n  max-width: 960px; }\n\n#demo h1 {\n  font-size: 2.4rem;\n  line-height: 3.2rem;\n  letter-spacing: 0;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit;\n  margin-bottom: 1rem;\n  text-align: center; }\n\n#demo h2 {\n  font-size: 1.5rem;\n  line-height: 2.8rem;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-align: center; }\n\n.shadow-z-1 {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24); }\n\n/* -- Material Design Table style -------------- */\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 2rem;\n  background-color: #ffffff; }\n\n.table > thead > tr,\n.table > tbody > tr,\n.table > tfoot > tr {\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  text-align: left;\n  padding: 1.6rem;\n  vertical-align: top;\n  border-top: 0;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.table > thead > tr > th {\n  font-weight: 400;\n  color: #757575;\n  vertical-align: bottom;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0; }\n\n.table > tbody + tbody {\n  border-top: 1px solid rgba(0, 0, 0, 0.12); }\n\n.table .table {\n  background-color: #ffffff; }\n\n.table .no-border {\n  border: 0; }\n\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 0.8rem; }\n\n.table-bordered {\n  border: 0; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 0;\n  border-bottom: 1px solid #e0e0e0; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px; }\n\n.table-striped > tbody > tr:nth-child(odd) > td,\n.table-striped > tbody > tr:nth-child(odd) > th {\n  background-color: #f5f5f5; }\n\n.table-hover > tbody > tr:hover > td,\n.table-hover > tbody > tr:hover > th {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n@media screen and (max-width: 768px) {\n  .table-responsive-vertical > .table {\n    margin-bottom: 0;\n    background-color: transparent; }\n  .table-responsive-vertical > .table > thead,\n  .table-responsive-vertical > .table > tfoot {\n    display: none; }\n  .table-responsive-vertical > .table > tbody {\n    display: block; }\n  .table-responsive-vertical > .table > tbody > tr {\n    display: block;\n    border: 1px solid #e0e0e0;\n    border-radius: 2px;\n    margin-bottom: 1.6rem; }\n  .table-responsive-vertical > .table > tbody > tr > td {\n    background-color: #ffffff;\n    display: block;\n    vertical-align: middle;\n    text-align: right; }\n  .table-responsive-vertical > .table > tbody > tr > td[data-title]:before {\n    content: attr(data-title);\n    float: left;\n    font-size: inherit;\n    font-weight: 400;\n    color: #757575; }\n  .table-responsive-vertical.shadow-z-1 {\n    box-shadow: none; }\n  .table-responsive-vertical.shadow-z-1 > .table > tbody > tr {\n    border: none;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24); }\n  .table-responsive-vertical > .table-bordered {\n    border: 0; }\n  .table-responsive-vertical > .table-bordered > tbody > tr > td {\n    border: 0;\n    border-bottom: 1px solid #e0e0e0; }\n  .table-responsive-vertical > .table-bordered > tbody > tr > td:last-child {\n    border-bottom: 0; }\n  .table-responsive-vertical > .table-striped > tbody > tr > td,\n  .table-responsive-vertical > .table-striped > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical > .table-striped > tbody > tr > td:nth-child(odd) {\n    background-color: #f5f5f5; }\n  .table-responsive-vertical > .table-hover > tbody > tr:hover > td,\n  .table-responsive-vertical > .table-hover > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical > .table-hover > tbody > tr > td:hover {\n    background-color: rgba(0, 0, 0, 0.12); } }\n\n.table-striped.table-mc-red > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-red > tbody > tr:nth-child(odd) > th {\n  background-color: #fde0dc; }\n\n.table-hover.table-mc-red > tbody > tr:hover > td,\n.table-hover.table-mc-red > tbody > tr:hover > th {\n  background-color: #f9bdbb; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-red > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-red > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-red > tbody > tr > td:nth-child(odd) {\n    background-color: #fde0dc; }\n  .table-responsive-vertical .table-hover.table-mc-red > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-red > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-red > tbody > tr > td:hover {\n    background-color: #f9bdbb; } }\n\n.table-striped.table-mc-pink > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-pink > tbody > tr:nth-child(odd) > th {\n  background-color: #fce4ec; }\n\n.table-hover.table-mc-pink > tbody > tr:hover > td,\n.table-hover.table-mc-pink > tbody > tr:hover > th {\n  background-color: #f8bbd0; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr > td:nth-child(odd) {\n    background-color: #fce4ec; }\n  .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr > td:hover {\n    background-color: #f8bbd0; } }\n\n.table-striped.table-mc-purple > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-purple > tbody > tr:nth-child(odd) > th {\n  background-color: #f3e5f5; }\n\n.table-hover.table-mc-purple > tbody > tr:hover > td,\n.table-hover.table-mc-purple > tbody > tr:hover > th {\n  background-color: #e1bee7; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr > td:nth-child(odd) {\n    background-color: #f3e5f5; }\n  .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr > td:hover {\n    background-color: #e1bee7; } }\n\n.table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) > th {\n  background-color: #ede7f6; }\n\n.table-hover.table-mc-deep-purple > tbody > tr:hover > td,\n.table-hover.table-mc-deep-purple > tbody > tr:hover > th {\n  background-color: #d1c4e9; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr > td:nth-child(odd) {\n    background-color: #ede7f6; }\n  .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr > td:hover {\n    background-color: #d1c4e9; } }\n\n.table-striped.table-mc-indigo > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-indigo > tbody > tr:nth-child(odd) > th {\n  background-color: #e8eaf6; }\n\n.table-hover.table-mc-indigo > tbody > tr:hover > td,\n.table-hover.table-mc-indigo > tbody > tr:hover > th {\n  background-color: #c5cae9; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr > td:nth-child(odd) {\n    background-color: #e8eaf6; }\n  .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr > td:hover {\n    background-color: #c5cae9; } }\n\n.table-striped.table-mc-blue > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-blue > tbody > tr:nth-child(odd) > th {\n  background-color: #e7e9fd; }\n\n.table-hover.table-mc-blue > tbody > tr:hover > td,\n.table-hover.table-mc-blue > tbody > tr:hover > th {\n  background-color: #d0d9ff; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr > td:nth-child(odd) {\n    background-color: #e7e9fd; }\n  .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr > td:hover {\n    background-color: #d0d9ff; } }\n\n.table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) > th {\n  background-color: #e1f5fe; }\n\n.table-hover.table-mc-light-blue > tbody > tr:hover > td,\n.table-hover.table-mc-light-blue > tbody > tr:hover > th {\n  background-color: #b3e5fc; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr > td:nth-child(odd) {\n    background-color: #e1f5fe; }\n  .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr > td:hover {\n    background-color: #b3e5fc; } }\n\n.table-striped.table-mc-cyan > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-cyan > tbody > tr:nth-child(odd) > th {\n  background-color: #e0f7fa; }\n\n.table-hover.table-mc-cyan > tbody > tr:hover > td,\n.table-hover.table-mc-cyan > tbody > tr:hover > th {\n  background-color: #b2ebf2; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr > td:nth-child(odd) {\n    background-color: #e0f7fa; }\n  .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr > td:hover {\n    background-color: #b2ebf2; } }\n\n.table-striped.table-mc-teal > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-teal > tbody > tr:nth-child(odd) > th {\n  background-color: #e0f2f1; }\n\n.table-hover.table-mc-teal > tbody > tr:hover > td,\n.table-hover.table-mc-teal > tbody > tr:hover > th {\n  background-color: #b2dfdb; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr > td:nth-child(odd) {\n    background-color: #e0f2f1; }\n  .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr > td:hover {\n    background-color: #b2dfdb; } }\n\n.table-striped.table-mc-green > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-green > tbody > tr:nth-child(odd) > th {\n  background-color: #d0f8ce; }\n\n.table-hover.table-mc-green > tbody > tr:hover > td,\n.table-hover.table-mc-green > tbody > tr:hover > th {\n  background-color: #a3e9a4; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-green > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-green > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-green > tbody > tr > td:nth-child(odd) {\n    background-color: #d0f8ce; }\n  .table-responsive-vertical .table-hover.table-mc-green > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-green > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-green > tbody > tr > td:hover {\n    background-color: #a3e9a4; } }\n\n.table-striped.table-mc-light-green > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-light-green > tbody > tr:nth-child(odd) > th {\n  background-color: #f1f8e9; }\n\n.table-hover.table-mc-light-green > tbody > tr:hover > td,\n.table-hover.table-mc-light-green > tbody > tr:hover > th {\n  background-color: #dcedc8; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr > td:nth-child(odd) {\n    background-color: #f1f8e9; }\n  .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr > td:hover {\n    background-color: #dcedc8; } }\n\n.table-striped.table-mc-lime > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-lime > tbody > tr:nth-child(odd) > th {\n  background-color: #f9fbe7; }\n\n.table-hover.table-mc-lime > tbody > tr:hover > td,\n.table-hover.table-mc-lime > tbody > tr:hover > th {\n  background-color: #f0f4c3; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr > td:nth-child(odd) {\n    background-color: #f9fbe7; }\n  .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr > td:hover {\n    background-color: #f0f4c3; } }\n\n.table-striped.table-mc-yellow > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-yellow > tbody > tr:nth-child(odd) > th {\n  background-color: #fffde7; }\n\n.table-hover.table-mc-yellow > tbody > tr:hover > td,\n.table-hover.table-mc-yellow > tbody > tr:hover > th {\n  background-color: #fff9c4; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr > td:nth-child(odd) {\n    background-color: #fffde7; }\n  .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr > td:hover {\n    background-color: #fff9c4; } }\n\n.table-striped.table-mc-amber > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-amber > tbody > tr:nth-child(odd) > th {\n  background-color: #fff8e1; }\n\n.table-hover.table-mc-amber > tbody > tr:hover > td,\n.table-hover.table-mc-amber > tbody > tr:hover > th {\n  background-color: #ffecb3; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr > td:nth-child(odd) {\n    background-color: #fff8e1; }\n  .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr > td:hover {\n    background-color: #ffecb3; } }\n\n.table-striped.table-mc-orange > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-orange > tbody > tr:nth-child(odd) > th {\n  background-color: #fff3e0; }\n\n.table-hover.table-mc-orange > tbody > tr:hover > td,\n.table-hover.table-mc-orange > tbody > tr:hover > th {\n  background-color: #ffe0b2; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr > td:nth-child(odd) {\n    background-color: #fff3e0; }\n  .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr > td:hover {\n    background-color: #ffe0b2; } }\n\n.table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) > td,\n.table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) > th {\n  background-color: #fbe9e7; }\n\n.table-hover.table-mc-deep-orange > tbody > tr:hover > td,\n.table-hover.table-mc-deep-orange > tbody > tr:hover > th {\n  background-color: #ffccbc; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr > td,\n  .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr > td:nth-child(odd) {\n    background-color: #fbe9e7; }\n  .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr:hover > td,\n  .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr:hover {\n    background-color: #ffffff; }\n  .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr > td:hover {\n    background-color: #ffccbc; } }\n\n/* -- Input styles ---------------------------------- */\n.form-group {\n  position: relative;\n  margin-top: 35px;\n  margin-bottom: 20px; }\n\n.input-group {\n  position: relative; }\n\n.form-control {\n  display: block;\n  height: 36px;\n  width: 100%;\n  border: none;\n  border-radius: 0 !important;\n  font-size: 16px;\n  font-weight: 300;\n  padding: 0;\n  background-color: transparent;\n  box-shadow: none;\n  border-bottom: 1px solid #757575; }\n\n.input-group .form-control {\n  position: relative;\n  z-index: inherit;\n  float: inherit;\n  width: 100%;\n  margin-bottom: 0; }\n\n.form-control:focus {\n  border-color: #757575;\n  outline: none;\n  box-shadow: none; }\n\n/* -- label styles ---------------------------------- */\nlabel {\n  position: absolute;\n  top: -18px;\n  color: #999;\n  font-size: 12px;\n  font-weight: 300;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n.form-horizontal .control-label {\n  position: relative;\n  top: 0;\n  margin-bottom: 0; }\n\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    font-size: 16px; } }\n\n.float-label {\n  left: 0;\n  top: 7px;\n  font-size: 16px;\n  pointer-events: none; }\n\n/* active state */\n.form-control:focus ~ .float-label,\n.form-control:valid ~ .float-label {\n  top: -18px;\n  font-size: 12px; }\n\n/* input colors ---- */\n.form-control:focus ~ label {\n  color: #03a9f4; }\n\n.form-control:focus ~ .form-bar:before,\n.form-control:focus ~ .form-bar:after {\n  background: #03a9f4; }\n\n/* help-block */\n.form-group .help-block {\n  position: absolute; }\n\n.help-block {\n  color: #bdbdbd;\n  font-size: 12px;\n  font-weight: 300; }\n\n/* input addon ---*/\n.input-group-addon {\n  border: none;\n  background: transparent; }\n\n/* ------  inline ----*/\n.input-group-addon,\n.form-inline .input-group {\n  display: table-cell; }\n\n.input-group-addon,\n.input-group-btn {\n  width: inherit; }\n\n.input-group {\n  width: 100%; }\n\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    margin-top: 16px; }\n  .input-group-btn,\n  .input-group .form-control,\n  .input-group-addon,\n  .form-inline .input-group {\n    display: inline-block; }\n  .input-group {\n    width: auto; } }\n\n/* -- bar styles -------------------------------------- */\n.form-bar {\n  position: relative;\n  display: block;\n  width: 100%; }\n\n.form-bar:before,\n.form-bar:after {\n  content: '';\n  height: 1px;\n  width: 0;\n  bottom: 0;\n  position: absolute;\n  transition: 0.3s ease all;\n  -moz-transition: 0.3s ease all;\n  -webkit-transition: 0.3s ease all; }\n\n.form-bar:before {\n  left: 50%; }\n\n.form-bar:after {\n  right: 50%; }\n\n/* active state */\n.form-control:focus ~ .form-bar:before,\n.form-control:focus ~ .form-bar:after {\n  width: 50%; }\n\n/* -- highlighter styles ------------------------------ */\n.form-highlight {\n  position: absolute;\n  height: 60%;\n  width: 60px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.4; }\n\n/* active state */\n.form-control:focus ~ .form-highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease; }\n\n/* -- highlighter animation --------------------------- */\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: #5264AE; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n@keyframes inputHighlighter {\n  from {\n    background: #5264AE; }\n  to {\n    width: 0;\n    background: transparent; } }\n\n/*-- Checkbox --------------------------- */\n/* \r\n * Core styles required for the checkboxes.\r\n * @author Jason Mayes 2014, www.jasonmayes.com\r\n*/\n.form-group.checkbox {\n  margin-top: 20px; }\n\n.checkbox input[type='checkbox'] {\n  height: 0;\n  width: 0;\n  opacity: 0; }\n\n.checkbox label {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1;\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  top: 10px;\n  padding-left: 0; }\n\n.checkbox .chk-span {\n  top: 0;\n  border: 1px solid #5a5a5a;\n  color: #1d1d1d;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 14px;\n  margin: 0 14px 14px 1px;\n  outline-color: #eaeaea;\n  padding: 0;\n  position: relative;\n  width: 14px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  z-index: 1; }\n\n.checkbox .chk-span.checked {\n  top: -2px;\n  border-left: 2px solid #03a9f4;\n  border-bottom: 4px solid #03a9f4;\n  border-top: 1px solid transparent;\n  border-right: 1px solid transparent;\n  -webkit-transform: rotate(-45deg) scaleY(0.5);\n  transform: rotate(-45deg) scaleY(0.5); }\n\n.checkbox .chk-span.checked {\n  border-left-color: #03a9f4;\n  border-bottom-color: #03a9f4; }\n\n.checkbox input[type='checkbox']:focus ~ label {\n  color: #03a9f4; }\n\n.checkbox input[type='checkbox']:focus ~ label .chk-span {\n  border-color: #03a9f4; }\n\n.checkbox input[type='checkbox']:focus ~ label .chk-span.checked {\n  border-left-color: #03a9f4;\n  border-bottom-color: #03a9f4;\n  border-top: 1px solid transparent;\n  border-right: 1px solid transparent; }\n\n@media (min-width: 768px) {\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 5px; } }\n\n.form-control-static {\n  font-size: 16px; }\n\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: transparent;\n  border-bottom-style: dashed; }\n\n#focusedInput {\n  border-color: #ccc;\n  border-color: rgba(82, 168, 236, 0.8);\n  outline: 0;\n  box-shadow: none; }\n\n.display-4 {\n  font-size: 112px;\n  font-size: 11.2rem;\n  line-height: 128px;\n  line-height: 12.8rem;\n  letter-spacing: -0.1px;\n  letter-spacing: -0.01rem;\n  font-weight: 100;\n  color: #757575;\n  text-transform: inherit; }\n\n.display-3 {\n  font-size: 56px;\n  font-size: 5.6rem;\n  line-height: 84px;\n  line-height: 8.4rem;\n  letter-spacing: -0.05px;\n  letter-spacing: -0.005rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.display-2 {\n  font-size: 45px;\n  font-size: 4.5rem;\n  line-height: 48px;\n  line-height: 4.8rem;\n  letter-spacing: 0px;\n  letter-spacing: 0rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.display-1 {\n  font-size: 34px;\n  font-size: 3.4rem;\n  line-height: 40px;\n  line-height: 4rem;\n  letter-spacing: 0px;\n  letter-spacing: 0rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.headline {\n  font-size: 24px;\n  font-size: 2.4rem;\n  line-height: 32px;\n  line-height: 3.2rem;\n  letter-spacing: 0px;\n  letter-spacing: 0rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.title {\n  font-size: 20px;\n  font-size: 2rem;\n  line-height: 28px;\n  line-height: 2.8rem;\n  letter-spacing: 0.05px;\n  letter-spacing: 0.005rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.subhead-2 {\n  font-size: 15px;\n  font-size: 1.5rem;\n  line-height: 28px;\n  line-height: 2.8rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.subhead-1 {\n  font-size: 15px;\n  font-size: 1.5rem;\n  line-height: 24px;\n  line-height: 2.4rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.body-2 {\n  font-size: 13px;\n  font-size: 1.3rem;\n  line-height: 24px;\n  line-height: 2.4rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.body-1 {\n  font-size: 13px;\n  font-size: 1.3rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.caption {\n  font-size: 12px;\n  font-size: 1.2rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.2px;\n  letter-spacing: 0.02rem;\n  font-weight: 300;\n  color: #757575;\n  text-transform: inherit; }\n\n.label {\n  font-size: 12px;\n  font-size: 1.2rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 300;\n  color: #212121;\n  text-transform: inherit; }\n\n.menu {\n  font-size: 13px;\n  font-size: 1.3rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: inherit; }\n\n.button {\n  font-size: 14px;\n  font-size: 1.4rem;\n  line-height: 20px;\n  line-height: 2rem;\n  letter-spacing: 0.1px;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: #212121;\n  text-transform: uppercase; }\n\n@media only screen and (max-width: 960px) {\n  .subhead-2 {\n    font-size: 16px;\n    font-size: 1.6rem; }\n  .subhead-1 {\n    font-size: 16px;\n    font-size: 1.6rem; }\n  .body-2 {\n    font-size: 14px;\n    font-size: 1.4rem; }\n  .body-1 {\n    font-size: 14px;\n    font-size: 1.4rem; }\n  .menu {\n    font-size: 14px;\n    font-size: 1.4rem; } }\n\n.display-4,\n.display-3,\n.display-2,\n.display-1 {\n  margin: 0 0 14px 0;\n  margin-bottom: 1.4rem; }\n\n.headline,\n.title,\n.subhead-2,\n.subhead-1,\n.body-2,\n.body-1,\n.caption,\n.label,\n.menu,\n.button {\n  margin: 0 0 10px 0;\n  margin-bottom: 1rem; }\n"

/***/ },

/***/ 900:
/***/ function(module, exports) {

module.exports = ".btn {\n  font-family: \"Roboto\", 'Helvetica Neue, Helvetica, Arial', sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.1;\n  text-transform: uppercase;\n  letter-spacing: inherit;\n  color: rgba(255, 255, 255, 0.87); }\n\n.btn-default,\n.btn-link {\n  color: rgba(0, 0, 0, 0.87); }\n\n/* -- Buttons style ------------------------------------ */\n.btn {\n  outline: 0;\n  outline-offset: 0;\n  border: 0;\n  border-radius: 2px;\n  transition: all 0.15s ease-in-out;\n  -o-transition: all 0.15s ease-in-out;\n  -moz-transition: all 0.15s ease-in-out;\n  -webkit-transition: all 0.15s ease-in-out; }\n\n.btn:focus,\n.btn:active,\n.btn.active,\n.btn:active:focus,\n.btn.active:focus {\n  outline: 0;\n  outline-offset: 0;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none; }\n\n/* -- Buttons types -------------------------------- */\n.btn-raised {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24); }\n\n.btn-raised:active,\n.btn-raised.active,\n.btn-raised:active:focus,\n.btn-raised.active:focus {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.btn-raised:focus {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.btn.btn-circle {\n  padding: 0;\n  border-radius: 50%; }\n\n/* -- Buttons colors -------------------------------- */\n.btn-default,\n.dropdown-toggle.btn-default {\n  background-color: #ffffff; }\n\n.btn-default:hover,\n.dropdown-toggle.btn-default:hover {\n  background-color: #e5e5e5; }\n\n.btn-default:active,\n.dropdown-toggle.btn-default:active,\n.btn-default.active,\n.dropdown-toggle.btn-default.active {\n  background-color: #e5e5e5; }\n\n.btn-default:focus,\n.dropdown-toggle.btn-default:focus {\n  background-color: #cccccc; }\n\n.btn-default:disabled,\n.dropdown-toggle.btn-default:disabled,\n.btn-default.disabled,\n.dropdown-toggle.btn-default.disabled,\n.btn-default[disabled],\n.dropdown-toggle.btn-default[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-default .ink,\n.dropdown-toggle.btn-default .ink {\n  background-color: #b8b8b8; }\n\n.btn-flat.btn-default {\n  color: #212121;\n  background-color: transparent; }\n\n.btn-flat.btn-default:hover {\n  color: #141414;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-default:active,\n.btn-flat.btn-default.active {\n  color: #020202;\n  background-color: #cccccc; }\n\n.btn-flat.btn-default:focus {\n  color: #000000;\n  background-color: #cccccc; }\n\n.btn-flat.btn-default .ink {\n  background-color: #808080; }\n\n.btn-primary,\n.dropdown-toggle.btn-primary {\n  background-color: #5677fc; }\n\n.btn-primary:hover,\n.dropdown-toggle.btn-primary:hover {\n  background-color: #4e6cef; }\n\n.btn-primary:active,\n.dropdown-toggle.btn-primary:active,\n.btn-primary.active,\n.dropdown-toggle.btn-primary.active {\n  background-color: #4e6cef; }\n\n.btn-primary:focus,\n.dropdown-toggle.btn-primary:focus {\n  background-color: #455ede; }\n\n.btn-primary:disabled,\n.dropdown-toggle.btn-primary:disabled,\n.btn-primary.disabled,\n.dropdown-toggle.btn-primary.disabled,\n.btn-primary[disabled],\n.dropdown-toggle.btn-primary[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-primary .ink,\n.dropdown-toggle.btn-primary .ink {\n  background-color: #3b50ce; }\n\n.btn-flat.btn-primary {\n  color: #5677fc;\n  background-color: transparent; }\n\n.btn-flat.btn-primary:hover {\n  color: #4e6cef;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-primary:active,\n.btn-flat.btn-primary.active {\n  color: #455ede;\n  background-color: #cccccc; }\n\n.btn-flat.btn-primary:focus {\n  color: #3b50ce;\n  background-color: #cccccc; }\n\n.btn-flat.btn-primary .ink {\n  background-color: #808080; }\n\n.btn-success,\n.dropdown-toggle.btn-success {\n  background-color: #259b24; }\n\n.btn-success:hover,\n.dropdown-toggle.btn-success:hover {\n  background-color: #0a8f08; }\n\n.btn-success:active,\n.dropdown-toggle.btn-success:active,\n.btn-success.active,\n.dropdown-toggle.btn-success.active {\n  background-color: #0a8f08; }\n\n.btn-success:focus,\n.dropdown-toggle.btn-success:focus {\n  background-color: #0a7e07; }\n\n.btn-success:disabled,\n.dropdown-toggle.btn-success:disabled,\n.btn-success.disabled,\n.dropdown-toggle.btn-success.disabled,\n.btn-success[disabled],\n.dropdown-toggle.btn-success[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-success .ink,\n.dropdown-toggle.btn-success .ink {\n  background-color: #056f00; }\n\n.btn-flat.btn-success {\n  color: #259b24;\n  background-color: transparent; }\n\n.btn-flat.btn-success:hover {\n  color: #0a8f08;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-success:active,\n.btn-flat.btn-success.active {\n  color: #0a7e07;\n  background-color: #cccccc; }\n\n.btn-flat.btn-success:focus {\n  color: #056f00;\n  background-color: #cccccc; }\n\n.btn-flat.btn-success .ink {\n  background-color: #808080; }\n\n.btn-info,\n.dropdown-toggle.btn-info {\n  background-color: #03a9f4; }\n\n.btn-info:hover,\n.dropdown-toggle.btn-info:hover {\n  background-color: #039be5; }\n\n.btn-info:active,\n.dropdown-toggle.btn-info:active,\n.btn-info.active,\n.dropdown-toggle.btn-info.active {\n  background-color: #039be5; }\n\n.btn-info:focus,\n.dropdown-toggle.btn-info:focus {\n  background-color: #0288d1; }\n\n.btn-info:disabled,\n.dropdown-toggle.btn-info:disabled,\n.btn-info.disabled,\n.dropdown-toggle.btn-info.disabled,\n.btn-info[disabled],\n.dropdown-toggle.btn-info[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-info .ink,\n.dropdown-toggle.btn-info .ink {\n  background-color: #0277bd; }\n\n.btn-flat.btn-info {\n  color: #03a9f4;\n  background-color: transparent; }\n\n.btn-flat.btn-info:hover {\n  color: #039be5;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-info:active,\n.btn-flat.btn-info.active {\n  color: #0288d1;\n  background-color: #cccccc; }\n\n.btn-flat.btn-info:focus {\n  color: #0277bd;\n  background-color: #cccccc; }\n\n.btn-flat.btn-info .ink {\n  background-color: #808080; }\n\n.btn-warning,\n.dropdown-toggle.btn-warning {\n  background-color: #ffc107; }\n\n.btn-warning:hover,\n.dropdown-toggle.btn-warning:hover {\n  background-color: #ffb300; }\n\n.btn-warning:active,\n.dropdown-toggle.btn-warning:active,\n.btn-warning.active,\n.dropdown-toggle.btn-warning.active {\n  background-color: #ffb300; }\n\n.btn-warning:focus,\n.dropdown-toggle.btn-warning:focus {\n  background-color: #ffa000; }\n\n.btn-warning:disabled,\n.dropdown-toggle.btn-warning:disabled,\n.btn-warning.disabled,\n.dropdown-toggle.btn-warning.disabled,\n.btn-warning[disabled],\n.dropdown-toggle.btn-warning[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-warning .ink,\n.dropdown-toggle.btn-warning .ink {\n  background-color: #ff8f00; }\n\n.btn-flat.btn-warning {\n  color: #ffc107;\n  background-color: transparent; }\n\n.btn-flat.btn-warning:hover {\n  color: #ffb300;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-warning:active,\n.btn-flat.btn-warning.active {\n  color: #ffa000;\n  background-color: #cccccc; }\n\n.btn-flat.btn-warning:focus {\n  color: #ff8f00;\n  background-color: #cccccc; }\n\n.btn-flat.btn-warning .ink {\n  background-color: #808080; }\n\n.btn-danger,\n.dropdown-toggle.btn-danger {\n  background-color: #ff5722; }\n\n.btn-danger:hover,\n.dropdown-toggle.btn-danger:hover {\n  background-color: #f4511e; }\n\n.btn-danger:active,\n.dropdown-toggle.btn-danger:active,\n.btn-danger.active,\n.dropdown-toggle.btn-danger.active {\n  background-color: #f4511e; }\n\n.btn-danger:focus,\n.dropdown-toggle.btn-danger:focus {\n  background-color: #e64a19; }\n\n.btn-danger:disabled,\n.dropdown-toggle.btn-danger:disabled,\n.btn-danger.disabled,\n.dropdown-toggle.btn-danger.disabled,\n.btn-danger[disabled],\n.dropdown-toggle.btn-danger[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-danger .ink,\n.dropdown-toggle.btn-danger .ink {\n  background-color: #d84315; }\n\n.btn-flat.btn-danger {\n  color: #ff5722;\n  background-color: transparent; }\n\n.btn-flat.btn-danger:hover {\n  color: #f4511e;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-danger:active,\n.btn-flat.btn-danger.active {\n  color: #e64a19;\n  background-color: #cccccc; }\n\n.btn-flat.btn-danger:focus {\n  color: #d84315;\n  background-color: #cccccc; }\n\n.btn-flat.btn-danger .ink {\n  background-color: #808080; }\n\n/* -- Buttons sizes -------------------------------- */\n.btn {\n  min-width: 88px;\n  padding: 10px 14px; }\n\n.btn-lg,\n.btn-group-lg > .btn {\n  min-width: 122px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3; }\n\n.btn-sm,\n.btn-group-sm > .btn {\n  min-width: 64px;\n  padding: 4px 12px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.btn-xs,\n.btn-group-xs > .btn {\n  min-width: 46px;\n  padding: 2px 10px;\n  font-size: 10px;\n  line-height: 1.5; }\n\n.btn-circle {\n  width: 56px;\n  height: 56px;\n  min-width: 56px; }\n\n.btn-circle span {\n  line-height: 56px; }\n\n.btn-circle.btn-lg {\n  width: 78px;\n  height: 78px;\n  min-width: 78px; }\n\n.btn-circle.btn-lg span {\n  line-height: 78px; }\n\n.btn-circle.btn-sm {\n  width: 40px;\n  height: 40px;\n  min-width: 40px; }\n\n.btn-circle.btn-sm span {\n  line-height: 40px; }\n\n.btn-circle.btn-xs {\n  width: 30px;\n  height: 30px;\n  min-width: 30px; }\n\n.btn-circle.btn-xs span {\n  line-height: 30px; }\n\n/*-- Button groups --------------------------------- */\n.btn-group .btn {\n  border-radius: 2px; }\n\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n  outline-offset: 0;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none; }\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: 0; }\n\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover {\n  z-index: 0; }\n\n.btn-group > .btn:focus:hover,\n.btn-group-vertical > .btn:focus:hover,\n.btn-group > .btn:active:hover,\n.btn-group-vertical > .btn:active:hover,\n.btn-group > .btn.active:hover,\n.btn-group-vertical > .btn.active:hover {\n  z-index: 2; }\n\n/* -- Ripple effect -------------------------------- */\n.ripple-effect {\n  position: relative;\n  overflow: hidden;\n  -webkit-transform: translate3d(0, 0, 0); }\n\n.ink {\n  display: block;\n  position: absolute;\n  pointer-events: none;\n  border-radius: 50%;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  background: #fff;\n  opacity: 1; }\n\n.ink.animate {\n  -webkit-animation: ripple .5s linear;\n  animation: ripple .5s linear; }\n\n@keyframes ripple {\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(2.5);\n            transform: scale(2.5); } }\n\n@-webkit-keyframes ripple {\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(2.5);\n    transform: scale(2.5); } }\n"

/***/ },

/***/ 901:
/***/ function(module, exports) {

module.exports = ".btn {\n  font-family: \"Roboto\", 'Helvetica Neue, Helvetica, Arial', sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.1;\n  text-transform: uppercase;\n  letter-spacing: inherit;\n  color: rgba(255, 255, 255, 0.87); }\n\n.btn-default,\n.btn-link {\n  color: rgba(0, 0, 0, 0.87); }\n\n/* -- Buttons style ------------------------------------ */\n.btn {\n  outline: 0;\n  outline-offset: 0;\n  border: 0;\n  border-radius: 2px;\n  transition: all 0.15s ease-in-out;\n  -o-transition: all 0.15s ease-in-out;\n  -moz-transition: all 0.15s ease-in-out;\n  -webkit-transition: all 0.15s ease-in-out; }\n\n.btn:focus,\n.btn:active,\n.btn.active,\n.btn:active:focus,\n.btn.active:focus {\n  outline: 0;\n  outline-offset: 0;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none; }\n\n/* -- Buttons types -------------------------------- */\n.btn-raised {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24); }\n\n.btn-raised:active,\n.btn-raised.active,\n.btn-raised:active:focus,\n.btn-raised.active:focus {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.btn-raised:focus {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.btn.btn-circle {\n  padding: 0;\n  border-radius: 50%; }\n\n/* -- Buttons colors -------------------------------- */\n.btn-default,\n.dropdown-toggle.btn-default {\n  background-color: #ffffff; }\n\n.btn-default:hover,\n.dropdown-toggle.btn-default:hover {\n  background-color: #e5e5e5; }\n\n.btn-default:active,\n.dropdown-toggle.btn-default:active,\n.btn-default.active,\n.dropdown-toggle.btn-default.active {\n  background-color: #e5e5e5; }\n\n.btn-default:focus,\n.dropdown-toggle.btn-default:focus {\n  background-color: #cccccc; }\n\n.btn-default:disabled,\n.dropdown-toggle.btn-default:disabled,\n.btn-default.disabled,\n.dropdown-toggle.btn-default.disabled,\n.btn-default[disabled],\n.dropdown-toggle.btn-default[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-default .ink,\n.dropdown-toggle.btn-default .ink {\n  background-color: #b8b8b8; }\n\n.btn-flat.btn-default {\n  color: #212121;\n  background-color: transparent; }\n\n.btn-flat.btn-default:hover {\n  color: #141414;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-default:active,\n.btn-flat.btn-default.active {\n  color: #020202;\n  background-color: #cccccc; }\n\n.btn-flat.btn-default:focus {\n  color: #000000;\n  background-color: #cccccc; }\n\n.btn-flat.btn-default .ink {\n  background-color: #808080; }\n\n.btn-primary,\n.dropdown-toggle.btn-primary {\n  background-color: #5677fc; }\n\n.btn-primary:hover,\n.dropdown-toggle.btn-primary:hover {\n  background-color: #4e6cef; }\n\n.btn-primary:active,\n.dropdown-toggle.btn-primary:active,\n.btn-primary.active,\n.dropdown-toggle.btn-primary.active {\n  background-color: #4e6cef; }\n\n.btn-primary:focus,\n.dropdown-toggle.btn-primary:focus {\n  background-color: #455ede; }\n\n.btn-primary:disabled,\n.dropdown-toggle.btn-primary:disabled,\n.btn-primary.disabled,\n.dropdown-toggle.btn-primary.disabled,\n.btn-primary[disabled],\n.dropdown-toggle.btn-primary[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-primary .ink,\n.dropdown-toggle.btn-primary .ink {\n  background-color: #3b50ce; }\n\n.btn-flat.btn-primary {\n  color: #5677fc;\n  background-color: transparent; }\n\n.btn-flat.btn-primary:hover {\n  color: #4e6cef;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-primary:active,\n.btn-flat.btn-primary.active {\n  color: #455ede;\n  background-color: #cccccc; }\n\n.btn-flat.btn-primary:focus {\n  color: #3b50ce;\n  background-color: #cccccc; }\n\n.btn-flat.btn-primary .ink {\n  background-color: #808080; }\n\n.btn-success,\n.dropdown-toggle.btn-success {\n  background-color: #259b24; }\n\n.btn-success:hover,\n.dropdown-toggle.btn-success:hover {\n  background-color: #0a8f08; }\n\n.btn-success:active,\n.dropdown-toggle.btn-success:active,\n.btn-success.active,\n.dropdown-toggle.btn-success.active {\n  background-color: #0a8f08; }\n\n.btn-success:focus,\n.dropdown-toggle.btn-success:focus {\n  background-color: #0a7e07; }\n\n.btn-success:disabled,\n.dropdown-toggle.btn-success:disabled,\n.btn-success.disabled,\n.dropdown-toggle.btn-success.disabled,\n.btn-success[disabled],\n.dropdown-toggle.btn-success[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-success .ink,\n.dropdown-toggle.btn-success .ink {\n  background-color: #056f00; }\n\n.btn-flat.btn-success {\n  color: #259b24;\n  background-color: transparent; }\n\n.btn-flat.btn-success:hover {\n  color: #0a8f08;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-success:active,\n.btn-flat.btn-success.active {\n  color: #0a7e07;\n  background-color: #cccccc; }\n\n.btn-flat.btn-success:focus {\n  color: #056f00;\n  background-color: #cccccc; }\n\n.btn-flat.btn-success .ink {\n  background-color: #808080; }\n\n.btn-info,\n.dropdown-toggle.btn-info {\n  background-color: #03a9f4; }\n\n.btn-info:hover,\n.dropdown-toggle.btn-info:hover {\n  background-color: #039be5; }\n\n.btn-info:active,\n.dropdown-toggle.btn-info:active,\n.btn-info.active,\n.dropdown-toggle.btn-info.active {\n  background-color: #039be5; }\n\n.btn-info:focus,\n.dropdown-toggle.btn-info:focus {\n  background-color: #0288d1; }\n\n.btn-info:disabled,\n.dropdown-toggle.btn-info:disabled,\n.btn-info.disabled,\n.dropdown-toggle.btn-info.disabled,\n.btn-info[disabled],\n.dropdown-toggle.btn-info[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-info .ink,\n.dropdown-toggle.btn-info .ink {\n  background-color: #0277bd; }\n\n.btn-flat.btn-info {\n  color: #03a9f4;\n  background-color: transparent; }\n\n.btn-flat.btn-info:hover {\n  color: #039be5;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-info:active,\n.btn-flat.btn-info.active {\n  color: #0288d1;\n  background-color: #cccccc; }\n\n.btn-flat.btn-info:focus {\n  color: #0277bd;\n  background-color: #cccccc; }\n\n.btn-flat.btn-info .ink {\n  background-color: #808080; }\n\n.btn-warning,\n.dropdown-toggle.btn-warning {\n  background-color: #ffc107; }\n\n.btn-warning:hover,\n.dropdown-toggle.btn-warning:hover {\n  background-color: #ffb300; }\n\n.btn-warning:active,\n.dropdown-toggle.btn-warning:active,\n.btn-warning.active,\n.dropdown-toggle.btn-warning.active {\n  background-color: #ffb300; }\n\n.btn-warning:focus,\n.dropdown-toggle.btn-warning:focus {\n  background-color: #ffa000; }\n\n.btn-warning:disabled,\n.dropdown-toggle.btn-warning:disabled,\n.btn-warning.disabled,\n.dropdown-toggle.btn-warning.disabled,\n.btn-warning[disabled],\n.dropdown-toggle.btn-warning[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-warning .ink,\n.dropdown-toggle.btn-warning .ink {\n  background-color: #ff8f00; }\n\n.btn-flat.btn-warning {\n  color: #ffc107;\n  background-color: transparent; }\n\n.btn-flat.btn-warning:hover {\n  color: #ffb300;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-warning:active,\n.btn-flat.btn-warning.active {\n  color: #ffa000;\n  background-color: #cccccc; }\n\n.btn-flat.btn-warning:focus {\n  color: #ff8f00;\n  background-color: #cccccc; }\n\n.btn-flat.btn-warning .ink {\n  background-color: #808080; }\n\n.btn-danger,\n.dropdown-toggle.btn-danger {\n  background-color: #ff5722; }\n\n.btn-danger:hover,\n.dropdown-toggle.btn-danger:hover {\n  background-color: #f4511e; }\n\n.btn-danger:active,\n.dropdown-toggle.btn-danger:active,\n.btn-danger.active,\n.dropdown-toggle.btn-danger.active {\n  background-color: #f4511e; }\n\n.btn-danger:focus,\n.dropdown-toggle.btn-danger:focus {\n  background-color: #e64a19; }\n\n.btn-danger:disabled,\n.dropdown-toggle.btn-danger:disabled,\n.btn-danger.disabled,\n.dropdown-toggle.btn-danger.disabled,\n.btn-danger[disabled],\n.dropdown-toggle.btn-danger[disabled] {\n  background-color: #b3b3b3; }\n\n.btn-danger .ink,\n.dropdown-toggle.btn-danger .ink {\n  background-color: #d84315; }\n\n.btn-flat.btn-danger {\n  color: #ff5722;\n  background-color: transparent; }\n\n.btn-flat.btn-danger:hover {\n  color: #f4511e;\n  background-color: #e5e5e5; }\n\n.btn-flat.btn-danger:active,\n.btn-flat.btn-danger.active {\n  color: #e64a19;\n  background-color: #cccccc; }\n\n.btn-flat.btn-danger:focus {\n  color: #d84315;\n  background-color: #cccccc; }\n\n.btn-flat.btn-danger .ink {\n  background-color: #808080; }\n\n/* -- Buttons sizes -------------------------------- */\n.btn {\n  min-width: 88px;\n  padding: 10px 14px; }\n\n.btn-lg,\n.btn-group-lg > .btn {\n  min-width: 122px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3; }\n\n.btn-sm,\n.btn-group-sm > .btn {\n  min-width: 64px;\n  padding: 4px 12px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.btn-xs,\n.btn-group-xs > .btn {\n  min-width: 46px;\n  padding: 2px 10px;\n  font-size: 10px;\n  line-height: 1.5; }\n\n.btn-circle {\n  width: 56px;\n  height: 56px;\n  min-width: 56px; }\n\n.btn-circle span {\n  line-height: 56px; }\n\n.btn-circle.btn-lg {\n  width: 78px;\n  height: 78px;\n  min-width: 78px; }\n\n.btn-circle.btn-lg span {\n  line-height: 78px; }\n\n.btn-circle.btn-sm {\n  width: 40px;\n  height: 40px;\n  min-width: 40px; }\n\n.btn-circle.btn-sm span {\n  line-height: 40px; }\n\n.btn-circle.btn-xs {\n  width: 30px;\n  height: 30px;\n  min-width: 30px; }\n\n.btn-circle.btn-xs span {\n  line-height: 30px; }\n\n/*-- Button groups --------------------------------- */\n.btn-group .btn {\n  border-radius: 2px; }\n\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n  outline-offset: 0;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none; }\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: 0; }\n\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover {\n  z-index: 0; }\n\n.btn-group > .btn:focus:hover,\n.btn-group-vertical > .btn:focus:hover,\n.btn-group > .btn:active:hover,\n.btn-group-vertical > .btn:active:hover,\n.btn-group > .btn.active:hover,\n.btn-group-vertical > .btn.active:hover {\n  z-index: 2; }\n\n/* -- Ripple effect -------------------------------- */\n.ripple-effect {\n  position: relative;\n  overflow: hidden;\n  -webkit-transform: translate3d(0, 0, 0); }\n\n.ink {\n  display: block;\n  position: absolute;\n  pointer-events: none;\n  border-radius: 50%;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  background: #fff;\n  opacity: 1; }\n\n.ink.animate {\n  -webkit-animation: ripple .5s linear;\n  animation: ripple .5s linear; }\n\n@keyframes ripple {\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(2.5);\n            transform: scale(2.5); } }\n\n@-webkit-keyframes ripple {\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(2.5);\n    transform: scale(2.5); } }\n"

/***/ },

/***/ 902:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 904:
/***/ function(module, exports) {

module.exports = "<md-card class=\"_md\">\n  <md-card-header>\n    <span class=\"md-title\">{{ title }}</span>\n  </md-card-header>\n  <!-- this creates a google map on the page with the given lat/lng from -->\n  <!-- the component as the initial center of the map: -->\n  <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\">\n    <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\"></sebm-google-map-marker>\n  </sebm-google-map>\n</md-card>"

/***/ },

/***/ 905:
/***/ function(module, exports) {

module.exports = "<md-sidenav-container [class.m2app-dark]=\"isDarkTheme\">\n\n  <md-sidenav #sidenav mode=\"side\" class=\"app-sidenav\">\n\n\n    <md-toolbar class=\"sidenav-toolbar md-elevation-z2 md-accent\" color=\"accent\">\n      <div class=\"md-toolbar-layout\">\n        <md-toolbar-row>\n          <button md-button [md-menu-trigger-for]=\"menu\" style=\"font-size:20px;\">\n            Client1\n          </button>\n          <md-menu #menu=\"mdMenu\">\n            <button md-menu-item onclick=\"location.href='#/client1'\">Client1</button>\n            <button md-menu-item onclick=\"location.href='#/client2'\">Client2</button>\n            <button md-menu-item onclick=\"location.href='#/client3'\">Client3</button>\n          </md-menu>\n        </md-toolbar-row>\n      </div>\n    </md-toolbar>\n\n    <md-nav-list class=\"sidenav-list sidenav-toplevel\" fxlayout=\"column\" role=\"list\" style=\"display: flex; box-sizing: border-box; flex-direction: column; -webkit-box-orient: vertical; -webkit-box-direction: normal;\">\n<!--      <ms-sidenav-item class=\"sidenav-item\"> -->\n        <a class=\"sidenav-anchor\" md-list-item=\"\" md-ripple=\"\" role=\"listitem\" routerlinkactive=\"active\" href=\"#/client1/home\">\n          <div class=\"md-list-item\">\n            <div class=\"md-list-text\"></div>\n            <md-icon role=\"img\" class=\"material-icons\" aria-label=\"home\">home</md-icon>\n            <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">Home</span>\n            <span fxflex=\"\" style=\"flex: 1 1 1e-09px; box-sizing: border-box; -webkit-box-flex: 1;\"></span>\n          </div>\n          <div class=\"md-ripple-background\"></div>\n        </a>\n<!--      </ms-sidenav-item>-->\n<!--      <ms-sidenav-item class=\"sidenav-item\"> -->\n        <a class=\"sidenav-anchor\" md-list-item=\"\" md-ripple=\"\" role=\"listitem\" routerlinkactive=\"active\" href=\"#/client1/about\">\n          <div class=\"md-list-item\">\n            <div class=\"md-list-text\"></div>\n            <md-icon role=\"img\" class=\"material-icons\" aria-label=\"map\">map</md-icon>\n            <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">About</span>\n            <span fxflex=\"\" style=\"flex: 1 1 1e-09px; box-sizing: border-box; -webkit-box-flex: 1;\"></span>\n          </div>\n          <div class=\"md-ripple-background\"></div>\n        </a>\n<!--      </ms-sidenav-item>-->\n<!--      <ms-sidenav-item class=\"sidenav-item\"> -->\n        <a class=\"sidenav-anchor\" md-list-item=\"\" md-ripple=\"\" role=\"listitem\" routerlinkactive=\"active\" href=\"#/client1/store\">\n          <div class=\"md-list-item\">\n            <div class=\"md-list-text\"></div>\n            <md-icon role=\"img\" class=\"material-icons\" aria-label=\"store\">store</md-icon>\n            <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">Store</span>\n            <span fxflex=\"\" style=\"flex: 1 1 1e-09px; box-sizing: border-box; -webkit-box-flex: 1;\"></span>\n          </div>\n          <div class=\"md-ripple-background\"></div>\n        </a>\n<!--      </ms-sidenav-item>-->\n<!--      <ms-sidenav-item class=\"sidenav-item\"> -->\n        <a class=\"sidenav-anchor\" md-list-item=\"\" md-ripple=\"\" role=\"listitem\" routerlinkactive=\"active\" href=\"#/client1/products\">\n          <div class=\"md-list-item\">\n            <div class=\"md-list-text\"></div>\n            <md-icon role=\"img\" class=\"material-icons\" aria-label=\"apps\">apps</md-icon>\n            <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">Products</span>\n            <span fxflex=\"\" style=\"flex: 1 1 1e-09px; box-sizing: border-box; -webkit-box-flex: 1;\"></span>\n          </div>\n          <div class=\"md-ripple-background\"></div>\n        </a>\n<!--      </ms-sidenav-item>-->\n    </md-nav-list>  \n\n  </md-sidenav>\n\n  <md-toolbar color=\"primary\">\n    <button class=\"app-icon-button\" (click)=\"sidenav.toggle()\">\n      <i class=\"material-icons app-toolbar-menu\">menu</i>\n    </button>\n\n    {{title}}\n\n    <span class=\"app-toolbar-filler\"></span>\n    <button md-button (click)=\"isDarkTheme = !isDarkTheme\">TOGGLE DARK THEME</button>\n  </md-toolbar>\n\n  <div class=\"app-content\">\n    <router-outlet></router-outlet>\n  </div>\n  \n</md-sidenav-container>\n\n<span class=\"app-action\" [class.m2app-dark]=\"isDarkTheme\">\n  <button md-fab><md-icon>check circle</md-icon></button>\n</span>"

/***/ },

/***/ 906:
/***/ function(module, exports) {

module.exports = "<div class=\"app-content\">\n\n  <md-card>\n    <button md-button>FLAT</button>\n    <button md-raised-button md-tooltip=\"This is a tooltip!\">RAISED</button>\n    <button md-raised-button color=\"primary\">PRIMARY RAISED</button>\n    <button md-raised-button color=\"accent\">ACCENT RAISED</button>\n  </md-card>\n\n  <md-card>\n    <md-checkbox>Unchecked</md-checkbox>\n    <md-checkbox [checked]=\"true\">Checked</md-checkbox>\n    <md-checkbox [indeterminate]=\"true\">Indeterminate</md-checkbox>\n    <md-checkbox [disabled]=\"true\">Disabled</md-checkbox>\n  </md-card>\n\n  <md-card>\n    <md-radio-button name=\"symbol\">Alpha</md-radio-button>\n    <md-radio-button name=\"symbol\">Beta</md-radio-button>\n    <md-radio-button name=\"symbol\" disabled>Gamma</md-radio-button>\n  </md-card>\n\n  <md-card class=\"app-input-section\">\n    <input mdInput placeholder=\"First name\" />\n\n    <input mdInput #nickname placeholder=\"Nickname\" maxlength=\"50\" />\n      <md-hint align=\"end\">\n        {{nickname.characterCount}} / 50\n      </md-hint>\n\n    <input mdInput />\n      <md-placeholder>\n        <i class=\"material-icons app-input-icon\">android</i> Favorite phone\n      </md-placeholder>\n\n    <input mdInput placeholder=\"Motorcycle model\" />\n      <span md-prefix>\n        <i class=\"material-icons app-input-icon\">motorcycle</i>\n        &nbsp;\n      </span>\n\n  </md-card>\n\n  <md-card>\n    <md-list class=\"app-list\">\n      <md-list-item *ngFor=\"let food of foods\">\n        <h3 md-line>{{food.name}}</h3>\n        <p md-line class=\"demo-secondary-text\">{{food.rating}}</p>\n      </md-list-item>\n    </md-list>\n  </md-card>\n\n  <md-card>\n    <md-spinner class=\"app-spinner\"></md-spinner>\n    <md-spinner color=\"accent\" class=\"app-spinner\"></md-spinner>\n  </md-card>\n\n  <md-card>\n    <label>\n      Indeterminate progress-bar\n      <md-progress-bar\n          class=\"app-progress\"\n          mode=\"indeterminate\"\n          aria-label=\"Indeterminate progress-bar example\"></md-progress-bar>\n    </label>\n\n    <label>\n      Determinate progress bar - {{progress}}%\n      <md-progress-bar\n          class=\"app-progress\"\n          color=\"accent\"\n          mode=\"determinate\"\n          [value]=\"progress\"\n          aria-label=\"Determinate progress-bar example\"></md-progress-bar>\n    </label>\n  </md-card>\n\n  <md-card>\n    <md-tab-group>\n      <md-tab label=\"Earth\">\n        <p>EARTH</p>\n      </md-tab>\n      <md-tab label=\"Fire\">\n        <p>FIRE</p>\n      </md-tab>\n    </md-tab-group>\n  </md-card>\n\n  <md-card>\n    <md-icon>build</md-icon>\n  </md-card>\n\n  <md-card>\n    <button md-button [md-menu-trigger-for]=\"menu\">\n      MENU\n    </button>\n  </md-card>\n\n  <md-menu #menu=\"mdMenu\">\n    <button md-menu-item>Lemon</button>\n    <button md-menu-item>Lime</button>\n    <button md-menu-item>Banana</button>\n  </md-menu>\n\n  <md-card>\n    <p>Last dialog result: {{lastDialogResult}}</p>\n    <button md-raised-button (click)=\"openDialog()\">DIALOG</button>\n    <button md-raised-button (click)=\"showSnackbar()\">SNACKBAR</button>\n  </md-card>\n\n</div>\n"

/***/ },

/***/ 907:
/***/ function(module, exports) {

module.exports = "<p>\n  product-editor works!\n</p>\n"

/***/ },

/***/ 908:
/***/ function(module, exports) {

module.exports = "<p>\n  product-viewer works!\n</p>\n"

/***/ },

/***/ 909:
/***/ function(module, exports) {

module.exports = "<div id=\"demo\">\n<md-icon role=\"img\" class=\"material-icons\" aria-label=\"apps\">apps</md-icon>\n<span class=\"display-1\">Products</span><br/>\n<div class=\"center\">\n  <app-loader [loading]=\"loading\" [failed]=\"failed\"></app-loader>\n</div>\n<app-products-list\n  [products]=\"products\"\n  [count]=\"count\"\n  (viewProduct)=\"viewProduct($event)\"\n  (editProduct)=\"editProduct($event)\">\n</app-products-list>\n<app-pagination [offset]=\"offset\" [limit]=\"limit\" [size]=\"count\" (pageChange)=\"onPageChange($event)\"></app-pagination>\n</div>"

/***/ },

/***/ 910:
/***/ function(module, exports) {

module.exports = "  <form class=\"form-horizontal\" role=\"form\" (submit)=\"search(term.value)\">\n    <div class=\"form-group\">\n      <input type=\"text\" #term (keyup)=\"search(term.value)\" [value]=\"terms\" class=\"form-control\" id=\"searchInput1\" required>\n      <span class=\"form-highlight\"></span>\n      <span class=\"form-bar\"></span>\n      <label class=\"search-label\" for=\"searchInput1\">Search</label>\n    </div>\n  </form>      \n\n  <p>Results: {{ totalProducts$ | async }}</p><p>{{ count }}</p>\n\n  <!-- Responsive table starts here -->\n  <!-- For correct display on small screens you must add 'data-title' to each 'td' in your table -->\n  <div class=\"table-responsive-vertical shadow-z-1\">\n\n  <!-- Table starts here -->\n  <table id=\"table\" class=\"table table-hover table-mc-light-blue\">\n      <thead>\n        <tr>\n          <th>ID</th>\n          <th>Title</th>\n          <th>Link</th>\n          <th>Status</th>\n          <th>View</th>\n          <th>Edit</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let product of products$ | async \">\n          <td data-title=\"ID\">{{ product.id }}</td>\n          <td data-title=\"Title\">{{ product.title }}</td>\n          <td data-title=\"Link\">\n            <a href=\"{{ product.link }}\" target=\"_blank\">IMDB</a>\n          </td>\n          <td data-title=\"Status\">{{ product.status }}</td>\n          <td data-title=\"View\">\n\t\t\t\t    <button type=\"button\" class=\"btn btn-raised btn-default\" (click)=\"viewProductButton(product.id)\">View</button>\n          </td>\n          <td data-title=\"Edit\">\n\t\t\t\t    <button type=\"button\" class=\"btn btn-raised btn-default\" (click)=\"editProductButton(product.id)\">Edit</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>"

/***/ },

/***/ 911:
/***/ function(module, exports) {

module.exports = "<div id=\"demo\">\n  <md-icon role=\"img\" class=\"material-icons\" aria-label=\"store\">store</md-icon>\n  <span class=\"display-1\">Store</span><br/>\n  <small><a href=\"http://codepen.io/zavoloklom/pen/IGkDz\">Other Material Design works</a></small>\n\n  <form class=\"form-horizontal\" role=\"form\" (submit)=\"search(term.value)\">\n    <div class=\"form-group\">\n      <input type=\"text\" #term (keyup)=\"search(term.value)\" [value]=\"terms\" class=\"form-control\" id=\"searchInput1\" required>\n      <span class=\"form-highlight\"></span>\n      <span class=\"form-bar\"></span>\n      <label class=\"search-label\" for=\"searchInput1\">Search</label>\n    </div>\n  </form>      \n\n  <p>Results: {{ total$ | async }}</p>\n\n  <!-- Responsive table starts here -->\n  <!-- For correct display on small screens you must add 'data-title' to each 'td' in your table -->\n  <div class=\"table-responsive-vertical shadow-z-1\">\n\n  <!-- Table starts here -->\n  <table id=\"table\" class=\"table table-hover table-mc-light-blue\">\n      <thead>\n        <tr>\n          <th>ID</th>\n          <th>Title</th>\n          <th>Link</th>\n          <th>Status</th>\n        </tr>\n      </thead>\n      <tbody>\n<!--        \n        <tr>\n          <td data-title=\"ID\">1</td>\n          <td data-title=\"Title\">Material Design Color Palette</td>\n          <td data-title=\"Link\">\n            <a href=\"https://github.com/zavoloklom/material-design-color-palette\" target=\"_blank\">GitHub</a>\n          </td>\n          <td data-title=\"Status\">Completed</td>\n        </tr>\n        <tr>\n          <td data-title=\"ID\">2</td>\n          <td data-title=\"Title\">Material Design Iconic Font</td>\n          <td data-title=\"Link\">\n            <a href=\"http://codepen.io/zavoloklom/pen/uqCsB\" target=\"_blank\">Codepen</a>\n            <a href=\"https://github.com/zavoloklom/material-design-iconic-font\" target=\"_blank\">GitHub</a>\n          </td>\n          <td data-title=\"Status\">Completed</td>\n        </tr>\n        <tr>\n          <td data-title=\"ID\">3</td>\n          <td data-title=\"Title\">Material Design Hierarchical Display</td>\n          <td data-title=\"Link\">\n            <a href=\"http://codepen.io/zavoloklom/pen/eNaEBM\" target=\"_blank\">Codepen</a>\n            <a href=\"https://github.com/zavoloklom/material-design-hierarchical-display\" target=\"_blank\">GitHub</a>\n          </td>\n          <td data-title=\"Status\">Completed</td>\n        </tr>\n        <tr>\n          <td data-title=\"ID\">4</td>\n          <td data-title=\"Title\">Material Design Sidebar</td>\n          <td data-title=\"Link\"><a href=\"http://codepen.io/zavoloklom/pen/dIgco\" target=\"_blank\">Codepen</a></td>\n          <td data-title=\"Status\">Completed</td>\n        </tr>\n        <tr>\n          <td data-title=\"ID\">5</td>\n          <td data-title=\"Title\">Material Design Tiles</td>\n          <td data-title=\"Link\">\n            <a href=\"http://codepen.io/zavoloklom/pen/wtApI\" target=\"_blank\">Codepen</a>\n          </td>\n          <td data-title=\"Status\">Completed</td>\n        </tr>\n        <tr>\n          <td data-title=\"ID\">6</td>\n          <td data-title=\"Title\">Material Design Typography</td>\n          <td data-title=\"Link\">\n            <a href=\"http://codepen.io/zavoloklom/pen/IkaFL\" target=\"_blank\">Codepen</a>\n            <a href=\"https://github.com/zavoloklom/material-design-typography\" target=\"_blank\">GitHub</a>\n          </td>\n          <td data-title=\"Status\">Completed</td>\n        </tr>\n        <tr>\n          <td data-title=\"ID\">7</td>\n          <td data-title=\"Title\">Material Design Buttons</td>\n          <td data-title=\"Link\">\n            <a href=\"http://codepen.io/zavoloklom/pen/Gubja\" target=\"_blank\">Codepen</a>\n          </td>\n          <td data-title=\"Status\">In progress</td>\n        </tr>\n        <tr>\n          <td data-title=\"ID\">8</td>\n          <td data-title=\"Title\">Material Design Form Elements</td>\n          <td data-title=\"Link\">\n            <a href=\"http://codepen.io/zavoloklom/pen/yaozl\" target=\"_blank\">Codepen</a>\n          </td>\n          <td data-title=\"Status\">In progress</td>\n        </tr>\n        <tr>\n          <td data-title=\"ID\">9</td>\n          <td data-title=\"Title\">Material Design Email Template</td>\n          <td data-title=\"Link\">\n            <a href=\"http://codepen.io/zavoloklom/pen/qEVqzx\" target=\"_blank\">Codepen</a>\n          </td>\n          <td data-title=\"Status\">Completed</td>\n        </tr>\n        <tr>\n          <td data-title=\"ID\">10</td>\n          <td data-title=\"Title\">Material Design Animation Timing (old one)</td>\n          <td data-title=\"Link\">\n            <a href=\"http://codepen.io/zavoloklom/pen/Jbrho\" target=\"_blank\">Codepen</a>\n          </td>\n          <td data-title=\"Status\">Completed</td>\n        </tr>\n-->\n        <tr *ngFor=\"let item of items$ | async\">\n          <td data-title=\"ID\">{{ item.id }}</td>\n          <td data-title=\"Title\">{{ item.title }}</td>\n          <td data-title=\"Link\">\n            <a href=\"http://www.imdb.com\" target=\"_blank\">IMDB</a>\n          </td>\n          <td data-title=\"Status\">Completed</td>\n        </tr>\n\n      </tbody>\n    </table>\n  </div>\n  <app-search-list-pagination [total]=\"total$ | async\" [page]=\"page\" (goTo)=\"goToPage($event)\"></app-search-list-pagination>\n</div>\n<!---- END --->\n"

/***/ },

/***/ 912:
/***/ function(module, exports) {

module.exports = "<div class=\"preloader-wrapper big active\" *ngIf=\"loading\">\r\n  <md-progress-bar _ngcontent-ece-43=\"\" aria-label=\"Indeterminate progress-bar example\" aria-valuemax=\"100\" aria-valuemin=\"0\" class=\"app-progress mat-primary mat-progress-bar\" mode=\"indeterminate\" role=\"progressbar\" ng-reflect-mode=\"indeterminate\" aria-valuenow=\"0\">\r\n    <div class=\"mat-progress-bar-background mat-progress-bar-element\"></div>\r\n    <div class=\"mat-progress-bar-buffer mat-progress-bar-element\"></div>\r\n    <div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" ng-reflect-ng-style=\"[object Object]\" style=\"transform: scaleX(0);\"></div>\r\n    <div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div>\r\n  </md-progress-bar>\r\n</div>\r\n<div class=\"center grey-text text-lighten-1\" *ngIf=\"failed\">\r\n  <i class=\"large material-icons\">report_problem</i>\r\n  <p>Can't load info</p>\r\n</div>"

/***/ },

/***/ 913:
/***/ function(module, exports) {

module.exports = "<!--<ul class=\"pagination\">\r\n  <li (click)=\"selectPage(1, $event)\" [class.disabled]=\"currentPage == 1\">\r\n    <a href=\"\" title=\"Go to first page\">&laquo;</a>\r\n  </li>\r\n  <li (click)=\"selectPage(currentPage - 1, $event)\" [class.disabled]=\"currentPage == 1\">\r\n    <a href=\"\" title=\"Go to previous page\">&lsaquo;</a>\r\n  </li>\r\n  <li class=\"disabled\" (click)=\"cancelEvent($event)\" *ngIf=\"(currentPage - range) > 1\">\r\n    <a href=\"\">...</a>\r\n  </li>\r\n  <li *ngFor=\"let page of pages | async\" [class.active]=\"page == currentPage\">\r\n    <a href=\"\" (click)=\"selectPage(page, $event)\">\r\n      {{page}}\r\n    </a>\r\n  </li>\r\n  <li class=\"disabled\" (click)=\"cancelEvent($event)\" *ngIf=\"(currentPage + range) < totalPages\">\r\n    <a href=\"\">...</a>\r\n  </li>\r\n  <li (click)=\"selectPage(currentPage + 1, $event)\" [class.disabled]=\"currentPage == totalPages\">\r\n    <a href=\"\" title=\"Go to next page\">&rsaquo;</a>\r\n  </li>\r\n  <li (click)=\"selectPage(totalPages, $event)\" [class.disabled]=\"currentPage == totalPages\">\r\n    <a href=\"\" title=\"Go to last page\">&raquo;</a>\r\n  </li>\r\n</ul>-->\r\n\r\n<div class=\"btn-toolbar\" role=\"toolbar\">\r\n  <div class=\"btn-group\">\r\n    <button type=\"button\" (click)=\"selectPage(1, $event)\" [class.disabled]=\"currentPage == 1\" class=\"btn btn-raised ripple-effect btn-default\" title=\"Go to first page\">&laquo;</button>\r\n    <button type=\"button\" (click)=\"selectPage(currentPage - 1, $event)\" [class.disabled]=\"currentPage == 1\" class=\"btn btn-raised ripple-effect btn-default\" title=\"Go to previous page\">&lsaquo;</button>\r\n    <button type=\"button\" (click)=\"cancelEvent($event)\" [class.disabled]=\"currentPage == 1\" *ngIf=\"(currentPage - range) > 1\" class=\"disabled btn btn-raised ripple-effect btn-default\" title=\"Go to previous page\">...</button>\r\n    <div *ngFor=\"let page of pages | async\" [class.active]=\"page == currentPage\">\r\n      <button type=\"button\" (click)=\"selectPage(page, $event)\" class=\"btn btn-raised ripple-effect btn-default\" title=\"\">{{page}}</button>\r\n    </div>\r\n    <button type=\"button\" (click)=\"cancelEvent($event)\" *ngIf=\"(currentPage + range) < totalPages\" class=\"btn btn-raised ripple-effect btn-default\" title=\"\">...</button>\r\n    <button type=\"button\" (click)=\"selectPage(currentPage + 1, $event)\" [class.disabled]=\"currentPage == totalPages\" class=\"btn btn-raised ripple-effect btn-default\" title=\"Go to next page\">&rsaquo;</button>\r\n    <button type=\"button\" (click)=\"selectPage(totalPages, $event)\" [class.disabled]=\"currentPage == totalPages\" class=\"btn btn-raised ripple-effect btn-default\" title=\"Go to last page\">&raquo;</button>\r\n  </div>\r\n</div>\r\n\r\n<!--\r\n<div class=\"btn-toolbar\" role=\"toolbar\">\r\n  <div *ngIf=\"totalPages() > 1\" class=\"btn-group\">\r\n    <button type=\"button\" *ngIf=\"page != 1\" (click)=\"pageClicked(prevPage())\" class=\"btn btn-raised ripple-effect btn-default\">«</button>\r\n    <button type=\"button\" *ngFor=\"let p of pagesRange()\" (click)=\"pageClicked(p)\" class=\"btn btn-raised ripple-effect btn-default\">{{p}}</button>\r\n    <button type=\"button\" *ngIf=\"totalPages() > page\" (click)=\"pageClicked(nextPage())\" class=\"btn btn-raised ripple-effect btn-default\">»</button>\r\n  </div>\r\n</div>\r\n-->"

/***/ },

/***/ 914:
/***/ function(module, exports) {

module.exports = "<!--<ul *ngIf=\"totalPages() > 1\" class=\"pagination pagination-sm no-margin pull-right\">\n  <li *ngIf=\"page != 1\"><a (click)=\"pageClicked(prevPage())\">«</a></li>\n  <li *ngFor=\"let p of pagesRange()\"><a (click)=\"pageClicked(p)\">{{p}}</a></li>\n  <li *ngIf=\"totalPages() > page\"><a (click)=\"pageClicked(nextPage())\">»</a></li>\n</ul>-->\n\n<div class=\"btn-toolbar\" role=\"toolbar\">\n  <div *ngIf=\"totalPages() > 1\" class=\"btn-group\">\n    <button type=\"button\" *ngIf=\"page != 1\" (click)=\"pageClicked(prevPage())\" class=\"btn btn-raised ripple-effect btn-default\">«</button>\n    <button type=\"button\" *ngFor=\"let p of pagesRange()\" (click)=\"pageClicked(p)\" class=\"btn btn-raised ripple-effect btn-default\">{{p}}</button>\n    <button type=\"button\" *ngIf=\"totalPages() > page\" (click)=\"pageClicked(nextPage())\" class=\"btn btn-raised ripple-effect btn-default\">»</button>\n  </div>\n</div>\n"

/***/ },

/***/ 915:
/***/ function(module, exports) {

module.exports = "<app-search-list></app-search-list>"

/***/ }

},[1168]);
//# sourceMappingURL=main.bundle.map