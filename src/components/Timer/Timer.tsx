import {FC} from "react";
import {TimeSettingObject} from "../../../types";

const Timer: FC<TimeSettingObject> = ({timeData, isRunning, start}) => {
    const {hours, minutes, seconds} = timeData;

    return (
        <>
            <h3>Timer</h3>
            {isRunning
                ? <>
                    <div>{hours}h</div>
                    <div>{minutes}m</div>
                    <div>{seconds}s</div>
                </>
                : <>Not running</>
            }
            <button onClick={start}>Start</button>
        </>
    )
}

export default Timer