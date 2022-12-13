const InputGroup = () => {
    return (
        <div className={'inputGroup'}>
            <p>Time to keep focus</p>
            <input type="number"/>
            <p>Pause duration</p>
            <input type="number"/>
            <p>Cycles</p>
            <input type="number"/>
            <button>Start</button>
        </div>

    )
}

export default InputGroup;