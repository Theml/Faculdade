import './Scrollable.css'
import leftArrow from './imagens/arrow_left.png'
import rightArrow from './imagens/arrow_right.png'
import { useState } from 'react'



const Scrollable = (props)=>{

    const [move, setMove] = useState(0,180)

    const leftRight = ()=> {
        for (move >= 0; move < 180;) {
            setMove(move+ 10)
        };
        // decrementar setMove - 10 e por um até chegar a 0
        
    }

    return(
        <div className='scrollable_container'>
            <button onClick={leftRight}><img src={leftArrow} alt='seta_esquerda'/></button>
            <div className='scrollable_body'>
                <div className='scrollable_move' style={{'left':move}} >#</div>
            </div>
            <button onClick={leftRight}><img src={rightArrow} alt='seta_direita'/></button>
        </div>
    )
}

export default Scrollable