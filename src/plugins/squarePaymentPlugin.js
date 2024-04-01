/* eslint-disable no-unused-vars */

//Interface Imports
import PaymentPluginInterface from '../interfaces/paymentPluginInterface'

export default class SquarePaymentPlugin extends PaymentPluginInterface{

    processPayment(paymentData){
        
        //POST request to the payment gateway API to create a payment intent
        //Will vary per gateway REST API
        // let url 
        // fetch(url,{
        //     method:'POST',
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(paymentData)
        // })
        //     .then((response)=>response.json())
        //     .then((data)=>{
        //         return true
        //         //Passed every Square transaction
        //     })
        //     .catch((err)=>{
        //         console.log(err)
        //         throw new Error('\n Failed Square payment intent')
        //     })
        return true
    }
}