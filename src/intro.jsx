import React from 'react'

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
                  fontFamily:'Cursive',
                  fontSize:'3rem'
    }}>Dungeon Disco</h1>
     <h2 style={{
                fontFamily:'fantasy',
                fontSize:'2.5rem',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin:'20px',
                marginBottom:'10rem',
                color:'	#dc143c',
     }}>Enter at your own risk! </h2>
     <div style={{
        display:'flex',
        alignItems: "center",
justifyContent:'flex-end'
     }}> 
<button style={{marginRight:'8rem',
background: 'transparent',
padding:'20px 45px',
color:'white',
outlineStyle:'double',
outlineColor:'brown',
fontSize:'1.2rem',
fontFamily:'fantasy'
}}>
   Enter
</button>
   </div>
   </ParallaxLayer>   

</Parallax>
  )
}

export default intro;