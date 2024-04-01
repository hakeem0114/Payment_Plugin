// eslint-disable-next-line react/prop-types
export default function SquareForm({name,changedFormInput}){

    return(
        <>
            <div className="my-10 w-full p-6 bg-white rounded-md  shadow-indigo-700 shadow-md ">
                <p className="text-center uppercase text-gray-700 text-2xl font-bold ">-{name}-</p>

                <div className="mb-4">
                    <label 
                        htmlFor="name" 
                        className="block text-gray-700 font-bold mb-2">Square Username</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Name"
                        maxLength={30}
                        onChange={changedFormInput}
                        className="appearance-none border rounded-md w-full py-2 px-3 
                        text-gray-700 leading-tight focus:outline-none focus:border-indigo-950"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
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