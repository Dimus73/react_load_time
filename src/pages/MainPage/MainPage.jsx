import React from 'react';
import {useRouteLoadingTime} from "../../components/hooks/useRouteLoadingTime";
import {useComponentLoadTime} from "../../components/hooks/useComponentLoadTime";

const MainPage = () => {
    const startTime = useRouteLoadingTime();
    useComponentLoadTime(startTime);

    return (
        <div>
            <h1>Main Page</h1>
        </div>
    );
};

export default MainPage;