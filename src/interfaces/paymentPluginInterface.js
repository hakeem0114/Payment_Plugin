export default class PaymentPluginInterface{
    constructor(){
        if(this.constructor === PaymentPluginInterface){
            throw new TypeError('PaymentPluginInterface is an abstract class & cannot be instantianted \n Try inheriting it.')
        }
    }

    processPayment(paymentData){
        throw new TypeError('PaymentPluginInterface.processPayment is an abstract method and needs its own implementation in a new class')
    }
        
}