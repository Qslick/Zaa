import { Injectable } from "@angular/core";

Injectable()
export class PaymentMethod{

    private id: string;
    private customerLookup: string;
    private type: string;
    private cardNumber: string;

    constructor(id: string, customerLookup: string, type: string, cardNumber: string){
        this.id = id;
        this.customerLookup = customerLookup;
        this.type = type;
        this. cardNumber = cardNumber;
    }

    getId(): string{
        return this.id;
    }

    setId(id: string): void {
        this.id = id;
    }

    getCustomerLookup(): string {
        return this.customerLookup;
    }

    setCustomerLookup(customerLookup: string): void {
        this.customerLookup = customerLookup;
    }

    getType(): string {
        return this.type;
    }

    setType(type: string): void {
        this.type = type;
    }

    getCardNumber(): string {
        return this.cardNumber;
    }

    setCardNumber(cardNumber: string): void {
        this.cardNumber = cardNumber;
    }



}