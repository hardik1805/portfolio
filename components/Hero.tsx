import {TextGenerateEffect} from "./ui/TextGenerateEffect";
import React from "react";


const Hero = () => {
    return <div
        className="pb-20 pt-36 h-screen w-full bg-black-100 bg-dot-white/[0.2]  relative  flex justify-center flex-col items-center"
        id={''}>
        <div className="absolute w-full h-full pointer-events-none inset-0 flex items-center
             justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>

        <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
        />
        <TextGenerateEffect
            words="Hi! I'm Hardik a Frontend Developer based in London"
            className="text-center text-[18px] md:text-xl lg:text-2xl font-light"
        />
    </div>
}
export default Hero;
