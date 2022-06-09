import React from 'react'
import {Link} from 'react-router-dom'
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import dungeon from './images/dungeon.gif' 
import { Button, ButtonGroup, color } from '@chakra-ui/react'

export const intro = () => {
  return (
    <Parallax pages={1} style={{ top: "0", left: "0" }}>
        
   <ParallaxLayer
      offset={0}
     
      style={{
        backgroundImage:`url(${dungeon})`,

        height:'auto',
        backgroundSize:`cover`,
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
      }}
   >
      </ParallaxLayer>

      <ParallaxLayer> 
     <h1 style={{color:'	#deb887',
                display:'flex',
                margin:'30px',
                marginBottom:'20rem',
                  
                  fontSize:'3rem',
              fontFamily:'MedievalSharp, cursive',
    }}>Disco at the Dungeon </h1>
  <p>
beware Danger up ahead
  <span className='span'
  style={{
   fontFamily:'MedievalSharp, cursive',
  }} >
   Enter if you dare
  </span>
  &mdash; some have lost and not return &mdash;
</p>
     
     <div style={{
        display:'flex',
        alignItems: "center",
justifyContent:'center'
     }}> 

<Link to='/login'>

<button className='intro_btn' style={{
              fontFamily:'MedievalSharp, cursive',

}} >
   Enter
</button>
</Link>
   </div>
   </ParallaxLayer>   

</Parallax>
  )
}

export default intro;