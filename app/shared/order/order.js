"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var paymentMethod_1 = require("../paymentMethod/paymentMethod");
var Order = (function () {
    function Order(orders, payment) {
        this.orders = orders;
        this.payment = payment;
    }
    Order.prototype.getPaymentMethod = function () {
        return this.payment;
    };
    Order = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [Array, paymentMethod_1.PaymentMethod])
    ], Order);
    return Order;
}());
exports.Order = Order;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyxnRUFBK0Q7QUFHL0Q7SUFLSSxlQUFZLE1BQW9CLEVBQUUsT0FBdUI7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVELGdDQUFnQixHQUFoQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFaUSxLQUFLO1FBRGpCLGlCQUFVLEVBQUU7Z0RBTW1DLDZCQUFhO09BTGhELEtBQUssQ0FjakI7SUFBRCxZQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9yZGVySXRlbSB9IGZyb20gXCIuLi9vcmRlckl0ZW0vb3JkZXJJdGVtXCI7XG5pbXBvcnQgeyBQYXltZW50TWV0aG9kIH0gZnJvbSBcIi4uL3BheW1lbnRNZXRob2QvcGF5bWVudE1ldGhvZFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXIge1xuXG4gICAgcHJpdmF0ZSBvcmRlcnM6IE9yZGVySXRlbVtdO1xuICAgIHByaXZhdGUgcGF5bWVudDogUGF5bWVudE1ldGhvZDtcblxuICAgIGNvbnN0cnVjdG9yKG9yZGVycz86IE9yZGVySXRlbVtdLCBwYXltZW50PzogUGF5bWVudE1ldGhvZCkge1xuICAgICAgICB0aGlzLm9yZGVycyA9IG9yZGVycztcbiAgICAgICAgdGhpcy5wYXltZW50ID0gcGF5bWVudDtcbiAgICB9XG5cbiAgICBnZXRQYXltZW50TWV0aG9kKCk6IFBheW1lbnRNZXRob2Qge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXltZW50O1xuICAgIH1cblxufSJdfQ==