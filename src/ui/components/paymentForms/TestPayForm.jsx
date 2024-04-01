// eslint-disable-next-line react/prop-types
export default function TestPayForm({name}){

    return(
        <>
            <div className="my-10 w-full p-6 bg-white rounded-md  shadow-indigo-700 shadow-md ">
                <p className="text-center uppercase text-gray-700 text-2xl font-bold ">-{name}-</p>

                <p className="text-center text-amber-700 font-bold mt-5">Try to integrate this test plugin</p>
            </div>
        </>
    )
}