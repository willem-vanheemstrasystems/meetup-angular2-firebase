webpackJsonp([0,4],{

/***/ 1178:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(569);


/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
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
        var _this = this;
        // ORIGINAL return this.http.get(`${this.baseUrl}/products/` + encodeURIComponent(productId.toString())).map(this.extractData).catch(this.handleError);
        return this.http
            .get((this.baseUrl + "/products/") + encodeURIComponent(productId.toString())) //.map(this.extractData).catch(this.handleError);
            .map(function (response) { return response.json(); })
            .map(function (result) { return _this.getListItem(result); });
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
        //console.log("ProductsService - getList, data = ", data, ", offset = ", offset, ", limit = ", limit);
        var result = [];
        var count = data.length;
        var products = data;
        result['count'] = count;
        var page;
        if (offset == 0) {
            page = 1;
        }
        else {
            page = (offset / limit) + 1;
        }
        //console.log("ProductsService - getList, page = ", page, ", offset = ", offset, ", limit = ", limit);
        result['products'] = products.slice((page - 1) * limit, page * limit); // PAGINATION LOGIC
        // room for additional filtering
        return result; // ORIGINAL return data;
    };
    ProductsService.prototype.getListItem = function (data) {
        console.log("ProductsService - getListItem, data = ", data);
        var result = [];
        result = data;
        console.log("ProductsService - getListItem, result = ", result);
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ProductsService);
    return ProductsService;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/products.service.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
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
            template: __webpack_require__(911),
            styles: [__webpack_require__(895)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/about.component.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(434);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogContent; });
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
            template: __webpack_require__(913),
            styles: [__webpack_require__(897)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdSnackBar */]) === 'function' && _b) || Object])
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === 'function' && _a) || Object])
    ], DialogContent);
    return DialogContent;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/home.component.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductModel; });
var ProductModel = (function () {
    function ProductModel(id, title, link, status) {
        this.id = id;
        this.title = title;
        this.link = link;
        this.status = status;
    }
    return ProductModel;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/product.model.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_products_service__ = __webpack_require__(194);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEditorComponent; });
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
    function ProductEditorComponent(productsService, router, route) {
        this.productsService = productsService;
        this.router = router;
        this.route = route;
        this.product = {};
    }
    ProductEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            return _this.productsService.get(parseInt(params['id'], 10)).subscribe(function (product) {
                return _this.product = product;
            });
        });
    };
    ProductEditorComponent.prototype.saveProduct = function (product) {
        var _this = this;
        (product.id
            ? this.productsService.update(product)
            : this.productsService.insert(product))
            .subscribe(function (product) {
            _this.router.navigate(["/products/"]);
        });
    };
    ProductEditorComponent.prototype.deleteProduct = function (product) {
        var _this = this;
        if (confirm('Are you sure you want to delete this product?')) {
            this.productsService.delete(product.id).subscribe(function (product) {
                return _this.router.navigate(["/products/"]);
            });
        }
    };
    ProductEditorComponent.prototype.cancelProduct = function (product) {
        this.router.navigate(["/products/"]);
    };
    ProductEditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-editor',
            template: __webpack_require__(914),
            styles: [__webpack_require__(898)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], ProductEditorComponent);
    return ProductEditorComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/product-editor.component.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_products_service__ = __webpack_require__(194);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductViewerComponent; });
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
    function ProductViewerComponent(route, router, productsService) {
        this.route = route;
        this.router = router;
        this.productsService = productsService;
    }
    ProductViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.productsService.get(parseInt(params['id'], 10)).subscribe(function (product) { return _this.product = product; });
        });
    };
    ProductViewerComponent.prototype.editProduct = function (productId) {
        this.router.navigate(["/product", productId, "edit"]);
    };
    ProductViewerComponent.prototype.returnToList = function () {
        this.router.navigate(["/products/"]);
    };
    ProductViewerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-viewer',
            template: __webpack_require__(915),
            styles: [__webpack_require__(899)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */]) === 'function' && _c) || Object])
    ], ProductViewerComponent);
    return ProductViewerComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/product-viewer.component.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_products_service__ = __webpack_require__(194);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsViewerComponent; });
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
        this.limit = 10; // choose an appropriate number
        this.range = 0; // not enough space for more
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
        //console.log("ProductsViewerComponent - getAll, offset = ", offset, " limit = ", limit);
        this.products = [];
        this.loading = true;
        this.failed = false;
        this.productsService.getAll(offset, limit).subscribe(function (result) {
            //console.log("ProductsViewerComponent - getAll - result = ", result);
            _this.products = result['products'];
            //console.log("ProductsViewerComponent - getAll - this.products = ", this.products);
            _this.count = result['count'];
            //console.log("ProductsViewerComponent - getAll - this.count = ", this.count);		
            _this.loading = false;
        }, function () {
            _this.loading = false;
            _this.failed = true;
        });
    };
    ProductsViewerComponent.prototype.viewProduct = function (productId) {
        console.log("ProductsViewerComponent - viewProduct called with productId = ", productId);
        this.router.navigate(['/product', productId]);
    };
    ProductsViewerComponent.prototype.editProduct = function (productId) {
        console.log("ProductsViewerComponent - editProduct called with productId = ", productId);
        this.router.navigate(['/product', productId, 'edit']);
    };
    ProductsViewerComponent.prototype.onPageChange = function (offset) {
        console.log("ProductsViewerComponent - onPageChange called with offset = ", offset);
        this.offset = offset;
        this.router.navigate(['/products/page', (offset / this.limit) + 1]);
    };
    ProductsViewerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-products-viewer',
            template: __webpack_require__(916),
            styles: [__webpack_require__(900)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */]) === 'function' && _c) || Object])
    ], ProductsViewerComponent);
    return ProductsViewerComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/products-viewer.component.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_base__ = __webpack_require__(733);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
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
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/data.service.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreComponent; });
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
            template: __webpack_require__(924),
            styles: [__webpack_require__(907)]
        }), 
        __metadata('design:paramtypes', [])
    ], StoreComponent);
    return StoreComponent;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/store.component.js.map

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 568;


/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(726);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/main.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_store_component__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products_viewer_products_viewer_component__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_product_viewer_product_viewer_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_product_editor_product_editor_component__ = __webpack_require__(481);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'store', component: __WEBPACK_IMPORTED_MODULE_3__store_store_component__["a" /* StoreComponent */] },
    { path: 'products', redirectTo: 'products/page/1', pathMatch: 'full' },
    { path: 'products/page/:nr', component: __WEBPACK_IMPORTED_MODULE_4__products_products_viewer_products_viewer_component__["a" /* ProductsViewerComponent */] },
    { path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_5__products_product_viewer_product_viewer_component__["a" /* ProductViewerComponent */] },
    { path: 'product/:id/edit', component: __WEBPACK_IMPORTED_MODULE_6__products_product_editor_product_editor_component__["a" /* ProductEditorComponent */] }
];
var AppRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true });
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/app-routing.module.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
            template: __webpack_require__(912),
            styles: [__webpack_require__(896)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/app.component.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_google_maps_core__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_list_search_list_component__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_search_list_pagination_search_list_pagination_component__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_pagination_pagination_component__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_loader_loader_component__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_data_service__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_filter_pipe__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__store_store_component__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__products_products_viewer_products_viewer_component__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__products_shared_products_list_products_list_component__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__products_product_viewer_product_viewer_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__products_product_editor_product_editor_component__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__products_shared_product_details_product_details_component__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__products_shared_product_form_product_form_component__ = __webpack_require__(730);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
                __WEBPACK_IMPORTED_MODULE_16__pipes_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_14__shared_loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__shared_search_list_pagination_search_list_pagination_component__["a" /* SearchListPaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_17__store_store_component__["a" /* StoreComponent */],
                __WEBPACK_IMPORTED_MODULE_18__products_products_viewer_products_viewer_component__["a" /* ProductsViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_19__products_shared_products_list_products_list_component__["a" /* ProductsListComponent */],
                __WEBPACK_IMPORTED_MODULE_20__products_product_viewer_product_viewer_component__["a" /* ProductViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_21__products_product_editor_product_editor_component__["a" /* ProductEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_22__products_shared_product_details_product_details_component__["a" /* ProductDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__products_shared_product_form_product_form_component__["a" /* ProductFormComponent */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_8__home_home_component__["b" /* DialogContent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
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
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/app.module.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataModel; });
var DataModel = (function () {
    function DataModel(id, title) {
        this.id = id;
        this.title = title;
    }
    ;
    return DataModel;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/data.model.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, args) {
        if (value) {
            var searchFilter_1 = "";
            // Make the incoming search arguments lower case
            if (typeof args[0] === 'undefined') {
                return value;
            }
            else {
                for (var i = 0; i < args.length; i++) {
                    searchFilter_1 = searchFilter_1 + args[i].toLowerCase();
                }
            }
            if (searchFilter_1 && Array.isArray(value)) {
                return value.filter(function (el) {
                    return el.title.toLowerCase().indexOf(searchFilter_1) !== -1;
                });
            }
            return value;
        }
        else {
            return;
        }
    };
    FilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter'
        }), 
        __metadata('design:paramtypes', [])
    ], FilterPipe);
    return FilterPipe;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/filter.pipe.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product_model__ = __webpack_require__(480);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductDetailsComponent = (function () {
    function ProductDetailsComponent() {
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_product_model__["a" /* ProductModel */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_product_model__["a" /* ProductModel */]) === 'function' && _a) || Object)
    ], ProductDetailsComponent.prototype, "product", void 0);
    ProductDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(917),
            styles: [__webpack_require__(901)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/product-details.component.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product_model__ = __webpack_require__(480);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// interface SelectItem { 
// 	value: string;
// 	label: string;
// }
var ProductFormComponent = (function () {
    // colors: SelectItem[] = [
    // 	{ value: 'red', label: 'Red' },
    // 	{ value: 'blue', label: 'Blue' },
    // 	{ value: 'green', label: 'Green' },
    // 	{ value: 'orange', label: 'Orange' },
    // 	{ value: 'yellow', label: 'Yellow' },
    // 	{ value: 'purple', label: 'Purple' }
    // ] 
    // sizes: SelectItem[] = [
    // 	{ value: 'tiny', label: 'Tiny' },
    // 	{ value: 'small', label: 'Small' },
    // 	{ value: 'medium', label: 'Medium' },
    // 	{ value: 'large', label: 'Large' },
    // 	{ value: 'huge', label: 'Huge' }
    // ] 
    function ProductFormComponent() {
        this.product = {};
        this.saveProduct = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deleteProduct = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelProduct = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ProductFormComponent.prototype.ngOnInit = function () {
    };
    ProductFormComponent.prototype.saveProductButton = function (product) {
        this.saveProduct.emit(product);
    };
    ProductFormComponent.prototype.deleteProductButton = function (product) {
        this.deleteProduct.emit(product);
    };
    ProductFormComponent.prototype.cancelProductButton = function (product) {
        this.cancelProduct.emit(product);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_product_model__["a" /* ProductModel */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_product_model__["a" /* ProductModel */]) === 'function' && _a) || Object)
    ], ProductFormComponent.prototype, "product", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], ProductFormComponent.prototype, "saveProduct", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _c) || Object)
    ], ProductFormComponent.prototype, "deleteProduct", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _d) || Object)
    ], ProductFormComponent.prototype, "cancelProduct", void 0);
    ProductFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-form',
            template: __webpack_require__(918),
            styles: [__webpack_require__(902)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductFormComponent);
    return ProductFormComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/product-form.component.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsListComponent; });
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
        this.filterReports = '';
        //END: PRODUCTS-LIST
        //START: PRODUCTS-LIST
        this.viewProduct = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //END: PRODUCTS-LIST	
        //START: PRODUCTS-LIST
        this.editProduct = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //END: PRODUCTS-LIST	
        //START: SEARCH-LIST
        //  total$: Observable<number>;
        //  items$: Observable<DataModel[]>;
        //END: SEARCH-LIST
        //START: PRODUCTS-LIST
        //  totalProducts$: Observable<number>;
        //  products$: Observable<ProductModel[]>;
        //END: PRODUCTS-LIST
        //START: SEARCH-LIST
        this.terms = "";
        this.searchTermStream = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.page = 1;
        this.pageStream = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
    }
    ProductsListComponent.prototype.ngOnInit = function () {
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
        // const searchSourceProducts = this.searchTermStream
        //   .debounceTime(1000)
        //   .distinctUntilChanged()
        //   .map(searchTerm => {
        //     this.terms = searchTerm;
        //     return {products: this.products, search: searchTerm, page: 1}
        //   });
        //END : PRODUCTS-LIST
        //START: SEARCH-LIST
        //    const pageSource = this.pageStream.map(pageNumber => {
        //      this.page = pageNumber;
        //      return {search: this.terms, page: pageNumber}
        //    });
        //END: SEARCH-LIST
        //START: PRODUCTS-LIST
        // const pageSourceProducts = this.pageStream.map(pageNumber => {
        // 	this.page = pageNumber;
        // 	return {products: this.products, search: this.terms, page: pageNumber}
        // });
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
        // const sourceProducts = pageSourceProducts
        //   .merge(searchSourceProducts)
        //   .startWith({products: this.products, search: this.terms, page: this.page})
        // 	.switchMap((params: {products: ProductModel[], search: string, page: number}) => {
        // 		return this.productsService.list(params.products, params.search, params.page)
        // 	})
        // 	.share();
        //END : PRODUCTS-LIST
        //START: SEARCH-LIST
        //    this.total$ = source.pluck('total');
        //    this.items$ = source.pluck('items');
        //END: SEARCH-LIST		
        //START: PRODUCTS-LIST
        // this.totalProducts$ = sourceProducts.pluck('totalProducts');
        // this.products$ = sourceProducts.pluck('products');
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
            template: __webpack_require__(919),
            styles: [__webpack_require__(903)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */]) === 'function' && _c) || Object])
    ], ProductsListComponent);
    return ProductsListComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/products-list.component.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(484);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchListComponent; });
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
            template: __webpack_require__(920),
            styles: [__webpack_require__(904)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === 'function' && _a) || Object])
    ], SearchListComponent);
    return SearchListComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/search-list.component.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_data_model__ = __webpack_require__(727);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataBase; });

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
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/data.base.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
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
            template: __webpack_require__(921)
        }), 
        __metadata('design:paramtypes', [])
    ], LoaderComponent);
    return LoaderComponent;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/loader.component.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
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
        //console.log("Pagination ngOnInit, this.getPages, offset = ", this.offset, ", limit = ", this.limit);
    };
    PaginationComponent.prototype.ngOnChanges = function () {
        this.getPages(this.offset, this.limit, this.size);
        //console.log("Pagination ngOnChanges, this.getPages, offset = ", this.offset, ", limit = ", this.limit);
    };
    PaginationComponent.prototype.getPages = function (offset, limit, size) {
        var _this = this;
        //console.log("Pagination getPages, offset = ", offset, ", limit = ", limit, ", size = ", size);
        this.currentPage = this.getCurrentPage(offset, limit);
        //console.log("Pagination getPages, this.currentPage = ", this.currentPage);
        this.totalPages = this.getTotalPages(limit, size);
        //console.log("Pagination getPages, this.totalPages = ", this.totalPages);
        this.pages = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].range(-this.range, this.range * 2 + 1)
            .map(function (offset) { return _this.currentPage + offset; })
            .filter(function (page) { return _this.isValidPageNumber(page, _this.totalPages); })
            .toArray();
        //console.log("Pagination getPages, this.pages = ", this.pages);    
    };
    PaginationComponent.prototype.isValidPageNumber = function (page, totalPages) {
        //console.log("Pagination isValidPageNumber, page = ", page, ", totalPages = ", totalPages); 
        //console.log("Pagination isValidPageNumber: ", page > 0 && page <= totalPages);
        return page > 0 && page <= totalPages;
    };
    PaginationComponent.prototype.getCurrentPage = function (offset, limit) {
        //console.log("Pagination getCurrentPage = ", Math.floor(offset / limit) + 1); 
        return Math.floor(offset / limit) + 1;
    };
    PaginationComponent.prototype.getTotalPages = function (limit, size) {
        //console.log("Pagination getTotalPages = ", Math.ceil(Math.max(size, 1) / Math.max(limit, 1)));   
        return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
    };
    PaginationComponent.prototype.selectPage = function (page, event) {
        //console.log("Pagination selectPage, page = ", page, ", event = ", event);  
        this.cancelEvent(event);
        if (this.isValidPageNumber(page, this.totalPages)) {
            this.pageChange.emit((page - 1) * this.limit);
        }
    };
    PaginationComponent.prototype.cancelEvent = function (event) {
        //console.log("Pagination cancelEvent, event = ", event);      
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
            template: __webpack_require__(922),
            styles: [__webpack_require__(905)]
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationComponent);
    return PaginationComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/pagination.component.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchListPaginationComponent; });
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
            template: __webpack_require__(923),
            styles: [__webpack_require__(906)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchListPaginationComponent);
    return SearchListPaginationComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/search-list-pagination.component.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/environment.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/user/git/Willem-vanHeemstraSystems/meetup-angular2-firebase/MU_ANG2_FIR20/apps/ourwebsite1_com-www/client1/src/polyfills.js.map

/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, ".sebm-google-map-container {\n  height: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "md-sidenav-container.m2app-dark {\n  background: black; }\n\n/*\r\n * The /deep/ selector is simply to overcome view encapsulation\r\n * and be able to select the div.md-sidenav-content generated at runtime\r\n*/\nmd-sidenav-container /deep/ .md-sidenav-content {\n  overflow: hidden; }\n\n.app-content {\n  padding: 20px;\n  height: calc(100% - 64px);\n  overflow: auto; }\n\n.app-sidenav {\n  padding: 0px;\n  min-width: 100px; }\n\n.app-toolbar-filler {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.app-toolbar-menu {\n  padding: 0 14px 0 14px;\n  color: white; }\n\n.app-icon-button {\n  box-shadow: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  -webkit-filter: none;\n          filter: none;\n  font-weight: normal;\n  height: auto;\n  line-height: inherit;\n  margin: 0;\n  min-width: 0;\n  padding: 0;\n  text-align: left;\n  text-decoration: none; }\n\n.app-action {\n  display: inline-block;\n  position: fixed;\n  bottom: 20px;\n  right: 20px; }\n\n.mat-nav-list {\n  padding-top: 0px;\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "md-card {\n  margin: 20px; }\n\nmd-checkbox {\n  margin: 10px; }\n\n.app-action {\n  display: inline-block;\n  position: fixed;\n  bottom: 20px;\n  right: 20px; }\n\n.app-spinner {\n  height: 30px;\n  width: 30px;\n  display: inline-block; }\n\n.app-input-icon {\n  font-size: 16px; }\n\n.app-list {\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  width: 350px;\n  margin: 20px; }\n\n.app-progress {\n  margin: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 899:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 911:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"_md\">\r\n  <md-card-header>\r\n    <span class=\"md-title\">{{ title }}</span>\r\n  </md-card-header>\r\n  <!-- this creates a google map on the page with the given lat/lng from -->\r\n  <!-- the component as the initial center of the map: -->\r\n  <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n    <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\"></sebm-google-map-marker>\r\n  </sebm-google-map>\r\n</md-card>"

/***/ }),

/***/ 912:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container [class.m2app-dark]=\"isDarkTheme\">\r\n  <md-sidenav #sidenav mode=\"side\" class=\"app-sidenav\">\r\n    <md-toolbar class=\"sidenav-toolbar md-elevation-z2 md-accent\" color=\"accent\">\r\n      <div class=\"md-toolbar-layout\">\r\n        <md-toolbar-row>\r\n          <button md-button [md-menu-trigger-for]=\"menu\" style=\"font-size:20px;\">\r\n            <i class=\"material-icons\" style=\"margin:0 4px 0 -16px;\">web</i>Client1\r\n          </button>\r\n          <md-menu #menu=\"mdMenu\">\r\n            <button md-menu-item onclick=\"location.href='../client1'\">Client1</button>\r\n            <button md-menu-item onclick=\"location.href='../client2'\">Client2</button>\r\n            <button md-menu-item onclick=\"location.href='../client3'\">Client3</button>\r\n          </md-menu>\r\n        </md-toolbar-row>\r\n      </div>\r\n    </md-toolbar>\r\n    <md-nav-list class=\"sidenav-list sidenav-toplevel\" fxlayout=\"column\" role=\"list\" style=\"display: flex; box-sizing: border-box; flex-direction: column; -webkit-box-orient: vertical; -webkit-box-direction: normal;\">\r\n      <a class=\"sidenav-anchor\" md-list-item=\"\" md-ripple=\"\" role=\"listitem\" routerlinkactive=\"active\" href=\"#/home\">\r\n        <div class=\"md-list-item\">\r\n          <div class=\"md-list-text\"></div>\r\n          <md-icon role=\"img\" class=\"material-icons\" aria-label=\"home\">home</md-icon>\r\n          <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">Home</span>\r\n          <span fxflex=\"\" style=\"flex: 1 1 1e-09px; box-sizing: border-box; -webkit-box-flex: 1;\"></span>\r\n        </div>\r\n        <div class=\"md-ripple-background\"></div>\r\n      </a>\r\n      <a class=\"sidenav-anchor\" md-list-item=\"\" md-ripple=\"\" role=\"listitem\" routerlinkactive=\"active\" href=\"#/about\">\r\n        <div class=\"md-list-item\">\r\n          <div class=\"md-list-text\"></div>\r\n          <md-icon role=\"img\" class=\"material-icons\" aria-label=\"map\">map</md-icon>\r\n          <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">About</span>\r\n          <span fxflex=\"\" style=\"flex: 1 1 1e-09px; box-sizing: border-box; -webkit-box-flex: 1;\"></span>\r\n        </div>\r\n        <div class=\"md-ripple-background\"></div>\r\n      </a>\r\n      <a class=\"sidenav-anchor\" md-list-item=\"\" md-ripple=\"\" role=\"listitem\" routerlinkactive=\"active\" href=\"#/store\">\r\n        <div class=\"md-list-item\">\r\n          <div class=\"md-list-text\"></div>\r\n          <md-icon role=\"img\" class=\"material-icons\" aria-label=\"store\">store</md-icon>\r\n          <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">Store</span>\r\n          <span fxflex=\"\" style=\"flex: 1 1 1e-09px; box-sizing: border-box; -webkit-box-flex: 1;\"></span>\r\n        </div>\r\n        <div class=\"md-ripple-background\"></div>\r\n      </a>\r\n      <a class=\"sidenav-anchor\" md-list-item=\"\" md-ripple=\"\" role=\"listitem\" routerlinkactive=\"active\" href=\"#/products\">\r\n        <div class=\"md-list-item\">\r\n          <div class=\"md-list-text\"></div>\r\n          <md-icon role=\"img\" class=\"material-icons\" aria-label=\"apps\">apps</md-icon>\r\n          <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">Products</span>\r\n          <span fxflex=\"\" style=\"flex: 1 1 1e-09px; box-sizing: border-box; -webkit-box-flex: 1;\"></span>\r\n        </div>\r\n        <div class=\"md-ripple-background\"></div>\r\n      </a>\r\n    </md-nav-list>  \r\n  </md-sidenav>\r\n  <md-toolbar color=\"primary\">\r\n    <button class=\"app-icon-button\" (click)=\"sidenav.toggle()\">\r\n      <i class=\"material-icons app-toolbar-menu\">menu</i>\r\n    </button>\r\n    {{title}}\r\n    <span class=\"app-toolbar-filler\"></span>\r\n    <button md-button (click)=\"isDarkTheme = !isDarkTheme\">TOGGLE THEME</button>\r\n  </md-toolbar>\r\n  <div class=\"app-content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</md-sidenav-container>\r\n<span class=\"app-action\" [class.m2app-dark]=\"isDarkTheme\">\r\n  <button md-fab><md-icon>check circle</md-icon></button>\r\n</span>"

/***/ }),

/***/ 913:
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content\">\r\n\r\n  <md-card>\r\n    <button md-button>FLAT</button>\r\n    <button md-raised-button md-tooltip=\"This is a tooltip!\">RAISED</button>\r\n    <button md-raised-button color=\"primary\">PRIMARY RAISED</button>\r\n    <button md-raised-button color=\"accent\">ACCENT RAISED</button>\r\n  </md-card>\r\n\r\n  <md-card>\r\n    <md-checkbox>Unchecked</md-checkbox>\r\n    <md-checkbox [checked]=\"true\">Checked</md-checkbox>\r\n    <md-checkbox [indeterminate]=\"true\">Indeterminate</md-checkbox>\r\n    <md-checkbox [disabled]=\"true\">Disabled</md-checkbox>\r\n  </md-card>\r\n\r\n  <md-card>\r\n    <md-radio-button name=\"symbol\">Alpha</md-radio-button>\r\n    <md-radio-button name=\"symbol\">Beta</md-radio-button>\r\n    <md-radio-button name=\"symbol\" disabled>Gamma</md-radio-button>\r\n  </md-card>\r\n\r\n  <md-card class=\"app-input-section\">\r\n    <input mdInput placeholder=\"First name\" />\r\n\r\n    <input mdInput #nickname placeholder=\"Nickname\" maxlength=\"50\" />\r\n      <md-hint align=\"end\">\r\n        {{nickname.characterCount}} / 50\r\n      </md-hint>\r\n\r\n    <input mdInput />\r\n      <md-placeholder>\r\n        <i class=\"material-icons app-input-icon\">android</i> Favorite phone\r\n      </md-placeholder>\r\n\r\n    <input mdInput placeholder=\"Motorcycle model\" />\r\n      <span md-prefix>\r\n        <i class=\"material-icons app-input-icon\">motorcycle</i>\r\n        &nbsp;\r\n      </span>\r\n\r\n  </md-card>\r\n\r\n  <md-card>\r\n    <md-list class=\"app-list\">\r\n      <md-list-item *ngFor=\"let food of foods\">\r\n        <h3 md-line>{{food.name}}</h3>\r\n        <p md-line class=\"demo-secondary-text\">{{food.rating}}</p>\r\n      </md-list-item>\r\n    </md-list>\r\n  </md-card>\r\n\r\n  <md-card>\r\n    <md-spinner class=\"app-spinner\"></md-spinner>\r\n    <md-spinner color=\"accent\" class=\"app-spinner\"></md-spinner>\r\n  </md-card>\r\n\r\n  <md-card>\r\n    <label>\r\n      Indeterminate progress-bar\r\n      <md-progress-bar\r\n          class=\"app-progress\"\r\n          mode=\"indeterminate\"\r\n          aria-label=\"Indeterminate progress-bar example\"></md-progress-bar>\r\n    </label>\r\n\r\n    <label>\r\n      Determinate progress bar - {{progress}}%\r\n      <md-progress-bar\r\n          class=\"app-progress\"\r\n          color=\"accent\"\r\n          mode=\"determinate\"\r\n          [value]=\"progress\"\r\n          aria-label=\"Determinate progress-bar example\"></md-progress-bar>\r\n    </label>\r\n  </md-card>\r\n\r\n  <md-card>\r\n    <md-tab-group>\r\n      <md-tab label=\"Earth\">\r\n        <p>EARTH</p>\r\n      </md-tab>\r\n      <md-tab label=\"Fire\">\r\n        <p>FIRE</p>\r\n      </md-tab>\r\n    </md-tab-group>\r\n  </md-card>\r\n\r\n  <md-card>\r\n    <md-icon>build</md-icon>\r\n  </md-card>\r\n\r\n  <md-card>\r\n    <button md-button [md-menu-trigger-for]=\"menu\">\r\n      MENU\r\n    </button>\r\n  </md-card>\r\n\r\n  <md-menu #menu=\"mdMenu\">\r\n    <button md-menu-item>Lemon</button>\r\n    <button md-menu-item>Lime</button>\r\n    <button md-menu-item>Banana</button>\r\n  </md-menu>\r\n\r\n  <md-card>\r\n    <p>Last dialog result: {{lastDialogResult}}</p>\r\n    <button md-raised-button (click)=\"openDialog()\">DIALOG</button>\r\n    <button md-raised-button (click)=\"showSnackbar()\">SNACKBAR</button>\r\n  </md-card>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 914:
/***/ (function(module, exports) {

module.exports = "<!--<div id=\"demo\">-->\r\n<md-icon role=\"img\" class=\"material-icons\" aria-label=\"apps\">apps</md-icon>\r\n<span class=\"display-1\">Product</span><br/>\r\n<app-product-form\r\n\t[product]=\"product\"\r\n\t(saveProduct)=\"saveProduct($event)\"\r\n\t(deleteProduct)=\"deleteProduct($event)\"\r\n\t(cancelProduct)=\"cancelProduct($event)\">\r\n</app-product-form>\r\n<!--</div>-->"

/***/ }),

/***/ 915:
/***/ (function(module, exports) {

module.exports = "<md-icon role=\"img\" class=\"material-icons\" aria-label=\"apps\">apps</md-icon>\r\n<span class=\"display-1\">Product</span><br/>\r\n<div class=\"container\">\r\n  <app-product-details [product]=\"product\"></app-product-details>\r\n  <br/><br/>\r\n  <div class=\"button-container\">\r\n\t<button type=\"button\" class=\"btn btn-raised btn-default\" (click)=\"editProduct(product.id)\">Edit</button>\r\n    <button type=\"button\" class=\"btn btn-raised btn-default\" (click)=\"returnToList()\">Return to List</button>\r\n  </div><br/><br/>\r\n</div>"

/***/ }),

/***/ 916:
/***/ (function(module, exports) {

module.exports = "<div id=\"demo\">\r\n<md-icon role=\"img\" class=\"material-icons\" aria-label=\"apps\">apps</md-icon>\r\n<span class=\"display-1\">Products</span><br/>\r\n<div class=\"center\">\r\n  <app-loader [loading]=\"loading\" [failed]=\"failed\"></app-loader>\r\n</div>\r\n<app-products-list\r\n  [products]=\"products\"\r\n  [count]=\"count\"\r\n  (viewProduct)=\"viewProduct($event)\"\r\n  (editProduct)=\"editProduct($event)\">\r\n</app-products-list>\r\n<app-pagination [offset]=\"offset\" [limit]=\"limit\" [range]=\"range\" [size]=\"count\" (pageChange)=\"onPageChange($event)\"></app-pagination>\r\n</div>"

/***/ }),

/***/ 917:
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div>\r\n\t\tID: {{product?.id}}\r\n\t</div>\r\n\t<div>\r\n\t\tTitle: <h1>{{product?.title}}</h1>\r\n\t</div>\r\n\t<div>\r\n\t\tLink: {{product?.link}}\r\n\t</div> \r\n  <div>\r\n\t\tStatus: {{product?.status}}\r\n\t</div> \r\n</div>"

/***/ }),

/***/ 918:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form novalidate>\r\n\tID: {{product?.id}}\r\n    <h1>{{product.title}}</h1>\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" [(ngModel)]=\"product.title\"  name=\"productTitle\" required=\"required\" #productTitle=\"ngModel\"/>\r\n      <label for=\"input\" class=\"control-label\">Title</label><i class=\"bar\"></i>\r\n\t\t<span *ngIf=\"!productTitle.valid && (productTitle.touched || !!productTitle.id)\">\r\n\t\t\tPlease enter a Product title.\r\n\t\t</span>\t  \r\n    </div>\r\n  </form>\r\n  <div class=\"button-container\">\r\n\t<button type=\"button\" class=\"btn btn-raised btn-default\" (click)=\"saveProductButton(product)\">Save</button>\r\n\t<button type=\"button\" class=\"btn btn-raised btn-default\" (click)=\"cancelProductButton(product)\">Cancel</button>\r\n\t<button type=\"button\" class=\"btn btn-raised btn-default\" (click)=\"deleteProductButton(product)\" *ngIf=\"!!product.id\">Delete</button>\r\n  </div><br/><br/>\r\n</div>"

/***/ }),

/***/ 919:
/***/ (function(module, exports) {

module.exports = "  <form class=\"form-horizontal\" role=\"form\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" #listFilter (keyup)=\"0\" class=\"form-control\" id=\"searchInput1\" required>\r\n      <span class=\"form-highlight\"></span>\r\n      <span class=\"form-bar\"></span>\r\n      <label class=\"search-label\" for=\"searchInput1\">Search</label>\r\n    </div>\r\n  </form>      \r\n\r\n  <p>Results: {{ count }}</p>\r\n\r\n  <!-- Responsive table starts here -->\r\n  <!-- For correct display on small screens you must add 'data-title' to each 'td' in your table -->\r\n  <div class=\"table-responsive-vertical shadow-z-1\">\r\n\r\n  <!-- Table starts here -->\r\n  <table id=\"table\" class=\"table table-hover table-mc-light-blue\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>Title</th>\r\n          <th>Link</th>\r\n          <th>Status</th>\r\n          <th>View</th>\r\n          <th>Edit</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let product of products | filter:listFilter.value\">\r\n          <td data-title=\"ID\">{{ product.id }}</td>\r\n          <td data-title=\"Title\">{{ product.title }}</td>\r\n          <td data-title=\"Link\">\r\n            <a href=\"{{ product.link }}\" target=\"_blank\">IMDB</a>\r\n          </td>\r\n          <td data-title=\"Status\">{{ product.status }}</td>\r\n          <td data-title=\"View\">\r\n\t\t\t\t    <button type=\"button\" class=\"btn btn-raised btn-default\" (click)=\"viewProductButton(product.id)\">View</button>\r\n          </td>\r\n          <td data-title=\"Edit\">\r\n\t\t\t\t    <button type=\"button\" class=\"btn btn-raised btn-default\" (click)=\"editProductButton(product.id)\">Edit</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n"

/***/ }),

/***/ 920:
/***/ (function(module, exports) {

module.exports = "<div id=\"demo\">\r\n  <md-icon role=\"img\" class=\"material-icons\" aria-label=\"store\">store</md-icon>\r\n  <span class=\"display-1\">Store</span><br/>\r\n  <small><a href=\"http://codepen.io/zavoloklom/pen/IGkDz\">Other Material Design works</a></small>\r\n\r\n  <form class=\"form-horizontal\" role=\"form\" (submit)=\"search(term.value)\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" #term (keyup)=\"search(term.value)\" [value]=\"terms\" class=\"form-control\" id=\"searchInput1\" required>\r\n      <span class=\"form-highlight\"></span>\r\n      <span class=\"form-bar\"></span>\r\n      <label class=\"search-label\" for=\"searchInput1\">Search</label>\r\n    </div>\r\n  </form>      \r\n\r\n  <p>Results: {{ total$ | async }}</p>\r\n\r\n  <!-- Responsive table starts here -->\r\n  <!-- For correct display on small screens you must add 'data-title' to each 'td' in your table -->\r\n  <div class=\"table-responsive-vertical shadow-z-1\">\r\n\r\n  <!-- Table starts here -->\r\n  <table id=\"table\" class=\"table table-hover table-mc-light-blue\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>Title</th>\r\n          <th>Link</th>\r\n          <th>Status</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n<!--        \r\n        <tr>\r\n          <td data-title=\"ID\">1</td>\r\n          <td data-title=\"Title\">Material Design Color Palette</td>\r\n          <td data-title=\"Link\">\r\n            <a href=\"https://github.com/zavoloklom/material-design-color-palette\" target=\"_blank\">GitHub</a>\r\n          </td>\r\n          <td data-title=\"Status\">Completed</td>\r\n        </tr>\r\n        <tr>\r\n          <td data-title=\"ID\">2</td>\r\n          <td data-title=\"Title\">Material Design Iconic Font</td>\r\n          <td data-title=\"Link\">\r\n            <a href=\"http://codepen.io/zavoloklom/pen/uqCsB\" target=\"_blank\">Codepen</a>\r\n            <a href=\"https://github.com/zavoloklom/material-design-iconic-font\" target=\"_blank\">GitHub</a>\r\n          </td>\r\n          <td data-title=\"Status\">Completed</td>\r\n        </tr>\r\n        <tr>\r\n          <td data-title=\"ID\">3</td>\r\n          <td data-title=\"Title\">Material Design Hierarchical Display</td>\r\n          <td data-title=\"Link\">\r\n            <a href=\"http://codepen.io/zavoloklom/pen/eNaEBM\" target=\"_blank\">Codepen</a>\r\n            <a href=\"https://github.com/zavoloklom/material-design-hierarchical-display\" target=\"_blank\">GitHub</a>\r\n          </td>\r\n          <td data-title=\"Status\">Completed</td>\r\n        </tr>\r\n        <tr>\r\n          <td data-title=\"ID\">4</td>\r\n          <td data-title=\"Title\">Material Design Sidebar</td>\r\n          <td data-title=\"Link\"><a href=\"http://codepen.io/zavoloklom/pen/dIgco\" target=\"_blank\">Codepen</a></td>\r\n          <td data-title=\"Status\">Completed</td>\r\n        </tr>\r\n        <tr>\r\n          <td data-title=\"ID\">5</td>\r\n          <td data-title=\"Title\">Material Design Tiles</td>\r\n          <td data-title=\"Link\">\r\n            <a href=\"http://codepen.io/zavoloklom/pen/wtApI\" target=\"_blank\">Codepen</a>\r\n          </td>\r\n          <td data-title=\"Status\">Completed</td>\r\n        </tr>\r\n        <tr>\r\n          <td data-title=\"ID\">6</td>\r\n          <td data-title=\"Title\">Material Design Typography</td>\r\n          <td data-title=\"Link\">\r\n            <a href=\"http://codepen.io/zavoloklom/pen/IkaFL\" target=\"_blank\">Codepen</a>\r\n            <a href=\"https://github.com/zavoloklom/material-design-typography\" target=\"_blank\">GitHub</a>\r\n          </td>\r\n          <td data-title=\"Status\">Completed</td>\r\n        </tr>\r\n        <tr>\r\n          <td data-title=\"ID\">7</td>\r\n          <td data-title=\"Title\">Material Design Buttons</td>\r\n          <td data-title=\"Link\">\r\n            <a href=\"http://codepen.io/zavoloklom/pen/Gubja\" target=\"_blank\">Codepen</a>\r\n          </td>\r\n          <td data-title=\"Status\">In progress</td>\r\n        </tr>\r\n        <tr>\r\n          <td data-title=\"ID\">8</td>\r\n          <td data-title=\"Title\">Material Design Form Elements</td>\r\n          <td data-title=\"Link\">\r\n            <a href=\"http://codepen.io/zavoloklom/pen/yaozl\" target=\"_blank\">Codepen</a>\r\n          </td>\r\n          <td data-title=\"Status\">In progress</td>\r\n        </tr>\r\n        <tr>\r\n          <td data-title=\"ID\">9</td>\r\n          <td data-title=\"Title\">Material Design Email Template</td>\r\n          <td data-title=\"Link\">\r\n            <a href=\"http://codepen.io/zavoloklom/pen/qEVqzx\" target=\"_blank\">Codepen</a>\r\n          </td>\r\n          <td data-title=\"Status\">Completed</td>\r\n        </tr>\r\n        <tr>\r\n          <td data-title=\"ID\">10</td>\r\n          <td data-title=\"Title\">Material Design Animation Timing (old one)</td>\r\n          <td data-title=\"Link\">\r\n            <a href=\"http://codepen.io/zavoloklom/pen/Jbrho\" target=\"_blank\">Codepen</a>\r\n          </td>\r\n          <td data-title=\"Status\">Completed</td>\r\n        </tr>\r\n-->\r\n        <tr *ngFor=\"let item of items$ | async\">\r\n          <td data-title=\"ID\">{{ item.id }}</td>\r\n          <td data-title=\"Title\">{{ item.title }}</td>\r\n          <td data-title=\"Link\">\r\n            <a href=\"http://www.imdb.com\" target=\"_blank\">IMDB</a>\r\n          </td>\r\n          <td data-title=\"Status\">Completed</td>\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <app-search-list-pagination [total]=\"total$ | async\" [page]=\"page\" (goTo)=\"goToPage($event)\"></app-search-list-pagination>\r\n</div>\r\n<!---- END --->\r\n"

/***/ }),

/***/ 921:
/***/ (function(module, exports) {

module.exports = "<div class=\"preloader-wrapper big active\" *ngIf=\"loading\">\r\n  <md-progress-bar _ngcontent-ece-43=\"\" aria-label=\"Indeterminate progress-bar example\" aria-valuemax=\"100\" aria-valuemin=\"0\" class=\"app-progress mat-primary mat-progress-bar\" mode=\"indeterminate\" role=\"progressbar\" ng-reflect-mode=\"indeterminate\" aria-valuenow=\"0\">\r\n    <div class=\"mat-progress-bar-background mat-progress-bar-element\"></div>\r\n    <div class=\"mat-progress-bar-buffer mat-progress-bar-element\"></div>\r\n    <div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" ng-reflect-ng-style=\"[object Object]\" style=\"transform: scaleX(0);\"></div>\r\n    <div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div>\r\n  </md-progress-bar>\r\n</div>\r\n<div class=\"center grey-text text-lighten-1\" *ngIf=\"failed\">\r\n  <i class=\"large material-icons\">report_problem</i>\r\n  <p>Can't load info</p>\r\n</div>"

/***/ }),

/***/ 922:
/***/ (function(module, exports) {

module.exports = "<!--<ul class=\"pagination\">\r\n  <li (click)=\"selectPage(1, $event)\" [class.disabled]=\"currentPage == 1\">\r\n    <a href=\"\" title=\"Go to first page\">&laquo;</a>\r\n  </li>\r\n  <li (click)=\"selectPage(currentPage - 1, $event)\" [class.disabled]=\"currentPage == 1\">\r\n    <a href=\"\" title=\"Go to previous page\">&lsaquo;</a>\r\n  </li>\r\n  <li class=\"disabled\" (click)=\"cancelEvent($event)\" *ngIf=\"(currentPage - range) > 1\">\r\n    <a href=\"\">...</a>\r\n  </li>\r\n  <li *ngFor=\"let page of pages | async\" [class.active]=\"page == currentPage\">\r\n    <a href=\"\" (click)=\"selectPage(page, $event)\">\r\n      {{page}}\r\n    </a>\r\n  </li>\r\n  <li class=\"disabled\" (click)=\"cancelEvent($event)\" *ngIf=\"(currentPage + range) < totalPages\">\r\n    <a href=\"\">...</a>\r\n  </li>\r\n  <li (click)=\"selectPage(currentPage + 1, $event)\" [class.disabled]=\"currentPage == totalPages\">\r\n    <a href=\"\" title=\"Go to next page\">&rsaquo;</a>\r\n  </li>\r\n  <li (click)=\"selectPage(totalPages, $event)\" [class.disabled]=\"currentPage == totalPages\">\r\n    <a href=\"\" title=\"Go to last page\">&raquo;</a>\r\n  </li>\r\n</ul>-->\r\n\r\n<div class=\"btn-toolbar\" role=\"toolbar\">\r\n  <div class=\"btn-group\">\r\n    <button type=\"button\" (click)=\"selectPage(1, $event)\" [class.disabled]=\"currentPage == 1\" class=\"btn btn-raised ripple-effect btn-default\" title=\"Go to first page\">&laquo;</button>\r\n    <button type=\"button\" (click)=\"selectPage(currentPage - 1, $event)\" [class.disabled]=\"currentPage == 1\" class=\"btn btn-raised ripple-effect btn-default\" title=\"Go to previous page\">&lsaquo;</button>\r\n    <button type=\"button\" (click)=\"cancelEvent($event)\" [class.disabled]=\"currentPage == 1\" *ngIf=\"(currentPage - range) > 1\" class=\"disabled btn btn-raised ripple-effect btn-default\" title=\"Go to previous page\">...</button>\r\n    <span *ngFor=\"let page of pages | async\" [class.active]=\"page == currentPage\">\r\n      <button type=\"button\" (click)=\"selectPage(page, $event)\" class=\"btn btn-raised ripple-effect btn-default\" title=\"\">{{page}}</button>\r\n    </span>\r\n    <button type=\"button\" (click)=\"cancelEvent($event)\" *ngIf=\"(currentPage + range) < totalPages\" class=\"btn btn-raised ripple-effect btn-default\" title=\"\">...</button>\r\n    <button type=\"button\" (click)=\"selectPage(currentPage + 1, $event)\" [class.disabled]=\"currentPage == totalPages\" class=\"btn btn-raised ripple-effect btn-default\" title=\"Go to next page\">&rsaquo;</button>\r\n    <button type=\"button\" (click)=\"selectPage(totalPages, $event)\" [class.disabled]=\"currentPage == totalPages\" class=\"btn btn-raised ripple-effect btn-default\" title=\"Go to last page\">&raquo;</button>\r\n  </div>\r\n</div>\r\n\r\n<!--\r\n<div class=\"btn-toolbar\" role=\"toolbar\">\r\n  <div *ngIf=\"totalPages() > 1\" class=\"btn-group\">\r\n    <button type=\"button\" *ngIf=\"page != 1\" (click)=\"pageClicked(prevPage())\" class=\"btn btn-raised ripple-effect btn-default\">«</button>\r\n    <button type=\"button\" *ngFor=\"let p of pagesRange()\" (click)=\"pageClicked(p)\" class=\"btn btn-raised ripple-effect btn-default\">{{p}}</button>\r\n    <button type=\"button\" *ngIf=\"totalPages() > page\" (click)=\"pageClicked(nextPage())\" class=\"btn btn-raised ripple-effect btn-default\">»</button>\r\n  </div>\r\n</div>\r\n-->"

/***/ }),

/***/ 923:
/***/ (function(module, exports) {

module.exports = "<!--<ul *ngIf=\"totalPages() > 1\" class=\"pagination pagination-sm no-margin pull-right\">\r\n  <li *ngIf=\"page != 1\"><a (click)=\"pageClicked(prevPage())\">«</a></li>\r\n  <li *ngFor=\"let p of pagesRange()\"><a (click)=\"pageClicked(p)\">{{p}}</a></li>\r\n  <li *ngIf=\"totalPages() > page\"><a (click)=\"pageClicked(nextPage())\">»</a></li>\r\n</ul>-->\r\n\r\n<div class=\"btn-toolbar\" role=\"toolbar\">\r\n  <div *ngIf=\"totalPages() > 1\" class=\"btn-group\">\r\n    <button type=\"button\" *ngIf=\"page != 1\" (click)=\"pageClicked(prevPage())\" class=\"btn btn-raised ripple-effect btn-default\">«</button>\r\n    <button type=\"button\" *ngFor=\"let p of pagesRange()\" (click)=\"pageClicked(p)\" class=\"btn btn-raised ripple-effect btn-default\">{{p}}</button>\r\n    <button type=\"button\" *ngIf=\"totalPages() > page\" (click)=\"pageClicked(nextPage())\" class=\"btn btn-raised ripple-effect btn-default\">»</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 924:
/***/ (function(module, exports) {

module.exports = "<app-search-list></app-search-list>"

/***/ })

},[1178]);
//# sourceMappingURL=main.bundle.js.map