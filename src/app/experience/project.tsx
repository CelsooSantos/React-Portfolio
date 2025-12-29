"use client";
import Image from "next/image";
import { ProjectProps } from "@/types/types";
import { useState } from "react";
import { animate, AnimatePresence, motion } from "motion/react";

/**
 * "Formação" = 1,
 * "Experiências Profissionais" = 2, 
 * "Projetos Pessoais" = 3
 */

function getCat(option: number) {
    switch (option) {
        case 1:
            return "project-card--secondary"
        case 2:
            return "project-card--primary"
        default:
            return "project-card--default"
    }
}

export default function Project({ title, subtitle, src, date, cat, skills }: ProjectProps) {
    const [isClicked, setIsClicked] = useState(false);

    
    const handleClick = () => {
        setIsClicked(current => !current);
    }

    function handleMouseEnter() {
        setIsClicked(true);
    }

    function handleMouseLeave() {
        setIsClicked(false)
    }

    return (
        <div className={("rounded-xl p-2 project-card text-center relative ").concat(getCat(cat))}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{  }} >
            <motion.div className="relative w-full md:h-full flex items-center justify-center p-2"
                animate={{ rotateY: isClicked ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    transformStyle: "preserve-3d", // necessary to keep front and back
                }}>
                {/* FRONT */}
                <div
                    className="front-card w-full h-full flex items-center justify-center flex-wrap sm:flex-nowrap "
                    style={{ 
                        backfaceVisibility: "hidden",
                        // animate={{ rotateY: hovered ? 180: 0 }},
                        // transform: isClicked ? "rotateY(180deg)" : "rotateY(0deg)" ,
                    }}>
                    <div className="w-2/3 sm:w-1/2 relative aspect-4/3">
                        <Image
                            className="object-contain mx-auto p-4 rounded-xl"
                            src={src}
                            alt={title}
                            fill={true}
                            priority
                        />
                    </div>
                    <div className="w-full sm:w-1/2">
                        <div className="project-card-title text-lg">{title}</div>
                        <div className="project-card-subtitle text-sm">{subtitle}</div>
                        <br />
                        <div className="project-card-date">{date}</div>
                    </div>
                </div>

                {/* BACK */}
                <div
                    className="back-card absolute w-full h-full flex flex-wrap items-center justify-center"
                    style={{
                        top: 0,
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)" ,
                    }}
                >

                    {
                        skills.length > 0 ? (
                            <ul className="flex flex-wrap">
                                {skills.map((element, index) => (
                                    <li key={index} className="w-1/3 grow">
                                        {element}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="">Nothing here yet...</div>
                        )
                    }
                </div>
            </motion.div>
        </div>
    )
}