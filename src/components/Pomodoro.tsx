import {useEffect, useState} from "react";
import {useTimer} from "react-timer-hook";

import Timer from "./Timer/Timer";
import InputGroup from "./InputGroup/InputGroup";

const Pomodoro = () => {
    const [timeSetting, setTimeSetting] = useState({time: 0, pauseDuration: 0, cycleCount: 0})
    const [expiryTimestamp, setExpiryTimestamp] = useState(new Date());

    const {
        seconds,
        minutes,
        hours,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({expiryTimestamp: expiryTimestamp, autoStart: false});

    useEffect(() => {
        const time = new Date();
        const secs = time.setSeconds(time.getSeconds() + timeSetting.time);
        setExpiryTimestamp(new Date(secs * 1000));
    }, [timeSetting]);

    return (
        <div>
            <h2>React JS Pomodoro time-management</h2>
            <InputGroup isRunning={isRunning}
                        setTimeSetting={setTimeSetting}/>
            <Timer timeData={{hours, minutes, seconds}}
                   isRunning={isRunning}
                   start={() => start()}/>
        </div>
    )
}

export default Pomodoro