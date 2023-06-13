import AboutUs from "./aboutus";

function Working(){
    return <div className="bg-blue-500 mt-10 rounded-t-3xl shadow-xl">
        <h2 className="text-center font-bold text-blue-200 md:text-[4vw] text-[10vw] pt-10">How it Works?</h2>

        <div className="w-[70%]  mx-auto text-white font-medium md:text-[1.5vw] text-[5vw] mt-10 mb-10">
            <ol className="list-disc sm:leading-10 leading-8" >
                <li className="mb-6">The air goes through a <b>three-step filtration </b>procedure to ensure the supply of clean and good-quality air.</li>
                <li>Filtration of Particulate Matter, Removal of Bacteria and Deactivation of Bacteria and Removal of Volatile Organic Compounds (VOCs) and other Harmful Gases are done to provide clean air</li>
            </ol>
        </div>
        <AboutUs/>
    </div>
}

export default Working;