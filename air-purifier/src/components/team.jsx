import Footer from "./footer";
import Manka from "../content/Soumanka.jpeg"
import meye1 from "../content/meye1.jpeg"
import meye2 from "../content/meye2.jpeg"
import linkedIn from "../content/linkedIn.png"


function Team(){
    return <div className="bg-white rounded-t-3xl mt-10">
        <h2 className="text-center font-bold text-blue-500 md:text-[4vw] text-[10vw] pt-10">Team</h2>
        <div className="grid md:grid-flow-cols gap-10 md:grid-cols-3 text-center mx-auto sm:w-[70%] mt-10 mb-28">

            <div className="bg-blue-300 rounded-3xl w-[65%] sm:w-[85%] mx-auto p-6 border-[2px] border-blue-500 shadow-2xl">
                <img alt="Soumanka Sarkar" src={Manka} className="w-[60%] mx-auto rounded-full border-[3px] border-white"></img>
                <h3 className="text-blue-500 font-bold md:text-[1.3vw] mt-4 text-[4.5vw]">Soumanka Sarkar</h3>
                <h4 className="text-white font-semibold text-[4vw] md:text-[1.2vw]">CEO</h4>
                <a href="https://www.linkedin.com/in/soumanka-sarkar-012762232/"><img src={linkedIn} className="w-[15%] mx-auto mt-2"></img></a>
            </div>


            <div className="bg-blue-300 rounded-3xl w-[65%] sm:w-[85%] mx-auto p-6 border-[2px] border-blue-500 shadow-2xl">
                <img alt="Soumanka Sarkar" src={meye2} className="w-[60%] mx-auto rounded-full border-[3px] border-white"></img>
                <h3 className="text-blue-500 font-bold md:text-[1.3vw] mt-4 text-[4.5vw]">Anushka Ganguly</h3>
                <h4 className="text-white font-semibold text-[4vw] md:text-[1.2vw]">COO</h4>
                <a href="https://www.linkedin.com/in/anushka-ganguly-b3b1bb25a/?originalSubdomain=in"><img src={linkedIn} className="w-[15%] mx-auto mt-2"></img></a>
            </div>

            <div className="bg-blue-300 rounded-3xl w-[65%] sm:w-[85%] mx-auto p-6 border-[2px] border-blue-500 shadow-2xl">
                <img alt="Soumanka Sarkar" src={meye1} className="w-[60%] mx-auto rounded-full border-[3px] border-white"></img>
                <h3 className="text-blue-500 font-bold md:text-[1.3vw] mt-4 text-[4.5vw]">Aahana Chowdhury</h3>
                <h4 className="text-white font-semibold text-[4vw] md:text-[1.2vw]">CTO</h4>
                <a href="https://www.linkedin.com/in/aahana-chowdhury-522837274"><img src={linkedIn} className="w-[15%] mx-auto mt-2"></img></a>
            </div>

        </div>
        <Footer/>
    </div>
}

export default Team;