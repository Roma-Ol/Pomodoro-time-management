type TimeSettingType = {
    time: number,
    pauseDuration: number,
    cycleCount: number,
}

type TimeData = {
    hours: number,
    minutes: number,
    seconds: number
}

export type TimeSettingObject = {
    timeData: TimeData,
    isRunning: boolean,
    start: () => void,
}

export type InputGroupProps = {
    isRunning: boolean,
    setTimeSetting: (newTimeSetting: TimeSettingType) => void,
}