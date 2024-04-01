//Payment Plugin Imports
import StripePaymentPlugin from "../plugins/stripePaymentPlugin";
import PaypalPaymentPlugin from "../plugins/paypalPaymentPlugin";
import SquarePaymentPlugin from '../plugins/squarePaymentPlugin'

export default class PaymentPluginFactory{

    static createPlugin(method){

        switch(method){
            case 'Stripe':
                return new StripePaymentPlugin();
            case 'Paypal':
                return new PaypalPaymentPlugin();
            case 'Square':
                return new SquarePaymentPlugin();
            //New methods here

            default:
                throw new Error('Unregistered payment method selected');
        }
    }
}