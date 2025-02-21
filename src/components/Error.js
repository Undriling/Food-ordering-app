import {useRouteError} from 'react-router';


const Error = () => {
    const err = useRouteError();
    // console.log(err)
    return (
        <div className="justify-items-center">
            <h1 className="my-4 text-5xl">🚨</h1>
            <h1 className='my-4 font-medium text-2xl font-serif'>Oops!!!!!</h1>
            <h2 className='my-4 font-medium text-2xl font-serif'>Something went wrong</h2>
            <h3 className='my-4 font-medium text-2xl font-serif'>🚨{err.status}: {err.statusText}🚨</h3>
            <p className='my-4 font-medium text-[20px] font-serif'>Please try again or check your internet connection...</p>
        </div>
    )
}

export default Error;