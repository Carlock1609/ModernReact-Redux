import { useEffect, useState } from 'react';


const Route = ({ path, children }) => {
    // sets currentpath to window location immiediatly. Then on any change in the useEffect ->
    // it also then sets path to currentPath
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        };



        // listening to popstate from Link helper function that dispatches event to window
        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
        // only runs one time
    }, []);

    return currentPath === path
    ? children
    : null;
};

export default Route;