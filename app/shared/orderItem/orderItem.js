"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OrderItem = (function () {
    function OrderItem(menuItemLookup, quantity, orderLookup) {
        this.menuItemLookup = menuItemLookup;
        this.quantity = quantity;
        this.orderLookup = orderLookup;
    }
    /**
     * Returns the lookup ID
     */
    OrderItem.prototype.getMenuItemLookup = function () {
        return this.menuItemLookup;
    };
    /**
     * Sets the lookup ID
     * @param lookup
     */
    OrderItem.prototype.setMenuItemLookup = function (lookup) {
        this.menuItemLookup = lookup;
    };
    /**
     * Returns the quantity
     */
    OrderItem.prototype.getQuantity = function () {
        return this.quantity;
    };
    /**
     * Sets the quantity
     * @param quantity
     */
    OrderItem.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
    };
    /**
     * Returns the order lookup path
     */
    OrderItem.prototype.getOrderLookup = function () {
        return this.orderLookup;
    };
    /**
     * Sets the lookup path
     * @param orderLookup
     */
    OrderItem.prototype.setOrderLookup = function (orderLookup) {
        this.orderLookup = orderLookup;
    };
    OrderItem = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [String, Number, String])
    ], OrderItem);
    return OrderItem;
}());
exports.OrderItem = OrderItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJJdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3JkZXJJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDO0lBTUksbUJBQVksY0FBc0IsRUFBRSxRQUFnQixFQUFFLFdBQW1CO1FBQ3JFLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7T0FFRztJQUNILHFDQUFpQixHQUFqQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUM7SUFFRDs7O09BR0c7SUFDSCxxQ0FBaUIsR0FBakIsVUFBa0IsTUFBYztRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCwrQkFBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7T0FHRztJQUNILCtCQUFXLEdBQVgsVUFBWSxRQUFnQjtRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxrQ0FBYyxHQUFkO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGtDQUFjLEdBQWQsVUFBZSxXQUFtQjtRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBdkRRLFNBQVM7UUFEckIsaUJBQVUsRUFBRTs7T0FDQSxTQUFTLENBMERyQjtJQUFELGdCQUFDO0NBQUEsQUExREQsSUEwREM7QUExRFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9yZGVySXRlbXtcblxuICAgIHByaXZhdGUgbWVudUl0ZW1Mb29rdXA6IHN0cmluZztcbiAgICBwcml2YXRlIHF1YW50aXR5OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBvcmRlckxvb2t1cDogc3RyaW5nO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKG1lbnVJdGVtTG9va3VwOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIsIG9yZGVyTG9va3VwOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLm1lbnVJdGVtTG9va3VwID0gbWVudUl0ZW1Mb29rdXA7XG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSBxdWFudGl0eTtcbiAgICAgICAgdGhpcy5vcmRlckxvb2t1cCA9IG9yZGVyTG9va3VwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxvb2t1cCBJRFxuICAgICAqL1xuICAgIGdldE1lbnVJdGVtTG9va3VwKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lbnVJdGVtTG9va3VwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxvb2t1cCBJRFxuICAgICAqIEBwYXJhbSBsb29rdXAgXG4gICAgICovXG4gICAgc2V0TWVudUl0ZW1Mb29rdXAobG9va3VwOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tZW51SXRlbUxvb2t1cCA9IGxvb2t1cDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBxdWFudGl0eVxuICAgICAqL1xuICAgIGdldFF1YW50aXR5KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1YW50aXR5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHF1YW50aXR5XG4gICAgICogQHBhcmFtIHF1YW50aXR5IFxuICAgICAqL1xuICAgIHNldFF1YW50aXR5KHF1YW50aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5xdWFudGl0eSA9IHF1YW50aXR5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG9yZGVyIGxvb2t1cCBwYXRoXG4gICAgICovXG4gICAgZ2V0T3JkZXJMb29rdXAoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkZXJMb29rdXA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbG9va3VwIHBhdGhcbiAgICAgKiBAcGFyYW0gb3JkZXJMb29rdXAgXG4gICAgICovXG4gICAgc2V0T3JkZXJMb29rdXAob3JkZXJMb29rdXA6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLm9yZGVyTG9va3VwID0gb3JkZXJMb29rdXA7XG4gICAgfVxuXG5cbn0iXX0=