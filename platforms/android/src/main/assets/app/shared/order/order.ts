import { Injectable } from "@angular/core";
import { OrderItem } from "../orderItem/orderItem";
import { PaymentMethod } from "../paymentMethod/paymentMethod";

@Injectable()
export class Order {

    private orders: OrderItem[];
    private payment: PaymentMethod;

    constructor(orders?: OrderItem[], payment?: PaymentMethod) {
        this.orders = orders;
        this.payment = payment;
    }

    getPaymentMethod(): PaymentMethod {
        return this.payment;
    }

}