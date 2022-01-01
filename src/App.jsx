import { useState } from 'react'
// files
import {sound909} from './data/soundData'
import './index.css'
// components
import Drum from './components/Drum'
const App = () => {
    const [sounds, setSounds] = useState(sound909)

    return (
        <div className='drums'>
            {sounds.map(sound => (
                <Drum key={sound.key} sound={sound} />
            ))}
        </div>
    )
}

export default App