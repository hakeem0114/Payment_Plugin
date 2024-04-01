//React Imports 
import { useState } from "react";

//Component Imports
import Card from "../components/Card";
import PaymentForm from "../components/PaymentForm";
import Confirmation from '../components/Confirmation'
import Failure from '../components/Failure'

//Plugin Factory Import
import PaymentPluginFactory from "../../factories/paymentPluginFactory.js";

export default function Home(){

  const [selectedMethod, setSelectedMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState(null);


   function handleSelected(method){
      setSelectedMethod(method)
   }
   async function handlePaymentProcess(receivedDataFromForm){
      try{
        const useNewInstanceOfPlugin = selectedMethod && PaymentPluginFactory.createPlugin(selectedMethod)
        const processNewPayment = await useNewInstanceOfPlugin.processPayment(receivedDataFromForm)
        setPaymentDetails(processNewPayment)
      }
      catch(err){
        console.log(err)
        setPaymentDetails('fail')
      }
   }
    
  return (
    <main className="w-full h-fit 
                 text-zinc-200     
                  mx-auto flex flex-col justify-center items-center"
    >
        <p className="mt-10 text-xl"> - Choose your payment method -</p>
        
        <article className="mt-10 mb-10 md:mb-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
           <Card
              onCardClick={handleSelected}
           />
        </article>

        {!paymentDetails && handleSelected &&
          <PaymentForm
            selectedMethod = {selectedMethod}
            onSubmit={handlePaymentProcess}
          />
        }

        {paymentDetails === true
            ?<Confirmation/>
            :paymentDetails === 'fail'
                  ?<Failure/>
                  :null
        }
    </main>
  )
}
