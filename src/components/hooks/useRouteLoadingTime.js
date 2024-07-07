import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";

export const useRouteLoadingTime = () => {
    const history = useHistory();
    const [startTime, setStartTime] = useState(Date.now());

    useEffect(() => {
        const unlisten = history.listen(() => {
            setStartTime(Date.now());
        });

        return () => {
            unlisten();
        };
    }, [history]);

    return startTime;
};