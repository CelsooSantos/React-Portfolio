"use client";
import Image from "next/image";
import { ProjectProps } from "@/types/types";
import { useState } from "react";
import { motion } from "motion/react";
import { div } from "motion/react-client";

/**
 * "Formação" = 1,
 * "Experiências Profissionais" = 2, 
 * "Projetos Pessoais" = 3
 */

function getCat(option: number) {
    switch (option) {
        case 1:
            return "project-card--primary"
        case 2:
            return "project-card--secondary"
        case 3:
            return "project-card--accent"
        default:
            return "project-card--default"
    }
}

export default function Project({ title, src, date, cat, skills }: ProjectProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className={("h-50 rounded-xl p-2 project-card ").concat(getCat(cat))}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ perspective: "1000px" }} >
            <motion.div className="relative w-full h-full flex items-center justify-center text-center"
                animate={{ rotateY: hovered ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    transformStyle: "preserve-3d", // necessary to keep front and back
                }}>
                {/* FRONT */}
                <div
                    className="absolute w-full h-full flex items-center justify-center"
                    style={{ backfaceVisibility: "hidden" }}>
                    <div className="w-1/2 h-full relative">
                        <Image
                            className="object-contain mx-auto p-4 rounded-xl"
                            src={src}
                            alt={title}
                            fill={true}
                            priority
                        />
                    </div>
                    <div className="w-1/2">
                        <div>{title}</div>
                        <br />
                        <div>{date}</div>
                    </div>
                </div>

                {/* BACK */}
                <div
                    className="absolute w-full h-full flex flex-wrap items-center justify-center"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >

                    {
                        skills.length > 0 ? (
                            <ul className="columns-3">
                                {skills.map((element, index) => (
                                    <li key={index} className="">
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