import {FaLocationArrow} from "react-icons/fa6";

import MagicButton from "./MagicButton";
import {Spotlight} from "./ui/Spotlight";
import {TextGenerateEffect} from "./ui/TextGenerateEffect";
import {LampContainer} from "@/components/ui/lamp";
import {FlipWords} from "./ui/flip-words"
import {motion} from "framer-motion";
import {cn} from "@/lib/utils";
import React from "react";

// const Hero = () => {
//   return (
//     <div className="pb-20 pt-36">
//       {/**
//        *  UI: Spotlights
//        *  Link: https://ui.aceternity.com/components/spotlight
//        */}
//       <div>
//         <Spotlight
//           className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
//           fill="white"
//         />
//         <Spotlight
//           className="h-[80vh] w-[50vw] top-10 left-full"
//           fill="purple"
//         />
//         <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
//       </div>
//
//       {/**
//        *  UI: grid
//        *  change bg color to bg-black-100 and reduce grid color from
//        *  0.2 to 0.03
//        */}
//       <div
//         className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
//        absolute top-0 left-0 flex items-center justify-center"
//       >
//         {/* Radial gradient for the container to give a faded look */}
//         <div
//           // chnage the bg to bg-black-100, so it matches the bg color and will blend in
//           className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
//          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
//         />
//       </div>
//
//       <div className="flex justify-center relative my-20 z-10">
//         <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//           <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
//             Dynamic Web Magic with Next.js
//           </p>
//           <TextGenerateEffect
//             words="Transforming Concepts into Seamless User Experiences"
//             className="text-center text-[40px] md:text-5xl lg:text-6xl"
//           />
//
//           <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
//             Hi! I&apos;m Adrian, a Next.js Developer based in Croatia.
//           </p>
//
//           <a href="#about">
//             <MagicButton
//               title="Show my work"
//               icon={<FaLocationArrow />}
//               position="right"
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

const Hero = () => {
    return <div className="pb-20 pt-36">
        <LampContainer>
            <motion.div
                initial={{opacity: 0.5, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                <TextGenerateEffect
                    words="Transforming Concepts into Seamless User Experiences"
                    className="text-center text-[40px] md:text-5xl lg:text-6xl"
                />
            </motion.div>
            <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-blue-100">
                Hi! I&apos;m Hardik, a<FlipWords words={["Frontend", "Full stack", `Desktop App`]}/>Developer based in
                London.
            </div>
        </LampContainer>
    </div>
}
export default Hero;
