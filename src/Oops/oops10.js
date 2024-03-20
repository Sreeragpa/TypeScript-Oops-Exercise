// GENERIC CLASSES (Make reusable)
// Generics provide variables to types. 
// A common example is an array. An array without generics could contain anything. 
// An array with generics can describe the values that the array contains.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a, _b;
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    return KeyValuePair;
}());
var pair = new KeyValuePair('1', "heh");
var pair2 = new KeyValuePair(1, "heh");
// -------------------------------------------------------------------------------------------------------
// We can add two generics by <T,V>
// GENERIC FUNCTIONS
function wrapInArray(value) {
    return [value];
}
var wrappeditem = wrapInArray(1);
var wrappeditem2 = wrapInArray("apple");
function fetch(url) {
    return { data: null, error: null };
}
var userResult = fetch("user123");
var productResult = fetch("prd");
(_a = userResult.data) === null || _a === void 0 ? void 0 : _a.username;
(_b = productResult.data) === null || _b === void 0 ? void 0 : _b.title;
// GENERIC CONSTRAINTS
function echo(value) {
    return value;
}
echo("hii");
echo(34);
// echo(true)
function echo2(value) {
    return value;
}
echo2({ name: "sreerag" });
function echo3(value) {
    return value;
}
echo3({ username: "sreerag" });
var Store = /** @class */ (function () {
    function Store() {
        this.objects = [];
    }
    Store.prototype.add = function (obj) {
        this.objects.push(obj);
    };
    return Store;
}());
// Pass on the generic type parameter
var CompressibleStore = /** @class */ (function (_super) {
    __extends(CompressibleStore, _super);
    function CompressibleStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompressibleStore.prototype.compress = function () { };
    return CompressibleStore;
}(Store));
var store = new CompressibleStore();
// Restricting generic type parameter 
// class SearchableStore<T extends {name: string}> extends Store<T>{
//     find(name: string): T | undefined{
//         return this.objects.find(obj  => obj.name === name)
//     }
// }
// Fixing the generic type parameter
var ProductStore = /** @class */ (function (_super) {
    __extends(ProductStore, _super);
    function ProductStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductStore.prototype.filterByCategory = function (category) {
        return [];
    };
    return ProductStore;
}(Store));
