"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
core_1.Injectable();
var PaymentMethod = (function () {
    function PaymentMethod(id, customerLookup, type, cardNumber) {
        this.id = id;
        this.customerLookup = customerLookup;
        this.type = type;
        this.cardNumber = cardNumber;
    }
    PaymentMethod.prototype.getId = function () {
        return this.id;
    };
    PaymentMethod.prototype.setId = function (id) {
        this.id = id;
    };
    PaymentMethod.prototype.getCustomerLookup = function () {
        return this.customerLookup;
    };
    PaymentMethod.prototype.setCustomerLookup = function (customerLookup) {
        this.customerLookup = customerLookup;
    };
    PaymentMethod.prototype.getType = function () {
        return this.type;
    };
    PaymentMethod.prototype.setType = function (type) {
        this.type = type;
    };
    PaymentMethod.prototype.getCardNumber = function () {
        return this.cardNumber;
    };
    PaymentMethod.prototype.setCardNumber = function (cardNumber) {
        this.cardNumber = cardNumber;
    };
    return PaymentMethod;
}());
exports.PaymentMethod = PaymentMethod;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudE1ldGhvZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBheW1lbnRNZXRob2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsaUJBQVUsRUFBRSxDQUFBO0FBQ1o7SUFPSSx1QkFBWSxFQUFVLEVBQUUsY0FBc0IsRUFBRSxJQUFZLEVBQUUsVUFBa0I7UUFDNUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUUsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCw2QkFBSyxHQUFMLFVBQU0sRUFBVTtRQUNaLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCx5Q0FBaUIsR0FBakI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDO0lBRUQseUNBQWlCLEdBQWpCLFVBQWtCLGNBQXNCO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3pDLENBQUM7SUFFRCwrQkFBTyxHQUFQO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELCtCQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxxQ0FBYSxHQUFiO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVELHFDQUFhLEdBQWIsVUFBYyxVQUFrQjtRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBSUwsb0JBQUM7QUFBRCxDQUFDLEFBaERELElBZ0RDO0FBaERZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBheW1lbnRNZXRob2R7XG5cbiAgICBwcml2YXRlIGlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjdXN0b21lckxvb2t1cDogc3RyaW5nO1xuICAgIHByaXZhdGUgdHlwZTogc3RyaW5nO1xuICAgIHByaXZhdGUgY2FyZE51bWJlcjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgY3VzdG9tZXJMb29rdXA6IHN0cmluZywgdHlwZTogc3RyaW5nLCBjYXJkTnVtYmVyOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuY3VzdG9tZXJMb29rdXAgPSBjdXN0b21lckxvb2t1cDtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy4gY2FyZE51bWJlciA9IGNhcmROdW1iZXI7XG4gICAgfVxuXG4gICAgZ2V0SWQoKTogc3RyaW5ne1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9XG5cbiAgICBzZXRJZChpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG5cbiAgICBnZXRDdXN0b21lckxvb2t1cCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXN0b21lckxvb2t1cDtcbiAgICB9XG5cbiAgICBzZXRDdXN0b21lckxvb2t1cChjdXN0b21lckxvb2t1cDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VzdG9tZXJMb29rdXAgPSBjdXN0b21lckxvb2t1cDtcbiAgICB9XG5cbiAgICBnZXRUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XG4gICAgfVxuXG4gICAgc2V0VHlwZSh0eXBlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB9XG5cbiAgICBnZXRDYXJkTnVtYmVyKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcmROdW1iZXI7XG4gICAgfVxuXG4gICAgc2V0Q2FyZE51bWJlcihjYXJkTnVtYmVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYXJkTnVtYmVyID0gY2FyZE51bWJlcjtcbiAgICB9XG5cblxuXG59Il19