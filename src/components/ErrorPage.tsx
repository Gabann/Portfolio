import {isRouteErrorResponse, Link, useRouteError} from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        return (
            <>
                <h1>Error : {error.status}</h1>
                <p>{error.data}</p>
                <Link to={"/"}>Home</Link>
            </>
        );
    }
}

export default ErrorPage;
