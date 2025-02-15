import User from './AboutFn';
// import UserClass from './AboutClass';
const About = () => {


    return (
        <div className="my-[90px] justify-items-center">
            <h1 className="font-medium text-4xl font-serif">About US</h1>
            <div className="userCard-container w-52 p-1.5 m-2.5 my-[30px] mx-4 rounded-2xl shadow-[0_0_3px_#d4ecff] bg-[#fff] overflow-hidden transition-all duration-200 ease-in-out hover:shadow-[2px_2px_5px_#bebdbd] cursor-pointer bg-white-#f9fdff hover:transform -translate-y-0.5">
                <User name={"Undriling"} location={"Guwahati, Assam"} contact={"abc@gmail.com"}/>
            </div>
        </div>
    )
}

export default About;