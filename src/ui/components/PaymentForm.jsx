/* eslint-disable react/prop-types */
//React Imports 
import { useState } from "react";


//Sub Component Imports
import StripeForm from "./paymentForms/StripeForm";
import PayPalForm from "./paymentForms/PayPalForm";
import SquareForm from "./paymentForms/SquareForm";
import TestPayForm from "./paymentForms/TestPayForm";


export default function PaymentForm({selectedMethod, onSubmit}){

    const [formData, setFormData] = useState({})

    function handleFormChange(e){
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]:value 
        });
    }

    function handleSubmit(e){
        e.preventDefault()
        onSubmit(formData)
    }

    return(
        <form className="w-6/12" onSubmit={handleSubmit}>

            {selectedMethod === 'Stripe' && 
                (
                    <StripeForm
                        name={selectedMethod}
                        changedFormInput={handleFormChange}
                    />
                )
            }

            {selectedMethod === 'PayPal' && 
                (
                    <PayPalForm
                        name={selectedMethod}
                        changedFormInput={handleFormChange}
                    />
                )
            }

            {selectedMethod === 'Square' && 
                (
                    <SquareForm
                        name={selectedMethod}
                        changedFormInput={handleFormChange}
                    />
                )
            }

            {selectedMethod === 'TestPay' && 
                (
                    <TestPayForm
                        name={selectedMethod}
                        changedFormInput={handleFormChange}
                    />
                )
            }
            
        </form>
    )
}