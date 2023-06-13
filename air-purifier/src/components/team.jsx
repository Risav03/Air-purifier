import Footer from "./footer";

function Team(){
    return <div className="bg-white rounded-t-3xl mt-10">
        <h2 className="text-center font-bold text-blue-500 md:text-[4vw] text-[10vw] pt-10">Team</h2>
        <div className="grid grid-flow-cols grid-cols-3">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <Footer/>
    </div>
}

export default Team;