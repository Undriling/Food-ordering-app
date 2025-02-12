import {useRouteError} from 'react-router';


const Error = () => {
    const err = useRouteError();
    console.log(err)
    return (
        <div className="error-container">
            <h1>🚨</h1>
            <h1>Oops!!!!!</h1>
            <h2>Something went wrong</h2>
            <h3>🚨{err.status}: {err.statusText}🚨</h3>
            <p>Please try again or check your internet connection...</p>
        </div>
    )
}

export default Error;