import {FC, useRef} from "react";
import {InputGroupProps} from "../../../types";

const InputGroup: FC<InputGroupProps> = ({
    isRunning,
    setTimeSetting,
}) => {
    const timeRef = useRef(null);
    const pauseDurRef = useRef(null);
    const cycleCountRef = useRef(null);

    function operateTime() {
        const timeSetting = {
            time: timeRef.current.value === '' ? 0 : +timeRef.current.value,
            pauseDuration: pauseDurRef.current.value === '' ? 0 : +pauseDurRef.current.value,
            cycleCount: cycleCountRef.current.value === '' ? 0 : +cycleCountRef.current.value,
        }

        setTimeSetting(timeSetting);
    }

    return (
        <div className={'inputGroup'}>
            <p>Time to keep focus</p>
            <input onKeyUp={operateTime} type="number" ref={timeRef} placeholder={'minutes'}/>
            <p>Pause duration</p>
            <input onKeyUp={operateTime} type="number" ref={pauseDurRef} placeholder={'minutes'}/>
            <p>Cycles</p>
            <input onKeyUp={operateTime} type="number" ref={cycleCountRef} placeholder={'minutes'}/>
        </div>
    )
}

export default InputGroup;