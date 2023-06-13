import Product from "../content/Product.jpg"
import heading from "../content/heading.png"

function Open(){
    return <div>
        <div className="shadow-xl rounded-3xl mx-auto">
            <img src={heading} className="w-[15%] mx-auto"></img>
        </div>
        <div className="grid md:grid-flow-col md:grid-cols-2 md:mt-[3rem] mt-10">
            <img src={Product} className="w-[80%] max-[768px]:w-[90%] shadow-xl mx-auto rounded-3xl my-auto"></img>
            <div>
                <div className="text-center bg-blue-100 rounded-3xl md:w-[80%] w-[90%] mt-10 mx-auto font-montserrat md:p-10 pt-5 px-4 pb-5 shadow-xl">
                    <h1 className="md:text-[3vw] text-blue-500 text-[10vw] font-bold">Air Quality Regulator</h1>
                    <h2 className="text-blue-700 font-semibold md:text-[2vw] text-[7vw] md:mt-5 mt-10">Solar Powered IoT  based Air Purification System</h2>
                </div>
                <div className="bg-blue-100 rounded-3xl md:w-[80%] w-[90%] mx-auto pt-1 pb-10 mt-4 shadow-xl">
                    <h3 className="font-semibold md:text-[2.4vw] text-[7vw] text-blue-500  mt-10 text-center">Introduction</h3>
                    <p className="w-[80%] mx-auto md:text-[1.3vw] text-center text-[4.5vw] mt-2 font-medium">It is a renewable solar energy-based air purifier providing a clean, germ-free, particle-free air supply. It involves IoT based Air Quality Index sensing, regulation, monitoring and analysis.</p>
                </div>
            </div>
        </div>
    </div>
}

export default Open;