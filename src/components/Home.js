import React, { useRef, useState } from 'react'
import {animate, motion} from "framer-motion"
import Typewriter from "typewriter-effect"
import {BsArrowUpRight, BsChevronBarDown, BsChevronDown} from "react-icons/bs"
import me from "../assets/vg.png"

const Home = () => {


const clientCount = useRef(null);//its also a hook

const  animationClientsCount =()=>{
    animate(0,100,{
        duration: 2 ,//1sec
        onUpdate:(v)=>
        {
            clientCount.current.textContent = v.toFixed();
        }
    
    })

}


const projectsCount = useRef(null);


const  animationProjectCounts =()=>{
    animate(0,500,{
        duration: 2 ,//1sec
        onUpdate:(v)=>
        {
            projectsCount.current.textContent = v.toFixed();
        }
    
    })

}

    const animation ={
        h1:{
            initial:{
    x:"-100%",
    opacity:0,
    
},
whileInView:{
    x:0,
    opacity:1
}

},

button:{
            initial:{
            y:"-100%",
            opacity:0,
},
            whileInView:{
             y:0, 
            opacity:1
}



        }

    }
  return (
  <div id='home'>

<section>
    <div>
<motion.h1  {...animation.h1}>
    Hi, I Am<br/>Tushar 
</motion.h1>
<Typewriter options={{
    strings:["A App Developer","A Web Developer","A Game Developer"],
    autoStart:true,
    loop:true,
    // cursor:" " //isse | wala line hat haye ga
    wrapperClassName:"typewriterpara"


}}/>

<div>
    <a href="mailto:tk062005@gmail.com">Hire Me</a>
    <a href="#work">
              Projects  <BsArrowUpRight />
            </a>
</div>


<article>
<p>
    + 
<motion.span whileInView={animationClientsCount} ref={clientCount}></motion.span>
</p>
<span>
    Clients Worldwide
</span>

</article>


<aside>
<article>
    <p>+
    <motion.span whileInView={animationProjectCounts} ref={projectsCount}></motion.span></p>
<span>
    Projects Made
</span>
</article>

<article data-speciall>
    <p>Contact</p>
<span>
tk062005@gmail.com
</span>
</article>
</aside>


    </div>
</section>


<section>
    <img src={me} />
</section>
<BsChevronDown/>
  </div>
    )
}

export default Home