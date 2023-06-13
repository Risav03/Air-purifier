import AboutUs from "./aboutus";

function Working(){
    return <div className="bg-blue-500 mt-10 rounded-t-3xl shadow-xl">
        <h2 className="text-center font-bold text-blue-200 md:text-[4vw] text-[10vw] pt-10">How it Works?</h2>

        <div className="w-[70%]  mx-auto text-white font-medium md:text-[1.5vw] text-[5vw] mt-10 mb-10">
            <ol className="list-disc sm:leading-10 leading-8" >
                <li className="mb-6"><b className="md:text-[1.6vw] text-[5.1vw]">Filtration of Particulate Matter:</b> <br></br>A layered mesh filter has been used for the removal of particulate matter (PM) of 2.5 microns, which is the causative agent of most respiratory problems. As a modification, HEPA or ULPA filters can be used for increased efficiency of removal of PM from 0.12-0.3 microns.</li>
                <li><b className="md:text-[1.6vw] text-[5.1vw]">Removal of Bacteria and Deactivation of Bacteria:</b> <br></br>In order to provide clean and germ-free air, UV LED strips are used for killing the bacteria in the air and deactivation of viruses. This further reduces the risks of developing air borne diseases.</li>
                <li><b className="md:text-[1.6vw] text-[5.1vw]">Removal of Volatile Organic Compounds (VOCs) and other Harmful Gases:</b> <br></br>Since the layered mesh filter or HEPA filter doesn’t filter out gases or 		      VOCs, the technology has to be combined with other technologies for 		      effective air quality regulation. In order to remove such gases, HEPA or ULPA filters have to be combined with chemical absorbents in series. <br></br>Common adsorbing media like activated carbon, alumina, silica gel and 	       zeolite are used.</li>
            </ol>
        </div>
        <AboutUs/>
    </div>
}

export default Working;