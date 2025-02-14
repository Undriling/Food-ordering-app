import User from './AboutFn';
// import UserClass from './AboutClass';
const About = () => {


    return (
        <div className="about-container">
            <h1>About US</h1>
            <div className='userCard-container'>
                <User name={"Undriling"} location={"Guwahati, Assam"} contact={"abc@gmail.com"}/>
            </div>
        </div>
    )
}

export default About;