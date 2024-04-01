// eslint-disable-next-line react/prop-types
export default function StripeForm({name,changedFormInput}){

    return(
        <>
            <div className="my-10 w-full p-6 bg-white rounded-md  shadow-indigo-700 shadow-md ">
                <p className="text-center uppercase text-gray-700 text-2xl font-bold ">-{name}-</p>

                <div className="mb-4">
                    <label 
                        htmlFor="cardNumber" 
                        className="block text-gray-700 font-bold mb-2">Card Number</label>
                    <input
                        type="text"
                        name="cardNumber"
                        id="cardNumber"
                        placeholder="Card Number"
                        minLength={5} 
                        maxLength={20}
                        onChange={changedFormInput}
                        className="appearance-none border rounded-md w-full py-2 px-3 
                        text-gray-700 leading-tight focus:outline-none focus:border-indigo-950"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="expiryDate" className="block text-gray-700 font-bold mb-2">Expiry Date</label>
                    <input
                        type="text"
                        name="expiryDate"
                        id="expiryDate"
                        placeholder="DD/MM/YYYY"
                        pattern="\d{2}/\d{2}/\d{4}"
                        onChange={changedFormInput}
                        className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 
                        leading-tight focus:outline-none focus:border-indigo-950"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="cvv" className="block text-gray-700 font-bold mb-2">CVV</label>
                    <input
                        type="text"
                        name="cvv"
                        id="cvv"
                        placeholder="CVV"
                        pattern="\d{3}"
                        onChange={changedFormInput}
                        className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700
                         leading-tight focus:outline-none focus:border-indigo-950"
                         required
                    />
                </div>

                <div className="text-center">
                    <button 
                        className="bg-indigo-700 hover:bg-indigo-950 text-white font-bold py-2 px-4 
                        rounded-lg "
                        type="submit"
                    >
                        Submit
                    </button>
                </div>

            </div>
        </>
    )
}