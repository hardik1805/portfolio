"use client";

import {FaLocationArrow} from "react-icons/fa6";

import {projects} from "@/data";
import {PinContainer} from "./ui/Pin";
import {useState} from "react";

const RecentProjects = () => {
    const [currentProjectId, setCurrentProjectId] = useState(0);

    return (
        <div className="py-20" id={"projects"}>
            <h1 className="heading">
                A small selection of{" "}
                <span className="text-purple">recent projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                {projects.map((item) => (
                    <div
                        className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[470px] w-[80vw]"
                        key={item.id}
                    >
                        <PinContainer
                            title={item.link}
                            href={item.link}
                            setCurrentProjectId={setCurrentProjectId}
                            currentProjectId={currentProjectId}
                            id={item.id}
                        >
                            <div
                                className="relative flex items-center justify-center sm:w-[470px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] ">
                                <div
                                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                    style={{backgroundColor: "#13162D"}}
                                >
                                    <img src="./bg.png" alt="bgimg"/>
                                </div>
                                <img
                                    src={item.img}
                                    alt="cover"
                                    style={{height: "97%", width: "97%"}}
                                    className="z-10 absolute bottom-0 rounded-2xl  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                />
                            </div>

                            <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1 pt-5">
                                {item.title}
                            </h1>

                            <p
                                className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2"
                                style={{
                                    color: "#BEC1DD",
                                    margin: "1vh 0",
                                }}
                            >
                                {item.des}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {item.iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{
                                                transform: `translateX(-${5 * index + 2}px)`,
                                            }}
                                            title={item.iconTitle[index]}
                                        >
                                            <img src={icon} alt="icon5" className="p-2"/>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center items-center">
                                    <a className="flex lg:text-xl md:text-xs text-sm text-purple" href={item.link}
                                       target={"_blank"}>
                                        Check Live Site
                                    </a>
                                    <FaLocationArrow className="ms-3" color="#CBACF9"/>
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;
