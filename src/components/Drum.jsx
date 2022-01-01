import { useEffect, useRef } from "react"


const Drum = (props) => {
    const backChanger = useRef()
    const play = () => {
        backChanger.current.focus()
        new Audio(props.sound.sound).play()
    }
    useEffect(() => {
        document.addEventListener('keydown', e => {
            if(e.key === props.sound.key.toLowerCase()){
                play()
            }
        })
    }, [])
    
    return (
        <div className="drum">
            <button ref={backChanger} className="pad" onClick={play}>{props.sound.name.toUpperCase()}</button>
            <div className="key">{props.sound.key}</div>
        </div>
    )
}

export default Drum