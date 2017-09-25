"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Customer = (function () {
    function Customer(id, firstName, lastName, email, phoneNumber, password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }
    /**
     * Returns first name the customer
     */
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    /**
     * Returns the last name of the customer
     */
    Customer.prototype.getLastName = function () {
        return this.email;
    };
    /**
     * Sets the name of the Customer
     * @param firstName customer's first name
     * @param lastName customer's last name
     */
    Customer.prototype.setName = function (firstName, lastName) {
        this.firstName = firstName;
        if (lastName != null) {
            this.lastName = lastName;
        }
    };
    /**
     * Returns the email of the user
     */
    Customer.prototype.getEmail = function () {
        return this.email;
    };
    /**
     * Updates the customer's email
     * @param email customer's email
     */
    Customer.prototype.setEmail = function (email) {
        this.email = email;
    };
    /**
     * Returns customers phone number
     */
    Customer.prototype.getPhone = function () {
        return this.phoneNumber;
    };
    /**
     * Updates the customers phone number
     * @param number customer's phone number
     */
    Customer.prototype.setPhone = function (number) {
        this.phoneNumber = number;
    };
    /**
     * Updates the users password
     * @param pass customer's password
     */
    Customer.prototype.updatePassword = function (pass) {
        this.password = pass;
    };
    /**
     * Returns true if the attempted password matches the exsisting one
     * @param passAttemp customer's password attempt
     */
    Customer.prototype.checkPassword = function (passAttemp) {
        if (this.password == passAttemp) {
            return true;
        }
        else {
            return false;
        }
    };
    Customer = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [String, String, String, String, String, String])
    ], Customer);
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjdXN0b21lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQztJQVNJLGtCQUFZLEVBQVcsRUFBRSxTQUFrQixFQUFFLFFBQWlCLEVBQzFELEtBQWMsRUFBRSxXQUFvQixFQUFFLFFBQWlCO1FBQ3ZELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsK0JBQVksR0FBWjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7T0FFRztJQUNILDhCQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDBCQUFPLEdBQVAsVUFBUSxTQUFpQixFQUFFLFFBQWlCO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzdCLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCwyQkFBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILDJCQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7T0FFRztJQUNILDJCQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMkJBQVEsR0FBUixVQUFTLE1BQWM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGlDQUFjLEdBQWQsVUFBZSxJQUFZO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxnQ0FBYSxHQUFiLFVBQWMsVUFBa0I7UUFDNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQTdGUSxRQUFRO1FBRHBCLGlCQUFVLEVBQUU7O09BQ0EsUUFBUSxDQStGcEI7SUFBRCxlQUFDO0NBQUEsQUEvRkQsSUErRkM7QUEvRlksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyIHtcblxuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcbiAgICBwcml2YXRlIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgbGFzdE5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIGVtYWlsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwaG9uZU51bWJlcjogc3RyaW5nO1xuICAgIHByaXZhdGUgcGFzc3dvcmQ6IHN0cmluZ1xuXG4gICAgY29uc3RydWN0b3IoaWQ/OiBzdHJpbmcsIGZpcnN0TmFtZT86IHN0cmluZywgbGFzdE5hbWU/OiBzdHJpbmcsXG4gICAgICAgIGVtYWlsPzogc3RyaW5nLCBwaG9uZU51bWJlcj86IHN0cmluZywgcGFzc3dvcmQ/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xuICAgICAgICB0aGlzLmVtYWlsID0gZW1haWw7XG4gICAgICAgIHRoaXMucGhvbmVOdW1iZXIgPSBwaG9uZU51bWJlcjtcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgZmlyc3QgbmFtZSB0aGUgY3VzdG9tZXJcbiAgICAgKi9cbiAgICBnZXRGaXJzdE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlyc3ROYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhc3QgbmFtZSBvZiB0aGUgY3VzdG9tZXJcbiAgICAgKi9cbiAgICBnZXRMYXN0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5lbWFpbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBuYW1lIG9mIHRoZSBDdXN0b21lclxuICAgICAqIEBwYXJhbSBmaXJzdE5hbWUgY3VzdG9tZXIncyBmaXJzdCBuYW1lXG4gICAgICogQHBhcmFtIGxhc3ROYW1lIGN1c3RvbWVyJ3MgbGFzdCBuYW1lXG4gICAgICovXG4gICAgc2V0TmFtZShmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG4gICAgICAgIGlmIChsYXN0TmFtZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBlbWFpbCBvZiB0aGUgdXNlclxuICAgICAqL1xuICAgIGdldEVtYWlsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbWFpbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBjdXN0b21lcidzIGVtYWlsXG4gICAgICogQHBhcmFtIGVtYWlsIGN1c3RvbWVyJ3MgZW1haWxcbiAgICAgKi9cbiAgICBzZXRFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW1haWwgPSBlbWFpbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGN1c3RvbWVycyBwaG9uZSBudW1iZXJcbiAgICAgKi9cbiAgICBnZXRQaG9uZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5waG9uZU51bWJlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBjdXN0b21lcnMgcGhvbmUgbnVtYmVyXG4gICAgICogQHBhcmFtIG51bWJlciBjdXN0b21lcidzIHBob25lIG51bWJlclxuICAgICAqL1xuICAgIHNldFBob25lKG51bWJlcjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGhvbmVOdW1iZXIgPSBudW1iZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgdXNlcnMgcGFzc3dvcmRcbiAgICAgKiBAcGFyYW0gcGFzcyBjdXN0b21lcidzIHBhc3N3b3JkXG4gICAgICovXG4gICAgdXBkYXRlUGFzc3dvcmQocGFzczogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYXR0ZW1wdGVkIHBhc3N3b3JkIG1hdGNoZXMgdGhlIGV4c2lzdGluZyBvbmVcbiAgICAgKiBAcGFyYW0gcGFzc0F0dGVtcCBjdXN0b21lcidzIHBhc3N3b3JkIGF0dGVtcHRcbiAgICAgKi9cbiAgICBjaGVja1Bhc3N3b3JkKHBhc3NBdHRlbXA6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5wYXNzd29yZCA9PSBwYXNzQXR0ZW1wKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==