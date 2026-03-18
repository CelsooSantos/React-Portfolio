"use client";
import { BannerIntroProps } from "@/types/types";
import { ReactTyped } from "react-typed";
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function BannerIntro({ intro, texts }: BannerIntroProps) {
  const curriculumPDF = "./curriculo.pdf";
  const bannerT = useTranslations('Banner');
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
      <div className="hidden"> { bannerT('text1') }, { bannerT('text2') }, { bannerT('text3') } </div>
      <a href={curriculumPDF} target="_blank" type="button">
        <button type="button" className="p-3 px-8 text-lg btn--primary rounded-md">{ bannerT('button') }</button>
      </a>
      <div className="flex justify-center my-4 gap-4 h-[32]">
        <a href="https://github.com/CelsooSantos" className="icon-btn" target="_blank" aria-label={bannerT('label1')}>
          <Github strokeWidth={1.5} className="w-full h-full"/>
        </a>
        <a href="mailto:santoscelso644@gmail.com" className="icon-btn" target="_blank" aria-label={bannerT('label2')}>
          <Mail className="w-full h-full" strokeWidth={1.5}/>
        </a>
        <a href="https://www.linkedin.com/in/celso-santos-9a48892a1/" className="icon-btn" target="_blank" aria-label={bannerT('label3')}>
          <Linkedin className="w-full h-full" strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
}
