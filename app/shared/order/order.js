"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var payment_1 = require("../payment/payment");
var Order = (function () {
    function Order(orders, payment) {
        this.orders = orders;
        this.payment = payment;
    }
    Order.prototype.getPayment = function () {
        return this.payment;
    };
    Order.prototype.setPayment = function (payment) {
        this.payment = payment;
    };
    Order.prototype.getOrders = function () {
        return this.orders;
    };
    Order.prototype.addOrder = function (order) {
        this.orders.push(order);
    };
    Order.prototype.setOrders = function (orders) {
        this.orders = orders;
    };
    Order = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [Array, payment_1.Payment])
    ], Order);
    return Order;
}());
exports.Order = Order;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw4Q0FBNkM7QUFHN0M7SUFLSSxlQUFZLE1BQW9CLEVBQUUsT0FBaUI7UUFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVELDBCQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQsMEJBQVUsR0FBVixVQUFXLE9BQWdCO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRCx5QkFBUyxHQUFUO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELHdCQUFRLEdBQVIsVUFBUyxLQUFnQjtRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQseUJBQVMsR0FBVCxVQUFVLE1BQW1CO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUE1QlEsS0FBSztRQURqQixpQkFBVSxFQUFFO2dEQU1tQyxpQkFBTztPQUwxQyxLQUFLLENBOEJqQjtJQUFELFlBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT3JkZXJJdGVtIH0gZnJvbSBcIi4uL29yZGVySXRlbS9vcmRlckl0ZW1cIjtcbmltcG9ydCB7IFBheW1lbnQgfSBmcm9tIFwiLi4vcGF5bWVudC9wYXltZW50XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcmRlciB7XG5cbiAgICBwcml2YXRlIG9yZGVyczogT3JkZXJJdGVtW107XG4gICAgcHJpdmF0ZSBwYXltZW50OiBQYXltZW50O1xuXG4gICAgY29uc3RydWN0b3Iob3JkZXJzPzogT3JkZXJJdGVtW10sIHBheW1lbnQ/OiBQYXltZW50KSB7XG4gICAgICAgIHRoaXMub3JkZXJzID0gb3JkZXJzO1xuICAgICAgICB0aGlzLnBheW1lbnQgPSBwYXltZW50O1xuICAgIH1cblxuICAgIGdldFBheW1lbnQoKTogUGF5bWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLnBheW1lbnQ7XG4gICAgfVxuXG4gICAgc2V0UGF5bWVudChwYXltZW50OiBQYXltZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMucGF5bWVudCA9IHBheW1lbnQ7XG4gICAgfVxuXG4gICAgZ2V0T3JkZXJzKCk6IE9yZGVySXRlbVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkZXJzO1xuICAgIH1cblxuICAgIGFkZE9yZGVyKG9yZGVyOiBPcmRlckl0ZW0pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcmRlcnMucHVzaChvcmRlcik7XG4gICAgfVxuXG4gICAgc2V0T3JkZXJzKG9yZGVyczogT3JkZXJJdGVtW10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcmRlcnMgPSBvcmRlcnM7XG4gICAgfVxuXG59Il19