import React from 'react'
import { useRef } from 'react';
import sky from './images/sky.gif'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
const Exit = () => {
  const ref = useRef();

  return (
    
<div className='Bone'>


    <Parallax pages={2} ref={ref}>
    <div className='body'>
        <ParallaxLayer className='parallax1'
        offset={0}
        speed={1}
        factor={0.9} style={{
            backgroundImage: `url(${sky})`,
            backgroundSize: 'cover',
        }}>
            <h1 className='head'>
        you've been logged out!
          </h1>
          
        </ParallaxLayer>
      
 
  <ParallaxLayer 
   offset={.99}
   speed={1}
   factor={.10} 
   className='section2'>
    <h1> Learning about the game </h1>
    
  
    <h4> Great you had fun playing the game, Comeback whenever you can. We'll keep in proving the game as much as we can at the bottom of the page you can provide us feedback. Thank you for playing Dungeon Disco </h4>
    
  </ParallaxLayer>
 
 <ParallaxLayer
    offset={1.0}
    speed={.5}
    factor={.50} 
     className='parallax2'> 
{/* img */}
 </ParallaxLayer> 

<ParallaxLayer className='section3'>
<h1>Going back  again?  </h1>
<button className='Enter_btn'> Entrance</button>
</ParallaxLayer> 

<ParallaxLayer className='parallax3'> 
  {/* img  */}
 </ParallaxLayer> 

 <div className='footer'>
 Copyright © 2020 - All rights Reserved Leigh, Carlos, Sam, Eric & Lindsey
    </div>
    
    </div>
      </Parallax>
</div>
  );
}


export default Exit