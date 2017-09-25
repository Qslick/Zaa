"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
core_1.Injectable();
var Payment = (function () {
    function Payment(id, customerLookup, type, cardNumber) {
        this.id = id;
        this.customerLookup = customerLookup;
        this.type = type;
        this.cardNumber = cardNumber;
    }
    /**
     * Returns id of the payment
     */
    Payment.prototype.getId = function () {
        return this.id;
    };
    /**
     * Sets the id of the payment
     * @param id
     */
    Payment.prototype.setId = function (id) {
        this.id = id;
    };
    /**
     * Returns Customer id
     */
    Payment.prototype.getCustomerLookup = function () {
        return this.customerLookup;
    };
    /**
     * Sets the id of the customer
     * @param customerLookup
     */
    Payment.prototype.setCustomerLookup = function (customerLookup) {
        this.customerLookup = customerLookup;
    };
    /**
     * Returns card type ie. Visa
     */
    Payment.prototype.getType = function () {
        return this.type;
    };
    /**
     * Sets the card type ie. Visa
     * @param type
     */
    Payment.prototype.setType = function (type) {
        this.type = type;
    };
    /**
     * Returns the card number
     */
    Payment.prototype.getCardNumber = function () {
        return this.cardNumber;
    };
    /**
     * Sets the cardNumber
     * @param cardNumber
     */
    Payment.prototype.setCardNumber = function (cardNumber) {
        this.cardNumber = cardNumber;
    };
    return Payment;
}());
exports.Payment = Payment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBheW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsaUJBQVUsRUFBRSxDQUFBO0FBQ1o7SUFPSSxpQkFBWSxFQUFVLEVBQUUsY0FBc0IsRUFBRSxJQUFZLEVBQUUsVUFBa0I7UUFDNUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUUsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCx1QkFBSyxHQUFMO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7T0FHRztJQUNILHVCQUFLLEdBQUwsVUFBTSxFQUFVO1FBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsbUNBQWlCLEdBQWpCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILG1DQUFpQixHQUFqQixVQUFrQixjQUFzQjtRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCx5QkFBTyxHQUFQO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7T0FHRztJQUNILHlCQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNILCtCQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsK0JBQWEsR0FBYixVQUFjLFVBQWtCO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFJTCxjQUFDO0FBQUQsQ0FBQyxBQTVFRCxJQTRFQztBQTVFWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5JbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYXltZW50e1xuXG4gICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xuICAgIHByaXZhdGUgY3VzdG9tZXJMb29rdXA6IHN0cmluZztcbiAgICBwcml2YXRlIHR5cGU6IHN0cmluZztcbiAgICBwcml2YXRlIGNhcmROdW1iZXI6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIGN1c3RvbWVyTG9va3VwOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgY2FyZE51bWJlcjogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmN1c3RvbWVyTG9va3VwID0gY3VzdG9tZXJMb29rdXA7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuIGNhcmROdW1iZXIgPSBjYXJkTnVtYmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgaWQgb2YgdGhlIHBheW1lbnRcbiAgICAgKi9cbiAgICBnZXRJZCgpOiBzdHJpbmd7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGlkIG9mIHRoZSBwYXltZW50XG4gICAgICogQHBhcmFtIGlkIFxuICAgICAqL1xuICAgIHNldElkKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgQ3VzdG9tZXIgaWRcbiAgICAgKi9cbiAgICBnZXRDdXN0b21lckxvb2t1cCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXN0b21lckxvb2t1cDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBpZCBvZiB0aGUgY3VzdG9tZXJcbiAgICAgKiBAcGFyYW0gY3VzdG9tZXJMb29rdXAgXG4gICAgICovXG4gICAgc2V0Q3VzdG9tZXJMb29rdXAoY3VzdG9tZXJMb29rdXA6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmN1c3RvbWVyTG9va3VwID0gY3VzdG9tZXJMb29rdXA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBjYXJkIHR5cGUgaWUuIFZpc2FcbiAgICAgKi9cbiAgICBnZXRUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY2FyZCB0eXBlIGllLiBWaXNhXG4gICAgICogQHBhcmFtIHR5cGUgXG4gICAgICovXG4gICAgc2V0VHlwZSh0eXBlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjYXJkIG51bWJlclxuICAgICAqL1xuICAgIGdldENhcmROdW1iZXIoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZE51bWJlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjYXJkTnVtYmVyXG4gICAgICogQHBhcmFtIGNhcmROdW1iZXIgXG4gICAgICovXG4gICAgc2V0Q2FyZE51bWJlcihjYXJkTnVtYmVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYXJkTnVtYmVyID0gY2FyZE51bWJlcjtcbiAgICB9XG5cblxuXG59Il19