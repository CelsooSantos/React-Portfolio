"use client";
import { BannerIntroProps } from "@/types/types";
import { ReactTyped } from "react-typed";
import { Github, Linkedin, Mail } from 'lucide-react';

export default function BannerIntro({ intro, texts }: BannerIntroProps) {
  const curriculumPDF = "./sample-local-pdf.pdf";
  return (
    <div className="text-center w-full p-5 absolute flex flex-col justify-between items-center">
      <h1 className="text-3xl font-bold text-shadow-lg ">
        {intro}
      </h1>
      <ReactTyped
        className="text-4xl text-white-600 my-6 block"
        strings={texts}
        typeSpeed={50}
        backSpeed={30}
        loop
      >
      </ReactTyped>
      <a href={curriculumPDF} target="_blank" type="button">
        <button type="button" className="p-3 px-8 text-lg btn--primary rounded-md">Check my CV</button>
      </a>
      <div className="flex justify-center my-4 gap-4 h-[32]">
        <a href="https://github.com/CelsooSantos" className="icon-btn" target="_blank">
          <Github strokeWidth={1.5} className="w-full h-full"/>
        </a>
        <a href="mailto:santoscelso644@gmail.com" className="icon-btn" target="_blank">
          <Mail className="w-full h-full" strokeWidth={1.5}/>
        </a>
        <a href="https://www.linkedin.com/in/celso-santos-9a48892a1/" className="icon-btn" target="_blank">
          <Linkedin className="w-full h-full" strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
}
