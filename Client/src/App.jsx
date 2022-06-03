import React, { useState } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export const App = () => {
   return (
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
         <ParallaxLayer
            offset={0}
            speed={2.5}
            style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
         <p>Scroll down</p>
         </ParallaxLayer>
         <ParallaxLayer
            offset={1}
            speed={2}
            style={{ backgroundColor: "#ff6d6d" }}
             />

         <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               color: "white",
            }}>
            <p>Scroll up </p>
         </ParallaxLayer>
      </Parallax>
   );
}


export default App;
