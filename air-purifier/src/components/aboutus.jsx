import Team from "./team";
import comp from "../content/Company.jpeg"

function AboutUs(){
    return <div className="bg-blue-100 rounded-t-3xl">
        <h2 className="text-center font-bold text-blue-800 md:text-[4vw] text-[10vw] pt-10">About Us</h2>
        <div className="md:grid md:grid-flow-col md:grid-cols-2">
            <div>
            <p className="px-5 mt-10 md:text-[1.5vw] w-[90%] mx-auto text-[5vw] text-center sm:text-left leading-7 md:leading-10 font-semibold text-blue-400">Our company is dedicated to developing and delivering innovative air purification technologies and solutions that actively combat air pollution by efficiently identifying, capturing, and removing pollutants, allergens, and hazardous particles from the air. </p>
            <p className="px-5 mt-10 md:text-[1.5vw] w-[90%] mx-auto text-[5vw] text-center sm:text-left leading-7 md:leading-10 font-semibold text-blue-400">With a strong emphasis on improving air quality, our aim is to provide individuals, households, and communities with effective tools to mitigate the adverse effects of air pollution on respiratory health, promoting a healthier and cleaner environment for all.</p>
            </div>
            <img src={comp} className="sm:w-[50%] mt-10 w-[80%] mx-auto rounded-3xl my-auto"></img>
        </div>
        <Team/>
    </div>
}

export default AboutUs;